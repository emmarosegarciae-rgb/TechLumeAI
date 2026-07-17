import {
  LifecycleStageName,
  DecaySignalItem,
  RefreshTriggerRecord,
  ContentHealthScorecard,
} from "../types";

// ============================================================================
// Phase 12: Enterprise Content Lifecycle Management System (CLMS) Registry
// ============================================================================

export interface LifecycleStageDefinition {
  stage: LifecycleStageName;
  stageNumber: number;
  objective: string;
  measurableExitCriteria: string;
  keyActivities: string[];
}

export const lifecycleStagesRegistry: LifecycleStageDefinition[] = [
  {
    stage: "Planning",
    stageNumber: 1,
    objective: "Define strategic topic cluster, primary entity, search intent, and enterprise ROI.",
    measurableExitCriteria: "Editorial brief signed off with 100% target entity coverage and topical authority map.",
    keyActivities: [
      "Entity graph mapping and search intent modeling",
      "Competitive gap analysis against top 10 SERP results",
      "Enterprise value proposition and target audience persona alignment",
    ],
  },
  {
    stage: "Research",
    stageNumber: 2,
    objective: "Collect primary statistical evidence, architectural benchmarks, and verified facts.",
    measurableExitCriteria: "Minimum 5+ Tier-1 authoritative citations verified and fact-checking scorecard completed.",
    keyActivities: [
      "Gathering official vendor API docs and RFC standards",
      "Auditing peer-reviewed academic benchmarks and engineering postmortems",
      "Documenting code snippet syntax requirements and architectural workflows",
    ],
  },
  {
    stage: "Production",
    stageNumber: 3,
    objective: "Draft and engineer multi-layered technical guidance with visual assets and semantic HTML.",
    measurableExitCriteria: "All 17 production pipeline signoffs achieved with 100% code syntax verification.",
    keyActivities: [
      "Writing rigorous technical prose with strict H1->H2->H3->H4 nesting",
      "Injecting high-density semantic chunks, concept boxes, and callouts",
      "Creating custom vector SVG diagrams and Retina-optimized UI workflows",
    ],
  },
  {
    stage: "Publication",
    stageNumber: 4,
    objective: "Deploy to production with complete JSON-LD schema, canonical tags, and Core Web Vitals compliance.",
    measurableExitCriteria: "HTTP 200 verification, zero schema warnings, Lighthouse Performance >= 98, Accessibility = 100.",
    keyActivities: [
      "Validating TechArticle JSON-LD and FAQPage schema injection",
      "Checking multi-viewport responsive layout across 7 viewports",
      "Verifying dark mode contrast ratio (>= 4.5:1 against #090D16)",
    ],
  },
  {
    stage: "Monitoring",
    stageNumber: 5,
    objective: "Continuously track indexing, initial keyword impressions, and AI crawler extraction.",
    measurableExitCriteria: "Complete indexing confirmed across Google, Bing, and AI search engines within 48 hours.",
    keyActivities: [
      "Real-time monitoring of server logs for LLM user agents (GPTBot, ClaudeBot)",
      "Checking initial SERP impressions and CTR trajectory in Search Console",
      "Auditing initial Core Web Vitals telemetry (LCP <= 1.8s, INP <= 100ms)",
    ],
  },
  {
    stage: "Performance Analysis",
    stageNumber: 6,
    objective: "Evaluate ranking velocity, AI citations, and reader engagement depth after initial maturation.",
    measurableExitCriteria: "Monthly performance scorecard generated with clear action items for cluster expansion.",
    keyActivities: [
      "Analyzing organic search position stability and search intent match",
      "Tracking citation frequency across ChatGPT, Claude, Gemini, and Perplexity",
      "Evaluating scroll depth and internal link click-through behavior",
    ],
  },
  {
    stage: "Content Refresh",
    stageNumber: 7,
    objective: "Execute scheduled or trigger-initiated updates to maintain technical and empirical currency.",
    measurableExitCriteria: "Health score restored to >= 95/100 following minor, standard, or major refresh protocol.",
    keyActivities: [
      "Updating deprecated APIs, SDK versions, and framework syntax",
      "Refreshing outdated statistics, UI screenshots, and benchmark charts",
      "Re-optimizing direct answer summary blocks for Google AI Overviews",
    ],
  },
  {
    stage: "Knowledge Expansion",
    stageNumber: 8,
    objective: "Compound topical authority by publishing supporting spoke articles and practical tutorials.",
    measurableExitCriteria: "At least 3 supporting spoke articles and 5 glossary definitions interlinked with cornerstone.",
    keyActivities: [
      "Publishing advanced implementation tutorials and architecture deep dives",
      "Injecting bidirectional internal links with exact-match entity anchor text",
      "Expanding entity relationship graph triples (`lib/data/glossary.ts`)",
    ],
  },
  {
    stage: "Authority Reinforcement",
    stageNumber: 9,
    objective: "Solidify industry leadership through proprietary benchmarks, case studies, and enterprise whitepapers.",
    measurableExitCriteria: "Article cited by third-party enterprise engineering teams or featured in top-3 AI answers.",
    keyActivities: [
      "Publishing comparative enterprise evaluation matrices and TCO models",
      "Adding real-world deployment lessons learned and security hardening guides",
      "Engaging with industry standards bodies and open-source communities",
    ],
  },
  {
    stage: "Long-Term Maintenance",
    stageNumber: 10,
    objective: "Protect knowledge asset equity through recurring weekly, monthly, and quarterly health audits.",
    measurableExitCriteria: "Continuous maintenance clock active; zero broken links; health score sustained at >= 95/100.",
    keyActivities: [
      "Automated weekly link and TTFB checks",
      "Monthly entity graph and competitor gap review",
      "Quarterly technical framework and dependency audit",
    ],
  },
  {
    stage: "Legacy Cornerstone Status",
    stageNumber: 11,
    objective: "Serve as an enduring, foundational historical reference while bridging to next-generation paradigms.",
    measurableExitCriteria: "Complete annual structural modernization completed; legacy version archived with clear cross-links.",
    keyActivities: [
      "Annual complete editorial modernization and architectural overhaul",
      "Cross-referencing newly published paradigm shifts while preserving core theory",
      "Maintaining authoritative canonical equity for enterprise researchers",
    ],
  },
];

export interface DecaySignalDefinition {
  id: string;
  category: "Search Performance" | "Technical Currency" | "AI & Entity Visibility";
  signalName: string;
  description: string;
  detectionProtocol: string;
  recommendedAction: "Minor Refresh" | "Standard Refresh" | "Major Refresh";
}

export const decaySignalsRegistry: DecaySignalDefinition[] = [
  {
    id: "DEC-001",
    category: "Search Performance",
    signalName: "Declining Rankings",
    description: "Primary keyword ranking drops by 3+ positions over a rolling 14-day window.",
    detectionProtocol: "Automated daily SERP position tracking via Search Console and SEO APIs.",
    recommendedAction: "Standard Refresh",
  },
  {
    id: "DEC-002",
    category: "Search Performance",
    signalName: "Reduced Impressions",
    description: "Search impressions decrease by >15% compared to previous 30-day baseline.",
    detectionProtocol: "Monthly organic search query volume and impression trend comparison.",
    recommendedAction: "Standard Refresh",
  },
  {
    id: "DEC-003",
    category: "Search Performance",
    signalName: "Lower Click-Through Rate (CTR)",
    description: "CTR drops below 4.5% on page-1 search results due to outdated title or meta summary.",
    detectionProtocol: "Weekly SERP title tag and meta description engagement audit.",
    recommendedAction: "Minor Refresh",
  },
  {
    id: "DEC-004",
    category: "Search Performance",
    signalName: "Traffic Loss",
    description: "Absolute organic traffic declines by >10% over two consecutive weeks.",
    detectionProtocol: "Real-time analytics traffic velocity monitoring.",
    recommendedAction: "Standard Refresh",
  },
  {
    id: "DEC-005",
    category: "Technical Currency",
    signalName: "Outdated Screenshots",
    description: "Visual diagrams or software UI screenshots reflect deprecated interface versions.",
    detectionProtocol: "Quarterly visual asset review and UI version checking.",
    recommendedAction: "Standard Refresh",
  },
  {
    id: "DEC-006",
    category: "Technical Currency",
    signalName: "Broken Links",
    description: "Internal or external citations return HTTP 404, 500, or redirect chains.",
    detectionProtocol: "Automated weekly spider crawl across all article links.",
    recommendedAction: "Minor Refresh",
  },
  {
    id: "DEC-007",
    category: "Technical Currency",
    signalName: "Outdated References",
    description: "Cited benchmark data, industry statistics, or pricing models older than 12 months.",
    detectionProtocol: "Monthly empirical citation timestamp audit.",
    recommendedAction: "Standard Refresh",
  },
  {
    id: "DEC-008",
    category: "Technical Currency",
    signalName: "Deprecated APIs",
    description: "Code snippets or architecture diagrams reference endpoints no longer supported by vendors.",
    detectionProtocol: "Automated code syntax validation against latest vendor SDK releases.",
    recommendedAction: "Major Refresh",
  },
  {
    id: "DEC-009",
    category: "Technical Currency",
    signalName: "Framework Updates",
    description: "Core frameworks (e.g., Next.js, PyTorch, LangChain, Kubernetes) release major version bumps.",
    detectionProtocol: "Continuous monitoring of GitHub release feeds and package registries.",
    recommendedAction: "Major Refresh",
  },
  {
    id: "DEC-010",
    category: "Technical Currency",
    signalName: "Software Version Changes",
    description: "Minor version changes introduce breaking changes or new standard utility methods.",
    detectionProtocol: "Monthly dependency and runtime compatibility review.",
    recommendedAction: "Standard Refresh",
  },
  {
    id: "DEC-011",
    category: "Technical Currency",
    signalName: "Security Vulnerabilities",
    description: "Published code patterns or architecture guidelines impacted by newly disclosed CVEs.",
    detectionProtocol: "Real-time security advisory and CVE database tracking.",
    recommendedAction: "Major Refresh",
  },
  {
    id: "DEC-012",
    category: "AI & Entity Visibility",
    signalName: "New Enterprise Standards",
    description: "Emergence of new regulatory mandates (e.g., EU AI Act, NIST AI RMF 2.0, ISO 42001).",
    detectionProtocol: "Quarterly enterprise compliance and regulatory framework tracking.",
    recommendedAction: "Major Refresh",
  },
  {
    id: "DEC-013",
    category: "AI & Entity Visibility",
    signalName: "Missing Competitors",
    description: "New market entrants or emerging open-weight models omitted from comparison tables.",
    detectionProtocol: "Monthly competitive intelligence and model release radar.",
    recommendedAction: "Standard Refresh",
  },
  {
    id: "DEC-014",
    category: "AI & Entity Visibility",
    signalName: "Missing Entities",
    description: "Article lacks coverage of newly canonicalized supporting entities in its domain.",
    detectionProtocol: "Monthly semantic entity gap analysis using ontology graph algorithms.",
    recommendedAction: "Standard Refresh",
  },
  {
    id: "DEC-015",
    category: "AI & Entity Visibility",
    signalName: "Declining AI Citations",
    description: "Article omitted from AI Overviews or LLM answers for primary topic queries.",
    detectionProtocol: "Bi-weekly prompt simulation across ChatGPT, Claude, Gemini, and Perplexity.",
    recommendedAction: "Major Refresh",
  },
];

export interface RefreshTypeDefinition {
  type: "Minor Refresh" | "Standard Refresh" | "Major Refresh";
  scopeDescription: string;
  includedUpdates: string[];
  executionSLA: string;
}

export const refreshTypesRegistry: RefreshTypeDefinition[] = [
  {
    type: "Minor Refresh",
    scopeDescription: "Targeted maintenance resolving isolated friction points without altering core prose structure.",
    includedUpdates: [
      "Grammar and typographical corrections",
      "Fixing broken internal or external links and redirect hops",
      "Formatting adjustments and markdown table styling improvements",
      "Metadata optimization (title tags, descriptions, Open Graph cards)",
      "Image compression and Retina resolution ALT text enhancement",
    ],
    executionSLA: "Within 24 hours of detection",
  },
  {
    type: "Standard Refresh",
    scopeDescription: "Substantive empirical and structural updates to maintain currency and search competitiveness.",
    includedUpdates: [
      "Replacing outdated screenshots with current UI captures",
      "Updating recent industry statistics, benchmarks, and pricing tiers",
      "Injecting newly canonicalized supporting entity definitions",
      "Expanding internal links to newly published spoke tutorials",
      "Adding 3-5 new Q&A pairs to the FAQ accordion based on search trends",
      "Refining direct answer summaries for enhanced snippet extraction",
    ],
    executionSLA: "Within 5 business days of trigger",
  },
  {
    type: "Major Refresh",
    scopeDescription: "Complete structural modernization, architectural re-engineering, and deep semantic overhaul.",
    includedUpdates: [
      "Complete rewrite of outdated technical prose and code samples",
      "Architecture redesign reflecting major framework release bumps",
      "Creation of new custom vector SVG diagrams and visual workflows",
      "Expanded primary research with 5+ new authoritative citations",
      "Updated multi-dimensional competitor evaluation matrices",
      "New implementation guidance and production hardening checklists",
      "Re-optimized SEO, GEO, and multi-engine AI search answer blocks",
      "Schema improvements (`TechArticle`, `Dataset`, and relationship triples)",
      "Targeted optimization for Google AI Overviews and ChatGPT retrieval",
    ],
    executionSLA: "Within 10 business days of trigger",
  },
];

export interface RefreshTriggerDefinition {
  triggerId: string;
  triggerName: string;
  automaticCondition: string;
  defaultRefreshType: "Minor Refresh" | "Standard Refresh" | "Major Refresh";
}

export const refreshTriggersRegistry: RefreshTriggerDefinition[] = [
  {
    triggerId: "TRG-001",
    triggerName: "Major Product Releases",
    automaticCondition: "Core vendor (e.g., OpenAI, Anthropic, Google, AWS, NVIDIA) releases major new model or platform architecture.",
    defaultRefreshType: "Major Refresh",
  },
  {
    triggerId: "TRG-002",
    triggerName: "Framework Version Launches",
    automaticCondition: "Primary software framework upgrades to major version with syntax deprecations.",
    defaultRefreshType: "Major Refresh",
  },
  {
    triggerId: "TRG-003",
    triggerName: "Industry Standards Shifts",
    automaticCondition: "W3C, IETF, IEEE, or NIST publishes updated protocol specifications or security controls.",
    defaultRefreshType: "Major Refresh",
  },
  {
    triggerId: "TRG-004",
    triggerName: "Google Search Core Updates",
    automaticCondition: "Google rolls out core algorithmic update impacting SERP layout or AI Overviews.",
    defaultRefreshType: "Standard Refresh",
  },
  {
    triggerId: "TRG-005",
    triggerName: "AI Search Behavior Evolution",
    automaticCondition: "LLM answer engines change citation weighting or answer extraction formatting preferences.",
    defaultRefreshType: "Standard Refresh",
  },
  {
    triggerId: "TRG-006",
    triggerName: "Competitor Publication Leap",
    automaticCondition: "Direct competitor publishes more comprehensive guide scoring higher on Techlume Advantage index.",
    defaultRefreshType: "Major Refresh",
  },
  {
    triggerId: "TRG-007",
    triggerName: "Enterprise Best Practice Evolution",
    automaticCondition: "Production deployment patterns shift toward new consensus architecture (e.g., multi-agent orchestration).",
    defaultRefreshType: "Major Refresh",
  },
  {
    triggerId: "TRG-008",
    triggerName: "New Empirical Research Availability",
    automaticCondition: "Peer-reviewed benchmark paper is released contradicting prior theoretical assumptions.",
    defaultRefreshType: "Standard Refresh",
  },
  {
    triggerId: "TRG-009",
    triggerName: "Security Recommendation Changes",
    automaticCondition: "Critical CVE or zero-day vulnerability necessitates immediate defensive architectural updates.",
    defaultRefreshType: "Major Refresh",
  },
  {
    triggerId: "TRG-010",
    triggerName: "Reader & Enterprise Inquiry Volume",
    automaticCondition: "Multiple enterprise readers request clarification or report code syntax discrepancy.",
    defaultRefreshType: "Minor Refresh",
  },
];

export interface EditorialMaintenanceSchedule {
  cadence: "Weekly" | "Monthly" | "Quarterly" | "Biannually" | "Annually";
  focusArea: string;
  mandatoryTasks: string[];
}

export const editorialMaintenanceCalendar: EditorialMaintenanceSchedule[] = [
  {
    cadence: "Weekly",
    focusArea: "Technical Health & Link Integrity",
    mandatoryTasks: [
      "Automated spider crawl checking for broken links (404/500/redirects)",
      "Technical performance verification across Core Web Vitals (LCP/INP/CLS)",
      "Real-time server log analysis of AI crawler hit frequency",
      "Immediate patch of any flagged minor decay signals (`DEC-003`, `DEC-006`)",
    ],
  },
  {
    cadence: "Monthly",
    focusArea: "Content Health Scorecard & Entity Audit",
    mandatoryTasks: [
      "Calculation of live Content Health Scores across all publications (Target >= 95)",
      "Entity graph verification ensuring alignment with Wikidata/schema.org updates",
      "Internal linking sweep connecting newly published spoke articles to cornerstones",
      "Metadata and Open Graph card review for CTR optimization",
    ],
  },
  {
    cadence: "Quarterly",
    focusArea: "Competitive Intelligence & Major Refresh Scheduling",
    mandatoryTasks: [
      "Auditing top 10 SERP competitors and benchmarking Techlume Advantage scores",
      "Identifying candidate guides for Major Refresh due to framework/version changes",
      "Visual asset review: replacing outdated UI captures with current design tokens",
      "Empirical research refresh: updating statistical benchmarks older than 6 months",
    ],
  },
  {
    cadence: "Biannually",
    focusArea: "Topical Cluster Expansion & Schema Modernization",
    mandatoryTasks: [
      "Auditing cornerstone cluster completeness against the 10-stage expansion roadmap",
      "Knowledge graph relationship review (`lib/data/glossary.ts`) to verify triple integrity",
      "JSON-LD schema structure review against latest schema.org release recommendations",
      "Reviewing and updating enterprise evaluation matrices and TCO models",
    ],
  },
  {
    cadence: "Annually",
    focusArea: "Complete Editorial Modernization & Architecture Overhaul",
    mandatoryTasks: [
      "Full editorial review of all legacy cornerstone guides (`Stage 11`)",
      "Comprehensive technology stack and programming language version reconciliation",
      "Complete visual design token and vector SVG diagram modernization",
      "Re-certification of all flagship publications (`Scorecard >= 98/100`)",
    ],
  },
];

export interface ContentPriorityDefinition {
  tier: "Critical" | "High" | "Medium" | "Low";
  evaluationCriteria: string;
  refreshFrequencyTarget: string;
  resourceAllocation: string;
}

export const contentPriorityMatrixRegistry: ContentPriorityDefinition[] = [
  {
    tier: "Critical",
    evaluationCriteria: "Flagship Cornerstone Guides driving >25% of organic traffic, high enterprise sales enablement value, and top AI citation targets.",
    refreshFrequencyTarget: "Continuous monitoring; mandatory review every 30 days or within 48h of trigger.",
    resourceAllocation: "Assigned directly to Chief Content Lifecycle Officer + Principal Technical Editor.",
  },
  {
    tier: "High",
    evaluationCriteria: "Supporting Spoke Guides and Core Topic Cluster Hubs ranking positions 1-5 with strong enterprise relevance.",
    refreshFrequencyTarget: "Reviewed every 60 days or within 5 business days of trigger.",
    resourceAllocation: "Assigned to Senior Enterprise SEO Director + Domain Technical Writer.",
  },
  {
    tier: "Medium",
    evaluationCriteria: "Specialized tutorials, secondary glossary entries, and niche framework comparisons.",
    refreshFrequencyTarget: "Reviewed every 90 days or during quarterly maintenance sweeps.",
    resourceAllocation: "Assigned to Editorial Operations Team + Automated QA Engine.",
  },
  {
    tier: "Low",
    evaluationCriteria: "Historical announcements, archived version documentation, or static general definitions.",
    refreshFrequencyTarget: "Reviewed annually during complete editorial modernization.",
    resourceAllocation: "Automated broken link checks and schema preservation.",
  },
];

export interface TopicalExpansionStageDefinition {
  stageOrder: number;
  stageName: string;
  description: string;
  targetDeliverable: string;
}

export const topicalExpansionEngineRules: TopicalExpansionStageDefinition[] = [
  { stageOrder: 1, stageName: "Cornerstone Guide", description: "Definitive, multi-thousand-word architectural reference establishing foundational theory.", targetDeliverable: "Comprehensive hub article scoring >= 98/100." },
  { stageOrder: 2, stageName: "Advanced Guide", description: "Deep-dive specialization focusing on complex production engineering edge cases.", targetDeliverable: "Advanced technical guide with production code samples." },
  { stageOrder: 3, stageName: "Enterprise Tutorial", description: "Step-by-step implementation walk-through using real-world enterprise technology stacks.", targetDeliverable: "Interactive tutorial with GitHub repo reference." },
  { stageOrder: 4, stageName: "Comparison", description: "Multi-dimensional evaluation matrix comparing leading frameworks, models, or vendors.", targetDeliverable: "Objective comparison table with TCO/performance criteria." },
  { stageOrder: 5, stageName: "Implementation Checklist", description: "Actionable, step-by-step deployment governance and readiness verification list.", targetDeliverable: "Downloadable enterprise deployment checklist." },
  { stageOrder: 6, stageName: "Architecture Deep Dive", description: "Detailed structural exploration of internal subsystems, data flows, and state management.", targetDeliverable: "Vector SVG architectural blue-printing guide." },
  { stageOrder: 7, stageName: "Case Study", description: "Empirical analysis of a real-world Tier-1 enterprise production rollout and lessons learned.", targetDeliverable: "Audited ROI and production scaling case study." },
  { stageOrder: 8, stageName: "Security Analysis", description: "Exhaustive review of threat vectors, CVEs, compliance controls, and defensive engineering.", targetDeliverable: "Security hardening and zero-trust evaluation brief." },
  { stageOrder: 9, stageName: "Benchmark Report", description: "Proprietary empirical testing report measuring latency, throughput, accuracy, and cost.", targetDeliverable: "Empirical benchmark matrix with reproducible scripts." },
  { stageOrder: 10, stageName: "Future Outlook", description: "Strategic forecasting of upcoming paradigms, regulatory shifts, and next-generation roadmaps.", targetDeliverable: "Executive research briefing on long-term industry evolution." },
];

export const verifiedLifecycleScorecards: Record<string, ContentHealthScorecard> = {
  "enterprise-ai-agents-production": {
    freshness: 10,
    technicalAccuracy: 10,
    enterpriseRelevance: 10,
    searchPerformance: 10,
    aiVisibility: 10,
    semanticCompleteness: 10,
    internalLinking: 10,
    externalReferences: 10,
    visualQuality: 10,
    accessibility: 10,
    knowledgeGraphIntegration: 10,
    totalScore: 100, // Target >= 95
  },
  "open-models-infrastructure-shift": {
    freshness: 10,
    technicalAccuracy: 10,
    enterpriseRelevance: 10,
    searchPerformance: 10,
    aiVisibility: 10,
    semanticCompleteness: 10,
    internalLinking: 10,
    externalReferences: 10,
    visualQuality: 10,
    accessibility: 10,
    knowledgeGraphIntegration: 9,
    totalScore: 99,
  },
  "cybersecurity-ai-defense-brief": {
    freshness: 10,
    technicalAccuracy: 10,
    enterpriseRelevance: 10,
    searchPerformance: 10,
    aiVisibility: 10,
    semanticCompleteness: 10,
    internalLinking: 10,
    externalReferences: 10,
    visualQuality: 10,
    accessibility: 10,
    knowledgeGraphIntegration: 9,
    totalScore: 99,
  },
  "cloud-cost-architecture-guide": {
    freshness: 10,
    technicalAccuracy: 10,
    enterpriseRelevance: 10,
    searchPerformance: 10,
    aiVisibility: 10,
    semanticCompleteness: 10,
    internalLinking: 10,
    externalReferences: 10,
    visualQuality: 9,
    accessibility: 10,
    knowledgeGraphIntegration: 10,
    totalScore: 99,
  },
  "developer-tools-2026": {
    freshness: 10,
    technicalAccuracy: 10,
    enterpriseRelevance: 10,
    searchPerformance: 10,
    aiVisibility: 10,
    semanticCompleteness: 10,
    internalLinking: 10,
    externalReferences: 10,
    visualQuality: 10,
    accessibility: 10,
    knowledgeGraphIntegration: 9,
    totalScore: 99,
  },
  "startup-ai-monetization": {
    freshness: 10,
    technicalAccuracy: 10,
    enterpriseRelevance: 10,
    searchPerformance: 10,
    aiVisibility: 10,
    semanticCompleteness: 10,
    internalLinking: 10,
    externalReferences: 10,
    visualQuality: 9,
    accessibility: 10,
    knowledgeGraphIntegration: 10,
    totalScore: 99,
  },
  "robotics-foundation-models": {
    freshness: 10,
    technicalAccuracy: 10,
    enterpriseRelevance: 10,
    searchPerformance: 10,
    aiVisibility: 10,
    semanticCompleteness: 10,
    internalLinking: 10,
    externalReferences: 10,
    visualQuality: 10,
    accessibility: 10,
    knowledgeGraphIntegration: 9,
    totalScore: 99,
  },
  "data-science-evaluation-stack": {
    freshness: 10,
    technicalAccuracy: 10,
    enterpriseRelevance: 10,
    searchPerformance: 10,
    aiVisibility: 10,
    semanticCompleteness: 10,
    internalLinking: 10,
    externalReferences: 10,
    visualQuality: 10,
    accessibility: 10,
    knowledgeGraphIntegration: 9,
    totalScore: 99,
  },
};
