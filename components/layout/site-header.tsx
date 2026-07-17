import Link from "next/link";
import { ChevronDown, TrendingUp } from "lucide-react";
import { articles, trendingTopics } from "@/lib/data/articles";
import { categories } from "@/lib/data/categories";
import { businessNav, primaryNav, topicNav } from "@/lib/data/navigation";
import { SearchOverlay } from "@/components/search/search-overlay";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function SiteHeader() {
  const latest = articles.slice(0, 4);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/86 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/86">
      <div className="container-wide">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MobileMenu />
            <Logo />
          </div>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <MegaMenu latest={latest} />
            {primaryNav.slice(1, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-[var(--radius)] px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <SearchOverlay />
            <ThemeToggle />
          </div>
        </div>

        <div className="hidden h-10 items-center gap-4 border-t border-slate-200/70 text-sm dark:border-slate-800/70 lg:flex">
          <span className="inline-flex items-center gap-2 whitespace-nowrap font-bold text-slate-950 dark:text-slate-50">
            <TrendingUp className="size-4 text-blue-600 dark:text-sky-300" />
            Trending
          </span>
          <div className="scrollbar-none flex gap-2 overflow-x-auto">
            {trendingTopics.map((topic) => (
              <Link
                key={topic}
                href={`/search?q=${encodeURIComponent(topic)}`}
                className="whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

type MegaMenuProps = {
  latest: typeof articles;
};

function MegaMenu({ latest }: MegaMenuProps) {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-label="Latest News navigation menu"
        className="focus-ring inline-flex items-center gap-1 rounded-[var(--radius)] px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
      >
        Latest News
        <ChevronDown className="size-4 transition group-hover:rotate-180" aria-hidden="true" />
      </button>
      <div className="invisible absolute left-0 top-full w-[820px] translate-y-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
        <div className="grid grid-cols-[1.1fr_0.9fr_0.8fr] gap-5 rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Latest Briefings
            </p>
            <div className="grid gap-3">
              {latest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="focus-ring rounded-[var(--radius)] p-3 transition hover:bg-blue-50 dark:hover:bg-slate-900"
                >
                  <p className="text-sm font-bold leading-snug">{article.title}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Categories
            </p>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="focus-ring rounded-[var(--radius)] border border-slate-200 p-3 text-sm font-semibold hover:border-blue-300 hover:text-blue-700 dark:border-slate-800"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Popular
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {topicNav.slice(0, 7).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold hover:border-blue-300 hover:text-blue-700 dark:border-slate-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Work With Us
            </p>
            <div className="grid gap-2">
              {businessNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-[var(--radius)] px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
