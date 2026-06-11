import {
  HeroSection,
  HowItWorksSection,
  PestTypesSection,
  ServicesOverviewSection,
  WhyChooseUsSection,
} from "@/components/sections/hero-section";
import { CTASection, FooterCTA } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ReviewSection } from "@/components/sections/review-section";
import { ServiceAreaSection } from "@/components/sections/service-area-section";
import { TrustBadgeSection } from "@/components/shared/trust-badge";
import { ContactForm } from "@/components/shared/contact-form";
import { FAQPageJsonLd } from "@/components/seo/json-ld";
import { faqs, reviews } from "@/data/mock-data";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Professional Pest Control in North Texas",
  description:
    "GreenShield Pest Solutions offers licensed residential and commercial pest control across Plano, Frisco, McKinney, and North Texas. Free inspections. Same-day service.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <FAQPageJsonLd faqs={faqs} />
      <HeroSection />
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <TrustBadgeSection compact />
        </div>
      </section>
      <WhyChooseUsSection />
      <ServicesOverviewSection />
      <PestTypesSection />
      <HowItWorksSection />
      <ReviewSection reviews={reviews.slice(0, 3)} />
      <FAQSection faqs={faqs} />
      <ServiceAreaSection />
      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get Your Free Inspection Today
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us about your pest problem and we&apos;ll respond within one
                business hour. Or call now for same-day emergency service.
              </p>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </section>
      <CTASection />
      <FooterCTA />
    </>
  );
}
