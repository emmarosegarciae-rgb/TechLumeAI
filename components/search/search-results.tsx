"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Article } from "@/lib/types";
import { categories, getCategory } from "@/lib/data/categories";
import { ArticleCard } from "@/components/article/article-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchResultsProps = {
  initialQuery?: string;
  articles: Article[];
};

export function SearchResults({ initialQuery = "", articles }: SearchResultsProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    return articles
      .filter((article) => {
        const matchesQuery =
          !value ||
          [article.title, article.excerpt, getCategory(article.category)?.name, ...article.tags]
            .join(" ")
            .toLowerCase()
            .includes(value);
        const matchesCategory = category === "all" || article.category === category;
        return matchesQuery && matchesCategory;
      })
      .sort((a, b) => {
        if (sort === "reading") {
          return a.readingMinutes - b.readingMinutes;
        }
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      });
  }, [articles, category, query, sort]);

  return (
    <div className="grid gap-8">
      <div className="rounded-[var(--radius)] border border-slate-200 bg-white p-4 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles, tags, companies, topics..."
              className="pl-9"
              aria-label="Search query"
            />
          </div>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="focus-ring h-11 rounded-[var(--radius)] border border-slate-200 bg-white px-3 text-sm font-semibold dark:border-slate-800 dark:bg-slate-950"
            aria-label="Filter by category"
          >
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="focus-ring h-11 rounded-[var(--radius)] border border-slate-200 bg-white px-3 text-sm font-semibold dark:border-slate-800 dark:bg-slate-950"
            aria-label="Sort results"
          >
            <option value="newest">Newest first</option>
            <option value="reading">Shortest reads</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          {results.length} results
        </p>
        <Button asChild variant="outline">
          <Link href="/newsletter">Get weekly briefings</Link>
        </Button>
      </div>

      {results.length === 0 ? (
        <div className="rounded-[var(--radius)] border border-slate-200 bg-white p-10 text-center shadow-luxe dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto mb-6 relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
            <Image
              src="/images/illustrations/empty-search.svg"
              alt="Empty Search Radar Scanning"
              fill
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-cover"
            />
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            No briefings match your active filters
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">
            We couldn&apos;t find any articles matching &ldquo;{query}&rdquo;. Try adjusting your keywords or clearing the active category filter.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              Clear all filters
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Browse latest coverage</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-5">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="horizontal" />
          ))}
        </div>
      )}
    </div>
  );
}
