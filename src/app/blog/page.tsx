import type { Metadata } from "next";
import { Clock, Tag } from "@phosphor-icons/react/dist/ssr";
import { blogPosts } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Blog — Manas Bhatia",
  description:
    "Technical deep-dives on cloud infrastructure, AI/ML pipelines, and full-stack engineering.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <SectionHeader
        title="Blog"
        subtitle="Technical deep-dives and engineering notes"
      />

      {/* Status indicator */}
      <div className="mb-8 flex items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-4 py-2.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-xs text-primary font-medium">
          Posts are in draft — publishing soon. Below is a preview of upcoming content.
        </span>
      </div>

      {/* Blog post list */}
      <div className="space-y-1">
        {blogPosts.map((post, index) => (
          <article
            key={post.slug}
            className="group relative rounded-lg border border-transparent px-5 py-5 transition-all duration-200 hover:border-border/60 hover:bg-card/50"
          >
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              {/* Date column */}
              <div className="shrink-0 mb-2 md:mb-0 md:w-28">
                <time className="text-xs font-mono text-muted-foreground/70">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-1.5">
                  {post.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  {/* Reading time */}
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground/60">
                    <Clock size={11} weight="bold" />
                    {post.readingTime}
                  </span>

                  {/* Tags */}
                  <div className="flex items-center gap-1.5">
                    <Tag
                      size={11}
                      weight="bold"
                      className="text-muted-foreground/60"
                    />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-muted-foreground/60 bg-muted/50 px-1.5 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            {index < blogPosts.length - 1 && (
              <div className="absolute bottom-0 left-5 right-5 h-px bg-border/30 group-hover:bg-transparent" />
            )}
          </article>
        ))}
      </div>

      {/* Terminal-style coming soon */}
      <div className="mt-12 rounded-lg border border-border/60 bg-card/50 p-6">
        <div className="flex items-center gap-1.5 mb-4">
          <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-chart-4" />
          <div className="h-2.5 w-2.5 rounded-full bg-chart-2" />
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          <p className="mb-1">
            <span className="text-primary">~/blog</span>{" "}
            <span className="text-foreground/60">$</span> ls --upcoming
          </p>
          <p className="text-muted-foreground/50">
            → Building production RAG pipelines{" "}
            <span className="text-muted-foreground/30">[draft]</span>
          </p>
          <p className="text-muted-foreground/50">
            → AWS Amplify deployment guide{" "}
            <span className="text-muted-foreground/30">[draft]</span>
          </p>
          <p className="text-muted-foreground/50">
            → B2B API design with Supabase{" "}
            <span className="text-muted-foreground/30">[draft]</span>
          </p>
          <p className="mt-2">
            <span className="text-primary">~/blog</span>{" "}
            <span className="text-foreground/60">$</span>{" "}
            <span className="animate-pulse">▊</span>
          </p>
        </div>
      </div>
    </div>
  );
}
