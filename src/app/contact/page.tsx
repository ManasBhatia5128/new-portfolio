"use client";

import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";

interface ContactLink {
  href: string;
  icon: typeof EnvelopeSimple;
  label: string;
  value: string;
}

const contactLinks: ContactLink[] = [
  {
    href: `mailto:${personalInfo.email}`,
    icon: EnvelopeSimple,
    label: "Email",
    value: personalInfo.email,
  },
  {
    href: personalInfo.linkedin,
    icon: LinkedinLogo,
    label: "LinkedIn",
    value: "linkedin.com/in/manasbhatia",
  },
  {
    href: personalInfo.github,
    icon: GithubLogo,
    label: "GitHub",
    value: "github.com/manasbhatia",
  },
  {
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
  },
];

const inputClasses = cn(
  "w-full rounded-md border border-border/60 bg-muted/30 px-3 py-2.5",
  "text-sm text-foreground placeholder:text-muted-foreground/50",
  "transition-colors duration-200",
  "focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder — wire to Server Action or API route
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <SectionHeader
        title="Contact"
        subtitle="Reach out for collaboration, opportunities, or just to say hello"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* ── Contact Form ──────────────────────────────────────── */}
        <div className="rounded-lg border border-border/60 bg-card/50 p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <PaperPlaneTilt
                  size={20}
                  weight="bold"
                  className="text-primary"
                />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">
                Message sent!
              </h3>
              <p className="text-xs text-muted-foreground">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className={cn(inputClasses, "resize-none")}
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                <PaperPlaneTilt size={14} weight="bold" />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* ── Direct Outreach Links ─────────────────────────────── */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-6">
            Prefer a direct channel? Pick your preferred way to connect.
          </p>

          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center gap-4 rounded-lg border border-border/60 bg-card/50 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted/50 text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                <link.icon size={18} weight="bold" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-0.5">
                  {link.label}
                </p>
                <p className="text-sm text-foreground truncate">{link.value}</p>
              </div>
            </a>
          ))}

          {/* Availability status */}
          <div className="mt-6 rounded-lg border border-border/60 bg-card/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-foreground">
                Available for opportunities
              </span>
            </div>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              Currently open to SDE internships, freelance projects, and
              technical collaborations. Response time: usually within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
