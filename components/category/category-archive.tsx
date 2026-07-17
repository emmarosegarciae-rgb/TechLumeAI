"use client";

import { useMemo, useState } from "react";
import type { Article } from "@/lib/types";
import { ArticleCard } from "@/components/article/article-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type CategoryArchiveProps = {
  articles: Article[];
};

export function CategoryArchive({ articles }: CategoryArchiveProps) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    return articles
      .filter((article) => {
        if (!value) {
          return true;
        }
        return [article.title, article.excerpt, ...article.tags]
          .join(" ")
          .toLowerCase()
          .includes(value);
      })
      .sort((a, b) => {
        if (sort === "popular") {
          return Number(Boolean(b.trending)) - Number(Boolean(a.trending));
        }
        if (sort === "reading") {
          return a.readingMinutes - b.readingMinutes;
        }
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      });
  }, [articles, query, sort]);

  const visibleArticles = filtered.slice(0, visible);

  return (
    <div className="grid gap-6">
      <div className="rounded-[var(--radius)] border border-slate-200 bg-white p-4 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
        <div className="grid gap-3 md:grid-cols-[1fr_180px]">
          <Input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisible(6);
            }}
            placeholder="Filter by title, tag, or topic"
            aria-label="Filter category articles"
          />
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="focus-ring h-11 rounded-[var(--radius)] border border-slate-200 bg-white px-3 text-sm font-semibold dark:border-slate-800 dark:bg-slate-950"
            aria-label="Sort category articles"
          >
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
            <option value="reading">Shortest</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {visibleArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} variant="horizontal" />
        ))}
      </div>

      {visibleArticles.length < filtered.length ? (
        <div className="flex justify-center">
          <Button type="button" variant="outline" onClick={() => setVisible((count) => count + 6)}>
            Load more articles
          </Button>
        </div>
      ) : null}
    </div>
  );
}
