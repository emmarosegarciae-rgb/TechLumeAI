import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "SFMono-Regular", "Consolas", "monospace"]
      },
      boxShadow: {
        luxe: "0 24px 70px -36px rgb(15 23 42 / 0.42)",
        glow: "0 18px 70px -36px rgb(37 99 235 / 0.55)"
      }
    }
  }
} satisfies Config;

export default config;
