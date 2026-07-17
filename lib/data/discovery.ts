import { DiscoveryOpportunity, CompetitorAudit, EmergingEntity, TopicalClusterPlan } from "@/lib/types";

// ============================================================================
// 1. Discovery Opportunities Registry (All passing Discovery Scorecard >= 95/100)
// Weighted Score Formula:
// (Enterprise Demand x2) + (Topical Authority x2) + (Evergreen Value x2) + (Future Growth x2) +
// (Search Demand x1) + (AI Search Visibility x1) + (Technical Importance x1) + (Competition Level x1) +
// (Commercial Intent x1) + (Knowledge Graph Contribution x1) = Max 130.
// Discovery Scorecard = Math.round((weighted / 130) * 100)
// ============================================================================

export const discoveryOpportunities: DiscoveryOpportunity[] = [
  {
    id: "opp-01",
    title: "Speculative Decoding v2: Draft-Target Architecture & Memory Economics for Llama 3 70B",
    category: "Category A: Emerging Technology",
    signalSource: "arXiv preprints & NVIDIA TensorRT-LLM 0.12 release notes",
    detectedAt: "2026-07-14",
    targetCluster: "Open Model Hosting & vLLM Serving",
    primaryKeywords: ["Speculative Decoding v2", "Draft Model Serving", "Llama 3 Speculative Inference", "TensorRT-LLM Latency"],
    entityTargets: ["speculative-decoding", "tensorrt-llm", "llama-3-8b-draft", "vllm-serving"],
    opportunityMatrix: {
      searchDemand: 9,
      enterpriseDemand: 10, // x2 = 20
      aiSearchVisibility: 10,
      technicalImportance: 10,
      topicalAuthorityValue: 10, // x2 = 20
      evergreenPotential: 9, // x2 = 18
      competitionLevel: 9, // High gap opportunity
      commercialIntent: 9,
      knowledgeGraphContribution: 10,
      futureGrowth: 10 // x2 = 20
    },
    weightedPriorityScore: 125, // out of 130
    discoveryScorecard: 96,
    status: "Validated"
  },
  {
    id: "opp-02",
    title: "Sovereign Enterprise RAG: Air-Gapped Vector Topologies with Local NeMo Guardrails",
    category: "Category B: Enterprise AI",
    signalSource: "Gartner Enterprise AI Infrastructure Report Q3 2026",
    detectedAt: "2026-07-12",
    targetCluster: "AI Security & Adversarial Defense",
    primaryKeywords: ["Sovereign RAG", "Air-Gapped LLM Deployment", "Private Vector Database", "NeMo Guardrails Air-Gap"],
    entityTargets: ["sovereign-rag", "nemo-guardrails", "air-gapped-llm", "milvus-private"],
    opportunityMatrix: {
      searchDemand: 9,
      enterpriseDemand: 10,
      aiSearchVisibility: 10,
      technicalImportance: 10,
      topicalAuthorityValue: 10,
      evergreenPotential: 10,
      competitionLevel: 9,
      commercialIntent: 10,
      knowledgeGraphContribution: 10,
      futureGrowth: 10
    },
    weightedPriorityScore: 128,
    discoveryScorecard: 98,
    status: "Assigned to Editorial"
  },
  {
    id: "opp-03",
    title: "Sandboxing Model Context Protocol (MCP): Deterministic Network Isolation for Autonomous Python Tools",
    category: "Category C: Developer Tools",
    signalSource: "Anthropic MCP Specification Updates & GitHub Discussions",
    detectedAt: "2026-07-13",
    targetCluster: "Agentic IDEs & Autonomous Coding",
    primaryKeywords: ["MCP Sandboxing", "Model Context Protocol Security", "Agentic Tool Isolation", "Deterministic Tool Registry"],
    entityTargets: ["model-context-protocol", "docker-sandbox", "agentic-ide-security", "python-sandbox"],
    opportunityMatrix: {
      searchDemand: 10,
      enterpriseDemand: 10,
      aiSearchVisibility: 10,
      technicalImportance: 10,
      topicalAuthorityValue: 10,
      evergreenPotential: 9,
      competitionLevel: 10,
      commercialIntent: 9,
      knowledgeGraphContribution: 10,
      futureGrowth: 10
    },
    weightedPriorityScore: 128,
    discoveryScorecard: 98,
    status: "In Production"
  },
  {
    id: "opp-04",
    title: "AST Context Engines: Building Codebase-Aware Retrieval Loops without Token Overflow",
    category: "Category D: Programming",
    signalSource: "GitHub Copilot Enterprise Architecture & Cursor release signals",
    detectedAt: "2026-07-11",
    targetCluster: "Agentic IDEs & Autonomous Coding",
    primaryKeywords: ["AST Context Engine", "Codebase RAG", "Abstract Syntax Tree Indexing", "Multi-File Refactoring Agent"],
    entityTargets: ["ast-indexing", "tree-sitter", "codebase-rag", "agentic-refactoring"],
    opportunityMatrix: {
      searchDemand: 9,
      enterpriseDemand: 10,
      aiSearchVisibility: 9,
      technicalImportance: 10,
      topicalAuthorityValue: 10,
      evergreenPotential: 10,
      competitionLevel: 9,
      commercialIntent: 9,
      knowledgeGraphContribution: 10,
      futureGrowth: 10
    },
    weightedPriorityScore: 126,
    discoveryScorecard: 97,
    status: "Validated"
  },
  {
    id: "opp-05",
    title: "Detecting Indirect RAG Injection: 4-Layer Semantic Firewalls for Automated HR & Financial Pipelines",
    category: "Category E: Cybersecurity",
    signalSource: "OWASP LLM Top 10 2026 Update & CISO Roundtables",
    detectedAt: "2026-07-10",
    targetCluster: "AI Security & Adversarial Defense",
    primaryKeywords: ["Indirect RAG Injection", "Semantic Firewall", "Adversarial Prompt Containment", "OWASP LLM Security"],
    entityTargets: ["rag-injection", "semantic-firewall", "llama-guard-3", "owasp-llm"],
    opportunityMatrix: {
      searchDemand: 9,
      enterpriseDemand: 10,
      aiSearchVisibility: 10,
      technicalImportance: 10,
      topicalAuthorityValue: 10,
      evergreenPotential: 10,
      competitionLevel: 9,
      commercialIntent: 10,
      knowledgeGraphContribution: 10,
      futureGrowth: 10
    },
    weightedPriorityScore: 128,
    discoveryScorecard: 98,
    status: "Assigned to Editorial"
  },
  {
    id: "opp-06",
    title: "PagedAttention v2 & Dynamic KV Cache Re-use across Multi-Tenant Open Model Clusters",
    category: "Category F: Infrastructure",
    signalSource: "vLLM v0.6+ Kernel benchmarks & UC Berkeley Sky Computing Lab",
    detectedAt: "2026-07-14",
    targetCluster: "Open Model Hosting & vLLM Serving",
    primaryKeywords: ["PagedAttention v2", "KV Cache Reuse", "Multi-Tenant LLM Serving", "vLLM Memory Management"],
    entityTargets: ["pagedattention", "kv-cache", "vllm-cluster", "multi-tenant-inference"],
    opportunityMatrix: {
      searchDemand: 9,
      enterpriseDemand: 10,
      aiSearchVisibility: 10,
      technicalImportance: 10,
      topicalAuthorityValue: 10,
      evergreenPotential: 9,
      competitionLevel: 9,
      commercialIntent: 9,
      knowledgeGraphContribution: 10,
      futureGrowth: 10
    },
    weightedPriorityScore: 126,
    discoveryScorecard: 97,
    status: "Validated"
  },
  {
    id: "opp-07",
    title: "Outcome-Based Metering Tiers: Preserving SaaS Gross Margins under Heavy Inference Loads",
    category: "Category G: Business Strategy",
    signalSource: "SaaS CFO Survey Q3 2026 & Bessemer Venture Partners AI Strategy",
    detectedAt: "2026-07-09",
    targetCluster: "AI Commercial Strategy & Pricing",
    primaryKeywords: ["Outcome-Based Pricing AI", "AI SaaS Gross Margin", "Inference Cost Metering", "Vertical AI Defensibility"],
    entityTargets: ["outcome-pricing", "saas-unit-economics", "inference-cost-optimization", "data-flywheel"],
    opportunityMatrix: {
      searchDemand: 9,
      enterpriseDemand: 10,
      aiSearchVisibility: 9,
      technicalImportance: 9,
      topicalAuthorityValue: 10,
      evergreenPotential: 10,
      competitionLevel: 10,
      commercialIntent: 10,
      knowledgeGraphContribution: 9,
      futureGrowth: 10
    },
    weightedPriorityScore: 126,
    discoveryScorecard: 97,
    status: "In Production"
  },
  {
    id: "opp-08",
    title: "Hybrid Hierarchical Control: Interfacing 10Hz Vision-Language Transformers with 1kHz Motor DSPs",
    category: "Category H: Future Technology",
    signalSource: "NVIDIA Isaac Robotics Forum & Stanford Humanoid AI Group",
    detectedAt: "2026-07-13",
    targetCluster: "Vision-Language-Action (VLA) Robotics",
    primaryKeywords: ["Hybrid Hierarchical Control", "VLA Transformer DSP", "Real-Time Robotics Inference", "Humanoid Motor Loop"],
    entityTargets: ["vla-model", "hierarchical-control", "isaac-sim", "real-time-dsp"],
    opportunityMatrix: {
      searchDemand: 8,
      enterpriseDemand: 9,
      aiSearchVisibility: 10,
      technicalImportance: 10,
      topicalAuthorityValue: 10,
      evergreenPotential: 10,
      competitionLevel: 10,
      commercialIntent: 9,
      knowledgeGraphContribution: 10,
      futureGrowth: 10
    },
    weightedPriorityScore: 124,
    discoveryScorecard: 95,
    status: "Signal Detected"
  },
  {
    id: "opp-09",
    title: "Automating Ragas Faithfulness & Context Precision Gates inside GitHub Actions CI/CD",
    category: "Category I: Research Breakthrough",
    signalSource: "Ragas 0.2+ release framework & MLOps Community Benchmarks",
    detectedAt: "2026-07-12",
    targetCluster: "LLM Evaluation & Quality Assurance",
    primaryKeywords: ["Automated Ragas CI/CD", "RAG Evaluation Gate", "Faithfulness Score Automated", "GitHub Actions MLOps"],
    entityTargets: ["ragas-eval", "github-actions-mlops", "context-precision", "llm-as-a-judge"],
    opportunityMatrix: {
      searchDemand: 10,
      enterpriseDemand: 10,
      aiSearchVisibility: 10,
      technicalImportance: 10,
      topicalAuthorityValue: 10,
      evergreenPotential: 9,
      competitionLevel: 9,
      commercialIntent: 9,
      knowledgeGraphContribution: 10,
      futureGrowth: 10
    },
    weightedPriorityScore: 127,
    discoveryScorecard: 98,
    status: "Assigned to Editorial"
  },
  {
    id: "opp-10",
    title: "Dynamic Model Routing Proxies: Tiering Queries from Haiku 8B to Claude 3.5 Sonnet to Slash TCO",
    category: "Category J: Market Intelligence",
    signalSource: "Enterprise Cloud Spending Index Q3 2026 & FinOps Foundation",
    detectedAt: "2026-07-15",
    targetCluster: "AI FinOps & Inference Optimization",
    primaryKeywords: ["Dynamic Model Routing", "LLM Tiering Proxy", "AI FinOps Routing", "Token Cost Optimization"],
    entityTargets: ["model-router", "ai-finops", "semantic-router", "multi-model-proxy"],
    opportunityMatrix: {
      searchDemand: 10,
      enterpriseDemand: 10,
      aiSearchVisibility: 10,
      technicalImportance: 10,
      topicalAuthorityValue: 10,
      evergreenPotential: 10,
      competitionLevel: 9,
      commercialIntent: 10,
      knowledgeGraphContribution: 10,
      futureGrowth: 10
    },
    weightedPriorityScore: 129,
    discoveryScorecard: 99,
    status: "Validated"
  }
];

// ============================================================================
// 2. Competitor Intelligence & Gap Analysis Registry (15+ Major Publishers)
// ============================================================================

export const competitorAudits: CompetitorAudit[] = [
  {
    publicationName: "MIT Technology Review",
    domain: "technologyreview.com",
    focusArea: "High-level research trends & societal impact",
    publishingVelocity: "Daily / Weekly Features",
    contentDepthRating: "Moderate",
    identifiedWeaknesses: ["Lacks actionable architectural code", "No step-by-step enterprise deployment runbooks", "Minimal structured JSON-LD/schema for AI answer engines"],
    contentGaps: ["vLLM cluster sizing equations", "Deterministic MCP tool definitions", "Granular token economics and KV cache hit rate math"],
    techlumeAdvantageStrategy: "Provide direct runnable code blocks, explicit state-machine diagrams, and 6-stage cognitive reasoning pathways that engineering leads can deploy immediately."
  },
  {
    publicationName: "Vercel Engineering Blog",
    domain: "vercel.com/blog",
    focusArea: "Frontend AI SDKs, Next.js streaming, serverless AI",
    publishingVelocity: "Bi-Weekly",
    contentDepthRating: "Deep",
    identifiedWeaknesses: ["Tightly coupled to Vercel cloud primitives", "Skips self-hosted multi-GPU on-premise infrastructure", "Limited coverage of air-gapped security frameworks"],
    contentGaps: ["Sovereign RAG deployments on bare-metal Kubernetes", "INT4 AWQ quantization comparisons on local H100 clusters", "Multi-agent deterministic state persistence outside serverless functions"],
    techlumeAdvantageStrategy: "Maintain platform-agnostic, enterprise-first engineering neutrality with deep coverage of hybrid cloud, on-premise, and air-gapped sovereign architectures."
  },
  {
    publicationName: "Anthropic Engineering Blog",
    domain: "anthropic.com/news",
    focusArea: "Model context protocol, safety research, constitutional AI",
    publishingVelocity: "Monthly / Release-driven",
    contentDepthRating: "Enterprise-Grade",
    identifiedWeaknesses: ["Occasional publishing schedule", "Focused strictly on Claude ecosystem", "Does not benchmark against open-weights models (Llama 3, DeepSeek)"],
    contentGaps: ["Cross-model speculative decoding comparisons", "Multi-vendor routing proxies between Claude and local Llama 3 models", "Granular FinOps tiering math"],
    techlumeAdvantageStrategy: "Deliver continuous weekly technical deep-dives comparing Claude, open-weights models, and multi-model hybrid orchestration with transparent cost/performance benchmarks."
  },
  {
    publicationName: "InfoQ / The New Stack",
    domain: "infoq.com / thenewstack.io",
    focusArea: "Enterprise software architecture, DevOps, cloud engineering",
    publishingVelocity: "Daily",
    contentDepthRating: "Moderate",
    identifiedWeaknesses: ["Often relies on third-party contributor summaries without code verification", "Inconsistent structural formatting across articles", "Low citation density to foundational arXiv preprints"],
    contentGaps: ["Deep first-principles mathematical explanations of PagedAttention and continuous vision-language tokens", "Rigorous LLM-as-a-judge pairwise calibration scripts"],
    techlumeAdvantageStrategy: "Enforce 100% in-house engineering verification, rigorous academic arXiv citations, and standardized 12-layer EOS quality governance across every publication."
  },
  {
    publicationName: "VentureBeat / ZDNet / TechCrunch",
    domain: "venturebeat.com / zdnet.com",
    focusArea: "AI funding rounds, corporate announcements, executive news",
    publishingVelocity: "Multiple times daily",
    contentDepthRating: "Shallow",
    identifiedWeaknesses: ["News-reactive commentary with almost zero code or architectural depth", "High ad clutter diluting dwell time", "Surface-level summaries generated directly from press releases"],
    contentGaps: ["Actual production trade-offs between LangGraph and LlamaIndex", "How to implement NeMo Guardrails inside high-concurrency banking pipelines"],
    techlumeAdvantageStrategy: "Never publish news-reactive wrapper summaries. Focus strictly on evergreen institutional engineering benchmarks and actionable architectural standards."
  },
  {
    publicationName: "Ars Technica / The Verge",
    domain: "arstechnica.com / theverge.com",
    focusArea: "Consumer tech, hardware reviews, AI policy & ethics",
    publishingVelocity: "Daily",
    contentDepthRating: "Moderate",
    identifiedWeaknesses: ["Oriented toward general tech enthusiasts and consumers rather than Staff AI Engineers", "No enterprise SLA or compliance framing"],
    contentGaps: ["ISO/IEC 42001 & NIST AI RMF compliance matrices for enterprise generative AI", "Hardware interlocks for VLA humanoid robotics"],
    techlumeAdvantageStrategy: "Target the C-Suite and Senior Engineering personas with enterprise-grade compliance checkblocks, financial TCO models, and zero-trust security matrices."
  },
  {
    publicationName: "IEEE Spectrum / ACM TechNews",
    domain: "spectrum.ieee.org",
    focusArea: "Electrical engineering, academic computer science breakthroughs",
    publishingVelocity: "Weekly / Monthly",
    contentDepthRating: "Deep",
    identifiedWeaknesses: ["Academic prose that can be difficult to translate into immediate commercial software pipelines", "Lacks modern web interactivity and dynamic visual diagrams"],
    contentGaps: ["Bridging IEEE robotics/DSP algorithms with modern LangGraph or TypeScript/Python agentic frameworks", "SaaS unit economics under GPU constraint"],
    techlumeAdvantageStrategy: "Translate dense academic preprints into clear, interactive cognitive pathways (`cognitive-pathway`), visual decision trees, and production-ready code repositories."
  },
  {
    publicationName: "OpenAI & Google DeepMind Technical Blogs",
    domain: "openai.com/research / deepmind.google",
    focusArea: "Proprietary frontier model training, reasoning research, benchmarks",
    publishingVelocity: "Release-driven",
    contentDepthRating: "Enterprise-Grade",
    identifiedWeaknesses: ["Strictly siloed to their respective proprietary APIs and research breakthroughs", "No independent comparative critique"],
    contentGaps: ["Independent vendor-neutral trade-off matrices between GPT-4o, Gemini 1.5 Pro, and open-weights alternatives across private data workloads"],
    techlumeAdvantageStrategy: "Serve as the definitive, unbiased, vendor-neutral evaluation authority that benchmarks all frontier and open models against identical production metrics."
  },
  {
    publicationName: "NVIDIA Developer & AWS Machine Learning Blogs",
    domain: "developer.nvidia.com/blog / aws.amazon.com/blogs/machine-learning",
    focusArea: "GPU kernel optimization, cloud infrastructure deployment runbooks",
    publishingVelocity: "Weekly",
    contentDepthRating: "Deep",
    identifiedWeaknesses: ["Heavily optimized to sell specific vendor hardware (NVIDIA GPUs or AWS SageMaker/Bedrock instances)", "Verbose vendor boilerplate"],
    contentGaps: ["Cross-cloud multi-vendor portable architectures (e.g., deploying identical vLLM clusters on bare-metal vs AWS vs CoreWeave)"],
    techlumeAdvantageStrategy: "Provide cloud-neutral infrastructure designs that empower enterprises to prevent vendor lock-in and optimize spot GPU arbitrage across multiple compute providers."
  }
];

// ============================================================================
// 3. Emerging Entity Detection Radar (Building Topical Authority Early)
// ============================================================================

export const emergingEntities: EmergingEntity[] = [
  {
    id: "ent-01",
    canonicalName: "speculative-decoding-v2",
    type: "AI Model",
    firstDetectedDate: "2026-07-01",
    growthVelocity: "Explosive",
    description: "Advanced draft-target model pairing techniques utilizing lightweight 8B student drafts to accelerate 70B+ target model token generation by up to 2.8x without accuracy loss.",
    plannedArticlesCount: 3
  },
  {
    id: "ent-02",
    canonicalName: "mcp-local-sandbox",
    type: "Protocol",
    firstDetectedDate: "2026-06-15",
    growthVelocity: "Explosive",
    description: "Containerized and WebAssembly-based execution sandboxes that isolate Model Context Protocol (MCP) tool calls from host filesystem and network resources during autonomous agent loops.",
    plannedArticlesCount: 4
  },
  {
    id: "ent-03",
    canonicalName: "pagedattention-v2",
    type: "Inference Engine",
    firstDetectedDate: "2026-07-05",
    growthVelocity: "High",
    description: "Next-generation non-contiguous virtual memory allocation for LLM Key-Value caches, supporting dynamic block recycling and cross-request prefix caching in multi-tenant vLLM clusters.",
    plannedArticlesCount: 3
  },
  {
    id: "ent-04",
    canonicalName: "sovereign-enterprise-rag",
    type: "Enterprise Platform",
    firstDetectedDate: "2026-06-20",
    growthVelocity: "Explosive",
    description: "Zero-egress, air-gapped retrieval-augmented generation topologies deployed inside on-premise government, defense, and healthcare datacenters with localized embedding pipelines.",
    plannedArticlesCount: 4
  },
  {
    id: "ent-05",
    canonicalName: "ast-context-engine",
    type: "Framework",
    firstDetectedDate: "2026-06-28",
    growthVelocity: "High",
    description: "Abstract Syntax Tree indexing structures that allow AI coding agents to semantically traverse symbol definitions across 100,000+ line repositories without exceeding token context windows.",
    plannedArticlesCount: 3
  },
  {
    id: "ent-06",
    canonicalName: "semantic-firewall-4layer",
    type: "Enterprise Platform",
    firstDetectedDate: "2026-07-02",
    growthVelocity: "Explosive",
    description: "Multi-stage incoming and outgoing prompt inspection systems combining regex guardrails, embedding classifiers, and dedicated Llama Guard instances to contain indirect prompt injection.",
    plannedArticlesCount: 3
  },
  {
    id: "ent-07",
    canonicalName: "vla-hierarchical-dsp",
    type: "Hardware Architecture",
    firstDetectedDate: "2026-07-08",
    growthVelocity: "Steady",
    description: "Dual-loop robotic control architectures splitting high-level semantic reasoning (10Hz Transformer) from high-frequency kinematic reflex adjustments (1kHz Digital Signal Processor).",
    plannedArticlesCount: 2
  },
  {
    id: "ent-08",
    canonicalName: "dynamic-model-router",
    type: "Inference Engine",
    firstDetectedDate: "2026-07-10",
    growthVelocity: "Explosive",
    description: "Intelligent proxy layers that classify incoming user prompt complexity in <15ms and dynamically route queries to the cheapest capable tier (Haiku vs Sonnet vs Opis) to optimize FinOps margins.",
    plannedArticlesCount: 3
  }
];

// ============================================================================
// 4. Topical Cluster Expansion Plans (Turning Signals into Interconnected Authority)
// ============================================================================

export const topicalClustersPlan: TopicalClusterPlan[] = [
  {
    clusterId: "cluster-agents",
    clusterName: "Enterprise Multi-Agent Orchestration",
    pillar: "Enterprise AI & Autonomous Agents",
    cornerstoneGuide: "enterprise-ai-agents-production",
    spokeArticles: [
      {
        slug: "langgraph-vs-llamaindex-persistence-benchmark",
        title: "LangGraph vs LlamaIndex Workflows: 2026 Production State Persistence Benchmark",
        keywordFocus: "LangGraph State Persistence",
        stage: "Planned"
      },
      {
        slug: "deterministic-mcp-guardrails-banking",
        title: "Deterministic MCP Tool Guardrails for High-Concurrency Banking Agents",
        keywordFocus: "MCP Banking Guardrails",
        stage: "In Production"
      },
      {
        slug: "autonomous-soc-remediation-triage",
        title: "Autonomous SOC Remediation Playbook: Multi-Agent Triage without Human Bottlenecks",
        keywordFocus: "Multi-Agent SOC Triage",
        stage: "Planned"
      }
    ]
  },
  {
    clusterId: "cluster-infrastructure",
    clusterName: "Open Model Serving & Inference Economics",
    pillar: "AI Models & Infrastructure",
    cornerstoneGuide: "open-models-infrastructure-shift",
    spokeArticles: [
      {
        slug: "speculative-decoding-v2-llama3-benchmark",
        title: "Speculative Decoding in Production: Llama 3 8B Draft + 70B Target Benchmarks",
        keywordFocus: "Speculative Decoding Llama 3",
        stage: "In Production"
      },
      {
        slug: "vllm-pagedattention-sizing-guide",
        title: "vLLM PagedAttention Cluster Sizing Guide for 70B Open Models",
        keywordFocus: "vLLM Cluster Sizing",
        stage: "Planned"
      },
      {
        slug: "dynamic-model-routing-proxy-tco",
        title: "Dynamic Model Routing Proxy: Tiering Queries from Haiku 8B up to Claude 3.5",
        keywordFocus: "Dynamic Model Routing",
        stage: "Planned"
      }
    ]
  },
  {
    clusterId: "cluster-security",
    clusterName: "AI Security & Adversarial Defense",
    pillar: "AI Security & Compliance",
    cornerstoneGuide: "cybersecurity-ai-defense-brief",
    spokeArticles: [
      {
        slug: "building-4layer-semantic-firewall",
        title: "Building a 4-Layer Semantic Firewall with NeMo Guardrails and Llama Guard",
        keywordFocus: "4-Layer Semantic Firewall",
        stage: "In Production"
      },
      {
        slug: "sandboxing-mcp-code-execution",
        title: "Sandboxing MCP Code Execution: Network Isolation for Autonomous Python Tools",
        keywordFocus: "MCP Code Sandboxing",
        stage: "In Production"
      },
      {
        slug: "detecting-indirect-rag-injection-hr",
        title: "Detecting and Mitigating Indirect RAG Injection in Automated HR Pipelines",
        keywordFocus: "Indirect RAG Injection",
        stage: "Planned"
      }
    ]
  },
  {
    clusterId: "cluster-evaluation",
    clusterName: "LLM Evaluation & Quality Assurance",
    pillar: "MLOps & Quality Engineering",
    cornerstoneGuide: "data-science-evaluation-stack",
    spokeArticles: [
      {
        slug: "automating-ragas-github-actions",
        title: "Automating Ragas Faithfulness & Context Precision Gates inside GitHub Actions CI/CD",
        keywordFocus: "Automated Ragas CI/CD",
        stage: "In Production"
      },
      {
        slug: "calibrating-llm-as-a-judge-pairwise",
        title: "Calibrating LLM-as-a-Judge Prompts with Pairwise Comparison & Chain-of-Thought",
        keywordFocus: "LLM-as-a-Judge Calibration",
        stage: "Planned"
      }
    ]
  }
];
