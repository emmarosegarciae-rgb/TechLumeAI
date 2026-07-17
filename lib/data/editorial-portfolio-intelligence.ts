export interface TopicScoringFactors {
  pillarRelevance: number;      // 0-10
  authorityValue: number;       // 0-10
  audienceValue: number;        // 0-10
  contentGap: number;           // 0-10
  originalityPotential: number; // 0-10
  aiSearchPotential: number;    // 0-10
  internalLinkingValue: number; // 0-10
  businessValue: number;        // 0-10
  evergreenPotential: number;   // 0-10
  competitiveDifficulty: number;// 0-10 (Subtracted)
}

export interface TopicScoreResult {
  rawScore: number;
  clampedScore: number;
  priorityLabel: "Immediate Priority" | "High Priority" | "Strategic Opportunity" | "Monitor" | "Reject or Defer";
  priorityColor: string;
  recommendation: string;
}

export function calculateTopicPriorityScore(factors: TopicScoringFactors): TopicScoreResult {
  const positiveScore = (
    (factors.pillarRelevance * 10) +
    (factors.authorityValue * 10) +
    (factors.audienceValue * 10) +
    (factors.contentGap * 10) +
    (factors.originalityPotential * 10) +
    (factors.aiSearchPotential * 10) +
    (factors.internalLinkingValue * 10) +
    (factors.businessValue * 10) +
    (factors.evergreenPotential * 10)
  );
  
  const penalty = (factors.competitiveDifficulty * 10);
  const rawScore = positiveScore - penalty;
  const normalizedScore = Math.max(0, Math.min(100, Math.round(rawScore / 8))); // Scaled to 0-100 range

  let priorityLabel: TopicScoreResult["priorityLabel"];
  let priorityColor: string;
  let recommendation: string;

  if (normalizedScore >= 90) {
    priorityLabel = "Immediate Priority";
    priorityColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    recommendation = "Commission immediately. Assign lead technical author and lock Tier-1 specifications.";
  } else if (normalizedScore >= 75) {
    priorityLabel = "High Priority";
    priorityColor = "bg-blue-500/10 text-blue-400 border-blue-500/30";
    recommendation = "Schedule for current editorial sprint. Conduct competitor gap matrix before drafting.";
  } else if (normalizedScore >= 60) {
    priorityLabel = "Strategic Opportunity";
    priorityColor = "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
    recommendation = "Queue for cluster expansion. Pair with parent cornerstone guide to boost internal link equity.";
  } else if (normalizedScore >= 40) {
    priorityLabel = "Monitor";
    priorityColor = "bg-amber-500/10 text-amber-400 border-amber-500/30";
    recommendation = "Defer full drafting. Monitor SERP shifts, developer issue trackers, and specification maturation.";
  } else {
    priorityLabel = "Reject or Defer";
    priorityColor = "bg-rose-500/10 text-rose-400 border-rose-500/30";
    recommendation = "Reject topic or merge as an FAQ subsection into an existing authority guide. Low standalone ROI.";
  }

  return {
    rawScore,
    clampedScore: normalizedScore,
    priorityLabel,
    priorityColor,
    recommendation
  };
}

export interface AudienceSegment {
  id: string;
  name: string;
  primaryNeeds: string[];
  contentDeliverables: string[];
  toneAndDepth: string;
}

export const audienceSegmentsRegistry: AudienceSegment[] = [
  {
    id: "developers",
    name: "Developers & Software Engineers",
    primaryNeeds: ["Technical explanations", "Concrete code syntax", "API payload schemas", "Framework architecture", "Debugging patterns", "Latency/VRAM performance"],
    contentDeliverables: ["Tested code blocks (`npm`, `python`, `vllm`)", "Node sequence charts", "Terminal CLI commands", "Reproducible benchmark scripts"],
    toneAndDepth: "Zero marketing fluff. High technical density, explicit parameter specifications, and honest failure mode disclosures."
  },
  {
    id: "technical-professionals",
    name: "Technical Professionals & Staff Architects",
    primaryNeeds: ["Tool trade-off matrices", "System integration workflows", "Implementation playbooks", "Multi-model routing", "Engineering skills upskilling", "Career & organization implications"],
    contentDeliverables: ["Multi-dimensional comparison grids", "State persistence diagrams", "Zero-trust security checklists", "Capacity planning calculators"],
    toneAndDepth: "Systems-level synthesis balancing architectural purity with real-world production constraints and team velocity."
  },
  {
    id: "enterprise-decision-makers",
    name: "Enterprise Decision-Makers (CISOs, VPs, Founders)",
    primaryNeeds: ["Defensible ROI economics", "Compliance & governance (EU AI Act, NIST)", "Total Cost of Ownership (TCO)", "Vendor lock-in risk mitigation", "Workforce transformation strategy"],
    contentDeliverables: ["SaaS unit margin models", "FinOps cloud cost breakdowns", "Compliance readiness scorecards", "Executive summary Key Takeaway boxes"],
    toneAndDepth: "Authoritative, data-backed institutional clarity focusing on risk containment, long-term capital efficiency, and strategic moats."
  },
  {
    id: "general-tech-readers",
    name: "General Technology Readers & Industry Analysts",
    primaryNeeds: ["Clear conceptual definitions", "Macro industry context", "Practical meaning of breakthroughs", "Real-world economic & societal impact"],
    contentDeliverables: ["Scannable conceptual explainers", "Clear 'What is it / Why does it matter' breakdowns", "Glossary definitions", "High-signal trend synthesis"],
    toneAndDepth: "Accessible yet intellectually rigorous. Avoids dumbed-down metaphors while clarifying complex hardware and software shifts."
  }
];

export interface ClusterExpansionNode {
  stepNumber: number;
  title: string;
  contentType: string;
  roleInCluster: string;
  slug: string;
}

export interface TopicalClusterBlueprint {
  clusterName: string;
  pillar: string;
  cornerstoneGuide: {
    title: string;
    slug: string;
    description: string;
  };
  expansionHierarchy: ClusterExpansionNode[];
}

export const topicalClusterBlueprints: TopicalClusterBlueprint[] = [
  {
    clusterName: "Autonomous AI Agents & Orchestration",
    pillar: "AI Engineering & Large Language Models",
    cornerstoneGuide: {
      title: "Complete Enterprise Guide to AI Agents: Production Topologies & HITL Governance",
      slug: "enterprise-ai-agents-production",
      description: "The central cornerstone asset establishing definitive architectural patterns for stateful, tool-using, multi-agent systems."
    },
    expansionHierarchy: [
      { stepNumber: 1, title: "What Are AI Agents? Mechanics-First Dissection", contentType: "Technical Explainer", roleInCluster: "Core Conceptual Definition", slug: "what-are-ai-agents-mechanics" },
      { stepNumber: 2, title: "How AI Agent Architecture Works: Loops, Tool Calling & State Checkpoints", contentType: "Technical Explainer", roleInCluster: "Internal Mechanics Deep-Dive", slug: "ai-agent-architecture-mechanics" },
      { stepNumber: 3, title: "Multi-Agent Orchestration: LangGraph vs. CrewAI vs. AutoGen Topologies", contentType: "Comparison Content", roleInCluster: "Framework Evaluation & Benchmarking", slug: "multi-agent-orchestration-comparison" },
      { stepNumber: 4, title: "Agent Memory Architectures: Short-Term KV Cache vs. Long-Term Vector & Graph RAG", contentType: "Technical Explainer", roleInCluster: "State & Memory Subsystem Guide", slug: "agent-memory-architectures" },
      { stepNumber: 5, title: "Automated Agent Evaluation: SWE-bench, Trajectory Scoring & Deterministic QA", contentType: "Implementation Guide", roleInCluster: "Quality Assurance & CI/CD Pipeline", slug: "agent-evaluation-frameworks" },
      { stepNumber: 6, title: "AI Agent Security: Prompt Injection Defense & Permission Isolation Scopes", contentType: "Security Analysis", roleInCluster: "Zero-Trust Hardening Blueprint", slug: "ai-agent-security-defense" },
      { stepNumber: 7, title: "Deploying Stateful Multi-Agent Systems to Kubernetes & Serverless Environments", contentType: "Implementation Guide", roleInCluster: "Production DevOps Playbook", slug: "deploying-multi-agent-systems" },
      { stepNumber: 8, title: "Enterprise AI Agent ROI: Unit Economics & Token Cost Optimization", contentType: "Data-Driven Report", roleInCluster: "C-Suite Financial & FinOps Justification", slug: "enterprise-ai-agent-roi" },
      { stepNumber: 9, title: "The Future of Autonomous Systems: Vision-Language-Action (VLA) & Self-Improving Agents", contentType: "Investigative Analysis", roleInCluster: "Frontier / Experimental Outlook", slug: "future-autonomous-ai-agents" }
    ]
  },
  {
    clusterName: "Model Context Protocol (MCP) & Universal Tool Interfaces",
    pillar: "AI Engineering & Large Language Models",
    cornerstoneGuide: {
      title: "Complete MCP (Model Context Protocol) Guide: Universal Server & Client Architecture",
      slug: "complete-mcp-guide-architecture",
      description: "The definitive open standard manual for building bi-directional, context-rich tool interfaces over JSON-RPC 2.0."
    },
    expansionHierarchy: [
      { stepNumber: 1, title: "What Is the Model Context Protocol (MCP)? Core RFC Dissection", contentType: "Technical Explainer", roleInCluster: "Core Protocol Definition", slug: "what-is-model-context-protocol" },
      { stepNumber: 2, title: "MCP Transport Layer Mechanics: stdio vs. Server-Sent Events (SSE)", contentType: "Technical Explainer", roleInCluster: "Transport & Packet Architecture", slug: "mcp-transport-layer-mechanics" },
      { stepNumber: 3, title: "Building a Custom MCP Server in TypeScript & Python: Step-by-Step Tutorial", contentType: "Implementation Guide", roleInCluster: "Developer Execution Playbook", slug: "building-custom-mcp-servers" },
      { stepNumber: 4, title: "Securing MCP Servers: Sandboxed Tool Execution & OAuth Scopes", contentType: "Security Analysis", roleInCluster: "Protocol Security & Permission Hardening", slug: "securing-mcp-servers" },
      { stepNumber: 5, title: "MCP vs. OpenAI Function Calling vs. Custom REST APIs: Latency & Interoperability Benchmark", contentType: "Comparison Content", roleInCluster: "Architectural Trade-Off Analysis", slug: "mcp-vs-function-calling-benchmark" },
      { stepNumber: 6, title: "Enterprise MCP Deployment: Multi-Tenant Tool Routing & Observability", contentType: "Implementation Guide", roleInCluster: "Enterprise Scale Operation", slug: "enterprise-mcp-deployment" }
    ]
  }
];

export interface ClusterGapCategory {
  category: "Covered" | "Missing" | "Weak" | "Duplicate" | "Orphan" | "High-Value" | "Low-Value" | "Future";
  definition: string;
  actionRequired: string;
  badgeStyle: string;
}

export const clusterGapCategoriesRegistry: ClusterGapCategory[] = [
  { category: "Covered", definition: "Topic exists with high technical depth, updated benchmarks, and strong internal links.", actionRequired: "Maintain quarterly in lifecycle tracking.", badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  { category: "Missing", definition: "Critical step or architectural concept absent from cluster hierarchy.", actionRequired: "Commission immediately with high priority.", badgeStyle: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
  { category: "Weak", definition: "Article exists but lacks code syntax, Tier-1 source citations, or benchmark matrices.", actionRequired: "Schedule for Phase 10 technical overhaul.", badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  { category: "Duplicate", definition: "Multiple thin pages competing for the exact same search query or technical intent.", actionRequired: "Merge into single canonical guide via 301 redirect.", badgeStyle: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { category: "Orphan", definition: "High-quality article lacking contextual internal body links from parent or sibling guides.", actionRequired: "Inject >= 5 contextual body links immediately.", badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { category: "High-Value", definition: "Topic showing strong emerging developer search intent and zero high-signal SERP competitors.", actionRequired: "Prioritize for next 14-day publishing sprint.", badgeStyle: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  { category: "Low-Value", definition: "Short-lived noise, generic listicle concept, or superficial trend without architectural substance.", actionRequired: "De-prioritize or retire from calendar.", badgeStyle: "bg-slate-800 text-slate-400 border-slate-700" },
  { category: "Future", definition: "Frontier specification or hardware architecture currently in early alpha/draft phase.", actionRequired: "Monitor in Phase 2 roadmap until specification locks.", badgeStyle: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" }
];

export interface EditorialCalendarItem {
  id: string;
  articleTitle: string;
  pillar: string;
  cluster: string;
  contentType: string;
  targetAudience: string;
  searchIntent: string;
  primaryKeyword: string;
  contentScore: number;
  priority: "Immediate Priority" | "High Priority" | "Strategic Opportunity" | "Monitor";
  publishingCategory: "Evergreen Authority (70%)" | "Timely Analysis (20%)" | "Frontier / Experimental (10%)";
  parentArticle: string;
  status: "IDEA" | "RESEARCHING" | "BRIEF READY" | "OUTLINE READY" | "DRAFTING" | "FACT CHECK" | "EDITORIAL REVIEW" | "SEO/GEO REVIEW" | "VISUAL QA" | "READY TO PUBLISH" | "PUBLISHED" | "MONITORING";
  expectedPublicationDate: string;
  brief: {
    whyNow: string;
    competitorGap: string;
    originalAngle: string;
    requiredSources: string[];
  };
}

export const rollingEditorialCalendarRegistry: EditorialCalendarItem[] = [
  {
    id: "cal-1",
    articleTitle: "PagedAttention Mechanics: How vLLM Optimizes KV Cache Footprints",
    pillar: "AI Infrastructure & Hardware",
    cluster: "LLM Inference & Memory Optimization",
    contentType: "Technical Explainer",
    targetAudience: "Developers & Software Engineers",
    searchIntent: "Technical Implementation",
    primaryKeyword: "pagedattention vllm kv cache",
    contentScore: 94,
    priority: "Immediate Priority",
    publishingCategory: "Evergreen Authority (70%)",
    parentArticle: "open-models-infrastructure-shift",
    status: "READY TO PUBLISH",
    expectedPublicationDate: "2026-07-21",
    brief: {
      whyNow: "High-concurrency LLM deployments face severe VRAM bottlenecks due to contiguous memory fragmentation in KV caching.",
      competitorGap: "SERP explainers only show high-level cartoons; none provide actual C++/CUDA block allocation trace tables.",
      originalAngle: "Step-by-step memory allocation dissection accompanied by executable Python/vLLM memory profiling benchmarks.",
      requiredSources: ["Official vLLM GitHub Repository", "UC Berkeley PagedAttention Paper (arXiv:2309.06180)", "NVIDIA CUDA Memory Guide"]
    }
  },
  {
    id: "cal-2",
    articleTitle: "Securing MCP Servers Against Prompt Injection & Unauthorized Tool Execution",
    pillar: "Cybersecurity & AI",
    cluster: "Model Context Protocol (MCP)",
    contentType: "Implementation Guide",
    targetAudience: "Technical Professionals & Staff Architects",
    searchIntent: "Technical Implementation",
    primaryKeyword: "mcp server security prompt injection",
    contentScore: 92,
    priority: "Immediate Priority",
    publishingCategory: "Evergreen Authority (70%)",
    parentArticle: "cybersecurity-ai-defense-brief",
    status: "FACT CHECK",
    expectedPublicationDate: "2026-07-24",
    brief: {
      whyNow: "As enterprises connect internal databases to Claude via MCP, adversarial prompt injection can trigger destructive tool calls.",
      competitorGap: "Competitors list basic API key advice but ignore transport-layer sandboxing and OS-level permission boundaries.",
      originalAngle: "Zero-trust MCP security checklist complete with TypeScript sandbox wrappers and OAuth scope verification blocks.",
      requiredSources: ["Official MCP Security Specification", "OWASP Top 10 for LLM Applications 2026", "Anthropic Tool Calling Safety Docs"]
    }
  },
  {
    id: "cal-3",
    articleTitle: "LangGraph vs. CrewAI vs. AutoGen: 2026 Enterprise Multi-Agent Benchmark",
    pillar: "AI Engineering & Large Language Models",
    cluster: "Autonomous AI Agents & Orchestration",
    contentType: "Comparison Content",
    targetAudience: "Technical Professionals & Staff Architects",
    searchIntent: "Commercial Investigation",
    primaryKeyword: "langgraph vs crewai vs autogen",
    contentScore: 89,
    priority: "High Priority",
    publishingCategory: "Evergreen Authority (70%)",
    parentArticle: "enterprise-ai-agents-production",
    status: "DRAFTING",
    expectedPublicationDate: "2026-07-28",
    brief: {
      whyNow: "Teams transitioning from prototype agents to stateful production loops require objective latency, checkpointing, and cost metrics.",
      competitorGap: "SERP reviews are thin feature lists without empirical stress tests or memory overhead profiling.",
      originalAngle: "Audited multi-dimensional comparison grid testing 1,000 parallel agent workflows across all three frameworks.",
      requiredSources: ["SWE-Bench Leaderboard", "LangChain/LangGraph Official Repo", "Microsoft AutoGen RFCs"]
    }
  },
  {
    id: "cal-4",
    articleTitle: "Why FinOps Is Moving Upstream Into LLM System Architecture",
    pillar: "Enterprise AI",
    cluster: "AI FinOps & Cloud Economics",
    contentType: "Investigative Analysis",
    targetAudience: "Enterprise Decision-Makers (CISOs, VPs, Founders)",
    searchIntent: "Enterprise Decision-Making",
    primaryKeyword: "ai finops llm cost architecture",
    contentScore: 86,
    priority: "High Priority",
    publishingCategory: "Timely Analysis (20%)",
    parentArticle: "cloud-cost-architecture-guide",
    status: "OUTLINE READY",
    expectedPublicationDate: "2026-08-03",
    brief: {
      whyNow: "Exploding token usage and multi-model API bills force engineering orgs to treat inference cost as a primary architectural constraint.",
      competitorGap: "Traditional FinOps sites focus on AWS discount reservations rather than prompt caching, token routing, and quantization.",
      originalAngle: "C-suite strategic playbook linking model quantization tiers directly to cloud gross margins and unit economics.",
      requiredSources: ["FinOps Foundation AI Working Group Reports", "Gartner Enterprise Cloud AI Spending Index", "Stripe Staff Engineering Case Study"]
    }
  },
  {
    id: "cal-5",
    articleTitle: "Vision-Language-Action (VLA) Robotics: Foundation Models Meet Physical Hardware",
    pillar: "Future Technology",
    cluster: "Embodied AI & Robotics",
    contentType: "Technical Explainer",
    targetAudience: "General Technology Readers & Industry Analysts",
    searchIntent: "Informational",
    primaryKeyword: "vision language action vla robotics",
    contentScore: 82,
    priority: "Strategic Opportunity",
    publishingCategory: "Frontier / Experimental (10%)",
    parentArticle: "robotics-foundation-models",
    status: "BRIEF READY",
    expectedPublicationDate: "2026-08-10",
    brief: {
      whyNow: "Open-weight multimodal releases enable real-time robotic manipulation directly from natural language commands and camera streams.",
      competitorGap: "Competitors publish hype videos without explaining real-time inference latency requirements or tokenized motor action spaces.",
      originalAngle: "Architectural breakdown of RT-2/OpenVLA tokenization schemes and edge hardware interconnect bandwidth limits.",
      requiredSources: ["Stanford Embodied AI Lab Papers", "OpenVLA GitHub Repository", "IEEE Transactions on Robotics"]
    }
  },
  {
    id: "cal-6",
    articleTitle: "INT4 vs. FP8 Quantization: Memory Footprint and Perplexity Drift Trade-offs",
    pillar: "AI Engineering & Large Language Models",
    cluster: "LLM Inference & Memory Optimization",
    contentType: "Comparison Content",
    targetAudience: "Developers & Software Engineers",
    searchIntent: "Research & Benchmarking",
    primaryKeyword: "int4 vs fp8 quantization perplexity",
    contentScore: 88,
    priority: "High Priority",
    publishingCategory: "Evergreen Authority (70%)",
    parentArticle: "open-models-infrastructure-shift",
    status: "RESEARCHING",
    expectedPublicationDate: "2026-08-15",
    brief: {
      whyNow: "Deploying 70B+ models on single GPU nodes requires precise understanding of accuracy loss across AWQ, GPTQ, and FP8 calibration.",
      competitorGap: "Existing articles assert that 'quantization causes minimal loss' without providing actual perplexity degradation tables on coding tasks.",
      originalAngle: "Empirical benchmark running HumanEval and GSM8K across FP16, FP8, and INT4 weights on Llama 3.1 70B.",
      requiredSources: ["AutoAWQ & GPTQ Official Repositories", "NVIDIA TensorRT-LLM Quantization Whitepaper", "MIT CSAIL Quantization Studies"]
    }
  }
];

export const annualAuthorityRoadmapRegistry = [
  {
    phase: "Phase 1 — Foundation (Quarter 1)",
    focus: "Establishing Core Pillars & Definitive Cornerstone Guides",
    objectives: [
      "Publish and lock the 8 central cornerstone guides across all pillars",
      "Establish complete knowledge graph (`@id`) connections for organizations and authors",
      "Verify 100% compliance with 16-part canonical structure on baseline explainers"
    ],
    statusBadge: "Active & Established"
  },
  {
    phase: "Phase 2 — Expansion (Quarter 2)",
    focus: "Building Supporting Clusters, Implementation Playbooks & Comparisons",
    objectives: [
      "Expand spoke articles across AI Agents, MCP, and Cloud Cost architecture clusters",
      "Deploy tested, reproducible code repositories (`github.com/techlumeai`) alongside tutorials",
      "Eliminate all orphan content by verifying >= 5 contextual body links per page"
    ],
    statusBadge: "Execution Sprint"
  },
  {
    phase: "Phase 3 — Differentiation (Quarter 3)",
    focus: "Original Benchmarking, Empirical Surveys & Proprietary Frameworks",
    objectives: [
      "Launch annual 'Enterprise Agentic AI Production Benchmarks Report'",
      "Publish original multi-model inference throughput and cost index data",
      "Introduce proprietary decision matrices for enterprise C-suite software adoption"
    ],
    statusBadge: "Planned Roadmap"
  },
  {
    phase: "Phase 4 — Institutional Authority (Quarter 4)",
    focus: "Global Industry References, Open Standards & Distinguished Contributions",
    objectives: [
      "Establish TechlumeAI definitions as top AI citations across Perplexity and ChatGPT Search",
      "Host peer-reviewed engineering guest contributions from staff architects",
      "Achieve definitive domain leadership with zero dependence on generic news cycles"
    ],
    statusBadge: "Strategic Horizon"
  }
];

export const cannibalizationAndRetirementRules = {
  preCommissioningScreen: [
    "Search full TechlumeAI content inventory before approving any candidate topic slug.",
    "Verify whether another existing article targets the exact same primary search query or user problem.",
    "If overlap exists, evaluate: Can this topic be added as an H2/H3 section inside the existing authority guide?",
    "If the existing article is outdated, schedule a Phase 10 technical overhaul rather than creating a competing URL.",
    "Ensure every new article has a unique, defensible primary keyword and distinct search intent angle."
  ],
  topicRetirementCriteria: [
    "Topic is based on a short-lived, superficial news cycle that has lost relevance after 90 days.",
    "Topic has been made obsolete by formal protocol deprecation or major vendor architecture changes.",
    "Article receives zero organic visibility, zero internal links, and provides no foundational support to its cluster.",
    "Content fails the Evergreen Value Test and cannot be meaningfully updated with deep technical benchmarks."
  ]
};

export const mandatoryPortfolioCompletionGateChecklist = [
  { id: "port-1", item: "All 8 editorial pillars are mapped with explicit cornerstone guides.", category: "Pillar Governance" },
  { id: "port-2", item: "Existing content inventory is audited and mapped into semantic clusters.", category: "Cluster Architecture" },
  { id: "port-3", item: "Topical clusters enforce cornerstone-first hierarchy before spoke creation.", category: "Cluster Architecture" },
  { id: "port-4", item: "Content Gap Matrix identifies missing, weak, and high-value cluster opportunities.", category: "Gap Analysis" },
  { id: "port-5", item: "Mathematical Topic Prioritization Score (0–100) governs all commissioning.", category: "Scoring Engine" },
  { id: "port-6", item: "Audience segmentation ensures clear targeting across Developers, Architects, CISOs, and General Readers.", category: "Audience Intelligence" },
  { id: "port-7", item: "70% Evergreen Authority / 20% Timely Analysis / 10% Frontier mix is strictly enforced.", category: "Strategic Mix" },
  { id: "port-8", item: "Rolling 12-stage editorial calendar actively manages workflow from IDEA to MONITORING.", category: "Calendar System" },
  { id: "port-9", item: "Pre-commissioning cannibalization check prevents duplicate URLs and intent overlap.", category: "Cannibalization Defense" },
  { id: "port-10", item: "SERP competitor gap audits verify our superior information architecture before drafting.", category: "Competitive Intelligence" },
  { id: "port-11", item: "AI search answer extraction (definition blocks, structured comparisons) is hard-coded into briefs.", category: "AI Search Visibility" },
  { id: "port-12", item: "Annual 4-phase authority roadmap guides long-term capital allocation and research hours.", category: "Long-Term Strategy" },
  { id: "port-13", item: "Evergreen Value Test screens out short-lived noise and low-value press releases.", category: "Quality Assurance" },
  { id: "port-14", item: "Topic selection is governed strictly by strategic knowledge compounding, not random search volume.", category: "Institutional Mandate" }
];

export const trendValidationFramework = [
  { question: "Is the trend real?", guidance: "Verify organic engineering demand via developer issue trackers, official GitHub PRs, and production adoption—not just social media hype." },
  { question: "Is it technically meaningful?", guidance: "Must introduce a concrete architectural shift, new protocol specification, memory optimization, or security vector." },
  { question: "Is it likely to remain relevant?", guidance: "Avoid fleeting news cycles; ensure the core concept will remain applicable for at least 12–24 months." },
  { question: "Does it connect to a larger topic?", guidance: "Must anchor into one of our 8 Core Pillars and support an established or planned topical cluster." },
  { question: "Can TechlumeAI provide original analysis?", guidance: "Requires empirical code blocks, custom node sequence diagrams, or proprietary benchmarks unavailable on generic news blogs." },
  { question: "Will the article remain useful after the news cycle?", guidance: "If the news fades, the technical reference sections (e.g., configuration, trade-offs) must retain high standalone value." }
];

export const evergreenValueTestFramework = [
  { question: "Will this remain useful in six months?", guidance: "Core concepts, formulas, and system design patterns must resist rapid obsolescence." },
  { question: "Will this remain useful in one year?", guidance: "Provides foundational reference value for new engineers onboarding into the topic domain." },
  { question: "Can it become a reference?", guidance: "Structured with clear definitions, comparative grids, and canonical terminology that invite bookmarking." },
  { question: "Can it support related articles?", guidance: "Acts as a reliable contextual target for body links (`/articles/[slug]`) from downstream tutorials and comparisons." },
  { question: "Can it earn natural citations?", guidance: "Contains verifiable benchmark metrics and authoritative frameworks that external documentation and academic researchers cite." },
  { question: "Can it answer recurring user questions?", guidance: "Directly solves frequent developer FAQs, PAA (People Also Ask) blocks, and common production debugging bottlenecks." }
];

export const contentOpportunityBriefSchema = `#######################################################################
TECHLUMEAI CONTENT OPPORTUNITY BRIEF (MANDATORY PHASE 2 SPECIFICATION)
#######################################################################

TOPIC:
[Insert precise, high-density candidate topic name]

WHY NOW:
[Explain the immediate production bottleneck, protocol update, or enterprise adoption trigger necessitating this article now]

PRIMARY AUDIENCE:
[Select 1: Developers & Engineers | Technical Professionals & Architects | Enterprise Decision-Makers | General Technology Readers]

PRIMARY INTENT:
[Select 1: Informational | Technical Implementation | Commercial Investigation | Enterprise Decision-Making]

PILLAR:
[Select from 8 Core Pillars, e.g., AI Engineering & LLMs / Cybersecurity & AI]

CLUSTER:
[Assign to exact Topical Cluster, e.g., AI Agents / LLM Inference / Zero-Trust AI]

CONTENT TYPE:
[Select: Cornerstone Guide | Technical Explainer | Implementation Playbook | Multi-Model Benchmark | Security Breakdown | FinOps Analysis]

PRIMARY QUESTION:
[State the exact primary question the article definitively resolves for the reader]

SECONDARY QUESTIONS:
[List 3–5 specific supporting technical questions and edge cases addressed across H2/H3 sections]

COMPETITOR GAP:
[Specify exactly what top 10 SERP competitors and AI Overviews omit, misstate, or treat superficially]

ORIGINAL ANGLE:
[Define our proprietary value injection: executable syntax, custom architecture diagrams, latency/memory benchmarks, or unit margin models]

KEY ENTITIES:
[List 6–10 semantic entities to weave into text (e.g., PagedAttention, vLLM, KV Cache, CUDA, PyTorch, Tensor Parallelism)]

REQUIRED SOURCES:
[List minimum 3 Tier-1 sources: arXiv papers, vendor docs, official RFCs, or institutional benchmarks]

VISUAL OPPORTUNITIES:
[Describe required Figma-grade visual assets: system flow diagrams, sequence charts, or comparison grids]

INTERNAL LINK OPPORTUNITIES:
[List >= 5 exact target URLs and contextual anchor phrases within TechlumeAI (\`/articles/[slug]\` or \`/topics/[slug]\`)]

BUSINESS VALUE:
[Explain how this article attracts high-value readers, earns newsletter signups, or influences enterprise decision-makers]

AUTHORITY VALUE:
[Describe how this asset compounds our 5-Layer Knowledge Ecosystem and captures AI retrieval visibility]

PRIORITY:
[Lock Score Band: Immediate Priority (90-100) | High Priority (75-89) | Strategic Opportunity (60-74) | Monitor (40-59)]
#######################################################################`;

export const editorialPerformanceReviewRegistry = [
  { metric: "Organic Visibility & Keyword Share", target: "Top 3 SERP dominance across primary technical query clusters", evaluationFrequency: "Monthly" },
  { metric: "Search Impressions & Query Velocity", target: "Continuous upward trend across Google Search Console and technical terms", evaluationFrequency: "Monthly" },
  { metric: "Click-Through Rate (CTR)", target: ">= 4.5% organic CTR via high-signal, non-clickbait engineering titles", evaluationFrequency: "Monthly" },
  { metric: "Ranking Trends & SERP Stability", target: "Zero ranking drops on cornerstone guides (>90 days in top 5)", evaluationFrequency: "Quarterly" },
  { metric: "Internal Link Growth & Anchor Equity", target: ">= 8 incoming contextual body links per cornerstone from spoke articles", evaluationFrequency: "Monthly" },
  { metric: "Content Health & Freshness Index", target: "100% of articles audited every 180 days; zero broken code syntax or outdated APIs", evaluationFrequency: "Quarterly" },
  { metric: "Cluster Coverage Completeness", target: "100% coverage of all 8 Cornerstone-First steps across priority clusters", evaluationFrequency: "Quarterly" },
  { metric: "Natural Citations & Backlink Profile", target: "Organic links earned from `.edu`, GitHub READMEs, and Tier-1 engineering blogs", evaluationFrequency: "Quarterly" },
  { metric: "AI Search Retrieval Visibility", target: "Direct citation in Perplexity, ChatGPT Search, and Google AI Overviews", evaluationFrequency: "Monthly" },
  { metric: "Audience Engagement & Dwell Time", target: ">= 3m 45s average dwell time on technical explainers and code playbooks", evaluationFrequency: "Monthly" }
];

export const finalContentPortfolioAuditRegistry = [
  { item: "Strong Pillars", status: "Verified (`AI Engineering`, `Enterprise AI`, `Cybersecurity`)", action: "Maintain 70% evergreen reference depth and update benchmarks semi-annually." },
  { item: "Weak Pillars", status: "Identified (`Future Technology`, `AI Hardware`)", action: "Prioritize upcoming sprints to build cornerstone guides on Quantum AI and Neuromorphic chips." },
  { item: "Strong Clusters", status: "Verified (`AI Agents`, `Model Context Protocol`, `AI FinOps`)", action: "Expand with Level 4 comparative benchmarks and multi-agent code playbooks." },
  { item: "Missing Clusters", status: "Identified (`Neuromorphic Inference`, `Edge AI On-Device Optimization`)", action: "Commission new Cornerstone Guides and Step 1 Core Explainers immediately." },
  { item: "Missing Cornerstone Guides", status: "Zero missing on core active clusters", action: "Enforce strict pre-commissioning rule: no spoke created without verified parent cornerstone." },
  { item: "Duplicate Topics", status: "Zero duplicates detected across current active URL inventory", action: "Run automated cannibalization pre-screen before every new brief approval." },
  { item: "Underdeveloped Topics", status: "Audited (`Cloud Cost Architecture` lacks exact Python FinOps calculation script)", action: "Schedule Phase 10 technical overhaul to inject runnable FinOps cost scripts." },
  { item: "High-Priority Opportunities", status: "6 Active briefs queued with scores 82–94/100", action: "Advance `PagedAttention` (Score: 94) and `MCP Security` (Score: 92) into production." },
  { item: "Timely Opportunities", status: "Enforcing exactly 20% publishing allocation", action: "Monitoring EU AI Act enforcement milestones and major open-weight model releases." },
  { item: "Frontier Opportunities", status: "Enforcing exactly 10% publishing allocation", action: "Queued brief on Vision-Language-Action (VLA) robotics and physical foundation models." },
  { item: "Content Gaps", status: "Mapped systematically via 8-state Cluster Gap Analysis Matrix", action: "Review every 30 days against top 10 SERP competitor omissions and AI answers." },
  { item: "Audience Gaps", status: "Audited across all 4 segments (Developers, Architects, CISOs, General)", action: "Ensure every cluster maintains explicit technical depth for developers alongside executive summaries." },
  { item: "Internal-Link Opportunities", status: "Ongoing automated enforcement across all 14 categories and 24 topic hubs", action: "Inject minimum 5 bidirectional body links between parent guides and spoke articles." }
];

