export interface CoreWebVitalMetric {
  metric: "LCP" | "INP" | "CLS" | "TTFB";
  fullName: string;
  targetGood: string;
  targetNeedsImprovement: string;
  targetPoor: string;
  primaryRootCauses: string[];
  nextjsRemediationMandate: string;
  engineeringImpact: string;
}

export interface PageTypePerformanceItem {
  id: string;
  pageType: string;
  targetRenderingStrategy: string;
  targetLcpBudgetMs: number;
  targetJsBudgetKb: number;
  mandatoryOptimizationChecklist: string[];
  commonFailureTrap: string;
}

export interface JsReactOptimizationItem {
  id: string;
  optimizationCategory: "RSC vs Client Split" | "Bundle Tree Shaking & Imports" | "Hydration Cost Reduction" | "React Re-Render Mitigation" | "List Virtualization & Pagination" | "Third-Party Script Isolation";
  antiPatternExample: string;
  optimizedEngineeringPattern: string;
  empiricalProofCondition: string;
  performanceSavingsEstimate: string;
}

export interface AssetCachingRule {
  assetClass: "Above-Fold Hero Images" | "Inline Architecture Diagrams (SVG/PNG)" | "Typography & Google Fonts" | "CSS & Utility Bundles" | "API Responses & Data Fetching" | "Third-Party Analytics & Embeds";
  optimizationProtocol: string;
  cacheControlHeader: string;
  edgeCdnBehavior: string;
  qualityVsSpeedRule: string;
}

export interface PerformanceBudgetItem {
  metricId: string;
  budgetName: string;
  budgetLimit: string;
  warningThreshold: string;
  violationAction: string;
  monitoringTool: string;
}

export interface DiagnosticPathwayStep {
  stepOrder: number;
  layer: "SERVER (Origin / Database)" | "NETWORK (CDN / SSL / DNS)" | "BROWSER (HTML Parsing / TTFB)" | "JAVASCRIPT (Execution / Hydration / RSC)" | "ASSETS (Images / Fonts / CSS)" | "THIRD-PARTY SERVICES (Analytics / Embeds)";
  diagnosticSymptom: string;
  measurementCommandOrTool: string;
  remediationAction: string;
}

export interface ScalabilityChallengeItem {
  id: string;
  scaleChallenge: string;
  architecturalSolution: string;
  buildTimeMitigation: string;
}

export interface GateChecklistItem {
  id: string;
  category: string;
  item: string;
  verificationStandard: string;
}

// ==========================================
// 1. CORE WEB VITALS (CWV) REGISTRY
// ==========================================
export const coreWebVitalsRegistry: CoreWebVitalMetric[] = [
  {
    metric: "LCP",
    fullName: "Largest Contentful Paint (`Loading Speed & Visual Readiness`)",
    targetGood: "≤ 2.0s (`Strict Enterprise Budget < 2.5s`)",
    targetNeedsImprovement: "2.1s - 4.0s",
    targetPoor: "> 4.0s",
    primaryRootCauses: [
      "Slow Time to First Byte (`TTFB > 600ms`) due to un-cached server or database queries.",
      "Above-the-fold hero images loading without `priority` or via late-executing client script.",
      "Render-blocking CSS or synchronous fonts blocking HTML layout parsing.",
      "Oversized uncompressed PNG/JPEG assets served instead of WebP/AVIF."
    ],
    nextjsRemediationMandate: "Always apply `priority` (`fetchPriority='high'`) and exact `sizes` to the primary LCP hero image inside `next/image`. Enforce static pre-rendering (`RSC/SSG`) so HTML body arrives with pre-compiled DOM.",
    engineeringImpact: "Directly determines perceived load velocity and Google Search rankings (`Page Experience ranking signal`)."
  },
  {
    metric: "INP",
    fullName: "Interaction to Next Paint (`Responsiveness & Main Thread Health`)",
    targetGood: "≤ 150ms (`Strict Enterprise Budget < 200ms`)",
    targetNeedsImprovement: "151ms - 500ms",
    targetPoor: "> 500ms",
    primaryRootCauses: [
      "Heavy JavaScript bundle hydration locking up the browser main thread (`Long Tasks > 50ms`).",
      "Expansive React state trees triggering cascading re-renders across parent and child components.",
      "Synchronous DOM calculations inside click or keyboard event handlers (`e.g., sorting 1,000 items on click`).",
      "Third-party tracking scripts (`GTM, ads, chat widgets`) running synchronously on main thread."
    ],
    nextjsRemediationMandate: "Keep components as React Server Components (`RSC`) by default. Push `'use client'` boundaries down to small, leaf-level interactive buttons (`e.g., <CodeCopyButton>` only, not `<ArticleLayout>`). Wrap expensive state transitions in `React.useTransition()` or `useDeferredValue()`.",
    engineeringImpact: "Prevents UI freezing, ensures instant touch/click feedback, and protects mobile user engagement."
  },
  {
    metric: "CLS",
    fullName: "Cumulative Layout Shift (`Visual Stability & Zero Jitter`)",
    targetGood: "≤ 0.01 (`Strict Enterprise Budget < 0.05`)",
    targetNeedsImprovement: "0.02 - 0.25",
    targetPoor: "> 0.25",
    primaryRootCauses: [
      "Images or architecture diagrams rendered without explicit `width` and `height` or `aspect-ratio` CSS containers.",
      "Web fonts swapping late (`FOUT/FOIT`) with differing glyph geometry causing line reflow.",
      "Dynamic banner ads or client-side banners inserting above existing text after hydration.",
      "Late-loaded client components or async skeletons snapping into different dimensions than placeholders."
    ],
    nextjsRemediationMandate: "Enforce exact `width/height` on all `next/image` tags or wrap relative images inside an explicit `aspect-ratio` container (`e.g., aspect-video`). Use `next/font` with `adjustFontFallback: true` to zero out typography layout reflow.",
    engineeringImpact: "Eliminates frustrating accidental mis-clicks (`e.g., clicking ad instead of link`) and establishes institutional visual polish."
  },
  {
    metric: "TTFB",
    fullName: "Time to First Byte (`Server & CDN Latency`)",
    targetGood: "≤ 100ms (`Strict Enterprise Budget < 200ms`)",
    targetNeedsImprovement: "201ms - 600ms",
    targetPoor: "> 600ms",
    primaryRootCauses: [
      "Cold starts on serverless runtime functions without CDN caching.",
      "Uncached database queries (`Prisma/Postgres`) running synchronously inside `generateMetadata` or page render.",
      "Excessive network hops, un-optimized DNS lookups, or missing HTTP/3 & TLS 1.3 edge termination."
    ],
    nextjsRemediationMandate: "Deploy on global edge networks (`Vercel Edge/Cloudflare CDN`). Utilize static generation (`SSG`) and Incremental Static Regeneration (`ISR` with `revalidate: 3600`) so HTML is delivered from regional memory caches in `< 50ms`.",
    engineeringImpact: "Forms the baseline velocity for all subsequent loading metrics (`You cannot get a 1.2s LCP if TTFB takes 800ms`)."
  }
];

// ==========================================
// 2. 11-PAGE TYPE PERFORMANCE AUDIT FOUNDATION
// ==========================================
export const pageTypePerformanceAuditMatrix: PageTypePerformanceItem[] = [
  {
    id: "AUD-01",
    pageType: "Homepage (`/`)",
    targetRenderingStrategy: "SSG (Static Site Generation) with `ISR revalidate: 3600`",
    targetLcpBudgetMs: 1400,
    targetJsBudgetKb: 85,
    mandatoryOptimizationChecklist: [
      "Hero spotlight banner pre-rendered on server (`zero client fetch for top story`).",
      "Primary hero image loaded with `priority={true}` and `fetchPriority='high'`.",
      "Category grids and featured cards rendered as pure HTML (`zero client state`).",
      "CSS bundle scoped strictly to home layout and shared tokens."
    ],
    commonFailureTrap: "Loading dynamic article feeds via client-side `useEffect()` (`Causes layout shift and destroys LCP`)."
  },
  {
    id: "AUD-02",
    pageType: "Category / Pillar Pages (`/categories/[slug]`)",
    targetRenderingStrategy: "SSG (Static Site Generation) with static `generateStaticParams()`",
    targetLcpBudgetMs: 1600,
    targetJsBudgetKb: 75,
    mandatoryOptimizationChecklist: [
      "All 8 category hubs pre-compiled at build time.",
      "Pagination or 'Load More' buttons isolated into a micro client leaf component (`<CategoryPagination>`).",
      "Article grid card images lazy-loaded (`loading='lazy'`) with fixed aspect ratio (`aspect-video`)."
    ],
    commonFailureTrap: "Making the entire category page a client component just to handle interactive tag filtering (`Enforce server-driven search/filter params or leaf state`)."
  },
  {
    id: "AUD-03",
    pageType: "Article Explainer Pages (`/articles/[slug]`)",
    targetRenderingStrategy: "SSG / ISR (`revalidate: 86400` or on-demand webhook)",
    targetLcpBudgetMs: 1500,
    targetJsBudgetKb: 95,
    mandatoryOptimizationChecklist: [
      "Article markdown/MDX compiled on server into semantic HTML tree.",
      "Custom SVG/Mermaid architecture diagrams inlined or served with exact dimensions (`zero CLS`).",
      "Code copy buttons and interactive utility feedback (`Yes/No`) isolated into `<CodeCopyButton>` and `<FeedbackWidget>` client leaves.",
      "Table of Contents (`TOC`) generated on server; scroll spy handled via lightweight IntersectionObserver in leaf component."
    ],
    commonFailureTrap: "Hydrating 4,000 words of markdown text as React client state (`Destroys INP and bloated JS bundle`)."
  },
  {
    id: "AUD-04",
    pageType: "Cornerstone Authority Hubs (`/guides/[slug]`)",
    targetRenderingStrategy: "SSG / ISR (`Static pre-compilation`)",
    targetLcpBudgetMs: 1600,
    targetJsBudgetKb: 90,
    mandatoryOptimizationChecklist: [
      "Spoke directory navigation cards structured cleanly in server HTML.",
      "Downloadable architecture blueprint links (`PDF/MD`) served via direct static CDN URLs (`zero processing delay`).",
      "Interactive comparison filtering inside hubs isolated to tiny client filters (`<SpokeFilterBar>`)."
    ],
    commonFailureTrap: "Overloading cornerstone pages with heavy embedded third-party video players (`Always use lazy click-to-load video facades`)."
  },
  {
    id: "AUD-05",
    pageType: "Comparison & Trade-Off Pages (`/comparisons/[slug]`)",
    targetRenderingStrategy: "SSG / ISR (`revalidate: 43200`)",
    targetLcpBudgetMs: 1550,
    targetJsBudgetKb: 85,
    mandatoryOptimizationChecklist: [
      "Side-by-side comparison tables (`Latency, VRAM, License`) pre-rendered inside scrollable `<div className='overflow-x-auto'>` containers.",
      "Executive Decision Matrix table rendered above the fold (`LCP text block`).",
      "Interactive feature highlighter toggle isolated to small client wrapper."
    ],
    commonFailureTrap: "Serving massive uncompressed PNG comparison charts instead of structured HTML tables (`Tables are searchable, accessible, and zero-weight`)."
  },
  {
    id: "AUD-06",
    pageType: "Interactive Tools & Calculators (`/tools/[slug]`)",
    targetRenderingStrategy: "RSC Shell + Isolated Client Utility (`Hybrid RSC/CSR`)",
    targetLcpBudgetMs: 1400,
    targetJsBudgetKb: 110,
    mandatoryOptimizationChecklist: [
      "Page header, explanation deck, and SEO metadata pre-rendered via Server Component.",
      "Interactive calculation kernel (`e.g., <VramCalculatorEngine>`) dynamically imported as client component (`next/dynamic` with `ssr: false` if browser API required).",
      "All mathematical formulas calculated instantaneously inside `useMemo()` with debounced slider inputs (`INP < 50ms`)."
    ],
    commonFailureTrap: "Re-rendering the entire surrounding layout header and sidebar whenever a user slides the parameter bar (`Isolate state strictly inside calculator box`)."
  },
  {
    id: "AUD-07",
    pageType: "About & Trust Governance Pages (`/about`, `/admin/*`)",
    targetRenderingStrategy: "SSG (Public About) / RSC (Admin Command Centers)",
    targetLcpBudgetMs: 1300,
    targetJsBudgetKb: 80,
    mandatoryOptimizationChecklist: [
      "Advisory board bios and institutional constitution text delivered instantly via SSG.",
      "Admin command centers utilize RSC to fetch local data registries (`0ms network latency inside IDE build`).",
      "Tab switching in admin dashboards uses lightweight local React state without re-fetching full pages."
    ],
    commonFailureTrap: "Fetching local static registry JSONs over HTTP instead of direct TypeScript module imports (`Direct imports are instant and type-checked`)."
  },
  {
    id: "AUD-08",
    pageType: "Contact & Advisory Pages (`/contact`)",
    targetRenderingStrategy: "RSC Shell + Isolated Form Client Component",
    targetLcpBudgetMs: 1350,
    targetJsBudgetKb: 70,
    mandatoryOptimizationChecklist: [
      "Routing selection and SLA expectations rendered on server.",
      "Contact form validation (`<ContactForm>`) isolated to minimal client component.",
      "Form submission executes asynchronous fetch with instant optimistic loading state and disabled double-submit protection."
    ],
    commonFailureTrap: "Loading heavy external CAPTCHA libraries synchronously on initial load (`Use cloud turnstile/invisible captcha lazy-loaded on input focus`)."
  },
  {
    id: "AUD-09",
    pageType: "Search & Discovery Index (`/search`)",
    targetRenderingStrategy: "RSC Shell + Client Search Input (`CSR with Suspense/Debounce`)",
    targetLcpBudgetMs: 1500,
    targetJsBudgetKb: 95,
    mandatoryOptimizationChecklist: [
      "Search input debounced to 300ms before executing client query filter.",
      "Pre-compiled lightweight search index (`JSON or FlexSearch`) loaded asynchronously via web worker or chunked fetch.",
      "Instant skeleton cards shown during search transitions (`zero layout jumping`)."
    ],
    commonFailureTrap: "Pulling a 15MB database dump to the client to do string matching (`Enforce chunked index `< 200KB` or server API lookup`)."
  },
  {
    id: "AUD-10",
    pageType: "Dynamic Code & Benchmark Routes (`/benchmarks/[id]`)",
    targetRenderingStrategy: "ISR (`revalidate: 3600`) or On-Demand Webhook",
    targetLcpBudgetMs: 1600,
    targetJsBudgetKb: 90,
    mandatoryOptimizationChecklist: [
      "Raw benchmark data compiled into clean summary charts on server.",
      "Code blocks syntax-highlighted at build time (`Shiki/Prism on server`), eliminating client-side highlighter bundle weight (`Saves ~150KB JS`).",
      "Interactive metric toggles (`p99 vs p50 latency`) isolated to chart leaf component."
    ],
    commonFailureTrap: "Importing heavy syntax highlighting libraries (`highlight.js`) in client components (`Enforce build-time server-side code coloring`)."
  },
  {
    id: "AUD-11",
    pageType: "Error Pages (`404.tsx`, `500.tsx`, `error.tsx`)",
    targetRenderingStrategy: "Pure Static SSG (`Zero external dependencies`)",
    targetLcpBudgetMs: 900,
    targetJsBudgetKb: 30,
    mandatoryOptimizationChecklist: [
      "Must be completely self-contained and static (`Zero database lookups or API calls`).",
      "Provides clear navigation recovery links (`Home, Search, Top Pillars`).",
      "Loads instantly even if backend services or APIs are experiencing total outages."
    ],
    commonFailureTrap: "Making 404/500 pages dynamic routes that query the database for 'recommended articles' (`Causes cascading failures during DB spikes`)."
  }
];

// ==========================================
// 3. JAVASCRIPT & REACT OPTIMIZATION LEDGER
// ==========================================
export const javascriptAndReactOptimizationLedger: JsReactOptimizationItem[] = [
  {
    id: "OPT-01",
    optimizationCategory: "RSC vs Client Split",
    antiPatternExample: "Placing `'use client'` at the very top of `ArticlePage.tsx` or `Layout.tsx` because one button inside needs `onClick`.",
    optimizedEngineeringPattern: "Keep `ArticlePage.tsx` as an RSC. Extract only the interactive `<CodeCopyButton code={content} />` or `<FeedbackWidget />` into separate files marked `'use client'`. Server renders 95% of HTML.",
    empiricalProofCondition: "Inspect Next.js build output CLI summary (`○ Static vs λ Dynamic vs Client Bundle size`).",
    performanceSavingsEstimate: "Saves ~140KB of client JS hydration and reduces INP by 65ms."
  },
  {
    id: "OPT-02",
    optimizationCategory: "Bundle Tree Shaking & Imports",
    antiPatternExample: "`import _ from 'lodash'` or `import * as Icons from 'lucide-react'` inside client components.",
    optimizedEngineeringPattern: "Use modular sub-path imports (`import debounce from 'lodash/debounce'`) and explicit named imports (`import { ShieldCheck, Zap } from 'lucide-react'`). Enforce package tree shaking.",
    empiricalProofCondition: "Run `@next/bundle-analyzer` to verify zero duplicate or monolithic library inclusions.",
    performanceSavingsEstimate: "Reduces first-load gzipped JavaScript payload by 80KB - 250KB."
  },
  {
    id: "OPT-03",
    optimizationCategory: "Hydration Cost Reduction",
    antiPatternExample: "Rendering complex below-the-fold interactive modals, comment sections, or calculation tools during initial page hydration.",
    optimizedEngineeringPattern: "Use `next/dynamic` with `ssr: false` and `loading: () => <Skeleton />` for heavy below-the-fold interactive widgets. Hydrate only when scrolled into view or clicked.",
    empiricalProofCondition: "Chrome DevTools Performance tab: check Total Blocking Time (`TBT < 150ms`) and Hydration timeline.",
    performanceSavingsEstimate: "Cuts main thread blocking time by 40% on low-end Android mobile devices."
  },
  {
    id: "OPT-04",
    optimizationCategory: "React Re-Render Mitigation",
    antiPatternExample: "Storing non-visual tracking tokens, interval IDs, or scroll positions inside `useState()` causing continuous re-renders.",
    optimizedEngineeringPattern: "Store mutable non-visual references inside `useRef()`. For complex state structures, hoist state to the lowest common parent and memoize callback handlers via `useCallback` when passed to deeply nested children.",
    empiricalProofCondition: "React DevTools Profiler (`Highlight updates when components render`). Zero flash on typing or scrolling.",
    performanceSavingsEstimate: "Prevents 100+ unnecessary frame re-renders during fast scrolling and form typing (`INP < 50ms`)."
  },
  {
    id: "OPT-05",
    optimizationCategory: "List Virtualization & Pagination",
    antiPatternExample: "Rendering 500+ category cards or glossary rows simultaneously into the DOM (`Causes massive DOM node counts > 2,000`).",
    optimizedEngineeringPattern: "Enforce strict server-side pagination (`24 cards per page`) or window virtualization (`@tanstack/react-virtual`) for infinite scrolling feeds so only visible DOM nodes exist.",
    empiricalProofCondition: "Lighthouse audit check: `Avoid an excessive DOM size` (`Target < 1,200 nodes total`).",
    performanceSavingsEstimate: "Reduces style recalculation and layout reflow time by ~120ms on mobile."
  },
  {
    id: "OPT-06",
    optimizationCategory: "Third-Party Script Isolation",
    antiPatternExample: "Inserting raw `<script src='https://analytics.vendor.com/bundle.js'>` directly in `<head>` without loading strategy.",
    optimizedEngineeringPattern: "Always use `next/script` with `strategy='lazyOnload'` for non-critical analytics or `strategy='worker'` (`Partytown`) to offload third-party scripts completely to web workers.",
    empiricalProofCondition: "Lighthouse check: `Reduce the impact of third-party code` (`Target < 50ms main thread execution`).",
    performanceSavingsEstimate: "Eliminates 100% of third-party script blocking from Core Web Vitals measurements."
  }
];

// ==========================================
// 4. ASSET & CACHING GOVERNANCE MATRIX
// ==========================================
export const assetAndCachingGovernanceMatrix: AssetCachingRule[] = [
  {
    assetClass: "Above-Fold Hero Images",
    optimizationProtocol: "Must be served in modern AVIF/WebP formats with exact `sizes` attribute matching responsive breakpoints (`(max-width: 768px) 100vw, 1200px`). Pre-load injected via `priority` tag.",
    cacheControlHeader: "`public, max-age=31536000, immutable` (for content-hashed assets inside `/next/static/media/`).",
    edgeCdnBehavior: "Cached across all edge PoP nodes globally; automatic format negotiation (`Accept: image/avif`) via Edge CDN image optimization engine.",
    qualityVsSpeedRule: "Quality set to `quality={85}` (`Strict balance: sharp text in architecture diagrams without file bloat`)."
  },
  {
    assetClass: "Inline Architecture Diagrams (SVG/PNG)",
    optimizationProtocol: "Prefer vector `SVG` with clean viewBox definitions and SVGO compression for diagrams. If complex raster PNG required, compress via PNGQuant/AVIF.",
    cacheControlHeader: "`public, max-age=31536000, immutable` (`Static assets`).",
    edgeCdnBehavior: "Served directly from CDN edge cache with Gzip/Brotli compression for SVG text nodes.",
    qualityVsSpeedRule: "Never blur technical diagrams. If compression degrades text readability, preserve sharpness at slightly higher KB."
  },
  {
    assetClass: "Typography & Google Fonts",
    optimizationProtocol: "Utilize `next/font/google` (`Inter, JetBrains Mono`) for zero-external-network requests. Subsets restricted to `['latin']` with exact variable font weights (`400, 600, 800`).",
    cacheControlHeader: "`public, max-age=31536000, immutable` (`Font files embedded in self-hosted static build`).",
    edgeCdnBehavior: "Delivered instantly from origin build; zero DNS lookups to `fonts.googleapis.com`.",
    qualityVsSpeedRule: "`display: swap` coupled with automatic `adjustFontFallback` zero-layout-shift metrics."
  },
  {
    assetClass: "CSS & Utility Bundles",
    optimizationProtocol: "Vanilla CSS / Tailwind utility classes purged at build time (`zero unused CSS rules`). No blocking external stylesheets.",
    cacheControlHeader: "`public, max-age=31536000, immutable` (`Hash-stamped JS/CSS bundles`).",
    edgeCdnBehavior: "Brotli compressed at edge (`~75% payload compression ratio over raw text`).",
    qualityVsSpeedRule: "Maintain clean design system tokens (`colors, spacing, shadows`) without utility bloat."
  },
  {
    assetClass: "API Responses & Data Fetching",
    optimizationProtocol: "In Next.js App Router, `fetch()` calls defaulted to `cache: 'force-cache'` (`SSG`) or `next: { revalidate: 3600 }` (`ISR`). Dynamic user routes opt-in explicitly.",
    cacheControlHeader: "`s-maxage=3600, stale-while-revalidate=86400` (`Edge cache serves fresh for 1 hour, background refreshes while serving stale`).",
    edgeCdnBehavior: "CDN Edge intercepts fetch requests, serving instant cached JSON without hitting origin server.",
    qualityVsSpeedRule: "Never cache personal user data or live security verification keys (`Enforce no-store on admin mutations`)."
  },
  {
    assetClass: "Third-Party Analytics & Embeds",
    optimizationProtocol: "Load only strictly vetted enterprise analytics (`zero invasive ad trackers`). Embeds (`YouTube/Twitter/Codepen`) replaced with lightweight static image facades until clicked (`Lite-YouTube pattern`).",
    cacheControlHeader: "`no-cache` or vendor controlled (`Isolated inside web worker strategy`).",
    edgeCdnBehavior: "Facaded previews served from our edge CDN; heavy third-party iframe assets only requested upon explicit user click.",
    qualityVsSpeedRule: "Zero third-party script allowed to delay main thread interactive execution (`INP preservation`)."
  }
];

// ==========================================
// 5. PERFORMANCE BUDGET & ALERT LEDGER
// ==========================================
export const performanceBudgetAlertLedger: PerformanceBudgetItem[] = [
  {
    metricId: "BUD-01",
    budgetName: "Total Route Gzipped JavaScript Payload",
    budgetLimit: "≤ 100 KB gzipped per initial page load (`Strict limit`)",
    warningThreshold: "85 KB gzipped (`Trigger investigation`)",
    violationAction: "Block PR / CI Build (`Requires explicit engineering override and tree-shaking audit`).",
    monitoringTool: "Next.js Build CLI output & `@next/bundle-analyzer` in CI pipeline."
  },
  {
    metricId: "BUD-02",
    budgetName: "Above-the-Fold LCP Hero Asset Weight",
    budgetLimit: "≤ 150 KB (`Optimized WebP/AVIF`)",
    warningThreshold: "120 KB (`Trigger image compression alert`)",
    violationAction: "Flag in `EPCS-EQL` audit log; require downscaling or format conversion.",
    monitoringTool: "Automated Lighthouse CI / WebPageTest mobile throttled audit."
  },
  {
    metricId: "BUD-03",
    budgetName: "Total Page Network Weight (`All Assets`)",
    budgetLimit: "≤ 1.2 MB uncompressed across all resources (`HTML + JS + CSS + Images`)",
    warningThreshold: "1.0 MB (`Trigger review of embedded media and images`)",
    violationAction: "Mandate lazy-loading or pagination for secondary visual assets.",
    monitoringTool: "Chrome DevTools Network waterfall & Lighthouse CI."
  },
  {
    metricId: "BUD-04",
    budgetName: "Server Time to First Byte (`TTFB`)",
    budgetLimit: "≤ 200 ms (`Edge CDN delivery`)",
    warningThreshold: "120 ms (`Trigger edge cache hit rate inspection`)",
    violationAction: "Investigate uncached origin database queries or missing `revalidate` tags.",
    monitoringTool: "Vercel Analytics & Cloudflare Edge TTFB telemetry."
  },
  {
    metricId: "BUD-05",
    budgetName: "Interaction to Next Paint (`INP Latency`)",
    budgetLimit: "≤ 150 ms (`P95 across mobile devices`)",
    warningThreshold: "100 ms (`Trigger main thread long-task profiling`)",
    violationAction: "Audit event handlers for synchronous heavy loops; push component to web worker or defer transition.",
    monitoringTool: "Real User Monitoring (`RUM`) via Web-Vitals JavaScript SDK & GA4 dataLayer."
  }
];

// ==========================================
// 6. ROOT CAUSE DIAGNOSTIC PATHWAY
// ==========================================
export const rootCauseInvestigationPathway: DiagnosticPathwayStep[] = [
  {
    stepOrder: 1,
    layer: "SERVER (Origin / Database)",
    diagnosticSymptom: "TTFB is consistently > 600ms across all regions; `waiting (TTFB)` bar is long in network tab.",
    measurementCommandOrTool: "`curl -w 'TTFB: %{time_starttransfer}s\n' -o /dev/null -s https://techlume.ai/` or Vercel Serverless Function logs.",
    remediationAction: "Verify whether route is executing dynamic SSR without caching. Add `export const revalidate = 3600` for ISR or wrap database queries inside `unstable_cache()` with explicit tag invalidation."
  },
  {
    stepOrder: 2,
    layer: "NETWORK (CDN / SSL / DNS)",
    diagnosticSymptom: "TTFB is fast in US East but > 800ms in Europe/Asia; `x-vercel-cache: MISS` header observed.",
    measurementCommandOrTool: "Inspect HTTP response headers (`x-vercel-cache`, `cf-cache-status`, `age`) and global ping latency.",
    remediationAction: "Ensure static paths are compiled into Edge CDN cache (`MISS -> HIT`). Check that static assets carry `public, max-age=31536000, immutable` headers."
  },
  {
    stepOrder: 3,
    layer: "BROWSER (HTML Parsing / TTFB)",
    diagnosticSymptom: "HTML body arrives quickly, but screen remains blank white for > 1.5s (`Render blocking`).",
    measurementCommandOrTool: "Chrome DevTools Performance tab (`check purple Layout & Parse HTML blocks`) and Lighthouse 'Eliminate render-blocking resources'.",
    remediationAction: "Remove synchronous `<link rel='stylesheet'>` from third parties. Ensure CSS is inline/purged (`Next.js built-in CSS processing`) and fonts use `next/font`."
  },
  {
    stepOrder: 4,
    layer: "JAVASCRIPT (Execution / Hydration / RSC)",
    diagnosticSymptom: "Page visually appears, but buttons freeze or lag on touch; INP exceeds 300ms; 'Long Tasks' (> 50ms red triangles) seen in Profiler.",
    measurementCommandOrTool: "Chrome DevTools Performance tab (`Main thread flame chart`) & `@next/bundle-analyzer`.",
    remediationAction: "Convert top-level layout wrappers back to React Server Components (`RSC`). Strip heavy client dependencies (`moment.js, lodash`). Wrap heavy interactive state changes in `startTransition()`."
  },
  {
    stepOrder: 5,
    layer: "ASSETS (Images / Fonts / CSS)",
    diagnosticSymptom: "LCP takes > 3.5s due to hero image arriving late; layout shifts (`CLS > 0.15`) as images snap in.",
    measurementCommandOrTool: "Lighthouse 'Properly size images' & 'Serve images in next-gen formats' audits.",
    remediationAction: "Convert raw `<img>` tags to `next/image` with `priority`, `sizes`, and exact `width/height`. Set format to WebP/AVIF."
  },
  {
    stepOrder: 6,
    layer: "THIRD-PARTY SERVICES (Analytics / Embeds)",
    diagnosticSymptom: "Page speed drops from 98 to 65 after adding tag manager, ad widgets, or social sharing buttons.",
    measurementCommandOrTool: "Lighthouse 'Reduce the impact of third-party code' & Network tab filtering by third-party domains.",
    remediationAction: "Move scripts to `next/script` with `strategy='lazyOnload'`. Replace heavy embedded YouTube/social frames with lightweight static image click-facades."
  }
];

// ==========================================
// 7. SCALABILITY & BUILD PERFORMANCE LEDGER
// ==========================================
export const scalabilityAndBuildPerformanceLedger: ScalabilityChallengeItem[] = [
  {
    id: "SCL-01",
    scaleChallenge: "10,000+ Technical Articles at Build Time (`SSG Build Timeout`)",
    architecturalSolution: "Do not attempt to pre-render 10,000 pages during `next build` inside a 15-minute CI timeout. Pre-compile only the top 250 highest-traffic articles (`generateStaticParams` filtered by traffic/recency).",
    buildTimeMitigation: "All remaining 9,750+ long-tail articles use on-demand Incremental Static Regeneration (`ISR` with `fallback: 'blocking'`). The first user request renders and caches the page at the edge in `< 400ms`; subsequent requests are instant (`0ms build bloat`)."
  },
  {
    id: "SCL-02",
    scaleChallenge: "Massive High-Resolution Image Library (`100,000+ Assets`)",
    architecturalSolution: "Store raw high-resolution diagrams and images inside dedicated cloud object storage (`AWS S3 / Cloudflare R2`). Never bundle 50GB of raw images inside the git repository (`Git bloat`).",
    buildTimeMitigation: "Utilize Edge CDN Image Optimization (`Next.js Image Optimization API / Cloudflare Polish`). Images are transformed into AVIF/WebP and resized dynamically upon first request, then cached globally."
  },
  {
    id: "SCL-03",
    scaleChallenge: "Dynamic Tag & Entity Cross-Indexing (`Graph Complexity`)",
    architecturalSolution: "Maintain the `enterprise-knowledge-graph.ts` and `topics.ts` as structured pre-compiled index structures. Avoid running nested O(N^2) graph traversals during runtime page rendering.",
    buildTimeMitigation: "Compile relationship lookup tables (`articleSlug -> relatedSlugs[]`) once at build or data-sync time so cluster spoke recommendations require a single O(1) hash lookup."
  },
  {
    id: "SCL-04",
    scaleChallenge: "Real-Time Search & Autocomplete Latency (`Search Index Scale`)",
    architecturalSolution: "For inventories > 1,000 articles, transition from client-side monolithic JSON search index to lightweight edge search (`FlexSearch chunked index` or dedicated Meilisearch/Algolia edge instance).",
    buildTimeMitigation: "Generate chunked search index shards (`search-index-1.json`, `search-index-2.json`) at build time so the client browser only downloads the exact shard needed for the user's search query."
  },
  {
    id: "SCL-05",
    scaleChallenge: "Sitemap Generation & Indexing (`Sitemap Scale Limits`)",
    architecturalSolution: "Google Search limits sitemaps to 50,000 URLs or 50MB. Implement automated sitemap splitting (`sitemap-index.xml` routing to `sitemap-articles-1.xml`, `sitemap-guides.xml`, `sitemap-categories.xml`).",
    buildTimeMitigation: "Generate sitemap XML shards dynamically via Next.js `app/sitemap.ts` API routes utilizing database streaming or pre-compiled slug registries without memory leaks."
  }
];

// ==========================================
// 8. MANDATORY 15-POINT EPCS-EQL COMPLETION GATE
// ==========================================
export const mandatoryEpcsEqlSignoffGate: GateChecklistItem[] = [
  {
    id: "EPCS-01",
    category: "Server Response & TTFB Baseline",
    item: "Verify that Server Time to First Byte (`TTFB`) is `≤ 200ms` across global edge locations via edge caching (`SSG/ISR/Edge Headers`).",
    verificationStandard: "Edge response headers confirm `HIT` or `STALE` status; zero cold-start database blocks on critical paths."
  },
  {
    id: "EPCS-02",
    category: "Rendering Strategy Selection",
    item: "Verify that every page utilizes the simplest rendering architecture justified by requirements (`SSG/ISR/RSC by default; CSR/Suspense strictly for interactive kernels`).",
    verificationStandard: "Zero full-page client-side rendered (`CSR`) articles or explainers; 100% pre-compiled HTML shells."
  },
  {
    id: "EPCS-03",
    category: "Largest Contentful Paint (`LCP < 2.5s`)",
    item: "Verify that LCP occurs within `≤ 2.0s` (`Absolute ceiling < 2.5s`). Primary hero images carry `priority` and explicit `sizes` without render-blocking scripts.",
    verificationStandard: "Lighthouse / WebPageTest mobile 4G throttled audit confirms LCP passes in green band."
  },
  {
    id: "EPCS-04",
    category: "Interaction to Next Paint (`INP < 200ms`)",
    item: "Verify interaction responsiveness (`INP ≤ 150ms`). Main thread execution is free of long tasks (`> 50ms`), heavy JS hydration traps, or synchronous sorting loops.",
    verificationStandard: "Chrome Profiler interaction tracking confirms rapid feedback under mobile CPU throttling."
  },
  {
    id: "EPCS-05",
    category: "Cumulative Layout Shift (`CLS < 0.05`)",
    item: "Verify visual stability (`CLS ≤ 0.01`). All images, diagrams, and embeds possess explicit `width/height` or `aspect-ratio` containers; zero FOUT typography jumping.",
    verificationStandard: "Zero unexpected layout shifting observed during slow network loading or dynamic content hydration."
  },
  {
    id: "EPCS-06",
    category: "Hero Image & Diagram Quality Preservation",
    item: "Verify that while images are optimized into WebP/AVIF, technical architecture diagrams and code screenshots remain crystal sharp, legible, and visually premium (`Fast AND Premium`).",
    verificationStandard: "Visual verification inspection confirms zero compression artifacts, blurriness, or illegible text lines."
  },
  {
    id: "EPCS-07",
    category: "Font Loading & Typography Optimization",
    item: "Verify self-hosted font delivery (`next/font`), strict subset pruning (`latin`), minimal font weights, and `adjustFontFallback` enabling zero layout reflow.",
    verificationStandard: "Zero network requests to external Google Fonts domains; instant typography display."
  },
  {
    id: "EPCS-08",
    category: "JavaScript Bundle Budget (`≤ 100KB gzipped`)",
    item: "Verify that initial route JS bundle remains `≤ 100KB gzipped`. Unused libraries tree-shaken, heavy tools (`shiki, chart engines`) kept on server or dynamically imported.",
    verificationStandard: "Next.js build CLI summary and `@next/bundle-analyzer` confirm adherence to strict route budget."
  },
  {
    id: "EPCS-09",
    category: "CSS Performance & Style Tree Shaking",
    item: "Verify that CSS is purged (`zero unused styles`), utility classes modularized, and global blocking stylesheets eliminated.",
    verificationStandard: "Lighthouse 'Reduce unused CSS' audit confirms minimal stylesheet footprint (`< 20KB gzipped`)."
  },
  {
    id: "EPCS-10",
    category: "Third-Party Script Audit (`Value vs Cost`)",
    item: "Verify that every third-party script (`Analytics, Embeds`) is strictly vetted, loaded via `strategy='lazyOnload'` / `worker`, or facaded with click-to-load previews.",
    verificationStandard: "Zero third-party scripts block main thread initial rendering or Core Web Vitals thresholds."
  },
  {
    id: "EPCS-11",
    category: "Mobile Performance Across Slow Networks",
    item: "Test and verify across small/medium/large mobile touch viewports on throttled 4G connections: zero horizontal overflow, touch-friendly CTAs (`≥ 44px`), fast hydration.",
    verificationStandard: "100% viewport integrity and responsive interactions verified under simulated mobile constraints."
  },
  {
    id: "EPCS-12",
    category: "Caching Strategy (`Freshness vs Speed`)",
    item: "Verify correct Cache-Control headers (`immutable` static assets, `stale-while-revalidate` API data, `ISR` article pages) preventing both stale technical data and slow origins.",
    verificationStandard: "HTTP header inspection confirms exact alignment with `assetAndCachingGovernanceMatrix`."
  },
  {
    id: "EPCS-13",
    category: "Scalability Architecture (`Large Inventory Readiness`)",
    item: "Verify that build and indexing pipelines scale cleanly to thousands of articles via `ISR fallback: blocking`, CDN image optimization, O(1) graph lookups, and split sitemaps.",
    verificationStandard: "Build configuration verified against `scalabilityAndBuildPerformanceLedger`."
  },
  {
    id: "EPCS-14",
    category: "Performance Regression & Budget Telemetry",
    item: "Verify active `BEFORE -> CHANGE -> AFTER` comparison protocols in CI pipelines and real-time RUM telemetry monitoring LCP/INP/CLS degradation alerts.",
    verificationStandard: "All 5 performance budget thresholds registered and actively enforced."
  },
  {
    id: "EPCS-15",
    category: "Live Real-User Experience Certification",
    item: "Verify that the final experience satisfies our core constitution: `DO NOT CHOOSE BETWEEN PERFORMANCE AND QUALITY. ENGINEER BOTH.` Real users on real devices experience instant, premium technical authority.",
    verificationStandard: "Mandatory signoff certified across all 15 `EPCS-EQL v1.0` institutional performance gates."
  }
];
