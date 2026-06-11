import { Breadcrumb } from "@/components/shared/breadcrumb";
import { ServiceAreaGrid } from "@/components/sections/service-area-grid";
import { CTASection } from "@/components/sections/cta-section";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Service Areas",
  description: `Find pest control services in your North Texas city. ${siteConfig.name} serves Plano, Frisco, McKinney, Allen, and surrounding communities.`,
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
        ]}
      />
      <section className="section-padding bg-gradient-to-b from-brand-light/40 to-background">
        <div className="container-narrow">
          <Breadcrumb items={[{ label: "Service Areas" }]} className="mb-6" />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Service Areas
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              GreenShield Pest Solutions serves homeowners and businesses across
              North Texas. Find your city below for local pest control services.
            </p>
          </div>
        </div>
      </section>

      <ServiceAreaGrid />

      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <div className="flex aspect-[21/9] items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20 bg-background">
            <div className="text-center">
              <p className="font-medium text-muted-foreground">
                Service Area Map Placeholder
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                50-mile radius from Plano, TX
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your City?"
        description="We may still serve your area. Contact us to confirm availability and schedule your free inspection."
      />
    </>
  );
}
