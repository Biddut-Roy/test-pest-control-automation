import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import type { BlogPost } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
  className?: string;
};

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:border-brand/40 hover:shadow-md",
        featured && "lg:flex-row",
        className
      )}
    >
      <div
        className={cn(
          "relative bg-gradient-to-br from-brand-light to-brand/20",
          featured ? "lg:w-1/2" : "aspect-[16/9]"
        )}
      >
        <div className="flex h-full min-h-[180px] items-center justify-center p-8">
          <div className="text-center">
            <Badge variant="brand" className="mb-3">
              {post.category}
            </Badge>
            <p className="text-sm font-medium text-brand-dark/60">
              Featured Image Placeholder
            </p>
          </div>
        </div>
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:justify-center")}>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {post.readTime}
          </span>
        </div>
        <h3
          className={cn(
            "mt-3 font-semibold text-foreground group-hover:text-brand",
            featured ? "text-2xl" : "text-lg"
          )}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand"
        >
          Read Article
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function BlogPagination() {
  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex items-center justify-center gap-2"
    >
      <span className="rounded-md border bg-muted px-4 py-2 text-sm text-muted-foreground">
        Previous
      </span>
      {[1, 2, 3].map((page) => (
        <span
          key={page}
          className={cn(
            "flex size-10 items-center justify-center rounded-md text-sm font-medium",
            page === 1
              ? "bg-brand text-brand-foreground"
              : "border bg-card text-foreground hover:bg-accent"
          )}
        >
          {page}
        </span>
      ))}
      <span className="rounded-md border bg-card px-4 py-2 text-sm text-foreground hover:bg-accent">
        Next
      </span>
    </nav>
  );
}

export function BlogSearchPlaceholder() {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search articles..."
        disabled
        aria-label="Search blog articles (coming soon)"
        className="h-11 w-full rounded-md border bg-muted/50 px-4 text-sm text-muted-foreground"
      />
      <span className="absolute top-1/2 right-3 -translate-y-1/2 text-xs text-muted-foreground">
        Coming Soon
      </span>
    </div>
  );
}
