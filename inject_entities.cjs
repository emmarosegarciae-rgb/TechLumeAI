const fs = require('fs');
let content = fs.readFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts', 'utf8');

const mapping = {
  "enterprise-ai-agents-production": {
    primaryEntity: "ai-agents",
    supportingEntities: ["langgraph", "crewai", "model-context-protocol", "multi-agent-system", "zero-trust-ai"]
  },
  "open-models-infrastructure-shift": {
    primaryEntity: "llama3",
    supportingEntities: ["meta", "quantization-int4", "fine-tuning-qlora", "ai-finops"]
  },
  "cybersecurity-ai-defense-brief": {
    primaryEntity: "zero-trust-ai",
    supportingEntities: ["prompt-injection", "multi-agent-system"]
  },
  "cloud-cost-architecture-guide": {
    primaryEntity: "ai-finops",
    supportingEntities: ["openai", "anthropic", "retrieval-augmented-generation"]
  },
  "developer-tools-2026": {
    primaryEntity: "prompt-engineering",
    supportingEntities: ["ai-agents", "langgraph"]
  },
  "startup-ai-monetization": {
    primaryEntity: "openai",
    supportingEntities: ["claude-3-5", "anthropic"]
  },
  "robotics-foundation-models": {
    primaryEntity: "vision-language-action",
    supportingEntities: ["meta", "llama3"]
  },
  "data-science-evaluation-stack": {
    primaryEntity: "prompt-engineering",
    supportingEntities: ["llama3", "claude-3-5"]
  }
};

for (const [slug, entities] of Object.entries(mapping)) {
  const regex = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?primaryKeyword:\\s*["'].*?["'],)`);
  content = content.replace(regex, `$1\n    primaryEntity: "${entities.primaryEntity}",\n    supportingEntities: ${JSON.stringify(entities.supportingEntities)},`);
}

fs.writeFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts', content);
console.log("Injected primary and supporting entities.");
