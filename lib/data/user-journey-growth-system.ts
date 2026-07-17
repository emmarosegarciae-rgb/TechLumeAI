export interface UserJourneyStage {
  id: string;
  stageName: "DISCOVERY" | "UNDERSTANDING" | "EXPLORATION" | "EVALUATION" | "ACTION" | "RETURN";
  entryChannels: string[];
  userMentalModel: string;
  mandatoryPageRequirements: string[];
  recommendedNextStep: string;
  primarySuccessMetric: string;
}

export interface PagePurposeArchetype {
  id: string;
  archetype: string;
  primaryPurpose: string;
  userIntentAlignment: "INFORMATIONAL" | "COMMERCIAL INVESTIGATION" | "TRANSACTIONAL" | "NAVIGATIONAL";
  ctaHierarchyRules: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  requiredLayoutElements: string[];
  forbiddenConversionTraps: string[];
}

export interface CopywritingTransformation {
  vagueAntiPattern: string;
  contextualReplacement: string;
  targetArchetype: string;
  psychologicalValueHook: string;
}

export interface EditorialCtaMatrixItem {
  contentType: string;
  priorityActions: string[];
  placementStrategy: string;
}

export interface InternalJourneyPathway {
  id: string;
  pathwayName: string;
  progressionSequence: string[];
  intentTransition: string;
  recommendationQualityRules: string[];
}

export interface AudienceSegment {
  id: string;
  name: string;
  technicalRigor: string;
  primaryGoal: string;
  conversionHook: string;
}

export interface ProgressiveDisclosureLayer {
  level: number;
  layerName: string;
  targetAudience: string;
  contentElements: string[];
}

export interface FrictionAuditItem {
  id: string;
  category: string;
  frictionItem: string;
  auditMethod: string;
  remediationMandate: string;
}

export interface ExperimentationLoopStep {
  step: number;
  phase: string;
  requirement: string;
  documentationStandard: string;
}

export interface MonetizationGovernanceRule {
  ruleId: string;
  title: string;
  policy: string;
  auditMechanism: string;
}

export interface UserFeedbackSchemaItem {
  id: string;
  prompt: string;
  placement: string;
  routingAction: string;
}

export interface BusinessValueFunnelStage {
  stageNumber: number;
  stageName: string;
  metric: string;
  indirectValueContribution: string;
}

export interface JourneyAnalyticsTrackingPoint {
  eventName: string;
  triggerCondition: string;
  dataLayerPayload: string[];
}

export interface GateChecklistItem {
  id: string;
  category: string;
  item: string;
  verificationStandard: string;
}

// ==========================================
// 1. 6-STAGE USER JOURNEY MODEL REGISTRY
// ==========================================
export const userJourneyStagesRegistry: UserJourneyStage[] = [
  {
    id: "STAGE-01",
    stageName: "DISCOVERY",
    entryChannels: ["Search Engines (Google, Bing)", "AI Search Engines (Perplexity, ChatGPT, Claude, Gemini)", "Social Platforms (X/Twitter, LinkedIn, Hacker News)", "Developer Communities (Reddit r/MachineLearning, Discord)", "Direct Referral & Backlinks"],
    userMentalModel: "I have encountered a problem or terminology (`e.g., PagedAttention or MCP`) and need immediate confirmation that this page holds the precise, trustworthy answer.",
    mandatoryPageRequirements: [
      "Immediate clarity on WHAT the topic is right in the H1 title and lead deck.",
      "Explicit statement of WHY it matters and WHAT the user will learn in the first 120 words.",
      "Immediate trust signals: Verified authorship, date modified, exact SDK versions (`vLLM v0.8+`), and institutional credibility badge."
    ],
    recommendedNextStep: "Transition smoothly into the UNDERSTANDING stage by providing an Answer-First definition block right under the hero.",
    primarySuccessMetric: "Above-the-fold engagement rate & zero immediate pogo-sticking bounce (< 15% exit within 10s)."
  },
  {
    id: "STAGE-02",
    stageName: "UNDERSTANDING",
    entryChannels: ["Internal flow from Discovery", "Direct long-tail definition queries (`What is X?`)"],
    userMentalModel: "I need to master the core concepts, terminology, and architectural foundations without wading through unnecessary marketing fluff.",
    mandatoryPageRequirements: [
      "Clear, bolded 2-sentence direct technical definitions (`Answer-First block`).",
      "Custom architecture diagrams (`SVG/Mermaid`) illustrating data flow and kernel relationships.",
      "Structured semantic headings (`H2/H3`) breaking down complex concepts into digestible mechanisms.",
      "Comparison tables and real-world engineering examples."
    ],
    recommendedNextStep: "Provide contextual inline recommendations to EXPLORATION clusters or deeper technical explainers.",
    primarySuccessMetric: "Active dwell time (> 3m 45s) and scroll depth reaching at least 60% of the core explanation."
  },
  {
    id: "STAGE-03",
    stageName: "EXPLORATION",
    entryChannels: ["Internal Spoke Links", "Sidebar Cluster Navigation", "Table of Contents jumps", "Related Guides cards"],
    userMentalModel: "Now that I understand the basics, what related frameworks, comparison trade-offs, or implementation playbooks should I explore next?",
    mandatoryPageRequirements: [
      "Genuinely relevant internal links mapped strictly within the same semantic cluster (`e.g., LLM Inference cluster`).",
      "Clear context for why the linked guide is useful (`e.g., 'Compare this against FlashAttention v3 memory footprint'`).",
      "Topic cluster breadcrumbs (`Home > LLM Inference & Serving > Memory Kernel Optimization`)."
    ],
    recommendedNextStep: "Direct the user toward EVALUATION (comparisons) or ACTION (implementation code/CLI tools).",
    primarySuccessMetric: "Internal link traversal rate (> 28% of sessions visit a second cluster asset)."
  },
  {
    id: "STAGE-04",
    stageName: "EVALUATION",
    entryChannels: ["Comparison search queries (`LangGraph vs CrewAI`)", "Internal hub links", "Engineering architecture review shares"],
    userMentalModel: "I am deciding between multiple architectural approaches, models, or platforms for a production engineering deployment. I need rigorous, unbiased evidence.",
    mandatoryPageRequirements: [
      "Side-by-side empirical trade-off tables (`Latency, VRAM usage, Throughput, License, Complexity`).",
      "Practical decision criteria (`'Choose Approach A if X; Choose Approach B if Y'`).",
      "Transparent limitations and edge-case failure modes (`No tool is perfect`).",
      "Absolute neutrality: Never force users toward a predetermined commercial conclusion without proof."
    ],
    recommendedNextStep: "Transition to ACTION by offering the definitive production implementation guide or benchmark reproduction script.",
    primarySuccessMetric: "Bookmark rate, social sharing by technical leaders, and click-through to deep implementation playbooks (> 22%)."
  },
  {
    id: "STAGE-05",
    stageName: "ACTION",
    entryChannels: ["Implementation queries (`vLLM python deployment script`)", "EVALUATION stage exits", "CLI / Code tool pages"],
    userMentalModel: "I am ready to deploy code, run a benchmark, adopt a tool, or subscribe to receive enterprise architecture updates.",
    mandatoryPageRequirements: [
      "Complete, runnable, production-ready code blocks (`TypeScript, Python, Bash`) with one-click copy buttons.",
      "Explicit dependency requirements (`requirements.txt, package.json, CUDA drivers`).",
      "Clear, contextually descriptive CTAs that answer: `WHY take action? WHAT value is received? WHAT happens next?`",
      "Zero conversion friction: Fast loading, clean formatting, accessible form fields."
    ],
    recommendedNextStep: "Invite the user to RETURN through newsletter subscriptions, GitHub starring, or saving the reference playbook.",
    primarySuccessMetric: "Code copy event rate (> 18%), CLI copy events, and verified form submissions (> 1.8% CR)."
  },
  {
    id: "STAGE-06",
    stageName: "RETURN",
    entryChannels: ["Direct bookmarks", "Weekly/Monthly Engineering Newsletter (`TechlumeAI Briefing`)", "RSS feeds", "Saved resources navigation"],
    userMentalModel: "I trust TechlumeAI as my primary technical publication and return regularly for updated benchmarks, new research deep-dives, and cutting-edge AI playbooks.",
    mandatoryPageRequirements: [
      "Visible 'Last Updated' badges indicating active CCMS-EQL maintenance (`e.g., Updated July 2026 for vLLM v0.8.2`).",
      "High-value recurring features (`New Benchmarks Tracker, Interactive Architecture Calculators`).",
      "Transparent newsletter preferences allowing topic-based subscriptions (`LLMs, Agentic Systems, FinOps`)."
    ],
    recommendedNextStep: "Deepen institutional loyalty via advanced enterprise consulting inquiries, community contributions, and portfolio sharing.",
    primarySuccessMetric: "30-Day returning user retention rate (> 34%) and 3-Year Cumulative Lifetime Value (`LTV`)."
  }
];

// ==========================================
// 2. PAGE PURPOSE ARCHETYPE REGISTRY (`7 ARCHETYPES`)
// ==========================================
export const pagePurposeArchetypesRegistry: PagePurposeArchetype[] = [
  {
    id: "ARCH-01",
    archetype: "ARTICLE (INFORM & GUIDE)",
    primaryPurpose: "Deliver rigorous, comprehensive, answer-first technical education on a focused engineering topic.",
    userIntentAlignment: "INFORMATIONAL",
    ctaHierarchyRules: {
      primary: "Related Deep-Dive Implementation Guide (`e.g., 'Explore the complete production deployment playbook'`).",
      secondary: "Next Logical Cluster Article or Topic Hub (`e.g., 'Return to LLM Inference Hub'`).",
      tertiary: "Practical Tool or Benchmark Calculator (`e.g., 'Calculate your VRAM requirements'`)."
    },
    requiredLayoutElements: [
      "Above-the-fold Answer-First Definition block",
      "Sticky Table of Contents (Desktop)",
      "Progressive Disclosure H2/H3 hierarchy",
      "One-click Code Copy blocks",
      "Authoritative Bio & Date Modified stamp"
    ],
    forbiddenConversionTraps: [
      "No intrusive full-screen popups before the user reads the first H2.",
      "No generic 'Click Here to Learn More' buttons.",
      "No commercial product pushes in purely theoretical explainers."
    ]
  },
  {
    id: "ARCH-02",
    archetype: "CORNERSTONE GUIDE (AUTHORITY HUB)",
    primaryPurpose: "Establish definitive institutional authority across an entire domain (`e.g., Agentic AI Architecture`) and distribute users across 15+ subtopic spokes.",
    userIntentAlignment: "INFORMATIONAL",
    ctaHierarchyRules: {
      primary: "Supporting Cluster Content Spoke (`e.g., 'Jump to Section 4: Multi-Agent Memory Orchestration'`).",
      secondary: "Related Implementation & CLI Playbook.",
      tertiary: "Subscribe to the Technical Pillar Newsletter for Quarterly Updates."
    },
    requiredLayoutElements: [
      "Comprehensive Executive Summary & Topic Map diagram",
      "Categorized Spoke Directory cards with read-time indicators",
      "Interactive comparison filtering",
      "Embedded PDF / Markdown downloadable reference specification"
    ],
    forbiddenConversionTraps: [
      "Never dead-end a user without pointing to at least 3 relevant subtopic spokes.",
      "Do not bury cluster links inside dense text blocks; use visual card navigation."
    ]
  },
  {
    id: "ARCH-03",
    archetype: "COMPARISON (EVALUATION SUPPORT)",
    primaryPurpose: "Provide balanced, empirical trade-off analysis between competing tools, frameworks, or architectural approaches.",
    userIntentAlignment: "COMMERCIAL INVESTIGATION",
    ctaHierarchyRules: {
      primary: "Detailed Implementation Guide for the chosen framework (`e.g., 'Read the LangGraph Production Deployment Guide'`).",
      secondary: "Interactive Benchmark Reproduction Script or Github Repository.",
      tertiary: "Consult with TechlumeAI Enterprise Architects for custom evaluation."
    },
    requiredLayoutElements: [
      "Executive Decision Matrix (`When to Choose X vs Y`) right after introduction",
      "Side-by-side empirical performance comparison tables (`Latency, VRAM, Cost`)",
      "Pros / Cons and Edge-Case Failure Mode breakout boxes",
      "Neutral scoring methodology explanation"
    ],
    forbiddenConversionTraps: [
      "No biased commercial favoritism without empirical benchmark data.",
      "Never hide critical limitations of a sponsored or affiliated tool (`Absolute editorial independence`)."
    ]
  },
  {
    id: "ARCH-04",
    archetype: "TOOL / CALCULATOR PAGE (ACTION ENABLEMENT)",
    primaryPurpose: "Enable immediate, hands-on technical utility (`e.g., LLM VRAM Calculator, Token Cost Estimator, Prompt Analyzer`).",
    userIntentAlignment: "TRANSACTIONAL",
    ctaHierarchyRules: {
      primary: "Execute Calculation / Run Interactive Tool (`e.g., 'Calculate Exact VRAM & GPU Recommendation'`).",
      secondary: "Download the Complete Reference Formula & Code Implementation (`Python/TS`).",
      tertiary: "Explore the Underlying Architectural Explainer Guide."
    },
    requiredLayoutElements: [
      "Clean, reactive input parameters (`Model Parameters, Quantization, Batch Size, Context Length`)",
      "Instant real-time output display (`No page reload needed`)",
      "One-click Export Configuration (`JSON / CLI flag copy`)",
      "Mathematical formula and assumptions breakdown section below the tool"
    ],
    forbiddenConversionTraps: [
      "Never require a user to enter an email address just to see the calculator result (`No paywalled utility`).",
      "Do not use dark patterns or forced sign-ups on developer tools."
    ]
  },
  {
    id: "ARCH-05",
    archetype: "CATEGORY / PILLAR PAGE (DISCOVERY DIRECTORY)",
    primaryPurpose: "Organize discovery across our 8 major technical categories and guide users from high-level topics to specific playbooks.",
    userIntentAlignment: "NAVIGATIONAL",
    ctaHierarchyRules: {
      primary: "Explore Top Cornerstone Guide in this Category.",
      secondary: "Filter Articles by Difficulty Level (`Beginner, Intermediate, Advanced Engineering`).",
      tertiary: "Subscribe to Category-Specific RSS or Email Feed."
    },
    requiredLayoutElements: [
      "Category Scope & Technical Rationale summary deck",
      "Featured Hub / Cornerstone spotlight banner",
      "Dynamic search and multi-tag filtering bar",
      "Structured article grid with difficulty badges and read time"
    ],
    forbiddenConversionTraps: [
      "No infinite scroll without footer access (`Use clean pagination or 'Load More Articles' button`)."
    ]
  },
  {
    id: "ARCH-06",
    archetype: "ABOUT PAGE (TRUST & CREDIBILITY)",
    primaryPurpose: "Establish definitive institutional trust, E-E-A-T credentials, editorial independence, and research methodology.",
    userIntentAlignment: "NAVIGATIONAL",
    ctaHierarchyRules: {
      primary: "Read our Editorial Governance & Fact-Checking Playbook (`ECGIS v2.0`).",
      secondary: "Explore our 8 Technical Pillars & Research Leadership.",
      tertiary: "Connect with our Editorial Advisory & Research Board."
    },
    requiredLayoutElements: [
      "Mission Statement & Technical Rigor Mandate",
      "Editorial Advisory Board bios, credentials, and LinkedIn/GitHub links",
      "Our 15-Phase Editorial Operating System (`EOS`) workflow overview",
      "Absolute separation of monetization policy manifesto"
    ],
    forbiddenConversionTraps: [
      "No aggressive lead capture forms on the About page (`Focus purely on institutional credibility`)."
    ]
  },
  {
    id: "ARCH-07",
    archetype: "CONTACT / ADVISORY PAGE (COMMUNICATION ENABLEMENT)",
    primaryPurpose: "Enable seamless communication for enterprise architecture inquiries, editorial corrections, and research partnerships.",
    userIntentAlignment: "TRANSACTIONAL",
    ctaHierarchyRules: {
      primary: "Submit Enterprise Inquiry or Technical Correction (`Form submission with clear next-step confirmation`).",
      secondary: "Direct Email / PGP Key access for security researchers.",
      tertiary: "Review our SLA and Typical Response Cadence (`< 24 hours for corrections`)."
    },
    requiredLayoutElements: [
      "Purpose-specific routing selection (`Correction, Enterprise Advisory, Media/Press, Research Proposal`)",
      "Minimal required form fields (`Name, Professional Email, Subject, Technical Detail`)",
      "Privacy assurance & zero-spam pledge",
      "Live response SLA expectation"
    ],
    forbiddenConversionTraps: [
      "Never require phone number or company revenue for simple editorial corrections (`Eliminate friction`)."
    ]
  }
];

// ==========================================
// 3. CTA HIERARCHY & COPYWRITING LEDGER
// ==========================================
export const ctaCopywritingTransformations: CopywritingTransformation[] = [
  {
    vagueAntiPattern: "Click Here",
    contextualReplacement: "Explore the Complete vLLM Production Deployment Playbook",
    targetArchetype: "ARTICLE (INFORM & GUIDE)",
    psychologicalValueHook: "Communicates exactly WHAT technical asset is reached and WHY it matters (`Production Deployment`)."
  },
  {
    vagueAntiPattern: "Learn More",
    contextualReplacement: "Compare Memory Footprint: FlashAttention v2 vs PagedAttention",
    targetArchetype: "COMPARISON (EVALUATION SUPPORT)",
    psychologicalValueHook: "Sets a precise analytical expectation (`Memory Footprint comparison`)."
  },
  {
    vagueAntiPattern: "Submit",
    contextualReplacement: "Get Weekly AI Engineering Benchmarks & Playbooks (Zero Spam)",
    targetArchetype: "NEWSLETTER / RETENTION HOOK",
    psychologicalValueHook: "States explicit value (`Benchmarks & Playbooks`) and removes anxiety (`Zero Spam`)."
  },
  {
    vagueAntiPattern: "Download",
    contextualReplacement: "Download the Zero-Trust Enterprise MCP Architecture Blueprint (.md / .pdf)",
    targetArchetype: "CORNERSTONE GUIDE (AUTHORITY HUB)",
    psychologicalValueHook: "Specifies exact file format and professional utility (`Zero-Trust Blueprint`)."
  },
  {
    vagueAntiPattern: "Read More",
    contextualReplacement: "Read Section 3: Step-by-Step Python Kernel Quantization Code",
    targetArchetype: "INTERNAL CLUSTER NAVIGATION",
    psychologicalValueHook: "Provides progressive disclosure direction right to runnable code."
  }
];

export const editorialCtaMatrix: EditorialCtaMatrixItem[] = [
  {
    contentType: "Informational Technical Article (`e.g., Deep-Dive Explainer`)",
    priorityActions: [
      "Related Deep-Dive Implementation Guide",
      "Next Article in Topic Pathway",
      "Parent Pillar / Topic Hub",
      "Relevant Interactive Calculator / Tool"
    ],
    placementStrategy: "Primary CTA right at the end of the technical implementation section; Secondary CTA in sticky desktop sidebar; Tertiary CTA inside the 'Next Steps' bottom banner."
  },
  {
    contentType: "Comparison & Evaluation Guide (`e.g., Tool vs Tool`)",
    priorityActions: [
      "Detailed Implementation Playbook for Winner/Chosen Framework",
      "Interactive Benchmark Reproduction Script",
      "Enterprise Architecture Advisory Consultation"
    ],
    placementStrategy: "Primary CTA inside the Executive Decision Matrix table; Secondary CTA below the final summary verdict."
  },
  {
    contentType: "Cornerstone Hub Guide (`e.g., Pillar Hub`)",
    priorityActions: [
      "Supporting Cluster Spoke Navigation (`Categorized Cards`)",
      "Downloadable Reference Architecture Blueprint",
      "Quarterly Technical Newsletter Subscription"
    ],
    placementStrategy: "Spoke directory cards distributed after each major section overview; Newsletter subscription box fixed at bottom."
  }
];

// ==========================================
// 4. INTERNAL JOURNEY PATHWAYS REGISTRY
// ==========================================
export const internalJourneyPathwaysRegistry: InternalJourneyPathway[] = [
  {
    id: "PATH-01",
    pathwayName: "LLM Inference & Memory Kernel Optimization Journey",
    progressionSequence: [
      "Entry Article: What is PagedAttention in vLLM? (`INFORMATIONAL DEFINITION`)",
      "Fundamental Explainer: The Mathematics & Mechanics of LLM Key-Value Cache (`CONCEPTUAL DEPTH`)",
      "Deep-Dive Guide: FlashAttention v2 vs v3 Kernel Architecture (`COMPARATIVE ANALYSIS`)",
      "Implementation Guide: Deploying Chunked Prefill & PagedAttention with Python & CUDA (`ACTION PLAYBOOK`)",
      "Practical Tool: Interactive VRAM & GPU Cluster Sizing Calculator (`UTILITY ACTION`)"
    ],
    intentTransition: "INFORMATIONAL ➔ CONCEPTUAL MASTERY ➔ COMPARATIVE EVALUATION ➔ PRODUCTION IMPLEMENTATION ➔ TRANSACTIONAL CALCULATION",
    recommendationQualityRules: [
      "Never recommend a beginner definition article right after an advanced CUDA implementation guide (`Respect skill progression`).",
      "Ensure all recommended internal links share exact versioning compatibility (`vLLM v0.8+`).",
      "Anchor text must be descriptive (`e.g., 'Deploying Chunked Prefill in Python'`, never 'Click here')."
    ]
  },
  {
    id: "PATH-02",
    pathwayName: "Enterprise Agentic Orchestration & Security Journey",
    progressionSequence: [
      "Entry Article: Why Multi-Agent Systems Fail in Production (`PROBLEM AWARENESS`)",
      "Fundamental Explainer: Model Context Protocol (MCP) Architecture & Specifications (`TECHNICAL FOUNDATION`)",
      "Comparison Guide: LangGraph vs AutoGen vs CrewAI for Enterprise Workflows (`EVALUATION`)",
      "Implementation Guide: Building a Zero-Trust MCP Server with TypeScript & Sandbox Isolation (`PRODUCTION ACTION`)",
      "Enterprise Advisory: Custom Multi-Agent Security Audit & Architecture Review (`BUSINESS CONVERSION`)"
    ],
    intentTransition: "PROBLEM AWARENESS ➔ ARCHITECTURAL FOUNDATION ➔ TRADE-OFF EVALUATION ➔ ZERO-TRUST DEPLOYMENT ➔ ENTERPRISE ADVISORY",
    recommendationQualityRules: [
      "Always establish zero-trust security credibility before offering enterprise architecture reviews.",
      "Link directly to exact code sections (`#L10-L45`) when referencing implementation playbooks."
    ]
  }
];

// ==========================================
// 5. AUDIENCE SEGMENTATION & PROGRESSIVE DISCLOSURE MATRIX
// ==========================================
export const audienceSegmentsRegistry: AudienceSegment[] = [
  {
    id: "SEG-01",
    name: "Production AI Engineers & Developers",
    technicalRigor: "High (`Requires complete TypeScript/Python syntax, exact CLI commands, zero fluff`)",
    primaryGoal: "Copy runnable code, verify dependencies, and solve immediate deployment errors.",
    conversionHook: "Runnable Code Copy buttons, GitHub repository links, and benchmark reproduction scripts."
  },
  {
    id: "SEG-02",
    name: "Enterprise CTOs & Staff Architects",
    technicalRigor: "Strategic + Architectural (`Requires system diagrams, latency/VRAM unit economics, security boundaries`)",
    primaryGoal: "Evaluate trade-offs, scalability limits, compliance risks, and long-term tech stack viability.",
    conversionHook: "Downloadable Architecture Blueprints, comparison scorecards, and quarterly Briefings."
  },
  {
    id: "SEG-03",
    name: "AI Security Specialists & DevSecOps",
    technicalRigor: "Rigorous Security (`Requires sandboxing isolation proofs, memory leakage mitigation, MCP zero-trust checks`)",
    primaryGoal: "Verify whether an AI framework or orchestration layer introduces vulnerabilities or prompt injection risks.",
    conversionHook: "Zero-Trust Security checklists, PGP-encrypted communication, and compliance audit guides."
  },
  {
    id: "SEG-04",
    name: "Technical Leaders & Engineering VPs",
    technicalRigor: "High-level Engineering (`Requires team velocity impacts, maintenance overhead, vendor lock-in analysis`)",
    primaryGoal: "Make informed team adoption decisions and allocate engineering bandwidth effectively.",
    conversionHook: "Engineering Decision Matrices and Enterprise ROI Sizing Calculators."
  },
  {
    id: "SEG-05",
    name: "Academic & Industry Researchers",
    technicalRigor: "Deep Mathematical / Empirical (`Requires LaTeX proofs, benchmark methodology, peer-reviewed citations`)",
    primaryGoal: "Verify theoretical claims, reproduce benchmark metrics, and explore state-of-the-art literature.",
    conversionHook: "Direct arXiv paper links, benchmark datasets, and scientific experimentation logs."
  },
  {
    id: "SEG-06",
    name: "Startup Founders & Technical Co-Founders",
    technicalRigor: "Pragmatic + Rapid Prototyping (`Requires fast time-to-value, API cost calculations, MVP blueprints`)",
    primaryGoal: "Build scalable AI features rapidly without incurring devastating cloud compute bills.",
    conversionHook: "Interactive Token Cost Calculators and rapid starter templates."
  },
  {
    id: "SEG-07",
    name: "Computer Science Students & Junior Engineers",
    technicalRigor: "Educational + Clear Progression (`Requires terminology definitions, step-by-step visualizations`)",
    primaryGoal: "Master modern AI concepts from foundational principles up to advanced implementation.",
    conversionHook: "Structured Topic Hub bookmarks and beginner-to-advanced learning paths."
  },
  {
    id: "SEG-08",
    name: "General Technology & Industry Readers",
    technicalRigor: "Accessible Technical Summary (`Requires clear real-world impact, executive takeaways`)",
    primaryGoal: "Understand how major AI breakthroughs impact industry shifts without deep coding.",
    conversionHook: "Executive Summary takeaways and weekly high-level briefing newsletters."
  }
];

export const progressiveDisclosureLayers: ProgressiveDisclosureLayer[] = [
  {
    level: 1,
    layerName: "CORE ANSWER (`Above the Fold`)",
    targetAudience: "All Segments (`Immediate clarity & AI Search snippet capture`)",
    contentElements: [
      "H1 Title Tag with precise entity and utility hook",
      "Bolded 2-sentence direct definition answering 'What is X and why use it?'",
      "Executive Summary takeaways (`3 bullet points`)"
    ]
  },
  {
    level: 2,
    layerName: "ARCHITECTURAL EXPLANATION (`Conceptual Mechanics`)",
    targetAudience: "Architects, Technical Leaders, Students",
    contentElements: [
      "Custom SVG/Mermaid system diagram illustrating data flow",
      "Structured H2 headings explaining kernel interactions or protocol layers",
      "Clear terminology callout boxes"
    ]
  },
  {
    level: 3,
    layerName: "TECHNICAL & MATHEMATICAL DETAIL (`Deep-Dive`)",
    targetAudience: "Staff Engineers, Researchers, Security Specialists",
    contentElements: [
      "LaTeX formula equations with variable definitions",
      "Memory footprint and latency complexity analysis (`O(N) vs O(N^2)`)",
      "Security boundary and thread isolation proofs"
    ]
  },
  {
    level: 4,
    layerName: "ADVANCED EDGE CASES & TRADE-OFFS (`Evaluation`)",
    targetAudience: "Senior Engineers, CTOs, Tech Leads",
    contentElements: [
      "Empirical benchmark comparison scorecards",
      "Pros/Cons and Edge-case failure modes (`When does this approach break?`)",
      "Hardware requirements and GPU architecture bottlenecks"
    ]
  },
  {
    level: 5,
    layerName: "RUNNABLE PRODUCTION IMPLEMENTATION (`Action`)",
    targetAudience: "Production AI Engineers & Developers",
    contentElements: [
      "Complete, copyable TypeScript / Python code block (`No pseudocode`)",
      "Explicit dependencies (`requirements.txt`) and CLI start commands",
      "Verification testing script and expected terminal output"
    ]
  }
];

// ==========================================
// 6. CONVERSION FRICTION & MOBILE CRO AUDIT REGISTRY
// ==========================================
export const conversionFrictionAuditRegistry: FrictionAuditItem[] = [
  {
    id: "CRO-01",
    category: "Form Friction & Cognitive Load",
    frictionItem: "Excessive input fields on newsletter or inquiry forms (`e.g., asking for Company Revenue, Phone Number, or Address`).",
    auditMethod: "Inspect all `<form>` elements across site archetypes.",
    remediationMandate: "Enforce strict minimal field rules: Newsletter requires ONLY `Email` (and optional topic checkboxes); Enterprise Advisory requires ONLY `Name, Work Email, Subject, Message`."
  },
  {
    id: "CRO-02",
    category: "CTA Clarity & Copywriting",
    frictionItem: "Vague button text (`Submit, Click Here, Learn More, Send`) that creates uncertainty about the next action.",
    auditMethod: "Scan all `<button>` and `<a className='btn'>` text via DOM query.",
    remediationMandate: "Replace all vague copy with contextually descriptive action hooks using `ctaCopywritingTransformations`."
  },
  {
    id: "CRO-03",
    category: "Mobile Touch Target Accessibility",
    frictionItem: "Buttons or interactive code copy icons smaller than 44x44px, causing accidental taps or frustrating misses on phones.",
    auditMethod: "Measure computed CSS heights/widths and padding on touch devices (`Lighthouse Accessibility audit`).",
    remediationMandate: "Enforce `min-h-[44px] min-w-[44px]` and minimum `gap-3` between adjacent interactive elements."
  },
  {
    id: "CRO-04",
    category: "Horizontal Overflow & Code Blocks",
    frictionItem: "Long code blocks or wide markdown tables causing entire mobile page to scroll horizontally (`Broken viewport experience`).",
    auditMethod: "Test viewport widths at 320px, 375px, and 414px for `overflow-x: scroll` leaking to root `<body>`.",
    remediationMandate: "Wrap all code blocks (`<pre>`) and `<table>` containers inside isolated `overflow-x-auto max-w-full rounded-xl` scrollable wrappers."
  },
  {
    id: "CRO-05",
    category: "Intrusive Conversion Interruption",
    frictionItem: "Full-screen modal overlays, exit-intent popups, or sticky top banners that block content before trust is established.",
    auditMethod: "Verify scroll percentage and time-on-page triggers for any modal dialogue.",
    remediationMandate: "Banish all immediate modals. Newsletter or conversion hooks may only appear AFTER the user scrolls past 50% of the content (`UNDERSTANDING stage achieved`)."
  },
  {
    id: "CRO-06",
    category: "Page Load Speed & Layout Shift (`CWV`)",
    frictionItem: "Slow hydration or Cumulative Layout Shift (`CLS > 0.1`) causing users to mis-click buttons as content shifts.",
    auditMethod: "Run WebPageTest and Core Web Vitals diagnostics across mobile 4G throttled profiles.",
    remediationMandate: "Pre-allocate exact dimensions (`aspect-ratio`) for diagrams and code blocks; maintain `LCP < 2.5s` and `CLS < 0.05`."
  },
  {
    id: "CRO-07",
    category: "Unexpected Redirects & Broken Flows",
    frictionItem: "Clicking a tool calculator or code playbook link redirects through intermediary trackers or drops URL context.",
    auditMethod: "Verify HTTP status codes and navigation loops across all primary/secondary CTA links.",
    remediationMandate: "Enforce direct 200 HTTP navigation (`No redirect chains`); open external references in `_blank` with `rel='noopener noreferrer'` while keeping internal journeys same-tab."
  },
  {
    id: "CRO-08",
    category: "Trust Signal Deficit Before Conversion",
    frictionItem: "Asking users to download an enterprise blueprint or submit an inquiry without displaying institutional trust indicators.",
    auditMethod: "Inspect surrounding visual hierarchy above and below every primary CTA container.",
    remediationMandate: "Every primary conversion container must display surrounding E-E-A-T micro-trust signals (`Verified by TechlumeAI Engineering, Zero Spam Guarantee, Instant Access`)."
  },
  {
    id: "CRO-09",
    category: "Deceptive Design & Dark Patterns",
    frictionItem: "Pre-checked newsletter boxes, hidden opt-out links, or tricking users into subscribing when copying code.",
    auditMethod: "Legal, ethical, and editorial governance inspection (`ECGIS v2.0 verification`).",
    remediationMandate: "Zero tolerance for dark patterns. All subscriptions must be explicit, opt-in (`unchecked by default`), with 1-click unsubscribe headers."
  },
  {
    id: "CRO-10",
    category: "Value Proposition Transparency",
    frictionItem: "Unclear explanation of what happens after submitting a contact form (`Will a salesperson spam me, or an architect reply?`).",
    auditMethod: "Review form header and sub-copy text.",
    remediationMandate: "Explicit SLA and next-step transparency: `'An Enterprise Staff Architect will review your technical requirements and respond via email within 24 hours. No automated sales cadence.'`"
  }
];

export const mobileConversionMandates: string[] = [
  "All buttons and CTAs must be touch-friendly (`≥ 44x44px touch targets`).",
  "Forms must use proper HTML5 input types (`type='email'`, `inputmode='text'`) to trigger optimal mobile keyboards.",
  "Code blocks and tables must scroll horizontally independently (`overflow-x-auto`) without shifting the page body.",
  "Sticky bottom newsletter bars must be easily dismissible with a prominent 44x44px 'X' close button.",
  "Typography contrast must exceed WCAG AA standards (`≥ 4.5:1 ratio`) for outdoor mobile readability."
];

// ==========================================
// 7. EXPERIMENTATION SYSTEM & MONETIZATION GOVERNANCE
// ==========================================
export const experimentationLoopSteps: ExperimentationLoopStep[] = [
  {
    step: 1,
    phase: "HYPOTHESIS DEFINITION",
    requirement: "Formulate a clear, falsifiable scientific hypothesis: `'If we change [VARIABLE] for [AUDIENCE] on [PAGE ARCHETYPE], we expect [BEHAVIOR CHANGE] because [PSYCHOLOGICAL/TECHNICAL RATIONALE].'`",
    documentationStandard: "Must be logged in `seoExperimentationLedger` inside `EMIS-EQL v2.0` before deploying code changes."
  },
  {
    step: 2,
    phase: "ISOLATED CHANGE DEPLOYMENT",
    requirement: "Modify exactly ONE independent variable (`e.g., changing only the primary CTA button text, NOT text + layout + color simultaneously`).",
    documentationStandard: "Git commit diff tagged with experiment ID (`e.g., [EXP-2026-03] isolate CTA hook copy`)."
  },
  {
    step: 3,
    phase: "TARGET AUDIENCE SEGMENTATION",
    requirement: "Define the exact traffic cohort (`e.g., organic search visitors arriving on PagedAttention article on desktop vs mobile`).",
    documentationStandard: "GA4 / Cloudflare segment filter configuration parameters."
  },
  {
    step: 4,
    phase: "EXPECTED BEHAVIOR & SUCCESS METRIC",
    requirement: "Select the primary and guardrail metrics (`e.g., Primary: Code copy event rate increases from 15% to 22%; Guardrail: Dwell time must not drop below 3m 30s`).",
    documentationStandard: "Quantified pre-test baseline values recorded alongside target benchmarks."
  },
  {
    step: 5,
    phase: "CONTROLLED TEST PERIOD",
    requirement: "Run the experiment across a statistically valid observation window (`Minimum 14 full days or 2,500 unique sessions per variation`).",
    documentationStandard: "Exact start and end timestamps locked in UTC."
  },
  {
    step: 6,
    phase: "STATISTICAL ANALYSIS & RESULT",
    requirement: "Evaluate whether the delta achieved 95% statistical significance (`p < 0.05`) without harming guardrail vitals.",
    documentationStandard: "Final empirical report summarizing observed delta and behavioral interpretation."
  },
  {
    step: 7,
    phase: "INSTITUTIONAL DECISION & LEDGER ENTRY",
    requirement: "Formal action signoff: `APPLY TO ENTIRE ARCHETYPE`, `REVERT & REVISE HYPOTHESIS`, or `EXTEND OBSERVATION WINDOW`.",
    documentationStandard: "Update permanent institutional manual and institutional scorecard."
  }
];

export const monetizationGovernanceRules: MonetizationGovernanceRule[] = [
  {
    ruleId: "MON-01",
    title: "ABSOLUTE EDITORIAL INDEPENDENCE",
    policy: "No commercial partner, sponsor, advertiser, or affiliate program may ever dictate, modify, censor, or influence technical scorecards, benchmarks, or trade-off conclusions.",
    auditMechanism: "Monthly editorial review by Chief Editorial Officer and Fact-Checking Director (`ECGIS v2.0 verification`)."
  },
  {
    ruleId: "MON-02",
    title: "MANDATORY & UNMISTAKABLE DISCLOSURE",
    policy: "Any page containing affiliate links, sponsored cloud credits, or paid vendor partnerships must display an unmistakable, bolded disclosure banner right below the H1 title tag BEFORE the user reads the content.",
    auditMechanism: "Automated DOM linting requiring `<aside data-role='commercial-disclosure'>` whenever tracking tokens (`?aff=`, `?utm_sponsor=`) exist."
  },
  {
    ruleId: "MON-03",
    title: "ZERO PAYWALLED CORE EDUCATION",
    policy: "All foundational technical articles, cornerstone explainers, and code playbooks must remain 100% free and open-access. Monetization is restricted to advanced enterprise consulting, custom architecture reviews, and optional executive briefings.",
    auditMechanism: "Automated crawler verification confirming zero content blockers on `/articles/` and `/guides/`."
  },
  {
    ruleId: "MON-04",
    title: "PROHIBITION OF DECEPTIVE AFFILIATE ROUTING",
    policy: "Affiliate links must never be masked as direct documentation links. External tool links must point clearly to official vendor domains with standard `rel='sponsored noopener noreferrer'` tags.",
    auditMechanism: "Annual link audit across all `attributionAndInternalLinkModels`."
  }
];

export const userFeedbackSystemSchema: UserFeedbackSchemaItem[] = [
  {
    id: "FB-01",
    prompt: "Was this technical guide and code playbook useful for your current engineering task?",
    placement: "Interactive Yes/No thumbs widget placed immediately after the runnable implementation code block.",
    routingAction: "If 'Yes': Prompt user with option to subscribe to weekly engineering benchmarks. If 'No': Expand inline text box: 'What technical detail or SDK version was missing?'"
  },
  {
    id: "FB-02",
    prompt: "Did you encounter any syntax errors, outdated API flags, or missing dependencies in this code snippet?",
    placement: "Inline report button (`Report Code Issue`) next to every code block copy icon.",
    routingAction: "Opens a lightweight modal submitting directly to `CCMS-EQL v2.0` maintenance queue with page URL, code snippet ID, and user comment."
  },
  {
    id: "FB-03",
    prompt: "What advanced engineering topic or framework comparison should TechlumeAI benchmark next?",
    placement: "Footer poll widget inside Category Pillar pages and Cornerstone Hubs.",
    routingAction: "Aggregates data directly into the `contentGapIntelligenceMatrix` for editorial prioritization (`ICE-SV formula`)."
  }
];

// ==========================================
// 8. BUSINESS VALUE MODEL & JOURNEY ANALYTICS MATRIX
// ==========================================
export const businessValueFunnelStages: BusinessValueFunnelStage[] = [
  {
    stageNumber: 1,
    stageName: "VISIBILITY & DISCOVERY",
    metric: "SERP Impressions & AI Search Citations (`> 1,800,000 / mo`)",
    indirectValueContribution: "Establishes top-of-funnel brand awareness and cements TechlumeAI as the default technical authority across LLM engines."
  },
  {
    stageNumber: 2,
    stageName: "TRAFFIC & ATTRACTING VISITS",
    metric: "Organic Search & Direct Clicks (`> 140,000 / mo`)",
    indirectValueContribution: "Provides continuous high-intent engineering traffic arriving with immediate problem-solving needs."
  },
  {
    stageNumber: 3,
    stageName: "AUDIENCE QUALITY & SEGMENTATION",
    metric: "Senior Engineer & Decision-Maker Cohort Ratio (`> 65% verified via roles`)",
    indirectValueContribution: "Ensures we are speaking to practitioners who influence enterprise cloud and AI budget allocations (`Not low-value bounces`)."
  },
  {
    stageNumber: 4,
    stageName: "ENGAGEMENT & TECHNICAL UTILITY",
    metric: "Active Dwell Time (`> 3m 45s`) & Code Copy Events (`> 18,000 / mo`)",
    indirectValueContribution: "Proves that users are actively running our code and relying on our engineering models in real-world production environments."
  },
  {
    stageNumber: 5,
    stageName: "TRUST & RETURN BEHAVIOR",
    metric: "30-Day Returning User Retention Rate (`> 34%`)",
    indirectValueContribution: "Transforms one-off searchers into a loyal, recurring institutional readership that bypasses Google to visit directly."
  },
  {
    stageNumber: 6,
    stageName: "DIRECT CONVERSION & RETENTION",
    metric: "Newsletter Subscriptions (`> 1.8% CR`) & Tool Configurations",
    indirectValueContribution: "Creates a direct, zero-platform-risk communication channel with thousands of senior AI architects."
  },
  {
    stageNumber: 7,
    stageName: "AUTHORITY & BACKLINK COMPOUNDING",
    metric: "Earned Tier-1 External Backlinks (`> 35 / mo`) & Academic Citations",
    indirectValueContribution: "Elevates our Domain Rating (`DR`), making every future article rank faster and higher across all search engines."
  },
  {
    stageNumber: 8,
    stageName: "LONG-TERM BUSINESS & ENTERPRISE VALUE",
    metric: "Enterprise Advisory Inquiries, Strategic Partnerships, & 3-Year LTV (`> 45x ROI`)",
    indirectValueContribution: "Generates high-value, defensible revenue and strategic industry influence grounded entirely in verified technical trust."
  }
];

export const journeyAnalyticsTrackingPoints: JourneyAnalyticsTrackingPoint[] = [
  {
    eventName: "journey_stage_entry",
    triggerCondition: "Fires upon initial pageview, categorizing the session into STAGE-01 through STAGE-06 based on referral channel and page archetype.",
    dataLayerPayload: ["stage_id", "stage_name", "entry_channel", "page_archetype", "content_slug"]
  },
  {
    eventName: "code_snippet_copy",
    triggerCondition: "Fires when user clicks the copy button or copies text inside a `<pre>` code block (`ACTION stage indicator`).",
    dataLayerPayload: ["code_block_id", "language", "sdk_version", "page_slug", "user_segment_tier"]
  },
  {
    eventName: "internal_cluster_traversal",
    triggerCondition: "Fires when user clicks any primary/secondary recommended link leading to another article inside the same topic cluster (`EXPLORATION stage`).",
    dataLayerPayload: ["source_slug", "target_slug", "cluster_id", "cta_placement_type", "cta_copy_hook"]
  },
  {
    eventName: "calculator_utility_execution",
    triggerCondition: "Fires when user modifies parameters on an interactive tool/calculator and computes a real-time result.",
    dataLayerPayload: ["tool_id", "input_parameters_hash", "output_vram_gb", "page_slug"]
  },
  {
    eventName: "newsletter_subscription_conversion",
    triggerCondition: "Fires upon confirmed HTTP 200 form submission for weekly briefing subscription (`CONVERSION stage`).",
    dataLayerPayload: ["subscriber_tier", "opted_in_topics", "page_archetype", "conversion_placement", "attribution_path"]
  },
  {
    eventName: "user_feedback_submission",
    triggerCondition: "Fires when user clicks Yes/No utility widget or submits a code issue report.",
    dataLayerPayload: ["feedback_id", "rating_value", "reported_issue_type", "page_slug"]
  }
];

// ==========================================
// 9. MANDATORY 12-POINT EUJG-CRO COMPLETION GATE
// ==========================================
export const mandatoryUserJourneyAndCroGateChecklist: GateChecklistItem[] = [
  {
    id: "EUJG-CRO-01",
    category: "Page Purpose Definition (`7 Archetypes`)",
    item: "Verify that every page is explicitly assigned exactly ONE primary purpose archetype (`Article, Cornerstone Hub, Comparison, Tool, Category, About, Contact`) with matching layout elements.",
    verificationStandard: "Zero pages with mixed or ambiguous archetypes; every page follows required layout structures."
  },
  {
    id: "EUJG-CRO-02",
    category: "User Journey Stage Mapping (`6 Stages`)",
    item: "Verify that the page actively supports its target stage (`Discovery, Understanding, Exploration, Evaluation, Action, Return`) and clearly bridges the user to the recommended next step.",
    verificationStandard: "Zero dead-end pages; every article contains logical progression pathways to next cluster assets."
  },
  {
    id: "EUJG-CRO-03",
    category: "CTA Hierarchy & Copywriting (`Primary, Secondary, Tertiary`)",
    item: "Verify that all CTAs answer: `WHY take action? WHAT value is received? WHAT happens next?` Eliminate all vague anti-patterns (`Click Here, Learn More, Submit`) using contextually descriptive hooks.",
    verificationStandard: "DOM inspection confirms zero vague buttons; strict visual hierarchy prevents competing CTAs."
  },
  {
    id: "EUJG-CRO-04",
    category: "Editorial CTA System Alignment",
    item: "Verify that informational explainers prioritize related deep-dives and tools, comparison guides prioritize implementation playbooks, and cornerstone hubs prioritize cluster spoke cards.",
    verificationStandard: "CTA placement strategy perfectly matches `editorialCtaMatrix` rules."
  },
  {
    id: "EUJG-CRO-05",
    category: "Internal Journey Architecture (`6-Step Sequence`)",
    item: "Verify that internal links guide users through our 6-step logical sequence: `Entry -> Explainer -> Deep-Dive -> Implementation -> Comparison -> Practical Action`.",
    verificationStandard: "Internal links are 100% topically relevant, level-appropriate, and anchored with descriptive technical hooks."
  },
  {
    id: "EUJG-CRO-06",
    category: "Audience Segmentation & Progressive Disclosure (`5 Layers`)",
    item: "Verify that every major guide presents information progressively (`Above-Fold Core Answer -> Architecture -> Math Detail -> Edge Cases -> Runnable Code`) so both beginners and CTOs gain value.",
    verificationStandard: "All 5 progressive disclosure layers present; zero beginner-only or expert-only silos."
  },
  {
    id: "EUJG-CRO-07",
    category: "Reading Experience & Scannability",
    item: "Verify optimal scannability: clear H2/H3 hierarchy, short paragraphs (`≤ 4 lines`), custom SVG diagrams, side-by-side markdown tables, and zero artificial filler text.",
    verificationStandard: "Content length matches depth requirement; zero padding merely to hit word counts."
  },
  {
    id: "EUJG-CRO-08",
    category: "Trust Before Conversion & E-E-A-T Enforcement",
    item: "Verify that E-E-A-T micro-trust signals (`Verified authorship, date modified, exact SDK version, research citations`) are established before asking users to subscribe or submit forms.",
    verificationStandard: "Zero intrusive modals above the fold; all primary conversion containers surrounded by trust badges."
  },
  {
    id: "EUJG-CRO-09",
    category: "Conversion Friction & Mobile CRO Audit (`10-Point Checklist`)",
    item: "Verify complete elimination of conversion friction: all touch targets `≥ 44x44px`, horizontal scroll wrapped on code/tables, fast hydration (`LCP < 2.5s`), zero unexpected redirects, and minimal form fields.",
    verificationStandard: "100% compliance across `conversionFrictionAuditRegistry` and mobile responsive tests."
  },
  {
    id: "EUJG-CRO-10",
    category: "Experimentation System & Monetization Governance (`7-Step Loop`)",
    item: "Verify that every conversion change follows our 7-step scientific experimentation loop, and that monetization policies strictly maintain absolute editorial independence (`Zero paywalled core explainers`).",
    verificationStandard: "All tests logged in `seoExperimentationLedger`; 100% editorial separation verified."
  },
  {
    id: "EUJG-CRO-11",
    category: "User Feedback System & Analytics Tracking (`6 Events`)",
    item: "Verify deployment of inline utility feedback widgets (`Was this useful? Report Code Issue`) and complete dataLayer tracking for stage entry, code copies, link traversals, and conversions.",
    verificationStandard: "All 6 tracking points verified in `journeyAnalyticsTrackingPoints` and flowing to GA4/BigQuery."
  },
  {
    id: "EUJG-CRO-12",
    category: "Business Value Model & Long-Term LTV Mapping (`8-Stage Funnel`)",
    item: "Verify that the page's role in driving compounding business value (`Visibility -> Traffic -> Quality -> Engagement -> Trust -> Conversion -> Authority -> 45x ROI`) is measured and reported across dashboards.",
    verificationStandard: "Mandatory signoff certified across all 12 `EUJG-CRO v1.0` gate items."
  }
];
