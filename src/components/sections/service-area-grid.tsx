"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { ServiceAreaCard } from "@/components/sections/service-area-section";
import { Input } from "@/components/ui/input";
import { serviceAreas } from "@/data/mock-data";

export function ServiceAreaGrid() {
  const [query, setQuery] = useState("");

  const filteredAreas = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return serviceAreas;

    return serviceAreas.filter(
      (area) =>
        area.city.toLowerCase().includes(normalized) ||
        area.state.toLowerCase().includes(normalized) ||
        area.stateCode.toLowerCase().includes(normalized) ||
        area.slug.includes(normalized.replace(/\s+/g, "-"))
    );
  }, [query]);

  return (
    <section className="section-padding pt-0">
      <div className="container-narrow">
        <div className="relative mx-auto mb-8 max-w-md">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by city or state..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            aria-label="Search service areas"
          />
        </div>
        <p className="mb-6 text-sm text-muted-foreground">
          Showing {filteredAreas.length} of {serviceAreas.length} cities served
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAreas.map((area) => (
            <ServiceAreaCard
              key={area.slug}
              slug={area.slug}
              city={area.city}
              stateCode={area.stateCode}
              responseTime={area.responseTime}
              population={area.population}
            />
          ))}
        </div>
        {filteredAreas.length === 0 && (
          <div className="rounded-xl border bg-muted/40 py-12 text-center">
            <p className="text-muted-foreground">
              No cities match your search. Try a different name or{" "}
              <a href="/contact" className="text-brand hover:underline">
                contact us
              </a>{" "}
              to confirm service availability.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
