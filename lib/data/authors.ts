import type { Author } from "@/lib/types";

export const authors: Author[] = [
  {
    slug: "maya-hart",
    name: "Maya Hart",
    role: "Editor in Chief",
    bio: "Maya covers AI strategy, executive adoption, and the market forces shaping technical teams. She has led editorial programs for enterprise software audiences across security, cloud, and developer tooling.",
    expertise: ["AI strategy", "Enterprise software", "Editorial standards", "Technical governance"],
    credentials: [
      "B.S. in Computer Science & Technical Communication",
      "12+ years directing B2B technology publication teams",
      "Lead investigator for enterprise AI adoption frameworks"
    ],
    focusAreas: [
      "Executive AI Adoption & Governance Frameworks",
      "Enterprise Software Architecture Trends",
      "Search & Retrieval Evaluation Methodology",
      "Technical Journalism Ethics & Fact Verification"
    ],
    researchContribution: "Maya establishes TechlumeAI's research methodology, oversees multi-stage factual verification across all flagship guides, and conducts executive interviews with engineering leadership across major cloud platforms.",
    editorialStandards: "Adheres strictly to the TechlumeAI Editorial Verification Framework: zero commercial influence on technical scoring, primary specification citation requirements, and mandatory peer review of architecture trade-offs.",
    alumniOf: "Stanford University / Enterprise Technology Media Labs",
    avatar: "/images/authors/maya-hart.svg",
    socials: {
      x: "https://x.com/mayahart",
      linkedin: "https://www.linkedin.com/in/mayahart",
      website: "https://techlumeai.com/authors/maya-hart"
    }
  },
  {
    slug: "ethan-cho",
    name: "Ethan Cho",
    role: "Senior Engineering Analyst",
    bio: "Ethan reports on developer platforms, production architecture, MLOps, and performance engineering for teams shipping AI-enabled products.",
    expertise: ["Software architecture", "MLOps", "Developer platforms", "Distributed systems", "LLM Serving"],
    credentials: [
      "M.S. in Distributed Systems Engineering",
      "Former Staff Infrastructure Engineer at high-throughput SaaS platforms",
      "Lead benchmark reviewer for open-weight LLM serving engines"
    ],
    focusAreas: [
      "Production RAG & Vector Database Architecture",
      "Open-Weight LLM Serving & Quantization (vLLM, QLoRA)",
      "Multi-Agent Workflow Orchestration (DSPy, AutoGen)",
      "Latency, Memory & Cost Optimization Trade-offs"
    ],
    researchContribution: "Ethan designs and verifies code patterns, analyzes benchmark datasets (HumanEval, SWE-bench, ANN Benchmarks), and simulates production failure modes to ensure tutorials reflect real-world engineering constraints.",
    editorialStandards: "Requires all code examples and performance claims to be backed by verifiable reproduction steps, official GitHub repository issues, or peer-reviewed systems research papers.",
    alumniOf: "University of Washington / Cloud Native Systems Research Group",
    avatar: "/images/authors/ethan-cho.svg",
    socials: {
      x: "https://x.com/ethancho",
      linkedin: "https://www.linkedin.com/in/ethancho",
      website: "https://techlumeai.com/authors/ethan-cho"
    }
  },
  {
    slug: "nora-klein",
    name: "Nora Klein",
    role: "Security and Cloud Correspondent",
    bio: "Nora tracks cybersecurity, cloud economics, infrastructure resilience, and the operational risks behind fast-moving technology programs.",
    expertise: ["Cybersecurity", "Cloud infrastructure", "Risk analysis", "AI Governance", "Zero Trust"],
    credentials: [
      "Certified Information Systems Security Professional (CISSP)",
      "10+ years investigating enterprise cloud risk and security breaches",
      "Contributor to LLM security risk assessments and compliance benchmarks"
    ],
    focusAreas: [
      "OWASP Top 10 for Large Language Model Applications",
      "Enterprise Cloud Economics & GPU Infrastructure Provisioning",
      "Zero Trust Security for Multi-Cloud & AI Pipelines",
      "NIST AI Risk Management Framework (AI RMF 1.0) Compliance"
    ],
    researchContribution: "Nora audits regulatory filings, vulnerability disclosures (CVEs), and cloud billing architectures to provide operators with concrete security checklists and risk mitigation models.",
    editorialStandards: "Operates under rigorous factual scrutiny: all vulnerability claims and security risk models must reference NIST standards, OWASP specifications, or verified security advisories.",
    alumniOf: "Carnegie Mellon University / Security Engineering Institute",
    avatar: "/images/authors/nora-klein.svg",
    socials: {
      linkedin: "https://www.linkedin.com/in/noraklein",
      website: "https://techlumeai.com/authors/nora-klein"
    }
  }
];

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}
