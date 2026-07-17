"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  measurementLayersRegistry,
  contentScorecardRegistry,
  queryClassificationRegistry,
  queryDiagnosticWorkflows,
  pillarPerformanceAuditRegistry,
  attributionAndInternalLinkModels,
  editorialRoiFormula,
  aiSearchCitationAuditRegistry,
  anomalyDetectionProtocols,
  reportingCadenceAgendas,
  actionPrioritizationMatrix,
  mandatoryMeasurementGateChecklist,
  analyticsDataQualityAuditRegistry,
  contentGapIntelligenceMatrix,
  seoExperimentationLedger,
  contentToBusinessValueFunnel,
  editorialKpiSystemRegistry
} from "@/lib/data/measurement-intelligence-system";
import {
  BarChart3,
  TrendingUp,
  Activity,
  Layers,
  Search,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Filter,
  PieChart,
  Target,
  FileText,
  HelpCircle,
  Clock,
  Zap,
  CheckSquare,
  ShieldAlert,
  Compass,
  Award,
  Database,
  ShieldCheck,
  FlaskConical
} from "lucide-react";

export default function MeasurementIntelligencePage() {
  const [activeTab, setActiveTab] = useState<
    "layers" | "scorecard" | "queries" | "pillars" | "attribution" | "ai-search" | "anomalies" | "cadence" | "gate" | "audit" | "gaps" | "experiments" | "funnel" | "kpis"
  >("layers");

  const [checkedGateItems, setCheckedGateItems] = useState<Record<string, boolean>>(() =>
    mandatoryMeasurementGateChecklist.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const toggleGateItem = (id: string) => {
    setCheckedGateItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedGateItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / mandatoryMeasurementGateChecklist.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                TechlumeAI Enterprise Measurement &amp; Growth Analytics System
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  EMIS-EQL v2.0
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Data-driven evaluation of technical SEO, 8 query tiers, 6-dimension scorecards, AI search citations, and 45x lifetime ROI.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/admin/content-governance"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
              ECGIS v2.0 Governance
            </Link>
            <Link
              href="/admin/visual-verification-production"
              className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
              Visual &amp; Live QA
            </Link>
            <Link
              href="/admin/geo-ai-search"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              GEO &amp; AI Search
            </Link>
            <Link
              href="/admin/competitive-intelligence"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              Competitive Intelligence
            </Link>
            <Link
              href="/admin/editorial-portfolio-intelligence"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              Portfolio Intelligence
            </Link>
            <Link
              href="/admin/content-maintenance"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              Content Maintenance
            </Link>
            <Link
              href="/admin/editorial-operating-system"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              15-Phase OS
            </Link>
            <Link
              href="/admin/user-journey-growth"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              EUJG-CRO v1.0
            </Link>
            <Link
              href="/admin/enterprise-performance"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              EPCS-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-security"
              className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 border border-rose-500/30 text-xs font-semibold text-rose-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-rose-400" />
              ESPD-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-accessibility"
              className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
              EADS-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-qa-verification"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              EQVS-EQL v1.0
            </Link>
            <Link
              href="/admin/editorial-production"
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-lg shadow-indigo-600/20"
            >
              Production Stage
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab("layers")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "layers"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            5 Measurement Layers
          </button>
          <button
            onClick={() => setActiveTab("scorecard")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "scorecard"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Award className="h-4 w-4" />
            6-Dimension Scorecard
          </button>
          <button
            onClick={() => setActiveTab("queries")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "queries"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Search className="h-4 w-4" />
            Query Intent &amp; Diagnostics
          </button>
          <button
            onClick={() => setActiveTab("pillars")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "pillars"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <PieChart className="h-4 w-4" />
            8-Pillar Performance Audit
          </button>
          <button
            onClick={() => setActiveTab("attribution")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "attribution"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            Attribution &amp; ROI Formula
          </button>
          <button
            onClick={() => setActiveTab("ai-search")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "ai-search"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Compass className="h-4 w-4" />
            AI Search Visibility &amp; Citations
          </button>
          <button
            onClick={() => setActiveTab("anomalies")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "anomalies"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <ShieldAlert className="h-4 w-4" />
            Anomaly Detection Protocols
          </button>
          <button
            onClick={() => setActiveTab("cadence")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "cadence"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Clock className="h-4 w-4" />
            4-Cycle Reporting &amp; ICE-SV
          </button>
          <button
            onClick={() => setActiveTab("audit")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "audit"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Database className="h-4 w-4" />
            11-Point Data Quality Audit
          </button>
          <button
            onClick={() => setActiveTab("gaps")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "gaps"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Target className="h-4 w-4" />
            Content Gap Matrix
          </button>
          <button
            onClick={() => setActiveTab("experiments")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "experiments"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FlaskConical className="h-4 w-4" />
            SEO Experimentation Ledger
          </button>
          <button
            onClick={() => setActiveTab("funnel")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "funnel"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            8-Stage Value Funnel
          </button>
          <button
            onClick={() => setActiveTab("kpis")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "kpis"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Activity className="h-4 w-4" />
            15-Metric KPI System
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
            Mandatory EMIS-EQL Gate (18 Items)
          </button>
        </div>

        {/* TAB 1: 5 MEASUREMENT LAYERS */}
        {activeTab === "layers" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Institutional Architecture</span>
              <h3 className="text-xl font-bold text-white mt-1">5 Measurement Layers (Technical &rarr; Strategic Value)</h3>
              <p className="text-xs text-slate-300 mt-1">
                We do not ask only &quot;Did traffic increase?&quot; We measure technical crawlability, query visibility, active reading depth, knowledge graph coverage, and enterprise conversions.
              </p>
            </div>

            <div className="space-y-4">
              {measurementLayersRegistry.map(layer => (
                <div key={layer.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-400">{layer.level}</span>
                      <h4 className="text-lg font-bold text-white">{layer.name}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{layer.focus}</p>
                    </div>
                    <span className="px-3 py-1 rounded font-mono text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 self-start">
                      {layer.automationFrequency}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-emerald-400">Core Evaluation Metrics:</span>
                      <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                        {layer.coreMetrics.map((met, idx) => (
                          <li key={idx} className="font-mono">{met}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="text-xs font-mono font-bold text-amber-400 block">Diagnostic Interpretation Questions:</span>
                        {layer.diagnosticQuestions.map((q, idx) => (
                          <p key={idx} className="text-xs text-slate-300 leading-relaxed font-mono">
                            &bull; {q}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 6-DIMENSION SCORECARD */}
        {activeTab === "scorecard" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Holistic Asset Evaluation</span>
              <h3 className="text-xl font-bold text-white mt-1">Content Performance Scorecard (100-Point Evaluation Matrix)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Never judge an article by raw traffic alone. A low-traffic technical guide may deliver immense value by building topical authority, compounding internal link equity, or converting enterprise decision-makers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contentScorecardRegistry.map(dim => (
                <div key={dim.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{dim.id}]</span>
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {dim.weight} Points
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">{dim.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{dim.description}</p>
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 font-bold block">Evaluation Criteria:</span>
                    <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
                      {dim.evaluationCriteria.map((crit, idx) => (
                        <li key={idx}>{crit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: QUERY CLASSIFICATION & DIAGNOSTIC WORKFLOWS */}
        {activeTab === "queries" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Search Intent &amp; Diagnostic Loops</span>
              <h3 className="text-xl font-bold text-white mt-1">Query Intent Classification &amp; 3 Remediation Workflows</h3>
              <p className="text-xs text-slate-300 mt-1">
                Classify queries by intent (`INFO`, `IMPL`, `COMP`, `ENT`, `TECH_ERR`) and execute structured action loops when impressions, clicks, or rankings diverge.
              </p>
            </div>

            {/* 3 Actionable Diagnostic Workflows */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Search className="h-4 w-4 text-emerald-400" />
                3 Codified Query Diagnostic Workflows
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {queryDiagnosticWorkflows.map(diag => (
                  <div key={diag.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{diag.id}]</span>
                      <h5 className="text-sm font-bold text-white leading-snug">{diag.condition}</h5>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-slate-800">
                      <span className="text-[11px] font-mono text-amber-400 font-bold block">Root Causes:</span>
                      <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
                        {diag.rootCauses.map((rc, i) => (
                          <li key={i}>{rc}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80 bg-slate-950 p-3 rounded-lg">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold block">Remediation Steps:</span>
                      {diag.remediationSteps.map((rs, i) => (
                        <div key={i} className="text-xs text-slate-300 font-mono">{rs}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Query Classification Registry Table */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Target className="h-4 w-4 text-indigo-400" />
                Query Intent Classification Registry (`5 Primary Types`)
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-mono">
                      <th className="p-3.5">Intent Type</th>
                      <th className="p-3.5">User Goal</th>
                      <th className="p-3.5">Query Examples</th>
                      <th className="p-3.5">Required Content Format</th>
                      <th className="p-3.5">Action if Unaligned</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {queryClassificationRegistry.map(q => (
                      <tr key={q.id} className="hover:bg-slate-900/60">
                        <td className="p-3.5 font-bold text-white font-mono">{q.intent}</td>
                        <td className="p-3.5 max-w-xs">{q.userGoal}</td>
                        <td className="p-3.5 font-mono text-[11px] max-w-xs space-y-1">
                          {q.queryExamples.map((ex, i) => (
                            <div key={i}>&bull; {ex}</div>
                          ))}
                        </td>
                        <td className="p-3.5 max-w-xs text-slate-200">{q.requiredContentFormat}</td>
                        <td className="p-3.5 max-w-xs font-mono text-emerald-300 bg-slate-950/40">{q.actionIfUnaligned}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 8-PILLAR PERFORMANCE AUDIT */}
        {activeTab === "pillars" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Portfolio Evaluation</span>
              <h3 className="text-xl font-bold text-white mt-1">8-Pillar Performance &amp; Strategic Gap Audit Matrix</h3>
              <p className="text-xs text-slate-300 mt-1">
                Do not automatically publish more content in the strongest pillar. Prioritize strategic gaps, underdeveloped clusters (`Cybersecurity, Hardware`), and high-opportunity topics.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-mono">
                    <th className="p-4">Core Editorial Pillar</th>
                    <th className="p-4 text-center">Article Count</th>
                    <th className="p-4 text-center">Avg Scorecard</th>
                    <th className="p-4 text-center">Monthly Impressions</th>
                    <th className="p-4 text-center">Monthly Clicks</th>
                    <th className="p-4 text-center">Avg Position</th>
                    <th className="p-4 text-center">Portfolio Status</th>
                    <th className="p-4">Strategic Directive &amp; Next Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {pillarPerformanceAuditRegistry.map(pil => {
                    let badgeColor = "bg-slate-800 text-slate-300";
                    if (pil.status === "STRONGEST") badgeColor = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
                    if (pil.status === "HIGH-OPPORTUNITY") badgeColor = "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20";
                    if (pil.status === "UNDERDEVELOPED") badgeColor = "bg-amber-500/10 text-amber-400 border border-amber-500/20";
                    if (pil.status === "WEAKEST") badgeColor = "bg-rose-500/10 text-rose-400 border border-rose-500/20";

                    return (
                      <tr key={pil.pillar} className="hover:bg-slate-900/60 font-mono">
                        <td className="p-4 font-bold text-white font-sans text-sm">{pil.pillar}</td>
                        <td className="p-4 text-center font-bold">{pil.articleCount}</td>
                        <td className="p-4 text-center text-emerald-400 font-bold">{pil.avgScorecardScore}</td>
                        <td className="p-4 text-center">{pil.monthlyImpressions}</td>
                        <td className="p-4 text-center text-white font-bold">{pil.monthlyClicks}</td>
                        <td className="p-4 text-center text-indigo-300 font-bold">#{pil.avgPosition}</td>
                        <td className="p-4 text-center">
                          <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${badgeColor}`}>
                            {pil.status}
                          </span>
                        </td>
                        <td className="p-4 max-w-sm font-sans text-xs text-slate-200 bg-slate-950/40 leading-relaxed">
                          {pil.strategicDirective}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: ATTRIBUTION & ROI FORMULA */}
        {activeTab === "attribution" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Multi-Touch Ecosystem Measurement</span>
              <h3 className="text-xl font-bold text-white mt-1">Multi-Touch Attribution Layers &amp; Editorial ROI Formula</h3>
              <p className="text-xs text-slate-300 mt-1">
                Do not assume the last page visited created all value. Evaluate first-touch discovery, assisted journeys across internal links, and lifetime authority compounding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Attribution Layers */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-indigo-500/20 space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2 text-indigo-400">
                  <TrendingUp className="h-5 w-5" />
                  4 Multi-Touch Content Attribution Layers
                </h4>
                <div className="space-y-3">
                  {attributionAndInternalLinkModels.attributionLayers.map((attr, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                      <span className="text-xs font-mono font-bold text-indigo-300">{attr.model}</span>
                      <p className="text-xs text-slate-200 leading-relaxed font-bold">{attr.definition}</p>
                      <p className="text-xs text-slate-400 leading-relaxed font-mono">{attr.significance}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editorial ROI Formula */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/20 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-white flex items-center gap-2 text-emerald-400">
                    <Award className="h-5 w-5" />
                    Lifetime Editorial ROI Formula (`3-Year Horizon`)
                  </h4>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-300 block">Invested Effort Factors (`Denominator`):</span>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      {editorialRoiFormula.inputs.map((inp, idx) => (
                        <div key={idx} className="bg-slate-950 p-2 rounded border border-slate-800">
                          <span className="text-rose-400 font-bold block">{inp.factor}</span>
                          <span className="text-[11px] text-slate-400">{inp.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-xs font-mono font-bold text-slate-300 block">Compounding Return Signals (`Numerator`):</span>
                    <div className="grid grid-cols-1 gap-2 text-xs font-mono">
                      {editorialRoiFormula.outputs.map((out, idx) => (
                        <div key={idx} className="bg-slate-950 p-2 rounded border border-slate-800">
                          <span className="text-emerald-400 font-bold block">{out.factor}</span>
                          <span className="text-[11px] text-slate-400">{out.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-xs font-mono text-emerald-200 leading-relaxed mt-4">
                  <span className="font-bold block text-emerald-300 mb-1">EVALUATION PRINCIPLE:</span>
                  {editorialRoiFormula.evaluationPrinciple}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: AI SEARCH VISIBILITY & CITATIONS */}
        {activeTab === "ai-search" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Retrieval Engine Intelligence</span>
              <h3 className="text-xl font-bold text-white mt-1">AI Search Visibility &amp; Citation Quality Audit Matrix</h3>
              <p className="text-xs text-slate-300 mt-1">
                Monitor inclusion share across Perplexity, ChatGPT Search, Claude, and Gemini AI Overviews. Ensure accurate entity mapping and direct definition formatting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiSearchCitationAuditRegistry.map((audit, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white font-mono">{audit.engine}</h4>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {audit.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-950 p-3 rounded border border-slate-800">
                      <div>
                        <span className="text-slate-400 block">Inclusion Share:</span>
                        <span className="font-bold text-emerald-400">{audit.inclusionShare}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Citation Precision:</span>
                        <span className="font-bold text-white">{audit.citationPrecision}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 font-bold block">Key Targeted Queries:</span>
                    <ul className="text-xs text-slate-300 list-disc list-inside space-y-1 font-mono">
                      {audit.keyTargetedQueries.map((q, idx) => (
                        <li key={idx}>{q}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-xs text-indigo-300 font-mono bg-slate-950/60 p-3 rounded border border-indigo-500/20">
                    <span className="font-bold text-white">Mandate: </span>
                    {audit.optimizationMandate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: ANOMALY DETECTION PROTOCOLS */}
        {activeTab === "anomalies" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">Forensic Anomaly Diagnostics</span>
              <h3 className="text-xl font-bold text-white mt-1">Performance Anomaly Detection &amp; Immediate Response Loops</h3>
              <p className="text-xs text-slate-300 mt-1">
                Never make major strategic decisions from a single abnormal data point. Investigate indexing coverage, competitor shifts, and technical decay before executing corrective action.
              </p>
            </div>

            <div className="space-y-4">
              {anomalyDetectionProtocols.map((anom, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h4 className="text-base font-bold text-rose-400 font-mono flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5" />
                      {anom.anomaly}
                    </h4>
                  </div>
                  <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200">
                    <span className="font-bold text-emerald-400 block mb-1">Immediate Diagnostic &amp; Corrective Action Loop:</span>
                    {anom.immediateAction.split("\n").map((line, idx) => (
                      <div key={idx} className="leading-relaxed">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: 4-CYCLE REPORTING & ICE-SV PRIORITIZATION */}
        {activeTab === "cadence" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Institutional Governance &amp; Prioritization</span>
              <h3 className="text-xl font-bold text-white mt-1">4-Cycle Reporting Agendas &amp; ICE-SV Action Prioritization</h3>
              <p className="text-xs text-slate-300 mt-1">
                Transform analytics into structured weekly, monthly, quarterly, and annual deliverables sorted strictly by our `ICE-SV` impact formula.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reportingCadenceAgendas.map((cad, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">{cad.cycle}</span>
                    <div className="text-xs font-mono text-slate-400">Audience: <strong className="text-white">{cad.audience}</strong></div>
                    <p className="text-xs text-slate-300 leading-relaxed">{cad.focus}</p>
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-emerald-400 font-bold block">Key Mandatory Deliverables:</span>
                    <ul className="text-xs text-slate-300 list-disc list-inside space-y-1 font-mono">
                      {cad.keyDeliverables.map((del, idx) => (
                        <li key={idx}>{del}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* ICE-SV Action Prioritization Matrix */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400" />
                ICE-SV Action Prioritization Matrix (`{actionPrioritizationMatrix.formula}`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {actionPrioritizationMatrix.tiers.map((t, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-400 block">{t.priority}</span>
                    <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
                      {t.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 9: 11-POINT DATA QUALITY AUDIT */}
        {activeTab === "audit" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Data Foundation &amp; Integrity</span>
              <h3 className="text-xl font-bold text-white mt-1">11-Point Analytics &amp; Data Quality Audit Registry (`AUDIT-01 to AUDIT-11`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Before making strategic or technical decisions, we verify that our underlying GA4, GSC, and edge tracking data is free from drop-offs, double-counts, sampling artifacts, or scraper distortion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analyticsDataQualityAuditRegistry.map((aud, idx) => (
                <div key={aud.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{aud.id}] {aud.category}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {aud.verificationStatus}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 font-semibold leading-relaxed">{aud.checkDescription}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
                    <span className="text-emerald-400 font-bold block mb-1">Diagnostic Action:</span>
                    {aud.diagnosticAction}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 10: CONTENT GAP INTELLIGENCE MATRIX */}
        {activeTab === "gaps" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Competitive &amp; Semantic Coverage</span>
              <h3 className="text-xl font-bold text-white mt-1">Content Gap Intelligence Matrix</h3>
              <p className="text-xs text-slate-300 mt-1">
                Continuous cross-referencing: <code className="text-indigo-300 font-mono">WHAT USERS SEARCH &rarr; WHAT TECHLUME COVERS &rarr; WHAT COMPETITORS COVER &rarr; WHAT USERS STILL NEED</code>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contentGapIntelligenceMatrix.map((gap, idx) => (
                <div key={gap.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="border-b border-slate-800 pb-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">[{gap.id}]</span>
                    <h4 className="text-base font-bold text-white">{gap.gapCategory}</h4>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-indigo-400 font-mono font-bold block mb-0.5">Diagnostic Query:</span>
                      <p className="text-slate-300">{gap.diagnosticQuery}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-amber-400 font-mono font-bold block mb-0.5">Example Finding:</span>
                      <p className="text-slate-300">{gap.exampleFinding}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30">
                      <span className="text-emerald-400 font-mono font-bold block mb-0.5">Mandatory Strategic Action:</span>
                      <p className="text-slate-200 font-semibold">{gap.strategicAction}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 11: SEO EXPERIMENTATION LEDGER */}
        {activeTab === "experiments" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Scientific Hypothesis Testing</span>
              <h3 className="text-xl font-bold text-white mt-1">Controlled SEO &amp; CTR Experimentation Ledger</h3>
              <p className="text-xs text-slate-300 mt-1">
                We never make arbitrary or superstitious changes to high-ranking guides. Every change is tracked as a formal experiment with a baseline, hypothesis, observation window, and institutional decision.
              </p>
            </div>

            <div className="space-y-4">
              {seoExperimentationLedger.map((exp, idx) => (
                <div key={exp.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-sm font-mono font-bold text-indigo-400">Experiment ID: {exp.id} (Started: {exp.dateStarted})</span>
                    <span className="px-3 py-1 rounded font-mono text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 self-start">
                      {exp.decision}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div><strong className="text-indigo-400">Hypothesis:</strong> <span className="text-slate-300">{exp.hypothesis}</span></div>
                      <div><strong className="text-amber-400">Change Applied:</strong> <span className="text-slate-300">{exp.changeApplied}</span></div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div><strong className="text-emerald-400">Expected Result:</strong> <span className="text-slate-300">{exp.expectedResult}</span></div>
                      <div><strong className="text-white">Observed Result:</strong> <span className="text-slate-200 font-bold">{exp.observedResult}</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 12: 8-STAGE VALUE FUNNEL */}
        {activeTab === "funnel" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Holistic Lifecycle Evaluation</span>
              <h3 className="text-xl font-bold text-white mt-1">Content-to-Business Value Funnel (7-Stage Progression)</h3>
              <p className="text-xs text-slate-300 mt-1">
                How every technical article moves through visibility, developer utility, conversion, compounding domain rating (`DR`), and long-term defensible ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contentToBusinessValueFunnel.map((fnl, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-500/5 rounded-bl-3xl flex items-center justify-center font-mono font-bold text-slate-700">
                    {idx + 1}
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400 block">{fnl.stage}</span>
                    <h4 className="text-sm font-bold text-white font-mono">{fnl.metric}</h4>
                  </div>
                  <p className="text-xs text-slate-300 pt-2 border-t border-slate-800 leading-relaxed">{fnl.businessImpact}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 13: 15-METRIC KPI SYSTEM */}
        {activeTab === "kpis" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-indigo-400">Executive Measurement System</span>
                <h3 className="text-xl font-bold text-white mt-1">15 Core Editorial &amp; Growth KPIs</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Institutional targets evaluated continuously across production, maintenance (`CCMS`), Search Console, and GA4 attributions.
                </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-bold">
                15 / 15 Core Benchmarks Active
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {editorialKpiSystemRegistry.map((kpi, idx) => (
                <div key={kpi.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{kpi.id}]</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {kpi.targetBenchmark}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{kpi.metricName}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{kpi.strategicRationale}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                    Source: <strong className="text-indigo-300">{kpi.measurementSource}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 14: MANDATORY EMIS-EQL GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Mandatory Measurement &amp; Growth Analytics Completion Gate (`EMIS-EQL v2.0`)</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verify all 18 measurement layers, query classification loops, data quality checks, and scorecard governance requirements before certifying signoff.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedCount} of {mandatoryMeasurementGateChecklist.length} Verified</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {completionPercentage}% EMIS-EQL Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryMeasurementGateChecklist.map((gate, idx) => {
                const isChecked = checkedGateItems[gate.id] || false;
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
                          [{idx + 1}] {gate.category}
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
      </div>
    </div>
  );
}
