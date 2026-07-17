import type { NavItem } from "@/lib/types";

export const primaryNav: NavItem[] = [
  { label: "Latest News", href: "/#latest", description: "Fresh briefings and analysis" },
  { label: "AI Engineering", href: "/category/ai-engineering", description: "Prompt engineering, MCP, RAG, multi-agent systems" },
  { label: "Enterprise AI", href: "/category/enterprise-ai", description: "Governance, zero-trust security, FinOps, compliance" },
  { label: "Topics Hub", href: "/topics", description: "Semantic knowledge clusters and cornerstone guides" },
  { label: "Glossary", href: "/glossary", description: "Canonical entity definitions and AI knowledge base" },
  { label: "Comparisons", href: "/comparisons", description: "Head-to-head technical evaluation matrices" },
  { label: "AI Tools", href: "/category/ai-tools", description: "Frontier LLMs, IDE benchmarks, answer engines" }
];

export const topicNav: NavItem[] = [
  { label: "Prompt Engineering", href: "/topics/prompt-engineering" },
  { label: "Model Context Protocol", href: "/topics/model-context-protocol" },
  { label: "Multi-Agent Systems", href: "/topics/multi-agent-systems" },
  { label: "RAG Architecture", href: "/topics/rag-architecture" },
  { label: "Zero-Trust AI", href: "/topics/zero-trust-ai-security" },
  { label: "AI FinOps", href: "/topics/ai-finops" },
  { label: "INT4 Quantization", href: "/topics/quantization-int4-fp8" },
  { label: "Comparisons", href: "/comparisons" },
  { label: "Glossary", href: "/glossary" }
];

export const businessNav: NavItem[] = [
  { label: "Newsletter", href: "/newsletter" },
  { label: "Advertise", href: "/advertise" },
  { label: "Write For Us", href: "/write-for-us" },
  { label: "Guest Post", href: "/services#guest-posts" },
  { label: "Link Insertion", href: "/services#link-insertions" },
  { label: "Contact", href: "/contact" }
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "DMCA", href: "/dmca" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Sitemap", href: "/sitemap.xml" }
];
