"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

function applyTheme(mode: ThemeMode, systemDark: boolean): "light" | "dark" {
  const resolved = mode === "system" ? (systemDark ? "dark" : "light") : mode;
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.setAttribute("data-theme-mode", mode);
  document.documentElement.style.colorScheme = resolved;
  return resolved;
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    queueMicrotask(() => {
      setMounted(true);
      try {
        const stored = localStorage.getItem("techlumeai-theme") as ThemeMode | null;
        if (stored === "light" || stored === "dark" || stored === "system") {
          setTheme(stored);
        }
      } catch {
        // Ignore localStorage access errors
      }
    });
  }, []);

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function update() {
      const resolved = applyTheme(theme, mediaQuery.matches);
      setResolvedTheme(resolved);
    }

    queueMicrotask(update);

    if (theme === "system") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }
  }, [theme]);

  function selectTheme(next: ThemeMode) {
    setTheme(next);
    localStorage.setItem("techlumeai-theme", next);
  }


  const modes: { mode: ThemeMode; label: string; icon: typeof Sun }[] = [
    {
      mode: "system",
      label: !mounted ? "System (light)" : `System (${resolvedTheme})`,
      icon: Monitor
    },
    { mode: "light", label: "Light", icon: Sun },
    { mode: "dark", label: "Dark", icon: Moon }
  ];

  return (
    <div
      role="group"
      aria-label="Color theme selection"
      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-800 dark:bg-slate-900"
      suppressHydrationWarning
    >
      {modes.map((item) => {
        const Icon = item.icon;
        const active = theme === item.mode;
        return (
          <button
            key={item.mode}
            type="button"
            onClick={() => selectTheme(item.mode)}
            aria-pressed={active}
            title={item.label}
            className={`focus-ring inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-xs font-semibold transition-all ${
              active
                ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-slate-100"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">
              {item.mode === "system" ? "System" : item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
