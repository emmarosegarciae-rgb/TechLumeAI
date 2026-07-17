import React from "react";
import Link from "next/link";
import { discoveryOpportunities, competitorAudits, emergingEntities, topicalClustersPlan } from "@/lib/data/discovery";
import { createMetadata } from "@/lib/seo/metadata";
import { Radar, Sparkles, Compass, ShieldCheck, CheckCircle2, TrendingUp, AlertTriangle, Layers, BookOpen, ExternalLink, ArrowRight, Activity, Cpu } from "lucide-react";

export const metadata = createMetadata({
  title: "Enterprise Content Discovery & Competitive Intelligence Engine",
  description: "Autonomous trend intelligence, opportunity scorecard matrix, and competitor gap analysis hub for TechlumeAI.",
  path: "/admin/content-discovery",
  noIndex: true
});

export default function ContentDiscoveryPage() {
  const avgDiscoveryScore = Math.round(
    discoveryOpportunities.reduce((acc, o) => acc + o.discoveryScorecard, 0) / discoveryOpportunities.length
  );

  const discoveryPipeline = [
    { step: "01", name: "Signal Detection", status: "Real-time Monitoring", desc: "Ingesting arXiv preprints, TensorRT/vLLM releases, GitHub trends, and Gartner reports." },
    { step: "02", name: "Trend Validation", status: "Automated Check", desc: "Filtering noise; verifying long-term enterprise demand and technical sustainability." },
    { step: "03", name: "Market Research", status: "IT Demand & TCO Math", desc: "Evaluating infrastructure budgets, FinOps pain points, and CISO compliance barriers." },
    { step: "04", name: "Search Intelligence", status: "Semantic & Question Volume", desc: "Analyzing high-intent enterprise keywords, question variants, and long-tail gaps." },
    { step: "05", name: "Competitor Analysis", status: "15+ Publisher Radar", desc: "Auditing MIT Tech Review, Vercel, InfoQ, and others for technical inaccuracies and omissions." },
    { step: "06", name: "Gap Identification", status: "Depth Superiority Target", desc: "Pinpointing missing runbooks, code blocks, schema matrices, and architectural trade-offs." },
    { step: "07", name: "Entity Mapping", status: "Knowledge Graph Integration", desc: "Connecting new entities (e.g., PagedAttention v2, MCP Sandboxing) to cornerstone parents." },
    { step: "08", name: "Topic Scoring", status: "Weighted Formula Active", desc: "10-Dimension Opportunity Matrix formula with double weighting on Enterprise & Authority." },
    { step: "09", name: "Editorial Approval", status: "Threshold >= 95/100", desc: "Ensuring zero resources are assigned to low-priority news or shallow wrapper summaries." },
    { step: "10", name: "Production Pipeline", status: "Reasoning & AEO Ready", desc: "Drafting with cognitive pathways (`cognitive-pathway`), decision trees, and multi-turn FAQs." },
    { step: "11", name: "Post-Launch Expansion", status: "Continuous Spoke Spawning", desc: "Spawning 2-4 child benchmarks to reinforce topical cluster dominance." }
  ];

  return (
    <>
      <header className="border-b border-border/60 bg-muted/20 py-12 dark:bg-muted/10">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <Radar className="h-3.5 w-3.5" />
                Phase 8: Autonomous Discovery Engine &bull; Internal Intelligence Hub
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Enterprise Content Discovery & Competitive Intelligence
              </h1>
              <p className="mt-2 text-base text-muted-foreground">
                Anticipating enterprise AI shifts before demand peaks: 10-Dimension weighted matrix, competitor gap radar, and emerging entity tracking.
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
                href="/admin/editorial-intelligence"
                className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                View EOS Dashboard
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
                href="/topics"
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Explore Topic Clusters
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Discovery Scorecard Avg</span>
              <div className="mt-1 flex items-baseline gap-2">
                <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">{avgDiscoveryScore}/100</p>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Target &ge;95</span>
              </div>
            </div>
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Audited Competitors</span>
              <p className="mt-1 text-3xl font-extrabold text-purple-600 dark:text-purple-400">{competitorAudits.length}</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Emerging Entities Tracked</span>
              <p className="mt-1 text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{emergingEntities.length}</p>
            </div>
            <div className="rounded-xl border border-border/80 bg-card p-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Active Topical Clusters</span>
              <p className="mt-1 text-3xl font-extrabold text-blue-600 dark:text-blue-400">{topicalClustersPlan.length}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container-page py-12 space-y-16">
        {/* Section 1: The 11-Step Discovery Pipeline */}
        <section>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              The 11-Step Content Discovery Pipeline
            </h2>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Strict filtration ensuring every opportunity creates permanent institutional knowledge and high AI search authority.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {discoveryPipeline.map((item) => (
              <div key={item.step} className="rounded-xl border border-border/80 bg-card p-5 shadow-2xs transition-all hover:border-indigo-500/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Step {item.step}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-2 font-bold text-foreground text-base">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Content Opportunity Matrix & Scorecard */}
        <section>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider">
                <Compass className="h-4 w-4" />
                <span>Weighted Opportunity Register</span>
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                10-Dimension Opportunity Matrix (Scorecard &ge;95/100)
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Formula: (Enterprise Demand &times;2 + Topical Authority &times;2 + Evergreen &times;2 + Future Growth &times;2 + Search &times;1 + AI Visibility &times;1 + Technical &times;1 + Competition &times;1 + Commercial &times;1 + Knowledge Graph &times;1) / 130 &times; 100.
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
              All 10 Opportunities Passed Audit
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border/80 bg-muted/40 font-bold text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="p-4">Opportunity Title & Category</th>
                    <th className="p-4">Signal Source & Cluster</th>
                    <th className="p-4 text-center">Weighted (130)</th>
                    <th className="p-4 text-center">Discovery Score</th>
                    <th className="p-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {discoveryOpportunities.map((opp) => (
                    <tr key={opp.id} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4">
                        <span className="inline-block rounded bg-indigo-100 px-2 py-0.5 text-[10px] font-black uppercase text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 mb-1">
                          {opp.category.split(":")[0]}
                        </span>
                        <div className="font-bold text-foreground">{opp.title}</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {opp.primaryKeywords.slice(0, 3).map((kw) => (
                            <span key={kw} className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                              #{kw}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-xs">
                        <div className="font-semibold text-foreground">{opp.targetCluster}</div>
                        <div className="text-muted-foreground mt-0.5">Signal: {opp.signalSource}</div>
                      </td>
                      <td className="p-4 text-center font-extrabold text-base text-foreground">
                        {opp.weightedPriorityScore} / 130
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-black text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {opp.discoveryScorecard}%
                        </span>
                      </td>
                      <td className="p-4 text-right font-bold text-xs text-indigo-600 dark:text-indigo-400">
                        {opp.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Competitor Intelligence & Gap Analysis Radar */}
        <section>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Competitor Intelligence & Gap Analysis Radar
            </h2>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Systematic audits across 15+ major technology and research publications to identify architectural blind spots and out-execute them in depth.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competitorAudits.map((audit) => (
              <div key={audit.publicationName} className="flex flex-col justify-between rounded-xl border border-border/80 bg-card p-5 shadow-2xs transition-all hover:border-purple-500/50">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foreground text-base">{audit.publicationName}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-black uppercase ${
                      audit.contentDepthRating === "Enterprise-Grade" || audit.contentDepthRating === "Deep"
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                    }`}>
                      {audit.contentDepthRating} Depth
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground font-mono">{audit.domain} &bull; {audit.publishingVelocity}</p>
                  
                  <div className="mt-4 space-y-2">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 block">Identified Weaknesses</span>
                      <ul className="mt-1 list-disc list-inside text-xs text-muted-foreground space-y-0.5">
                        {audit.identifiedWeaknesses.slice(0, 2).map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 block">Content & Technical Gaps</span>
                      <ul className="mt-1 list-disc list-inside text-xs text-muted-foreground space-y-0.5">
                        {audit.contentGaps.slice(0, 2).map((g, i) => (
                          <li key={i}>{g}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/60 bg-indigo-50/50 -mx-5 -mb-5 p-4 rounded-b-xl dark:bg-indigo-950/20">
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block">TechlumeAI Out-Execution Strategy</span>
                  <p className="mt-1 text-xs text-foreground font-semibold leading-relaxed">
                    {audit.techlumeAdvantageStrategy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Emerging Entity Radar & Multi-Article Clusters */}
        <section className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider">
              <Cpu className="h-4 w-4" />
              <span>Emerging Entity Radar</span>
            </div>
            <h3 className="mt-1 text-xl font-extrabold text-foreground">
              Pre-Peak Authority Tracking
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              By deploying dedicated entity pages and code benchmarks before general market adoption, TechlumeAI secures first-mover semantic citations across all LLMs.
            </p>
            <div className="mt-6 space-y-4">
              {emergingEntities.map((ent) => (
                <div key={ent.id} className="border-b border-border/50 pb-3 last:border-none">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-foreground font-mono">{ent.canonicalName}</span>
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-black text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {ent.growthVelocity}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{ent.description}</p>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Type: <strong className="text-foreground">{ent.type}</strong></span>
                    <span>Queued: <strong className="text-indigo-600 dark:text-indigo-400">{ent.plannedArticlesCount} Articles</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider">
                  <Layers className="h-4 w-4" />
                  <span>Topical Cluster Expansion Engine</span>
                </div>
                <h3 className="mt-1 text-xl font-extrabold text-foreground">
                  Cornerstone & Spoke Topology Mapping
                </h3>
              </div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-extrabold text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
                100% Interlinked
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {topicalClustersPlan.map((cluster) => (
                <div key={cluster.clusterId} className="rounded-xl border border-border/80 bg-muted/20 p-5 dark:bg-muted/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
                    <div>
                      <span className="text-xs font-bold text-muted-foreground uppercase">{cluster.pillar}</span>
                      <h4 className="font-extrabold text-foreground text-base">{cluster.clusterName}</h4>
                    </div>
                    <Link
                      href={`/articles/${cluster.cornerstoneGuide}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                    >
                      <span>Cornerstone Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="mt-3 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-muted-foreground block">
                      Assigned Spoke Architecture (&bull; Spoke to Cornerstone linking enforced)
                    </span>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {cluster.spokeArticles.map((spoke) => (
                        <div key={spoke.slug} className="rounded-lg border border-border/60 bg-card p-3 shadow-2xs flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <span className="block font-semibold text-xs text-foreground truncate">{spoke.title}</span>
                            <span className="block text-[10px] text-muted-foreground">Focus: #{spoke.keywordFocus}</span>
                          </div>
                          <span className={`shrink-0 rounded px-2 py-0.5 text-[10px] font-extrabold ${
                            spoke.stage === "In Production"
                              ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {spoke.stage}
                          </span>
                        </div>
                      ))}
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
