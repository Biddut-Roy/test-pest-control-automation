export const siteConfig = {
  name: "GreenShield Pest Solutions",
  shortName: "GreenShield Pest",
  tagline: "Trusted Local Pest Control for Your Home & Business",
  description:
    "GreenShield Pest Solutions provides professional, eco-conscious pest control for homeowners, property managers, and businesses across North Texas. Same-day inspections available.",
  url: "https://www.greenshieldpest.com",
  phone: "(555) 247-7378",
  phoneDisplay: "(555) 247-PEST",
  email: "hello@greenshieldpest.com",
  address: {
    street: "1234 Commerce Drive",
    city: "Plano",
    state: "TX",
    zip: "75024",
    full: "1234 Commerce Drive, Plano, TX 75024",
  },
  businessHours: [
    { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
    { day: "Sunday", hours: "Emergency Service Available" },
  ],
  social: {
    facebook: "https://facebook.com/greenshieldpest",
    google: "https://g.page/greenshieldpest",
    yelp: "https://yelp.com/biz/greenshield-pest-solutions",
  },
  license: "TPCL #12345",
  serviceRadius: "50-mile radius",
  foundedYear: 2008,
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
