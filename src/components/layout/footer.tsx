import Link from "next/link";
import {
  Facebook,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { formatPhoneLink } from "@/lib/utils";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Residential Pest Control", href: "/contact" },
    { label: "Commercial Pest Management", href: "/contact" },
    { label: "Termite Treatment", href: "/contact" },
    { label: "Rodent Control", href: "/contact" },
  ],
  areas: siteConfig.nav
    .filter((n) => n.href.startsWith("/pest-control"))
    .slice(0, 4),
};

export function Footer() {
  return (
    <footer className="border-t bg-brand-dark text-white">
      <div className="container-narrow section-padding !py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-lg bg-white/10">
                <Shield className="size-5" />
              </div>
              <span className="text-lg font-bold">{siteConfig.shortName}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Locally owned and operated since{" "}
              {siteConfig.foundedYear}.
            </p>
            <div className="mt-4 flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
              <span className="ml-2 text-sm text-white/70">4.9 · 500+ reviews</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${formatPhoneLink(siteConfig.phone)}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {siteConfig.address.full}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.{" "}
            {siteConfig.license}
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="text-white/50 transition-colors hover:text-white"
            >
              <Facebook className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
