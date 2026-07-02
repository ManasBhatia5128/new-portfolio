import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
  Globe,
  Briefcase,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import {
  personalInfo,
  profileSummary,
  skills,
  education,
  experience,
  projects,
} from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { SkillTag } from "@/components/skill-tag";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";

const socialLinks = [
  {
    href: `mailto:${personalInfo.email}`,
    icon: EnvelopeSimple,
    label: "Email",
  },
  { href: personalInfo.github, icon: GithubLogo, label: "GitHub" },
  { href: personalInfo.linkedin, icon: LinkedinLogo, label: "LinkedIn" },
  { href: `tel:${personalInfo.phone}`, icon: Phone, label: "Phone" },
  { href: `https://${personalInfo.website}`, icon: Globe, label: "Website" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section id="hero" className="mb-12 md:mb-16">
        <div className="flex items-start gap-5">
          {/* Profile Picture */}
          <FadeIn delay={0.1} direction="right">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-border/60 shadow-sm md:h-24 md:w-24">
              <Image
                src="/images/profile.png"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
                sizes="96px"
              />
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            <FadeIn delay={0.2} direction="up">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {personalInfo.name}
              </h1>
              <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-lg">
                {personalInfo.title}
              </p>
            </FadeIn>

            {/* Social / Contact Icons */}
            <FadeInStagger staggerDelay={0.1} className="flex items-center gap-2 flex-wrap mt-1">
              {socialLinks.map((link) => (
                <FadeInStaggerItem key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-muted/40 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:scale-105"
                    aria-label={link.label}
                  >
                    <link.icon size={15} weight="bold" />
                  </a>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* ── Profile Summary ───────────────────────────────────────── */}
      <section id="profile-summary" className="mb-12 md:mb-16">
        <FadeIn delay={0.1}>
          <SectionHeader title="Profile" />
          <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
            {profileSummary}
          </p>
        </FadeIn>
      </section>

      {/* ── Experience Preview ─────────────────────────────────────── */}
      <section id="experience-preview" className="mb-12 md:mb-16">
        <FadeIn delay={0.1}>
          <SectionHeader
            title="Experience"
            subtitle="Technical impact, infrastructure, and product delivery"
          />
        </FadeIn>

        <FadeInStagger staggerDelay={0.2}>
          {experience.slice(0, 1).map((entry) => (
            <FadeInStaggerItem key={entry.company}>
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
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.2}>
          <div className="mt-4 flex justify-end">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
            >
              View More
              <ArrowRight
                size={14}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Education ─────────────────────────────────────────────── */}
      <section id="education" className="mb-12 md:mb-16">
        <FadeIn delay={0.1}>
          <SectionHeader title="Education" />
        </FadeIn>
        
        <FadeInStagger staggerDelay={0.15} className="space-y-4">
          {education.map((edu) => (
            <FadeInStaggerItem key={edu.institution}>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {edu.institution}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {edu.degree} — {edu.score}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground shrink-0 font-mono">
                  {edu.duration}
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ── Competencies Grid ─────────────────────────────────────── */}
      <section id="competencies">
        <FadeIn delay={0.1}>
          <SectionHeader
            title="Technical Competencies"
            subtitle="Core technologies and infrastructure expertise"
          />
        </FadeIn>
        
        <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((category) => (
            <FadeInStaggerItem key={category.category}>
              <div className="h-full rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-4 transition-colors hover:border-border">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-3">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <SkillTag key={item} label={item} />
                  ))}
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ── Projects Preview ───────────────────────────────────────── */}
      <section id="projects-preview" className="mt-12 md:mt-16">
        <FadeIn delay={0.1}>
          <SectionHeader
            title="Projects"
            subtitle="Recent work and technical experiments"
          />
        </FadeIn>

        <FadeInStagger staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <FadeInStaggerItem key={project.title}>
              <ProjectCard project={project} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.2}>
          <div className="mt-6 flex justify-end">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
            >
              View More
              <ArrowRight
                size={14}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Contact Section ─────────────────────────────────────────── */}
      <section id="contact" className="mt-20 md:mt-32 mb-8">
        <FadeIn delay={0.1} className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            What's next?
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <p className="mb-8 max-w-md text-sm text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md border border-primary/50 bg-primary/10 px-8 py-3 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="opacity-70 text-primary/80">&gt;_</span>
              Say Hello
            </span>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
