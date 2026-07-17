"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  contentMixDistribution,
  contentFormatsRegistry,
  topicValidationChecklist,
  rejectionCriteria,
  researchHierarchyRegistry,
  searchIntentTypes,
  articleStructureFramework,
  technicalFactCheckCategories,
  mandatoryCompletionGateChecklist,
  pipelinePhasesRegistry,
  editorialProductionTemplates
} from "@/lib/data/editorial-operating-system";
import {
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  FileText,
  Layers,
  Award,
  BookOpen,
  Compass,
  Cpu,
  BarChart3,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  ListChecks,
  Search,
  CheckSquare,
  Sparkles,
  Zap,
  GitBranch,
  Terminal,
  Copy,
  Check
} from "lucide-react";

export default function EditorialOperatingSystemPage() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "formats" | "research" | "structure" | "gate" | "templates">("pipeline");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [checkedGateItems, setCheckedGateItems] = useState<Record<string, boolean>>(
    mandatoryCompletionGateChecklist.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleGateItem = (id: string) => {
    setCheckedGateItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedGateItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / mandatoryCompletionGateChecklist.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  TechlumeAI OS v2.0
                </span>
                <span className="text-xs text-slate-400 font-mono">15-Phase Production Pipeline</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-white mt-0.5">
                Enterprise Editorial Operating System
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/editorial-production"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700"
            >
              <Layers className="h-3.5 w-3.5" />
              17-Stage Command Center
            </Link>
            <Link
              href="/admin/editorial-portfolio-intelligence"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              Portfolio Intelligence &amp; Calendar
            </Link>
            <Link
              href="/admin/content-maintenance"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Content Maintenance (CCMS)
            </Link>
            <Link
              href="/admin/measurement-intelligence"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <BarChart3 className="h-3.5 w-3.5" />
              Measurement Intelligence
            </Link>
            <Link
              href="/admin/competitive-intelligence"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <Award className="h-3.5 w-3.5" />
              Competitive Intelligence
            </Link>
            <Link
              href="/admin/geo-ai-search"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <Award className="h-3.5 w-3.5" />
              GEO &amp; AI Search
            </Link>
            <Link
              href="/admin/visual-verification-production"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <Award className="h-3.5 w-3.5" />
              Visual &amp; Live QA
            </Link>
            <Link
              href="/admin/content-governance"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium transition-colors shadow-sm border border-teal-400 font-mono"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              ECGIS-EQL v2.0 Governance
            </Link>
            <Link
              href="/editorial-policy"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <Award className="h-3.5 w-3.5" />
              Public Governance Policy
            </Link>
            <Link
              href="/admin/enterprise-performance"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-medium transition-colors shadow-sm"
            >
              <Award className="h-3.5 w-3.5" />
              EPCS-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-security"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 text-xs font-medium transition-colors shadow-sm"
            >
              <Award className="h-3.5 w-3.5" />
              ESPD-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-accessibility"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition-colors shadow-sm"
            >
              <Award className="h-3.5 w-3.5" />
              EADS-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-qa-verification"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-medium transition-colors shadow-sm"
            >
              <Award className="h-3.5 w-3.5" />
              EQVS-EQL v1.0
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Mission Directive Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/20 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
                Institutional Mission & Quality Mandate
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-3">
                Research-Driven Authority. Zero Random AI Generation.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                TechlumeAI operates under the combined expertise of Chief Technology Editors, Senior AI Researchers, and Semantic SEO Architects. Every flagship guide, technical explainer, and benchmark report must pass through this structured 15-phase completion pipeline before publication.
              </p>
            </div>
            <div className="flex-shrink-0 grid grid-cols-3 gap-3 text-center md:border-l md:border-slate-800 md:pl-6">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block text-2xl font-bold text-indigo-400 font-mono">15</span>
                <span className="text-[10px] uppercase font-mono text-slate-400">Pipeline Phases</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block text-2xl font-bold text-emerald-400 font-mono">22</span>
                <span className="text-[10px] uppercase font-mono text-slate-400">Gate Checks</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block text-2xl font-bold text-purple-400 font-mono">10</span>
                <span className="text-[10px] uppercase font-mono text-slate-400">Source Tiers</span>
              </div>
            </div>
          </div>

          {/* Editorial Content Mix Bar */}
          <div className="mt-6 pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-slate-300 uppercase font-semibold">Editorial Content Mix Distribution</span>
              <span className="text-indigo-400 font-semibold">100% High-Signal Focus</span>
            </div>
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-800">
              {contentMixDistribution.map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.color} h-full transition-all relative group cursor-pointer`}
                  style={{ width: `${item.percentage}%` }}
                  title={`${item.category}: ${item.percentage}%`}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
              {contentMixDistribution.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className={`w-3 h-3 rounded-sm ${item.color} mt-0.5 flex-shrink-0`} />
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">
                      {item.category} ({item.percentage}%)
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-2">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4 mb-8">
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "pipeline"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <GitBranch className="h-4 w-4" />
            15-Phase Production Pipeline
          </button>
          <button
            onClick={() => setActiveTab("formats")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "formats"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            6 Content Formats & Mix
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "research"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Search className="h-4 w-4" />
            10-Tier Research & Evidence Matrix
          </button>
          <button
            onClick={() => setActiveTab("structure")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "structure"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Terminal className="h-4 w-4" />
            16-Part Structure & Fact-Check
          </button>
          <button
            onClick={() => setActiveTab("gate")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "gate"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            Mandatory Completion Gate (22 Items)
          </button>
          <button
            onClick={() => setActiveTab("templates")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "templates"
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Copy className="h-4 w-4" />
            Copyable Production Templates
          </button>
        </div>

        {/* TAB 1: 15-PHASE PRODUCTION PIPELINE */}
        {activeTab === "pipeline" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">The 15-Phase Editorial Execution System</h3>
                <p className="text-xs text-slate-400 mt-0.5">Every major article progresses sequentially through these 15 verification phases.</p>
              </div>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20 font-semibold">
                Mandatory Progression
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {pipelinePhasesRegistry.map(phase => (
                <div
                  key={phase.phaseNumber}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row gap-6"
                >
                  <div className="flex-shrink-0 md:w-48">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-bold">
                      Phase {phase.phaseNumber}
                    </span>
                    <h4 className="text-base font-bold text-white mt-2 leading-snug">{phase.phaseName}</h4>
                  </div>

                  <div className="flex-grow space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed">{phase.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
                      <div>
                        <span className="text-xs font-mono uppercase font-semibold text-slate-400 block mb-1.5">
                          Phase Objectives
                        </span>
                        <ul className="space-y-1">
                          {phase.objectives.map((obj, i) => (
                            <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-indigo-400 mt-0.5">•</span>
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-xs font-mono uppercase font-semibold text-emerald-400 block mb-1.5">
                          Required Deliverables
                        </span>
                        <ul className="space-y-1">
                          {phase.deliverables.map((del, i) => (
                            <li key={i} className="text-xs font-mono text-emerald-300/90 flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              {del}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                      <Zap className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-mono uppercase font-semibold text-amber-400">
                          Primary Verification Gate
                        </span>
                        <p className="text-xs text-slate-300 mt-0.5 italic">
                          "{phase.verificationQuestions[0]}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CONTENT FORMATS & TOPIC VALIDATION */}
        {activeTab === "formats" && (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">The 6 Canonical Content Formats</h3>
              <p className="text-sm text-slate-400 mb-6">Every article must cleanly fit into one of these 6 rigorous technical structures.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contentFormatsRegistry.map(fmt => (
                  <div key={fmt.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                        Format Specification
                      </span>
                      <h4 className="text-base font-bold text-white mb-2">{fmt.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">{fmt.description}</p>

                      <div className="space-y-2 mb-4">
                        <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">Required Elements:</span>
                        <ul className="space-y-1">
                          {fmt.requiredElements.map((elem, i) => (
                            <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                              <span className="text-emerald-400">✓</span>
                              {elem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Representative Examples:</span>
                      <ul className="space-y-1">
                        {fmt.examples.slice(0, 2).map((ex, i) => (
                          <li key={i} className="text-[11px] font-mono text-indigo-300 truncate">
                            • {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Topic Validation Checklist & Rejection Screen */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <h4 className="text-base font-bold text-white">Topic Validation Checklist (10 Questions)</h4>
                </div>
                <div className="space-y-3">
                  {topicValidationChecklist.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="text-xs font-semibold text-white block">{item.question}</span>
                      <span className="text-[11px] text-slate-400">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-rose-400" />
                  <h4 className="text-base font-bold text-white">Absolute Rejection Criteria</h4>
                </div>
                <p className="text-xs text-slate-300 mb-4">
                  Reject immediately at Phase 1 if the proposed topic matches any of these conditions:
                </p>
                <div className="space-y-2.5">
                  {rejectionCriteria.map((crit, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-rose-500/20 flex items-start gap-2.5">
                      <span className="text-rose-400 font-bold text-sm">✕</span>
                      <span className="text-xs text-rose-200/90 leading-relaxed">{crit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: RESEARCH HIERARCHY & EVIDENCE MATRIX */}
        {activeTab === "research" && (
          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">The 10-Tier Research Hierarchy</h3>
                  <p className="text-sm text-slate-400">Do not use weak sources as the foundation of important technical claims.</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Tier 1 & Tier 2 Prioritized
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/60 text-xs font-mono uppercase text-slate-400">
                      <th className="py-3.5 px-4 w-16 text-center">Rank</th>
                      <th className="py-3.5 px-4">Source Category</th>
                      <th className="py-3.5 px-4">Description & Scope</th>
                      <th className="py-3.5 px-4">Representative Examples</th>
                      <th className="py-3.5 px-4 text-right">Reliability Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-xs">
                    {researchHierarchyRegistry.map(tier => (
                      <tr key={tier.rank} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-center text-indigo-400">
                          #{tier.rank}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-white">
                          {tier.sourceType}
                        </td>
                        <td className="py-3.5 px-4 text-slate-300">
                          {tier.description}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-slate-400">
                          {tier.examples.join(" • ")}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold">
                          <span className={`px-2 py-0.5 rounded ${
                            tier.reliabilityScore >= 90 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                            tier.reliabilityScore >= 80 ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                            "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          }`}>
                            {tier.reliabilityScore}/100
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Evidence Matrix Specification */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-base font-bold text-white mb-2">Research Evidence Matrix Requirements (Phase 3)</h4>
              <p className="text-xs text-slate-300 mb-4">
                Before drafting begins, every major technical claim must be logged in an Evidence Matrix containing the following mandatory fields:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
                {[
                  { field: "CLAIM", desc: "Specific technical assertion or benchmark" },
                  { field: "SOURCE", desc: "Verifiable URL or DOI identifier" },
                  { field: "SOURCE TYPE", desc: "Mapped to 10-tier hierarchy rank" },
                  { field: "PUB DATE", desc: "Timestamp verifying recency" },
                  { field: "RELEVANCE", desc: "High / Medium / Low" },
                  { field: "CONFIDENCE", desc: "Verified / High / Moderate" },
                  { field: "VERIFY?", desc: "Requires live code run or test" }
                ].map((f, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-xs font-mono font-bold text-indigo-400 block">{f.field}</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ARTICLE STRUCTURE & TECHNICAL FACT CHECKING */}
        {activeTab === "structure" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-5 w-5 text-indigo-400" />
                <h3 className="text-base font-bold text-white">16-Part Canonical Article Spine</h3>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Every flagship guide and implementation deep-dive must follow this structured architectural progression.
              </p>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                {articleStructureFramework.map((sec, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-indigo-400 mt-0.5 flex-shrink-0">
                      {sec.section.split(".")[0]}.
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-white block">{sec.section.split(".")[1]}</span>
                      <span className="text-[11px] text-slate-400">{sec.requirement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="h-5 w-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Technical Fact Check Categories (Phase 10)</h3>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  Review every single claim across these 12 critical engineering categories before signoff.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {technicalFactCheckCategories.map((cat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-slate-200">{cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/20">
                <h4 className="text-sm font-bold text-white mb-2">Claim Classification Matrix</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Never publish uncertain claims as facts. Classify every statement as one of the following:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">VERIFIED</div>
                  <div className="p-2 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-bold">REQUIRES SOURCE</div>
                  <div className="p-2 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold">OUTDATED</div>
                  <div className="p-2 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">UNCERTAIN</div>
                  <div className="p-2 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 font-bold">REMOVE</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MANDATORY COMPLETION GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                  Mandatory Completion Gate
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  22-Item Pre-Publication & Live Verification Checklist
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Do not publish or mark complete any major article until every single gate item below is verified.
                </p>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                <div className="text-right">
                  <span className="text-xs font-mono text-slate-400 block">Gate Status</span>
                  <span className={`text-base font-mono font-bold ${completionPercentage === 100 ? "text-emerald-400" : "text-amber-400"}`}>
                    {completedCount} / {mandatoryCompletionGateChecklist.length} ({completionPercentage}%)
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-slate-800 flex items-center justify-center relative">
                  <span className="text-xs font-bold text-white font-mono">{completionPercentage}%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryCompletionGateChecklist.map((gate, idx) => {
                const isChecked = checkedGateItems[gate.id];
                return (
                  <div
                    key={gate.id}
                    onClick={() => toggleGateItem(gate.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                      isChecked
                        ? "bg-emerald-950/20 border-emerald-500/30 text-white"
                        : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                      isChecked
                        ? "bg-emerald-500 border-emerald-400 text-slate-950 font-bold"
                        : "border-slate-700 bg-slate-950"
                    }`}>
                      {isChecked && <CheckCircle2 className="h-3.5 w-3.5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-indigo-400">
                          [{idx + 1}] {gate.phase}
                        </span>
                        {isChecked && (
                          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                            VERIFIED
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-200 mt-1 leading-relaxed">{gate.item}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 6: COPYABLE PRODUCTION TEMPLATES */}
        {activeTab === "templates" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block">
                  Interactive Production Templates
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Copy-and-Paste Schemas for Editorial & Research Teams
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Use these canonical Markdown templates when commissioning, researching, auditing competitors, and structuring outlines.
                </p>
              </div>
              <span className="text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1.5 rounded-xl font-bold flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                One-Click Clipboard Copy
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {editorialProductionTemplates.map(tpl => {
                const isCopied = copiedId === tpl.id;
                return (
                  <div key={tpl.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20 block w-fit mb-1.5">
                          {tpl.phase}
                        </span>
                        <h4 className="text-base font-bold text-white">{tpl.name}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{tpl.description}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(tpl.id, tpl.markdownContent)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          isCopied
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                            : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copied to Clipboard!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy Markdown Schema
                          </>
                        )}
                      </button>
                    </div>

                    <div className="relative">
                      <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs font-mono text-slate-300 overflow-x-auto max-h-[360px] overflow-y-auto leading-relaxed whitespace-pre-wrap">
                        {tpl.markdownContent}
                      </pre>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
