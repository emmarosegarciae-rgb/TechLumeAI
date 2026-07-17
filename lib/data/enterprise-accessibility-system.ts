export interface PourPrincipleItem {
  id: string;
  pillar: "PERCEIVABLE" | "OPERABLE" | "UNDERSTANDABLE" | "ROBUST";
  coreDefinition: string;
  techlumeApplicationMandate: string;
  wcagReference: string;
}

export interface PageTypeAccessibilityAuditItem {
  id: string;
  pageType: string;
  semanticLandmarkStructure: string[];
  headingHierarchyRule: string;
  keyboardAndFocusRequirements: string[];
  screenReaderAnnouncementRules: string[];
  commonFailureTrap: string;
}

export interface SemanticHtmlAndAriaRule {
  id: string;
  category: "Native Semantic HTML" | "Rule of ARIA #1" | "Heading Architecture" | "Skip Navigation" | "Landmark Roles";
  prohibitedAntiPattern: string;
  requiredAccessibleImplementation: string;
  codeExampleOrAttribute: string;
}

export interface KeyboardFocusRule {
  id: string;
  focusElementOrScenario: string;
  keyboardAction: "Tab / Shift+Tab" | "Enter / Space" | "Arrow Keys" | "Escape Key" | "Focus Trap & Return";
  mandatoryBehavior: string;
  wcagCriterion: string;
}

export interface ContrastAndTypographyRule {
  id: string;
  elementCategory: "Body Text & Paragraphs" | "Headings & Large Typography" | "Form Labels & Placeholders" | "Interactive Focus Indicators" | "Meaningful Icons & Badges" | "Text Scaling & Zoom (200%)";
  wcagContrastTarget: string;
  designTokenSpecification: string;
  multiModalRequirement: string;
}

export interface ComponentAccessibilityItem {
  id: string;
  componentName: string;
  semanticElementAndRoles: string;
  assistiveTechInteraction: string;
  errorAndStateHandling: string;
}

export interface TestingAndRegressionStep {
  stepOrder: number;
  testingPhase: "1. Automated Audit" | "2. Keyboard-Only Walkthrough" | "3. Screen Reader Verification" | "4. High-Zoom & Text Scaling" | "5. Reduced Motion Verification" | "6. Regression CI Gate";
  toolOrMethodology: string;
  passCriteria: string;
}

export interface GateChecklistItem {
  id: string;
  category: string;
  item: string;
  verificationStandard: string;
}

// ==========================================
// 1. POUR PRINCIPLES FOUNDATION (`POUR-01 to POUR-04`)
// ==========================================
export const pourPrinciplesRegistry: PourPrincipleItem[] = [
  {
    id: "POUR-01",
    pillar: "PERCEIVABLE",
    coreDefinition: "Information and user interface components must be presentable to users in ways they can perceive (`Not invisible to all of their senses`).",
    techlumeApplicationMandate: "Every technical diagram, AI benchmark chart, and code snippet must possess descriptive alternatives (`ALT text or data summary tables`). Color contrast must meet or exceed WCAG AA (`≥ 4.5:1 for body text`).",
    wcagReference: "WCAG 2.2 Principle 1 (Text Alternatives, Time-based Media, Adaptable, Distinguishable)"
  },
  {
    id: "POUR-02",
    pillar: "OPERABLE",
    coreDefinition: "User interface components and navigation must be operable (`Not requiring interaction that a user cannot perform`).",
    techlumeApplicationMandate: "Every interactive control (`Calculators, TOC accordions, Admin Gates, Search drawers`) must be 100% operable via keyboard alone without traps. Touch targets must be at least 44x44px (`WCAG 2.5.8`).",
    wcagReference: "WCAG 2.2 Principle 2 (Keyboard Accessible, Enough Time, Seizures/Physical, Navigable, Input Modalities)"
  },
  {
    id: "POUR-03",
    pillar: "UNDERSTANDABLE",
    coreDefinition: "Information and the operation of the user interface must be understandable (`Predictable navigation and intelligible text`).",
    techlumeApplicationMandate: "Technical terminology must be explicitly defined (`Glossary cards / tooltips`). Forms (`/contact`) must provide clear, actionable error messages explaining exactly what went wrong and how to fix it (`aria-describedby`).",
    wcagReference: "WCAG 2.2 Principle 3 (Readable, Predictable, Input Assistance)"
  },
  {
    id: "POUR-04",
    pillar: "ROBUST",
    coreDefinition: "Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.",
    techlumeApplicationMandate: "Strict adherence to valid, semantic HTML5 structure across all 11 core page types. Zero invalid ARIA attribute injection or nested interactive controls (`e.g., button inside link`).",
    wcagReference: "WCAG 2.2 Principle 4 (Compatible with Current and Future User Agents)"
  }
];

// ==========================================
// 2. 11-PAGE TYPE ACCESSIBILITY AUDIT MATRIX (`AUD-01 to AUD-11`)
// ==========================================
export const pageTypeAccessibilityAuditMatrix: PageTypeAccessibilityAuditItem[] = [
  {
    id: "AUD-01",
    pageType: "Homepage (`/`)",
    semanticLandmarkStructure: ["`<header role='banner'>`", "`<nav aria-label='Primary Navigation'>`", "`<main id='main-content'>`", "`<section aria-labelledby='hero-title'>`", "`<footer role='contentinfo'>`"],
    headingHierarchyRule: "Exactly one `<h1 id='hero-title'>` for the primary value proposition, followed by logical `<h2>` sections (`Pillars, Clusters, Featured Articles`) and `<h3>` cards.",
    keyboardAndFocusRequirements: ["Mandatory skip navigation link (`Skip to primary content`) as the very first focusable DOM element.", "Focus visible on hero CTAs (`≥ 3:1 outline`)."],
    screenReaderAnnouncementRules: ["Announce primary page title on load: `'TechlumeAI - Enterprise AI Engineering & Advanced RAG Architecture'`.", "Ensure category pills announce both label and article count."],
    commonFailureTrap: "Using `<div>` containers with click listeners instead of native `<a>` links for featured article cards, breaking Tab focus."
  },
  {
    id: "AUD-02",
    pageType: "Category / Pillar Pages (`/category/[slug]`)",
    semanticLandmarkStructure: ["`<header>`", "`<nav aria-label='Breadcrumb'>`", "`<main id='main-content'>`", "`<aside aria-label='Category Filter Sidebar'>`", "`<footer>`"],
    headingHierarchyRule: "`<h1>` matches exact category name (`e.g., AI Engineering Architecture`). Sub-clusters use `<h2>`; article feed items use `<h3>` inside `<article>` wrappers.",
    keyboardAndFocusRequirements: ["Breadcrumb items must navigate cleanly via Tab and Enter.", "Filtering/sorting dropdowns must open with Space/Enter and navigate options with Arrow keys."],
    screenReaderAnnouncementRules: ["When filters change, announce result count via `aria-live='polite'`: `'Showing 24 articles for AI Engineering'`."],
    commonFailureTrap: "Skipping from `<h1>` directly to `<h3>` inside article cards while omitting the `<h2>` section container heading."
  },
  {
    id: "AUD-03",
    pageType: "Article Explainer Pages (`/articles/[slug]`)",
    semanticLandmarkStructure: ["`<header>`", "`<nav aria-label='Breadcrumb'>`", "`<main id='main-content'>`", "`<article aria-labelledby='article-title'>`", "`<nav aria-label='Table of Contents'>`", "`<footer>`"],
    headingHierarchyRule: "Single `<h1 id='article-title'>` at top. Every major technical section uses `<h2>`; sub-components use `<h3>` and `<h4>` without skipping.",
    keyboardAndFocusRequirements: ["Table of Contents (`TOC`) links must scroll smoothly and transfer focus or keep logical focus alignment.", "Code copy buttons must be reachable via Tab right before or inside code block wrappers."],
    screenReaderAnnouncementRules: ["Copying code triggers `aria-live='assertive'` notification: `'Code copied to clipboard'`.", "Technical diagrams wrapped in `<figure>` with `<figcaption id='fig-1'>` linked via `aria-labelledby`."],
    commonFailureTrap: "Providing high-resolution technical architecture diagrams (`AVIF/PNG`) with ALT text set to `'architecture diagram'` without explaining the actual data flow or layout."
  },
  {
    id: "AUD-04",
    pageType: "Cornerstone Authority Hubs (`/topics/[slug]`)",
    semanticLandmarkStructure: ["`<header>`", "`<main id='main-content'>`", "`<section aria-labelledby='hub-intro'>`", "`<nav aria-label='Related Topic Clusters'>`", "`<footer>`"],
    headingHierarchyRule: "`<h1>` for the topic cluster title (`e.g., Model Context Protocol Reference Hub`). `<h2>` for deep dive modules and sub-topic groups.",
    keyboardAndFocusRequirements: ["Tab order through dense navigation grids must follow logical visual reading order (`Left-to-Right, Top-to-Bottom`)."],
    screenReaderAnnouncementRules: ["Announce clear context when opening external or downloadable reference blueprints (`aria-label='Download MCP Spec v1.2, PDF, 4.2 MB'`)."],
    commonFailureTrap: "Using color alone (`e.g., green dot vs red dot`) to indicate which sub-topics are completed vs in-draft."
  },
  {
    id: "AUD-05",
    pageType: "Comparison & Trade-Off Pages",
    semanticLandmarkStructure: ["`<header>`", "`<main id='main-content'>`", "`<section aria-labelledby='comparison-summary'>`", "`<div role='region' aria-label='Comparison Table' tabindex='0'>`", "`<footer>`"],
    headingHierarchyRule: "`<h1>` for comparison title (`e.g., RAG vs Fine-Tuning vs Context Windows`). `<h2>` for key trade-off dimensions.",
    keyboardAndFocusRequirements: ["Wide multi-column comparison tables must be wrapped in a horizontally scrollable container with `tabindex='0'` and explicit `aria-label` so keyboard users can scroll right using Arrow keys."],
    screenReaderAnnouncementRules: ["Tables must use explicit `<th>` headers with `scope='col'` and `scope='row'` so screen readers announce row and column context for every cell."],
    commonFailureTrap: "Converting complex comparison tables into CSS Grid `<div>` cards that lose all row/column association in the accessibility tree."
  },
  {
    id: "AUD-06",
    pageType: "Interactive Tools & Calculators (`/ai-tools/*`)",
    semanticLandmarkStructure: ["`<header>`", "`<main id='main-content'>`", "`<form aria-labelledby='calc-title'>`", "`<output id='calc-result' aria-live='polite'>`", "`<footer>`"],
    headingHierarchyRule: "`<h1 id='calc-title'>` for tool name (`e.g., LLM VRAM & Quantization Calculator`). `<h2>` for Input Parameters and Output Summary.",
    keyboardAndFocusRequirements: ["Interactive range sliders (`<input type='range'>`) must be operable via Left/Right Arrow keys (`+1/-1 step`) and PageUp/PageDown (`+10/-10 step`)."],
    screenReaderAnnouncementRules: ["Every calculation update must dynamically update the `<output aria-live='polite'>` region without causing disruptive focus jumping."],
    commonFailureTrap: "Using custom `<div>` sliders that lack `role='slider'`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes."
  },
  {
    id: "AUD-07",
    pageType: "About & Trust Governance Pages (`/about`, `/editorial-policy`)",
    semanticLandmarkStructure: ["`<header>`", "`<main id='main-content'>`", "`<section aria-labelledby='mission-title'>`", "`<section aria-labelledby='governance-title'>`", "`<footer>`"],
    headingHierarchyRule: "`<h1>` for page title (`About TechlumeAI`). `<h2>` for governance pillars (`Fact-Checking, Ethics, Corrections, E-E-A-T`).",
    keyboardAndFocusRequirements: ["Accessible accordion or tab controls for toggling detailed governance policies (`role='tablist'`, `role='tab'`, `role='tabpanel'`)."],
    screenReaderAnnouncementRules: ["Toggling governance tabs announces the newly selected tab and panel context."],
    commonFailureTrap: "Setting thin gray body text (`#888888`) over dark slate backgrounds (`#0f172a`), failing WCAG AA 4.5:1 contrast ratio."
  },
  {
    id: "AUD-08",
    pageType: "Contact & Advisory Submission Pages (`/contact`)",
    semanticLandmarkStructure: ["`<header>`", "`<main id='main-content'>`", "`<form aria-labelledby='contact-heading' novalidate>`", "`<footer>`"],
    headingHierarchyRule: "`<h1 id='contact-heading'>` for Contact / Advisory request. `<h2>` for FAQ or direct advisory contact details.",
    keyboardAndFocusRequirements: ["Tab order must flow sequentially from `Name -> Email -> Subject -> Message -> Submit Button`.", "If validation fails on submit, focus must move directly to the first invalid form input."],
    screenReaderAnnouncementRules: ["Form input errors must be explicitly linked via `aria-describedby='email-error'` and announced via `role='alert'`."],
    commonFailureTrap: "Using only placeholder text (`placeholder='Work Email'`) without a permanent visible `<label htmlFor='email'>` tag."
  },
  {
    id: "AUD-09",
    pageType: "Search & Discovery Index (`/search`)",
    semanticLandmarkStructure: ["`<header>`", "`<main id='main-content'>`", "`<search role='search' aria-label='Site Search'>`", "`<section aria-label='Search Results'>`", "`<footer>`"],
    headingHierarchyRule: "`<h1>` for Search Hub. `<h2>` for active result feed and filter facets.",
    keyboardAndFocusRequirements: ["Opening search drawer or navigating to `/search` must automatically set focus into the primary `<input type='search'>` field.", "Pressing Escape inside search input clears text or closes search drawer, returning focus to the header trigger button."],
    screenReaderAnnouncementRules: ["As debounced search queries resolve, announce live status: `'Search completed. Found 12 articles matching Model Context Protocol'` inside `<div aria-live='polite' className='sr-only'>`."],
    commonFailureTrap: "Failing to announce zero-result states (`'No matching articles found'`), leaving screen-reader users wondering if the search button worked."
  },
  {
    id: "AUD-10",
    pageType: "Dynamic Benchmark & Code Routes",
    semanticLandmarkStructure: ["`<header>`", "`<main id='main-content'>`", "`<section aria-labelledby='bench-title'>`", "`<div role='region' aria-label='Code Benchmark Data'>`", "`<footer>`"],
    headingHierarchyRule: "`<h1>` for specific benchmark suite (`e.g., vLLM vs TensorRT-LLM Serving Latency`). `<h2>` for methodology and hardware testbed.",
    keyboardAndFocusRequirements: ["Interactive code tabs (`TypeScript | Python | CUDA`) must navigate with Left/Right Arrow keys (`ARIA Authoring Practices Guide for Tabs`)."],
    screenReaderAnnouncementRules: ["Switching code language tabs announces: `'Python tab selected. Displaying 35 lines of Python code'`."],
    commonFailureTrap: "Presenting syntax-highlighted code blocks with low-contrast token colors (`e.g., dark blue comments on black background`)."
  },
  {
    id: "AUD-11",
    pageType: "Error Pages (`404 Not Found / 500 Server Error`)",
    semanticLandmarkStructure: ["`<header>`", "`<main id='main-content' role='alert'>`", "`<section aria-labelledby='error-heading'>`", "`<footer>`"],
    headingHierarchyRule: "`<h1 id='error-heading'>` clearly stating the exact error: `'404 - Page Not Found'` or `'500 - Internal Server Processing Error'`.",
    keyboardAndFocusRequirements: ["Instant focus priority on the primary recovery action button (`Return to Homepage` or `Search Articles`)."],
    screenReaderAnnouncementRules: ["Page load immediately announces the error code and plain-English explanation via `role='alert'`."],
    commonFailureTrap: "Displaying clever or cryptic error illustrations (`e.g., 'Lost in space!'`) without clearly stating what happened or how to return to safety."
  }
];

// ==========================================
// 3. SEMANTIC HTML & ARIA GOVERNANCE (`SEM-01 to SEM-05`)
// ==========================================
export const semanticHtmlAndAriaRules: SemanticHtmlAndAriaRule[] = [
  {
    id: "SEM-01",
    category: "Native Semantic HTML",
    prohibitedAntiPattern: "Using `<div onClick={...}>`, `<span onClick={...}>`, or `<a onClick={...}>` without `href` to trigger buttons or navigation actions.",
    requiredAccessibleImplementation: "Always use native `<button type='button|submit'>` for actions and mutations, and native `<a href='...'>` for URL navigation. Native elements provide keyboard focus, Enter/Space triggering, and appropriate roles automatically.",
    codeExampleOrAttribute: "`<button type='button' onClick={handleCopy} className='...'>Copy Code</button>` vs `<a href='/category/ai-engineering'>AI Engineering</a>`"
  },
  {
    id: "SEM-02",
    category: "Rule of ARIA #1",
    prohibitedAntiPattern: "Adding redundant or conflicting ARIA roles to native HTML elements (`e.g., <button role='button'>` or `<nav role='navigation'>` or `<h1 role='heading' aria-level='1'>`).",
    requiredAccessibleImplementation: "First Rule of ARIA: Do not use ARIA to compensate for incorrect HTML or when native HTML already provides the exact role. Use ARIA strictly when native HTML cannot express dynamic custom patterns (`e.g., tabs, accordions, live regions`).",
    codeExampleOrAttribute: "`<button type='button'>` (Zero redundant ARIA) | `<div role='tablist'> <button role='tab' aria-selected='true'>...` (Valid custom ARIA pattern)"
  },
  {
    id: "SEM-03",
    category: "Heading Architecture",
    prohibitedAntiPattern: "Skipping heading levels (`<h1>` -> `<h3>`) for visual size sizing, or using multiple `<h1>` elements across different page sections.",
    requiredAccessibleImplementation: "Strict structural hierarchy: exactly one `<h1>` per page reflecting the exact document title, followed chronologically by `<h2>`, `<h3>`, `<h4>` without skipped intervals. Size headings visually via CSS (`className='text-xl'`) without breaking semantic tags.",
    codeExampleOrAttribute: "`<h1 className='text-3xl font-extrabold'>Title</h1>` -> `<h2 className='text-xl font-bold mt-8'>Section</h2>` -> `<h3 className='text-base font-semibold mt-4'>Sub-card</h3>`"
  },
  {
    id: "SEM-04",
    category: "Skip Navigation",
    prohibitedAntiPattern: "Omitting a skip navigation link or placing it at the bottom of the DOM where keyboard users must tab through 40 header/menu items first.",
    requiredAccessibleImplementation: "Every layout must include a skip link (`<a href='#main-content'>Skip to primary content</a>`) as the first DOM element, visually hidden by default (`sr-only`) and popping into visible focus on first Tab (`focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50`).",
    codeExampleOrAttribute: "`<a href='#main-content' className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-rose-600 text-white font-bold rounded-lg shadow-xl'>Skip to primary content</a>`"
  },
  {
    id: "SEM-05",
    category: "Landmark Roles",
    prohibitedAntiPattern: "Having multiple `<nav>` or `<section>` elements on a single page without unique `aria-label` or `aria-labelledby` identifiers.",
    requiredAccessibleImplementation: "When multiple instances of a landmark exist (`e.g., primary nav, breadcrumb nav, TOC nav, footer nav`), each MUST carry a unique, human-readable label so screen reader users can distinguish them (`aria-label='Primary Navigation'`).",
    codeExampleOrAttribute: "`<nav aria-label='Primary Navigation'>` | `<nav aria-label='Breadcrumb'>` | `<nav aria-label='Table of Contents'>`"
  }
];

// ==========================================
// 4. KEYBOARD & FOCUS GOVERNANCE (`KEY-01 to KEY-05`)
// ==========================================
export const keyboardFocusRules: KeyboardFocusRule[] = [
  {
    id: "KEY-01",
    focusElementOrScenario: "Interactive Focus Indicators (`Buttons, Links, Inputs`)",
    keyboardAction: "Tab / Shift+Tab",
    mandatoryBehavior: "Never remove focus rings (`outline: none` without replacement). Every focusable element must display a distinct, high-contrast focus indicator (`e.g., focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-slate-950`).",
    wcagCriterion: "WCAG 2.4.7 (Focus Visible) & WCAG 2.4.13 (Focus Appearance AAA / AA)"
  },
  {
    id: "KEY-02",
    focusElementOrScenario: "Modal Dialogs & Command Center Drawers",
    keyboardAction: "Focus Trap & Return",
    mandatoryBehavior: "When a modal dialog opens (`e.g., search overlay or image lightbox`), keyboard focus must instantly move inside the modal and become trapped (`Tab/Shift+Tab cycles only within modal controls`). When closed via Escape or close button, focus must return exactly to the triggering button.",
    wcagCriterion: "WCAG 2.1.2 (No Keyboard Trap) & WCAG 2.4.3 (Focus Order)"
  },
  {
    id: "KEY-03",
    focusElementOrScenario: "Custom Tabs & TOC Accordion Controls",
    keyboardAction: "Arrow Keys",
    mandatoryBehavior: "In a `tablist` group (`APG Tab Pattern`), focus moves between tab headers using Left/Right Arrow keys. Space/Enter activates the tab and reveals the `tabpanel`. In accordions, Up/Down Arrow moves between accordion headers.",
    wcagCriterion: "WCAG 2.1.1 (Keyboard Accessible) & WAI-ARIA Authoring Practices"
  },
  {
    id: "KEY-04",
    focusElementOrScenario: "Interactive Sliders (`VRAM / Quantization Calculators`)",
    keyboardAction: "Arrow Keys",
    mandatoryBehavior: "All `<input type='range'>` sliders must respond to Left/Down arrow (`decrease value`) and Right/Up arrow (`increase value`), plus Home (`minimum`) and End (`maximum`).",
    wcagCriterion: "WCAG 2.1.1 (Keyboard) & WCAG 4.1.2 (Name, Role, Value)"
  },
  {
    id: "KEY-05",
    focusElementOrScenario: "Overlay Dismissal (`Menus, Lightboxes, Toasts`)",
    keyboardAction: "Escape Key",
    mandatoryBehavior: "Pressing Escape (`Esc`) must immediately close any active overlay, popup menu, search drawer, or notification toast, restoring focus safely to the underlying page context.",
    wcagCriterion: "WCAG 1.4.13 (Content on Hover or Focus) & WCAG 2.1.1 (Keyboard)"
  }
];

// ==========================================
// 5. COLOR CONTRAST, TYPOGRAPHY & ZOOM MATRIX
// ==========================================
export const contrastAndTypographyMatrix: ContrastAndTypographyRule[] = [
  {
    id: "CNT-01",
    elementCategory: "Body Text & Paragraphs",
    wcagContrastTarget: "≥ 4.5:1 (`WCAG AA`) / ≥ 7:1 (`WCAG AAA`)",
    designTokenSpecification: "Body text on dark slate backgrounds (`#0f172a / #020617`) must use `#f8fafc (slate-50)` or `#e2e8f0 (slate-200)` (`Contrast ratio ~14.5:1`). Minimum readable font size: `16px (1rem)` with line-height `1.6 to 1.8`.",
    multiModalRequirement: "Zero reliance on color alone for links inside body paragraphs; links must possess a distinct underline (`underline underline-offset-4`) or bold weight plus color."
  },
  {
    id: "CNT-02",
    elementCategory: "Headings & Large Typography",
    wcagContrastTarget: "≥ 3.0:1 (`WCAG AA Large Text`)",
    designTokenSpecification: "Headings use `#ffffff (white)` or `#f1f5f9 (slate-100)` over dark backgrounds (`Contrast ratio ~16:1`). Sub-headers use `#cbd5e1 (slate-300)` (`Contrast ratio ~9.5:1`).",
    multiModalRequirement: "Headings must maintain distinct typographic hierarchy (`font-bold tracking-tight`) so visual hierarchy is clear even in monochrome grayscale."
  },
  {
    id: "CNT-03",
    elementCategory: "Form Labels & Placeholders",
    wcagContrastTarget: "≥ 4.5:1 (`Labels`) / ≥ 3.0:1 (`Placeholders`)",
    designTokenSpecification: "Permanent form labels (`<label>`) use `#e2e8f0 (slate-200)`. Input border rings use `#334155 (slate-700)` resting, changing to `#f43f5e (rose-500)` or `#6366f1 (indigo-500)` when focused.",
    multiModalRequirement: "Never use placeholder text (`#64748b`) as the sole label for a form field. When input is entered, placeholder disappears; permanent `<label htmlFor='...'>` must always remain visible above the input."
  },
  {
    id: "CNT-04",
    elementCategory: "Interactive Focus Indicators",
    wcagContrastTarget: "≥ 3.0:1 (`WCAG 2.2 Focus Appearance`)",
    designTokenSpecification: "Focus rings use `ring-2 ring-rose-500 ring-offset-2 ring-offset-slate-950` (`Rose-500 #f43f5e against Slate-950 #020617 achieves ~5.8:1 contrast ratio`).",
    multiModalRequirement: "Focus indicators must stand out clearly on both dark backgrounds (`#0f172a`) and light card accents (`#ffffff`)."
  },
  {
    id: "CNT-05",
    elementCategory: "Meaningful Icons & Badges",
    wcagContrastTarget: "≥ 3.0:1 (`WCAG 1.4.11 Non-Text Contrast`)",
    designTokenSpecification: "Status badges (`E-E-A-T Verified, High Severity, Passed Gate`) use `#34d399 (emerald-400)` or `#fb7185 (rose-400)` over dark tinted fills (`bg-emerald-950/60`).",
    multiModalRequirement: "Never use color alone (`e.g., red circle vs green circle`) to indicate status. Always include an icon (`CheckCircle / AlertTriangle`) plus explicit text label (`'Passed' / 'Failed'`)."
  },
  {
    id: "CNT-06",
    elementCategory: "Text Scaling & Zoom (200%)",
    wcagContrastTarget: "WCAG 1.4.4 (Resize Text) & 1.4.10 (Reflow)",
    designTokenSpecification: "When browser zoom is increased to 200% on a 1280px viewport (effective width 640px), layout must reflow cleanly into a single vertical column (`No horizontal scrollbars, zero clipped text containers`).",
    multiModalRequirement: "All height constraints on text cards must use `min-h-[...]` rather than fixed `h-[...]` so expanding text pushes containers open naturally."
  }
];

// ==========================================
// 6. INTERACTIVE COMPONENT ACCESSIBILITY LEDGER (`CMP-01 to CMP-06`)
// ==========================================
export const componentAccessibilityLedger: ComponentAccessibilityItem[] = [
  {
    id: "CMP-01",
    componentName: "Technical Images & Architecture Diagrams (`next/image`)",
    semanticElementAndRoles: "`<figure>` wrapper containing `<Image alt='...' />` and `<figcaption id='desc-1'>`. Complex diagrams use `aria-labelledby='desc-1'` plus data tables.",
    assistiveTechInteraction: "ALT text must answer: `WHAT IS IMPORTANT ABOUT THE IMAGE?` (`e.g., 'Flow diagram showing Vercel Edge CDN forwarding requests to Next.js App Router and PostgreSQL'`). Decorative icons carry `alt='' aria-hidden='true'`.",
    errorAndStateHandling: "If image fails to load or during slow network rendering, explicit dimensions (`width/height`) prevent layout shifts (`CLS < 0.01`)."
  },
  {
    id: "CMP-02",
    componentName: "Code Block Explainer & Copy Engine",
    semanticElementAndRoles: "`<div role='region' aria-label='TypeScript code example' tabindex='0'>` wrapping `<pre><code>`. Copy button uses `<button type='button' aria-label='Copy code to clipboard'>`.",
    assistiveTechInteraction: "Focusing code block allows keyboard horizontal scrolling (`Arrow keys`). Pressing Copy button announces: `'Code copied to clipboard'` via `<div aria-live='assertive'>`.",
    errorAndStateHandling: "Copy button provides visual checkmark state change plus screen reader live announcement, reverting to copy icon after 2 seconds."
  },
  {
    id: "CMP-03",
    componentName: "Comparison Tables (`RAG vs Fine-Tuning`)",
    semanticElementAndRoles: "`<div role='region' aria-label='Comparison table' tabindex='0' className='overflow-x-auto'>` wrapping `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`.",
    assistiveTechInteraction: "Every column header uses `<th scope='col'>`; row headers use `<th scope='row'>`. Screen readers announce cell intersection context (`e.g., 'Cost per 1M tokens, RAG Architecture: $0.15'`).",
    errorAndStateHandling: "Horizontal scroll container (`tabindex='0'`) ensures mobile users on small screens can scroll wide tables via touch or right arrow without breaking layout."
  },
  {
    id: "CMP-04",
    componentName: "Contact & Advisory Submission Form (`/contact`)",
    semanticElementAndRoles: "`<form novalidate>` containing `<div className='space-y-4'>` field groups. Inputs use `id='email' aria-required='true' aria-describedby='email-error'`. Permanent `<label htmlFor='email'>` required.",
    assistiveTechInteraction: "When user submits invalid email, server/client Zod check fires. Error text appears inside `<p id='email-error' role='alert' className='text-rose-400'>` and focus automatically jumps to first invalid field.",
    errorAndStateHandling: "Errors answer: `WHAT WENT WRONG? ('Invalid work email format') -> WHERE? ('Email field') -> HOW TO FIX? ('Enter corporate domain @company.com')`."
  },
  {
    id: "CMP-05",
    componentName: "Dynamic Toast Notifications & Live Regions",
    semanticElementAndRoles: "`<div role='status' aria-live='polite' className='sr-only'>` for non-critical updates (`'Search filter updated'`); `<div role='alert' aria-live='assertive'>` for critical errors/success (`'Article saved to bookmarks'`).",
    assistiveTechInteraction: "Screen readers read new text injected into `aria-live` regions automatically without stealing keyboard focus from the user's active input box.",
    errorAndStateHandling: "Toasts include explicit `<button aria-label='Dismiss notification'>` with visible focus indicators so keyboard users can close them immediately."
  },
  {
    id: "CMP-06",
    componentName: "Skip Navigation Link (`Skip to Content`)",
    semanticElementAndRoles: "`<a href='#main-content' className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-rose-600 text-white font-bold rounded-lg shadow-xl'>Skip to primary content</a>`",
    assistiveTechInteraction: "First focusable element on every page. Pressing Tab right after page load brings button into high-contrast visible focus. Pressing Enter scrolls directly to `<main id='main-content' tabindex='-1'>`.",
    errorAndStateHandling: "Target `<main id='main-content'>` must possess `tabindex='-1'` so programmatic anchor jumping transfers focus cleanly across all modern browsers."
  }
];

// ==========================================
// 7. TESTING, AUDITING & REGRESSION PROTOCOL (`TST-01 to TST-06`)
// ==========================================
export const testingAndRegressionProtocol: TestingAndRegressionStep[] = [
  {
    stepOrder: 1,
    testingPhase: "1. Automated Audit",
    toolOrMethodology: "`axe-core` / `@axe-core/react` / Chrome Lighthouse Accessibility audit.",
    passCriteria: "100% Score (`Zero violations reported across contrast, labels, ARIA syntax, heading order, and image alternatives`). Note: Automated audits only catch ~30% of accessibility bugs; human testing is mandatory."
  },
  {
    stepOrder: 2,
    testingPhase: "2. Keyboard-Only Walkthrough",
    toolOrMethodology: "Disconnect mouse/trackpad. Navigate entire route using strictly `Tab`, `Shift+Tab`, `Enter`, `Space`, `Arrow keys`, and `Escape`.",
    passCriteria: "All interactive controls reachable and operable; zero keyboard traps; high-contrast focus ring (`ring-rose-500`) clearly visible on 100% of focused elements; logical tab order."
  },
  {
    stepOrder: 3,
    testingPhase: "3. Screen Reader Verification",
    toolOrMethodology: "Windows NVDA / Apple VoiceOver / JAWS walk-through across landmarks, headings, forms, and interactive accordions.",
    passCriteria: "Screen reader announces exact accessible names, states (`expanded/collapsed`), table cell scopes (`row/col`), form errors (`role='alert'`), and dynamic `aria-live` announcements cleanly."
  },
  {
    stepOrder: 4,
    testingPhase: "4. High-Zoom & Text Scaling",
    toolOrMethodology: "Set browser zoom to 200% (`WCAG 1.4.4`) on desktop (640px effective width) and test system font scaling to 200% on iOS/Android viewports.",
    passCriteria: "Zero clipped text; containers reflow cleanly (`min-h-[...]`); zero horizontal scrolling required to read paragraph content (`WCAG 1.4.10 Reflow`)."
  },
  {
    stepOrder: 5,
    testingPhase: "5. Reduced Motion Verification",
    toolOrMethodology: "Enable `prefers-reduced-motion: reduce` in operating system accessibility settings or DevTools rendering emulation.",
    passCriteria: "Parallax scrolling, auto-playing animations, and long page transitions instantly disable or simplify into instant fade/cut transitions (`Zero vestibular discomfort triggered`)."
  },
  {
    stepOrder: 6,
    testingPhase: "6. Regression CI Gate",
    toolOrMethodology: "Playwright automated accessibility regression tests (`axeBuilder.analyze()`) integrated into our GitHub CI pull request check suite.",
    passCriteria: "Any pull request introducing missing labels, invalid ARIA, or contrast degradation fails CI build prior to merging into `main` branch (`Zero accessibility regression tolerance`)."
  }
];

// ==========================================
// 8. MANDATORY 15-POINT EADS-EQL COMPLETION GATE
// ==========================================
export const mandatoryEadsEqlSignoffGate: GateChecklistItem[] = [
  {
    id: "EADS-01",
    category: "POUR Principles Foundation (`Perceivable, Operable, Understandable, Robust`)",
    item: "Verify adherence across all 4 POUR pillars (`POUR-01 to POUR-04`). Accessibility is integrated into architecture, content, code, and testing.",
    verificationStandard: "POUR ledger verified; zero assumptions made without live device and assistive tech verification."
  },
  {
    id: "EADS-02",
    category: "Semantic HTML5 Structure (`Landmarks & Elements`)",
    item: "Verify correct use of `<header>`, `<nav>`, `<main id='main-content'>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<button>`, and `<a>`. Zero div-button anti-patterns (`SEM-01`).",
    verificationStandard: "Native HTML used first; ARIA strictly reserved for complex custom patterns (`Rule of ARIA #1 / SEM-02`)."
  },
  {
    id: "EADS-03",
    category: "Heading Architecture (`Strict Hierarchy`)",
    item: "Verify exactly one clear `<h1/>` per page describing primary intent, followed sequentially by `<h2>`, `<h3>`, `<h4>` without skipped levels (`SEM-03`).",
    verificationStandard: "Heading structure intelligible when read without visual styling via screen reader rotor."
  },
  {
    id: "EADS-04",
    category: "Keyboard Navigation & Zero Focus Traps",
    item: "Verify 100% of interactive controls (`buttons, links, form inputs, sliders, accordions, dialogs`) are operable via Tab, Space, Enter, Arrows, and Escape (`KEY-01 to KEY-05`).",
    verificationStandard: "Zero keyboard traps; modal dialogs trap focus cleanly and return focus to triggering element upon Escape."
  },
  {
    id: "EADS-05",
    category: "Focus Indicators (`High-Contrast Ring Visibility`)",
    item: "Verify distinct, high-contrast focus rings (`e.g., ring-2 ring-rose-500 ring-offset-2 ring-offset-slate-950`) visible on every focusable element against light/dark backgrounds (`CNT-04`).",
    verificationStandard: "Never remove focus indicators (`outline: none`) without providing an equally visible replacement (`WCAG 2.4.7/2.4.13`)."
  },
  {
    id: "EADS-06",
    category: "Color Contrast & Typography (`WCAG AA / AAA`)",
    item: "Verify contrast ratios meet or exceed WCAG AA (`≥ 4.5:1 for body text, labels, placeholders; ≥ 3:1 for headings and icons`). Zero reliance on color alone for errors or status (`CNT-01 to CNT-05`).",
    verificationStandard: "All design system text tokens verified against dark `#0f172a` slate backgrounds (`14.5:1 body contrast ratio achieved`)."
  },
  {
    id: "EADS-07",
    category: "Typography Scaling & 200% Zoom Reflow",
    item: "Verify layout reflows cleanly at 200% browser zoom (`effective width 640px`) without horizontal scrollbars or clipped text containers (`CNT-06 / WCAG 1.4.4 & 1.4.10`).",
    verificationStandard: "All text containers use `min-h-[...]` rather than fixed heights so scaling text expands cleanly."
  },
  {
    id: "EADS-08",
    category: "Screen Reader Tree Alignment & Image ALT Text",
    item: "Verify visual order matches accessibility tree order. Every meaningful image/diagram has descriptive ALT explaining `WHAT IS IMPORTANT` (`CMP-01`). Decorative icons use `alt='' aria-hidden='true'`.",
    verificationStandard: "Prohibit vague ALT text (`'image', 'photo', 'diagram'`); complex architecture diagrams paired with data tables."
  },
  {
    id: "EADS-09",
    category: "Link Purpose & Button Semantics",
    item: "Verify link text clearly communicates destination (`Prohibit vague 'Click here', 'Read more'`). Buttons trigger actions (`<button type='button'>`); links navigate (`<a href='...'>`).",
    verificationStandard: "Links distinguishable from surrounding text via underlines or distinct weights (`multi-modal distinction`)."
  },
  {
    id: "EADS-10",
    category: "Form & Error Message Accessibility (`/contact`)",
    item: "Verify explicit permanent `<label htmlFor='...'>` associated with inputs. Errors state: `WHAT WENT WRONG -> WHERE -> HOW TO FIX` linked via `aria-describedby` (`role='alert'`).",
    verificationStandard: "Zero reliance on placeholders as sole labels; instant focus return to invalid inputs (`CMP-04`)."
  },
  {
    id: "EADS-11",
    category: "Comparison Table & Code Block Accessibility",
    item: "Verify tables use `<th scope='col/row'>` inside horizontal scroll containers (`tabindex='0'`). Code blocks provide keyboard scrolling and live copy notifications (`CMP-02 & CMP-03`).",
    verificationStandard: "Zero conversion of comparison data into styled grid divs that lose semantic table associations."
  },
  {
    id: "EADS-12",
    category: "Dynamic Content & Skip Navigation (`aria-live`)",
    item: "Verify skip link (`Skip to primary content`) is first focusable element (`SEM-04 / CMP-06`). Dynamic search/toast updates announce cleanly via `aria-live='polite|assertive'` (`CMP-05`).",
    verificationStandard: "Skip link jumps cleanly to `<main id='main-content' tabindex='-1'>`; zero disruptive screen-reader chatter."
  },
  {
    id: "EADS-13",
    category: "Responsive Mobile Accessibility & Touch Targets",
    item: "Verify small/medium/large mobile viewports across touch devices. All interactive buttons and cards maintain minimum touch target dimensions of 44x44px (`WCAG 2.5.8`).",
    verificationStandard: "Zero hidden controls or horizontal overflow on 320px mobile widths."
  },
  {
    id: "EADS-14",
    category: "Motion, Animation & Cognitive Usability",
    item: "Verify respect for `prefers-reduced-motion: reduce` (`disable/soften parallax and transitions`). Reduce cognitive load via clear definitions, progressive disclosure, and predictable layouts.",
    verificationStandard: "Zero vestibular discomfort triggers; technical terminology explicitly defined (`Glossary / Tooltips`)."
  },
  {
    id: "EADS-15",
    category: "Multi-Modal Testing & Regression Certification (`EADS-EQL v1.0`)",
    item: "Verify complete execution across all 6 testing phases (`Automated axe check -> Keyboard-only -> Screen reader -> 200% Zoom -> Reduced motion -> CI Playwright regression gate`).",
    verificationStandard: "Mandatory signoff certified: **DESIGN FOR EYES. ENGINEER FOR BROWSER. TEST FOR KEYBOARD. VERIFY FOR ASSISTIVE TECH. BUILD FOR REAL PEOPLE.**"
  }
];
