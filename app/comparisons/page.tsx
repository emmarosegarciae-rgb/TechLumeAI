import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Scale } from "lucide-react";
import { AdSlot } from "@/components/ads/ad-slot";
import { ArticleCard } from "@/components/article/article-card";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { StructuredData } from "@/components/structured-data";
import { articles } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "AI Technical Comparisons & Evaluation Matrices",
  description:
    "Head-to-head architectural evaluations, benchmarks, and decision frameworks comparing developer IDEs, foundation models, and AI infrastructure stacks.",
  path: "/comparisons"
});

export default function ComparisonsDirectoryPage() {
  const comparisonArticles = articles.filter(
    (a) =>
      a.primaryIntent === "Comparison" ||
      a.primaryIntent === "Decision Framework" ||
      a.title.toLowerCase().includes("vs") ||
      a.tags.some((t) => t.toLowerCase().includes("evaluation") || t.toLowerCase().includes("comparison"))
  );

  const evaluationMatrices = [
    {
      title: "Cursor vs. Windsurf vs. Claude Code",
      category: "AI Tools & IDEs",
      summary: "Comparative index breakdown, context rules (`.cursorrules`), memory footprints, and SOC2 enterprise data boundaries.",
      slug: "developer-tools-2026"
    },
    {
      title: "Vector RAG vs. QLoRA Fine-Tuning",
      category: "AI Engineering",
      summary: "Decision matrix evaluating real-time grounding accuracy vs. deterministic JSON schema alignment and token hosting costs.",
      slug: "open-models-infrastructure-shift"
    },
    {
      title: "LangGraph vs. CrewAI Multi-Agent Topology",
      category: "Multi-Agent Systems",
      summary: "State graph durability, human-in-the-loop checkpoint persistence, and infinite loop circuit breakers.",
      slug: "enterprise-ai-agents-production"
    },
    {
      title: "Cloud API Models vs. Local INT4 Quantized Weights",
      category: "AI Hardware & FinOps",
      summary: "Cost-per-million tokens, latency percentiles, memory bandwidth requirements, and data privacy SLAs.",
      slug: "cloud-cost-architecture-guide"
    }
  ];

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([{ name: "Comparisons", href: "/comparisons" }]),
          collectionPageSchema(
            "AI Technical Comparisons & Evaluation Matrices",
            "Head-to-head architectural evaluations, benchmarks, and decision frameworks comparing developer IDEs, foundation models, and AI infrastructure stacks.",
            "/comparisons",
            comparisonArticles.map((a) => ({ name: a.title, url: `/articles/${a.slug}` }))
          )
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs items={[{ label: "Comparisons Hub", href: "/comparisons" }]} />
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-400">
            <Scale className="size-4" />
            <span>Head-to-Head Technical Evaluations</span>
          </div>
          <h1 className="mt-2 font-display text-4xl font-black leading-tight tracking-normal text-slate-900 dark:text-white sm:text-5xl">
            AI Architecture Comparison Hub
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            We evaluate AI engineering tools, foundation models, and retrieval systems using strict side-by-side matrices, reproducible benchmarks, and production edge cases.
          </p>
        </div>
      </section>

      <section className="container-page py-10">
        <AdSlot size="leaderboard" />
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-14">
            {/* Featured Head-to-Head Matrices Grid */}
            <section className="grid gap-6">
              <div>
                <h2 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  Featured Evaluation & Decision Matrices
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Core architectural trade-offs facing enterprise engineering teams in 2026:
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {evaluationMatrices.map((matrix, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-luxe transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-500/50"
                  >
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                          {matrix.category}
                        </span>
                        <Link
                          href={`/articles/${matrix.slug}`}
                          className="flex size-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/60 dark:text-sky-300 dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-950"
                        >
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                      <h3 className="font-display text-xl font-bold leading-snug text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                        <Link href={`/articles/${matrix.slug}`}>{matrix.title}</Link>
                      </h3>
                      <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {matrix.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-blue-600 dark:border-slate-800 dark:text-cyan-400">
                      <CheckCircle2 className="size-4 text-blue-500" />
                      <span>View Full Side-by-Side Analysis</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* All Comparison Articles Stream */}
            <section className="grid gap-6">
              <div>
                <h2 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  Published Comparison Articles
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Complete technical coverage and side-by-side product teardowns:
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {comparisonArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          </div>

          <aside className="grid content-start gap-8">
            <NewsletterInline />
            <AdSlot size="rectangle" />
          </aside>
        </div>
      </section>
    </>
  );
}
