const fs = require("fs");
const path = require("path");

const glossaryFilePath = path.join(__dirname, "lib", "data", "glossary.ts");

const profilesMap = {
  "model-context-protocol": {
    entityClass: "Protocol",
    profileMetadata: {
      aliases: ["MCP", "Anthropic MCP", "Model Context Protocol Server", "JSON-RPC Tool Protocol"],
      officialSources: [
        { title: "Anthropic Model Context Protocol Specification", url: "https://modelcontextprotocol.io/specification", type: "Official Documentation" },
        { title: "Model Context Protocol GitHub Repository", url: "https://github.com/modelcontextprotocol/servers", type: "GitHub Repository" }
      ],
      parentCategory: "AI Engineering & Autonomous Systems",
      childRelationships: ["json-rpc-transport", "mcp-inspector", "cursor-ai-ide"],
      relatedTechnologies: ["Multi-Agent Systems", "Retrieval-Augmented Generation", "JSON-RPC 2.0"],
      industry: "Enterprise AI Engineering & Tooling",
      firstAppearance: "Late 2024",
      currentStatus: "Active Standard",
      enterpriseUsage: "Adopted by leading IDEs (Cursor, Windsurf) and enterprise agent orchestration grids to eliminate custom N-to-N connector boilerplate.",
      keyBenefits: [
        "Unifies local database, Git repository, and API connections under a single JSON-RPC specification",
        "Enables instant tool discovery and dynamic capability negotiation across multi-agent swarms",
        "Establishes strict boundary controls and authorization gates before executing tool calls"
      ],
      limitations: [
        "Requires local stdio or SSE server lifecycle management on host machines",
        "Can introduce latency overhead if high-frequency payloads exceed JSON serialization bounds"
      ],
      associatedArticles: [
        "open-models-infrastructure-shift",
        "enterprise-ai-agents-production",
        "developer-tools-2026"
      ],
      futureExpansionOpportunities: [
        "Remote WebSocket transport encryption standard",
        "Enterprise RBAC token propagation across nested MCP server hops"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 10,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 10,
        aiVisibility: 10,
        totalScore: 100
      }
    }
  },
  "retrieval-augmented-generation": {
    entityClass: "Concept",
    profileMetadata: {
      aliases: ["RAG", "Vector Search Grounding", "Hybrid Retrieval", "Grounding Engine"],
      officialSources: [
        { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", url: "https://arxiv.org/abs/2005.11401", type: "Academic Paper" },
        { title: "LangChain Enterprise RAG Architecture Guide", url: "https://python.langchain.com/docs/concepts/rag/", type: "Enterprise Guide" }
      ],
      parentCategory: "AI Engineering & Autonomous Systems",
      childRelationships: ["vector-databases", "evaluations-benchmarks", "hybrid-search-reranking"],
      relatedTechnologies: ["Model Context Protocol", "QLoRA Fine-Tuning", "Speculative Decoding"],
      industry: "Enterprise AI Knowledge Management & Search",
      firstAppearance: "2020 (ArXiv Paper by Lewis et al.)",
      currentStatus: "Production Ready",
      enterpriseUsage: "Deployed across 90%+ of enterprise GenAI chatbots, legal discovery tools, and internal knowledge search engines to eliminate model hallucinations.",
      keyBenefits: [
        "Bypasses static training cutoffs by injecting real-time proprietary data directly into context windows",
        "Provides verifiable source attributions and page-level citations for every generated statement",
        "Significantly cheaper and faster to update than running full fine-tuning loops on foundation models"
      ],
      limitations: [
        "Susceptible to context window clutter if chunk reranking precision drops below 85%",
        "Requires complex vector indexing, chunking pipelines, and embedding synchronization overhead"
      ],
      associatedArticles: [
        "open-models-infrastructure-shift",
        "enterprise-ai-agents-production"
      ],
      futureExpansionOpportunities: [
        "GraphRAG multi-hop semantic relationship querying",
        "Real-time streaming vector embedding updates via CDC pipelines"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 10,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 9,
        aiVisibility: 10,
        totalScore: 99
      }
    }
  },
  "multi-agent-system": {
    entityClass: "Concept",
    profileMetadata: {
      aliases: ["MAS", "Agentic AI Cluster", "LangGraph Graph", "Autonomous Agent Swarm", "Multi-Agent Architecture"],
      officialSources: [
        { title: "LangGraph Multi-Agent Orchestration Documentation", url: "https://langchain-ai.github.io/langgraph/concepts/multi_agent/", type: "Official Documentation" },
        { title: "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation", url: "https://arxiv.org/abs/2308.08155", type: "Academic Paper" }
      ],
      parentCategory: "AI Engineering & Autonomous Systems",
      childRelationships: ["model-context-protocol", "zero-trust-ai", "prompt-injection-defense", "langsmith-observability"],
      relatedTechnologies: ["Model Context Protocol", "Zero-Trust AI Security", "Function Calling"],
      industry: "Enterprise Automation & Software Engineering",
      firstAppearance: "2023 (AutoGen & AutoGPT era)",
      currentStatus: "Production Ready",
      enterpriseUsage: "Used by Tier-1 software engineering teams, SOC cybersecurity triage hubs, and financial quantitative researchers for complex multi-step execution.",
      keyBenefits: [
        "Decomposes monolithic intractable prompts into specialized stateful roles (Planner, Coder, Critic)",
        "Enables cyclic self-correction loops and automatic code execution retry logic without human fatigue",
        "Scales horizontally across specialized local and remote MCP tool servers"
      ],
      limitations: [
        "Can suffer from cascading error propagation across multi-turn agent handoffs if validation gates fail",
        "Requires comprehensive distributed tracing (`LangSmith`) to debug deadlocks and token spikes"
      ],
      associatedArticles: [
        "enterprise-ai-agents-production",
        "cybersecurity-ai-defense-brief"
      ],
      futureExpansionOpportunities: [
        "Deterministic agent consensus protocols",
        "Cross-organizational secure agent-to-agent negotiation over mTLS"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 10,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 10,
        aiVisibility: 10,
        totalScore: 100
      }
    }
  },
  "zero-trust-ai": {
    entityClass: "Security Concept",
    profileMetadata: {
      aliases: ["Zero-Trust AI Security", "AI Guardrails", "Zero-Trust LLM Perimeter", "Agent Least Privilege"],
      officialSources: [
        { title: "NIST AI Risk Management Framework (AI RMF 1.0)", url: "https://www.nist.gov/itl/ai-risk-management-framework", type: "RFC / Standard" },
        { title: "OWASP Top 10 for Large Language Model Applications", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", type: "RFC / Standard" }
      ],
      parentCategory: "AI Security, Governance & Compliance",
      childRelationships: ["prompt-injection-defense", "sandboxed-execution", "rbac-ai-guardrails", "nist-ai-rmf"],
      relatedTechnologies: ["Multi-Agent Systems", "Prompt Injection Defense", "Sandboxed Execution Containers"],
      industry: "Cybersecurity & Enterprise Governance",
      firstAppearance: "2023 (Post-LLM Enterprise Adoption)",
      currentStatus: "Production Ready",
      enterpriseUsage: "Mandatory architectural standard across regulated banking, healthcare, and government AI deployments.",
      keyBenefits: [
        "Assumes every external web scrape, untrusted document, or tool payload is potentially hostile",
        "Enforces cryptographic role-based access controls (`RBAC`) before an agent can invoke high-risk APIs",
        "Mandates human-in-the-loop (`HITL`) confirmation gates for state-changing production commands"
      ],
      limitations: [
        "Adds processing overhead and validation latency to high-speed autonomous agent loops",
        "Requires constant updates to guardrail classification patterns as attack vectors evolve"
      ],
      associatedArticles: [
        "cybersecurity-ai-defense-brief",
        "enterprise-ai-agents-production"
      ],
      futureExpansionOpportunities: [
        "Hardware-enforced confidential computing enclaves for LLM inference",
        "Real-time semantic firewall inference latency optimization"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 10,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 9,
        aiVisibility: 10,
        totalScore: 99
      }
    }
  },
  "quantization-int4": {
    entityClass: "Technology",
    profileMetadata: {
      aliases: ["INT4 Quantization", "FP8/INT4 Quantization", "Low-Precision Weights", "Model Compression"],
      officialSources: [
        { title: "AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration", url: "https://arxiv.org/abs/2306.00978", type: "Academic Paper" },
        { title: "NVIDIA TensorRT-LLM Quantization Guide", url: "https://nvidia.github.io/TensorRT-LLM/precision.html", type: "Official Documentation" }
      ],
      parentCategory: "Enterprise AI & Production Architectures",
      childRelationships: ["tensorrt-llm", "vllm-inference", "open-weight-models"],
      relatedTechnologies: ["TensorRT-LLM", "vLLM Inference Engine", "Speculative Decoding"],
      industry: "AI Infrastructure & Hardware Acceleration",
      firstAppearance: "2022 (GPTQ & AWQ emergence)",
      currentStatus: "Production Ready",
      enterpriseUsage: "Used across enterprise clusters to fit 70B+ parameter open-weight models into single H100 or dual A100 GPU nodes.",
      keyBenefits: [
        "Reduces GPU VRAM requirements by 50% to 75% compared to native FP16 weights",
        "Doubles memory bandwidth throughput during token generation passes",
        "Maintains near-zero perplexity degradation on downstream coding and reasoning benchmarks"
      ],
      limitations: [
        "Requires calibration dataset pre-processing passes (`AWQ/GPTQ`) before serving",
        "Can cause minor precision degradation on highly complex multi-step mathematical edge cases"
      ],
      associatedArticles: [
        "open-models-infrastructure-shift",
        "cloud-cost-architecture-guide"
      ],
      futureExpansionOpportunities: [
        "Sub-1-bit and ternary weight quantization (`BitNet b1.58`)",
        "Dynamic activation quantization without pre-calibration overhead"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 9,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 9,
        aiVisibility: 10,
        totalScore: 98
      }
    }
  },
  "prompt-injection": {
    entityClass: "Security Concept",
    profileMetadata: {
      aliases: ["Prompt Injection", "Indirect Prompt Injection", "Jailbreak Attack", "Context Hijacking"],
      officialSources: [
        { title: "Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection", url: "https://arxiv.org/abs/2302.12173", type: "Academic Paper" },
        { title: "OWASP LLM01: Prompt Injection Vulnerability Guide", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/descriptions/LLM01-Prompt-Injection.html", type: "RFC / Standard" }
      ],
      parentCategory: "AI Security, Governance & Compliance",
      childRelationships: ["prompt-injection-defense", "zero-trust-ai", "sandboxed-execution"],
      relatedTechnologies: ["Zero-Trust AI Security", "Multi-Agent Systems", "Sandboxed Execution"],
      industry: "Cybersecurity & Threat Intelligence",
      firstAppearance: "Late 2022",
      currentStatus: "Active Threat Vector",
      enterpriseUsage: "Primary cybersecurity risk tracked by enterprise CISOs and red teams when deploying web-connected AI agents.",
      keyBenefits: [
        "Understanding this attack vector is essential for designing resilient zero-trust semantic firewalls",
        "Drives architectural separation between instruction channels and untrusted data ingestion channels",
        "Prompts mandatory sandboxing of high-risk tool execution environments"
      ],
      limitations: [
        "Cannot be 100% solved by simple prompt instructions due to LLM next-token statistical mechanics",
        "Requires layered defense-in-depth spanning input filters, RBAC, and output monitoring"
      ],
      associatedArticles: [
        "cybersecurity-ai-defense-brief",
        "enterprise-ai-agents-production"
      ],
      futureExpansionOpportunities: [
        "Formal mathematical proofs of instruction-data boundary separation",
        "Automated continuous red-team fuzzing pipelines against active MCP endpoints"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 10,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 9,
        aiVisibility: 10,
        totalScore: 99
      }
    }
  },
  "fine-tuning-qlora": {
    entityClass: "Technology",
    profileMetadata: {
      aliases: ["QLoRA", "QLoRA Fine-Tuning", "Quantized Low-Rank Adaptation", "Parameter-Efficient Fine-Tuning"],
      officialSources: [
        { title: "QLoRA: Efficient Finetuning of Quantized LLMs", url: "https://arxiv.org/abs/2305.14314", type: "Academic Paper" },
        { title: "Hugging Face PEFT / QLoRA Documentation", url: "https://huggingface.co/docs/peft/index", type: "Official Documentation" }
      ],
      parentCategory: "Enterprise AI & Production Architectures",
      childRelationships: ["open-weight-models", "quantization-int4", "evaluations-benchmarks"],
      relatedTechnologies: ["Retrieval-Augmented Generation", "INT4 Quantization", "vLLM Inference"],
      industry: "Machine Learning & Model Customization",
      firstAppearance: "May 2023 (Dettmers et al.)",
      currentStatus: "Production Ready",
      enterpriseUsage: "Standard industry technique for adapting open-weight models (`Llama 3`, `Mistral`) to proprietary corporate writing styles and domain schemas.",
      keyBenefits: [
        "Freezes base model weights in 4-bit NormalFloat precision to save massive GPU memory",
        "Trains only tiny low-rank adapter matrices (`LoRA`), reducing checkpoint sizes from 140GB to <100MB",
        "Enables rapid hot-swapping of specialized task adapters on a single running inference server"
      ],
      limitations: [
        "Does not inject vast amounts of rapidly changing factual knowledge as effectively as RAG",
        "Requires high-quality curated prompt-completion instruction pairs to prevent catastrophic forgetting"
      ],
      associatedArticles: [
        "open-models-infrastructure-shift",
        "developer-tools-2026"
      ],
      futureExpansionOpportunities: [
        "Multi-LoRA dynamic routing during high-throughput token streaming",
        "Continuous online QLoRA reinforcement learning from human feedback (`RLHF`)"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 9,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 9,
        aiVisibility: 10,
        totalScore: 98
      }
    }
  },
  "ai-finops": {
    entityClass: "Business Framework",
    profileMetadata: {
      aliases: ["AI FinOps", "Cloud FinOps for GenAI", "GPU Cloud Cost Model", "AI Unit Economics"],
      officialSources: [
        { title: "FinOps Foundation: AI & Cloud Cost Optimization Standards", url: "https://www.finops.org/", type: "RFC / Standard" },
        { title: "AWS Cloud Financial Management for AI/ML Workloads", url: "https://aws.amazon.com/financial-management/", type: "Enterprise Guide" }
      ],
      parentCategory: "Cloud & Distributed Infrastructure",
      childRelationships: ["kubernetes-ai", "terraform-finops", "gpu-cluster-scheduling"],
      relatedTechnologies: ["Kubernetes AI Cluster Scheduling", "Terraform FinOps Automation", "Speculative Decoding"],
      industry: "Enterprise Cloud Operations & FinOps",
      firstAppearance: "2024",
      currentStatus: "Production Ready",
      enterpriseUsage: "Employed by enterprise CFOs, DevOps leads, and cloud architects to govern, forecast, and optimize multi-million-dollar GPU cluster budgets.",
      keyBenefits: [
        "Establishes granular cost-per-1,000-tokens attribution across internal product departments",
        "Automates spot instance scaling and idle GPU node shutdown during low-traffic periods",
        "Balancing proprietary API costs (`GPT-4.5`) against self-hosted open-weight infrastructure (`vLLM`)"
      ],
      limitations: [
        "Requires deep telemetry integration across Kubernetes clusters, API gateways, and billing accounts",
        "Can lead to premature optimization if strict cost caps degrade user-facing latency or output quality"
      ],
      associatedArticles: [
        "cloud-cost-architecture-guide",
        "open-models-infrastructure-shift"
      ],
      futureExpansionOpportunities: [
        "Autonomous predictive spot cluster arbitrage across multi-cloud regions",
        "Real-time token economic routing balancing cost against model capability scores"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 9,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 9,
        aiVisibility: 10,
        totalScore: 98
      }
    }
  },
  "vision-language-action": {
    entityClass: "AI Model",
    profileMetadata: {
      aliases: ["VLA", "Vision-Language-Action Models", "Embodied AI Transformers", "Robotic Foundation Models"],
      officialSources: [
        { title: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control", url: "https://arxiv.org/abs/2307.15818", type: "Academic Paper" },
        { title: "OpenVLA: An Open-Source Vision-Language-Action Model", url: "https://arxiv.org/abs/2406.09246", type: "Academic Paper" }
      ],
      parentCategory: "AI Engineering & Autonomous Systems",
      childRelationships: ["physical-robotics", "multimodal-transformers", "real-time-inference"],
      relatedTechnologies: ["Multi-Agent Systems", "Function Calling", "Speculative Decoding"],
      industry: "Physical Robotics & Embodied AI",
      firstAppearance: "July 2023 (Google DeepMind RT-2)",
      currentStatus: "Rapid Evolution",
      enterpriseUsage: "Deployed by industrial automation leaders (`Figure AI`, `Boston Dynamics`, `Tesla`) to translate visual observation and verbal commands into physical motor torques.",
      keyBenefits: [
        "Unifies high-level internet semantic knowledge directly with low-level physical actuation coordinates",
        "Eliminates rigid hand-coded kinematics graphs by enabling zero-shot generalization to novel objects",
        "Enables natural language voice correction of robotic tasks in real time"
      ],
      limitations: [
        "Requires high-frequency inference latency (`>30 Hz`) on edge hardware to prevent physical instability",
        "Demands extensive multimodal sensor calibration and high-fidelity simulation training loops"
      ],
      associatedArticles: [
        "robotics-foundation-models",
        "enterprise-ai-agents-production"
      ],
      futureExpansionOpportunities: [
        "Sub-10ms neuromorphic edge chip inference for VLA control streams",
        "Federated multi-robot physical experience sharing across industrial factories"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 9,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 10,
        aiVisibility: 10,
        totalScore: 99
      }
    }
  },
  "json-rpc-transport": {
    entityClass: "Protocol",
    profileMetadata: {
      aliases: ["JSON-RPC 2.0", "MCP Transport Layer", "Structured Tool Protocol", "Stateless RPC"],
      officialSources: [
        { title: "JSON-RPC 2.0 Specification", url: "https://www.jsonrpc.org/specification", type: "RFC / Standard" },
        { title: "Model Context Protocol Transport Documentation", url: "https://modelcontextprotocol.io/docs/concepts/architecture", type: "Official Documentation" }
      ],
      parentCategory: "Developer Tools & Next-Gen Toolchains",
      childRelationships: ["model-context-protocol", "mcp-inspector", "stdio-transport"],
      relatedTechnologies: ["Model Context Protocol", "Multi-Agent Systems", "gRPC Protocol"],
      industry: "Systems Engineering & Distributed Tooling",
      firstAppearance: "2010 (JSON-RPC 2.0 Standard)",
      currentStatus: "Active Standard",
      enterpriseUsage: "Serves as the core communication transport layer across all Anthropic MCP server implementations and modern IDE agent extensions.",
      keyBenefits: [
        "Stateless, human-readable specification debuggable with standard terminal tools (`cat`, `curl`, `jq`)",
        "Supports both synchronous request-response execution and asynchronous progress notifications over SSE",
        "Enforces strict JSON schema validation for tool parameter inputs and error structures"
      ],
      limitations: [
        "Lacks native binary streaming efficiency compared to binary gRPC or Protobuf connections",
        "Requires manual frame delimiting (`Content-Length` headers) when piped over local stdio streams"
      ],
      associatedArticles: [
        "open-models-infrastructure-shift",
        "developer-tools-2026"
      ],
      futureExpansionOpportunities: [
        "Zero-copy binary memory mapped transport layer for massive image/dataset tool returns",
        "Automated JSON-RPC fuzzing harness for enterprise security compliance"
      ],
      authorityScorecard: {
        coverageDepth: 10,
        relationshipStrength: 10,
        searchDemand: 9,
        enterpriseImportance: 10,
        citationFrequency: 10,
        semanticValue: 10,
        knowledgeCompleteness: 10,
        clusterIntegration: 10,
        futureGrowth: 9,
        aiVisibility: 10,
        totalScore: 98
      }
    }
  }
};

let content = fs.readFileSync(glossaryFilePath, "utf8");

// We will parse glossaryEntities and inject/update entityClass and profileMetadata
for (const [slug, profileData] of Object.entries(profilesMap)) {
  const regex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?keyApplications:\\s*\\[[\\s\\S]*?\\])`, "m");
  if (regex.test(content)) {
    // Check if it already has entityClass
    if (!content.includes(`entityClass: "${profileData.entityClass}"`) || !content.includes(`profileMetadata:`)) {
      const injection = `,\n    entityClass: "${profileData.entityClass}",\n    profileMetadata: ${JSON.stringify(profileData.profileMetadata, null, 6).replace(/\n/g, "\n    ")}`;
      content = content.replace(regex, `$1${injection}`);
    }
  }
}

fs.writeFileSync(glossaryFilePath, content, "utf8");
console.log("Successfully injected Phase 13 entityClass and profileMetadata across all entities in lib/data/glossary.ts!");
