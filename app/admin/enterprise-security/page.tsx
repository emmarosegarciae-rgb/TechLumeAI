"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Lock,
  Key,
  Database,
  FileCode,
  Terminal,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  Award,
  Layers,
  Search,
  Server,
  Network,
  Eye,
  RefreshCw,
  Compass,
  FileText
} from "lucide-react";
import {
  securityAssetInventoryRegistry,
  threatModelingLedger,
  secretsAndCodeSecurityRules,
  securityHeadersAndCspMatrix,
  devSecOpsAndSupplyChainLedger,
  privacyAndThirdPartyAuditMatrix,
  aiSecurityThreatDefenseLedger,
  incidentResponseProgression,
  mandatoryEspdEqlSignoffGate,
  GateChecklistItem
} from "@/lib/data/enterprise-security-system";

export default function EnterpriseSecurityCommandCenterPage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "assets" | "threats" | "code" | "headers" | "privacy" | "incident" | "gate"
  >("overview");

  const [searchQuery, setSearchQuery] = useState("");
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalItems = mandatoryEspdEqlSignoffGate.length;
  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedCount / totalItems) * 100);

  const filteredThreats = threatModelingLedger.filter(
    (t) =>
      t.targetSystem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.threatType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.vulnerabilityDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 selection:bg-rose-500 selection:text-white font-sans">
      {/* HEADER / NAVIGATION BAR */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <ShieldAlert className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  ESPD-EQL v1.0
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Enterprise Security &amp; DevSecOps
                </span>
              </div>
              <h1 className="text-lg font-bold text-white tracking-tight">
                TechlumeAI Security, Privacy &amp; AI Defense Command Center
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
            <Link
              href="/admin/editorial-operating-system"
              className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 border border-rose-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-lg shadow-rose-600/20"
            >
              <Award className="h-3.5 w-3.5" />
              15-Phase OS
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-rose-950/30 border border-rose-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-rose-500/20 border border-rose-500/30 text-rose-300 font-mono text-xs font-bold tracking-wide uppercase flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Primary Security Lifecycle
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                IDENTIFY &rarr; MODEL &rarr; PREVENT &rarr; DETECT &rarr; RESPOND &rarr; RECOVER &rarr; VERIFY
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Security must be treated as a continuous process, not a one-time checklist. Never assume the frontend is secure because it looks professional, or dependencies are safe because they are popular. Every system, API, and RAG vector pipeline must be audited and enforced server-side.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="px-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center min-w-[140px]">
                <span className="text-xs font-mono text-slate-400">Gate Signoff</span>
                <span className="text-2xl font-black text-rose-400 mt-0.5">{completionPercentage}%</span>
                <span className="text-[10px] text-slate-500 mt-0.5">({completedCount} / {totalItems} Gates)</span>
              </div>
              <button
                onClick={() => setActiveTab("gate")}
                className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs tracking-wide uppercase shadow-lg shadow-rose-600/25 transition-all flex items-center justify-center gap-2"
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
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Compass className="h-4 w-4" />
            Executive Overview
          </button>
          <button
            onClick={() => setActiveTab("assets")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "assets"
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Database className="h-4 w-4" />
            Asset Inventory ({securityAssetInventoryRegistry.length})
          </button>
          <button
            onClick={() => setActiveTab("threats")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "threats"
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            STRIDE Threat Ledger ({threatModelingLedger.length})
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "code"
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <FileCode className="h-4 w-4" />
            Secrets &amp; Code Rules ({secretsAndCodeSecurityRules.length})
          </button>
          <button
            onClick={() => setActiveTab("headers")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "headers"
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Server className="h-4 w-4" />
            Headers, CSP &amp; Supply Chain
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "privacy"
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Lock className="h-4 w-4" />
            Privacy &amp; AI Threat Defense
          </button>
          <button
            onClick={() => setActiveTab("incident")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "incident"
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <RefreshCw className="h-4 w-4" />
            9-Step Incident Response
          </button>
          <button
            onClick={() => setActiveTab("gate")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all ${
              activeTab === "gate"
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Award className="h-4 w-4" />
            14-Point Signoff Gate
          </button>
        </div>

        {/* TAB 1: EXECUTIVE OVERVIEW */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <span className="text-xs font-mono uppercase font-bold text-rose-400">Institutional Constitution</span>
                <h3 className="text-xl font-bold text-white">The TechlumeAI Security &amp; DevSecOps Mandate</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  TechlumeAI operates as a premier authority across modern AI engineering, Model Context Protocol (`MCP`), and RAG architectures. To protect our readers, enterprise advisors, and search visibility, our security posture must be bulletproof. We do not rely on security by obscurity or superficial UI hiding.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <span className="text-xs font-bold text-rose-300 font-mono">1. Server-Side Enforcement</span>
                    <p className="text-[11px] text-slate-400">
                      Frontend hiding (`if (!isAdmin) return null`) is strictly UX. Every API handler, mutation, or admin route independently validates sessions and Zod schemas on the server.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <span className="text-xs font-bold text-rose-300 font-mono">2. Zero Hardcoded Secrets</span>
                    <p className="text-[11px] text-slate-400">
                      All API tokens live inside Vercel Encrypted Environment Vault. Zero `NEXT_PUBLIC_` leakage on private secrets. Pre-commit hooks (`gitleaks`) block secret commits.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <span className="text-xs font-bold text-rose-300 font-mono">3. AI &amp; RAG Threat Isolation</span>
                    <p className="text-[11px] text-slate-400">
                      Untrusted retrieved external chunks are bounded by strict delimiters. System prompts prohibit external documents from overriding safety or editorial rules (`AI-01 to AI-06`).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <span className="text-xs font-bold text-rose-300 font-mono">4. Security vs Performance Balance</span>
                    <p className="text-[11px] text-slate-400">
                      Security controls (`CSP, HSTS, Zod validation, WAF limits`) are engineered for high efficacy without destroying Core Web Vitals (`LCP &lt; 2.5s`) or accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-b from-rose-950/30 to-slate-900 border border-rose-500/30 space-y-4">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                  <Terminal className="h-4 w-4" />
                  Primary Principles Checklist
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Never assume</strong> frontend looks make it secure. Verify backend routes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Never assume</strong> popular dependencies are safe. Audit `package-lock.json` (`npm ci`).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Never assume</strong> environment variables are safe if prefixed `NEXT_PUBLIC_`.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Never assume</strong> AI-generated code is safe by default. Verify syntax and dependencies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Continuous Process:</strong> Identify &rarr; Model &rarr; Prevent &rarr; Detect &rarr; Respond &rarr; Recover &rarr; Verify.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ASSET INVENTORY */}
        {activeTab === "assets" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">Inventory Assessment</span>
              <h3 className="text-xl font-bold text-white mt-1">12-Point Security Asset Inventory (`AST-01 to AST-12`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Before you can secure an enterprise, you must know what exists, where it resides, who has access, and what happens if it is compromised.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityAssetInventoryRegistry.map((asset) => (
                <div key={asset.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 transition-all space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold">
                        {asset.id}
                      </span>
                      <h4 className="text-base font-bold text-white">{asset.assetName}</h4>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">What Exists:</span>
                      <p className="text-slate-200 mt-0.5">{asset.whatExists}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Where It Resides:</span>
                      <p className="text-slate-300 mt-0.5 font-mono text-[11px] bg-slate-950/60 p-2 rounded border border-slate-800">{asset.whereItExists}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Who Can Access:</span>
                      <p className="text-rose-300 mt-0.5 font-semibold">{asset.whoCanAccess}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-red-400 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> Compromise Impact:
                      </span>
                      <p className="text-slate-300 mt-0.5">{asset.compromiseImpact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: STRIDE THREAT LEDGER */}
        {activeTab === "threats" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-rose-400">Threat Modeling (`STRIDE`)</span>
                <h3 className="text-xl font-bold text-white mt-1">Enterprise Threat Ledger &amp; Attack Path Mitigations</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Evaluating: `ASSET &rarr; THREAT &rarr; VULNERABILITY &rarr; ATTACK PATH &rarr; IMPACT &rarr; MITIGATION`.
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter threats (`e.g., XSS, API, RAG`)..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-all font-mono"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredThreats.map((threat) => (
                <div key={threat.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 transition-all space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold">
                        {threat.id}
                      </span>
                      <h4 className="text-base font-bold text-white">{threat.targetSystem}</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 font-mono text-xs font-bold">
                      {threat.threatType}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-3">
                      <div>
                        <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Vulnerability Description:</span>
                        <p className="text-slate-200 mt-0.5 leading-relaxed">{threat.vulnerabilityDescription}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Attack Path:</span>
                        <p className="text-slate-300 mt-0.5 bg-slate-950/60 p-2 rounded border border-slate-800 font-mono text-[11px]">{threat.attackPath}</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex flex-col justify-between">
                      <div>
                        <span className="text-red-400 font-bold font-mono uppercase text-[10px]">Business Impact:</span>
                        <p className="text-slate-300 mt-0.5 leading-relaxed">{threat.businessImpact}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30">
                        <span className="text-rose-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1.5">
                          <ShieldCheck className="h-3.5 w-3.5" /> Mandatory Architectural Mitigation:
                        </span>
                        <p className="text-white font-medium mt-1 leading-relaxed">{threat.mandatoryMitigation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SECRETS & CODE RULES */}
        {activeTab === "code" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">Source Code &amp; Secrets Governance</span>
              <h3 className="text-xl font-bold text-white mt-1">Secrets Management &amp; Code Security Rules (`SEC-01 to SEC-06`)</h3>
              <p className="text-xs text-slate-300 mt-1">
                Code that compiles is not automatically safe. We enforce zero hardcoding, strict server-side validation (`Zod`), and zero stack trace leakage in production error pages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {secretsAndCodeSecurityRules.map((rule) => (
                <div key={rule.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold">
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
                      <p className="text-slate-300 mt-0.5 font-mono text-[11px] bg-slate-950/60 p-2 rounded border border-slate-800">{rule.prohibitedAntiPattern}</p>
                    </div>
                    <div>
                      <span className="text-rose-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5" /> Required Security Control:
                      </span>
                      <p className="text-slate-200 mt-0.5 leading-relaxed font-medium">{rule.requiredSecurityControl}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Verification / Remediation Check:</span>
                      <p className="text-slate-300 mt-0.5 font-mono text-[11px]">{rule.remediationCommandOrCheck}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: HEADERS, CSP & SUPPLY CHAIN */}
        {activeTab === "headers" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">HTTP Headers &amp; Content Security Policy</span>
              <h3 className="text-xl font-bold text-white">Active `next.config.mjs` Security Headers Matrix</h3>
              <p className="text-xs text-slate-300">
                Our application strictly implements defensive HTTP headers to block Clickjacking, MIME sniffing, invasive hardware permissions, and unauthorized cross-site script execution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {securityHeadersAndCspMatrix.map((hdr, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-rose-400">{hdr.headerName}</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active in next.config.mjs</span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-300 bg-slate-900 p-2 rounded border border-slate-800 break-all">{hdr.configuredValue}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{hdr.protectionGoal}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">DevSecOps &amp; Supply-Chain Security</span>
              <h3 className="text-xl font-bold text-white">Dependency &amp; CI/CD Governance Ledger (`DEV-01 to DEV-05`)</h3>
              <p className="text-xs text-slate-300">
                Use the minimum dependency surface necessary. When a dependency is unnecessary: <strong>Remove it.</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {devSecOpsAndSupplyChainLedger.map((dev) => (
                  <div key={dev.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold">
                        {dev.id}
                      </span>
                      <h4 className="text-xs font-bold text-white">{dev.focusArea}</h4>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Audit Command / Policy:</span>
                      <p className="text-slate-200 mt-0.5 font-mono text-[11px] bg-slate-900 p-1.5 rounded">{dev.auditCommandOrPolicy}</p>
                    </div>
                    <div>
                      <span className="text-rose-300 font-bold font-mono uppercase text-[10px]">Remediation Protocol:</span>
                      <p className="text-slate-300 mt-0.5 text-xs leading-relaxed">{dev.remediationProtocol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: PRIVACY & AI THREAT DEFENSE */}
        {activeTab === "privacy" && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">Privacy Engineering Audit</span>
              <h3 className="text-xl font-bold text-white">Third-Party Privacy &amp; Data Minimization Audit Matrix</h3>
              <p className="text-xs text-slate-300">
                Evaluating: `WHAT DATA IS SHARED? &rarr; WHY IS IT SHARED? &rarr; IS IT NECESSARY? &rarr; IS IT DISCLOSED?`
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {privacyAndThirdPartyAuditMatrix.map((priv, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <h4 className="text-sm font-bold text-white">{priv.thirdPartyCategory}</h4>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Data Shared:</span>
                      <p className="text-slate-200 mt-0.5">{priv.dataShared}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Business Necessity:</span>
                      <p className="text-slate-300 mt-0.5">{priv.businessNecessity}</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                      <span className="text-emerald-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3" /> Privacy Control &amp; Disclosure:
                      </span>
                      <p className="text-white mt-1 leading-relaxed">{priv.privacyControlAndDisclosure}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">AI &amp; RAG Threat Defense</span>
              <h3 className="text-xl font-bold text-white">AI Security Threat Defense Ledger (`AI-01 to AI-06`)</h3>
              <p className="text-xs text-slate-300">
                AI output must not automatically be trusted. Treat all external content and retrieved vector chunks as potentially untrusted data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {aiSecurityThreatDefenseLedger.map((ai) => (
                  <div key={ai.id} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-rose-500/40 transition-all space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold">
                          {ai.id}
                        </span>
                        <h4 className="text-sm font-bold text-white">{ai.threatVector}</h4>
                      </div>
                    </div>
                    <div>
                      <span className="text-red-400 font-bold font-mono uppercase text-[10px]">Attack Scenario:</span>
                      <p className="text-slate-300 mt-0.5 font-mono text-[11px] bg-slate-900 p-2 rounded border border-slate-800">{ai.attackScenario}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30">
                      <span className="text-rose-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5" /> Architectural Defense:
                      </span>
                      <p className="text-white font-medium mt-1 leading-relaxed">{ai.architecturalDefense}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: INCIDENT RESPONSE PROGRESSION */}
        {activeTab === "incident" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-mono uppercase font-bold text-rose-400">Incident Lifecycle</span>
              <h3 className="text-xl font-bold text-white mt-1">9-Step Security Incident Response &amp; Recovery Progression</h3>
              <p className="text-xs text-slate-300 mt-1">
                If a security incident occurs, do not simply fix the visible symptom. Execute our structured 9-step progression to isolate, eradicate, rotate, verify, and harden the enterprise.
              </p>
            </div>

            <div className="space-y-4">
              {incidentResponseProgression.map((step) => (
                <div key={step.stepOrder} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-rose-600/20 border border-rose-500/40 text-rose-300 font-mono font-bold flex items-center justify-center text-sm">
                        {step.stepOrder}
                      </span>
                      <h4 className="text-base font-bold text-white">{step.phaseName}</h4>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                    <div>
                      <span className="text-slate-400 font-semibold font-mono uppercase text-[10px]">Action Mandate:</span>
                      <p className="text-slate-200 mt-0.5 leading-relaxed font-medium">{step.actionMandate}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-rose-300 font-bold font-mono uppercase text-[10px] flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-rose-400" /> Verification Gate:
                      </span>
                      <p className="text-slate-300 mt-1 font-mono text-[11px]">{step.verificationGate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: 14-POINT SIGNOFF GATE */}
        {activeTab === "gate" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-rose-400">Institutional Certification Gate</span>
                <h3 className="text-xl font-bold text-white mt-1">Mandatory 14-Point `ESPD-EQL v1.0` Security &amp; DevSecOps Gate</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Do not declare the security system complete or certify any route until all 14 gates pass verified live inspection.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 shrink-0">
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-400">Gate Signoff Status</div>
                  <div className="text-xl font-black text-white font-mono">{completionPercentage}% Completed</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-400 font-bold font-mono">
                  {completedCount}/{totalItems}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-rose-600 via-red-500 to-amber-500 transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>

            <div className="space-y-4">
              {mandatoryEspdEqlSignoffGate.map((gate) => {
                const isChecked = !!completedItems[gate.id];
                return (
                  <div
                    key={gate.id}
                    onClick={() => toggleItem(gate.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isChecked
                        ? "bg-rose-950/20 border-rose-500/50 shadow-lg shadow-rose-500/5"
                        : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="mt-1 shrink-0">
                      <div
                        className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                          isChecked
                            ? "bg-rose-600 border-rose-500 text-white"
                            : "bg-slate-950 border-slate-700 text-transparent"
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-rose-300 font-mono text-xs font-bold">
                            {gate.id}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wide text-slate-400 font-mono">
                            {gate.category}
                          </span>
                        </div>
                        {isChecked && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" /> Verified Secure
                          </span>
                        )}
                      </div>
                      <p className={`text-xs sm:text-sm font-medium leading-relaxed ${isChecked ? "text-white" : "text-slate-300"}`}>
                        {gate.item}
                      </p>
                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2 text-xs">
                        <span className="text-rose-400 font-mono font-bold uppercase text-[10px] shrink-0">Verification Standard:</span>
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
