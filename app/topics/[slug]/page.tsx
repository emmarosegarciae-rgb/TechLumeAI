import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, CheckCircle2, Layers, Sparkles, Star } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { ArticleCard } from "@/components/article/article-card";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { StructuredData } from "@/components/structured-data";
import { Badge } from "@/components/ui/badge";
import { articles, getArticle } from "@/lib/data/articles";
import { getCategory } from "@/lib/data/categories";
import { getAllTopics, getTopicBySlug } from "@/lib/data/topics";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, collectionPageSchema, faqSchema } from "@/lib/seo/schema";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllTopics().map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params
}: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return createMetadata({ title: "Topic Not Found" });
  }

  return createMetadata({
    title: `${topic.name} — Topic Cluster & Guides`,
    description: topic.description,
    path: `/topics/${topic.slug}`,
    keywords: [topic.name, `${topic.name} Guide`, ...(topic.subtopics || []), topic.pillar],
    category: topic.pillar
  });
}

export default async function TopicSlugPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const parentCategory = getCategory(topic.pillar);
  const cornerstoneArticle = topic.cornerstoneSlug
    ? getArticle(topic.cornerstoneSlug)
    : undefined;

  const supportingArticles = articles.filter(
    (a) =>
      a.slug !== cornerstoneArticle?.slug &&
      (a.topicCluster === topic.slug ||
        a.category === topic.pillar ||
        a.tags.some((t) => t.toLowerCase().includes(topic.name.toLowerCase().split(" ")[0])))
  );

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            ...(parentCategory ? [{ name: parentCategory.name, href: `/category/${parentCategory.slug}` }] : []),
            { name: topic.name, href: `/topics/${topic.slug}` }
          ]),
          collectionPageSchema(
            topic.name,
            topic.description,
            `/topics/${topic.slug}`,
            supportingArticles.map((a) => ({ name: a.title, url: `/articles/${a.slug}` }))
          ),
          ...(topic.faqs && topic.faqs.length > 0 ? [faqSchema(topic.faqs)] : [])
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs
          items={[
            ...(parentCategory ? [{ label: parentCategory.name, href: `/category/${parentCategory.slug}` }] : []),
            { label: topic.name, href: `/topics/${topic.slug}` }
          ]}
        />
        <div className="mt-8 rounded-[var(--radius)] border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-950/60 dark:text-sky-300">
              Semantic Topic Cluster
            </span>
            {parentCategory ? (
              <Link
                href={`/category/${parentCategory.slug}`}
                className="font-sans text-xs font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                Inside Pillar: {parentCategory.name}
              </Link>
            ) : null}
          </div>
          <h1 className="mt-3 font-display text-4xl font-black leading-tight tracking-normal text-slate-900 dark:text-white sm:text-5xl">
            {topic.name}
          </h1>
          <p itemProp="description" className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {topic.description}
          </p>

          <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-5 dark:bg-primary/10">
            <div className="flex items-center gap-2 font-display text-xs font-black uppercase tracking-wider text-primary">
              <Sparkles className="size-4" />
              <span>GEO Cluster Overview & Entity Scope</span>
            </div>
            <p className="mt-2 font-sans text-sm leading-6 text-foreground/90">
              This topic hub synthesizes canonical technical documentation, benchmarks, and production design patterns across <strong className="text-primary">{topic.name}</strong>. Designed as a foundational grounding node for engineering organizations and AI answer engines.
            </p>
          </div>

          {topic.subtopics && topic.subtopics.length > 0 ? (
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Cluster Nodes (`Subtopics`):
              </span>
              {topic.subtopics.map((sub) => (
                <span
                  key={sub}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  {sub}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="container-page py-10">
        <AdSlot size="leaderboard" />
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-12">
            {/* Cornerstone Spotlight Card */}
            {cornerstoneArticle ? (
              <section className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/10 via-slate-900/5 to-cyan-500/10 p-6 shadow-luxe dark:from-blue-950/50 dark:via-slate-900/90 dark:to-cyan-950/40 sm:p-8">
                <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px]">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <Badge variant="warning" className="flex items-center gap-1 font-bold uppercase tracking-wider">
                        <Star className="size-3.5 fill-amber-500 text-amber-500" />
                        <span>Topic Cornerstone Guide</span>
                      </Badge>
                    </div>
                    <h2 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                      <Link
                        href={`/articles/${cornerstoneArticle.slug}`}
                        className="hover:text-blue-600 dark:hover:text-cyan-300"
                      >
                        {cornerstoneArticle.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {cornerstoneArticle.dek || cornerstoneArticle.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 text-blue-700 dark:text-sky-300">
                        <CheckCircle2 className="size-4 text-blue-500" />
                        <span>Definitive Reference Guide</span>
                      </span>
                      <span>•</span>
                      <span>{cornerstoneArticle.readingMinutes} min read</span>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/articles/${cornerstoneArticle.slug}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-sans text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                      >
                        <span>Read Complete Guide</span>
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                  <Link
                    href={`/articles/${cornerstoneArticle.slug}`}
                    className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-xl transition-transform hover:scale-[1.01] dark:border-slate-800"
                  >
                    <Image
                      src={cornerstoneArticle.image}
                      alt={cornerstoneArticle.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 380px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </section>
            ) : null}

            {/* Supporting Coverage */}
            <section className="grid gap-6">
              <div>
                <h2 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  Supporting Tutorials & Analysis in {topic.name}
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Research briefings, technical code breakdowns, and comparative evaluations:
                </p>
              </div>

              {supportingArticles.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {supportingArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-800">
                  <BookOpen className="mx-auto size-8 text-slate-400" />
                  <p className="mt-2 font-display text-base font-bold text-slate-800 dark:text-slate-200">
                    Additional supporting articles are in editorial production
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Check back soon for deep-dive benchmarks and technical implementations in {topic.name}.
                  </p>
                </div>
              )}
            </section>

            {/* Topic FAQs */}
            {topic.faqs && topic.faqs.length > 0 ? (
              <section
                itemScope
                itemType="https://schema.org/ItemList"
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-8"
              >
                <meta itemProp="name" content={`Frequently Asked Questions — ${topic.name}`} />
                <h2 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  Frequently Asked Questions — {topic.name}
                </h2>
                <div className="mt-6 grid gap-4">
                  {topic.faqs.map((faq, index) => (
                    <details
                      key={index}
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/Question"
                      className="group rounded-2xl border border-slate-200 p-5 transition-colors dark:border-slate-800"
                    >
                      <summary itemProp="name" className="cursor-pointer font-display text-base font-bold text-slate-900 group-open:text-blue-600 dark:text-white dark:group-open:text-cyan-400">
                        {faq.question}
                      </summary>
                      <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                        <p itemProp="text" className="mt-3 font-sans text-sm leading-7 text-slate-600 dark:text-slate-400">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Related Topic Hubs */}
            {topic.relatedTopics && topic.relatedTopics.length > 0 ? (
              <section className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
                <h3 className="font-display text-lg font-black text-slate-900 dark:text-white sm:text-xl">
                  Related Topic Clusters
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {topic.relatedTopics.map((relSlug) => {
                    const relTopic = getTopicBySlug(relSlug);
                    if (!relTopic) return null;
                    return (
                      <Link
                        key={relSlug}
                        href={`/topics/${relSlug}`}
                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all hover:border-blue-400 dark:border-slate-800 dark:bg-slate-950"
                      >
                        <span className="font-display text-sm font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                          {relTopic.name}
                        </span>
                        <ArrowRight className="size-3.5 text-slate-400 transition-transform group-hover:translate-x-1" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="grid content-start gap-8">
            <NewsletterInline />
            <AdSlot size="rectangle" />
          </aside>
        </div>
      </section>
    </>
  );
}
