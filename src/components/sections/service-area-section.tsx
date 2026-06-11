import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { serviceAreas } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceAreaSectionProps = {
  title?: string;
  description?: string;
  limit?: number;
  showViewAll?: boolean;
  className?: string;
};

export function ServiceAreaSection({
  title = "Areas We Serve",
  description = "Professional pest control across North Texas communities. Fast response times and local technicians who know your neighborhood.",
  limit = 6,
  showViewAll = true,
  className,
}: ServiceAreaSectionProps) {
  const areas = serviceAreas.slice(0, limit);

  return (
    <section className={cn("section-padding", className)}>
      <div className="container-narrow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          </div>
          {showViewAll && (
            <Button asChild variant="brand-outline">
              <Link href="/service-areas">
                View All Areas
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          )}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/pest-control/${area.slug}`}
              className="group flex items-center gap-4 rounded-xl border bg-card p-5 shadow-sm transition-all hover:border-brand hover:shadow-md"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {area.city}, {area.stateCode}
                </p>
                <p className="text-sm text-muted-foreground">
                  {area.responseTime} response
                </p>
              </div>
              <ArrowRight className="ml-auto size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaCard({
  slug,
  city,
  stateCode,
  responseTime,
  population,
}: {
  slug: string;
  city: string;
  stateCode: string;
  responseTime?: string;
  population?: string;
}) {
  return (
    <Link
      href={`/pest-control/${slug}`}
      className="group flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all hover:border-brand hover:shadow-md"
    >
      <div className="flex size-12 items-center justify-center rounded-lg bg-brand-light text-brand">
        <MapPin className="size-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">
        {city}, {stateCode}
      </h3>
      {population && (
        <p className="mt-1 text-sm text-muted-foreground">
          Population: {population}
        </p>
      )}
      {responseTime && (
        <p className="mt-1 text-sm font-medium text-brand">{responseTime} service</p>
      )}
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
        View local services
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
