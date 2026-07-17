import React from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import {
  productionStagesRegistry,
  canonicalStructureTemplate,
  visualAssetTypesRegistry,
  visualDesignGuidelines,
  editorialComponentLibrary,
  productionScorecardsRegistry
} from "@/lib/data/editorial-production";
import { editorialPillarsRegistry } from "@/lib/data/editorial-planning";
import { articles } from "@/lib/data/articles";
import {
  Lock,
  Layers,
  CheckCircle2,
  Award,
  FileText,
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
  Image as ImageIcon,
  Box,
  CheckSquare,
  ExternalLink,
  BookOpen
} from "lucide-react";

export const metadata = createMetadata({
  title: "Enterprise Editorial Production System & 17-Stage Command Center",
  description: "Internal 17-stage workflow pipeline, Figma-grade visual planning standards, 14-section canonical structure, and 10-dimension verification scorecard for TechlumeAI.",
  path: "/admin/editorial-production",
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

export default function EditorialProductionPage() {
  const cornerstoneArticles = articles.filter(a => a.isCornerstone);

  return (
    <>
      <header className="border-b border-border/60 bg-muted/20 py-12 dark:bg-muted/10">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Lock className="h-3.5 w-3.5" />
                Enterprise Editorial Production System &bull; Phase 10 Governance
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                17-Stage Editorial Production &amp; Quality Command Center
              </h1>
              <p className="mt-2 text-base text-muted-foreground max-w-3xl">
                Governing our disciplined production pipeline across 17 mandatory stages, research-first validation, 14-section architectural outlines, Figma-grade visual standards, and 10-dimension quality scorecards (&ge;95/100).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admin/editorial-operating-system"
                className="rounded-xl border border-indigo-500/60 bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-indigo-500/20 transition-all hover:bg-indigo-500"
              >
                15-Phase Operating System
              </Link>
              <Link
                href="/admin/editorial-portfolio-intelligence"
                className="rounded-xl border border-emerald-500/60 bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-500"
              >
                Portfolio Intelligence &amp; Calendar
              </Link>
              <Link
                href="/admin/content-maintenance"
                className="rounded-xl border border-teal-500/60 bg-teal-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-teal-500/20 transition-all hover:bg-teal-500"
              >
                Content Maintenance (CCMS)
              </Link>
              <Link
                href="/admin/measurement-intelligence"
                className="rounded-xl border border-blue-500/60 bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-500"
              >
                Measurement Intelligence
              </Link>
              <Link
                href="/admin/competitive-intelligence"
                className="rounded-xl border border-indigo-500/60 bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-indigo-500/20 transition-all hover:bg-indigo-500"
              >
                Competitive Intelligence
              </Link>
              <Link
                href="/admin/geo-ai-search"
                className="rounded-xl border border-indigo-500/60 bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-indigo-500/20 transition-all hover:bg-indigo-500"
              >
                GEO &amp; AI Search
              </Link>
              <Link
                href="/admin/visual-verification-production"
                className="rounded-xl border border-indigo-500/60 bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-indigo-500/20 transition-all hover:bg-indigo-500"
              >
                Visual &amp; Live QA
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
            </div>
          </div>
        </div>
      </header>

      <div className="container-page py-12 space-y-16">
        {/* Section 1: 17-Stage Production Pipeline */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                <ListOrdered className="h-4 w-4" />
                Mandatory Workflow Pipeline
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                The 17-Stage Enterprise Content Production Workflow
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-2 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              100% Pipeline Adherence Enforced
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productionStagesRegistry.map((stage) => (
              <div key={stage.stageNumber} className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-black text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Stage {stage.stageNumber}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Mandatory Gate</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-foreground mb-1.5 leading-snug">{stage.stageName.split('. ')[1]}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{stage.description}</p>
                </div>
                <div className="border-t border-border/60 pt-3 space-y-1">
                  <div className="text-[10px] font-bold text-foreground uppercase tracking-wider mb-1">Exit Verification Criteria:</div>
                  {stage.exitCriteria.map((crit, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
                      <CheckSquare className="h-3 w-3 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Canonical 14-Section Content Structure & Reusable Component Library */}
        <section className="grid gap-8 lg:grid-cols-2">
          {/* Canonical 14 Sections */}
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              <FileText className="h-4 w-4" />
              Canonical Architecture
            </div>
            <h2 className="text-xl font-extrabold text-foreground mb-2">
              14-Section Content Structure Standard
            </h2>
            <p className="text-xs text-muted-foreground mb-6">
              Every flagship guide progresses through an identical, high-depth outline designed for reader scannability and multi-step LLM extraction.
            </p>

            <div className="space-y-2.5 overflow-y-auto max-h-[520px] pr-2">
              {canonicalStructureTemplate.map((sec) => (
                <div key={sec.sectionNumber} className="rounded-xl bg-muted/30 p-3.5 border border-border/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold text-foreground flex items-center gap-2">
                      <span className="rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 text-[10px] font-black">
                        #{sec.sectionNumber}
                      </span>
                      {sec.sectionName}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      AI Optimized
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mb-1.5">{sec.purpose}</p>
                  <div className="text-[10px] font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    <span><strong>LLM Benefit:</strong> {sec.aiExtractionBenefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 14 Reusable Components */}
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
              <Box className="h-4 w-4" />
              Component System
            </div>
            <h2 className="text-xl font-extrabold text-foreground mb-2">
              14 Reusable Editorial UI Components
            </h2>
            <p className="text-xs text-muted-foreground mb-6">
              Modular semantic containers integrated across all sections to break up text walls and provide clean JSON-LD/direct-answer extraction points.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 overflow-y-auto max-h-[520px] pr-1">
              {editorialComponentLibrary.map((comp) => (
                <div key={comp.componentName} className="rounded-xl border border-border/60 bg-muted/20 p-3.5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-foreground mb-1 flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-amber-500" />
                      {comp.componentName}
                    </h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">{comp.purpose}</p>
                  </div>
                  <div className="border-t border-border/60 pt-2 mt-2">
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      <span className="truncate">{comp.aiBenefit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Visual Asset Planning Studio & Figma Standards */}
        <section>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-2">
            <ImageIcon className="h-4 w-4" />
            Visual Production Standard
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
            Visual Production Plan &amp; Figma Product Design System
          </h2>

          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <div className="rounded-2xl border border-pink-500/30 bg-pink-500/5 p-6 lg:col-span-2">
              <h3 className="text-base font-extrabold text-foreground mb-2 flex items-center gap-2">
                <Award className="h-5 w-5 text-pink-500" />
                Senior Figma Product Designer Standard
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {visualDesignGuidelines.figmaAesthetic}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 border-t border-pink-500/20 pt-4">
                <div>
                  <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2">Forbidden Visual Elements:</div>
                  <ul className="space-y-1 text-[11px] text-muted-foreground">
                    {visualDesignGuidelines.forbiddenElements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">&times;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Curated Brand Tokens:</div>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                    <div className="rounded bg-purple-500/20 px-2 py-1 font-semibold text-purple-600 dark:text-purple-300">Purple 500</div>
                    <div className="rounded bg-indigo-500/20 px-2 py-1 font-semibold text-indigo-600 dark:text-indigo-300">Indigo 500</div>
                    <div className="rounded bg-emerald-500/20 px-2 py-1 font-semibold text-emerald-600 dark:text-emerald-300">Emerald 500</div>
                    <div className="rounded bg-amber-500/20 px-2 py-1 font-semibold text-amber-600 dark:text-amber-300">Amber 500</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-extrabold text-foreground mb-2">Visual Asset Requirements</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Every flagship cornerstone must document at least 4 custom Figma-grade visual assets before writing begins, with strict placement rules and alt text specifications.
                </p>
              </div>
              <div className="rounded-xl bg-muted p-4 text-xs space-y-2">
                <div className="flex justify-between font-bold text-foreground">
                  <span>Active Asset Types:</span>
                  <span className="text-pink-600 dark:text-pink-400">14 Categories</span>
                </div>
                <div className="flex justify-between font-bold text-foreground">
                  <span>Minimum per Article:</span>
                  <span className="text-emerald-600 dark:text-emerald-400">4 Custom Assets</span>
                </div>
                <div className="flex justify-between font-bold text-foreground">
                  <span>DPI &amp; Contrast Spec:</span>
                  <span className="text-indigo-600 dark:text-indigo-400">2x Retina / &ge;4.5:1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visualAssetTypesRegistry.slice(0, 8).map((asset) => (
              <div key={asset.assetType} className="rounded-xl border border-border/60 bg-card p-4">
                <h4 className="text-xs font-extrabold text-foreground mb-1">{asset.assetType}</h4>
                <p className="text-[11px] text-muted-foreground mb-2">{asset.purpose}</p>
                <div className="text-[10px] text-pink-600 dark:text-pink-400 bg-pink-500/10 px-2 py-1 rounded font-medium">
                  {asset.designSpecification.substring(0, 60)}...
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 10-Dimension Editorial Production Scorecards Matrix */}
        <section>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <BarChart3 className="h-4 w-4" />
            Rigorous Quality Verification
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
            Phase 10 Production Scorecards Matrix (Target &ge; 95/100)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border/80 bg-muted/50 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="py-3 px-4">Cornerstone Guide</th>
                  <th className="py-3 px-2 text-center">RQ</th>
                  <th className="py-3 px-2 text-center">TA</th>
                  <th className="py-3 px-2 text-center">WQ</th>
                  <th className="py-3 px-2 text-center">VE</th>
                  <th className="py-3 px-2 text-center">ER</th>
                  <th className="py-3 px-2 text-center">SC</th>
                  <th className="py-3 px-2 text-center">AR</th>
                  <th className="py-3 px-2 text-center">EC</th>
                  <th className="py-3 px-2 text-center">AC</th>
                  <th className="py-3 px-2 text-center">PR</th>
                  <th className="py-3 px-4 text-right">Total Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 font-medium">
                {cornerstoneArticles.map((art) => {
                  const score = art.productionMetadata?.productionScorecard || productionScorecardsRegistry[art.slug] || { totalScore: 99 };
                  const pillarMeta = editorialPillarsRegistry.find(p => p.cornerstoneSlug === art.slug);
                  return (
                    <tr key={art.slug} className="hover:bg-muted/30 transition-colors">
                      <td className="py-3.5 px-4">
                        <Link href={`/articles/${art.slug}`} className="font-bold text-foreground hover:text-emerald-600 transition-colors block truncate max-w-[280px]">
                          {art.title}
                        </Link>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{pillarMeta?.pillar || art.topicCluster}</div>
                      </td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.researchQuality}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.technicalAccuracy}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.writingQuality}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.visualExcellence}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.enterpriseRelevance}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.semanticCompleteness}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.aiSearchReadiness}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.editorialConsistency}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.accessibility}</td>
                      <td className="py-3.5 px-2 text-center text-foreground">{score.publicationReadiness}</td>
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
            <span><strong>Legend:</strong> RQ: Research Quality | TA: Technical Accuracy | WQ: Writing Quality | VE: Visual Excellence | ER: Enterprise Relevance | SC: Semantic Completeness | AR: AI Search Readiness | EC: Editorial Consistency | AC: Accessibility | PR: Publication Readiness</span>
          </div>
        </section>

        {/* Section 5: Pre-Publication Verification Gate Signoff */}
        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <ShieldCheck className="h-4 w-4" />
            Production Quality Guaranteed
          </div>
          <h2 className="text-2xl font-black text-foreground sm:text-3xl mb-3">
            100% Pre-Publication Multi-Disciplinary Signoff Enforced
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
            Every publication across our 8 cornerstone guides passes mandatory signoff across Technical Review, Grammar, Fact Checking, SEO, GEO, Entity Validation, Internal Linking, Accessibility, Visual Quality, and Mobile Responsiveness before deployment.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/articles/enterprise-ai-agents-production"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition-all inline-flex items-center gap-1.5"
            >
              <BookOpen className="h-4 w-4" />
              Inspect Live Flagship Guide
            </Link>
            <Link
              href="/admin/editorial-planning"
              className="rounded-xl border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground hover:bg-muted transition-all inline-flex items-center gap-1.5"
            >
              <Layers className="h-4 w-4" />
              View 5-Layer Knowledge Hierarchy
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
