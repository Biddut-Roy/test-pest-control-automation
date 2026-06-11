import { Breadcrumb } from "@/components/shared/breadcrumb";
import {
  BlogCard,
  BlogPagination,
  BlogSearchPlaceholder,
} from "@/components/blog/blog-card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { blogPosts } from "@/data/mock-data";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Pest Control Blog",
  description:
    "Expert pest control tips, seasonal guides, and industry insights from GreenShield Pest Solutions. Learn how to protect your North Texas home or business.",
  path: "/blog",
});

const categories = [
  "All",
  "Termite Control",
  "Ant Control",
  "Commercial",
  "Rodent Control",
  "Mosquito Control",
  "Spider Control",
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ]}
      />
      <section className="section-padding bg-gradient-to-b from-brand-light/40 to-background">
        <div className="container-narrow">
          <Breadcrumb items={[{ label: "Blog" }]} className="mb-6" />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Pest Control Resources
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Expert advice from our licensed technicians to help you prevent,
              identify, and eliminate pests in your home or business.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-md">
            <BlogSearchPlaceholder />
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="section-padding pt-0">
          <div className="container-narrow">
            <h2 className="mb-6 text-sm font-semibold tracking-wider text-brand uppercase">
              Featured Article
            </h2>
            <BlogCard post={featuredPost} featured />
          </div>
        </section>
      )}

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={index === 0 ? "brand" : "outline"}
                className="cursor-default px-4 py-1.5 text-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <BlogPagination />
        </div>
      </section>
    </>
  );
}
