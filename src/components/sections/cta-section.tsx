import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { CallButton } from "@/components/shared/call-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
  variant?: "default" | "brand" | "dark";
  className?: string;
};

export function CTASection({
  title = "Ready to Protect Your Property?",
  description = "Schedule your free inspection today. Our licensed technicians are standing by to help you reclaim your space from unwanted pests.",
  primaryLabel = "Request Free Inspection",
  primaryHref = "/contact",
  showPhone = true,
  variant = "brand",
  className,
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "section-padding",
        variant === "brand" && "bg-brand text-brand-foreground",
        variant === "dark" && "bg-brand-dark text-white",
        variant === "default" && "bg-muted/40",
        className
      )}
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight sm:text-4xl",
              variant === "default" && "text-foreground"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mt-4 text-lg",
              variant === "default"
                ? "text-muted-foreground"
                : "text-white/90"
            )}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="xl"
              variant={variant === "default" ? "brand" : "secondary"}
              className={cn(
                isDark && "bg-white text-brand-dark hover:bg-white/90"
              )}
            >
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            {showPhone && (
              <CallButton
                variant={variant === "default" ? "phone" : "outline"}
                size="xl"
                className={cn(
                  variant !== "default" &&
                    "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                )}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterCTA() {
  return (
    <CTASection
      variant="dark"
      title="Don't Let Pests Take Over"
      description="Call GreenShield Pest Solutions now or request your complimentary inspection online. Same-day service available."
    />
  );
}

export function InlineCTA({
  title,
  href = "/contact",
}: {
  title: string;
  href?: string;
}) {
  return (
    <div className="my-8 flex flex-col items-start gap-4 rounded-xl border border-brand/20 bg-brand-light/30 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Free inspection · No obligation · Same-day availability
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="brand" size="lg">
          <Link href={href}>
            Get Started
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="tel:5552477378">
            <Phone className="size-4" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  );
}
