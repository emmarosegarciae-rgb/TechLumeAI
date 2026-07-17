import Link from "next/link";
import { ArrowUpRight, Star, Shield, Cpu, Terminal, Layers } from "lucide-react";

const tools = [
  {
    name: "LumeInference",
    category: "LLM Infrastructure & Routing",
    description: "High-throughput model gateway with latency-aware routing and automatic fallback for multi-provider production workloads.",
    badge: "Most Used",
    rating: "4.9",
    reviews: "1.4k engineers",
    icon: Cpu,
    tags: ["Inference", "Gateway", "Edge"],
    color: "#2563EB"
  },
  {
    name: "ZeroTrust Agent Guard",
    category: "AI Security & Compliance",
    description: "Runtime identity enforcement and policy firewalls for autonomous AI agents reading repositories and internal cloud VPCs.",
    badge: "Enterprise",
    rating: "4.9",
    reviews: "820 CISOs",
    icon: Shield,
    tags: ["Security", "SIEM", "SOC2"],
    color: "#10B981"
  },
  {
    name: "FinOps Cloud Analyzer",
    category: "Cloud Economics & Billing",
    description: "Granular cost attribution and GPU cluster optimization for teams fine-tuning and running custom foundation weights.",
    badge: "FinOps",
    rating: "4.8",
    reviews: "950 architects",
    icon: Layers,
    tags: ["GPU Cost", "AWS/GCP", "Billing"],
    color: "#F59E0B"
  },
  {
    name: "Codex Review Assistant",
    category: "Developer Productivity Stack",
    description: "Deep codebase inspection agent checking architectural patterns, security regressions, and performance pitfalls in CI/CD.",
    badge: "Developer Tool",
    rating: "5.0",
    reviews: "2.1k devs",
    icon: Terminal,
    tags: ["CI/CD", "Code Review", "DevOps"],
    color: "#8B5CF6"
  }
];

export function ToolDirectory() {
  return (
    <section className="container-page py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-800/80 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="badge-live-dot" aria-hidden="true" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-sky-400">
              Curated Infrastructure Stack
            </p>
          </div>
          <h2 className="font-display text-3xl font-black leading-tight tracking-normal text-slate-950 dark:text-white sm:text-4xl">
            AI Tool & Infrastructure Directory
          </h2>
          <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            Essential frameworks, gateways, and security suites vetted by our technical editorial bench for production deployments.
          </p>
        </div>
        <Link
          href="/search?q=tools"
          className="group focus-ring inline-flex h-10 shrink-0 items-center gap-2 rounded-[var(--radius)] border border-slate-200 bg-white px-4 text-xs font-bold text-slate-800 shadow-sm transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
        >
          <span>Explore full stack benchmarks</span>
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <div
              key={tool.name}
              style={{
                "--tool-accent": tool.color
              } as React.CSSProperties}
              className="group relative flex flex-col justify-between rounded-[var(--radius)] border border-slate-200/90 bg-white p-5 shadow-luxe transition duration-300 hover:-translate-y-1.5 hover:border-[var(--tool-accent)] hover:shadow-xl dark:border-slate-800/90 dark:bg-slate-950 dark:hover:border-[var(--tool-accent)]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-800 transition duration-300 group-hover:bg-[var(--tool-accent)] group-hover:text-white dark:bg-slate-900 dark:text-slate-200">
                      <IconComponent className="size-5" aria-hidden="true" />
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    {tool.badge}
                  </span>
                </div>

                <Link href={`/search?q=${encodeURIComponent(tool.name)}`} className="focus-ring block rounded-md">
                  <h3 className="font-display text-lg font-bold tracking-tight text-slate-900 transition group-hover:text-[var(--tool-accent)] dark:text-white">
                    {tool.name}
                  </h3>
                </Link>
                <p className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {tool.category}
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  {tool.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-900/80 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5 dark:border-slate-800/80">
                <div className="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  <span>{tool.rating}</span>
                  <span className="font-normal text-slate-400">({tool.reviews})</span>
                </div>
                <Link
                  href={`/search?q=${encodeURIComponent(tool.name)}`}
                  aria-label={`Explore ${tool.name}`}
                  className="focus-ring grid size-8 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition duration-200 group-hover:border-[var(--tool-accent)] group-hover:bg-[var(--tool-accent)] group-hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
