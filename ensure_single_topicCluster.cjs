const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(file, 'utf8');

const clusterMap = {
  "enterprise-ai-agents-production": "Enterprise Multi-Agent Systems",
  "open-models-infrastructure-shift": "Open Model Hosting & vLLM Serving",
  "cybersecurity-ai-defense-brief": "AI Security & Adversarial Defense",
  "cloud-cost-architecture-guide": "AI FinOps & Inference Optimization",
  "developer-tools-2026": "Agentic IDEs & Autonomous Coding",
  "startup-ai-monetization": "AI Commercial Strategy & Pricing",
  "robotics-foundation-models": "Vision-Language-Action (VLA) Robotics",
  "data-science-evaluation-stack": "LLM Evaluation & Quality Assurance"
};

for (const slug in clusterMap) {
  const cluster = clusterMap[slug];
  const searchStr = `slug: "${slug}",`;
  if (!src.includes(searchStr)) continue;

  const start = src.indexOf(searchStr);
  const contentIdx = src.indexOf('content: [', start);
  if (contentIdx === -1) continue;

  let header = src.slice(start, contentIdx);
  // Remove any existing topicCluster line in header
  header = header.replace(/\r?\n\s*topicCluster: "[^"]+",?/g, '');
  
  // Insert topicCluster directly below contentClass
  if (header.includes('contentClass:')) {
    header = header.replace(/(contentClass: "[^"]+",?)/, `$1\n    topicCluster: "${cluster}",`);
  } else if (header.includes('primaryIntent:')) {
    header = header.replace(/(primaryIntent: "[^"]+",?)/, `$1\n    topicCluster: "${cluster}",`);
  }

  src = src.slice(0, start) + header + src.slice(contentIdx);
}

fs.writeFileSync(file, src, 'utf8');
console.log('Successfully enforced exact single topicCluster for all flagship articles.');
