"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Award,
  Search,
  Layers,
  Compass,
  FileText,
  ShieldCheck,
  Activity,
  Eye,
  MonitorCheck,
  RefreshCw,
  Layout,
  Terminal,
  FileCheck,
  AlertCircle,
  HelpCircle,
  Code2,
  Sliders,
  CheckSquare
} from "lucide-react";
import {
  completeQALoopRegistry,
  siteWideRouteInventory,
  imageVerificationRules,
  visualAndFunctionalAuditMatrix,
  regressionAuditMatrix,
  defectClassificationMatrix,
  evidenceBasedCompletionLedger
} from "@/lib/data/enterprise-qa-verification-system";

export default function EnterpriseQaVerificationCommandCenterPage() {
  const [activeTab, setActiveTab] = useState<
    "loop" | "routes" | "images" | "visual" | "regression" | "defects" | "evidence"
  >("loop");

  const [searchQuery, setSearchQuery] = useState("");
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({
    "QA-VERIFY-01": true,
    "QA-VERIFY-02": true,
    "QA-VERIFY-03": true,
    "QA-VERIFY-04": true
  });

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalEvidenceTasks = evidenceBasedCompletionLedger.length;
  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / totalEvidenceTasks) * 100);

  const filteredRoutes = siteWideRouteInventory.filter(
    (r) =>
      r.routePath.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.routeType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.expectedBehavior.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 selection:bg-rose-500 selection:text-white font-sans">
      {/* HEADER / NAVIGATION BAR */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  EQVS-EQL v1.0
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Principal QA Architecture &amp; Release Verification
                </span>
              </div>
              <h1 className="text-lg font-bold text-white tracking-tight">
                TechlumeAI QA, Visual Regression &amp; Site-Wide Verification Command Center
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/admin/content-governance"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              ECGIS v2.0
            </Link>
            <Link
              href="/admin/measurement-intelligence"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              EMIS-EQL v2.0
            </Link>
            <Link
              href="/admin/content-maintenance"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              CCMS-EQL v2.0
            </Link>
            <Link
              href="/admin/user-journey-growth"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              EUJG-CRO v1.0
            </Link>
            <Link
              href="/admin/enterprise-performance"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              EPCS-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-security"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              ESPD-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-accessibility"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              EADS-EQL v1.0
            </Link>
            <Link
              href="/admin/editorial-operating-system"
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-lg shadow-indigo-600/20"
            >
              <Award className="h-3.5 w-3.5" />
              15-Phase OS
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/30 border border-indigo-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-bold tracking-wide uppercase flex items-center gap-1.5">
                  <MonitorCheck className="h-3.5 w-3.5" />
                  Non-Negotiable Verification Principle
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                NEVER TRUST YOUR OWN COMPLETION CLAIM. OPEN THE LIVE SITE.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                A code change is <strong>NOT</strong> proof of a completed feature. A successful build is <strong>NOT</strong> proof that the website works. A completed task list is <strong>NOT</strong> proof that the live site is correct. Only verified implementation (`Crawl &rarr; Inspect &rarr; Test &rarr; Desktop/Mobile &rarr; Screenshot &rarr; Fix &rarr; Re-test`) is considered complete.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="px-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center min-w-[140px]">
                <span className="text-xs font-mono text-slate-400">Evidence Signoff</span>
                <span className="text-2xl font-black text-indigo-400 mt-0.5">{completionPercentage}%</span>
                <span className="text-[10px] text-slate-500 mt-0.5">({completedCount} / {totalEvidenceTasks} Verified)</span>
              </div>
              <button
                onClick={() => setActiveTab("evidence")}
                className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs tracking-wide uppercase shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
              >
                <FileCheck className="h-4 w-4" />
                Inspect Evidence Ledger
              </button>
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab("loop")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "loop"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <RefreshCw className="h-4 w-4" />
            14-Step QA Loop ({completeQALoopRegistry.length})
          </button>
          <button
            onClick={() => setActiveTab("routes")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "routes"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layout className="h-4 w-4" />
            Route Inventory ({siteWideRouteInventory.length})
          </button>
          <button
            onClick={() => setActiveTab("images")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "images"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Eye className="h-4 w-4" />
            14-Point Image Verification
          </button>
          <button
            onClick={() => setActiveTab("visual")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "visual"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Sliders className="h-4 w-4" />
            Visual &amp; Functional Audit ({visualAndFunctionalAuditMatrix.length})
          </button>
          <button
            onClick={() => setActiveTab("regression")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "regression"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            Regression Matrix ({regressionAuditMatrix.length})
          </button>
          <button
            onClick={() => setActiveTab("defects")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "defects"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            Defect Classification ({defectClassificationMatrix.length})
          </button>
          <button
            onClick={() => setActiveTab("evidence")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "evidence"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            Evidence Signoff Ledger
          </button>
        </div>

        {/* TAB 1: COMPLETE 14-STEP QA LOOP */}
        {activeTab === "loop" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Institutional Progression</span>
              <h3 className="text-xl font-bold text-white mt-1">The Complete 14-Step QA &amp; Closed-Loop Verification Lifecycle</h3>
              <p className="text-xs text-slate-300 mt-1">
                Every release progresses sequentially from planning through live browser inspection, multi-viewport emulations, defect remediation, and final evidence-based certification.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completeQALoopRegistry.map((step) => (
                <div key={step.stepOrder} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 font-mono font-bold flex items-center justify-center text-sm">
                        {step.stepOrder}
                      </span>
                      <h4 className="text-base font-bold text-white">{step.stageName}</h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-indigo-300 font-mono text-[10px] font-bold">
                      {step.evidenceType}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs pt-1">
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Required Engineering Action:</span>
                      <p className="text-slate-200 mt-0.5 leading-relaxed font-medium">{step.actionRequired}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 mt-2">
                      <span className="text-indigo-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-indigo-400" /> Verification Mandate:
                      </span>
                      <p className="text-slate-300 mt-1 font-mono text-[11px]">{step.verificationMandate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SITE-WIDE ROUTE INVENTORY */}
        {activeTab === "routes" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-indigo-400">Route Inventory &amp; Crawl Audit</span>
                <h3 className="text-xl font-bold text-white mt-1">Site-Wide Route Inventory (`RTE-01 to RTE-08`)</h3>
                <p className="text-xs text-slate-300 mt-1">
                  We verify expected vs actual routes across static pages, dynamic article/category slugs, utility portals, and error handlers.
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter routes (`e.g., /articles, /contact`)..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all font-mono"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredRoutes.map((rte) => (
                <div key={rte.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
                        {rte.id}
                      </span>
                      <span className="text-base font-bold font-mono text-white">{rte.routePath}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
                        {rte.routeType}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> {rte.lastVerifiedStatus}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Expected Rendered Behavior:</span>
                      <p className="text-slate-200 mt-1 leading-relaxed font-medium">{rte.expectedBehavior}</p>
                    </div>
                    <div>
                      <span className="text-indigo-400 font-bold font-mono uppercase text-[10px]">Critical Elements Verified During Live Crawl:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {rte.criticalElementsToVerify.map((elem, idx) => (
                          <span key={idx} className="px-2 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
                            {elem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: 14-POINT IMAGE VERIFICATION LEDGER */}
        {activeTab === "images" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Asset Integrity</span>
              <h3 className="text-xl font-bold text-white mt-1">14-Point Image &amp; Architecture Diagram Verification (`IMG-01 to IMG-14`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Do not assume that because an image exists in the code, it is visible and correct on the actual page. Every image must be checked for valid URLs, professional cropping, zero stretching, detailed ALT text, and zero CLS layout shifts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {imageVerificationRules.map((img) => (
                <div key={img.ruleId} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
                        {img.ruleId}
                      </span>
                      <h4 className="text-sm font-bold text-white">{img.checkpointName}</h4>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Verification Question:</span>
                    <p className="text-slate-200 mt-0.5 font-medium leading-relaxed">{img.verificationQuestion}</p>
                  </div>
                  <div>
                    <span className="text-red-400 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" /> Failure Symptom:
                    </span>
                    <p className="text-slate-300 mt-0.5 font-mono text-[11px] bg-slate-950 p-2 rounded border border-slate-800">{img.failureSymptom}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/30">
                    <span className="text-indigo-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Remediation Action:
                    </span>
                    <p className="text-white mt-1 font-medium leading-relaxed">{img.remediationAction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: VISUAL & FUNCTIONAL AUDIT MATRIX */}
        {activeTab === "visual" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Render &amp; Interaction Inspection</span>
              <h3 className="text-xl font-bold text-white mt-1">Visual Quality &amp; Functional Testing Matrix (`VIS-01 to RUN-01`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                We inspect live browser renderings for empty boxes, typography hierarchy, Table of Contents click-scrolling, touch navigation, and DevTools runtime health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visualAndFunctionalAuditMatrix.map((vis) => (
                <div key={vis.checkId} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
                        {vis.checkId}
                      </span>
                      <h4 className="text-sm font-bold text-white">{vis.itemTitle}</h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-indigo-300 font-mono text-[10px] font-bold">
                      {vis.category}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Verification Requirement:</span>
                    <p className="text-slate-200 mt-1 leading-relaxed font-medium">{vis.verificationRequirement}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-400 font-mono text-[10px] uppercase font-bold">Inspection Method:</span>
                    <span className="text-indigo-400 font-mono text-[11px] font-bold">{vis.inspectionMethod}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: REGRESSION AUDIT MATRIX */}
        {activeTab === "regression" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Regression Governance</span>
              <h3 className="text-xl font-bold text-white mt-1">5-Domain Regression Testing Matrix (`REG-VIS to REG-PERF`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                A change intended for one component must not silently break unrelated pages. We mandate strict regression checks across Visual, Content, SEO, Accessibility, and Performance domains after every major PR.
              </p>
            </div>

            <div className="space-y-4">
              {regressionAuditMatrix.map((reg) => (
                <div key={reg.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
                        {reg.id}
                      </span>
                      <h4 className="text-base font-bold text-white">{reg.regressionDomain}</h4>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Triggering Event:</span>
                      <p className="text-slate-200 mt-1 leading-relaxed font-medium bg-slate-950 p-3 rounded border border-slate-800">{reg.triggerEvent}</p>
                    </div>
                    <div>
                      <span className="text-indigo-400 font-bold font-mono uppercase text-[10px]">Mandatory Verification Checklist:</span>
                      <ul className="list-disc list-inside space-y-1.5 text-slate-300 mt-1">
                        {reg.mandatoryVerificationItems.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex flex-col justify-between">
                      <div>
                        <span className="text-indigo-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Pass Criteria / Gate Exit:
                        </span>
                        <p className="text-white mt-2 font-mono text-xs font-bold leading-relaxed">{reg.passCriteria}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: DEFECT CLASSIFICATION MATRIX */}
        {activeTab === "defects" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Severity &amp; SLA Matrix</span>
              <h3 className="text-xl font-bold text-white mt-1">Defect Classification &amp; Prioritization Ledger</h3>
              <p className="text-xs text-slate-300 mt-1">
                We prioritize all discovered discrepancies based on formula: <strong>IMPACT + SEVERITY + USER VISIBILITY + BUSINESS IMPORTANCE</strong>.
              </p>
            </div>

            <div className="space-y-4">
              {defectClassificationMatrix.map((def, index) => {
                const badgeColor =
                  def.severityLevel === "CRITICAL"
                    ? "bg-rose-500/20 border-rose-500 text-rose-300"
                    : def.severityLevel === "HIGH"
                    ? "bg-amber-500/20 border-amber-500 text-amber-300"
                    : def.severityLevel === "MEDIUM"
                    ? "bg-indigo-500/20 border-indigo-500 text-indigo-300"
                    : "bg-slate-800 border-slate-700 text-slate-300";

                return (
                  <div key={index} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className={`px-3 py-1 rounded font-mono text-xs font-extrabold border ${badgeColor}`}>
                        {def.severityLevel} SEVERITY
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">SLA: {def.slaRemediationWindow}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                      <div>
                        <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Defect Definition:</span>
                        <p className="text-slate-200 mt-0.5 leading-relaxed font-medium">{def.definition}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Business &amp; User Impact:</span>
                        <p className="text-slate-300 mt-0.5 leading-relaxed">{def.businessAndUserImpact}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 7: EVIDENCE-BASED COMPLETION LEDGER */}
        {activeTab === "evidence" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-indigo-400">Evidence Certification Bar</span>
                <h3 className="text-xl font-bold text-white mt-1">Evidence-Based Completion Ledger &amp; Signoff Gate</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Never say: &quot;Everything is complete&quot; unless the actual page was opened, functionality tested, visual result inspected, and evidence recorded.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 shrink-0">
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-400">Signoff Completion</div>
                  <div className="text-xl font-black text-white font-mono">{completionPercentage}% Verified</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-bold font-mono">
                  {completedCount}/{totalEvidenceTasks}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-rose-500 transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>

            <div className="space-y-4">
              {evidenceBasedCompletionLedger.map((task) => {
                const isChecked = !!completedItems[task.taskId];
                return (
                  <div
                    key={task.taskId}
                    onClick={() => toggleItem(task.taskId)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isChecked
                        ? "bg-indigo-950/20 border-indigo-500/50 shadow-lg shadow-indigo-500/5"
                        : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="mt-1 shrink-0">
                      <div
                        className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                          isChecked
                            ? "bg-indigo-600 border-indigo-500 text-white"
                            : "bg-slate-950 border-slate-700 text-transparent"
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-indigo-300 font-mono text-xs font-bold">
                            {task.taskId}
                          </span>
                          <span className="text-base font-bold text-white">
                            {task.taskTitle}
                          </span>
                        </div>
                        {isChecked && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" /> Certified Complete (`Evidence Logged`)
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 font-mono bg-slate-950 p-2 rounded border border-slate-800">
                        <strong>Target URL / Route:</strong> {task.targetUrlOrComponent}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                        <div>
                          <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Test Performed &amp; Method:</span>
                          <p className="text-slate-200 mt-0.5">{task.testPerformed}</p>
                        </div>
                        <div>
                          <span className="text-indigo-400 font-semibold font-mono uppercase text-[10px]">Verified Result &amp; Remediation:</span>
                          <p className="text-slate-300 mt-0.5">{task.issuesFoundDescription}</p>
                        </div>
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
