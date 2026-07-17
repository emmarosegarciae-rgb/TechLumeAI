"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  userJourneyStagesRegistry,
  pagePurposeArchetypesRegistry,
  ctaCopywritingTransformations,
  editorialCtaMatrix,
  internalJourneyPathwaysRegistry,
  audienceSegmentsRegistry,
  progressiveDisclosureLayers,
  conversionFrictionAuditRegistry,
  mobileConversionMandates,
  experimentationLoopSteps,
  monetizationGovernanceRules,
  userFeedbackSystemSchema,
  businessValueFunnelStages,
  journeyAnalyticsTrackingPoints,
  mandatoryUserJourneyAndCroGateChecklist
} from "@/lib/data/user-journey-growth-system";
import {
  Compass,
  Layers,
  Target,
  FileText,
  Users,
  AlertTriangle,
  FlaskConical,
  TrendingUp,
  CheckSquare,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  BarChart3,
  HelpCircle,
  Zap,
  Smartphone,
  Eye,
  MessageSquare
} from "lucide-react";

export default function UserJourneyAndCroPage() {
  const [activeTab, setActiveTab] = useState<
    "stages" | "archetypes" | "ctas" | "pathways" | "audiences" | "friction" | "experiments" | "analytics" | "gate"
  >("stages");

  const [checkedGateItems, setCheckedGateItems] = useState<Record<string, boolean>>(() =>
    mandatoryUserJourneyAndCroGateChecklist.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const toggleGateItem = (id: string) => {
    setCheckedGateItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedGateItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / mandatoryUserJourneyAndCroGateChecklist.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                TechlumeAI Enterprise User Journey, CRO, &amp; Growth Architecture System
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  EUJG-CRO v1.0
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                ATTRACT &rarr; INFORM &rarr; ENGAGE &rarr; BUILD TRUST &rarr; GUIDE &rarr; RETAIN &rarr; GENERATE LONG-TERM VALUE.
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
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab("stages")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "stages"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Compass className="h-4 w-4" />
            6-Stage Journey Model
          </button>
          <button
            onClick={() => setActiveTab("archetypes")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "archetypes"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FileText className="h-4 w-4" />
            7 Page Archetypes
          </button>
          <button
            onClick={() => setActiveTab("ctas")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "ctas"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Target className="h-4 w-4" />
            CTA Hierarchy &amp; Copywriting
          </button>
          <button
            onClick={() => setActiveTab("pathways")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "pathways"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            Internal Pathways
          </button>
          <button
            onClick={() => setActiveTab("audiences")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "audiences"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Users className="h-4 w-4" />
            Audiences &amp; Disclosure
          </button>
          <button
            onClick={() => setActiveTab("friction")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "friction"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Smartphone className="h-4 w-4" />
            10-Point Friction Audit
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
            CRO Experiments &amp; Monetization
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "analytics"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            Value Funnel &amp; Tracking
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
            Mandatory EUJG-CRO Gate (12 Items)
          </button>
        </div>

        {/* TAB 1: 6-STAGE USER JOURNEY MODEL */}
        {activeTab === "stages" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Institutional Journey Architecture</span>
              <h3 className="text-xl font-bold text-white mt-1">6-Stage User Journey Model (`DISCOVERY &rarr; RETURN`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Every user enters at a different stage. We never dead-end sessions; each stage guarantees the precise next action grounded in search intent and technical utility.
              </p>
            </div>

            <div className="space-y-4">
              {userJourneyStagesRegistry.map((stg, idx) => (
                <div key={stg.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-400">STAGE {idx + 1} / 6</span>
                      <h4 className="text-lg font-bold text-white">{stg.stageName}</h4>
                    </div>
                    <span className="px-3 py-1 rounded font-mono text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 self-start">
                      Metric: {stg.primarySuccessMetric}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="text-indigo-400 font-bold block">User Mental Model:</span>
                      <p className="text-slate-300 leading-relaxed font-sans">{stg.userMentalModel}</p>
                      <div className="pt-2">
                        <span className="text-slate-400 font-bold block mb-1">Entry Channels:</span>
                        <ul className="list-disc list-inside space-y-1 font-sans text-slate-300">
                          {stg.entryChannels.map((ch, i) => (
                            <li key={i}>{ch}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <div>
                        <span className="text-emerald-400 font-bold block mb-1">Mandatory Page Requirements:</span>
                        <ul className="list-disc list-inside space-y-1.5 font-sans text-slate-300">
                          {stg.mandatoryPageRequirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-slate-800">
                        <span className="text-amber-400 font-bold block mb-0.5">Recommended Next Step:</span>
                        <p className="font-sans text-white font-semibold">{stg.recommendedNextStep}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 7 PAGE PURPOSE ARCHETYPES */}
        {activeTab === "archetypes" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Page Architecture Standards</span>
              <h3 className="text-xl font-bold text-white mt-1">7 Page Purpose Archetypes &amp; CTA Rules</h3>
              <p className="text-xs text-slate-300 mt-1">
                Do not give every page the same CTA. Every page must be explicitly classified into one archetype with tailored layout and conversion rules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pagePurposeArchetypesRegistry.map((arc) => (
                <div key={arc.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{arc.id}]</span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        Intent: {arc.userIntentAlignment}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">{arc.archetype}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{arc.primaryPurpose}</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                    <div className="space-y-1 font-mono">
                      <div className="text-emerald-400 font-bold">CTA Hierarchy Rules:</div>
                      <div className="text-slate-300">Primary: <span className="text-white font-sans">{arc.ctaHierarchyRules.primary}</span></div>
                      <div className="text-slate-300">Secondary: <span className="text-white font-sans">{arc.ctaHierarchyRules.secondary}</span></div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-indigo-400 font-mono font-bold">Required Layout Elements:</div>
                      <ul className="list-disc list-inside space-y-1 text-slate-300">
                        {arc.requiredLayoutElements.map((el, idx) => (
                          <li key={idx}>{el}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/30 text-rose-300 space-y-1">
                      <span className="font-mono font-bold text-[11px] block">Forbidden Conversion Traps:</span>
                      <ul className="list-disc list-inside space-y-0.5">
                        {arc.forbiddenConversionTraps.map((trp, idx) => (
                          <li key={idx}>{trp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CTA HIERARCHY & COPYWRITING LEDGER */}
        {activeTab === "ctas" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Copywriting &amp; Psychology</span>
              <h3 className="text-xl font-bold text-white mt-1">CTA Hierarchy, Copywriting Ledger, &amp; Anti-Pattern Transformations</h3>
              <p className="text-xs text-slate-300 mt-1">
                We eliminate vague buttons (`Click Here, Learn More, Submit`) and replace them with contextually meaningful hooks that state exact value and remove anxiety.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Target className="h-4 w-4 text-indigo-400" />
                Vague Anti-Pattern vs. Contextual Replacement Ledger
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ctaCopywritingTransformations.map((trans, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-mono text-xs">
                      <span className="text-rose-400 font-bold line-through">Anti-Pattern: &quot;{trans.vagueAntiPattern}&quot;</span>
                      <span className="text-indigo-300">{trans.targetArchetype}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-emerald-400 font-bold font-mono">Contextual Replacement:</div>
                      <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-white font-semibold text-xs">
                        {trans.contextualReplacement}
                      </div>
                      <p className="text-[11px] text-slate-300 pt-1 leading-relaxed">
                        <strong className="text-amber-400 font-mono">Psychological Hook:</strong> {trans.psychologicalValueHook}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white font-mono">Editorial CTA Matrix (Prioritization by Content Type)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {editorialCtaMatrix.map((mat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h5 className="text-sm font-bold text-white">{mat.contentType}</h5>
                      <span className="text-xs font-mono font-bold text-emerald-400 block">Priority Actions:</span>
                      <ul className="text-xs text-slate-300 list-disc list-inside space-y-1">
                        {mat.priorityActions.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                      <span className="text-indigo-400 font-bold block mb-1">Placement Strategy:</span>
                      {mat.placementStrategy}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: INTERNAL JOURNEY PATHWAYS */}
        {activeTab === "pathways" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Cluster Traversal Models</span>
              <h3 className="text-xl font-bold text-white mt-1">Internal Journey Architecture &amp; 6-Step Progression Pathways</h3>
              <p className="text-xs text-slate-300 mt-1">
                How users move from entry awareness up to production implementation without hitting skill-level gaps or broken links.
              </p>
            </div>

            <div className="space-y-6">
              {internalJourneyPathwaysRegistry.map((path) => (
                <div key={path.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="border-b border-slate-800 pb-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">[{path.id}]</span>
                    <h4 className="text-base font-bold text-white">{path.pathwayName}</h4>
                    <p className="text-xs font-mono text-emerald-400 mt-0.5">{path.intentTransition}</p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-white block">Progression Sequence (`6 Steps`):</span>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                      {path.progressionSequence.map((seq, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 relative">
                          <span className="text-[10px] font-mono font-bold text-indigo-400 block mb-1">Step {i + 1}</span>
                          {seq}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/30 text-xs text-slate-200">
                    <span className="font-mono font-bold text-indigo-300 block mb-1">Recommendation Quality Mandates:</span>
                    <ul className="list-disc list-inside space-y-1">
                      {path.recommendationQualityRules.map((rl, idx) => (
                        <li key={idx}>{rl}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: AUDIENCES & PROGRESSIVE DISCLOSURE */}
        {activeTab === "audiences" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Audience Segmentation</span>
              <h3 className="text-xl font-bold text-white mt-1">8 Core Audience Cohorts &amp; 5-Layer Progressive Disclosure Matrix</h3>
              <p className="text-xs text-slate-300 mt-1">
                We present information progressively so beginners and C-Suite CTOs can extract immense value from the exact same technical page.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Layers className="h-4 w-4 text-indigo-400" />
                5-Layer Progressive Disclosure Architecture
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {progressiveDisclosureLayers.map((layer) => (
                  <div key={layer.level} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-400">Layer {layer.level}</span>
                      <h5 className="text-xs font-bold text-white mt-1">{layer.layerName}</h5>
                      <p className="text-[11px] font-mono text-emerald-300 mt-1">{layer.targetAudience}</p>
                    </div>
                    <ul className="text-[11px] text-slate-300 list-disc list-inside space-y-1 pt-2 border-t border-slate-800">
                      {layer.contentElements.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white font-mono">8 Core Audience Segment Profiles</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {audienceSegmentsRegistry.map((seg) => (
                  <div key={seg.id} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs flex flex-col justify-between">
                    <div>
                      <span className="font-mono font-bold text-indigo-400">[{seg.id}]</span>
                      <h5 className="font-bold text-white mt-0.5">{seg.name}</h5>
                      <p className="text-[11px] font-mono text-slate-400 mt-1">{seg.technicalRigor}</p>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-slate-800">
                      <div><strong className="text-slate-300">Goal:</strong> <span className="text-slate-400">{seg.primaryGoal}</span></div>
                      <div><strong className="text-emerald-400">Conversion Hook:</strong> <span className="text-slate-200">{seg.conversionHook}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: 10-POINT FRICTION AUDIT & MOBILE CRO */}
        {activeTab === "friction" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Friction Elimination</span>
              <h3 className="text-xl font-bold text-white mt-1">10-Point Conversion Friction &amp; Mobile CRO Audit Registry (`CRO-01 to CRO-10`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                We never optimize conversion only for desktop. Every button, form, and code block is audited to ensure zero friction and optimal touch accessibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {conversionFrictionAuditRegistry.map((aud) => (
                <div key={aud.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">[{aud.id}] {aud.category}</span>
                    <p className="text-xs text-slate-200 leading-relaxed font-semibold">{aud.frictionItem}</p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs font-mono">
                    <div><strong className="text-amber-400">Audit Method:</strong> <span className="text-slate-400">{aud.auditMethod}</span></div>
                    <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 font-sans">
                      <strong className="font-mono font-bold">Remediation Mandate:</strong> {aud.remediationMandate}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-3">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-indigo-400" />
                Mandatory Mobile Conversion Experience Rules (`5 Commandments`)
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
                {mobileConversionMandates.map((md, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{md}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 7: EXPERIMENTATION LOOP & MONETIZATION GOVERNANCE */}
        {activeTab === "experiments" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Scientific CRO &amp; Policy</span>
              <h3 className="text-xl font-bold text-white mt-1">7-Step Growth Experimentation Loop &amp; Content Monetization Governance</h3>
              <p className="text-xs text-slate-300 mt-1">
                We never make arbitrary or superstitious changes. Every test follows strict scientific methodology, and monetization policy strictly protects our absolute editorial independence.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-indigo-400" />
                7-Step Scientific A/B &amp; CRO Experimentation Loop
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
                {experimentationLoopSteps.map((st) => (
                  <div key={st.step} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-indigo-400 block">Step {st.step}</span>
                      <h5 className="font-bold text-white mt-0.5">{st.phase}</h5>
                      <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">{st.requirement}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-emerald-400">
                      Standard: {st.documentationStandard}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Content Monetization Governance Rules (`4 Iron Policies`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {monetizationGovernanceRules.map((rl) => (
                  <div key={rl.ruleId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">[{rl.ruleId}]</span>
                      <h5 className="text-sm font-bold text-white">{rl.title}</h5>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{rl.policy}</p>
                    <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
                      <strong className="text-amber-400">Audit Mechanism:</strong> {rl.auditMechanism}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-indigo-400" />
                Inline User Feedback Utility System (`3 Placements`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userFeedbackSystemSchema.map((fb) => (
                  <div key={fb.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="font-mono font-bold text-indigo-400">[{fb.id}]</span>
                      <p className="font-bold text-white font-sans">&quot;{fb.prompt}&quot;</p>
                      <p className="text-[11px] font-mono text-slate-400 pt-1">Placement: {fb.placement}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] font-sans text-emerald-300 font-semibold">
                      Action: {fb.routingAction}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 8: VALUE FUNNEL & JOURNEY ANALYTICS */}
        {activeTab === "analytics" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Lifecycle Measurement</span>
              <h3 className="text-xl font-bold text-white mt-1">Content-to-Business Value Funnel (`8 Stages`) &amp; Event Tracking</h3>
              <p className="text-xs text-slate-300 mt-1">
                A page may create value indirectly. We track the entire journey from top-of-funnel AI citations down to 45x cumulative lifetime ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessValueFunnelStages.map((stg) => (
                <div key={stg.stageNumber} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-10 h-10 bg-indigo-500/5 rounded-bl-3xl flex items-center justify-center font-mono font-bold text-slate-700">
                    {stg.stageNumber}
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400 block">STAGE {stg.stageNumber} / 8</span>
                    <h4 className="text-sm font-bold text-white font-mono">{stg.stageName}</h4>
                    <p className="text-xs font-mono text-emerald-400 font-bold">{stg.metric}</p>
                  </div>
                  <p className="text-xs text-slate-300 pt-2 border-t border-slate-800 leading-relaxed font-sans">{stg.indirectValueContribution}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-indigo-400" />
                Journey Analytics DataLayer Tracking Points (`GA4 / BigQuery`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {journeyAnalyticsTrackingPoints.map((tp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono text-xs flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-emerald-400 font-bold text-sm block">{tp.eventName}</span>
                      <p className="text-slate-300 font-sans leading-relaxed">{tp.triggerCondition}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 space-y-1">
                      <span className="text-indigo-400 font-bold block">dataLayer Payload:</span>
                      <div className="flex flex-wrap gap-1">
                        {tp.dataLayerPayload.map((pl, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-300">
                            {pl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 9: MANDATORY EUJG-CRO GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Mandatory User Journey &amp; CRO Completion Gate (`EUJG-CRO v1.0`)</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verify all 12 institutional CRO and user journey standards across page archetypes, progressive disclosure, and friction elimination before certifying signoff.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedCount} of {mandatoryUserJourneyAndCroGateChecklist.length} Verified</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {completionPercentage}% EUJG-CRO Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryUserJourneyAndCroGateChecklist.map((gate, idx) => {
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
