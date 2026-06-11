import { prisma } from "./db";
import { siteConfig as fallbackConfig } from "./site-config";
import type { Setting, Page, BlogPost } from "@prisma/client";

export type SiteSettings = Pick<
  Setting,
  | "companyName"
  | "phone"
  | "email"
  | "address"
  | "logoUrl"
  | "googleMapUrl"
  | "facebookUrl"
  | "instagramUrl"
  | "linkedinUrl"
  | "youtubeUrl"
  | "businessHours"
  | "defaultMetaTitle"
  | "defaultMetaDescription"
>;

export async function getSettings(): Promise<SiteSettings | null> {
  try {
    const settings = await prisma.setting.findFirst();
    return settings;
  } catch {
    console.warn(
      "Database unavailable — using fallback settings from site-config.ts"
    );
    return null;
  }
}

export async function updateSettings(
  data: Partial<SiteSettings>
): Promise<Setting | null> {
  try {
    const existing = await prisma.setting.findFirst();
    if (!existing) {
      return await prisma.setting.create({ data: data as Setting });
    }
    return await prisma.setting.update({
      where: { id: existing.id },
      data,
    });
  } catch (error) {
    console.error("Failed to update settings:", error);
    return null;
  }
}

export async function getPageBySlug(
  slug: string
): Promise<Page | null> {
  try {
    return await prisma.page.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error(`Failed to fetch page with slug "${slug}":`, error);
    return null;
  }
}

export async function getPublishedPages(): Promise<Page[]> {
  try {
    return await prisma.page.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { createdAt: "asc" },
    });
  } catch (error) {
    console.error("Failed to fetch published pages:", error);
    return [];
  }
}

export async function getBlogBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    return await prisma.blogPost.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error(`Failed to fetch blog post with slug "${slug}":`, error);
    return null;
  }
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    return await prisma.blogPost.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch published blog posts:", error);
    return [];
  }
}

export function mergeSettingsWithFallback(
  dbSettings: SiteSettings | null
): typeof fallbackConfig {
  if (!dbSettings) {
    return fallbackConfig;
  }

  let businessHours: { day: string; hours: string }[] | undefined;
  try {
    if (dbSettings.businessHours) {
      businessHours = JSON.parse(dbSettings.businessHours);
    }
  } catch {
    // ignore parse errors
  }

  return {
    ...fallbackConfig,
    name: dbSettings.companyName || fallbackConfig.name,
    phone: dbSettings.phone || fallbackConfig.phone,
    email: dbSettings.email || fallbackConfig.email,
    address: {
      ...fallbackConfig.address,
      full: dbSettings.address || fallbackConfig.address.full,
    },
    description:
      dbSettings.defaultMetaDescription || fallbackConfig.description,
    social: {
      ...fallbackConfig.social,
      facebook: dbSettings.facebookUrl || fallbackConfig.social.facebook,
    },
    businessHours: businessHours || fallbackConfig.businessHours,
  };
}
