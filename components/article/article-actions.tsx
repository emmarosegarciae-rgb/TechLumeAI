"use client";

import { Bookmark, Copy, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ArticleActions() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        type="button"
        variant={liked ? "secondary" : "outline"}
        onClick={() => setLiked((value) => !value)}
        aria-pressed={liked}
      >
        <Heart className={liked ? "size-4 fill-current" : "size-4"} aria-hidden="true" />
        Like
      </Button>
      <Button
        type="button"
        variant={bookmarked ? "secondary" : "outline"}
        onClick={() => setBookmarked((value) => !value)}
        aria-pressed={bookmarked}
      >
        <Bookmark
          className={bookmarked ? "size-4 fill-current" : "size-4"}
          aria-hidden="true"
        />
        Bookmark
      </Button>
      <Button type="button" variant="outline" onClick={copyLink}>
        <Copy className="size-4" aria-hidden="true" />
        {copied ? "Copied" : "Copy Link"}
      </Button>
    </div>
  );
}
