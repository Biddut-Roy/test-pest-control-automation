import { PrismaClient, Role, Status } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  const user = await prisma.user.upsert({
    where: { email: "admin@greenshieldpest.com" },
    update: {},
    create: {
      email: "admin@greenshieldpest.com",
      name: "Admin",
      role: Role.SUPER_ADMIN,
    },
  });
  console.log(`  ✓ User: ${user.email} (${user.role})`);

  const editor = await prisma.user.upsert({
    where: { email: "editor@greenshieldpest.com" },
    update: {},
    create: {
      email: "editor@greenshieldpest.com",
      name: "Editor",
      role: Role.EDITOR,
    },
  });
  console.log(`  ✓ User: ${editor.email} (${editor.role})`);

  const setting = await prisma.setting.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      companyName: "GreenShield Pest Solutions",
      phone: "(555) 247-7378",
      email: "hello@greenshieldpest.com",
      address: "1234 Commerce Drive, Plano, TX 75024",
      defaultMetaTitle: "GreenShield Pest Solutions | Trusted Local Pest Control",
      defaultMetaDescription:
        "Professional pest control for North Texas homes and businesses. Free inspections, same-day service, and eco-conscious treatments.",
      businessHours: JSON.stringify([
        { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
        { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
        { day: "Sunday", hours: "Emergency Service Available" },
      ]),
    },
  });
  console.log(`  ✓ Settings: ${setting.companyName}`);

  const pages = [
    {
      title: "About Us",
      slug: "about",
      metaTitle: "About GreenShield Pest Solutions | North Texas Pest Control",
      metaDescription:
        "Learn about GreenShield Pest Solutions — locally owned, licensed, and serving North Texas since 2008.",
      content: JSON.stringify({
        sections: [
          {
            type: "text",
            content:
              "GreenShield Pest Solutions is a locally owned pest control company serving North Texas since 2008. We specialize in residential and commercial pest management with a focus on integrated pest management (IPM) practices.",
          },
          {
            type: "text",
            content:
              "Our team of licensed technicians undergoes continuous training to deliver safe, effective treatments that protect your family, pets, and property.",
          },
        ],
      }),
      status: Status.PUBLISHED,
    },
    {
      title: "Contact Us",
      slug: "contact",
      metaTitle: "Contact GreenShield Pest Solutions | Get a Free Inspection",
      metaDescription:
        "Get in touch with GreenShield Pest Solutions for a free inspection. Call, email, or fill out our contact form. Same-day service available in North Texas.",
      content: JSON.stringify({
        sections: [
          {
            type: "text",
            content:
              "Ready to get started? Contact GreenShield Pest Solutions for a free inspection and same-day service.",
          },
        ],
      }),
      status: Status.PUBLISHED,
    },
    {
      title: "Service Areas",
      slug: "service-areas",
      metaTitle: "Service Areas | GreenShield Pest Solutions North Texas",
      metaDescription:
        "GreenShield Pest Solutions serves Plano, Frisco, McKinney, Allen, Richardson, and all of North Texas. Check if we serve your area.",
      content: JSON.stringify({
        sections: [],
      }),
      status: Status.PUBLISHED,
    },
    {
      title: "Privacy Policy",
      slug: "privacy-policy",
      metaTitle: "Privacy Policy | GreenShield Pest Solutions",
      metaDescription: "GreenShield Pest Solutions privacy policy.",
      content: JSON.stringify({
        sections: [
          {
            type: "text",
            content:
              "This is a placeholder privacy policy. Update with your actual policy before going live.",
          },
        ],
      }),
      status: Status.DRAFT,
    },
  ];

  for (const page of pages) {
    const created = await prisma.page.upsert({
      where: { slug: page.slug },
      update: {},
      create: page,
    });
    console.log(`  ✓ Page: ${created.slug} (${created.status})`);
  }

  const blogPosts = [
    {
      title: "7 Warning Signs of Termite Infestation in Texas Homes",
      slug: "signs-of-termite-infestation-texas-homes",
      metaTitle:
        "7 Warning Signs of Termite Infestation in Texas Homes | GreenShield Pest",
      metaDescription:
        "Termites cause over $5 billion in damage annually. Learn the early warning signs Texas homeowners should never ignore.",
      content: JSON.stringify({
        excerpt:
          "Termites cause over $5 billion in damage annually in the US. Learn the early warning signs Texas homeowners should never ignore.",
        body: `## Mud Tubes on Foundation Walls\n\nSubterranean termites build pencil-width mud tubes to travel between their colony and food sources. Check your foundation, crawl space, and garage walls regularly.\n\n## Discarded Wings and Swarmers\n\nSpring swarms are common in North Texas. Finding discarded wings near windows or doors is a strong indicator of nearby termite activity.\n\n## Hollow or Damaged Wood\n\nTap wooden structures along your baseboards, window frames, and deck posts. A hollow sound may indicate termites have been feeding inside.\n\n## Prevention Tips for Texas Homeowners\n\n- Maintain 6 inches of clearance between soil and siding\n- Fix leaky faucets and irrigation issues promptly\n- Store firewood away from the home\n- Schedule annual professional inspections`,
      }),
      status: Status.PUBLISHED,
    },
    {
      title: "How to Prevent Ants in Your Kitchen This Summer",
      slug: "how-to-prevent-ants-in-kitchen",
      metaTitle:
        "How to Prevent Ants in Your Kitchen This Summer | GreenShield Pest",
      metaDescription:
        "Fire ants and odorous house ants invade Texas kitchens every summer. Here's how to keep them out for good.",
      content: JSON.stringify({
        excerpt:
          "Fire ants and odorous house ants invade Texas kitchens every summer. Here's how to keep them out for good.",
        body: `## Seal Entry Points\n\nAnts enter through the tiniest cracks. Caulk gaps around windows, pipes, and baseboards to reduce access points.\n\n## Proper Food Storage\n\nStore pantry items in airtight containers, wipe counters daily, and take out trash regularly to eliminate food sources.\n\n## When to Call a Professional\n\nIf ants persist despite DIY efforts, a professional can identify the colony location and apply targeted bait treatments.`,
      }),
      status: Status.PUBLISHED,
    },
    {
      title: "Rodent-Proofing Your Home Before Winter",
      slug: "rodent-proofing-your-home-winter",
      metaTitle:
        "Rodent-Proofing Your Home Before Winter | GreenShield Pest",
      metaDescription:
        "Mice and rats seek warm shelter as temperatures drop. Follow this checklist to protect your property.",
      content: JSON.stringify({
        excerpt:
          "Mice and rats seek warm shelter as temperatures drop. Follow this checklist to protect your property.",
        body: `## Exclusion Checklist\n\nInspect and seal gaps around pipes, vents, garage doors, and utility lines. Mice can fit through a dime-sized opening.\n\n## Signs of Rodent Activity\n\nLook for droppings, gnaw marks, greasy rub marks along walls, and nesting material in attics or crawl spaces.\n\n## Professional Exclusion Services\n\nOur rodent exclusion program includes entry-point sealing, trapping, and ongoing monitoring to prevent re-infestation.`,
      }),
      status: Status.DRAFT,
    },
  ];

  for (const post of blogPosts) {
    const created = await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
    console.log(`  ✓ Blog: ${created.slug} (${created.status})`);
  }

  console.log("\nSeed complete!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
