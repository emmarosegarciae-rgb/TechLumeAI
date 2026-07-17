import { articles } from "@/lib/data/articles";
import { categories } from "@/lib/data/categories";
import { getAllGlossaryEntities } from "@/lib/data/glossary";
import { getAllTopics } from "@/lib/data/topics";

export const dynamic = "force-static";

export async function GET() {
  const topics = getAllTopics();
  const glossary = getAllGlossaryEntities();

  const lines: string[] = [
    "# TechlumeAI — Enterprise AI & Technology Knowledge Platform",
    "",
    "> TechlumeAI (https://techlumeai.com) is an authoritative technical publication and enterprise knowledge graph specializing in AI engineering, Large Language Models (LLMs), enterprise AI architectures, multi-agent systems, and frontier developer infrastructure.",
    "",
    "## Core Editorial Pillars & Categories",
    ""
  ];

  for (const category of categories) {
    lines.push(`- [${category.name}](https://techlumeai.com/category/${category.slug}): ${category.description}`);
  }

  lines.push("", "## Topic Cluster Hubs & Semantic Concepts", "");
  for (const topic of topics) {
    lines.push(`- [${topic.name}](https://techlumeai.com/topics/${topic.slug}): ${topic.description} (Pillar: ${topic.pillar})`);
  }

  lines.push("", "## Canonical Glossary & Entity Definitions", "");
  for (const entity of glossary) {
    lines.push(`- [${entity.term}](https://techlumeai.com/glossary/${entity.slug}): ${entity.definition}`);
  }

  lines.push("", "## Flagship Technical Guides & Analyses", "");
  for (const article of articles) {
    const keywordInfo = article.primaryKeyword ? ` [Primary Entity: ${article.primaryKeyword}]` : "";
    lines.push(`- [${article.title}](https://techlumeai.com/articles/${article.slug}): ${article.dek}${keywordInfo}`);
  }

  lines.push(
    "",
    "---",
    "Generated for AI web crawlers and answer engines (PerplexityBot, GPTBot, ClaudeBot, Google-Extended).",
    "Complete knowledge graph representation available at: https://techlumeai.com/llms-full.txt"
  );

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
