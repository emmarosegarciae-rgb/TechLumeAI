import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, TrendingUp, ShieldCheck } from "lucide-react";
import type { Article } from "@/lib/types";
import { getCategory } from "@/lib/data/categories";
import { ArticleCard } from "@/components/article/article-card";
import { Badge } from "@/components/ui/badge";
import { AuthorBadge } from "@/components/ui/author-badge";
import { ArticleCardActions } from "@/components/article/article-card-actions";

type HomeHeroProps = {
  featured: Article;
  secondary: Article[];
};

export function HomeHero({ featured, secondary }: HomeHeroProps) {
  const category = getCategory(featured.category);

  return (
    <section className="container-wide pt-8 lg:pt-10">
      <div className="grid gap-6 lg:grid-cols-[1.42fr_0.88fr]">
        <article className="glass-panel group relative grid min-h-[600px] overflow-hidden rounded-[var(--radius)] lg:h-[650px] lg:grid-cols-[48%_52%]">
          <div className="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/10 px-3 py-1 font-mono text-xs font-bold text-blue-700 dark:bg-sky-400/10 dark:text-sky-300">
                    <span className="badge-live-dot" aria-hidden="true" />
                    DEEP DIVE · JULY 2026
                  </span>
                  <Badge variant="secondary">{category?.name || "AI Strategy"}</Badge>
                </div>
                <ArticleCardActions slug={featured.slug} title={featured.title} />
              </div>

              <Link href={`/articles/${featured.slug}`} className="focus-ring block rounded-md">
                <h1 className="editorial-title-1 font-black text-slate-950 transition duration-200 group-hover:text-blue-700 dark:text-white dark:group-hover:text-sky-300">
                  {featured.title}
                </h1>
              </Link>

              <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                {featured.dek || featured.excerpt}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 rounded bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  <ShieldCheck className="size-3.5 text-blue-600 dark:text-sky-400" aria-hidden="true" />
                  Verified & Fact-Checked
                </span>
                <span>•</span>
                <span>Enterprise Architecture Desk</span>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
              <div className="mb-5">
                <AuthorBadge
                  authorSlug={featured.author}
                  publishedAt={featured.publishedAt}
                  readingMinutes={featured.readingMinutes}
                  variant="hero"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={`/articles/${featured.slug}`}
                  className="focus-ring inline-flex h-11 items-center justify-center gap-2.5 rounded-[var(--radius)] bg-blue-600 px-6 text-sm font-bold text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 sm:w-auto"
                >
                  <span>Read executive analysis</span>
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href={`/articles/${featured.slug}`}
                  className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius)] border border-slate-200 bg-white px-5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300 sm:w-auto"
                >
                  <PlayCircle className="size-4 text-blue-600 dark:text-sky-400" aria-hidden="true" />
                  <span>Audio Briefing (8 min)</span>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href={`/articles/${featured.slug}`}
            className="relative flex h-full min-h-[300px] w-full items-center justify-center overflow-hidden bg-slate-100/90 p-4 sm:p-6 lg:p-8 dark:bg-slate-900/80"
          >
            <div className="relative h-full w-full min-h-[260px]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        </article>

        <aside className="grid flex-1 gap-4 lg:h-[650px] lg:overflow-y-auto scrollbar-none">
          <div className="group relative overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-slate-950 p-5 text-white shadow-luxe transition duration-200 hover:border-indigo-400/60 dark:border-slate-800">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sky-300">
                <PlayCircle className="size-5" aria-hidden="true" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em]">
                  Featured Video Briefing
                </span>
              </div>
              <span className="rounded-full bg-indigo-600/90 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white">
                12:18
              </span>
            </div>
            <Link href="/articles/robotics-foundation-models" className="focus-ring block rounded-md">
              <h2 className="font-display text-xl font-bold leading-snug tracking-tight text-white group-hover:text-sky-300 transition">
                How agentic workflows are changing enterprise software teams
              </h2>
            </Link>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              A concise briefing for founders, CTOs, and product leaders investing in AI-native operations and measurable governance.
            </p>
          </div>

          <div className="grid gap-3">
            {secondary.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} variant="compact" />
            ))}
          </div>

          <div className="rounded-[var(--radius)] border border-slate-200/90 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-2.5 flex items-center justify-between">
              <p className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
                <TrendingUp className="size-3.5 text-blue-600 dark:text-sky-400" aria-hidden="true" />
                Market Pulse Index
              </p>
              <span className="text-[10px] font-semibold text-slate-400">Weekly Delta</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 text-center">
              {[
                ["AI Agents", "+24%", "high"],
                ["Inference", "+18%", "high"],
                ["Cloud FinOps", "+12%", "med"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[var(--radius)] border border-slate-100 bg-slate-50/80 p-2.5 dark:border-slate-900 dark:bg-slate-900/60">
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{label}</p>
                  <p className="mt-0.5 font-display text-lg font-black text-green-600 dark:text-green-400">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
