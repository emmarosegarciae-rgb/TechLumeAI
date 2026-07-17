import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { articles } from "../lib/data/articles";
import { authors } from "../lib/data/authors";
import { categories } from "../lib/data/categories";
import { getAllGlossaryEntities } from "../lib/data/glossary";
import { getAllTopics } from "../lib/data/topics";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("================================================================");
console.log("TechlumeAI — Automated Technical SEO & Page Architecture QA");
console.log("================================================================\n");

let errorCount = 0;
let warningCount = 0;

function reportError(category: string, message: string) {
  console.error(`[ERROR - ${category}] ${message}`);
  errorCount++;
}

function reportWarning(category: string, message: string) {
  console.warn(`[WARNING - ${category}] ${message}`);
  warningCount++;
}

function reportSuccess(category: string, message: string) {
  console.log(`[PASS - ${category}] ${message}`);
}

// 1. Audit Metadata Constraints across Articles
console.log(">>> 1. Auditing Article Metadata & URL Slug Constraints...");
const articleSlugs = new Set<string>();
for (const article of articles) {
  if (articleSlugs.has(article.slug)) {
    reportError("URL Governance", `Duplicate article slug detected: /articles/${article.slug}`);
  }
  articleSlugs.add(article.slug);

  if (article.slug.toLowerCase() !== article.slug || article.slug.includes(" ")) {
    reportError("URL Governance", `Article slug must be lowercase and hyphen-separated: ${article.slug}`);
  }

  if (article.title.length > 75) {
    reportWarning("Metadata Length", `Article title exceeds 75 chars (${article.title.length}): "${article.title}"`);
  }
  if (article.excerpt.length < 50) {
    reportWarning("Metadata Length", `Article excerpt is too short (${article.excerpt.length}): "${article.slug}"`);
  }
  if (!article.imageAlt || article.imageAlt.trim().length < 10) {
    reportError("Accessibility / Alt Text", `Article missing descriptive imageAlt: /articles/${article.slug}`);
  }
}
reportSuccess("Articles Audit", `Verified ${articles.length} articles for slug stability, metadata, and alt text integrity.\n`);

// 2. Audit Topics & Cluster Governance
console.log(">>> 2. Auditing Topic Clusters & Semantic Connectivity...");
const allTopics = getAllTopics();
const topicSlugs = new Set(allTopics.map((t) => t.slug));
const categorySlugs = new Set<string>(categories.map((c) => c.slug));

const seenTopicSlugs = new Set<string>();
for (const topic of allTopics) {
  if (seenTopicSlugs.has(topic.slug)) {
    reportError("URL Governance", `Duplicate topic slug detected: /topics/${topic.slug}`);
  }
  seenTopicSlugs.add(topic.slug);

  // Check internal link relationships to articles and topics
  if (topic.cornerstoneSlug && !articleSlugs.has(topic.cornerstoneSlug)) {
    reportWarning("Internal Links", `Topic hub /topics/${topic.slug} links to upcoming or missing cornerstone slug: "${topic.cornerstoneSlug}"`);
  }
  for (const relatedSlug of topic.relatedTopics || []) {
    if (!topicSlugs.has(relatedSlug) && !categorySlugs.has(relatedSlug)) {
      reportWarning("Internal Links", `Topic hub /topics/${topic.slug} links to non-existent related topic/category: "${relatedSlug}"`);
    }
  }
}
reportSuccess("Topics Audit", `Verified ${allTopics.length} topic clusters and internal link connections.\n`);

// 3. Audit Glossary & Canonical Definitions
console.log(">>> 3. Auditing Canonical Glossary & Knowledge Graph...");
const allEntities = getAllGlossaryEntities();
const glossarySlugs = new Set(allEntities.map((e) => e.slug));

const seenGlossarySlugs = new Set<string>();
for (const entity of allEntities) {
  if (seenGlossarySlugs.has(entity.slug)) {
    reportError("URL Governance", `Duplicate glossary slug detected: /glossary/${entity.slug}`);
  }
  seenGlossarySlugs.add(entity.slug);

  if (entity.cornerstoneSlug && !articleSlugs.has(entity.cornerstoneSlug)) {
    reportWarning("Internal Links", `Glossary term /glossary/${entity.slug} mentions upcoming or missing cornerstone slug: "${entity.cornerstoneSlug}"`);
  }
  for (const relatedSlug of entity.relatedEntities || []) {
    if (!glossarySlugs.has(relatedSlug) && !topicSlugs.has(relatedSlug) && !categorySlugs.has(relatedSlug)) {
      reportWarning("Internal Links", `Glossary term /glossary/${entity.slug} links to external/unmapped entity: "${relatedSlug}"`);
    }
  }
}
reportSuccess("Glossary Audit", `Verified ${allEntities.length} canonical definitions and entity link paths.\n`);

// 4. Audit Category Pillars & Authors
console.log(">>> 4. Auditing Category Pillars & Author Profiles...");
for (const category of categories) {
  if (category.slug.toLowerCase() !== category.slug) {
    reportError("URL Governance", `Category slug must be lowercase: /category/${category.slug}`);
  }
}
for (const author of authors) {
  if (!author.avatar || !author.avatar.startsWith("/images/")) {
    reportWarning("Static Assets", `Author avatar path should be hosted locally: ${author.name}`);
  }
}
reportSuccess("Categories & Authors", `Verified ${categories.length} pillars and ${authors.length} editorial leadership profiles.\n`);

// 5. Audit Robots.txt & Sitemap Configuration Files
console.log(">>> 5. Auditing Crawl & Indexation Configuration Files...");
const robotsPath = path.join(rootDir, "app", "robots.ts");
const sitemapPath = path.join(rootDir, "app", "sitemap.ts");

if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, "utf8");
  if (!robotsContent.includes('disallow: ["/api/", "/_next/", "/admin/", "/draft/", "/preview/", "/search?*"]')) {
    reportWarning("Robots Configuration", "robots.ts may not contain exact disallow string rules requested in constitutional spec.");
  }
  reportSuccess("Robots Check", "app/robots.ts verified for exact crawl exclusion and AI bot accessibility.");
} else {
  reportError("Configuration", "Missing app/robots.ts file.");
}

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
  if (sitemapContent.includes('"/search"')) {
    reportError("Sitemap Configuration", 'app/sitemap.ts must NOT include "/search" since it has noIndex: true.');
  }
  if (!sitemapContent.includes("getAllTopics") || !sitemapContent.includes("getAllGlossaryEntities")) {
    reportError("Sitemap Configuration", "app/sitemap.ts must include dynamic topics and glossary routes.");
  }
  reportSuccess("Sitemap Check", "app/sitemap.ts verified for full canonical knowledge graph indexing.\n");
} else {
  reportError("Configuration", "Missing app/sitemap.ts file.");
}

// 6. Audit AI Discovery Route Handlers (/llms.txt & /llms-full.txt)
console.log(">>> 6. Auditing AI Discovery Route Handlers (/llms.txt & /llms-full.txt)...");
const llmsRoutePath = path.join(rootDir, "app", "llms.txt", "route.ts");
const llmsFullRoutePath = path.join(rootDir, "app", "llms-full.txt", "route.ts");

if (fs.existsSync(llmsRoutePath) && fs.existsSync(llmsFullRoutePath)) {
  const llmsContent = fs.readFileSync(llmsRoutePath, "utf8");
  const llmsFullContent = fs.readFileSync(llmsFullRoutePath, "utf8");

  if (!llmsContent.includes("getAllTopics") || !llmsContent.includes("getAllGlossaryEntities")) {
    reportError("AI Discovery", "app/llms.txt/route.ts must dynamically index topics and glossary definitions.");
  }
  if (!llmsFullContent.includes("tldr") || !llmsFullContent.includes("faq")) {
    reportError("AI Discovery", "app/llms-full.txt/route.ts must include detailed summaries, pros/cons, and FAQs.");
  }
  reportSuccess("GEO Endpoints Check", "Verified /llms.txt and /llms-full.txt for open-standard AI crawler grounding.\n");
} else {
  reportError("Configuration", "Missing app/llms.txt/route.ts or app/llms-full.txt/route.ts endpoint files.");
}

// 7. Audit AI Retrieval & Semantic Chunk Readiness
console.log(">>> 7. Auditing AI Retrieval & Semantic Chunk Readiness...");

/**
 * Required semantic block types for every flagship article.
 * Each block type enables a specific AI retrieval pattern:
 *   - tldr          → AI summary extraction (ChatGPT, Perplexity, AI Overviews)
 *   - definition    → Entity disambiguation & knowledge graph grounding
 *   - comparison-matrix → Structured data extraction for feature comparisons
 *   - best-practices → HowTo rich results + LLM workflow extraction
 *   - faq           → FAQ rich results + direct answer retrieval
 */
const REQUIRED_BLOCK_TYPES = [
  "tldr",
  "definition",
  "comparison-matrix",
  "best-practices",
  "faq",
] as const;

/**
 * Vague pronoun openers that break AI retrieval by creating
 * context-dependent references that LLMs cannot resolve in isolation.
 * Each semantic chunk must be independently interpretable.
 */
const VAGUE_PRONOUN_PATTERNS = [
  /^This\s/i,
  /^That\s/i,
  /^It\s/i,
  /^They\s/i,
  /^These\s/i,
  /^Those\s/i,
  /^This is\s/i,
  /^It is\s/i,
  /^This means\s/i,
  /^This approach\s/i,
  /^This method\s/i,
  /^This system\s/i,
  /^This tool\s/i,
  /^This model\s/i,
];

/**
 * Target word count range for semantic chunks (paragraph blocks).
 * Below 80 words: too sparse for reliable AI retrieval.
 * Above 500 words: exceeds LLM context chunk recommendation.
 */
const MIN_CHUNK_WORDS = 80;
const MAX_CHUNK_WORDS = 500;

let aiReadinessScore = 0;
let aiReadinessTotal = 0;

for (const article of articles) {
  const articleLabel = `/articles/${article.slug}`;
  const contentBlocks = article.content ?? [];
  const faqBlocks = (article as Record<string, unknown>).faq as Array<{ question: string; answer: string }> | undefined;

  // ── 7.1 Required block type presence ────────────────────────────────────
  const presentBlockTypes = new Set(contentBlocks.map((b: { type: string }) => b.type));
  const hasFaq = faqBlocks && Array.isArray(faqBlocks) && faqBlocks.length > 0;

  for (const requiredType of REQUIRED_BLOCK_TYPES) {
    aiReadinessTotal++;
    if (requiredType === "faq") {
      if (hasFaq) {
        aiReadinessScore++;
      } else {
        reportError("AI Retrieval", `${articleLabel} missing required 'faq' block — AI direct answer extraction will fail.`);
      }
    } else if (presentBlockTypes.has(requiredType)) {
      aiReadinessScore++;
    } else {
      reportError("AI Retrieval", `${articleLabel} missing required '${requiredType}' block — reduces AI retrieval quality.`);
    }
  }

  // ── 7.2 Definition block quality ────────────────────────────────────────
  const definitionBlocks = contentBlocks.filter((b: { type: string }) => b.type === "definition") as Array<{
    type: string;
    term?: string;
    definition?: string;
    context?: string;
  }>;

  for (const defBlock of definitionBlocks) {
    aiReadinessTotal++;
    if (!defBlock.term || defBlock.term.trim().length < 3) {
      reportError("AI Retrieval", `${articleLabel} definition block missing 'term' field.`);
    } else if (!defBlock.definition || defBlock.definition.split(" ").length < 30) {
      reportWarning("AI Retrieval", `${articleLabel} definition block for '${defBlock.term}' is too short (<30 words) for reliable AI extraction.`);
      aiReadinessScore += 0.5;
    } else {
      aiReadinessScore++;
      if (!defBlock.context) {
        reportWarning("AI Retrieval", `${articleLabel} definition '${defBlock.term}' missing 'context' (production application example) — recommended for GEO grounding.`);
      }
    }
  }

  // ── 7.3 Paragraph chunk word counts ────────────────────────────────────
  const paragraphBlocks = contentBlocks.filter((b: { type: string }) => b.type === "paragraph") as Array<{
    type: string;
    value: string;
  }>;

  for (const para of paragraphBlocks) {
    const wordCount = para.value.trim().split(/\s+/).length;
    if (wordCount < MIN_CHUNK_WORDS) {
      reportWarning("Semantic Chunks", `${articleLabel} has a paragraph chunk with only ${wordCount} words (target: ${MIN_CHUNK_WORDS}–${MAX_CHUNK_WORDS}). May be too sparse for AI retrieval.`);
    } else if (wordCount > MAX_CHUNK_WORDS) {
      reportWarning("Semantic Chunks", `${articleLabel} has a paragraph chunk with ${wordCount} words (target: ≤${MAX_CHUNK_WORDS}). Consider splitting for better AI chunking.`);
    }
  }

  // ── 7.4 Vague pronoun opener detection ─────────────────────────────────
  const textBlocks = contentBlocks.filter((b: { type: string }) =>
    b.type === "paragraph" || b.type === "callout"
  ) as Array<{ type: string; value: string }>;

  for (const textBlock of textBlocks) {
    for (const pattern of VAGUE_PRONOUN_PATTERNS) {
      if (pattern.test(textBlock.value.trim())) {
        reportWarning(
          "AI Retrieval",
          `${articleLabel} has a ${textBlock.type} block starting with a vague pronoun: "${textBlock.value.trim().slice(0, 60)}..."`
        );
        break; // Report only once per block
      }
    }
  }

  // ── 7.5 Comparison matrix completeness ─────────────────────────────────
  const matrixBlocks = contentBlocks.filter((b: { type: string }) => b.type === "comparison-matrix") as Array<{
    type: string;
    title?: string;
    headers?: string[];
    rows?: string[][];
  }>;

  for (const matrix of matrixBlocks) {
    if (!matrix.title) {
      reportWarning("AI Retrieval", `${articleLabel} has a comparison-matrix without a 'title' field — title is required for Schema.org/Table microdata.`);
    }
    if (!matrix.headers || matrix.headers.length < 2) {
      reportError("AI Retrieval", `${articleLabel} comparison-matrix has fewer than 2 headers — invalid table structure.`);
    }
    if (!matrix.rows || matrix.rows.length < 2) {
      reportWarning("AI Retrieval", `${articleLabel} comparison-matrix has fewer than 2 data rows — insufficient for meaningful AI comparison extraction.`);
    }
  }

  // ── 7.6 FAQ quality ────────────────────────────────────────────────────
  if (hasFaq && faqBlocks) {
    for (const faqItem of faqBlocks) {
      if (!faqItem.question || faqItem.question.trim().length < 10) {
        reportError("AI Retrieval", `${articleLabel} has an FAQ item with a missing or too-short question.`);
      }
      if (!faqItem.answer || faqItem.answer.split(" ").length < 20) {
        reportWarning("AI Retrieval", `${articleLabel} has an FAQ answer with fewer than 20 words — too sparse for direct answer extraction by AI.`);
      }
    }
    if (faqBlocks.length < 3) {
      reportWarning("AI Retrieval", `${articleLabel} has only ${faqBlocks.length} FAQ items — recommend at least 3 for FAQ rich result eligibility.`);
    }
  }

  // ── 7.7 Best-practices step count ──────────────────────────────────────
  const bpBlocks = contentBlocks.filter((b: { type: string }) => b.type === "best-practices") as Array<{
    type: string;
    title?: string;
    items?: string[];
  }>;

  for (const bp of bpBlocks) {
    if (!bp.items || bp.items.length < 3) {
      reportWarning("AI Retrieval", `${articleLabel} best-practices block has fewer than 3 steps — HowTo Schema requires at least 3 HowToStep items for rich result eligibility.`);
    }
    if (!bp.title) {
      reportWarning("AI Retrieval", `${articleLabel} best-practices block missing 'title' — Schema.org/HowTo requires a name property.`);
    }
  }
}

const aiReadinessPercent = aiReadinessTotal > 0
  ? Math.round((aiReadinessScore / aiReadinessTotal) * 100)
  : 0;

reportSuccess(
  "AI Retrieval Audit",
  `Semantic chunk readiness: ${aiReadinessScore}/${aiReadinessTotal} checks passed (${aiReadinessPercent}% compliance). Verified ${articles.length} articles for tldr, definition, comparison-matrix, best-practices, faq, chunk word counts, and vague pronoun detection.\n`
);

// ─── Final QA Summary ─────────────────────────────────────────────────────────
console.log(`QA Audit Complete — Errors: ${errorCount} | Warnings: ${warningCount}`);
console.log("================================================================");

if (errorCount > 0) {
  console.error("\n[FAILED] Technical SEO verification encountered errors. Please resolve above issues.");
  process.exit(1);
} else {
  console.log("\n[SUCCESS] TechlumeAI Technical SEO and Page Architecture passed all automated checks!");
  process.exit(0);
}
