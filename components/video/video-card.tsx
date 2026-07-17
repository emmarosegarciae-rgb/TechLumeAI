import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import type { Article } from "@/lib/types";
import { AuthorBadge } from "@/components/ui/author-badge";
import { ArticleCardActions } from "@/components/article/article-card-actions";
import { cn } from "@/lib/utils";

type VideoCardProps = {
  article: Article;
  className?: string;
};

export function VideoCard({ article, className }: VideoCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-white shadow-luxe transition duration-300 hover:-translate-y-1.5 hover:border-indigo-400 hover:shadow-xl dark:border-slate-800/90 dark:bg-slate-950 dark:hover:border-indigo-400/70",
        className
      )}
    >
      <div>
        <Link
          href={`/articles/${article.slug}`}
          className="relative block aspect-video overflow-hidden bg-slate-950"
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition duration-300 group-hover:from-slate-950/90" />
          
          <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-md">
              <PlayCircle className="size-3.5 fill-current" aria-hidden="true" />
              <span>{article.video?.duration || "Video"}</span>
            </span>
          </div>

          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-300 group-hover:text-white transition">
              Watch Executive Briefing →
            </span>
          </div>
        </Link>
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Video Briefing
            </span>
            <ArticleCardActions slug={article.slug} title={article.title} variant="minimal" />
          </div>
          <Link href={`/articles/${article.slug}`} className="focus-ring block rounded-md">
            <h3 className="font-display text-xl font-bold leading-tight tracking-normal text-slate-900 transition group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
              {article.title}
            </h3>
          </Link>
          <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {article.excerpt}
          </p>
        </div>
      </div>
      <div className="border-t border-slate-100 mx-5 pb-4 pt-3.5 dark:border-slate-800/80">
        <AuthorBadge
          authorSlug={article.author}
          variant="compact"
          readingMinutes={article.readingMinutes}
        />
      </div>
    </article>
  );
}
