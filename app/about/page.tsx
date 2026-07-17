import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, FileText, Users, Cpu, Layers, RefreshCw, AlertCircle } from "lucide-react";
import { authors } from "@/lib/data/authors";
import { createMetadata } from "@/lib/seo/metadata";
import { organizationSchema, webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "About TechlumeAI — Publisher Authority & Editorial Standards",
  description:
    "Explore TechlumeAI's publisher identity, rigorous technical research methodology, source hierarchy, editorial verification framework, and expert leadership team.",
  path: "/about",
  keywords: [
    "About TechlumeAI",
    "Technical Journalism Authority",
    "Editorial Standards",
    "AI Research Methodology",
    "Source Verification Hierarchy",
    "Factual Accuracy Governance"
  ]
});

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "About TechlumeAI — Publisher Authority & Editorial Standards",
            description: "Explore TechlumeAI's publisher identity, rigorous research methodology, source hierarchy, editorial verification framework, and expert leadership team.",
            url: "/about",
            type: "AboutPage"
          }),
          organizationSchema()
        ]}
      />
      <PageHero
        eyebrow="Publisher Authority & Trust Architecture"
        title="An independent, rigorous technology publication built for engineers and decision-makers."
        description="TechlumeAI transforms complex AI research, distributed systems architecture, and enterprise cloud economics into high-signal, verifiable technical intelligence."
      />

      <section className="container-page py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Our Mission",
              icon: ShieldCheck,
              body: "Deliver verifiable, practical technology intelligence for software architects, ML engineers, security directors, and technology executives making production decisions without marketing fluff or artificial hype."
            },
            {
              title: "Our Editorial Focus",
              icon: Cpu,
              body: "Examine technical mechanics, real-world failure modes, production trade-offs, security implications, and cost constraints across AI systems, developer tooling, and enterprise infrastructure."
            },
            {
              title: "Our Reader Commitment",
              icon: CheckCircle2,
              body: "Never compromise factual integrity for commercial partnerships. Maintain complete separation between sponsorship and editorial scoring, and transparently cite all primary source specifications."
            }
          ].map(({ title, icon: Icon, body }) => (
            <div
              key={title}
              className="rounded-[var(--radius)] border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-sky-300">
                <Icon className="size-5" />
              </div>
              <h2 className="font-display text-2xl font-black tracking-normal">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <div className="rounded-[var(--radius)] border border-slate-200 bg-slate-50/80 p-8 dark:border-slate-800 dark:bg-slate-900/50 sm:p-12">
          <SectionHeading
            eyebrow="Topical Authority & Coverage"
            title="Core Technology Pillars"
            description="TechlumeAI organizes coverage around interconnected technical ecosystems to ensure deep, coherent subject expertise."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                pillar: "AI Engineering & Systems",
                desc: "LLM serving optimization (vLLM, PagedAttention), retrieval-augmented generation (RAG) evaluation, agentic orchestration frameworks, and model fine-tuning architectures."
              },
              {
                pillar: "Software Architecture & Platforms",
                desc: "Distributed consensus mechanisms, event-driven microservices, high-throughput database engines, and developer productivity benchmarking."
              },
              {
                pillar: "Enterprise Cloud & Economics",
                desc: "GPU infrastructure provisioning, FinOps cost modeling, multi-cloud resilience, and serverless computing latency trade-offs."
              },
              {
                pillar: "Cybersecurity & Governance",
                desc: "OWASP Top 10 for LLM applications, zero-trust data boundary enforcement, AI model compliance (AI RMF 1.0), and adversarial prompt injection defense."
              },
              {
                pillar: "Developer Tooling & DevOps",
                desc: "Continuous integration/deployment pipelines, AI-powered coding assistants (SWE-bench analysis), container orchestration, and observability standards."
              },
              {
                pillar: "Future Technology & Hardware",
                desc: "Vision-Language-Action (VLA) robotics models, custom AI silicon accelerators, quantum computing primitives, and edge AI inference engines."
              }
            ].map(({ pillar, desc }) => (
              <div
                key={pillar}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  {pillar}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-slate-200 bg-white p-8 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-300">
              <Layers className="size-4" />
              <span>Rigorous Investigation</span>
            </div>
            <h2 className="font-display text-3xl font-black leading-tight">
              12-Step Technical Research Methodology
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Every flagship technical article published on TechlumeAI undergoes a strict 12-stage research and synthesis protocol before publication:
            </p>
            <ol className="mt-6 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
              {[
                "Define user search intent and production pain points",
                "Formulate the core architectural or engineering question",
                "Audit official vendor documentation and API specifications",
                "Examine primary academic research papers (arXiv, ACM, IEEE)",
                "Review open-source repositories and verified benchmark suites",
                "Evaluate authoritative engineering publications and RFCs",
                "Perform comparative analysis across competing solutions",
                "Identify missing implementation guidance and failure modes",
                "Verify technical claims via reproducible code or benchmarks",
                "Synthesize original architectural diagrams and decision matrices",
                "Perform peer review for technical accuracy and edge cases",
                "Execute final factual verification and publish with timestamps"
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 dark:bg-blue-900/60 dark:text-sky-300">
                    {idx + 1}
                  </span>
                  <span className="mt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="rounded-[var(--radius)] border border-slate-200 bg-white p-8 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-300">
                <FileText className="size-4" />
                <span>Citation Integrity</span>
              </div>
              <h2 className="font-display text-2xl font-black leading-tight">
                Source Quality Hierarchy
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                TechlumeAI enforces strict citation standards. Claims regarding performance, security vulnerabilities, or pricing must reference higher-tier primary sources:
              </p>
              <div className="mt-5 grid gap-4">
                {[
                  {
                    tier: "Tier 1: Primary & Official Sources",
                    desc: "Official vendor specifications, academic research papers, government regulatory standards (NIST, OWASP), and formal RFC protocols."
                  },
                  {
                    tier: "Tier 2: Established Industry Research",
                    desc: "Recognized research institutes, benchmark organizations (SWE-bench, ANN Benchmarks), and peer-reviewed engineering blogs."
                  },
                  {
                    tier: "Tier 3: Verified Expert Analysis",
                    desc: "Direct commentary from recognized open-source maintainers, distinguished systems architects, and live conference presentations."
                  }
                ].map(({ tier, desc }, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-4 dark:border-sky-400">
                    <h3 className="font-display text-sm font-bold text-slate-900 dark:text-slate-100">
                      {tier}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[var(--radius)] border border-green-200 bg-green-50/60 p-8 dark:border-green-900/40 dark:bg-green-950/20">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-800 dark:text-green-300">
                <RefreshCw className="size-4" />
                <span>Lifecycle & Corrections</span>
              </div>
              <h2 className="font-display text-xl font-bold text-green-950 dark:text-green-100">
                Content Maintenance & Correction Policy
              </h2>
              <p className="mt-2 text-xs leading-6 text-green-900 dark:text-green-300">
                Technology evolves rapidly. When breaking API changes, deprecations, or security vulnerabilities emerge, our team re-audits affected articles, updates code patterns, and refreshes the <code className="font-mono font-bold">dateModified</code> timestamp. If a factual error is discovered, we promptly correct the text and log the modification.
              </p>
              <div className="mt-4 flex gap-3">
                <Button asChild size="sm" variant="outline" className="border-green-700 text-green-900 hover:bg-green-100 dark:border-green-500 dark:text-green-200 dark:hover:bg-green-900/50">
                  <Link href="/editorial-policy">Read Editorial Standards</Link>
                </Button>
                <Button asChild size="sm" variant="ghost" className="text-green-800 hover:text-green-950 dark:text-green-300">
                  <Link href="/contact">Report a Technical Correction</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <SectionHeading
          eyebrow="Verified Authority"
          title="Editorial & Research Leadership"
          description="Experienced systems engineers, security analysts, and technical editors accountable for every publication."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {authors.map((author) => (
            <Link
              key={author.slug}
              href={`/authors/${author.slug}`}
              className="group flex flex-col justify-between rounded-[var(--radius)] border border-slate-200 bg-white p-6 shadow-luxe transition hover:-translate-y-1 hover:border-blue-300 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-sky-400"
            >
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={72}
                    height={72}
                    className="rounded-full bg-slate-50 dark:bg-slate-900"
                  />
                  <div>
                    <h3 className="font-display text-2xl font-black tracking-normal group-hover:text-blue-600 dark:group-hover:text-sky-300">
                      {author.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-bold text-blue-700 dark:text-sky-300">
                      {author.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {author.bio}
                </p>
                {author.credentials && author.credentials.length > 0 ? (
                  <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-800/80">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Primary Credential
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {author.credentials[0]}
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-blue-600 group-hover:underline dark:border-slate-800/80 dark:text-sky-300">
                <span>View Full Author Profile & Archive</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
