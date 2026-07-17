import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Code2,
  ShieldCheck,
  Cloud,
  Database,
  Brain,
  Rocket,
  Briefcase,
  Award,
  PlayCircle
} from "lucide-react";
import type { Category, CategorySlug } from "@/lib/types";
import { getArticlesByCategory } from "@/lib/data/articles";
import { cn } from "@/lib/utils";

const categoryIconMap: Record<CategorySlug, React.ElementType> = {
  "ai-engineering": Sparkles,
  "enterprise-ai": Cloud,
  "ai-tools": Award,
  "programming-dev": Code2,
  "ai-business": Briefcase,
  "cybersecurity-ai": ShieldCheck,
  "ai-hardware": Database,
  "future-tech": Brain,
  reviews: Award,
  videos: PlayCircle
};

type CategoryCardProps = {
  category: Category;
  className?: string;
};

export function CategoryCard({ category, className }: CategoryCardProps) {
  const count = getArticlesByCategory(category.slug).length;
  const IconComponent = categoryIconMap[category.slug] || Sparkles;

  return (
    <Link
      href={`/category/${category.slug}`}
      style={{
        "--category-accent": category.color || "#2563EB"
      } as React.CSSProperties}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-white p-5 shadow-luxe transition duration-300 hover:-translate-y-1.5 hover:border-[var(--category-accent)] hover:shadow-xl dark:border-slate-800/90 dark:bg-slate-950 dark:hover:border-[var(--category-accent)]",
        className
      )}
    >
      <div>
        <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-[var(--radius)] bg-slate-100 dark:bg-slate-900">
          <Image
            src={category.image}
            alt={`${category.name} editorial illustration`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
            <IconComponent className="size-3.5 text-[var(--category-accent)]" aria-hidden="true" />
            <span>{category.name}</span>
          </div>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-black tracking-normal text-slate-900 transition group-hover:text-[var(--category-accent)] dark:text-white">
              {category.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {category.description}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5 dark:border-slate-800/80">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
          {count} {count === 1 ? "article" : "articles"}
        </span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition duration-200 group-hover:border-[var(--category-accent)] group-hover:bg-[var(--category-accent)] group-hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
