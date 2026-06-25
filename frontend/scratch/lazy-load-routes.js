import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appJsxPath = path.join(__dirname, '../src/App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf8');

// Parse lines
const lines = content.split('\n');
const newImports = [];
const lazyImports = [];
const otherLines = [];

const staticImportExclusions = [
  'react',
  'react-hot-toast',
  'react-router-dom',
  'components/common/Navbar.jsx',
  'components/common/Footer.jsx',
  'components/common/SEOHelper.jsx',
  'components/common/PopUp.jsx',
  'components/common/ScrollToTop.jsx'
];

lines.forEach(line => {
  const importMatch = line.match(/^import\s+(\w+)\s+from\s+['"](.+?)['"]/);
  if (importMatch) {
    const [_, name, importPath] = importMatch;
    const isExcluded = staticImportExclusions.some(ex => importPath.includes(ex));
    
    if (isExcluded) {
      newImports.push(line);
    } else {
      // Convert to lazy import
      lazyImports.push(`const ${name} = React.lazy(() => import('${importPath}'));`);
    }
  } else {
    otherLines.push(line);
  }
});

// Also add new legal pages to lazy imports
lazyImports.push(`const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy.jsx'));`);
lazyImports.push(`const TermsConditions = React.lazy(() => import('./pages/TermsConditions.jsx'));`);

let newContent = `import React from 'react';\n`;
newImports.forEach(imp => {
  if (!imp.startsWith("import React")) {
    newContent += imp + '\n';
  }
});

newContent += '\n// Lazy-loaded pages for bundle size optimization (Issue 24)\n';
lazyImports.forEach(imp => {
  newContent += imp + '\n';
});

// Reconstruct the rest of the file
const rest = otherLines.join('\n');

// Add new routes for privacy policy and terms and conditions
const routesPlaceholder = '<Routes>';
const suspenseRoutes = `<React.Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
      <Routes>
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions/" element={<TermsConditions />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />`;

let finalContent = rest
  .replace('<Routes>', suspenseRoutes)
  .replace('</Routes>', '</Routes>\n      </React.Suspense>');

// Remove double import React from 'react' if any
finalContent = newContent + '\n' + finalContent;
finalContent = finalContent.replace(/import\s+React\s+from\s+['"]react['"];?\nimport\s+React\s+from\s+['"]react['"];?\n/g, "import React from 'react';\n");

fs.writeFileSync(appJsxPath, finalContent, 'utf8');
console.log("Successfully refactored App.jsx with React.lazy loading and legal routes.");
