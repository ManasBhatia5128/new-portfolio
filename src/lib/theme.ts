/**
 * Semantic design tokens for the portfolio theme.
 *
 * These values are mirrored as CSS custom properties in globals.css
 * and consumed via Tailwind's `@theme inline` mapping. This file
 * serves as the single source of truth for the design language and
 * is importable wherever programmatic access to tokens is needed.
 */

export interface ThemeTokens {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  border: string;
  input: string;
  ring: string;
}

/** Light mode — clean, high-contrast whites and neutrals */
export const lightTheme: ThemeTokens = {
  background: "oklch(0.99 0 0)",
  foreground: "oklch(0.13 0 0)",
  card: "oklch(1 0 0)",
  cardForeground: "oklch(0.13 0 0)",
  popover: "oklch(1 0 0)",
  popoverForeground: "oklch(0.13 0 0)",
  primary: "oklch(0.65 0.15 220)",
  primaryForeground: "oklch(0.99 0 0)",
  secondary: "oklch(0.96 0.005 260)",
  secondaryForeground: "oklch(0.18 0 0)",
  muted: "oklch(0.96 0.005 260)",
  mutedForeground: "oklch(0.50 0 0)",
  accent: "oklch(0.65 0.15 220)",
  accentForeground: "oklch(0.99 0 0)",
  destructive: "oklch(0.577 0.245 27.325)",
  border: "oklch(0.91 0.005 260)",
  input: "oklch(0.91 0.005 260)",
  ring: "oklch(0.65 0.15 220)",
};

/** Dark mode — deep technical off-black, not pure black */
export const darkTheme: ThemeTokens = {
  background: "oklch(0.10 0.005 260)",
  foreground: "oklch(0.93 0 0)",
  card: "oklch(0.14 0.005 260)",
  cardForeground: "oklch(0.93 0 0)",
  popover: "oklch(0.14 0.005 260)",
  popoverForeground: "oklch(0.93 0 0)",
  primary: "oklch(0.65 0.15 220)",
  primaryForeground: "oklch(0.99 0 0)",
  secondary: "oklch(0.18 0.005 260)",
  secondaryForeground: "oklch(0.93 0 0)",
  muted: "oklch(0.18 0.005 260)",
  mutedForeground: "oklch(0.65 0 0)",
  accent: "oklch(0.65 0.15 220)",
  accentForeground: "oklch(0.99 0 0)",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(1 0 0 / 8%)",
  input: "oklch(1 0 0 / 12%)",
  ring: "oklch(0.65 0.15 220)",
};

/** Navigation link definitions */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
