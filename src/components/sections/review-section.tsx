import type { Review } from "@/data/mock-data";
import { Star, Quote } from "lucide-react";

import { cn } from "@/lib/utils";

type ReviewSectionProps = {
  reviews: Review[];
  title?: string;
  description?: string;
  className?: string;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}

export function ReviewSection({
  reviews,
  title = "What Our Customers Say",
  description = "Trusted by thousands of homeowners and businesses across North Texas.",
  className,
}: ReviewSectionProps) {
  return (
    <section className={cn("section-padding bg-muted/40", className)}>
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="relative flex flex-col rounded-xl border bg-card p-6 shadow-sm"
            >
              <Quote className="absolute top-4 right-4 size-8 text-brand/20" />
              <StarRating rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">
                  {review.location} · {review.service}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{review.date}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
