"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { NAV_LINKS } from "@/lib/theme";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-nav-overlay"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 top-0 z-50 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex h-14 items-center justify-between px-6 border-b border-border/50">
            <span className="text-sm font-bold tracking-tight">
              navigation
            </span>
            <button
              id="mobile-nav-close"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border/50 text-foreground transition-colors hover:bg-muted"
              aria-label="Close navigation"
            >
              <X size={16} weight="bold" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-6" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 text-sm rounded-md transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <span className="text-[10px] font-mono text-muted-foreground/60">
                    {String(NAV_LINKS.indexOf(link)).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
