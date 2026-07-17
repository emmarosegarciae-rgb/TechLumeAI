import type { Metadata } from "next";
import { SearchResults } from "@/components/search/search-results";
import { PageHero } from "@/components/sections/page-hero";
import { articles, trendingTopics } from "@/lib/data/articles";
import { categories } from "@/lib/data/categories";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export const metadata: Metadata = createMetadata({
  title: "Search Intelligence & Articles — TechlumeAI",
  description:
    "Search TechlumeAI articles, topic clusters, enterprise briefings, and technical guides across AI and software engineering.",
  path: "/search",
  noIndex: true,
  keywords: ["Search TechlumeAI", "AI Research Search", "Enterprise Technical Articles"]
});

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Search Intelligence & Articles — TechlumeAI",
            description: "Search TechlumeAI articles by AI topic, technology company, category, tag, or trend.",
            url: "/search",
            type: "SearchResultsPage"
          })
        ]}
      />
      <PageHero
        eyebrow="Search"
        title="Instant research across AI and technology coverage."
        description="Filter briefings by company, topic, category, tag, popularity, and reading time."
      />
      <section className="container-page py-10">
        <div className="mb-8 grid gap-4 lg:grid-cols-2">
          <Panel
            title="Popular Searches"
            items={trendingTopics.map((topic) => `/search?q=${encodeURIComponent(topic)}|${topic}`)}
          />
          <Panel
            title="Categories"
            items={categories.map((category) => `/category/${category.slug}|${category.name}`)}
          />
        </div>
        <SearchResults initialQuery={q || ""} articles={articles} />
      </section>
    </>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const [href, label] = item.split("|");
          return (
            <a
              key={item}
              href={href}
              className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:text-slate-300"
            >
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
