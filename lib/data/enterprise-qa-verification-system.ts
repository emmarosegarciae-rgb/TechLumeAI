/**
 * TechlumeAI Enterprise QA, Release Validation & Site-Wide Verification System (`EQVS-EQL v1.0`)
 *
 * Combined Expertise: Principal QA Architect, Senior Software Test Engineer, SRE, Automated Testing Engineer,
 * Visual Regression Specialist, Browser Automation Engineer, Technical SEO Auditor, Accessibility QA Specialist,
 * Performance QA Engineer, Security QA Engineer, Frontend Quality Engineer, and Release Validation Director.
 */

export interface QALoopStage {
  stepOrder: number;
  stageName: string;
  actionRequired: string;
  verificationMandate: string;
  evidenceType: "Visual Screenshot" | "DOM Inspection" | "Console Audit" | "Network Log" | "Automated Report";
}

export interface RouteInventoryItem {
  id: string;
  routePath: string;
  routeType: "Static Route" | "Dynamic Article Slug" | "Category Hub" | "Author Route" | "Utility Route" | "Command Center" | "Error Route";
  expectedBehavior: string;
  criticalElementsToVerify: string[];
  lastVerifiedStatus: "VERIFIED" | "PENDING_RECHECK" | "AUTOMATED_PASS";
}

export interface ImageVerificationRule {
  ruleId: string;
  checkpointName: string;
  verificationQuestion: string;
  failureSymptom: string;
  remediationAction: string;
}

export interface VisualAndFunctionalAuditItem {
  category: "Visual Quality" | "Homepage Hierarchy" | "Article Coherence" | "Table of Contents" | "Navigation & Touch" | "Runtime & Hydration";
  checkId: string;
  itemTitle: string;
  verificationRequirement: string;
  inspectionMethod: "Live Browser Walkthrough" | "Multi-Viewport Emulation" | "Keyboard Audit" | "DevTools Console/Network";
}

export interface RegressionAuditMatrixItem {
  regressionDomain: "Visual Regression" | "Content Regression" | "SEO Regression" | "Accessibility Regression" | "Performance Regression";
  id: string;
  triggerEvent: string;
  mandatoryVerificationItems: string[];
  passCriteria: string;
}

export interface DefectClassificationRule {
  severityLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "COSMETIC";
  definition: string;
  businessAndUserImpact: string;
  slaRemediationWindow: string;
}

export interface EvidenceBasedCompletionEntry {
  taskId: string;
  taskTitle: string;
  targetUrlOrComponent: string;
  testPerformed: string;
  verificationResult: "PASS" | "DEFECT_FOUND_AND_FIXED" | "PENDING_LIVE_CRAWL";
  issuesFoundDescription: string;
  remediationApplied: string;
}

// 1. THE COMPLETE 14-STEP QA LOOP
export const completeQALoopRegistry: QALoopStage[] = [
  {
    stepOrder: 1,
    stageName: "PLAN & IMPLEMENT",
    actionRequired: "Define exact architectural changes, component dependencies, and design tokens before coding.",
    verificationMandate: "Review code against existing institutional systems (EPCS, ESPD, EADS, ECGIS).",
    evidenceType: "Automated Report"
  },
  {
    stepOrder: 2,
    stageName: "BUILD & DEPLOY",
    actionRequired: "Compile application (`npx tsc --noEmit` and `next build`) and deploy to target environment.",
    verificationMandate: "Zero type errors, zero broken asset links, and successful bundle emission.",
    evidenceType: "Automated Report"
  },
  {
    stepOrder: 3,
    stageName: "OPEN ACTUAL SITE",
    actionRequired: "Launch live browser or browser subagent and open target URL (`e.g., http://localhost:3000`).",
    verificationMandate: "Never rely solely on source code or build logs; experience the rendered page exactly as a user.",
    evidenceType: "Visual Screenshot"
  },
  {
    stepOrder: 4,
    stageName: "CRAWL ROUTE INVENTORY",
    actionRequired: "Navigate systematically across Homepage, Article pages, Category hubs, About, Contact, Search, and Error routes.",
    verificationMandate: "Verify expected routes vs actual routes; check for 404s, broken redirects, or unexpected blank states.",
    evidenceType: "Network Log"
  },
  {
    stepOrder: 5,
    stageName: "INSPECT VISUAL QUALITY",
    actionRequired: "Examine visual hierarchy, spacing, grid alignment, typography, and card consistency.",
    verificationMandate: "Identify unexplained empty areas. Answer: Is it intentional? Does it serve a purpose? Is content missing?",
    evidenceType: "Visual Screenshot"
  },
  {
    stepOrder: 6,
    stageName: "TEST FUNCTIONALITY & TOC",
    actionRequired: "Click every Table of Contents anchor, interactive accordion, tab bar, copy button, and form submission.",
    verificationMandate: "Confirm smooth scroll to visible destination headings, working state transitions, and zero dead links.",
    evidenceType: "DOM Inspection"
  },
  {
    stepOrder: 7,
    stageName: "VERIFY IMAGES (`14-POINT AUDIT`)",
    actionRequired: "Inspect every hero image, diagram, and thumbnail across mobile and desktop viewports.",
    verificationMandate: "Verify valid URLs, professional crop, zero distortion/stretching, accurate ALT text, and zero layout shifts (`CLS`).",
    evidenceType: "Visual Screenshot"
  },
  {
    stepOrder: 8,
    stageName: "MULTI-VIEWPORT RESPONSIVE AUDIT",
    actionRequired: "Emulate Mobile (`375px`), Tablet (`768px`), Desktop (`1280px`), and Wide (`1600px+`) viewports.",
    verificationMandate: "Verify zero horizontal overflow, zero clipped typography, touch targets ≥ 44x44px, and clean reflow.",
    evidenceType: "Visual Screenshot"
  },
  {
    stepOrder: 9,
    stageName: "DEVTOOLS CONSOLE & RUNTIME AUDIT",
    actionRequired: "Open browser console and DevTools Network tab while interacting with all page components.",
    verificationMandate: "Verify zero JavaScript exceptions, zero React hydration mismatches, and zero failed/stalled API requests.",
    evidenceType: "Console Audit"
  },
  {
    stepOrder: 10,
    stageName: "IDENTIFY & CLASSIFY DEFECTS",
    actionRequired: "Log any discovered discrepancy, prioritizing by Impact + Severity + User Visibility + Business Importance.",
    verificationMandate: "Categorize clearly into CRITICAL, HIGH, MEDIUM, LOW, or COSMETIC.",
    evidenceType: "Automated Report"
  },
  {
    stepOrder: 11,
    stageName: "APPLY REMEDIATION FIXES",
    actionRequired: "Engineer targeted fixes in source code without causing regressions in shared design tokens.",
    verificationMandate: "Ensure root cause is addressed (`e.g., fixing overflow clipping at container level vs ad-hoc hacks`).",
    evidenceType: "DOM Inspection"
  },
  {
    stepOrder: 12,
    stageName: "REBUILD & REDEPLOY",
    actionRequired: "Re-run full compilation check and re-deploy updated build to live environment.",
    verificationMandate: "Verify that all changes propagated cleanly without caching artifacts.",
    evidenceType: "Automated Report"
  },
  {
    stepOrder: 13,
    stageName: "RE-CRAWL & RE-TEST (`CLOSED LOOP`)",
    actionRequired: "Re-visit every previously defective route and perform the exact same functional and visual test sequence.",
    verificationMandate: "Confirm 100% resolution of defects and verify zero side-effect regressions across sibling pages.",
    evidenceType: "Visual Screenshot"
  },
  {
    stepOrder: 14,
    stageName: "PRODUCE EVIDENCE-BASED CERTIFICATION",
    actionRequired: "Document exact URLs tested, screenshots taken, defects resolved, and final verification signoff.",
    verificationMandate: "Only after this complete 14-step loop is satisfied may the completion claim: 'DONE' be certified.",
    evidenceType: "Automated Report"
  }
];

// 2. SITE-WIDE ROUTE INVENTORY LEDGER
export const siteWideRouteInventory: RouteInventoryItem[] = [
  {
    id: "RTE-01",
    routePath: "/",
    routeType: "Static Route",
    expectedBehavior: "Premium editorial homepage loading hero section, primary CTA, featured grid, category pills, and latest articles.",
    criticalElementsToVerify: ["Hero Banner & Typography", "Category Navigation Pills", "Featured Article Cards Grid", "Newsletter Capture Section", "Global Footer"],
    lastVerifiedStatus: "VERIFIED"
  },
  {
    id: "RTE-02",
    routePath: "/articles/[slug]",
    routeType: "Dynamic Article Slug",
    expectedBehavior: "Deep-dive technical article with sticky TOC, author metadata, custom hero image, syntax-highlighted code blocks, and comparison tables.",
    criticalElementsToVerify: ["Sticky TOC Smooth Scrolling", "Code Block Copy Buttons", "Diagram `<figure>` & `<figcaption>`", "Author Bio & Date Attribution", "Related Articles Grid"],
    lastVerifiedStatus: "VERIFIED"
  },
  {
    id: "RTE-03",
    routePath: "/categories/[slug]",
    routeType: "Category Hub",
    expectedBehavior: "Curated category portal (`e.g., AI Engineering, MCP, RAG`) displaying topic descriptions, sub-topic filters, and paginated article index.",
    criticalElementsToVerify: ["Category Hero Description", "Sub-Topic Filter Pills", "Article Cards Grid Reflow", "Zero Empty Card States", "Breadcrumb Navigation"],
    lastVerifiedStatus: "VERIFIED"
  },
  {
    id: "RTE-04",
    routePath: "/about",
    routeType: "Static Route",
    expectedBehavior: "Institutional manifesto detailing TechlumeAI's 12-Directorate Governance, E-E-A-T credentials, editorial independence, and methodology.",
    criticalElementsToVerify: ["Editorial Manifesto Typography", "Directorate Cards Grid", "E-E-A-T Authority Statements", "Visual Rhythm & Spacing", "Contact CTA Section"],
    lastVerifiedStatus: "VERIFIED"
  },
  {
    id: "RTE-05",
    routePath: "/contact",
    routeType: "Utility Route",
    expectedBehavior: "Interactive corporate contact and advisory submission page with accessible Zod form validation and clear feedback states.",
    criticalElementsToVerify: ["Accessible `<label htmlFor='...'>`", "Live Error Messaging (`WHAT/WHERE/HOW`)", "Focus Ring Visibility", "Keyboard Tab Progression", "Success State Announcement"],
    lastVerifiedStatus: "VERIFIED"
  },
  {
    id: "RTE-06",
    routePath: "/search",
    routeType: "Utility Route",
    expectedBehavior: "Real-time semantic & keyword discovery portal with instant debounced query filtering, topic tags, and zero-result recovery suggestions.",
    criticalElementsToVerify: ["Debounced Input Responsiveness", "Result Card Highlighting", "Zero-Result Recovery Guidance", "Keyboard Escape Dismissal", "Screen Reader Live Region"],
    lastVerifiedStatus: "VERIFIED"
  },
  {
    id: "RTE-07",
    routePath: "/admin/enterprise-qa-verification",
    routeType: "Command Center",
    expectedBehavior: "Interactive QA, Release Validation & Site-Wide Verification Command Center (`EQVS-EQL v1.0`) displaying checklists and signoff bars.",
    criticalElementsToVerify: ["Interactive Tab Switching", "Real-Time Signoff Progress Bar", "Route Inventory Filter Search", "Image Verification Ledger", "Defect Classification Matrix"],
    lastVerifiedStatus: "VERIFIED"
  },
  {
    id: "RTE-08",
    routePath: "/404",
    routeType: "Error Route",
    expectedBehavior: "Brand-aligned 404 Not Found recovery portal guiding users back to the homepage, search drawer, or top category hubs.",
    criticalElementsToVerify: ["Professional Error Copy", "Direct Recovery CTA Buttons", "Search Bar Inclusion", "Zero Broken Navigation Header", "Correct HTTP 404 Status Emulation"],
    lastVerifiedStatus: "VERIFIED"
  }
];

// 3. 14-POINT IMAGE VERIFICATION SYSTEM
export const imageVerificationRules: ImageVerificationRule[] = [
  {
    ruleId: "IMG-01",
    checkpointName: "Image Exists & Loads",
    verificationQuestion: "Does the image asset physically exist at its URL and return HTTP 200 without broken icon placeholders?",
    failureSymptom: "Missing image icon or blank square.",
    remediationAction: "Verify file path in public directory or remote storage; confirm exact case-sensitive filename."
  },
  {
    ruleId: "IMG-02",
    checkpointName: "Valid Image URL",
    verificationQuestion: "Is the src URL valid, properly encoded, and correctly configured in `next.config.js` remotePatterns?",
    failureSymptom: "Next.js unconfigured host error or broken string.",
    remediationAction: "Add hostname to `next.config.js` or fix relative URI formatting."
  },
  {
    ruleId: "IMG-03",
    checkpointName: "Intended Contextual Image",
    verificationQuestion: "Does the image directly relate to the technical section (`e.g., architecture diagram vs generic stock graphic`)?",
    failureSymptom: "Irrelevant abstract shape next to specific protocol code.",
    remediationAction: "Replace placeholder with verified technical architecture diagram or specific UI screenshot."
  },
  {
    ruleId: "IMG-04",
    checkpointName: "Appropriate Dimensions & Aspect Ratio",
    verificationQuestion: "Are intrinsic `width` and `height` correctly specified to prevent unnatural stretching or squishing?",
    failureSymptom: "Distorted circles or warped typography in diagram.",
    remediationAction: "Enforce exact `aspect-video`, `aspect-[16/9]`, or explicit width/height matching source."
  },
  {
    ruleId: "IMG-05",
    checkpointName: "Professional Image Crop",
    verificationQuestion: "Is the focal point of the diagram or UI cropped cleanly without chopping off critical labels or borders?",
    failureSymptom: "Half-visible text labels on edge of diagram.",
    remediationAction: "Adjust `object-cover object-center` or re-export asset with generous 32px padding."
  },
  {
    ruleId: "IMG-06",
    checkpointName: "Zero Distortion or Stretching",
    verificationQuestion: "Does the image maintain its exact aspect ratio across all CSS container resizing breakpoints?",
    failureSymptom: "Image stretches vertically on mobile while squeezed horizontally.",
    remediationAction: "Use `h-auto w-full max-w-[...] object-contain` inside responsive wrappers."
  },
  {
    ruleId: "IMG-07",
    checkpointName: "Zero Pixelation or Blurry Rendering",
    verificationQuestion: "Is the asset high-resolution (`WebP/PNG @ 2x density`) so technical text inside diagrams is crisp?",
    failureSymptom: "Blurry diagram text unreadable on Retina displays.",
    remediationAction: "Provide high-DPI assets (`e.g., 1600px width for 800px display containers`)."
  },
  {
    ruleId: "IMG-08",
    checkpointName: "Descriptive & Technical ALT Text",
    verificationQuestion: "Does `alt` text explain WHAT is important about the diagram rather than saying 'image' or 'screenshot'?",
    failureSymptom: "Screen reader announces 'image of code' or 'graphic'.",
    remediationAction: "Write detailed ALT: `Architecture diagram illustrating Vercel Edge routing traffic to Next.js App Router and Postgres.`"
  },
  {
    ruleId: "IMG-09",
    checkpointName: "Proper DOM Positioning",
    verificationQuestion: "Is the image aligned logically within `<figure>` tags directly next to the relevant text commentary?",
    failureSymptom: "Image floating detached several paragraphs away from its reference.",
    remediationAction: "Group `<figure>` and `<figcaption>` directly below the referencing H2/H3 paragraph."
  },
  {
    ruleId: "IMG-10",
    checkpointName: "Zero Cumulative Layout Shift (`CLS`)",
    verificationQuestion: "Does the image container reserve exact space before load so content does not jump downward when asset loads?",
    failureSymptom: "Page jumps and shifts 200px down while user is reading.",
    remediationAction: "Always specify numeric `width` and `height` or explicit container aspect ratio wrapper."
  },
  {
    ruleId: "IMG-11",
    checkpointName: "Visual Context Appropriateness",
    verificationQuestion: "Does the color palette, dark-mode styling, and visual theme match TechlumeAI's slate/emerald/rose aesthetic?",
    failureSymptom: "Bright white diagram glaring inside a dark slate interface.",
    remediationAction: "Invert or style diagram backgrounds with dark `#0f172a` fill and crisp light vector lines."
  },
  {
    ruleId: "IMG-12",
    checkpointName: "Article Hero Image Verification",
    verificationQuestion: "Does the article top hero load instantly (`priority={true}`) with clean gradient overlays and crisp title integration?",
    failureSymptom: "Hero image pops in late or clashes with overlaid white title text.",
    remediationAction: "Add `priority` flag to hero `next/image` and verify dark gradient mask contrast."
  },
  {
    ruleId: "IMG-13",
    checkpointName: "Thumbnail Grid Verification",
    verificationQuestion: "Do all article cards in category and homepage grids maintain uniform card heights and clean image thumbnails?",
    failureSymptom: "Ragged card heights caused by inconsistent thumbnail ratios.",
    remediationAction: "Enforce uniform `aspect-[16/9] overflow-hidden` container on all card thumbnails."
  },
  {
    ruleId: "IMG-14",
    checkpointName: "Diagram & Figure Caption Linkage",
    verificationQuestion: "Is every technical diagram paired with an explicit `<figcaption id='...'>` linked via `aria-labelledby`?",
    failureSymptom: "Complex diagram lacks visual and semantic explanation.",
    remediationAction: "Include visible caption summarizing key architectural takeaways."
  }
];

// 4. VISUAL & FUNCTIONAL INSPECTION LEDGER
export const visualAndFunctionalAuditMatrix: VisualAndFunctionalAuditItem[] = [
  {
    category: "Visual Quality",
    checkId: "VIS-01",
    itemTitle: "Unexplained Empty Sections Audit",
    verificationRequirement: "Inspect every page for empty boxes, excessive gaps, or missing modules. For every empty area, answer: Is it intentional? Does it serve a purpose? Is content missing?",
    inspectionMethod: "Live Browser Walkthrough"
  },
  {
    category: "Visual Quality",
    checkId: "VIS-02",
    itemTitle: "Whitespace & Visual Rhythm Balance",
    verificationRequirement: "Verify that vertical section spacing (`py-12 sm:py-16 lg:py-24`) maintains professional editorial cadence without cramped or floating blocks.",
    inspectionMethod: "Live Browser Walkthrough"
  },
  {
    category: "Visual Quality",
    checkId: "VIS-03",
    itemTitle: "Grid Alignment & Card Height Consistency",
    verificationRequirement: "Confirm all multi-column grids (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) align cleanly and use flex-stretch so adjacent cards match height.",
    inspectionMethod: "Multi-Viewport Emulation"
  },
  {
    category: "Homepage Hierarchy",
    checkId: "HPG-01",
    itemTitle: "Hero Section & Primary CTA Excellence",
    verificationRequirement: "Verify homepage hero displays vibrant typography, clear positioning, working primary CTA button, and balanced visual weight.",
    inspectionMethod: "Live Browser Walkthrough"
  },
  {
    category: "Homepage Hierarchy",
    checkId: "HPG-02",
    itemTitle: "Featured & Latest Content Grids",
    verificationRequirement: "Verify featured articles load actual dynamic data (`zero placeholder lorem ipsum`) with working category pills and read times.",
    inspectionMethod: "Live Browser Walkthrough"
  },
  {
    category: "Article Coherence",
    checkId: "ART-01",
    itemTitle: "End-to-End Editorial Progression Check",
    verificationRequirement: "Confirm title, subtitle, author bio, publication date, hero image, TOC, prose, code blocks, tables, and related links flow seamlessly.",
    inspectionMethod: "Live Browser Walkthrough"
  },
  {
    category: "Table of Contents",
    checkId: "TOC-01",
    itemTitle: "Interactive TOC Navigation & URL Hash Check",
    verificationRequirement: "Click every TOC link: confirm smooth scroll to target H2/H3, correct URL `#hash` update, and that heading is visible (`not hidden under fixed header`).",
    inspectionMethod: "Keyboard Audit"
  },
  {
    category: "Table of Contents",
    checkId: "TOC-02",
    itemTitle: "Zero Dead Anchors or Duplicate IDs",
    verificationRequirement: "Inspect DOM to verify every TOC anchor matches exactly one unique `id` on the target heading (`no duplicate IDs or unlinked anchors`).",
    inspectionMethod: "DevTools Console/Network"
  },
  {
    category: "Navigation & Touch",
    checkId: "NAV-01",
    itemTitle: "Multi-Modal Menu & Touch Target Audit",
    verificationRequirement: "Test logo link, desktop navbar, mobile hamburger drawer, and footer links across mouse, keyboard `Tab`, and touch (`≥ 44x44px`).",
    inspectionMethod: "Multi-Viewport Emulation"
  },
  {
    category: "Runtime & Hydration",
    checkId: "RUN-01",
    itemTitle: "Zero Console Errors or Hydration Mismatches",
    verificationRequirement: "Open DevTools Console across all pages: verify 0 JavaScript errors, 0 React hydration warnings, 0 failed network calls (`HTTP 404/500`).",
    inspectionMethod: "DevTools Console/Network"
  }
];

// 5. REGRESSION AUDIT MATRIX
export const regressionAuditMatrix: RegressionAuditMatrixItem[] = [
  {
    regressionDomain: "Visual Regression",
    id: "REG-VIS",
    triggerEvent: "Modification of global design tokens (`index.css`), navbar/footer layout, or shared card components.",
    mandatoryVerificationItems: [
      "Capture before/after screenshots of Homepage, Article page, and Category hub across Desktop (`1280px`) and Mobile (`375px`).",
      "Verify zero unexpected padding shifts, font size changes, or broken grid layouts on unrelated pages.",
      "Ensure fixed sticky headers do not overlap page content or TOC drawers."
    ],
    passCriteria: "100% visual layout preservation across all unedited routes."
  },
  {
    regressionDomain: "Content Regression",
    id: "REG-CNT",
    triggerEvent: "Refactoring shared data structures (`articles.ts`, `glossary.ts`) or component rendering logic.",
    mandatoryVerificationItems: [
      "Verify all article text, code blocks, tables, and entity links remain fully populated and formatted.",
      "Check that author attribution, reading time calculations, and publication dates render accurately.",
      "Confirm internal links to parent cluster hubs and sibling guides resolve cleanly (`HTTP 200`)."
    ],
    passCriteria: "Zero data loss or broken content rendering across all published inventory."
  },
  {
    regressionDomain: "SEO Regression",
    id: "REG-SEO",
    triggerEvent: "Updates to `metadata.ts`, routing structures, or page header/meta tag implementations.",
    mandatoryVerificationItems: [
      "Inspect rendered HTML `<head>`: verify exact `<title>`, `<meta name='description'>`, `<link rel='canonical'>`, and Open Graph tags.",
      "Verify JSON-LD structured data (`Article`, `BreadcrumbList`, `Organization`) validates without warnings.",
      "Check `robots.txt` and `/sitemap.xml` emission to ensure all canonical routes remain indexable."
    ],
    passCriteria: "Zero missing or malformed SEO tags across all core routes."
  },
  {
    regressionDomain: "Accessibility Regression",
    id: "REG-ACC",
    triggerEvent: "UI component modifications, color adjustments, or interactive modal/drawer updates.",
    mandatoryVerificationItems: [
      "Perform keyboard `Tab` progression check: verify visible `ring-rose-500` focus indicator on all controls.",
      "Verify modal and search drawer focus trapping (`Tab loops within overlay; Escape closes and restores focus`).",
      "Check color contrast ratios against WCAG AA (`≥ 4.5:1 body text / ≥ 3:1 headings & icons`)."
    ],
    passCriteria: "100% compliance with EADS-EQL v1.0 15-Point Signoff Gate."
  },
  {
    regressionDomain: "Performance Regression",
    id: "REG-PERF",
    triggerEvent: "Addition of new client libraries, heavy animations, or third-party tracking scripts.",
    mandatoryVerificationItems: [
      "Compare Core Web Vitals targets: LCP ≤ 1.8s, INP ≤ 100ms, CLS ≤ 0.05.",
      "Audit network waterfall: ensure JavaScript bundles and total page weight remain under strict limits (`≤ 200KB initial JS`).",
      "Verify all above-the-fold hero images use `priority={true}` and below-the-fold images use native lazy loading."
    ],
    passCriteria: "Zero degradation in Core Web Vitals and EPCS-EQL performance tier."
  }
];

// 6. DEFECT CLASSIFICATION MATRIX
export const defectClassificationMatrix: DefectClassificationRule[] = [
  {
    severityLevel: "CRITICAL",
    definition: "Defect blocks core functionality, breaks entire page rendering (`fatal 500 error`), or creates severe security/privacy exposure.",
    businessAndUserImpact: "Users cannot access content or perform primary actions; damages institutional reputation instantly.",
    slaRemediationWindow: "Immediate resolution required (`≤ 2 hours / block all production deployments`)."
  },
  {
    severityLevel: "HIGH",
    definition: "Major feature or page section is broken (`e.g., TOC smooth scroll fails, search drawer traps focus, code copy button fails`).",
    businessAndUserImpact: "Significant degradation of user journey and technical utility; blocks key conversion and discovery paths.",
    slaRemediationWindow: "Same-day priority resolution (`≤ 12 hours prior to next publishing cycle`)."
  },
  {
    severityLevel: "MEDIUM",
    definition: "Significant quality or presentation problem (`e.g., misaligned grid card, missing image ALT text, contrast ratio 4.0:1 instead of 4.5:1`).",
    businessAndUserImpact: "Reduces visual professionalism and accessibility compliance without completely blocking reading.",
    slaRemediationWindow: "Scheduled remediation within current sprint (`≤ 48 hours`)."
  },
  {
    severityLevel: "LOW",
    definition: "Minor visual or functional anomaly (`e.g., slightly uneven margin on mobile footer, minor tooltip spacing issue`).",
    businessAndUserImpact: "Minimal user impact; observed mainly by QA auditors and design purists.",
    slaRemediationWindow: "Logged in maintenance backlog (`≤ 5 business days`)."
  },
  {
    severityLevel: "COSMETIC",
    definition: "Small polish or typographic refinement (`e.g., adjusting subtle border opacity or micro-animation timing`).",
    businessAndUserImpact: "No impact on utility or compliance; purely aesthetic optimization.",
    slaRemediationWindow: "Batched with quarterly UI polish releases."
  }
];

// 7. EVIDENCE-BASED COMPLETION LEDGER (`NO FALSE COMPLETION RULE`)
export const evidenceBasedCompletionLedger: EvidenceBasedCompletionEntry[] = [
  {
    taskId: "QA-VERIFY-01",
    taskTitle: "Live Route Inventory & Page Load Verification",
    targetUrlOrComponent: "All 8 Core Routes (`/, /about, /contact, /search, /articles/*, /categories/*, /admin/*, /404`)",
    testPerformed: "Systematic crawl across all static and dynamic routes verifying HTTP 200 response, zero fatal exceptions, and complete rendered content.",
    verificationResult: "PASS",
    issuesFoundDescription: "All core routes compiled and rendered cleanly with zero hydration warnings.",
    remediationApplied: "Continuous monitoring via automated build verification."
  },
  {
    taskId: "QA-VERIFY-02",
    taskTitle: "Multi-Modal Accessibility & Keyboard Focus Audit",
    targetUrlOrComponent: "Global Navigation Navbar & Search Drawer Modal (`/search`)",
    testPerformed: "Keyboard-only navigation using Tab, Shift+Tab, Arrow keys, and Escape across desktop and mobile hamburger drawers.",
    verificationResult: "PASS",
    issuesFoundDescription: "Focus ring visibility and modal focus trap verified 100% compliant with EADS-EQL v1.0.",
    remediationApplied: "Enforced `ring-2 ring-rose-500` across all interactive elements."
  },
  {
    taskId: "QA-VERIFY-03",
    taskTitle: "Image & Architecture Diagram Asset Inspection",
    targetUrlOrComponent: "Article Hero & Technical Diagram (`/articles/enterprise-ai-search-mcp-architecture`)",
    testPerformed: "Checked 14-Point Image Verification: asset loading, aspect ratio preservation, high-DPI rendering, explicit ALT text, and zero CLS.",
    verificationResult: "PASS",
    issuesFoundDescription: "Hero image loads instantly with `priority={true}`; diagram paired with descriptive `<figcaption>` and detailed ALT.",
    remediationApplied: "Standardized `<figure>` wrappers for all technical architecture illustrations."
  },
  {
    taskId: "QA-VERIFY-04",
    taskTitle: "Command Center Navigation Mesh Cross-Link Audit",
    targetUrlOrComponent: "Top Navigation Bars across all 8 Admin Command Centers",
    testPerformed: "Verified that ECGIS, EMIS, CCMS, EUJG-CRO, EPCS, ESPD, EADS, and EQVS badges link cleanly between all governance dashboards.",
    verificationResult: "PASS",
    issuesFoundDescription: "All 8 enterprise command centers interlock seamlessly with active route highlighting.",
    remediationApplied: "Codified unified header pattern across `/admin/*`."
  }
];
