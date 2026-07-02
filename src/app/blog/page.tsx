import type { Metadata } from "next";
import { Clock, Tag } from "@phosphor-icons/react/dist/ssr";
import { SectionHeader } from "@/components/section-header";
import Link from "next/link";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const metadata: Metadata = {
  title: "Blog — Manas Bhatia",
  description:
    "Technical deep-dives on cloud infrastructure, AI/ML pipelines, and full-stack engineering.",
};

export const dynamic = "force-dynamic"; // Ensure fresh data from DB

export default async function BlogPage() {
  await connectToDatabase();
  const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <SectionHeader
        title="Blog"
        subtitle="Technical deep-dives and engineering notes"
      />

      {/* Blog post list */}
      <div className="space-y-1">
        {blogs.length === 0 ? (
          <p className="text-muted-foreground text-sm py-4">No published blogs found.</p>
        ) : (
          blogs.map((post: any, index: number) => {
            const readingTime = Math.ceil((post.content?.split(' ').length || 0) / 200) + ' min read';
            
            return (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="block group relative rounded-lg border border-transparent px-5 py-5 transition-all duration-200 hover:border-border/60 hover:bg-card/50 hover:backdrop-blur-sm">
                <article>
                  <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                    {/* Date column */}
                    <div className="shrink-0 mb-2 md:mb-0 md:w-28">
                      <time className="text-xs font-mono text-muted-foreground/70">
                        {new Date(post.createdAt || new Date()).toLocaleDateString("en-US", {
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
                          {readingTime}
                        </span>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex items-center gap-1.5">
                            <Tag
                              size={11}
                              weight="bold"
                              className="text-muted-foreground/60"
                            />
                            {post.tags.map((tag: string) => (
                              <span
                                key={tag}
                                className="text-[10px] font-medium text-muted-foreground/60 bg-muted/50 px-1.5 py-0.5 rounded-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  {index < blogs.length - 1 && (
                    <div className="absolute bottom-0 left-5 right-5 h-px bg-border/30 group-hover:bg-transparent" />
                  )}
                </article>
              </Link>
            )
          })
        )}
      </div>

      {/* Terminal-style coming soon */}
      <div className="mt-12 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm p-6">
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
