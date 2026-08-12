import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, User, CheckCircle2, Share2, HelpCircle, ArrowRight, Quote } from "lucide-react";
import type { Metadata } from "next";
import Script from "next/script";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
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

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorTitle,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Corenova Technology Ltd",
      "logo": "https://corenovatechnology.com/corenova-logo-dark.svg",
    },
    "datePublished": post.date,
    "mainEntityOfPage": `https://corenovatechnology.com/blog/${post.slug}`,
  };

  // FAQ Schema
  const faqSchema = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

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
        const text = trimmed.replace("## ", "");
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        elements.push(
          <h2 key={key++} id={id} className="text-2xl font-heading font-bold mt-10 mb-4 text-foreground scroll-mt-28">
            {text}
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
            className="text-muted-foreground leading-relaxed mb-4 text-base"
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

  const shareUrl = `https://corenovatechnology.com/blog/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <main className="pt-32 pb-24 bg-background">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="container mx-auto px-6 max-w-4xl">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">{post.title}</span>
        </div>

        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">Published Article</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-6 leading-tight text-foreground">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border/50">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2 font-medium text-foreground">
              <User size={15} className="text-primary" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          {/* Share Links */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-1">
              <Share2 size={12} /> Share:
            </span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card border border-border/50 hover:text-primary transition-colors text-xs font-medium"
              title="Share on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card border border-border/50 hover:text-primary transition-colors text-xs font-medium"
              title="Share on Twitter / X"
            >
              X / Twitter
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        {post.executiveSummary && (
          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 mb-12 relative overflow-hidden">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Executive Summary</h3>
            <p className="text-base text-foreground leading-relaxed font-medium">
              {post.executiveSummary}
            </p>
          </div>
        )}

        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <div className="p-6 rounded-2xl bg-card border border-border/50 mb-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Table of Contents</h3>
            <ul className="space-y-2 text-sm">
              {post.tableOfContents.map((toc, idx) => {
                const id = toc.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <li key={idx}>
                    <a href={`#${id}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <span className="text-primary/60 font-mono text-xs">0{idx + 1}.</span>
                      <span>{toc}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Main Article Content */}
        <div className="prose-custom mb-12">{renderContent(post.content)}</div>

        {/* Stats Cards */}
        {post.stats && post.stats.length > 0 && (
          <div className="my-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Industry Telemetry & Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {post.stats.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50 text-center">
                  <span className="text-3xl font-heading font-black text-primary block mb-1">{stat.value}</span>
                  <span className="text-xs font-bold text-foreground block mb-1">{stat.label}</span>
                  <span className="text-[11px] text-muted-foreground leading-tight block">{stat.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Study Box */}
        {post.caseStudy && (
          <div className="p-8 rounded-3xl bg-card border border-border/50 my-12 relative overflow-hidden">
            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
              Real-World Implementation Case
            </span>
            <h3 className="text-xl font-heading font-bold mb-4">{post.caseStudy.title}</h3>
            <div className="space-y-3 text-xs text-muted-foreground mb-4">
              <p><strong className="text-foreground">Challenge:</strong> {post.caseStudy.challenge}</p>
              <p><strong className="text-foreground">Solution:</strong> {post.caseStudy.solution}</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border/40 text-xs font-bold text-primary flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-400" />
              <span>Result: {post.caseStudy.result}</span>
            </div>
          </div>
        )}

        {/* Quote Box */}
        {post.quote && (
          <div className="p-8 rounded-3xl bg-card/60 border-l-4 border-primary my-12 relative">
            <Quote className="text-primary/30 absolute top-4 right-4" size={40} />
            <p className="text-lg font-heading font-medium italic text-foreground mb-4 leading-relaxed">
              &quot;{post.quote.text}&quot;
            </p>
            <p className="text-xs font-bold text-primary">— {post.quote.author}</p>
          </div>
        )}

        {/* Key Takeaways */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="p-8 rounded-3xl bg-card border border-border/50 my-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Key Strategic Takeaways</h3>
            <div className="space-y-3">
              {post.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 size={16} className="text-green-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs Accordion */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="my-12">
            <h3 className="text-2xl font-heading font-bold mb-6 text-foreground flex items-center gap-2">
              <HelpCircle className="text-primary" size={20} />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50">
                  <h4 className="font-heading font-bold text-base text-foreground mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Author Box */}
        <div className="p-8 rounded-3xl bg-card border border-border/50 my-12 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-border relative select-none">
            <img
              src="/michael-olowoselu.jpg"
              alt={post.author}
              className="w-full h-full object-cover object-top pointer-events-none select-none"
            />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Article Author</span>
            <h4 className="text-lg font-heading font-bold text-foreground">{post.author}</h4>
            <p className="text-xs text-primary font-medium mb-2">{post.authorTitle}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Michael is a technology visionary specializing in AI automation pipelines and cybersecurity operations. He leads Corenova Technology Ltd in building secure digital solutions for global enterprises.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-border/50">
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

        {/* Related Services */}
        {post.relatedServices && post.relatedServices.length > 0 && (
          <div className="p-6 rounded-2xl bg-card border border-border/50 mb-12">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Related Corenova Capabilities</h4>
            <div className="flex flex-wrap gap-3">
              {post.relatedServices.map((srv, idx) => (
                <Link
                  key={idx}
                  href={srv.link}
                  className="px-4 py-2 rounded-xl bg-background border border-border/60 text-xs font-medium text-foreground hover:border-primary/50 transition-colors flex items-center gap-1.5"
                >
                  <span>{srv.name}</span>
                  <ArrowRight size={12} className="text-primary" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Box */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-primary/20 text-center relative overflow-hidden">
          <h3 className="text-2xl font-heading font-bold mb-3">Ready to implement these solutions for your business?</h3>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6">
            Schedule a free, confidential technical consultation with our engineering leadership.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-colors"
          >
            Book Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </article>
    </main>
  );
}
