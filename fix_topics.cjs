const fs = require('fs');
let content = fs.readFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/topics.ts', 'utf8');

const newTopic = `  {
    slug: "ai-agents",
    name: "AI Agents & Autonomous Workflows",
    pillar: "ai-engineering",
    description: "The architectural patterns, observability tools, and frameworks (like LangGraph and CrewAI) used to orchestrate autonomous LLM workflows.",
    cornerstoneSlug: "enterprise-ai-agents-production",
    subtopics: ["Agentic AI Orchestration", "Tool Calling", "Memory Management"],
    relatedTopics: ["prompt-engineering", "multi-agent-systems"]
  },
`;

content = content.replace(/export const topics: TopicHub\[\] = \[\r?\n/, 'export const topics: TopicHub[] = [\n' + newTopic);

fs.writeFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/topics.ts', content);
console.log("Added ai-agents topic hub to fix the warning.");
