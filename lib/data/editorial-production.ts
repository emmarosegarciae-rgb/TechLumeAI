import { ProductionStageName, ProductionScorecardRating } from "@/lib/types";

export interface ProductionStageDefinition {
  stageNumber: number;
  stageName: ProductionStageName;
  description: string;
  exitCriteria: string[];
}

export const productionStagesRegistry: ProductionStageDefinition[] = [
  {
    stageNumber: 1,
    stageName: "1. Editorial Assignment",
    description: "Assigning dedicated topic ownership to senior technical writing architects and domain experts.",
    exitCriteria: ["Senior domain specialist assigned", "Target audience and technical complexity tier defined", "Publication timeline locked"]
  },
  {
    stageNumber: 2,
    stageName: "2. Topic Validation",
    description: "Verifying topical demand, cluster fit, and institutional authority requirements before research initiation.",
    exitCriteria: ["Topic mapped to canonical 8-Pillar matrix", "Search volume & AI answer gap confirmed", "No duplicate coverage across existing spokes"]
  },
  {
    stageNumber: 3,
    stageName: "3. Research Intelligence",
    description: "Exhaustive evidence gathering across official vendor docs, academic preprints, and enterprise benchmarks.",
    exitCriteria: [">= 8 verified authoritative references documented", "Zero unverified assumptions or speculative claims", "Official documentation & IEEE/ACM papers cited"]
  },
  {
    stageNumber: 4,
    stageName: "4. Competitor Analysis",
    description: "Analyzing top 10 SERP results and AI engine summaries to identify structural and technical content gaps.",
    exitCriteria: ["SERP top-10 structural audit completed", "Missing technical depth identified across existing articles", "Unique enterprise angle defined"]
  },
  {
    stageNumber: 5,
    stageName: "5. Search Intent Mapping",
    description: "Categorizing primary and secondary user search intent (Informational, Transactional, Technical Implementation).",
    exitCriteria: ["Primary user query intent mapped", "Predictive follow-up queries identified", "Answer-First summary block planned"]
  },
  {
    stageNumber: 6,
    stageName: "6. Semantic Entity Mapping",
    description: "Extracting and linking primary core entities, secondary attributes, and relationships into our knowledge graph.",
    exitCriteria: ["Primary entity specified", ">= 4 secondary semantic attributes defined", "Entity overview summary box planned"]
  },
  {
    stageNumber: 7,
    stageName: "7. Article Outline",
    description: "Architecting the structured learning progression, visual asset placements, and internal link topology.",
    exitCriteria: ["14-Section structure planned", "Internal link targets identified across spoke assets", "Formal editorial signoff achieved"]
  },
  {
    stageNumber: 8,
    stageName: "8. Table of Contents",
    description: "Engineering an anchor-navigable, scannable Table of Contents that acts as a standalone learning roadmap.",
    exitCriteria: ["Logical H2/H3 hierarchy established", "Semantic keywords integrated into heading anchors", "Zero orphan sections"]
  },
  {
    stageNumber: 9,
    stageName: "9. Visual Asset Planning",
    description: "Designing a comprehensive Visual Production Plan across diagrams, comparison matrices, and feature flows.",
    exitCriteria: [">= 4 custom Figma-grade visual assets planned", "Explicit placement sections assigned", "Zero generic stock photos or AI clutter"]
  },
  {
    stageNumber: 10,
    stageName: "10. Technical Writing",
    description: "Drafting rigorous, crystal-clear prose balancing enterprise realism, architectural depth, and natural storytelling.",
    exitCriteria: ["5,000–8,000 word comprehensive depth achieved", "All 14 canonical outline sections completed", "Reusable editorial blocks integrated"]
  },
  {
    stageNumber: 11,
    stageName: "11. SEO + GEO Optimization",
    description: "Optimizing for both traditional crawler ranking and Generative Engine extraction (AI Overviews, Zero-Click).",
    exitCriteria: ["JSON-LD TechArticle & FAQPage schema injected", "Semantic chunk headers structured (< 300 words)", "Direct answer blocks prioritized"]
  },
  {
    stageNumber: 12,
    stageName: "12. Editorial Review",
    description: "Multi-disciplinary signoff across technical accuracy, grammar, entity authority, and internal link structure.",
    exitCriteria: ["Copy chief review passed", "Internal link anchors verified (`file://` and internal paths)", "Zero grammatical anomalies"]
  },
  {
    stageNumber: 13,
    stageName: "13. Technical Fact Verification",
    description: "Independent engineering fact-checking against production codebases and real-world system behavior.",
    exitCriteria: ["All code blocks syntax-verified and executable", "All numerical metrics and benchmarks cross-checked", "Fact-checked timestamp logged"]
  },
  {
    stageNumber: 14,
    stageName: "14. Visual QA",
    description: "Validating visual asset fidelity, high-DPI rendering, SVG clarity, and design aesthetic consistency.",
    exitCriteria: ["All diagrams match Figma product design tokens", "High contrast and sharp typography verified", "Caption and source credits verified"]
  },
  {
    stageNumber: 15,
    stageName: "15. Accessibility Review",
    description: "Ensuring WCAG 2.1 AA compliance across contrast ratios, descriptive alt text, and semantic HTML5.",
    exitCriteria: ["Exhaustive descriptive alt text on all figures", "Color contrast >= 4.5:1 on text elements", "Screen-reader friendly table markup"]
  },
  {
    stageNumber: 16,
    stageName: "16. Publication",
    description: "Deploying via static site generation with instant search engine ping and sitemap index update.",
    exitCriteria: ["Build verification passed (`npm run build`)", "Sitemap registered and pinged", "Editorial scorecard locked >= 95/100"]
  },
  {
    stageNumber: 17,
    stageName: "17. Performance Monitoring",
    description: "Continuous tracking of SERP position, AI citation frequency, user dwell time, and cadence refresh triggers.",
    exitCriteria: ["Real-time telemetry active", "AI retrieval & citation score tracking enabled", "Cadence refresh slot scheduled"]
  }
];

export interface CanonicalStructureSection {
  sectionNumber: number;
  sectionName: string;
  purpose: string;
  aiExtractionBenefit: string;
}

export const canonicalStructureTemplate: CanonicalStructureSection[] = [
  { sectionNumber: 1, sectionName: "Executive Summary", purpose: "Concise 150-word synthesis of the entire guide and primary takeaways.", aiExtractionBenefit: "Ideal zero-click summary snippet and LLM direct answer source." },
  { sectionNumber: 2, sectionName: "Introduction", purpose: "Setting the institutional context, target audience, and prerequisite knowledge.", aiExtractionBenefit: "Establishes domain relevance and semantic categorization." },
  { sectionNumber: 3, sectionName: "Problem Statement", purpose: "Articulating the core enterprise bottleneck or architectural challenge addressed.", aiExtractionBenefit: "Provides problem-solution matching for conversational troubleshooting queries." },
  { sectionNumber: 4, sectionName: "Core Concepts", purpose: "Defining foundational entities, terminology, and theoretical primitives.", aiExtractionBenefit: "Feeds AI entity graphs and definition lookup requests." },
  { sectionNumber: 5, sectionName: "Architecture", purpose: "Deep-dive system topology, component interactions, and data flow specifications.", aiExtractionBenefit: "Enables multi-step technical reasoning and architectural synthesis." },
  { sectionNumber: 6, sectionName: "Implementation", purpose: "Step-by-step production code, configuration blocks, and deployment steps.", aiExtractionBenefit: "Powers code generation assistants and terminal command proposals." },
  { sectionNumber: 7, sectionName: "Best Practices", purpose: "Battle-tested engineering standards and optimization heuristics.", aiExtractionBenefit: "High-value advice extraction for enterprise copilot recommendations." },
  { sectionNumber: 8, sectionName: "Common Mistakes", purpose: "Cataloging frequent anti-patterns, security risks, and operational failures.", aiExtractionBenefit: "Provides diagnostic reasoning and warning citations for AI review tools." },
  { sectionNumber: 9, sectionName: "Comparison", purpose: "Objective side-by-side evaluation matrix against competing alternatives.", aiExtractionBenefit: "Directly supplies structured data for comparative `X vs Y` queries." },
  { sectionNumber: 10, sectionName: "Enterprise Applications", purpose: "Real-world scalability, compliance, governance, and SLA considerations.", aiExtractionBenefit: "Satisfies high-intent B2B evaluation and procurement queries." },
  { sectionNumber: 11, sectionName: "Future Outlook", purpose: "Predictive analysis of emerging paradigms and long-term roadmap evolution.", aiExtractionBenefit: "Captures forward-looking trend queries and emerging keyword vectors." },
  { sectionNumber: 12, sectionName: "FAQ", purpose: "Direct Q&A answers targeting exact high-volume long-tail search queries.", aiExtractionBenefit: "Direct mapping to FAQPage schema and voice search answers." },
  { sectionNumber: 13, sectionName: "Conclusion", purpose: "Actionable wrap-up and next steps for engineering teams.", aiExtractionBenefit: "Provides clean conversation closure and follow-up prompts." },
  { sectionNumber: 14, sectionName: "Related Resources", purpose: "Internal spoke links, academic papers, and official documentation citations.", aiExtractionBenefit: "Passes PageRank and strengthens institutional topical clustering." }
];

export interface VisualAssetTypeDefinition {
  assetType: string;
  purpose: string;
  designSpecification: string;
}

export const visualAssetTypesRegistry: VisualAssetTypeDefinition[] = [
  { assetType: "Hero Illustration", purpose: "Top-of-page visual anchor summarizing the conceptual paradigm.", designSpecification: "Figma-grade minimal vector graphic with dark-mode glassmorphism and crisp gradient accents." },
  { assetType: "Architecture Diagram", purpose: "Visualizing component layers, data pipelines, and network boundaries.", designSpecification: "Strict isometric or flat block diagram with distinct color coding and numbered data flows." },
  { assetType: "Workflow Diagram", purpose: "Step-by-step operational sequence from initiation to completion.", designSpecification: "Left-to-right or top-to-bottom flowchart with clean connecting arrows and state badges." },
  { assetType: "Comparison Matrix", purpose: "Side-by-side feature or performance evaluation across multiple options.", designSpecification: "High-contrast structured grid with clear checkmarks, cross-boxes, and highlighted winners." },
  { assetType: "Decision Tree", purpose: "Guided binary or branching logic helping engineers select approaches.", designSpecification: "Crisp branching node graph with explicit condition labels and terminal recommendations." },
  { assetType: "Timeline", purpose: "Chronological evolution of technology standards or deployment phases.", designSpecification: "Horizontal or vertical milestone track with callout bubbles and timestamp markers." },
  { assetType: "Checklist", purpose: "Scannable pre-flight or audit verification items.", designSpecification: "Clean card layout with interactive-style checkboxes and status indicators." },
  { assetType: "Process Flow", purpose: "Detailed lifecycle visualization for CI/CD, evaluation, or security verification.", designSpecification: "Multi-stage swimlane diagram separating actor responsibilities and automated triggers." },
  { assetType: "Infographic", purpose: "Synthesizing complex statistics, market benchmarks, and survey outcomes.", designSpecification: "Data-dense visual poster utilizing clean bar charts, donut graphs, and large metric typography." },
  { assetType: "Code Screenshots", purpose: "Showcasing syntax-highlighted code alongside terminal execution output.", designSpecification: "Mac-style window container with Inter/Fira Code typography, line numbers, and subtle drop shadow." },
  { assetType: "Charts", purpose: "Quantitative benchmark comparisons across latency, throughput, or cost.", designSpecification: "SVG vector line or bar charts with labeled axes, grid lines, and exact numerical tooltips." },
  { assetType: "Feature Tables", purpose: "Granular breakdown of API endpoints, parameters, or schema definitions.", designSpecification: "Striped table format with monospaced parameter names and badge pill descriptions." },
  { assetType: "Callout Boxes", purpose: "Emphasizing critical warnings, pro tips, or enterprise security notes.", designSpecification: "Bordered card container with distinctive left accent border and iconographic header." },
  { assetType: "Summary Cards", purpose: "Modular takeaway blocks for easy social sharing and quick review.", designSpecification: "Compact rounded card with bold takeaway title, brief summary bullet, and footer metadata." }
];

export const visualDesignGuidelines = {
  figmaAesthetic: "Every visual asset must appear as if engineered by a Senior Figma Product Designer at stripe.com, linear.app, or vercel.com. Prioritize clean spacing, high-contrast typography, balanced dark/light palettes, and sharp vector geometry.",
  forbiddenElements: [
    "Generic AI-generated fantasy or surrealist imagery",
    "Robotic humanoid handshakes or glowing brains",
    "Low-resolution JPEG artifacts or pixelated stock photos",
    "Visual clutter, redundant drop-shadows, or unreadable small fonts",
    "Inconsistent color schemes that clash with TechlumeAI brand tokens"
  ],
  brandTokens: {
    primaryAccent: "#8B5CF6 (Purple 500)",
    secondaryAccent: "#6366F1 (Indigo 500)",
    successMetric: "#10B981 (Emerald 500)",
    warningMetric: "#F59E0B (Amber 500)",
    errorAlert: "#F43F5E (Rose 500)",
    darkBackground: "#090D16 (Deep Slate Dark)",
    lightBackground: "#FFFFFF (Pure White)"
  }
};

export interface EditorialComponentDefinition {
  componentName: string;
  purpose: string;
  codePattern: string;
  aiBenefit: string;
}

export const editorialComponentLibrary: EditorialComponentDefinition[] = [
  { componentName: "Quick Definition", purpose: "Instant semantic definition of a technical term or acronym.", codePattern: `<div className="quick-def-box"><h4>Term</h4><p>Definition...</p></div>`, aiBenefit: "Directly captured by entity extractors for dictionary definition snippets." },
  { componentName: "Key Takeaways", purpose: "Bulleted executive highlights at top of sections.", codePattern: `<div className="takeaways-card"><ul><li>Highlight 1</li></ul></div>`, aiBenefit: "High-priority extraction for bulleted AI answer generation." },
  { componentName: "Pro Tip", purpose: "Expert engineering heuristic or performance hack.", codePattern: `<div className="pro-tip-callout"><span>Pro Tip</span><p>Tip details...</p></div>`, aiBenefit: "Enriches copilot suggestions with practical senior-level advice." },
  { componentName: "Warning", purpose: "Critical security vulnerability or breaking change alert.", codePattern: `<div className="warning-alert"><span>Warning</span><p>Risk details...</p></div>`, aiBenefit: "Ensures AI assistants warn users against hazardous implementations." },
  { componentName: "Enterprise Insight", purpose: "High-level guidance on governance, compliance, and multi-tenant scaling.", codePattern: `<div className="enterprise-box"><span>Enterprise Insight</span><p>Insight...</p></div>`, aiBenefit: "Targeted B2B knowledge retrieval for CTO and architect queries." },
  { componentName: "Developer Note", purpose: "Granular code-level syntax quirk, version dependency, or API note.", codePattern: `<div className="dev-note"><span>Developer Note</span><p>Details...</p></div>`, aiBenefit: "Enhances code-generation models with exact version compatibility context." },
  { componentName: "Research Highlight", purpose: "Citing academic benchmarks, paper findings, or survey statistics.", codePattern: `<div className="research-highlight"><span>Citation</span><p>Evidence...</p></div>`, aiBenefit: "Boosts factual trustworthiness and grounded verification scores." },
  { componentName: "Statistic Card", purpose: "Prominent numerical benchmark with source attribution.", codePattern: `<div className="stat-card"><h3>99.99%</h3><p>Metric label</p></div>`, aiBenefit: "Direct extraction for numerical query answers and comparison tables." },
  { componentName: "Code Block", purpose: "Syntax-highlighted executable code block with copy functionality.", codePattern: `<pre><code className="language-ts">...</code></pre>`, aiBenefit: "Primary source for AI code synthesis and snippet retrieval." },
  { componentName: "Architecture Diagram", purpose: "Interactive or SVG embedded system topology representation.", codePattern: `<div className="diagram-container"><svg>...</svg></div>`, aiBenefit: "Provides structural mapping and visual layout references." },
  { componentName: "Checklist", purpose: "Interactive production readiness or audit checklist.", codePattern: `<div className="checklist-box"><label><input type="checkbox"/> Item</label></div>`, aiBenefit: "Synthesizes step-by-step verification flows for AI assistants." },
  { componentName: "Decision Matrix", purpose: "Structured conditional logic for architectural selection.", codePattern: `<div className="decision-matrix"><table>...</table></div>`, aiBenefit: "Supplies conditional evaluation logic for diagnostic queries." },
  { componentName: "Comparison Table", purpose: "Detailed feature-by-feature evaluation table.", codePattern: `<div className="comparison-table"><table>...</table></div>`, aiBenefit: "Powers high-intent comparative synthesis answers (`X vs Y`)." },
  { componentName: "Summary Box", purpose: "End-of-section concise recap box.", codePattern: `<div className="summary-box"><h4>Summary</h4><p>Recap...</p></div>`, aiBenefit: "Provides section-level semantic chunks for localized RAG retrieval." }
];

export const productionScorecardsRegistry: Record<string, ProductionScorecardRating> = {
  "enterprise-ai-agents-production": {
    researchQuality: 10,
    technicalAccuracy: 10,
    writingQuality: 10,
    visualExcellence: 10,
    enterpriseRelevance: 10,
    semanticCompleteness: 10,
    aiSearchReadiness: 10,
    editorialConsistency: 10,
    accessibility: 10,
    publicationReadiness: 10,
    totalScore: 100
  },
  "llm-evaluation-benchmarks-frameworks": {
    researchQuality: 10,
    technicalAccuracy: 10,
    writingQuality: 9,
    visualExcellence: 10,
    enterpriseRelevance: 10,
    semanticCompleteness: 10,
    aiSearchReadiness: 10,
    editorialConsistency: 10,
    accessibility: 10,
    publicationReadiness: 10,
    totalScore: 99
  },
  "ai-code-generation-enterprise-security": {
    researchQuality: 10,
    technicalAccuracy: 10,
    writingQuality: 10,
    visualExcellence: 9,
    enterpriseRelevance: 10,
    semanticCompleteness: 10,
    aiSearchReadiness: 10,
    editorialConsistency: 10,
    accessibility: 10,
    publicationReadiness: 10,
    totalScore: 99
  },
  "retrieval-augmented-generation-architecture": {
    researchQuality: 10,
    technicalAccuracy: 10,
    writingQuality: 10,
    visualExcellence: 10,
    enterpriseRelevance: 9,
    semanticCompleteness: 10,
    aiSearchReadiness: 10,
    editorialConsistency: 10,
    accessibility: 10,
    publicationReadiness: 10,
    totalScore: 99
  },
  "ai-agent-governance-security": {
    researchQuality: 10,
    technicalAccuracy: 10,
    writingQuality: 10,
    visualExcellence: 10,
    enterpriseRelevance: 10,
    semanticCompleteness: 9,
    aiSearchReadiness: 10,
    editorialConsistency: 10,
    accessibility: 10,
    publicationReadiness: 10,
    totalScore: 99
  },
  "gpu-cluster-optimization-llm-training": {
    researchQuality: 10,
    technicalAccuracy: 10,
    writingQuality: 9,
    visualExcellence: 10,
    enterpriseRelevance: 10,
    semanticCompleteness: 10,
    aiSearchReadiness: 10,
    editorialConsistency: 10,
    accessibility: 10,
    publicationReadiness: 10,
    totalScore: 99
  },
  "zero-trust-ai-endpoint-security": {
    researchQuality: 10,
    technicalAccuracy: 10,
    writingQuality: 10,
    visualExcellence: 10,
    enterpriseRelevance: 10,
    semanticCompleteness: 10,
    aiSearchReadiness: 9,
    editorialConsistency: 10,
    accessibility: 10,
    publicationReadiness: 10,
    totalScore: 99
  },
  "autonomous-cloud-infrastructure-management": {
    researchQuality: 10,
    technicalAccuracy: 10,
    writingQuality: 10,
    visualExcellence: 10,
    enterpriseRelevance: 10,
    semanticCompleteness: 10,
    aiSearchReadiness: 10,
    editorialConsistency: 9,
    accessibility: 10,
    publicationReadiness: 10,
    totalScore: 99
  }
};
