import Link from "next/link";
import { notFound } from "next/navigation";
import { Bug, MapPin, ShieldCheck } from "lucide-react";

import { Breadcrumb } from "@/components/shared/breadcrumb";
import { CallButton } from "@/components/shared/call-button";
import { ContactForm } from "@/components/shared/contact-form";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ReviewSection } from "@/components/sections/review-section";
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  LocalBusinessJsonLd,
} from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import {
  cityBenefits,
  cityPestProblems,
  getCityFaqs,
  getServiceArea,
  reviews,
  serviceAreas,
} from "@/data/mock-data";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { capitalizeWords } from "@/lib/utils";

type PageProps = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { city } = await params;
  const area = getServiceArea(city);

  if (!area) return {};

  return createMetadata({
    title: `Pest Control in ${area.city}, ${area.stateCode}`,
    description: `Professional pest control in ${area.city}, ${area.stateCode}. ${siteConfig.name} offers free inspections, same-day service, and guaranteed results for homes and businesses.`,
    path: `/pest-control/${area.slug}`,
  });
}

export default async function CityLandingPage({ params }: PageProps) {
  const { city } = await params;
  const area = getServiceArea(city);

  if (!area) notFound();

  const cityFaqs = getCityFaqs(area.city);
  const pageUrl = `${siteConfig.url}/pest-control/${area.slug}`;

  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
          {
            name: `${area.city}, ${area.stateCode}`,
            url: pageUrl,
          },
        ]}
      />
      <FAQPageJsonLd faqs={cityFaqs} />

      <section className="section-padding bg-gradient-to-br from-brand-light/60 via-background to-background">
        <div className="container-narrow">
          <Breadcrumb
            items={[
              { label: "Service Areas", href: "/service-areas" },
              { label: `${area.city}, ${area.stateCode}` },
            ]}
            className="mb-6"
          />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 inline-flex items-center rounded-full border border-brand/20 bg-brand-light/50 px-4 py-1.5 text-sm font-medium text-brand-dark">
                {area.responseTime} service · {siteConfig.license}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Pest Control in {area.city}, {area.stateCode}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Trusted local pest control for {area.city} homeowners, property
                managers, and businesses. Free inspections, licensed technicians,
                and guaranteed results.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CallButton size="xl" />
                <Button asChild variant="brand-outline" size="xl">
                  <Link href="/contact">Request Free Inspection</Link>
                </Button>
              </div>
            </div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border bg-gradient-to-br from-brand-light to-brand/10">
              <div className="text-center">
                <MapPin className="mx-auto size-12 text-brand/40" />
                <p className="mt-3 font-medium text-muted-foreground">
                  {area.city}, {area.stateCode} Service Area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Why {area.city} Chooses GreenShield
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cityBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border bg-card p-6 shadow-sm"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand-light text-brand">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Common Pest Problems in {area.city}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Our {area.city} technicians treat the pests most commonly found in
            local homes and commercial properties.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {cityPestProblems.map((pest) => (
              <div
                key={pest.name}
                className="flex gap-4 rounded-xl border bg-card p-6 shadow-sm"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                  <Bug className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{pest.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Local Experts Who Know {area.city}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We&apos;ve treated hundreds of properties in {area.city} and
                understand the unique pest pressures in your neighborhood—from
                new construction gaps to mature landscaping that attracts
                rodents and mosquitoes.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free property inspections",
                  "Same-day emergency response",
                  "Eco-conscious treatment options",
                  "No long-term contracts required",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <ShieldCheck className="size-5 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm
              title={`Schedule Service in ${area.city}`}
              description={`Request your free inspection in ${area.city}, ${area.stateCode}. We'll respond within one business hour.`}
              compact
            />
          </div>
        </div>
      </section>

      <ReviewSection
        reviews={reviews.slice(0, 3)}
        title={`${area.city} Customer Reviews`}
        description={`See why ${area.city} homeowners and businesses trust GreenShield Pest Solutions.`}
      />

      <FAQSection
        faqs={cityFaqs}
        title={`${area.city} Pest Control FAQ`}
        description={`Common questions about pest control services in ${area.city}, ${area.stateCode}.`}
      />

      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold text-foreground">
            {area.city} Service Coverage Map
          </h2>
          <div className="mt-8 flex aspect-[21/9] items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20 bg-background">
            <div className="text-center">
              <MapPin className="mx-auto size-10 text-brand/40" />
              <p className="mt-3 font-medium text-muted-foreground">
                {capitalizeWords(area.slug.replace("-tx", ""))} Map Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Call for Pest Control in ${area.city}`}
        description={`Protect your ${area.city} property today. Free inspections, ${area.responseTime?.toLowerCase()} service, and guaranteed results.`}
      />
    </>
  );
}
