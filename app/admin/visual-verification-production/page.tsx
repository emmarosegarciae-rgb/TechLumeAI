"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  vvpCorePhilosophy,
  productionPhasesRegistry,
  visualEditorialOpportunities,
  imageTechnicalQaChecklist,
  altTextGovernance,
  seoGeoEeatQualityControls,
  livePageVerificationSequence,
  screenshotVerificationMatrix,
  visualDefectDetectionRegistry,
  finalArticleQualityGate
} from "@/lib/data/visual-verification-system";
import {
  CheckSquare,
  Eye,
  Camera,
  ShieldAlert,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  Search,
  Award,
  Zap,
  Monitor,
  Smartphone
} from "lucide-react";

export default function VisualVerificationProductionPage() {
  const [activeTab, setActiveTab] = useState<
    "philosophy" | "phases" | "visuals" | "imageqa" | "seogeo" | "livecrawl" | "defects" | "gate"
  >("philosophy");

  const [checkedGateItems, setCheckedGateItems] = useState<Record<string, boolean>>(() =>
    finalArticleQualityGate.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const toggleGateItem = (id: string) => {
    setCheckedGateItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedGateItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / finalArticleQualityGate.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                TechlumeAI End-to-End Visual, Technical &amp; Live-Verification Quality System
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  VVP-EQS v1.0
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                13 Production phases, custom SVG visual governance, live DOM crawling (`15 stages`), 8-viewport screenshot forensics, and 22-point signoff gate.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/admin/geo-ai-search"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              GEO &amp; AI Search
            </Link>
            <Link
              href="/admin/competitive-intelligence"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              Competitive Intelligence
            </Link>
            <Link
              href="/admin/measurement-intelligence"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              Measurement Intelligence
            </Link>
            <Link
              href="/admin/editorial-production"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-lg shadow-emerald-600/20"
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
            onClick={() => setActiveTab("philosophy")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "philosophy"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Award className="h-4 w-4" />
            Core Philosophy &amp; Standards
          </button>
          <button
            onClick={() => setActiveTab("phases")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "phases"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            13 Production Phases
          </button>
          <button
            onClick={() => setActiveTab("visuals")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "visuals"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            Visual Editorial System (`11 Assets`)
          </button>
          <button
            onClick={() => setActiveTab("imageqa")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "imageqa"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Monitor className="h-4 w-4" />
            Hero &amp; Image Technical QA (`11 Checks`)
          </button>
          <button
            onClick={() => setActiveTab("seogeo")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "seogeo"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            SEO, GEO &amp; E-E-A-T Controls
          </button>
          <button
            onClick={() => setActiveTab("livecrawl")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "livecrawl"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Smartphone className="h-4 w-4" />
            Live Crawl (`15 Stages`) &amp; Screenshots
          </button>
          <button
            onClick={() => setActiveTab("defects")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "defects"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <ShieldAlert className="h-4 w-4" />
            17 Visual Defect Forensics
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
            Mandatory Signoff Gate (`22 Items`)
          </button>
        </div>

        {/* TAB 1: CORE PHILOSOPHY & STANDARDS */}
        {activeTab === "philosophy" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Institutional Mandate</span>
              <h3 className="text-xl font-bold text-white mt-1">An Article is Not Complete When the Text is Generated</h3>
              <p className="text-xs text-slate-300 mt-1">
                We do not operate a WRITE &rarr; PUBLISH &rarr; FORGET workflow. We operate a complete, rigorous, forensic verification system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vvpCorePhilosophy.map(ph => (
                <div key={ph.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-emerald-400">[{ph.id}]</span>
                    <h4 className="text-lg font-bold text-white">{ph.name}</h4>
                    <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                      <span className="font-bold text-white block mb-0.5">Core Sequence Formula:</span>
                      {ph.formula}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{ph.philosophy}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-xs font-mono text-indigo-200 mt-4">
                    <span className="font-bold block text-indigo-300 mb-0.5">EXECUTION MANDATE:</span>
                    {ph.executionMandate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 13 PRODUCTION PHASES */}
        {activeTab === "phases" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Sequential Execution</span>
              <h3 className="text-xl font-bold text-white mt-1">13 Production Phases (`From Topic Validation to Live QA`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Every phase must be executed systematically. No phase may be skipped or abbreviated.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productionPhasesRegistry.map((ph, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 block">{ph.phaseNumber}</span>
                    <h4 className="text-base font-bold text-white">{ph.phaseName}</h4>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">{ph.objective}</p>
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-mono font-bold text-indigo-300 block">KEY CHECKPOINTS:</span>
                    <ul className="space-y-1 text-xs font-mono text-slate-400">
                      {ph.keyCheckpoints.map((chk, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{chk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: VISUAL EDITORIAL SYSTEM */}
        {activeTab === "visuals" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Visual Engineering Opportunities</span>
              <h3 className="text-xl font-bold text-white mt-1">Visual Editorial Opportunities (`8 Specialized Asset Types`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Every article must be evaluated for visual opportunities. Visuals must clarify complex data packets, memory structures, and comparisons (`zero decorative filler`).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {visualEditorialOpportunities.map((vo, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-300 block">{vo.assetType}</span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{vo.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: HERO & IMAGE TECHNICAL QA */}
        {activeTab === "imageqa" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Image Forensics &amp; ALT Governance</span>
              <h3 className="text-xl font-bold text-white">Hero Image Standard &amp; 11-Point Technical QA Checklist</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No article is complete while even one important image is broken or visually defective. Inspect every asset across 11 technical criteria.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/40 text-xs font-mono text-rose-200">
                  <span className="font-bold text-rose-300 block mb-1">BANNED ALT TEXT (`Anti-Pattern`):</span>
                  {altTextGovernance.badExample}
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-xs font-mono text-emerald-200">
                  <span className="font-bold text-emerald-300 block mb-1">PRISTINE ALT TEXT (`Best Practice`):</span>
                  {altTextGovernance.goodExample}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {imageTechnicalQaChecklist.map((qa, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400">[{qa.id}]</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      MANDATORY QA
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">{qa.check}</h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{qa.verification}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SEO, GEO & E-E-A-T CONTROLS */}
        {activeTab === "seogeo" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Multi-Dimensional Quality Governance</span>
              <h3 className="text-xl font-bold text-white mt-1">SEO (`14 Checks`), GEO (`9 Checks`), and E-E-A-T Audit Controls</h3>
              <p className="text-xs text-slate-300 mt-1">
                The article must be understandable to both human engineering decision-makers and AI retrieval systems (`Perplexity, ChatGPT Search, Claude`).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* SEO Controls */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Search className="h-5 w-5" />
                  <h4 className="text-base font-bold text-white font-mono">SEO Quality Control</h4>
                </div>
                <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                  {seoGeoEeatQualityControls.seoChecks.map((chk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{chk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GEO Controls */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Sparkles className="h-5 w-5" />
                  <h4 className="text-base font-bold text-white font-mono">GEO Quality Control</h4>
                </div>
                <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                  {seoGeoEeatQualityControls.geoChecks.map((chk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{chk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* E-E-A-T Controls */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <Award className="h-5 w-5" />
                  <h4 className="text-base font-bold text-white font-mono">E-E-A-T Trust Control</h4>
                </div>
                <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                  {seoGeoEeatQualityControls.eeatChecks.map((chk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{chk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: LIVE CRAWL & SCREENSHOTS */}
        {activeTab === "livecrawl" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Live URL Forensics</span>
              <h3 className="text-xl font-bold text-white">15-Stage Full Page Crawl Sequence &amp; 8-Shot Screenshot Matrix</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                After implementation, open the actual live published URL (`never rely solely on source code or local previews`). Crawl from header to footer across all 15 checkpoints and capture our 8 forensic screenshot views across Desktop and Mobile viewports.
              </p>
            </div>

            {/* 15-Stage Crawl Sequence */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Monitor className="h-4 w-4 text-emerald-400" />
                15-Stage Full Page Crawl Protocol (`Top to Footer`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {livePageVerificationSequence.map((lc, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <span className="text-xs font-mono font-bold text-emerald-300 block">{lc.stage}</span>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">{lc.action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 Screenshot Verification Matrix */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Camera className="h-4 w-4 text-indigo-400" />
                8-Shot Screenshot Verification Matrix (`Desktop &amp; Mobile Captures`)
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400">
                      <th className="p-3.5">Shot ID &amp; Viewport</th>
                      <th className="p-3.5">Target Section &amp; Focus Area</th>
                      <th className="p-3.5">Forensic Verification Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {screenshotVerificationMatrix.map((sm, i) => (
                      <tr key={i} className="hover:bg-slate-900/60">
                        <td className="p-3.5 font-bold text-indigo-300 font-sans text-sm">
                          {sm.captureId}
                          <span className="block text-xs font-mono font-normal text-slate-400 mt-0.5">{sm.viewport}</span>
                        </td>
                        <td className="p-3.5 text-slate-200 font-bold">{sm.section}</td>
                        <td className="p-3.5 text-slate-300 leading-relaxed">{sm.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: 17 VISUAL DEFECT FORENSICS */}
        {activeTab === "defects" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">Defect Remediation Matrix</span>
              <h3 className="text-xl font-bold text-white mt-1">17 Visual &amp; Technical Defect Categories (`Hunt &amp; Fix`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                During our live full-page crawl and screenshot review, hunt specifically for these 17 defect categories. Fix every issue found and re-verify the live URL.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visualDefectDetectionRegistry.map((def, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-rose-400">[{def.defectId}]</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                        DEFECT TARGET
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">{def.category}</h4>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">{def.description}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs font-mono text-emerald-200">
                    <span className="font-bold text-emerald-300 block mb-0.5">REMEDIATION ACTION:</span>
                    {def.remediation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: MANDATORY SIGNOFF GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Final Article Quality Gate (`22 Mandatory Checkpoints`)</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Do not publish or declare an article complete until every single checkpoint from research to live screenshot verification is checked off.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedCount} of {finalArticleQualityGate.length} Verified</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {completionPercentage}% VVP-EQS Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {finalArticleQualityGate.map((gate, idx) => {
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
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          [{idx + 1}] {gate.category}
                        </span>
                        {isChecked && (
                          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                            VERIFIED
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-200 mt-1 leading-relaxed font-sans">{gate.item}</p>
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
