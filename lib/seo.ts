import type { Metadata } from "next";
import { DEFAULT_BLOGS, type BlogPostItem } from "./blogData";
import { isIndexableBlogSlug } from "./blogSlug";

export const SITE_URL = "https://www.promonexmedia.com";
export const SITE_NAME = "Promonex Media Pvt. Ltd.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/promonex-logo.png`;

/**
 * Normalizes any route path into a clean, canonical relative path:
 * - Removes query strings (?foo=bar)
 * - Removes hash fragments (#hash)
 * - Removes duplicate slashes
 * - Strips trailing slash (except for root '/')
 * - Maps /blogs to /blog
 */
export function cleanCanonicalPath(rawPath: string = ""): string {
  if (!rawPath || rawPath === "/") return "/";

  // Strip query and hash
  let clean = rawPath.split("?")[0].split("#")[0].trim();

  // Strip domain if an absolute URL was passed
  clean = clean.replace(/^https?:\/\/(www\.)?promonexmedia\.com/i, "");

  // Normalize duplicate slashes
  clean = clean.replace(/\/+/g, "/");

  // Map legacy /blogs to /blog
  if (clean === "/blogs") {
    clean = "/blog";
  } else if (clean.startsWith("/blogs/")) {
    clean = clean.replace(/^\/blogs\//, "/blog/");
  }

  // Remove trailing slash
  if (clean.length > 1 && clean.endsWith("/")) {
    clean = clean.slice(0, -1);
  }

  if (!clean.startsWith("/")) {
    clean = `/${clean}`;
  }

  return clean;
}

/**
 * Returns the absolute preferred HTTPS www canonical URL.
 * Example: getCanonicalUrl("/about") -> "https://www.promonexmedia.com/about"
 * Example: getCanonicalUrl("/") -> "https://www.promonexmedia.com/"
 */
export function getCanonicalUrl(rawPath: string = ""): string {
  const path = cleanCanonicalPath(rawPath);
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

interface MetadataOptions {
  title?: string;
  description?: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}

/**
 * Centralized metadata generator for Next.js App Router pages and layouts.
 * Guarantees metadataBase and alternates.canonical are always configured.
 */
export function constructMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  noIndex = false,
}: MetadataOptions): Metadata {
  const canonicalUrl = getCanonicalUrl(path);

  const finalTitle = title
    ? `${title} | ${SITE_NAME}`
    : "Promonex Media Pvt. Ltd. | Digital Marketing Agency in Patna";

  const finalDescription =
    description ||
    "Promonex Media is a full-service digital marketing agency in Patna, helping businesses grow their online presence, generate quality leads, and scale sustainably.";

  return {
    metadataBase: new URL(SITE_URL),
    title: finalTitle,
    description: finalDescription,
    keywords: keywords || [
      "Promonex Media",
      "Digital Marketing Agency",
      "Patna",
      "Lead Generation",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Performance Marketing",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`,
          width: 1200,
          height: 630,
          alt: title || SITE_NAME,
        },
      ],
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

/**
 * Returns a published blog by slug (case-insensitive).
 * Rejects testing slugs and drafts.
 */
export async function getPublishedBlogBySlug(rawSlug: string): Promise<BlogPostItem | null> {
  const slug = rawSlug?.toLowerCase().trim();
  if (!isIndexableBlogSlug(slug)) return null;

  // Treat MongoDB as the source of truth when it is reachable so a bundled
  // fallback article cannot stay public after it has left the published set.
  try {
    const { blogsCol, publishedFilter } = await import("@/lib/server/blogs");
    const doc = await (await blogsCol()).findOne({
      slug: slug,
      ...publishedFilter(),
    });

    if (!doc || !isIndexableBlogSlug(doc.slug)) return null;

    return {
      id: doc.id,
      title: doc.title,
      slug: doc.slug,
      category: doc.category || "SEO",
      author: doc.author || "Promonex Editorial Team",
      authorRole: doc.authorRole || "",
      date: doc.publishedAt ? doc.publishedAt.toISOString().slice(0, 10) : "Oct 2026",
      readTime: doc.readTime || "5 min read",
      image: doc.image || "/assets/blog/blog_seo_strategy.jpg",
      imageAlt: doc.imageAlt || doc.title,
      excerpt: doc.excerpt || "",
      content: doc.content || "",
    };
  } catch {
    // Keep bundled posts available only as a fallback during a database outage.
    return DEFAULT_BLOGS.find(
      (blog) => isIndexableBlogSlug(blog.slug) && blog.slug.toLowerCase() === slug
    ) || null;
  }
}

/**
 * Returns all published blogs for sitemap and listing.
 */
export async function getAllPublishedBlogs(): Promise<BlogPostItem[]> {
  try {
    const { blogsCol, publishedFilter } = await import("@/lib/server/blogs");
    const docs = await (await blogsCol())
      .find(publishedFilter())
      .sort({ publishedAt: -1 })
      .toArray();

    if (docs && docs.length > 0) {
      return docs.filter((doc) => isIndexableBlogSlug(doc.slug)).map((doc, idx) => ({
        id: doc.id,
        title: doc.title,
        slug: doc.slug,
        category: doc.category || "SEO",
        author: doc.author || "Promonex Editorial Team",
        authorRole: doc.authorRole || "",
        date: doc.publishedAt ? doc.publishedAt.toISOString().slice(0, 10) : "Oct 2026",
        readTime: doc.readTime || "5 min read",
        image: doc.image || "/assets/blog/blog_seo_strategy.jpg",
        imageAlt: doc.imageAlt || doc.title,
        excerpt: doc.excerpt || "",
        content: doc.content || "",
        featured: idx === 0,
      }));
    }
  } catch {
    // Fall back to DEFAULT_BLOGS
  }

  return DEFAULT_BLOGS.filter((blog) => isIndexableBlogSlug(blog.slug));
}

