"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  primaryGovernancePipeline,
  editorialAccountabilityRegistry,
  contentClassificationRegistry,
  factAnalysisOpinionSeparationProtocol,
  sourceHierarchyRegistry,
  sourceVerificationAndEvaluationChecks,
  sampleClaimVerificationLedger,
  confidenceLevelRegistry,
  uncertaintyTransparencyProtocol,
  truthfulAuthorshipAndExpertReviewRegistry,
  editorialStyleAndTerminologyControl,
  editorialBiasAndCommercialDisclosureProtocol,
  errorSeverityAndCorrectionRegistry,
  sampleContentChangeLedger,
  editorialApprovalGatesRegistry,
  editorialRiskAssessmentRegistry,
  knowledgeProvenanceAndReuseProtocol,
  aiAssistedContentGovernanceAndHallucinationControl,
  mandatoryEcgisEqlSignoffGate
} from "@/lib/data/enterprise-content-governance-system";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Layers,
  FileText,
  AlertTriangle,
  FileCheck,
  Cpu,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  UserCheck,
  Sliders,
  AlertCircle,
  Terminal,
  Search,
  CheckSquare,
  Scale,
  GitCommit,
  Share2,
  ListFilter
} from "lucide-react";

export default function ContentGovernanceCommandCenterPage() {
  const [activeTab, setActiveTab] = useState<
    "pipeline" | "classifications" | "sources" | "confidence" | "style" | "corrections" | "ai-governance" | "risks" | "ecgis-gate"
  >("pipeline");

  const [checkedEcgisItems, setCheckedEcgisItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleEcgisItem = (id: string) => {
    setCheckedEcgisItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedEcgisCount = Object.values(checkedEcgisItems).filter(Boolean).length;
  const ecgisCompletionPercentage = Math.round((completedEcgisCount / mandatoryEcgisEqlSignoffGate.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 font-sans">
      {/* HEADER BAR */}
      <header className="border-b border-slate-800 bg-slate-900/90 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                  ECGIS-EQL v2.0 System
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Institutional Trust Constitution
                </span>
              </div>
              <h1 className="text-xl font-extrabold text-white tracking-tight">
                Enterprise Content Governance &amp; Institutional Trust Command Center
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href="/admin/editorial-operating-system"
              className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              EEOS v2.0 Hub
            </Link>
            <Link
              href="/admin/content-maintenance"
              className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              CCMS-EQL Maintenance
            </Link>
            <Link
              href="/admin/qa-governance"
              className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              QA Dashboard
            </Link>
            <Link
              href="/admin/user-journey-growth"
              className="px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-600/20 text-xs font-mono font-semibold text-indigo-300 hover:text-white transition-colors"
            >
              EUJG-CRO v1.0
            </Link>
            <Link
              href="/admin/enterprise-performance"
              className="px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-600/20 text-xs font-mono font-semibold text-indigo-300 hover:text-white transition-colors"
            >
              EPCS-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-security"
              className="px-3 py-1.5 rounded-lg border border-rose-500/30 bg-rose-600/20 text-xs font-mono font-semibold text-rose-300 hover:text-white transition-colors"
            >
              ESPD-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-accessibility"
              className="px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-600/20 text-xs font-mono font-semibold text-emerald-300 hover:text-white transition-colors"
            >
              EADS-EQL v1.0
            </Link>
            <Link
              href="/admin/enterprise-qa-verification"
              className="px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-600/20 text-xs font-mono font-semibold text-indigo-300 hover:text-white transition-colors"
            >
              EQVS-EQL v1.0
            </Link>
          </div>
        </div>
      </header>

      {/* HERO / INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-teal-950/30 border border-teal-500/20 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-teal-400">Primary Governance Principle</span>
              <h2 className="text-2xl font-black text-white">
                &ldquo;Every important claim must have a defensible foundation.&rdquo;
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-teal-300 bg-teal-950/60 border border-teal-500/30 px-3.5 py-2 rounded-xl">
              <Scale className="h-4 w-4" />
              <span>Claim &rarr; Research &rarr; Source &rarr; Verify &rarr; Publish &rarr; Maintain</span>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            TechlumeAI operates as a world-class professional technical publication, not as an uncontrolled content-generation system. This command center enforces our 18-point institutional constitution covering source hierarchies, claim verification ledgers, uncertainty transparency, truthful authorship, 6-step error corrections, and strict AI hallucination boundaries.
          </p>
        </div>

        {/* TAB NAVIGATION */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          {[
            { id: "pipeline", label: "Pipeline & Roles", icon: Layers, count: "10 Roles" },
            { id: "classifications", label: "Classifications", icon: FileText, count: "7 Types" },
            { id: "sources", label: "Source & Claim Ledger", icon: Search, count: "3 Tiers" },
            { id: "confidence", label: "Confidence & Authorship", icon: UserCheck, count: "E-E-A-T" },
            { id: "style", label: "Style & Terminology", icon: Sliders, count: "Dictionary" },
            { id: "corrections", label: "Corrections & SLAs", icon: AlertTriangle, count: "4 Severities" },
            { id: "ai-governance", label: "AI & Hallucination Control", icon: Cpu, count: "7-Point Audit" },
            { id: "risks", label: "Risk Assessment", icon: Scale, count: "7 Dimensions" },
            { id: "ecgis-gate", label: "ECGIS-EQL Gate", icon: CheckSquare, count: `${ecgisCompletionPercentage}% Verified` }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 border border-teal-400"
                    : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                  isActive ? "bg-slate-950/20 text-slate-950 font-black" : "bg-slate-800 text-slate-400"
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: PIPELINE, ACCOUNTABILITY ROLES & APPROVAL GATES */}
        {activeTab === "pipeline" && (
          <div className="mt-6 space-y-8">
            {/* Pipeline Overview */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono uppercase font-bold text-teal-400">Institutional Progression</span>
                <h3 className="text-xl font-bold text-white mt-1">7-Step Primary Governance Pipeline</h3>
                <p className="text-xs text-slate-300 mt-1">
                  No important factual claim should be published merely because it sounds plausible. Every article must traverse this mandatory progression.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {primaryGovernancePipeline.map((step) => (
                  <div key={step.stepNumber} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-teal-400">{step.name}</span>
                        <span className="text-[10px] font-mono bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded border border-teal-500/20">Phase {step.stepNumber}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-semibold mt-2">{step.mandate}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                      <strong className="text-slate-300 block mb-1">Verification Activity:</strong>
                      {step.verificationActivity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accountability Roles */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-indigo-400">
                <UserCheck className="h-5 w-5" />
                10 Internal Accountability Roles (`Traceability Across Every Lifecycle Stage`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {editorialAccountabilityRegistry.map((role) => (
                  <div key={role.roleId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-indigo-400">[{role.roleId}]</span>
                        <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">{role.verificationSignoff}</span>
                      </div>
                      <h5 className="text-sm font-bold text-white mt-1.5">{role.roleTitle}</h5>
                      <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside mt-2">
                        {role.coreResponsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-slate-800 text-xs font-mono text-emerald-300 flex items-center justify-between">
                      <span>Deliverable:</span>
                      <strong className="text-white text-[11px] text-right">{role.accountabilityDeliverable}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 Editorial Approval Gates */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
                8 Mandatory Editorial Approval Gates (`Gate 1 to Gate 8`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {editorialApprovalGatesRegistry.map((gate) => (
                  <div key={gate.gateNumber} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-emerald-400 block">{gate.gateName}</span>
                      <p className="text-xs text-white font-bold mt-1.5 leading-relaxed">&ldquo;{gate.coreQuestion}&rdquo;</p>
                      <ul className="space-y-1 text-[11px] text-slate-300 list-disc list-inside mt-2 font-mono">
                        {gate.mandatoryCriteria.map((crit, idx) => (
                          <li key={idx}>{crit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-teal-300 bg-slate-950/60 p-2.5 rounded border border-teal-500/20">
                      <span className="font-bold">Signoff: </span>
                      {gate.accountableSignoffRole}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONTENT CLASSIFICATIONS & EVIDENCE STANDARDS */}
        {activeTab === "classifications" && (
          <div className="mt-6 space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-teal-400">Content Taxonomy &amp; Rigor Matrix</span>
              <h3 className="text-xl font-bold text-white mt-1">7 Canonical Content Classifications &amp; Evidence Standards</h3>
              <p className="text-xs text-slate-300 mt-1">
                The content type determines the exact evidence standard required. Every article must be categorized to enforce its specific verification protocol.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentClassificationRegistry.map((cls) => (
                <div key={cls.classificationId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-teal-300 px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/20 inline-block">
                      {cls.classificationId}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">{cls.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{cls.definition}</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[11px] font-mono font-bold text-amber-400 block mb-1">MANDATORY EVIDENCE STANDARD:</span>
                      <p className="text-xs font-mono text-slate-300">{cls.evidenceStandard}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-indigo-400 block mb-1">Required Sections:</span>
                      <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                        {cls.mandatorySections.map((sec, i) => (
                          <li key={i}>{sec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fact, Analysis, Opinion, Prediction Demarcation */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-amber-400">
                <AlertCircle className="h-5 w-5" />
                Strict Fact, Analysis, Opinion &amp; Prediction Separation Protocol
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {factAnalysisOpinionSeparationProtocol.definitions.map((def, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-300 block">{def.type}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{def.description}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/40 font-mono text-xs text-rose-200 space-y-1">
                <span className="font-bold text-rose-400 block uppercase">Mandatory Institutional Prohibitions:</span>
                <ul className="list-disc list-inside space-y-1">
                  {factAnalysisOpinionSeparationProtocol.strictProhibitions.map((prohib, idx) => (
                    <li key={idx}>{prohib}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SOURCE HIERARCHY & CLAIM VERIFICATION LEDGER */}
        {activeTab === "sources" && (
          <div className="mt-6 space-y-8">
            {/* Source Hierarchy */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono uppercase font-bold text-teal-400">Evidence Architecture</span>
                <h3 className="text-xl font-bold text-white mt-1">3-Tier Source Hierarchy &amp; Verification Protocol</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Community sources can provide useful signals but should never automatically be treated as definitive evidence.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {sourceHierarchyRegistry.map((tier) => (
                  <div key={tier.levelId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-teal-300">{tier.tierName}</span>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Trust Weight: {tier.trustWeight}/10</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono text-slate-400">Approved Source Types:</span>
                        <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside font-mono">
                          {tier.sourceTypes.map((st, i) => (
                            <li key={i}>{st}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      <strong className="text-indigo-400 block mb-1">Usage Mandate:</strong>
                      {tier.mandateAndUsageRule}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Source Verification Checks */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-indigo-400">
                <ListFilter className="h-5 w-5" />
                6-Point Source Evaluation Checks (`Before Relying on Any Source`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sourceVerificationAndEvaluationChecks.map((chk) => (
                  <div key={chk.checkId} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-indigo-300">[{chk.checkId}]</span>
                      <span className="text-xs font-bold text-white">{chk.name}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-mono">{chk.question}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Claim Verification Ledger */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2 text-teal-400">
                    <CheckSquare className="h-5 w-5" />
                    7-Field Claim Verification Ledger (`CLM-2026-101 to 105`)
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    For significant statistics, benchmarks, pricing, security claims, and specifications, internally record every verification parameter.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {sampleClaimVerificationLedger.map((claim) => (
                  <div key={claim.claimId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-teal-400 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                          {claim.claimId}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {claim.sourceType}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono">
                        <span className="text-slate-400">Pub Date: <strong className="text-white">{claim.publicationDate}</strong></span>
                        <span className="text-slate-400">Verified: <strong className="text-emerald-400">{claim.verificationDate}</strong></span>
                        <span className={`px-2 py-0.5 rounded font-bold border ${
                          claim.confidenceLevel === "HIGH_CONFIDENCE" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                          claim.confidenceLevel === "MEDIUM_CONFIDENCE" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" :
                          claim.confidenceLevel === "LOW_CONFIDENCE" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                          "bg-purple-500/10 text-purple-400 border-purple-500/20"
                        }`}>
                          {claim.confidenceLevel}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-bold text-white leading-relaxed">&ldquo;{claim.claimStatement}&rdquo;</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                          <span className="text-indigo-400 font-bold block mb-1">Supporting Source &amp; URL:</span>
                          {claim.sourceNameAndUrl}
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                          <span className="text-emerald-400 font-bold block mb-1">Verification Methodology / Notes:</span>
                          {claim.notesAndMethodology}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CONFIDENCE, UNCERTAINTY & TRUTHFUL AUTHORSHIP */}
        {activeTab === "confidence" && (
          <div className="mt-6 space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-teal-400">Institutional Honesty &amp; E-E-A-T</span>
              <h3 className="text-xl font-bold text-white mt-1">Confidence Classifications, Uncertainty Transparency &amp; Truthful Authorship</h3>
              <p className="text-xs text-slate-300 mt-1">
                Trust cannot be manufactured through fictional credentials or false certainty. When information is uncertain, state so clearly and accurately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {confidenceLevelRegistry.map((lvl, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div>
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border inline-block ${lvl.badgeClass}`}>
                      {lvl.level}
                    </span>
                    <p className="text-xs text-slate-300 mt-3 leading-relaxed">{lvl.criteria}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 bg-slate-950/60 p-2.5 rounded">
                    <span className="text-indigo-300 font-bold block mb-1">Recommended Phrasing:</span>
                    {lvl.recommendedPhrasing}
                  </div>
                </div>
              ))}
            </div>

            {/* Uncertainty Transparency Phrasing Protocol */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-indigo-500/20 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-indigo-400">
                <HelpCircle className="h-5 w-5" />
                Uncertainty Transparency Phrasing Protocol (`Zero False Precision`)
              </h4>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                {uncertaintyTransparencyProtocol.coreMandate}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {uncertaintyTransparencyProtocol.approvedTransparencyPhrases.map((phrase, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-teal-300">
                    &ldquo;{phrase}&rdquo;
                  </div>
                ))}
              </div>
            </div>

            {/* Truthful Authorship & 6 High-Risk Expert Review Domains */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-rose-500/30 space-y-2">
                <h4 className="text-base font-bold text-rose-400 flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Truthful Authorship &amp; Expert Review Mandate
                </h4>
                <p className="text-xs font-mono text-slate-200 leading-relaxed font-bold">
                  {truthfulAuthorshipAndExpertReviewRegistry.authorshipIntegrityRule}
                </p>
                <p className="text-xs text-slate-300">
                  {truthfulAuthorshipAndExpertReviewRegistry.reviewAttestationRule}
                </p>
              </div>

              <h5 className="text-sm font-bold text-white pt-2">6 High-Risk Domains Requiring Verified Independent Expert Review</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {truthfulAuthorshipAndExpertReviewRegistry.highRiskReviewCategories.map((hr, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-amber-400">{hr.category}</span>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{hr.riskRationale}</p>
                    </div>
                    <div className="pt-2.5 border-t border-slate-800 text-xs font-mono text-emerald-300 bg-slate-950/60 p-2.5 rounded border border-emerald-500/20">
                      <span className="font-bold block text-[10px] text-slate-400 uppercase">Reviewer Requirement:</span>
                      {hr.reviewerRequirement}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: STYLE GUIDE, TERMINOLOGY & BIAS CONTROL */}
        {activeTab === "style" && (
          <div className="mt-6 space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-teal-400">Institutional Consistency</span>
              <h3 className="text-xl font-bold text-white mt-1">Editorial Style Guide, Terminology Dictionary &amp; Bias Control</h3>
              <p className="text-xs text-slate-300 mt-1">
                A consistent publication appears more trustworthy and is easier to maintain. Avoid inconsistent terminology or promotional bias across articles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {editorialStyleAndTerminologyControl.styleGuideMandates.map((sg, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-teal-400">{sg.element}</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">{sg.standard}</p>
                </div>
              ))}
            </div>

            {/* Terminology Dictionary */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-indigo-400">
                <BookOpen className="h-5 w-5" />
                Technical Terminology Control Dictionary (`Official vs Deprecated Terms`)
              </h4>
              <div className="space-y-3">
                {editorialStyleAndTerminologyControl.terminologyDictionary.map((td, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Official Canonical Term:</span>
                      <strong className="text-sm text-white font-bold">{td.officialTerm}</strong>
                      <span className="text-xs font-mono text-teal-400 block mt-0.5">Abbrev: ({td.abbreviation})</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Approved Alternatives:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {td.alternativeTerms.map((alt, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">{alt}</span>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-[10px] font-mono text-rose-400 uppercase block font-bold">Deprecated / Prohibited Terms:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {td.deprecatedTerms.map((dep, i) => (
                          <span key={i} className="px-2.5 py-0.5 rounded bg-rose-950/40 text-rose-300 font-mono text-[11px] border border-rose-500/30 line-through">
                            {dep}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bias Control & Commercial Disclosure Protocol */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-amber-400 block">Editorial Bias Control Rules</span>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  {editorialBiasAndCommercialDisclosureProtocol.biasControlRules.map((br, idx) => (
                    <li key={idx} className="leading-relaxed">{br}</li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-teal-400 block">Commercial &amp; Sponsored Disclosure Rules</span>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  {editorialBiasAndCommercialDisclosureProtocol.commercialDisclosureRules.map((cr, idx) => (
                    <li key={idx} className="leading-relaxed">{cr}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: CORRECTIONS POLICY, ERROR SEVERITIES & CHANGE CONTROL */}
        {activeTab === "corrections" && (
          <div className="mt-6 space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-teal-400">Institutional Accountability</span>
              <h3 className="text-xl font-bold text-white mt-1">Correction Policy, 4 Error Severity Levels &amp; Change Control Ledger</h3>
              <p className="text-xs text-slate-300 mt-1">
                Do not silently preserve known serious inaccuracies. When an error is discovered, verify, classify, correct, review related articles, and log internally.
              </p>
            </div>

            {/* 6-Step Correction Procedure */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-indigo-500/20 space-y-3">
              <span className="text-xs font-mono font-bold text-indigo-400 block">Mandatory 6-Step Correction Procedure</span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {errorSeverityAndCorrectionRegistry.sixStepCorrectionProcedure.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Error Severity Levels */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-amber-400">
                <AlertTriangle className="h-5 w-5" />
                4 Error Severity Classification &amp; SLA Response Matrix
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {errorSeverityAndCorrectionRegistry.severityLevels.map((sev) => (
                  <div key={sev.severityId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${sev.badgeClass}`}>
                          {sev.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{sev.definition}</p>
                    </div>
                    <div className="space-y-2 pt-3 border-t border-slate-800 font-mono text-xs">
                      <div className="flex items-center justify-between text-teal-300">
                        <span>Max SLA:</span>
                        <strong className="text-white">{sev.remediationSla}</strong>
                      </div>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
                        <strong className="text-indigo-400 block mb-1">Required Action:</strong>
                        {sev.requiredAction}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Change Control Ledger */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-teal-400">
                <GitCommit className="h-5 w-5" />
                Content Change Control &amp; Provenance Ledger (`CHG-2026-087 to 088`)
              </h4>
              <div className="space-y-4">
                {sampleContentChangeLedger.map((chg) => (
                  <div key={chg.logId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-bold text-teal-400 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                          {chg.logId}
                        </span>
                        <span className="text-xs text-slate-300">{chg.articleSlug}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-slate-400">Date: <strong className="text-white">{chg.changeDate}</strong></span>
                        <span className="text-slate-400">Editor: <strong className="text-indigo-300">{chg.accountableEditor}</strong></span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-950 border border-rose-500/20 text-slate-300">
                        <span className="text-rose-400 font-bold block mb-1">Previous State:</span>
                        {chg.previousState}
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/20 text-slate-300">
                        <span className="text-emerald-400 font-bold block mb-1">New Corrected State:</span>
                        {chg.newState}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                      <div>
                        <span className="text-slate-400 block">Reason for Change:</span>
                        <span className="text-slate-200">{chg.reasonForChange}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Verified Level 1 Source:</span>
                        <span className="text-teal-300">{chg.verifiedSource}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: AI GOVERNANCE & HALLUCINATION CONTROL */}
        {activeTab === "ai-governance" && (
          <div className="mt-6 space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-teal-400">Human-Verified Engineering</span>
              <h3 className="text-xl font-bold text-white mt-1">AI-Assisted Content Governance &amp; 7-Point Hallucination Audit</h3>
              <p className="text-xs text-slate-300 mt-1">
                AI may assist with drafting, structuring, and research organization, but AI output MUST NEVER automatically be treated as fact. Human publication directors remain 100% accountable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-emerald-400 block">Permitted AI Assistance Boundaries</span>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside font-mono">
                  {aiAssistedContentGovernanceAndHallucinationControl.permittedAiAssistanceBoundaries.map((pb, idx) => (
                    <li key={idx} className="leading-relaxed">{pb}</li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-rose-500/30 space-y-3">
                <span className="text-xs font-mono font-bold text-rose-400 block">Strict AI Prohibitions (`Zero Blind Trust`)</span>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside font-mono">
                  {aiAssistedContentGovernanceAndHallucinationControl.strictAiProhibitions.map((pro, idx) => (
                    <li key={idx} className="leading-relaxed font-bold">{pro}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 7-Point Hallucination Audit Checklist */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-teal-400">
                <Cpu className="h-5 w-5" />
                Mandatory 7-Point Pre-Publication Hallucination Audit (`HAL-01 to HAL-07`)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aiAssistedContentGovernanceAndHallucinationControl.sevenPointHallucinationAuditChecklist.map((hal) => (
                  <div key={hal.checkId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-teal-400">[{hal.checkId}]</span>
                        <span className="text-xs font-bold text-white">{hal.target}</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed font-mono">{hal.auditProcedure}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Knowledge Provenance & Content Reuse Rules */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 pt-6">
              <h4 className="text-base font-bold text-white flex items-center gap-2 text-indigo-400">
                <Share2 className="h-5 w-5" />
                Knowledge Provenance &amp; Content Reuse Governance Protocol
              </h4>
              <p className="text-xs font-mono text-slate-300 font-bold">
                {knowledgeProvenanceAndReuseProtocol.provenanceMandate}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {knowledgeProvenanceAndReuseProtocol.contentReuseGovernanceRules.map((ru, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
                    {ru}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 8: EDITORIAL RISK ASSESSMENT MATRIX */}
        {activeTab === "risks" && (
          <div className="mt-6 space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-teal-400">Proactive Risk Management</span>
              <h3 className="text-xl font-bold text-white mt-1">7-Dimension Editorial Risk Assessment Matrix</h3>
              <p className="text-xs text-slate-300 mt-1">
                Before publishing high-impact content, evaluate accuracy risk, outdated risk, security risk, legal liability, misinterpretation, source reliability, and reputation impact.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-teal-500/30 font-mono text-xs text-teal-300 font-bold inline-block">
                {editorialRiskAssessmentRegistry.riskScoringFormula}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {editorialRiskAssessmentRegistry.riskDimensions.map((rsk) => (
                <div key={rsk.dimensionId} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-400 block">[{rsk.dimensionId}] {rsk.dimensionName}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{rsk.riskDescription}</p>
                    <div className="space-y-1 pt-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400">High-Risk Indicators:</span>
                      <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside font-mono">
                        {rsk.highRiskIndicators.map((hi, i) => (
                          <li key={i}>{hi}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-800 text-xs font-mono text-emerald-300 bg-slate-950/60 p-3 rounded border border-emerald-500/20">
                    <span className="font-bold text-white block mb-1">Mandatory Risk Control:</span>
                    {rsk.mandatoryRiskControl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 9: MANDATORY ECGIS-EQL v2.0 SIGNOFF GATE (18 POINTS) */}
        {activeTab === "ecgis-gate" && (
          <div className="mt-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-teal-400">Institutional Certification Gate</span>
                <h3 className="text-xl font-bold text-white mt-1">ECGIS-EQL v2.0 Mandatory Governance Signoff Gate (`ECGIS-EQL-01 to 18`)</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verify all 18 enterprise governance checks before declaring the governance verification finalized and certifying publication.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{completedEcgisCount} of {mandatoryEcgisEqlSignoffGate.length} Verified</span>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                  ecgisCompletionPercentage === 100
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-teal-500/10 text-teal-400 border-teal-500/20"
                }`}>
                  {ecgisCompletionPercentage}% ECGIS Signoff
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mandatoryEcgisEqlSignoffGate.map((item) => {
                const isChecked = checkedEcgisItems[item.id] || false;
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleEcgisItem(item.id)}
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
                      <p className="text-xs text-slate-200 leading-relaxed font-bold">{item.requirement}</p>
                      <div className="text-[11px] font-mono text-slate-400 pt-1.5 border-t border-slate-800/80 flex items-center justify-between">
                        <span>Check: <strong className="text-slate-300">{item.verificationMethod}</strong></span>
                        <span className="text-indigo-400 font-bold">Role: {item.accountableRole}</span>
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
