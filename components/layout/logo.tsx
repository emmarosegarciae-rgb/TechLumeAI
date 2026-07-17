import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("focus-ring inline-flex items-center gap-2 rounded-md", className)}
      aria-label="TechlumeAI home"
    >
      <span className="grid size-9 place-items-center rounded-[var(--radius)] bg-slate-950 text-white shadow-glow dark:bg-white dark:text-slate-950">
        <Sparkles className="size-4" aria-hidden="true" />
      </span>
      <span className="font-display text-xl font-black tracking-normal">
        Techlume<span className="text-blue-600 dark:text-sky-300">AI</span>
      </span>
    </Link>
  );
}
