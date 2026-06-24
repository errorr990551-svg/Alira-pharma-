const fs = require('fs');

const content = fs.readFileSync('c:/Users/amity/OneDrive/Desktop/Alira pharma/frontend/src/components/common/Navbar.jsx', 'utf8');
const lines = content.split('\n');

for (let i = 680; i < 715; i++) {
  if (lines[i]) {
    console.log(`${i + 1}: ${lines[i]}`);
    for (let char of lines[i]) {
      console.log(`  char: ${char} (code: ${char.charCodeAt(0).toString(16)})`);
    }
  }
}
