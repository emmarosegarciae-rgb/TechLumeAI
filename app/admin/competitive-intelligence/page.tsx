"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  competitiveLayersRegistry,
  competitorAnalysisRegistry,
  contentGapTypesRegistry,
  competitorSuperiorityTest,
  semanticEcosystemLayers,
  paaClassificationRegistry,
  opportunityScoringMatrix,
  trendValidationChecklist,
  competitorWeaknessDatabase,
  competitiveContentBriefTemplate,
  competitiveResponseFramework,
  mandatoryCompetitiveGateChecklist
} from "@/lib/data/competitive-intelligence-system";
import {
  Compass,
  Target,
  Search,
  ShieldAlert,
  BarChart3,
  Layers,
  CheckCircle2,
  ExternalLink,
  Award,
  FileText,
  Zap,
  CheckSquare,
  AlertTriangle,
  HelpCircle,
  TrendingUp,
  Cpu,
  BookOpen
} from "lucide-react";

export default function CompetitiveIntelligencePage() {
  const [activeTab, setActiveTab] = useState<
    "landscape" | "profiles" | "gaps" | "superiority" | "semantic" | "briefing" | "response" | "gate"
  >("landscape");

  const [checkedGateItems, setCheckedGateItems] = useState<Record<string, boolean>>(() =>
    mandatoryCompetitiveGateChecklist.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const toggleGateItem = (id: string) => {
    setCheckedGateItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedGateItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / mandatoryCompetitiveGateChecklist.length) * 100);

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
                TechlumeAI Enterprise Competitive &amp; Growth Intelligence System
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  ECGIS v1.0
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Continuous SERP intelligence, 9-gap taxonomy, 8-question superiority gate, 12-layer semantic mapping, and competitive brief templates.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
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
              href="/admin/measurement-intelligence"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              Measurement Intelligence
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
            onClick={() => setActiveTab("landscape")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "landscape"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            4 Competitive Layers
          </button>
          <button
            onClick={() => setActiveTab("profiles")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "profiles"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Target className="h-4 w-4" />
            Competitor Profiles &amp; Weaknesses
          </button>
          <button
            onClick={() => setActiveTab("gaps")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "gaps"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Search className="h-4 w-4" />
            9-Gap SERP Taxonomy
          </button>
          <button
            onClick={() => setActiveTab("superiority")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "superiority"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Award className="h-4 w-4" />
            8 Superiority Gate Questions
          </button>
          <button
            onClick={() => setActiveTab("semantic")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "semantic"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Cpu className="h-4 w-4" />
            12 Semantic Layers &amp; PAA
          </button>
          <button
            onClick={() => setActiveTab("briefing")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "briefing"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FileText className="h-4 w-4" />
            14-Field Competitive Brief
          </button>
          <button
            onClick={() => setActiveTab("response")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "response"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            Scoring &amp; Response Framework
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
            Mandatory ECGIS Gate (13 Items)
          </button>
        </div>

        {/* TAB 1: 4 COMPETITIVE LAYERS */}
        {activeTab === "landscape" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Competitive Landscape Model</span>
              <h3 className="text-xl font-bold text-white mt-1">4 Competitive Layers (`Direct &rarr; AI Search`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                We do not just track digital news publications. We analyze specialized vendor documentation, institutional standards bodies, and AI search engines (`Perplexity, ChatGPT, Claude`) to discover what users and algorithms value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competitiveLayersRegistry.map(layer => (
                <div key={layer.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">[{layer.id}]</span>
                    <h4 className="text-lg font-bold text-white">{layer.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{layer.definition}</p>
                    <div className="text-xs font-mono text-slate-400 pt-1">
                      Target Profile: <strong className="text-slate-200">{layer.targetProfile}</strong>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800">
                    <div>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold block mb-1">Key Competitor Examples:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {layer.keyCompetitorExamples.map((ex, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-xs font-mono border border-slate-800">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 text-xs text-indigo-300 font-mono">
                      <span className="font-bold text-white">Monitoring Strategy: </span>
                      {layer.monitoringStrategy}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: COMPETITOR PROFILES & WEAKNESS DATABASE */}
        {activeTab === "profiles" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Deep Domain Auditing</span>
              <h3 className="text-xl font-bold text-white mt-1">Competitor Analysis Profiles &amp; Weakness Database</h3>
              <p className="text-xs text-slate-300 mt-1">
                Evaluate domain authority, editorial focus, strengths, and weaknesses across direct publications (`InfoQ, Medium`) and specialized topic authorities (`AWS, Hugging Face`).
              </p>
            </div>

            {/* Profiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competitorAnalysisRegistry.map((comp, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <h4 className="text-lg font-bold text-white font-mono">{comp.domain}</h4>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {comp.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{comp.editorialFocus}</p>

                    <div className="grid grid-cols-1 gap-3 pt-2">
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-emerald-400 block">Identified Strengths:</span>
                        <ul className="text-xs text-slate-300 list-disc list-inside space-y-1 font-mono">
                          {comp.strengths.map((str, idx) => (
                            <li key={idx}>{str}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-rose-400 block">Critical Weaknesses &amp; Friction:</span>
                        <ul className="text-xs text-slate-300 list-disc list-inside space-y-1 font-mono">
                          {comp.weaknesses.map((wk, idx) => (
                            <li key={idx}>{wk}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-xs font-mono text-indigo-200 mt-4">
                    <span className="font-bold block text-indigo-300 mb-0.5">TECHLUMEAI STRATEGIC ADVANTAGE:</span>
                    {comp.techlumeaiAdvantage}
                  </div>
                </div>
              ))}
            </div>

            {/* Competitor Weakness Database Registry Table */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-rose-400" />
                Competitor Weakness Database (`5 Recurring Industry Vulnerabilities`)
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-mono">
                      <th className="p-3.5">Recurring Weakness</th>
                      <th className="p-3.5">SERP Frequency</th>
                      <th className="p-3.5">User Friction Impact</th>
                      <th className="p-3.5">TechlumeAI Institutional Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {competitorWeaknessDatabase.map((cw, i) => (
                      <tr key={i} className="hover:bg-slate-900/60 font-mono">
                        <td className="p-3.5 font-bold text-rose-400 font-sans text-sm">{cw.weakness}</td>
                        <td className="p-3.5 text-amber-300 font-bold">{cw.frequency}</td>
                        <td className="p-3.5 text-slate-300">{cw.impact}</td>
                        <td className="p-3.5 text-emerald-300 bg-slate-950/40">{cw.techlumeaiRemedy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 9-GAP SERP TAXONOMY */}
        {activeTab === "gaps" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">SERP Gap Diagnostic Engine</span>
              <h3 className="text-xl font-bold text-white mt-1">9-Gap SERP Taxonomy &amp; Remediation Protocols</h3>
              <p className="text-xs text-slate-300 mt-1">
                A gap is valuable only if solving it genuinely helps the user. We classify opportunities into 9 formal gap types (`Depth, Accuracy, Freshness, Practical, Visual, Comparison, Enterprise, Beginner, Advanced`).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contentGapTypesRegistry.map(gap => (
                <div key={gap.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">[{gap.id}]</span>
                    <h4 className="text-base font-bold text-white">{gap.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{gap.definition}</p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <span className="text-[11px] font-mono text-amber-400 font-bold block mb-0.5">SERP Diagnostic Trigger:</span>
                      <p className="text-xs text-slate-300 font-mono">{gap.serpDiagnosticTrigger}</p>
                    </div>
                    <div className="bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/30">
                      <span className="text-[11px] font-mono text-emerald-300 font-bold block mb-0.5">TechlumeAI Remedy Protocol:</span>
                      <p className="text-xs text-emerald-200 font-mono">{gap.techlumeaiRemediationProtocol}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: 8 SUPERIORITY GATE QUESTIONS */}
        {activeTab === "superiority" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-amber-400">Mandatory Production Gate</span>
              <h3 className="text-xl font-bold text-white">Competitor Content Superiority Test (`8 Questions`)</h3>
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/40 text-xs font-mono text-amber-200 leading-relaxed">
                {competitorSuperiorityTest.mandate}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competitorSuperiorityTest.questions.map(q => (
                <div key={q.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400">[{q.id}]</span>
                    <h4 className="text-sm font-bold text-white leading-snug">{q.question}</h4>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Requirement: </span>
                      {q.requirement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: 12 SEMANTIC LAYERS & PAA CLASSIFICATION */}
        {activeTab === "semantic" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Topical Completeness Architecture</span>
              <h3 className="text-xl font-bold text-white mt-1">12 Semantic Ecosystem Layers &amp; PAA Classification</h3>
              <p className="text-xs text-slate-300 mt-1">
                If competitors cover only 1 or 2 layers (`e.g., theory without code, or API calls without FinOps`), TechlumeAI creates the definitive resource covering all 12 semantic layers.
              </p>
            </div>

            {/* 12 Semantic Layers */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Cpu className="h-4 w-4 text-indigo-400" />
                12-Layer Semantic Ecosystem Progression (`Concept &rarr; Future Evolution`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {semanticEcosystemLayers.map((sem, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <span className="text-xs font-mono font-bold text-indigo-300 block">{sem.layer}</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-mono">{sem.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PAA Classification Table */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-emerald-400" />
                People Also Ask (`PAA`) Question Classification (`8 Categories`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paaClassificationRegistry.map((paa, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-white block">{paa.category}</span>
                    <div className="text-[11px] font-mono text-slate-400 space-y-0.5">
                      {paa.examples.map((ex, idx) => (
                        <div key={idx}>&bull; {ex}</div>
                      ))}
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-emerald-300">
                      <span className="font-bold text-white">Strategy: </span>
                      {paa.strategy}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: 14-FIELD COMPETITIVE CONTENT BRIEF */}
        {activeTab === "briefing" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Pre-Production Blueprint</span>
              <h3 className="text-xl font-bold text-white mt-1">14-Field Competitive Content Briefing Template</h3>
              <p className="text-xs text-slate-300 mt-1">
                Before commissioning a flagship article, editors must generate this 14-field specification. Authors design the article strictly to fulfill these precise competitive and semantic requirements.
              </p>
            </div>

            <div className="space-y-3">
              {competitiveContentBriefTemplate.map((brf, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-4 space-y-1">
                    <span className="text-sm font-bold text-white font-mono">{brf.field}</span>
                    <p className="text-xs text-slate-400">{brf.description}</p>
                  </div>
                  <div className="md:col-span-8 p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 leading-relaxed">
                    <span className="font-bold text-slate-400 block mb-0.5">Example Brief Specification:</span>
                    {brf.exampleData}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: SCORING & RESPONSE FRAMEWORK */}
        {activeTab === "response" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Strategic Decision Engine</span>
              <h3 className="text-xl font-bold text-white mt-1">Opportunity Scoring Matrix &amp; Competitive Response Framework</h3>
              <p className="text-xs text-slate-300 mt-1">
                Prioritize topics using our 6-variable scoring formula and follow disciplined decision rules when competitors publish major updates (`Update vs Spoke vs Flagship vs Ignore`).
              </p>
            </div>

            {/* Opportunity Scoring */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-indigo-500/30 text-xs font-mono text-indigo-300">
                <span className="font-bold block text-white mb-1">SCORING FORMULA:</span>
                {opportunityScoringMatrix.formula}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 block">6 Evaluation Dimensions:</span>
                  <div className="space-y-2">
                    {opportunityScoringMatrix.evaluationDimensions.map((dim, idx) => (
                      <div key={idx} className="p-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono">
                        <span className="font-bold text-white block">{dim.dimension}</span>
                        <span className="text-[11px] text-slate-400">{dim.criteria}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-400 block">Priority Commissioning Thresholds:</span>
                  <div className="space-y-2">
                    {opportunityScoringMatrix.priorityThresholds.map((thr, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-slate-950 border border-slate-800 text-xs font-mono">
                        <span className="font-bold text-amber-300 block">{thr.tier}</span>
                        <span className="text-[11px] text-slate-300 leading-relaxed">{thr.action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Response Framework */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                5-Step Competitive Response Framework (`Update vs Spoke vs Flagship vs Ignore`)
              </h4>
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/40 text-xs font-mono text-rose-200">
                {competitiveResponseFramework.philosophy}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveResponseFramework.responseDecisions.map((dec, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">{dec.decision}</span>
                      <p className="text-xs text-slate-300 font-mono">
                        <strong className="text-amber-400">Trigger Condition: </strong> {dec.condition}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300">
                      <span className="font-bold text-white">Execution Action: </span> {dec.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trend Validation Checklist */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                6-Step Emerging Trend Validation Protocol (`Filtering Hype from Substance`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {trendValidationChecklist.map((tv, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-xs font-mono font-bold text-indigo-300 block">{tv.step}</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-mono">{tv.question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 8: MANDATORY ECGIS GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Mandatory Competitive Intelligence Completion Gate</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verify all 13 competitive landscape, SERP gap, superiority gate, and response framework checkpoints before certifying signoff.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedCount} of {mandatoryCompetitiveGateChecklist.length} Verified</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {completionPercentage}% ECGIS Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryCompetitiveGateChecklist.map((gate, idx) => {
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
