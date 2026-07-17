/**
 * precise_fix.cjs
 * Precisely removes expert-opinion + references blocks from inside `items` arrays
 * and re-injects them as proper sibling content blocks after the tldr block closes.
 */
const fs = require('fs');
let src = fs.readFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  'utf8'
);

// Each broken article has this pattern inside its content array:
//
//   "Last TLDR item string"\n
//   \n                           <-- blank line (broken: missing ], and },)
//       {
//         type: "expert-opinion",
//         ...
//       },
//       {
//         type: "references",
//         ...
//       },
//     ]                          <-- this was the content[] closing bracket BUT
//       },                       <-- this closes what SHOULD have been the tldr block
//
// Fix: we need to close `items` cleanly, close the tldr block, then put expert/refs

// The precise broken segment starts with the last TLDR item (no comma on last item)
// followed immediately by the injected blocks.

// Strategy: Use a global regex that matches the broken pattern across all 8 articles.
// Captured groups:
//   [1] = last TLDR string item (with trailing newline but NO closing `]`)
//   [2] = the expert-opinion block text (full object + comma)
//   [3] = the references block text (full object + comma + newline)
//   [4] = `    ]` — was meant to close content[], now wrongly closes items
//   [5] = `      },` — was meant to close tldr block

const broken = /"(\n)([ \t]*)(\n)([ \t]*\{[ \t]*\n[ \t]*type: "expert-opinion"[\s\S]*?\},\n)([ \t]*\{[ \t]*\n[ \t]*type: "references"[\s\S]*?\},\n)([ \t]*\]\n)([ \t]*\},)/g;

let count = 0;
src = src.replace(
  /([ \t]*"[^\n"]*"\n)([ \t]*\n)([ \t]*\{\n[ \t]*type: "expert-opinion"[\s\S]*?\},\n)([ \t]*\{\n[ \t]*type: "references"[\s\S]*?\},\n)([ \t]*\]\n)([ \t]*\},)/g,
  (match, lastItem, blank, eoBlock, refBlock, contentClose, tldrClose) => {
    count++;
    // Determine indent level from lastItem leading whitespace
    const indent = lastItem.match(/^(\s*)/)[1]; // e.g. "          "
    // items close = 10 spaces + "],"
    // tldr close  = 8  spaces + "},"
    // then eoBlock and refBlock follow as siblings
    return (
      lastItem +                           // "...last tldr string"\n
      `${indent.slice(0, -2)}        ],\n` +  // close items array
      `${indent.slice(0, -2)}      },\n` +    // close tldr object
      eoBlock +                            // expert-opinion block
      refBlock                             // references block
      // Note: we omit `contentClose` (old `]`) and `tldrClose` (old `},`)
      // because they are now absorbed. The content array closes elsewhere.
    );
  }
);

if (count === 0) {
  console.log('No matches found — pattern may differ. Printing lines 104-130:');
  const lines = src.split('\n');
  lines.slice(103, 130).forEach((l, i) => console.log(`${104+i}: ${l}`));
} else {
  console.log(`Fixed ${count} broken tldr blocks.`);
  fs.writeFileSync(
    'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
    src
  );
  // Print result
  const lines = src.split('\n');
  console.log('\n--- Lines 104-135 after fix ---');
  lines.slice(103, 135).forEach((l, i) => console.log(`${104+i}: ${l}`));
}
