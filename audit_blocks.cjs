const fs = require('fs');
const src = fs.readFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  'utf8'
);

// Count all block type occurrences
const matches = src.match(/type:\s*"([^"]+)"/g) || [];
const counts = matches.reduce((a, t) => {
  const type = t.replace(/type:\s*"/, '').replace(/"/, '');
  a[type] = (a[type] || 0) + 1;
  return a;
}, {});
console.log(JSON.stringify(counts, null, 2));
