const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(file, 'utf8');

// Fix double opening brace before editorial-governance-panel
src = src.replace(/\{\s*\{\s*type: "editorial-governance-panel"/g, '{\n        type: "editorial-governance-panel"');

// Fix missing opening brace before cognitive-pathway right after editorial-governance-panel block
src = src.replace(/\},\s*type: "cognitive-pathway"/g, '},\n      {\n        type: "cognitive-pathway"');

fs.writeFileSync(file, src, 'utf8');
console.log('Successfully fixed syntax in lib/data/articles.ts');
