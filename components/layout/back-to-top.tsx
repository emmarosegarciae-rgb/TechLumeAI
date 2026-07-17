"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) {
    return null;
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      aria-label="Back to top of page"
      title="Back to top"
      className="focus-ring fixed bottom-6 right-6 z-40 size-11 rounded-full border border-slate-200/80 bg-white/90 shadow-luxe backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white dark:border-slate-800/80 dark:bg-slate-950/90 dark:hover:bg-slate-950"
    >
      <ArrowUp className="size-4 text-blue-600 dark:text-sky-300" aria-hidden="true" />
    </Button>
  );
}
