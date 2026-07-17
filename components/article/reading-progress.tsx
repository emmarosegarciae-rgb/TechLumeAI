"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTotal =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal <= 0) {
        setProgress(0);
        return;
      }
      const scrollPosition = window.scrollY;
      const currentProgress = (scrollPosition / scrollTotal) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed inset-x-0 top-0 z-[200] h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 transition-all duration-150 ease-out"
      style={{ width: `${progress}%` }}
    />
  );
}
