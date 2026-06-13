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
  '/market-area/',
  '/blogs/'
];

// Major city pages allowed to index
const majorCities = [
  '/riyadh/',
  '/jeddah/',
  '/dammam/',
  '/al-khobar/',
  '/mecca/',
  '/medina/'
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

// 2. Add major cities
majorCities.forEach(p => urls.push(p));

// 3. Add blog paths
blogSlugs.forEach(slug => urls.push(`/blogs/${slug}/`));

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
    else if (majorCities.includes(urlPath)) priority = 0.7;

    return `  <url>
    <loc>${origin}${urlPath}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
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
