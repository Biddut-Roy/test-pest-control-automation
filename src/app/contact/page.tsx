import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Breadcrumb } from "@/components/shared/breadcrumb";
import { CallButton } from "@/components/shared/call-button";
import { ContactForm } from "@/components/shared/contact-form";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneLink } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for a free pest control inspection. Call ${siteConfig.phoneDisplay} or fill out our form. Same-day service available in North Texas.`,
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbItems = [{ label: "Contact" }];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ]}
      />
      <section className="section-padding bg-gradient-to-b from-brand-light/40 to-background">
        <div className="container-narrow">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ready to solve your pest problem? Reach out by phone, email, or
              the form below. We respond within one business hour.
            </p>
            <div className="mt-8 flex justify-center">
              <CallButton size="xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">
                Get In Touch
              </h2>
              <p className="mt-2 text-muted-foreground">
                Our local team is available seven days a week for inspections,
                emergencies, and service questions.
              </p>

              <ul className="mt-8 space-y-6">
                <li>
                  <a
                    href={`tel:${formatPhoneLink(siteConfig.phone)}`}
                    className="flex items-start gap-4 rounded-xl border bg-card p-4 transition-colors hover:border-brand"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-brand">{siteConfig.phoneDisplay}</p>
                      <p className="text-sm text-muted-foreground">
                        Same-day emergency service
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 rounded-xl border bg-card p-4 transition-colors hover:border-brand"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-brand">{siteConfig.email}</p>
                      <p className="text-sm text-muted-foreground">
                        Response within 1 business hour
                      </p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4 rounded-xl border bg-card p-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 rounded-xl border bg-muted/40 p-6">
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-brand" />
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {siteConfig.businessHours.map((hours) => (
                    <li
                      key={hours.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{hours.day}</span>
                      <span className="font-medium text-foreground">
                        {hours.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Find Us on the Map
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            Visit our Plano headquarters or schedule a service at your property.
          </p>
          <div className="mt-8 flex aspect-[21/9] items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20 bg-muted/50">
            <div className="text-center">
              <MapPin className="mx-auto size-10 text-brand/40" />
              <p className="mt-3 font-medium text-muted-foreground">
                Google Maps Embed Placeholder
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {siteConfig.address.full}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
