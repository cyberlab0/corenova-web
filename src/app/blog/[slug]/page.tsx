import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, User } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Convert markdown-like content to HTML sections
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let key = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-2 text-muted-foreground mb-6 pl-4">
            {currentList.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={key++} className="text-2xl font-heading font-bold mt-10 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={key++} className="text-xl font-heading font-semibold mt-8 mb-3 text-primary">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("* ")) {
        currentList.push(trimmed.replace("* ", ""));
      } else if (trimmed === "") {
        flushList();
      } else {
        flushList();
        elements.push(
          <p
            key={key++}
            className="text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
            }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <main className="pt-32 pb-24">
      <article className="container mx-auto px-6 max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to all articles
        </Link>

        {/* Category */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-10 pb-10 border-b border-border/50">
          <span className="flex items-center gap-2">
            <User size={14} />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Content */}
        <div className="prose-custom">{renderContent(post.content)}</div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border/50">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-xs text-muted-foreground border border-border/50"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-card border border-border/50 text-center">
          <h3 className="text-xl font-heading font-bold mb-3">
            Need help with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {post.category}
            </span>
            ?
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Our experts are ready to help you implement these solutions for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-colors"
          >
            Get in Touch
            <ArrowLeft size={14} className="rotate-180" />
          </Link>
        </div>
      </article>
    </main>
  );
}
