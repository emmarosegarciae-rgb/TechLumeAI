"use client";

import React, { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("TechlumeAI Root Fatal Global Exception Triggered:", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>500 Fatal System Error — TechlumeAI</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased">
        <div className="min-h-screen flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-rose-950 text-rose-400 border border-rose-800">
              <span className="text-xl font-black">!</span>
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rose-400">
              Fatal Application Exception
            </p>
            <h1 className="text-2xl font-black tracking-tight text-white">
              System Recovery Needed
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              The core application encountered a critical runtime failure. Please refresh to reinitialize the TechlumeAI execution environment.
            </p>
            {error.digest && (
              <div className="mt-4 rounded bg-slate-950 px-3 py-1.5 text-xs font-mono text-slate-400 border border-slate-800">
                Digest: {error.digest}
              </div>
            )}
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => reset()}
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500 shadow-lg"
              >
                Reinitialize Application
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
