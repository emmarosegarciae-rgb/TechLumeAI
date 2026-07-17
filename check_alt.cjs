const fs = require('fs');
let content = fs.readFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts', 'utf8');

let altMatches = content.match(/alt:\s*"(.*?)"/g);
console.log('Alt matches:');
if (altMatches) {
  altMatches.forEach(m => console.log(m));
} else {
  console.log('None found.');
}

let imageAltMatches = content.match(/imageAlt:\s*"(.*?)"/g);
console.log('\nimageAlt matches:');
if (imageAltMatches) {
  imageAltMatches.forEach(m => console.log(m));
} else {
  console.log('None found.');
}
