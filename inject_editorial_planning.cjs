const fs = require("fs");
const path = require("path");

const articlesPath = path.join(__dirname, "lib", "data", "articles.ts");
let content = fs.readFileSync(articlesPath, "utf8");

const metadataMappings = {
  "enterprise-ai-agents-production": {
    pillar: "AI Engineering & Large Language Models",
    cluster: "Enterprise Multi-Agent Systems & MCP",
    intent: "Architecture Guide",
    audience: "Staff Engineers & Architects",
    relatedTuts: ["sandboxing-mcp-code-execution", "langgraph-vs-llamaindex-persistence-benchmark"],
    score: { kv: 10, ev: 10, cc: 10, rq: 10, il: 10, es: 10, ta: 10, vq: 9, fe: 10, ar: 10, tot: 99 }
  },
  "open-models-infrastructure-shift": {
    pillar: "AI Infrastructure & Hardware",
    cluster: "Open-Weight Model Serving & GPU Economics",
    intent: "Architecture Guide",
    audience: "Staff Engineers & Architects",
    relatedTuts: ["speculative-decoding-v2-llama3-benchmark", "vllm-pagedattention-sizing-guide"],
    score: { kv: 10, ev: 10, cc: 10, rq: 10, il: 10, es: 10, ta: 10, vq: 9, fe: 10, ar: 10, tot: 99 }
  },
  "cybersecurity-ai-defense-brief": {
    pillar: "Cybersecurity & AI",
    cluster: "Zero-Trust AI Security & Adversarial Defense",
    intent: "Architecture Guide",
    audience: "Security & Compliance Leads",
    relatedTuts: ["building-4layer-semantic-firewall", "detecting-indirect-rag-injection-hr"],
    score: { kv: 10, ev: 10, cc: 10, rq: 10, il: 10, es: 10, ta: 10, vq: 10, fe: 10, ar: 10, tot: 100 }
  },
  "cloud-cost-architecture-guide": {
    pillar: "Enterprise AI",
    cluster: "AI FinOps, Governance & Multi-Model Routing",
    intent: "Architecture Guide",
    audience: "C-Suite & IT Leadership",
    relatedTuts: ["dynamic-model-routing-proxy-tco", "outcome-based-metering-tiers-saas"],
    score: { kv: 10, ev: 10, cc: 10, rq: 9, il: 10, es: 10, ta: 10, vq: 9, fe: 10, ar: 10, tot: 98 }
  },
  "developer-tools-2026": {
    pillar: "AI Tools",
    cluster: "AI-Native Developer Stack & Autonomous IDEs",
    intent: "Evaluation & Benchmarks",
    audience: "Full-Stack & AI Developers",
    relatedTuts: ["cursor-vs-windsurf-vs-copilot-benchmark", "ast-context-engine-token-overflow"],
    score: { kv: 10, ev: 9, cc: 10, rq: 10, il: 10, es: 10, ta: 10, vq: 10, fe: 10, ar: 10, tot: 99 }
  },
  "startup-ai-monetization": {
    pillar: "AI Business",
    cluster: "AI SaaS Economics & Commercial Strategy",
    intent: "Strategic Playbook",
    audience: "C-Suite & IT Leadership",
    relatedTuts: ["outcome-based-metering-tiers-saas", "dynamic-model-routing-proxy-tco"],
    score: { kv: 10, ev: 10, cc: 10, rq: 9, il: 10, es: 9, ta: 10, vq: 9, fe: 10, ar: 10, tot: 97 }
  },
  "robotics-foundation-models": {
    pillar: "Future Technology",
    cluster: "Vision-Language-Action (VLA) Foundation Robotics",
    intent: "Architecture Guide",
    audience: "Staff Engineers & Architects",
    relatedTuts: ["vla-hierarchical-dsp-control", "open-models-infrastructure-shift"],
    score: { kv: 10, ev: 9, cc: 10, rq: 10, il: 9, es: 10, ta: 10, vq: 9, fe: 10, ar: 10, tot: 97 }
  },
  "data-science-evaluation-stack": {
    pillar: "Programming & Software Engineering",
    cluster: "Automated LLM Evaluation & Quality Engineering",
    intent: "Evaluation & Benchmarks",
    audience: "Data Scientists & MLOps",
    relatedTuts: ["automating-ragas-github-actions", "calibrating-llm-as-a-judge-pairwise"],
    score: { kv: 10, ev: 10, cc: 10, rq: 10, il: 10, es: 10, ta: 10, vq: 9, fe: 9, ar: 10, tot: 98 }
  }
};

let modified = false;

for (const [slug, meta] of Object.entries(metadataMappings)) {
  const slugMarker = `slug: "${slug}",`;
  if (!content.includes(slugMarker)) {
    console.warn(`Could not find slug: ${slug}`);
    continue;
  }

  const regex = new RegExp(`slug: "${slug}",[\\s\\S]*?isCornerstone:\\s*(true|false),`, "g");
  content = content.replace(regex, (match) => {
    if (match.includes("publicationMetadata:")) {
      return match;
    }
    modified = true;
    const injection = `publicationMetadata: {
      editorialPillar: "${meta.pillar}",
      topicCluster: "${meta.cluster}",
      primaryEntity: "${slug.split("-")[0]}",
      secondaryEntities: ["langgraph", "model-context-protocol", "vllm", "zero-trust-ai"],
      searchIntent: "${meta.intent}",
      targetAudience: "${meta.audience}",
      knowledgeRelationships: {
        cornerstoneSlug: "${slug}",
        parentTopic: "${meta.cluster}",
        relatedTutorials: ${JSON.stringify(meta.relatedTuts)},
        comparisonArticles: ["langgraph-vs-llamaindex-persistence-benchmark", "cursor-vs-windsurf-vs-copilot-benchmark"],
        glossaryTerms: ["model-context-protocol", "retrieval-augmented-generation", "multi-agent-system"]
      },
      futureExpansionOpportunities: ["Automated CI/CD Gate Playbook", "Hardware-Enforced Enclave Verification", "Spot GPU Arbitrage Runbook"]
    },
    editorialScorecard: {
      knowledgeValue: ${meta.score.kv},
      enterpriseValue: ${meta.score.ev},
      clusterContribution: ${meta.score.cc},
      researchQuality: ${meta.score.rq},
      internalLinking: ${meta.score.il},
      entityStrength: ${meta.score.es},
      topicalAuthority: ${meta.score.ta},
      visualQuality: ${meta.score.vq},
      futureExpandability: ${meta.score.fe},
      aiReadiness: ${meta.score.ar},
      totalScore: ${meta.score.tot}
    },
    isCornerstone: true,`;

    return match.replace(/isCornerstone:\s*(true|false),/, injection);
  });
}

if (modified) {
  fs.writeFileSync(articlesPath, content, "utf8");
  console.log("Successfully enriched all 8 articles in lib/data/articles.ts with Phase 9 metadata!");
} else {
  console.log("No modification needed or already enriched.");
}
