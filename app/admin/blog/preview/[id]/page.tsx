"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ShieldCheck,
  Eye,
  Pencil,
  Calendar,
  Clock,
  Search,
  ExternalLink,
} from "lucide-react";
import { ManagedBlog, loadManagedBlogs } from "@/lib/adminBlogs";
import { BlogContent } from "@/lib/blogContent";

const BACK_HREF = "/admin/blog?tab=list";

export default function AdminBlogPreviewPage() {
  const params = useParams();
  const router = useRouter();
  const id = decodeURIComponent((params?.id as string) || "");

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blog, setBlog] = useState<ManagedBlog | null | undefined>(undefined);

  // Authentication Guard + load the blog (drafts included)
  useEffect(() => {
    if (sessionStorage.getItem("promonex_admin_auth") !== "true") {
      router.replace("/admin/login");
      return;
    }
    setIsAuthenticated(true);
    setBlog(loadManagedBlogs().find((b) => b.id === id) || null);
  }, [id, router]);

  if (!isAuthenticated || blog === undefined) {
    return (
      <div className="min-h-screen bg-[#020B35] flex items-center justify-center text-white font-medium">
        Verifying Admin Access...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      {/* ── Admin Header ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 w-full bg-[#020B35] text-white border-b border-cyan-400/20 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <Link
            href={BACK_HREF}
            className="flex items-center gap-2 group px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-xs sm:text-sm font-semibold text-slate-200"
            title="Back to Manage All Blogs"
          >
            <ArrowLeft size={16} className="text-[#00D9FF] group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Blogs</span>
          </Link>

          <span className="h-5 w-px bg-slate-700 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#3B82F6] flex items-center justify-center shadow-[0_0_12px_rgba(0,217,255,0.4)]">
              <ShieldCheck size={18} className="text-[#020B35] stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                Promonex Media
              </h1>
              <span className="text-[10px] text-[#00D9FF] font-semibold tracking-wider uppercase block">
                Blog Preview · Admin
              </span>
            </div>
          </div>
        </div>

        {blog && (
          <div className="flex items-center gap-2 sm:gap-3">
            {blog.status === "Published" && (
              <Link
                href={`/blog/${blog.slug}`}
                target="_blank"
                className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors"
              >
                <span>View on Live Site</span>
                <ExternalLink size={13} className="text-[#00D9FF]" />
              </Link>
            )}
            <Link
              href={`/admin/blog?edit=${encodeURIComponent(blog.id)}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00D9FF] text-[#020B35] hover:bg-[#35E2FF] text-xs font-bold transition-colors"
            >
              <Pencil size={14} />
              <span>Edit Blog</span>
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1 w-full">
        {!blog ? (
          <div className="max-w-xl mx-auto px-4 py-20 text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
              <Search size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Blog not found</h2>
            <p className="mt-1 text-sm text-slate-500">This post may have been deleted.</p>
            <Link
              href={BACK_HREF}
              className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#020B35] text-white text-xs font-bold hover:bg-[#061543] transition"
            >
              <ArrowLeft size={14} />
              <span>Back to Blogs</span>
            </Link>
          </div>
        ) : (
          <>
            {/* Preview status bar */}
            <div className="border-b border-slate-200 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 font-semibold text-slate-500">
                  <Eye size={14} className="text-[#0284C7]" />
                  Admin preview — /blog/{blog.slug}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-bold ${
                    blog.status === "Published"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}
                >
                  {blog.status}
                </span>
              </div>
            </div>

            {/* Article */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
                <header className="mb-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm mb-4">
                    <span className="px-3 py-1 rounded-full font-bold border bg-[#EAFBFF] text-[#0478FD] border-[#BDEFFF]">
                      {blog.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <Calendar size={14} className="text-slate-400" />
                      {blog.date}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <Clock size={14} className="text-slate-400" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1536] tracking-tight leading-tight">
                    {blog.title}
                  </h1>

                  {blog.excerpt && (
                    <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">{blog.excerpt}</p>
                  )}

                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-[#00D9FF] flex items-center justify-center font-bold text-base text-white shadow-md shadow-blue-500/20">
                      {blog.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-slate-900 leading-tight">{blog.author}</div>
                      <div className="text-xs sm:text-sm text-slate-500">{blog.authorRole}</div>
                    </div>
                  </div>
                </header>

                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.imageAlt || blog.title}
                    className="w-full h-64 sm:h-96 object-cover rounded-2xl border border-slate-200 bg-slate-100 mb-10"
                  />
                )}

                <BlogContent content={blog.content} />

                {/* SEO summary for the admin */}
                <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Google Search Snippet
                  </span>
                  <div className="text-xs text-emerald-800 font-mono">
                    https://promonexmedia.com › blog › {blog.slug}
                  </div>
                  <div className="text-base text-blue-700 font-semibold mt-0.5">{blog.metaTitle || blog.title}</div>
                  <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {blog.metaDescription || blog.excerpt}
                  </div>
                  {blog.keywords && (
                    <div className="mt-2 text-[11px] text-slate-500">
                      <span className="font-semibold">Keywords:</span> {blog.keywords}
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200 pt-6">
                  <Link
                    href={BACK_HREF}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#020B35] transition hover:border-[#00D9FF] hover:bg-[#EAFBFF]"
                  >
                    <ArrowLeft size={15} /> Back to Blogs
                  </Link>
                  <Link
                    href={`/admin/blog?edit=${encodeURIComponent(blog.id)}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#020B35] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#061543]"
                  >
                    <Pencil size={15} className="text-[#00D9FF]" /> Edit this Blog
                  </Link>
                </div>
              </article>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
