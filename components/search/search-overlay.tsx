"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { articles, trendingTopics } from "@/lib/data/articles";
import { categories, getCategory } from "@/lib/data/categories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatShortDate } from "@/lib/utils";

export function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) {
      return articles.slice(0, 5);
    }

    return articles
      .filter((article) => {
        const category = getCategory(article.category)?.name || "";
        return [article.title, article.excerpt, category, ...article.tags]
          .join(" ")
          .toLowerCase()
          .includes(value);
      })
      .slice(0, 8);
  }, [query]);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className="hidden h-10 min-w-48 justify-between px-3 text-slate-500 lg:inline-flex"
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex items-center gap-2">
          <Search className="size-4" aria-hidden="true" />
          Search
        </span>
        <kbd className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-bold dark:border-slate-700">
          Ctrl K
        </kbd>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open search"
      >
        <Search className="size-4" aria-hidden="true" />
      </Button>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-slate-950/55 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search TechlumeAI"
        >
          <div className="mx-auto mt-10 max-w-3xl rounded-[var(--radius)] border border-slate-200 bg-white shadow-luxe dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center gap-3 border-b border-slate-200 p-4 dark:border-slate-800">
              <Search className="size-5 text-blue-600 dark:text-sky-300" />
              <Input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search AI, cloud, cybersecurity, programming..."
                className="border-0 bg-transparent px-0 shadow-none"
                aria-label="Search articles"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Close search"
              >
                <X className="size-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-4">
              <div className="mb-4 flex flex-wrap gap-2">
                {trendingTopics.slice(0, 6).map((topic) => (
                  <button
                    type="button"
                    key={topic}
                    onClick={() => setQuery(topic)}
                    className="focus-ring rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:text-slate-300"
                  >
                    {topic}
                  </button>
                ))}
              </div>

              <div className="grid gap-3">
                {results.map((article) => {
                  const category = getCategory(article.category);
                  return (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      onClick={() => setOpen(false)}
                      className="focus-ring rounded-[var(--radius)] border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-800 dark:hover:bg-slate-900"
                    >
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{category?.name}</Badge>
                        <span className="text-xs text-slate-500">
                          {formatShortDate(article.publishedAt)}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold leading-snug">
                        {article.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {article.excerpt}
                      </p>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4 dark:border-slate-800">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Categories
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      onClick={() => setOpen(false)}
                      className="focus-ring rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold hover:border-blue-300 hover:text-blue-700 dark:border-slate-800"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
