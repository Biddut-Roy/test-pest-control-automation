import { Users, Target, Heart, Award } from "lucide-react";

import { Breadcrumb } from "@/components/shared/breadcrumb";
import { CallButton } from "@/components/shared/call-button";
import { TrustBadgeSection } from "@/components/shared/trust-badge";
import { CTASection } from "@/components/sections/cta-section";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { companyValues, whyChooseUs } from "@/data/mock-data";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name}—locally owned pest control serving North Texas since ${siteConfig.foundedYear}. Licensed technicians, transparent pricing, and guaranteed results.`,
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbItems = [{ label: "About Us" }];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About Us", url: `${siteConfig.url}/about` },
        ]}
      />
      <section className="section-padding bg-gradient-to-b from-brand-light/40 to-background">
        <div className="container-narrow">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About {siteConfig.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              For over {new Date().getFullYear() - siteConfig.foundedYear} years,
              we&apos;ve protected North Texas homes and businesses with honest
              service, proven treatments, and a commitment to our community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  GreenShield Pest Solutions was founded in {siteConfig.foundedYear}{" "}
                  by a team of licensed entomologists and field technicians who
                  saw a gap in the market: too many pest control companies
                  prioritized sales over solutions.
                </p>
                <p>
                  We built GreenShield on a simple promise—identify the problem,
                  treat it effectively, and stand behind our work. Today, we serve
                  thousands of residential and commercial customers across Plano,
                  Frisco, McKinney, and surrounding communities.
                </p>
                <p>
                  Every technician on our team is state-licensed,
                  background-checked, and trained in integrated pest management
                  principles that minimize chemical use while maximizing results.
                </p>
              </div>
            </div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border bg-muted/50">
              <p className="text-sm font-medium text-muted-foreground">
                Company Photo Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-brand-light text-brand">
              <Target className="size-7" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              To deliver effective, responsible pest control that protects
              families, pets, and properties—while treating every customer with
              the respect and transparency they deserve.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Our Values
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-light text-brand">
                  <Heart className="size-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark text-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-white/10">
                <Award className="size-7" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Why Customers Trust Us
              </h2>
              <p className="mt-4 text-lg text-white/80">
                We earn trust through consistent results, clear communication,
                and a guarantee that stands behind every treatment.
              </p>
              <div className="mt-8">
                <CallButton />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <TrustBadgeSection />
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-brand-light text-brand">
              <Users className="size-7" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our licensed technicians and support staff are the backbone of
              GreenShield. Team profiles coming soon.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Mark Henderson", "Lisa Torres", "David Nguyen", "Rachel Kim"].map(
              (name) => (
                <div
                  key={name}
                  className="overflow-hidden rounded-xl border bg-card shadow-sm"
                >
                  <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-brand-light to-brand/10">
                    <Users className="size-12 text-brand/40" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-semibold text-foreground">{name}</p>
                    <p className="text-sm text-muted-foreground">
                      Licensed Technician
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
