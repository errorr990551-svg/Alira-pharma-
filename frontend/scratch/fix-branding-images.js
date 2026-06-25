import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages');

// Custom content lookup for the 6 major cities
const majorCitiesContent = {
  'SeoPage.jsx': {
    name: 'Riyadh',
    block1Title: 'Pharmaceutical Distributors for Riyadh',
    block1Text: 'Alira Pharmaceuticals specializes in the strategic sourcing and distribution of generic medications and essential medical supplies tailored for the Riyadh healthcare market. We serve major institutions such as the King Faisal Specialist Hospital, King Saud Medical City, and Riyadh Military Hospital. We ensure our Saudi partners receive compliant, high-efficacy products that meet international safety and SFDA standards, managed via our climate-controlled local logistics warehouses.',
    block2Title: 'Surgical Instruments Suppliers in Riyadh',
    block2Text: 'We provide Riyadh’s surgeons and clinical groups with the precision they demand. Our surgical instruments are forged from premium medical-grade stainless steel, ensuring longevity and durability for complex procedures. Under rigorous SFDA guidelines, we supply high-quality retractors, forceps, and neurosurgical instruments directly to operating rooms across the capital city, ensuring patient safety is never compromised.',
    block3Title: 'Wholesale Medical Disposables in Riyadh',
    block3Text: 'Hygiene and infection control are non-negotiable for high-volume central hospitals in the capital. As a leading wholesale medical disposables supplier, we offer Riyadh clinics a robust inventory of nitrile gloves, sterile surgical gowns, and advanced wound care products designed for single-use safety. Each product batch complies with SFDA mandates, safeguarding critical care settings and surgical theaters throughout the Central Province.',
    whyChooseLogistics: 'specifically utilizing Riyadh Dry Port and central highway transit networks for swift local clearance and secure transport.',
    mapParagraph: 'Alira Pharmaceuticals offers a unique variety of surgical instruments, PPE, and medical disposables tailored for the Riyadh market. We are a prominent manufacturer and supplier in the healthcare industry, leveraging optimized freight routes to Riyadh Dry Port for faster clearance. Following the latest regulatory standards, our supplies add reliability and operational efficiency to your medical facility in Riyadh.'
  },
  'JeddahPage.jsx': {
    name: 'Jeddah',
    block1Title: 'Pharmaceutical Distributors for Jeddah',
    block1Text: 'Alira Pharmaceuticals specializes in the strategic sourcing and distribution of generic medications and essential medical supplies tailored for the Jeddah healthcare market. We support leading medical networks including the King Fahd General Hospital, Jeddah Clinic Hospital, and the International Medical Center. Our logistics partners utilize the cold-chain facilities of the Western Region to guarantee product stability, adhering strictly to global GMP standards.',
    block2Title: 'Surgical Instruments Suppliers in Jeddah',
    block2Text: 'We provide Jeddah’s surgeons and operating teams with the precision they demand. Our surgical instruments are forged from medical-grade stainless steel, ensuring corrosion resistance during complex surgeries. From cardiovascular retractors to pediatric micro-instruments, we supply operating theaters across the Red Sea region with CE-certified quality and SFDA compliance documents.',
    block3Title: 'Wholesale Medical Disposables in Jeddah',
    block3Text: 'Hygiene and infection control are non-negotiable for Jeddah\'s bustling maritime clinics and urban healthcare centers. As a trusted wholesale medical disposables supplier, we offer a robust inventory of surgical gloves, drapes, and wound care dressings. Each batch is optimized for single-use reliability and is shipped directly via sea cargo, keeping inventory levels consistent.',
    whyChooseLogistics: '20+ years of experience navigating international shipping, specifically utilizing the Jeddah Islamic Port for faster local clearance.',
    mapParagraph: 'Alira Pharmaceuticals offers a unique variety of surgical instruments, PPE, and medical disposables tailored for the Jeddah market. We are a prominent manufacturer and supplier in the healthcare industry, leveraging major shipping routes to Jeddah Islamic Port for faster local clearance. Following the latest regulatory standards, our supplies add reliability and operational efficiency to your medical facility in Jeddah.'
  },
  'DammamPage.jsx': {
    name: 'Dammam',
    block1Title: 'Pharmaceutical Distributors for Dammam',
    block1Text: 'Alira Pharmaceuticals specializes in the strategic sourcing and distribution of generic medications and essential medical supplies tailored for the Dammam healthcare market. We serve the region\'s prominent networks, including the King Fahd Specialist Hospital Dammam and the Dammam Medical Complex. We ensure our eastern Saudi partners receive compliant, high-efficacy products matching international SFDA standards.',
    block2Title: 'Surgical Instruments Suppliers in Dammam',
    block2Text: 'We provide Dammam’s surgeons and medical professionals with the precision they demand. Our surgical instruments are forged from medical-grade stainless steel, ensuring durability for complex procedures. From bone cutters to ENT instruments, we are your trusted partner for operating room excellence in the Eastern Province, supplying certified equipment directly to local healthcare facilities.',
    block3Title: 'Wholesale Medical Disposables in Dammam',
    block3Text: 'Hygiene and infection control are critical in Dammam\'s dense industrial and residential hubs. As a leading wholesale medical disposables supplier, we offer clinics a robust inventory of gloves, surgical gowns, and wound care products designed for single-use safety. Each product is sourced from high-quality facilities to ensure uncompromised hygiene in Dammam, supporting clinical excellence.',
    whyChooseLogistics: '20+ years of experience navigating international shipping, specifically utilizing King Abdulaziz Port in Dammam for faster local clearance.',
    mapParagraph: 'Alira Pharmaceuticals offers a unique variety of surgical instruments, PPE, and medical disposables tailored for the Dammam market. We are a prominent manufacturer and supplier in the healthcare industry, leveraging major shipping routes to King Abdulaziz Port in Dammam for faster local clearance. Following the latest regulatory standards, our supplies add reliability and operational efficiency to your medical facility in Dammam.'
  },
  'KhobarPage.jsx': {
    name: 'Al Khobar',
    block1Title: 'Pharmaceutical Distributors for Al Khobar',
    block1Text: 'Alira Pharmaceuticals specializes in the strategic sourcing and distribution of generic medications and essential medical supplies tailored for the Al Khobar healthcare market. We ensure our partners in the Eastern Province, including King Fahd University Hospital and Mohammad Dossary Hospital, receive compliant, high-efficacy products that meet international safety and regulatory standards, keeping local clinical stocks highly reliable.',
    block2Title: 'Surgical Instruments Suppliers in Al Khobar',
    block2Text: 'We provide Al Khobar’s surgeons with the precision they demand. Our surgical instruments are forged from medical-grade stainless steel, ensuring durability for complex orthopedic and general surgeries. From surgical forceps to specialized hooks, we are a leading supplier for operating room excellence in the region, bringing certified tools to modern private healthcare networks.',
    block3Title: 'Wholesale Medical Disposables in Al Khobar',
    block3Text: 'Hygiene and infection control are non-negotiable for Al Khobar\'s premium private clinics. As a leading wholesale medical disposables supplier, we offer a robust inventory of gloves, surgical gowns, and wound care products designed for single-use safety and hygiene. Each batch is compliant with international safety standards, making it the perfect addition to any modern hospital.',
    whyChooseLogistics: 'specifically utilizing Eastern Province transit ports and King Abdulaziz Port for faster local clearance.',
    mapParagraph: 'Alira Pharmaceuticals offers a unique variety of surgical instruments, PPE, and medical disposables tailored for the Al Khobar market. We are a prominent manufacturer and supplier in the healthcare industry, leveraging major shipping routes to the Eastern Province ports for faster local clearance. Following the latest regulatory standards, our supplies add reliability and operational efficiency to your medical facility in Al Khobar.'
  },
  'MeccaPage.jsx': {
    name: 'Mecca',
    block1Title: 'Pharmaceutical Distributors for Mecca',
    block1Text: 'Alira Pharmaceuticals specializes in the strategic sourcing and distribution of generic medications and essential medical supplies tailored for the Mecca healthcare market. We serve major medical institutions such as King Abdullah Medical City and Al Noor Specialist Hospital. We ensure our partners receive compliant, high-efficacy products that meet international safety and SFDA standards during peak seasonal influxes.',
    block2Title: 'Surgical Instruments Suppliers in Mecca',
    block2Text: 'We provide Mecca’s surgeons and operating teams with the precision they demand. Our surgical instruments are forged from medical-grade stainless steel, ensuring durability for complex procedures. From retractors to neurosurgical instruments, we are your trusted partner for operating room excellence in Mecca, providing safety and reliability where it matters most.',
    block3Title: 'Wholesale Medical Disposables in Mecca',
    block3Text: 'Hygiene and infection control are critical, especially during the high-demand Hajj and Umrah pilgrim seasons. As a leading wholesale medical disposables supplier, we offer Mecca clinics and mobile health camps a robust inventory of gloves, surgical gowns, and wound care products designed for single-use safety and uncompromised hygiene.',
    whyChooseLogistics: '20+ years of experience navigating international shipping, specifically utilizing the Jeddah Islamic Port and western corridors for Mecca clearance.',
    mapParagraph: 'Alira Pharmaceuticals offers a unique variety of surgical instruments, PPE, and medical disposables tailored for the Mecca market. We are a prominent manufacturer and supplier in the healthcare industry, leveraging major shipping routes and highway freight to Mecca for faster clearance. Following the latest regulatory standards, our supplies add reliability and operational efficiency to your medical facility in Mecca.'
  },
  'MedinaPage.jsx': {
    name: 'Medina',
    block1Title: 'Pharmaceutical Distributors for Medina',
    block1Text: 'Alira Pharmaceuticals specializes in the strategic sourcing and distribution of generic medications and essential medical supplies tailored for the Medina healthcare market. We serve major institutions such as King Salman Medical City and Al Dar Hospital. We ensure our partners receive compliant, high-efficacy products that meet international safety and SFDA standards.',
    block2Title: 'Surgical Instruments Suppliers in Medina',
    block2Text: 'We provide Medina’s surgeons and medical professionals with the precision they demand. Our surgical instruments are forged from medical-grade stainless steel, ensuring durability for complex procedures. From retractors to neuro instruments, we are your trusted partner for operating room excellence in Medina, supplying certified equipment directly to local healthcare facilities.',
    block3Title: 'Wholesale Medical Disposables in Medina',
    block3Text: 'Hygiene and infection control are non-negotiable for Medina\'s healthcare clinics and emergency medical centers. As a leading wholesale medical disposables supplier, we offer a robust inventory of gloves, surgical gowns, and wound care products designed for single-use safety and uncompromised hygiene.',
    whyChooseLogistics: 'specifically utilizing Yanbu Port and local airport cargo routes to Medina for faster clearance.',
    mapParagraph: 'Alira Pharmaceuticals offers a unique variety of surgical instruments, PPE, and medical disposables tailored for the Medina market. We are a prominent manufacturer and supplier in the healthcare industry, leveraging major shipping routes to Medina for faster local clearance. Following the latest regulatory standards, our supplies add reliability and operational efficiency to your medical facility in Medina.'
  }
};

const files = fs.readdirSync(pagesDir);

let countUpdated = 0;

files.forEach(file => {
  if (!file.endsWith('.jsx')) return;
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Replace singular Alira Pharmaceutical with plural (case-sensitive)
  // Ensure we don't end up with "Alira Pharmaceuticalss"
  content = content.replace(/\bAlira\s+Pharmaceutical\b(?!s)/g, "Alira Pharmaceuticals");
  content = content.replace(/\bAlira\s+pharmaceutical\b(?!s)/g, "Alira pharmaceuticals");
  content = content.replace(/\balira\s+pharmaceutical\b(?!s)/g, "alira pharmaceuticals");

  // 2. Fix image dimensions for CLS (Issue 2)
  // Image 1: https://images.unsplash.com/photo-1579684385127-1ef15d508118...
  const img1Regex = /<img\s+src="https:\/\/images\.unsplash\.com\/photo-1579684385127-1ef15d508118([^"]+)"\s+alt="([^"]+)"\s+className="([^"]+)"\s*\/?>/g;
  content = content.replace(img1Regex, (match, p1, p2, p3) => {
    return `<img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118${p1}" 
                    alt="${p2}" 
                    width={400}
                    height={500}
                    className="${p3}"
                  />`;
  });

  // Image 2: https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d...
  const img2Regex = /<img\s+src="https:\/\/images\.unsplash\.com\/photo-1586528116311-ad8dd3c8310d([^"]+)"\s+alt="([^"]+)"\s+className="([^"]+)"\s*\/?>/g;
  content = content.replace(img2Regex, (match, p1, p2, p3) => {
    return `<img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d${p1}" 
                    alt="${p2}" 
                    width={600}
                    height={450}
                    className="${p3}"
                  />`;
  });

  // Category slider image: src={category.image}
  const sliderImgRegex = /<img\s+src=\{category\.image\}\s+alt=\{category\.title\}\s+className="([^"]+)"\s*\/?>/g;
  content = content.replace(sliderImgRegex, (match, p1) => {
    return `<img 
                            src={category.image} 
                            alt={category.title} 
                            width={360}
                            height={224}
                            className="${p1}"
                          />`;
  });

  // Map image: src={placeholderMap}
  const mapImgRegex = /<img\s+src=\{placeholderMap\}\s+alt="([^"]+)"\s+className="([^"]+)"\s*\/?>/g;
  content = content.replace(mapImgRegex, (match, p1, p2) => {
    return `<img 
                  src={placeholderMap} 
                  alt="${p1}" 
                  width={800}
                  height={340}
                  className="${p2}" 
                />`;
  });

  // 3. Inject unique local content for the 6 major cities
  if (majorCitiesContent[file]) {
    const city = majorCitiesContent[file];

    // Find and replace Block 1 (Pharmaceutical Distributors)
    const block1Regex = new RegExp(`(<h3>\\s*Pharmaceutical Distributors for ${city.name}\\s*<\\/h3>\\s*<\\/div>\\s*<p>)[\\s\\S]*?(<\\/p>)`, 'i');
    const block1FallbackRegex = new RegExp(`(<h3 className="text-2xl font-bold text-gray-900 mb-4">\\s*Pharmaceutical Distributors for ${city.name}\\s*<\\/h3>\\s*<\\/div>\\s*<p>)[\\s\\S]*?(<\\/p>)`, 'i');
    const block1DirectRegex = new RegExp(`(Pharmaceutical Distributors for ${city.name}[\\s\\S]*?<p>)[\\s\\S]*?(<\\/p>)`, 'i');
    
    // Find where the paragraph is. In our files, it is usually inside `<div><h3>Title</h3><p>Text</p></div>`.
    // Let's replace the whole section if possible, or do string matches.
    // Since the files are clean and uniform, we can search for the title and the next `<p>...</p>` and replace the text.
    // Let's use simple string replacements if the structure matches.
    
    // Let's print out if it matches, and replace.
    // Let's check block 1 replacement
    const b1Target = `<h3>\n                      Pharmaceutical Distributors for ${city.name}\n                    </h3>\n                    <p>\n                      Alira Pharmaceuticals specializes in the strategic sourcing and distribution of generic medications and essential medical supplies tailored for the <span className="font-semibold text-teal-700">${city.name} healthcare market</span>. We ensure our partners in the Hejaz region receive compliant, high-efficacy products that meet international safety and regulatory standards. Our dedicated professionals ensure that every facility is meticulously stocked with attention to safety and regulatory standards.\n                    </p>`;
    
    // A more generic block matcher:
    // Let's search for the header block:
    // <h3>Pharmaceutical Distributors for ...</h3> followed by <p>...</p>
    const block1SearchRegex = new RegExp(`(<h3>\\s*Pharmaceutical Distributors for ${city.name}\\s*<\\/h3>\\s*<\\/div>\\s*<p>)([\\s\\S]*?)(<\\/p>)`, 'g');
    const block1SearchRegexNoDiv = new RegExp(`(<h3>\\s*Pharmaceutical Distributors for ${city.name}\\s*<\\/h3>\\s*<p>)([\\s\\S]*?)(<\\/p>)`, 'g');
    
    // Let's do direct string-based replace for the block content in city pages.
    // We can match the entire block:
    // <h3 className="text-2xl font-bold text-gray-900 mb-4">\n                      Pharmaceutical Distributors for ...\n                    </h3>\n                    <p>\n                      ...\n                    </p>
    
    // Block 1 Replace:
    const regexB1 = new RegExp(`(Pharmaceutical Distributors for ${city.name}[\\s\\S]*?<p>)([\\s\\S]*?)(<\\/p>)`, 'i');
    content = content.replace(regexB1, `$1${city.block1Text}$3`);

    // Block 2 Replace:
    const regexB2 = new RegExp(`(Surgical Instruments Suppliers in ${city.name}[\\s\\S]*?<p>)([\\s\\S]*?)(<\\/p>)`, 'i');
    content = content.replace(regexB2, `$1${city.block2Text}$3`);

    // Block 3 Replace:
    const regexB3 = new RegExp(`(Wholesale Medical Disposables in ${city.name}[\\s\\S]*?<p>)([\\s\\S]*?)(<\\/p>)`, 'i');
    content = content.replace(regexB3, `$1${city.block3Text}$3`);

    // Why Choose point 1 logistics replace:
    // Look for: 20+ years of experience navigating international shipping, specifically ...
    const logisticsSearchRegex = /20\+\s*years\s+of\s+experience\s+navigating\s+international\s+shipping,\s+specifically\s+[^.]*\./gi;
    content = content.replace(logisticsSearchRegex, `20+ years of experience navigating international shipping, ${city.whyChooseLogistics}`);

    // Map paragraph replace:
    // Look for: Alira Pharmaceuticals offers a unique variety of surgical instruments, PPE, and medical disposables tailored for the ... market. We are a prominent ...
    const mapParagraphRegex = new RegExp(`Alira Pharmaceuticals\\s+offers\\s+a\\s+unique\\s+variety\\s+of\\s+surgical\\s+instruments,\\s+PPE,\\s+and\\s+medical\\s+disposables\\s+tailored\\s+for\\s+the\\s+${city.name}\\s+market\\.[\\s\\S]*?your\\s+medical\\s+facility\\s+in\\s+${city.name}\\.`, 'i');
    content = content.replace(mapParagraphRegex, city.mapParagraph);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    countUpdated++;
  }
});

console.log(`Branding, CLS dimensions, and major cities custom paragraphs completed! Updated ${countUpdated} files.`);
