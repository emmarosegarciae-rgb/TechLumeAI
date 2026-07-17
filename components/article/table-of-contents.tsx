import type { ArticleBlock } from "@/lib/types";
import { slugify } from "@/lib/utils";

type TableOfContentsProps = {
  blocks: ArticleBlock[];
};

export function TableOfContents({ blocks }: TableOfContentsProps) {
  const headings = blocks
    .filter((block): block is Extract<ArticleBlock, { type: "heading" }> => block.type === "heading")
    .map((block) => ({
      id: slugify(block.value),
      title: block.value
    }));

  if (!headings.length) {
    return null;
  }

  return (
    <aside className="rounded-[var(--radius)] border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        Table of Contents
      </p>
      <ol className="grid gap-2 text-sm">
        {headings.map((heading, index) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="flex gap-2 rounded-md py-1 font-semibold text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-sky-300"
            >
              <span className="text-slate-400">{index + 1}.</span>
              {heading.title}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
