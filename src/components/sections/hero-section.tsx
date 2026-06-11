import Link from "next/link";
import {
  ArrowRight,
  Bug,
  Building2,
  Home,
  Shield,
  Rat,
  Squirrel,
} from "lucide-react";

import {
  howItWorksSteps,
  pestTypes,
  services,
  whyChooseUs,
} from "@/data/mock-data";
import { CallButton } from "@/components/shared/call-button";
import { TrustBadgeStrip } from "@/components/shared/trust-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  building: Building2,
  shield: Shield,
  rat: Rat,
  bug: Bug,
  squirrel: Squirrel,
};

type HeroSectionProps = {
  headline?: string;
  subheadline?: string;
  showTrustStrip?: boolean;
  className?: string;
};

export function HeroSection({
  headline = "North Texas Pest Control You Can Trust",
  subheadline = "Protect your home, family, and business with licensed, local technicians who deliver real results—not empty promises.",
  showTrustStrip = true,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-brand-light/60 via-background to-background section-padding",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,oklch(0.42_0.12_155/0.08),transparent_50%)]" />
      <div className="container-narrow relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-brand/20 bg-brand-light/50 px-4 py-1.5 text-sm font-medium text-brand-dark">
            Serving North Texas Since {siteConfig.foundedYear} · {siteConfig.license}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CallButton size="xl" />
            <Button asChild variant="brand-outline" size="xl">
              <Link href="/contact">
                Request Free Inspection
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
          {showTrustStrip && (
            <div className="mt-12 border-t pt-8">
              <TrustBadgeStrip />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ServicesOverviewSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Pest Control Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From one-time treatments to year-round protection, we have solutions
            for every property type and pest challenge.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? Bug;
            return (
              <article
                key={service.id}
                className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Homeowners Choose GreenShield
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re not a national call center. We&apos;re your neighbors—locally
              owned, fully licensed, and committed to solving pest problems the
              right way.
            </p>
            <div className="mt-8">
              <CallButton />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-card p-5 shadow-sm"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting pest-free is simple. Here&apos;s what to expect from your first
            call to ongoing protection.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand text-xl font-bold text-brand-foreground">
                {step.step}
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PestTypesSection() {
  return (
    <section className="section-padding bg-brand-dark text-white">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pests We Eliminate
          </h2>
          <p className="mt-4 text-lg text-white/80">
            North Texas is home to dozens of pest species. Our technicians are
            trained to identify and treat them all.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pestTypes.map((pest) => (
            <div
              key={pest.id}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{pest.name}</h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                  {pest.season}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/70">{pest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
