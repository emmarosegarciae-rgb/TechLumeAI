/**
 * dedup_metadata.cjs
 * Removes duplicate factCheckedBy / factCheckedAt lines injected at wrong indent.
 * Also fixes the 1 remaining lowercase "large language model" term.
 */
const fs = require('fs');
let src = fs.readFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  'utf8'
);

// ── Remove badly-indented duplicate factCheckedBy/factCheckedAt pairs ──────────
// Pattern: 2-space indented injections (wrong) immediately followed by 4-space (correct)
src = src.replace(
  /  factCheckedBy: "TechlumeAI Editorial Board",\n  factCheckedAt: "[^"]+",\n(\s{4}factCheckedBy:)/g,
  '$1'
);

// ── Fix 1 remaining lowercase "large language model" ──────────────────────────
src = src.replace(/\blarge language model\b/g, 'Large Language Model (LLM)');

// ── Verify no more duplicates ─────────────────────────────────────────────────
const dupes = src.match(/factCheckedBy[^)]+factCheckedBy/g);
console.log(dupes ? `Still has duplicates: ${dupes.length}` : 'No duplicate factCheckedBy fields found.');

const remaining = src.match(/\blarge language model\b/gi) || [];
console.log(`Remaining informal LLM references: ${remaining.length}`);

fs.writeFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  src
);
console.log('Done.');
