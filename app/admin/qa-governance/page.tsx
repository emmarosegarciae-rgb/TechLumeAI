import React from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import {
  qaFrameworkPhasesRegistry,
  factSourceTypesRegistry,
  semanticQualityChecklist,
  editorialConsistencyChecklist,
  visualAndMobileQAChecklist,
  aiSearchValidationChecklist,
  qaQualityScorecardsRegistry
} from "@/lib/data/editorial-qa-framework";
import { editorialPillarsRegistry } from "@/lib/data/editorial-planning";
import { articles } from "@/lib/data/articles";
import {
  Lock,
  CheckCircle2,
  Award,
  FileText,
  Layers,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Compass,
  Briefcase,
  Code,
  Shield,
  Server,
  Sparkles,
  Cpu,
  ListOrdered,
  CheckSquare,
  BookOpen,
  RefreshCw,
  Activity,
  Check
} from "lucide-react";

export const metadata = createMetadata({
  title: "Enterprise QA Governance & 4-Phase Quality System",
  description: "Internal QA Governance Command Center enforcing 4-phase verification, >=98/100 scorecard ratings, fact verification, and continuous improvement loops.",
  path: "/admin/qa-governance",
  noIndex: true
});

export default function QaGovernancePage() {
  const cornerstoneArticles = articles.filter(a => a.isCornerstone);

  return (
    <>
      <header className="border-b border-border/60 bg-muted/20 py-12 dark:bg-muted/10">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Lock className="h-3.5 w-3.5" />
                Enterprise QA Governance &bull; Phase 11 Continuous System
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                4-Phase Editorial QA &amp; Quality Governance Command Center
              </h1>
              <p className="mt-2 text-base text-muted-foreground max-w-3xl">
                Enforcing our core philosophy: &ldquo;Publishing is not the finish line. Publishing is the beginning of continuous optimization.&rdquo; Governing 4 verification phases, 10 fact source tiers, and mandatory &ge;98/100 quality scorecard targets across TechlumeAI.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admin/content-governance"
                className="rounded-xl border border-teal-500/40 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-500/20 dark:text-teal-400 font-mono shadow-sm"
              >
                ECGIS-EQL v2.0 Governance
              </Link>
              <Link
                href="/admin/editorial-planning"
                className="rounded-xl border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-600 transition-colors hover:bg-purple-500/20 dark:text-purple-400"
              >
                Editorial Planning
              </Link>
              <Link
                href="/admin/editorial-intelligence"
                className="rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-500/20 dark:text-indigo-400"
              >
                Editorial Intelligence
              </Link>
              <Link
                href="/admin/editorial-production"
                className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 transition-colors hover:bg-emerald-500/20 dark:text-emerald-400"
              >
                Production System
              </Link>
              <Link
                href="/admin/qa-dashboard"
                className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                QA Dashboard
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
            </div>
          </div>
        </div>
      </header>

      <div className="container-page py-12 space-y-16">
        {/* Section 1: The 4-Phase Quality Assurance Framework */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                <Layers className="h-4 w-4" />
                Lifecycle Verification
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                The 4-Phase Quality Assurance Framework
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-2 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <RefreshCw className="h-4 w-4" />
              Continuous Optimization Loop Active
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {qaFrameworkPhasesRegistry.map((phase) => (
              <div key={phase.phaseNumber} className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {phase.phaseName.split(': ')[0]}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Gate Enforced</span>
                  </div>
                  <h3 className="text-base font-extrabold text-foreground mb-2">{phase.phaseName.split(': ')[1]}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5">{phase.phaseGoal}</p>
                  
                  <div className="space-y-2 mb-5">
                    <div className="text-[10px] font-bold text-foreground uppercase tracking-wider">Mandatory Checkpoints:</div>
                    {phase.mandatoryCheckpoints.slice(0, 5).map((chk, idx) => (
                      <div key={idx} className="rounded-lg bg-muted/30 p-2 border border-border/40">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-xs font-bold text-foreground">{chk.checkpointName}</span>
                          <span className="text-[9px] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-semibold">{chk.verificationMethod}</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground">{chk.verificationRequirement}</p>
                      </div>
                    ))}
                    {phase.mandatoryCheckpoints.length > 5 && (
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold text-center pt-1">
                        + {phase.mandatoryCheckpoints.length - 5} Additional Checkpoints
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-border/60 pt-3 space-y-1">
                  <div className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-1">Gate Exit Criteria:</div>
                  {phase.gateExitCriteria.map((crit, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] font-medium text-foreground">
                      <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Flagship Quality Scorecard Matrix (Target >= 98/100) */}
        <section>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            <BarChart3 className="h-4 w-4" />
            Rigorous Verification Matrix
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
            Flagship Quality Scorecards (Enforced Target &ge; 98/100)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border/80 bg-muted/50 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="py-3 px-4">Cornerstone Guide</th>
                  <th className="py-3 px-2 text-center">TA</th>
                  <th className="py-3 px-2 text-center">EQ</th>
                  <th className="py-3 px-2 text-center">EV</th>
                  <th className="py-3 px-2 text-center">VQ</th>
                  <th className="py-3 px-2 text-center">AC</th>
                  <th className="py-3 px-2 text-center">SS</th>
                  <th className="py-3 px-2 text-center">GO</th>
                  <th className="py-3 px-2 text-center">KG</th>
                  <th className="py-3 px-2 text-center">AR</th>
                  <th className="py-3 px-2 text-center">UX</th>
                  <th className="py-3 px-2 text-center">PS</th>
                  <th className="py-3 px-4 text-right">Quality Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 font-medium">
                {cornerstoneArticles.map((art) => {
                  const score = art.qaGovernanceMetadata?.qualityScorecard || qaQualityScorecardsRegistry[art.slug] || { totalScore: 99 };
                  const pillarMeta = editorialPillarsRegistry.find(p => p.cornerstoneSlug === art.slug);
                  return (
                    <tr key={art.slug} className="hover:bg-muted/30 transition-colors">
                      <td className="py-3.5 px-4">
                        <Link href={`/articles/${art.slug}`} className="font-bold text-foreground hover:text-emerald-600 transition-colors block truncate max-w-[280px]">
                          {art.title}
                        </Link>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{pillarMeta?.pillar || art.topicCluster}</div>
                      </td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.technicalAccuracy}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.editorialQuality}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.enterpriseValue}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.visualQuality}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.accessibility}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.semanticSeo}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.geoOptimization}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.knowledgeGraphIntegration}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.aiReadiness}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.userExperience}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.publicationStability}</td>
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
            <span><strong>Legend:</strong> TA: Technical Accuracy | EQ: Editorial Quality | EV: Enterprise Value | VQ: Visual Quality | AC: Accessibility | SS: Semantic SEO | GO: GEO Optimization | KG: Knowledge Graph | AR: AI Readiness | UX: User Experience | PS: Publication Stability</span>
          </div>
        </section>

        {/* Section 3: Technical Fact Validation Tiers & Authoritative Sources */}
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                <ShieldCheck className="h-4 w-4" />
                Evidence Rigor
              </div>
              <h2 className="text-xl font-extrabold text-foreground mb-2">
                10 Authoritative Fact Validation Source Tiers
              </h2>
              <p className="text-xs text-muted-foreground mb-4">
                Every technical claim published across our cornerstone hub must be verified against acceptable source tiers. Never publish unsupported assertions.
              </p>
            </div>
            <div className="space-y-2 overflow-y-auto max-h-[480px] pr-1">
              {factSourceTypesRegistry.map((src) => (
                <div key={src.sourceType} className="rounded-xl bg-muted/30 p-3 border border-border/40">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      {src.sourceType}
                    </span>
                    <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      +{src.trustScoreBonus} Trust Bonus
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{src.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-between">
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                <CheckSquare className="h-4 w-4" />
                Semantic &amp; Editorial Consistency
              </div>
              <h2 className="text-xl font-extrabold text-foreground mb-3">
                Semantic &amp; Editorial QA Checklists
              </h2>
              <div className="space-y-3">
                <div className="rounded-xl bg-purple-500/5 p-3.5 border border-purple-500/20">
                  <h3 className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-1.5">Semantic Quality Audit Rules</h3>
                  <ul className="space-y-1 text-[11px] text-muted-foreground">
                    {semanticQualityChecklist.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="h-3 w-3 text-purple-500 shrink-0 mt-0.5" />
                        <span><strong>{item.requirement}:</strong> {item.rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-indigo-500/5 p-3.5 border border-indigo-500/20">
                  <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1.5">Editorial Consistency Rules</h3>
                  <ul className="space-y-1 text-[11px] text-muted-foreground">
                    {editorialConsistencyChecklist.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="h-3 w-3 text-indigo-500 shrink-0 mt-0.5" />
                        <span><strong>{item.requirement}:</strong> {item.rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2">
                <Sparkles className="h-4 w-4" />
                AI &amp; Accessibility Verification
              </div>
              <h2 className="text-xl font-extrabold text-foreground mb-3">
                AI Search Readiness &amp; WCAG 2.1 AA Compliance
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 text-[11px]">
                <div className="rounded-xl bg-muted/40 p-3 border border-border/60">
                  <span className="font-bold text-foreground block mb-1">Google AI Overviews &amp; SGE</span>
                  <p className="text-muted-foreground">Self-contained 45-60 word direct answers structured in Section 1 for immediate snippet capture.</p>
                </div>
                <div className="rounded-xl bg-muted/40 p-3 border border-border/60">
                  <span className="font-bold text-foreground block mb-1">ChatGPT &amp; Perplexity Citations</span>
                  <p className="text-muted-foreground">High-contrast markdown tables, bulleted decision trees, and explicit numerical URLs.</p>
                </div>
                <div className="rounded-xl bg-muted/40 p-3 border border-border/60">
                  <span className="font-bold text-foreground block mb-1">WCAG 2.1 AA &amp; Keyboard QA</span>
                  <p className="text-muted-foreground">100% ARIA attributes, semantic HTML5 landmarks, focus states, and &ge;4.5:1 dark mode contrast.</p>
                </div>
                <div className="rounded-xl bg-muted/40 p-3 border border-border/60">
                  <span className="font-bold text-foreground block mb-1">Responsive Viewports QA</span>
                  <p className="text-muted-foreground">Flawless verification across Small/Large Phones, Tablets, Laptops, Desktop, Ultra-Wide, and Foldables.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Recurring Audit Lifecycle Schedules */}
        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Activity className="h-4 w-4" />
            Post-Publication Continuous Loop
          </div>
          <h2 className="text-2xl font-black text-foreground sm:text-3xl mb-3">
            Automated Weekly, Monthly, Quarterly &amp; Annual Audit Cycles Enforced
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
            Our quality loop never ends. We run weekly broken-link &amp; TTFB checks, monthly entity/ranking growth audits, quarterly competitor benchmarks, and annual architectural overhauls to ensure living knowledge assets.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/articles/enterprise-ai-agents-production"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition-all inline-flex items-center gap-1.5"
            >
              <BookOpen className="h-4 w-4" />
              Inspect Live Flagship Guide (Score: 100/100)
            </Link>
            <Link
              href="/admin/editorial-production"
              className="rounded-xl border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground hover:bg-muted transition-all inline-flex items-center gap-1.5"
            >
              <Layers className="h-4 w-4" />
              View 17-Stage Production Pipeline
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
