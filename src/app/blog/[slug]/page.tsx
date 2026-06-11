import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";

import { Breadcrumb } from "@/components/shared/breadcrumb";
import { BlogCard } from "@/components/blog/blog-card";
import { InlineCTA } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/mock-data";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function renderMarkdownContent(content: string) {
  const sections = content.split("\n## ").filter(Boolean);

  return sections.map((section) => {
    const [heading, ...body] = section.split("\n");
    const id = heading
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    const cleanHeading = heading.replace(/^#+\s*/, "");

    return (
      <section key={id} id={id} className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-foreground">{cleanHeading}</h2>
        <div className="mt-4 space-y-4 text-muted-foreground">
          {body
            .join("\n")
            .split("\n")
            .filter((line) => line.trim())
            .map((paragraph, i) => {
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc space-y-2 pl-6">
                    <li>{paragraph.replace("- ", "")}</li>
                  </ul>
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
        </div>
      </section>
    );
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug);
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        author={post.author}
        publishedAt={post.publishedAt}
        url={postUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url: postUrl },
        ]}
      />
      {post.faqs && <FAQPageJsonLd faqs={post.faqs} />}

      <section className="section-padding bg-gradient-to-b from-brand-light/40 to-background">
        <div className="container-narrow">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
            className="mb-6"
          />
          <div className="mx-auto max-w-3xl">
            <Badge variant="brand">{post.category}</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="size-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex aspect-[21/9] items-center justify-center bg-gradient-to-br from-brand-light to-brand/20">
        <p className="text-sm font-medium text-brand-dark/60">
          Featured Image Placeholder
        </p>
      </div>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="font-semibold text-foreground">Table of Contents</h2>
                <nav className="mt-4">
                  <ul className="space-y-2">
                    {post.tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-muted-foreground transition-colors hover:text-brand"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <article className="prose-custom lg:col-span-3">
              <div className="space-y-10">{renderMarkdownContent(post.content)}</div>
              <InlineCTA title="Need professional help with this pest issue?" />
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <div className="flex items-start gap-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
              <User className="size-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-brand">Written by</p>
              <h3 className="text-xl font-semibold text-foreground">{post.author}</h3>
              <p className="text-muted-foreground">{post.authorRole}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {post.author} is a licensed pest control professional with over
                10 years of experience serving North Texas homes and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {post.faqs && post.faqs.length > 0 && (
        <FAQSection
          faqs={post.faqs}
          title="Article FAQ"
          description="Common questions related to this topic."
        />
      )}

      {relatedPosts.length > 0 && (
        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="text-2xl font-bold text-foreground">Related Articles</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="text-sm font-medium text-brand hover:underline"
              >
                View all articles →
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Protect Your Property Today"
        description="Don't wait for a small pest problem to become a major infestation. Schedule your free inspection now."
      />
    </>
  );
}
