import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { StructuredData } from "@/components/structured-data";
import { categories } from "@/lib/data/categories";
import { getAllTopics, getTopicsByPillar } from "@/lib/data/topics";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "AI & Technology Topic Clusters Hub",
  description:
    "Explore TechlumeAI's semantic topic hubs and clusters across AI engineering, enterprise governance, model context protocols, and edge silicon.",
  path: "/topics"
});

export default function TopicsDirectoryPage() {
  const allTopics = getAllTopics();
  const editorialCategories = categories.filter(
    (c) => c.slug !== "reviews" && c.slug !== "videos"
  );

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([{ name: "Topics", href: "/topics" }]),
          collectionPageSchema(
            "AI & Technology Topic Clusters Hub",
            "Explore TechlumeAI's semantic topic hubs and clusters across AI engineering, enterprise governance, model context protocols, and edge silicon.",
            "/topics",
            allTopics.map((t) => ({ name: t.name, url: `/topics/${t.slug}` }))
          )
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs items={[{ label: "Topic Clusters", href: "/topics" }]} />
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-400">
            <Layers className="size-4" />
            <span>Semantic Knowledge Graph</span>
          </div>
          <h1 className="mt-2 font-display text-4xl font-black leading-tight tracking-normal text-slate-900 dark:text-white sm:text-5xl">
            Topic Clusters & Knowledge Hubs
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Every topic hub organizes authoritative research, cornerstone guides, comparison matrices, and supporting tutorials around a unified entity cluster.
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
              const pillarTopics = getTopicsByPillar(pillar.slug);
              if (pillarTopics.length === 0) return null;

              return (
                <div key={pillar.slug} className="grid gap-6">
                  <div className="flex flex-col gap-2 border-b border-slate-200 pb-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-3.5 rounded-full"
                        style={{ backgroundColor: pillar.color }}
                      />
                      <h2 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                        {pillar.name} Topics
                      </h2>
                    </div>
                    <Link
                      href={`/category/${pillar.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:underline dark:text-cyan-400"
                    >
                      View Pillar Overview &rarr;
                    </Link>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {pillarTopics.map((topic) => (
                      <div
                        key={topic.slug}
                        className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-500/50"
                      >
                        <div>
                          <div className="mb-3 flex items-center justify-between">
                            <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-blue-700 dark:bg-blue-950/60 dark:text-sky-300">
                              Topic Hub
                            </span>
                            <Link
                              href={`/topics/${topic.slug}`}
                              className="flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-900 dark:text-slate-400 dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-950"
                            >
                              <ArrowRight className="size-4" />
                            </Link>
                          </div>
                          <h3 className="font-display text-xl font-bold leading-snug text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                            <Link href={`/topics/${topic.slug}`}>{topic.name}</Link>
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {topic.description}
                          </p>
                        </div>

                        {topic.subtopics && topic.subtopics.length > 0 ? (
                          <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800/80">
                            <p className="mb-2 font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                              Subtopics (`Cluster Node`):
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {topic.subtopics.slice(0, 3).map((sub) => (
                                <span
                                  key={sub}
                                  className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                                >
                                  {sub}
                                </span>
                              ))}
                              {topic.subtopics.length > 3 ? (
                                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                                  +{topic.subtopics.length - 3} more
                                </span>
                              ) : null}
                            </div>
                          </div>
                        ) : null}
                      </div>
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
