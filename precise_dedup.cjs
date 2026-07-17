/**
 * precise_dedup.cjs
 * Line-based fix for factCheckedBy/factCheckedAt duplicates.
 * 
 * Problem:
 *  - Articles 1-4 already had factCheckedBy at 4-space indent.
 *    Our script injected ANOTHER pair → duplicate property error.
 *  - Articles 5-6 had correct injection but at 2-space indent (wrong).
 * 
 * Fix:
 *  - Remove any 4-space factCheckedBy/At line that is IMMEDIATELY PRECEDED
 *    by another factCheckedBy/At line (consecutive duplicate removal).
 *  - Fix 2-space indented factCheckedBy/At to 4-space.
 *  - Also fix remaining informal "large language model" references.
 */
const fs = require('fs');
const src = fs.readFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  'utf8'
);

const lines = src.split('\n');
const fixed = [];
let skipNext = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (skipNext) { skipNext = false; continue; }

  // Fix 2-space indented (wrongly injected) → correct to 4-space
  if (/^  factCheckedBy:/.test(line)) {
    fixed.push('    ' + line.trimStart());
    continue;
  }
  if (/^  factCheckedAt:/.test(line)) {
    fixed.push('    ' + line.trimStart());
    continue;
  }

  // Remove 4-space factCheckedBy/At that immediately follows another factCheckedBy/At
  // i.e., deduplicate consecutive pairs
  const isFactLine = /^    factCheckedBy:|^    factCheckedAt:/.test(line);
  const prevIsFactLine = fixed.length > 0 && /^    factChecked(By|At):/.test(fixed[fixed.length - 1]);

  if (isFactLine && prevIsFactLine) {
    // Check if this is a duplicate (same key as prev)
    const isBy  = line.includes('factCheckedBy');
    const prevBy = fixed[fixed.length - 1].includes('factCheckedBy');
    if (isBy === prevBy) {
      // Same key appearing consecutively → skip (keep the first one)
      continue;
    }
  }

  fixed.push(line);
}

let result = fixed.join('\n');

// Fix remaining informal LLM references (case-insensitive, in string content only)
result = result.replace(/\blarge language model\b(?!\s*\(LLM\))/gi, (m) => {
  // Preserve original case for first letter
  return m[0] === 'l' ? 'large language model (LLM)' : 'Large Language Model (LLM)';
});

fs.writeFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  result
);

// ── Verify ────────────────────────────────────────────────────────────────────
const finalLines = result.split('\n');
console.log('factCheckedBy occurrences:');
finalLines.forEach((l, i) => {
  if (l.includes('factCheckedBy') && !l.includes('"factCheckedBy"')) {
    console.log(`  Line ${i+1}: ${JSON.stringify(l)}`);
  }
});

const dupeCheck = result.match(/factCheckedBy[^"]{0,5}"[^"]+",\n\s*factCheckedBy/g);
console.log(dupeCheck ? `Duplicates remaining: ${dupeCheck.length}` : '✓ No duplicate factCheckedBy properties.');

const llmFail = result.match(/\blarge language model(?!\s*\(LLM\))\b/gi) || [];
console.log(`✓ Remaining informal LLM refs: ${llmFail.length}`);
console.log('Done.');
