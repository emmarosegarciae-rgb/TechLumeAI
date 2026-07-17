const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(articlesPath, 'utf8');

// The bad structure is:
//         ]\n      }\n    ],\n      {\n        type: "faq",...items...]\n      }\n  },
// 
// We need:
//         ]\n      },\n      {\n        type: "faq",...items...]\n      }\n    ]\n  },
//
// Change 1: `\n      }\n    ],\n      {\n        type: "faq",`
//        to: `\n      },\n      {\n        type: "faq",`
//
// Change 2: The FAQ block's last line is `      }\n  },`
//       to: `      }\n    ]\n  },`
//
// Doing both transformations:

// Step 1: Fix the opening — move FAQ inside the content array
const badOpen = '\n      }\n    ],\n      {\n        type: "faq",';
const goodOpen = '\n      },\n      {\n        type: "faq",';

let count1 = 0;
while (src.includes(badOpen)) {
  src = src.replace(badOpen, goodOpen);
  count1++;
}
console.log(`Fixed ${count1} opening patterns`);

// Step 2: Fix the closing — add content array closing `]` after each FAQ block
// The FAQ block ends with:   `        }\n      }\n  },`   (last item `}`, faq block `}`, then article object `},`)
// It should end with:        `        }\n      }\n    ]\n  },`
const badClose = '\n      }\n  },\n  {\n    slug:';
const goodClose = '\n      }\n    ]\n  },\n  {\n    slug:';

let count2 = 0;
while (src.includes(badClose)) {
  src = src.replace(badClose, goodClose);
  count2++;
}
console.log(`Fixed ${count2} closing patterns`);

// Also fix the very last article (no next `{\n    slug:` after it)
// Pattern: `        }\n      }\n  }\n]`  (last article in array)
const badCloseLast = '\n      }\n  }\n]';
const goodCloseLast = '\n      }\n    ]\n  }\n]';

let count3 = 0;
while (src.includes(badCloseLast)) {
  src = src.replace(badCloseLast, goodCloseLast);
  count3++;
}
console.log(`Fixed ${count3} last-article closing patterns`);

fs.writeFileSync(articlesPath, src, 'utf8');
console.log('Done. Verify with: Select-String -Pattern "type: .faq." lib/data/articles.ts');
