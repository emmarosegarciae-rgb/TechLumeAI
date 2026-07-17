# TechlumeAI Enterprise Editorial Publishing System — Master Specification (`EDITORIAL_FRAMEWORK.md`)

## 1. Executive Summary & Operational Mandate

This document is the **operating brain and specification** of **TechlumeAI**. Our mandate is to produce research-backed, technically definitive, enterprise-grade content that rivals leading technology publications (*Wired*, *Ars Technica*, *The Verge*, *Tom's Hardware*, *PCMag*) while remaining 100% original in structure, design, and analysis.

We never publish generic AI summaries, filler text, or machine-generated prose. Every article published on TechlumeAI is designed as an authoritative reference capable of ranking across **Google Search**, **Google AI Overviews**, **ChatGPT**, **Claude**, **Perplexity**, **Gemini**, and **Microsoft Copilot**.

---

## 2. The 8 Authoritative Editorial Pillars (`Site Taxonomy`)

Every article must map precisely to one of our 8 permanent pillars (`CategorySlug` in `lib/types.ts`):

1. **`ai-engineering` (AI Engineering & LLMs - ⭐⭐⭐⭐⭐)**: Multi-agent architectures, MCP (Model Context Protocol), RAG loops, fine-tuning methodologies, and inference routing.
2. **`enterprise-ai` (Enterprise AI - ⭐⭐⭐⭐⭐)**: Governance, zero-trust security, compliance frameworks (`EU AI Act`, `NIST AI RMF`), FinOps cost control, and adoption roadmaps.
3. **`ai-tools` (AI Tools - ⭐⭐⭐⭐⭐)**: Technical teardowns and benchmarks of production platforms (`Claude`, `ChatGPT`, `Gemini`, `Perplexity`, `Cursor`, `Windsurf`).
4. **`programming-dev` (Programming & Development - ⭐⭐⭐⭐☆)**: TypeScript, Next.js, Python engineering, API design, MCP server deployment, and AI-assisted DevOps.
5. **`ai-business` (AI Business - ⭐⭐⭐⭐☆)**: Enterprise Centers of Excellence (`CoE`), skills gap evaluations, hiring benchmarks, and operator playbooks.
6. **`cybersecurity-ai` (Cybersecurity + AI - ⭐⭐⭐⭐☆)**: Prompt injection defense, model jailbreaking mitigation, red teaming, and autonomous SOC triage.
7. **`ai-hardware` (AI Hardware - ⭐⭐⭐⭐☆)**: Silicon architectures, NVIDIA/AMD cluster scaling, quantization economics, and edge inference.
8. **`future-tech` (Future Technology - ⭐⭐⭐☆☆)**: Physical AI, robotics foundation models, quantum horizon systems, and autonomous robotics.

---

## 3. The Master Editorial Template (`app/articles/[slug]/page.tsx`)

Every article published on TechlumeAI automatically renders a standardized **12-Zone Editorial Template** directly from its data payload:

| Zone | Template Requirement | UI Component / Rendering Path | Source Data Field |
| :--- | :--- | :--- | :--- |
| **1. Hero** | Category badge, tags, H1 title, dek, hero vector | `<header>` in `app/articles/[slug]/page.tsx` | `article.title`, `article.dek`, `article.image` |
| **2. Author** | Inline byline header & complete author bio card | `<AuthorCard />` at `page.tsx:251` & `AuthorLink` | `article.author` (`Author` type lookup) |
| **3. Reading Time** | Calculated reading time badge | `<span className="Clock">` at `page.tsx:140` | `article.readingMinutes` |
| **4. Last Updated** | Published date & verified update timestamp | `<span className="CalendarDays">` at `page.tsx:135` | `article.updatedAt` / `article.publishedAt` |
| **5. Key Takeaways** | High-signal executive summary bullet panel | `<KeyTakeawaysCard />` at `page.tsx:196` & `TldrBlock` | `article.tldr` array or `tldr` content block |
| **6. TOC** | Interactive sticky sidebar & mobile drawer navigation | `<TableOfContents />` at `page.tsx:148` & `319` | Auto-extracted from `article.content` (`heading`) |
| **7. Diagram Blocks** | Handcrafted SVG technical topologies & workflows | `<ArticleContent />` (`image` & `timeline` blocks) | `ArticleBlock` (`image` / `timeline` / `code`) |
| **8. Comparison Tables** | Multi-dimensional feature & trade-off matrices | `<ArticleContent />` (`comparison-matrix` block) | `ArticleBlock` (`comparison-matrix` / `table`) |
| **9. FAQs** | Expandable schema-backed question/answer accordion | `<section className="FAQ">` at `page.tsx:228` | `article.faq` array |
| **10. Related Articles**| Sidebar quick links & 3-column related coverage grid | `<RelatedArticles />` grid at `page.tsx:347` | Filtered from `articles.ts` matching category |
| **11. Newsletter** | Inline briefing CTA & sticky footer banner | `<NewsletterInline />` at `page.tsx:274` | Standardized editorial briefing signup |
| **12. References** | Verifiable academic, documentation & enterprise sources | `<section className="References">` at `page.tsx:249` | `article.references` array |

---

## 4. The Magazine Component Library (18 Standardized React Components)

Our frontend framework (`components/article/` & `components/sections/`) provides reusable, highly polished React components that enforce visual consistency across all articles:

1. **`Hero`**: Renders category pills, tags, editorial title (`H1`), dek, author byline, publication/update timestamps, reading time, and hero illustration container.
2. **`AuthorCard` (`components/article/author-card.tsx` / `page.tsx:251`)**: Displays author avatar, name, bio, social links (`Twitter/X`, `LinkedIn`, `GitHub`), and link to full author archive.
3. **`TOC` (`components/article/table-of-contents.tsx`)**: Parses `H2` headers from content, tracks active scroll position via Intersection Observer, and provides smooth jump navigation.
4. **`KeyTakeaways` (`page.tsx:196` & `TldrBlock`)**: Renders numbered executive summary bullets with `CheckCircle2` badging and subtle cyan gradient styling.
5. **`DefinitionBox` (`DefinitionBlock` in `article-content.tsx`)**: Isolates definitive entity explanations with `Bookmark` icon, bold concept header, concise definition, and real-world application context.
6. **`InfoCard` (`CalloutBlock` in `article-content.tsx`)**: Highlights critical editorial notes, warnings, or tips with distinct border accents and uppercase category tracking.
7. **`ComparisonTable` (`ComparisonMatrixBlock` in `article-content.tsx`)**: Responsive multi-column table supporting automatic boolean rendering (`YES/NO`, `Check/Cross` icons) and highlighted recommendation columns.
8. **`ProsCons` (`page.tsx:199`)**: Dual-column side-by-side comparison box rendering verified advantages (`Pros`) and operational risks (`Considerations`).
9. **`Diagram` (`ImageBlock` in `article-content.tsx`)**: Enclosed figure container with `next/image` responsive sizing, subtle borders, and monospace caption support.
10. **`Statistics` (`StatCardBlock` in `article-content.tsx`)**: Large-format data callout (`5xl/6xl` typography) with benchmark context and verified primary source citation.
11. **`Checklist` (`ChecklistBlock` in `article-content.tsx`)**: Interactive implementation audit list with styled checkbox inputs, bold labels, and technical implementation notes.
12. **`FAQ` (`page.tsx:228`)**: Expandable `<details>`/`<summary>` accordion linked directly to automated `JSON-LD FAQPage` schema generation.
13. **`Quote` (`QuoteBlock` & `ExpertOpinionBlock` in `article-content.tsx`)**: Styled pull-quotes featuring author avatar, name, corporate title, and company affiliation.
14. **`CTA` (`components/article/article-actions.tsx`)**: Floating action panel for bookmarking, text resizing, copying links, and social sharing.
15. **`RelatedArticles` (`ArticleCard` grid in `page.tsx:347`)**: Automated grid showcasing 3 high-relevance articles from the same editorial pillar.
16. **`Newsletter` (`components/sections/newsletter-inline.tsx`)**: Editorial briefing subscription callout with input validation and instant feedback.
17. **`Breadcrumb` (`components/article/breadcrumbs.tsx`)**: Accessible structural navigation bar (`Home > Pillar > Article`) linked to `BreadcrumbList` schema.
18. **`ProgressBar` (`components/article/reading-progress.tsx`)**: Fixed top reading progress indicator bar showing real-time scroll completion percentage.
19. **`ShareButtons` (`components/article/share-bar.tsx`)**: Multi-platform sharing bar (`Twitter/X`, `LinkedIn`, `Facebook`, `Copy Link`).

---

## 5. Editorial Design System Standards

All components adhere to our unified design system codified in `index.css` and `article-content.tsx`:

- **Spacing (`Spacing`)**: Strictly based on a `4px / 8px` rhythm. Article prose uses `my-6` for paragraphs, `my-8` for major blocks (`definition`, `comparison-matrix`, `case-study`), and `gap-4` / `gap-6` for grids.
- **Typography (`Typography`)**:
  - `Display / Headings`: `font-display` (`Outfit`), `font-black`, tight letter spacing (`tracking-normal` / `tracking-tight`), and clear size scale (`text-4xl` to `text-6xl` for H1, `text-2xl` for H2).
  - `Body Prose`: `font-sans` (`Inter`), `text-base` or `text-lg`, relaxed line height (`leading-7` / `leading-8`), and high-contrast readable colors (`slate-800` / `dark:slate-200`).
  - `Metadata / Captions`: `font-mono` or uppercase tracking (`tracking-[0.16em]`), `text-xs font-bold text-slate-500`.
- **Margins (`Margins`)**: Standardized layout widths. Main prose is constrained to `minmax(0, 760px)` (`max-w-3xl`) for optimal reading line length (`65–75 characters per line`), flanked by a `330px` sticky right sidebar on desktop (`xl:grid`).
- **Icons (`Icons`)**: Explicitly powered by `lucide-react`. Standardized semantic mapping (`CheckCircle2` for verified, `ShieldCheck` for security, `Bookmark` for definitions, `ExternalLink` for references, `Calendar` for timelines).
- **Illustrations (`Illustrations`)**: Handcrafted SVG geometric vectors only (`/public/images/illustrations/` and `/public/images/articles/`). Encapsulated in `aspect-[16/9]` rounded containers with subtle borders.
- **Tables (`Tables`)**: Full horizontal overflow scrolling (`overflow-x-auto`), header borders (`border-b border-slate-200 bg-slate-100/70`), and alternating row hover states (`hover:bg-slate-50/80`).
- **Charts / Stat Cards (`Charts`)**: Dark-themed gradient cards (`from-slate-900 to-slate-800`) with high-contrast cyan highlight metrics (`text-cyan-400`).
- **Pull Quotes (`Pull Quotes`)**: Left border accent (`border-l-4 border-l-blue-600`), italicized display typography (`font-display text-lg font-bold italic`), and author badge.
- **Code Blocks (`Code Blocks`)**: Syntax-highlighted monospace containers with clean padding and horizontal overflow handling (`pre > code`).

---

## 6. Illustration Framework (The 9-Stage Asset Pipeline)

We never instruct agents or designers to simply "Generate image". Every visual asset follows a rigorous **9-Stage Production Pipeline**:

```
Article  ➔  Outline  ➔  Image Plan  ➔  Illustration Prompt  ➔  Alt Text  ➔  Filename  ➔  Caption  ➔  Responsive Images  ➔  Publish
```

1. **Article**: Determine the editorial pillar (`ai-engineering`, `enterprise-ai`, etc.) and target audience.
2. **Outline**: Review the semantic section headings to identify concepts requiring visual abstraction.
3. **Image Plan**: Select 3 to 5 visual formats from our studio palette (Hero banner, Architecture topology, Workflow flowchart, Comparison matrix, Timeline).
4. **Illustration Prompt & Studio Production**: Produce handcrafted, geometric SVG vector artwork (`16:9` aspect ratio, clean coordinate grid, dark-mode compatible `#0F172A` palette with cyan/emerald accents).
5. **Alt Text (`imageAlt`)**: Write detailed, accessibility-first alt text describing the exact system architecture or flow without filler (e.g., *"Layered AI workflow dashboard showing input validation, RAG retrieval, and human approval checkpoints"*).
6. **Filename**: Enforce kebab-case semantic naming inside `/public/images/articles/` (e.g., `enterprise-ai-agents.svg`, `open-models-routing.svg`).
7. **Caption (`block.caption`)**: Add descriptive technical captions below inline diagrams (`font-mono text-xs font-semibold text-slate-500`).
8. **Responsive Images (`next/image`)**: Configure exact `sizes` attributes (`sizes="(min-width: 1024px) 760px, 100vw"`) and explicit `width/height` or `fill` with aspect ratios to guarantee zero Cumulative Layout Shift (`CLS = 0`).
9. **Publish**: Verify SVG compilation and rendering across light and dark modes before deployment.

---

## 7. Master Content Workflow (The 11-Stage Publishing Pipeline)

Every article published on TechlumeAI goes through this strict **11-Stage Operational Pipeline**:

```
Research  ➔  Outline  ➔  TOC  ➔  Image Planning  ➔  Writing  ➔  SEO  ➔  GEO  ➔  Schema  ➔  Review  ➔  Publish  ➔  Refresh
```

1. **Research**: Conduct practitioner-level technical research, audit competitor gaps, review actual API documentation, and gather verified benchmarks (`$-per-token`, `MTTR`, latency).
2. **Outline**: Create a 15-section semantic structure (`H1 -> H2 -> H3`) mapping out the exact narrative arc from executive hook to actionable checklist.
3. **TOC (`TableOfContents`)**: Build and verify the interactive Table of Contents anchors (`slugify`) so readers can jump directly to deep technical sections.
4. **Image Planning**: Assign custom studio SVG diagrams to anchor major technical concepts before writing prose.
5. **Writing**: Write comprehensive, high-density practitioner prose assembling our Magazine Component Library blocks (`tldr`, `definition`, `expert-opinion`, `comparison-matrix`, `timeline`, `stat-card`, `case-study`, `best-practices`, `common-mistakes`, `checklist`).
6. **SEO (Search Engine Optimization)**: Audit primary/secondary keyword density, title tag (`< 60 chars`), meta description (`< 160 chars`), `canonical` URLs, and internal link architecture across related articles.
7. **GEO (Generative Engine Optimization)**: Optimize for AI answer engines (`ChatGPT`, `Perplexity`, `Google AI Overviews`) by front-loading definitive answers (`definition` blocks), structured tables (`comparison-matrix`), bulleted summaries (`tldr`), and direct factual statements.
8. **Schema (`JSON-LD`)**: Validate automatic generation of `Article`, `BreadcrumbList`, and `FAQPage` structured data (`components/seo/structured-data.tsx`).
9. **Review (SRE & EEAT Review)**: Run technical accuracy audit, fact-checking verification, assign `factCheckedBy` / `factCheckedAt` credentials, and verify WCAG AA contrast compliance.
10. **Publish**: Execute final static build check (`npm run build`) and deploy to production via Turbopack / Next.js SSG.
11. **Refresh (Content Refresh System)**: Monitor telemetry and citations; schedule periodic review cycles (`editorNote` and `updatedAt`) to ensure evergreen benchmarks remain accurate over time.

---

## 8. Magazine Component Block Syntax Reference (`ArticleBlock` JSON Format)

Every article object in `lib/data/articles.ts` utilizes these structured block types:

```json
[
  {
    "type": "tldr",
    "items": [
      "Production agents require deterministic state checkpoints before executing external API mutations.",
      "Evaluating faithfulness via LLM-as-a-judge correlates with 92% of human expert regression scores."
    ]
  },
  {
    "type": "definition",
    "term": "Model Context Protocol (MCP)",
    "definition": "An open standard introduced by Anthropic that unifies how AI assistants connect to local and remote data sources, tools, and prompts over structured JSON-RPC connections.",
    "context": "Eliminates custom N-to-N integration code across development environments and production agent clusters."
  },
  {
    "type": "expert-opinion",
    "quote": "If your agent cannot cleanly roll back after a failed tool call, it is not production-ready—it is a demo with API access.",
    "author": "Dr. Aris Thorne",
    "role": "Principal AI Systems Architect",
    "company": "Techlume AI Lab",
    "avatar": "/images/authors/maya-hart.svg"
  },
  {
    "type": "comparison-matrix",
    "title": "Agent Orchestration Framework Comparison (2026)",
    "headers": ["Framework", "State Persistence", "Human-in-Loop API", "Enterprise RBAC", "Best For"],
    "highlightColumn": 1,
    "rows": [
      ["LangGraph", "Check", "Check", "Partial", "Complex cyclic state graphs & checkpoints"],
      ["CrewAI", "Partial", "Check", "NO", "Role-based autonomous task delegation"],
      ["AutoGen", "Partial", "Partial", "NO", "Multi-agent conversational simulation"]
    ]
  },
  {
    "type": "timeline",
    "items": [
      { "date": "Q1 2024", "title": "Single-Turn Prompt Chaining", "description": "Basic linear calls without state persistence." },
      { "date": "Q4 2025", "title": "Graph-Based Checkpointing", "description": "Stateful execution graphs with human authorization gates." },
      { "date": "Q3 2026", "title": "Universal MCP Protocol Routing", "description": "Standardized tool discovery across heterogeneous agent clusters." }
    ]
  },
  {
    "type": "stat-card",
    "number": "$0.0012",
    "label": "Average cost per 1K tokens for frontier quantized inference at edge CDN nodes",
    "context": "A 14x reduction compared to raw FP16 API endpoints in early 2024.",
    "source": "Techlume Enterprise Cloud Benchmark (2026)"
  },
  {
    "type": "case-study",
    "company": "Fortune 100 Financial Network",
    "metric": "-84% MTTR",
    "description": "Deployed automated SOC agent triage across 1.4 million daily Okta and Azure identity alerts.",
    "outcome": "Reduced average security incident containment latency from 42 minutes to 6.7 minutes while zeroing false-positive escalations."
  },
  {
    "type": "best-practices",
    "title": "Production Hardening Rules",
    "items": [
      "Enforce strict JSON schema validation on every agent tool output before passing to downstream parsers.",
      "Isolate agent execution sandboxes inside zero-trust VPC perimeters with read-only database replicas."
    ]
  },
  {
    "type": "common-mistakes",
    "title": "Common Anti-Patterns & Pitfalls",
    "items": [
      "Allowing autonomous agents to execute destructive database migrations without human-in-the-loop sign-off.",
      "Relying on system prompt text alone to prevent prompt injection without external boundary validation."
    ]
  },
  {
    "type": "checklist",
    "title": "Pre-Production Agent Audit Checklist",
    "items": [
      { "label": "RBAC Permission Boundary Verification", "note": "Ensure the agent's IAM role has exact least-privilege scoping." },
      { "label": "Token Budget & Loop Circuit Breakers Installed", "note": "Configure hard limits to prevent infinite retry loops on malformed tool responses." }
    ]
  }
]
```

---

## 9. Final Verification & Build Check

Before any article or framework update is merged into production, execute:
```bash
npm run build
```
The build **must compile 100% cleanly** across static generation (`SSG` across all routes) and TypeScript checking (`tsc`) with zero errors. Only upon successful verification is the code deployed to **TechlumeAI**.
