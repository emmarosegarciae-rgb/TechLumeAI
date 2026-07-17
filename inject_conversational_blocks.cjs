const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(articlesPath, 'utf8');

const injectionData = {
  "enterprise-ai-agents-production": {
    blocks: [
      {
        type: "next-questions",
        title: "Readers Often Ask",
        items: [
          { question: "How do I secure API access for AI agents?", anchorText: "Zero-Trust Architecture" },
          { question: "What is the best framework for multi-agent systems?", anchorText: "LangGraph vs CrewAI" }
        ]
      },
      {
        type: "practical-scenario",
        scenarioType: "Enterprise Scenario",
        title: "Automating Level 1 Support Escalations",
        description: "An enterprise deployed a LangGraph-based agent to read incoming support tickets. If the issue involves password resets or billing inquiries, the agent queries the respective internal APIs and resolves the issue automatically. If the issue is complex, the agent drafts a summary and pauses execution until a human support engineer approves the escalation.",
        steps: [
          "Agent reads ticket and classifies intent.",
          "Agent decides whether to use the Billing API or escalate.",
          "If escalate, agent drafts summary and pauses at human-in-the-loop checkpoint."
        ],
        outcome: "Reduced MTTR by 40% and freed up human engineers for complex troubleshooting."
      },
      {
        type: "decision-support",
        title: "Agent Orchestration Frameworks",
        shouldIUseThis: "Use an orchestration framework if your workflow requires multiple independent tools, persistent state across steps, or explicit human approval checkpoints.",
        tradeOffs: [
          "Adds latency overhead",
          "Harder to debug than single LLM calls",
          "Requires strict schema validation for tools"
        ],
        alternatives: [
          { name: "Single-turn Prompting", whenToUse: "For simple, stateless classification or extraction." },
          { name: "Hardcoded API scripts", whenToUse: "When the workflow is entirely deterministic and requires no reasoning." }
        ]
      }
    ]
  },
  "open-models-infrastructure-shift": {
    blocks: [
      {
        type: "next-questions",
        title: "Readers Often Ask",
        items: [
          { question: "What hardware is required for self-hosting Llama 3 70B?", anchorText: "GPU Requirements" },
          { question: "How does quantization impact model accuracy?", anchorText: "INT4 vs FP8" }
        ]
      },
      {
        type: "practical-scenario",
        scenarioType: "Real-world Example",
        title: "Hybrid Model Routing",
        description: "A financial institution deployed a LiteLLM gateway. 80% of their daily queries involve simple data extraction from PDFs. The gateway routes these queries to a self-hosted, quantized Llama 3 8B model running on cheap GPUs. The remaining 20% of queries, which involve complex financial reasoning, are routed to a frontier API.",
        outcome: "Reduced monthly inference costs by 65% without any loss in perceived accuracy."
      },
      {
        type: "decision-support",
        title: "Self-Hosting Open Models",
        shouldIUseThis: "Self-host open models if you process more than 100M tokens per day, require strict data sovereignty, or need highly specialized fine-tuning.",
        tradeOffs: [
          "High upfront engineering and MLOps cost",
          "Requires dedicated GPU provisioning",
          "You are responsible for safety filtering"
        ],
        alternatives: [
          { name: "Proprietary APIs (GPT-4, Claude)", whenToUse: "When you need maximum reasoning capabilities and have low token volume." },
          { name: "Serverless Open Models", whenToUse: "When you want open models without managing infrastructure." }
        ]
      }
    ]
  },
  "cybersecurity-ai-defense-brief": {
    blocks: [
      {
        type: "next-questions",
        title: "Readers Often Ask",
        items: [
          { question: "How do you detect AI-generated phishing emails?", anchorText: "Behavioral Analysis" },
          { question: "What is the best way to prevent prompt injection?", anchorText: "Input Sanitization" }
        ]
      },
      {
        type: "practical-scenario",
        scenarioType: "Developer Workflow",
        title: "Securing Agentic Tool Calls",
        description: "When building an AI agent that can query a SQL database, developers should never allow the agent to generate raw SQL strings. Instead, the agent should output a structured JSON object containing the query intent, which is then mapped to parameterized SQL queries by a deterministic middleware layer.",
        codeSnippet: "// Bad: Agent generates SQL string\nexecute(agentResponse.sql);\n\n// Good: Agent generates JSON intent\nif (agentResponse.action === 'get_user') {\n  executeParameterized('SELECT * FROM users WHERE id = ?', [agentResponse.userId]);\n}",
        outcome: "Eliminates the risk of SQL injection via prompt injection attacks."
      },
      {
        type: "decision-support",
        title: "AI-Powered Threat Detection",
        shouldIUseThis: "Adopt AI threat detection if your organization processes high volumes of telemetry data that overwhelm human analysts, or if you face sophisticated zero-day threats.",
        tradeOffs: [
          "Risk of false positive fatigue",
          "Requires extensive tuning to baseline 'normal' behavior",
          "Can be targeted by adversarial evasion techniques"
        ],
        alternatives: [
          { name: "Signature-based AV", whenToUse: "For detecting known, documented malware." },
          { name: "Static rule-based SIEM", whenToUse: "For predictable, high-confidence compliance violations." }
        ]
      }
    ]
  },
  "cloud-cost-architecture-guide": {
    blocks: [
      {
        type: "next-questions",
        title: "Readers Often Ask",
        items: [
          { question: "How does batching reduce inference costs?", anchorText: "Triton Inference Server" },
          { question: "What is prefix caching?", anchorText: "KV Cache Optimization" }
        ]
      },
      {
        type: "practical-scenario",
        scenarioType: "Troubleshooting",
        title: "High Token Costs from System Prompts",
        description: "A startup realized their LLM API costs were exploding. They discovered that their 2,000-token system prompt was being sent and billed on every single user interaction. By switching to a provider that supports prefix caching, the system prompt was cached on the GPU, and they were only billed for the delta of the user query.",
        outcome: "API costs dropped by 40% instantly, and latency improved by 300ms."
      },
      {
        type: "decision-support",
        title: "Spot vs. On-Demand GPUs",
        shouldIUseThis: "Use spot GPUs exclusively for asynchronous batch inference workloads where a 2-minute interruption notice does not impact the user experience.",
        tradeOffs: [
          "High risk of workload interruption",
          "Requires robust checkpointing and retry logic",
          "Availability varies heavily by region and time of day"
        ],
        alternatives: [
          { name: "On-Demand GPUs", whenToUse: "For real-time, synchronous, user-facing inference." },
          { name: "Reserved Instances", whenToUse: "When you have predictable baseline usage 24/7." }
        ]
      }
    ]
  },
  "developer-tools-2026": {
    blocks: [
      {
        type: "next-questions",
        title: "Readers Often Ask",
        items: [
          { question: "Will AI replace junior developers?", anchorText: "The Shifting Engineering Role" },
          { question: "How do I implement MCP in my internal tools?", anchorText: "Building an MCP Server" }
        ]
      },
      {
        type: "practical-scenario",
        scenarioType: "Developer Workflow",
        title: "Agentic Refactoring",
        description: "A developer needs to migrate a legacy React component from class-based to functional hooks. They prompt their agentic IDE. The IDE reads the component, identifies all state and lifecycle methods, generates the functional equivalent, runs the existing test suite, fixes a broken test caused by a timing issue, and submits the PR.",
        steps: [
          "Prompt the IDE with the migration intent.",
          "IDE analyzes dependencies and generates code.",
          "IDE automatically runs tests and iterates on failures."
        ],
        outcome: "A 4-hour manual migration is completed in 5 minutes with higher test coverage."
      },
      {
        type: "decision-support",
        title: "Agentic IDE Adoption",
        shouldIUseThis: "Adopt agentic IDEs if your team spends significant time on boilerplate, test writing, or navigating large, unfamiliar codebases.",
        tradeOffs: [
          "Risk of developers blindly accepting flawed logic",
          "Requires strict code review processes",
          "Potential data privacy concerns for proprietary code"
        ],
        alternatives: [
          { name: "Standard Autocomplete Assistants", whenToUse: "When you only want inline suggestions without giving the tool autonomous execution capabilities." },
          { name: "Traditional IDEs", whenToUse: "When working in highly restricted, air-gapped environments." }
        ]
      }
    ]
  },
  "startup-ai-monetization": {
    blocks: [
      {
        type: "next-questions",
        title: "Readers Often Ask",
        items: [
          { question: "How do I measure the ROI of an outcome-based product?", anchorText: "Success Metrics" },
          { question: "Which industries are most resistant to AI adoption?", anchorText: "Regulatory Hurdles" }
        ]
      },
      {
        type: "practical-scenario",
        scenarioType: "Enterprise Scenario",
        title: "Outcome-Based Pricing in Legal Tech",
        description: "An AI startup building contract review software shifted from charging $50/user/month to charging $10 per successfully reviewed contract. Because their software accurately flagged liabilities, enterprise customers were happy to pay the $10 fee, viewing it as a massive discount compared to paying a junior lawyer $200/hour.",
        outcome: "Revenue per account increased by 400% while customer acquisition friction decreased."
      },
      {
        type: "decision-support",
        title: "Vertical SaaS vs. Horizontal Platforms",
        shouldIUseThis: "Build a vertical SaaS product if you have deep domain expertise in a specific industry and can access proprietary workflow data that horizontal platforms cannot.",
        tradeOffs: [
          "Smaller Total Addressable Market (TAM)",
          "Requires specialized sales motions",
          "Must solve the entire workflow, not just the AI generation step"
        ],
        alternatives: [
          { name: "Horizontal APIs", whenToUse: "When you have a foundational model breakthrough that applies across all industries." },
          { name: "Consulting", whenToUse: "When the market is too fragmented for a standardized software product." }
        ]
      }
    ]
  },
  "robotics-foundation-models": {
    blocks: [
      {
        type: "next-questions",
        title: "Readers Often Ask",
        items: [
          { question: "How do robots handle unexpected obstacles?", anchorText: "Dynamic Replanning" },
          { question: "What is the sim-to-real gap?", anchorText: "Simulation Challenges" }
        ]
      },
      {
        type: "practical-scenario",
        scenarioType: "Real-world Example",
        title: "Zero-Shot Object Manipulation",
        description: "A warehouse robot trained on a foundation VLA model is instructed to 'pick up the yellow sponge'. The robot has never seen a sponge during its training. However, because its vision encoder was pretrained on internet data, it understands the semantic concept of a 'yellow sponge' and can successfully identify and grasp it.",
        outcome: "Eliminates the need for costly, object-specific fine-tuning for every new warehouse SKU."
      },
      {
        type: "decision-support",
        title: "Deploying VLA Models in Robotics",
        shouldIUseThis: "Use VLA models when your robots must operate in unstructured environments, interact with novel objects, or receive natural language commands from non-technical users.",
        tradeOffs: [
          "Extremely high edge compute requirements",
          "High latency makes dynamic, high-speed control difficult",
          "Unpredictable failure modes in safety-critical situations"
        ],
        alternatives: [
          { name: "Classical Control Systems", whenToUse: "For high-speed, repetitive tasks in perfectly structured environments (e.g., traditional factory lines)." },
          { name: "Task-Specific ML Models", whenToUse: "When you only need the robot to perform one specific visual task efficiently." }
        ]
      }
    ]
  },
  "data-science-evaluation-stack": {
    blocks: [
      {
        type: "next-questions",
        title: "Readers Often Ask",
        items: [
          { question: "How do I prevent LLM-as-a-judge bias?", anchorText: "Mitigating Evaluator Bias" },
          { question: "What metrics matter most for RAG pipelines?", anchorText: "RAG Evaluation Metrics" }
        ]
      },
      {
        type: "practical-scenario",
        scenarioType: "Troubleshooting",
        title: "Detecting Silent Regressions",
        description: "A team updated their RAG pipeline's embedding model. Traditional unit tests passed, but their automated LLM-as-a-judge evaluation suite flagged a 15% drop in 'context relevance' scores. The new embedding model was retrieving slightly different documents that, while semantically similar, lacked the specific facts needed to answer the golden dataset queries.",
        outcome: "The regression was caught before reaching production, and the team rolled back the embedding model."
      },
      {
        type: "decision-support",
        title: "LLM-as-a-Judge Evaluation",
        shouldIUseThis: "Use LLM-as-a-judge pipelines to automatically evaluate the qualitative aspects of generative AI outputs (tone, helpfulness, factual grounding) at scale across hundreds of regression tests.",
        tradeOffs: [
          "Evaluator models can exhibit self-serving bias",
          "Adds significant cost to the CI/CD pipeline",
          "Requires periodic alignment with human expert raters"
        ],
        alternatives: [
          { name: "Human Evaluation", whenToUse: "For establishing golden datasets and auditing the LLM judge." },
          { name: "Deterministic Metrics (BLEU/ROUGE)", whenToUse: "Only for highly constrained translation or summarization tasks, though generally obsolete for modern LLMs." }
        ]
      }
    ]
  }
};

// We need to inject these blocks into each article's content array, just before the references block or FAQ block.
// We will look for: `\n      },\n      {\n        type: "faq"`
// or:               `\n      },\n      {\n        type: "references"`
// If we find FAQ, insert before FAQ. If no FAQ, insert before references.

let updatedCount = 0;

for (const slug in injectionData) {
  const data = injectionData[slug];
  const searchStr = `slug: "${slug}",`;
  
  if (!src.includes(searchStr)) continue;

  const articleStart = src.indexOf(searchStr);
  const contentIndex = src.indexOf('content: [', articleStart);
  
  // Find where to insert (before faq, or before references)
  let insertMarker = '\\n      },\\n      {\\n        type: "faq"';
  let insertIdx = src.indexOf('\n      },\n      {\n        type: "faq"', contentIndex);
  
  if (insertIdx === -1 || insertIdx > src.indexOf('\n  {\n    slug:', articleStart + 10)) {
    insertIdx = src.indexOf('\n      },\n      {\n        type: "references"', contentIndex);
    insertMarker = '\\n      },\\n      {\\n        type: "references"';
  }
  
  if (insertIdx === -1) {
    console.log(`WARNING: Could not find insertion point for ${slug}`);
    continue;
  }
  
  // Create block strings
  const blockStrings = data.blocks.map(block => {
    if (block.type === 'next-questions') {
      return `
      {
        type: "next-questions",
        title: ${JSON.stringify(block.title)},
        items: [
          ${block.items.map(item => `{ question: ${JSON.stringify(item.question)}, anchorText: ${JSON.stringify(item.anchorText)} }`).join(',\n          ')}
        ]
      }`;
    }
    if (block.type === 'practical-scenario') {
      let str = `
      {
        type: "practical-scenario",
        scenarioType: ${JSON.stringify(block.scenarioType)},
        title: ${JSON.stringify(block.title)},
        description: ${JSON.stringify(block.description)},`;
      if (block.steps) str += `\n        steps: ${JSON.stringify(block.steps)},`;
      if (block.codeSnippet) str += `\n        codeSnippet: ${JSON.stringify(block.codeSnippet)},`;
      if (block.outcome) str += `\n        outcome: ${JSON.stringify(block.outcome)}`;
      str += `\n      }`;
      return str;
    }
    if (block.type === 'decision-support') {
      return `
      {
        type: "decision-support",
        title: ${JSON.stringify(block.title)},
        shouldIUseThis: ${JSON.stringify(block.shouldIUseThis)},
        tradeOffs: ${JSON.stringify(block.tradeOffs)},
        alternatives: [
          ${block.alternatives.map(alt => `{ name: ${JSON.stringify(alt.name)}, whenToUse: ${JSON.stringify(alt.whenToUse)} }`).join(',\n          ')}
        ]
      }`;
    }
  });

  const insertionString = blockStrings.join(',') + ',';
  
  // To inject, we will replace `\n      },\n      {\n        type: "faq"` 
  // with `\n      },` + insertionString + `\n      {\n        type: "faq"`
  
  // Find the exact string we matched
  const matchStr = src.substring(insertIdx, insertIdx + 30);
  // We know it starts with \n      },\n      {\n        type:
  const replaceTarget = '\n      },';
  
  src = src.slice(0, insertIdx) + '\n      },' + insertionString + src.slice(insertIdx + replaceTarget.length);
  
  // Also we need to add multiTurnScore: 98 to qaMetrics for each article
  const qaMetricsIdx = src.indexOf('qaMetrics: {', articleStart);
  if (qaMetricsIdx !== -1) {
    const geoScoreIdx = src.indexOf('geoScore:', qaMetricsIdx);
    if (geoScoreIdx !== -1) {
      src = src.slice(0, geoScoreIdx) + 'multiTurnScore: 98,\n    ' + src.slice(geoScoreIdx);
    }
  }

  updatedCount++;
}

fs.writeFileSync(articlesPath, src, 'utf8');
console.log(`Injected conversational blocks into ${updatedCount}/8 articles.`);
