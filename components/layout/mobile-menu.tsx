"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { businessNav, primaryNav, topicNav } from "@/lib/data/navigation";
import { categories } from "@/lib/data/categories";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
      >
        <Menu className="size-5" aria-hidden="true" />
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-slate-950/55 p-4 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full max-w-sm flex-col overflow-y-auto rounded-[var(--radius)] bg-white p-5 shadow-luxe dark:bg-slate-950">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-lg font-black">Menu</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
              >
                <X className="size-4" aria-hidden="true" />
              </Button>
            </div>
            <nav className="grid gap-6">
              <MenuGroup title="Sections" items={primaryNav} onClick={() => setOpen(false)} />
              <MenuGroup
                title="Trending"
                items={topicNav}
                onClick={() => setOpen(false)}
              />
              <MenuGroup
                title="Categories"
                items={categories.map((category) => ({
                  label: category.name,
                  href: `/category/${category.slug}`
                }))}
                onClick={() => setOpen(false)}
              />
              <MenuGroup
                title="Business"
                items={businessNav}
                onClick={() => setOpen(false)}
              />
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}

type MenuGroupProps = {
  title: string;
  items: { label: string; href: string }[];
  onClick: () => void;
};

function MenuGroup({ title, items, onClick }: MenuGroupProps) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <div className="grid gap-2">
        {items.map((item) => (
          <Link
            key={`${title}-${item.href}`}
            href={item.href}
            onClick={onClick}
            className="focus-ring rounded-[var(--radius)] px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
