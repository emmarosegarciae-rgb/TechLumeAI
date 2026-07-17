"use client";

import { useState, useEffect } from "react";
import { Bookmark, Share2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ArticleCardActionsProps = {
  slug: string;
  title: string;
  className?: string;
  variant?: "default" | "minimal";
};

export function ArticleCardActions({
  slug,
  title,
  className,
  variant = "default"
}: ArticleCardActionsProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("techlume_bookmarks");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.includes(slug)) {
          setTimeout(() => setBookmarked(true), 0);
        }
      }
    } catch {
      // Ignore localStorage errors in restricted environments
    }
  }, [slug]);

  function toggleBookmark(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      const saved = localStorage.getItem("techlume_bookmarks");
      let list: string[] = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(list)) list = [];

      let nextState = false;
      if (list.includes(slug)) {
        list = list.filter((item) => item !== slug);
        nextState = false;
      } else {
        list.push(slug);
        nextState = true;
      }
      localStorage.setItem("techlume_bookmarks", JSON.stringify(list));
      setBookmarked(nextState);
    } catch {
      setBookmarked(!bookmarked);
    }
  }

  function handleShare(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/articles/${slug}`;
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url
      }).catch(() => {
        // Fallback to copy
        copyToClipboard(url);
      });
    } else {
      copyToClipboard(url);
    }
  }

  function copyToClipboard(url: string) {
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        onClick={toggleBookmark}
        aria-label={bookmarked ? "Remove from reading list" : "Save to reading list"}
        className={cn(
          "focus-ring grid size-8 place-items-center rounded-full border border-slate-200/80 bg-white/90 text-slate-500 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-400 dark:hover:border-sky-400 dark:hover:text-sky-300",
          bookmarked && "border-blue-500 bg-blue-50 text-blue-600 dark:border-sky-400 dark:bg-sky-950/50 dark:text-sky-300",
          variant === "minimal" && "size-7 border-transparent bg-transparent shadow-none hover:bg-slate-100 dark:hover:bg-slate-800"
        )}
      >
        <Bookmark className={cn("size-3.5", bookmarked && "fill-current")} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={handleShare}
        aria-label="Share article"
        className={cn(
          "focus-ring grid size-8 place-items-center rounded-full border border-slate-200/80 bg-white/90 text-slate-500 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-400 dark:hover:border-sky-400 dark:hover:text-sky-300",
          copied && "border-green-500 bg-green-50 text-green-600 dark:border-green-400 dark:bg-green-950/50 dark:text-green-300",
          variant === "minimal" && "size-7 border-transparent bg-transparent shadow-none hover:bg-slate-100 dark:hover:bg-slate-800"
        )}
      >
        {copied ? (
          <Check className="size-3.5 text-green-600 dark:text-green-400" aria-hidden="true" />
        ) : (
          <Share2 className="size-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
