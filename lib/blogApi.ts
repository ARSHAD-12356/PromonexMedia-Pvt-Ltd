/**
 * Client for the Promonex Blog API: Next.js route handlers under /api backed by MongoDB Atlas
 * (see app/api and lib/server). Same origin, so the HttpOnly session cookie is sent automatically.
 */
import type { ManagedBlog } from "./adminBlogs";

export const BLOG_API_URL = "/api";
export const isBlogApiEnabled = true;

export type BlogInput = Omit<ManagedBlog, "id">;

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export class BlogApiError extends Error {
  status: number;
  fields?: Record<string, string>;
  constructor(message: string, status: number, fields?: Record<string, string>) {
    super(message);
    this.status = status;
    this.fields = fields;
  }
}

// CSRF token for the current admin session (kept in memory only)
let csrfToken = "";

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!isBlogApiEnabled) {
    throw new BlogApiError("Blog API is not available.", 503);
  }
  const method = (init.method || "GET").toUpperCase();
  const headers = new Headers(init.headers);
  if (init.body && !(init.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (method !== "GET" && csrfToken) {
    headers.set("X-CSRF-Token", csrfToken);
  }

  let res: Response;
  try {
    res = await fetch(`${BLOG_API_URL}${path}`, {
      ...init,
      method,
      headers,
      credentials: "include", // send the HttpOnly admin session cookie
      cache: "no-store",
    });
  } catch {
    throw new BlogApiError("Cannot reach the blog server. Check your internet connection.", 0);
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok || data?.ok === false) {
    throw new BlogApiError(data?.error || `Request failed (${res.status}).`, res.status, data?.fields);
  }
  if (typeof data?.csrfToken === "string") {
    csrfToken = data.csrfToken;
  }
  return data as T;
}

// ── Admin auth ─────────────────────────────────────────────────────────────
export const adminAuth = {
  login: (email: string, password: string) /* email or admin ID */ =>
    request<{ admin: AdminUser; csrfToken: string }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  /** Current session (also refreshes the CSRF token). Throws 401 when logged out. */
  me: () => request<{ admin: AdminUser; csrfToken: string }>("/auth/me"),
  logout: async () => {
    try {
      await request("/auth/logout", { method: "POST" });
    } finally {
      csrfToken = "";
    }
  },
};

// ── Admin blogs ────────────────────────────────────────────────────────────
export const adminBlogsApi = {
  list: () => request<{ blogs: ManagedBlog[] }>("/admin/blogs").then((d) => d.blogs),
  get: (id: string) => request<{ blog: ManagedBlog }>(`/admin/blogs/${encodeURIComponent(id)}`).then((d) => d.blog),
  create: (input: BlogInput) =>
    request<{ blog: ManagedBlog }>("/admin/blogs", { method: "POST", body: JSON.stringify(input) }).then((d) => d.blog),
  update: (id: string, input: BlogInput) =>
    request<{ blog: ManagedBlog }>(`/admin/blogs/${encodeURIComponent(id)}`, {
      method: "PUT",
      body: JSON.stringify(input),
    }).then((d) => d.blog),
  setStatus: (id: string, status: "published" | "draft") =>
    request<{ blog: ManagedBlog }>(`/admin/blogs/${encodeURIComponent(id)}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }).then((d) => d.blog),
  remove: (id: string) => request(`/admin/blogs/${encodeURIComponent(id)}`, { method: "DELETE" }),
  uploadImage: (file: Blob, filename = "image.jpg") => {
    const form = new FormData();
    form.append("image", file, filename);
    return request<{ upload: { url: string } }>("/admin/uploads", { method: "POST", body: form }).then(
      (d) => d.upload.url
    );
  },
};

// ── Public blogs ───────────────────────────────────────────────────────────
export async function fetchPublishedBlogs(): Promise<ManagedBlog[]> {
  const res = await fetch(`${BLOG_API_URL}/blogs`, { cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !Array.isArray(data?.blogs)) throw new BlogApiError(data?.error || "Failed to load blogs.", res.status);
  return data.blogs;
}

export async function fetchPublishedBlog(slug: string): Promise<ManagedBlog | null> {
  const res = await fetch(`${BLOG_API_URL}/blogs/${encodeURIComponent(slug)}`, { cache: "no-store" });
  if (res.status === 404) return null;
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data?.blog) throw new BlogApiError(data?.error || "Failed to load blog.", res.status);
  return data.blog;
}

/** Resize/compress a photo in the browser before upload (keeps uploads small and fast). */
export function compressImage(file: File, maxSize = 1600, quality = 0.85): Promise<Blob> {
  return new Promise((resolve, reject) => {
    if (file.type === "image/gif") {
      resolve(file); // keep animations
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Unsupported image file."));
    };
    img.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(file);
        return;
      }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => (blob ? resolve(blob) : resolve(file)), "image/webp", quality);
    };
    img.src = url;
  });
}

/** Convert a data: URL (legacy localStorage images) into a Blob for upload. */
export async function dataUrlToBlob(dataUrl: string): Promise<Blob> {
  const res = await fetch(dataUrl);
  return res.blob();
}
