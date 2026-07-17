const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(articlesPath, 'utf8');

const expectedSlugs = [
  "enterprise-ai-agents-production",
  "open-models-infrastructure-shift",
  "cybersecurity-ai-defense-brief",
  "cloud-cost-architecture-guide",
  "developer-tools-2026",
  "startup-ai-monetization",
  "robotics-foundation-models",
  "data-science-evaluation-stack"
];

let failed = 0;

for (const slug of expectedSlugs) {
  const searchStr = `slug: "${slug}",`;
  if (!src.includes(searchStr)) {
    console.log(`ERROR: Could not find slug ${slug}`);
    failed++;
    continue;
  }
  const articleStart = src.indexOf(searchStr);
  const contentIndex = src.indexOf("content: [", articleStart);
  const nextSlugIndex = src.indexOf("slug: ", contentIndex);
  
  const contentToNextArticle = src.substring(contentIndex, nextSlugIndex !== -1 ? nextSlugIndex : src.length);
  if (!contentToNextArticle.includes('type: "answer"')) {
    console.log(`ERROR: Article ${slug} does not have an answer block.`);
    failed++;
  } else {
    console.log(`SUCCESS: Article ${slug} has an answer block.`);
  }
}

if (failed === 0) {
  console.log("All 8 articles have answer blocks. AEO audit passed.");
} else {
  console.log(`${failed} articles failed the AEO audit.`);
  process.exit(1);
}
