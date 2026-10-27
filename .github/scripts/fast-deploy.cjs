const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const ftp = require('basic-ftp');

/**
 * Hostname Sanitizer
 * Strips protocols, ports, trailing slashes and whitespace
 */
function sanitizeHost(input) {
  if (!input) return '';
  let host = input.trim();
  // Strip protocol prefix (ftp://, ftps://, sftp://, https://, http://)
  host = host.replace(/^(ftp|ftps|sftp|https?):\/\//i, '');
  // Strip any trailing path or query
  host = host.split('/')[0].split('?')[0];
  // Strip port if someone wrote hostname:21
  if (host.includes(':')) {
    host = host.split(':')[0];
  }
  return host.trim();
}

/**
 * Template for server-side auto-extraction script
 */
function getExtractPhpScript(secretToken) {
  return `<?php
/**
 * Fast ZIP Auto-Extract & Cleanup Script
 * Automated ZIP-based CI/CD Pipeline
 */

// Suppress error output so JSON is not corrupted
error_reporting(0);
ini_set('display_errors', '0');

// Headers
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

$expectedToken = '${secretToken}';
$token = isset($_REQUEST['token']) ? trim($_REQUEST['token']) : '';

if (empty($expectedToken) || empty($token) || !hash_equals($expectedToken, $token)) {
    http_response_code(403);
    echo json_encode([
        'status' => 'error',
        'message' => 'Forbidden: Invalid or missing deployment token'
    ]);
    exit;
}

$zipPath = __DIR__ . '/deploy.zip';
$extractPath = __DIR__;

if (!file_exists($zipPath)) {
    http_response_code(404);
    echo json_encode([
        'status' => 'error',
        'message' => 'deploy.zip archive not found in ' . $extractPath
    ]);
    exit;
}

if (!class_exists('ZipArchive')) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'PHP ZipArchive extension is not enabled on this server.'
    ]);
    exit;
}

$zip = new ZipArchive();
$res = $zip->open($zipPath);

if ($res === true) {
    // Extract everything to target directory
    $extracted = $zip->extractTo($extractPath);
    $filesCount = $zip->numFiles;
    $zip->close();

    if ($extracted) {
        // 1. Delete the deploy.zip archive
        @unlink($zipPath);

        // 2. Self-destruct this deploy_extract.php script after response completes
        register_shutdown_function(function() {
            @unlink(__FILE__);
        });

        http_response_code(200);
        echo json_encode([
            'status' => 'success',
            'message' => 'Deployment extracted successfully!',
            'files_extracted' => $filesCount,
            'archive_cleaned' => !file_exists($zipPath),
            'timestamp' => date('Y-m-d H:i:s T')
        ]);
        exit;
    } else {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => 'ZipArchive::extractTo failed. Check directory write permissions.'
        ]);
        exit;
    }
} else {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to open deploy.zip. Error code: ' . $res
    ]);
    exit;
}
`;
}

async function runDeploy() {
  const overallStart = Date.now();
  console.log('====================================================');
  console.log('🚀 Fast ZIP CI/CD Auto-Deploy to Hostinger');
  console.log('====================================================');

  const rawHost = process.env.FTP_SERVER || '';
  const sanitizedHost = sanitizeHost(rawHost);
  const user = (process.env.FTP_USERNAME || '').trim();
  const password = (process.env.FTP_PASSWORD || '').trim();
  const port = parseInt(process.env.FTP_PORT || '21', 10);
  const siteUrl = (process.env.SITE_URL || 'https://alirapharmaceuticals.com').replace(/\/+$/, '');
  const extractUrl = (process.env.EXTRACT_URL || `${siteUrl}/deploy_extract.php`).trim();

  if (!sanitizedHost) {
    console.error('❌ Error: FTP_SERVER secret is empty or missing!');
    process.exit(1);
  }
  if (!user) {
    console.error('❌ Error: FTP_USERNAME secret is empty or missing!');
    process.exit(1);
  }
  if (!password) {
    console.error('❌ Error: FTP_PASSWORD secret is empty or missing!');
    process.exit(1);
  }

  console.log(`[Host Sanitizer] Cleaned Hostname: "${sanitizedHost}" (Port: ${port})`);
  console.log(`[Credentials] FTP User: "${user}"`);

  // Verify deploy.zip exists
  const zipPath = path.resolve('deploy.zip');
  if (!fs.existsSync(zipPath)) {
    console.error(`❌ deploy.zip not found at: ${zipPath}`);
    process.exit(1);
  }
  const zipSizeMB = (fs.statSync(zipPath).size / (1024 * 1024)).toFixed(2);
  console.log(`📦 Found deploy.zip archive (${zipSizeMB} MB)`);

  // Generate secure one-time deployment token & deploy_extract.php
  const deployToken = crypto.randomBytes(24).toString('hex');
  const phpPath = path.resolve('deploy_extract.php');
  fs.writeFileSync(phpPath, getExtractPhpScript(deployToken), 'utf8');
  console.log(`🔑 Generated secure one-time extraction script: deploy_extract.php`);

  const client = new ftp.Client(60000); // 60s timeout
  client.ftp.verbose = false;

  let connected = false;

  // Step 1: Connect with FTPS (TLS) first
  try {
    console.log(`🔒 [1/4] Attempting Secure FTPS (TLS/SSL)...`);
    await client.access({
      host: sanitizedHost,
      user: user,
      password: password,
      port: port,
      secure: true,
      secureOptions: { rejectUnauthorized: false }
    });
    console.log(`✅ Secure FTPS connection established!`);
    connected = true;
  } catch (ftpsErr) {
    console.warn(`⚠️ FTPS connection failed (${ftpsErr.message}).`);
    console.log(`🔄 [Auto-Fallback] Attempting standard plain FTP...`);
    client.close();
  }

  // Step 2: Auto-fallback to standard FTP if FTPS failed
  if (!connected) {
    try {
      await client.access({
        host: sanitizedHost,
        user: user,
        password: password,
        port: port,
        secure: false
      });
      console.log(`✅ Standard FTP connection established!`);
      connected = true;
    } catch (ftpErr) {
      console.error(`❌ Standard FTP connection also failed!`);
      console.error(`Reason: ${ftpErr.message}`);
      if (ftpErr.message && ftpErr.message.includes('ENOTFOUND')) {
        console.error(`💡 Tip: DNS could not resolve "${sanitizedHost}". If using Cloudflare, use Hostinger FTP IP or Hostinger server domain.`);
      }
      process.exit(1);
    }
  }

  // Step 3: Check directory and navigate into public_html if present
  try {
    console.log(`📂 [2/4] Detecting remote directory structure...`);
    const list = await client.list();
    const hasPublicHtml = list.some(item => (item.name === 'public_html' || item.name === 'public_html/') && item.isDirectory);

    if (hasPublicHtml) {
      console.log(`📁 Found 'public_html' directory. Navigating inside...`);
      await client.cd('public_html');
    } else {
      console.log(`📁 Web root is directly in current directory (no public_html subfolder needed).`);
    }

    // Step 4: Fast upload of deploy.zip and deploy_extract.php
    console.log(`⚡ [3/4] Uploading files to server...`);
    const uploadZipStart = Date.now();
    await client.uploadFrom(zipPath, 'deploy.zip');
    const uploadZipDuration = ((Date.now() - uploadZipStart) / 1000).toFixed(1);
    console.log(`  └─ ✅ deploy.zip (${zipSizeMB} MB) uploaded in ${uploadZipDuration}s`);

    const uploadPhpStart = Date.now();
    await client.uploadFrom(phpPath, 'deploy_extract.php');
    const uploadPhpDuration = ((Date.now() - uploadPhpStart) / 1000).toFixed(1);
    console.log(`  └─ ✅ deploy_extract.php uploaded in ${uploadPhpDuration}s`);

  } finally {
    client.close();
    console.log(`🔌 FTP connection closed.`);
  }

  // Step 5: Trigger remote server-side auto-extraction
  console.log(`🚀 [4/4] Triggering remote server-side auto-extraction...`);
  const triggerUrl = `${extractUrl}?token=${encodeURIComponent(deployToken)}`;
  console.log(`🌐 Calling: ${triggerUrl.replace(deployToken, '****************')}`);

  let extractSuccess = false;
  const maxRetries = 4;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`  ├─ Trigger attempt ${attempt}/${maxRetries}...`);
      const res = await fetch(triggerUrl, {
        method: 'GET',
        headers: { 'User-Agent': 'GitHub-Actions-FastZIP-Deploy/1.0' }
      });
      const bodyText = await res.text();

      let jsonRes = null;
      try {
        jsonRes = JSON.parse(bodyText);
      } catch {
        jsonRes = null;
      }

      if (res.ok && jsonRes && jsonRes.status === 'success') {
        console.log(`  └─ 🎉 Extraction Successful!`);
        console.log(`     • Files extracted: ${jsonRes.files_extracted || 'All'}`);
        console.log(`     • Cleaned up: ${jsonRes.archive_cleaned ? 'Yes' : 'Done'}`);
        console.log(`     • Server Time: ${jsonRes.timestamp || new Date().toISOString()}`);
        extractSuccess = true;
        break;
      } else if (res.ok && bodyText.includes('success')) {
        console.log(`  └─ 🎉 Extraction Successful: ${bodyText}`);
        extractSuccess = true;
        break;
      } else {
        console.warn(`  └─ ⚠️ Response (${res.status}): ${bodyText.slice(0, 200)}`);
      }
    } catch (reqErr) {
      console.warn(`  └─ ⚠️ Request error: ${reqErr.message}`);
    }

    if (attempt < maxRetries) {
      console.log(`     Retrying in 3 seconds...`);
      await new Promise(r => setTimeout(r, 3000));
    }
  }

  // Clean local temp deploy_extract.php
  try {
    if (fs.existsSync(phpPath)) fs.unlinkSync(phpPath);
  } catch {}

  const totalDuration = ((Date.now() - overallStart) / 1000).toFixed(1);

  if (!extractSuccess) {
    console.error(`\n❌ Auto-extraction could not be confirmed via ${siteUrl}.`);
    console.error(`Please check if your domain points to Hostinger and ${extractUrl} is accessible.`);
    process.exit(1);
  }

  console.log('====================================================');
  console.log(`✨ DEPLOYMENT COMPLETE IN ${totalDuration}s! ✨`);
  console.log(`🌍 Live Site: ${siteUrl}`);
  console.log('====================================================');
}

runDeploy().catch(err => {
  console.error('\n❌ Fatal Deployment Error:', err.message || err);
  process.exit(1);
});
