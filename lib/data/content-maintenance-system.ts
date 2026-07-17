export interface ContentHealthStatus {
  id: "HEALTHY" | "MONITOR" | "REFRESH_REQUIRED" | "URGENT_UPDATE";
  label: string;
  badgeColor: string;
  borderColor: string;
  description: string;
  criteria: string[];
  slaResponseTime: string;
}

export const contentHealthStatusRegistry: ContentHealthStatus[] = [
  {
    id: "HEALTHY",
    label: "HEALTHY",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    borderColor: "border-emerald-500/30",
    description: "Content is accurate, current, competitive, technically sound, search-intent aligned, and visually functional.",
    criteria: [
      "Zero factual errors or deprecated code blocks (`vLLM`, `PyTorch`, `TypeScript`).",
      "Current statistics and vendor pricing verified within last 90 days.",
      "Dominates top 3 SERP and AI Overviews with strong dwell time (> 3m 45s).",
      "Fully responsive visuals, valid schema markup, and zero broken links."
    ],
    slaResponseTime: "Quarterly monitoring schedule"
  },
  {
    id: "MONITOR",
    label: "MONITOR",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    borderColor: "border-blue-500/30",
    description: "Minor issues exist that do not immediately impair core technical guidance but warrant scheduled attention.",
    criteria: [
      "Some secondary statistics or background context older than 12 months.",
      "Minor ranking or impression drift (e.g., slipped from #2 to #4).",
      "Small broken link on a non-critical outbound reference or older citation.",
      "Emerging minor developments available in open-weight community."
    ],
    slaResponseTime: "30-Day scheduled maintenance queue"
  },
  {
    id: "REFRESH_REQUIRED",
    label: "REFRESH REQUIRED",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    borderColor: "border-amber-500/30",
    description: "Significant issues exist that compromise competitive superiority, search intent alignment, or completeness.",
    criteria: [
      "Outdated technical information, API signatures, or architecture diagrams.",
      "Major competitor content improvement or new authoritative SERP entrant.",
      "Dominant user search intent shift (e.g., from conceptual explanation to code implementation).",
      "Declining organic traffic or CTR drop below 3.5% over 60 days.",
      "Missing critical new entities or emerging industry standards."
    ],
    slaResponseTime: "14-Day editorial refresh sprint"
  },
  {
    id: "URGENT_UPDATE",
    label: "URGENT UPDATE",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    borderColor: "border-rose-500/30",
    description: "Critical problems exist that present immediate reputational, security, or engineering risk to readers.",
    criteria: [
      "Incorrect or broken technical implementation guidance that causes execution failures.",
      "Deprecated frameworks, decommissioned APIs, or discontinued developer tools.",
      "Security inaccuracies, unpatched CVE recommendations, or insecure syntax (`eval`, plain-text keys).",
      "Serious factual errors, misleading claims, or retracted research citations."
    ],
    slaResponseTime: "48-Hour emergency remediation or quarantine"
  }
];

export interface DecayCategory {
  id: string;
  name: string;
  description: string;
  detectionSignals: string[];
  remediationAction: string;
}

export const contentDecayCategoriesRegistry: DecayCategory[] = [
  {
    id: "FACTUAL_DECAY",
    name: "Factual Decay",
    description: "Information, product claims, company status, or dates are no longer accurate.",
    detectionSignals: ["Company acquisitions/rebrands", "Product tier sunsetting", "Retracted studies", "User bug reports"],
    remediationAction: "Verify claims against official vendor changelogs and primary source documentation."
  },
  {
    id: "TECHNICAL_DECAY",
    name: "Technical Decay",
    description: "Technology, API behavior, SDK version, software framework, or syntax has changed.",
    detectionSignals: ["Breaking API releases (e.g., OpenAI v4, Pydantic v2)", "Deprecated CLI flags", "Python/Node runtime EOL"],
    remediationAction: "Re-execute all code snippets in isolated sandbox, update syntax, and bump dependency matrices."
  },
  {
    id: "STATISTICAL_DECAY",
    name: "Statistical Decay",
    description: "Market share, benchmark metrics, latency figures, or survey statistics are outdated.",
    detectionSignals: ["New annual industry reports (State of AI, Gartner, DORA)", "New benchmark leaderboards (LMSYS, OpenLLM)"],
    remediationAction: "Replace outdated statistics with latest empirical figures and link to primary study with date stamp."
  },
  {
    id: "COMPETITIVE_DECAY",
    name: "Competitive Decay",
    description: "Competitors now provide substantially better depth, code examples, or visual charts.",
    detectionSignals: ["Competitor word count / code block expansion", "SERP rank overtaking by Tier-1 developer blogs"],
    remediationAction: "Conduct Level 4 gap analysis and inject proprietary sequence charts, latency benchmarks, or interactive calculators."
  },
  {
    id: "SEARCH_INTENT_DECAY",
    name: "Search Intent Decay",
    description: "Users now want a different answer format (e.g., from theory overview to production DevOps code).",
    detectionSignals: ["PAA question shifts", "Bounce rate spike on high-traffic queries", "SERP layout transition to video/code"],
    remediationAction: "Restructure heading hierarchy (H2/H3) to place direct implementation solutions above fold."
  },
  {
    id: "SEMANTIC_DECAY",
    name: "Semantic Decay",
    description: "Important new entities, sub-protocols, and relationships are missing from the article's knowledge graph.",
    detectionSignals: ["Missing NLP entities (e.g., missing `FlashAttention-3` in attention guides)", "Exclusion from AI Overviews"],
    remediationAction: "Perform entity gap mapping against latest academic literature and weave missing concepts naturally."
  },
  {
    id: "VISUAL_DECAY",
    name: "Visual Decay",
    description: "Images, system architecture diagrams, UI screenshots, or layout elements are outdated.",
    detectionSignals: ["Old UI dashboard screenshots", "Blurry raster graphics", "Diagrams missing newly introduced nodes"],
    remediationAction: "Regenerate high-resolution SVG/WebP diagrams (`Figma-grade` dark mode) and update descriptive captions."
  },
  {
    id: "UX_DECAY",
    name: "UX Decay",
    description: "The content has become difficult to navigate, dense, slow to load, or mobile-unfriendly.",
    detectionSignals: ["Core Web Vitals CLS/LCP issues", "Long scrolling without TOC jump links", "Excessive ad/banner intrusive shifts"],
    remediationAction: "Implement sticky table of contents, collapsible code tabs, and optimize asset delivery."
  }
];

export interface VolatilityBand {
  level: "HIGH" | "MEDIUM" | "LOW";
  label: string;
  topics: string[];
  reviewFrequency: string;
  rationale: string;
}

export const articleReviewFrequencyBands: VolatilityBand[] = [
  {
    level: "HIGH",
    label: "High-Volatility Topics (30-Day Cycle)",
    topics: ["AI Tools & SaaS Platforms", "Commercial APIs & SDKs", "Open-Weight Model Releases", "Pricing & Unit Margin Models", "Cybersecurity CVEs & Vulnerabilities"],
    reviewFrequency: "Every 30 Days (Monthly Audit)",
    rationale: "Rapid release cycles, weekly model updates, and active security vectors require continuous verification to prevent dangerous obsolescence."
  },
  {
    level: "MEDIUM",
    label: "Medium-Volatility Topics (90-Day Cycle)",
    topics: ["Enterprise AI Adoption Strategy", "AI FinOps & Cloud Governance", "EU AI Act & Compliance Mandates", "AI Workforce & Team Structures", "RAG & Agentic Workflow Patterns"],
    reviewFrequency: "Every 90 Days (Quarterly Audit)",
    rationale: "Strategic methodologies and regulatory frameworks shift quarterly with market maturation and major court/agency rulings."
  },
  {
    level: "LOW",
    label: "Low-Volatility Topics (180-Day Cycle)",
    topics: ["Fundamental Mathematical & ML Theory", "Core Programming & Computer Science Principles", "Stable Distributed System Architecture", "TCP/IP, CUDA & Hardware Physics"],
    reviewFrequency: "Every 180 Days (Semi-Annual Audit)",
    rationale: "Foundational computer science and mathematical mechanics remain stable over multi-year horizons, requiring periodic depth and link checks."
  }
];

export const refreshTriggersRegistry = [
  { id: "T01", trigger: "Major Technology Version Change", description: "Release of breaking version (e.g., Next.js 16, Python 3.14, PyTorch 2.6).", action: "Execute Standard or Major Refresh immediately." },
  { id: "T02", trigger: "Product or Service Discontinuation", description: "Vendor shuts down tool, model endpoint, or cloud instance tier.", action: "Execute Urgent Update: replace tool recommendations and inject migration path." },
  { id: "T03", trigger: "New Technical Standard / RFC Released", description: "W3C, IETF, NIST, or IEEE formalizes a new protocol or security guideline.", action: "Update architecture diagrams and compliance scorecards." },
  { id: "T04", trigger: "Major Security CVE / Exploit Emerges", description: "Critical vulnerability discovered in recommended library or deployment pattern.", action: "Execute Urgent Update: add red security alert box and patch code syntax within 48h." },
  { id: "T05", trigger: "Breakthrough Academic Research Available", description: "New arXiv paper proves superior optimization or overturns prior consensus.", action: "Incorporate empirical benchmark tables and cite research." },
  { id: "T06", trigger: "Significant Visibility / CTR Loss", description: "Organic impressions drop > 25% or ranking slips from Top 3 outside Top 5.", action: "Conduct full Competitor Gap Analysis and Search Intent Revalidation." },
  { id: "T07", trigger: "Competitor Substantial Content Improvement", description: "Top SERP rival launches definitive 5,000-word interactive guide with video/code.", action: "Execute Major Refresh to recapture technical depth and unique value." },
  { id: "T08", trigger: "User Search Intent Shift", description: "SERP shifts from conceptual blog posts to GitHub repos, documentation, or code benchmarks.", action: "Re-architect outline: lead with working code playbooks and quick-start templates." },
  { id: "T09", trigger: "Key Statistic or Benchmark Outdated", description: "Cited industry metric crosses 12-month threshold or new annual report drops.", action: "Execute Statistical Refresh Protocol across all data tables." },
  { id: "T10", trigger: "Important Outbound or Internal Link Breaks", description: "Automated crawler flags 404/500 error on cited documentation or internal hub.", action: "Execute Minor Refresh to repair or replace destination URL." },
  { id: "T11", trigger: "Technical Recommendation Obsolete", description: "Industry consensus moves away from practice (e.g., shifting from LangChain to native SDKs/PydanticAI).", action: "Rewrite core implementation sections to reflect state-of-the-art engineering." }
];

export interface RefreshTypeSpec {
  id: "MINOR" | "STANDARD" | "MAJOR" | "REBUILD";
  name: string;
  sla: string;
  scope: string;
  examples: string[];
  verificationRequirement: string;
}

export const refreshTypesRegistry: RefreshTypeSpec[] = [
  {
    id: "MINOR",
    name: "Minor Refresh",
    sla: "Completed within 5 Business Days",
    scope: "Targeted fixes and single-data-point corrections without structural outline changes.",
    examples: [
      "Fixing a broken outbound or internal link (`404/301` correction).",
      "Updating a small statistic (e.g., updating 2024 GPU pricing to 2026 rates).",
      "Correcting a minor factual typo or clarifying a single paragraph.",
      "Adding a newly published internal spoke link to the body text."
    ],
    verificationRequirement: "Link integrity check and quick visual render preview."
  },
  {
    id: "STANDARD",
    name: "Standard Refresh",
    sla: "Completed within 10 Business Days",
    scope: "Multi-section technical enhancements, code syntax updates, and FAQ expansions.",
    examples: [
      "Updating multiple H2/H3 sections to reflect recent SDK minor release updates.",
      "Adding new arXiv research citations and empirical comparison metrics.",
      "Replacing outdated code examples with modernized TypeScript/Python syntax.",
      "Expanding the FAQ section with 3 new high-volume PAA questions.",
      "Injecting 3-5 bidirectional contextual internal links to newly launched cluster hubs."
    ],
    verificationRequirement: "Code block execution validation, mobile/desktop visual QA, and schema check."
  },
  {
    id: "MAJOR",
    name: "Major Refresh",
    sla: "Completed within 15 Business Days",
    scope: "Comprehensive rewrite of major sections, outline restructuring, and new visual injection.",
    examples: [
      "Rewriting 50%+ of the article to align with a major paradigm or intent shift.",
      "Rebuilding the Table of Contents hierarchy for superior developer scannability.",
      "Adding substantial new technical coverage (e.g., adding multi-GPU Tensor Parallelism step).",
      "Replacing outdated architecture diagrams with custom Figma-grade SVG sequence charts.",
      "Injecting interactive FinOps calculators or comprehensive feature comparison matrices."
    ],
    verificationRequirement: "Full 14-point live post-refresh forensic verification & editorial signoff."
  },
  {
    id: "REBUILD",
    name: "Rebuild / Consolidation",
    sla: "Completed within 20 Business Days",
    scope: "Complete tear-down, structural consolidation, or canonical redirection of legacy assets.",
    examples: [
      "The original technology has fundamentally changed or been superseded.",
      "The article is technically obsolete and requires complete ground-up re-engineering.",
      "Consolidating 3 thin, overlapping pages into one definitive 6,000-word Cornerstone Authority Guide.",
      "Implementing 301 redirects from cannibalized URLs to the canonical master asset."
    ],
    verificationRequirement: "Forensic URL redirection audit, link equity preservation check, and full indexing request."
  }
];

export const technicalDeprecationAuditProtocol = [
  { id: "DEP-1", question: "Is the framework still actively maintained and supported by its core team?", actionIfFailed: "Flag as deprecated; inject migration warning box and update to current supported successor." },
  { id: "DEP-2", question: "Is the commercial API endpoint or SDK version still active without deprecation notices?", actionIfFailed: "Replace all API payloads and endpoint URLs with latest stable REST/gRPC specifications." },
  { id: "DEP-3", question: "Is the described hardware feature, cloud instance, or model tier still available?", actionIfFailed: "Remove discontinued SKU/tier from comparison tables and substitute current cloud offerings." },
  { id: "DEP-4", question: "Has the programming language or library syntax changed in recent major releases?", actionIfFailed: "Run code snippets in sandbox, update syntax, and verify zero compiler/runtime warnings." },
  { id: "DEP-5", question: "Has the recommended system architecture pattern been superseded by a better standard?", actionIfFailed: "Rewrite architectural guidance (e.g., transitioning from monolithic vector DBs to hybrid dense-sparse retrieval)." },
  { id: "DEP-6", question: "Has the security hardening guidance changed or have new vulnerability vectors emerged?", actionIfFailed: "Update zero-trust security checklist, add red alert banners for exposed vectors, and patch configs." },
  { id: "DEP-7", question: "Has the product, open-source project, or company been renamed or acquired?", actionIfFailed: "Update all occurrences of legacy naming (`e.g., Twitter->X, LLaMA->Llama 3, Bard->Gemini`) across text and metadata." },
  { id: "DEP-8", question: "Has the technology been entirely replaced by a superior industry consensus approach?", actionIfFailed: "Transform article into a historical comparative breakdown pointing directly to our new canonical replacement guide." }
];

export const statisticsRefreshProtocol = [
  { step: "1. Capture Original Data", requirement: "Log original published date, exact metric, and cited source URL." },
  { step: "2. Verify Current Validity", requirement: "Check if the original data point crosses the 12-month obsolescence threshold." },
  { step: "3. Query Newer Studies", requirement: "Search official annual reports (Gartner, DORA, State of AI, IDC, vendor earnings) for refreshed figures." },
  { step: "4. Evaluate Methodology", requirement: "Ensure the new statistical source uses rigorous empirical methodology matching our quality standards." },
  { step: "5. Replace & Time-Stamp", requirement: "Replace old figure in text and tables, add explicit date stamp (`e.g., 'As of Q2 2026...'`), and link primary source." },
  { step: "6. Purge Unsubstantiated Claims", requirement: "Never continue using outdated statistics merely because they support the article's narrative; if no valid data exists, state qualitative consensus." }
];

export const contentConsolidationAndPruningRules = {
  consolidationCriteria: [
    "Two or more articles target exact same primary keyword or search intent (cannibalization).",
    "Multiple thin spoke pages (< 1,200 words) exist that lack standalone authority.",
    "Overlapping step-by-step guides fragment internal link equity across separate URLs.",
    "Historical blog posts cover fragmented updates of what is now a unified enterprise technology."
  ],
  consolidationWorkflow: [
    "1. Identify the strongest canonical URL (highest existing backlinks, top SERP position, clean slug).",
    "2. Extract unique technical code blocks, benchmark tables, and diagrams from secondary pages into canonical asset.",
    "3. Implement permanent `301 HTTP Redirects` from secondary URLs directly to the canonical URL.",
    "4. Update all internal links across the TechlumeAI codebase to point directly to the canonical destination.",
    "5. Submit canonical URL for immediate indexing and request removal of redirected URLs in Google Search Console."
  ],
  pruningCriteria: [
    "Content is permanently obsolete without historical or comparative reference value.",
    "Content is entirely irrelevant to our 8 Core Editorial Pillars and dilute domain topical authority.",
    "Content is technically dangerous, containing unpatchable security flaws or deprecated destructive commands.",
    "Content receives zero organic traffic, zero backlinks, and zero user engagement over 365 consecutive days."
  ],
  pruningGuardrail: "CRITICAL: Never delete content solely because of temporary low traffic. Always evaluate strategic internal link equity and topical cluster completeness before issuing a `410 Gone` deletion."
};

export interface UpdateRecordLog {
  slug: string;
  title: string;
  pillar: string;
  originalPublishDate: string;
  previousUpdateDate: string;
  newUpdateDate: string;
  updateType: "MINOR" | "STANDARD" | "MAJOR" | "REBUILD";
  reasonForUpdate: string;
  keyChangesMade: string[];
  newSourcesAdded: number;
  newEntitiesAdded: string[];
  visualsRefreshed: boolean;
  liveVerifiedBy: string;
}

export const updateRecordAuditLogRegistry: UpdateRecordLog[] = [
  {
    slug: "/articles/pagedattention-mechanics-vllM-memory-optimization",
    title: "PagedAttention Mechanics & vLLM Memory Optimization: The Definitive Architecture & Code Playbook",
    pillar: "AI Engineering & LLMs",
    originalPublishDate: "2026-03-15",
    previousUpdateDate: "2026-05-10",
    newUpdateDate: "2026-07-17",
    updateType: "MAJOR",
    reasonForUpdate: "vLLM v0.8+ release introduced FlashAttention-3 integration and new chunked prefill memory allocation flags.",
    keyChangesMade: [
      "Updated all Python deployment scripts to vLLM v0.8.2 syntax with chunked prefill parameters.",
      "Regenerated 3D memory block allocation diagram to show dynamic KV cache paging across multiple GPU nodes.",
      "Added empirical benchmark matrix comparing vLLM v0.8 vs TensorRT-LLM on H200 clusters.",
      "Injected 6 new PAA questions regarding out-of-memory (`OOM`) mitigation in high-concurrency production."
    ],
    newSourcesAdded: 4,
    newEntitiesAdded: ["FlashAttention-3", "Chunked Prefill", "vLLM v0.8.2", "H200 High-Bandwidth Memory"],
    visualsRefreshed: true,
    liveVerifiedBy: "Chief Editorial QA Authority (Antigravity CCMS v1.0)"
  },
  {
    slug: "/articles/model-context-protocol-mcp-enterprise-architecture",
    title: "Model Context Protocol (MCP) Enterprise Architecture: Building Secure Tool-Calling Networks",
    pillar: "Enterprise AI",
    originalPublishDate: "2026-02-20",
    previousUpdateDate: "2026-06-01",
    newUpdateDate: "2026-07-16",
    updateType: "STANDARD",
    reasonForUpdate: "Anthropic released updated MCP Server Security Specification v1.2 requiring explicit OAuth2 token scopes.",
    keyChangesMade: [
      "Updated Node.js / TypeScript MCP server implementation code to enforce OAuth2 JWT validation middleware.",
      "Added zero-trust security checklist for local vs remote MCP transport layers.",
      "Injected 5 bidirectional contextual body links to newly launched `/topics/ai-agents` hub."
    ],
    newSourcesAdded: 3,
    newEntitiesAdded: ["MCP Security Spec v1.2", "OAuth2 JWT Scopes", "SSE Transport Security"],
    visualsRefreshed: false,
    liveVerifiedBy: "Senior AI Security Editor"
  },
  {
    slug: "/articles/ai-finops-llm-cloud-cost-architecture",
    title: "AI FinOps & LLM Cloud Cost Architecture: Calculating Unit Margins & Token Economics",
    pillar: "AI Business & Workforce",
    originalPublishDate: "2026-01-10",
    previousUpdateDate: "2026-04-15",
    newUpdateDate: "2026-07-15",
    updateType: "STANDARD",
    reasonForUpdate: "Q3 2026 commercial API price drops across GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro.",
    keyChangesMade: [
      "Updated all token pricing matrices ($/1M input and output tokens) to current Q3 2026 commercial rates.",
      "Refreshed Python interactive cost estimation calculator script with batch prompt caching discount rates.",
      "Added comparison table for self-hosted open-weight vs commercial API break-even volume points."
    ],
    newSourcesAdded: 3,
    newEntitiesAdded: ["Prompt Caching Tier Discounts", "Q3 2026 Token Economics", "Batch API Economics"],
    visualsRefreshed: true,
    liveVerifiedBy: "Enterprise FinOps Director"
  }
];

export const livePostRefreshVerificationChecklist = [
  { id: "VER-01", category: "Full-Page Inspection", item: "Open live deployed page (`/articles/[slug]`) and verify complete HTML render without React hydration or layout crashes." },
  { id: "VER-02", category: "Section & Heading Audit", item: "Verify all H1, H2, and H3 headings render in correct logical hierarchy without missing or truncated text blocks." },
  { id: "VER-03", category: "Code Syntax Execution", item: "Verify every code block has correct syntax highlighting, clean copy button functionality, and zero deprecation errors." },
  { id: "VER-04", category: "Visual Asset Rendering", item: "Verify hero image, architecture diagrams, and comparison grids load cleanly at full resolution with valid `ALT` attributes." },
  { id: "VER-05", category: "Link Integrity Verification", item: "Check every outbound and internal link (`href`) to guarantee zero `404 Not Found` or `500 Server Error` destinations." },
  { id: "VER-06", category: "Table of Contents Navigation", item: "Click every link in the sticky Table of Contents (`#anchor`) to verify smooth scrolling to exact section offsets." },
  { id: "VER-07", category: "Metadata & SEO Tags", item: "Inspect DOM head to verify updated `<title>`, `<meta name='description'>`, and `<link rel='canonical'>` precision." },
  { id: "VER-08", category: "Structured Data Validation", item: "Validate `TechArticle` and `FAQPage` JSON-LD schema markup using Google Rich Results Test or DOM inspector." },
  { id: "VER-09", category: "Mobile & Tablet Responsive Layout", item: "Verify zero horizontal scrolling, clean code block wrapping, and accessible tap targets across 320px–768px viewports." },
  { id: "VER-10", category: "Desktop Ultra-Wide Rendering", item: "Verify balanced typography measure (65–85 characters per line) and clean sidebar alignment on 1440px+ displays." },
  { id: "VER-11", category: "Screenshot Evidentiary Capture", item: "Capture forensic visual evidence screenshots of updated hero, modified code sections, and refreshed comparison grids." },
  { id: "VER-12", category: "Remediation & Re-Test Loop", item: "If any visual or functional flaw is detected during verification, immediately fix code, re-deploy, and re-verify." },
  { id: "VER-13", category: "Update Record Logging", item: "Commit verified update log entry into `updateRecordAuditLogRegistry` with exact timestamp, scope, and author credentials." },
  { id: "VER-14", category: "Continuous Monitoring Hand-Off", item: "Transition article back to `HEALTHY` or `MONITOR` status and set next scheduled audit date based on volatility band." }
];

export interface InventoryArticleStatus {
  slug: string;
  title: string;
  pillar: string;
  volatilityBand: "HIGH" | "MEDIUM" | "LOW";
  healthStatus: "HEALTHY" | "MONITOR" | "REFRESH_REQUIRED" | "URGENT_UPDATE";
  lastReviewedDate: string;
  nextDueDate: string;
  detectedDecaySignals: string[];
  assignedAction: string;
}

export const contentDecayInventoryRegistry: InventoryArticleStatus[] = [
  {
    slug: "/articles/pagedattention-mechanics-vllM-memory-optimization",
    title: "PagedAttention Mechanics & vLLM Memory Optimization: The Definitive Architecture & Code Playbook",
    pillar: "AI Engineering & LLMs",
    volatilityBand: "HIGH",
    healthStatus: "HEALTHY",
    lastReviewedDate: "2026-07-17",
    nextDueDate: "2026-08-16",
    detectedDecaySignals: ["None (Recently underwent Major Refresh to vLLM v0.8.2)"],
    assignedAction: "Maintain monthly monitoring schedule; track upcoming vLLM v0.9 release notes."
  },
  {
    slug: "/articles/model-context-protocol-mcp-enterprise-architecture",
    title: "Model Context Protocol (MCP) Enterprise Architecture: Building Secure Tool-Calling Networks",
    pillar: "Enterprise AI",
    volatilityBand: "HIGH",
    healthStatus: "HEALTHY",
    lastReviewedDate: "2026-07-16",
    nextDueDate: "2026-08-15",
    detectedDecaySignals: ["None (Refreshed for Anthropic MCP Security Spec v1.2)"],
    assignedAction: "Monitor community server adoption and OAuth2 token middleware stability."
  },
  {
    slug: "/articles/ai-finops-llm-cloud-cost-architecture",
    title: "AI FinOps & LLM Cloud Cost Architecture: Calculating Unit Margins & Token Economics",
    pillar: "AI Business & Workforce",
    volatilityBand: "HIGH",
    healthStatus: "HEALTHY",
    lastReviewedDate: "2026-07-15",
    nextDueDate: "2026-08-14",
    detectedDecaySignals: ["None (Pricing matrices updated for Q3 2026 API cuts)"],
    assignedAction: "Track AWS Bedrock and Azure OpenAI reserved throughput discount adjustments."
  },
  {
    slug: "/articles/zero-trust-ai-security-framework",
    title: "Zero-Trust AI Security Framework: Hardening LLM Endpoints & Data Pipelines Against Prompt Injection",
    pillar: "Cybersecurity & AI",
    volatilityBand: "HIGH",
    healthStatus: "REFRESH_REQUIRED",
    lastReviewedDate: "2026-04-10",
    nextDueDate: "2026-05-10 (OVERDUE)",
    detectedDecaySignals: ["Technical Decay: OWASP Top 10 for LLM Applications updated v2", "Competitor Decay: Top competitor added automated red-teaming Python harness"],
    assignedAction: "Execute Standard Refresh: integrate OWASP LLM Top 10 v2 updates and inject runnable Pytest red-teaming code block."
  },
  {
    slug: "/articles/retrieval-augmented-generation-rag-production-guide",
    title: "Production-Grade RAG Architecture: Hybrid Dense-Sparse Retrieval & Re-Ranking at Enterprise Scale",
    pillar: "AI Engineering & LLMs",
    volatilityBand: "MEDIUM",
    healthStatus: "MONITOR",
    lastReviewedDate: "2026-05-20",
    nextDueDate: "2026-08-18",
    detectedDecaySignals: ["Statistical Decay: Cited vector database latency comparison table from Q4 2025 crosses 9-month age"],
    assignedAction: "Schedule Minor Statistical Refresh during next sprint to update Q2 2026 Qdrant/Milvus benchmark figures."
  },
  {
    slug: "/articles/ai-agent-orchestration-frameworks-comparison",
    title: "Multi-Agent Orchestration Frameworks Compared: LangGraph vs CrewAI vs AutoGen vs Semantic Kernel",
    pillar: "AI Tools",
    volatilityBand: "HIGH",
    healthStatus: "REFRESH_REQUIRED",
    lastReviewedDate: "2026-04-01",
    nextDueDate: "2026-05-01 (OVERDUE)",
    detectedDecaySignals: ["Technical Decay: LangGraph v0.2 introduced new StateGraph checkpointer syntax", "Search Intent Decay: Developers demanding async streaming code snippets"],
    assignedAction: "Execute Major Refresh: rewrite LangGraph section with v0.2 syntax and add async streaming comparison table."
  },
  {
    slug: "/articles/legacy-prompt-engineering-heuristics-2024",
    title: "Heuristic Prompt Engineering Patterns for Early GPT-3.5 and Claude 2 Models",
    pillar: "AI Engineering & LLMs",
    volatilityBand: "LOW",
    healthStatus: "URGENT_UPDATE",
    lastReviewedDate: "2026-01-15",
    nextDueDate: "2026-07-15",
    detectedDecaySignals: ["Factual Decay: Models completely superseded by GPT-4o and Claude 3.5 Sonnet", "Cannibalization: Overlaps with modern Structured Prompting guide"],
    assignedAction: "Execute Rebuild / Consolidation: extract historical context into our modern Prompting Guide and issue 301 permanent redirect."
  }
];

export const mandatoryContentMaintenanceGateChecklist = [
  { id: "CCMS-01", category: "Decay Categories Defined", item: "All 8 Content Decay categories (`FACTUAL`, `TECHNICAL`, `STATISTICAL`, `COMPETITIVE`, `SEARCH_INTENT`, `SEMANTIC`, `VISUAL`, `UX`) are strictly defined with detection signals and remediation workflows." },
  { id: "CCMS-02", category: "Review Frequency Established", item: "Article review schedules are governed strictly by topic volatility (`HIGH` = 30 Days, `MEDIUM` = 90 Days, `LOW` = 180 Days)." },
  { id: "CCMS-03", category: "Refresh Triggers Hard-Coded", item: "11 Operational Refresh Triggers (`T01` to `T11`) are codified to instantly flag articles upon major version changes, CVEs, or visibility drops." },
  { id: "CCMS-04", category: "Fact Maintenance Protocol", item: "Mandatory review of product names, company branding (`X`, `Gemini`), versions, API behavior, pricing, and benchmark claims." },
  { id: "CCMS-05", category: "Technical Deprecation Checks", item: "8-point engineering verification matrix guarantees active framework maintenance, valid syntax, and uncompromised security guidance." },
  { id: "CCMS-06", category: "Statistics Refresh System", item: "6-Step Statistical Auditing Protocol verifies original date stamps, queries current primary studies, and purges outdated figures." },
  { id: "CCMS-07", category: "Competitor Refresh Analysis", item: "Level 4 comparative audit ensures TechlumeAI maintains superior depth, code precision, and visual diagrams over SERP competitors." },
  { id: "CCMS-08", category: "Search Intent Revalidation", item: "Continuous monitoring of PAA blocks and SERP layouts to adapt heading structure when intent shifts from theory to implementation." },
  { id: "CCMS-09", category: "Semantic Coverage Refresh", item: "Systematic mapping of newly introduced NLP/ML entities into existing guides to preserve AI search retrieval dominance." },
  { id: "CCMS-10", category: "Visual & Diagram Refresh", item: "Mandatory replacement of blurry, outdated, or inaccurate diagrams with custom Figma-grade responsive SVG/WebP assets." },
  { id: "CCMS-11", category: "Internal Link Maintenance", item: "Periodic audit injecting new cluster spoke links, removing dead anchors, and compounding internal PageRank toward cornerstones." },
  { id: "CCMS-12", category: "Consolidation & Cannibalization Logic", item: "Strict workflow consolidating thin or overlapping pages into canonical cornerstone guides via permanent 301 redirects." },
  { id: "CCMS-13", category: "Content Pruning Guardrails", item: "Strategic evaluation matrix preventing knee-jerk deletions while pruning permanently obsolete, dangerous, or zero-equity assets." },
  { id: "CCMS-14", category: "Update Record Audit Logging", item: "Comprehensive 13-field logging of all major refreshes preserving historical continuity, date stamps, and verified author signoffs." },
  { id: "CCMS-15", category: "Live Post-Refresh Verification", item: "14-Point forensic verification checklist enforcing DOM, visual, responsive, schema, and functional checks on the live deployed URL." },
  { id: "CCMS-16", category: "Health Monitoring Dashboard", item: "Interactive command center (`/admin/content-maintenance`) providing real-time visibility into `HEALTHY`, `MONITOR`, `REFRESH_REQUIRED`, and `URGENT_UPDATE` inventory." }
];

/* ============================================================================
   CCMS-EQL v2.0 EXPANDED LIFECYCLE & CONTINUOUS MAINTENANCE SYSTEM
   ============================================================================ */

export interface ContentLifecycleStatusSpecification {
  statusId: "DRAFT" | "PUBLISHED" | "MONITORED" | "REVIEW_REQUIRED" | "REFRESH_IN_PROGRESS" | "RE_VERIFIED";
  label: string;
  badgeClass: string;
  definition: string;
  requiredActions: string[];
}

export const contentLifecycleStatusRegistry: ContentLifecycleStatusSpecification[] = [
  {
    statusId: "DRAFT",
    label: "DRAFT",
    badgeClass: "bg-slate-800 text-slate-300 border-slate-700",
    definition: "Research, structural outlining, and content production are currently in progress.",
    requiredActions: ["Execute 13-Phase VVP-EQS workflow", "Conduct primary source verification (`ArXiv, vendor docs`)", "Build Table of Contents & custom diagrams"]
  },
  {
    statusId: "PUBLISHED",
    label: "PUBLISHED",
    badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    definition: "The article is live, technically valid, and verified across all viewports (`VVP-EQS v1.0`).",
    requiredActions: ["Enroll in scheduled velocity monitoring queue", "Track baseline SERP ranking and AI retrieval citations"]
  },
  {
    statusId: "MONITORED",
    label: "MONITORED",
    badgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    definition: "The article is actively being evaluated for performance stability, traffic signals, and technical freshness.",
    requiredActions: ["Execute automated weekly link and schema checks", "Check for new minor framework releases or statistical updates"]
  },
  {
    statusId: "REVIEW_REQUIRED",
    label: "REVIEW REQUIRED",
    badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    definition: "Potential outdated technical claims, API deprecations, or ranking/CTR deterioration detected.",
    requiredActions: ["Trigger diagnostic decay audit (`Technical, Search, Competitive, Intent, Link, Visual, Entity`)", "Assign priority level (`P0 to P3`)"]
  },
  {
    statusId: "REFRESH_IN_PROGRESS",
    label: "REFRESH IN PROGRESS",
    badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    definition: "The article is undergoing active engineering rewrite, code update, or visual diagram refresh.",
    requiredActions: ["Execute Minor or Major Refresh sequence", "Verify updated runnable code blocks and custom SVG diagrams", "Re-audit metadata & JSON-LD"]
  },
  {
    statusId: "RE_VERIFIED",
    label: "RE-VERIFIED",
    badgeClass: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    definition: "The updated article has passed full technical, editorial, SEO, GEO, accessibility, and live DOM verification.",
    requiredActions: ["Log change record with verified timestamps (`Last Audited & Verified`)", "Re-index with search engines and resume monitoring"]
  }
];

export interface FreshnessVelocityClass {
  velocityId: "HIGH_VELOCITY" | "MEDIUM_VELOCITY" | "LOW_VELOCITY";
  name: string;
  reviewFrequency: string;
  badgeStyle: string;
  examples: string[];
  mandate: string;
}

export const freshnessVelocityRegistry: FreshnessVelocityClass[] = [
  {
    velocityId: "HIGH_VELOCITY",
    name: "High-Velocity Technical Content",
    reviewFrequency: "Monthly / 30-Day Review Queue",
    badgeStyle: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    examples: ["AI models (`GPT-4o, Claude 3.5, Gemini 1.5`)", "Developer tools & serving engines (`vLLM, Ollama, TGI`)", "APIs & SDK syntaxes (`OpenAI SDK, LangChain, MCP`)", "Vendor pricing tiers", "Security vulnerabilities & CVEs"],
    mandate: "High-risk, fast-moving topics. Must be audited monthly to prevent broken code blocks, outdated pricing, or retired model recommendations."
  },
  {
    velocityId: "MEDIUM_VELOCITY",
    name: "Medium-Velocity Architecture Content",
    reviewFrequency: "Quarterly / 90-Day Review Queue",
    badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    examples: ["Enterprise AI strategies & adoption frameworks", "Framework comparisons (`LangGraph vs CrewAI`)", "RAG & Agent architectural patterns", "Data engineering pipeline benchmarks"],
    mandate: "Core architectural blueprints. Requires quarterly review to ensure emerging open-source standards or vector database upgrades are integrated."
  },
  {
    velocityId: "LOW_VELOCITY",
    name: "Low-Velocity Foundational Content",
    reviewFrequency: "Semi-Annual / 180-Day Review Queue",
    badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    examples: ["Fundamental computer science & ML concepts (`Transformer attention mathematics`)", "Stable protocol standards (`HTTP/2, TCP/IP, REST theory`)", "Historical AI evolution timelines"],
    mandate: "Stable foundations. Do not update merely to change the visible date! Update only when historical context or academic consensus genuinely shifts."
  }
];

export interface DecayClassificationSpecification {
  categoryId: string;
  categoryName: string;
  definition: string;
  detectionSignals: string[];
  remediationAction: string;
}

export const decayClassificationRegistry: DecayClassificationSpecification[] = [
  {
    categoryId: "DECAY-01",
    categoryName: "TECHNICAL DECAY",
    definition: "The technical information, API signatures, CLI commands, or architecture patterns are outdated.",
    detectionSignals: ["Framework major release (`e.g., vLLM v0.6+ or Python 3.12`)", "Deprecated function warnings or breaking package imports", "CVE security advisories affecting recommended libraries"],
    remediationAction: "Update code blocks, CLI examples, and architectural explanations to match current verified production syntax (`requirements.txt`)."
  },
  {
    categoryId: "DECAY-02",
    categoryName: "SEARCH DECAY",
    definition: "Search visibility, organic rankings, impressions, or click-through rates (`CTR`) have declined.",
    detectionSignals: ["Organic ranking drop out of Top 3", "Impression volume decline > 25% over 30 days", "CTR drop below 3.5% due to stale title/meta description"],
    remediationAction: "Audit SERP competitors, optimize title tag/meta description, inject missing semantic answer units, and refresh JSON-LD schemas."
  },
  {
    categoryId: "DECAY-03",
    categoryName: "COMPETITIVE DECAY",
    definition: "Ranking competitors now provide superior depth, better code playbooks, or clearer custom diagrams.",
    detectionSignals: ["Competitor publishes comprehensive new guide with interactive comparison matrix", "SERP competitor introduces runnable Docker manifests"],
    remediationAction: "Execute Level-4 right-to-win upgrade: inject custom Figma SVG diagrams, comprehensive comparison tables, and edge-case profiling."
  },
  {
    categoryId: "DECAY-04",
    categoryName: "INTENT DECAY",
    definition: "The user's underlying search intent has shifted from conceptual theory to practical implementation.",
    detectionSignals: ["People Also Ask (`PAA`) blocks change from 'What is X' to 'How to deploy X with Docker'", "Bounce rate increase on theoretical sections"],
    remediationAction: "Restructure heading progression (`Answer-First hierarchy`), add step-by-step implementation playbooks, and update PAA FAQ sections."
  },
  {
    categoryId: "DECAY-05",
    categoryName: "LINK DECAY",
    definition: "Internal cluster links or outbound external references are broken, redirected, or point to retired docs.",
    detectionSignals: ["HTTP 404 or 500 status codes on outbound citations", "Orphaned internal pages or broken anchor jump links (`#section`)"],
    remediationAction: "Run full link forensics, replace dead external citations with active primary vendor docs/ArXiv links, and restore internal cluster connections."
  },
  {
    categoryId: "DECAY-06",
    categoryName: "VISUAL DECAY",
    definition: "Images, diagrams, screenshots, or visual design standards have become outdated, blurry, or misaligned.",
    detectionSignals: ["Screenshots showing old UI branding (`e.g., old OpenAI dashboard or dark grey charts`)", "Raster PNG diagrams showing pixelation on high-DPI displays"],
    remediationAction: "Replace outdated screenshots and re-engineer diagrams in crisp responsive Figma SVG/WebP with descriptive natural ALT text."
  },
  {
    categoryId: "DECAY-07",
    categoryName: "ENTITY DECAY",
    definition: "Companies, products, technologies, models, or organizations referenced have changed names, merged, or retired.",
    detectionSignals: ["Corporate rebrands (`e.g., Twitter to X, Google Bard to Gemini`)", "Model retirements (`e.g., OpenAI text-davinci-003 shut down`)"],
    remediationAction: "Audit canonical entity names across all sections, update historical references, and update Knowledge Graph entity tags."
  }
];

export const versionControlAndDeprecationProtocol = {
  trackedAttributes: [
    "Product Version (`e.g., vLLM v0.6.2`)",
    "Model Version (`e.g., Llama 3.1 70B Instruct`)",
    "API & SDK Version (`e.g., OpenAI Python SDK v1.50+`)",
    "Language & Runtime Version (`e.g., Python 3.11 / Node.js v20 LTS`)",
    "Hardware & CUDA Driver Compatibility (`e.g., CUDA 12.4 / NVIDIA A100/H100`)",
    "Deprecation Status (`Active vs Maintenance vs Deprecated vs Retired`)"
  ],
  deprecationRemediationSteps: [
    { step: "1. Verify Deprecation Status", action: "Confirm exact retirement timeline directly from official vendor release notes or GitHub advisories." },
    { step: "2. Identify Replacement Standard", action: "Identify the canonical successor (`e.g., replacing LangChain chains with LangGraph state graphs`)." },
    { step: "3. Update Technical Explanation", action: "Rewrite architectural theory to explain the mechanics of the successor system." },
    { step: "4. Explain Migration Implications", action: "Inject a dedicated 'Migration & Breaking Changes' callout box (`[!WARNING]`) guiding engineers on how to upgrade." },
    { step: "5. Update Code & CLI Playbooks", action: "Replace all deprecated code blocks and package dependencies with runnable, verified syntax." },
    { step: "6. Update Internal & Outbound Links", action: "Point external links to the new API reference and update internal cluster cross-links." },
    { step: "7. Re-Verify Live DOM Production", action: "Execute live page crawl (`15 stages`) and verify zero broken references or stale version tags remain." }
  ]
};

export const specializedRefreshEnginesRegistry = [
  {
    engineName: "Statistics Refresh Engine",
    checks: ["Is the statistical number still current (<12-24 months old)?", "Has the original source (`Gartner, Stanford HAI, GitHub`) released an updated study?", "Has the sample size or methodology shifted?"],
    remediation: "Replace outdated figures with verified Q3/Q4 2026 data. If historical comparison is vital, label explicitly: `'Historical Q4 2024 Baseline vs Current Q3 2026 Benchmark'`."
  },
  {
    engineName: "Pricing & Usage Tier Refresh Engine",
    checks: ["Verify current vendor pricing directly on official billing page (`zero assumptions`).", "Distinguish free/developer tiers, usage-based token rates (`$/1M tokens`), and custom enterprise licensing.", "Check whether temporary promotional discounts expired."],
    remediation: "Update comparison matrices with explicit currency/date callouts (`Pricing verified current as of Q3 2026`). If custom pricing is opaque, state explicitly: `'Enterprise pricing requires vendor quote'`."
  },
  {
    engineName: "Product Capability & Feature Refresh Engine",
    checks: ["Verify currently available features, context window limits (`e.g., 128k vs 2M tokens`), and rate boundaries.", "Check for newly launched integrations or retired legacy endpoints.", "Verify enterprise SOC2/HIPAA security certifications."],
    remediation: "Purge claims for features that vendors have removed. Add detailed breakdown of new capabilities (`e.g., native structured JSON outputs or multi-modal vision inputs`)."
  },
  {
    engineName: "Code Example & CLI Maintenance Engine",
    checks: ["Verify syntax compiles cleanly without deprecation warnings.", "Audit dependency versions in `requirements.txt` / `package.json`.", "Verify expected terminal output and stack trace handling."],
    remediation: "Rewrite code block using latest stable SDK. Test execution locally/on CUDA nodes and update inline explanatory comments."
  },
  {
    engineName: "Screenshot & Diagram Visual Maintenance Engine",
    checks: ["Check if product dashboard interfaces or navigation menus have changed.", "Check diagram aspect ratio (`CLS < 0.1`) and high-DPI rendering.", "Verify natural descriptive ALT text (`WHAT IT SHOWS + WHY RELEVANT`)."],
    remediation: "Capture fresh high-resolution screenshots (`Desktop 1440px / Mobile 375px`). Re-export custom Figma diagrams to WebP/SVG and verify live DOM rendering."
  }
];

export const consolidationAndCannibalizationEngine = {
  detectionSignals: [
    "Two or more articles targeting identical primary search queries (`e.g., /articles/vllm-serving-guide and /articles/how-to-use-vllm`).",
    "SERP ranking oscillations where Google flips which page ranks each week (`cannibalization drift`).",
    "Identical entity overlap and redundant theoretical sections splitting backlink equity."
  ],
  tenStepConsolidationWorkflow: [
    "1. Identify overlapping pages and cluster boundary conflicts.",
    "2. Compare organic traffic, impressions, and dwell time across all competing URLs.",
    "3. Compare keyword ranking profiles and PAA ownership.",
    "4. Compare external backlink equity and domain authority metrics.",
    "5. Evaluate technical depth, code quality, and visual diagrams.",
    "6. Determine the single strongest canonical URL (`Master Cornerstone Guide`).",
    "7. Extract any unique, valuable technical insights or code blocks from secondary pages into the master canonical.",
    "8. Implement clean 301 Permanent Redirects from secondary URLs to the canonical destination.",
    "9. Update all internal links across the site (`purge links pointing to redirected secondary URLs`).",
    "10. Verify live production crawl and confirm zero redirect chains (`301 -> 200 clean hop`)."
  ]
};

export const contentDependencyChainRegistry = [
  { tier: "TIER 1 — Canonical Cornerstone Guide", role: "Definitive 3,000+ word master architectural reference (`e.g., Enterprise LLM Serving Architecture`).", dependencyRule: "If a Tier 1 Cornerstone changes substantially, all child Supporting, Implementation, and Comparison guides MUST be audited within 14 days." },
  { tier: "TIER 2 — Supporting Technical Guide", role: "Deep-dive drill down into specific sub-components (`e.g., PagedAttention Memory Allocation Mechanics`).", dependencyRule: "Must maintain bi-directional cluster links (`up to Tier 1 Cornerstone, across to Tier 3 Implementation`)." },
  { tier: "TIER 3 — Code Implementation Playbook", role: "Runnable step-by-step tutorial (`e.g., Deploying vLLM on Kubernetes with Helm & CUDA 12`).", dependencyRule: "Must match exact software versions and dependency manifests referenced in Tier 1 and Tier 2." },
  { tier: "TIER 4 — Side-by-Side Comparison Matrix", role: "Objective evaluation (`e.g., vLLM vs Hugging Face TGI vs TensorRT-LLM Benchmark`).", dependencyRule: "Must reflect current empirical figures from Tier 1 and link out to canonical definitions." }
];

export const continuousPrioritizationFormula = {
  formula: "PRIORITY SCORE = IMPACT + URGENCY + TRAFFIC + STRATEGIC VALUE + TECHNICAL RISK - EFFORT",
  p0UrgentMandate: "High-Risk Technical & Security Risk Override: Any article containing dangerous security advice, broken code blocks, or retired API syntaxes MUST receive P0 Immediate Priority regardless of current traffic volume or effort!"
};

export const contentRetirementDecisionMatrix = {
  evaluationChecks: [
    "1. Organic Traffic Audit (`Has traffic dropped below 10 visits/month for > 180 days?`)",
    "2. External Backlink Audit (`Does the URL hold authoritative inbound links that must be preserved?`)",
    "3. Internal Link Audit (`Are active pillar guides linking to this page?`)",
    "4. Search Visibility & Keyword Ranking Audit",
    "5. Historical & Academic Value Assessment (`Does it serve as important historical documentation?`)",
    "6. Redirectability Assessment (`Is there a relevant modern parent guide where 301 equity can be passed?`)",
    "7. Safest Risk Action Determination"
  ],
  actionOptions: [
    { action: "KEEP & MONITOR", condition: "Article remains technically valid, historically valuable, or maintains steady long-tail traffic." },
    { action: "MINOR / MAJOR REFRESH", condition: "Article covers a permanent strategic topic but suffers from technical or statistical decay." },
    { action: "CONSOLIDATE & 301 REDIRECT", condition: "Article overlaps with a stronger cornerstone guide (`cannibalization`). Extract info and redirect." },
    { action: "ARCHIVE (`noindex, follow`)", condition: "Article preserves historical version documentation (`e.g., GPT-2/3 heuristic patterns`) but should not compete in active SERPs." },
    { action: "REMOVE & 410 GONE", condition: "Article covers discontinued, zero-value third-party tools with zero backlinks and zero traffic. Purge clean." }
  ]
};

export const mandatoryCcmsEqlSignoffGate = [
  { id: "CCMS-EQL-01", category: "Lifecycle Status Validated", item: "Verify article status correctly classified (`DRAFT, PUBLISHED, MONITORED, REVIEW_REQUIRED, REFRESH_IN_PROGRESS, RE_VERIFIED`)." },
  { id: "CCMS-EQL-02", category: "Freshness Velocity Assigned", item: "Verify article assigned correct review cadence (`HIGH = 30d, MEDIUM = 90d, LOW = 180d`)." },
  { id: "CCMS-EQL-03", category: "Decay Forensics Diagnosed", item: "Verify all 7 decay categories (`TECHNICAL, SEARCH, COMPETITIVE, INTENT, LINK, VISUAL, ENTITY`) audited and remediated." },
  { id: "CCMS-EQL-04", category: "Version Control & Deprecations Checked", item: "Verify explicit software version tags (`vLLM v0.6+, Python 3.11, CUDA 12`) and 7-step deprecation protocol executed." },
  { id: "CCMS-EQL-05", category: "Statistics Audited & Verified", item: "Verify every statistic verified against primary Q3/Q4 2026 data (`or explicitly labeled as historical baseline`)." },
  { id: "CCMS-EQL-06", category: "Pricing & Billing Tiers Verified", item: "Verify vendor pricing checked directly on official billing page with explicit currency/date callouts." },
  { id: "CCMS-EQL-07", category: "Product Capabilities Re-Verified", item: "Verify all claimed features, token limits, and API support are active (`zero claims for retired capabilities`)." },
  { id: "CCMS-EQL-08", category: "Runnable Code & Dependencies Tested", item: "Verify all TypeScript/Python code blocks syntax-checked, verified with current SDKs, and dependencies audited." },
  { id: "CCMS-EQL-09", category: "Screenshots & Diagrams Re-Verified", item: "Verify all UI screenshots reflect current branding and all custom diagrams load in crisp responsive SVG/WebP." },
  { id: "CCMS-EQL-10", category: "Descriptive ALT Text Injected", item: "Verify every image maintains `WHAT IT SHOWS + WHY RELEVANT` ALT text (`zero keyword stuffing`)." },
  { id: "CCMS-EQL-11", category: "Internal Link Graph Repaired", item: "Verify all broken links fixed, orphaned pages connected, and incoming/outgoing cluster links compounding PageRank." },
  { id: "CCMS-EQL-12", category: "Cannibalization Audit & Consolidation Complete", item: "Verify zero competing URLs split intent. Overlapping pages consolidated with clean 301 permanent redirects." },
  { id: "CCMS-EQL-13", category: "Knowledge Graph Entities Updated", item: "Verify all re-branded companies (`X, Gemini`) or retired tools updated across entity tags and dependent articles." },
  { id: "CCMS-EQL-14", category: "Dependency Chain Ripple Checked", item: "Verify if a Tier 1 Cornerstone changed, all dependent Supporting and Implementation guides audited." },
  { id: "CCMS-EQL-15", category: "SEO, GEO & E-E-A-T Schemas Validated", item: "Verify `TechArticle`, `FAQPage`, and `BreadcrumbList` JSON-LD schemas validated and exact audit timestamps logged." },
  { id: "CCMS-EQL-16", category: "Live Page Crawl Sequence Executed (`15 Stages`)", item: "Verify actual live published URL inspected from top navigation to footer (`never rely on local preview alone`)." },
  { id: "CCMS-EQL-17", category: "8-Viewport Screenshot Matrix Captured", item: "Verify forensic screenshots captured across Desktop and Mobile viewports proving zero layout or clipping defects." },
  { id: "CCMS-EQL-18", category: "Update History Record Logged & Approved", item: "Verify detailed changelog (`What changed, why, sources checked, versions updated`) recorded for editorial accountability." }
];

