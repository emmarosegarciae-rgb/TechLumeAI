import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, CheckCircle2, Star } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { ArticleCard } from "@/components/article/article-card";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { StructuredData } from "@/components/structured-data";
import { articles, getArticle } from "@/lib/data/articles";
import { getCategory } from "@/lib/data/categories";
import { getAllGlossaryEntities, getGlossaryEntityBySlug } from "@/lib/data/glossary";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, definedTermSchema } from "@/lib/seo/schema";

type GlossarySlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllGlossaryEntities().map((entity) => ({ slug: entity.slug }));
}

export async function generateMetadata({
  params
}: GlossarySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entity = getGlossaryEntityBySlug(slug);

  if (!entity) {
    return createMetadata({ title: "Definition Not Found" });
  }

  return createMetadata({
    title: `${entity.term} — Technical Definition & Guide`,
    description: entity.definition,
    path: `/glossary/${entity.slug}`,
    keywords: [entity.term, ...(entity.synonyms || []), "Technical Definition", entity.pillar],
    category: entity.pillar
  });
}

export default async function GlossarySlugPage({ params }: GlossarySlugPageProps) {
  const { slug } = await params;
  const entity = getGlossaryEntityBySlug(slug);

  if (!entity) {
    notFound();
  }

  const parentCategory = getCategory(entity.pillar);
  const cornerstoneArticle = entity.cornerstoneSlug
    ? getArticle(entity.cornerstoneSlug)
    : undefined;

  const mentioningArticles = articles.filter(
    (a) =>
      a.relatedEntities?.includes(entity.slug) ||
      a.tags.some((t) => t.toLowerCase().includes(entity.term.toLowerCase().split(" ")[0])) ||
      a.slug === cornerstoneArticle?.slug
  );

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Glossary", href: "/glossary" },
            { name: entity.term, href: `/glossary/${entity.slug}` }
          ]),
          definedTermSchema(entity.term, entity.definition, `/glossary/${entity.slug}`, entity.synonyms)
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs
          items={[
            { label: "Glossary", href: "/glossary" },
            { label: entity.term, href: `/glossary/${entity.slug}` }
          ]}
        />
        <div className="mt-8 rounded-[var(--radius)] border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-950/60 dark:text-sky-300">
              Canonical Entity Definition
            </span>
            {parentCategory ? (
              <Link
                href={`/category/${parentCategory.slug}`}
                className="font-sans text-xs font-bold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                Domain: {parentCategory.name}
              </Link>
            ) : null}
          </div>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight tracking-normal text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {entity.term}
          </h1>
          <p itemProp="description" className="mt-5 max-w-3xl font-sans text-lg leading-8 text-slate-700 dark:text-slate-200">
            {entity.definition}
          </p>

          <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-5 dark:bg-primary/10">
            <div className="flex items-center gap-2 font-display text-xs font-black uppercase tracking-wider text-primary">
              <CheckCircle2 className="size-4" />
              <span>GEO Canonical Definition & Entity Taxonomy</span>
            </div>
            <p className="mt-2 font-sans text-sm leading-6 text-foreground/90">
              The term <strong className="text-primary">{entity.term}</strong> is formally maintained within the <strong>{parentCategory ? parentCategory.name : entity.pillar}</strong> architectural ontology. It serves as an authoritative semantic anchor across TechlumeAI technical specifications and LLM retrieval indices.
            </p>
          </div>

          {entity.synonyms && entity.synonyms.length > 0 ? (
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Synonyms & Aliases:
              </span>
              {entity.synonyms.map((syn) => (
                <span
                  key={syn}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  {syn}
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
            {/* Key Applications */}
            {entity.keyApplications && entity.keyApplications.length > 0 ? (
              <section
                itemScope
                itemType="https://schema.org/ItemList"
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8"
              >
                <meta itemProp="name" content={`Production Applications & Technical Impact — ${entity.term}`} />
                <h2 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  Production Applications & Technical Impact
                </h2>
                <ul className="mt-5 grid gap-3.5">
                  {entity.keyApplications.map((app, idx) => (
                    <li
                      key={idx}
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                      className="flex items-start gap-3"
                    >
                      <meta itemProp="position" content={String(idx + 1)} />
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-blue-600 dark:text-cyan-400" />
                      <span itemProp="name" className="font-sans text-base leading-7 text-slate-700 dark:text-slate-300">
                        {app}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {/* Linked Cornerstone Guide */}
            {cornerstoneArticle ? (
              <section className="rounded-3xl border border-blue-500/30 bg-blue-50/40 p-6 dark:bg-blue-950/20 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                  <Star className="size-4 fill-blue-600 dark:fill-cyan-400" />
                  <span>Definitive Reference Guide</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-black text-slate-900 dark:text-white">
                  <Link
                    href={`/articles/${cornerstoneArticle.slug}`}
                    className="hover:text-blue-600 dark:hover:text-cyan-300"
                  >
                    {cornerstoneArticle.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {cornerstoneArticle.dek || cornerstoneArticle.excerpt}
                </p>
                <Link
                  href={`/articles/${cornerstoneArticle.slug}`}
                  className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-bold text-blue-600 hover:underline dark:text-cyan-400"
                >
                  <span>Read full architecture guide</span>
                  <ArrowRight className="size-4" />
                </Link>
              </section>
            ) : null}

            {/* Articles Mentioning This Entity */}
            <section className="grid gap-6">
              <div>
                <h2 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  Articles Mentioning {entity.term}
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Published research, benchmarks, and deep-dives referencing this concept:
                </p>
              </div>

              {mentioningArticles.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {mentioningArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-800">
                  <BookOpen className="mx-auto size-8 text-slate-400" />
                  <p className="mt-2 font-display text-base font-bold text-slate-800 dark:text-slate-200">
                    Coverage featuring this term is in editorial review
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Explore our AI Engineering pillar for related technical briefings.
                  </p>
                </div>
              )}
            </section>

            {/* Related Entities */}
            {entity.relatedEntities && entity.relatedEntities.length > 0 ? (
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-8">
                <h3 className="font-display text-lg font-black text-slate-900 dark:text-white sm:text-xl">
                  Related Knowledge Graph Entities
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {entity.relatedEntities.map((relSlug) => {
                    const relEntity = getGlossaryEntityBySlug(relSlug);
                    if (!relEntity) return null;
                    return (
                      <Link
                        key={relSlug}
                        href={`/glossary/${relSlug}`}
                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 transition-all hover:border-blue-400 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-cyan-500/40 dark:hover:bg-slate-900"
                      >
                        <div>
                          <span className="font-display text-sm font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                            {relEntity.term}
                          </span>
                        </div>
                        <ArrowRight className="size-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
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
