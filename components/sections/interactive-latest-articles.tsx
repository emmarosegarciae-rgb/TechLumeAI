"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code2, ShieldCheck, Cloud, Database, Rocket, Award, Layers, Briefcase, Brain } from "lucide-react";
import type { Article } from "@/lib/types";
import { ArticleCard } from "@/components/article/article-card";
import { cn } from "@/lib/utils";

type InteractiveLatestArticlesProps = {
  initialArticles: Article[];
};

const filterTabs = [
  { id: "all", label: "All News", icon: Layers },
  { id: "ai-engineering", label: "AI & LLMs", icon: Sparkles },
  { id: "enterprise-ai", label: "Enterprise AI", icon: Cloud },
  { id: "ai-tools", label: "AI Tools", icon: Award },
  { id: "programming-dev", label: "Programming", icon: Code2 },
  { id: "ai-business", label: "AI Business", icon: Briefcase },
  { id: "cybersecurity-ai", label: "Security", icon: ShieldCheck },
  { id: "ai-hardware", label: "Hardware", icon: Database },
  { id: "future-tech", label: "Future Tech", icon: Brain }
];

export function InteractiveLatestArticles({ initialArticles }: InteractiveLatestArticlesProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles =
    activeCategory === "all"
      ? initialArticles.slice(0, 6)
      : initialArticles
          .filter((a) => a.category === activeCategory)
          .slice(0, 6);

  return (
    <div>
      <div className="mb-8 overflow-x-auto scrollbar-none pb-2">
        <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3 dark:border-slate-800/80">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={cn(
                  "focus-ring inline-flex h-9 shrink-0 items-center gap-2 rounded-full px-4 text-xs font-bold transition duration-200",
                  isActive
                    ? "bg-slate-950 text-white shadow-md dark:bg-white dark:text-slate-950"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                )}
              >
                <Icon className={cn("size-3.5", isActive ? "text-blue-400 dark:text-blue-600" : "text-slate-400 dark:text-slate-500")} aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        layout
        className="grid gap-6 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
                transition={{ duration: 0.28, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <ArticleCard article={article} className="h-full" />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full rounded-[var(--radius)] border border-dashed border-slate-300 bg-slate-50/60 p-12 text-center dark:border-slate-800 dark:bg-slate-950/60"
            >
              <p className="font-display text-lg font-bold text-slate-800 dark:text-slate-200">
                No articles in this category right now
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Our editorial team is preparing deep dives for this section. Check back shortly.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className="mt-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-blue-700"
              >
                Show all latest articles
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
