import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { ArticleCard } from "@/components/article/article-card";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { articles } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, collectionPageSchema, itemListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "All Technical Articles & Research Archive — TechlumeAI",
  description:
    "Browse the complete TechlumeAI archive of technical journalism, engineering guides, AI model evaluations, and enterprise briefings.",
  path: "/articles",
  keywords: ["TechlumeAI Archive", "AI Articles Index", "Technical Journalism Archive", "Software Engineering Briefings"]
});

export default function ArticlesDirectoryPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([{ name: "Articles", href: "/articles" }]),
          collectionPageSchema(
            "All Technical Articles & Research Archive — TechlumeAI",
            "Browse the complete TechlumeAI archive of technical journalism, engineering guides, AI model evaluations, and enterprise briefings.",
            "/articles",
            articles.map((a) => ({ name: a.title, url: `/articles/${a.slug}` }))
          ),
          itemListSchema(
            articles.map((a) => ({ name: a.title, url: `/articles/${a.slug}` })),
            "TechlumeAI Article Archive"
          )
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs items={[{ label: "Articles Archive", href: "/articles" }]} />
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-400">
            <BookOpen className="size-4" />
            <span>Complete Publication Archive</span>
          </div>
          <h1 className="mt-2 font-display text-4xl font-black leading-tight tracking-normal text-slate-900 dark:text-white sm:text-5xl">
            Technical Journalism Archive
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Explore all published reports, deep dives, architectural benchmarks, and executive briefings produced by the TechlumeAI editorial team.
          </p>
        </div>
      </section>

      <section className="container-page py-12 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="default" />
          ))}
        </div>
      </section>
    </>
  );
}
