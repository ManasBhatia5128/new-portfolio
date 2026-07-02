import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  Trophy,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { experience, positions, achievements } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Experience — Manas Bhatia",
  description:
    "Professional experience, leadership roles, and achievements of Manas Bhatia.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* ── Professional Experience ─────────────────────────────── */}
      <SectionHeader
        title="Experience"
        subtitle="Technical impact, infrastructure, and product delivery"
      />

      <div className="relative ml-3 border-l-2 border-border/60 pl-8 space-y-10 mb-16 md:mb-20">
        {experience.map((entry) => (
          <div key={entry.company} className="relative">
            {/* Timeline node */}
            <div className="absolute -left-[calc(2rem+5px)] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-background">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>

            {/* Card */}
            <div className="rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-5 transition-all duration-200 hover:border-border hover:shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-4">
                <div className="flex items-center gap-3">
                  {entry.logo && (
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border/60">
                      <Image
                        src={entry.logo}
                        alt={entry.company}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Briefcase
                      size={14}
                      weight="bold"
                      className="text-primary shrink-0"
                    />
                    <h3 className="text-sm font-bold text-foreground">
                      {entry.company}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {entry.duration}
                </span>
              </div>

              <span className="inline-flex items-center rounded-sm bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary mb-4">
                {entry.role}
              </span>

              <ul className="space-y-3">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* ── Positions of Responsibility ─────────────────────────── */}
      <SectionHeader
        title="Leadership"
        subtitle="Community impact and organizational roles"
      />

      <div className="relative ml-3 border-l-2 border-border/60 pl-8 space-y-8 mb-16 md:mb-20">
        {positions.map((pos) => (
          <div key={pos.organization} className="relative">
            {/* Timeline node */}
            <div className="absolute -left-[calc(2rem+5px)] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-muted-foreground/40 bg-background">
              <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
            </div>

            <div className="rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-5 transition-all duration-200 hover:border-border hover:shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
                <div className="flex items-center gap-3">
                  {pos.logo && (
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border/60">
                      <Image
                        src={pos.logo}
                        alt={pos.organization}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <UsersThree
                      size={14}
                      weight="bold"
                      className="text-muted-foreground shrink-0"
                    />
                    <h3 className="text-sm font-bold text-foreground">
                      {pos.organization}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {pos.duration}
                </span>
              </div>

              <span className="inline-flex items-center rounded-sm bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground mb-3">
                {pos.role}
              </span>

              <ul className="space-y-2">
                {pos.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* ── Achievements ────────────────────────────────────────── */}
      <SectionHeader title="Achievements" />

      <div className="space-y-3">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-4 transition-colors hover:border-border"
          >
            <Trophy
              size={16}
              weight="bold"
              className="text-primary shrink-0 mt-0.5"
            />
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
