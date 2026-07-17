/**
 * fix_and_inject_citations.cjs
 * 
 * Step 1: Restore the TLDR blocks that were broken by the previous injection.
 * Step 2: Inject expert-opinion and references blocks CORRECTLY at the very end
 *         of each article's content array (before the closing `]` of `content`).
 */

const fs = require('fs');
let content = fs.readFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  'utf8'
);

// ─── STEP 1: FIX CORRUPTED TLDR ITEMS ARRAYS ──────────────────────────────────
// The previous script injected the expert-opinion/references blocks INSIDE the
// `items: [...]` array instead of after it. We need to remove them from there.

// Pattern: inside `items: [` ... `]` there may be `{ type: "expert-opinion"` or
// `{ type: "references"` - we remove those contaminating objects.
// Strategy: For each occurrence of a tldr block, remove injected objects.

// Remove injected blocks that snuck inside `items: [`
content = content.replace(
  /(\s*\n\s*\{\s*\n\s*type:\s*["']expert-opinion["'][\s\S]*?\},?\s*\n)(\s*\{\s*\n\s*type:\s*["']references["'][\s\S]*?\},?\s*\n)?(\s*\])\n(\s*\},?\s*\n\s*\{)/g,
  (match, eo, ref, closing, next) => {
    // Only apply fix if the next block is NOT a proper `},` followed by `{type:`
    return closing + '\n' + next;
  }
);

// More targeted approach: Remove expert-opinion and references blocks that
// appear between the last string item and the closing `]` of an `items` array
// These appear as: "last tldr string"\n    \n  { type: "expert-opinion" ...
content = content.replace(
  /(["']\s*\n\s*)\n(\s*\{\s*\n\s*type:\s*["']expert-opinion["'][\s\S]*?\},\s*\n\s*\{\s*\n\s*type:\s*["']references["'][\s\S]*?\},\s*\n\s*\])/g,
  (match, lastItem, tail) => {
    const closingBracket = tail.match(/(\s*\])/)?.[1] || '    ]';
    return lastItem + '\n' + closingBracket;
  }
);

fs.writeFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  content
);
console.log('Step 1 done: Attempted targeted removal. Checking line 111...');

// ─── VERIFY LINE 111 ─────────────────────────────────────────────────────────
const lines = content.split('\n');
console.log('Lines 108-125:');
lines.slice(107, 125).forEach((l, i) => console.log(`${108 + i}: ${l}`));
