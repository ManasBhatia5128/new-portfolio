import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "@phosphor-icons/react/dist/ssr";
import ReactMarkdown from "react-markdown";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import type { Metadata } from "next";



type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  await connectToDatabase();
  const post = await Blog.findOne({ slug: resolvedParams.slug }).lean();

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} — Manas Bhatia`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  await connectToDatabase();
  const post = await Blog.findOne({ slug: resolvedParams.slug }).lean();

  if (!post) {
    notFound();
  }

  const readingTime = Math.ceil((post.content?.split(' ').length || 0) / 200) + ' min read';

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <div className="mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>

          {post.coverImage && (
            <div className="w-full relative h-64 md:h-96 rounded-xl overflow-hidden mt-6 mb-8">
              <img src={post.coverImage} alt={post.title} className="object-cover w-full h-full" />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.createdAt?.toISOString()}>
              {new Date(post.createdAt || new Date()).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{readingTime}</span>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap pt-2">
              <Tag size={14} className="text-muted-foreground" />
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-muted/50 text-muted-foreground px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-headings:font-bold prose-img:rounded-lg prose-img:border prose-img:border-border/50 max-w-none">
        <ReactMarkdown
          components={{
            img: (props) => (
              <img
                src={props.src}
                alt={props.alt || ''}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
