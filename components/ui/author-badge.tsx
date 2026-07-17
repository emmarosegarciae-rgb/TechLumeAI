import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";
import { getAuthor } from "@/lib/data/authors";
import { cn, formatShortDate } from "@/lib/utils";

type AuthorBadgeProps = {
  authorSlug: string;
  publishedAt?: string;
  readingMinutes?: number;
  variant?: "compact" | "default" | "hero";
  className?: string;
};

export function AuthorBadge({
  authorSlug,
  publishedAt,
  readingMinutes,
  variant = "default",
  className
}: AuthorBadgeProps) {
  const author = getAuthor(authorSlug);

  if (!author) {
    return null;
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400", className)}>
        <div className="relative size-6 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200 dark:ring-slate-800">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            sizes="24px"
            className="object-cover"
          />
        </div>
        <span className="truncate text-slate-800 dark:text-slate-200">{author.name}</span>
        {readingMinutes ? (
          <span className="inline-flex items-center gap-1 text-slate-500">
            <Clock className="size-3" aria-hidden="true" />
            {readingMinutes} min
          </span>
        ) : null}
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={cn("flex flex-wrap items-center gap-3.5", className)}>
        <Link
          href={`/authors/${author.slug}`}
          className="group focus-ring flex items-center gap-3 rounded-full bg-slate-100/80 px-3.5 py-1.5 transition hover:bg-blue-50 dark:bg-slate-900/80 dark:hover:bg-slate-800"
        >
          <div className="relative size-9 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-600/30 transition group-hover:ring-blue-600 dark:ring-sky-400/30 dark:group-hover:ring-sky-400">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-slate-950 group-hover:text-blue-700 dark:text-white dark:group-hover:text-sky-300">
                {author.name}
              </span>
              <CheckCircle2 className="size-3.5 text-blue-600 dark:text-sky-400" aria-hidden="true" />
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {author.role}
            </p>
          </div>
        </Link>
        {publishedAt || readingMinutes ? (
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>•</span>
            {publishedAt ? <span>{formatShortDate(publishedAt)}</span> : null}
            {publishedAt && readingMinutes ? <span>•</span> : null}
            {readingMinutes ? (
              <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300">
                <Clock className="size-3.5 text-blue-600 dark:text-sky-400" aria-hidden="true" />
                {readingMinutes} min read
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Link
        href={`/authors/${author.slug}`}
        className="group focus-ring relative size-7 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200 transition hover:ring-2 hover:ring-blue-600 dark:ring-slate-800 dark:hover:ring-sky-400"
      >
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          sizes="28px"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <Link
          href={`/authors/${author.slug}`}
          className="flex items-center gap-1 text-slate-800 transition hover:text-blue-700 dark:text-slate-200 dark:hover:text-sky-300"
        >
          <span>{author.name}</span>
          <CheckCircle2 className="size-3 text-blue-600 dark:text-sky-400" aria-hidden="true" />
        </Link>
        {publishedAt ? (
          <span className="text-slate-400 dark:text-slate-500">• {formatShortDate(publishedAt)}</span>
        ) : null}
      </div>
    </div>
  );
}
