export interface VvpPhilosophy {
  id: string;
  name: string;
  formula: string;
  philosophy: string;
  executionMandate: string;
}

export const vvpCorePhilosophy: VvpPhilosophy[] = [
  {
    id: "VVP-01",
    name: "The Complete Lifecycle Production Standard",
    formula: "RESEARCH -> OUTLINE -> CONTENT -> VISUALS -> SEO -> GEO -> INTERNAL LINKING -> IMPLEMENTATION -> LIVE VERIFICATION -> QUALITY APPROVAL -> PUBLISH",
    philosophy: "A content article is not complete when the text is generated. It is complete only when every phase of research, structural outlining, custom SVG visual engineering, SEO/GEO verification, responsive cross-device testing, and live forensic inspection is successfully completed.",
    executionMandate: "Never declare an article finished simply because the text exists. Enforce our 12-stage iterative loop: RESEARCH -> ANALYZE -> OUTLINE -> WRITE -> DESIGN -> IMPLEMENT -> AUDIT -> SCREENSHOT -> VERIFY -> FIX -> RE-VERIFY -> PUBLISH."
  },
  {
    id: "VVP-02",
    name: "Live Page Forensics & Screenshot Evidence",
    formula: "LIVE URL INSPECTION + 8-VIEWPORT SCREENSHOT MATRIX + 17-DEFECT FORENSIC REMEDIATION",
    philosophy: "We never rely solely on source code inspection, local IDE previews, or CMS editor views. We must open the actual live published URL, crawl from top to footer, capture screenshots across desktop, tablet, and mobile viewports, and eliminate every visual defect before declaring sign-off.",
    executionMandate: "For every published article, execute our 15-stage full page crawl and capture our 8 mandatory screenshot views (`Desktop Top/Middle/Lower, Mobile Top/Content/Tables/Images, Footer`) to prove visual perfection."
  }
];

export interface ProductionPhaseSpecification {
  phaseNumber: string;
  phaseName: string;
  objective: string;
  keyCheckpoints: string[];
}

export const productionPhasesRegistry: ProductionPhaseSpecification[] = [
  {
    phaseNumber: "PHASE 1",
    phaseName: "Topic Validation & Pillar Alignment",
    objective: "Determine why the topic matters now, who is searching for it, what problem it solves, and whether it aligns with TechlumeAI's core authority pillars.",
    keyCheckpoints: [
      "Confirm primary and secondary search intent (`Informational, Comparative, Architectural, Implementation`).",
      "Verify topic aligns directly with a core editorial pillar (`AI Engineering, Enterprise AI, Security, Infrastructure`).",
      "Confirm there is sufficient reliable primary documentation and academic evidence before assigning resources."
    ]
  },
  {
    phaseNumber: "PHASE 2",
    phaseName: "Primary Research & Evidence Verification",
    objective: "Research rigorously from primary ground-truth sources and rigorously distinguish between FACT -> EVIDENCE -> ANALYSIS -> OPINION.",
    keyCheckpoints: [
      "Consult Official Vendor Docs (`Hugging Face, AWS, PyTorch, LangChain`), Academic Preprints (`ArXiv`), and Standards (`NIST/OWASP`).",
      "Verify all technical claims, dates, version numbers, API signatures, pricing tiers, and empirical benchmarks directly against primary documentation.",
      "Strictly separate objective fact from editorial analysis (`never present opinion as fact`)."
    ]
  },
  {
    phaseNumber: "PHASE 3",
    phaseName: "Competitor Analysis & Right-to-Win Diagnosis",
    objective: "Analyze ranking competitors (`Positions #1 to #3`) across 12 dimensions to uncover structural gaps and establish our unique right-to-win.",
    keyCheckpoints: [
      "Evaluate competitor topic coverage, structure, technical depth, entities, visuals, comparison tables, and code blocks.",
      "Identify exactly what competitors do well, what they miss (`e.g., edge cases, VRAM profiling`), and what they explain poorly.",
      "Document our specific differentiation mandate (`e.g., copyable Docker YAML + custom Figma SVG data flows`)."
    ]
  },
  {
    phaseNumber: "PHASE 4",
    phaseName: "Semantic Outline & Information Journey",
    objective: "Create a comprehensive structural blueprint reflecting the reader's complete technical progression before writing a single word of body text.",
    keyCheckpoints: [
      "Map H1, introduction, table of contents, main sections, subsections, comparisons, code playbooks, data tables, and FAQ section.",
      "Ensure progression flows naturally: Context -> Definition -> How It Works -> Architecture -> Code -> Comparisons -> Gotchas -> Future -> FAQ."
    ]
  },
  {
    phaseNumber: "PHASE 5",
    phaseName: "Table of Contents Navigation System",
    objective: "Construct a scannable, functional Table of Contents that serves as an active navigation anchor across desktop and mobile viewports.",
    keyCheckpoints: [
      "Verify TOC reflects actual exact heading text and logical hierarchy (`H2/H3`).",
      "Test all jump links on desktop and mobile (`zero broken anchors, zero overflow, sticky sidebar compliance`)."
    ]
  },
  {
    phaseNumber: "PHASE 6",
    phaseName: "Introduction & Immediate Relevance Capture",
    objective: "Hook the engineering reader within the first 2-3 sentences by immediately explaining WHAT is happening, WHY it matters, WHO cares, and WHAT will be explained.",
    keyCheckpoints: [
      "Start with a real production problem, a major architectural shift, or a verified benchmark breakthrough (`ban generic openings`).",
      "Inject a bolded 2-sentence direct answer summary right below the H1 heading (`Zero-Click AI/Human Answer Capture`)."
    ]
  },
  {
    phaseNumber: "PHASE 7",
    phaseName: "Content Depth & Technical Writing Precision",
    objective: "Write with active voice, precise engineering terminology, and zero filler. Every paragraph must contribute unique, actionable knowledge.",
    keyCheckpoints: [
      "Eliminate empty paragraphs, repetitive transitions, keyword stuffing, and unsupported claims.",
      "Verify all statistical data points specify primary source, publication date, and exact methodology (`explain why the number matters`)."
    ]
  }
];

export const visualEditorialOpportunities = [
  { assetType: "1. Hero Illustration (`1200x630px Banner`)", description: "Topic-specific visual establishing the article identity (`must balance composition, avoid cropped text/subjects, and work across desktop and mobile widths`)." },
  { assetType: "2. Technical System Architecture Diagrams (`Figma SVG`)", description: "Detailed component layout showing data packet flow, memory boundaries, and API interfaces (`zero generic stock imagery`)." },
  { assetType: "3. Sequence & Process Flowcharts", description: "Step-by-step logic diagrams illustrating multi-agent execution loops or RAG retrieval phases." },
  { assetType: "4. Side-by-Side Comparison Feature Matrices", description: "Objective markdown tables comparing Latency, VRAM footprint, Complexity, and Cost across Option A vs Option B." },
  { assetType: "5. Empirical Benchmark Data Charts", description: "Quantitative bar or line charts showing throughput scaling or token efficiency gains." },
  { assetType: "6. Verified Production Code Playbooks", description: "Runnable, syntax-highlighted code blocks (`TypeScript/Python`) with `requirements.txt` manifests and inline explanatory comments." },
  { assetType: "7. CLI Execution & Terminal Logs", description: "Real terminal output snapshots proving successful installation, compilation, or error stack trace resolution." },
  { assetType: "8. Decision Tree & Selection Frameworks", description: "Interactive or visual decision logic guiding systems architects on when to choose specific tools or protocols." }
];

export const imageTechnicalQaChecklist = [
  { id: "IMG-QA-01", check: "Image Asset Loading", verification: "Verify image loads instantly with HTTP 200 (`zero broken image icons or 404 errors`)." },
  { id: "IMG-QA-02", check: "File Source & Format Integrity", verification: "Verify modern Next-Gen formats (`WebP/AVIF/SVG`) served from correct relative or absolute artifact path." },
  { id: "IMG-QA-03", check: "Exact Dimensions & Aspect Ratio", verification: "Verify explicit `width` and `height` attributes to prevent Cumulative Layout Shift (`CLS < 0.1`). Hero must be `1200x630px` aspect ratio." },
  { id: "IMG-QA-04", check: "Composition & Cropping Audit", verification: "Verify zero awkward empty space, zero accidental text clipping, and zero subjects cropped at mobile breakpoints." },
  { id: "IMG-QA-05", check: "Responsive Viewport Behavior", verification: "Verify image scales smoothly across Desktop (`1280px+`), Tablet (`768px`), and Mobile (`375px`) viewports without overflow." },
  { id: "IMG-QA-06", check: "Descriptive Natural ALT Text", verification: "Verify ALT text explains `WHAT THE IMAGE SHOWS + WHY IT IS RELEVANT` (`ban keyword stuffing or generic 'AI image' labels`)." },
  { id: "IMG-QA-07", check: "Loading & Priority Strategy", verification: "Verify above-the-fold Hero image uses `priority loading='eager'` while below-the-fold diagrams use `loading='lazy'`." },
  { id: "IMG-QA-08", check: "High-Fidelity Visual Quality", verification: "Verify crisp resolution (`zero pixelation, compression artifacts, or blurry typography inside SVG/PNG diagrams`)." },
  { id: "IMG-QA-09", check: "Brand Design Consistency", verification: "Verify colors, typography, and iconography match TechlumeAI's curated dark-mode glassmorphism aesthetic." },
  { id: "IMG-QA-10", check: "Zero Stock Photo & AI-Art Slop", verification: "Verify image looks intentionally engineered by professional editorial designers (`strictly ban generic AI-art hands/robots`)." },
  { id: "IMG-QA-11", check: "Live DOM Rendering Forensics", verification: "Verify image rendering directly on the live published DOM (`never assume local preview equals live production`)." }
];

export const altTextGovernance = {
  formula: "ALT TEXT = WHAT THE IMAGE SHOWS + WHY IT IS RELEVANT (`Natural Descriptive Language`)",
  badExample: "BAD ALT: 'AI technology image artificial intelligence machine learning vllm server.' (`Keyword stuffing, zero descriptive utility`).",
  goodExample: "GOOD ALT: 'System architecture diagram showing how vLLM PagedAttention partitions Key-Value cache memory into non-contiguous virtual blocks across multi-GPU CUDA nodes.' (`Crystal clear, highly accessible, perfectly optimized for human readers and AI crawlers`)."
};

export const seoGeoEeatQualityControls = {
  seoChecks: [
    "Primary keyword integration (`H1, title tag, URL slug, intro paragraph, meta description`) without keyword stuffing.",
    "Exact search intent alignment (`Informational vs Comparative vs Technical Implementation`).",
    "Heading hierarchy (`H1 -> H2 -> H3 -> H4`) with zero skipped levels (`e.g., never jump H2 -> H4`).",
    "Internal links (`3-5 contextual links to parent pillar, related guides, and glossary terms with descriptive anchor text`).",
    "External authoritative sources (`ArXiv, official vendor docs, NIST standards`) linking out to high domain authority references.",
    "JSON-LD Structured Data (`TechArticle, FAQPage, BreadcrumbList`) matching visible page headings and content 1-to-1.",
    "Canonical URL, Open Graph social preview image (`1200x630px`), and indexability tags (`index, follow`)."
  ],
  geoChecks: [
    "Precise zero-fluff definitions right under H1/H2 (`Answer-First hierarchy for direct AI extraction`).",
    "Entity clarity (`8 attributes explicit: Name, Type, Mechanism, Creator, Use Cases, Limitations, Alternatives`).",
    "Self-contained vector chunking (`paragraphs preserve full entity context without ambiguous pronoun dependencies`).",
    "Temporal freshness signals (`exact publication date, verified audit date, tested software versions`).",
    "Transparent disclosure of architectural gotchas and failure modes (`builds algorithmic trust`)."
  ],
  eeatChecks: [
    "Experience: Demonstrates hands-on deployment insights (`e.g., CUDA driver gotchas, memory profiling logs`).",
    "Expertise: Signed by verified institutional authors (`Maya Hart, Ethan Cho, Nora Klein`) with credentialed engineering bios.",
    "Authoritativeness: Supported by Tier-1 primary documentation and ArXiv academic preprints.",
    "Trustworthiness: Honest disclosure of trade-offs, limitations, and uncertainties (`zero promotional hype`)."
  ]
};

export const livePageVerificationSequence = [
  { stage: "1. TOP NAVIGATION & HEADER", action: "Verify sticky navigation bar, brand logo, search modal, and breadcrumb cluster path." },
  { stage: "2. HERO SECTION & METADATA", action: "Verify H1 title, author bio badge, exact publication date, audited verification date, and 1200x630px hero image." },
  { stage: "3. INTRODUCTION & DIRECT ANSWER BOX", action: "Verify immediate relevance hook and bolded 2-sentence direct answer summary right below H1." },
  { stage: "4. TABLE OF CONTENTS (`TOC`)", action: "Verify sticky sidebar TOC jump links work smoothly without broken anchors or overlapping text." },
  { stage: "5. EVERY MAIN SECTION (`H2`)", action: "Inspect every H2 section for structural clarity, self-contained paragraphs, and natural heading hierarchy." },
  { stage: "6. EVERY SUBSECTION (`H3/H4`)", action: "Inspect all H3/H4 technical drill-downs for depth, precise terminology, and zero filler content." },
  { stage: "7. COMPARISON & DATA TABLES", action: "Verify all markdown comparison matrices render with clean borders, readable typography, and zero horizontal overflow on mobile." },
  { stage: "8. CUSTOM DIAGRAMS & IMAGES", action: "Verify every SVG/PNG diagram loads instantly, maintains exact cropping, and displays natural descriptive ALT text." },
  { stage: "9. CODE PLAYBOOKS & TERMINAL LOGS", action: "Verify syntax highlighting, language badge (`TypeScript/Python`), copy-to-clipboard button, and error-free code syntax." },
  { stage: "10. INTERNAL LINK EQUITY", action: "Click every internal link (`pillar hubs, glossary definitions, related articles`) to ensure HTTP 200 destination." },
  { stage: "11. EXTERNAL AUTHORITATIVE SOURCES", action: "Verify all external links point to official vendor docs, ArXiv preprints, or NIST/OWASP standards without dead links." },
  { stage: "12. FAQ SECTION (`PAA QUESTIONS`)", action: "Verify accordion toggles or FAQ headings expand/collapse cleanly and map 1-to-1 with JSON-LD FAQPage schema." },
  { stage: "13. CONCLUSION & ROADMAP", action: "Verify definitive engineering synthesis, decision checklist, and 2026/2027 future evolution outlook." },
  { stage: "14. AUTHOR CREDENTIAL BOX & FOOTER", action: "Verify full author biography card, social handles, disclosure policies, and site footer navigation." },
  { stage: "15. RESPONSIVE VIEWPORT STRESS TEST", action: "Resize browser across Desktop (`1440px`), Tablet (`768px`), and Mobile (`375px`) to confirm zero overflow or overlapping elements." }
];

export const screenshotVerificationMatrix = [
  { captureId: "SHOT-01", viewport: "Desktop (`1440px`)", section: "Top Section (`Navigation, Hero Image, H1 Title, Metadata Banner`)", purpose: "Verify visual hierarchy, hero cropping, and metadata alignment." },
  { captureId: "SHOT-02", viewport: "Desktop (`1440px`)", section: "Middle Sections (`Table of Contents Sidebar + H2/H3 Body Content`)", purpose: "Verify sticky sidebar stability, paragraph typography, and line spacing." },
  { captureId: "SHOT-03", viewport: "Desktop (`1440px`)", section: "Lower Sections (`Comparison Tables, Code Blocks, Custom SVG Diagrams`)", purpose: "Verify table borders, syntax highlighting, and SVG crispness." },
  { captureId: "SHOT-04", viewport: "Mobile (`375px`)", section: "Mobile Top Section (`Collapsed Navigation, Stacked Hero, H1 Title`)", purpose: "Verify mobile typography sizing, hero aspect ratio, and zero text overlap." },
  { captureId: "SHOT-05", viewport: "Mobile (`375px`)", section: "Mobile Body Content & TOC Drawer", purpose: "Verify readable font size (`16px+ body`), line-height, and collapsible TOC navigation." },
  { captureId: "SHOT-06", viewport: "Mobile (`375px`)", section: "Mobile Tables & Data Matrices", purpose: "Verify responsive table scrolling (`overflow-x-auto`) without horizontal page clipping." },
  { captureId: "SHOT-07", viewport: "Mobile (`375px`)", section: "Mobile Images & Diagrams", purpose: "Verify all diagrams scale to 100% container width without cutting off diagram text or labels." },
  { captureId: "SHOT-08", viewport: "All Viewports", section: "Footer & Author Bio Card", purpose: "Verify author credential rendering, disclaimer visibility, and footer links." }
];

export const visualDefectDetectionRegistry = [
  { defectId: "DEF-01", category: "Missing or Broken Images", description: "Image fails to load (`broken image icon or HTTP 404`).", remediation: "Verify absolute artifact URI, re-upload media, and confirm file permissions." },
  { defectId: "DEF-02", category: "Wrong or Irrelevant Images", description: "Image does not match section context or uses generic stock photos.", remediation: "Replace with custom engineered Figma SVG diagram illustrating the exact technical workflow." },
  { defectId: "DEF-03", category: "Poor Cropping & Text Clipping", description: "Important diagram subjects or labels are cut off at card or container boundaries.", remediation: "Adjust `object-fit: contain` / `aspect-video` and verify cropping across all breakpoints." },
  { defectId: "DEF-04", category: "Unprofessional Empty Space", description: "Awkward gaps between headings and code blocks or unbalanced grid spacing.", remediation: "Normalize vertical margins (`space-y-6`) and verify clean padding hierarchy." },
  { defectId: "DEF-05", category: "Text Overflow & Cut-Off Typography", description: "Long API keys, URLs, or table headers overflow outside their parent container.", remediation: "Apply `break-all` / `overflow-hidden text-ellipsis` on URLs and enable responsive horizontal scrolling on tables." },
  { defectId: "DEF-06", category: "Broken Comparison Tables", description: "Table columns collide or become unreadable on mobile devices.", remediation: "Wrap table inside `<div className='overflow-x-auto rounded-xl border border-slate-800'>`." },
  { defectId: "DEF-07", category: "Overlapping Sticky Elements", description: "Sticky Table of Contents or header overlaps body text when scrolling.", remediation: "Adjust z-index (`z-40 for header, z-30 for TOC`) and verify top offset (`top-24`)." },
  { defectId: "DEF-08", category: "Inconsistent Component Styling", description: "Code blocks or callout alerts use different colors or borders across sections.", remediation: "Enforce uniform design system classes (`bg-slate-900/80 border border-slate-800 rounded-2xl`)." },
  { defectId: "DEF-09", category: "Weak Visual Hierarchy", description: "H2, H3, and H4 headings look too similar in font size or weight.", remediation: "Enforce strict typographic scale (`H1: text-3xl/4xl bold, H2: text-2xl bold, H3: text-xl font-semibold`)." },
  { defectId: "DEF-10", category: "Unbalanced Layouts", description: "Two-column grid has one column overflowing while the other is mostly empty.", remediation: "Use `grid-cols-1 md:grid-cols-2 gap-6 items-start` and balance content chunks." },
  { defectId: "DEF-11", category: "Mobile Horizontal Overflow", description: "Page scrolls horizontally on mobile viewport (`scroll bar appears at bottom`).", remediation: "Audit all elements (`width: 100%, max-w-full`) and eliminate fixed pixel widths (`e.g., width: 800px`)." },
  { defectId: "DEF-12", category: "Unreadable Low-Contrast Text", description: "Dark grey text (`text-slate-600`) on dark backgrounds (`bg-slate-950`) fails WCAG contrast ratio.", remediation: "Update text color to `text-slate-300` or `text-slate-200` to guarantee `4.5:1` minimum contrast." },
  { defectId: "DEF-13", category: "Missing Section Backgrounds", description: "Callout boxes (`[!IMPORTANT] / [!WARNING]`) lack distinct colored tint panels.", remediation: "Inject styled alerts (`bg-indigo-950/20 border border-indigo-500/30 text-indigo-200`)." },
  { defectId: "DEF-14", category: "Broken Internal/External Links", description: "Clicking jump link or related article returns 404 or dead anchor (`#`).", remediation: "Run full link crawler, verify target slugs, and ensure all anchors map to valid element IDs." },
  { defectId: "DEF-15", category: "Missing Image ALT Attributes", description: "DOM element `<img />` lacks `alt` tag, violating accessibility and SEO standards.", remediation: "Inject descriptive `alt='...'` explaining `WHAT IT SHOWS + WHY IT IS RELEVANT`." },
  { defectId: "DEF-16", category: "Invalid JSON-LD Schema", description: "Google Rich Results Test throws parsing errors on `TechArticle` or `FAQPage` script tags.", remediation: "Validate JSON syntax, escape quotes correctly, and confirm required properties are present." },
  { defectId: "DEF-17", category: "Unverified Local/Source Assumptions", description: "Declaring article finished from local development code without opening the live production URL.", remediation: "Execute mandatory live URL crawl (`15 stages`) and capture all 8 screenshot views before final signoff." }
];

export const finalArticleQualityGate = [
  { id: "VVP-GATE-01", category: "Topic Validation Phase Complete", item: "Verify topic solves a clear engineering problem and aligns with a core TechlumeAI pillar." },
  { id: "VVP-GATE-02", category: "Primary Research & Evidence Complete", item: "Verify all claims, dates, versions, and benchmarks checked against primary documentation (`ArXiv, vendor docs`)." },
  { id: "VVP-GATE-03", category: "Competitor Gap Analysis Complete", item: "Verify competitor weaknesses analyzed and our unique right-to-win (`code + diagrams + depth`) established." },
  { id: "VVP-GATE-04", category: "Semantic Outline & Information Journey Approved", item: "Verify outline covers full logical progression from definition down to troubleshooting and FAQ." },
  { id: "VVP-GATE-05", category: "Table of Contents Functional & Verified", item: "Verify TOC jump links map exactly to real headings and work on desktop and mobile without broken anchors." },
  { id: "VVP-GATE-06", category: "Technical Writing Precision & Depth Verified", item: "Verify active voice, rigorous terminology, self-contained paragraphs, and zero filler or keyword stuffing." },
  { id: "VVP-GATE-07", category: "All Claims & Statistics Verified with Primary Sources", item: "Verify every statistical benchmark cites exact source, methodology, and publication date." },
  { id: "VVP-GATE-08", category: "Hero Image Present, Relevant & Professionally Designed", item: "Verify 1200x630px hero banner aligns with topic, balances composition, and avoids cropped text/subjects." },
  { id: "VVP-GATE-09", category: "Custom SVG Diagrams & Visuals Present & Verified", item: "Verify custom system architecture diagrams and flowcharts load cleanly with zero pixelation or generic stock art." },
  { id: "VVP-GATE-10", category: "Professional Image ALT Text Injected", item: "Verify all meaningful images have descriptive ALT text explaining `WHAT IT SHOWS + WHY RELEVANT` (`zero stuffing`)." },
  { id: "VVP-GATE-11", category: "Responsive Tables & Code Blocks Functional", item: "Verify comparison tables scroll on mobile without overflow and code blocks display syntax highlighting + copy button." },
  { id: "VVP-GATE-12", category: "Internal Link Equity Verified (`3-5 Links`)", item: "Verify natural links to parent pillar, related articles, and glossary terms work and lead to HTTP 200 destinations." },
  { id: "VVP-GATE-13", category: "External Authoritative Sources Verified", item: "Verify all external citations link to official vendor docs, academic preprints, or standards bodies." },
  { id: "VVP-GATE-14", category: "Metadata & SEO Quality Control Verified", item: "Verify H1, title tag (`<60 chars`), meta description (`<160 chars`), URL slug, heading hierarchy, and canonical URL." },
  { id: "VVP-GATE-15", category: "JSON-LD Structured Data Validated", item: "Verify `TechArticle`, `FAQPage`, and `BreadcrumbList` schemas parse with zero errors and match visible text 1-to-1." },
  { id: "VVP-GATE-16", category: "GEO Answer-First & Entity Clarity Verified", item: "Verify direct 150-250 word summary box below H1, explicit entity attributes, and self-contained vector chunking." },
  { id: "VVP-GATE-17", category: "E-E-A-T & Institutional Attribution Verified", item: "Verify credentialed institutional author bio, tested version callouts (`Python 3.11/CUDA 12`), and audit timestamps." },
  { id: "VVP-GATE-18", category: "Live Published URL Opened & Crawled (`15 Stages`)", item: "Verify actual live published page inspected from header to footer across all 15 crawl checkpoints." },
  { id: "VVP-GATE-19", category: "8-Viewport Screenshot Verification Captured", item: "Verify screenshots captured across Desktop Top/Middle/Lower, Mobile Top/Content/Tables/Images, and Footer." },
  { id: "VVP-GATE-20", category: "17 Visual & Technical Defects Hunted & Fixed", item: "Verify zero broken images, poor cropping, text clipping, horizontal overflow, unreadable text, or dead links." },
  { id: "VVP-GATE-21", category: "Live Page Re-Verified After Remediations", item: "Verify the live page re-crawled and confirmed pristine after any defect fixes were deployed." },
  { id: "VVP-GATE-22", category: "Final Executive Quality Signoff Approved", item: "Verify article passes our ultimate test: 'Would a technical expert trust, bookmark, and cite this over all competitors?'" }
];
