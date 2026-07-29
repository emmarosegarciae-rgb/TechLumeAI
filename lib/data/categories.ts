import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "ai-engineering",
    name: "AI Engineering & LLMs",
    description: "Architecture, multi-agent orchestration, MCP protocols, retrieval evaluation, and model training.",
    color: "#2563EB",
    image: "/images/categories/ai.svg",
    featuredGuideSlug: "enterprise-ai-agents-production",
    topicClusters: [
      "prompt-engineering",
      "model-context-protocol",
      "multi-agent-systems",
      "rag-architecture",
      "fine-tuning-eval"
    ],
    faqs: [
      {
        question: "What is AI engineering compared to traditional data science?",
        answer:
          "AI engineering focuses on the production deployment, orchestration, tool integration (`MCP`), latency optimization (`RAG`), and guardrail enforcement of pre-trained foundation models into enterprise software systems, whereas traditional data science emphasizes statistical analysis and custom model training from scratch."
      },
      {
        question: "What are the core technical building blocks of AI engineering?",
        answer:
          "The core technical building blocks include deterministic prompt engineering, Model Context Protocol (`MCP`) servers, vector retrieval loops (`RAG`), multi-agent orchestration graphs (`LangGraph`), and LLM-as-a-judge automated evaluation pipelines."
      }
    ]
  },
  {
    slug: "enterprise-ai",
    name: "Enterprise AI",
    description: "Governance, zero-trust security, compliance frameworks, FinOps topology, and adoption roadmaps.",
    color: "#10B981",
    image: "/images/categories/cloud.svg",
    featuredGuideSlug: "cybersecurity-ai-defense-brief",
    topicClusters: [
      "enterprise-ai-governance",
      "zero-trust-ai-security",
      "ai-finops",
      "eu-ai-act-compliance"
    ],
    faqs: [
      {
        question: "What are the biggest risks when deploying AI in the enterprise?",
        answer:
          "The top enterprise AI risks include shadow AI data exfiltration, indirect prompt injection attacks through external web scraping, non-deterministic agent privilege escalation, uncontrolled API token cost overruns (`FinOps`), and non-compliance with the EU AI Act."
      },
      {
        question: "How do you establish zero-trust security for AI agents?",
        answer:
          "Zero-trust agent security requires isolating execution sandboxes in VPCs, enforcing least-privilege IAM roles for every tool call, validating all input/output JSON schemas, and implementing mandatory human-in-the-loop approval gates for destructive system mutations."
      }
    ]
  },
  {
    slug: "ai-tools",
    name: "AI Tools",
    description: "Production benchmarks and reviews of Claude, ChatGPT, Gemini, Perplexity, Cursor, and Windsurf.",
    color: "#8B5CF6",
    image: "/images/categories/reviews.svg",
    featuredGuideSlug: "open-models-infrastructure-shift",
    topicClusters: [
      "ai-code-editors",
      "frontier-llms",
      "ai-search-engines"
    ],
    faqs: [
      {
        question: "Which AI code editor is best for enterprise software engineering in 2026?",
        answer:
          "Cursor and Windsurf lead enterprise software engineering due to their deep multi-file codebase indexing engines, custom context rules (`.cursorrules`), and SOC2/zero-data-retention compliance options for proprietary repositories."
      }
    ]
  },
  {
    slug: "programming-dev",
    name: "Programming & Dev",
    description: "TypeScript, Next.js, Python craft, API design, MCP server deployment, and AI-assisted DevOps.",
    color: "#06B6D4",
    image: "/images/categories/programming.svg",
    featuredGuideSlug: "enterprise-ai-agents-production",
    topicClusters: [
      "mcp-server-dev",
      "typescript-ai-stack",
      "python-agentic-devops"
    ],
    faqs: [
      {
        question: "How do you build a custom Model Context Protocol (`MCP`) server?",
        answer:
          "You can build a production MCP server using the official TypeScript or Python SDKs by exposing structured tool schemas over stdio or Server-Sent Events (`SSE`), validating inputs with Zod or Pydantic, and connecting local databases or REST APIs over JSON-RPC."
      }
    ]
  },
  {
    slug: "ai-business",
    name: "AI Business",
    description: "Enterprise Centers of Excellence, AI skills gap analysis, salary benchmarks, and operator playbooks.",
    color: "#F59E0B",
    image: "/images/categories/business.svg",
    featuredGuideSlug: "enterprise-ai-agents-production",
    topicClusters: [
      "ai-center-of-excellence",
      "ai-operator-playbooks"
    ],
    faqs: [
      {
        question: "What is the role of an AI Center of Excellence (`CoE`)?",
        answer:
          "An AI Center of Excellence (`CoE`) is a centralized governance and engineering taskforce responsible for setting enterprise AI standards, evaluating vendor risk, establishing prompt/tool repositories, and measuring productivity ROI across business units."
      }
    ]
  },
  {
    slug: "cybersecurity-ai",
    name: "Cybersecurity + AI",
    description: "Prompt injection defense, model jailbreaking mitigation, red teaming, and autonomous SOC triage.",
    color: "#EF4444",
    image: "/images/categories/cybersecurity.svg",
    featuredGuideSlug: "cybersecurity-ai-defense-brief",
    topicClusters: [
      "prompt-injection-defense",
      "autonomous-soc-triage"
    ],
    faqs: [
      {
        question: "How does indirect prompt injection work?",
        answer:
          "Indirect prompt injection occurs when an AI agent retrieves untrusted external data (such as a website, email, or PDF) containing hidden adversarial instructions that override the agent's core system prompt to exfiltrate data or perform unauthorized tool calls."
      }
    ]
  },
  {
    slug: "ai-hardware",
    name: "AI Hardware",
    description: "Silicon architectures, NVIDIA/AMD cluster scaling, quantization economics, and edge inference.",
    color: "#3B82F6",
    image: "/images/categories/ai-hardware.png",
    featuredGuideSlug: "open-models-infrastructure-shift",
    topicClusters: [
      "quantization-int4-fp8",
      "silicon-cluster-scaling"
    ],
    faqs: [
      {
        question: "Why is INT4 / FP8 quantization critical for AI hardware deployment?",
        answer:
          "INT4 and FP8 quantization drastically reduce the memory bandwidth footprint of 70B+ parameter models, enabling them to run locally on consumer NPU/Apple Silicon hardware or maximizing batch inference throughput on NVIDIA Hopper and Blackwell data center GPUs."
      }
    ]
  },
  {
    slug: "future-tech",
    name: "Future Technology",
    description: "Robotics foundation models, physical AI, quantum horizon systems, and autonomous robotics.",
    color: "#6366F1",
    image: "/images/categories/future-tech.png",
    featuredGuideSlug: "open-models-infrastructure-shift",
    topicClusters: [
      "physical-ai-robotics",
      "quantum-horizon-systems"
    ],
    faqs: [
      {
        question: "What are Vision-Language-Action (`VLA`) foundation models?",
        answer:
          "Vision-Language-Action (`VLA`) models are multi-modal neural networks trained to directly translate visual sensor feeds and natural language instructions into real-world physical joint torques and motor actions for humanoid robots and autonomous industrial machinery."
      }
    ]
  },
  {
    slug: "reviews",
    name: "Reviews",
    description: "Hands-on technical evaluations of developer platforms, enterprise LLMs, and cloud infra.",
    color: "#EC4899",
    image: "/images/categories/reviews.svg"
  },
  {
    slug: "videos",
    name: "Videos",
    description: "Technical briefings, architecture deep-dives, founder interviews, and platform teardowns.",
    color: "#6366F1",
    image: "/images/categories/videos.svg"
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
