import type {
  EntityClass,
  RelationshipPredicate,
  EntityRelationshipTriple,
  EntityAuthorityScorecard
} from "@/lib/types";

export interface KnowledgeGraphLayer {
  layerNumber: number;
  title: string;
  description: string;
  primaryArtifact: string;
}

export const knowledgeGraphLayersRegistry: KnowledgeGraphLayer[] = [
  {
    layerNumber: 1,
    title: "Editorial Pillars",
    description: "The 5 overarching domain foundations defining our high-level taxonomy (AI Engineering, Enterprise AI, Cloud & Infrastructure, AI Security & Governance, Developer Tools).",
    primaryArtifact: "lib/data/categories.ts"
  },
  {
    layerNumber: 2,
    title: "Topical Clusters",
    description: "The specialized topic clusters residing under each pillar that group related technical methodologies and architecture paradigms.",
    primaryArtifact: "lib/data/editorial-planning.ts"
  },
  {
    layerNumber: 3,
    title: "Core Entities",
    description: "Canonical technical entities (e.g., Model Context Protocol, RAG, Multi-Agent Systems) that form the primary nodes of our semantic network.",
    primaryArtifact: "lib/data/glossary.ts"
  },
  {
    layerNumber: 4,
    title: "Supporting Entities",
    description: "Secondary technical concepts, libraries, algorithms, and dependencies that support and extend our core canonical entities.",
    primaryArtifact: "lib/data/glossary.ts (Sub-entities)"
  },
  {
    layerNumber: 5,
    title: "Relationships",
    description: "Explicit semantic triples (Subject -> Predicate -> Object) establishing how entities interact, depend on, extend, or secure one another.",
    primaryArtifact: "lib/data/enterprise-knowledge-graph.ts (Triples)"
  },
  {
    layerNumber: 6,
    title: "Publications",
    description: "Flagship cornerstone guides, advanced tutorials, comparisons, and implementation checklists grounded in explicit entity nodes.",
    primaryArtifact: "lib/data/articles.ts"
  },
  {
    layerNumber: 7,
    title: "Media Assets",
    description: "Custom vector SVG diagrams, architectural workflows, and comparison matrices embedded within articles to visually map knowledge.",
    primaryArtifact: "components/article/*"
  },
  {
    layerNumber: 8,
    title: "Research Sources",
    description: "Authoritative external citations including RFCs, academic papers, official vendor documentation, and peer-reviewed benchmarks.",
    primaryArtifact: "EntityOfficialSource & citations"
  },
  {
    layerNumber: 9,
    title: "Enterprise Applications",
    description: "Real-world production deployments, architecture blueprints, and ROI case studies translating theoretical entities into operational value.",
    primaryArtifact: "Article keyTakeaways & use cases"
  },
  {
    layerNumber: 10,
    title: "Future Knowledge Expansion",
    description: "Autonomous radar and expansion roadmaps identifying emerging startups, new foundation models, and evolving standards before competitors.",
    primaryArtifact: "Discovery Engine & Expansion Roadmaps"
  }
];

export interface EntityClassDefinition {
  className: EntityClass;
  description: string;
  schemaType: string;
  exampleEntities: string[];
}

export const entityClassesRegistry: EntityClassDefinition[] = [
  { className: "AI Model", description: "Foundation LLMs, multimodal transformers, and fine-tuned domain weights.", schemaType: "SoftwareApplication", exampleEntities: ["GPT-4.5", "Claude 3.5 Sonnet", "DeepSeek R1", "Llama 3.3"] },
  { className: "Company", description: "Technology organizations, AI research labs, and enterprise vendors.", schemaType: "Organization", exampleEntities: ["Anthropic", "OpenAI", "NVIDIA", "DeepSeek", "Meta AI"] },
  { className: "Programming Language", description: "Core syntax and compilers powering production systems.", schemaType: "ComputerLanguage", exampleEntities: ["Python", "Rust", "TypeScript", "Go", "C++"] },
  { className: "Framework", description: "Software frameworks and orchestration libraries for building AI agents.", schemaType: "SoftwareSourceCode", exampleEntities: ["LangGraph", "CrewAI", "Pydantic AI", "Next.js", "PyTorch"] },
  { className: "Protocol", description: "Standardized communication specifications and RPC interfaces.", schemaType: "TechnicalArticle", exampleEntities: ["Model Context Protocol (MCP)", "JSON-RPC", "gRPC", "WebSocket"] },
  { className: "Standard", description: "Industry specifications, regulatory frameworks, and compliance standards.", schemaType: "CreativeWork", exampleEntities: ["NIST AI RMF", "ISO/IEC 42001", "OpenAPI 3.1", "W3C DID"] },
  { className: "Cloud Platform", description: "Hyper-scale public cloud providers and serverless compute grids.", schemaType: "Service", exampleEntities: ["AWS Bedrock", "Azure AI", "Google Cloud Vertex AI", "Cloudflare Workers"] },
  { className: "Open Source Project", description: "Community-driven repositories and public codebases.", schemaType: "SoftwareSourceCode", exampleEntities: ["vLLM", "Ollama", "Hugging Face Transformers", "Milvus"] },
  { className: "Research Paper", description: "Peer-reviewed scientific publications and arXiv breakthroughs.", schemaType: "ScholarlyArticle", exampleEntities: ["Attention Is All You Need", "QLoRA Paper", "FlashAttention-3"] },
  { className: "University", description: "Academic research institutions and AI labs.", schemaType: "EducationalOrganization", exampleEntities: ["Stanford AI Lab", "MIT CSAIL", "UC Berkeley BAIR", "CMU"] },
  { className: "Enterprise Product", description: "Commercial enterprise software solutions and SaaS platforms.", schemaType: "Product", exampleEntities: ["Cursor", "GitHub Copilot Enterprise", "Snowflake Cortex"] },
  { className: "Hardware", description: "Accelerators, GPUs, TPUs, and AI cluster networking chips.", schemaType: "Product", exampleEntities: ["NVIDIA H100 GPU", "NVIDIA Blackwell GB200", "Google TPU v5e"] },
  { className: "Person", description: "Prominent AI researchers, executives, and open-source architects.", schemaType: "Person", exampleEntities: ["Dario Amodei", "Sam Altman", "Yann LeCun", "Harrison Chase"] },
  { className: "Developer Tool", description: "IDE extensions, linters, debuggers, and inspection suites.", schemaType: "SoftwareApplication", exampleEntities: ["MCP Inspector", "LangSmith", "Weights & Biases", "Postman"] },
  { className: "Security Concept", description: "Threat vectors, defensive guardrails, and cryptographic boundaries.", schemaType: "DefinedTerm", exampleEntities: ["Zero-Trust AI", "Prompt Injection Defense", "Sandboxed Execution"] },
  { className: "Business Framework", description: "Enterprise ROI evaluation matrices, FinOps models, and TCO structures.", schemaType: "DefinedTerm", exampleEntities: ["FinOps Cloud Cost Model", "AI Value Realization Framework"] },
  { className: "Industry Report", description: "Annual state-of-the-art benchmarks and enterprise adoption surveys.", schemaType: "Report", exampleEntities: ["Stanford AI Index Report", "Gartner Magic Quadrant for AI"] },
  { className: "Technology", description: "Core computing mechanics, memory systems, and inference algorithms.", schemaType: "DefinedTerm", exampleEntities: ["Speculative Decoding", "KV Cache Quantization", "FlashAttention"] },
  { className: "Concept", description: "Overarching theoretical computer science and AI paradigms.", schemaType: "DefinedTerm", exampleEntities: ["Retrieval-Augmented Generation (RAG)", "Multi-Agent System (MAS)", "Agentic Workflow"] }
];

export interface RelationshipPredicateDefinition {
  predicate: RelationshipPredicate;
  description: string;
  semanticDirection: string;
}

export const relationshipPredicatesRegistry: RelationshipPredicateDefinition[] = [
  { predicate: "uses", description: "Subject actively consumes or calls Object during execution.", semanticDirection: "Subject -> Object" },
  { predicate: "depends-on", description: "Subject requires Object as a strict structural prerequisite.", semanticDirection: "Subject -> Object" },
  { predicate: "competes-with", description: "Subject offers alternative capabilities targeting the same enterprise problem as Object.", semanticDirection: "Bidirectional" },
  { predicate: "integrates-with", description: "Subject has verified, native interoperability and bidirectional data flow with Object.", semanticDirection: "Bidirectional" },
  { predicate: "created-by", description: "Subject was invented, authored, or launched by organization or person Object.", semanticDirection: "Subject -> Creator" },
  { predicate: "standardized-by", description: "Subject is formally ratified and maintained by standards body Object.", semanticDirection: "Subject -> Standards Body" },
  { predicate: "replaced-by", description: "Subject is legacy/deprecated and superseded by modern solution Object.", semanticDirection: "Legacy -> Modern" },
  { predicate: "alternative-to", description: "Subject serves as a direct architectural substitute for Object.", semanticDirection: "Substitute -> Target" },
  { predicate: "extends", description: "Subject builds upon the base architecture of Object with specialized capabilities.", semanticDirection: "Child -> Parent" },
  { predicate: "supports", description: "Subject natively accommodates and accelerates workloads running on Object.", semanticDirection: "Platform -> Workload" },
  { predicate: "requires", description: "Subject cannot function or pass security verification without Object.", semanticDirection: "Subject -> Requirement" },
  { predicate: "runs-on", description: "Subject executes on top of compute infrastructure or hardware acceleration Object.", semanticDirection: "Software -> Hardware" },
  { predicate: "implements", description: "Subject provides a concrete code implementation of abstract specification Object.", semanticDirection: "Implementation -> Specification" },
  { predicate: "secures", description: "Subject establishes cryptographic guards, RBAC boundaries, or sanitization over Object.", semanticDirection: "Defense -> Target" },
  { predicate: "optimizes", description: "Subject significantly reduces latency, memory overhead, or cloud cost of Object.", semanticDirection: "Optimization -> Target" },
  { predicate: "influences", description: "Subject shaped the theoretical design or architectural evolution of Object.", semanticDirection: "Ancestor -> Descendant" }
];

export interface TopicalEntityMap {
  pillarSlug: string;
  pillarTitle: string;
  coreCluster: string;
  canonicalCornerstoneSlug: string;
  entityNodeSlugs: string[];
}

export const topicalEntityMapsRegistry: TopicalEntityMap[] = [
  {
    pillarSlug: "ai-engineering",
    pillarTitle: "AI Engineering & Autonomous Systems",
    coreCluster: "Autonomous AI Agents & Agentic Workflows",
    canonicalCornerstoneSlug: "enterprise-ai-agents-production",
    entityNodeSlugs: [
      "model-context-protocol",
      "retrieval-augmented-generation",
      "multi-agent-system",
      "prompt-engineering",
      "function-calling",
      "memory-systems",
      "agentic-workflows"
    ]
  },
  {
    pillarSlug: "enterprise-ai",
    pillarTitle: "Enterprise AI & Production Architectures",
    coreCluster: "Open-Weight Models & Production Infrastructure",
    canonicalCornerstoneSlug: "open-models-infrastructure-shift",
    entityNodeSlugs: [
      "fine-tuning-qlora",
      "speculative-decoding",
      "vllm-inference",
      "tensorrt-llm",
      "quantization-int4",
      "vector-databases",
      "evaluations-benchmarks"
    ]
  },
  {
    pillarSlug: "ai-security-and-governance",
    pillarTitle: "AI Security, Governance & Compliance",
    coreCluster: "Zero-Trust Autonomous Security & Guardrails",
    canonicalCornerstoneSlug: "cybersecurity-ai-defense-brief",
    entityNodeSlugs: [
      "zero-trust-ai",
      "prompt-injection-defense",
      "sandboxed-execution",
      "rbac-ai-guardrails",
      "nist-ai-rmf"
    ]
  },
  {
    pillarSlug: "cloud-and-infrastructure",
    pillarTitle: "Cloud & Distributed Infrastructure",
    coreCluster: "Cloud Cost Optimization & FinOps Architecture",
    canonicalCornerstoneSlug: "cloud-cost-architecture-guide",
    entityNodeSlugs: [
      "kubernetes-ai",
      "terraform-finops",
      "cloud-security-iam",
      "gpu-cluster-scheduling",
      "serverless-inference-grids"
    ]
  },
  {
    pillarSlug: "developer-tools",
    pillarTitle: "Developer Tools & Next-Gen Toolchains",
    coreCluster: "Next-Generation AI Developer Toolchain (2026)",
    canonicalCornerstoneSlug: "developer-tools-2026",
    entityNodeSlugs: [
      "rust-systems-ai",
      "python-ml-stack",
      "cursor-ai-ide",
      "langsmith-observability",
      "mcp-inspector"
    ]
  }
];

export const knowledgeRelationshipTriples: EntityRelationshipTriple[] = [
  // AI Engineering & MCP
  { tripleId: "TRP-001", subjectSlug: "model-context-protocol", subjectName: "Model Context Protocol (MCP)", predicate: "created-by", objectSlug: "anthropic", objectName: "Anthropic", description: "Anthropic designed and open-sourced MCP in late 2024 to standardize AI tool connectivity.", confidenceScore: 1.0 },
  { tripleId: "TRP-002", subjectSlug: "model-context-protocol", subjectName: "Model Context Protocol (MCP)", predicate: "implements", objectSlug: "json-rpc-transport", objectName: "JSON-RPC 2.0 Transport", description: "MCP servers and clients exchange structured JSON-RPC 2.0 messages over stdio and SSE.", confidenceScore: 1.0 },
  { tripleId: "TRP-003", subjectSlug: "multi-agent-system", subjectName: "Multi-Agent System (MAS)", predicate: "uses", objectSlug: "model-context-protocol", objectName: "Model Context Protocol (MCP)", description: "Agentic swarms use MCP as a standard transport layer to discover and invoke enterprise tools.", confidenceScore: 1.0 },
  { tripleId: "TRP-004", subjectSlug: "multi-agent-system", subjectName: "Multi-Agent System (MAS)", predicate: "requires", objectSlug: "zero-trust-ai", objectName: "Zero-Trust AI Security", description: "Stateful multi-agent execution graphs require strict least-privilege zero-trust guardrails to prevent cascading prompt injection.", confidenceScore: 1.0 },
  { tripleId: "TRP-005", subjectSlug: "retrieval-augmented-generation", subjectName: "Retrieval-Augmented Generation (RAG)", predicate: "integrates-with", objectSlug: "vector-databases", objectName: "Vector Databases", description: "RAG pipelines query high-dimensional vector embeddings stored in specialized vector indices prior to LLM generation.", confidenceScore: 1.0 },
  { tripleId: "TRP-006", subjectSlug: "retrieval-augmented-generation", subjectName: "Retrieval-Augmented Generation (RAG)", predicate: "extends", objectSlug: "prompt-engineering", objectName: "Prompt Engineering", description: "RAG dynamically enriches prompt context with retrieved enterprise chunks, extending traditional static prompt engineering.", confidenceScore: 1.0 },
  { tripleId: "TRP-007", subjectSlug: "agentic-workflows", subjectName: "Agentic Workflows", predicate: "depends-on", objectSlug: "function-calling", objectName: "Function Calling / Tool Use", description: "Autonomous workflows rely directly on LLM native function calling APIs to execute external actions.", confidenceScore: 1.0 },
  { tripleId: "TRP-008", subjectSlug: "agentic-workflows", subjectName: "Agentic Workflows", predicate: "uses", objectSlug: "memory-systems", objectName: "Agentic Memory Systems", description: "Complex agents utilize hierarchical episodic and semantic memory across turns.", confidenceScore: 1.0 },

  // Enterprise AI Infrastructure & Optimization
  { tripleId: "TRP-009", subjectSlug: "fine-tuning-qlora", subjectName: "QLoRA Fine-Tuning", predicate: "optimizes", objectSlug: "open-weight-models", objectName: "Open-Weight Foundation Models", description: "QLoRA enables parameter-efficient adaptation of 70B+ open models on consumer or single enterprise GPUs using 4-bit NormalFloat quantization.", confidenceScore: 1.0 },
  { tripleId: "TRP-010", subjectSlug: "speculative-decoding", subjectName: "Speculative Decoding", predicate: "optimizes", objectSlug: "vllm-inference", objectName: "vLLM Inference Engine", description: "Speculative decoding accelerates token generation latency by using a small draft model verified by a target model within vLLM.", confidenceScore: 1.0 },
  { tripleId: "TRP-011", subjectSlug: "vllm-inference", subjectName: "vLLM Inference Engine", predicate: "implements", objectSlug: "paged-attention", objectName: "PagedAttention", description: "vLLM achieves state-of-the-art serving throughput by managing KV cache memory using virtual memory paging.", confidenceScore: 1.0 },
  { tripleId: "TRP-012", subjectSlug: "tensorrt-llm", subjectName: "NVIDIA TensorRT-LLM", predicate: "runs-on", objectSlug: "nvidia-h100-gpu", objectName: "NVIDIA H100 Hopper GPU", description: "TensorRT-LLM compiles deep learning graphs into highly optimized CUDA kernels tailored for Hopper Transformer Engines.", confidenceScore: 1.0 },
  { tripleId: "TRP-013", subjectSlug: "tensorrt-llm", subjectName: "NVIDIA TensorRT-LLM", predicate: "competes-with", objectSlug: "vllm-inference", objectName: "vLLM Inference Engine", description: "Both serving architectures compete for dominant production enterprise LLM deployment share.", confidenceScore: 1.0 },
  { tripleId: "TRP-014", subjectSlug: "quantization-int4", subjectName: "INT4/FP8 Quantization", predicate: "optimizes", objectSlug: "tensorrt-llm", objectName: "NVIDIA TensorRT-LLM", description: "Low-precision quantization cuts VRAM consumption by 50-75% with minimal perplexity degradation.", confidenceScore: 1.0 },
  { tripleId: "TRP-015", subjectSlug: "evaluations-benchmarks", subjectName: "Enterprise AI Evaluation Stack", predicate: "secures", objectSlug: "retrieval-augmented-generation", objectName: "Retrieval-Augmented Generation (RAG)", description: "Automated LLM-as-a-Judge frameworks evaluate RAG faithfulness, answer relevance, and context precision before production release.", confidenceScore: 1.0 },

  // AI Security & Governance
  { tripleId: "TRP-016", subjectSlug: "zero-trust-ai", subjectName: "Zero-Trust AI Security", predicate: "secures", objectSlug: "multi-agent-system", objectName: "Multi-Agent System (MAS)", description: "Enforces strict RBAC and cryptographic input sanitization on every agentic tool invocation.", confidenceScore: 1.0 },
  { tripleId: "TRP-017", subjectSlug: "prompt-injection-defense", subjectName: "Prompt Injection Defense", predicate: "secures", objectSlug: "agentic-workflows", objectName: "Agentic Workflows", description: "Prevents indirect prompt injection payloads embedded in external websites from hijacking agent execution goals.", confidenceScore: 1.0 },
  { tripleId: "TRP-018", subjectSlug: "sandboxed-execution", subjectName: "Sandboxed Execution Containers", predicate: "supports", objectSlug: "model-context-protocol", objectName: "Model Context Protocol (MCP)", description: "Isolates MCP server tool execution inside ephemeral container boundaries to prevent host filesystem compromise.", confidenceScore: 1.0 },
  { tripleId: "TRP-019", subjectSlug: "nist-ai-rmf", subjectName: "NIST AI Risk Management Framework", predicate: "standardized-by", objectSlug: "nist", objectName: "National Institute of Standards and Technology (NIST)", description: "NIST established the official AI RMF standard governing enterprise AI reliability, safety, and accountability.", confidenceScore: 1.0 },
  { tripleId: "TRP-020", subjectSlug: "zero-trust-ai", subjectName: "Zero-Trust AI Security", predicate: "implements", objectSlug: "nist-ai-rmf", objectName: "NIST AI Risk Management Framework", description: "Zero-Trust AI operationalizes NIST AI RMF Map, Measure, and Manage controls across production endpoints.", confidenceScore: 1.0 },

  // Cloud Infrastructure & FinOps
  { tripleId: "TRP-021", subjectSlug: "kubernetes-ai", subjectName: "Kubernetes AI Cluster Scheduling", predicate: "runs-on", objectSlug: "gpu-cluster-scheduling", objectName: "GPU Cluster Scheduling Infrastructure", description: "Kubernetes orchestrates multi-node GPU training and inference workloads using custom device plugins and operators.", confidenceScore: 1.0 },
  { tripleId: "TRP-022", subjectSlug: "terraform-finops", subjectName: "Terraform FinOps Automation", predicate: "optimizes", objectSlug: "kubernetes-ai", objectName: "Kubernetes AI Cluster Scheduling", description: "Infrastructure-as-Code automation dynamically scales and autospans GPU spot clusters to minimize idle compute spend.", confidenceScore: 1.0 },
  { tripleId: "TRP-023", subjectSlug: "cloud-security-iam", subjectName: "Cloud Security IAM & Identity", predicate: "secures", objectSlug: "serverless-inference-grids", objectName: "Serverless Inference Grids", description: "Zero-trust IAM roles govern API gateway authentication and token rate limits across serverless inference endpoints.", confidenceScore: 1.0 },

  // Developer Tools & Next-Gen Toolchains
  { tripleId: "TRP-024", subjectSlug: "rust-systems-ai", subjectName: "Rust Systems Programming for AI", predicate: "alternative-to", objectSlug: "python-ml-stack", objectName: "Python Machine Learning Stack", description: "Rust delivers deterministic memory safety and near-zero latency overhead for performance-critical inference tokenizers and routing proxies.", confidenceScore: 0.98 },
  { tripleId: "TRP-025", subjectSlug: "cursor-ai-ide", subjectName: "Cursor AI Code Editor", predicate: "uses", objectSlug: "model-context-protocol", objectName: "Model Context Protocol (MCP)", description: "Cursor natively connects to local MCP servers to inspect repositories, run linters, and query databases.", confidenceScore: 1.0 },
  { tripleId: "TRP-026", subjectSlug: "langsmith-observability", subjectName: "LangSmith Tracing & Observability", predicate: "integrates-with", objectSlug: "agentic-workflows", objectName: "Agentic Workflows", description: "LangSmith captures granular token counts, latency spans, and tool call traces across complex multi-step LangGraph runs.", confidenceScore: 1.0 },
  { tripleId: "TRP-027", subjectSlug: "mcp-inspector", subjectName: "MCP Inspector Tool", predicate: "supports", objectSlug: "model-context-protocol", objectName: "Model Context Protocol (MCP)", description: "An official interactive debugging suite for testing and verifying MCP server JSON-RPC schemas during development.", confidenceScore: 1.0 },
  { tripleId: "TRP-028", subjectSlug: "retrieval-augmented-generation", subjectName: "Retrieval-Augmented Generation (RAG)", predicate: "alternative-to", objectSlug: "fine-tuning-qlora", objectName: "QLoRA Fine-Tuning", description: "When dynamic knowledge recall is needed without updating static weights, RAG serves as a direct alternative or complementary partner to fine-tuning.", confidenceScore: 1.0 },
  { tripleId: "TRP-029", subjectSlug: "vllm-inference", subjectName: "vLLM Inference Engine", predicate: "created-by", objectSlug: "uc-berkeley-bair", objectName: "UC Berkeley BAIR Lab", description: "vLLM and PagedAttention were originally researched and developed by researchers at UC Berkeley BAIR.", confidenceScore: 1.0 },
  { tripleId: "TRP-030", subjectSlug: "speculative-decoding", subjectName: "Speculative Decoding", predicate: "influences", objectSlug: "tensorrt-llm", objectName: "NVIDIA TensorRT-LLM", description: "The theoretical foundations of speculative sampling directly shaped TensorRT-LLM's multi-draft engine execution strategies.", confidenceScore: 1.0 },
  { tripleId: "TRP-031", subjectSlug: "prompt-injection", subjectName: "Prompt Injection Attack", predicate: "competes-with", objectSlug: "zero-trust-ai", objectName: "Zero-Trust AI Security", description: "Prompt injection attacks continuously target boundaries that zero-trust AI security guardrails are designed to defend and enforce.", confidenceScore: 1.0 },
  { tripleId: "TRP-032", subjectSlug: "json-rpc-transport", subjectName: "JSON-RPC Transport Layer", predicate: "supports", objectSlug: "model-context-protocol", objectName: "Model Context Protocol (MCP)", description: "JSON-RPC provides the structured bi-directional transport layer required for Model Context Protocol client-server exchange.", confidenceScore: 1.0 },
  { tripleId: "TRP-033", subjectSlug: "fine-tuning-qlora", subjectName: "QLoRA Parameter-Efficient Fine-Tuning", predicate: "uses", objectSlug: "quantization-int4", objectName: "Model Quantization (INT4 / FP8)", description: "QLoRA leverages 4-bit NormalFloat quantization on base weights while backpropagating gradients through lightweight LoRA adapters.", confidenceScore: 1.0 },
  { tripleId: "TRP-034", subjectSlug: "ai-finops", subjectName: "AI FinOps & Cloud Economics", predicate: "optimizes", objectSlug: "multi-agent-system", objectName: "Multi-Agent System (MAS)", description: "AI FinOps frameworks track token consumption and optimize API routing across high-frequency multi-agent execution loops.", confidenceScore: 1.0 }
];

export interface EntityDiscoveryRadarItem {
  entityName: string;
  slug: string;
  entityClass: EntityClass;
  radarStatus: "Tracking (Emerging)" | "Candidate for Core Entry" | "Active Research";
  description: string;
  firstDetectedAt: string;
}

export const entityDiscoveryRadarRegistry: EntityDiscoveryRadarItem[] = [
  { entityName: "OpenAI o3 Foundation Model", slug: "openai-o3-model", entityClass: "AI Model", radarStatus: "Tracking (Emerging)", description: "Next-generation reasoning transformer with reinforcement learning self-correction loops and tool chaining.", firstDetectedAt: "2026-07-01" },
  { entityName: "LangGraph 1.0 Production Release", slug: "langgraph-v1", entityClass: "Framework", radarStatus: "Candidate for Core Entry", description: "Production-grade stateful orchestration framework for multi-agent cyclic execution and human-in-the-loop checkpoints.", firstDetectedAt: "2026-06-15" },
  { entityName: "PyTorch 2.6 Compiled Autograd", slug: "pytorch-2-6", entityClass: "Framework", radarStatus: "Active Research", description: "Major release introducing native compiled autograd and enhanced distributed tensor sharding across multi-node H200 clusters.", firstDetectedAt: "2026-06-20" },
  { entityName: "Claude 3.7 Sonnet Reasoning Engine", slug: "claude-3-7-sonnet", entityClass: "AI Model", radarStatus: "Candidate for Core Entry", description: "Hybrid fast-inference and deep-thinking model from Anthropic with native MCP client protocol support.", firstDetectedAt: "2026-07-05" },
  { entityName: "NVIDIA Blackwell GB200 NVL72", slug: "nvidia-blackwell-gb200", entityClass: "Hardware", radarStatus: "Candidate for Core Entry", description: "Rack-scale AI supercomputing architecture delivering 30x faster inference for trillion-parameter LLMs.", firstDetectedAt: "2026-05-10" },
  { entityName: "NIST AI RMF 2.0 Draft", slug: "nist-ai-rmf-v2", entityClass: "Standard", radarStatus: "Tracking (Emerging)", description: "Updated risk management guidelines focusing on autonomous multi-agent systems and real-time prompt injection evaluation.", firstDetectedAt: "2026-06-28" },
  { entityName: "Pydantic AI Framework", slug: "pydantic-ai", entityClass: "Framework", radarStatus: "Candidate for Core Entry", description: "Type-safe Pythonic agent orchestration framework built directly on Pydantic validation schemas.", firstDetectedAt: "2026-06-01" },
  { entityName: "DeepSeek R1 Open Reasoning Model", slug: "deepseek-r1", entityClass: "AI Model", radarStatus: "Candidate for Core Entry", description: "Open-weights reasoning model training via pure reinforcement learning, achieving parity with proprietary reasoning engines.", firstDetectedAt: "2026-05-15" },
  { entityName: "Qwen 2.5 Max Enterprise weights", slug: "qwen-2-5-max", entityClass: "AI Model", radarStatus: "Active Research", description: "High-parameter open MoE model demonstrating leading performance in coding, math, and structured tool calling.", firstDetectedAt: "2026-06-12" },
  { entityName: "Amazon Nova Foundation Suite", slug: "amazon-nova-models", entityClass: "AI Model", radarStatus: "Tracking (Emerging)", description: "Amazon's proprietary multimodal foundation model suite natively integrated with AWS Bedrock agent pipelines.", firstDetectedAt: "2026-06-25" }
];

export interface EntityGovernanceRule {
  ruleId: string;
  ruleTitle: string;
  checkDescription: string;
  remediationProtocol: string;
}

export const entityGovernanceRulesRegistry: EntityGovernanceRule[] = [
  { ruleId: "GOV-001", ruleTitle: "Broken Relationship Triples Check", checkDescription: "Verifies that all subjectSlug and objectSlug identifiers referenced in knowledgeRelationshipTriples resolve to valid entities.", remediationProtocol: "Automatically flag broken IDs in QA dashboard and prompt immediate patch or alias creation." },
  { ruleId: "GOV-002", ruleTitle: "Duplicate Entities Audit", checkDescription: "Scans for overlapping slug definitions or near-identical synonyms across entity nodes.", remediationProtocol: "Merge duplicate entries into a single canonical slug and redirect secondary slugs via aliases array." },
  { ruleId: "GOV-003", ruleTitle: "Outdated Profile Metadata Detection", checkDescription: "Checks if entity currentStatus, enterpriseUsage, or officialSources contain links/benchmarks older than 12 months.", remediationProtocol: "Schedule a Standard Refresh within 5 business days to re-verify external source URLs and status." },
  { ruleId: "GOV-004", ruleTitle: "Missing Aliases & Synonyms Check", checkDescription: "Ensures every core entity defines at least 2 common industry abbreviations or aliases for NLP matching.", remediationProtocol: "Inject standardized industry acronyms and colloquial search terms into the aliases array." },
  { ruleId: "GOV-005", ruleTitle: "Incomplete Description & Benefits Audit", checkDescription: "Verifies that every profile defines a clear 2-sentence definition, at least 3 keyBenefits, and 2 limitations.", remediationProtocol: "Route incomplete entities to editorial review for comprehensive documentation enrichment." },
  { ruleId: "GOV-006", ruleTitle: "Weak Semantic Links Verification", checkDescription: "Flags entities that have fewer than 3 bidirectional relationships inside knowledgeRelationshipTriples.", remediationProtocol: "Map additional uses, depends-on, or integrates-with triples connecting the node to existing clusters." },
  { ruleId: "GOV-007", ruleTitle: "Missing JSON-LD Schema Synchronizer", checkDescription: "Verifies that all core entities generate compliant DefinedTerm and KnowledgeGraph schema on their routes.", remediationProtocol: "Regenerate structured JSON-LD scripts to ensure 100% compliance with Google AI Overviews and RAG ingestion." },
  { ruleId: "GOV-008", ruleTitle: "Obsolete Technology Classification Check", checkDescription: "Tracks whether active standards or frameworks have been formally deprecated or replaced.", remediationProtocol: "Update status to Deprecated, assign a replaced-by triple, and link to the modern successor entity." },
  { ruleId: "GOV-009", ruleTitle: "Entity Authority Score Certification", checkDescription: "Calculates the live 10-dimension authority score and enforces the >= 95/100 threshold across all core entities.", remediationProtocol: "If any entity scores below 95/100, trigger immediate expansion of coverageDepth, officialSources, and triples." }
];
