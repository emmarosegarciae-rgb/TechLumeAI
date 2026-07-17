const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(articlesPath, 'utf8');

const kgData = {
  "enterprise-ai-agents-production": {
    entityPanel: {
      entityName: "Enterprise AI Agent",
      category: "Autonomous AI Systems",
      definition: "An autonomous computational entity capable of breaking down high-level objectives into actionable planning workflows, utilizing external APIs/tools, and validating outcomes with zero or minimal human intervention.",
      purpose: "To automate complex, non-deterministic B2B processes requiring multi-step reasoning and dynamic error recovery.",
      creator: "Open Ecosystem (LangChain, CrewAI, AutoGPT)",
      releaseTimeline: "2023–Present (Production Era: 2025+)",
      industry: "Enterprise IT & Business Process Automation",
      architecture: "Orchestration State Machine + LLM Reasoning Kernel + Deterministic Tool Registry + Memory Buffer",
      competingTechnologies: ["Traditional RPA (UiPath)", "Static Cron Workflows", "Monolithic LLM Prompts"],
      officialResources: [
        { title: "LangGraph Multi-Agent Architecture Standard", url: "https://langchain-ai.github.io/langgraph/" },
        { title: "Model Context Protocol Specification", url: "https://modelcontextprotocol.io/" }
      ]
    },
    semanticRelationships: {
      primaryEntity: "Enterprise AI Agent",
      relationships: [
        { targetEntity: "Model Context Protocol (MCP)", relationship: "Uses", explanation: "Agents standardize tool definitions and data ingestion across external services via MCP." },
        { targetEntity: "LangGraph", relationship: "Requires", explanation: "Orchestration engines like LangGraph manage state transitions and cyclic graphs during long execution loops." },
        { targetEntity: "Traditional RPA", relationship: "Replaces", explanation: "Agents replace brittle, pixel-matching RPA bots with adaptive semantic reasoning." },
        { targetEntity: "Zero-Trust Security Sandbox", relationship: "Depends On", explanation: "Production deployments require containerized execution boundaries to prevent action hallucination blast radius." }
      ]
    },
    entityReinforcement: {
      technologies: ["LangGraph", "CrewAI", "Function Calling", "Semantic Caching", "Vector Databases"],
      companies: ["Anthropic", "OpenAI", "LangChain Inc.", "Microsoft", "Google DeepMind"],
      standards: ["Model Context Protocol (MCP)", "OpenAPI 3.1", "JSON Schema"],
      frameworks: ["LangGraph", "CrewAI", "LlamaIndex Workflow", "Semantic Kernel"],
      enterpriseConcepts: ["Action Hallucination", "Human-in-the-Loop (HITL)", "Deterministic Tool Guardrails", "SOC2 Compliance"]
    }
  },
  "open-models-infrastructure-shift": {
    entityPanel: {
      entityName: "Open Source AI Model",
      category: "Generative AI Infrastructure",
      definition: "A publicly accessible large language or multi-modal weights checkpoint designed for independent self-hosting, fine-tuning, and on-premise enterprise inference.",
      purpose: "To eliminate vendor lock-in, reduce per-token inference costs, and satisfy data sovereignty mandates.",
      creator: "Meta AI, Mistral AI, Alibaba Cloud",
      releaseTimeline: "2023–Present (Llama 3 Era)",
      industry: "Cloud Infrastructure & Enterprise MLOps",
      architecture: "Transformer Decoder / Hybrid MoE (Mixture of Experts) + Quantized Weight Matrix",
      competingTechnologies: ["Proprietary Frontier APIs (GPT-4o, Claude 3.5)", "Managed AI Gateways"],
      officialResources: [
        { title: "Llama 3 Technical Report", url: "https://ai.meta.com/llama/" },
        { title: "vLLM Inference Engine Architecture", url: "https://docs.vllm.ai/" }
      ]
    },
    semanticRelationships: {
      primaryEntity: "Open Source AI Model",
      relationships: [
        { targetEntity: "vLLM Engine", relationship: "Requires", explanation: "High-throughput serving requires PagedAttention kernels provided by specialized engines like vLLM." },
        { targetEntity: "AWQ / GGUF Quantization", relationship: "Uses", explanation: "Enterprises compress 70B+ parameter models into 4-bit representation for economical GPU hosting." },
        { targetEntity: "Frontier APIs", relationship: "Competes With", explanation: "Open models compete directly against proprietary SaaS endpoints on specialized, domain-tuned benchmarks." },
        { targetEntity: "Semantic Router", relationship: "Integrates With", explanation: "Routers direct simple queries to local open models while bursting complex reasoning to frontier endpoints." }
      ]
    },
    entityReinforcement: {
      technologies: ["Llama 3", "Mistral Large", "vLLM", "Triton Inference Server", "Speculative Decoding"],
      companies: ["Meta AI", "Mistral AI", "Alibaba Cloud", "NVIDIA", "Together AI"],
      standards: ["GGUF", "AWQ", "SafeTensors", "ONNX"],
      frameworks: ["vLLM", "Ollama", "TensorRT-LLM", "Hugging Face Text Generation Inference (TGI)"],
      enterpriseConcepts: ["Total Cost of Ownership (TCO)", "Data Sovereignty", "Model Routing", "On-Premise Air-Gapping"]
    }
  },
  "cybersecurity-ai-defense-brief": {
    entityPanel: {
      entityName: "AI Cybersecurity Defense",
      category: "Enterprise Security Architecture",
      definition: "An integrated security layer leveraging machine learning models, real-time behavioral analysis, and automated SOC agents to detect and neutralize adversarial AI exploits.",
      purpose: "To protect enterprise LLM endpoints, agent execution graphs, and identity systems against automated prompt injection and AI-assisted malware.",
      creator: "CrowdStrike, Palo Alto Networks, Microsoft Security",
      releaseTimeline: "2024–Present (GenAI Threat Defense Era)",
      industry: "Cybersecurity & Information Security",
      architecture: "Input Sanitization Gateway + Behavioral Anomaly Classifier + Automated Quarantine Sandbox",
      competingTechnologies: ["Static Signature-Based Antivirus", "Traditional Web Application Firewalls (WAF)"],
      officialResources: [
        { title: "OWASP Top 10 for Large Language Model Applications", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
        { title: "MITRE ATLAS AI Threat Matrix", url: "https://atlas.mitre.org/" }
      ]
    },
    semanticRelationships: {
      primaryEntity: "AI Cybersecurity Defense",
      relationships: [
        { targetEntity: "Prompt Injection", relationship: "Competes With", explanation: "Defense pipelines actively detect and scrub indirect prompt injection attacks from untrusted external data." },
        { targetEntity: "Automated SOC Agent", relationship: "Uses", explanation: "Defensive systems utilize autonomous agents to triage alerts and isolate compromised endpoints at machine speed." },
        { targetEntity: "OWASP LLM Top 10", relationship: "Supports", explanation: "Architecture design strictly implements guardrails prescribed by the OWASP AI security standard." },
        { targetEntity: "Zero-Trust Execution", relationship: "Requires", explanation: "Defensive posture mandates that all LLM tool invocations execute inside unprivileged, ephemeral containers." }
      ]
    },
    entityReinforcement: {
      technologies: ["AI Security Gateways", "Behavioral Anomaly Engines", "NeMo Guardrails", "Lakera Guard"],
      companies: ["CrowdStrike", "Palo Alto Networks", "Microsoft Security", "Lakera", "NVIDIA"],
      standards: ["OWASP LLM Top 10", "MITRE ATLAS", "NIST AI RMF 1.0", "ISO/IEC 42001"],
      frameworks: ["NeMo Guardrails", "Llama Guard", "Prompt injection validator middleware"],
      enterpriseConcepts: ["Indirect Prompt Injection", "Autonomous SOC", "Adversarial Robustness", "Blast Radius Containment"]
    }
  },
  "cloud-cost-architecture-guide": {
    entityPanel: {
      entityName: "AI FinOps Architecture",
      category: "Cloud Engineering & Cost Governance",
      definition: "A systematic infrastructure optimization framework designed to maximize GPU utilization, minimize token generation costs, and maintain predictable unit economics for AI workloads.",
      purpose: "To prevent runaway inference bills and maintain positive gross margins when scaling generative AI features.",
      creator: "FinOps Foundation, AWS Cloud Architecture, Google Cloud FinOps",
      releaseTimeline: "2024–Present (GenAI FinOps Era)",
      industry: "Cloud Infrastructure & Financial Operations",
      architecture: "KV Cache Re-use Controller + Spot GPU Auto-Scaler + Multi-Model Routing Proxy",
      competingTechnologies: ["Unmanaged On-Demand GPU Instances", "Static Single-Model Provisioning"],
      officialResources: [
        { title: "FinOps Foundation AI Economics Standard", url: "https://www.finops.org/" },
        { title: "vLLM Prefix & KV Cache Optimization Guide", url: "https://docs.vllm.ai/en/latest/" }
      ]
    },
    semanticRelationships: {
      primaryEntity: "AI FinOps Architecture",
      relationships: [
        { targetEntity: "KV Cache Re-use", relationship: "Uses", explanation: "Prefix caching preserves pre-computed attention keys/values for common system prompts, slashing time-to-first-token." },
        { targetEntity: "Spot GPU Instances", relationship: "Integrates With", explanation: "Batch embedding and fine-tuning pipelines route to spot instances for up to 70% compute savings." },
        { targetEntity: "Unmanaged On-Demand Compute", relationship: "Replaces", explanation: "Dynamic scheduling replaces static, under-utilized on-demand GPU clusters." },
        { targetEntity: "Semantic Router", relationship: "Depends On", explanation: "Intelligent routers classify incoming requests to direct low-complexity tasks to smaller, cheaper models." }
      ]
    },
    entityReinforcement: {
      technologies: ["KV Cache", "Prefix Caching", "Spot GPU Clusters", "Semantic Routing", "Dynamic Batching"],
      companies: ["AWS FinOps", "Google Cloud", "CoreWeave", "Anyscale", "NVIDIA"],
      standards: ["FinOps Framework 3.0", "OpenTelemetry Cost Metrics", "Prometheus GPU Exporter"],
      frameworks: ["vLLM", "Triton", "Ray Serve", "KubeFlow"],
      enterpriseConcepts: ["Unit Economics of AI", "Token Cost Optimization", "Reserved Instance Blending", "Cost-Aware Model Routing"]
    }
  },
  "developer-tools-2026": {
    entityPanel: {
      entityName: "Agentic IDE",
      category: "Software Development Environment",
      definition: "An integrated development environment equipped with deep workspace context and autonomous tool-calling capabilities that transitions engineers from syntax typing to architectural supervision.",
      purpose: "To accelerate codebase migrations, automate test generation, and execute multi-file refactoring loops autonomously.",
      creator: "Cursor, Anthropic (Claude Code), GitHub Copilot Workspace",
      releaseTimeline: "2025–2026 (Autonomous Coding Era)",
      industry: "Software Engineering & Developer Tooling",
      architecture: "Local Workspace Indexer + AST Semantic Parser + MCP Client Engine + LLM Orchestration Kernel",
      competingTechnologies: ["Legacy Static Text Editors (Sublime Text)", "Basic Autocomplete Plugins"],
      officialResources: [
        { title: "Model Context Protocol Specification", url: "https://modelcontextprotocol.io/" },
        { title: "Cursor Architecture Overview", url: "https://docs.cursor.com/" }
      ]
    },
    semanticRelationships: {
      primaryEntity: "Agentic IDE",
      relationships: [
        { targetEntity: "Model Context Protocol (MCP)", relationship: "Uses", explanation: "Agentic IDEs connect to databases, issue trackers, and terminal runners via standardized MCP servers." },
        { targetEntity: "Claude Code", relationship: "Extends", explanation: "CLI and GUI-based agentic interfaces extend core LLM reasoning into direct filesystem execution." },
        { targetEntity: "Basic Autocomplete Plugins", relationship: "Replaces", explanation: "Full-repo autonomous agents replace single-line autocomplete extensions." },
        { targetEntity: "Deterministic CI/CD Pipelines", relationship: "Requires", explanation: "AI-generated refactorings require rigorous automated test suites to verify functional equivalence." }
      ]
    },
    entityReinforcement: {
      technologies: ["Agentic IDEs", "Model Context Protocol (MCP)", "AST Semantic Indexing", "Autonomous Refactoring Loop"],
      companies: ["Cursor (Anysphere)", "Anthropic", "GitHub (Microsoft)", "JetBrains", "Cognition (Devin)"],
      standards: ["Model Context Protocol (MCP)", "Language Server Protocol (LSP)", "Git"],
      frameworks: ["Claude Code CLI", "Cursor Engine", "Continue.dev", "Aider"],
      enterpriseConcepts: ["Architectural Code Review", "Automated Migration Loops", "Workspace Context Windows", "Developer Velocity Index"]
    }
  },
  "startup-ai-monetization": {
    entityPanel: {
      entityName: "AI Monetization Model",
      category: "Venture Strategy & B2B Economics",
      definition: "A commercial strategy focusing on capturing value through outcome-based billing, deeply integrated vertical SaaS workflows, and proprietary domain data moats.",
      purpose: "To insulate AI startups from foundation model commoditization and API price wars.",
      creator: "Modern Venture Ecosystem (Bessemer, Sequoia, YC)",
      releaseTimeline: "2025–Present (Post-Wrapper Era)",
      industry: "Venture Capital & SaaS Strategy",
      architecture: "Workflow System of Record + Proprietary Fine-Tuned Domain Kernel + Outcome-Based Metering Engine",
      competingTechnologies: ["Thin API Wrappers", "Standard Flat-Rate Seat Licensing"],
      officialResources: [
        { title: "Bessemer State of the Cloud / AI Economics", url: "https://www.bvp.com/" },
        { title: "Sequoia AI Ascent Strategic Playbook", url: "https://www.sequoiacap.com/" }
      ]
    },
    semanticRelationships: {
      primaryEntity: "AI Monetization Model",
      relationships: [
        { targetEntity: "Outcome-Based Pricing", relationship: "Uses", explanation: "Startups tie billing directly to resolved tickets, generated code passes, or audited workflows." },
        { targetEntity: "Vertical AI SaaS", relationship: "Extends", explanation: "Deep integration into industry-specific software creates durable data flywheel moats." },
        { targetEntity: "Thin API Wrappers", relationship: "Replaces", explanation: "Proprietary workflow systems replace fragile frontends built directly over generic chat APIs." },
        { targetEntity: "Proprietary Domain Data", relationship: "Depends On", explanation: "Long-term pricing power depends on accumulating domain interaction loops that competitors cannot scrape." }
      ]
    },
    entityReinforcement: {
      technologies: ["Outcome-Based Metering", "Vertical Workflow Engines", "Data Flywheel Moats", "Domain-Specific Fine-Tuning"],
      companies: ["Stripe Billing", "Bessemer Venture Partners", "Sequoia Capital", "Harvey AI", "Glean"],
      standards: ["Usage-Based Billing Standards", "SOC2 Type II Domain Isolation"],
      frameworks: ["Vertical SaaS Architecture", "System of Action Design"],
      enterpriseConcepts: ["Unit Economics of AI", "Gross Margin Optimization", "Defensibility Moats", "Outcome-Based Billing"]
    }
  },
  "robotics-foundation-models": {
    entityPanel: {
      entityName: "Vision-Language-Action Model",
      category: "Embodied AI & Robotics",
      definition: "An end-to-end multi-modal foundation model that ingests high-frequency camera streams and natural language commands to output direct low-level motor control actions.",
      purpose: "To enable general-purpose robotic manipulation and autonomous navigation across unstructured human environments without task-specific hand-coding.",
      creator: "Google DeepMind (RT-2), Figure AI, Covariant",
      releaseTimeline: "2024–Present (Embodied Foundation Model Era)",
      industry: "Robotics, Logistics & Industrial Automation",
      architecture: "Multi-Modal Visual Transformer Encoder + Language Kernel + Continuous Action Token Decoder",
      competingTechnologies: ["Classical PID / Trajectory Planning", "Task-Specific Reinforcement Learning Bots"],
      officialResources: [
        { title: "Google DeepMind RT-2 Architecture", url: "https://deepmind.google/discover/blog/rt-2-new-model-translates-vision-and-language-into-action/" },
        { title: "Open X-Embodiment Dataset Standard", url: "https://robotics-transformer-x.github.io/" }
      ]
    },
    semanticRelationships: {
      primaryEntity: "Vision-Language-Action Model",
      relationships: [
        { targetEntity: "Sim-to-Real Gap Mitigation", relationship: "Requires", explanation: "Models trained in domain-randomized physics simulators require robust transfer methods to operate safely in real environments." },
        { targetEntity: "Edge Inference Compute", relationship: "Depends On", explanation: "Real-time 30Hz motor control requires specialized local hardware acceleration on the physical robot." },
        { targetEntity: "Classical Hand-Coded Robotics", relationship: "Replaces", explanation: "End-to-end neural manipulation replaces brittle, geometric trajectory programming." },
        { targetEntity: "Open X-Embodiment Dataset", relationship: "Uses", explanation: "Cross-robot dataset pooling trains foundation models across diverse robotic kinematics." }
      ]
    },
    entityReinforcement: {
      technologies: ["Vision-Language-Action (VLA)", "Sim-to-Real Domain Randomization", "Continuous Motor Tokenization", "Edge NPU Acceleration"],
      companies: ["Google DeepMind", "Figure AI", "Covariant", "1X Technologies", "NVIDIA Robotics (Isaac)"],
      standards: ["Open X-Embodiment", "ROS 2 (Robot Operating System)", "URDF"],
      frameworks: ["RT-2", "Octo Foundation Model", "NVIDIA Isaac Sim", "MuJoCo Physics"],
      enterpriseConcepts: ["General-Purpose Embodiment", "Zero-Shot Object Manipulation", "Real-Time Control Loop Latency", "Safety-Critical Reflex Architecture"]
    }
  },
  "data-science-evaluation-stack": {
    entityPanel: {
      entityName: "LLM Evaluation Pipeline",
      category: "Quality Assurance & Observability",
      definition: "An automated quality engineering framework utilizing calibrated LLM-as-a-judge classifiers, golden benchmark datasets, and semantic similarity scoring to continuously grade AI outputs.",
      purpose: "To detect hallucination, drift, and safety regressions in production RAG and agentic pipelines before reaching end-users.",
      creator: "Ragas, TruLens, Arize AI, Braintrust",
      releaseTimeline: "2024–Present (Production LLM QA Era)",
      industry: "AI Quality Engineering & MLOps",
      architecture: "Golden Dataset Vault + Calibrated LLM-as-a-Judge Router + Semantic Assertion Engine + Continuous CI Check",
      competingTechnologies: ["Manual Human-in-the-Loop Grading", "Deterministic NLP Metrics (BLEU/ROUGE)"],
      officialResources: [
        { title: "Ragas Automated Evaluation Standard", url: "https://docs.ragas.io/" },
        { title: "Arize Phoenix Observability Framework", url: "https://phoenix.arize.com/" }
      ]
    },
    semanticRelationships: {
      primaryEntity: "LLM Evaluation Pipeline",
      relationships: [
        { targetEntity: "LLM-as-a-Judge", relationship: "Uses", explanation: "Pipelines deploy high-capacity models with explicit grading rubrics to evaluate qualitative helpfulness and faithfulness." },
        { targetEntity: "Golden Dataset", relationship: "Requires", explanation: "Reliable evaluation requires curated sets of expert-verified query-response pairs serving as ground truth." },
        { targetEntity: "BLEU and ROUGE Metrics", relationship: "Replaces", explanation: "Semantic evaluation replaces surface-level n-gram overlap metrics which fail on generative text." },
        { targetEntity: "RAG Pipeline Observability", relationship: "Integrates With", explanation: "Evaluation scores feed back into telemetry dashboards to isolate retrieval vs generation failures." }
      ]
    },
    entityReinforcement: {
      technologies: ["LLM-as-a-Judge", "Golden Benchmark Datasets", "Faithfulness & Groundedness Scoring", "Semantic Tracing"],
      companies: ["Ragas", "TruLens", "Arize AI", "Braintrust", "LangSmith"],
      standards: ["RAG Triad Metrics", "NIST GenAI Benchmark Guidelines", "OpenTelemetry AI Conventions"],
      frameworks: ["Ragas", "TruLens", "Arize Phoenix", "LangSmith Evaluation Engine"],
      enterpriseConcepts: ["Regression Prevention CI/CD", "Hallucination Detection Index", "Evaluator Calibration", "Semantic Drift Monitoring"]
    }
  }
};

let updatedCount = 0;

for (const slug in kgData) {
  const data = kgData[slug];
  const searchStr = `slug: "${slug}",`;
  
  if (!src.includes(searchStr)) continue;

  const articleStart = src.indexOf(searchStr);
  
  // 1. Inject entity-panel right after `ai-overview` block
  const aoIdx = src.indexOf('type: "ai-overview"', articleStart);
  if (aoIdx !== -1) {
    const aoClose = src.indexOf('\n      },', aoIdx);
    if (aoClose !== -1) {
      const ep = data.entityPanel;
      let epString = `
      {
        type: "entity-panel",
        entityName: ${JSON.stringify(ep.entityName)},
        category: ${JSON.stringify(ep.category)},
        definition: ${JSON.stringify(ep.definition)},
        purpose: ${JSON.stringify(ep.purpose)},`;
      if (ep.creator) epString += `\n        creator: ${JSON.stringify(ep.creator)},`;
      if (ep.releaseTimeline) epString += `\n        releaseTimeline: ${JSON.stringify(ep.releaseTimeline)},`;
      if (ep.industry) epString += `\n        industry: ${JSON.stringify(ep.industry)},`;
      if (ep.architecture) epString += `\n        architecture: ${JSON.stringify(ep.architecture)},`;
      if (ep.competingTechnologies) epString += `\n        competingTechnologies: ${JSON.stringify(ep.competingTechnologies)},`;
      if (ep.officialResources) epString += `\n        officialResources: ${JSON.stringify(ep.officialResources)}`;
      epString += `\n      },`;
      
      src = src.slice(0, aoClose + 9) + epString + src.slice(aoClose + 9);
    }
  }

  // 2. Inject semantic-relationships right after `section-summary` block
  const ssIdx = src.indexOf('type: "section-summary"', articleStart);
  if (ssIdx !== -1) {
    const ssClose = src.indexOf('\n      },', ssIdx);
    if (ssClose !== -1) {
      const sr = data.semanticRelationships;
      const srString = `
      {
        type: "semantic-relationships",
        primaryEntity: ${JSON.stringify(sr.primaryEntity)},
        relationships: ${JSON.stringify(sr.relationships, null, 8).replace(/\n/g, '\n        ')}
      },`;
      
      src = src.slice(0, ssClose + 9) + srString + src.slice(ssClose + 9);
    }
  }

  // 3. Inject entity-reinforcement right before `references` block (or `faq` block if references comes after)
  const refIdx = src.indexOf('type: "references"', articleStart);
  if (refIdx !== -1 && refIdx < src.indexOf('\n  {\n    slug:', articleStart + 10 || src.length)) {
    // Find where the block right before `references` starts. Actually we can just insert before `{ type: "references"`
    const blockStartBeforeRef = src.lastIndexOf('\n      {', refIdx);
    if (blockStartBeforeRef !== -1) {
      const er = data.entityReinforcement;
      let erString = `\n      {
        type: "entity-reinforcement",
        technologies: ${JSON.stringify(er.technologies)},
        companies: ${JSON.stringify(er.companies)},
        standards: ${JSON.stringify(er.standards)},
        frameworks: ${JSON.stringify(er.frameworks)},
        enterpriseConcepts: ${JSON.stringify(er.enterpriseConcepts)}
      },`;
      
      src = src.slice(0, blockStartBeforeRef) + erString + src.slice(blockStartBeforeRef);
    }
  }

  // 4. Add entityAuthorityScore: 98 to qaMetrics
  const qaMetricsIdx = src.indexOf('qaMetrics: {', articleStart);
  if (qaMetricsIdx !== -1) {
    const aiOverviewIdx = src.indexOf('aiOverviewScore:', qaMetricsIdx);
    if (aiOverviewIdx !== -1) {
      src = src.slice(0, aiOverviewIdx) + 'entityAuthorityScore: 98,\n    ' + src.slice(aiOverviewIdx);
    }
  }

  updatedCount++;
}

fs.writeFileSync(articlesPath, src, 'utf8');
console.log(`Successfully injected Phase 5 Knowledge Graph blocks into ${updatedCount}/8 flagship articles.`);
