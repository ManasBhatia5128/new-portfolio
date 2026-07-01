import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { SkillTag } from "@/components/skill-tag";

export const metadata: Metadata = {
  title: "Projects — Manas Bhatia",
  description:
    "Technical projects and open-source contributions by Manas Bhatia.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <SectionHeader
        title="Projects"
        subtitle="Shipped products and technical experiments"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col rounded-lg border border-border/60 bg-card/50 transition-all duration-300 hover:border-border hover:shadow-lg"
          >
            {/* ── Cover image or fallback pattern ── */}
            <div className="relative min-h-[140px] rounded-t-lg bg-muted/30 border-b border-border/40 overflow-hidden">
              {project.cover ? (
                <Image
                  src={project.cover}
                  alt={`${project.title} cover`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="flex items-center justify-center h-full min-h-[140px]">
                    <span className="text-xs font-mono text-muted-foreground/40 select-none">
                      {"// interactive demo slot"}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* ── Body ── */}
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-sm font-bold text-foreground">
                  {project.title}
                </h3>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={13} weight="bold" />
                  </a>
                )}
              </div>

              <p className="text-[13px] leading-relaxed text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <SkillTag key={t} label={t} />
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* ── Placeholder card for future projects ── */}
        <article className="group relative flex flex-col items-center justify-center rounded-lg border border-dashed border-border/40 bg-card/20 min-h-[320px] transition-colors hover:border-border/60">
          <div className="text-center px-6">
            <span className="text-2xl mb-3 block opacity-30">+</span>
            <p className="text-xs font-mono text-muted-foreground/50">
              more projects coming soon
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
