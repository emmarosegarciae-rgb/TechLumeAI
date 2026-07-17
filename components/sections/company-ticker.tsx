import Link from "next/link";
import { Building2, ArrowUpRight } from "lucide-react";

const trackedCompanies = [
  {
    name: "OpenAI",
    tagline: "Frontier Reasoning & Agent Ecosystem",
    signal: "GPT-5 / o3 Models",
    count: "18 briefs",
    color: "#10A37F"
  },
  {
    name: "Google",
    tagline: "DeepMind, Gemini & Custom TPU Systems",
    signal: "Gemini 3.1 Pro",
    count: "24 briefs",
    color: "#4285F4"
  },
  {
    name: "Anthropic",
    tagline: "Constitutional AI & Enterprise Safety",
    signal: "Claude 3.7 Sonnet",
    count: "16 briefs",
    color: "#D97706"
  },
  {
    name: "NVIDIA",
    tagline: "Blackwell Architecture & CUDA Dominance",
    signal: "Inference Systems",
    count: "22 briefs",
    color: "#76B900"
  },
  {
    name: "Apple",
    tagline: "On-Device Intelligence & Silicon Infrastructure",
    signal: "Apple Intelligence",
    count: "14 briefs",
    color: "#64748B"
  },
  {
    name: "Microsoft",
    tagline: "Azure AI Platform & Copilot Orchestration",
    signal: "Enterprise Cloud",
    count: "19 briefs",
    color: "#00A4EF"
  },
  {
    name: "Vercel",
    tagline: "Frontend Cloud & AI-Native Web Tooling",
    signal: "AI SDK & Next.js",
    count: "11 briefs",
    color: "#000000"
  },
  {
    name: "Stripe",
    tagline: "Usage-Based AI Billing & Agent Payments",
    signal: "Monetization Infra",
    count: "9 briefs",
    color: "#635BFF"
  }
];

export function CompanyTicker() {
  return (
    <section className="container-page py-12">
      <div className="relative overflow-hidden rounded-[var(--radius)] border border-slate-200/90 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 text-white shadow-luxe dark:border-slate-800 lg:p-10">
        <div className="absolute right-0 top-0 -mr-20 -mt-20 size-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 -mb-20 size-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_1.9fr] lg:items-center">
          <div>
            <div className="mb-3.5 flex items-center gap-2 text-sky-400">
              <Building2 className="size-5" aria-hidden="true" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                Market Intelligence Tracker
              </span>
            </div>
            <h2 className="font-display text-3xl font-black leading-tight tracking-normal text-white sm:text-4xl">
              Coverage for the platforms, labs, and startups shaping the AI economy.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              TechlumeAI tracks model architecture, API pricing, security posture, developer ecosystems, and enterprise buying signals across the companies technical leaders watch every week.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-green-400">
                <span className="badge-live-dot" aria-hidden="true" />
                Live Index Active
              </span>
              <span>•</span>
              <span>Updated Daily</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {trackedCompanies.map((company) => (
              <Link
                key={company.name}
                href={`/search?q=${encodeURIComponent(company.name)}`}
                style={{
                  "--company-accent": company.color
                } as React.CSSProperties}
                className="group relative flex flex-col justify-between rounded-[var(--radius)] border border-white/10 bg-white/[0.04] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--company-accent)] hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-bold tracking-tight text-white group-hover:text-[var(--company-accent)] transition">
                        {company.name}
                      </h3>
                      <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-slate-300">
                        {company.signal}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      {company.tagline}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" aria-hidden="true" />
                </div>
                <div className="mt-3.5 flex items-center justify-between border-t border-white/10 pt-2.5 text-[11px] font-semibold text-slate-400">
                  <span>Editorial Deep Dives</span>
                  <span className="text-sky-400 font-mono">{company.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
