"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  contentHealthStatusRegistry,
  contentDecayCategoriesRegistry,
  articleReviewFrequencyBands,
  refreshTriggersRegistry,
  refreshTypesRegistry,
  technicalDeprecationAuditProtocol,
  statisticsRefreshProtocol,
  contentConsolidationAndPruningRules,
  updateRecordAuditLogRegistry,
  livePostRefreshVerificationChecklist,
  contentDecayInventoryRegistry,
  mandatoryContentMaintenanceGateChecklist,
  contentLifecycleStatusRegistry,
  freshnessVelocityRegistry,
  decayClassificationRegistry,
  versionControlAndDeprecationProtocol,
  specializedRefreshEnginesRegistry,
  consolidationAndCannibalizationEngine,
  contentDependencyChainRegistry,
  continuousPrioritizationFormula,
  contentRetirementDecisionMatrix,
  mandatoryCcmsEqlSignoffGate
} from "@/lib/data/content-maintenance-system";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Search,
  ShieldAlert,
  Sliders,
  TrendingDown,
  Calendar,
  Layers,
  FileText,
  ExternalLink,
  ChevronRight,
  Filter,
  CheckSquare,
  HelpCircle,
  GitMerge,
  Scissors,
  ClipboardCheck,
  Zap,
  Clock,
  Award,
  ShieldCheck
} from "lucide-react";

export default function ContentMaintenancePage() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "lifecycle" | "decay" | "triggers" | "protocols" | "consolidation" | "logs" | "verification" | "gate" | "ccms-eql-gate"
  >("dashboard");

  const [healthFilter, setHealthFilter] = useState<string>("ALL");
  const [checkedGateItems, setCheckedGateItems] = useState<Record<string, boolean>>(() =>
    mandatoryContentMaintenanceGateChecklist.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const [checkedCcmsEqlItems, setCheckedCcmsEqlItems] = useState<Record<string, boolean>>(() =>
    mandatoryCcmsEqlSignoffGate.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const toggleGateItem = (id: string) => {
    setCheckedGateItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCcmsEqlItem = (id: string) => {
    setCheckedCcmsEqlItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedGateItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / mandatoryContentMaintenanceGateChecklist.length) * 100);

  const completedCcmsEqlCount = Object.values(checkedCcmsEqlItems).filter(Boolean).length;
  const ccmsEqlCompletionPercentage = Math.round((completedCcmsEqlCount / mandatoryCcmsEqlSignoffGate.length) * 100);

  const filteredInventory = healthFilter === "ALL"
    ? contentDecayInventoryRegistry
    : contentDecayInventoryRegistry.filter(art => art.healthStatus === healthFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <RefreshCw className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                TechlumeAI Continuous Content-Maintenance &amp; Lifecycle Command Center
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  CCMS v1.0
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Continuous health monitoring, 17-signal decay detection, multi-tier refresh workflows, and live forensic verification.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/admin/visual-verification-production"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
              Visual &amp; Live QA
            </Link>
            <Link
              href="/admin/content-governance"
              className="px-3.5 py-1.5 rounded-lg bg-teal-600/20 hover:bg-teal-600/30 border border-teal-500/30 text-xs font-semibold text-teal-300 flex items-center gap-1.5 transition-all font-mono"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
              ECGIS-EQL v2.0 Governance
            </Link>
            <Link
              href="/admin/geo-ai-search"
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              GEO &amp; AI Search
            </Link>
            <Link
              href="/admin/competitive-intelligence"
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              Competitive Intelligence
            </Link>
            <Link
              href="/admin/measurement-intelligence"
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              Measurement Intelligence
            </Link>
            <Link
              href="/admin/editorial-portfolio-intelligence"
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              Topic Portfolio Engine
            </Link>
            <Link
              href="/admin/editorial-operating-system"
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              15-Phase OS
            </Link>
            <Link
              href="/admin/editorial-production"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-lg shadow-emerald-600/20"
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
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "dashboard"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Activity className="h-4 w-4" />
            Health Inventory ({contentDecayInventoryRegistry.length} Articles)
          </button>
          <button
            onClick={() => setActiveTab("lifecycle")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "lifecycle"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            6-Stage Lifecycle &amp; 3-Tier Velocity
          </button>
          <button
            onClick={() => setActiveTab("decay")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "decay"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <TrendingDown className="h-4 w-4" />
            7+8 Decay Categories &amp; Signals
          </button>
          <button
            onClick={() => setActiveTab("triggers")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "triggers"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Zap className="h-4 w-4" />
            11 Refresh Triggers &amp; Scope SLAs
          </button>
          <button
            onClick={() => setActiveTab("protocols")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "protocols"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <ShieldAlert className="h-4 w-4" />
            Version Control &amp; Specialized Refresh Engines
          </button>
          <button
            onClick={() => setActiveTab("consolidation")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "consolidation"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <GitMerge className="h-4 w-4" />
            Consolidation (301) &amp; Dependency Graph
          </button>
          <button
            onClick={() => setActiveTab("logs")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "logs"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FileText className="h-4 w-4" />
            Audit Logs &amp; Retirement Matrix
          </button>
          <button
            onClick={() => setActiveTab("verification")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "verification"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <ClipboardCheck className="h-4 w-4" />
            14-Point Live Post-Refresh QA
          </button>
          <button
            onClick={() => setActiveTab("gate")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "gate"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            Mandatory CCMS Gate (16 Items)
          </button>
          <button
            onClick={() => setActiveTab("ccms-eql-gate")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "ccms-eql-gate"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Award className="h-4 w-4" />
            CCMS-EQL v2.0 Signoff Gate (18 Points)
          </button>
        </div>

        {/* TAB 1: HEALTH DASHBOARD & INVENTORY */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Health Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contentHealthStatusRegistry.map(status => (
                <div
                  key={status.id}
                  onClick={() => setHealthFilter(healthFilter === status.id ? "ALL" : status.id)}
                  className={`p-5 rounded-2xl bg-slate-900/80 border transition-all cursor-pointer ${
                    healthFilter === status.id ? status.borderColor + " ring-2 ring-emerald-500/30" : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border ${status.badgeColor}`}>
                      {status.label}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{status.slaResponseTime}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{status.description}</p>
                </div>
              ))}
            </div>

            {/* Inventory Table Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Filter className="h-4 w-4 text-emerald-400" />
                <span>Filter by Health Band:</span>
                <button
                  onClick={() => setHealthFilter("ALL")}
                  className={`px-2.5 py-1 rounded font-bold ${healthFilter === "ALL" ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-400"}`}
                >
                  ALL ({contentDecayInventoryRegistry.length})
                </button>
                {contentHealthStatusRegistry.map(st => (
                  <button
                    key={st.id}
                    onClick={() => setHealthFilter(st.id)}
                    className={`px-2.5 py-1 rounded font-bold ${healthFilter === st.id ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-400"}`}
                  >
                    {st.label} ({contentDecayInventoryRegistry.filter(x => x.healthStatus === st.id).length})
                  </button>
                ))}
              </div>
              <span className="text-xs text-slate-400 font-mono">Showing {filteredInventory.length} articles</span>
            </div>

            {/* Inventory Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-mono">
                    <th className="p-4">Article Title &amp; Slug</th>
                    <th className="p-4">Pillar &amp; Volatility</th>
                    <th className="p-4">Health Status</th>
                    <th className="p-4">Last Reviewed / Due Date</th>
                    <th className="p-4">Detected Decay Signals</th>
                    <th className="p-4">Assigned Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {filteredInventory.map(art => {
                    const stObj = contentHealthStatusRegistry.find(s => s.id === art.healthStatus);
                    return (
                      <tr key={art.slug} className="hover:bg-slate-900/60 transition-colors">
                        <td className="p-4 max-w-xs">
                          <Link href={art.slug} className="font-bold text-white hover:text-emerald-400 transition-colors block">
                            {art.title}
                          </Link>
                          <span className="font-mono text-[11px] text-slate-400 block mt-1">{art.slug}</span>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-slate-200 block">{art.pillar}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-[10px] inline-block mt-1">
                            {art.volatilityBand} Volatility
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full font-mono font-bold text-[10px] border ${stObj?.badgeColor || ""}`}>
                            {art.healthStatus}
                          </span>
                        </td>
                        <td className="p-4 font-mono">
                          <div className="text-slate-300">Reviewed: {art.lastReviewedDate}</div>
                          <div className={`mt-1 font-bold ${art.nextDueDate.includes("OVERDUE") ? "text-rose-400" : "text-emerald-400"}`}>
                            Due: {art.nextDueDate}
                          </div>
                        </td>
                        <td className="p-4 max-w-xs space-y-1">
                          {art.detectedDecaySignals.map((sig, i) => (
                            <div key={i} className="text-[11px] bg-slate-950/60 p-1.5 rounded border border-slate-800 font-mono text-slate-300">
                              {sig}
                            </div>
                          ))}
                        </td>
                        <td className="p-4 max-w-xs text-slate-200 font-mono text-[11px] bg-emerald-950/10 rounded-lg p-3 border border-emerald-500/20">
                          {art.assignedAction}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Volatility Bands Section */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-400" />
                Article Review Frequency by Volatility Band
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {articleReviewFrequencyBands.map(band => (
                  <div key={band.level} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-indigo-400">{band.level} VOLATILITY</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-emerald-300">
                        {band.reviewFrequency}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">{band.label}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{band.rationale}</p>
                    <div className="pt-2 border-t border-slate-800/80 space-y-1">
                      <span className="text-[11px] font-mono text-slate-400 font-bold block">Applies to:</span>
                      <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
                        {band.topics.map((t, idx) => (
                          <li key={idx}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 1.5: LIFECYCLE & FRESHNESS VELOCITY MODEL */}
        {activeTab === "lifecycle" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">CCMS-EQL v2.0 Governance</span>
              <h3 className="text-xl font-bold text-white mt-1">6-Stage Content Lifecycle Status &amp; 3-Tier Freshness Velocity Model</h3>
              <p className="text-xs text-slate-300 mt-1">
                Publishing an article is not the end of the editorial process. Every article progresses continuously through research, publication, monitoring, decay detection, refresh execution, and re-verification.
              </p>
            </div>

            {/* 6-Stage Lifecycle Cards */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="h-4 w-4 text-emerald-400" />
                The 6 Content Lifecycle Statuses (`DRAFT` to `RE-VERIFIED`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contentLifecycleStatusRegistry.map(st => (
                  <div key={st.statusId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-bold border ${st.badgeClass}`}>
                          {st.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-200 mt-3 leading-relaxed">{st.definition}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-800 space-y-1.5">
                      <span className="text-[11px] font-mono font-bold text-indigo-400 block">Required Operational Actions:</span>
                      <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                        {st.requiredActions.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Tier Freshness Velocity Model */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="h-4 w-4 text-rose-400" />
                Content Freshness Velocity &amp; Review Schedule
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {freshnessVelocityRegistry.map(vel => (
                  <div key={vel.velocityId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-bold border ${vel.badgeStyle}`}>
                          {vel.velocityId}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 font-bold">{vel.reviewFrequency}</span>
                      </div>
                      <h5 className="text-sm font-bold text-white mt-2">{vel.name}</h5>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{vel.mandate}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-800 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-slate-400 block">Classified Topics &amp; Examples:</span>
                      <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                        {vel.examples.map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DECAY CATEGORIES & SIGNALS */}
        {activeTab === "decay" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Multi-Signal Diagnostics</span>
              <h3 className="text-xl font-bold text-white mt-1">7 Primary + 8 Granular Content Decay Categories &amp; Detection Signals</h3>
              <p className="text-xs text-slate-300 mt-1">
                Never use a single metric to declare decay. Evaluate traffic, ranking, competitor shifts, outdated syntax, broken links, and PAA intent changes.
              </p>
            </div>

            {/* 7 CCMS-EQL Primary Categories */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-amber-400" />
                The 7 Primary Decay Forensics (`TECHNICAL, SEARCH, COMPETITIVE, INTENT, LINK, VISUAL, ENTITY`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {decayClassificationRegistry.map(cat => (
                  <div key={cat.categoryId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{cat.categoryId}]</span>
                      <h4 className="text-base font-bold text-white">{cat.categoryName}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{cat.definition}</p>
                    </div>
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="text-[11px] font-mono text-amber-400 font-bold">Detection Signals:</div>
                      <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                        {cat.detectionSignals.map((sig, i) => (
                          <li key={i}>{sig}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 text-xs text-emerald-300 font-mono bg-slate-950/60 p-3 rounded-lg border border-emerald-500/20">
                      <span className="font-bold">Remediation: </span>
                      {cat.remediationAction}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Sliders className="h-4 w-4 text-indigo-400" />
                8 Granular Diagnostic Workflows (`v1.0 + v2.0 Integration`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contentDecayCategoriesRegistry.map(cat => (
                <div key={cat.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">[{cat.id}]</span>
                    <h4 className="text-base font-bold text-white">{cat.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{cat.description}</p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="text-[11px] font-mono text-amber-400 font-bold">Detection Signals:</div>
                    <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                      {cat.detectionSignals.map((sig, i) => (
                        <li key={i}>{sig}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-xs text-emerald-300 font-mono bg-slate-950/60 p-3 rounded-lg border border-emerald-500/20">
                    <span className="font-bold">Remediation: </span>
                    {cat.remediationAction}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        )}

        {/* TAB 3: REFRESH TRIGGERS & SLA SCOPES */}
        {activeTab === "triggers" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Operational Triggers &amp; SLAs</span>
              <h3 className="text-xl font-bold text-white mt-1">11 Refresh Triggers &amp; 4-Tier Refresh Scope SLAs</h3>
              <p className="text-xs text-slate-300 mt-1">
                When an operational trigger fires, assign the article directly to one of our 4 standardized refresh scopes with locked SLAs.
              </p>
            </div>

            {/* 4 Refresh Scope SLAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {refreshTypesRegistry.map(rt => (
                <div key={rt.id} className="p-5 rounded-2xl bg-slate-900/80 border border-indigo-500/20 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="px-2.5 py-1 rounded font-mono font-bold text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {rt.name}
                    </span>
                    <div className="text-xs font-mono font-bold text-emerald-400 mt-2">{rt.sla}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{rt.scope}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono text-slate-400 font-bold block">Examples:</span>
                    <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
                      {rt.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-300 bg-slate-950 p-2 rounded">
                    <span className="font-bold text-amber-300">QA Gate: </span>
                    {rt.verificationRequirement}
                  </div>
                </div>
              ))}
            </div>

            {/* 11 Refresh Triggers Table */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400" />
                11 Codified Operational Refresh Triggers (`T01` to `T11`)
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-mono">
                      <th className="p-3.5">Trigger ID</th>
                      <th className="p-3.5">Operational Trigger Event</th>
                      <th className="p-3.5">Event Description</th>
                      <th className="p-3.5">Mandatory Action &amp; Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {refreshTriggersRegistry.map(tr => (
                      <tr key={tr.id} className="hover:bg-slate-900/60">
                        <td className="p-3.5 font-mono font-bold text-indigo-400">{tr.id}</td>
                        <td className="p-3.5 font-bold text-white">{tr.trigger}</td>
                        <td className="p-3.5 text-slate-300">{tr.description}</td>
                        <td className="p-3.5 font-mono text-emerald-300 bg-slate-950/40">{tr.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DEPRECATION & STATISTICS PROTOCOLS */}
        {activeTab === "protocols" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">Engineering &amp; Empirical Integrity</span>
              <h3 className="text-xl font-bold text-white mt-1">Technical Deprecation Audit &amp; Statistics Refresh Protocol</h3>
              <p className="text-xs text-slate-300 mt-1">
                Never silently retain outdated claims or deprecated syntax. Execute both protocols before signing off on any refresh.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Technical Deprecation Audit */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-rose-500/20 space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2 text-rose-400">
                  <ShieldAlert className="h-5 w-5" />
                  Technical Deprecation Check (8 Engineering Questions)
                </h4>
                <div className="space-y-3">
                  {technicalDeprecationAuditProtocol.map((dep, i) => (
                    <div key={dep.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                      <span className="text-xs font-mono font-bold text-rose-300">[{dep.id}] {dep.question}</span>
                      <p className="text-xs text-slate-300 leading-relaxed font-mono bg-slate-900 p-2 rounded">
                        <span className="font-bold text-amber-300">If Failed: </span>
                        {dep.actionIfFailed}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics Refresh Protocol */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/20 space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2 text-emerald-400">
                  <RefreshCw className="h-5 w-5" />
                  Statistics Refresh Protocol (6-Step Verification Matrix)
                </h4>
                <div className="space-y-3">
                  {statisticsRefreshProtocol.map((st, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                      <span className="text-xs font-mono font-bold text-emerald-300">{st.step}</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{st.requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Version Control & Deprecation Protocol */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-indigo-400">
                <ShieldAlert className="h-5 w-5" />
                Technical Version Control &amp; 7-Step Deprecation Remediation Protocol
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-400">Tracked Software Attributes</span>
                  <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside font-mono">
                    {versionControlAndDeprecationProtocol.trackedAttributes.map((attr, idx) => (
                      <li key={idx}>{attr}</li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-400">7-Step Deprecation Remediation Protocol</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {versionControlAndDeprecationProtocol.deprecationRemediationSteps.map((step, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                        <span className="text-xs font-mono font-bold text-indigo-300">{step.step}</span>
                        <p className="text-xs text-slate-300 leading-relaxed">{step.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Refresh Engines */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-teal-400">
                <RefreshCw className="h-5 w-5" />
                5 Specialized Content Refresh Subsystems (`Statistics, Pricing, Features, Code, Screenshots`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {specializedRefreshEnginesRegistry.map((eng, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-teal-300 block">{eng.engineName}</span>
                      <div className="mt-2 space-y-1.5">
                        <span className="text-[11px] font-mono text-slate-400 font-bold block">Verification Checks:</span>
                        <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                          {eng.checks.map((ck, i) => (
                            <li key={i}>{ck}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 text-xs text-emerald-300 font-mono bg-slate-950/60 p-3 rounded-lg border border-emerald-500/20">
                      <span className="font-bold">Remediation: </span>
                      {eng.remediation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: CONSOLIDATION & PRUNING GUARDRAILS */}
        {activeTab === "consolidation" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-amber-400">Inventory Architecture Governance</span>
              <h3 className="text-xl font-bold text-white mt-1">Content Consolidation (301) &amp; Strategic Pruning Guardrails</h3>
              <p className="text-xs text-slate-300 mt-1">
                Eliminate cannibalization and thin pages without sacrificing domain PageRank or internal link equity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Consolidation Workflow */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-indigo-500/20 space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2 text-indigo-400">
                  <GitMerge className="h-5 w-5" />
                  Consolidation Criteria &amp; 301 Redirect Workflow
                </h4>
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-300 block">When to Consolidate:</span>
                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {contentConsolidationAndPruningRules.consolidationCriteria.map((crit, idx) => (
                      <li key={idx}>{crit}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 pt-3 border-t border-slate-800">
                  <span className="text-xs font-mono font-bold text-emerald-400 block">5-Step Execution Workflow:</span>
                  <div className="space-y-2">
                    {contentConsolidationAndPruningRules.consolidationWorkflow.map((step, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800">
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pruning Guardrails */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-rose-500/20 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-white flex items-center gap-2 text-rose-400">
                    <Scissors className="h-5 w-5" />
                    Strategic Content Pruning Criteria (`410 / 301`)
                  </h4>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-300 block">Strict Removal Conditions:</span>
                    <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                      {contentConsolidationAndPruningRules.pruningCriteria.map((crit, idx) => (
                        <li key={idx}>{crit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/40 text-xs font-mono text-rose-200 leading-relaxed mt-4">
                  <span className="font-bold block text-rose-300 mb-1">MANDATORY GUARDRAIL:</span>
                  {contentConsolidationAndPruningRules.pruningGuardrail}
                </div>
              </div>
            </div>

            {/* Cannibalization Engine & 10-Step Consolidation Workflow */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-indigo-400">
                <GitMerge className="h-5 w-5" />
                CCMS-EQL v2.0 Cannibalization Engine &amp; 10-Step Strategic Consolidation Workflow
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-400">Detection Signals</span>
                  <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                    {consolidationAndCannibalizationEngine.detectionSignals.map((sig, idx) => (
                      <li key={idx}>{sig}</li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-400">10-Step Execution Workflow</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {consolidationAndCannibalizationEngine.tenStepConsolidationWorkflow.map((step, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2 text-xs text-slate-300 font-mono">
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dependency Chain Registry */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-teal-400">
                <Sliders className="h-5 w-5" />
                Content Dependency Graph &amp; Ripple Maintenance Protocol (`Tier 1 to Tier 4`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {contentDependencyChainRegistry.map((chain, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-teal-300 block">{chain.tier}</span>
                      <h5 className="text-sm font-bold text-white mt-1">{chain.role}</h5>
                    </div>
                    <div className="pt-3 border-t border-slate-800/80 text-xs text-emerald-300 font-mono bg-slate-950/60 p-2.5 rounded border border-emerald-500/20">
                      <span className="font-bold">Rule: </span>
                      {chain.dependencyRule}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: UPDATE RECORD AUDIT LOG */}
        {activeTab === "logs" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Historical Accountability Registry</span>
              <h3 className="text-xl font-bold text-white mt-1">13-Field Update Record Audit Log (`Major &amp; Standard Refreshes`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Every meaningful update must log original dates, changes made, new sources, and live verifying author credentials.
              </p>
            </div>

            <div className="space-y-4">
              {updateRecordAuditLogRegistry.map(log => (
                <div key={log.slug} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <Link href={log.slug} className="text-base font-bold text-white hover:text-emerald-400 transition-colors">
                        {log.title}
                      </Link>
                      <span className="font-mono text-xs text-slate-400 block mt-0.5">{log.slug}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="px-2.5 py-1 rounded font-mono font-bold text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {log.updateType} REFRESH
                      </span>
                      <span className="px-2.5 py-1 rounded font-mono text-xs bg-slate-800 text-slate-300">
                        Updated: {log.newUpdateDate}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="bg-slate-950 p-3 rounded border border-slate-800">
                      <span className="text-slate-400 block">Original Published:</span>
                      <span className="font-bold text-white">{log.originalPublishDate}</span>
                    </div>
                    <div className="bg-slate-950 p-3 rounded border border-slate-800">
                      <span className="text-slate-400 block">Previous Update:</span>
                      <span className="font-bold text-white">{log.previousUpdateDate}</span>
                    </div>
                    <div className="bg-slate-950 p-3 rounded border border-slate-800">
                      <span className="text-slate-400 block">Verified &amp; Audited By:</span>
                      <span className="font-bold text-emerald-400">{log.liveVerifiedBy}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-300">Reason for Update:</span>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded border border-slate-800">
                      {log.reasonForUpdate}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-emerald-400">Key Changes Made:</span>
                      <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                        {log.keyChangesMade.map((ch, i) => (
                          <li key={i}>{ch}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-xs font-mono font-bold text-indigo-400 block">Entities &amp; Sources Injected:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {log.newEntitiesAdded.map((ent, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                              {ent}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs font-mono text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-between">
                        <span>New Tier-1 Sources: <strong className="text-white">{log.newSourcesAdded}</strong></span>
                        <span>Visuals Refreshed: <strong className={log.visualsRefreshed ? "text-emerald-400" : "text-slate-400"}>{log.visualsRefreshed ? "YES" : "NO"}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Retirement Decision Matrix */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-rose-400">
                <Scissors className="h-5 w-5" />
                Content Retirement Decision Matrix (`7 Evaluation Checks &amp; 5 Action Paths`)
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-400">7-Point Retirement Evaluation Checks</span>
                  <div className="space-y-2">
                    {contentRetirementDecisionMatrix.evaluationChecks.map((ck, i) => (
                      <div key={i} className="p-2.5 rounded bg-slate-950/60 border border-slate-800 text-xs text-slate-300 font-mono">
                        {ck}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-400">5 Strategic Action Paths</span>
                  <div className="space-y-2.5">
                    {contentRetirementDecisionMatrix.actionOptions.map((opt, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-amber-300">{opt.action}</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{opt.condition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: LIVE POST-REFRESH VERIFICATION */}
        {activeTab === "verification" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Evidentiary Forensic QA</span>
              <h3 className="text-xl font-bold text-white mt-1">14-Point Live Post-Refresh Forensic Verification Checklist</h3>
              <p className="text-xs text-slate-300 mt-1">
                Never mark a refresh complete without live verification. Inspect DOM, execute code syntax, verify TOC anchors, and capture screenshots.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {livePostRefreshVerificationChecklist.map((ver, i) => (
                <div key={ver.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{ver.id}] {ver.category}</span>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        REQUIRED
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">{ver.item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: MANDATORY CCMS GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Mandatory Content-Maintenance System Completion Gate</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verify all 16 lifecycle maintenance governance requirements before certifying institutional signoff.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedCount} of {mandatoryContentMaintenanceGateChecklist.length} Verified</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {completionPercentage}% CCMS Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryContentMaintenanceGateChecklist.map((gate, idx) => {
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

        {/* TAB 9: MANDATORY CCMS-EQL v2.0 SIGNOFF GATE (18 POINTS) */}
        {activeTab === "ccms-eql-gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-teal-400">Institutional Certification Gate</span>
                <h3 className="text-xl font-bold text-white mt-1">CCMS-EQL v2.0 Mandatory Signoff Gate (`CCMS-EQL-01 to CCMS-EQL-18`)</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verify all 18 enterprise content maintenance &amp; lifecycle governance checks before certifying publication or refresh completion.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedCcmsEqlCount} of {mandatoryCcmsEqlSignoffGate.length} Verified</span>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                  ccmsEqlCompletionPercentage === 100
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                }`}>
                  {ccmsEqlCompletionPercentage}% CCMS-EQL Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryCcmsEqlSignoffGate.map((item, idx) => {
                const isChecked = checkedCcmsEqlItems[item.id] || false;
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCcmsEqlItem(item.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                      isChecked
                        ? "bg-teal-950/20 border-teal-500/30 text-white"
                        : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                      isChecked
                        ? "bg-teal-500 border-teal-400 text-slate-950 font-bold"
                        : "border-slate-700 bg-slate-950"
                    }`}>
                      {isChecked && <CheckCircle2 className="h-3.5 w-3.5" />}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-teal-400">
                          [{item.id}] {item.category}
                        </span>
                        {isChecked && (
                          <span className="text-[10px] font-mono bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded">
                            VERIFIED
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed">{item.item}</p>
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
