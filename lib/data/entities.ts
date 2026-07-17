import type { EntityNode } from "@/lib/types";

export const entities: EntityNode[] = [
  // Companies
  {
    id: "anthropic",
    name: "Anthropic",
    type: "Company",
    description: "An AI safety and research company that creates the Claude family of LLMs.",
    relationships: []
  },
  {
    id: "openai",
    name: "OpenAI",
    type: "Company",
    description: "An AI research and deployment company that develops the GPT family of models.",
    relationships: []
  },
  {
    id: "meta",
    name: "Meta",
    type: "Company",
    description: "Technology conglomerate responsible for creating the Llama family of open-weight models.",
    relationships: []
  },
  
  // Protocols & Frameworks
  {
    id: "model-context-protocol",
    name: "Model Context Protocol (MCP)",
    type: "Protocol",
    description: "An open standard introduced by Anthropic that unifies how AI assistants connect to local tools and enterprise APIs.",
    relationships: [
      { targetId: "anthropic", relationshipType: "Created By" },
      { targetId: "json-rpc-transport", relationshipType: "Built On" }
    ]
  },
  {
    id: "json-rpc-transport",
    name: "JSON-RPC Transport Layer",
    type: "Protocol",
    description: "A stateless, lightweight remote procedure call protocol encoded in JSON.",
    relationships: []
  },
  {
    id: "langgraph",
    name: "LangGraph",
    type: "Framework",
    description: "A framework for building stateful, multi-actor applications with LLMs, used to orchestrate complex agentic workflows.",
    relationships: [
      { targetId: "multi-agent-system", relationshipType: "Implements" },
      { targetId: "ai-agents", relationshipType: "Supports" }
    ]
  },
  {
    id: "crewai",
    name: "CrewAI",
    type: "Framework",
    description: "A framework for orchestrating role-playing, autonomous AI agents.",
    relationships: [
      { targetId: "langgraph", relationshipType: "Competes With" },
      { targetId: "multi-agent-system", relationshipType: "Implements" }
    ]
  },

  // Architectures & Concepts
  {
    id: "retrieval-augmented-generation",
    name: "Retrieval-Augmented Generation (RAG)",
    type: "Architecture",
    description: "An architectural framework that enhances LLMs by dynamically querying external knowledge bases.",
    relationships: [
      { targetId: "vector-databases", relationshipType: "Depends On" }
    ]
  },
  {
    id: "vector-databases",
    name: "Vector Databases",
    type: "Technology",
    description: "Databases specialized in storing and querying high-dimensional vectors (embeddings) for similarity search.",
    relationships: [
      { targetId: "retrieval-augmented-generation", relationshipType: "Supports" }
    ]
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    type: "Concept",
    description: "Autonomous software programs driven by LLMs capable of planning, using tools, and executing workflows.",
    relationships: [
      { targetId: "prompt-engineering", relationshipType: "Depends On" },
      { targetId: "model-context-protocol", relationshipType: "Uses" }
    ]
  },
  {
    id: "multi-agent-system",
    name: "Multi-Agent System (MAS)",
    type: "Architecture",
    description: "An orchestrated cluster of specialized AI agents working collaboratively across stateful execution graphs.",
    relationships: [
      { targetId: "ai-agents", relationshipType: "Built On" },
      { targetId: "zero-trust-ai", relationshipType: "Requires" }
    ]
  },
  {
    id: "zero-trust-ai",
    name: "Zero-Trust AI Security",
    type: "Concept",
    description: "A security paradigm that assumes no input prompt or agent action is trusted by default.",
    relationships: [
      { targetId: "prompt-injection", relationshipType: "Defends Against" }
    ]
  },
  {
    id: "prompt-injection",
    name: "Prompt Injection Attack",
    type: "Concept",
    description: "An adversarial exploit where malicious instructions override an AI model's guardrails.",
    relationships: []
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    type: "Concept",
    description: "Systematic prompt architecture, deterministic prompt chaining, and evaluation suites.",
    relationships: []
  },
  {
    id: "ai-finops",
    name: "AI FinOps & Cloud Economics",
    type: "Concept",
    description: "The operational framework dedicated to managing and optimizing the cost of enterprise AI workloads.",
    relationships: []
  },
  {
    id: "vision-language-action",
    name: "Vision-Language-Action (VLA)",
    type: "Architecture",
    description: "Multi-modal foundation models that process visual perception and natural language to output physical robot actions.",
    relationships: []
  },
  
  // Models
  {
    id: "llama3",
    name: "Llama 3",
    type: "Model",
    description: "An open-weight large language model developed by Meta.",
    relationships: [
      { targetId: "meta", relationshipType: "Created By" },
      { targetId: "quantization-int4", relationshipType: "Compatible With" }
    ]
  },
  {
    id: "claude-3-5",
    name: "Claude 3.5 Sonnet",
    type: "Model",
    description: "A frontier language model created by Anthropic.",
    relationships: [
      { targetId: "anthropic", relationshipType: "Created By" }
    ]
  },
  
  // Techniques
  {
    id: "quantization-int4",
    name: "Model Quantization (INT4)",
    type: "Technology",
    description: "A mathematical model compression technique that converts FP16/FP32 weights into lower-precision integers.",
    relationships: [
      { targetId: "fine-tuning-qlora", relationshipType: "Supports" }
    ]
  },
  {
    id: "fine-tuning-qlora",
    name: "QLoRA Parameter-Efficient Fine-Tuning",
    type: "Technology",
    description: "Quantized Low-Rank Adaptation enabling efficient fine-tuning on consumer hardware.",
    relationships: [
      { targetId: "quantization-int4", relationshipType: "Uses" }
    ]
  }
];

export function getEntityById(id: string): EntityNode | undefined {
  return entities.find((e) => e.id === id);
}

export function getRelatedEntities(id: string): EntityNode[] {
  const entity = getEntityById(id);
  if (!entity) return [];
  
  return entity.relationships
    .map(r => getEntityById(r.targetId))
    .filter((e): e is EntityNode => e !== undefined);
}

export function getAllEntities(): EntityNode[] {
  return entities;
}
