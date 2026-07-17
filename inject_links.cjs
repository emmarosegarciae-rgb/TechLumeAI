const fs = require('fs');
let content = fs.readFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts', 'utf8');

const additionalLinks = {
  "enterprise-ai-agents-production": `\n      { anchorText: "LangGraph Integration", targetSlug: "langgraph", relationshipType: "Implements", targetType: "Related FAQ" },`,
  "open-models-infrastructure-shift": `\n      { anchorText: "Model Quantization (INT4)", targetSlug: "quantization-int4", relationshipType: "Compatible With", targetType: "Glossary Entry" },`,
  "cybersecurity-ai-defense-brief": `\n      { anchorText: "Prompt Injection Attack", targetSlug: "prompt-injection", relationshipType: "Defends Against", targetType: "Glossary Entry" },`,
  "cloud-cost-architecture-guide": `\n      { anchorText: "AI FinOps & Cloud Economics", targetSlug: "ai-finops", relationshipType: "Implements", targetType: "Glossary Entry" },`,
  "developer-tools-2026": `\n      { anchorText: "Prompt Engineering", targetSlug: "prompt-engineering", relationshipType: "Uses", targetType: "Glossary Entry" },`,
  "startup-ai-monetization": `\n      { anchorText: "OpenAI Foundation", targetSlug: "openai", relationshipType: "Powered By", targetType: "Related Topic" },`,
  "robotics-foundation-models": `\n      { anchorText: "Vision-Language-Action Models", targetSlug: "vision-language-action", relationshipType: "Depends On", targetType: "Glossary Entry" },`,
  "data-science-evaluation-stack": `\n      { anchorText: "Claude 3.5 Evaluation", targetSlug: "claude-3-5", relationshipType: "Evaluates", targetType: "Related Topic" },`
};

for (const [slug, links] of Object.entries(additionalLinks)) {
  const regex = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?internalLinkGraph:\\s*\\[)([\\s\\S]*?)(    \\],)`);
  
  content = content.replace(regex, (match, p1, p2, p3) => {
    return p1 + p2.replace(/,\s*$/, '') + "," + links + "\n" + p3;
  });
}

fs.writeFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts', content);
console.log("Injected internal links.");
