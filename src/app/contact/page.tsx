"use client";

import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { useState, useTransition } from "react";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";
import { sendContactEmail } from "@/actions/contact";

function ErrorTooltip({ message, isTextArea = false }: { message: string, isTextArea?: boolean }) {
  return (
    <div className={cn("absolute right-3 z-20 animate-in fade-in zoom-in-95 duration-200", isTextArea ? "top-3" : "top-1/2 -translate-y-1/2")}>
      <div className="flex h-5 w-5 cursor-help items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-sm">
        <span className="text-xs font-bold">!</span>
      </div>
      <div className={cn(
        "pointer-events-none absolute right-[-8px] w-max max-w-[220px] rounded-md bg-foreground px-3 py-2 text-xs text-background shadow-xl",
        isTextArea ? "top-full mt-2" : "bottom-full mb-2"
      )}>
        {message}
        <div className={cn(
          "absolute right-2 h-2 w-2 rotate-45 bg-foreground",
          isTextArea ? "-top-1" : "-bottom-1"
        )}></div>
      </div>
    </div>
  );
}

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
    value: "linkedin.com/in/manas-bhatia",
  },
  {
    href: personalInfo.github,
    icon: GithubLogo,
    label: "GitHub",
    value: "github.com/manasbhatia5128",
  },
  {
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
  },
];

const inputClasses = cn(
  "w-full rounded-md border border-gray-600 border-width-4 bg-muted/30 px-3 py-2.5",
  "text-sm text-foreground placeholder:text-muted-foreground/50",
  "transition-colors duration-200",
  "focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [globalError, setGlobalError] = useState("");
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: [] }));
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    startTransition(async () => {
      setErrors({});
      setGlobalError("");
      
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));

      const result = await sendContactEmail(formDataToSend);

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else if (result.message) {
          setGlobalError(result.message);
        }
      }
    });
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <SectionHeader
        title="Contact"
        subtitle="Reach out for collaboration, opportunities, or just to say hello"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* ── Contact Form ──────────────────────────────────────── */}
        <div className="rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-6">
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
              {globalError && (
                <div className="rounded-md bg-destructive/10 p-3 text-xs text-destructive border border-destructive/20">
                  {globalError}
                </div>
              )}
              
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1.5"
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    disabled={isPending}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={cn(inputClasses, errors.name && "border-destructive/50 focus:border-destructive pr-10")}
                  />
                  {errors.name && <ErrorTooltip message={errors.name[0]} />}
                </div>
              </div>
              
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1.5"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    disabled={isPending}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={cn(inputClasses, errors.email && "border-destructive/50 focus:border-destructive pr-10")}
                  />
                  {errors.email && <ErrorTooltip message={errors.email[0]} />}
                </div>
              </div>
              
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1.5"
                >
                  Subject
                </label>
                <div className="relative">
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    disabled={isPending}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={cn(inputClasses, errors.subject && "border-destructive/50 focus:border-destructive pr-10")}
                  />
                  {errors.subject && <ErrorTooltip message={errors.subject[0]} />}
                </div>
              </div>
              
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1.5"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    disabled={isPending}
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your message..."
                    className={cn(inputClasses, "resize-none", errors.message && "border-destructive/50 focus:border-destructive pr-10")}
                  />
                  {errors.message && <ErrorTooltip message={errors.message[0]} isTextArea />}
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PaperPlaneTilt size={14} weight="bold" className={cn(isPending && "animate-pulse")} />
                {isPending ? "Sending..." : "Send Message"}
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
              className="group flex items-center gap-4 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
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
          <div className="mt-6 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-4">
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
