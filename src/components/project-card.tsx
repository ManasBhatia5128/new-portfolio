import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ProjectEntry } from "@/lib/data";
import { SkillTag } from "@/components/skill-tag";

interface ProjectCardProps {
  project: ProjectEntry;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-border/60 bg-card/50 transition-all duration-300 hover:border-border hover:shadow-lg h-full">
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
  );
}
