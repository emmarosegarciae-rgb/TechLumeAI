const fs = require('fs');
const filePath = 'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/app/admin/seo-dashboard/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace \` with `
content = content.replace(/\\`/g, '`');
// Replace \$ with $
content = content.replace(/\\\$/g, '$');

fs.writeFileSync(filePath, content);
console.log("Fixed template literals in page.tsx");
