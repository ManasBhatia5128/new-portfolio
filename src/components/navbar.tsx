"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import { List } from "@phosphor-icons/react";
import { NAV_LINKS } from "@/lib/theme";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header
        id="navbar"
        className="glassmorphic fixed top-0 left-0 right-0 z-40 transition-colors duration-300"
      >
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          {/* Logo / Name */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-bold tracking-tight text-foreground transition-colors"
          >
            {mounted ? (
              <img
                src={theme === "dark" ? "/images/logo_dark_mode.png" : "/images/logo_light_mode.png"}
                alt="Manas Bhatia Logo"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="h-10 w-10" />
            )}
          </Link>

          {/* Desktop nav links */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-md font-medium rounded-md transition-colors duration-200",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-4 bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side — theme toggle + mobile hamburger */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              id="mobile-nav-trigger"
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border/50 text-foreground transition-colors hover:bg-muted md:hidden"
              aria-label="Open navigation menu"
            >
              <List size={16} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
