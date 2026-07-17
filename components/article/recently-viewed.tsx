"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type RecentArticle = {
  title: string;
  slug: string;
  href: string;
};

export function RecentlyViewed({
  currentTitle,
  currentSlug
}: {
  currentTitle: string;
  currentSlug: string;
}) {
  const [recent, setRecent] = useState<RecentArticle[]>([]);

  useEffect(() => {
    const key = "tlai_recent_articles";
    const current: RecentArticle = {
      title: currentTitle,
      slug: currentSlug,
      href: `/articles/${currentSlug}`
    };

    try {
      const stored = localStorage.getItem(key);
      let list: RecentArticle[] = stored ? JSON.parse(stored) : [];
      list = list.filter((item) => item.slug !== currentSlug);
      list.unshift(current);
      list = list.slice(0, 4);
      localStorage.setItem(key, JSON.stringify(list));
      setTimeout(() => setRecent(list.slice(1)), 0);
    } catch {
      // Ignore localStorage access errors
    }
  }, [currentTitle, currentSlug]);

  if (recent.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="font-display text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Recently Viewed
        </h3>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Articles you read recently will appear here as you browse.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="font-display text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Recently Viewed
      </h3>
      <ul className="mt-3 divide-y divide-slate-100 dark:divide-slate-800">
        {recent.map((item) => (
          <li key={item.slug} className="py-2.5 first:pt-0 last:pb-0">
            <Link
              href={item.href}
              className="line-clamp-2 text-xs font-semibold text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
