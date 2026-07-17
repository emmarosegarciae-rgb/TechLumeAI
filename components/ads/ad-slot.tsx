import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AdSlotProps = {
  label?: string;
  size?: "banner" | "rectangle" | "leaderboard";
  className?: string;
};

export function AdSlot({ label = "Partner Briefing", size = "banner", className }: AdSlotProps) {
  if (size === "leaderboard") {
    return (
      <aside
        className={cn(
          "group relative overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 text-white shadow-luxe transition duration-300 hover:border-blue-500/50 dark:border-slate-800",
          className
        )}
        aria-label={label}
      >
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-35 pointer-events-none hidden lg:block">
          <Image
            src="/images/illustrations/cta-leaderboard.svg"
            alt="Enterprise AI Cloud Leaderboard Graphic"
            fill
            sizes="600px"
            className="object-cover object-right"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <div className="mb-2 flex items-center gap-2 text-sky-400">
              <Sparkles className="size-4" aria-hidden="true" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em]">{label}</span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-semibold text-slate-400">Enterprise AI Cloud</span>
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              Hardening Agentic Workflows with Zero-Trust Identity Protection
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-300">
              Discover how Fortune 500 engineering leaders deploy autonomous AI agents without compromising access controls.
            </p>
          </div>
          <Link
            href="/advertise"
            className="focus-ring inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-[var(--radius)] border border-white/20 bg-white/10 px-5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950"
          >
            <span>Read Partner Story</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </aside>
    );
  }

  if (size === "rectangle") {
    return (
      <aside
        className={cn(
          "group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-gradient-to-b from-slate-950 to-blue-950 p-6 text-white shadow-luxe transition duration-300 hover:border-blue-500/50 dark:border-slate-800 min-h-[320px]",
          className
        )}
        aria-label={label}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/illustrations/cta-rectangle.svg"
            alt="NVIDIA AI Enterprise Sponsor Showcase"
            fill
            sizes="350px"
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <div className="mb-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-md">
              <Sparkles className="size-3" aria-hidden="true" />
              {label}
            </span>
            <span className="text-[11px] font-semibold text-slate-400">Sponsor Showcase</span>
          </div>
          <h4 className="font-display text-xl font-bold leading-snug tracking-tight text-white">
            NVIDIA AI Enterprise & Cloud Infrastructure
          </h4>
          <p className="mt-3 text-xs leading-6 text-slate-300">
            Scale your model inference pipelines across hybrid cloud regions with predictable latency and enterprise SLAs.
          </p>
        </div>
        <div className="relative z-10 mt-6 border-t border-white/10 pt-4">
          <Link
            href="/advertise"
            className="focus-ring flex items-center justify-between rounded-md text-xs font-bold uppercase tracking-wider text-sky-300 hover:text-white transition"
          >
            <span>Explore Technical Guide</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "group relative flex items-center justify-between gap-4 overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-slate-900 p-4 text-white shadow-sm transition hover:border-blue-400 dark:border-slate-800",
        className
      )}
      aria-label={label}
    >
      <div className="flex items-center gap-3">
        <span className="rounded bg-blue-600/30 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-blue-300">
          {label}
        </span>
        <p className="text-xs font-semibold text-slate-200">
          Supercharge your developer tools with low-latency LLM inference APIs.
        </p>
      </div>
      <Link
        href="/advertise"
        className="text-xs font-bold text-sky-400 hover:underline inline-flex items-center gap-1 shrink-0"
      >
        <span>Learn more</span>
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </Link>
    </aside>
  );
}
