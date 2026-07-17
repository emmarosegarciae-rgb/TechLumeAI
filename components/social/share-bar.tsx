import Link from "next/link";
import { BriefcaseBusiness, Mail, Share2 } from "lucide-react";
import { absoluteUrl } from "@/lib/utils";

type ShareBarProps = {
  title: string;
  path: string;
};

export function ShareBar({ title, path }: ShareBarProps) {
  const url = absoluteUrl(path);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on X",
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Share2
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: BriefcaseBusiness
    },
    {
      label: "Share by email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: Mail
    }
  ];

  return (
    <div className="sticky top-28 hidden gap-2 lg:grid">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.href}
            className="focus-ring grid size-10 place-items-center rounded-[var(--radius)] border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
            aria-label={link.label}
          >
            <Icon className="size-4" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
