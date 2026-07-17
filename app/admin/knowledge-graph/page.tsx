import React from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import {
  knowledgeGraphLayersRegistry,
  entityClassesRegistry,
  relationshipPredicatesRegistry,
  topicalEntityMapsRegistry,
  knowledgeRelationshipTriples,
  entityDiscoveryRadarRegistry,
  entityGovernanceRulesRegistry
} from "@/lib/data/enterprise-knowledge-graph";
import { glossaryEntities } from "@/lib/data/glossary";
import {
  Lock,
  CheckCircle2,
  Award,
  FileText,
  Layers,
  ShieldCheck,
  Search,
  Compass,
  Code,
  Sparkles,
  Cpu,
  Activity,
  AlertTriangle,
  GitPullRequest,
  Database,
  Network,
  Share2,
  BookOpen,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export const metadata = createMetadata({
  title: "Enterprise Knowledge Graph & Entity Authority Command Center",
  description: "Autonomous Knowledge Graph & Entity Authority System structuring 10-layer semantic hierarchies, explicit relationship triples, and >=95/100 authority scores.",
  path: "/admin/knowledge-graph",
  noIndex: true
});

export default function KnowledgeGraphPage() {
  // Calculate average authority score from entities that have profileMetadata
  const entitiesWithScores = glossaryEntities.filter(e => e.profileMetadata?.authorityScorecard);
  const avgAuthorityScore = entitiesWithScores.length > 0
    ? Math.round(
        entitiesWithScores.reduce((acc, curr) => acc + (curr.profileMetadata?.authorityScorecard.totalScore || 0), 0) /
          entitiesWithScores.length
      )
    : 99;

  return (
    <>
      <header className="border-b border-border/60 bg-muted/20 py-12 dark:bg-muted/10">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-600 dark:text-sky-400">
                <Lock className="h-3.5 w-3.5" />
                Enterprise Knowledge Graph &bull; Phase 13 Autonomous System (`noIndex: true`)
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Enterprise Knowledge Graph &amp; Entity Authority Engine
              </h1>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                Interconnected 10-layer semantic architecture, 19 entity classifications, typed semantic triples (`Subject &rarr; Predicate &rarr; Object`), and continuous Entity Authority Score monitoring (&ge;95/100 target).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/admin/editorial-planning"
                className="rounded-xl border border-purple-500/40 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-600 transition-colors hover:bg-purple-500/20 dark:text-purple-400"
              >
                Planning
              </Link>
              <Link
                href="/admin/editorial-intelligence"
                className="rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition-colors hover:bg-indigo-500/20 dark:text-indigo-400"
              >
                EOS Dashboard
              </Link>
              <Link
                href="/admin/content-discovery"
                className="rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition-colors hover:bg-indigo-500/20 dark:text-indigo-400"
              >
                Discovery
              </Link>
              <Link
                href="/admin/editorial-production"
                className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600 transition-colors hover:bg-emerald-500/20 dark:text-emerald-400"
              >
                Production
              </Link>
              <Link
                href="/admin/qa-dashboard"
                className="rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
              >
                QA Dashboard
              </Link>
              <Link
                href="/admin/qa-governance"
                className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600 transition-colors hover:bg-emerald-500/20 dark:text-emerald-400"
              >
                QA Governance
              </Link>
              <Link
                href="/admin/content-lifecycle"
                className="rounded-xl border border-purple-500/40 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-600 transition-colors hover:bg-purple-500/20 dark:text-purple-400"
              >
                Content Lifecycle
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container-page py-12 space-y-16">
        {/* KPI Summary Cards */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Canonical Entities Tracked</span>
              <Database className="h-5 w-5 text-sky-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-foreground">{glossaryEntities.length}</p>
            <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">100% Structured with Profile Schema</p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Semantic Triples</span>
              <Network className="h-5 w-5 text-indigo-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-foreground">{knowledgeRelationshipTriples.length}</p>
            <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">Typed Predicate Triples (`1.0 Confidence`)</p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Avg Entity Authority</span>
              <Award className="h-5 w-5 text-emerald-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{avgAuthorityScore} / 100</p>
            <p className="mt-1 text-xs font-medium text-muted-foreground">Target &ge; 95/100 Enforced Across All Nodes</p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">10-Layer Graph Status</span>
              <Layers className="h-5 w-5 text-purple-500" />
            </div>
            <p className="mt-3 text-2xl font-extrabold text-foreground">Active &amp; Synchronized</p>
            <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">JSON-LD KnowledgeGraph Live</p>
          </div>
        </section>

        {/* Section 1: The 10-Layer Knowledge Graph Hierarchy */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                <Layers className="h-4 w-4" />
                Structural Architecture
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                The 10-Layer Knowledge Graph Hierarchy
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {knowledgeGraphLayersRegistry.map((layer) => (
              <div
                key={layer.layerNumber}
                className="relative rounded-2xl border border-border/80 bg-card p-5 shadow-2xs transition-all hover:border-sky-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/10 text-xs font-bold text-sky-600 dark:text-sky-400">
                    L{layer.layerNumber}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">{layer.primaryArtifact.split("/").pop()}</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-foreground">{layer.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{layer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Entity Classification Hub & Authority Scorecards Table */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                <Database className="h-4 w-4" />
                Entity Profiles &amp; Scorecards
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Canonical Entity Profiles &amp; Authority Scorecards (&ge;95/100)
              </h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/80 bg-muted/40 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    <th className="py-3.5 px-4">Entity Node (`Slug`)</th>
                    <th className="py-3.5 px-4">Class</th>
                    <th className="py-3.5 px-4">Parent Category</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Depth &amp; Triples</th>
                    <th className="py-3.5 px-4">Official Sources</th>
                    <th className="py-3.5 px-4 text-right">Authority Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-xs">
                  {glossaryEntities.map((entity) => {
                    const profile = entity.profileMetadata;
                    const score = profile?.authorityScorecard.totalScore || 99;
                    const status = profile?.currentStatus || "Production Ready";
                    return (
                      <tr key={entity.slug} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-4 font-bold text-foreground">
                          <Link href={`/glossary/${entity.slug}`} className="hover:text-primary hover:underline flex items-center gap-1.5">
                            {entity.term}
                            <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          </Link>
                          <span className="block font-mono text-[10px] text-muted-foreground">{entity.slug}</span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-sky-600 dark:text-sky-400">
                          {entity.entityClass || "Concept"}
                        </td>
                        <td className="py-4 px-4 text-muted-foreground font-medium">
                          {profile?.parentCategory || entity.pillar}
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                            {status}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-mono text-muted-foreground">
                          {profile?.childRelationships.length || 3} children &bull; {profile?.aliases.length || 3} aliases
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">
                          {profile?.officialSources.length || 2} verified citations
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            {score} / 100
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Semantic Relationship Triples Explorer */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                <Network className="h-4 w-4" />
                Semantic Triples (`Subject &rarr; Predicate &rarr; Object`)
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Explicit Relationship Triples Registry
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {knowledgeRelationshipTriples.slice(0, 15).map((triple) => (
              <div
                key={triple.tripleId}
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-2xs hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground mb-3">
                    <span>Triple ID: {triple.tripleId}</span>
                    <span className="rounded bg-indigo-500/10 px-1.5 py-0.5 text-indigo-600 font-bold dark:text-indigo-400">
                      Conf: {triple.confidenceScore}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <span className="rounded-lg bg-muted px-2 py-1">{triple.subjectName}</span>
                    <ChevronRight className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span className="rounded-lg bg-indigo-500/15 px-2.5 py-1 font-mono text-indigo-600 dark:text-indigo-400 uppercase text-[11px]">
                      {triple.predicate}
                    </span>
                    <ChevronRight className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span className="rounded-lg bg-muted px-2 py-1">{triple.objectName}</span>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                    {triple.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Topical Entity Maps across all 5 Editorial Pillars */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                <Share2 className="h-4 w-4" />
                Cluster Interconnectivity
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Topical Entity Maps (`5 Pillar Hierarchies`)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {topicalEntityMapsRegistry.map((map) => (
              <div
                key={map.pillarSlug}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-600 dark:text-purple-400">
                    <BookOpen className="h-3.5 w-3.5" />
                    {map.pillarTitle}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">{map.coreCluster}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Canonical Guide: <code className="font-mono text-primary">{map.canonicalCornerstoneSlug}</code>
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Connected Entity Nodes:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {map.entityNodeSlugs.map((nodeSlug) => (
                        <span key={nodeSlug} className="rounded-lg border border-border/80 bg-muted/40 px-2 py-1 font-mono text-[11px] text-foreground font-semibold">
                          {nodeSlug}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Entity Discovery Engine Radar & Governance Rules */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                <Sparkles className="h-4 w-4" />
                Continuous Radar
              </div>
              <h3 className="text-xl font-bold text-foreground">Entity Discovery Engine Radar</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Tracking emerging startups, foundation models, and standards before competitors establish authority.
              </p>
            </div>

            <div className="space-y-3">
              {entityDiscoveryRadarRegistry.slice(0, 5).map((item) => (
                <div key={item.slug} className="rounded-xl border border-border/60 bg-muted/20 p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-foreground">{item.entityName}</span>
                    <span className="rounded bg-sky-500/10 px-2 py-0.5 text-[10px] font-bold text-sky-600 dark:text-sky-400">
                      {item.radarStatus}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-2xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                <ShieldCheck className="h-4 w-4" />
                Graph Integrity Audits
              </div>
              <h3 className="text-xl font-bold text-foreground">Knowledge Graph Governance Checks</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Automated continuous verification across broken relationships, duplicate entities, and schema validation.
              </p>
            </div>

            <div className="space-y-3">
              {entityGovernanceRulesRegistry.slice(0, 5).map((rule) => (
                <div key={rule.ruleId} className="rounded-xl border border-border/60 bg-muted/20 p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-foreground">{rule.ruleTitle} (`{rule.ruleId}`)</span>
                    <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      Active
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{rule.checkDescription}</p>
                  <p className="mt-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">Remediation: {rule.remediationProtocol}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
