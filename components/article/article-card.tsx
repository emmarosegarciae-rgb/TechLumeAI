import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import type { Article } from "@/lib/types";
import { getCategory } from "@/lib/data/categories";
import { Badge } from "@/components/ui/badge";
import { AuthorBadge } from "@/components/ui/author-badge";
import { ArticleCardActions } from "@/components/article/article-card-actions";
import { cn, formatShortDate } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  variant?: "default" | "compact" | "horizontal" | "lead";
  priority?: boolean;
  className?: string;
};

export function ArticleCard({
  article,
  variant = "default",
  priority = false,
  className
}: ArticleCardProps) {
  const category = getCategory(article.category);

  if (variant === "compact") {
    return (
      <article className={cn("group relative rounded-[var(--radius)] border border-slate-200/80 bg-white/70 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-950/70 dark:hover:border-sky-400/60", className)}>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant={article.sponsored ? "warning" : "secondary"}>
              {article.sponsored ? "Sponsored" : category?.name}
            </Badge>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{formatShortDate(article.publishedAt)}</span>
          </div>
          <ArticleCardActions slug={article.slug} title={article.title} variant="minimal" />
        </div>
        <Link href={`/articles/${article.slug}`} className="focus-ring block rounded-md">
          <h3 className="font-display text-base font-bold leading-snug tracking-normal text-slate-900 transition group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-sky-300">
            {article.title}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
          {article.excerpt}
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 dark:border-slate-900">
          <AuthorBadge authorSlug={article.author} variant="compact" readingMinutes={article.readingMinutes} />
        </div>
      </article>
    );
  }

  if (variant === "lead") {
    return (
      <article className={cn("group relative overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-white shadow-luxe transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl dark:border-slate-800/90 dark:bg-slate-950 dark:hover:border-sky-400/50", className)}>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Link
            href={`/articles/${article.slug}`}
            className="relative block min-h-[280px] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 sm:min-h-[340px]"
          >
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
          </Link>
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:py-8 lg:pr-8 lg:pl-2">
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default" className="bg-blue-600 text-white dark:bg-sky-500 dark:text-slate-950">
                    Lead Editorial Pick
                  </Badge>
                  <Badge variant={article.sponsored ? "warning" : "secondary"}>
                    {article.sponsored ? "Sponsored" : category?.name}
                  </Badge>
                </div>
                <ArticleCardActions slug={article.slug} title={article.title} />
              </div>
              <Link href={`/articles/${article.slug}`} className="focus-ring block rounded-md">
                <h3 className="font-display text-2xl font-black leading-tight tracking-normal text-slate-900 transition group-hover:text-blue-700 dark:text-white dark:group-hover:text-sky-300 sm:text-3xl">
                  {article.title}
                </h3>
              </Link>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {article.dek || article.excerpt}
              </p>
              {article.pros && article.pros.length > 0 ? (
                <div className="mt-5 rounded-[var(--radius)] border border-blue-100 bg-blue-50/60 p-4 dark:border-blue-900/40 dark:bg-blue-950/30">
                  <p className="mb-1.5 flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-sky-300">
                    <Sparkles className="size-3.5" aria-hidden="true" />
                    Key Executive Takeaway
                  </p>
                  <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">
                    {article.pros[0]}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800/80">
              <AuthorBadge
                authorSlug={article.author}
                publishedAt={article.publishedAt}
                readingMinutes={article.readingMinutes}
              />
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "horizontal") {
    return (
      <article
        className={cn(
          "group relative grid gap-4 rounded-[var(--radius)] border border-slate-200/90 bg-white p-3.5 shadow-luxe transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg dark:border-slate-800/90 dark:bg-slate-950 dark:hover:border-sky-400/60 md:grid-cols-[200px_1fr]",
          className
        )}
      >
        <Link
          href={`/articles/${article.slug}`}
          className="relative block aspect-[16/10] overflow-hidden rounded-[var(--radius)] bg-slate-100 dark:bg-slate-900 md:aspect-auto md:h-full"
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(min-width: 768px) 200px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="flex flex-col justify-between py-1 pr-1">
          <div>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Badge variant={article.sponsored ? "warning" : "secondary"}>
                  {article.sponsored ? "Sponsored" : category?.name}
                </Badge>
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{formatShortDate(article.publishedAt)}</span>
              </div>
              <ArticleCardActions slug={article.slug} title={article.title} variant="minimal" />
            </div>
            <Link href={`/articles/${article.slug}`} className="focus-ring block rounded-md">
              <h3 className="font-display text-lg font-bold leading-tight tracking-normal text-slate-900 transition group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-sky-300">
                {article.title}
              </h3>
            </Link>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {article.excerpt}
            </p>
          </div>
          <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-900">
            <AuthorBadge
              authorSlug={article.author}
              variant="compact"
              readingMinutes={article.readingMinutes}
            />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-white shadow-luxe transition duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl dark:border-slate-800/90 dark:bg-slate-950 dark:hover:border-sky-400/60",
        className
      )}
    >
      <div>
        <Link
          href={`/articles/${article.slug}`}
          className="relative block aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900"
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          {article.trending ? (
            <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white backdrop-blur-md">
              <span className="badge-live-dot" aria-hidden="true" />
              Trending
            </span>
          ) : null}
        </Link>
        <div className="p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Badge variant={article.sponsored ? "warning" : "secondary"}>
                {article.sponsored ? "Sponsored" : category?.name}
              </Badge>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{formatShortDate(article.publishedAt)}</span>
            </div>
            <ArticleCardActions slug={article.slug} title={article.title} variant="minimal" />
          </div>
          <Link href={`/articles/${article.slug}`} className="focus-ring block rounded-md">
            <h3 className="font-display text-xl font-bold leading-tight tracking-normal text-slate-900 transition group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-sky-300">
              {article.title}
            </h3>
          </Link>
          <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {article.excerpt}
          </p>
        </div>
      </div>
      <div className="border-t border-slate-100 mx-5 pb-4 pt-3.5 dark:border-slate-800/80">
        <AuthorBadge
          authorSlug={article.author}
          readingMinutes={article.readingMinutes}
        />
      </div>
    </article>
  );
}
