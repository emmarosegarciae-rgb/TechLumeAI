const fs = require('fs');
let content = fs.readFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts', 'utf8');

// Replace invalid targetType
content = content.replace(/targetType: "Related Topic"/g, 'targetType: "Recommended Next Reading"');

fs.writeFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts', content);
console.log("Fixed invalid targetTypes.");
