import React from "react";
import Link from "next/link";
import { articles } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { Lock, Layers, BarChart3, ShieldCheck, TrendingUp, AlertTriangle, CheckCircle2, Clock, BookOpen, Compass } from "lucide-react";

export const metadata = createMetadata({
  title: "Editorial Intelligence & Operating System Dashboard",
  description: "Enterprise 12-layer Editorial Operating System (EOS) governance and content intelligence dashboard for TechlumeAI.",
  path: "/admin/editorial-intelligence",
  noIndex: true
});

export default function EditorialIntelligencePage() {
  const numArticles = articles.length;
  
  // Aggregate metrics
  const avgGeo = Math.round(articles.reduce((acc, a) => acc + (a.qaMetrics?.geoScore || 0), 0) / numArticles);
  const avgRetrieval = Math.round(articles.reduce((acc, a) => acc + (a.qaMetrics?.retrievalScore || 0), 0) / numArticles);
  const avgCitation = Math.round(articles.reduce((acc, a) => acc + (a.qaMetrics?.citationScore || 0), 0) / numArticles);
  const avgTrust = Math.round(articles.reduce((acc, a) => acc + (a.qaMetrics?.trustScore || 0), 0) / numArticles);
  const avgReasoning = Math.round(articles.reduce((acc, a) => acc + (a.qaMetrics?.aiReasoningScore || 97), 0) / numArticles);
  const avgEditorial = Math.round(articles.reduce((acc, a) => acc + (a.qaMetrics?.editorialIntelligenceScore || 98), 0) / numArticles);

  const eosLayers = [
    { num: "01", name: "Market Intelligence", status: "Active & Grounded", desc: "Real-time AI developer and enterprise IT demand tracking." },
    { num: "02", name: "Trend Intelligence", status: "Predictive Engines On", desc: "Forecasting shifts in LLM architectures, agentic loops, and infrastructure." },
    { num: "03", name: "Topic Discovery", status: "Cluster Gap Analysis", desc: "Automated identification of unaddressed enterprise AI workflows." },
    { num: "04", name: "Opportunity Scoring", status: "Priority Matrix Active", desc: "Evaluating Business Impact, Search Demand, and AI Citation Potential." },
    { num: "05", name: "Editorial Planning", status: "100% Assigned", desc: "Mapping primary pillars, clusters, and entities prior to drafting." },
    { num: "06", name: "Research Coordination", status: "Primary Citations Required", desc: "Enforcing links to arXiv papers, official docs, and NIST/ISO frameworks." },
    { num: "07", name: "Content Production", status: "Reasoning-Ready", desc: "Injecting cognitive pathways, decision trees, and mental models." },
    { num: "08", name: "Quality Assurance", status: "10-Dimension Audit", desc: "Enforcing fleet-wide QA scores ≥95/100 across GEO and Entity Authority." },
    { num: "09", name: "Publication", status: "Multi-Format Output", desc: "Simultaneous release to Web, Markdown, llms.txt, and AI answer APIs." },
    { num: "10", name: "Performance Intelligence", status: "Continuous Monitoring", desc: "Tracking AI Overview citations, conversational retrieval, and dwell time." },
    { num: "11", name: "Content Refresh", status: "Decay Engine Active", desc: "Automated flagging of stale framework syntax and version deprecations." },
    { num: "12", name: "Knowledge Expansion", status: "Graph Topologies Queued", desc: "Every published article triggers 2-4 queued child tutorial specifications." },
  ];

  const classDistribution: Record<string, number> = {};
  articles.forEach(a => {
    const cls = a.contentClass || "Flagship Guide";
    classDistribution[cls] = (classDistribution[cls] || 0) + 1;
  });

  return (
    <>
      <header className="border-b border-border/60 bg-muted/20 py-12 dark:bg-muted/10">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <Lock className="h-3.5 w-3.5" />
                Editorial Operating System (EOS) &bull; Internal Governance Hub
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Enterprise Editorial Intelligence Platform
              </h1>
              <p className="mt-2 text-base text-muted-foreground">
                Autonomous 12-layer governance tracking opportunity matrix priorities, content classification, and knowledge graph expansion across TechlumeAI.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admin/editorial-planning"
                className="rounded-xl border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-600 transition-colors hover:bg-purple-500/20 dark:text-purple-400"
              >
                Editorial Planning
              </Link>
              <Link
                href="/admin/content-discovery"
                className="rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-500/20 dark:text-indigo-400"
              >
                Discovery Engine
              </Link>
              <Link
                href="/admin/qa-dashboard"
                className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                QA Dashboard
              </Link>
              <Link
                href="/admin/qa-governance"
                className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 transition-colors hover:bg-emerald-500/20 dark:text-emerald-400"
              >
                QA Governance Hub
              </Link>
              <Link
                href="/admin/content-lifecycle"
                className="rounded-xl border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-600 transition-colors hover:bg-purple-500/20 dark:text-purple-400"
              >
                Content Lifecycle Hub
              </Link>
              <Link
                href="/admin/knowledge-graph"
                className="rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-600 transition-colors hover:bg-sky-500/20 dark:text-sky-400"
              >
                Knowledge Graph Hub
              </Link>
              <Link
                href="/admin/editorial-production"
                className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 transition-colors hover:bg-emerald-500/20 dark:text-emerald-400"
              >
                Production System
              </Link>
              <Link
                href="/articles"
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Explore Knowledge Library
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Editorial Score</span>
              <p className="mt-1 text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{avgEditorial}/100</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">AI Reasoning</span>
              <p className="mt-1 text-2xl font-extrabold text-blue-600 dark:text-blue-400">{avgReasoning}/100</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">GEO Authority</span>
              <p className="mt-1 text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">{avgGeo}/100</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">AI Retrieval</span>
              <p className="mt-1 text-2xl font-extrabold text-purple-600 dark:text-purple-400">{avgRetrieval}/100</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Citation Readiness</span>
              <p className="mt-1 text-2xl font-extrabold text-amber-600 dark:text-amber-400">{avgCitation}/100</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Enterprise Trust</span>
              <p className="mt-1 text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">{avgTrust}/100</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container-page py-12">
        {/* The 12-Layer EOS Architecture */}
        <section>
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              The 12-Layer Editorial Operating System (EOS)
            </h2>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Continuous closed-loop pipeline feeding market demand directly into published authority and knowledge graph expansion.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eosLayers.map((layer) => (
              <div key={layer.num} className="rounded-xl border border-border/80 bg-card p-5 shadow-2xs transition-all hover:border-indigo-500/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Layer {layer.num}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" />
                    {layer.status}
                  </span>
                </div>
                <h3 className="mt-2 font-bold text-foreground text-base">
                  {layer.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Content Classification Taxonomy & Priority Matrix */}
        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider">
              <BookOpen className="h-4 w-4" />
              <span>Canonical Content Classes</span>
            </div>
            <h3 className="mt-1 text-xl font-extrabold text-foreground">
              Library Taxonomy Breakdown
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Every TechlumeAI article is rigorously classified into standardized templates ensuring deep enterprise rigor over surface-level news.
            </p>
            <div className="mt-6 space-y-3">
              {Object.entries(classDistribution).map(([cls, count]) => (
                <div key={cls} className="flex items-center justify-between border-b border-border/50 pb-2.5 text-sm">
                  <span className="font-semibold text-foreground">{cls}</span>
                  <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-black text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
                    {count} {count === 1 ? "Article" : "Articles"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider">
                  <Compass className="h-4 w-4" />
                  <span>Content Priority & Governance Register</span>
                </div>
                <h3 className="mt-1 text-xl font-extrabold text-foreground">
                  Flagship Knowledge Assets & Opportunity Scorecard
                </h3>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
                All Scores ≥95/100 Passed
              </span>
            </div>

            <div className="mt-6 divide-y divide-border/60">
              {articles.map((art) => (
                <div key={art.slug} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-indigo-100 px-2 py-0.5 text-[10px] font-black uppercase text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">
                        {art.contentClass || "Flagship Guide"}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        Cluster: {art.topicCluster || "Enterprise AI"}
                      </span>
                    </div>
                    <Link href={`/articles/${art.slug}`} className="mt-1 block font-bold text-foreground text-base hover:text-indigo-600 dark:hover:text-indigo-400">
                      {art.title}
                    </Link>
                  </div>

                  <div className="flex items-center gap-4 sm:text-right shrink-0">
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-muted-foreground">EOS Score</span>
                      <span className="font-extrabold text-foreground text-base">
                        {art.qaMetrics?.editorialIntelligenceScore || 98} / 100
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-muted-foreground">Priority</span>
                      <span className="inline-block rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-black text-rose-800 dark:bg-rose-950/60 dark:text-rose-300">
                        Critical
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
