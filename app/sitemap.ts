import type { MetadataRoute } from "next";
import { SITE_URL, getAllPublishedBlogs, getCanonicalUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // 1. Core Top-Level Pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industries`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.85,
    },
  ];

  // 2. Dedicated Service Pages
  const serviceSlugs = [
    "performance-marketing",
    "sem-expert",
    "lead-generation",
    "ecommerce-marketing",
    "seo",
    "website-development",
    "wordpress-development",
    "shopify-development",
    "landing-page-development",
    "ecommerce-development",
    "ui-ux-design",
    "graphic-design",
    "email-marketing",
    "content-creation",
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 3. Dynamic Published Blogs (excluding drafts, testing blogs, and legacy parameters)
  const publishedBlogs = await getAllPublishedBlogs();
  const blogPages: MetadataRoute.Sitemap = publishedBlogs.map((b) => {
    const parsedDate = b.date ? new Date(b.date) : null;
    return {
      url: getCanonicalUrl(`/blog/${b.slug}`),
      lastModified: parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate : currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  const uniquePages = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const page of [...corePages, ...servicePages, ...blogPages]) {
    uniquePages.set(page.url, page);
  }

  return [...uniquePages.values()];
}

