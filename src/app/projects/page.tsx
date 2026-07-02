import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";

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
          <ProjectCard key={project.title} project={project} />
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
