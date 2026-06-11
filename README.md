# GreenShield Pest Solutions — Phase 1

Production-ready frontend foundation for a local pest control SEO website.

**Brand:** GreenShield Pest Solutions  
**Tagline:** Trusted Local Pest Control for Your Home & Business  
**Market:** North Texas, United States

---

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

---

## Folder Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (header, footer, SEO)
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # Custom 404
│   ├── about/
│   ├── blog/
│   │   └── [slug]/
│   ├── contact/
│   ├── pest-control/
│   │   └── [city]/
│   └── service-areas/
├── components/
│   ├── blog/               # BlogCard, pagination, search placeholder
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections (Hero, FAQ, CTA, etc.)
│   ├── seo/                # JSON-LD structured data
│   ├── shared/             # Breadcrumb, CallButton, ContactForm, TrustBadge
│   └── ui/                 # shadcn/ui primitives
├── data/
│   └── mock-data.ts        # All mock content (services, blog, cities, FAQs)
└── lib/
    ├── metadata.ts         # SEO metadata helpers
    ├── site-config.ts      # Brand & business config
    └── utils.ts            # Utilities (cn, slugify, etc.)
```

## Route Structure

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about` | About |
| `/contact` | Contact |
| `/blog` | Blog listing |
| `/blog/[slug]` | Single blog post |
| `/service-areas` | Service areas index |
| `/pest-control/[city]` | City landing (e.g. `/pest-control/plano-tx`) |
| `/not-found` | Custom 404 (any invalid URL) |

## Test All Pages

| URL | What to verify |
|-----|----------------|
| http://localhost:3000 | Hero, services, reviews, FAQ, contact form |
| http://localhost:3000/about | Company story, mission, values, team placeholder |
| http://localhost:3000/contact | Form, phone, email, map placeholder, hours |
| http://localhost:3000/blog | Featured post, categories, pagination UI |
| http://localhost:3000/blog/signs-of-termite-infestation-texas-homes | TOC, content, author, FAQ, related posts |
| http://localhost:3000/service-areas | City search, service area cards |
| http://localhost:3000/pest-control/plano-tx | City hero, benefits, FAQs, reviews |
| http://localhost:3000/invalid-page | Custom 404 with home & call CTAs |

**Mobile:** Resize browser or use DevTools — sticky header, mobile menu, floating call button.

---

## Phase 1 Completed

- Next.js 15 App Router + TypeScript + Tailwind CSS v4 + shadcn/ui
- Full brand identity (GreenShield Pest Solutions)
- Global layout: sticky header, mobile menu, footer, floating call button
- All 8 page templates with mock data
- Reusable components: Hero, CTA, FAQ, Reviews, Trust Badges, Contact Form, Breadcrumbs, Service Areas
- SEO: Metadata API, title/description templates, Open Graph, Twitter cards, canonical URLs, JSON-LD
- 12 city landing pages (static generation)
- 6 blog posts (static generation)
- Responsive, mobile-first design

## Phase 2 (Not Built)

- Database (PostgreSQL) + Prisma
- Admin dashboard
- Authentication
- AI content integration (OpenAI/Claude)
- CSV import for bulk city/blog content
- Live form submission backend
- Google Maps embed integration
- CMS-driven content management
