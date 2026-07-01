"use client";

import { useState, useEffect, useCallback } from "react";
import { Terminal } from "@/components/ui/terminal";
import { cn } from "@/lib/utils";

const LOADING_COMMANDS = [
  "ssh manas@portfolio.dev",
  "git log --oneline -2",
  "npm run build",
  "echo 'Welcome to manasbhatia.me'",
];

const LOADING_OUTPUTS: Record<number, string[]> = {
  0: ["Connecting...", "✔ Authenticated."],
  1: [
    "a1b2c3d feat: RAG pipeline integration",
    "d4e5f6g fix: AWS Amplify deploy",
  ],
  2: ["▸ Compiling...", "✔ Build done in 1.2s"],
  3: ["Welcome to manasbhatia.me"],
};

interface LoadingScreenProps {
  children: React.ReactNode;
}

export function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Check if this is the first visit in this session
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolio-loaded");
    if (hasVisited) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  // Auto-dismiss after terminal animation completes (~5s total)
  useEffect(() => {
    if (!isLoading) return;
    const hasVisited = sessionStorage.getItem("portfolio-loaded");
    if (hasVisited) return;

    const timer = setTimeout(() => {
      handleDismiss();
    }, 4400);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleDismiss = useCallback(() => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    sessionStorage.setItem("portfolio-loaded", "true");

    // Wait for fade-out animation to complete
    setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 600);
  }, [isFadingOut]);

  // Allow skip on click or key press
  useEffect(() => {
    if (!isLoading || isFadingOut) return;

    const handleSkip = (e: KeyboardEvent | MouseEvent) => {
      // Don't skip on very early clicks (give terminal a moment to appear)
      if (e instanceof KeyboardEvent && e.key === "Escape") {
        handleDismiss();
      }
    };

    window.addEventListener("keydown", handleSkip);
    return () => {
      window.removeEventListener("keydown", handleSkip);
    };
  }, [isLoading, isFadingOut, handleDismiss]);

  if (!isLoading && showContent) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Loading Screen Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] flex flex-col items-center justify-center",
          "bg-neutral-950 transition-all duration-500 ease-in-out",
          isFadingOut && "opacity-0 scale-[1.02]"
        )}
      >
        {/* Ambient glow effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-sky-500/[0.03] blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
        </div>

        {/* Scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />

        {/* Header label */}
        <div className="relative mb-6 flex items-center gap-2 text-neutral-500 font-mono text-[11px] tracking-[0.2em] uppercase">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Initializing Portfolio
        </div>

        {/* Terminal */}
        <div className="relative w-full max-w-xl px-4">
          <Terminal
            commands={LOADING_COMMANDS}
            outputs={LOADING_OUTPUTS}
            username="manas@portfolio"
            typingSpeed={30}
            delayBetweenCommands={400}
            initialDelay={200}
            enableSound={true}
          />
        </div>

        {/* Progress bar */}
        <div className="relative mt-8 w-full max-w-xs px-4">
          <div className="h-px w-full overflow-hidden rounded-full bg-neutral-800">
            <div
              className="h-full bg-gradient-to-r from-sky-500 via-emerald-400 to-sky-500 rounded-full"
              style={{
                animation: "loading-progress 4.4s ease-in-out forwards",
              }}
            />
          </div>
        </div>

        {/* Skip hint */}
        <button
          onClick={handleDismiss}
          className="group relative mt-6 flex items-center gap-1.5 rounded-md border border-neutral-800/50 bg-neutral-900/50 px-3 py-1.5 font-mono text-[10px] text-neutral-600 transition-all duration-200 hover:border-neutral-700 hover:text-neutral-400 hover:bg-neutral-800/50 cursor-pointer"
        >
          <kbd className="rounded border border-neutral-700/50 bg-neutral-800/50 px-1 py-0.5 text-[9px] text-neutral-500 group-hover:text-neutral-400 transition-colors">
            ESC
          </kbd>
          <span>Skip intro</span>
        </button>
      </div>

      {/* Hidden content (preload) */}
      <div className="invisible" aria-hidden="true">
        {children}
      </div>
    </>
  );
}
