import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbsProps = {
  items: { label: string; href: string }[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
      <Link href="/" className="font-semibold hover:text-blue-700 dark:hover:text-sky-300">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={item.href} className="inline-flex items-center gap-1">
          <ChevronRight className="size-3.5" aria-hidden="true" />
          {index === items.length - 1 ? (
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="font-semibold hover:text-blue-700 dark:hover:text-sky-300"
            >
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
