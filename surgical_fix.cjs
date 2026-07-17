/**
 * surgical_fix.cjs
 * 
 * The previous injection broke every TLDR block by inserting expert-opinion and
 * references objects INSIDE the `items: [...]` array (before the closing `]`).
 * 
 * Fix strategy:
 *   For each article, the pattern is:
 *     "...last tldr item string"\n    \n      { type: "expert-opinion" ... },\n      { type: "references" ... },\n    ]\n      },
 * 
 *   We need it to be:
 *     "...last tldr item string"\n        ],\n      },
 *   ...and then later append the expert-opinion and references AFTER the entire
 *   tldr block closes.
 */

const fs = require('fs');
let content = fs.readFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  'utf8'
);

// The bug pattern (repeated for each of the 8 articles):
//   "last item string"\n    \n      {\n        type: "expert-opinion"...
//   We need to close the items array properly and put the blocks outside.

// Use a two-pass approach:
// Pass 1: Close all broken `items` arrays and extract the injected blocks
// Pass 2: Re-inject those blocks cleanly AFTER the `},` that closes the tldr block

// Regex explanation:
// - Match: last string item in items[], then \n\n, then the two injected block objects, then \n    ]\n      },
// - Replace: close the items array cleanly, then place the two blocks after the tldr block closes

const brokenPattern = /([ \t]*"[^"]+"\n)([ \t]*\n)([ \t]*\{[ \t]*\n[ \t]*type:[ \t]*"expert-opinion"[\s\S]*?context:[ \t]*"[^"]*"\.?[ \t]*\n[ \t]*\},\n)([ \t]*\{[ \t]*\n[ \t]*type:[ \t]*"references"[\s\S]*?(?:\}[ \t]*\][ \t]*\n[ \t]*\},?\n))([ \t]*\][ \t]*\n)([ \t]*\},)/gm;

let matchCount = 0;
content = content.replace(brokenPattern, (match, lastItem, blank, eoBlock, refBlock, closingArr, closingObj) => {
  matchCount++;
  // Reconstruct properly:
  // 1. Close items array right after last item
  // 2. Close tldr block
  // 3. Add expert-opinion and references as siblings
  const indent = lastItem.match(/^([ \t]*)/)[1];
  const outerIndent = indent.replace(/  $/, ''); // two fewer spaces
  
  const fixedItems = lastItem + `${outerIndent}      ],\n${outerIndent}      },\n`;
  const cleanEO = eoBlock.trim();
  const cleanRef = refBlock.replace(/\}[ \t]*\][ \t]*\n[ \t]*\}/, '}\n      }');
  
  return fixedItems + `      ${cleanEO}\n      ${cleanRef.trim()}\n`;
});

console.log(`Fixed ${matchCount} broken tldr blocks.`);

fs.writeFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  content
);

// Verify line 111 area
const lines = content.split('\n');
console.log('\n--- Lines 104-130 after fix ---');
lines.slice(103, 130).forEach((l, i) => console.log(`${104 + i}: ${l}`));
