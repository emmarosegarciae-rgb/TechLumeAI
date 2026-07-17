"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  coreWebVitalsRegistry,
  pageTypePerformanceAuditMatrix,
  javascriptAndReactOptimizationLedger,
  assetAndCachingGovernanceMatrix,
  performanceBudgetAlertLedger,
  rootCauseInvestigationPathway,
  scalabilityAndBuildPerformanceLedger,
  mandatoryEpcsEqlSignoffGate
} from "@/lib/data/enterprise-performance-system";
import {
  Zap,
  Gauge,
  Cpu,
  Server,
  Layers,
  Database,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Activity,
  BarChart3,
  ExternalLink,
  Search,
  Settings,
  RefreshCw,
  TrendingUp
} from "lucide-react";

export default function EnterprisePerformanceAndScalabilityPage() {
  const [activeTab, setActiveTab] = useState<
    "cwv" | "pages" | "js-react" | "assets-cache" | "budgets" | "pathway" | "scalability" | "gate"
  >("cwv");

  const [checkedGateItems, setCheckedGateItems] = useState<Record<string, boolean>>(() =>
    mandatoryEpcsEqlSignoffGate.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const toggleGateItem = (id: string) => {
    setCheckedGateItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedGateItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / mandatoryEpcsEqlSignoffGate.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 font-sans">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                TechlumeAI Performance, CWV, &amp; Scalability Architecture System
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  EPCS-EQL v1.0
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                FAST &rarr; RESPONSIVE &rarr; STABLE &rarr; SCALABLE &rarr; SEARCH-FRIENDLY &rarr; USER-FRIENDLY. Do not choose between speed and quality. Engineer both.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/admin/content-governance"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
              ECGIS v2.0
            </Link>
            <Link
              href="/admin/measurement-intelligence"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <BarChart3 className="h-3.5 w-3.5 text-indigo-400" />
              EMIS-EQL v2.0
            </Link>
            <Link
              href="/admin/user-journey-growth"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              EUJG-CRO v1.0
            </Link>
            <Link
              href="/admin/content-maintenance"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              CCMS-EQL v2.0
            </Link>
            <Link
              href="/admin/visual-verification-production"
              className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
              Visual QA
            </Link>
            <Link
              href="/admin/editorial-portfolio-intelligence"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              Portfolio IQ
            </Link>
            <Link
              href="/admin/editorial-operating-system"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              15-Phase OS
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
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab("cwv")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "cwv"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Gauge className="h-4 w-4" />
            Core Web Vitals (`CWV`)
          </button>
          <button
            onClick={() => setActiveTab("pages")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "pages"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FileText className="h-4 w-4" />
            11-Page Audit Foundation
          </button>
          <button
            onClick={() => setActiveTab("js-react")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "js-react"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Cpu className="h-4 w-4" />
            JS &amp; React Optimization
          </button>
          <button
            onClick={() => setActiveTab("assets-cache")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "assets-cache"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Server className="h-4 w-4" />
            Assets &amp; Caching Governance
          </button>
          <button
            onClick={() => setActiveTab("budgets")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "budgets"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Activity className="h-4 w-4" />
            Performance Budgets
          </button>
          <button
            onClick={() => setActiveTab("pathway")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "pathway"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Search className="h-4 w-4" />
            Diagnostic Investigation
          </button>
          <button
            onClick={() => setActiveTab("scalability")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "scalability"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Database className="h-4 w-4" />
            Large Content Scale
          </button>
          <button
            onClick={() => setActiveTab("gate")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "gate"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            Mandatory EPCS-EQL Gate (15 Items)
          </button>
        </div>

        {/* TAB 1: CORE WEB VITALS REGISTRY */}
        {activeTab === "cwv" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Core Web Vitals Engineering</span>
              <h3 className="text-xl font-bold text-white mt-1">LCP, INP, CLS, &amp; TTFB Architecture Targets</h3>
              <p className="text-xs text-slate-300 mt-1">
                We do not optimize for laboratory scores alone. We optimize for real users, on real networks, across real devices. Every Core Web Vital has strict engineering thresholds and exact Next.js App Router remediation rules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreWebVitalsRegistry.map((vital) => (
                <div key={vital.metric} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-mono font-extrabold text-indigo-400">{vital.metric}</span>
                        <h4 className="text-sm font-bold text-white">{vital.fullName}</h4>
                      </div>
                      <span className="px-2.5 py-1 rounded font-mono text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        Target: {vital.targetGood}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-[11px] font-mono py-1">
                      <div className="p-2 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-300">
                        <span className="block font-bold">Good:</span>
                        {vital.targetGood}
                      </div>
                      <div className="p-2 rounded bg-amber-950/30 border border-amber-500/30 text-amber-300">
                        <span className="block font-bold">Needs Work:</span>
                        {vital.targetNeedsImprovement}
                      </div>
                      <div className="p-2 rounded bg-rose-950/30 border border-rose-500/30 text-rose-300">
                        <span className="block font-bold">Poor:</span>
                        {vital.targetPoor}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-mono font-bold text-rose-400 block">Primary Root Causes:</span>
                      <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
                        {vital.primaryRootCauses.map((rc, i) => (
                          <li key={i}>{rc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                    <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-slate-200">
                      <span className="text-indigo-400 font-mono font-bold block mb-1">Next.js App Router Remediation Mandate:</span>
                      {vital.nextjsRemediationMandate}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      <strong className="text-amber-400">Engineering Impact:</strong> {vital.engineeringImpact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 11-PAGE TYPE PERFORMANCE AUDIT FOUNDATION */}
        {activeTab === "pages" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Page Architecture Foundation</span>
              <h3 className="text-xl font-bold text-white mt-1">11 Core Page Types &amp; Rendering Strategy Matrix (`AUD-01 to AUD-11`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Every major page type requires a specific rendering strategy (`SSG, ISR, RSC, or Hybrid CSR`), strict JS/LCP budgets, and adherence to tailored optimization checklists.
              </p>
            </div>

            <div className="space-y-4">
              {pageTypePerformanceAuditMatrix.map((pg) => (
                <div key={pg.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-400">[{pg.id}]</span>
                      <h4 className="text-base font-bold text-white">{pg.pageType}</h4>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-bold">
                        Strategy: {pg.targetRenderingStrategy}
                      </span>
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                        LCP Budget: ≤ {pg.targetLcpBudgetMs}ms
                      </span>
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800">
                        JS Budget: ≤ {pg.targetJsBudgetKb}KB
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1.5">
                      <span className="text-emerald-400 font-mono font-bold block">Mandatory Optimization Checklist:</span>
                      <ul className="list-disc list-inside space-y-1 text-slate-300">
                        {pg.mandatoryOptimizationChecklist.map((chk, i) => (
                          <li key={i}>{chk}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-300 flex flex-col justify-center">
                      <span className="text-[11px] font-mono font-bold uppercase block mb-1">Common Failure Trap to Avoid:</span>
                      <p className="leading-relaxed font-sans">{pg.commonFailureTrap}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: JS & REACT/NEXT.JS OPTIMIZATION */}
        {activeTab === "js-react" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Main Thread Preservation</span>
              <h3 className="text-xl font-bold text-white mt-1">JavaScript Budget, React Optimization, &amp; RSC Splitting Ledger (`OPT-01 to OPT-06`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                We remove unnecessary client-side complexity. We use optimization techniques only when justified by actual performance evidence (`Zero premature abstraction or client bloat`).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {javascriptAndReactOptimizationLedger.map((opt) => (
                <div key={opt.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{opt.id}]</span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {opt.optimizationCategory}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/30 text-xs text-rose-300">
                        <span className="font-mono font-bold block mb-1">Anti-Pattern Example (`Prohibited`):</span>
                        {opt.antiPatternExample}
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300">
                        <span className="font-mono font-bold block mb-1">Optimized Engineering Pattern (`Required`):</span>
                        {opt.optimizedEngineeringPattern}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-800 text-[11px] font-mono">
                    <div className="text-slate-300">
                      <strong className="text-amber-400">Empirical Proof Condition:</strong> {opt.empiricalProofCondition}
                    </div>
                    <div className="text-indigo-300 font-bold">
                      Performance Savings Estimate: {opt.performanceSavingsEstimate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ASSETS & CACHING GOVERNANCE MATRIX */}
        {activeTab === "assets-cache" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">CDN &amp; Edge Delivery</span>
              <h3 className="text-xl font-bold text-white mt-1">Asset Optimization, Caching Headers, &amp; Quality vs. Speed Rules</h3>
              <p className="text-xs text-slate-300 mt-1">
                We balance freshness and performance without ever sacrificing visual quality (`Do not compress images so aggressively that architecture diagrams look unprofessional`).
              </p>
            </div>

            <div className="space-y-4">
              {assetAndCachingGovernanceMatrix.map((ast, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <h4 className="text-base font-bold text-white">{ast.assetClass}</h4>
                    <span className="px-3 py-1 rounded font-mono text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 self-start">
                      Header: {ast.cacheControlHeader}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-indigo-400 font-mono font-bold block">Optimization Protocol:</span>
                      <p className="text-slate-300 leading-relaxed font-sans">{ast.optimizationProtocol}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-emerald-400 font-mono font-bold block">Edge CDN Behavior:</span>
                      <p className="text-slate-300 leading-relaxed font-sans">{ast.edgeCdnBehavior}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-amber-400 font-mono font-bold block">Quality vs. Speed Rule:</span>
                      <p className="text-white font-semibold leading-relaxed font-sans">{ast.qualityVsSpeedRule}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PERFORMANCE BUDGETS & ALERTS */}
        {activeTab === "budgets" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Regression Warning System</span>
              <h3 className="text-xl font-bold text-white mt-1">Institutional Performance Budgets &amp; Automated CI Alert Ledger (`BUD-01 to BUD-05`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                A budget is a warning system. It triggers deep engineering investigation before gradual bloat degrades Core Web Vitals or perceived load velocity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceBudgetAlertLedger.map((bud) => (
                <div key={bud.metricId} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{bud.metricId}]</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        Limit: {bud.budgetLimit}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">{bud.budgetName}</h4>
                    <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/30 text-xs text-amber-300 font-mono">
                      <strong className="block font-bold">Warning Threshold:</strong>
                      {bud.warningThreshold}
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-800 text-xs">
                    <div className="text-slate-300">
                      <strong className="text-rose-400 font-mono">Violation Action:</strong> {bud.violationAction}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      <strong className="text-indigo-400">Monitoring Tool:</strong> {bud.monitoringTool}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: DIAGNOSTIC INVESTIGATION PATHWAY */}
        {activeTab === "pathway" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Scientific Troubleshooting</span>
              <h3 className="text-xl font-bold text-white mt-1">Performance Failure Investigation Pathway (`6-Layer Isolation`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                When a page becomes slow, do not guess. Follow our exact diagnostic progression: `SYMPTOM &rarr; MEASUREMENT &rarr; ROOT CAUSE &rarr; FIX &rarr; RE-TEST &rarr; LIVE VERIFICATION`.
              </p>
            </div>

            <div className="space-y-4">
              {rootCauseInvestigationPathway.map((diag) => (
                <div key={diag.stepOrder} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 font-mono font-bold flex items-center justify-center text-sm">
                        {diag.stepOrder}
                      </span>
                      <h4 className="text-base font-bold text-white">{diag.layer}</h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-rose-400 font-mono font-bold block">Diagnostic Symptom:</span>
                      <p className="text-slate-300 font-sans leading-relaxed">{diag.diagnosticSymptom}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-indigo-400 font-mono font-bold block">Measurement Command / Tool:</span>
                      <p className="text-slate-300 font-mono text-[11px] leading-relaxed break-all">{diag.measurementCommandOrTool}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 space-y-1">
                      <span className="font-mono font-bold block">Remediation Action (`Fix`):</span>
                      <p className="font-sans leading-relaxed">{diag.remediationAction}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: LARGE CONTENT SCALE & BUILD PERFORMANCE */}
        {activeTab === "scalability" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Enterprise Scalability</span>
              <h3 className="text-xl font-bold text-white mt-1">Large Content Scale &amp; Build Performance Ledger (`SCL-01 to SCL-05`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                As TechlumeAI expands from dozens to thousands of technical articles, we ensure build times, sitemaps, search indexing, and image pipelines never degrade or choke deployment pipelines.
              </p>
            </div>

            <div className="space-y-4">
              {scalabilityAndBuildPerformanceLedger.map((scl) => (
                <div key={scl.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="border-b border-slate-800 pb-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">[{scl.id}]</span>
                    <h4 className="text-base font-bold text-white mt-0.5">{scl.scaleChallenge}</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <span className="text-indigo-400 font-mono font-bold block">Architectural Solution (`Design`):</span>
                      <p className="text-slate-300 leading-relaxed font-sans">{scl.architecturalSolution}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 space-y-1.5">
                      <span className="font-mono font-bold block">Build Time &amp; Runtime Mitigation:</span>
                      <p className="leading-relaxed font-sans">{scl.buildTimeMitigation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: MANDATORY 15-POINT EPCS-EQL COMPLETION GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Mandatory Performance, CWV, &amp; Scalability Completion Gate (`EPCS-EQL v1.0`)</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verify all 15 institutional performance and scalability standards across server response, rendering strategy, Core Web Vitals, asset scale, and live verification before certifying signoff.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedCount} of {mandatoryEpcsEqlSignoffGate.length} Verified</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {completionPercentage}% EPCS-EQL Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryEpcsEqlSignoffGate.map((gate, idx) => {
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
                      <div className="mt-2 pt-2 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                        Standard: <span className="text-indigo-300">{gate.verificationStandard}</span>
                      </div>
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
