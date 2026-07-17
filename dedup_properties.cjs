const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(file, 'utf8');

// Remove duplicate topicCluster lines right after contentClass + topicCluster lines
src = src.replace(/(contentClass: "[^"]+",\r?\n\s*topicCluster: "[^"]+",\r?\n)\s*topicCluster: "[^"]+",\r?\n/g, '$1');

// Also catch any case where there are two topicCluster lines anywhere nearby
src = src.replace(/topicCluster: "([^"]+)",(\r?\n\s*isCornerstone)/g, '$2'); // remove the old slug-based topicCluster if right above isCornerstone and we already added one

fs.writeFileSync(file, src, 'utf8');
console.log('Successfully deduplicated topicCluster properties in lib/data/articles.ts');
