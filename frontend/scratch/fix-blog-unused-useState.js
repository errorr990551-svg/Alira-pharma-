import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages');

// List of blog post files reported by ESLint with unused useState
const filesToFix = [
  'BlogPost7.jsx',
  'BlogPost8.jsx',
  'BlogPost9.jsx',
  'BlogPost10.jsx',
  'BlogPost11.jsx',
  'BlogPost12.jsx',
  'BlogPost13.jsx',
  'BlogPost14.jsx',
  'BlogPost15.jsx',
  'BlogPost16.jsx',
  'BlogPost17.jsx',
  'BlogPost19.jsx'
];

filesToFix.forEach(fileName => {
  const filePath = path.join(pagesDir, fileName);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if useState is imported
    if (content.includes("import React, { useState, useEffect } from 'react';")) {
      // Check if useState is used elsewhere in the file
      // If it only occurs in the import, we can safely replace it
      const occurrences = (content.match(/useState/g) || []).length;
      if (occurrences === 1) {
        content = content.replace(
          "import React, { useState, useEffect } from 'react';",
          "import React, { useEffect } from 'react';"
        );
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully fixed import in ${fileName}`);
      } else {
        console.log(`useState appears to be used in ${fileName} (${occurrences} occurrences), skipping.`);
      }
    }
  } else {
    console.log(`File not found: ${fileName}`);
  }
});
