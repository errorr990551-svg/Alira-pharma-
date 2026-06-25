import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages');

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

const blogMetadata = {
  "ent-neuro-surgical-tools": {
    title: "Sourcing Specialty ENT & Neuro-Surgical Tools",
    date: "April 10, 2026"
  },
  "india-uae-cepa-zero-duty-medical-imports-dubai": {
    title: "The Zero-Duty Revolution: India-UAE CEPA for Medical Imports",
    date: "April 09, 2026"
  },
  "sourcing-medical-grade-stainless-steel-instruments": {
    title: "Sourcing Medical-Grade Stainless Steel Instruments",
    date: "April 08, 2026"
  },
  "benefits-of-medical-oem-partnerships-2026": {
    title: "Benefits of Medical OEM Partnerships in 2026",
    date: "April 08, 2026"
  },
  "future-of-infection-control-2026": {
    title: "Future of Infection Control in 2026",
    date: "April 08, 2026"
  },
  "medical-logistics-2026": {
    title: "Global Medical Logistics and Supply Chain in 2026",
    date: "April 08, 2026"
  },
  "emergency-trauma-tools-2026": {
    title: "Emergency Trauma Tools & Response",
    date: "April 08, 2026"
  },
  "surgical-instrument-sterilization-guide": {
    title: "Surgical Instrument Sterilization Guide",
    date: "April 08, 2026"
  },
  "surgical-precision-2026": {
    title: "Orthopedic & Cardiovascular Precision in 2026",
    date: "April 08, 2026"
  },
  "surgical-robotics-2026": {
    title: "The Future of Surgical Robotics in 2026",
    date: "April 15, 2026"
  },
  "sustainable-medical-supplies-2026": {
    title: "Green Hospitals & Sustainable Procurement in 2026",
    date: "April 15, 2026"
  },
  "diagnostic-precision-2026": {
    title: "Advancements in Diagnostic Instruments",
    date: "April 15, 2026"
  },
  "pediatric-instruments-2026": {
    title: "Quality in Specialized Pediatric Instruments",
    date: "April 15, 2026"
  },
  "medical-accessibility-2026": {
    title: "The Ethics of Medical Accessibility",
    date: "April 15, 2026"
  },
  "remote-diagnostics-2026": {
    title: "The Future of Remote Diagnostics",
    date: "April 16, 2026"
  },
  "specialized-coatings-surgical-metallurgy": {
    title: "Specialized Coatings in Surgical Metallurgy",
    date: "April 16, 2026"
  },
  "medical-grade-disposables-icu": {
    title: "Standards for Medical-Grade Disposables in ICU",
    date: "April 16, 2026"
  },
  "surgical-instrument-suppliers-uae": {
    title: "Top Surgical Instrument Suppliers in UAE: 2025 Evaluation Guide",
    date: "June 18, 2025"
  },
  "ophthalmic-micro-surgical-precision": {
    title: "Mastering Ophthalmic Precision: Micro-Surgical Tools",
    date: "April 16, 2026"
  }
};

let countUpdated = 0;

for (let i = 1; i <= 19; i++) {
  const filename = i === 1 ? 'BlogPost.jsx' : `BlogPost${i}.jsx`;
  const filePath = path.join(pagesDir, filename);

  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  const slug = blogSlugs[i - 1];
  const meta = blogMetadata[slug];

  if (!meta) {
    console.warn(`No metadata found for slug: ${slug}`);
    continue;
  }

  // Find and replace the home-blog breadcrumb block
  const breadcrumbSearch = /<div className="flex items-center justify-center gap-2 text-teal-100[^"]*">[\s\S]*?Home[\s\S]*?Blog[\s\S]*?<\/div>/gi;

  const newBreadcrumb = `<div className="flex items-center justify-center gap-2 text-teal-100 text-[11px] sm:text-xs md:text-sm font-medium flex-wrap">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <a href="/blogs/" className="hover:text-white transition-colors">Blog</a>
            <span>|</span>
            <span className="text-white font-semibold truncate max-w-xs md:max-w-md" title="${meta.title}">${meta.title}</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-teal-200 text-xs mt-4 font-normal">
            <span>Published: ${meta.date}</span>
            <span>•</span>
            <span>Author: Dr. Anmol Chauhan (Head of Quality &amp; Compliance)</span>
          </div>`;

  if (breadcrumbSearch.test(content)) {
    content = content.replace(breadcrumbSearch, newBreadcrumb);
  } else {
    console.warn(`Could not match breadcrumb pattern in: ${filename}`);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    countUpdated++;
  }
}

console.log(`Blog posts refactoring complete! Updated ${countUpdated} files.`);
