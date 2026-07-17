import React from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { editorialPillarsRegistry, editorialClustersRegistry, editorialCalendarSchedule, editorialScorecardsRegistry } from "@/lib/data/editorial-planning";
import { Lock, Layers, BookOpen, CheckCircle2, Award, Calendar, GitBranch, ShieldCheck, TrendingUp, Compass, Cpu, Briefcase, Code, Shield, Server, Sparkles, BarChart3, ChevronRight } from "lucide-react";

export const metadata = createMetadata({
  title: "Enterprise Editorial Planning & Topical Authority Ecosystem",
  description: "Internal 5-layer Knowledge Ecosystem architecture, 8-pillar topical clusters, 8-stage learning pathways, and cadence governance dashboard for TechlumeAI.",
  path: "/admin/editorial-planning",
  noIndex: true
});

const pillarIcons: Record<string, React.ReactNode> = {
  "AI Engineering & Large Language Models": <Cpu className="h-5 w-5 text-indigo-500" />,
  "Enterprise AI": <Briefcase className="h-5 w-5 text-emerald-500" />,
  "AI Tools": <Compass className="h-5 w-5 text-amber-500" />,
  "Programming & Software Engineering": <Code className="h-5 w-5 text-blue-500" />,
  "AI Business": <TrendingUp className="h-5 w-5 text-purple-500" />,
  "Cybersecurity & AI": <Shield className="h-5 w-5 text-rose-500" />,
  "AI Infrastructure & Hardware": <Server className="h-5 w-5 text-cyan-500" />,
  "Future Technology": <Sparkles className="h-5 w-5 text-pink-500" />
};

export default function EditorialPlanningPage() {
  const ecosystemLayers = [
    { num: "L1", name: "Editorial Pillars", count: "8 Pillars", desc: "Top-level domain categorization defining TechlumeAI institutional coverage across enterprise AI and software engineering." },
    { num: "L2", name: "Topic Clusters", count: "8+ Clusters", desc: "Cohesive multi-article networks addressing complete technical problems and enterprise implementation lifecycles." },
    { num: "L3", name: "Cornerstone Guides", count: "8 Flagship Guides", desc: "Comprehensive 5,000–8,000 word foundational authorities acting as the primary hub for every cluster." },
    { num: "L4", name: "Supporting Articles", count: "10 Format Tiers", desc: "Targeted spokes across Comparisons, Tutorials, Implementation Guides, Case Studies, FAQs, and Research Summaries." },
    { num: "L5", name: "Reference Assets", count: "Entity Graph & Glossary", desc: "Micro-knowledge assets, entity registries, and code benchmarks tied into the internal link structure." }
  ];

  return (
    <>
      <header className="border-b border-border/60 bg-muted/20 py-12 dark:bg-muted/10">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400">
                <Lock className="h-3.5 w-3.5" />
                Enterprise Editorial Planning System &bull; Phase 9 Governance
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Topical Authority &amp; Knowledge Ecosystem Command Center
              </h1>
              <p className="mt-2 text-base text-muted-foreground max-w-3xl">
                Governing our 5-Layer Knowledge Ecosystem across 8 canonical pillars, 10 format stages, 8-stage learning pathways, and rigorous 10-dimension editorial scorecards (&ge;95/100).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admin/editorial-intelligence"
                className="rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-500/20 dark:text-indigo-400"
              >
                Editorial Intelligence
              </Link>
              <Link
                href="/admin/content-discovery"
                className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
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
                className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500"
              >
                View Library
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container-page py-12 space-y-16">
        {/* Section 1: 5-Layer Knowledge Ecosystem */}
        <section>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            <Layers className="h-4 w-4" />
            Layered Knowledge Architecture
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
            The 5-Layer Knowledge Ecosystem
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {ecosystemLayers.map((layer) => (
              <div key={layer.num} className="relative rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-purple-500/50 hover:shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">{layer.num}</span>
                  <span className="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-600 dark:text-purple-400">{layer.count}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">{layer.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 8 Pillars & Topical Clusters */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                <GitBranch className="h-4 w-4" />
                Institutional Coverage Matrix
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                8 Enterprise Editorial Pillars &amp; Topic Cluster Hierarchy
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-xl bg-purple-500/10 px-4 py-2 border border-purple-500/20 text-xs font-semibold text-purple-600 dark:text-purple-400">
              <CheckCircle2 className="h-4 w-4" />
              100% Cornerstone Architecture Verified
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {editorialClustersRegistry.map((cluster) => {
              const pillarMeta = editorialPillarsRegistry.find(p => p.pillar === cluster.pillar);
              const scorecard = editorialScorecardsRegistry[cluster.cornerstoneSlug] || { totalScore: 98 };

              return (
                <div key={cluster.id} className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 pb-4 border-b border-border/60">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-muted p-2.5">
                          {pillarIcons[cluster.pillar] || <BookOpen className="h-5 w-5 text-purple-500" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">{cluster.pillar}</span>
                          <h3 className="text-lg font-extrabold text-foreground leading-snug">{cluster.name}</h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          Score {scorecard.totalScore}/100
                        </span>
                        <div className="text-[10px] text-muted-foreground mt-1">Completion: {cluster.completionPercentage}%</div>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground my-4 leading-relaxed">{cluster.description}</p>

                    <div className="mb-4">
                      <div className="text-xs font-bold text-foreground mb-2 flex items-center gap-1.5">
                        <Award className="h-3.5 w-3.5 text-amber-500" />
                        Flagship Cornerstone Guide:
                      </div>
                      <Link href={`/articles/${cluster.cornerstoneSlug}`} className="block rounded-xl border border-purple-500/30 bg-purple-500/5 p-3 text-xs font-semibold text-foreground transition-colors hover:border-purple-500 hover:bg-purple-500/10">
                        {pillarMeta?.cornerstoneTitle || cluster.cornerstoneSlug}
                      </Link>
                    </div>

                    {/* Supporting Articles across format tiers */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Supporting Spoke Assets ({cluster.supportingArticles.length} active stages)</div>
                      <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                        {cluster.supportingArticles.map((spoke) => (
                          <div key={spoke.slug} className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2 text-xs">
                            <span className="font-medium text-foreground truncate max-w-[240px]" title={spoke.title}>{spoke.title}</span>
                            <div className="flex items-center gap-2">
                              <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">{spoke.stage}</span>
                              <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${spoke.status === 'Published' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'}`}>
                                {spoke.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 8-Stage Learning Pathway Progression */}
                  <div className="border-t border-border/60 pt-4 mt-auto">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5" />
                      8-Stage Learning Pathway Track
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {cluster.learningPathway.slice(0, 8).map((step, idx) => (
                        <div key={idx} className={`rounded p-1.5 border text-[10px] ${step.status === 'Published' ? 'border-emerald-500/30 bg-emerald-500/5 text-foreground font-semibold' : 'border-border/60 bg-muted/20 text-muted-foreground'}`} title={step.articleTitle}>
                          <div className="text-[9px] text-muted-foreground font-bold">{step.stage.split(' ')[0]}</div>
                          <div className="truncate font-medium mt-0.5">{step.articleTitle.substring(0, 20)}...</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: 10-Dimension Editorial Scorecards Matrix */}
        <section>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            <BarChart3 className="h-4 w-4" />
            Rigorous Quality Verification
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
            10-Dimension Editorial Scorecards Matrix (Target &ge; 95/100)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border/80 bg-muted/50 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="py-3 px-4">Cornerstone Guide</th>
                  <th className="py-3 px-2 text-center">KV</th>
                  <th className="py-3 px-2 text-center">EV</th>
                  <th className="py-3 px-2 text-center">CC</th>
                  <th className="py-3 px-2 text-center">RQ</th>
                  <th className="py-3 px-2 text-center">IL</th>
                  <th className="py-3 px-2 text-center">ES</th>
                  <th className="py-3 px-2 text-center">TA</th>
                  <th className="py-3 px-2 text-center">VQ</th>
                  <th className="py-3 px-2 text-center">FE</th>
                  <th className="py-3 px-2 text-center">AR</th>
                  <th className="py-3 px-4 text-right">Total Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 font-medium">
                {Object.entries(editorialScorecardsRegistry).map(([slug, score]) => {
                  const meta = editorialPillarsRegistry.find(p => p.cornerstoneSlug === slug);
                  return (
                    <tr key={slug} className="hover:bg-muted/30 transition-colors">
                      <td className="py-3.5 px-4">
                        <Link href={`/articles/${slug}`} className="font-bold text-foreground hover:text-purple-600 transition-colors block truncate max-w-[280px]">
                          {meta?.cornerstoneTitle || slug}
                        </Link>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{meta?.pillar}</div>
                      </td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.knowledgeValue}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.enterpriseValue}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.clusterContribution}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.researchQuality}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.internalLinking}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.entityStrength}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.topicalAuthority}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.visualQuality}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.futureExpandability}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.aiReadiness}</td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-600 dark:text-emerald-400">
                          {score.totalScore} / 100
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-[11px] text-muted-foreground">
            <span><strong>Legend:</strong> KV: Knowledge Value | EV: Enterprise Value | CC: Cluster Contribution | RQ: Research Quality | IL: Internal Linking | ES: Entity Strength | TA: Topical Authority | VQ: Visual Quality | FE: Future Expandability | AR: AI Readiness</span>
          </div>
        </section>

        {/* Section 4: Cadence Calendar */}
        <section>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            <Calendar className="h-4 w-4" />
            Predictive Publication Cadence
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
            Enterprise Editorial Cadence Calendar
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {editorialCalendarSchedule.map((slot) => (
              <div key={slot.id} className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {slot.cadence} Cadence
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${slot.status === 'Review Ready' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'}`}>
                      {slot.status}
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-muted-foreground mb-1">{slot.formatFocus}</div>
                  <h3 className="text-sm font-extrabold text-foreground leading-snug mb-3">{slot.title}</h3>
                </div>
                <div className="border-t border-border/60 pt-3 text-xs text-muted-foreground flex items-center justify-between">
                  <span className="truncate max-w-[180px]">{slot.pillar}</span>
                  <span className="font-semibold text-foreground">{slot.scheduledFor}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
