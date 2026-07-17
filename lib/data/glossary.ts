import type { GlossaryEntity } from "@/lib/types";

export const glossaryEntities: GlossaryEntity[] = [
  {
    slug: "model-context-protocol",
    term: "Model Context Protocol (MCP)",
    pillar: "ai-engineering",
    definition:
      "An open standard introduced by Anthropic that unifies how AI assistants and autonomous agents connect to local repositories, remote databases, custom tools, and enterprise APIs over structured JSON-RPC connections.",
    synonyms: ["MCP", "Anthropic MCP", "Model Context Protocol Server"],
    keyApplications: [
      "Eliminating custom N-to-N connector code across development environments",
      "Exposing local Git repositories and databases directly to Claude Desktop and Cursor",
      "Standardizing enterprise tool discovery and resource authorization"
    ],
    entityClass: "Protocol",
    profileMetadata: {
          "aliases": [
                "MCP",
                "Anthropic MCP",
                "Model Context Protocol Server",
                "JSON-RPC Tool Protocol"
          ],
          "officialSources": [
                {
                      "title": "Anthropic Model Context Protocol Specification",
                      "url": "https://modelcontextprotocol.io/specification",
                      "type": "Official Documentation"
                },
                {
                      "title": "Model Context Protocol GitHub Repository",
                      "url": "https://github.com/modelcontextprotocol/servers",
                      "type": "GitHub Repository"
                }
          ],
          "parentCategory": "AI Engineering & Autonomous Systems",
          "childRelationships": [
                "json-rpc-transport",
                "mcp-inspector",
                "cursor-ai-ide"
          ],
          "relatedTechnologies": [
                "Multi-Agent Systems",
                "Retrieval-Augmented Generation",
                "JSON-RPC 2.0"
          ],
          "industry": "Enterprise AI Engineering & Tooling",
          "firstAppearance": "Late 2024",
          "currentStatus": "Active Standard",
          "enterpriseUsage": "Adopted by leading IDEs (Cursor, Windsurf) and enterprise agent orchestration grids to eliminate custom N-to-N connector boilerplate.",
          "keyBenefits": [
                "Unifies local database, Git repository, and API connections under a single JSON-RPC specification",
                "Enables instant tool discovery and dynamic capability negotiation across multi-agent swarms",
                "Establishes strict boundary controls and authorization gates before executing tool calls"
          ],
          "limitations": [
                "Requires local stdio or SSE server lifecycle management on host machines",
                "Can introduce latency overhead if high-frequency payloads exceed JSON serialization bounds"
          ],
          "associatedArticles": [
                "open-models-infrastructure-shift",
                "enterprise-ai-agents-production",
                "developer-tools-2026"
          ],
          "futureExpansionOpportunities": [
                "Remote WebSocket transport encryption standard",
                "Enterprise RBAC token propagation across nested MCP server hops"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 10,
                "enterpriseImportance": 10,
                "citationFrequency": 10,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 10,
                "futureGrowth": 10,
                "aiVisibility": 10,
                "totalScore": 100
          }
    },
    relatedEntities: [
      "json-rpc-transport",
      "multi-agent-system",
      "retrieval-augmented-generation",
      "prompt-injection"
    ],
    cornerstoneSlug: "open-models-infrastructure-shift"
  },
  {
    slug: "retrieval-augmented-generation",
    term: "Retrieval-Augmented Generation (RAG)",
    pillar: "ai-engineering",
    definition:
      "An architectural framework that enhances Large Language Model generation by dynamically querying and grounding prompts with relevant facts retrieved from external vector indices or relational databases prior to inference.",
    synonyms: ["RAG", "Vector Search Grounding", "Hybrid Retrieval"],
    keyApplications: [
      "Preventing model hallucinations when querying proprietary enterprise knowledge",
      "Connecting LLMs to real-time financial, legal, or customer support documentation",
      "Bypassing context window size limitations through targeted chunk reranking"
    ],
    entityClass: "Concept",
    profileMetadata: {
          "aliases": [
                "RAG",
                "Vector Search Grounding",
                "Hybrid Retrieval",
                "Grounding Engine"
          ],
          "officialSources": [
                {
                      "title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
                      "url": "https://arxiv.org/abs/2005.11401",
                      "type": "Academic Paper"
                },
                {
                      "title": "LangChain Enterprise RAG Architecture Guide",
                      "url": "https://python.langchain.com/docs/concepts/rag/",
                      "type": "Enterprise Guide"
                }
          ],
          "parentCategory": "AI Engineering & Autonomous Systems",
          "childRelationships": [
                "vector-databases",
                "evaluations-benchmarks",
                "hybrid-search-reranking"
          ],
          "relatedTechnologies": [
                "Model Context Protocol",
                "QLoRA Fine-Tuning",
                "Speculative Decoding"
          ],
          "industry": "Enterprise AI Knowledge Management & Search",
          "firstAppearance": "2020 (ArXiv Paper by Lewis et al.)",
          "currentStatus": "Production Ready",
          "enterpriseUsage": "Deployed across 90%+ of enterprise GenAI chatbots, legal discovery tools, and internal knowledge search engines to eliminate model hallucinations.",
          "keyBenefits": [
                "Bypasses static training cutoffs by injecting real-time proprietary data directly into context windows",
                "Provides verifiable source attributions and page-level citations for every generated statement",
                "Significantly cheaper and faster to update than running full fine-tuning loops on foundation models"
          ],
          "limitations": [
                "Susceptible to context window clutter if chunk reranking precision drops below 85%",
                "Requires complex vector indexing, chunking pipelines, and embedding synchronization overhead"
          ],
          "associatedArticles": [
                "open-models-infrastructure-shift",
                "enterprise-ai-agents-production"
          ],
          "futureExpansionOpportunities": [
                "GraphRAG multi-hop semantic relationship querying",
                "Real-time streaming vector embedding updates via CDC pipelines"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 10,
                "enterpriseImportance": 10,
                "citationFrequency": 10,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 10,
                "futureGrowth": 9,
                "aiVisibility": 10,
                "totalScore": 99
          }
    },
    relatedEntities: ["model-context-protocol", "fine-tuning-qlora", "quantization-int4"],
    cornerstoneSlug: "open-models-infrastructure-shift"
  },
  {
    slug: "multi-agent-system",
    term: "Multi-Agent System (MAS)",
    pillar: "ai-engineering",
    definition:
      "An orchestrated cluster of specialized AI agents working collaboratively across stateful execution graphs where individual agents assume distinct roles (e.g., Planner, Researcher, Coder, Critic) to complete complex, multi-turn workflows.",
    synonyms: ["Agentic AI Cluster", "LangGraph Graph", "Autonomous Agent Swarm"],
    keyApplications: [
      "Automated software engineering and multi-file code refactoring pipelines",
      "Continuous SOC security incident triage and correlation across identity logs",
      "Deep practitioner research synthesis involving automated browser tool calling"
    ],
    entityClass: "Concept",
    profileMetadata: {
          "aliases": [
                "MAS",
                "Agentic Swarm",
                "LangGraph Execution Graph",
                "Collaborative Agent Network"
          ],
          "officialSources": [
                {
                      "title": "LangGraph: Multi-Agent Stateful Orchestration Architecture",
                      "url": "https://langchain-ai.github.io/langgraph/",
                      "type": "Official Documentation"
                },
                {
                      "title": "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation",
                      "url": "https://arxiv.org/abs/2308.08155",
                      "type": "Academic Paper"
                }
          ],
          "parentCategory": "AI Engineering & Autonomous Systems",
          "childRelationships": [
                "model-context-protocol",
                "zero-trust-ai",
                "prompt-engineering"
          ],
          "relatedTechnologies": [
                "Model Context Protocol (MCP)",
                "Retrieval-Augmented Generation",
                "Zero-Trust AI Security"
          ],
          "industry": "Enterprise AI Orchestration & Autonomous Systems",
          "firstAppearance": "2023",
          "currentStatus": "Production Ready",
          "enterpriseUsage": "Deployed by Fortune 500 engineering teams to execute complex software refactoring, continuous SOC triage, and multi-source financial research synthesis.",
          "keyBenefits": [
                "Decouples monolithic prompts into specialized role-based agents (Planner, Coder, Critic) with near-human accuracy",
                "Enables cyclic error-recovery loops and human-in-the-loop checkpoints before final state commit",
                "Scales horizontal throughput by parallelizing independent subtasks across dedicated LLM workers"
          ],
          "limitations": [
                "Significantly increases total token consumption and API latency across multi-turn cyclic graphs",
                "Requires strict state synchronization and zero-trust boundaries to prevent error cascades"
          ],
          "associatedArticles": [
                "enterprise-ai-agents-production",
                "cybersecurity-ai-defense-brief",
                "developer-tools-2026"
          ],
          "futureExpansionOpportunities": [
                "Decentralized inter-company agent discovery grids via encrypted MCP protocols",
                "Self-healing multi-agent topology restructuring based on real-time task complexity"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 10,
                "enterpriseImportance": 10,
                "citationFrequency": 10,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 10,
                "futureGrowth": 10,
                "aiVisibility": 9,
                "totalScore": 99
          }
    },
    relatedEntities: ["model-context-protocol", "zero-trust-ai", "prompt-injection"],
    cornerstoneSlug: "enterprise-ai-agents-production"
  },
  {
    slug: "zero-trust-ai",
    term: "Zero-Trust AI Security",
    pillar: "enterprise-ai",
    definition:
      "A security paradigm applied to artificial intelligence workflows that assumes no input prompt, tool output, or agent action is trusted by default, enforcing strict identity boundaries, input sanitization, least-privilege RBAC, and human-in-the-loop authorization gates.",
    synonyms: ["AI Guardrails", "Zero-Trust LLM Perimeter", "Agent Least Privilege"],
    keyApplications: [
      "Preventing autonomous agents from executing destructive database mutations without sign-off",
      "Isolating agent sandboxes inside VPC boundaries to prevent exfiltration of sensitive PII",
      "Intercepting prompt injection attacks before they reach frontier model endpoints"
    ],
    entityClass: "Security Concept",
    profileMetadata: {
          "aliases": [
                "Zero-Trust AI Security",
                "AI Guardrails",
                "Zero-Trust LLM Perimeter",
                "Agent Least Privilege"
          ],
          "officialSources": [
                {
                      "title": "NIST AI Risk Management Framework (AI RMF 1.0)",
                      "url": "https://www.nist.gov/itl/ai-risk-management-framework",
                      "type": "RFC / Standard"
                },
                {
                      "title": "OWASP Top 10 for Large Language Model Applications",
                      "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
                      "type": "RFC / Standard"
                }
          ],
          "parentCategory": "AI Security, Governance & Compliance",
          "childRelationships": [
                "prompt-injection-defense",
                "sandboxed-execution",
                "rbac-ai-guardrails",
                "nist-ai-rmf"
          ],
          "relatedTechnologies": [
                "Multi-Agent Systems",
                "Prompt Injection Defense",
                "Sandboxed Execution Containers"
          ],
          "industry": "Cybersecurity & Enterprise Governance",
          "firstAppearance": "2023 (Post-LLM Enterprise Adoption)",
          "currentStatus": "Production Ready",
          "enterpriseUsage": "Mandatory architectural standard across regulated banking, healthcare, and government AI deployments.",
          "keyBenefits": [
                "Assumes every external web scrape, untrusted document, or tool payload is potentially hostile",
                "Enforces cryptographic role-based access controls (`RBAC`) before an agent can invoke high-risk APIs",
                "Mandates human-in-the-loop (`HITL`) confirmation gates for state-changing production commands"
          ],
          "limitations": [
                "Adds processing overhead and validation latency to high-speed autonomous agent loops",
                "Requires constant updates to guardrail classification patterns as attack vectors evolve"
          ],
          "associatedArticles": [
                "cybersecurity-ai-defense-brief",
                "enterprise-ai-agents-production"
          ],
          "futureExpansionOpportunities": [
                "Hardware-enforced confidential computing enclaves for LLM inference",
                "Real-time semantic firewall inference latency optimization"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 10,
                "enterpriseImportance": 10,
                "citationFrequency": 10,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 10,
                "futureGrowth": 9,
                "aiVisibility": 10,
                "totalScore": 99
          }
    },
    relatedEntities: ["prompt-injection", "multi-agent-system", "ai-finops"],
    cornerstoneSlug: "cybersecurity-ai-defense-brief"
  },
  {
    slug: "quantization-int4",
    term: "Model Quantization (INT4 / FP8)",
    pillar: "ai-hardware",
    definition:
      "A mathematical model compression technique that converts floating-point weights (FP16/FP32) of a neural network into lower-precision integers (INT4/INT8 or FP8), dramatically reducing VRAM memory requirements and accelerating inference throughput with minimal accuracy loss.",
    synonyms: ["INT4 Quantization", "FP8 Compression", "AWQ / GPTQ / GGUF"],
    keyApplications: [
      "Running 70B+ parameter open-weight models locally on consumer Apple Silicon or single GPUs",
      "Reducing cloud inference hosting costs (`$-per-token`) at edge CDN nodes by up to 14x",
      "Optimizing KV-cache memory footprints during long-context production batch processing"
    ],
    entityClass: "Technology",
    profileMetadata: {
          "aliases": [
                "INT4 Quantization",
                "FP8/INT4 Quantization",
                "Low-Precision Weights",
                "Model Compression"
          ],
          "officialSources": [
                {
                      "title": "AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration",
                      "url": "https://arxiv.org/abs/2306.00978",
                      "type": "Academic Paper"
                },
                {
                      "title": "NVIDIA TensorRT-LLM Quantization Guide",
                      "url": "https://nvidia.github.io/TensorRT-LLM/precision.html",
                      "type": "Official Documentation"
                }
          ],
          "parentCategory": "Enterprise AI & Production Architectures",
          "childRelationships": [
                "tensorrt-llm",
                "vllm-inference",
                "open-weight-models"
          ],
          "relatedTechnologies": [
                "TensorRT-LLM",
                "vLLM Inference Engine",
                "Speculative Decoding"
          ],
          "industry": "AI Infrastructure & Hardware Acceleration",
          "firstAppearance": "2022 (GPTQ & AWQ emergence)",
          "currentStatus": "Production Ready",
          "enterpriseUsage": "Used across enterprise clusters to fit 70B+ parameter open-weight models into single H100 or dual A100 GPU nodes.",
          "keyBenefits": [
                "Reduces GPU VRAM requirements by 50% to 75% compared to native FP16 weights",
                "Doubles memory bandwidth throughput during token generation passes",
                "Maintains near-zero perplexity degradation on downstream coding and reasoning benchmarks"
          ],
          "limitations": [
                "Requires calibration dataset pre-processing passes (`AWQ/GPTQ`) before serving",
                "Can cause minor precision degradation on highly complex multi-step mathematical edge cases"
          ],
          "associatedArticles": [
                "open-models-infrastructure-shift",
                "cloud-cost-architecture-guide"
          ],
          "futureExpansionOpportunities": [
                "Sub-1-bit and ternary weight quantization (`BitNet b1.58`)",
                "Dynamic activation quantization without pre-calibration overhead"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 9,
                "enterpriseImportance": 10,
                "citationFrequency": 10,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 10,
                "futureGrowth": 9,
                "aiVisibility": 10,
                "totalScore": 98
          }
    },
    relatedEntities: ["ai-finops", "fine-tuning-qlora", "retrieval-augmented-generation"],
    cornerstoneSlug: "open-models-infrastructure-shift"
  },
  {
    slug: "prompt-injection",
    term: "Prompt Injection Attack",
    pillar: "cybersecurity-ai",
    definition:
      "An adversarial cybersecurity exploit where malicious instructions are inserted into a user prompt or external data source (indirect injection) to override an AI model's safety guardrails, leak system instructions, or hijack autonomous tool execution.",
    synonyms: ["Adversarial Prompting", "Indirect Prompt Injection", "Jailbreak Exploit"],
    keyApplications: [
      "Testing enterprise guardrails through automated red-teaming frameworks (`Garak/PyRIT`)",
      "Sanitizing untrusted web scraping outputs before ingesting into RAG vector stores",
      "Hardening system prompt boundaries against adversarial suffix attacks"
    ],
    entityClass: "Security Concept",
    profileMetadata: {
          "aliases": [
                "Prompt Injection",
                "Adversarial Prompting",
                "Indirect Prompt Injection Exploit",
                "Jailbreak Attack"
          ],
          "officialSources": [
                {
                      "title": "NIST AI Risk Management Framework (AI RMF 1.0)",
                      "url": "https://www.nist.gov/itl/ai-risk-management-framework",
                      "type": "RFC / Standard"
                },
                {
                      "title": "OWASP Top 10 for Large Language Model Applications (LLM01: Prompt Injection)",
                      "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
                      "type": "RFC / Standard"
                }
          ],
          "parentCategory": "AI Security, Governance & Compliance",
          "childRelationships": [
                "zero-trust-ai",
                "sandboxed-execution",
                "rbac-ai-guardrails"
          ],
          "relatedTechnologies": [
                "Zero-Trust AI Security",
                "Multi-Agent Systems",
                "Model Context Protocol (MCP)"
          ],
          "industry": "AI Cybersecurity & Enterprise Defense",
          "firstAppearance": "2022",
          "currentStatus": "Rapid Evolution",
          "enterpriseUsage": "Monitored and mitigated by Chief Information Security Officers (CISOs) using automated red-teaming harnesses (Garak, PyRIT) and dual-LLM firewall proxies.",
          "keyBenefits": [
                "Understanding injection mechanics enables strict cryptographic separation between untrusted user inputs and system prompts",
                "Drives the adoption of zero-trust RBAC boundaries across autonomous tool calling pipelines",
                "Forces rigorous input sanitization and output validation filters before executing external API commands"
          ],
          "limitations": [
                "No absolute deterministic mathematical guarantee against sophisticated indirect multi-modal injection payloads",
                "Overly aggressive prompt filtering can cause false positives and degrade legitimate user experience"
          ],
          "associatedArticles": [
                "cybersecurity-ai-defense-brief",
                "enterprise-ai-agents-production"
          ],
          "futureExpansionOpportunities": [
                "Hardware-enforced trusted execution environments (TEEs) isolating system prompt weights from context buffers",
                "Real-time cryptographic prompt attestation across multi-tenant agent boundaries"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 10,
                "enterpriseImportance": 10,
                "citationFrequency": 10,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 9,
                "futureGrowth": 9,
                "aiVisibility": 10,
                "totalScore": 98
          }
    },
    relatedEntities: ["zero-trust-ai", "multi-agent-system", "model-context-protocol"],
    cornerstoneSlug: "cybersecurity-ai-defense-brief"
  },
  {
    slug: "fine-tuning-qlora",
    term: "QLoRA Parameter-Efficient Fine-Tuning",
    pillar: "ai-engineering",
    definition:
      "Quantized Low-Rank Adaptation (QLoRA) is an advanced model adaptation technique that backpropagates gradients through a frozen, quantized 4-bit base model into small, low-rank adapter layers, enabling full 65B+ model tuning on single consumer GPUs.",
    synonyms: ["QLoRA", "LoRA Fine-Tuning", "Adapter Tuning"],
    keyApplications: [
      "Aligning open-weight foundation models to proprietary enterprise domain jargon",
      "Imbuing deterministic JSON schema formatting without expensive full-parameter runs",
      "Creating specialized coding and security models from base Llama or Mistral checkpoints"
    ],
    entityClass: "Technology",
    profileMetadata: {
          "aliases": [
                "QLoRA",
                "Quantized Low-Rank Adaptation",
                "Parameter-Efficient Fine-Tuning (PEFT)",
                "LoRA Fine-Tuning"
          ],
          "officialSources": [
                {
                      "title": "QLoRA: Efficient Finetuning of Quantized LLMs",
                      "url": "https://arxiv.org/abs/2305.14314",
                      "type": "Academic Paper"
                },
                {
                      "title": "LoRA: Low-Rank Adaptation of Large Language Models",
                      "url": "https://arxiv.org/abs/2106.09685",
                      "type": "Academic Paper"
                }
          ],
          "parentCategory": "Enterprise AI & Production Architectures",
          "childRelationships": [
                "quantization-int4",
                "vllm-inference",
                "open-weight-models"
          ],
          "relatedTechnologies": [
                "Retrieval-Augmented Generation",
                "Model Quantization (INT4 / FP8)",
                "AI FinOps & Cloud Economics"
          ],
          "industry": "Enterprise AI Model Training & Adaptation",
          "firstAppearance": "May 2023 (Dettmers et al.)",
          "currentStatus": "Production Ready",
          "enterpriseUsage": "Used by enterprise AI engineering teams to adapt 70B+ open-weight foundation models (Llama 3.3, Mistral) to internal proprietary datasets on single H100 or A10G GPUs.",
          "keyBenefits": [
                "Reduces memory consumption during fine-tuning by up to 4x by keeping base weights frozen in 4-bit NormalFloat format",
                "Preserves full 16-bit fine-tuning task accuracy while training only 0.1% to 1% of total model parameters",
                "Enables rapid swap of lightweight LoRA adapter weights at runtime on shared vLLM inference instances"
          ],
          "limitations": [
                "Does not inject entirely novel factual knowledge as effectively as Retrieval-Augmented Generation (RAG)",
                "Requires careful hyperparameter tuning of LoRA rank (r) and alpha to avoid catastrophic forgetting"
          ],
          "associatedArticles": [
                "open-models-infrastructure-shift",
                "cloud-cost-architecture-guide"
          ],
          "futureExpansionOpportunities": [
                "Real-time dynamic LoRA adapter routing based on incoming prompt classification",
                "Distributed federated QLoRA training across edge device clusters"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 10,
                "enterpriseImportance": 10,
                "citationFrequency": 10,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 9,
                "futureGrowth": 9,
                "aiVisibility": 10,
                "totalScore": 98
          }
    },
    relatedEntities: ["quantization-int4", "retrieval-augmented-generation", "ai-finops"],
    cornerstoneSlug: "open-models-infrastructure-shift"
  },
  {
    slug: "ai-finops",
    term: "AI FinOps & Cloud Economics",
    pillar: "enterprise-ai",
    definition:
      "The operational framework and financial engineering discipline dedicated to managing, monitoring, and optimizing the cost of enterprise AI workloads across API token consumption, GPU cluster provisioning, and semantic caching layers.",
    synonyms: ["LLM FinOps", "AI Cost Management", "Token Economics"],
    keyApplications: [
      "Implementing semantic caching layers (`Redis/Vector`) to eliminate redundant API billing",
      "Dynamically routing simple queries to smaller, cheaper models (`Claude Haiku/GPT-4o mini`) while reserving frontier models (`Opus/o1`) for complex reasoning",
      "Allocating spot GPU clusters and tracking cost-per-workflow across internal teams"
    ],
    entityClass: "Business Framework",
    profileMetadata: {
          "aliases": [
                "AI FinOps",
                "Cloud FinOps for GenAI",
                "GPU Cloud Cost Model",
                "AI Unit Economics"
          ],
          "officialSources": [
                {
                      "title": "FinOps Foundation: AI & Cloud Cost Optimization Standards",
                      "url": "https://www.finops.org/",
                      "type": "RFC / Standard"
                },
                {
                      "title": "AWS Cloud Financial Management for AI/ML Workloads",
                      "url": "https://aws.amazon.com/financial-management/",
                      "type": "Enterprise Guide"
                }
          ],
          "parentCategory": "Cloud & Distributed Infrastructure",
          "childRelationships": [
                "kubernetes-ai",
                "terraform-finops",
                "gpu-cluster-scheduling"
          ],
          "relatedTechnologies": [
                "Kubernetes AI Cluster Scheduling",
                "Terraform FinOps Automation",
                "Speculative Decoding"
          ],
          "industry": "Enterprise Cloud Operations & FinOps",
          "firstAppearance": "2024",
          "currentStatus": "Production Ready",
          "enterpriseUsage": "Employed by enterprise CFOs, DevOps leads, and cloud architects to govern, forecast, and optimize multi-million-dollar GPU cluster budgets.",
          "keyBenefits": [
                "Establishes granular cost-per-1,000-tokens attribution across internal product departments",
                "Automates spot instance scaling and idle GPU node shutdown during low-traffic periods",
                "Balancing proprietary API costs (`GPT-4.5`) against self-hosted open-weight infrastructure (`vLLM`)"
          ],
          "limitations": [
                "Requires deep telemetry integration across Kubernetes clusters, API gateways, and billing accounts",
                "Can lead to premature optimization if strict cost caps degrade user-facing latency or output quality"
          ],
          "associatedArticles": [
                "cloud-cost-architecture-guide",
                "open-models-infrastructure-shift"
          ],
          "futureExpansionOpportunities": [
                "Autonomous predictive spot cluster arbitrage across multi-cloud regions",
                "Real-time token economic routing balancing cost against model capability scores"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 9,
                "enterpriseImportance": 10,
                "citationFrequency": 10,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 10,
                "futureGrowth": 9,
                "aiVisibility": 10,
                "totalScore": 98
          }
    },
    relatedEntities: ["quantization-int4", "zero-trust-ai", "multi-agent-system"],
    cornerstoneSlug: "open-models-infrastructure-shift"
  },
  {
    slug: "vision-language-action",
    term: "Vision-Language-Action (VLA) Models",
    pillar: "future-tech",
    definition:
      "Multi-modal foundation models that simultaneously process visual camera perception, natural language instructions, and physical robot joint control actions inside a unified neural architecture for real-world physical manipulation.",
    synonyms: ["VLA Models", "Embodied Foundation Models", "Physical AI Robotics"],
    keyApplications: [
      "Enabling humanoid robots to understand verbal commands and execute dexterous tasks in factory settings",
      "Bridging synthetic simulation training (`Isaac Gym`) to real-world physical deployment",
      "Autonomous navigation and manipulation across unstructured spatial environments"
    ],
    entityClass: "AI Model",
    profileMetadata: {
          "aliases": [
                "VLA",
                "Vision-Language-Action Models",
                "Embodied AI Transformers",
                "Robotic Foundation Models"
          ],
          "officialSources": [
                {
                      "title": "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control",
                      "url": "https://arxiv.org/abs/2307.15818",
                      "type": "Academic Paper"
                },
                {
                      "title": "OpenVLA: An Open-Source Vision-Language-Action Model",
                      "url": "https://arxiv.org/abs/2406.09246",
                      "type": "Academic Paper"
                }
          ],
          "parentCategory": "AI Engineering & Autonomous Systems",
          "childRelationships": [
                "physical-robotics",
                "multimodal-transformers",
                "real-time-inference"
          ],
          "relatedTechnologies": [
                "Multi-Agent Systems",
                "Function Calling",
                "Speculative Decoding"
          ],
          "industry": "Physical Robotics & Embodied AI",
          "firstAppearance": "July 2023 (Google DeepMind RT-2)",
          "currentStatus": "Rapid Evolution",
          "enterpriseUsage": "Deployed by industrial automation leaders (`Figure AI`, `Boston Dynamics`, `Tesla`) to translate visual observation and verbal commands into physical motor torques.",
          "keyBenefits": [
                "Unifies high-level internet semantic knowledge directly with low-level physical actuation coordinates",
                "Eliminates rigid hand-coded kinematics graphs by enabling zero-shot generalization to novel objects",
                "Enables natural language voice correction of robotic tasks in real time"
          ],
          "limitations": [
                "Requires high-frequency inference latency (`>30 Hz`) on edge hardware to prevent physical instability",
                "Demands extensive multimodal sensor calibration and high-fidelity simulation training loops"
          ],
          "associatedArticles": [
                "robotics-foundation-models",
                "enterprise-ai-agents-production"
          ],
          "futureExpansionOpportunities": [
                "Sub-10ms neuromorphic edge chip inference for VLA control streams",
                "Federated multi-robot physical experience sharing across industrial factories"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 9,
                "enterpriseImportance": 10,
                "citationFrequency": 10,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 10,
                "futureGrowth": 10,
                "aiVisibility": 10,
                "totalScore": 99
          }
    },
    relatedEntities: ["quantization-int4", "multi-agent-system"],
    cornerstoneSlug: "open-models-infrastructure-shift"
  },
  {
    slug: "json-rpc-transport",
    term: "JSON-RPC Transport Layer",
    pillar: "programming-dev",
    definition:
      "A stateless, lightweight remote procedure call (`RPC`) protocol encoded in JSON that serves as the foundational communication mechanism for Model Context Protocol (`MCP`) client-server interactions across stdio and Server-Sent Events (`SSE`).",
    synonyms: ["JSON-RPC 2.0", "MCP Transport", "Structured Tool Protocol"],
    keyApplications: [
      "Facilitating bi-directional message exchange between Claude Desktop and local MCP servers",
      "Structuring capability negotiation and tool schema discovery over standard stdio pipes",
      "Streaming real-time execution progress updates from long-running remote agent tasks"
    ],
    entityClass: "Protocol",
    profileMetadata: {
          "aliases": [
                "JSON-RPC Transport",
                "JSON-RPC 2.0",
                "MCP Transport Layer",
                "Stdio/SSE RPC"
          ],
          "officialSources": [
                {
                      "title": "JSON-RPC 2.0 Specification",
                      "url": "https://www.jsonrpc.org/specification",
                      "type": "RFC / Standard"
                },
                {
                      "title": "Model Context Protocol Architecture & Transports",
                      "url": "https://modelcontextprotocol.io/docs/concepts/architecture",
                      "type": "Official Documentation"
                }
          ],
          "parentCategory": "Developer Tools & Next-Gen Toolchains",
          "childRelationships": [
                "model-context-protocol",
                "cursor-ai-ide",
                "mcp-inspector"
          ],
          "relatedTechnologies": [
                "Model Context Protocol (MCP)",
                "Multi-Agent Systems",
                "Server-Sent Events (SSE)"
          ],
          "industry": "Distributed Systems & AI Tooling",
          "firstAppearance": "2010 (JSON-RPC 2.0) / 2024 (MCP Adoption)",
          "currentStatus": "Active Standard",
          "enterpriseUsage": "Powers high-performance, low-latency inter-process communication between local AI IDE clients and specialized MCP tool servers.",
          "keyBenefits": [
                "Lightweight, human-readable JSON payload encoding with minimal serialization overhead",
                "Supports asynchronous request-response pairing via unique message transaction IDs",
                "Operates seamlessly over standard POSIX stdio pipes as well as HTTP Server-Sent Events (SSE)"
          ],
          "limitations": [
                "Lacks native binary streaming for large media payloads without base64 encoding overhead",
                "Requires strict schema validation at both endpoints to prevent malformed RPC exceptions"
          ],
          "associatedArticles": [
                "open-models-infrastructure-shift",
                "developer-tools-2026"
          ],
          "futureExpansionOpportunities": [
                "High-speed binary protobuf/gRPC transport bindings for ultra-dense MCP tool streams",
                "Zero-copy shared memory IPC channels for local agent swarms"
          ],
          "authorityScorecard": {
                "coverageDepth": 10,
                "relationshipStrength": 10,
                "searchDemand": 9,
                "enterpriseImportance": 10,
                "citationFrequency": 9,
                "semanticValue": 10,
                "knowledgeCompleteness": 10,
                "clusterIntegration": 10,
                "futureGrowth": 9,
                "aiVisibility": 10,
                "totalScore": 97
          }
    },
    relatedEntities: ["model-context-protocol", "multi-agent-system"],
    cornerstoneSlug: "open-models-infrastructure-shift"
  }
];

export function getGlossaryEntityBySlug(slug: string): GlossaryEntity | undefined {
  return glossaryEntities.find((e) => e.slug === slug);
}

export function getGlossaryEntitiesByPillar(pillar: string): GlossaryEntity[] {
  return glossaryEntities.filter((e) => e.pillar === pillar);
}

export function getAllGlossaryEntities(): GlossaryEntity[] {
  return glossaryEntities;
}
