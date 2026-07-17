"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  geoCorePrinciples,
  aiRetrievalModelSequence,
  entityClarityRegistry,
  semanticAnswerUnits,
  sourceAuthorityRegistry,
  claimSourceEvaluationLoop,
  comparisonOptimizationModel,
  structuredDataSchemas,
  freshnessSignalsRegistry,
  questionMappingJourney,
  contextPreservationRules,
  geoFailureConditions,
  aiCitationMonitoringMatrix,
  mandatoryGeoGateChecklist
} from "@/lib/data/geo-ai-search-system";
import {
  Search,
  Sparkles,
  Layers,
  Cpu,
  CheckSquare,
  ShieldCheck,
  FileCode,
  FileText,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  BookOpen,
  Award,
  Zap,
  CheckCircle2
} from "lucide-react";

export default function GeoAiSearchPage() {
  const [activeTab, setActiveTab] = useState<
    "principles" | "retrieval" | "entity" | "semantic" | "sources" | "schema" | "failures" | "gate"
  >("principles");

  const [checkedGateItems, setCheckedGateItems] = useState<Record<string, boolean>>(() =>
    mandatoryGeoGateChecklist.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const toggleGateItem = (id: string) => {
    setCheckedGateItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedGateItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / mandatoryGeoGateChecklist.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                TechlumeAI Generative Engine Optimization (`GEO`) &amp; AI Search Architecture System
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  GEO-AISA v1.0
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Answer-First hierarchy, entity clarity, self-contained vector chunking, structured JSON-LD data, and AI citation matrices.
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
              href="/admin/editorial-portfolio-intelligence"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              Portfolio Intelligence
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
            onClick={() => setActiveTab("principles")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "principles"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Award className="h-4 w-4" />
            GEO Philosophy &amp; Principles
          </button>
          <button
            onClick={() => setActiveTab("retrieval")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "retrieval"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            AI Retrieval Sequence (`8 Stages`)
          </button>
          <button
            onClick={() => setActiveTab("entity")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "entity"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Cpu className="h-4 w-4" />
            Entity Clarity &amp; Vector Chunking
          </button>
          <button
            onClick={() => setActiveTab("semantic")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "semantic"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FileText className="h-4 w-4" />
            Semantic Answer Blocks &amp; Questions
          </button>
          <button
            onClick={() => setActiveTab("sources")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "sources"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            Source Authority &amp; Verification
          </button>
          <button
            onClick={() => setActiveTab("schema")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "schema"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FileCode className="h-4 w-4" />
            Structured Data (`JSON-LD`) &amp; Freshness
          </button>
          <button
            onClick={() => setActiveTab("failures")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "failures"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            10 Failure Conditions &amp; Citations
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
            Mandatory GEO Gate (`13 Items`)
          </button>
        </div>

        {/* TAB 1: GEO PHILOSOPHY & PRINCIPLES */}
        {activeTab === "principles" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Core GEO Philosophy</span>
              <h3 className="text-xl font-bold text-white mt-1">We Do Not Write for Artificial &quot;AI Optimization&quot;</h3>
              <p className="text-xs text-slate-300 mt-1">
                The objective is not to game AI engines. The objective is to publish information so clear, accurate, structured, and authoritative that AI systems have a legitimate, algorithmic reason to retrieve and cite it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {geoCorePrinciples.map(pr => (
                <div key={pr.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-indigo-400">[{pr.id}]</span>
                    <h4 className="text-lg font-bold text-white">{pr.name}</h4>
                    <div className="p-3 rounded-lg bg-slate-950 border border-indigo-500/30 text-xs font-mono text-indigo-300">
                      <span className="font-bold text-white block mb-0.5">Core Formula:</span>
                      {pr.formula}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{pr.philosophy}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs font-mono text-emerald-200 mt-4">
                    <span className="font-bold block text-emerald-300 mb-0.5">EXECUTION MANDATE:</span>
                    {pr.executionMandate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: AI RETRIEVAL SEQUENCE */}
        {activeTab === "retrieval" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Structural Ingestion Mapping</span>
              <h3 className="text-xl font-bold text-white mt-1">AI Retrieval Sequence (`8 Stages of Content Architecture`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Structure important content so an AI vector engine can instantly extract: Question &rarr; Direct Answer &rarr; Explanation &rarr; Evidence &rarr; Context &rarr; Limitations &rarr; Related &rarr; Source.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {aiRetrievalModelSequence.map((seq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-indigo-400 block">{seq.stage}</span>
                    <p className="text-xs text-slate-300 font-mono leading-relaxed">{seq.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ENTITY CLARITY & VECTOR CHUNKING */}
        {activeTab === "entity" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Knowledge Graph &amp; Vector Integrity</span>
              <h3 className="text-xl font-bold text-white">Entity Clarity (`8 Attributes`) &amp; Self-Contained Vector Chunking</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                For every major entity, make its identity crystal clear. Eliminate ambiguous pronouns (`&quot;It&quot;, &quot;This system&quot;`) which break when extracted inside a 256-token vector window.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/40 text-xs font-mono text-rose-200">
                  <span className="font-bold text-rose-300 block mb-1">BROKEN RAG CHUNK (`Anti-Pattern`):</span>
                  {contextPreservationRules.antiPattern}
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-xs font-mono text-emerald-200">
                  <span className="font-bold text-emerald-300 block mb-1">PRISTINE SELF-CONTAINED CHUNK (`Best Practice`):</span>
                  {contextPreservationRules.bestPractice}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Cpu className="h-4 w-4 text-indigo-400" />
                8 Mandatory Entity Specification Attributes (`Example: vLLM`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {entityClarityRegistry.map((ent, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-300 block">{ent.attribute}</span>
                    <p className="text-xs text-slate-400 font-sans">{ent.description}</p>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-xs font-mono text-emerald-300">
                      <span className="font-bold text-white">Example Specification: </span>
                      {ent.exampleVLLM}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SEMANTIC ANSWER BLOCKS & QUESTIONS */}
        {activeTab === "semantic" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Semantic Section Architecture</span>
              <h3 className="text-xl font-bold text-white mt-1">7 Semantic Answer Units &amp; 7-Stage Question Mapping</h3>
              <p className="text-xs text-slate-300 mt-1">
                Structure important sections around clear semantic units. Each block ideally answers one meaningful engineering question.
              </p>
            </div>

            {/* 7 Semantic Answer Units */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="h-4 w-4 text-indigo-400" />
                7 Semantic Answer Units (`Section Structure`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {semanticAnswerUnits.map((sem, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <span className="text-xs font-mono font-bold text-amber-300 block">{sem.unit}</span>
                    <p className="text-xs text-slate-300 font-mono leading-relaxed">{sem.guidance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 7-Stage Question Journey */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-emerald-400" />
                7-Stage AI Search Question Journey Mapping (`Example: MCP Protocol`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questionMappingJourney.map((qm, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-white block">{qm.stage}</span>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-300">
                      <span className="font-bold text-slate-400">Example Query: </span>
                      {qm.example}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      <span className="text-emerald-400 font-bold">Placement: </span>
                      {qm.placement}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SOURCE AUTHORITY & VERIFICATION */}
        {activeTab === "sources" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Evidence Rigor &amp; Verification</span>
              <h3 className="text-xl font-bold text-white">4 Source Authority Tiers &amp; 6-Step Verification Chain</h3>
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-xs font-mono text-emerald-200 leading-relaxed">
                <span className="font-bold text-white block mb-0.5">CLAIM VERIFICATION CHAIN: {claimSourceEvaluationLoop.sequence}</span>
                {claimSourceEvaluationLoop.protocol}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sourceAuthorityRegistry.map((src, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-400 block">{src.tier}</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {src.examples.map((ex, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-xs font-mono border border-slate-800">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-950/20 border border-indigo-500/30 text-xs font-mono text-indigo-200">
                    <span className="font-bold text-white">Editorial Weight: </span>
                    {src.weight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: STRUCTURED DATA & FRESHNESS SIGNALS */}
        {activeTab === "schema" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-indigo-400">Machine-Readable Context</span>
              <h3 className="text-xl font-bold text-white mt-1">Structured Data (`JSON-LD Schemas`) &amp; 8 Freshness Signals</h3>
              <p className="text-xs text-slate-300 mt-1">
                Structured data must accurately describe visible page content. Never use misleading schemas. We deploy 4 core JSON-LD schemas and 8 temporal freshness markers.
              </p>
            </div>

            {/* 4 Structured Schemas */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <FileCode className="h-4 w-4 text-indigo-400" />
                4 Required JSON-LD Structured Data Schemas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {structuredDataSchemas.map((sc, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-sm font-bold text-white font-mono block">{sc.schema}</span>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                        <span className="font-bold text-indigo-400 block mb-0.5">Target Elements:</span>
                        {sc.targetElements}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-emerald-300 pt-1">
                      <span className="font-bold text-white">AI Ingestion Benefit: </span>
                      {sc.aiBenefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 Freshness Signals */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400" />
                8 Required Temporal &amp; Versioning Freshness Signals
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {freshnessSignalsRegistry.map((fs, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-300 block">{fs.marker}</span>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300">
                      {fs.format}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      <span className="font-bold text-slate-200">Placement: </span>
                      {fs.placement}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: 10 FAILURE CONDITIONS & CITATIONS */}
        {activeTab === "failures" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">Anti-Pattern Governance</span>
              <h3 className="text-xl font-bold text-white mt-1">10 GEO Failure Conditions &amp; AI Citation Monitoring Matrix</h3>
              <p className="text-xs text-slate-300 mt-1">
                Identify and eliminate marketing fluff, ambiguous pronouns, unverified statistics, and broken code syntax across our portfolio.
              </p>
            </div>

            {/* 10 Failure Conditions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {geoFailureConditions.map((fail, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-rose-400">[{fail.id}]</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                        STRICTLY BANNED
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">{fail.name}</h4>
                    <p className="text-xs text-slate-300 font-sans">{fail.description}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs font-mono text-emerald-200">
                    <span className="font-bold text-emerald-300 block mb-0.5">REMEDIATION ACTION:</span>
                    {fail.remediationAction}
                  </div>
                </div>
              ))}
            </div>

            {/* AI Citation Monitoring Matrix Table */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-indigo-400" />
                AI Citation &amp; Retrieval Monitoring Matrix (`4 Answer Engines`)
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400">
                      <th className="p-3.5">Answer Engine</th>
                      <th className="p-3.5">Primary Citation Ingestion Focus</th>
                      <th className="p-3.5">Tracking Metric &amp; Target KPI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {aiCitationMonitoringMatrix.map((cm, i) => (
                      <tr key={i} className="hover:bg-slate-900/60">
                        <td className="p-3.5 font-bold text-indigo-300 font-sans text-sm">{cm.engine}</td>
                        <td className="p-3.5 text-slate-200 leading-relaxed">{cm.citationFocus}</td>
                        <td className="p-3.5 text-emerald-300 bg-slate-950/40 font-bold">{cm.trackingMetric}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 8: MANDATORY GEO GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Mandatory Generative Engine &amp; AI Search Completion Gate</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verify all 13 human-first, answer-first, entity clarity, structured schema, and anti-pattern clearance checkpoints.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedCount} of {mandatoryGeoGateChecklist.length} Verified</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {completionPercentage}% GEO-AISA Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryGeoGateChecklist.map((gate, idx) => {
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
