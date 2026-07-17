export interface GeoPrinciple {
  id: string;
  name: string;
  formula: string;
  philosophy: string;
  executionMandate: string;
}

export const geoCorePrinciples: GeoPrinciple[] = [
  {
    id: "GEO-01",
    name: "The Human-First Retrieval Principle",
    formula: "HUMAN CLARITY + TECHNICAL ACCURACY + STRUCTURED KNOWLEDGE + AUTHORITATIVE EVIDENCE + CLEAR ENTITY RELATIONSHIPS + RETRIEVAL ACCESSIBILITY",
    philosophy: "We do not write for artificial 'AI optimization' or keyword stuffing. We write for human engineers and systems architects. Content that is structurally pristine, empirically verified, and crystal clear for a human expert naturally becomes top-ranked ground truth for AI vector retrievers.",
    executionMandate: "Every article must pass our Human-First Validation: 'Would a technical expert consider this accurate and self-contained even if AI search engines did not exist?' If no, do not publish."
  },
  {
    id: "GEO-02",
    name: "The Answer-First Hierarchy (`6-Step Sequence`)",
    formula: "QUESTION -> DIRECT ANSWER -> EXPLANATION -> EVIDENCE -> CONTEXT -> LIMITATIONS -> SOURCE",
    philosophy: "The most important definition or empirical verdict must never be buried inside vague introductory paragraphs. AI retrievers (`Perplexity, ChatGPT Search, Claude`) extract the top 150-300 tokens immediately following a heading.",
    executionMandate: "For every H1 and H2 heading posing an engineering question, place a bolded 2-to-3 sentence direct definition or verdict box immediately below the heading before expanding into background theory."
  }
];

export const aiRetrievalModelSequence = [
  { stage: "1. PRIMARY QUESTION", description: "The exact natural language query or technical problem (`e.g., What is Retrieval-Augmented Generation vs Fine-Tuning?`)." },
  { stage: "2. DIRECT ANSWER (`150-250 words max`)", description: "Concise, zero-fluff definition box suitable for direct extraction into an AI overview snippet." },
  { stage: "3. EXPLANATION OF MECHANICS", description: "Deep architectural walkthrough explaining how vector embeddings, semantic search, and LLM synthesis interact." },
  { stage: "4. EMPIRICAL EVIDENCE & BENCHMARKS", description: "Quantitative latency (`ms`), memory footprint (`VRAM`), and accuracy gain data tables." },
  { stage: "5. TECHNICAL CONTEXT & CODE", description: "Runnable TypeScript/Python code blocks demonstrating live implementation with `requirements.txt`." },
  { stage: "6. LIMITATIONS & FAILURE MODES", description: "Honest disclosure of chunking boundaries, retrieval latency overhead, and context window drift." },
  { stage: "7. RELATED SEMANTIC CONCEPTS", description: "Explicit internal links to supporting entities (`e.g., Vector Databases, Embedding Models, Chunking Strategies`)." },
  { stage: "8. PRIMARY AUTHORITATIVE SOURCES", description: "Direct citations linking out to official vendor documentation, ArXiv preprints, and NIST guidelines." }
];

export interface EntityClaritySpecification {
  attribute: string;
  description: string;
  exampleVLLM: string;
}

export const entityClarityRegistry: EntityClaritySpecification[] = [
  { attribute: "1. Canonical Entity Name", description: "The official trademarked or repository name without informal truncation.", exampleVLLM: "vLLM (`Virtual Large Language Model`)" },
  { attribute: "2. Entity Classification Type", description: "Exact taxonomy category (`e.g., Protocol, Serving Engine, SDK, Hardware Accelerator`).", exampleVLLM: "High-Throughput Open-Source LLM Serving & Inference Engine" },
  { attribute: "3. Core Algorithmic Mechanism", description: "What specific technical breakthrough powers this entity?", exampleVLLM: "PagedAttention (`virtual memory paging management for KV Cache memory allocation`)" },
  { attribute: "4. Creator & Maintainer", description: "The exact organization, university lab, or open-source foundation managing the codebase.", exampleVLLM: "UC Berkeley Sky Computing Lab / Anyscale & Open-Source Community" },
  { attribute: "5. Primary Use Cases", description: "Exact production workloads requiring this entity.", exampleVLLM: "High-concurrency enterprise LLM serving, multi-tenant inference clusters, and continuous batching." },
  { attribute: "6. Architectural Limitations", description: "When this entity breaks down or should be avoided.", exampleVLLM: "Not designed for edge device training or ultra-low memory consumer laptops (`requires CUDA GPU clusters`)." },
  { attribute: "7. Direct Competitor Alternatives", description: "Side-by-side comparative entities.", exampleVLLM: "Hugging Face Text Generation Inference (`TGI`), NVIDIA TensorRT-LLM, Ollama, Llama.cpp." },
  { attribute: "8. Related TechlumeAI Hubs", description: "Internal cornerstone and spoke articles linking to this entity.", exampleVLLM: "Links to: `/articles/enterprise-llm-serving-benchmarks` and `/glossary/pagedattention`." }
];

export const semanticAnswerUnits = [
  { unit: "WHAT IS IT?", guidance: "State a precise, technical 2-sentence definition immediately under the heading. Ban all promotional puffery (`e.g., 'revolutionary, game-changing'`)." },
  { unit: "HOW DOES IT WORK?", guidance: "Explain the algorithmic data packet flow and memory layout using step-by-step logic and custom SVG system diagrams." },
  { unit: "WHY DOES IT MATTER?", guidance: "Highlight quantitative benchmarks (`e.g., 24x throughput improvement over naive Hugging Face transformers`)." },
  { unit: "WHERE IS IT USED?", guidance: "Specify enterprise deployment architectures (`Kubernetes clusters, multi-GPU NVLink nodes, cloud API gateways`)." },
  { unit: "WHAT ARE ITS LIMITATIONS?", guidance: "Disclose gotchas: cold-start overhead, CUDA driver dependencies, token prefill latency spikes." },
  { unit: "WHAT ARE THE ALTERNATIVES?", guidance: "Provide an objective markdown matrix comparing latency, memory usage, and $/1M tokens against top alternatives." },
  { unit: "WHEN SHOULD YOU USE IT?", guidance: "Deliver a clear decision tree or checklist helping systems architects choose this tool vs alternatives." }
];

export const sourceAuthorityRegistry = [
  { tier: "TIER 1: Primary Official Documentation", examples: ["Hugging Face Official API Docs", "AWS Reference Architectures", "PyTorch Official Tutorials", "LangChain GitHub Repo"], weight: "Highest (`Mandatory for code syntax and parameter verification`)." },
  { tier: "TIER 2: Academic & Peer-Reviewed Research", examples: ["ArXiv Preprints (`Cornell`)", "ACM / IEEE Transactions", "Stanford HAI Whitepapers", "MIT CSAIL Technical Reports"], weight: "Highest (`Mandatory for mathematical claims and algorithmic benchmarks`)." },
  { tier: "TIER 3: Standards & Regulatory Bodies", examples: ["NIST AI Risk Management Framework", "OWASP AI Security Top 10", "W3C Technical Standards", "ISO/IEC AI Governance"], weight: "Highest (`Mandatory for security, privacy, and compliance claims`)." },
  { tier: "TIER 4: Verified Engineering Case Studies", examples: ["Netflix Technology Blog", "Uber Engineering Blog", "Meta AI Engineering Hub", "Cloudflare Technical Blog"], weight: "High (`Mandatory for production scale and real-world outage diagnosis`)." }
];

export const claimSourceEvaluationLoop = {
  sequence: "CLAIM -> SOURCE -> SOURCE AUTHORITY -> DATE -> RELEVANCE -> ACCURACY",
  protocol: "Every quantitative assertion (`e.g., 'vLLM reduces VRAM waste by 96%'`) must be checked against this 6-point verification chain before publication. Do not cite a secondary blog merely because it mentions the topic. Verify the primary ArXiv paper or empirical benchmark repository directly."
};

export const comparisonOptimizationModel = {
  structure: "OPTION A (`Identity, Strengths, Weaknesses, Best Cases`) vs OPTION B (`Identity, Strengths, Weaknesses, Best Cases`) -> DECISION MATRIX (`When to choose A vs B vs Both`)",
  guidance: "When structuring comparison articles (`e.g., RAG vs Fine-Tuning`), never write one-sided sales copy. Present side-by-side quantitative scorecards evaluating Latency (`ms`), VRAM requirement (`GB`), setup complexity (`Hours`), and maintenance cost (`$/month`), concluding with explicit architectural selection rules."
};

export const structuredDataSchemas = [
  { schema: "TechArticle Schema (`JSON-LD`)", targetElements: "`headline`, `description`, `proficiencyLevel` (`Expert`), `dependencies`, `articleBody`, `author`, `datePublished`, `dateModified`", aiBenefit: "Allows AI crawlers to instantly parse technical requirements, code languages, and institutional author credentials." },
  { schema: "FAQPage Schema (`JSON-LD`)", targetElements: "Array of `Question` and `Answer` objects reflecting our exact People Also Ask (`PAA`) headings", aiBenefit: "Directly maps Q&A pairs into Google AI Overviews and ChatGPT Search side-panel citations." },
  { schema: "HowTo Schema (`JSON-LD`)", targetElements: "`name`, `step` array with `name`, `text`, `url`, and `code` snippets", aiBenefit: "Allows Perplexity and Claude to extract sequential CLI installation commands with zero parsing errors." },
  { schema: "BreadcrumbList Schema", targetElements: "`itemListElement` showing full parent cluster path (`Home > AI Engineering > vLLM Optimization`)", aiBenefit: "Establishes clear topical hierarchy and entity inheritance inside search engine knowledge graphs." }
];

export const freshnessSignalsRegistry = [
  { marker: "1. Exact Publication Timestamp", format: "`Published: July 17, 2026 (UTC)`", placement: "Top article metadata header below title." },
  { marker: "2. Last Modified Verification Timestamp", format: "`Last Audited & Verified: July 17, 2026`", placement: "Top article metadata header next to author bio." },
  { marker: "3. Tested Software Version Numbers", format: "`Tested against: vLLM v0.6.2 | Python 3.11 | CUDA 12.4`", placement: "Prominent callout banner right above the first code block." },
  { marker: "4. Empirical Research Date Callout", format: "`Benchmark Data Current As Of: Q3 2026`", placement: "Caption header of every comparison chart and data matrix." },
  { marker: "5. Production Readiness Status Badge", format: "`Status: Production Verified / Enterprise Hardened`", placement: "Sticky table of contents header." },
  { marker: "6. Explicit Deprecation Disclosure", format: "`Deprecated Warning: Supersedes old text-davinci-003 API syntax`", placement: "Warning alert box (`[!WARNING]`) above legacy code references." }
];

export const questionMappingJourney = [
  { stage: "1. PRIMARY QUESTION", example: "What is Model Context Protocol (`MCP`)?", placement: "H1 / Hero Title and immediate H2 definition box." },
  { stage: "2. RELATED QUESTIONS", example: "How does MCP differ from OpenAI Function Calling?", placement: "Secondary H2 comparative section." },
  { stage: "3. FOLLOW-UP QUESTIONS", example: "What transport layers (`stdio vs SSE`) does MCP support?", placement: "Technical deep-dive H3 section." },
  { stage: "4. IMPLEMENTATION QUESTIONS", example: "How to build a custom MCP server in TypeScript using `@modelcontextprotocol/sdk`?", placement: "H2 Code Playbook section with complete syntax." },
  { stage: "5. COMPARISON QUESTIONS", example: "MCP vs LangChain Tools vs LlamaIndex Agent protocols which is more standardized?", placement: "H3 Markdown comparison table section." },
  { stage: "6. LIMITATION QUESTIONS", example: "What are the token overhead and OAuth security risks of MCP servers?", placement: "H2 Enterprise Security & Gotchas section." },
  { stage: "7. FUTURE QUESTIONS", example: "Where is the W3C / Anthropic standardization roadmap for MCP going in 2027?", placement: "Final H2 Roadmap & ArXiv section." }
];

export const contextPreservationRules = {
  rule: "MANDATORY SELF-CONTAINED CHUNKING: AI vector embedding models and RAG retrievers chunk web pages into ~256 to 512 token segments. If a paragraph relies on external pronouns from 3 pages ago, the retrieved chunk becomes meaningless or inaccurate when summarized by an AI engine.",
  antiPattern: "BAD CHUNK: 'It is much faster than the old approach, reducing memory by half and doubling throughput when using the new method.' (`AI retriever cannot tell what 'It', 'old approach', or 'new method' are when extracted inside a RAG vector window`).",
  bestPractice: "PRISTINE CHUNK: 'vLLM PagedAttention is 24x faster than standard Hugging Face Transformers prefill, reducing GPU VRAM waste from 60% down to 4% by dividing Key-Value (`KV`) cache into non-contiguous virtual blocks.' (`100% self-contained, crystal clear, zero pronoun ambiguity`)."
};

export interface GeoFailureCondition {
  id: string;
  name: string;
  description: string;
  remediationAction: string;
}

export const geoFailureConditions: GeoFailureCondition[] = [
  { id: "FAIL-01", name: "Vague Marketing Definitions", description: "Using empty buzzwords (`'X is a revolutionary AI solution that empowers teams to innovate faster'`).", remediationAction: "Replace immediately with precise technical specifications (`'X is a distributed vector database utilizing HNSW indexing and memory-mapped Rust buffers'`)." },
  { id: "FAIL-02", name: "Ambiguous Pronoun Overload", description: "Repeated use of 'It', 'This system', 'The platform', or 'The tool' without naming the entity.", remediationAction: "Replace pronouns with the explicit canonical entity name every 2-3 paragraphs." },
  { id: "FAIL-03", name: "Orphaned Claims Without Source Citations", description: "Stating statistics (`'85% of enterprises experience RAG hallucinations'`) without linking to the primary survey.", remediationAction: "Link directly to the ArXiv preprint, Gartner report, or official benchmark repo supporting the claim." },
  { id: "FAIL-04", name: "Outdated Code Syntax & Superseded APIs", description: "Publishing code that triggers syntax errors or uses deprecated packages (`e.g., LangChain v0.1 import lines`).", remediationAction: "Run mandatory sandbox verification and inject version-tagged code blocks (`Python 3.11 / v0.6+`)." },
  { id: "FAIL-05", name: "Buried Direct Answers", description: "Forcing readers and AI bots to read 1,000 words of history before answering the core H1 question.", remediationAction: "Move the definitive 40-word summary box right under H1 (`Zero-Click Answer Capture`)." },
  { id: "FAIL-06", name: "Missing Semantic Schema (`JSON-LD`)", description: "Page lacks valid `TechArticle` or `FAQPage` structured data, forcing bots to guess content layout.", remediationAction: "Validate and inject pristine JSON-LD schema matching visible text headings 1-to-1." },
  { id: "FAIL-07", name: "One-Sided Promotional Comparisons", description: "Presenting comparison tables where Option A has all checkmarks and Option B is unfairly disparaged.", remediationAction: "Enforce objective multi-dimensional scorecards highlighting real trade-offs and when to use each." },
  { id: "FAIL-08", name: "Context-Broken Fragment Paragraphs", description: "Writing ultra-short fragmented sentences that lose all meaning when chunked into a 256-token vector window.", remediationAction: "Write structured, self-contained paragraphs (`3-5 sentences`) that preserve complete entity context." },
  { id: "FAIL-09", name: "Unattributed Expertise & Ghostwriting", description: "Publishing under generic 'Admin' or 'Staff' bylines without verified institutional credentials.", remediationAction: "Attribute all technical articles to verified institutional authors with full engineering biographies and social links." },
  { id: "FAIL-10", name: "Artificial Keyword & Question Repetition", description: "Stuffing exact exact-match questions or brand keywords unnaturally every paragraph (`Keyword stuffing`).", remediationAction: "Use natural conversational synonyms and clean semantic hierarchy (`H2/H3/H4`) without unnatural repetition." }
];

export const aiCitationMonitoringMatrix = [
  { engine: "Perplexity AI (`PerplexityBot`)", citationFocus: "Direct 2-sentence definition boxes, copyable code blocks, and clear markdown bullet lists.", trackingMetric: "Percentage of target queries where TechlumeAI is cited in the top 3 footnote badges." },
  { engine: "ChatGPT Search (`OAI-SearchBot`)", citationFocus: "Semantic HTML tables, structured side-by-side matrices, and FAQPage schema items.", trackingMetric: "Frequency of inclusion inside ChatGPT Search side-panel sources and code excerpts." },
  { engine: "Google AI Overviews (`Gemini`)", citationFocus: "Concise People Also Ask (`PAA`) answers right below H2/H3 headings and high domain rating (`DR`).", trackingMetric: "Capture rate of Google AI Overview link carousels on target core institutional queries." },
  { engine: "Claude Web Search (`ClaudeBot`)", citationFocus: "Complete dependency manifests (`package.json / requirements.txt`), CLI terminal logs, and system diagrams.", trackingMetric: "Citation rate across deep technical research prompts and architecture comparison workflows." }
];

export const mandatoryGeoGateChecklist = [
  { id: "GEO-GATE-01", category: "Human-First Validation Check", item: "Verify that content is crystal clear, technically rigorous, and useful for a human architect before checking AI visibility." },
  { id: "GEO-GATE-02", category: "Answer-First 6-Step Structure", item: "Verify that all H1 and major H2 questions start immediately with a direct 150-250 word summary box below the heading." },
  { id: "GEO-GATE-03", category: "Entity Clarity & Pronoun Elimination", item: "Verify all 8 entity clarity attributes (`Official Name, Type, Mechanism, Maintainer, Use Cases, Gotchas, Alternatives`) are explicit." },
  { id: "GEO-GATE-04", category: "7-Unit Semantic Answer Blocks", item: "Verify article structure covers `What Is It -> How It Works -> Why It Matters -> Where Used -> Limitations -> Alternatives -> When To Use`." },
  { id: "GEO-GATE-05", category: "Primary Source & Claim Verification", item: "Verify all statistical and algorithmic claims link directly to official vendor docs, ArXiv preprints, or NIST/OWASP standards." },
  { id: "GEO-GATE-06", category: "Comparison Matrix Optimization", item: "Verify comparisons use side-by-side markdown scorecards evaluating Latency, Memory, Complexity, and Cost with objective verdicts." },
  { id: "GEO-GATE-07", category: "JSON-LD Structured Data Validation", item: "Verify `TechArticle`, `FAQPage`, and `BreadcrumbList` schemas are injected and match visible page text 1-to-1 without errors." },
  { id: "GEO-GATE-08", category: "8 Freshness & Versioning Signals", item: "Verify exact publication timestamps, audited verification dates, tested software versions (`Python 3.11/CUDA 12`), and deprecation warnings." },
  { id: "GEO-GATE-09", category: "7-Stage Question Journey Mapping", item: "Verify the article systematically answers Primary, Related, Follow-up, Implementation, Comparison, Limitation, and Future questions." },
  { id: "GEO-GATE-10", category: "Self-Contained Vector Chunking Audit", item: "Verify that paragraphs are self-contained (`256-512 tokens`) without broken pronoun dependencies across section boundaries." },
  { id: "GEO-GATE-11", category: "10 GEO Failure Condition Clearance", item: "Verify complete absence of marketing fluff, pronoun overload, unverified claims, deprecated code, and keyword stuffing." },
  { id: "GEO-GATE-12", category: "AI Citation Monitoring Matrix Setup", item: "Verify target queries are registered for bi-weekly tracking across Perplexity, ChatGPT Search, Google AI Overviews, and Claude." },
  { id: "GEO-GATE-13", category: "Institutional Authorship & E-E-A-T Attribution", item: "Verify article is signed by a credentialed TechlumeAI institutional author with full engineering biography and verified social links." }
];
