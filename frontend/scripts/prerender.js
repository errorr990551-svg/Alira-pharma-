import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8181;
const DIST_DIR = path.join(__dirname, '../dist');

const staticPaths = [
  '/',
  '/about/',
  '/certification/',
  '/contact/',
  '/market-area/',
  '/blogs/'
];

const majorCities = [
  '/riyadh/',
  '/jeddah/',
  '/dammam/',
  '/al-khobar/',
  '/mecca/',
  '/medina/'
];

const blogSlugs = [
  'ent-neuro-surgical-tools',
  'india-uae-cepa-zero-duty-medical-imports-dubai',
  'sourcing-medical-grade-stainless-steel-instruments',
  'benefits-of-medical-oem-partnerships-2026',
  'future-of-infection-control-2026',
  'medical-logistics-2026',
  'emergency-trauma-tools-2026',
  'surgical-instrument-sterilization-guide',
  'surgical-precision-2026',
  'surgical-robotics-2026',
  'sustainable-medical-supplies-2026',
  'diagnostic-precision-2026',
  'pediatric-instruments-2026',
  'medical-accessibility-2026',
  'remote-diagnostics-2026',
  'specialized-coatings-surgical-metallurgy',
  'medical-grade-disposables-icu',
  'surgical-instrument-suppliers-uae',
  'ophthalmic-micro-surgical-precision'
];

const categorySlugs = {
  "category1": "surgical-instruments",
  "category2": "retractors-elevators",
  "category3": "bone-neuro",
  "category4": "ent-oral",
  "category5": "surgical-blades",
  "category6": "trays-utility",
  "category7": "gloves",
  "category8": "ppe",
  "category9": "drapes-gowns",
  "category10": "wound-care",
  "category11": "disposables-iv",
  "category12": "medical-device"
};

const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

// Start a lightweight HTTP static file server
function startServer(port, dir) {
  const server = http.createServer((req, res) => {
    // Clean query parameters
    const urlPath = req.url.split('?')[0];
    let filePath = path.join(dir, urlPath === '/' ? 'index.html' : urlPath);
    
    // Fallback to index.html for SPA routing if folder/path does not have an extension
    if (!path.extname(filePath)) {
      filePath = path.join(dir, 'index.html');
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      } else {
        const ext = path.extname(filePath);
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(content);
      }
    });
  });

  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`Temp server running at http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function runPrerender() {
  // Compile all routes
  const routes = [];
  
  // 1. Static paths
  staticPaths.forEach(p => routes.push(p));
  
  // 2. Major cities
  majorCities.forEach(p => routes.push(p));
  
  // 3. Blog paths
  blogSlugs.forEach(slug => routes.push(`/blogs/${slug}/`));

  // 4. Products and categories
  try {
    const metaPath = path.join(__dirname, '../src/data/extracted_products.json');
    const metaContent = fs.readFileSync(metaPath, 'utf8');
    const categoriesData = JSON.parse(metaContent);

    Object.entries(categoriesData).forEach(([catId, catData]) => {
      const catSlug = categorySlugs[catId];
      routes.push(`/products/${catSlug}/`);
      
      if (catData.products) {
        catData.products.forEach(p => {
          routes.push(`/products/${catSlug}/${createSlug(p.name)}/`);
        });
      }
    });
  } catch (e) {
    console.error("Could not load categories metadata. Prerendering with base routes only.", e);
  }

  // Boot server
  const server = await startServer(PORT, DIST_DIR);

  // Launch browser
  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({
    headless: "shell",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  console.log(`Starting crawl of ${routes.length} pages...`);

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Rendering: ${url}`);
    
    try {
      // Go to page
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait extra 250ms for local rendering scripts and layout settling
      await new Promise(r => setTimeout(r, 250));

      // Get page HTML content
      const html = await page.evaluate(() => document.documentElement.outerHTML);
      
      // Determine output file path
      let outputDir = DIST_DIR;
      let outputPath = path.join(DIST_DIR, 'index.html');
      
      if (route !== '/') {
        // e.g. /about/ -> dist/about/index.html
        outputDir = path.join(DIST_DIR, route);
        outputPath = path.join(outputDir, 'index.html');
      }

      // Ensure directory exists
      fs.mkdirSync(outputDir, { recursive: true });
      
      // Write file
      fs.writeFileSync(outputPath, html, 'utf8');
      console.log(`Saved static file: ${outputPath}`);
    } catch (e) {
      console.error(`Failed to prerender: ${url}`, e);
    }
  }

  console.log("Pre-rendering finished!");
  
  // Clean up
  await browser.close();
  server.close(() => {
    console.log("Temp server stopped.");
    process.exit(0);
  });
}

runPrerender();
