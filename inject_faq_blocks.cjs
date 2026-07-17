const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'lib/data/articles.ts');
let src = fs.readFileSync(articlesPath, 'utf8');

const faqData = {
  "enterprise-ai-agents-production": {
    title: "Enterprise AI Agents — Questions Answered",
    items: [
      {
        question: "What is the difference between an AI agent and a chatbot?",
        answer: "A chatbot responds reactively to a single prompt within a fixed context window. An AI agent is a goal-oriented system that autonomously plans a sequence of actions, uses external tools (APIs, databases, code interpreters), and iterates on its own output until a business objective is achieved — without human micromanagement at each step.",
        intent: "What is..."
      },
      {
        question: "How do enterprise AI agents handle security and access control?",
        answer: "Enterprise AI agents must operate within zero-trust security architectures. This includes OAuth 2.0 scoped API credentials, principle-of-least-privilege tool access, immutable audit logs of every action taken, human-in-the-loop approval gates for high-risk operations, and sandboxed execution environments to prevent lateral movement across corporate systems.",
        intent: "How does..."
      },
      {
        question: "Which orchestration frameworks are used to build enterprise AI agents?",
        answer: "The most widely adopted frameworks in production enterprises are LangGraph (for stateful graph-based workflows), CrewAI (for multi-agent team orchestration), AutoGen (for conversational multi-agent systems), and Semantic Kernel (for Microsoft ecosystem integrations). The choice depends on whether you need sequential, parallel, or hierarchical agent topologies.",
        intent: "Best tools..."
      },
      {
        question: "What is the primary failure mode of AI agents in production?",
        answer: "The most critical failure mode is action hallucination — when an agent confidently executes a sequence of incorrect actions (e.g., deleting the wrong records or calling the wrong API endpoint) because it misinterpreted ambiguous instructions. This is mitigated through strict tool schema validation, dry-run sandboxing, and structured human approval workflows for irreversible actions.",
        intent: "Troubleshooting..."
      },
      {
        question: "What is a multi-agent system and when should you use one?",
        answer: "A multi-agent system (MAS) is an architecture where multiple specialized AI agents collaborate on a shared task, each handling a distinct sub-domain. Use MAS when a task exceeds a single agent's context window, requires parallel processing of independent sub-tasks, or benefits from adversarial review between agents.",
        intent: "When should..."
      },
      {
        question: "How should enterprises measure the ROI of AI agent deployments?",
        answer: "ROI measurement should track: time-to-resolution for automated workflows vs. manual baselines, token cost per successful task completion, error rate and human override frequency, agent utilization rate during peak hours, and employee productivity hours reclaimed. Frame these as unit economics tied to specific business processes, not generic AI adoption metrics.",
        intent: "Enterprise adoption..."
      }
    ]
  },
  "open-models-infrastructure-shift": {
    title: "Open Model Infrastructure — Questions Answered",
    items: [
      {
        question: "What are open-weight models and how do they differ from open-source models?",
        answer: "Open-weight models (like Llama 3, Mistral, and Gemma) release the trained model weights publicly, allowing organizations to download and self-host them. Truly open-source models also release training code, data, and infrastructure scripts. The distinction matters legally and operationally — open-weight models can be fine-tuned and deployed commercially but may carry licensing restrictions on commercial use at scale.",
        intent: "What is..."
      },
      {
        question: "How much cheaper is self-hosting an open model vs. using a proprietary API?",
        answer: "At scale (>100M tokens/day), self-hosting optimized open models on dedicated GPU infrastructure typically costs 60–80% less than equivalent proprietary API pricing. A single A100 80GB GPU can serve a quantized 70B parameter model at roughly 5,000 tokens/second — delivering costs around $0.0002–0.0008 per 1K tokens, compared to $0.003–$0.015/1K for comparable proprietary frontier APIs.",
        intent: "Comparison..."
      },
      {
        question: "What infrastructure stack do enterprises use to deploy open-weight models?",
        answer: "The dominant production stack is: vLLM or Text Generation Inference (TGI) as the inference engine, Kubernetes for horizontal GPU pod autoscaling, NVIDIA Triton Inference Server for batching optimization, and a model gateway (like LiteLLM) for routing, caching, and fallback logic. Infrastructure is typically provisioned on AWS p4d, GCP A3, or Azure NDsv5 GPU instances.",
        intent: "Architecture..."
      },
      {
        question: "Which open models are best for enterprise use in 2026?",
        answer: "For general reasoning: Meta Llama 3.1 405B. For code generation: DeepSeek-Coder-V2 and Qwen 2.5-Coder 32B. For multilingual tasks: Qwen 2.5 72B. For edge and on-device deployment: Gemma 2 9B and Llama 3.2 3B. Model selection should always be validated against your specific task benchmarks, not generic leaderboard rankings.",
        intent: "Best tools..."
      },
      {
        question: "What are the biggest risks of building on open-weight models?",
        answer: "The primary risks are: compliance burden (you become responsible for safety filtering that proprietary APIs handle), MLOps overhead (model versioning, security patching, and infrastructure maintenance require a dedicated team), and capability gaps (some frontier capabilities like complex reasoning still require proprietary models as a fallback tier).",
        intent: "Troubleshooting..."
      },
      {
        question: "How does quantization affect open model quality?",
        answer: "Quantization reduces model weight precision (from FP16 to INT8 or INT4) to reduce GPU memory requirements and increase throughput. INT8 quantization typically incurs less than 1% quality degradation. INT4 quantization can reduce memory by 4x but may cause 3–7% degradation on complex reasoning tasks. Always re-benchmark quantized models against your production task distribution before deploying.",
        intent: "Architecture..."
      }
    ]
  },
  "cybersecurity-ai-defense-brief": {
    title: "AI Cybersecurity Defense — Questions Answered",
    items: [
      {
        question: "How does AI improve threat detection over traditional signature-based security?",
        answer: "Traditional signature-based systems can only detect known attack patterns stored in a database. AI-powered detection uses behavioral anomaly models that establish a dynamic baseline of normal network and user activity, then flag statistical deviations in real-time — enabling detection of novel zero-day attacks, insider threats, and living-off-the-land techniques that leave no known signature.",
        intent: "How does..."
      },
      {
        question: "What is an AI-powered Security Operations Center (SOC)?",
        answer: "An AI-powered SOC is a security operations center that augments human analysts with AI systems for automated alert triage, threat hunting, and incident response orchestration. LLMs are used to summarize threat intelligence in plain language, correlate disparate signals across SIEM, EDR, and NDR tools, and draft incident response playbooks — reducing analyst mean time to response (MTTR) by up to 70%.",
        intent: "What is..."
      },
      {
        question: "What is prompt injection and why is it a critical AI security threat?",
        answer: "Prompt injection is an attack where malicious instructions are embedded within data processed by an AI agent (e.g., in an email or document). When the agent reads the data, it unknowingly executes the attacker's commands — potentially exfiltrating data, bypassing safety guardrails, or taking unauthorized actions. It is the primary security threat unique to agentic AI systems with tool access.",
        intent: "What is..."
      },
      {
        question: "How should enterprises defend against adversarial AI attacks?",
        answer: "A layered defense strategy includes: input sanitization and prompt injection filters at every agent tool boundary, output validation schemas that reject malformed responses, adversarial red-teaming of AI systems before deployment, immutable audit logs of all agent actions, and behavioral anomaly detection on AI outputs to flag drift from expected patterns.",
        intent: "Architecture..."
      },
      {
        question: "Can attackers use AI to launch more sophisticated cyberattacks?",
        answer: "Yes. Generative AI dramatically lowers the skill threshold for cyberattacks. Attackers use LLMs to automate phishing email personalization at scale, generate polymorphic malware that evades antivirus signatures, rapidly exploit newly disclosed CVEs, and conduct highly convincing social engineering through deepfake voice and video. Defensive AI adoption is therefore an operational necessity, not an optional upgrade.",
        intent: "Why is..."
      },
      {
        question: "What compliance frameworks govern AI use in cybersecurity?",
        answer: "In the US: NIST AI Risk Management Framework (AI RMF) and NIST Cybersecurity Framework 2.0 provide foundational guidance. In the EU: the AI Act classifies high-risk AI security applications with strict transparency requirements. Sector-specific rules apply in finance (DORA) and healthcare (HIPAA AI addenda). Organizations must document model training data, decision logic, and output auditability to meet these requirements.",
        intent: "Enterprise adoption..."
      }
    ]
  },
  "cloud-cost-architecture-guide": {
    title: "AI Cloud Cost Optimization — Questions Answered",
    items: [
      {
        question: "What is AI FinOps and how does it differ from traditional FinOps?",
        answer: "AI FinOps extends traditional cloud financial operations to account for the unique cost drivers of LLM inference: token consumption, GPU hour allocation, KV cache memory, and model routing decisions. Unlike traditional FinOps which optimizes compute and storage, AI FinOps requires tracking cost-per-query, cost-per-task-completion, and model quality-versus-cost tradeoffs as primary unit economics.",
        intent: "What is..."
      },
      {
        question: "What is KV cache and why does it matter for LLM inference costs?",
        answer: "The Key-Value (KV) cache stores intermediate transformer attention computations for previously processed tokens, allowing the model to avoid recomputing them on each generation step. Proper KV cache management — prefix caching, shared cache for common system prompts — can reduce inference compute by 30–60% for applications with long, repetitive system prompts, directly translating to lower per-token costs.",
        intent: "How does..."
      },
      {
        question: "How does intelligent model routing reduce AI infrastructure costs?",
        answer: "Intelligent model routing dynamically assigns each query to the most cost-efficient model capable of handling it. Simple, structured queries route to smaller, cheaper models. Complex, multi-step reasoning routes to frontier models. A properly configured router can reduce token spend by 40–75% with less than 3% quality degradation on user satisfaction metrics.",
        intent: "How does..."
      },
      {
        question: "What is model quantization and when should enterprises use it?",
        answer: "Model quantization compresses model weight precision from FP16 to INT8 or INT4, reducing GPU memory footprint by 2–4x and increasing throughput. Use INT8 quantization in production as a default with negligible quality loss, and INT4 for cost-sensitive, non-critical workloads. Never use INT4 for critical customer-facing reasoning tasks without extensive benchmarking against your quality standards.",
        intent: "When should..."
      },
      {
        question: "Spot vs. on-demand GPU instances: which is right for AI inference?",
        answer: "Spot and preemptible GPU instances cost 60–90% less than on-demand but can be interrupted with 2-minute notice. They are appropriate for batch inference workloads (overnight report generation, bulk classification) but inappropriate for real-time, user-facing inference. A hybrid strategy — on-demand for interactive workloads, spot for batch — is the enterprise standard.",
        intent: "Which is better..."
      },
      {
        question: "How do you calculate and track cost per successful AI task?",
        answer: "Cost per successful task equals (prompt tokens multiplied by input price, plus completion tokens multiplied by output price) divided by task success rate. Instrument every LLM call with token counts, model ID, latency, and a success signal. Aggregate these in a data warehouse and build dashboards segmented by use case, model, and user cohort to identify the highest-cost, lowest-quality workloads.",
        intent: "Deployment..."
      }
    ]
  },
  "developer-tools-2026": {
    title: "AI Developer Tools in 2026 — Questions Answered",
    items: [
      {
        question: "What makes an agentic IDE different from a standard AI code assistant?",
        answer: "A standard AI code assistant provides inline autocomplete suggestions for the current file. An agentic IDE can autonomously read across an entire codebase, understand architectural dependencies, execute terminal commands, run tests, interpret failure output, and iteratively refactor until all tests pass — without human intervention at each step. The human role shifts to specification writing and architectural review.",
        intent: "What is..."
      },
      {
        question: "What is Model Context Protocol (MCP) and why do developer tools use it?",
        answer: "Model Context Protocol (MCP) is an open standard introduced by Anthropic that standardizes how AI IDEs retrieve real-time context from external systems such as databases, documentation, issue trackers, and CI pipelines. By providing a universal adapter interface, MCP eliminates the need for each tool vendor to build bespoke integrations — any MCP-compatible server can expose its data to any MCP-compatible AI client.",
        intent: "What is..."
      },
      {
        question: "How much more productive are developers using AI coding tools?",
        answer: "GitHub's research found 55% faster task completion for well-scoped coding tasks. McKinsey found AI-assisted developers wrote code 2x faster on greenfield features. Gains are uneven — experienced developers see the highest uplift on boilerplate and test writing; complex system design and debugging see more modest 15–30% improvements. Quality review time must be factored into net productivity calculations.",
        intent: "Why is..."
      },
      {
        question: "What are the security risks of AI developer tools with codebase access?",
        answer: "Key risks include: data exfiltration (AI tools sending source code to third-party APIs may violate IP and data residency requirements), prompt injection via code comments (malicious comments in open-source dependencies can influence AI suggestions), and insecure code generation (AI models statistically generate vulnerable patterns if not explicitly prompted for secure practices). Use on-premise or SOC 2-certified tools for proprietary codebases.",
        intent: "Architecture..."
      },
      {
        question: "What AI tools are best for enterprise software development in 2026?",
        answer: "Enterprise-grade options include Cursor (best-in-class codebase understanding with MCP support), GitHub Copilot Enterprise (Microsoft ecosystem, fine-tuning on private repos), JetBrains AI Assistant (Java and .NET teams), and Amazon Q Developer (AWS-centric workflows). For on-premise security requirements, Codeium Enterprise and Sourcegraph Cody support self-hosted deployment with local model inference.",
        intent: "Best tools..."
      },
      {
        question: "How should engineering teams structure their AI-assisted development workflow?",
        answer: "Recommended workflow: AI generates initial implementation from a detailed specification. Human engineer reviews architecture decisions and edge cases. AI writes comprehensive unit and integration tests. Human reviews test coverage and business logic correctness. AI performs automated refactoring for performance or style compliance. The human role shifts from syntax writing to specification clarity and architectural judgment.",
        intent: "Step-by-step implementation..."
      }
    ]
  },
  "startup-ai-monetization": {
    title: "AI Startup Monetization — Questions Answered",
    items: [
      {
        question: "Why are AI API wrappers poor business models?",
        answer: "API wrapper businesses have zero switching costs and zero competitive moat. When the underlying model provider cuts prices (which happens consistently), it compresses or eliminates margins. When a competitor emerges using the same API, there is no differentiation. Sustainable AI businesses require proprietary data, deep workflow integrations, network effects, or vertical domain expertise that cannot be replicated by simply calling the same API.",
        intent: "Why is..."
      },
      {
        question: "What is outcome-based pricing for AI products?",
        answer: "Outcome-based pricing charges customers for successful business results rather than software seats or API calls. Examples include charging per qualified lead generated by an AI SDR, per contract reviewed and approved by an AI legal assistant, or per invoice processed error-free by an AI accounting agent. This model aligns vendor incentives directly with customer ROI and makes procurement approval easier.",
        intent: "What is..."
      },
      {
        question: "What AI startup verticals have the strongest monetization potential?",
        answer: "High-value verticals with proven AI monetization: legal (contract review, due diligence automation), healthcare (clinical documentation, coding, prior authorization), financial services (credit underwriting, fraud detection, regulatory reporting), and construction and engineering (materials estimation, permit automation). These sectors share high labor costs, low digitization, and strong regulatory barriers to entry that protect margins.",
        intent: "Enterprise adoption..."
      },
      {
        question: "How should an AI startup defend against foundational model updates that eliminate their core feature?",
        answer: "The primary defense is proprietary data accumulation and workflow depth. If your product's core value comes from processing customer-specific data (communication history, proprietary documents, historical decisions), you build a data moat that improves with usage and cannot be replicated by a better base model. Deeply embedded workflow integrations also create switching costs independent of model quality.",
        intent: "Troubleshooting..."
      },
      {
        question: "What is the typical AI SaaS pricing structure for enterprise customers?",
        answer: "Enterprise AI SaaS typically combines: a platform fee of $5,000–$50,000 per month for security, compliance, and integration infrastructure; a consumption component with usage-based pricing tied to AI task volume; and an optional success fee for measurable outcomes. This structure provides revenue predictability while sharing upside from customer success.",
        intent: "Enterprise adoption..."
      },
      {
        question: "When should an AI startup consider raising venture capital vs. bootstrapping?",
        answer: "Raise venture capital when your market requires category creation at speed, your go-to-market requires enterprise sales teams, or you need compute budget for proprietary model training. Bootstrap when you have immediate revenue from a narrow niche, your customer acquisition cost is low, or your competitive advantage is speed and iteration rather than scale.",
        intent: "When should..."
      }
    ]
  },
  "robotics-foundation-models": {
    title: "Robotics Foundation Models — Questions Answered",
    items: [
      {
        question: "What is a Vision-Language-Action (VLA) model?",
        answer: "A Vision-Language-Action (VLA) model is a multimodal neural network that simultaneously processes visual observations (camera inputs), natural language instructions, and robotic proprioceptive state (joint positions, forces) to directly output low-level motor control actions. VLA models generalize tasks across novel environments by grounding language semantics in physical action sequences learned from diverse training data.",
        intent: "What is..."
      },
      {
        question: "How do robotics foundation models learn physical tasks?",
        answer: "These models are trained on large-scale datasets of robot teleoperation demonstrations (recorded human-controlled robot trajectories), simulation-generated data (physics engine rollouts), and internet video of human manipulation tasks. Transfer learning from vision-language pretraining provides broad world knowledge; fine-tuning on robot-specific data teaches physical grounding and enables zero-shot generalization.",
        intent: "How does..."
      },
      {
        question: "What is the biggest technical challenge for deploying robots with foundation models?",
        answer: "The fundamental challenge is real-time latency. Foundation models require hundreds of milliseconds to process a visual frame and generate an action — far too slow for dynamic manipulation requiring sub-10ms control loops. Current solutions use model distillation, action chunking (predicting sequences of future actions at once), and hybrid controllers (LLM for high-level planning, classical controller for low-level execution).",
        intent: "Troubleshooting..."
      },
      {
        question: "Which industries are adopting robotics foundation models first?",
        answer: "First-mover industries are those with high labor costs, structured environments, and well-defined manipulation tasks: logistics and warehouse fulfillment, automotive manufacturing, semiconductor fabrication (precision material handling), and agricultural harvesting (soft-fruit picking in unstructured settings). Healthcare is emerging for surgical assistance and pharmacy automation with strict safety certification requirements.",
        intent: "Enterprise adoption..."
      },
      {
        question: "How do foundation model robots handle novel, unseen objects?",
        answer: "Foundation model robots leverage the broad visual pretraining of their vision encoders (often CLIP-based) to generalize grasp strategies to objects never seen during robot training. Given a natural language description of a novel object, the VLA model grounds the language description to visual features and synthesizes a plausible grasp trajectory using learned physical priors, without requiring object-specific training data.",
        intent: "How does..."
      },
      {
        question: "What is the difference between simulation training and real-world training for robots?",
        answer: "Simulation training allows unlimited safe trial-and-error at low cost with easy variation of object properties and physics parameters. Real-world training is expensive and slow but captures real-world dynamics that no simulator perfectly replicates. The 'sim-to-real gap' — quality degradation when policies transfer from simulation to physical hardware — is the central open research challenge in the field.",
        intent: "Comparison..."
      }
    ]
  },
  "data-science-evaluation-stack": {
    title: "AI Evaluation Stack — Questions Answered",
    items: [
      {
        question: "Why is evaluating LLM applications harder than evaluating traditional ML models?",
        answer: "Traditional ML models have deterministic, numerical outputs that can be automatically compared to ground truth labels. LLM outputs are open-ended natural language, meaning correctness is often subjective, context-dependent, and multi-dimensional (factual accuracy, tone, completeness, safety). Robust evaluation requires multi-criteria rubrics, human raters, and LLM-as-a-judge pipelines running in parallel.",
        intent: "Why is..."
      },
      {
        question: "What is LLM-as-a-judge and how reliable is it?",
        answer: "LLM-as-a-judge uses a separate, usually stronger LLM to evaluate the quality of outputs from a target model, scoring against criteria like factual accuracy, coherence, and helpfulness. Studies show GPT-4-class judges achieve 80–90% agreement with expert human raters on most dimensions. Key limitations: judges favor verbose outputs, exhibit self-serving bias, and struggle with highly technical domain correctness.",
        intent: "What is..."
      },
      {
        question: "What should be included in a golden evaluation dataset?",
        answer: "A golden evaluation dataset must include: representative samples of all query types your application handles, edge cases and adversarial inputs that caused previous failures, hardcoded correct answers with explicit grading rubrics, regression test cases from every production bug, and periodic refreshes for distribution shift. Aim for a minimum of 500 examples with human-verified answers for statistical reliability.",
        intent: "Architecture..."
      },
      {
        question: "How do you monitor LLM applications for quality degradation in production?",
        answer: "Production monitoring requires: sampling 1–5% of live production queries for LLM-as-a-judge scoring, tracking latency percentiles and error rates per model version, user satisfaction proxies (thumbs up or down, retry rate, session abandonment), automated regression testing on every deployment against golden datasets, and drift detection on input query distributions to flag when user behavior changes.",
        intent: "Deployment..."
      },
      {
        question: "What is the difference between offline and online evaluation for LLM systems?",
        answer: "Offline evaluation tests model performance against a static dataset before deployment — fast, cheap, and reproducible, but it does not capture real user behavior. Online evaluation measures quality during live production traffic through A/B testing or user feedback — it captures ground truth user satisfaction but requires significant traffic volume for statistical significance. Both are required for rigorous AI product development.",
        intent: "Comparison..."
      },
      {
        question: "How should teams structure their AI evaluation pipeline for continuous deployment?",
        answer: "A mature AI CD pipeline includes: unit tests for prompt templates and tool schemas (fast, in-process), integration tests calling live model APIs against golden datasets (per pull request), regression benchmarks comparing new vs. current model on 500-plus examples (run on merge to main), shadow deployment processing real traffic without serving users, and canary release to 5% of traffic with automated rollback if quality metrics degrade.",
        intent: "Step-by-step implementation..."
      }
    ]
  }
};

let updatedCount = 0;

for (const slug in faqData) {
  const data = faqData[slug];
  const searchStr = `slug: "${slug}",`;
  
  if (!src.includes(searchStr)) {
    console.log(`WARNING: Could not find slug ${slug}`);
    continue;
  }

  const articleStart = src.indexOf(searchStr);
  const contentIndex = src.indexOf('content: [', articleStart);
  
  if (contentIndex === -1) {
    console.log(`WARNING: Could not find content array for ${slug}`);
    continue;
  }

  // Find the closing of this article's object — next top-level slug or end of array
  const nextSlugIndex = src.indexOf('\n  {\n    slug:', articleStart + searchStr.length);
  const articleEndIndex = nextSlugIndex !== -1 ? nextSlugIndex : src.length;
  
  // Find "type: \"references\"" within this article's content section
  const referencesIndex = src.indexOf('type: "references"', contentIndex);
  
  if (referencesIndex === -1 || referencesIndex > articleEndIndex) {
    console.log(`WARNING: Could not find references block for ${slug}`);
    continue;
  }

  // Check if FAQ already injected in this article's content section
  const articleContent = src.substring(contentIndex, articleEndIndex);
  if (articleContent.includes('type: "faq"')) {
    console.log(`SKIP: Article ${slug} already has a FAQ block.`);
    continue;
  }

  // Find the closing }\n      } of the references block within this article
  // Strategy: find the ]\n      }\n    ] after the referencesIndex
  const referencesCloseSearch = '\n      }\n    ]';
  const referencesCloseIdx = src.indexOf(referencesCloseSearch, referencesIndex);
  
  if (referencesCloseIdx === -1 || referencesCloseIdx > articleEndIndex) {
    console.log(`WARNING: Could not find references closing for ${slug}`);
    continue;
  }

  // Insert FAQ block right after the references closing bracket
  const insertionPoint = referencesCloseIdx + referencesCloseSearch.length;

  const faqBlock = `,
      {
        type: "faq",
        title: ${JSON.stringify(data.title)},
        items: [
          ${data.items.map(item => `{
            question: ${JSON.stringify(item.question)},
            answer: ${JSON.stringify(item.answer)},
            intent: ${JSON.stringify(item.intent)}
          }`).join(',\n          ')}
        ]
      }`;

  src = src.slice(0, insertionPoint) + faqBlock + src.slice(insertionPoint);
  updatedCount++;
  console.log(`SUCCESS: Injected FAQ block into ${slug}`);
}

fs.writeFileSync(articlesPath, src, 'utf8');
console.log(`\nDone: Successfully injected FAQ blocks into ${updatedCount}/8 articles.`);
