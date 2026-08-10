import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const origin = "https://alirapharmaceuticals.com";

// Base static pages
const staticPaths = [
  '/',
  '/about/',
  '/certification/',
  '/contact/',
  '/blogs/',
  '/privacy-policy/',
  '/terms-and-conditions/'
];



// Blog posts slugs
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

// Product Category slugs
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

const urls = [];

// 1. Add static paths
staticPaths.forEach(p => urls.push(p));

// 3. Add blog paths
blogSlugs.forEach(slug => urls.push(`/blogs/${slug}/`));

// Helper to match URLs to their corresponding physical source files
const getFileForUrl = (urlPath) => {
  if (urlPath === '/') return 'src/pages/Home.jsx';
  if (urlPath === '/about/') return 'src/pages/About.jsx';
  if (urlPath === '/certification/') return 'src/pages/Certification.jsx';
  if (urlPath === '/contact/') return 'src/pages/ContactUs.jsx';
  if (urlPath === '/blogs/') return 'src/pages/BlogsPage.jsx';
  if (urlPath === '/privacy-policy/') return 'src/pages/PrivacyPolicy.jsx';
  if (urlPath === '/terms-and-conditions/') return 'src/pages/TermsConditions.jsx';

  if (urlPath.startsWith('/blogs/')) {
    const slug = urlPath.split('/').filter(Boolean)[1];
    const idx = blogSlugs.indexOf(slug);
    if (idx === 0) return 'src/pages/BlogPost.jsx';
    if (idx > 0) return `src/pages/BlogPost${idx + 1}.jsx`;
  }

  if (urlPath.startsWith('/products/')) {
    const segments = urlPath.split('/').filter(Boolean);
    if (segments.length === 2) {
      const catSlug = segments[1];
      const categoryEntry = Object.entries(categorySlugs).find(([k, v]) => v === catSlug);
      if (categoryEntry) {
        const catKey = categoryEntry[0];
        const num = catKey.replace('category', '');
        return `src/pages/products/Category${num}.jsx`;
      }
    } else if (segments.length === 3) {
      return 'src/pages/products/ProductDetailPage.jsx';
    }
  }

  return null;
};

// 4. Add product categories and products from JSON metadata
try {
  const metaPath = path.join(__dirname, '../src/data/extracted_products.json');
  const metaContent = fs.readFileSync(metaPath, 'utf8');
  const categoriesData = JSON.parse(metaContent);

  Object.entries(categoriesData).forEach(([catId, catData]) => {
    const catSlug = categorySlugs[catId];
    urls.push(`/products/${catSlug}/`);
    
    if (catData.products) {
      catData.products.forEach(p => {
        urls.push(`/products/${catSlug}/${createSlug(p.name)}/`);
      });
    }
  });

  // Generate XML
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const xmlUrls = urls.map(urlPath => {
    let priority = 0.5;
    if (urlPath === '/') priority = 1.0;
    else if (urlPath.startsWith('/products/')) priority = 0.8;

    // Default modification time: today
    let lastmodDate = new Date().toISOString().split('T')[0];
    const relFile = getFileForUrl(urlPath);
    if (relFile) {
      const fullFilePath = path.join(__dirname, '..', relFile);
      if (fs.existsSync(fullFilePath)) {
        const stats = fs.statSync(fullFilePath);
        lastmodDate = stats.mtime.toISOString().split('T')[0];
      }
    }

    return `  <url>
    <loc>${origin}${urlPath}</loc>
    <lastmod>${lastmodDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  const xmlFooter = `</urlset>`;
  const finalXml = `${xmlHeader}\n${xmlUrls}\n${xmlFooter}`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, finalXml, 'utf8');

  console.log(`Generated sitemap.xml with ${urls.length} URLs in ${outputPath}`);
} catch (err) {
  console.error("Sitemap generation failed:", err);
  process.exit(1);
}
