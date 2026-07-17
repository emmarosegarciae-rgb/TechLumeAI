import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { StructuredData } from "@/components/structured-data";
import { categories } from "@/lib/data/categories";
import { getAllGlossaryEntities, getGlossaryEntitiesByPillar } from "@/lib/data/glossary";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "AI & Technology Canonical Glossary & Knowledge Graph",
  description:
    "Explore authoritative definitions of core artificial intelligence, LLM engineering, and computing concepts powering TechlumeAI's semantic knowledge base.",
  path: "/glossary"
});

export default function GlossaryDirectoryPage() {
  const allEntities = getAllGlossaryEntities();
  const editorialCategories = categories.filter(
    (c) => c.slug !== "reviews" && c.slug !== "videos"
  );

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([{ name: "Glossary", href: "/glossary" }]),
          collectionPageSchema(
            "AI & Technology Canonical Glossary & Knowledge Graph",
            "Explore authoritative definitions of core artificial intelligence, LLM engineering, and computing concepts powering TechlumeAI's semantic knowledge base.",
            "/glossary",
            allEntities.map((e) => ({ name: e.term, url: `/glossary/${e.slug}` }))
          )
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs items={[{ label: "Glossary & Knowledge Graph", href: "/glossary" }]} />
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-400">
            <BookOpen className="size-4" />
            <span>Canonical Entity Registry</span>
          </div>
          <h1 className="mt-2 font-display text-4xl font-black leading-tight tracking-normal text-slate-900 dark:text-white sm:text-5xl">
            AI & Technology Glossary
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Every technical term, standard, and protocol defined in our entity registry connects directly to practical implementation guides and evaluation benchmarks.
          </p>
        </div>
      </section>

      <section className="container-page py-10">
        <AdSlot size="leaderboard" />
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-14">
            {editorialCategories.map((pillar) => {
              const pillarEntities = getGlossaryEntitiesByPillar(pillar.slug);
              if (pillarEntities.length === 0) return null;

              return (
                <div key={pillar.slug} className="grid gap-6">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3 dark:border-slate-800">
                    <div
                      className="size-3 rounded-full"
                      style={{ backgroundColor: pillar.color }}
                    />
                    <h2 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                      {pillar.name} Terms
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {pillarEntities.map((entity) => (
                      <Link
                        key={entity.slug}
                        href={`/glossary/${entity.slug}`}
                        className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-500/50"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                              {entity.term}
                            </h3>
                            <ArrowRight className="size-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                          </div>
                          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {entity.definition}
                          </p>
                        </div>
                        {entity.synonyms && entity.synonyms.length > 0 ? (
                          <div className="mt-4 flex flex-wrap gap-1 border-t border-slate-100 pt-3 dark:border-slate-800/80">
                            {entity.synonyms.slice(0, 2).map((syn) => (
                              <span
                                key={syn}
                                className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-400"
                              >
                                {syn}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
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
