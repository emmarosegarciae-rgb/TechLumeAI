import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  action?: string;
  live?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  action = "View all",
  live = false,
  className
}: SectionHeadingProps) {
  const isLive = live || eyebrow?.toLowerCase().includes("live");

  return (
    <div className={cn("mb-8 flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-800/80 sm:flex-row sm:items-end", className)}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <div className="mb-2 flex items-center gap-2">
            {isLive ? <span className="badge-live-dot" aria-hidden="true" /> : null}
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-sky-400">
              {eyebrow}
            </p>
          </div>
        ) : null}
        <h2 className="font-display text-3xl font-black leading-tight tracking-normal text-slate-950 dark:text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {href ? (
        <Link
          href={href}
          className="group focus-ring inline-flex h-10 shrink-0 items-center gap-2 rounded-[var(--radius)] border border-slate-200 bg-white px-4 text-xs font-bold text-slate-800 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
        >
          <span>{action}</span>
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
