export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type PestType = {
  id: string;
  name: string;
  description: string;
  season: string;
};

export type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type TrustBadge = {
  id: string;
  label: string;
  description: string;
};

export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  stateCode: string;
  population?: string;
  responseTime?: string;
  featured?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  content: string;
  tableOfContents: { id: string; title: string }[];
  faqs?: FAQ[];
};

export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Pest Control",
    description:
      "Comprehensive interior and exterior protection plans tailored to protect your family, pets, and property year-round.",
    icon: "home",
  },
  {
    id: "commercial",
    title: "Commercial Pest Management",
    description:
      "Discreet, compliant pest programs for offices, retail, restaurants, and multi-unit properties with minimal disruption.",
    icon: "building",
  },
  {
    id: "termite",
    title: "Termite Inspection & Treatment",
    description:
      "Advanced termite detection, baiting systems, and liquid treatments to safeguard your largest investment.",
    icon: "shield",
  },
  {
    id: "rodent",
    title: "Rodent Exclusion & Removal",
    description:
      "Humane trapping, entry-point sealing, and ongoing monitoring to eliminate mice and rats for good.",
    icon: "rat",
  },
  {
    id: "mosquito",
    title: "Mosquito & Tick Control",
    description:
      "Seasonal yard treatments that reduce biting pests so you can enjoy your outdoor spaces again.",
    icon: "bug",
  },
  {
    id: "wildlife",
    title: "Wildlife Removal",
    description:
      "Safe, humane removal of raccoons, squirrels, and other nuisance wildlife with exclusion follow-up.",
    icon: "squirrel",
  },
];

export const pestTypes: PestType[] = [
  {
    id: "ants",
    name: "Ants",
    description: "Fire ants, carpenter ants, and odorous house ants invading kitchens and yards.",
    season: "Spring – Fall",
  },
  {
    id: "roaches",
    name: "Cockroaches",
    description: "German and American roaches thrive in warm, humid Texas climates.",
    season: "Year-round",
  },
  {
    id: "spiders",
    name: "Spiders",
    description: "Brown recluse and wolf spiders commonly found in garages and crawl spaces.",
    season: "Year-round",
  },
  {
    id: "termites",
    name: "Termites",
    description: "Subterranean termites cause billions in property damage annually in the US.",
    season: "Spring swarms",
  },
  {
    id: "rodents",
    name: "Rodents",
    description: "Mice and rats seek shelter indoors as temperatures drop.",
    season: "Fall – Winter",
  },
  {
    id: "wasps",
    name: "Wasps & Hornets",
    description: "Aggressive stinging insects nesting in eaves, trees, and wall voids.",
    season: "Summer – Fall",
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Plano, TX",
    rating: 5,
    text: "GreenShield found the source of our ant problem within the first visit. The technician was professional, explained everything clearly, and we haven't seen a single ant in three months.",
    date: "March 2026",
    service: "Residential Pest Control",
  },
  {
    id: "2",
    name: "James Rodriguez",
    location: "Frisco, TX",
    rating: 5,
    text: "We manage 12 rental properties and GreenShield handles all of them. Their reporting is excellent and response times are always same-day or next-day. Highly recommend for property managers.",
    date: "February 2026",
    service: "Commercial Pest Management",
  },
  {
    id: "3",
    name: "Linda Chen",
    location: "McKinney, TX",
    rating: 5,
    text: "After a termite scare during our home sale, GreenShield's inspection gave us peace of mind. They treated the issue quickly and our closing went smoothly.",
    date: "January 2026",
    service: "Termite Inspection",
  },
  {
    id: "4",
    name: "Michael Thompson",
    location: "Allen, TX",
    rating: 5,
    text: "Best pest control company we've used in 20 years of homeownership. Fair pricing, no upselling, and they actually solve the problem instead of just spraying and leaving.",
    date: "December 2025",
    service: "Residential Pest Control",
  },
  {
    id: "5",
    name: "Amanda Foster",
    location: "Richardson, TX",
    rating: 5,
    text: "Our restaurant passed health inspection with flying colors thanks to GreenShield's commercial program. They're discreet, reliable, and always on schedule.",
    date: "November 2025",
    service: "Commercial Pest Management",
  },
  {
    id: "6",
    name: "David Park",
    location: "Carrollton, TX",
    rating: 5,
    text: "Had a wasp nest under our deck that was terrifying the kids. GreenShield came out same day, removed it safely, and treated the area. Outstanding service.",
    date: "October 2025",
    service: "Stinging Insect Control",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Are your treatments safe for children and pets?",
    answer:
      "Yes. We use EPA-registered products applied according to label directions. Our technicians will provide specific re-entry guidelines for each treatment, and we offer pet-safe and eco-conscious options upon request.",
  },
  {
    id: "2",
    question: "How quickly can you respond to a pest emergency?",
    answer:
      "We offer same-day and next-day appointments throughout our service area. For urgent situations like stinging insects or rodent infestations, call us directly and we'll prioritize your service.",
  },
  {
    id: "3",
    question: "Do you offer free inspections?",
    answer:
      "Yes, we provide complimentary inspections for new residential and commercial customers. Our technician will assess your property, identify pest activity, and recommend a customized treatment plan with transparent pricing.",
  },
  {
    id: "4",
    question: "What areas do you serve?",
    answer:
      "GreenShield Pest Solutions serves Plano, Frisco, McKinney, Allen, Richardson, Carrollton, and surrounding North Texas communities within a 50-mile radius of our Plano headquarters.",
  },
  {
    id: "5",
    question: "Do you require long-term contracts?",
    answer:
      "No long-term contracts are required. We offer flexible one-time treatments, seasonal plans, and annual protection programs. You choose the level of coverage that fits your needs and budget.",
  },
  {
    id: "6",
    question: "Are your technicians licensed and insured?",
    answer:
      "Every GreenShield technician is state-licensed, background-checked, and fully insured. We maintain active TPCL licensing and carry comprehensive liability coverage for your protection.",
  },
];

export const trustBadges: TrustBadge[] = [
  {
    id: "1",
    label: "Licensed & Insured",
    description: "State-certified technicians with full liability coverage",
  },
  {
    id: "2",
    label: "Same-Day Service",
    description: "Emergency and next-day appointments available",
  },
  {
    id: "3",
    label: "Free Inspections",
    description: "No-obligation property assessments for new customers",
  },
  {
    id: "4",
    label: "Satisfaction Guaranteed",
    description: "Free re-treatment if pests return between scheduled visits",
  },
  {
    id: "5",
    label: "Eco-Conscious Options",
    description: "Low-impact treatments safe for families and pets",
  },
  {
    id: "6",
    label: "18+ Years Local",
    description: "Trusted by North Texas homeowners since 2008",
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "plano-tx",
    city: "Plano",
    state: "Texas",
    stateCode: "TX",
    population: "287,000+",
    responseTime: "Same-day",
    featured: true,
  },
  {
    slug: "frisco-tx",
    city: "Frisco",
    state: "Texas",
    stateCode: "TX",
    population: "220,000+",
    responseTime: "Same-day",
    featured: true,
  },
  {
    slug: "mckinney-tx",
    city: "McKinney",
    state: "Texas",
    stateCode: "TX",
    population: "195,000+",
    responseTime: "Next-day",
    featured: true,
  },
  {
    slug: "allen-tx",
    city: "Allen",
    state: "Texas",
    stateCode: "TX",
    population: "105,000+",
    responseTime: "Next-day",
  },
  {
    slug: "richardson-tx",
    city: "Richardson",
    state: "Texas",
    stateCode: "TX",
    population: "120,000+",
    responseTime: "Same-day",
  },
  {
    slug: "carrollton-tx",
    city: "Carrollton",
    state: "Texas",
    stateCode: "TX",
    population: "133,000+",
    responseTime: "Next-day",
  },
  {
    slug: "garland-tx",
    city: "Garland",
    state: "Texas",
    stateCode: "TX",
    population: "240,000+",
    responseTime: "Next-day",
  },
  {
    slug: "lewisville-tx",
    city: "Lewisville",
    state: "Texas",
    stateCode: "TX",
    population: "112,000+",
    responseTime: "Next-day",
  },
  {
    slug: "flower-mound-tx",
    city: "Flower Mound",
    state: "Texas",
    stateCode: "TX",
    population: "79,000+",
    responseTime: "Next-day",
  },
  {
    slug: "prosper-tx",
    city: "Prosper",
    state: "Texas",
    stateCode: "TX",
    population: "32,000+",
    responseTime: "Next-day",
  },
  {
    slug: "the-colony-tx",
    city: "The Colony",
    state: "Texas",
    stateCode: "TX",
    population: "45,000+",
    responseTime: "Next-day",
  },
  {
    slug: "wylie-tx",
    city: "Wylie",
    state: "Texas",
    stateCode: "TX",
    population: "57,000+",
    responseTime: "Next-day",
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Schedule Your Free Inspection",
    description:
      "Call us or request an inspection online. We'll confirm a convenient time and send a licensed technician to your property.",
  },
  {
    step: 2,
    title: "Custom Treatment Plan",
    description:
      "We identify pest activity, entry points, and conducive conditions, then recommend a targeted plan with clear, upfront pricing.",
  },
  {
    step: 3,
    title: "Professional Treatment",
    description:
      "Our team applies proven, family-safe treatments using integrated pest management best practices for lasting results.",
  },
  {
    step: 4,
    title: "Ongoing Protection",
    description:
      "Optional recurring service keeps pests away year-round with scheduled visits, monitoring, and free re-treatments if needed.",
  },
];

export const whyChooseUs = [
  {
    title: "Local Expertise",
    description:
      "Born and raised in North Texas, we understand the pests, seasons, and building types unique to our region.",
  },
  {
    title: "Integrated Pest Management",
    description:
      "We focus on prevention, exclusion, and targeted treatment—not unnecessary blanket spraying.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Detailed quotes with no hidden fees. You'll know exactly what you're paying for before any work begins.",
  },
  {
    title: "Dedicated Support",
    description:
      "Speak with a real person when you call. Our local team handles scheduling, follow-ups, and service questions.",
  },
];

export const companyValues = [
  {
    title: "Integrity",
    description: "Honest recommendations and fair pricing on every job, every time.",
  },
  {
    title: "Safety",
    description: "Protecting families, pets, and the environment with responsible treatment methods.",
  },
  {
    title: "Excellence",
    description: "Continuous training and proven techniques to deliver results that last.",
  },
  {
    title: "Community",
    description: "Proud to serve our neighbors and support local North Texas businesses.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-of-termite-infestation-texas-homes",
    title: "7 Warning Signs of Termite Infestation in Texas Homes",
    excerpt:
      "Termites cause over $5 billion in damage annually in the US. Learn the early warning signs Texas homeowners should never ignore.",
    category: "Termite Control",
    author: "Mark Henderson",
    authorRole: "Lead Entomologist",
    publishedAt: "2026-03-15",
    readTime: "6 min read",
    featured: true,
    tableOfContents: [
      { id: "mud-tubes", title: "Mud Tubes on Foundation Walls" },
      { id: "swarmers", title: "Discarded Wings and Swarmers" },
      { id: "wood-damage", title: "Hollow or Damaged Wood" },
      { id: "prevention", title: "Prevention Tips for Texas Homeowners" },
    ],
    faqs: [
      {
        id: "b1",
        question: "How often should Texas homes be inspected for termites?",
        answer:
          "We recommend annual termite inspections for all Texas homes, especially those with slab foundations or wood-to-soil contact.",
      },
      {
        id: "b2",
        question: "Does homeowners insurance cover termite damage?",
        answer:
          "Most standard policies do not cover termite damage. Preventive inspections and treatment are the best protection.",
      },
    ],
    content: `
## Mud Tubes on Foundation Walls

Subterranean termites build pencil-width mud tubes to travel between their colony and food sources. Check your foundation, crawl space, and garage walls regularly.

## Discarded Wings and Swarmers

Spring swarms are common in North Texas. Finding discarded wings near windows or doors is a strong indicator of nearby termite activity.

## Hollow or Damaged Wood

Tap wooden structures along your baseboards, window frames, and deck posts. A hollow sound may indicate termites have been feeding inside.

## Prevention Tips for Texas Homeowners

- Maintain 6 inches of clearance between soil and siding
- Fix leaky faucets and irrigation issues promptly
- Store firewood away from the home
- Schedule annual professional inspections
    `.trim(),
  },
  {
    slug: "how-to-prevent-ants-in-kitchen",
    title: "How to Prevent Ants in Your Kitchen This Summer",
    excerpt:
      "Fire ants and odorous house ants invade Texas kitchens every summer. Here's how to keep them out for good.",
    category: "Ant Control",
    author: "Lisa Torres",
    authorRole: "Senior Technician",
    publishedAt: "2026-03-08",
    readTime: "5 min read",
    tableOfContents: [
      { id: "entry-points", title: "Seal Entry Points" },
      { id: "food-storage", title: "Proper Food Storage" },
      { id: "professional-help", title: "When to Call a Professional" },
    ],
    content: `
## Seal Entry Points

Ants enter through the tiniest cracks. Caulk gaps around windows, pipes, and baseboards to reduce access points.

## Proper Food Storage

Store pantry items in airtight containers, wipe counters daily, and take out trash regularly to eliminate food sources.

## When to Call a Professional

If ants persist despite DIY efforts, a professional can identify the colony location and apply targeted bait treatments.
    `.trim(),
  },
  {
    slug: "commercial-pest-control-restaurants",
    title: "Commercial Pest Control Requirements for Texas Restaurants",
    excerpt:
      "Health code compliance starts with a proactive pest management plan. What restaurant owners need to know.",
    category: "Commercial",
    author: "Mark Henderson",
    authorRole: "Lead Entomologist",
    publishedAt: "2026-02-28",
    readTime: "7 min read",
    tableOfContents: [
      { id: "health-code", title: "Texas Health Code Requirements" },
      { id: "ipm-program", title: "Building an IPM Program" },
      { id: "documentation", title: "Documentation and Reporting" },
    ],
    content: `
## Texas Health Code Requirements

Restaurants must maintain pest-free facilities and document all pest control activities. Regular inspections are mandatory.

## Building an IPM Program

Integrated Pest Management combines sanitation, exclusion, monitoring, and targeted treatment for long-term compliance.

## Documentation and Reporting

Maintain detailed service logs, bait station maps, and corrective action records for health inspector review.
    `.trim(),
  },
  {
    slug: "rodent-proofing-your-home-winter",
    title: "Rodent-Proofing Your Home Before Winter",
    excerpt:
      "Mice and rats seek warm shelter as temperatures drop. Follow this checklist to protect your property.",
    category: "Rodent Control",
    author: "Lisa Torres",
    authorRole: "Senior Technician",
    publishedAt: "2026-02-14",
    readTime: "5 min read",
    tableOfContents: [
      { id: "exclusion", title: "Exclusion Checklist" },
      { id: "signs", title: "Signs of Rodent Activity" },
      { id: "treatment", title: "Professional Exclusion Services" },
    ],
    content: `
## Exclusion Checklist

Inspect and seal gaps around pipes, vents, garage doors, and utility lines. Mice can fit through a dime-sized opening.

## Signs of Rodent Activity

Look for droppings, gnaw marks, greasy rub marks along walls, and nesting material in attics or crawl spaces.

## Professional Exclusion Services

Our rodent exclusion program includes entry-point sealing, trapping, and ongoing monitoring to prevent re-infestation.
    `.trim(),
  },
  {
    slug: "mosquito-control-texas-backyard",
    title: "Mosquito Control Tips for Your Texas Backyard",
    excerpt:
      "Enjoy your outdoor spaces again with these proven mosquito reduction strategies for North Texas yards.",
    category: "Mosquito Control",
    author: "Mark Henderson",
    authorRole: "Lead Entomologist",
    publishedAt: "2026-01-22",
    readTime: "4 min read",
    tableOfContents: [
      { id: "standing-water", title: "Eliminate Standing Water" },
      { id: "landscaping", title: "Landscaping Adjustments" },
      { id: "treatment", title: "Professional Yard Treatments" },
    ],
    content: `
## Eliminate Standing Water

Empty bird baths, clogged gutters, and plant saucers weekly. Mosquitoes breed in as little as a bottle cap of water.

## Landscaping Adjustments

Trim overgrown vegetation, maintain lawn height, and consider mosquito-repelling plants near patios.

## Professional Yard Treatments

Our seasonal mosquito program treats resting areas and breeding sites for up to 90% reduction in biting activity.
    `.trim(),
  },
  {
    slug: "spider-identification-north-texas",
    title: "Spider Identification Guide for North Texas Homeowners",
    excerpt:
      "Not all spiders are dangerous, but some require professional attention. Learn which species are common in our area.",
    category: "Spider Control",
    author: "Lisa Torres",
    authorRole: "Senior Technician",
    publishedAt: "2026-01-10",
    readTime: "6 min read",
    tableOfContents: [
      { id: "common-species", title: "Common Species" },
      { id: "dangerous-spiders", title: "Potentially Dangerous Spiders" },
      { id: "control", title: "Spider Control Methods" },
    ],
    content: `
## Common Species

Wolf spiders, jumping spiders, and orb weavers are frequent visitors but generally harmless to humans.

## Potentially Dangerous Spiders

Brown recluse and black widow spiders require caution. Contact a professional if you suspect either species.

## Spider Control Methods

Reduce clutter, seal entry points, and maintain regular perimeter treatments to keep spider populations in check.
    `.trim(),
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getBlogPost(slug);
  return blogPosts
    .filter((post) => post.slug !== slug && post.category === current?.category)
    .slice(0, limit);
}

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getCityFaqs(city: string): FAQ[] {
  return [
    {
      id: "c1",
      question: `Do you offer same-day pest control in ${city}?`,
      answer: `Yes, we prioritize ${city} residents for same-day and next-day appointments based on technician availability. Call us for the fastest scheduling.`,
    },
    {
      id: "c2",
      question: `What pests are most common in ${city}?`,
      answer: `Homes and businesses in ${city} commonly experience ants, roaches, spiders, rodents, and seasonal mosquito activity. Our local team knows the specific pressure points in your neighborhood.`,
    },
    {
      id: "c3",
      question: `How much does pest control cost in ${city}?`,
      answer: `Pricing depends on property size, pest type, and treatment frequency. We offer free inspections with transparent quotes—no hidden fees or pressure to sign up.`,
    },
    {
      id: "c4",
      question: `Are your ${city} treatments safe for pets?`,
      answer: `Absolutely. We use EPA-registered products and provide clear re-entry guidelines. Pet-safe treatment options are available upon request.`,
    },
  ];
}

export const cityPestProblems = [
  {
    name: "Ant Infestations",
    description: "Fire ants and carpenter ants are prevalent in North Texas subdivisions and commercial properties.",
  },
  {
    name: "Cockroach Activity",
    description: "German roaches thrive in warm, humid environments common in Texas kitchens and restaurants.",
  },
  {
    name: "Rodent Intrusions",
    description: "Mice and rats enter through construction gaps, especially in newer developments and older homes alike.",
  },
  {
    name: "Termite Pressure",
    description: "Subterranean termites are active year-round in our region, with peak swarming in spring.",
  },
];

export const cityBenefits = [
  {
    title: "Local Response Team",
    description: "Technicians based nearby for fast arrival times and familiarity with your neighborhood.",
  },
  {
    title: "Neighborhood Experience",
    description: "We've treated hundreds of homes in your area and understand local pest patterns.",
  },
  {
    title: "Flexible Scheduling",
    description: "Evening and weekend appointments available to fit busy homeowner and business schedules.",
  },
  {
    title: "Neighborhood Referral Discounts",
    description: "Ask about group rates when multiple neighbors schedule service on the same day.",
  },
];
