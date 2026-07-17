import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bookmark, CalendarDays, CheckCircle2, Clock, ExternalLink, FileText, ShieldCheck, UserRound } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { ArticleActions } from "@/components/article/article-actions";
import { ArticleCard } from "@/components/article/article-card";
import { ArticleContent } from "@/components/article/article-content";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { EntityOverviewBox } from "@/components/article/entity-overview-box";
import { ReadingProgress } from "@/components/article/reading-progress";
import { RecentlyViewed } from "@/components/article/recently-viewed";
import { TableOfContents } from "@/components/article/table-of-contents";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { SectionHeading } from "@/components/sections/section-heading";
import { ShareBar } from "@/components/social/share-bar";
import { StructuredData } from "@/components/structured-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoEmbed } from "@/components/video/video-embed";
import { articles, getArticle, getRelatedArticles } from "@/lib/data/articles";
import { getAuthor } from "@/lib/data/authors";
import { getCategory } from "@/lib/data/categories";
import { getTopicBySlug } from "@/lib/data/topics";
import { createMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema, faqSchema, howToSchema } from "@/lib/seo/schema";
import { formatDate } from "@/lib/utils";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return createMetadata({ title: "Article Not Found" });
  }

  const author = getAuthor(article.author);

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/articles/${article.slug}`,
    image: article.image,
    imageAlt: article.imageAlt || article.title,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    authors: author ? [author.name] : undefined,
    tags: article.tags,
    keywords: [
      article.primaryKeyword || "",
      ...(article.secondaryKeywords || []),
      ...(article.entityVariations || []),
      ...article.tags
    ].filter(Boolean),
    category: article.category
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const author = getAuthor(article.author);
  const category = getCategory(article.category);

  if (!author || !category) {
    notFound();
  }

  const related = getRelatedArticles(article.slug, 3);
  const index = articles.findIndex((item) => item.slug === article.slug);
  const previous = articles[index + 1];
  const next = articles[index - 1];

  const topicHub = article.topicCluster
    ? getTopicBySlug(article.topicCluster)
    : article.knowledgeGraph?.parent
      ? getTopicBySlug(article.knowledgeGraph.parent)
      : undefined;

  const breadcrumbItems = [
    { name: category.name, label: category.name, href: `/category/${category.slug}` },
    ...(topicHub
      ? [{ name: topicHub.name, label: topicHub.name, href: `/topics/${topicHub.slug}` }]
      : []),
    { name: article.title, label: article.title, href: `/articles/${article.slug}` }
  ];

  const bestPracticesBlocks = article.content.filter((block) => block.type === "best-practices") as { type: "best-practices"; title?: string; items: string[] }[];
  
  const howToSchemas = bestPracticesBlocks.map(block => howToSchema({
    title: block.title || `Best Practices: ${article.title}`,
    description: `Recommended best practices for ${article.title}`,
    steps: block.items.map(item => ({ name: item, text: item }))
  }));

  const schemas = [
    articleSchema(article, author, category),
    breadcrumbSchema(breadcrumbItems.map(({ name, href }) => ({ name, href }))),
    ...(article.faq ? [faqSchema(article.faq)] : []),
    ...howToSchemas
  ];
  return (
    <>
      <ReadingProgress />
      <StructuredData data={schemas} />
      <article className="container-page pt-8">
        <Breadcrumbs
          items={breadcrumbItems.map(({ label, href }) => ({ label, href }))}
        />

        <header className="mt-8 grid gap-8 lg:grid-cols-[1fr_330px]">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant={article.sponsored ? "warning" : "secondary"}>
                {article.sponsored ? "Sponsored Article" : category.name}
              </Badge>
              {article.tags.slice(0, 3).map((tag) => (
                <Link
                  key={tag}
                  href={`/search?q=${encodeURIComponent(tag)}`}
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:text-slate-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <h1 className="font-display text-4xl font-black leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {article.dek}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <UserRound className="size-4" aria-hidden="true" />
                <Link
                  href={`/authors/${author.slug}`}
                  className="font-bold text-slate-800 hover:text-blue-700 dark:text-slate-100 dark:hover:text-sky-300"
                >
                  {author.name}
                </Link>
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4" aria-hidden="true" />
                Published {formatDate(article.publishedAt)}
              </span>
              <span>Updated {formatDate(article.updatedAt)}</span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4" aria-hidden="true" />
                {article.readingMinutes} min read
              </span>
              {article.searchJourneyStage ? (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-950/50 dark:text-sky-300 dark:ring-sky-400/30">
                  Journey: {article.searchJourneyStage}
                </span>
              ) : null}
              {article.primaryKeyword ? (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-purple-50 px-2 py-0.5 text-xs font-bold text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-950/50 dark:text-purple-300 dark:ring-purple-400/30">
                  Target: {article.primaryKeyword}
                </span>
              ) : null}
            </div>
            {article.factCheckedBy ? (
              <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-green-200 bg-green-50/80 px-4 py-2.5 text-xs font-semibold text-green-900 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-300">
                <span className="inline-flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="size-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                  Fact Checked by {article.factCheckedBy}
                </span>
                {article.factCheckedAt ? (
                  <span className="text-green-700 dark:text-green-400">
                    &bull; Verified {formatDate(article.factCheckedAt)}
                  </span>
                ) : null}
              </div>
            ) : null}
            {article.qaMetrics?.trustScore ? (
              <div className="mt-3 inline-flex flex-wrap items-center gap-2 rounded-xl border border-purple-200 bg-purple-50/80 px-4 py-2.5 text-xs font-semibold text-purple-900 dark:border-purple-900/50 dark:bg-purple-950/30 dark:text-purple-300">
                <span className="inline-flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="size-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                  Enterprise Trust Score: {article.qaMetrics.trustScore}/100
                </span>
                <span className="text-purple-700 dark:text-purple-400">
                  &bull; Researched via Tier-1 Primary Specifications
                </span>
              </div>
            ) : null}
            {article.editorNote ? (
              <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/80 p-4 text-sm leading-relaxed text-blue-950 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-200">
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-sky-400">
                  Editor&apos;s Note
                </p>
                <p className="mt-1">{article.editorNote}</p>
              </div>
            ) : null}
            <div className="mt-6">
              <ArticleActions />
            </div>
          </div>
          <aside className="grid content-start gap-5 lg:hidden">
            <TableOfContents blocks={article.content} />
            <AdSlot size="rectangle" />
          </aside>
        </header>

        <figure className="relative mt-8 overflow-hidden rounded-[var(--radius)] border border-slate-200/80 bg-slate-100 shadow-luxe dark:border-slate-800 dark:bg-slate-900">
          <div className="relative aspect-[16/8] w-full">
            <Image
              src={article.image}
              alt={article.imageAlt || `${article.title} — Technical Illustration`}
              fill
              priority
              sizes="(min-width: 1180px) 1180px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 bg-white/95 px-4 py-2 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-400">
            <span>{article.imageAlt || `${article.title} — Technical Illustration`}</span>
            <span className="font-semibold text-slate-500 dark:text-slate-500">Illustration Credit: TechlumeAI Design Studio</span>
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-8 lg:grid-cols-[52px_minmax(0,1fr)_300px] xl:grid-cols-[52px_minmax(0,760px)_330px]">
          <ShareBar title={article.title} path={`/articles/${article.slug}`} />
          <div>
            {article.video ? (
              <div className="mb-8">
                <VideoEmbed
                  title={article.title}
                  provider={article.video.provider}
                  url={article.video.url}
                />
              </div>
            ) : null}

            <EntityOverviewBox article={article} topicHub={topicHub} />

            {article.tldr && article.tldr.length > 0 ? (
              <div
                itemScope
                itemType="https://schema.org/ItemList"
                className="mb-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/5 to-blue-500/10 p-6 shadow-luxe dark:from-cyan-950/40 dark:via-slate-900/80 dark:to-blue-950/40"
              >
                <meta itemProp="name" content="Executive Summary & Key Takeaways" />
                <div className="mb-4 flex items-center gap-2.5 font-display text-sm font-black uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
                  <CheckCircle2 className="size-5 text-cyan-500" />
                  <span>Executive Summary & Key Takeaways</span>
                </div>
                <ul className="grid gap-3">
                  {article.tldr.map((item, i) => (
                    <li
                      key={i}
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                      className="flex items-start gap-2.5 text-sm leading-6 font-medium text-slate-800 dark:text-slate-200"
                    >
                      <meta itemProp="position" content={String(i + 1)} />
                      <span className="mt-1.5 size-1.5 rounded-full bg-cyan-500 shrink-0" />
                      <span itemProp="name">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <ArticleContent blocks={article.content} />

            {article.faq ? (
              <div className="my-10">
                <StructuredData data={faqSchema(article.faq)} />
              </div>
            ) : null}

            {topicHub ? (
              <section className="my-10 rounded-[var(--radius)] border border-indigo-200 bg-indigo-50/60 p-6 dark:border-indigo-900/60 dark:bg-indigo-950/20">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">
                  Topic Hub
                </p>
                <h2 className="font-display text-2xl font-black tracking-normal">
                  Explore More on {topicHub.name}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {topicHub.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/topics/${topicHub.slug}`}
                    className="group flex items-center gap-2 rounded-xl border border-indigo-200/80 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition-all hover:border-indigo-400 dark:border-indigo-900/60 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-indigo-600"
                  >
                    <span>Visit {topicHub.name} Hub</span>
                    <span className="text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400">&rarr;</span>
                  </Link>
                  {topicHub.cornerstoneSlug ? (
                    <Link
                      href={`/articles/${topicHub.cornerstoneSlug}`}
                      className="group flex items-center gap-2 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-2.5 text-sm font-bold text-amber-900 transition-all hover:border-amber-400 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:border-amber-600"
                    >
                      <span className="rounded bg-amber-200/80 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-amber-900 dark:bg-amber-900/80 dark:text-amber-200">Cornerstone</span>
                      <span>Read Pillar Guide</span>
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  ) : null}
                </div>
              </section>
            ) : null}

            {article.faq ? (
              <section className="my-10 rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
                <h2 className="font-display text-2xl font-black tracking-normal">
                  Frequently Asked Questions
                </h2>
                <div className="mt-4 grid gap-3">
                  {article.faq.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-[var(--radius)] border border-slate-200 p-4 dark:border-slate-800"
                    >
                      <h3 className="font-display text-base font-bold leading-snug">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {article.references && article.references.length > 0 ? (
              <section className="my-10 rounded-[var(--radius)] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 dark:border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-300">
                    Primary References & Source Hierarchy
                  </p>
                  <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[11px] font-bold text-blue-800 dark:bg-blue-900/60 dark:text-sky-300">
                    Verified Tier-1 / Tier-2 Citations
                  </span>
                </div>
                <ol className="grid gap-4 divide-y divide-slate-200/80 text-sm dark:divide-slate-800">
                  {article.references.map((ref, idx) => (
                    <li key={idx} className="pt-4 first:pt-0">
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-3 font-sans text-sm font-semibold text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-cyan-300"
                      >
                        <div className="grid gap-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span>{ref.title}</span>
                            {ref.tier ? (
                              <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                {ref.tier}
                              </span>
                            ) : null}
                          </div>
                          {ref.author || ref.publisher || ref.date ? (
                            <p className="font-mono text-xs font-normal text-slate-500 dark:text-slate-400">
                              {[ref.author, ref.publisher, ref.date].filter(Boolean).join(" • ")}
                            </p>
                          ) : null}
                          {ref.context ? (
                            <p className="mt-0.5 text-xs font-normal text-slate-600 dark:text-slate-400">
                              {ref.context}
                            </p>
                          ) : null}
                        </div>
                        <ExternalLink className="mt-1 size-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-slate-500" />
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            <div className="my-10 rounded-[var(--radius)] border border-blue-200/80 bg-blue-50/60 p-6 dark:border-blue-900/40 dark:bg-blue-950/20">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-sky-400" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-blue-950 dark:text-blue-100">
                    Editorial & Verification Methodology Notice
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-blue-900 dark:text-blue-200">
                    This technical investigation was produced under TechlumeAI&apos;s strict Verification Framework. All code patterns, architecture diagrams, and performance benchmarks were evaluated using Tier-1 primary documentation and reviewed for factual accuracy. AI assistance is never used as a substitute for human verification.
                  </p>
                  <p className="mt-2.5 text-xs font-bold text-blue-800 dark:text-sky-300">
                    <Link href="/editorial-policy" className="underline underline-offset-4 hover:text-blue-950 dark:hover:text-sky-200">
                      View our 12-Step Research Protocol & Source Quality Hierarchy &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="my-10 rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={72}
                  height={72}
                  className="rounded-full"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Author Bio
                  </p>
                  <h2 className="font-display text-2xl font-black tracking-normal">
                    {author.name}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {author.bio}
                  </p>
                </div>
              </div>
            </div>

            <NewsletterInline />

            <div className="mt-10 grid gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={`/articles/${previous.slug}`}
                  className="rounded-[var(--radius)] border border-slate-200 p-4 hover:border-blue-300 dark:border-slate-800"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Previous Article
                  </p>
                  <p className="mt-2 font-display text-lg font-bold leading-tight tracking-normal">
                    {previous.title}
                  </p>
                </Link>
              ) : null}
              {next ? (
                <Link
                  href={`/articles/${next.slug}`}
                  className="rounded-[var(--radius)] border border-slate-200 p-4 hover:border-blue-300 dark:border-slate-800"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Next Article
                  </p>
                  <p className="mt-2 font-display text-lg font-bold leading-tight tracking-normal">
                    {next.title}
                  </p>
                </Link>
              ) : null}
            </div>

            <section className="mt-10 rounded-[var(--radius)] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/60">
              <h2 className="font-display text-2xl font-black tracking-normal">
                Discussion
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Reader comments, moderation, and community identity can connect here
                through a hosted commenting provider or first-party account system.
              </p>
              <Button asChild className="mt-4" variant="outline">
                <Link href="/contact">Send editorial feedback</Link>
              </Button>
            </section>
          </div>

          <aside className="sticky top-24 hidden h-fit content-start gap-6 lg:grid">
            <TableOfContents blocks={article.content} />
            <AdSlot size="rectangle" />
            <RecentlyViewed
              currentTitle={article.title}
              currentSlug={article.slug}
            />
            <div className="rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Related Coverage
              </p>
              <div className="grid gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/articles/${item.slug}`}
                    className="text-sm font-bold leading-snug hover:text-blue-700 dark:hover:text-sky-300"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="container-page py-12">
        <SectionHeading eyebrow="Keep Reading" title="Related Articles" />
        <div className="grid gap-5 lg:grid-cols-3">
          {related.map((item) => (
            <ArticleCard key={item.slug} article={item} />
          ))}
        </div>
      </section>
    </>
  );
}
