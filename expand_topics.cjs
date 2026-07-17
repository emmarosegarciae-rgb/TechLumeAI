const fs = require('fs');
let content = fs.readFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/topics.ts', 'utf8');

// Inject ai-agents into relatedTopics of prompt-engineering
content = content.replace(/relatedTopics:\s*\["model-context-protocol", "multi-agent-systems", "rag-architecture"\],/, 'relatedTopics: ["model-context-protocol", "multi-agent-systems", "rag-architecture", "ai-agents"],');

// Inject framework names into multi-agent-systems subtopics
content = content.replace(/subtopics:\s*\[\s*"Agentic AI Orchestration",/, 'subtopics: [\n      "LangGraph & CrewAI Frameworks",\n      "Agentic AI Orchestration",');

fs.writeFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/topics.ts', content);
console.log("Expanded topical clusters.");
