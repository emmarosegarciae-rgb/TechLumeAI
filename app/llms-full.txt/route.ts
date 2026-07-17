import { articles } from "@/lib/data/articles";
import { categories } from "@/lib/data/categories";
import { getAllGlossaryEntities } from "@/lib/data/glossary";
import { getAllTopics } from "@/lib/data/topics";

export const dynamic = "force-static";

export async function GET() {
  const topics = getAllTopics();
  const glossary = getAllGlossaryEntities();

  const lines: string[] = [
    "# TechlumeAI — Full Enterprise Knowledge Graph & Technical Compendium",
    "",
    "> Complete semantic representation of TechlumeAI (https://techlumeai.com) including articles, executive summaries, entity definitions, topic hierarchies, pros/cons matrices, FAQs, and authoritative citations.",
    "",
    "========================================================================",
    "PART 1: EDITORIAL PILLARS & CATEGORIES",
    "========================================================================",
    ""
  ];

  for (const category of categories) {
    lines.push(`### ${category.name} (${category.slug})`, `URL: https://techlumeai.com/category/${category.slug}`, `Description: ${category.description}`, "");
  }

  lines.push(
    "========================================================================",
    "PART 2: TOPIC CLUSTER HUBS & SEMANTIC CONCEPTS",
    "========================================================================",
    ""
  );

  for (const topic of topics) {
    lines.push(
      `### Topic: ${topic.name}`,
      `URL: https://techlumeai.com/topics/${topic.slug}`,
      `Pillar: ${topic.pillar}`,
      `Description: ${topic.description}`,
      `Subtopics: ${topic.subtopics?.join(", ") || "None"}`,
      `Cornerstone Article Slug: ${topic.cornerstoneSlug || "N/A"}`
    );
    if (topic.faqs && topic.faqs.length > 0) {
      lines.push("FAQs:");
      for (const faq of topic.faqs) {
        lines.push(`  - Q: ${faq.question}\n    A: ${faq.answer}`);
      }
    }
    lines.push("");
  }

  lines.push(
    "========================================================================",
    "PART 3: CANONICAL GLOSSARY & ENTITY DEFINITIONS",
    "========================================================================",
    ""
  );

  for (const entity of glossary) {
    lines.push(
      `### Entity: ${entity.term}`,
      `URL: https://techlumeai.com/glossary/${entity.slug}`,
      `Definition: ${entity.definition}`,
      `Synonyms: ${entity.synonyms?.join(", ") || "None"}`,
      `Key Applications:\n${(entity.keyApplications || []).map((app) => `  - ${app}`).join("\n")}`,
      `Related Entities: ${entity.relatedEntities?.join(", ") || "None"}`,
      ""
    );
  }

  lines.push(
    "========================================================================",
    "PART 4: FLAGSHIP TECHNICAL GUIDES & DEEP ANALYSES",
    "========================================================================",
    ""
  );

  for (const article of articles) {
    lines.push(
      `## Article: ${article.title}`,
      `URL: https://techlumeai.com/articles/${article.slug}`,
      `Primary Keyword / Entity: ${article.primaryKeyword || "N/A"}`,
      `Secondary Keywords: ${article.secondaryKeywords?.join(", ") || "N/A"}`,
      `Category: ${article.category} | Reading Time: ${article.readingMinutes} min`,
      `Published: ${article.publishedAt} | Last Updated: ${article.updatedAt}`,
      `Abstract: ${article.dek}`,
      ""
    );

    if (article.tldr && article.tldr.length > 0) {
      lines.push("Executive Summary & Key Takeaways:");
      article.tldr.forEach((takeaway, idx) => {
        lines.push(`  ${idx + 1}. ${takeaway}`);
      });
      lines.push("");
    }

    // Serialize AEO answer blocks from content array
    const answerBlock = article.content?.find((b) => b.type === "answer");
    if (answerBlock && answerBlock.type === "answer") {
      lines.push("PRIMARY ANSWER BLOCK (Answer Engine Optimized):");
      lines.push(`  Q: ${answerBlock.question}`);
      lines.push(`  A: ${answerBlock.directAnswer}`);
      if (answerBlock.explanation) lines.push(`  Context: ${answerBlock.explanation}`);
      if (answerBlock.benefits && answerBlock.benefits.length > 0) lines.push(`  Benefits: ${answerBlock.benefits.join("; ")}`);
      if (answerBlock.limitations && answerBlock.limitations.length > 0) lines.push(`  Limitations: ${answerBlock.limitations.join("; ")}`);
      if (answerBlock.targetAudience) lines.push(`  Target Audience: ${answerBlock.targetAudience}`);
      if (answerBlock.relatedConcepts && answerBlock.relatedConcepts.length > 0) lines.push(`  Related Concepts: ${answerBlock.relatedConcepts.join(", ")}`);
      lines.push("");
    }

    if (article.pros && article.pros.length > 0) {
      lines.push("Pros / Key Advantages:");
      article.pros.forEach((pro: string) => lines.push(`  + ${pro}`));
      lines.push("");
    }

    if (article.cons && article.cons.length > 0) {
      lines.push("Considerations / Limitations:");
      article.cons.forEach((con: string) => lines.push(`  - ${con}`));
      lines.push("");
    }

    // Serialize FAQ blocks from both metadata and content array
    const allFaqItems: { question: string; answer: string }[] = [];
    if (article.faq && article.faq.length > 0) allFaqItems.push(...article.faq);
    const faqContentBlock = article.content?.find((b) => b.type === "faq");
    if (faqContentBlock && faqContentBlock.type === "faq") allFaqItems.push(...faqContentBlock.items);

    if (allFaqItems.length > 0) {
      lines.push("Frequently Asked Questions:");
      allFaqItems.forEach((faq: { question: string; answer: string }) => {
        lines.push(`  Q: ${faq.question}\n  A: ${faq.answer}`);
      });
      lines.push("");
    }

    if (article.references && article.references.length > 0) {
      lines.push("Authoritative References & Citations:");
      article.references.forEach((ref) => {
        lines.push(`  * ${ref.title} (${ref.author || ref.publisher || "Source"}): ${ref.url}`);
      });
      lines.push("");
    }

    lines.push("------------------------------------------------------------------------", "");
  }

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
