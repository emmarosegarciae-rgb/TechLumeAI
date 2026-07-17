export function ThemeScript() {
  const script = `
    (function() {
      try {
        var stored = localStorage.getItem("techlumeai-theme");
        var mode = (stored === "light" || stored === "dark" || stored === "system") ? stored : "system";
        var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var resolved = mode === "system" ? (systemDark ? "dark" : "light") : mode;
        document.documentElement.classList.toggle("dark", resolved === "dark");
        document.documentElement.setAttribute("data-theme", resolved);
        document.documentElement.setAttribute("data-theme-mode", mode);
        document.documentElement.style.colorScheme = resolved;
      } catch (_) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
