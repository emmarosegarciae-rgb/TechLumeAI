import Link from "next/link";
import { BriefcaseBusiness, Code2, PlayCircle, Rss } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { businessNav, legalNav, primaryNav } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/data/site";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { Logo } from "@/components/layout/logo";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <Logo />
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
              Premium AI and technology intelligence for builders, operators, and
              decision-makers shaping the next generation of software.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { label: "LinkedIn", href: siteConfig.social.linkedin, icon: BriefcaseBusiness },
                { label: "YouTube", href: siteConfig.social.youtube, icon: PlayCircle },
                { label: "RSS", href: "/rss.xml", icon: Rss },
                { label: "GitHub", href: "https://github.com/techlumeai", icon: Code2 }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="focus-ring grid size-10 place-items-center rounded-[var(--radius)] border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:text-slate-300"
                    aria-label={item.label}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
          <NewsletterInline />
        </div>

        <div className="mt-12 grid gap-8 border-t border-slate-200 pt-10 dark:border-slate-800 sm:grid-cols-2 lg:grid-cols-4">
          <FooterGroup title="Publication" items={primaryNav} />
          <FooterGroup
            title="Categories"
            items={categories.map((category) => ({
              label: category.name,
              href: `/category/${category.slug}`
            }))}
          />
          <FooterGroup title="Business" items={businessNav} />
          <FooterGroup title="Legal" items={legalNav} />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} TechlumeAI. All rights reserved.</p>
          <p>Independent editorial technology publication serving the United States.</p>
        </div>
      </div>
    </footer>
  );
}

type FooterGroupProps = {
  title: string;
  items: { label: string; href: string }[];
};

function FooterGroup({ title, items }: FooterGroupProps) {
  return (
    <nav aria-label={title}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <div className="grid gap-2">
        {items.map((item) => (
          <Link
            key={`${title}-${item.href}`}
            href={item.href}
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-sky-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
