import type { TopicHub } from "@/lib/types";

export const topics: TopicHub[] = [
  {
    slug: "ai-agents",
    name: "AI Agents & Autonomous Workflows",
    pillar: "ai-engineering",
    description: "The architectural patterns, observability tools, and frameworks (like LangGraph and CrewAI) used to orchestrate autonomous LLM workflows.",
    cornerstoneSlug: "enterprise-ai-agents-production",
    subtopics: ["Agentic AI Orchestration", "Tool Calling", "Memory Management"],
    relatedTopics: ["prompt-engineering", "multi-agent-systems"]
  },
  // Pillar 1: AI Engineering & LLMs
  {
    slug: "prompt-engineering",
    name: "Prompt Engineering & Evaluation",
    pillar: "ai-engineering",
    description:
      "Systematic prompt architecture, deterministic prompt chaining, prompt injection defense, evaluation suites, and enterprise prompt libraries.",
    cornerstoneSlug: "enterprise-ai-agents-production", // Will link to our upcoming guide
    subtopics: [
      "Prompt Chaining & Routing",
      "LLM-as-a-Judge Evaluation",
      "Enterprise Prompt Libraries",
      "Few-Shot vs. Zero-Shot Optimization",
      "Prompt Security Guardrails"
    ],
    relatedTopics: ["model-context-protocol", "multi-agent-systems", "rag-architecture", "ai-agents"],
    faqs: [
      {
        question: "What is enterprise prompt engineering?",
        answer:
          "Unlike informal prompt tweaking, enterprise prompt engineering treats prompts as version-controlled software components with deterministic schemas, unit tests, regression suites, and automated evaluation pipelines."
      },
      {
        question: "How do you evaluate prompt quality in production?",
        answer:
          "Production prompt evaluation uses LLM-as-a-judge frameworks alongside exact-match assertions, semantic similarity scoring against golden datasets, and latency/token usage tracking."
      }
    ]
  },
  {
    slug: "model-context-protocol",
    name: "Model Context Protocol (MCP)",
    pillar: "ai-engineering",
    description:
      "The open standard introduced by Anthropic for unifying how AI assistants and autonomous agents connect to local repositories, remote databases, tools, and enterprise services over JSON-RPC.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "MCP Server Architecture",
      "JSON-RPC Transport Layer",
      "Tool Discovery & Routing",
      "Enterprise Resource Authorization",
      "MCP vs. Custom API Connectors"
    ],
    relatedTopics: ["prompt-engineering", "multi-agent-systems", "mcp-server-dev"],
    faqs: [
      {
        question: "Why is Model Context Protocol (MCP) important for enterprise AI?",
        answer:
          "MCP eliminates custom N-to-N integration code across heterogeneous LLM environments. By adopting standard JSON-RPC servers, any agent (Claude, Cursor, custom LangGraph) can securely access enterprise tools without ad-hoc wrappers."
      }
    ]
  },
  {
    slug: "multi-agent-systems",
    name: "Multi-Agent Orchestration",
    pillar: "ai-engineering",
    description:
      "Design and production deployment of autonomous agent clusters using cyclic state graphs, checkpoint persistence, human-in-the-loop authorization gates, and deterministic tool calling.",
    cornerstoneSlug: "enterprise-ai-agents-production",
    subtopics: [
      "LangGraph vs. CrewAI Topology",
      "State Checkpointing & Rollbacks",
      "Human-in-the-Loop Approval Gates",
      "Infinite Loop Circuit Breakers",
      "Agent Role-Based Access Control (RBAC)"
    ],
    relatedTopics: ["prompt-engineering", "model-context-protocol", "zero-trust-ai-security"],
    faqs: [
      {
        question: "What is the primary failure mode of multi-agent systems?",
        answer:
          "The primary failure mode is state divergence caused by non-deterministic tool outputs and lack of checkpoint rollbacks. Production systems require rigid JSON schemas and state graph persistence."
      }
    ]
  },
  {
    slug: "rag-architecture",
    name: "Retrieval-Augmented Generation (RAG)",
    pillar: "ai-engineering",
    description:
      "Advanced vector indexing, hybrid sparse-dense retrieval, reranking pipelines, chunking strategies, and real-time grounding for enterprise knowledge bases.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "Hybrid Vector vs. Keyword Search",
      "Cross-Encoder Reranking",
      "Semantic Chunking Algorithms",
      "Graph RAG & Entity Extraction",
      "RAG vs. Fine-Tuning Decision Matrix"
    ],
    relatedTopics: ["prompt-engineering", "fine-tuning-eval", "enterprise-ai-governance"]
  },
  {
    slug: "fine-tuning-eval",
    name: "Model Fine-Tuning & Evaluation",
    pillar: "ai-engineering",
    description:
      "LoRA and QLoRA parameter-efficient tuning, synthetic domain dataset generation, RLHF/DPO alignment, and enterprise inference routing.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "QLoRA vs. Full Parameter Tuning",
      "Direct Preference Optimization (DPO)",
      "Synthetic Dataset Curation",
      "Catastrophic Forgetting Mitigation",
      "Inference Routing & Speculative Decoding"
    ],
    relatedTopics: ["rag-architecture", "quantization-int4-fp8"]
  },

  // Pillar 2: Enterprise AI
  {
    slug: "enterprise-ai-governance",
    name: "Enterprise AI Governance & Security",
    pillar: "enterprise-ai",
    description:
      "Establishing Centers of Excellence (`CoE`), AI risk management frameworks (`NIST AI RMF`), zero-trust network boundaries, and model auditability.",
    cornerstoneSlug: "cybersecurity-ai-defense-brief",
    subtopics: [
      "NIST AI RMF Implementation",
      "Model Registry & Lineage Audit",
      "Zero-Trust Agent Sandboxing",
      "Enterprise Data Leak Mitigation",
      "CoE Organizational Structure"
    ],
    relatedTopics: ["zero-trust-ai-security", "ai-finops", "eu-ai-act-compliance"]
  },
  {
    slug: "zero-trust-ai-security",
    name: "Zero-Trust AI & Guardrails",
    pillar: "enterprise-ai",
    description:
      "Hardening LLM API perimeters against prompt injection, data exfiltration, shadow AI adoption, and autonomous agent privilege escalation.",
    cornerstoneSlug: "cybersecurity-ai-defense-brief",
    subtopics: [
      "Input / Output Filtering Proxy",
      "Least-Privilege Agent IAM Roles",
      "VPC Isolation for Local Inference",
      "Red Teaming & Jailbreak Testing",
      "Data Masking & PII Redaction"
    ],
    relatedTopics: ["enterprise-ai-governance", "prompt-injection-defense", "cybersecurity-ai"]
  },
  {
    slug: "ai-finops",
    name: "AI FinOps & Cost Optimization",
    pillar: "enterprise-ai",
    description:
      "Managing token economics, semantic caching, model tier routing, spot cluster GPU budgeting, and ROI modeling for enterprise AI deployments.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "Semantic Caching Architecture",
      "Tiered Model Routing (Small vs. Large)",
      "GPU Cluster Utilization & Spot Pricing",
      "Token Budget Allocation per Team",
      "Total Cost of Ownership (TCO) Analysis"
    ],
    relatedTopics: ["quantization-int4-fp8", "enterprise-ai-governance"]
  },
  {
    slug: "eu-ai-act-compliance",
    name: "AI Regulatory & Compliance (`EU AI Act`)",
    pillar: "enterprise-ai",
    description:
      "Navigating the EU AI Act, risk classification tiers, technical documentation requirements, automated bias testing, and high-risk system certification.",
    cornerstoneSlug: "cybersecurity-ai-defense-brief",
    subtopics: [
      "EU AI Act Risk Classification",
      "Automated Transparency Logging",
      "Human Oversight Mandates",
      "High-Risk System Audit Documentation",
      "Cross-Border Data Transfer Policies"
    ],
    relatedTopics: ["enterprise-ai-governance", "zero-trust-ai-security"]
  },

  // Pillar 3: AI Tools
  {
    slug: "ai-code-editors",
    name: "Agentic Code Editors (`Cursor vs. Windsurf`)",
    pillar: "ai-tools",
    description:
      "Deep technical benchmarks, indexing topology, custom rules configuration (`.cursorrules`), and enterprise deployment models for AI IDEs.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "Cursor Embeddings Indexing Engine",
      "Windsurf Cascade Multi-File Editing",
      "Custom Rules & Context Ruleset Design",
      "Enterprise SOC2 & Data Privacy SLAs",
      "Local vs. Cloud LLM Code Generation"
    ],
    relatedTopics: ["frontier-llms", "mcp-server-dev"]
  },
  {
    slug: "frontier-llms",
    name: "Frontier Foundation Models",
    pillar: "ai-tools",
    description:
      "Technical teardowns, context window evaluations, tool-calling reliability, reasoning capabilities, and API latency across Claude 3.5, GPT-4o, and Gemini 1.5 Pro.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "Anthropic Claude 3.5 Sonnet & Opus",
      "OpenAI GPT-4o & o1 Reasoning Models",
      "Google Gemini 1.5 Pro Long-Context",
      "DeepSeek & Llama Open Weight Alternatives",
      "Tool-Calling & JSON Schema Accuracy"
    ],
    relatedTopics: ["ai-code-editors", "ai-search-engines"]
  },
  {
    slug: "ai-search-engines",
    name: "AI Search & Answer Engines",
    pillar: "ai-tools",
    description:
      "Architectural analysis of Perplexity Enterprise, Google AI Overviews, and real-time grounding pipelines for enterprise research.",
    cornerstoneSlug: "enterprise-ai-agents-production",
    subtopics: [
      "Perplexity Enterprise Pro Architecture",
      "Real-Time Web Scraper Grounding",
      "Enterprise Internal Knowledge Search",
      "Source Citation & Hallucination Mitigation"
    ],
    relatedTopics: ["frontier-llms", "rag-architecture"]
  },

  // Pillar 4: Programming & Dev
  {
    slug: "mcp-server-dev",
    name: "MCP Server Development",
    pillar: "programming-dev",
    description:
      "Building production-grade Model Context Protocol (`MCP`) servers in TypeScript and Python with custom tool schemas and enterprise OAuth auth.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "TypeScript & Python SDK Implementation",
      "Resource & Prompt Template Exposing",
      "OAuth 2.0 & Token Authentication",
      "Rate Limiting & Connection Pooling",
      "Testing MCP Servers with Claude Desktop"
    ],
    relatedTopics: ["model-context-protocol", "typescript-ai-stack"]
  },
  {
    slug: "typescript-ai-stack",
    name: "TypeScript & Next.js AI Stack",
    pillar: "programming-dev",
    description:
      "Vercel AI SDK, Next.js App Router streaming, Server Actions, edge edge workers, and type-safe tool calling for full-stack AI web apps.",
    cornerstoneSlug: "enterprise-ai-agents-production",
    subtopics: [
      "Vercel AI SDK Core & UI Streaming",
      "Next.js App Router Server Actions",
      "Zod Schema Validation for Tools",
      "Edge Function Inference Caching",
      "Real-Time UI State Updates via Streams"
    ],
    relatedTopics: ["mcp-server-dev", "python-agentic-devops"]
  },
  {
    slug: "python-agentic-devops",
    name: "Python Agentic DevOps & SRE",
    pillar: "programming-dev",
    description:
      "Building resilient LangGraph and LlamaIndex applications, automated telemetry (`OpenTelemetry`), log parsing, and CI/CD agent verification.",
    cornerstoneSlug: "enterprise-ai-agents-production",
    subtopics: [
      "LangGraph Stateful Execution Graphs",
      "OpenTelemetry & LangSmith Tracing",
      "Automated CI/CD Regression Evaluation",
      "FastAPI Asynchronous Agent Endpoints"
    ],
    relatedTopics: ["multi-agent-systems", "typescript-ai-stack"]
  },

  // Pillar 5: AI Business
  {
    slug: "ai-center-of-excellence",
    name: "AI Center of Excellence (`CoE`)",
    pillar: "ai-business",
    description:
      "Structuring cross-functional enterprise AI teams, establishing ROI measurement models, vendor selection frameworks, and skills transformation playbooks.",
    cornerstoneSlug: "enterprise-ai-agents-production",
    subtopics: [
      "CoE Organizational Charter",
      "Vendor vs. Build-In-House Trade-Offs",
      "Enterprise AI Training & Upskilling",
      "Measuring AI ROI & Productivity Lift"
    ],
    relatedTopics: ["enterprise-ai-governance", "ai-finops"]
  },
  {
    slug: "ai-operator-playbooks",
    name: "AI Operator Playbooks",
    pillar: "ai-business",
    description:
      "Step-by-step operational roadmaps for Chief AI Officers (`CAIOs`), engineering VPs, and product leaders steering enterprise transformation.",
    cornerstoneSlug: "enterprise-ai-agents-production",
    subtopics: [
      "90-Day Enterprise AI Roadmap",
      "Shadow AI Discovery & Consolidation",
      "Executive Board Reporting Metrics"
    ],
    relatedTopics: ["ai-center-of-excellence", "enterprise-ai-governance"]
  },

  // Pillar 6: Cybersecurity + AI
  {
    slug: "prompt-injection-defense",
    name: "Prompt Injection & Jailbreak Defense",
    pillar: "cybersecurity-ai",
    description:
      "Defending against indirect prompt injections, adversarial suffix optimization, system prompt leakage, and automated red-teaming harnesses.",
    cornerstoneSlug: "cybersecurity-ai-defense-brief",
    subtopics: [
      "Direct vs. Indirect Prompt Injection",
      "Input Sanitization & Proxy Guardrails",
      "Automated Red Teaming (`Garak/PyRIT`)",
      "System Prompt Hardening Patterns"
    ],
    relatedTopics: ["zero-trust-ai-security", "autonomous-soc-triage"]
  },
  {
    slug: "autonomous-soc-triage",
    name: "Autonomous SOC & Threat Triage",
    pillar: "cybersecurity-ai",
    description:
      "Deploying autonomous security agents to correlate SIEM logs, triage alert fatigue, investigate identity threats, and isolate compromised endpoints.",
    cornerstoneSlug: "cybersecurity-ai-defense-brief",
    subtopics: [
      "SIEM Alert Triage Automation",
      "Identity Threat & Okta Log Correlation",
      "Automated Playbook Execution & Rollback",
      "False Positive Reduction Benchmarks"
    ],
    relatedTopics: ["prompt-injection-defense", "zero-trust-ai-security"]
  },

  // Pillar 7: AI Hardware
  {
    slug: "quantization-int4-fp8",
    name: "Quantization & Edge Inference (`INT4/FP8`)",
    pillar: "ai-hardware",
    description:
      "Model compression math, AWQ vs. GPTQ vs. GGUF quantization, accuracy degradation thresholds, and high-throughput edge deployment.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "AWQ vs. GPTQ vs. GGUF Formats",
      "FP8 Training & Inference Acceleration",
      "KV-Cache Quantization & Memory Footprint",
      "Local Edge Inference on Apple Silicon / NPU"
    ],
    relatedTopics: ["ai-finops", "silicon-cluster-scaling"]
  },
  {
    slug: "silicon-cluster-scaling",
    name: "Silicon & GPU Cluster Scaling",
    pillar: "ai-hardware",
    description:
      "NVIDIA H100/B200 NVLink topology, AMD Instinct MI300X clusters, InfiniBand networking, interconnect bandwidth, and liquid cooling engineering.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "NVIDIA Hopper/Blackwell Architecture",
      "AMD Instinct & ROCm Software Stack",
      "InfiniBand vs. RoCEv2 Network Topologies",
      "Data Center Power & Cooling Economics"
    ],
    relatedTopics: ["quantization-int4-fp8", "ai-finops"]
  },

  // Pillar 8: Future Technology
  {
    slug: "physical-ai-robotics",
    name: "Physical AI & Robotics Foundation Models",
    pillar: "future-tech",
    description:
      "Vision-Language-Action (`VLA`) models, humanoid dexterous manipulation, synthetic physics simulation (`Isaac Gym`), and autonomous edge perception.",
    cornerstoneSlug: "open-models-infrastructure-shift",
    subtopics: [
      "Vision-Language-Action (`VLA`) Models",
      "Synthetic Physics Training Environments",
      "Sim-to-Real Transfer Methodologies",
      "Real-Time Robotics Edge Control"
    ],
    relatedTopics: ["quantum-horizon-systems", "silicon-cluster-scaling"]
  },
  {
    slug: "quantum-horizon-systems",
    name: "Quantum Computing & AI Convergence",
    pillar: "future-tech",
    description:
      "Quantum error correction milestones, hybrid classical-quantum optimization algorithms, post-quantum cryptography, and physical qubit scaling.",
    cornerstoneSlug: "cybersecurity-ai-defense-brief",
    subtopics: [
      "Logical vs. Physical Qubits & Error Correction",
      "Hybrid Quantum-Classical Optimization",
      "Post-Quantum Cryptographic Migration"
    ],
    relatedTopics: ["physical-ai-robotics", "cybersecurity-ai"]
  }
];

export function getTopicBySlug(slug: string): TopicHub | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getTopicsByPillar(pillar: string): TopicHub[] {
  return topics.filter((t) => t.pillar === pillar);
}

export function getAllTopics(): TopicHub[] {
  return topics;
}
