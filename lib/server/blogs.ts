import "server-only";
import { randomBytes } from "node:crypto";
import sanitizeHtml from "sanitize-html";
import { Binary, ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import { ApiError } from "./http";
import type { AdminDoc } from "./auth";

/*
 * Blog storage in MongoDB. API shape matches the admin form / ManagedBlog (camelCase fields).
 */

export interface BlogDoc {
  _id?: ObjectId;
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  author: string;
  authorRole: string;
  authorId?: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  status: "published" | "draft";
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogImageDoc {
  id: string;
  contentType: string;
  data: Binary;
  size: number;
  createdAt: Date;
}

export const blogsCol = async () => (await getDb()).collection<BlogDoc>("blogs");
export const imagesCol = async () => (await getDb()).collection<BlogImageDoc>("blog_images");

/** Public query: published and not scheduled for the future. */
export const publishedFilter = () => ({
  status: { $in: ["published", "Published"] as BlogDoc["status"][] },
  $or: [{ publishedAt: null }, { publishedAt: { $lte: new Date() } }],
});

// ── Helpers ────────────────────────────────────────────────────────────────
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180)
    .replace(/-+$/, "");
}

/** Plain-text field: strip tags & control chars, collapse whitespace, cap length. */
function cleanText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "M d, Y" like the PHP API, e.g. "Oct 02, 2026". */
function formatDisplayDate(d: Date | null | undefined): string {
  if (!d || Number.isNaN(d.getTime())) return "";
  return `${MONTHS[d.getUTCMonth()]} ${String(d.getUTCDate()).padStart(2, "0")}, ${d.getUTCFullYear()}`;
}

function utcDate(y: number, m: number, d: number): Date | null {
  const dt = new Date(Date.UTC(y, m, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m && dt.getUTCDate() === d ? dt : null;
}

/** Parse the admin "Publication Date" text (e.g. "Oct 13, 2026", "2026-10-13", "13/10/2026"). */
function parsePublishDate(value: string): Date | null {
  const v = value.trim();
  if (!v) return null;
  let m = v.match(/^([A-Za-z]{3})[a-z]*\.? (\d{1,2}),? (\d{4})$/);
  if (m) {
    const month = MONTHS.findIndex((x) => x.toLowerCase() === m![1].toLowerCase());
    if (month >= 0) return utcDate(+m[3], month, +m[2]);
  }
  m = v.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return utcDate(+m[1], +m[2] - 1, +m[3]);
  m = v.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
  if (m) return utcDate(+m[3], +m[2] - 1, +m[1]);
  const ts = Date.parse(v);
  return Number.isNaN(ts) ? null : new Date(ts);
}

function validateImageUrl(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "";
  const v = value.trim();
  if (v.startsWith("data:")) throw new ApiError("Please upload the image instead of embedding it.", 422);
  if (v.length > 500 || /[\s<>"'\\]/.test(v)) throw new ApiError("Invalid featured image URL.", 422);
  if (/^https:\/\//i.test(v) || /^\/(?!\/)/.test(v)) return v;
  throw new ApiError("Featured image must be an uploaded image or an https URL.", 422);
}

// ── Rich-text sanitizer ────────────────────────────────────────────────────
function normalizeUrl(raw: string | undefined): string | null {
  const url = (raw || "").trim();
  if (!url || /[\x00-\x1F\x7F]/.test(url)) return null;
  if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
  if (/^\/(?!\/)/.test(url) || url.startsWith("#")) return url;
  if (/^(www\.)?[a-z0-9-]+(\.[a-z0-9-]+)+([/?#].*)?$/i.test(url)) return `https://${url}`;
  return null;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/** Allow-list: p br h2 h3 ul ol li blockquote strong em u s a code. External links open in a new tab. */
export function sanitizeBlogHtml(input: string): string {
  const html = input.trim();
  if (!html) return "";
  // Plain text (no tags): blank-line separated blocks → paragraphs
  if (!html.includes("<")) {
    return html
      .split(/\r?\n\s*\r?\n/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p>${escapeHtml(p).replace(/\r?\n/g, "<br>")}</p>`)
      .join("");
  }

  const clean = sanitizeHtml(html, {
    allowedTags: [
      "p", "br", "h2", "h3", "ul", "ol", "li", "blockquote", "strong", "em", "u", "s", "a", "code",
      "table", "thead", "tbody", "tfoot", "tr", "th", "td"
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      th: ["colspan", "rowspan", "scope", "align", "class"],
      td: ["colspan", "rowspan", "align", "class"],
      table: ["class"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowProtocolRelative: false,
    nonTextTags: ["script", "style", "textarea", "option", "noscript", "template", "title", "head", "svg", "math", "iframe", "object", "embed"],
    transformTags: {
      b: (_tag, attribs) => {
        // Google Docs wraps content in <b style="font-weight:normal">
        const normal = /font-weight\s*:\s*(normal|[1-5]00)\b/i.test(attribs.style || "");
        return { tagName: normal ? "span" : "strong", attribs: {} };
      },
      i: "em",
      strike: "s",
      del: "s",
      h1: "h2",
      h4: "h3",
      h5: "h3",
      h6: "h3",
      div: "p",
      span: (_tag, attribs) => {
        const style = (attribs.style || "").toLowerCase();
        if (/font-weight\s*:\s*(bold|bolder|[6-9]00)\b/.test(style)) return { tagName: "strong", attribs: {} };
        if (/font-style\s*:\s*italic/.test(style)) return { tagName: "em", attribs: {} };
        if (/text-decoration[^;]*underline/.test(style)) return { tagName: "u", attribs: {} };
        return { tagName: "span", attribs: {} };
      },
      a: (_tag, attribs) => {
        const href = normalizeUrl(attribs.href);
        const out: sanitizeHtml.Attributes = {};
        if (href) {
          out.href = href;
          if (/^https?:\/\//i.test(href)) Object.assign(out, { target: "_blank", rel: "noopener noreferrer" });
        }
        return { tagName: "a", attribs: out }; // links without a valid href are unwrapped below
      },
    },
  });
  // Links whose href was rejected: keep the text only
  return clean.replace(/<a>([\s\S]*?)<\/a>/g, "$1").trim();
}

// ── Input / output mapping ─────────────────────────────────────────────────
export type BlogInputFields = Omit<BlogDoc, "_id" | "id" | "createdAt" | "updatedAt" | "authorId">;

/** Validate & normalise an admin create/update payload. */
export function parseBlogInput(body: Record<string, unknown>, admin: AdminDoc): BlogInputFields {
  const title = cleanText(body.title, 255);
  const excerpt = cleanText(body.excerpt, 600);
  const fields: Record<string, string> = {};
  if (!title) fields.title = "Please provide a Blog Title.";
  if (!excerpt) fields.excerpt = "Please provide a short excerpt/description for the blog card.";
  const rawContent = typeof body.content === "string" ? body.content : "";
  if (rawContent.length > 1_000_000) fields.content = "Article body is too long.";
  const firstError = Object.values(fields)[0];
  if (firstError) throw new ApiError(firstError, 422, { fields });

  let content = sanitizeBlogHtml(rawContent);
  if (!content.replace(/<[^>]*>/g, "").trim()) content = "<p>Full blog article content coming soon.</p>";

  const slug = slugify(cleanText(body.slug, 191)) || slugify(title) || `blog-${randomBytes(4).toString("hex")}`;
  const status = String(body.status || "draft").toLowerCase() === "published" ? "published" : "draft";

  return {
    title,
    slug,
    excerpt,
    content,
    image: validateImageUrl(body.image),
    imageAlt: cleanText(body.imageAlt, 255) || title,
    category: cleanText(body.category, 60) || "SEO",
    author: cleanText(body.author, 100) || admin.name || "Promonex Editorial Team",
    authorRole: cleanText(body.authorRole, 100),
    readTime: cleanText(body.readTime, 40) || "5 min read",
    metaTitle: cleanText(body.metaTitle, 255) || `${title} | Promonex Media`,
    metaDescription: cleanText(body.metaDescription, 400) || excerpt,
    keywords: cleanText(body.keywords, 400),
    status,
    publishedAt: parsePublishDate(cleanText(body.date, 40)),
  };
}

/** Doc → API JSON (camelCase, like the admin form). */
export function blogToApi(doc: BlogDoc, withContent = true) {
  const out: Record<string, unknown> = {
    id: doc.id,
    title: doc.title,
    slug: doc.slug,
    category: doc.category || "",
    author: doc.author || "Promonex Editorial Team",
    authorRole: doc.authorRole || "",
    date: formatDisplayDate(doc.publishedAt) || formatDisplayDate(doc.createdAt),
    publishedAt: doc.publishedAt ? doc.publishedAt.toISOString() : null,
    readTime: doc.readTime || "",
    image: doc.image || "",
    imageAlt: doc.imageAlt || "",
    excerpt: doc.excerpt || "",
    metaTitle: doc.metaTitle || "",
    metaDescription: doc.metaDescription || "",
    keywords: doc.keywords || "",
    status: String(doc.status).toLowerCase() === "published" ? "Published" : "Draft",
    createdAt: doc.createdAt ? doc.createdAt.toISOString() : null,
    updatedAt: doc.updatedAt ? doc.updatedAt.toISOString() : null,
  };
  if (withContent) out.content = doc.content || "";
  return out;
}

export const LIST_PROJECTION = { content: 0 } as const;

export async function findBlog(id: string): Promise<BlogDoc | null> {
  if (!/^[A-Za-z0-9_-]{1,64}$/.test(id)) return null;
  return (await blogsCol()).findOne({ id });
}

export async function assertSlugAvailable(slug: string, exceptId?: string) {
  const clash = await (await blogsCol()).findOne(
    exceptId ? { slug, id: { $ne: exceptId } } : { slug },
    { projection: { _id: 1 } }
  );
  if (clash) {
    throw new ApiError(`Another blog already uses the URL slug "${slug}". Please change the slug.`, 409, {
      fields: { slug: "Slug already in use." },
    });
  }
}

export function newBlogId(): string {
  return new ObjectId().toHexString();
}

// ── Images (stored in MongoDB: Vercel has no persistent disk) ──────────────
export const IMAGE_URL_PREFIX = "/api/blog-images/";
export const MAX_IMAGE_BYTES = 4 * 1024 * 1024; // Vercel request bodies are limited to ~4.5 MB

/** Detect the real type from magic bytes (never trust the client's Content-Type). */
export function sniffImageType(buf: Buffer): string | null {
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "image/jpeg";
  if (buf.length >= 8 && buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])))
    return "image/png";
  if (buf.length >= 6 && /^GIF8[79]a$/.test(buf.subarray(0, 6).toString("latin1"))) return "image/gif";
  if (buf.length >= 12 && buf.subarray(0, 4).toString("latin1") === "RIFF" && buf.subarray(8, 12).toString("latin1") === "WEBP")
    return "image/webp";
  return null;
}

export async function saveImage(buf: Buffer, contentType: string): Promise<string> {
  const id = randomBytes(12).toString("hex");
  await (await imagesCol()).insertOne({ id, contentType, data: new Binary(buf), size: buf.length, createdAt: new Date() });
  return `${IMAGE_URL_PREFIX}${id}`;
}

/** Remove an uploaded image once no blog uses it any more. */
export async function deleteImageIfUnused(url: string | null | undefined) {
  if (!url || !url.startsWith(IMAGE_URL_PREFIX)) return;
  const id = url.slice(IMAGE_URL_PREFIX.length);
  if (!/^[a-f0-9]{24}$/.test(id)) return;
  const stillUsed = await (await blogsCol()).findOne({ image: url }, { projection: { _id: 1 } });
  if (!stillUsed) await (await imagesCol()).deleteOne({ id });
}
