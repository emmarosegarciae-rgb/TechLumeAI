"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  calculateTopicPriorityScore,
  TopicScoringFactors,
  audienceSegmentsRegistry,
  topicalClusterBlueprints,
  clusterGapCategoriesRegistry,
  rollingEditorialCalendarRegistry,
  annualAuthorityRoadmapRegistry,
  cannibalizationAndRetirementRules,
  mandatoryPortfolioCompletionGateChecklist,
  trendValidationFramework,
  evergreenValueTestFramework,
  contentOpportunityBriefSchema,
  editorialPerformanceReviewRegistry,
  finalContentPortfolioAuditRegistry
} from "@/lib/data/editorial-portfolio-intelligence";
import {
  Compass,
  BarChart3,
  Calendar,
  Layers,
  Users,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Calculator,
  Search,
  CheckSquare,
  Sparkles,
  GitBranch,
  Filter,
  ShieldCheck,
  TrendingUp,
  Sliders,
  Copy,
  FileText,
  HelpCircle
} from "lucide-react";

export default function EditorialPortfolioIntelligencePage() {
  const [activeTab, setActiveTab] = useState<"scoring" | "calendar" | "clusters" | "mix" | "brief" | "validation" | "audit" | "gate">("scoring");
  const [copiedBrief, setCopiedBrief] = useState(false);
  
  // Interactive Topic Scoring state
  const [scoringFactors, setScoringFactors] = useState<TopicScoringFactors>({
    pillarRelevance: 10,
    authorityValue: 9,
    audienceValue: 9,
    contentGap: 9,
    originalityPotential: 8,
    aiSearchPotential: 9,
    internalLinkingValue: 9,
    businessValue: 8,
    evergreenPotential: 9,
    competitiveDifficulty: 3
  });

  const scoreResult = calculateTopicPriorityScore(scoringFactors);

  // Calendar filter state
  const [calendarFilter, setCalendarFilter] = useState<string>("ALL");

  // Gate check state
  const [checkedGateItems, setCheckedGateItems] = useState<Record<string, boolean>>(
    mandatoryPortfolioCompletionGateChecklist.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const toggleGateItem = (id: string) => {
    setCheckedGateItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedGateItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / mandatoryPortfolioCompletionGateChecklist.length) * 100);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contentOpportunityBriefSchema);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch (e) {
      console.error("Failed to copy", e);
    }
  };

  const handleSliderChange = (factor: keyof TopicScoringFactors, val: number) => {
    setScoringFactors(prev => ({ ...prev, [factor]: val }));
  };

  const filteredCalendar = calendarFilter === "ALL"
    ? rollingEditorialCalendarRegistry
    : rollingEditorialCalendarRegistry.filter(item => item.status === calendarFilter || item.publishingCategory.includes(calendarFilter));

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
                TechlumeAI Strategic Portfolio Intelligence & Calendar
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Topic Engine v2.0
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Long-term topic discovery, prioritization (0–100 formula), cluster expansion, and rolling editorial calendar.
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
              href="/admin/content-maintenance"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
              Content Maintenance (CCMS)
            </Link>
            <Link
              href="/admin/editorial-operating-system"
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              15-Phase Operating System
            </Link>
            <Link
              href="/admin/editorial-production"
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-lg shadow-indigo-600/20"
            >
              Editorial Production Stage
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab("scoring")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "scoring"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Calculator className="h-4 w-4" />
            Topic Scoring Engine (0–100)
          </button>
          <button
            onClick={() => setActiveTab("calendar")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "calendar"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Calendar className="h-4 w-4" />
            Rolling Editorial Calendar ({rollingEditorialCalendarRegistry.length} Active)
          </button>
          <button
            onClick={() => setActiveTab("clusters")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "clusters"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            Cluster Expansion & Gap Matrix
          </button>
          <button
            onClick={() => setActiveTab("mix")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "mix"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            70/20/10 Mix & Audience Segmentation
          </button>
          <button
            onClick={() => setActiveTab("brief")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "brief"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FileText className="h-4 w-4" />
            Opportunity Brief Generator
          </button>
          <button
            onClick={() => setActiveTab("validation")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "validation"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            Trend & Evergreen Validation
          </button>
          <button
            onClick={() => setActiveTab("audit")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "audit"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            Performance & Final Audit
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
            Mandatory Portfolio Gate (14 Items)
          </button>
        </div>

        {/* TAB 1: TOPIC SCORING ENGINE */}
        {activeTab === "scoring" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono uppercase font-bold text-indigo-400 tracking-wider">
                  Mathematical Prioritization Formula
                </span>
                <h3 className="text-2xl font-bold text-white">Interactive 0–100 Topic Prioritization Scorecard</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Evaluate every candidate topic objectively across 9 value drivers (`+10` points each) minus competitive difficulty (`-10` penalty). Topics scoring &ge; 90 earn immediate commissioning priority.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border flex flex-col items-center justify-center min-w-[240px] text-center transition-all ${scoreResult.priorityColor}`}>
                <span className="text-xs font-mono font-bold uppercase tracking-widest">Calculated Priority</span>
                <div className="text-5xl font-extrabold font-mono my-2">{scoreResult.clampedScore}/100</div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border bg-slate-950/60 border-current">
                  {scoreResult.priorityLabel}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">
                <strong>Formula:</strong> (Pillar&times;10 + Authority&times;10 + Audience&times;10 + Gap&times;10 + Originality&times;10 + AI Search&times;10 + Internal Link&times;10 + Business&times;10 + Evergreen&times;10) - (Difficulty&times;10)
              </span>
              <span className="text-xs font-mono text-indigo-400 font-bold">
                Raw Net: {scoreResult.rawScore} pts
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sliders Left (Positive Drivers) */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  Strategic Value Drivers (0–10 Rating)
                </h4>

                {[
                  { key: "pillarRelevance" as const, label: "1. Strategic Pillar Relevance", desc: "Alignment with core AI & Engineering pillars" },
                  { key: "authorityValue" as const, label: "2. Topical Authority Value", desc: "Builds deep reference expertise & citations" },
                  { key: "audienceValue" as const, label: "3. Audience Value & Utility", desc: "Solves concrete engineering production failures" },
                  { key: "contentGap" as const, label: "4. Competitor Content Gap", desc: "SERP explainers leave topic vague or unbenchmarked" },
                  { key: "originalityPotential" as const, label: "5. Originality Potential", desc: "Can deliver proprietary code/benchmarks/diagrams" }
                ].map((item) => (
                  <div key={item.key} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-slate-200">{item.label}</label>
                      <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                        {scoringFactors[item.key]} / 10
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={scoringFactors[item.key]}
                      onChange={(e) => handleSliderChange(item.key, parseInt(e.target.value))}
                      className="w-full accent-indigo-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Sliders Right (More Drivers + Penalty) */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
                  <Sliders className="h-4 w-4 text-indigo-400" />
                  AI Retrieval, Linking & Competitive Penalty
                </h4>

                {[
                  { key: "aiSearchPotential" as const, label: "6. AI Search Potential (GEO)", desc: "Likelihood of answering AI Overviews & Perplexity queries" },
                  { key: "internalLinkingValue" as const, label: "7. Internal Linking Value", desc: "Strengthens cluster connectivity & anchor distribution" },
                  { key: "businessValue" as const, label: "8. Enterprise Business Value", desc: "Attracts senior decision-makers and newsletter subscribers" },
                  { key: "evergreenPotential" as const, label: "9. Long-Term Evergreen Value", desc: "Remains authoritative reference 1+ years post-publish" }
                ].map((item) => (
                  <div key={item.key} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-slate-200">{item.label}</label>
                      <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                        {scoringFactors[item.key]} / 10
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={scoringFactors[item.key]}
                      onChange={(e) => handleSliderChange(item.key, parseInt(e.target.value))}
                      className="w-full accent-indigo-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                    />
                  </div>
                ))}

                <div className="pt-2 border-t border-slate-800 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      10. Competitive Difficulty (Penalty Subtraction)
                    </label>
                    <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                      -{scoringFactors.competitiveDifficulty * 10} pts ({scoringFactors.competitiveDifficulty}/10)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">SERP dominated by Wikipedia, major cloud docs, or Tier-1 media without differentiation space.</p>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={scoringFactors.competitiveDifficulty}
                    onChange={(e) => handleSliderChange("competitiveDifficulty", parseInt(e.target.value))}
                    className="w-full accent-rose-500 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <h5 className="text-sm font-bold text-white">Editorial Governance Decision: {scoreResult.priorityLabel}</h5>
                  <p className="text-xs text-slate-300 mt-0.5">{scoreResult.recommendation}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-xs font-mono text-slate-400 block">Score Band Reference</span>
                <span className="text-xs font-mono text-indigo-400">90+ Immediate | 75+ High | 60+ Strategic | 40+ Monitor</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ROLLING EDITORIAL CALENDAR */}
        {activeTab === "calendar" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">Rolling Editorial Calendar System</h3>
                <p className="text-xs text-slate-400 mt-0.5">Active candidates ranked by Topic Selection Score (`90–100` scale).</p>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-400" />
                <select
                  value={calendarFilter}
                  onChange={(e) => setCalendarFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 font-medium focus:outline-none focus:border-indigo-500"
                >
                  <option value="ALL">All Active Stages & Mix</option>
                  <option value="READY TO PUBLISH">Stage: READY TO PUBLISH</option>
                  <option value="FACT CHECK">Stage: FACT CHECK</option>
                  <option value="DRAFTING">Stage: DRAFTING</option>
                  <option value="OUTLINE READY">Stage: OUTLINE READY</option>
                  <option value="BRIEF READY">Stage: BRIEF READY</option>
                  <option value="RESEARCHING">Stage: RESEARCHING</option>
                  <option value="Evergreen Authority">Mix: Evergreen Authority (70%)</option>
                  <option value="Timely Analysis">Mix: Timely Analysis (20%)</option>
                  <option value="Frontier / Experimental">Mix: Frontier / Experimental (10%)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredCalendar.map(item => (
                <div key={item.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {item.pillar}
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 text-slate-300">
                          Cluster: {item.cluster}
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                          {item.contentType}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white">{item.articleTitle}</h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-slate-400 uppercase block">Score / Priority</span>
                        <span className="text-sm font-mono font-bold text-emerald-400">{item.contentScore}/100 ({item.priority})</span>
                      </div>
                      <span className="px-3 py-1.5 rounded-xl font-mono text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 block font-semibold mb-0.5">Primary Audience & Intent</span>
                      <span className="text-slate-200 font-medium">{item.targetAudience} ({item.searchIntent})</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold mb-0.5">Target Keyword & Publish Date</span>
                      <span className="text-indigo-300 font-mono font-bold">"{item.primaryKeyword}" &bull; {item.expectedPublicationDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold mb-0.5">Strategic Publishing Category</span>
                      <span className="text-emerald-300 font-semibold">{item.publishingCategory}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-mono uppercase font-bold text-indigo-400 block mb-1">Why Now & Competitor Gap</span>
                      <p className="text-slate-300 mb-2"><strong>Why Now:</strong> {item.brief.whyNow}</p>
                      <p className="text-slate-300"><strong>SERP Gap:</strong> {item.brief.competitorGap}</p>
                    </div>
                    <div>
                      <span className="font-mono uppercase font-bold text-emerald-400 block mb-1">Original Angle & Required Sources</span>
                      <p className="text-slate-300 mb-2"><strong>Our Synthesis:</strong> {item.brief.originalAngle}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.brief.requiredSources.map((src, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700 text-slate-300">
                            {src}
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

        {/* TAB 3: CLUSTER EXPANSION & GAP MATRIX */}
        {activeTab === "clusters" && (
          <div className="space-y-8">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-base font-bold text-white">Cornerstone-First Topical Cluster Expansion</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Every cluster begins with a central Cornerstone Guide before expanding into step-by-step explainers, implementation playbooks, and comparisons.
              </p>
            </div>

            {topicalClusterBlueprints.map(cluster => (
              <div key={cluster.clusterName} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                    {cluster.pillar}
                  </span>
                  <h4 className="text-xl font-extrabold text-white">{cluster.clusterName}</h4>
                  <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 to-slate-950 border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-400 uppercase">Cornerstone Authority Asset</span>
                      <h5 className="text-base font-bold text-white mt-0.5">{cluster.cornerstoneGuide.title}</h5>
                      <p className="text-xs text-slate-300 mt-1">{cluster.cornerstoneGuide.description}</p>
                    </div>
                    <Link
                      href={`/blog/${cluster.cornerstoneGuide.slug}`}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white flex items-center gap-1.5 flex-shrink-0 transition-all"
                    >
                      Inspect Cornerstone Page
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-mono uppercase font-bold text-slate-400 mb-3">
                    Spoke Expansion Hierarchy ({cluster.expansionHierarchy.length} Supporting Guides)
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cluster.expansionHierarchy.map(node => (
                      <div key={node.stepNumber} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-mono font-bold text-indigo-400">Step #{node.stepNumber}</span>
                            <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">{node.contentType}</span>
                          </div>
                          <h6 className="text-xs font-bold text-white mt-1 leading-snug">{node.title}</h6>
                        </div>
                        <span className="text-[11px] text-slate-400 block pt-2 border-t border-slate-900">
                          Role: {node.roleInCluster}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white">Cluster Gap Analysis Matrix</h4>
              <p className="text-xs text-slate-400">Before expanding any pillar, classify existing and candidate topics across these 8 health states.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {clusterGapCategoriesRegistry.map(gap => (
                  <div key={gap.category} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${gap.badgeStyle}`}>
                      {gap.category}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{gap.definition}</p>
                    <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                      <strong className="text-slate-200">Action:</strong> {gap.actionRequired}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 70/20/10 MIX & AUDIENCE SEGMENTATION */}
        {activeTab === "mix" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 space-y-3">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">70% Allocation</span>
                <h4 className="text-xl font-bold text-white">Evergreen Authority</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Technical explainers, architecture guides, implementation guides, developer tutorials, and reference playbooks. Built to endure 1–3 years with quarterly benchmark updates.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900 border border-blue-500/30 space-y-3">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">20% Allocation</span>
                <h4 className="text-xl font-bold text-white">Timely Analysis</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Major open-weight model releases, cloud FinOps cost architecture shifts, NIST/EU AI Act compliance mandates, and critical prompt injection vulnerabilities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/30 space-y-3">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">10% Allocation</span>
                <h4 className="text-xl font-bold text-white">Frontier / Experimental</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Vision-Language-Action (VLA) robotics, quantum computing algorithms, synthetic biology architectures, and unproven but critical hardware interconnects.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">4-Tier Audience Segmentation & Content Delivery Specs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {audienceSegmentsRegistry.map(seg => (
                  <div key={seg.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                    <h5 className="text-base font-bold text-white border-b border-slate-800 pb-2">{seg.name}</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="font-mono uppercase font-bold text-indigo-400 block mb-1">Primary Needs</span>
                        <ul className="space-y-1 text-slate-300 list-disc list-inside">
                          {seg.primaryNeeds.map((need, idx) => (
                            <li key={idx}>{need}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-mono uppercase font-bold text-emerald-400 block mb-1">Deliverables</span>
                        <ul className="space-y-1 text-slate-300 list-disc list-inside">
                          {seg.contentDeliverables.map((del, idx) => (
                            <li key={idx}>{del}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400">
                      <strong className="text-slate-200">Tone & Depth:</strong> {seg.toneAndDepth}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h5 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Content Cannibalization Prevention Rules
                </h5>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  {cannibalizationAndRetirementRules.preCommissioningScreen.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h5 className="text-sm font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-rose-400" />
                  Topic Retirement & Pruning Criteria
                </h5>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  {cannibalizationAndRetirementRules.topicRetirementCriteria.map((crit, idx) => (
                    <li key={idx}>{crit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white">Annual Authority Roadmap (4-Phase Compounding Plan)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {annualAuthorityRoadmapRegistry.map(road => (
                  <div key={road.phase} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-indigo-400">{road.phase}</span>
                      <h5 className="text-sm font-bold text-white leading-snug">{road.focus}</h5>
                      <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                        {road.objectives.map((obj, idx) => (
                          <li key={idx}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono text-[10px] font-bold w-fit mt-3">
                      {road.statusBadge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MANDATORY PORTFOLIO COMPLETION GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Mandatory Strategic Portfolio Completion Gate</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verify all 14 portfolio intelligence requirements before certifying long-term governance signoff.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedCount} of {mandatoryPortfolioCompletionGateChecklist.length} Verified</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {completionPercentage}% System Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryPortfolioCompletionGateChecklist.map((gate, idx) => {
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

        {/* TAB 6: OPPORTUNITY BRIEF GENERATOR */}
        {activeTab === "brief" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-indigo-400 tracking-wider">
                  Mandatory Phase 2 Commissioning Specification
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Content Opportunity Brief Generator &amp; Exporter</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                  Every candidate topic scoring &ge; 75/100 must be formalized with this 18-field brief before drafting begins. Click below to copy the canonical Markdown schema to your clipboard.
                </p>
              </div>
              <button
                onClick={copyToClipboard}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all flex-shrink-0"
              >
                {copiedBrief ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy 18-Field Brief Schema
                  </>
                )}
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto relative shadow-inner">
              <pre className="whitespace-pre-wrap leading-relaxed text-indigo-200/90">{contentOpportunityBriefSchema}</pre>
            </div>
          </div>
        )}

        {/* TAB 7: TREND & EVERGREEN VALIDATION */}
        {activeTab === "validation" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-amber-400">Pre-Commissioning Screening</span>
              <h3 className="text-xl font-bold text-white mt-1">Trend Validation Framework &amp; Evergreen Value Test</h3>
              <p className="text-xs text-slate-300 mt-1">
                Before approving a trend-based topic or committing author hours, run candidate concepts through both 6-question screens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Trend Validation Screen */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-amber-500/20 space-y-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <HelpCircle className="h-5 w-5" />
                  <h4 className="text-base font-bold text-white">Trend Validation Screen (6 Questions)</h4>
                </div>
                <p className="text-xs text-slate-400">Avoid publishing short-lived noise unless the topic has enduring strategic value.</p>
                <div className="space-y-3 pt-2">
                  {trendValidationFramework.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                      <span className="text-xs font-bold text-amber-300 font-mono">Q{idx + 1}: {item.question}</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.guidance}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evergreen Value Test */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/20 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck className="h-5 w-5" />
                  <h4 className="text-base font-bold text-white">Evergreen Value Test (6 Questions)</h4>
                </div>
                <p className="text-xs text-slate-400">Prioritize topics that remain authoritative references over multi-year horizons.</p>
                <div className="space-y-3 pt-2">
                  {evergreenValueTestFramework.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                      <span className="text-xs font-bold text-emerald-300 font-mono">Q{idx + 1}: {item.question}</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.guidance}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 8: PERFORMANCE & FINAL AUDIT */}
        {activeTab === "audit" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-emerald-400">Quarterly Institutional Audit</span>
              <h3 className="text-xl font-bold text-white mt-1">Editorial Performance Scorecard &amp; Portfolio Audit Matrix</h3>
              <p className="text-xs text-slate-300 mt-1">
                Evaluate our knowledge ecosystem across 10 strategic metrics and 13 portfolio health dimensions.
              </p>
            </div>

            {/* Performance Review Table */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-indigo-400" />
                Editorial Performance Review Metrics (10 Dimensions)
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-mono">
                      <th className="p-3.5">Performance Dimension</th>
                      <th className="p-3.5">Institutional Target / Standard</th>
                      <th className="p-3.5">Evaluation Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {editorialPerformanceReviewRegistry.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/60">
                        <td className="p-3.5 font-bold text-white font-mono">{item.metric}</td>
                        <td className="p-3.5 text-slate-300">{item.target}</td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                            {item.evaluationFrequency}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Final Content Portfolio Audit */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Final Content Portfolio Audit Matrix (13 Governance Checkpoints)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {finalContentPortfolioAuditRegistry.map((audit, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between gap-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-indigo-400">Check {idx + 1}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          AUDITED
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-white">{audit.item}</h5>
                      <p className="text-xs text-slate-300 leading-relaxed font-mono bg-slate-950/60 p-2 rounded border border-slate-800">
                        {audit.status}
                      </p>
                    </div>
                    <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                      <span className="font-bold text-slate-200">Action Plan: </span>
                      {audit.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
