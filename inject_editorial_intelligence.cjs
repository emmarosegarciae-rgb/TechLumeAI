const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(articlesPath, 'utf8');

const editorialData = {
  "enterprise-ai-agents-production": {
    contentClass: "Architecture Guide",
    topicCluster: "Enterprise Multi-Agent Systems",
    governancePanel: {
      contentClass: "Architecture Guide",
      primaryPillar: "Enterprise AI & Autonomous Agents",
      topicCluster: "Multi-Agent Orchestration & Production Deployment",
      targetAudience: "Enterprise Architects, VP of Engineering, Staff AI Engineers",
      opportunityScore: "Critical",
      editorialScore: 98,
      decayStatus: "Fresh",
      futureExpansion: [
        "LangGraph vs LlamaIndex Workflows: 2026 Production State Persistence Benchmark",
        "Deterministic MCP Tool Guardrails for High-Concurrency Banking Agents",
        "Autonomous SOC Remediation Playbook: Multi-Agent Triage without Human Bottlenecks",
        "Semantic Router Optimization for Agentic Cost Reductions"
      ]
    }
  },
  "open-models-infrastructure-shift": {
    contentClass: "Technical Deep Dive",
    topicCluster: "Open Model Hosting & vLLM Serving",
    governancePanel: {
      contentClass: "Technical Deep Dive",
      primaryPillar: "AI Models & Infrastructure",
      topicCluster: "Open-Weights Serving & Inference Economics",
      targetAudience: "Cloud Systems Engineers, FinOps Directors, MLOps Architects",
      opportunityScore: "Critical",
      editorialScore: 98,
      decayStatus: "Fresh",
      futureExpansion: [
        "vLLM PagedAttention Cluster Sizing Guide for 70B Open Models",
        "Speculative Decoding in Production: Llama 3 8B Draft + 70B Target Benchmarks",
        "Air-Gapped Private LLM Deployments for Zero-Egress Healthcare & Defense",
        "INT4 AWQ vs FP8 Quantization: Accuracy vs VRAM Footprint Trade-offs"
      ]
    }
  },
  "cybersecurity-ai-defense-brief": {
    contentClass: "Enterprise Playbook",
    topicCluster: "AI Security & Adversarial Defense",
    governancePanel: {
      contentClass: "Enterprise Playbook",
      primaryPillar: "AI Security & Compliance",
      topicCluster: "LLM Endpoint Defense & Prompt Injection Containment",
      targetAudience: "Chief Information Security Officers (CISOs), AppSec Engineers, SOC Leads",
      opportunityScore: "Critical",
      editorialScore: 99,
      decayStatus: "Fresh",
      futureExpansion: [
        "Building a 4-Layer Semantic Firewall with NeMo Guardrails and Llama Guard",
        "Sandboxing MCP Code Execution: Network Isolation for Autonomous Python Tools",
        "ISO/IEC 42001 & NIST AI RMF Compliance Checklist for Enterprise Generative AI",
        "Detecting and Mitigating Indirect RAG Injection in Automated HR Pipelines"
      ]
    }
  },
  "cloud-cost-architecture-guide": {
    contentClass: "Benchmark Report",
    topicCluster: "AI FinOps & Inference Optimization",
    governancePanel: {
      contentClass: "Benchmark Report",
      primaryPillar: "Cloud Architecture & AI FinOps",
      topicCluster: "Inference Economics & KV Cache Optimization",
      targetAudience: "VP of Infrastructure, Cloud FinOps Practitioners, CTOs",
      opportunityScore: "Critical",
      editorialScore: 97,
      decayStatus: "Fresh",
      futureExpansion: [
        "KV Cache Re-use Benchmarks across Anthropic Prompt Caching and vLLM",
        "Dynamic Model Routing Proxy: Tiering Queries from Haiku 8B up to Claude 3.5",
        "Spot GPU Cluster Auto-Scaling with Checkpoint-and-Resume for Batch RAG Indexing",
        "Calculating Token-to-Outcome Gross Margins in B2B AI SaaS Products"
      ]
    }
  },
  "developer-tools-2026": {
    contentClass: "Tool Review",
    topicCluster: "Agentic IDEs & Autonomous Coding",
    governancePanel: {
      contentClass: "Tool Review",
      primaryPillar: "AI Developer Tools & Workflows",
      topicCluster: "Autonomous Coding Loops & AST Context Engines",
      targetAudience: "Engineering Managers, Staff Software Engineers, Developer Productivity Leads",
      opportunityScore: "Critical",
      editorialScore: 98,
      decayStatus: "Fresh",
      futureExpansion: [
        "Cursor vs Claude Code: Multi-File Architectural Refactoring Benchmark",
        "Automated Test Harnesses for Grading Agent-Generated Code Pull Requests",
        "Configuring Local MCP Terminal Sandboxes inside Agentic IDEs",
        "Measuring Engineering Velocity in Agent-First Organizations: DORA 2026 Shift"
      ]
    }
  },
  "startup-ai-monetization": {
    contentClass: "Flagship Guide",
    topicCluster: "AI Commercial Strategy & Pricing",
    governancePanel: {
      contentClass: "Flagship Guide",
      primaryPillar: "AI Business & Enterprise Strategy",
      topicCluster: "Outcome-Based Pricing & Vertical Defensibility Moats",
      targetAudience: "AI Founders, Venture Capitalists, SaaS CFOs, Chief Product Officers",
      opportunityScore: "Critical",
      editorialScore: 98,
      decayStatus: "Fresh",
      futureExpansion: [
        "Structuring Outcome-Based Metering Tiers without GPU Compute Drain",
        "From Wrapper to System-of-Action: Building Enterprise Workflow Defensibility",
        "Negotiating Enterprise AI Vendor Spend Caps & Data Sovereignty Clauses",
        "The Data Flywheel Playbook: Fine-Tuning Domain Models on Customer Interaction Traces"
      ]
    }
  },
  "robotics-foundation-models": {
    contentClass: "Technical Deep Dive",
    topicCluster: "Vision-Language-Action (VLA) Robotics",
    governancePanel: {
      contentClass: "Technical Deep Dive",
      primaryPillar: "Embodied AI & Robotics Infrastructure",
      topicCluster: "VLA Foundation Models & Real-Time Hybrid Motor Control",
      targetAudience: "Robotics Chief Architects, Control Systems Engineers, Edge Hardware Leads",
      opportunityScore: "High",
      editorialScore: 97,
      decayStatus: "Fresh",
      futureExpansion: [
        "Sim-to-Real Domain Randomization in NVIDIA Isaac for VLA Manipulation Reflexes",
        "Hybrid Hierarchical Control: 10Hz Cloud Transformer + 1kHz DSP Classical Reflexes",
        "Edge NPU Thermal and Memory Bandwidth Sizing for Autonomous Humanoid Robots",
        "Hardware Interlocks & FPGA Kinematic Safety Bounds in Shared Human Workspaces"
      ]
    }
  },
  "data-science-evaluation-stack": {
    contentClass: "Implementation Tutorial",
    topicCluster: "LLM Evaluation & Quality Assurance",
    governancePanel: {
      contentClass: "Implementation Tutorial",
      primaryPillar: "MLOps & Quality Engineering",
      topicCluster: "Automated RAG Evaluation & LLM-as-a-Judge Calibration",
      targetAudience: "Lead Data Scientists, MLOps Engineers, Quality Assurance Leads",
      opportunityScore: "Critical",
      editorialScore: 99,
      decayStatus: "Fresh",
      futureExpansion: [
        "Automating Ragas Faithfulness & Context Precision Gates inside GitHub Actions CI/CD",
        "Calibrating LLM-as-a-Judge Prompts with Pairwise Comparison & Chain-of-Thought",
        "Building Golden Evaluation Datasets from Production Failure Traces and User Escalations",
        "Diagnosing Retrieval Noise vs Synthesis Hallucination in Complex Enterprise RAG"
      ]
    }
  }
};

let updatedCount = 0;

for (const slug in editorialData) {
  const data = editorialData[slug];
  const searchStr = `slug: "${slug}",`;
  
  if (!src.includes(searchStr)) continue;

  const articleStart = src.indexOf(searchStr);
  
  // 1. Inject contentClass and topicCluster into Article schema fields
  const piIdx = src.indexOf('primaryIntent:', articleStart);
  if (piIdx !== -1 && !src.slice(articleStart, piIdx).includes('contentClass:')) {
    const piEnd = src.indexOf('\n', piIdx);
    src = src.slice(0, piEnd + 1) + `    contentClass: "${data.contentClass}",\n    topicCluster: "${data.topicCluster}",\n` + src.slice(piEnd + 1);
  }

  // 2. Inject editorialIntelligenceScore into qaMetrics
  const qaIdx = src.indexOf('qaMetrics: {', articleStart);
  if (qaIdx !== -1) {
    const eqIdx = src.indexOf('enterpriseQualityScore:', qaIdx);
    if (eqIdx !== -1 && !src.slice(qaIdx, qaIdx + 200).includes('editorialIntelligenceScore:')) {
      src = src.slice(0, eqIdx) + `editorialIntelligenceScore: ${data.governancePanel.editorialScore},\n    ` + src.slice(eqIdx);
    }
  }

  // 3. Inject editorial-governance-panel right after `section-summary` at top of article or `entity-panel`
  const cpIdx = src.indexOf('type: "cognitive-pathway"', articleStart);
  if (cpIdx !== -1) {
    const blockString = `
      {
        type: "editorial-governance-panel",
        contentClass: ${JSON.stringify(data.governancePanel.contentClass)},
        primaryPillar: ${JSON.stringify(data.governancePanel.primaryPillar)},
        topicCluster: ${JSON.stringify(data.governancePanel.topicCluster)},
        targetAudience: ${JSON.stringify(data.governancePanel.targetAudience)},
        opportunityScore: ${JSON.stringify(data.governancePanel.opportunityScore)},
        editorialScore: ${data.governancePanel.editorialScore},
        decayStatus: ${JSON.stringify(data.governancePanel.decayStatus)},
        futureExpansion: ${JSON.stringify(data.governancePanel.futureExpansion, null, 8).replace(/\n/g, '\n        ')}
      },`;
    src = src.slice(0, cpIdx) + blockString.trimStart() + src.slice(cpIdx);
  }

  updatedCount++;
}

fs.writeFileSync(articlesPath, src, 'utf8');
console.log(`Successfully injected Phase 7 Editorial Intelligence blocks and classifications into ${updatedCount}/8 flagship articles.`);
