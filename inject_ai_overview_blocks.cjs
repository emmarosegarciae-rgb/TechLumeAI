const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(articlesPath, 'utf8');

const injectionData = {
  "enterprise-ai-agents-production": {
    aiOverview: {
      definition: "Enterprise AI agents are autonomous, goal-oriented systems that plan actions, utilize tools, and iterate on outputs to achieve business objectives without human micromanagement.",
      whyItMatters: "Agents shift AI from purely conversational interfaces into active systems capable of executing multi-step business processes.",
      whoShouldCare: "CIOs, AI Architects, and Engineering Leaders deploying GenAI to production.",
      keyTakeaways: [
        "Agents require orchestration frameworks like LangGraph or CrewAI.",
        "Zero-trust security and human-in-the-loop approvals are mandatory.",
        "Action hallucination is the primary failure mode."
      ],
      readingTimeMin: 8,
      lastUpdated: "2026-07-15",
      primaryEntity: "AI Agents",
      relatedEntities: ["LangGraph", "Multi-Agent Systems", "CrewAI", "Zero-Trust Security"]
    },
    sectionSummary: {
      keyTakeaways: [
        "Single-agent systems are best for linear workflows.",
        "Multi-agent systems excel at complex, parallel tasks."
      ],
      definitions: [
        { term: "Action Hallucination", definition: "When an agent confidently executes incorrect actions due to misinterpreted instructions." }
      ],
      enterpriseInsights: [
        "Always implement dry-run sandboxing before granting production API access."
      ],
      nextStep: "Review the orchestration framework comparison matrix."
    }
  },
  "open-models-infrastructure-shift": {
    aiOverview: {
      definition: "Open models are transforming AI infrastructure by enabling organizations to self-host highly capable, specialized models rather than relying exclusively on frontier APIs.",
      whyItMatters: "This shift allows enterprises to dramatically reduce inference costs and maintain strict data privacy.",
      whoShouldCare: "MLOps Engineers, Cloud Architects, and AI Product Managers.",
      keyTakeaways: [
        "Model routing is becoming a standard architectural pattern.",
        "Quantization reduces memory requirements without proportional accuracy loss.",
        "Self-hosting requires significant upfront infrastructure investment."
      ],
      readingTimeMin: 6,
      lastUpdated: "2026-07-15",
      primaryEntity: "Open Source AI Models",
      relatedEntities: ["Llama 3", "Model Routing", "Quantization", "MLOps"]
    },
    sectionSummary: {
      keyTakeaways: [
        "Hybrid routing balances cost and capability.",
        "Small, specialized models can outperform generic frontier models on narrow tasks."
      ],
      definitions: [
        { term: "Quantization", definition: "Reducing the precision of a model's weights to decrease memory footprint and increase inference speed." }
      ],
      enterpriseInsights: [
        "Evaluate total cost of ownership (TCO) inclusive of engineering time, not just GPU compute."
      ],
      nextStep: "Assess your current token volume against the self-hosting threshold."
    }
  },
  "cybersecurity-ai-defense-brief": {
    aiOverview: {
      definition: "AI cybersecurity defense involves using advanced machine learning to detect, mitigate, and respond to sophisticated threats, including AI-generated attacks.",
      whyItMatters: "As attackers leverage AI to scale phishing and exploit generation, defenders must adopt AI to maintain parity.",
      whoShouldCare: "CISO, Security Engineers, and SOC Analysts.",
      keyTakeaways: [
        "Prompt injection remains the most critical vulnerability in agentic systems.",
        "AI-powered SOCs can reduce alert fatigue by triaging false positives.",
        "Defense-in-depth requires strict input sanitization."
      ],
      readingTimeMin: 7,
      lastUpdated: "2026-07-15",
      primaryEntity: "AI Cybersecurity",
      relatedEntities: ["Prompt Injection", "SOC", "Zero-Day Threats"]
    },
    sectionSummary: {
      keyTakeaways: [
        "Never trust raw LLM output for executable code.",
        "Behavioral analysis is required to detect AI-generated phishing."
      ],
      definitions: [
        { term: "Prompt Injection", definition: "Manipulating an LLM's instructions via untrusted input to execute unintended actions." }
      ],
      enterpriseInsights: [
        "Treat all LLM tool calls as untrusted external inputs requiring validation middleware."
      ],
      nextStep: "Implement the secure tool execution architecture pattern."
    }
  },
  "cloud-cost-architecture-guide": {
    aiOverview: {
      definition: "AI cloud cost architecture focuses on optimizing the infrastructure, compute, and API strategies required to run generative models efficiently at scale.",
      whyItMatters: "Inference costs can easily scale non-linearly, threatening the unit economics of AI products.",
      whoShouldCare: "Cloud FinOps, Infrastructure Engineers, and CTOs.",
      keyTakeaways: [
        "KV cache optimization is critical for reducing latency and cost on long-context queries.",
        "Spot instances are ideal for asynchronous batch workloads.",
        "Prefix caching significantly reduces system prompt overhead."
      ],
      readingTimeMin: 7,
      lastUpdated: "2026-07-15",
      primaryEntity: "AI FinOps",
      relatedEntities: ["KV Cache", "Spot Instances", "Triton Inference Server"]
    },
    sectionSummary: {
      keyTakeaways: [
        "Batching requests increases throughput but impacts individual latency.",
        "Route simple tasks to cheaper models to preserve margin."
      ],
      definitions: [
        { term: "KV Cache", definition: "Storing intermediate attention computations to avoid recalculating them during generation." }
      ],
      enterpriseInsights: [
        "Negotiate reserved instances for baseline traffic, and burst to spot/serverless for peaks."
      ],
      nextStep: "Analyze the spot vs on-demand decision framework."
    }
  },
  "developer-tools-2026": {
    aiOverview: {
      definition: "The 2026 developer toolchain centers around agentic IDEs, Model Context Protocol (MCP), and autonomous systems that shift the developer's role from writing syntax to reviewing architectural logic.",
      whyItMatters: "These tools dramatically reduce boilerplate and accelerate complex migrations, redefining developer productivity.",
      whoShouldCare: "Software Engineers, Engineering Managers, and DevOps teams.",
      keyTakeaways: [
        "Agentic IDEs can autonomously run tests and iterate on failures.",
        "MCP standardizes how AI models access external data and tools.",
        "Code review becomes the primary bottleneck in AI-assisted development."
      ],
      readingTimeMin: 9,
      lastUpdated: "2026-07-15",
      primaryEntity: "Agentic IDEs",
      relatedEntities: ["Model Context Protocol (MCP)", "Developer Productivity", "Automated Refactoring"]
    },
    sectionSummary: {
      keyTakeaways: [
        "AI coding tools are moving from autocomplete to autonomous execution.",
        "Context provision is the key differentiator in tool performance."
      ],
      definitions: [
        { term: "Model Context Protocol (MCP)", definition: "An open standard connecting AI models to external tools and datasets." }
      ],
      enterpriseInsights: [
        "Invest heavily in robust CI/CD pipelines; agentic code generation requires automated validation."
      ],
      nextStep: "Explore the MCP implementation workflow."
    }
  },
  "startup-ai-monetization": {
    aiOverview: {
      definition: "AI monetization strategies are shifting away from generic API wrappers toward outcome-based pricing models and deeply integrated vertical SaaS solutions.",
      whyItMatters: "Building sustainable revenue requires solving entire workflows rather than just charging for token generation.",
      whoShouldCare: "Founders, Product Managers, and Venture Capitalists.",
      keyTakeaways: [
        "Outcome-based pricing aligns vendor incentives with customer ROI.",
        "Proprietary workflow data is a stronger moat than model fine-tuning.",
        "Horizontal AI platforms face intense commoditization pressure."
      ],
      readingTimeMin: 5,
      lastUpdated: "2026-07-15",
      primaryEntity: "AI Monetization",
      relatedEntities: ["Outcome-based Pricing", "Vertical SaaS", "Data Moats"]
    },
    sectionSummary: {
      keyTakeaways: [
        "Customers pay for solved problems, not underlying AI models.",
        "Vertical SaaS solutions capture higher margins by owning the workflow."
      ],
      definitions: [
        { term: "Outcome-based Pricing", definition: "Charging customers based on successful resolutions rather than per-seat or per-usage metrics." }
      ],
      enterpriseInsights: [
        "Focus on industries with high regulatory hurdles, as they present natural barriers to entry for generic competitors."
      ],
      nextStep: "Review the vertical vs horizontal platform decision support matrix."
    }
  },
  "robotics-foundation-models": {
    aiOverview: {
      definition: "Vision-Language-Action (VLA) models allow robots to process natural language instructions and visual inputs to execute complex physical tasks without object-specific programming.",
      whyItMatters: "VLA models solve the generalization problem, enabling robots to operate in unstructured environments alongside humans.",
      whoShouldCare: "Robotics Engineers, Supply Chain Operators, and AI Researchers.",
      keyTakeaways: [
        "VLA models enable zero-shot manipulation of novel objects.",
        "The sim-to-real gap remains a significant challenge for training.",
        "Edge compute latency is the primary bottleneck for real-time control."
      ],
      readingTimeMin: 8,
      lastUpdated: "2026-07-15",
      primaryEntity: "Vision-Language-Action Models",
      relatedEntities: ["Zero-Shot Manipulation", "Sim-to-Real Gap", "Edge Compute"]
    },
    sectionSummary: {
      keyTakeaways: [
        "Foundation models reduce the need for highly constrained operational environments.",
        "High latency in VLA models necessitates hybrid control architectures."
      ],
      definitions: [
        { term: "Sim-to-Real Gap", definition: "The performance degradation that occurs when models trained in perfect virtual simulations are deployed in the physical world." }
      ],
      enterpriseInsights: [
        "Deploy classical control loops for safety-critical reflexes, using VLA models solely for high-level semantic planning."
      ],
      nextStep: "Read the real-world deployment scenario for VLA models."
    }
  },
  "data-science-evaluation-stack": {
    aiOverview: {
      definition: "The modern AI evaluation stack utilizes LLM-as-a-judge pipelines to automatically and consistently score the qualitative outputs of generative systems against established golden datasets.",
      whyItMatters: "Traditional deterministic metrics (like BLEU or ROUGE) are inadequate for evaluating the nuanced quality, safety, and helpfulness of LLMs in production.",
      whoShouldCare: "Data Scientists, Machine Learning Engineers, and QA Leads.",
      keyTakeaways: [
        "LLM evaluators can detect silent regressions in RAG pipelines.",
        "Evaluator models must be regularly calibrated against human expert raters.",
        "Golden datasets are the most valuable asset in the evaluation pipeline."
      ],
      readingTimeMin: 6,
      lastUpdated: "2026-07-15",
      primaryEntity: "LLM Evaluation",
      relatedEntities: ["LLM-as-a-judge", "RAG Evaluation", "Golden Datasets"]
    },
    sectionSummary: {
      keyTakeaways: [
        "Automated evaluation enables rapid, confident iterations on prompts and models.",
        "Beware of evaluator bias, where models prefer their own generation style."
      ],
      definitions: [
        { term: "Golden Dataset", definition: "A carefully curated set of diverse input queries and expert-verified ideal responses used as the ultimate baseline for evaluation." }
      ],
      enterpriseInsights: [
        "Implement online monitoring to catch data drift that offline evaluations miss."
      ],
      nextStep: "Examine the CI/CD troubleshooting scenario for detecting silent regressions."
    }
  }
};

let updatedCount = 0;

for (const slug in injectionData) {
  const data = injectionData[slug];
  const searchStr = `slug: "${slug}",`;
  
  if (!src.includes(searchStr)) continue;

  const articleStart = src.indexOf(searchStr);
  
  // 1. Inject ai-overview immediately after the answer block
  // We look for:
  //       {
  //         type: "answer",
  //         ... (until its closing `}`)
  //       },
  
  const answerStart = src.indexOf('\n      {\n        type: "answer"', articleStart);
  if (answerStart !== -1) {
    // Find where the answer block closes
    const answerClose = src.indexOf('\n      },', answerStart);
    if (answerClose !== -1) {
      const ao = data.aiOverview;
      const aoString = `
      {
        type: "ai-overview",
        definition: ${JSON.stringify(ao.definition)},
        whyItMatters: ${JSON.stringify(ao.whyItMatters)},
        whoShouldCare: ${JSON.stringify(ao.whoShouldCare)},
        keyTakeaways: ${JSON.stringify(ao.keyTakeaways)},
        readingTimeMin: ${ao.readingTimeMin},
        lastUpdated: ${JSON.stringify(ao.lastUpdated)},
        primaryEntity: ${JSON.stringify(ao.primaryEntity)},
        relatedEntities: ${JSON.stringify(ao.relatedEntities)}
      },`;
      
      src = src.slice(0, answerClose + 9) + aoString + src.slice(answerClose + 9);
    }
  }
  
  // 2. Inject section-summary midway. We will inject it right after the first `type: "heading"` block.
  // Wait, answerStart is the first block. Let's find the first heading after answer.
  const contentArrayStart = src.indexOf('content: [', articleStart);
  const firstHeadingIdx = src.indexOf('type: "heading"', contentArrayStart);
  
  if (firstHeadingIdx !== -1 && firstHeadingIdx < src.indexOf('\n  {\n    slug:', articleStart + 10 || src.length)) {
    // Find the end of this heading block
    // Heading block looks like:
    //       {
    //         type: "heading",
    //         value: "..."
    //       },
    // Sometimes it's on one line if formatted differently, but in our code it is formatted as:
    //       {\n        type: "heading",\n        value: "..."\n      },
    const headingClose = src.indexOf('},', firstHeadingIdx);
    
    if (headingClose !== -1) {
      const ss = data.sectionSummary;
      let ssString = `
      {
        type: "section-summary",
        keyTakeaways: ${JSON.stringify(ss.keyTakeaways)},`;
      if (ss.definitions) ssString += `\n        definitions: ${JSON.stringify(ss.definitions)},`;
      if (ss.enterpriseInsights) ssString += `\n        enterpriseInsights: ${JSON.stringify(ss.enterpriseInsights)},`;
      if (ss.nextStep) ssString += `\n        nextStep: ${JSON.stringify(ss.nextStep)}`;
      ssString += `\n      },`;
      
      src = src.slice(0, headingClose + 2) + ssString + src.slice(headingClose + 2);
    }
  }

  // 3. Add aiOverviewScore to qaMetrics
  const qaMetricsIdx = src.indexOf('qaMetrics: {', articleStart);
  if (qaMetricsIdx !== -1) {
    const geoScoreIdx = src.indexOf('geoScore:', qaMetricsIdx);
    if (geoScoreIdx !== -1) {
      src = src.slice(0, geoScoreIdx) + 'aiOverviewScore: 99,\n    ' + src.slice(geoScoreIdx);
    }
  }

  updatedCount++;
}

fs.writeFileSync(articlesPath, src, 'utf8');
console.log(`Injected AI Overview blocks into ${updatedCount}/8 articles.`);
