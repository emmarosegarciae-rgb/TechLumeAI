/* ============================================================================
   ENTERPRISE CONTENT GOVERNANCE & INSTITUTIONAL TRUST SYSTEM (ECGIS-EQL v2.0)
   Institutional Source-of-Truth Registry for TechlumeAI
   ============================================================================ */

export interface GovernancePrinciplePipelineStep {
  stepNumber: number;
  phaseId: "CLAIM" | "RESEARCH" | "SOURCE" | "VERIFICATION" | "EDITORIAL_INTERPRETATION" | "PUBLICATION" | "MAINTENANCE";
  name: string;
  mandate: string;
  verificationActivity: string;
}

export const primaryGovernancePipeline: GovernancePrinciplePipelineStep[] = [
  {
    stepNumber: 1,
    phaseId: "CLAIM",
    name: "1. CLAIM IDENTIFICATION",
    mandate: "No important factual claim should be published merely because it sounds plausible. Every claim must originate from an explicit technical assertion.",
    verificationActivity: "Extract and isolate all empirical claims, architectural performance metrics, security bounds, pricing figures, and model capabilities into verifiable statements."
  },
  {
    stepNumber: 2,
    phaseId: "RESEARCH",
    name: "2. EXHAUSTIVE RESEARCH",
    mandate: "Perform exhaustive investigation using multi-source discovery across primary vendor documentation, academic papers, and official specifications.",
    verificationActivity: "Query authoritative databases (arXiv, RFC registries, official GitHub release notes, vendor API references) before formulating explanatory prose."
  },
  {
    stepNumber: 3,
    phaseId: "SOURCE",
    name: "3. SOURCE SELECTION & HIERARCHY",
    mandate: "Strictly enforce the 3-Tier Source Hierarchy. Primary Level 1 sources are mandatory for all core architectural, statistical, or benchmark claims.",
    verificationActivity: "Evaluate source authority, publication date, methodology, and potential bias. Discard unverified community rumors or SEO content farm summaries."
  },
  {
    stepNumber: 4,
    phaseId: "VERIFICATION",
    name: "4. EVIDENCE & CLAIM VERIFICATION",
    mandate: "Cross-reference each extracted claim against its cited source. Verify that the source directly supports the exact statement made without over-extrapolation.",
    verificationActivity: "Log verified claims into the Claim Verification Ledger (`Claim, Source, Source Type, Publication Date, Verification Date, Confidence Level, Notes`)."
  },
  {
    stepNumber: 5,
    phaseId: "EDITORIAL_INTERPRETATION",
    name: "5. EDITORIAL INTERPRETATION & SEPARATION",
    mandate: "Synthesize facts with clear separation between objective Fact, expert Analysis, editorial Opinion, and forward-looking Prediction.",
    verificationActivity: "Enforce strict uncertainty transparency phrasing (`Available evidence suggests...`, `Current documentation indicates...`) and eliminate false precision."
  },
  {
    stepNumber: 6,
    phaseId: "PUBLICATION",
    name: "6. INSTITUTIONAL PUBLICATION",
    mandate: "Publish only after all 8 Editorial Approval Gates and multi-phase QA checks are signed off by accountable directors.",
    verificationActivity: "Verify truthful authorship credentials, execute live DOM/viewport inspection, and validate structured JSON-LD schemas (`TechArticle`, `FAQPage`)."
  },
  {
    stepNumber: 7,
    phaseId: "MAINTENANCE",
    name: "7. CONTINUOUS MAINTENANCE & LIFECYCLE",
    mandate: "A technical article is a living knowledge asset. Continuously monitor decay signals and maintain version/API accuracy over time.",
    verificationActivity: "Connect article to CCMS-EQL v2.0 velocity schedules (`HIGH=30d`, `MEDIUM=90d`, `LOW=180d`) and track historical change control logs."
  }
];

export interface EditorialAccountabilityRole {
  roleId: string;
  roleTitle: string;
  coreResponsibilities: string[];
  accountabilityDeliverable: string;
  verificationSignoff: string;
}

export const editorialAccountabilityRegistry: EditorialAccountabilityRole[] = [
  {
    roleId: "ACC-01",
    roleTitle: "Topic Selection & Portfolio Strategist",
    coreResponsibilities: [
      "Evaluate proposed topics against Portfolio Intelligence Gate (`Pillar Alignment, Intent Depth, Backlink Opportunity, Monetization, Cannibalization Risk`).",
      "Ensure topic fills a strategic semantic coverage gap without overlapping active canonical cornerstones."
    ],
    accountabilityDeliverable: "Approved 14-Field Strategic Topic Brief",
    verificationSignoff: "Chief Editorial Strategist Signoff"
  },
  {
    roleId: "ACC-02",
    roleTitle: "Research Operations Lead",
    coreResponsibilities: [
      "Conduct primary discovery across Level 1 sources (`ArXiv, W3C/IETF RFCs, official vendor docs`).",
      "Assemble raw benchmark data, architectural diagrams, and pricing tables with exact timestamped citations."
    ],
    accountabilityDeliverable: "Verified Research Dossier & Raw Citation Ledger",
    verificationSignoff: "Research Operations Director Signoff"
  },
  {
    roleId: "ACC-03",
    roleTitle: "Technical Fact Verification Specialist",
    coreResponsibilities: [
      "Cross-check every statistical figure, code syntax block, parameter bound, and security claim against official documentation.",
      "Execute runnable code tests locally or on GPU nodes (`vLLM, CUDA, Python SDKs`) to verify zero compilation anomalies."
    ],
    accountabilityDeliverable: "Completed Claim Verification Matrix & Code Execution Log",
    verificationSignoff: "Fact-Checking Director Signoff"
  },
  {
    roleId: "ACC-04",
    roleTitle: "Technical Editorial & Structure Lead",
    coreResponsibilities: [
      "Structure article according to the 14-section canonical progression (`Executive Brief, Architecture, Math/Code, Trade-offs, FAQ`).",
      "Enforce strict Flesch-Kincaid readability targeted at Staff Engineers and C-Suite technical leaders."
    ],
    accountabilityDeliverable: "Structural Outline & Master Draft Prose",
    verificationSignoff: "Technical Editorial Director Signoff"
  },
  {
    roleId: "ACC-05",
    roleTitle: "Visual Systems & Diagram Architect",
    coreResponsibilities: [
      "Design custom, Figma-grade responsive SVG/WebP diagrams illustrating complex data flows, memory allocation, and component architecture.",
      "Verify that every diagram maintains exact 15-30 word descriptive natural ALT text (`WHAT IT SHOWS + WHY RELEVANT`)."
    ],
    accountabilityDeliverable: "Verified SVG/WebP Diagram Asset Package",
    verificationSignoff: "Visual Editorial Director Signoff"
  },
  {
    roleId: "ACC-06",
    roleTitle: "Technical SEO Governance Specialist",
    coreResponsibilities: [
      "Optimize primary/secondary keyword placement, heading hierarchy (`H1->H2->H3`), canonical URLs, and internal cluster spoke links.",
      "Inject verified `TechArticle`, `BreadcrumbList`, and `FAQPage` JSON-LD structured data."
    ],
    accountabilityDeliverable: "SEO Validation Report & Schema Markup Validation Check",
    verificationSignoff: "Technical SEO Governance Specialist Signoff"
  },
  {
    roleId: "ACC-07",
    roleTitle: "GEO & AI Search Visibility Architect",
    coreResponsibilities: [
      "Engineer Answer-First summary blocks (`45-60 word SGE targets`), structured decision tables, and explicit causal reasoning (`Because X, Y occurs`).",
      "Ensure high-density entity mentions mapped to canonical knowledge graphs (`Wikidata/Schema.org`)."
    ],
    accountabilityDeliverable: "AI Engine Retrieval Optimization Checklist (`Google AI, ChatGPT, Perplexity, Claude`)",
    verificationSignoff: "GEO Authority Strategist Signoff"
  },
  {
    roleId: "ACC-08",
    roleTitle: "Truthful Authorship & E-E-A-T Director",
    coreResponsibilities: [
      "Assign article to a domain-verified author whose credentials, employment history, and technical experience genuinely match the topic.",
      "Coordinate independent expert review for high-risk domains (`Security, Medical, Financial, Enterprise Infrastructure`)."
    ],
    accountabilityDeliverable: "Verified Author Profile Assignment & Expert Review Attestation",
    verificationSignoff: "E-E-A-T & Authorship Governance Signoff"
  },
  {
    roleId: "ACC-09",
    roleTitle: "Publication QA & Forensic Inspection Lead",
    coreResponsibilities: [
      "Execute the 15-Stage Live Page Crawl Sequence immediately upon deployment (`never relying on local preview alone`).",
      "Capture 8-Viewport responsive screenshot matrix verifying zero layout shift, visual overlap, or broken anchors."
    ],
    accountabilityDeliverable: "Forensic Live QA Inspection Report (`Lighthouse 98+, Accessibility 100`)",
    verificationSignoff: "Quality Assurance Director Signoff"
  },
  {
    roleId: "ACC-10",
    roleTitle: "Content Lifecycle & Maintenance Manager",
    coreResponsibilities: [
      "Enroll published URL into CCMS-EQL v2.0 tracking matrix with explicit volatility velocity and due date.",
      "Monitor 8 decay categories and execute mandatory 13-field update logs upon refreshing."
    ],
    accountabilityDeliverable: "Active Lifecycle Enrollment & Scheduled Audit Log Entry",
    verificationSignoff: "Content Lifecycle & Maintenance Manager Signoff"
  }
];

export interface ContentClassificationSpecification {
  classificationId: "EXPLAINER" | "IMPLEMENTATION_GUIDE" | "REFERENCE_GUIDE" | "COMPARISON" | "ANALYSIS" | "RESEARCH_REPORT" | "OPINION_COMMENTARY";
  name: string;
  definition: string;
  evidenceStandard: string;
  mandatorySections: string[];
}

export const contentClassificationRegistry: ContentClassificationSpecification[] = [
  {
    classificationId: "EXPLAINER",
    name: "Explainer (`Technical Architecture & Concept Hub`)",
    definition: "Explains a complex technical concept, protocol, or theoretical paradigm clearly and thoroughly from fundamental mechanics to enterprise implications.",
    evidenceStandard: "Must cite Level 1 primary RFCs, whitepapers, or core architectural specifications. All formulas and causal claims require verified citations.",
    mandatorySections: ["Executive TL;DR & Answer-First Summary", "Core Theoretical Mechanics & Architecture", "Mathematical/Algorithmic Formalism", "Enterprise Use Cases & Trade-offs", "Frequently Asked Questions (`FAQPage Schema`)"]
  },
  {
    classificationId: "IMPLEMENTATION_GUIDE",
    name: "Implementation Guide (`Code & Deployment Playbook`)",
    definition: "Step-by-step tutorial showing production engineering teams exactly how to build, configure, deploy, or secure a system.",
    evidenceStandard: "Must contain 100% runnable, syntax-checked code blocks tested against current SDK versions (`zero pseudo-code or unverified API flags`).",
    mandatorySections: ["Prerequisites & Hardware/Software Manifest", "Architecture Diagram (`Figma SVG/WebP`)", "Step-by-Step Code Walkthrough (`Annotated`)", "Production Edge Cases & Error Handling", "Performance Verification & Benchmarks"]
  },
  {
    classificationId: "REFERENCE_GUIDE",
    name: "Reference Guide (`Long-Term Structured Documentation`)",
    definition: "Provides structured, highly scannable, long-term reference tables, API parameter specifications, or configuration matrix definitions.",
    evidenceStandard: "Exclusively verified against official API reference documentation and current system release manifests.",
    mandatorySections: ["Quick-Jump Navigation Table", "Parameter & Configuration Specification Tables", "Version Compatibility Matrix", "Common Error Codes & Resolution Matrix", "Canonical Entity Glossary"]
  },
  {
    classificationId: "COMPARISON",
    name: "Comparison (`Side-by-Side Evaluation Matrix`)",
    definition: "Evaluates multiple technologies, frameworks, models, or architectural approaches head-to-head across objective engineering criteria.",
    evidenceStandard: "Must use identical benchmarking conditions, transparent test harnesses, and direct vendor pricing/throughput metrics. Disclose all limitations.",
    mandatorySections: ["Executive Comparison Matrix (`High-Contrast Table`)", "Methodology & Benchmark Environment Disclosure", "Head-to-Head Deep Dive (`Performance vs Cost vs UX`)", "Architectural Trade-off Analysis", "Final Recommendation Decision Tree"]
  },
  {
    classificationId: "ANALYSIS",
    name: "Analysis (`Market & Technical Development Synthesis`)",
    definition: "Provides original, rigorous interpretation of a major market shift, framework release, model launch, or industry trend.",
    evidenceStandard: "Facts must be strictly separated from interpretation. Empirical claims must cite primary vendor press releases or benchmark reports.",
    mandatorySections: ["Summary of Technical Development (`Objective Facts`)", "Underlying Architectural Drivers", "Strategic & Financial Implications for Enterprises", "Competitive Landscape Impact", "Forward-Looking Scenarios (`Explicitly Labeled as Prediction`)"]
  },
  {
    classificationId: "RESEARCH_REPORT",
    name: "Research-Based Report (`Empirical Investigation & Data Studio`)",
    definition: "Original data-driven research, benchmark study, or structured survey combining large sample datasets with deep statistical rigor.",
    evidenceStandard: "Requires complete methodology transparency, sample size disclosure, confidence interval calculation, and reproducible raw data tables.",
    mandatorySections: ["Executive Summary & Key Findings", "Research Methodology & Dataset Disclosure", "Empirical Data Charts (`SVG/WebP`) & Analysis", "Causal & Statistical Interpretation", "Limitations & Future Research Directions"]
  },
  {
    classificationId: "OPINION_COMMENTARY",
    name: "Opinion / Commentary (`Expert Technical Perspective`)",
    definition: "Clearly identified analytical viewpoint, architectural critique, or industry perspective authored by a senior industry expert or director.",
    evidenceStandard: "Must be explicitly labeled as 'Opinion / Commentary' in title and metadata. While arguments represent judgment, any underlying factual facts referenced must still be 100% verified.",
    mandatorySections: ["Clear Opinion/Commentary Header Banner (`[!NOTE]`)", "Contextual Background Facts (`Verified`)", "Author's Core Perspective & Argumentation", "Counter-Arguments & Trade-offs Considered", "Conclusion & Strategic Takeaways"]
  }
];

export const factAnalysisOpinionSeparationProtocol = {
  definitions: [
    { type: "FACT", description: "A verifiable empirical statement directly supported by authoritative documentation, reproducible benchmarks, or primary evidence (`e.g., vLLM v0.6.2 supports PagedAttention on CUDA 12.4`)." },
    { type: "ANALYSIS", description: "Rigorous technical interpretation based synthesizing available objective facts to explain underlying causality or systemic implications (`e.g., PagedAttention reduces KV cache fragmentation from 60% to under 4%, which directly lowers serving unit costs by 3.5x`)." },
    { type: "OPINION", description: "An expert viewpoint, architectural preference, or strategic judgment regarding relative merit (`e.g., We believe stateful graph orchestration like LangGraph is structurally superior to unstructured agent loops for mission-critical banking tasks`)." },
    { type: "PREDICTION", description: "A forward-looking assessment or projection regarding future market adoption or technological trajectory, accompanied by explicit uncertainty disclosures (`e.g., Based on current hardware scaling rates, we project INT4 quantization will become the default enterprise serving standard by Q4 2027`)." }
  ],
  strictProhibitions: [
    "NEVER present an Opinion or architectural preference as an objective undisputed Fact.",
    "NEVER present a forward-looking Prediction as absolute certainty (`must include uncertainty bounds`).",
    "NEVER present a vendor Marketing Claim or promotional benchmark as independent technical Analysis (`must disclose origin and test environment`)."
  ]
};

export interface SourceHierarchyTier {
  levelId: "LEVEL_1_PRIMARY" | "LEVEL_2_SECONDARY" | "LEVEL_3_COMMUNITY";
  tierName: string;
  sourceTypes: string[];
  mandateAndUsageRule: string;
  trustWeight: number;
}

export const sourceHierarchyRegistry: SourceHierarchyTier[] = [
  {
    levelId: "LEVEL_1_PRIMARY",
    tierName: "LEVEL 1 — PRIMARY SOURCES (`Mandatory for Core Claims`)",
    sourceTypes: [
      "Official vendor documentation & API reference guides (`OpenAI, Anthropic, Google DeepMind, AWS, NVIDIA`)",
      "Official technical announcements & formal release manifests",
      "Academic peer-reviewed papers (`arXiv, Nature, IEEE Xplore, ACM Digital Library`)",
      "Original reproducible research & benchmark test harnesses (`tested directly by TechlumeAI`)",
      "Government data & national statistical datasets (`NIST, Census, SEC filings`)",
      "Standards organizations & protocol bodies (`W3C, IETF RFCs, ISO, IEEE`)"
    ],
    mandateAndUsageRule: "Must be used as the definitive foundation for all architectural mechanisms, statistical benchmarks, pricing figures, and security specifications.",
    trustWeight: 10
  },
  {
    levelId: "LEVEL_2_SECONDARY",
    tierName: "LEVEL 2 — HIGH-QUALITY SECONDARY SOURCES (`Context & Validation`)",
    sourceTypes: [
      "Reputable technical publications (`Ars Technica, ACM Queue, IEEE Spectrum`)",
      "Established AI research institutions (`Stanford HAI, MIT CSAIL, Berkeley BAIR`)",
      "Professional industry analysis firms (`Gartner, Forrester, IDC — when methodology is audited`)",
      "Lead engineering blogs from frontier tech companies (`Stripe, Meta Engineering, Netflix TechBlog`)"
    ],
    mandateAndUsageRule: "Used to provide broader market context, corroborating analysis, or historical trends. Whenever a secondary source cites a study, editors must trace back to and cite the original Level 1 source.",
    trustWeight: 8
  },
  {
    levelId: "LEVEL_3_COMMUNITY",
    tierName: "LEVEL 3 — COMMUNITY SOURCES (`Signals & Practitioner Experience`)",
    sourceTypes: [
      "Developer forum discussions (`Stack Overflow, GitHub Issues, Reddit r/LocalLLaMA`)",
      "Practitioner experience notes and independent dev blogs",
      "Community benchmark reports and open-source discords"
    ],
    mandateAndUsageRule: "Community sources provide valuable discovery signals for real-world edge cases, undocumented bugs, or developer friction. However, they MUST NOT be treated as definitive evidence. Any bug or work-around discovered via Level 3 must be verified in local code execution before publication.",
    trustWeight: 5
  }
];

export const sourceVerificationAndEvaluationChecks = [
  { checkId: "SRC-CHK-01", name: "Authority Assessment", question: "Is the authoring organization or researcher a primary creator, standards body, or verifiable technical authority on this specific domain?" },
  { checkId: "SRC-CHK-02", name: "Relevance & Direct Support", question: "Does the source directly and unambiguously state the exact claim made in our text, or are we extrapolating/inferring beyond what the text says?" },
  { checkId: "SRC-CHK-03", name: "Date & Recency Validation", question: "When was the document published or last modified? Is the software version, model API, or pricing matrix still current as of Q3/Q4 2026?" },
  { checkId: "SRC-CHK-04", name: "Methodology & Transparency", question: "For benchmark or statistical claims, does the source disclose exact hardware specs, prompt seeds, sample size, and test harness parameters?" },
  { checkId: "SRC-CHK-05", name: "Originality Provenance Check", question: "Is this the original primary source where the data/code originated, or is it a derivative summary repeating unverified third-party claims?" },
  { checkId: "SRC-CHK-06", name: "Potential Bias & Conflict of Interest Check", question: "Does the source have a commercial incentive to inflate performance metrics or obscure architectural limitations (`e.g., vendor marketing benchmarks`)?" }
];

export interface ClaimVerificationRecord {
  claimId: string;
  claimStatement: string;
  sourceNameAndUrl: string;
  sourceType: "Level 1 Primary" | "Level 2 Secondary" | "Level 3 Community";
  publicationDate: string;
  verificationDate: string;
  confidenceLevel: "HIGH_CONFIDENCE" | "MEDIUM_CONFIDENCE" | "LOW_CONFIDENCE" | "SPECULATIVE";
  notesAndMethodology: string;
}

export const sampleClaimVerificationLedger: ClaimVerificationRecord[] = [
  {
    claimId: "CLM-2026-101",
    claimStatement: "vLLM v0.6+ using PagedAttention achieves up to 24x higher throughput than naive Hugging Face Transformers serving on Llama 3 70B.",
    sourceNameAndUrl: "Official vLLM Documentation & Kwon et al., SOSP 2023 ('Efficient Memory Management for Large Language Model Serving with PagedAttention')",
    sourceType: "Level 1 Primary",
    publicationDate: "2023-10-23 (SOSP Paper) / 2026-07-01 (vLLM v0.6.2 Release Notes)",
    verificationDate: "2026-07-17",
    confidenceLevel: "HIGH_CONFIDENCE",
    notesAndMethodology: "Verified via empirical benchmark running on 4x NVIDIA H100 SXM5 GPUs with 128k context window under concurrent user load of 256 requests."
  },
  {
    claimId: "CLM-2026-102",
    claimStatement: "The Model Context Protocol (MCP) by Anthropic establishes a standardized JSON-RPC 2.0 over stdio/SSE transport layer for connecting LLMs to local data repositories.",
    sourceNameAndUrl: "Anthropic MCP Specification v1.2 (`https://modelcontextprotocol.io/specification/2026-06`)",
    sourceType: "Level 1 Primary",
    publicationDate: "2026-06-15",
    verificationDate: "2026-07-16",
    confidenceLevel: "HIGH_CONFIDENCE",
    notesAndMethodology: "Direct verification of official protocol schema definition and reference TypeScript implementation (`@modelcontextprotocol/sdk v1.0.4`)."
  },
  {
    claimId: "CLM-2026-103",
    claimStatement: "Running FP8 quantization on NVIDIA Hopper architecture reduces VRAM footprint by ~50% compared to FP16 while maintaining less than 0.8% perplexity degradation across reasoning benchmarks.",
    sourceNameAndUrl: "NVIDIA TensorRT-LLM Whitepaper & DeepSpeed FP8 Benchmark Suite Q2 2026",
    sourceType: "Level 1 Primary",
    publicationDate: "2026-05-10",
    verificationDate: "2026-07-15",
    confidenceLevel: "HIGH_CONFIDENCE",
    notesAndMethodology: "Verified against NVIDIA Hopper H100 hardware documentation and confirmed with empirical MMLU/GSM8K evaluation scripts."
  },
  {
    claimId: "CLM-2026-104",
    claimStatement: "Enterprise cloud cost optimization for LLM endpoints typical yields between 35% and 58% savings when transitioning from on-demand API tokens to reserved provisioned throughput or self-hosted hybrid inference.",
    sourceNameAndUrl: "Stanford HAI AI Index Report 2026 & TechlumeAI Internal FinOps Client Audit Data",
    sourceType: "Level 2 Secondary",
    publicationDate: "2026-04-15",
    verificationDate: "2026-07-14",
    confidenceLevel: "MEDIUM_CONFIDENCE",
    notesAndMethodology: "Savings percentage varies widely based on utilization factor (`assumes >= 70% continuous GPU saturation`). Explicitly noted in article trade-off table."
  },
  {
    claimId: "CLM-2026-105",
    claimStatement: "Next-generation multi-modal frontier models released in late 2027 are expected to natively process continuous 60fps video streams within a unified 10M token context window.",
    sourceNameAndUrl: "AI Research Keynote Projections (`NeurIPS 2025 Panel / Industry Expert Consensus`)",
    sourceType: "Level 2 Secondary",
    publicationDate: "2025-12-12",
    verificationDate: "2026-07-17",
    confidenceLevel: "SPECULATIVE",
    notesAndMethodology: "Forward-looking industry forecast. Must be introduced with explicit uncertainty phrasing (`Available evidence and roadmaps suggest...`)."
  }
];

export const confidenceLevelRegistry = [
  {
    level: "HIGH CONFIDENCE",
    badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    criteria: "Directly and unambiguously supported by Level 1 Primary evidence (`official vendor specs, reproducible code benchmarks, academic proofs`). Zero material contradictory data exists.",
    recommendedPhrasing: "`Empirical benchmarks demonstrate...`, `Official specification defines...`, `Verified code execution confirms...`"
  },
  {
    level: "MEDIUM CONFIDENCE",
    badgeClass: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    criteria: "Supported by credible Level 1 or Level 2 evidence, but subject to specific architectural conditions, hardware dependencies, or minor methodology variations.",
    recommendedPhrasing: "`Under typical enterprise workloads, results show...`, `Assuming >=70% GPU saturation, tests indicate...`, `Credible industry studies report...`"
  },
  {
    level: "LOW CONFIDENCE",
    badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    criteria: "Supported by limited empirical evidence, preliminary developer community reports, or where documentation is actively evolving (`e.g., alpha/beta SDK releases`).",
    recommendedPhrasing: "`Preliminary community testing indicates...`, `Early documentation suggests that while still in beta...`, `Though limited data is currently available, early indicators point to...`"
  },
  {
    level: "SPECULATIVE",
    badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    criteria: "Forward-looking predictions, hypothetical architectural scaling models, or long-term industry roadmaps with inherent technological uncertainty.",
    recommendedPhrasing: "`Available evidence suggests...`, `This remains uncertain because hardware scaling limits may...`, `While currently theoretical, roadmaps project...`"
  }
];

export const uncertaintyTransparencyProtocol = {
  coreMandate: "When information is uncertain, say so clearly. NEVER create false precision (`e.g., claiming exactly '47.3% efficiency gain' from a rough estimate`).",
  approvedTransparencyPhrases: [
    "Available evidence suggests...",
    "This remains uncertain because...",
    "The exact figure varies by hardware configuration and workload intensity...",
    "The current official documentation indicates...",
    "While preliminary community tests show X, vendor specifications have not yet formalized...",
    "Under specific edge cases involving concurrent long-context queries, performance may degrade because..."
  ]
};

export const truthfulAuthorshipAndExpertReviewRegistry = {
  authorshipIntegrityRule: "Author pages and author credentials MUST BE 100% TRUTHFUL. ZERO INVENTED DEGREES, ZERO FABRICATED CREDENTIALS, ZERO FICTIONAL EMPLOYMENT HISTORIES. Trust cannot be manufactured through fictional personas.",
  expertReviewMandate: "For high-risk or highly technical content, independent expert review from a genuinely qualified domain specialist (`e.g., Staff Security Engineer, Principal Cloud Architect`) is required before publication signoff.",
  highRiskReviewCategories: [
    { category: "Security & Prompt Injection", riskRationale: "Inaccurate guidance could expose enterprise LLM endpoints to data exfiltration or RCE.", reviewerRequirement: "Verified Senior Cybersecurity / AppSec Engineer" },
    { category: "Medical / Health Technical Claims", riskRationale: "AI clinical diagnostic or biomedical claims carry severe human safety implications.", reviewerRequirement: "Verified Biomedical AI Researcher / Clinical Informaticist" },
    { category: "Financial Implications & AI FinOps", riskRationale: "Flawed token economics or cloud provisioning advice could cost enterprises tens of thousands of dollars.", reviewerRequirement: "Verified Enterprise Cloud FinOps / Lead DevOps Architect" },
    { category: "Legal, Copyright & Regulatory Compliance", riskRationale: "Misstating EU AI Act, GDPR, or LLM training data copyright rules creates legal liability.", reviewerRequirement: "Verified Technology Attorney / Enterprise Compliance Officer" },
    { category: "Production Infrastructure & GPU Orchestration", riskRationale: "Broken Kubernetes Helm charts or CUDA cluster commands can crash production serving pipelines.", reviewerRequirement: "Verified Principal Infrastructure / MLOps Engineer" },
    { category: "High-Impact Enterprise AI Architecture", riskRationale: "Core multi-agent banking or automated decision systems require bulletproof transaction consistency.", reviewerRequirement: "Verified Staff AI Systems Architect" }
  ],
  reviewAttestationRule: "Do NOT display a 'Reviewed By [Expert Name]' badge on an article unless the review actually occurred, formal feedback was incorporated, and the reviewer signed off in the QA Governance ledger."
};

export const editorialStyleAndTerminologyControl = {
  styleGuideMandates: [
    { element: "Heading Hierarchy", standard: "Strict H1 -> H2 -> H3 -> H4 progression. Zero skipped levels." },
    { element: "Code Formatting", standard: "Fenced code blocks with explicit language tag (`typescript`, `python`, `bash`), high-contrast dark theme, and annotated line comments." },
    { element: "Technical Notation & Units", standard: "Standardized SI notation (`ms` for milliseconds, `s` for seconds, `GB/s` for memory bandwidth, `TFLOPS` for compute, `$/1M tokens` for pricing)." },
    { element: "Version Numbers", standard: "Always specify full version tuples (`Next.js 16.2.10`, `vLLM v0.6.2`, `Python 3.11`, `CUDA 12.4`). Never use generic 'latest' tags without date stamps." },
    { element: "Date & Timestamps", standard: "ISO-8601 format (`YYYY-MM-DD`) or explicit Month Year (`July 2026`)." },
    { element: "Citation Formatting", standard: "Inline hyperlinked anchor text citing specific primary document titles or author names (`never 'click here' or 'source'`)." }
  ],
  terminologyDictionary: [
    { officialTerm: "Large Language Model", abbreviation: "LLM", alternativeTerms: ["Foundation Model", "Generative AI Model"], deprecatedTerms: ["AI Chatbot Engine", "Text Generator Machine"] },
    { officialTerm: "Retrieval-Augmented Generation", abbreviation: "RAG", alternativeTerms: ["Vector Search Augmentation", "Hybrid Dense-Sparse Retrieval"], deprecatedTerms: ["Prompt Stuffing Architecture"] },
    { officialTerm: "Model Context Protocol", abbreviation: "MCP", alternativeTerms: ["Anthropic Tool-Calling Standard", "Context Transport Protocol"], deprecatedTerms: ["Custom Plugin JSON Pipe"] },
    { officialTerm: "Quantization (INT4 / FP8)", abbreviation: "INT4 / FP8 Quantization", alternativeTerms: ["Low-Precision Weight Compression", "Post-Training Quantization (PTQ)"], deprecatedTerms: ["Model Shrinking", "Weight Truncation"] },
    { officialTerm: "Multi-Agent Orchestration", abbreviation: "MAS Orchestration", alternativeTerms: ["Stateful Agent Graphs", "Agentic Workflow Systems"], deprecatedTerms: ["Bot Swarm", "Automated Script Chain"] }
  ]
};

export const editorialBiasAndCommercialDisclosureProtocol = {
  biasControlRules: [
    "When evaluating tools, frameworks, models, or cloud platforms, editors MUST disclose all relevant technical limitations, trade-offs, and operational complexities.",
    "Every evaluation must explicitly assess: `Strengths, Weaknesses, Total Cost of Ownership (TCO), Reliability/Uptime, Security Footprint, Performance Overhead, and Appropriate Use Cases`.",
    "NEVER present a promotional vendor review as neutral technical analysis.",
    "NEVER attack or dismiss a competing technology without empirical, reproducible technical evidence."
  ],
  commercialDisclosureRules: [
    "If any commercial relationship (`sponsor, affiliate link, vendor advisory role`) exists regarding a mentioned product, explicit disclosure is mandatory right at the top of the article (`[!NOTE]` disclosure callout).",
    "Clearly distinguish across all metadata and UI design: `Independent Editorial Content vs Sponsored Content vs Affiliate Guide vs Advertisement`.",
    "Commercial relationships will NEVER influence our objective scorecard ratings, benchmark numbers, or recommendation decision trees."
  ]
};

export interface ErrorSeverityLevelSpecification {
  severityId: "MINOR" | "MODERATE" | "MAJOR" | "CRITICAL";
  label: string;
  badgeClass: string;
  definition: string;
  remediationSla: string;
  requiredAction: string;
}

export const errorSeverityAndCorrectionRegistry: {
  sixStepCorrectionProcedure: string[];
  severityLevels: ErrorSeverityLevelSpecification[];
} = {
  sixStepCorrectionProcedure: [
    "1. VERIFY THE ERROR: Forensically verify the reported inaccuracy against Level 1 primary sources or local code execution.",
    "2. DETERMINE SEVERITY: Classify error strictly into `MINOR`, `MODERATE`, `MAJOR`, or `CRITICAL` based on technical risk and impact.",
    "3. CORRECT THE INFORMATION: Update prose, code blocks, diagrams, or statistics immediately in the live repository.",
    "4. REVIEW RELATED CONTENT: Check all Tier 2 and Tier 3 dependent articles across the cluster to verify if the same error rippled outward.",
    "5. UPDATE LIVE ARTICLE & METADATA: Deploy updated build and append a formal correction note (`[!IMPORTANT] Correction Log`) if error was Major/Critical.",
    "6. RECORD CORRECTION INTERNALLY: Log full details (`Previous state, New state, Reason, Source, Date, Author`) in the Content Change Control Ledger."
  ],
  severityLevels: [
    {
      severityId: "MINOR",
      label: "MINOR ERROR",
      badgeClass: "bg-slate-800 text-slate-300 border-slate-700",
      definition: "Typographical error, minor punctuation anomaly, or insignificant wording issue that does not alter technical meaning or code execution.",
      remediationSla: "Within 72 Hours (`Standard Maintenance Sprint`)",
      requiredAction: "Silent in-place editorial fix. No public correction banner required."
    },
    {
      severityId: "MODERATE",
      label: "MODERATE ERROR",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      definition: "Incorrect architectural detail, outdated parameter default, or imprecise statistical citation that affects deep understanding but does not cause system failure.",
      remediationSla: "Within 24 Hours",
      requiredAction: "In-place code/text update. Update article 'Last Updated' date and log in internal change ledger."
    },
    {
      severityId: "MAJOR",
      label: "MAJOR ERROR",
      badgeClass: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      definition: "Technically incorrect architectural claim, non-compiling code snippet, materially misleading performance benchmark, or broken API syntax.",
      remediationSla: "Within 4 Hours (`High Priority Override`)",
      requiredAction: "Immediate deployment of corrected code/prose. Append formal inline update note explaining the technical correction."
    },
    {
      severityId: "CRITICAL",
      label: "CRITICAL ERROR",
      badgeClass: "bg-rose-500/10 text-rose-400 border-rose-500/20 font-bold animate-pulse",
      definition: "Potentially dangerous security flaw (`e.g., vulnerable prompt injection config`), fraudulent claim, data loss risk, or serious regulatory non-compliance.",
      remediationSla: "IMMEDIATE (`< 1 Hour Emergency Hotfix`)",
      requiredAction: "Emergency hotfix or immediate temporary page takedown/quarantine (`302`). Must append explicit public `[!CAUTION] Correction Notice` explaining what was fixed and why."
    }
  ]
};

export interface ContentChangeRecord {
  logId: string;
  articleSlug: string;
  changeDate: string;
  previousState: string;
  newState: string;
  reasonForChange: string;
  verifiedSource: string;
  impactedClusterPages: string[];
  accountableEditor: string;
}

export const sampleContentChangeLedger: ContentChangeRecord[] = [
  {
    logId: "CHG-2026-088",
    articleSlug: "/articles/pagedattention-mechanics-vllM-memory-optimization",
    changeDate: "2026-07-17",
    previousState: "Code block used deprecated `vllm.EngineArgs(tensor_parallel_size=2)` initialization syntax from v0.5.",
    newState: "Updated code block to modern `LLM(model='...', tensor_parallel_size=2, enforce_eager=False)` syntax compliant with v0.6.2+.",
    reasonForChange: "Deprecation warning in vLLM v0.6.2 release breaking copy-paste execution for developers.",
    verifiedSource: "Official vLLM v0.6.2 Release Notes (`https://docs.vllm.ai/en/v0.6.2/`)",
    impactedClusterPages: ["/articles/enterprise-ai-agents-production", "/topics/ai-agents"],
    accountableEditor: "Ethan Cho (`Lead AI Systems Engineer`)"
  },
  {
    logId: "CHG-2026-087",
    articleSlug: "/articles/model-context-protocol-mcp-enterprise-architecture",
    changeDate: "2026-07-16",
    previousState: "Cited Anthropic MCP SDK v0.9.0 without OAuth2 token exchange middleware documentation.",
    newState: "Updated specification references to MCP Spec v1.2 and injected runnable `@modelcontextprotocol/sdk v1.0.4` server authorization code block.",
    reasonForChange: "Anthropic released MCP Specification v1.2 introducing formalized enterprise authentication headers.",
    verifiedSource: "Anthropic Engineering Blog & GitHub `@modelcontextprotocol/sdk` Release v1.0.4",
    impactedClusterPages: ["/glossary/model-context-protocol", "/category/enterprise-ai"],
    accountableEditor: "Maya Hart (`Staff Enterprise AI Architect`)"
  }
];

export interface EditorialApprovalGateDefinition {
  gateNumber: number;
  gateId: "GATE_1_TOPIC" | "GATE_2_RESEARCH" | "GATE_3_OUTLINE" | "GATE_4_TECHNICAL" | "GATE_5_EDITORIAL" | "GATE_6_VISUAL" | "GATE_7_SEO_GEO" | "GATE_8_LIVE_QA";
  gateName: string;
  coreQuestion: string;
  mandatoryCriteria: string[];
  accountableSignoffRole: string;
}

export const editorialApprovalGatesRegistry: EditorialApprovalGateDefinition[] = [
  {
    gateNumber: 1,
    gateId: "GATE_1_TOPIC",
    gateName: "GATE 1 — TOPIC APPROVAL",
    coreQuestion: "Is the proposed topic strategically valuable, distinct, and aligned with our Portfolio & Topical Authority goals?",
    mandatoryCriteria: ["Passes Portfolio Gate 1-5 score >= 40/50", "Zero cannibalization overlap with existing canonical cornerstones", "Targeting Staff Engineer or C-Suite enterprise search intent"],
    accountableSignoffRole: "Chief Editorial Strategist"
  },
  {
    gateNumber: 2,
    gateId: "GATE_2_RESEARCH",
    gateName: "GATE 2 — RESEARCH APPROVAL",
    coreQuestion: "Is there sufficient authoritative, Level 1 primary evidence and verified benchmark data to support a definitive guide?",
    mandatoryCriteria: ["Minimum 5+ Level 1 primary sources (`ArXiv, vendor docs, RFCs`) logged in Dossier", "All quantitative claims and pricing matrices backed by timestamped primary links", "All potential vendor bias and methodology limits documented"],
    accountableSignoffRole: "Research Operations Director"
  },
  {
    gateNumber: 3,
    gateId: "GATE_3_OUTLINE",
    gateName: "GATE 3 — OUTLINE APPROVAL",
    coreQuestion: "Does the structural progression satisfy user intent across both theoretical comprehension and practical deployment?",
    mandatoryCriteria: ["Canonical 14-section progression mapped out", "Answer-First Executive Briefing planned for Section 1 (`45-60 word SGE target`)", "Internal link cluster connections and entity schemas pre-planned"],
    accountableSignoffRole: "Technical Editorial Director"
  },
  {
    gateNumber: 4,
    gateId: "GATE_4_TECHNICAL",
    gateName: "GATE 4 — TECHNICAL & CODE REVIEW",
    coreQuestion: "Are every architectural claim, parameter boundary, math formula, and code block 100% accurate and executable?",
    mandatoryCriteria: ["All code blocks syntax-checked and executed against current SDK versions", "Zero pseudo-code or deprecated API calls", "All architectural trade-offs and security risks explicitly detailed"],
    accountableSignoffRole: "Technical Fact-Checking Director & Expert Reviewer"
  },
  {
    gateNumber: 5,
    gateId: "GATE_5_EDITORIAL",
    gateName: "GATE 5 — EDITORIAL & PROSE REVIEW",
    coreQuestion: "Is the article prose crystal clear, authoritative, grammatically immaculate, and free of fluff or marketing rhetoric?",
    mandatoryCriteria: ["Strict adherence to Staff Engineer / C-Suite tone", "Zero grammatical or spelling anomalies", "Fact, Analysis, Opinion, and Prediction clearly demarcated"],
    accountableSignoffRole: "Executive Technical Editor"
  },
  {
    gateNumber: 6,
    gateId: "GATE_6_VISUAL",
    gateName: "GATE 6 — VISUAL & DIAGRAM REVIEW",
    coreQuestion: "Are all visual assets custom, professional Figma-grade SVG/WebP diagrams with descriptive natural ALT text?",
    mandatoryCriteria: ["Minimum 4+ custom architectural SVG/WebP diagrams exported (`zero stock photos`)", "High-contrast dark mode compatibility verified (`>=4.5:1 text contrast`)", "Exact 15-30 word descriptive ALT text (`WHAT IT SHOWS + WHY RELEVANT`) on all images"],
    accountableSignoffRole: "Visual Editorial Director"
  },
  {
    gateNumber: 7,
    gateId: "GATE_7_SEO_GEO",
    gateName: "GATE 7 — SEO, GEO & SCHEMA REVIEW",
    coreQuestion: "Is the page structurally discoverable, rich in semantic entities, and optimized for both search engines and AI answer engines?",
    mandatoryCriteria: ["`TechArticle`, `BreadcrumbList`, and `FAQPage` JSON-LD schemas validated with zero warnings", "Answer-First summary, comparison tables, and causal reasoning (`Because X...`) verified", "Canonical URL and meta tags (`Title <60ch, Dek <160ch`) verified"],
    accountableSignoffRole: "Technical SEO Governance Specialist & GEO Strategist"
  },
  {
    gateNumber: 8,
    gateId: "GATE_8_LIVE_QA",
    gateName: "GATE 8 — LIVE POST-DEPLOYMENT QA",
    coreQuestion: "Does the actual live published page function flawlessly across all viewports, themes, and interactive components?",
    mandatoryCriteria: ["15-Stage Live Page Crawl executed on production domain (`never rely on local preview alone`)", "8-Viewport screenshot matrix captured across Desktop and Mobile with zero clipping", "Lighthouse Performance >= 98 and Accessibility = 100 confirmed"],
    accountableSignoffRole: "Quality Assurance Director"
  }
];

export interface EditorialRiskDimension {
  dimensionId: string;
  dimensionName: string;
  riskDescription: string;
  highRiskIndicators: string[];
  mandatoryRiskControl: string;
}

export const editorialRiskAssessmentRegistry: {
  riskScoringFormula: string;
  riskDimensions: EditorialRiskDimension[];
} = {
  riskScoringFormula: "RISK SEVERITY INDEX = (ACCURACY RISK + OUTDATED RISK + SECURITY RISK + LEGAL RISK + REPUTATION RISK) * REACH FACTOR",
  riskDimensions: [
    {
      dimensionId: "RSK-01",
      dimensionName: "Accuracy & Hallucination Risk",
      riskDescription: "Risk that published architectural mechanisms, benchmark figures, or code syntax contain subtle technical falsehoods.",
      highRiskIndicators: ["Topics involving low-level CUDA memory allocation or complex kernel synchronization", "Unverified claims derived from third-party summaries"],
      mandatoryRiskControl: "Mandatory local execution of all code blocks and peer review by a Senior Systems Engineer before Gate 4 signoff."
    },
    {
      dimensionId: "RSK-02",
      dimensionName: "Outdated Information & Velocity Risk",
      riskDescription: "Risk that rapid vendor API releases (`e.g., weekly vLLM or LangGraph updates`) render code blocks stale within 30 days.",
      highRiskIndicators: ["Articles covering active frontier frameworks in high-volatility bands (`HIGH = 30d review schedule`)"],
      mandatoryRiskControl: "Enroll in CCMS-EQL v2.0 `HIGH` volatility tracking band with automated 30-day Slack/dashboard audit alerts."
    },
    {
      dimensionId: "RSK-03",
      dimensionName: "Security & Vulnerability Risk",
      riskDescription: "Risk that published configurations (`e.g., MCP server auth, Docker container permissions, prompt sanitization`) expose endpoints to attack.",
      highRiskIndicators: ["Code examples demonstrating local tool-calling over network sockets or database query execution"],
      mandatoryRiskControl: "Mandatory review against OWASP Top 10 for LLM Applications v2 by verified AppSec Specialist before publication."
    },
    {
      dimensionId: "RSK-04",
      dimensionName: "Legal, Copyright & Regulatory Risk",
      riskDescription: "Risk of violating GDPR, EU AI Act transparency mandates, copyright on training datasets, or FTC sponsored disclosure rules.",
      highRiskIndicators: ["Articles analyzing web scraping, training data harvesting, or commercial affiliate software evaluations"],
      mandatoryRiskControl: "Mandatory placement of `[!NOTE]` commercial/affiliate disclosures and review by Technology Compliance Officer."
    },
    {
      dimensionId: "RSK-05",
      dimensionName: "Misinterpretation & Reader Safety Risk",
      riskDescription: "Risk that a C-Suite executive or Staff Engineer misinterprets cost trade-offs, leading to catastrophic cloud overspend (`e.g., $50k+ unexpected API bills`).",
      highRiskIndicators: ["Articles detailing multi-agent recursive loops or provisioned throughput cloud cost calculations"],
      mandatoryRiskControl: "Inject prominent `[!WARNING]` financial/architectural guardrail boxes explicitly highlighting worst-case cost scenarios."
    },
    {
      dimensionId: "RSK-06",
      dimensionName: "Source Reliability & Provenance Risk",
      riskDescription: "Risk that a cited third-party benchmark or study is retracted, biased, or fabricated by an AI writing assistant.",
      highRiskIndicators: ["Citations referencing obscure blog posts, unverified preprints, or anonymous developer benchmarks"],
      mandatoryRiskControl: "Strict enforcement of Level 1 Primary source verification (`arXiv DOI, vendor API URL`) inside the Claim Ledger."
    },
    {
      dimensionId: "RSK-07",
      dimensionName: "Institutional Reputation & Trust Risk",
      riskDescription: "Risk that publishing low-quality, thin, or inaccurate content damages TechlumeAI's standing as a world-class technical publication.",
      highRiskIndicators: ["Any article failing to meet the minimum 98/100 QA Quality Scorecard rating"],
      mandatoryRiskControl: "Absolute stop-ship authority: Chief Editorial Officer can veto and quarantine any article failing Gate 1-8 verification."
    }
  ]
};

export const knowledgeProvenanceAndReuseProtocol = {
  provenanceMandate: "For every important technical assertion, retain clear provenance: `WHERE DID THIS COME FROM? WHEN VERIFIED? WHAT SOURCE SUPPORTS IT? WHAT INTERPRETATION WAS ADDED?`",
  contentReuseGovernanceRules: [
    "1. VERIFY CONTEXTUAL ACCURACY: When reusing information across articles, verify that the context has not shifted and the source remains relevant.",
    "2. ZERO BLIND COPY-PASTING: Do not copy outdated information or historical code blocks from an older TechlumeAI article into a new article without re-verifying against current Level 1 vendor specs.",
    "3. INTERNAL CITATION RULE: An older TechlumeAI article does not automatically make every claim inside it permanently correct. Always cross-reference the original primary external source during reuse."
  ]
};

export const aiAssistedContentGovernanceAndHallucinationControl = {
  permittedAiAssistanceBoundaries: [
    "Organizing and classifying large bodies of raw research literature and arXiv abstracts.",
    "Drafting initial structural outline variations based on approved 14-section progression.",
    "Summarizing lengthy technical RFCs or vendor changelogs for human editorial review.",
    "Generating boilerplate table structures and formatting comparative data grids.",
    "Assisting with code syntax checking and generating initial Pytest red-teaming harnesses."
  ],
  strictAiProhibitions: [
    "AI output MUST NEVER be automatically treated as objective fact without human verification.",
    "AI MUST NEVER be used to invent citations, fabricate statistical benchmarks, or generate unverified code blocks.",
    "AI MUST NEVER be permitted to make final architectural judgment calls or sign off on QA scorecard ratings."
  ],
  sevenPointHallucinationAuditChecklist: [
    { checkId: "HAL-01", target: "Unsupported Claims & False Certainty", auditProcedure: "Scan draft for confident phrasing (`undoubtedly`, `guarantees 100%`) that lacks immediate primary citation support." },
    { checkId: "HAL-02", target: "Invented Statistics & Benchmarks", auditProcedure: "Extract every percentage, throughput number, and latency figure. Verify exact match against primary research tables." },
    { checkId: "HAL-03", target: "Fabricated Citations & DOIs", auditProcedure: "Click and resolve every single external URL, arXiv ID, and DOI to confirm the target document actually exists and matches the claim." },
    { checkId: "HAL-04", target: "Nonexistent Product Features & APIs", auditProcedure: "Verify that claimed SDK methods (`e.g., client.messages.create()`) exist in the active official vendor SDK release." },
    { checkId: "HAL-05", target: "Misattributed Statements & Quotes", auditProcedure: "Verify that attributed quotes from industry leaders or researchers appear verbatim in verified conference transcripts or papers." },
    { checkId: "HAL-06", target: "Flawed Technical & Causal Relationships", auditProcedure: "Verify that architectural cause-and-effect claims (`e.g., why INT4 reduces VRAM without severe attention loss`) follow mathematically valid logic." },
    { checkId: "HAL-07", target: "AI-Generated Source Validation Check", auditProcedure: "If AI suggested a source, confirm: `Does it exist? Does it say what is claimed? Is the date accurate? Is it relevant? Is it un-fabricated?`" }
  ]
};

export interface EcgisEqlSignoffGateItem {
  id: string;
  category: string;
  requirement: string;
  verificationMethod: string;
  accountableRole: string;
}

export const mandatoryEcgisEqlSignoffGate: EcgisEqlSignoffGateItem[] = [
  { id: "ECGIS-EQL-01", category: "Governance Principle Adherence", requirement: "Verify article followed strict pipeline: CLAIM -> RESEARCH -> SOURCE -> VERIFICATION -> EDITORIAL INTERPRETATION -> PUBLICATION -> MAINTENANCE.", verificationMethod: "Pipeline Audit Log Check", accountableRole: "Chief Editorial Officer" },
  { id: "ECGIS-EQL-02", category: "Accountability Assignment", requirement: "Confirm all 10 internal accountability roles (`Topic, Research, Fact, Technical, Editorial, Visual, SEO, GEO, E-E-A-T, QA`) are explicitly assigned.", verificationMethod: "Accountability Matrix Check", accountableRole: "Enterprise Content Governance Director" },
  { id: "ECGIS-EQL-03", category: "Content Classification & Evidence Standard", requirement: "Verify article classified into one/more of 7 categories (`EXPLAINER, IMPLEMENTATION GUIDE, etc.`) and meets its exact mandatory evidence standard.", verificationMethod: "Classification Audit", accountableRole: "Technical Editorial Director" },
  { id: "ECGIS-EQL-04", category: "Fact, Analysis & Opinion Demarcation", requirement: "Confirm strict separation between objective Fact, expert Analysis, Opinion, and forward-looking Prediction with zero opinion-as-fact claims.", verificationMethod: "Prose Forensics Check", accountableRole: "Executive Technical Editor" },
  { id: "ECGIS-EQL-05", category: "3-Tier Source Hierarchy Compliance", requirement: "Verify all core architectural, statistical, and benchmark claims are supported by Level 1 Primary Sources (`ArXiv, vendor specs, RFCs`).", verificationMethod: "Source Dossier Inspection", accountableRole: "Research Operations Director" },
  { id: "ECGIS-EQL-06", category: "Claim Verification Ledger Completed", requirement: "Verify all quantitative/critical claims recorded in Claim Ledger (`Claim, Source, Source Type, Pub Date, Verification Date, Confidence, Notes`).", verificationMethod: "7-Field Ledger Verification", accountableRole: "Fact-Checking Director" },
  { id: "ECGIS-EQL-07", category: "Confidence Level & Uncertainty Phrasing", requirement: "Confirm each major claim classified (`HIGH, MEDIUM, LOW, SPECULATIVE`) and uncertain items use approved transparency phrasing (`Available evidence suggests...`).", verificationMethod: "Uncertainty Transparency Audit", accountableRole: "Fact-Checking Director" },
  { id: "ECGIS-EQL-08", category: "Truthful Authorship & Expert Review", requirement: "Verify author credentials/experience are 100% truthful (`zero fictional degrees`) and high-risk domains received verified expert review signoff.", verificationMethod: "Author Verification & Attestation Check", accountableRole: "E-E-A-T Strategist" },
  { id: "ECGIS-EQL-09", category: "Style Guide & Terminology Consistency", requirement: "Verify adherence to H1->H4 hierarchy, code formatting, SI notation, full version tuples (`Next.js 16.2.10`), and Terminology Dictionary standards.", verificationMethod: "Style & Terminology Automated Scan", accountableRole: "Executive Technical Editor" },
  { id: "ECGIS-EQL-10", category: "Editorial Bias & Commercial Disclosure", requirement: "Confirm objective assessment (`Strengths, Weaknesses, TCO, Risks`) and explicit `[!NOTE]` disclosure of any sponsored/affiliate commercial links.", verificationMethod: "Bias & Disclosure Inspection", accountableRole: "Enterprise Content Governance Director" },
  { id: "ECGIS-EQL-11", category: "Correction Policy & Error Severity SLA", requirement: "Confirm article enrolled in 6-step correction protocol and error severity SLAs (`MINOR=72h, MODERATE=24h, MAJOR=4h, CRITICAL=1h hotfix`).", verificationMethod: "Correction Protocol Enrollment", accountableRole: "Quality Assurance Director" },
  { id: "ECGIS-EQL-12", category: "Change Control & Provenance Registry", requirement: "Verify all historical edits logged (`Previous state, New state, Reason, Source, Date, Impacted pages`) to preserve institutional continuity.", verificationMethod: "Change Control Ledger Check", accountableRole: "Content Lifecycle Manager" },
  { id: "ECGIS-EQL-13", category: "8 Editorial Approval Gates Passed", requirement: "Confirm all 8 Gates (`Topic, Research, Outline, Technical Review, Editorial Review, Visual Review, SEO/GEO Review, Live QA`) signed off.", verificationMethod: "Gate Approval Dossier Check", accountableRole: "Chief Editorial Officer" },
  { id: "ECGIS-EQL-14", category: "Editorial Risk Assessment Executed", requirement: "Verify all 7 Risk Dimensions (`Accuracy, Outdated, Security, Legal, Misinterpretation, Source Reliability, Reputation`) evaluated and mitigated.", verificationMethod: "Risk Severity Index Check", accountableRole: "Quality Assurance Director" },
  { id: "ECGIS-EQL-15", category: "Knowledge Provenance & Reuse Rules", requirement: "Confirm provenance preserved (`WHERE FROM? WHEN VERIFIED? WHAT SOURCE?`) and re-verified against Level 1 docs during across-article reuse.", verificationMethod: "Provenance Audit Check", accountableRole: "Knowledge Management Architect" },
  { id: "ECGIS-EQL-16", category: "AI Governance & Hallucination Audit", requirement: "Confirm AI boundaries respected and 7-Point Hallucination Audit executed (`zero invented citations, false statistics, or non-existent SDK APIs`).", verificationMethod: "7-Point Hallucination Forensic Check", accountableRole: "Source Verification Specialist" },
  { id: "ECGIS-EQL-17", category: "Live Page Crawl & 8-Viewport QA", requirement: "Verify actual live published URL inspected (`15 crawl stages`) and 8-viewport responsive screenshots captured proving zero defects.", verificationMethod: "Live Production Forensics Check", accountableRole: "Quality Assurance Director" },
  { id: "ECGIS-EQL-18", category: "Content Trust Audit Final Attestation", requirement: "Final signoff verifying reader can clearly identify author, update date, supporting sources, fact/analysis boundaries, limitations, and claim trustworthiness.", verificationMethod: "Chief Editorial Officer Final Attestation", accountableRole: "Chief Editorial Officer" }
];
