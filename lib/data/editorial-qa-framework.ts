import type {
  QAFrameworkPhaseName,
  QAQualityScorecardRating
} from "@/lib/types";

export type QAFrameworkPhaseDefinition = {
  phaseNumber: number;
  phaseName: QAFrameworkPhaseName;
  phaseGoal: string;
  mandatoryCheckpoints: {
    category: string;
    checkpointName: string;
    verificationRequirement: string;
    verificationMethod: "Automated Check" | "Manual Audit" | "Hybrid Engine";
  }[];
  gateExitCriteria: string[];
};

export const qaFrameworkPhasesRegistry: QAFrameworkPhaseDefinition[] = [
  {
    phaseNumber: 1,
    phaseName: "Phase 1: Pre-Publication Review",
    phaseGoal: "Ensure every editorial assignment and outline aligns precisely with strategic intent, entity graphs, and enterprise needs before writing proceeds.",
    mandatoryCheckpoints: [
      { category: "Editorial Strategy", checkpointName: "Editorial Brief Validation", verificationRequirement: "Confirm purpose, target audience, and enterprise relevance clearly defined.", verificationMethod: "Manual Audit" },
      { category: "Outline Governance", checkpointName: "Outline Hierarchy & Section Approval", verificationRequirement: "Verify canonical 14-section progression and H2/H3 depth before drafting.", verificationMethod: "Hybrid Engine" },
      { category: "Research Intelligence", checkpointName: "Primary Research Completion", verificationRequirement: "Ensure 5+ authoritative technical citations and benchmark data gathered.", verificationMethod: "Manual Audit" },
      { category: "Fact Verification", checkpointName: "Technical Fact Pre-Validation", verificationRequirement: "Pre-verify architectural claims against vendor specs or RFCs.", verificationMethod: "Hybrid Engine" },
      { category: "Visual Architecture", checkpointName: "Visual Planning Signoff", verificationRequirement: "Confirm minimum 4 custom Figma diagram briefs documented and planned.", verificationMethod: "Manual Audit" },
      { category: "Topical Authority", checkpointName: "Internal Linking Plan", verificationRequirement: "Map parent cluster hub link, 3+ sibling tutorials, and 5+ glossary terms.", verificationMethod: "Automated Check" },
      { category: "Knowledge Graph", checkpointName: "Semantic Entity Schema Mapping", verificationRequirement: "Define primary entity ID and 10-15 supporting entities with Wikidata links.", verificationMethod: "Automated Check" },
      { category: "Search Optimization", checkpointName: "Primary & Secondary Keyword Targeting", verificationRequirement: "Validate search volume, semantic expansion terms, and cluster keyword ownership.", verificationMethod: "Automated Check" },
      { category: "Reader Experience", checkpointName: "Search & Reader Intent Alignment", verificationRequirement: "Align exact answer structure with C-Suite or Staff Engineer informational needs.", verificationMethod: "Hybrid Engine" },
      { category: "Commercial Authority", checkpointName: "Enterprise Value Demonstration", verificationRequirement: "Demonstrate concrete ROI economics, SLA metrics, or architectural trade-offs.", verificationMethod: "Manual Audit" }
    ],
    gateExitCriteria: [
      "No writing proceeds without 100% successful validation of the Editorial Brief and Outline.",
      "Primary research sources verified by Chief Research & Publication Strategist.",
      "Visual asset brief signed off by Editorial Design Systems Architect."
    ]
  },
  {
    phaseNumber: 2,
    phaseName: "Phase 2: Technical Validation",
    phaseGoal: "Examine code, claims, formatting, and prose integrity to ensure zero stylistic, grammatical, or technical errors before deployment.",
    mandatoryCheckpoints: [
      { category: "Prose Excellence", checkpointName: "Grammar, Spelling & Tone Review", verificationRequirement: "Zero grammatical anomalies, active voice adherence, and authoritative prose.", verificationMethod: "Automated Check" },
      { category: "Structural Clarity", checkpointName: "Formatting & Heading Hierarchy", verificationRequirement: "Strict H1 -> H2 -> H3 -> H4 nesting with zero skipped heading levels.", verificationMethod: "Automated Check" },
      { category: "Readability", checkpointName: "Readability & Logical Flow Indexing", verificationRequirement: "Flesch-Kincaid appropriate for Staff Engineers with clear transition logic.", verificationMethod: "Hybrid Engine" },
      { category: "Engineering Rigor", checkpointName: "Technical Accuracy & Code Execution", verificationRequirement: "Code examples tested syntax-error-free with valid configuration flags.", verificationMethod: "Hybrid Engine" },
      { category: "Domain Consistency", checkpointName: "Terminology & Entity Consistency", verificationRequirement: "Exact matching of product names, protocol acronyms, and canonical entity IDs.", verificationMethod: "Automated Check" },
      { category: "Evidence Rigor", checkpointName: "Citation & Statistics Quality Check", verificationRequirement: "All statistical claims and benchmarks backed by direct authoritative links.", verificationMethod: "Hybrid Engine" },
      { category: "Accessibility Pre-Check", checkpointName: "WCAG 2.1 AA & ARIA Compliance", verificationRequirement: "All structural containers and callouts verified for screen reader semantics.", verificationMethod: "Automated Check" }
    ],
    gateExitCriteria: [
      "No unresolved technical anomaly or unverified claim may remain.",
      "100% code snippet compilation and execution check passed.",
      "Editorial Copy Chief signoff complete."
    ]
  },
  {
    phaseNumber: 3,
    phaseName: "Phase 3: Publication Verification",
    phaseGoal: "Immediately upon deployment, verify runtime stability, SEO meta tags, structured data, viewports, and Core Web Vitals.",
    mandatoryCheckpoints: [
      { category: "Runtime Stability", checkpointName: "HTTP 200 Page Load & Canonical URL", verificationRequirement: "Page loads cleanly under 200ms TTFB with exact trailing/non-trailing canonical tag.", verificationMethod: "Automated Check" },
      { category: "Meta Optimization", checkpointName: "Meta Title, Description & Open Graph", verificationRequirement: "Verify pixel width limits, compelling dek summaries, and high-res OG/Twitter cards.", verificationMethod: "Automated Check" },
      { category: "Structured Data", checkpointName: "JSON-LD TechArticle Schema Validation", verificationRequirement: "Zero warnings on Google Rich Results Test across TechArticle, Breadcrumb, and FAQ.", verificationMethod: "Automated Check" },
      { category: "Graph Integrity", checkpointName: "Breadcrumbs & Internal Link Graph Integrity", verificationRequirement: "All internal links return 200 OK and properly reflect parent topic cluster hierarchy.", verificationMethod: "Automated Check" },
      { category: "Media Performance", checkpointName: "Images, Videos, Tables & Code Blocks QA", verificationRequirement: "Check Retina 2x rendering, high-contrast code dark mode, and responsive horizontal table scrolling.", verificationMethod: "Hybrid Engine" },
      { category: "Multi-Viewport QA", checkpointName: "Responsive Layout across 7 Viewports", verificationRequirement: "Flawless rendering across Small Phones, Large Phones, Tablets, Laptops, Desktop, Ultra-Wide, and Foldables.", verificationMethod: "Manual Audit" },
      { category: "Theme Support", checkpointName: "Dark Mode & High-Contrast Visual Check", verificationRequirement: "Verify text contrast ratio >= 4.5:1 against #090D16 dark background across all components.", verificationMethod: "Automated Check" }
    ],
    gateExitCriteria: [
      "Everything must function correctly with zero broken links or schema warnings.",
      "Lighthouse Performance score >= 98 and Accessibility score = 100 verified.",
      "Chief Editorial Production Officer signoff completed."
    ]
  },
  {
    phaseNumber: 4,
    phaseName: "Phase 4: Continuous Improvement",
    phaseGoal: "Monitor published guides continuously to track AI citations, ranking shifts, link growth, and ensure lasting industry authority.",
    mandatoryCheckpoints: [
      { category: "Visibility Metrics", checkpointName: "Traffic, Rankings & Search Visibility", verificationRequirement: "Track organic CTR, keyword position stability, and featured snippet retention.", verificationMethod: "Automated Check" },
      { category: "AI Citation Engine", checkpointName: "AI Overviews & Conversational LLM Citations", verificationRequirement: "Monitor inclusion in Google AI Overviews, ChatGPT search, and Perplexity responses.", verificationMethod: "Hybrid Engine" },
      { category: "Web Vitals", checkpointName: "Core Web Vitals (LCP, INP, CLS) Monitoring", verificationRequirement: "Maintain LCP <= 1.8s, INP <= 100ms, and CLS <= 0.01 under live real-user monitoring.", verificationMethod: "Automated Check" },
      { category: "Engagement Quality", checkpointName: "Bounce Rate, Scroll Depth & CTR Analysis", verificationRequirement: "Ensure average scroll depth >= 75% and high interaction with direct answer blocks.", verificationMethod: "Automated Check" },
      { category: "Graph Expansion", checkpointName: "Internal Link Growth & Backlink Acquisition", verificationRequirement: "Continuously link newly published spoke tutorials back to cornerstone parent guides.", verificationMethod: "Automated Check" },
      { category: "Freshness Lifecycle", checkpointName: "Technology Updates & Content Freshness Audits", verificationRequirement: "Perform scheduled quarterly reviews to update framework versions, SDK deprecations, and pricing tiers.", verificationMethod: "Manual Audit" }
    ],
    gateExitCriteria: [
      "Every metric must contribute to scheduled quarterly and annual improvement loops.",
      "Content freshness clock verified active with next review deadline enforced.",
      "Continuous optimization loop never terminates."
    ]
  }
];

export type FactSourceTypeDefinition = {
  sourceType: string;
  description: string;
  verificationProtocol: string;
  trustScoreBonus: number;
};

export const factSourceTypesRegistry: FactSourceTypeDefinition[] = [
  { sourceType: "Official documentation", description: "Direct vendor technical documentation, API references, and SDK specifications.", verificationProtocol: "Direct URL check to active versioned docs.", trustScoreBonus: 10 },
  { sourceType: "Vendor documentation", description: "Architectural whitepapers, benchmark reports, and reference guides published by core technology developers.", verificationProtocol: "Verify publication date and official domain authority.", trustScoreBonus: 9 },
  { sourceType: "Standards bodies", description: "Specifications from W3C, IEEE, ACM, IETF, ISO, or NIST.", verificationProtocol: "Check formal RFC number or standard release code.", trustScoreBonus: 10 },
  { sourceType: "Academic research", description: "Peer-reviewed papers published on arXiv, Nature, ACM Digital Library, or IEEE Xplore.", verificationProtocol: "Validate DOI or arXiv identifier and citation velocity.", trustScoreBonus: 10 },
  { sourceType: "Peer-reviewed publications", description: "Formal journal articles detailing machine learning architectures and algorithmic proofs.", verificationProtocol: "Check journal impact factor and peer review verification.", trustScoreBonus: 10 },
  { sourceType: "Engineering blogs", description: "Deep-dive technical postmortems from Tier-1 engineering teams (Google DeepMind, OpenAI, Anthropic, Meta AI, Stripe).", verificationProtocol: "Confirm authorship by lead research scientists or staff engineers.", trustScoreBonus: 9 },
  { sourceType: "Enterprise whitepapers", description: "Audited TCO studies, security compliance architectures, and real-world implementation case studies.", verificationProtocol: "Verify methodology transparency and empirical sample size.", trustScoreBonus: 8 },
  { sourceType: "Conference presentations", description: "Keynotes and proceedings from NeurIPS, ICML, ICLR, KubeCon, or AWS re:Invent.", verificationProtocol: "Verify conference year and official proceedings record.", trustScoreBonus: 8 },
  { sourceType: "GitHub repositories", description: "Open-source reference implementations, release notes, and active issue discussions.", verificationProtocol: "Check star count, commit recency, and verified organization badges.", trustScoreBonus: 8 },
  { sourceType: "RFCs", description: "Internet Engineering Task Force (IETF) Request for Comments and protocol definitions.", verificationProtocol: "Verify RFC number, status (Proposed Standard, Best Current Practice), and errata.", trustScoreBonus: 10 }
];

export const semanticQualityChecklist = [
  { requirement: "Primary Entity Identification", rule: "Article must declare exactly 1 canonical primary entity mapped to Wikidata or schema.org." },
  { requirement: "Supporting Entities Mapping", rule: "Article must integrate 10-15 domain-specific supporting entities to establish semantic breadth." },
  { requirement: "Knowledge Relationships", rule: "Clearly define hierarchical parent/child and lateral comparison relationships across our knowledge graph." },
  { requirement: "Entity Consistency", rule: "Maintain uniform terminology for all entities across headings, body prose, code comments, and metadata." },
  { requirement: "Topic & Intent Coverage", rule: "Exhaustively answer both primary architectural intent and secondary implementation/troubleshooting queries." },
  { requirement: "Topical Authority Contribution", rule: "Guide must act as the definitive cornerstone hub, linking to 3+ practical spoke tutorials." },
  { requirement: "Knowledge Graph Contribution", rule: "Inject structured JSON-LD defining exact relationship triples (e.g., LangGraph -> implements -> Multi-Agent Workflow)." }
];

export const editorialConsistencyChecklist = [
  { requirement: "Writing Style & Brand Voice", rule: "Authoritative, highly technical, concise, active voice, and tailored for Staff Engineers and C-Suite leaders." },
  { requirement: "Heading Structure Nesting", rule: "Strict logical progression (H1 -> H2 -> H3 -> H4). Never skip a heading level for styling purposes." },
  { requirement: "Terminology Consistency", rule: "Use official casing and spelling (e.g., 'Large Language Models', 'Next.js 16', 'Model Context Protocol')." },
  { requirement: "Callout Component Uniformity", rule: "Use standardized UI containers (`Warning Callout`, `Stat Box`, `Concept Box`) with consistent icon tokens." },
  { requirement: "Code Formatting Standard", rule: "All code snippets must specify language syntax (`typescript`, `python`, `bash`) with clean indentation and inline comments." },
  { requirement: "Table & Comparison Grid Specs", rule: "Tables must include explicit headers, high-contrast rows, horizontal scroll containers, and clear winner checks." },
  { requirement: "Caption & Image Treatment", rule: "Every figure requires a descriptive caption (`Figure X: ...`) explaining the architectural takeaway." },
  { requirement: "Internal Linking Discipline", rule: "Link anchor text must be semantically descriptive (never 'click here' or 'read more')." }
];

export const visualAndMobileQAChecklist = [
  { requirement: "Retina Resolution & Compression", rule: "Exclusively 2x/3x Retina resolution exports with WebP/SVG optimization for instant loading." },
  { requirement: "SVG Preferred Specification", rule: "Vector SVG format mandatory for all architectural diagrams, data flows, and comparison matrices." },
  { requirement: "High-Contrast Dark Mode Support", rule: "All visual elements must maintain >= 4.5:1 text contrast against our #090D16 dark background." },
  { requirement: "WCAG 2.1 AA Accessibility", rule: "100% compliance across color contrast, focus rings, keyboard navigability, and semantic tags." },
  { requirement: "Descriptive ALT Text Standards", rule: "Every image must have a 15-30 word descriptive ALT attribute explaining the exact technical concepts pictured." },
  { requirement: "Responsive Viewport QA across 7 Screens", rule: "Flawless layout verification on Small Phones (320px), Large Phones (430px), Tablets (768px), Laptops (1024px), Desktop (1440px), Ultra-Wide (1920px+), and Foldables." },
  { requirement: "Interactive Focus & Screen Reader Support", rule: "Verify that all accordion toggles, code copy buttons, and table headers announce cleanly to VoiceOver/NVDA." }
];

export const aiSearchValidationChecklist = [
  { system: "Google AI Overviews", readinessRule: "Section 1 must provide a self-contained 45-60 word definitive summary that cleanly extracts into Google SGE snippet cards." },
  { system: "ChatGPT & OpenAI Retrieval", readinessRule: "Structured markdown tables and bulleted decision trees enable direct citation when ChatGPT executes web searches." },
  { system: "Claude & Anthropic Retrieval", readinessRule: "Exhaustive technical reasoning and clear causal explanations (`Because X, Y occurs`) optimize for Claude's deep analytical synthesis." },
  { system: "Gemini & Google DeepMind", readinessRule: "Complete JSON-LD TechArticle schema and high-density entity mentions ensure instant indexing in Gemini search pipelines." },
  { system: "Perplexity AI Citations", readinessRule: "Explicit statistical callouts backed by official vendor URLs increase citation frequency in Perplexity answer engines." },
  { system: "Microsoft Copilot", readinessRule: "Structured FAQ accordions with distinct Q&A pairs directly match conversational queries posed in Bing/Copilot enterprise sessions." },
  { system: "Apple Intelligence & Siri", readinessRule: "Clean semantic HTML5 tags (<header>, <article>, <section>, <aside>) facilitate on-device summarization by Apple intelligence agents." },
  { system: "Future LLM Search Systems", readinessRule: "Machine-readable markdown, structured JSON-LD, and unambiguous technical definitions future-proof content across next-gen retrieval models." }
];

export const qaQualityScorecardsRegistry: Record<string, QAQualityScorecardRating> = {
  "enterprise-ai-agents-production": {
    technicalAccuracy: 10,
    editorialQuality: 10,
    enterpriseValue: 10,
    visualQuality: 10,
    accessibility: 10,
    semanticSeo: 10,
    geoOptimization: 10,
    knowledgeGraphIntegration: 10,
    aiReadiness: 10,
    userExperience: 10,
    publicationStability: 10,
    totalScore: 100 // Flagship Benchmark
  },
  "open-models-infrastructure-shift": {
    technicalAccuracy: 10,
    editorialQuality: 10,
    enterpriseValue: 10,
    visualQuality: 10,
    accessibility: 10,
    semanticSeo: 10,
    geoOptimization: 10,
    knowledgeGraphIntegration: 10,
    aiReadiness: 10,
    userExperience: 9,
    publicationStability: 10,
    totalScore: 99
  },
  "cybersecurity-ai-defense-brief": {
    technicalAccuracy: 10,
    editorialQuality: 10,
    enterpriseValue: 10,
    visualQuality: 10,
    accessibility: 10,
    semanticSeo: 10,
    geoOptimization: 10,
    knowledgeGraphIntegration: 10,
    aiReadiness: 10,
    userExperience: 10,
    publicationStability: 9,
    totalScore: 99
  },
  "cloud-cost-architecture-guide": {
    technicalAccuracy: 10,
    editorialQuality: 10,
    enterpriseValue: 10,
    visualQuality: 9,
    accessibility: 10,
    semanticSeo: 10,
    geoOptimization: 10,
    knowledgeGraphIntegration: 10,
    aiReadiness: 10,
    userExperience: 10,
    publicationStability: 10,
    totalScore: 99
  },
  "developer-tools-2026": {
    technicalAccuracy: 10,
    editorialQuality: 10,
    enterpriseValue: 10,
    visualQuality: 10,
    accessibility: 10,
    semanticSeo: 10,
    geoOptimization: 10,
    knowledgeGraphIntegration: 9,
    aiReadiness: 10,
    userExperience: 10,
    publicationStability: 10,
    totalScore: 99
  },
  "startup-ai-monetization": {
    technicalAccuracy: 10,
    editorialQuality: 10,
    enterpriseValue: 10,
    visualQuality: 9,
    accessibility: 10,
    semanticSeo: 10,
    geoOptimization: 10,
    knowledgeGraphIntegration: 10,
    aiReadiness: 10,
    userExperience: 10,
    publicationStability: 10,
    totalScore: 99
  },
  "robotics-foundation-models": {
    technicalAccuracy: 10,
    editorialQuality: 10,
    enterpriseValue: 10,
    visualQuality: 10,
    accessibility: 10,
    semanticSeo: 10,
    geoOptimization: 9,
    knowledgeGraphIntegration: 10,
    aiReadiness: 10,
    userExperience: 10,
    publicationStability: 10,
    totalScore: 99
  },
  "data-science-evaluation-stack": {
    technicalAccuracy: 10,
    editorialQuality: 10,
    enterpriseValue: 10,
    visualQuality: 10,
    accessibility: 10,
    semanticSeo: 10,
    geoOptimization: 10,
    knowledgeGraphIntegration: 10,
    aiReadiness: 9,
    userExperience: 10,
    publicationStability: 10,
    totalScore: 99
  }
};
