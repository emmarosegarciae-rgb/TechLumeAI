"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NewsletterInlineProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function NewsletterInline({
  title = "The High-Signal Engineering & AI Briefing",
  description = "Join 85,000+ senior engineering leaders, founders, and technical architects receiving curated breakdowns on model architectures, cloud FinOps, and agentic workflows every morning.",
  className
}: NewsletterInlineProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "subscribed">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("subscribed");
      setEmail("");
    }, 600);
  }

  return (
    <section className={cn("container-wide py-12", className)}>
      <div className="relative overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 text-white shadow-luxe dark:border-slate-800 sm:p-8 lg:p-12">
        <div className="absolute -right-24 -top-24 size-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 size-96 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="mb-3.5 flex items-center gap-2 text-sky-400">
              <span className="badge-live-dot" aria-hidden="true" />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                Verified Technical Editorial
              </p>
            </div>
            <h2 className="font-display text-3xl font-black leading-tight tracking-normal text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3.5 text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="size-4 text-blue-400" aria-hidden="true" />
                No PR puff pieces. 100% signal.
              </span>
              <span>•</span>
              <span>Unsubscribe anytime in 1 click</span>
            </div>
            <div className="mt-8 hidden overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 p-2 shadow-inner lg:block">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-950">
                <Image
                  src="/images/illustrations/newsletter-briefing.svg"
                  alt="High-Signal Technical Briefing Delivery Architecture"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[var(--radius)] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8">
            {status === "subscribed" ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <div className="grid size-12 place-items-center rounded-full bg-green-500/20 text-green-400 ring-1 ring-green-500/40">
                  <CheckCircle2 className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  You are verified & subscribed
                </h3>
                <p className="mt-1.5 text-xs text-slate-300">
                  We sent your first executive briefing and reading list to your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 rounded text-xs font-bold text-sky-400 underline hover:text-white"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Executive Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="leader@company.com"
                    className="focus-ring h-12 w-full rounded-[var(--radius)] border border-white/20 bg-slate-950/80 pl-10 pr-4 text-sm text-white placeholder-slate-500 shadow-inner transition focus:border-sky-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="focus-ring mt-1 flex h-12 items-center justify-center gap-2 rounded-[var(--radius)] bg-blue-600 px-6 text-sm font-bold text-white shadow-glow transition hover:bg-blue-500 active:translate-y-0.5 disabled:opacity-50 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                >
                  <span>{status === "loading" ? "Verifying..." : "Receive Executive Briefings"}</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
                <p className="mt-1 text-center text-[11px] text-slate-400">
                  Serving senior technical leaders at over 4,200 organizations worldwide.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
