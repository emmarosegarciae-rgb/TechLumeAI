"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Accessibility,
  Eye,
  Keyboard,
  Volume2,
  FileCode,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Award,
  Layers,
  Search,
  Sliders,
  Compass,
  FileText,
  HelpCircle,
  Layout,
  RefreshCw,
  MonitorCheck
} from "lucide-react";
import {
  pourPrinciplesRegistry,
  pageTypeAccessibilityAuditMatrix,
  semanticHtmlAndAriaRules,
  keyboardFocusRules,
  contrastAndTypographyMatrix,
  componentAccessibilityLedger,
  testingAndRegressionProtocol,
  mandatoryEadsEqlSignoffGate
} from "@/lib/data/enterprise-accessibility-system";

export default function EnterpriseAccessibilityCommandCenterPage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "pages" | "semantic" | "keyboard" | "contrast" | "components" | "testing" | "gate"
  >("overview");

  const [searchQuery, setSearchQuery] = useState("");
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalItems = mandatoryEadsEqlSignoffGate.length;
  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / totalItems) * 100);

  const filteredPages = pageTypeAccessibilityAuditMatrix.filter(
    (p) =>
      p.pageType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.headingHierarchyRule.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.commonFailureTrap.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 selection:bg-rose-500 selection:text-white font-sans">
      {/* HEADER / NAVIGATION BAR */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Accessibility className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  EADS-EQL v1.0
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Universal Design &amp; WCAG 2.2 AA Architecture
                </span>
              </div>
              <h1 className="text-lg font-bold text-white tracking-tight">
                TechlumeAI Accessibility, Inclusive UX &amp; Screen Reader Command Center
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
              href="/admin/enterprise-qa-verification"
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold text-indigo-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
              EQVS-EQL v1.0
            </Link>
            <Link
              href="/admin/editorial-operating-system"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 border border-emerald-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-lg shadow-emerald-600/20"
            >
              <Award className="h-3.5 w-3.5" />
              15-Phase OS
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/30 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold tracking-wide uppercase flex items-center gap-1.5">
                  <Accessibility className="h-3.5 w-3.5" />
                  Primary Accessibility Lifecycle
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                PERCEIVABLE &rarr; OPERABLE &rarr; UNDERSTANDABLE &rarr; ROBUST (`POUR`)
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Accessibility is not a cosmetic layer added after development. It must be integrated into information architecture, content, semantic code, keyboard navigation, focus management, forms, and live multi-modal testing. <strong>Do not use accessibility as an excuse to create a visually poor interface. Do not use visual design as an excuse to create an inaccessible interface. Engineer both.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="px-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center min-w-[140px]">
                <span className="text-xs font-mono text-slate-400">Gate Signoff</span>
                <span className="text-2xl font-black text-emerald-400 mt-0.5">{completionPercentage}%</span>
                <span className="text-[10px] text-slate-500 mt-0.5">({completedCount} / {totalItems} Gates)</span>
              </div>
              <button
                onClick={() => setActiveTab("gate")}
                className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs tracking-wide uppercase shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
              >
                <Award className="h-4 w-4" />
                Inspect Signoff Gate
              </button>
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "overview"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Compass className="h-4 w-4" />
            POUR Foundation
          </button>
          <button
            onClick={() => setActiveTab("pages")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "pages"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layout className="h-4 w-4" />
            11-Page Audit Matrix ({pageTypeAccessibilityAuditMatrix.length})
          </button>
          <button
            onClick={() => setActiveTab("semantic")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "semantic"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FileCode className="h-4 w-4" />
            Semantic HTML &amp; ARIA ({semanticHtmlAndAriaRules.length})
          </button>
          <button
            onClick={() => setActiveTab("keyboard")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "keyboard"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Keyboard className="h-4 w-4" />
            Keyboard &amp; Focus Rules ({keyboardFocusRules.length})
          </button>
          <button
            onClick={() => setActiveTab("contrast")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "contrast"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Eye className="h-4 w-4" />
            Contrast &amp; 200% Zoom ({contrastAndTypographyMatrix.length})
          </button>
          <button
            onClick={() => setActiveTab("components")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "components"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Sliders className="h-4 w-4" />
            Component Accessibility ({componentAccessibilityLedger.length})
          </button>
          <button
            onClick={() => setActiveTab("testing")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "testing"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Volume2 className="h-4 w-4" />
            Multi-Modal Testing Protocol
          </button>
          <button
            onClick={() => setActiveTab("gate")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "gate"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Award className="h-4 w-4" />
            15-Point Signoff Gate
          </button>
        </div>

        {/* TAB 1: POUR PRINCIPLES FOUNDATION */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <span className="text-xs font-mono uppercase font-bold text-emerald-400">Institutional Constitution</span>
                <h3 className="text-xl font-bold text-white">The TechlumeAI Universal Design &amp; Inclusive UX Mandate</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  TechlumeAI should be usable not only by the engineers and designers who built it. It must be usable by real people across diverse devices, browsers, input methods (`mouse, keyboard, switch control, touch`), vision capabilities (`low vision, screen readers, color-vision differences`), motor abilities (`tremors, limited dexterity`), and cognitive/attention needs.
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-2">
                  <span className="text-xs font-bold text-emerald-300 font-mono uppercase flex items-center gap-1.5">
                    <MonitorCheck className="h-4 w-4" /> The Final Engineering Progression:
                  </span>
                  <p className="text-xs text-white font-bold tracking-wide">
                    DESIGN FOR THE EYES &rarr; ENGINEER FOR THE BROWSER &rarr; TEST FOR THE KEYBOARD &rarr; VERIFY FOR ASSISTIVE TECHNOLOGY &rarr; BUILD FOR REAL PEOPLE.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pourPrinciplesRegistry.map((pour) => (
                  <div key={pour.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                        {pour.id}
                      </span>
                      <span className="text-xs font-bold font-mono text-slate-400">{pour.pillar}</span>
                    </div>
                    <p className="text-xs text-white font-semibold">{pour.coreDefinition}</p>
                    <p className="text-[11px] text-slate-300 leading-relaxed pt-1 border-t border-slate-800">{pour.techlumeApplicationMandate}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/30 to-slate-900 border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                  <AlertTriangle className="h-4 w-4 text-rose-400" />
                  Primary Principles Checklist
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Do not assume</strong> a visually attractive interface is automatically accessible.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Do not assume</strong> a semantic-looking component is actually semantic. Check native tags.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Do not assume</strong> a keyboard user can navigate because Tab technically moves. Check order and traps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Do not assume</strong> an image is accessible because it has any `alt` text. It must explain importance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Do not assume</strong> automated audits passing with zero errors equals full accessibility. Test real users.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 11-PAGE AUDIT MATRIX */}
        {activeTab === "pages" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-emerald-400">Page Architecture Audit</span>
                <h3 className="text-xl font-bold text-white mt-1">11-Page Type Accessibility Audit Matrix (`AUD-01 to AUD-11`)</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Every major page type across our publication is engineered with strict landmarks, heading hierarchy rules, keyboard requirements, and screen reader structure.
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter pages (`e.g., Article, Search, Contact`)..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all font-mono"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredPages.map((page) => (
                <div key={page.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                        {page.id}
                      </span>
                      <h4 className="text-base font-bold text-white">{page.pageType}</h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-3">
                      <div>
                        <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Semantic Landmarks:</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {page.semanticLandmarkStructure.map((lm, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
                              {lm}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Heading Hierarchy Rule:</span>
                        <p className="text-slate-200 mt-0.5 leading-relaxed font-medium">{page.headingHierarchyRule}</p>
                      </div>
                      <div>
                        <span className="text-red-400 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" /> Common Failure Trap:
                        </span>
                        <p className="text-slate-300 mt-0.5 font-mono text-[11px] bg-slate-950/80 p-2 rounded border border-slate-800">{page.commonFailureTrap}</p>
                      </div>
                    </div>

                    <div className="space-y-3 flex flex-col justify-between">
                      <div>
                        <span className="text-emerald-400 font-bold font-mono uppercase text-[10px]">Keyboard &amp; Focus Requirements:</span>
                        <ul className="list-disc list-inside space-y-1 text-slate-300 mt-1">
                          {page.keyboardAndFocusRequirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                        <span className="text-emerald-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1.5">
                          <Volume2 className="h-3.5 w-3.5" /> Screen Reader Announcement Rules:
                        </span>
                        <ul className="list-disc list-inside space-y-1 text-white font-medium mt-1">
                          {page.screenReaderAnnouncementRules.map((sr, j) => (
                            <li key={j}>{sr}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SEMANTIC HTML & ARIA GOVERNANCE */}
        {activeTab === "semantic" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Semantic Foundation</span>
              <h3 className="text-xl font-bold text-white mt-1">Semantic HTML &amp; ARIA Governance (`SEM-01 to SEM-05`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Use native HTML5 elements (`&lt;button&gt;, &lt;a&gt;, &lt;header&gt;, &lt;nav&gt;`) before adding ARIA. Do not use ARIA to compensate for incorrect HTML when native elements provide required keyboard focus and behavior automatically (`Rule of ARIA #1`).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semanticHtmlAndAriaRules.map((rule) => (
                <div key={rule.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                        {rule.id}
                      </span>
                      <h4 className="text-sm font-bold text-white">{rule.category}</h4>
                    </div>
                  </div>
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-red-400 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> Prohibited Anti-Pattern:
                      </span>
                      <p className="text-slate-300 mt-0.5 font-mono text-[11px] bg-slate-950/80 p-2 rounded border border-slate-800">{rule.prohibitedAntiPattern}</p>
                    </div>
                    <div>
                      <span className="text-emerald-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Required Accessible Implementation:
                      </span>
                      <p className="text-slate-200 mt-0.5 leading-relaxed font-medium">{rule.requiredAccessibleImplementation}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Code Implementation Standard:</span>
                      <p className="text-slate-300 mt-0.5 font-mono text-[11px] bg-slate-950 p-2 rounded">{rule.codeExampleOrAttribute}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KEYBOARD & FOCUS GOVERNANCE */}
        {activeTab === "keyboard" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Keyboard Operability</span>
              <h3 className="text-xl font-bold text-white mt-1">Keyboard Navigation &amp; Focus Management Ledger (`KEY-01 to KEY-05`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Every interactive element must be operable via Tab, Shift+Tab, Enter, Space, Arrow keys, and Escape without trapping focus or removing visible rings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyboardFocusRules.map((keyb) => (
                <div key={keyb.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                        {keyb.id}
                      </span>
                      <h4 className="text-sm font-bold text-white">{keyb.focusElementOrScenario}</h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-[10px] font-bold">
                      {keyb.keyboardAction}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs pt-1">
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Mandatory Behavior:</span>
                      <p className="text-slate-200 mt-0.5 leading-relaxed font-medium">{keyb.mandatoryBehavior}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold">WCAG Criterion: </span>
                      <span className="text-slate-300 font-mono text-[11px]">{keyb.wcagCriterion}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: CONTRAST, TYPOGRAPHY & 200% ZOOM MATRIX */}
        {activeTab === "contrast" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Visual Readability</span>
              <h3 className="text-xl font-bold text-white mt-1">Color Contrast, Typography &amp; 200% Zoom Reflow Matrix (`CNT-01 to CNT-06`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                We enforce WCAG AA (`≥ 4.5:1 for body text, labels, placeholders; ≥ 3:1 for headings, icons, focus rings`). Never rely on color alone to communicate errors, success, or importance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contrastAndTypographyMatrix.map((cnt) => (
                <div key={cnt.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                        {cnt.id}
                      </span>
                      <h4 className="text-sm font-bold text-white">{cnt.elementCategory}</h4>
                    </div>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-semibold font-mono uppercase text-[10px]">WCAG Target:</span>
                    <p className="text-slate-200 mt-0.5 font-mono text-[11px]">{cnt.wcagContrastTarget}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Design Token Specification:</span>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">{cnt.designTokenSpecification}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-emerald-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Multi-Modal Requirement:
                    </span>
                    <p className="text-white mt-1 leading-relaxed font-medium">{cnt.multiModalRequirement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: COMPONENT ACCESSIBILITY LEDGER */}
        {activeTab === "components" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Inclusive Components</span>
              <h3 className="text-xl font-bold text-white mt-1">Component Accessibility &amp; Screen Reader Structure (`CMP-01 to CMP-06`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Because TechlumeAI relies heavily on technical diagrams, code benchmarks, and comparison tables, every visual and interactive component is engineered to convey exact semantics to assistive technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {componentAccessibilityLedger.map((cmp) => (
                <div key={cmp.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                        {cmp.id}
                      </span>
                      <h4 className="text-sm font-bold text-white">{cmp.componentName}</h4>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Semantic Elements &amp; Roles:</span>
                    <p className="text-slate-200 mt-0.5 font-mono text-[11px] bg-slate-950 p-2 rounded border border-slate-800">{cmp.semanticElementAndRoles}</p>
                  </div>
                  <div>
                    <span className="text-emerald-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                      <Volume2 className="h-3.5 w-3.5" /> Assistive Tech Interaction:
                    </span>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">{cmp.assistiveTechInteraction}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Error &amp; State Handling:</span>
                    <p className="text-slate-300 mt-0.5">{cmp.errorAndStateHandling}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: TESTING & REGRESSION PROTOCOL */}
        {activeTab === "testing" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Verification Protocol</span>
              <h3 className="text-xl font-bold text-white mt-1">Multi-Modal Testing &amp; Regression CI Protocol (`TST-01 to TST-06`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Automated tools are only a starting point. We mandate manual keyboard walk-throughs, NVDA/VoiceOver screen reader verification, 200% text scaling, reduced motion checks, and Playwright CI regression gating.
              </p>
            </div>

            <div className="space-y-4">
              {testingAndRegressionProtocol.map((tst) => (
                <div key={tst.stepOrder} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold flex items-center justify-center text-sm">
                        {tst.stepOrder}
                      </span>
                      <h4 className="text-base font-bold text-white">{tst.testingPhase}</h4>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Tooling &amp; Methodology:</span>
                      <p className="text-slate-200 mt-0.5 leading-relaxed font-medium">{tst.toolOrMethodology}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-emerald-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Pass Criteria / CI Gate:
                      </span>
                      <p className="text-slate-300 mt-1 font-mono text-[11px]">{tst.passCriteria}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: 15-POINT SIGNOFF GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-emerald-400">Institutional Certification Gate</span>
                <h3 className="text-xl font-bold text-white mt-1">Mandatory 15-Point `EADS-EQL v1.0` Accessibility &amp; Universal Design Gate</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Do not declare accessibility complete or certify any page type until all 15 gates pass verified live inspection across keyboard, screen reader, zoom, and mobile.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 shrink-0">
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-400">Gate Signoff Status</div>
                  <div className="text-xl font-black text-white font-mono">{completionPercentage}% Completed</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold font-mono">
                  {completedCount}/{totalItems}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>

            <div className="space-y-4">
              {mandatoryEadsEqlSignoffGate.map((gate) => {
                const isChecked = !!completedItems[gate.id];
                return (
                  <div
                    key={gate.id}
                    onClick={() => toggleItem(gate.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isChecked
                        ? "bg-emerald-950/20 border-emerald-500/50 shadow-lg shadow-emerald-500/5"
                        : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="mt-1 shrink-0">
                      <div
                        className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                          isChecked
                            ? "bg-emerald-600 border-emerald-500 text-white"
                            : "bg-slate-950 border-slate-700 text-transparent"
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300 font-mono text-xs font-bold">
                            {gate.id}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wide text-slate-400 font-mono">
                            {gate.category}
                          </span>
                        </div>
                        {isChecked && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" /> Verified Accessible
                          </span>
                        )}
                      </div>
                      <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isChecked ? "text-white" : "text-slate-300"}`}>
                        {gate.item}
                      </p>
                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2 text-xs">
                        <span className="text-emerald-400 font-mono font-bold uppercase text-[10px] shrink-0">Verification Standard:</span>
                        <span className="text-slate-300 font-mono text-[11px]">{gate.verificationStandard}</span>
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
