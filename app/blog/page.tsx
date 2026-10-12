"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  X,
  ChevronRight,
  Sparkles,
  BookOpen,
  Phone,
} from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import { DEFAULT_BLOGS, getMergedBlogs, getCategoryBadgeColor, BlogPostItem } from "@/lib/blogData";

const CATEGORIES = ["All", "SEO", "Social Media", "Google Ads", "Performance", "Web Design", "Branding"];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  SEO: { bg: "bg-[#EFF6FF]", text: "text-[#2563EB]", border: "border-[#DBEAFE]" },
  "Social Media": { bg: "bg-[#FAF5FF]", text: "text-[#9333EA]", border: "border-[#F3E8FF]" },
  "Google Ads": { bg: "bg-[#F0F9FF]", text: "text-[#0284C7]", border: "border-[#E0F2FE]" },
  Performance: { bg: "bg-[#FDF2F8]", text: "text-[#DB2777]", border: "border-[#FCE7F3]" },
  "Web Design": { bg: "bg-[#ECFDF5]", text: "text-[#059669]", border: "border-[#D1FAE5]" },
  Branding: { bg: "bg-[#FFF7ED]", text: "text-[#EA580C]", border: "border-[#FFEDD5]" },
};

function getCategoryColor(category: string) {
  return (
    CATEGORY_COLORS[category] || {
      bg: "bg-[#EFF6FF]",
      text: "text-[#2563EB]",
      border: "border-[#DBEAFE]",
    }
  );
}

function BlogPageContent() {
  const [blogs, setBlogs] = useState<BlogPostItem[]>(DEFAULT_BLOGS);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Load custom blogs from Admin CMS localStorage
  useEffect(() => {
    const loadBlogs = () => {
      setBlogs(getMergedBlogs());
    };

    loadBlogs();
    const params = new URLSearchParams(window.location.search);
    const requestedSearch = params.get("search");
    const requestedCategory = params.get("category");
    if (requestedSearch) setSearchQuery(requestedSearch);
    if (requestedCategory) setSelectedCategory(requestedCategory);

    window.addEventListener("storage", loadBlogs);
    window.addEventListener("promonex-blog-updated", loadBlogs);
    return () => {
      window.removeEventListener("storage", loadBlogs);
      window.removeEventListener("promonex-blog-updated", loadBlogs);
    };
  }, []);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.excerpt.toLowerCase().includes(q) ||
        blog.category.toLowerCase().includes(q) ||
        blog.author.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  // Top featured blog (falls back to first item)
  const featuredBlog = useMemo(() => {
    return filteredBlogs.find((b) => b.featured) || filteredBlogs[0];
  }, [filteredBlogs]);

  // Grid blogs excluding the featured blog if showing all
  const gridBlogs =
    !searchQuery && selectedCategory === "All"
      ? filteredBlogs.filter((blog) => blog.id !== featuredBlog?.id)
      : filteredBlogs;

  const categoryCounts = useMemo(
    () =>
      blogs.reduce<Record<string, number>>((counts, blog) => {
        counts[blog.category] = (counts[blog.category] || 0) + 1;
        return counts;
      }, {}),
    [blogs]
  );

  const featuredBlogs = useMemo(
    () => blogs.filter((blog) => blog.featured).concat(blogs.filter((blog) => !blog.featured)).slice(0, 3),
    [blogs]
  );

  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-white font-['Poppins',sans-serif] text-[#101828] selection:bg-[#00D9FF] selection:text-[#020B35]">
      {/* ── Constant Header ────────────────────────────────────────────── */}
      <Header />

      {/* ── Main Page Content ──────────────────────────────────────────── */}
      <main className="relative z-10 flex-1 bg-white pt-24 pb-14 sm:pt-28 sm:pb-20">
        {/* ── Breadcrumb & Top Indicator ─────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
            <Link href="/" className="transition-colors hover:text-[#0478FD]">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="font-medium text-[#020B35]">Blog</span>
          </nav>
        </div>

        {/* ── Page Hero Heading Section ──────────────────────────────────── */}
        <section className="relative mx-auto mb-10 w-full max-w-7xl px-4 sm:mb-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ffbd91] bg-[#fff7f0] px-3 py-1 text-xs font-semibold text-[#a64b16] sm:text-[13px]"
            >
              <Sparkles size={14} />
              <span>Insights &amp; updates</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl font-bold leading-tight text-[#101828] sm:text-4xl md:text-5xl"
            >
              Latest Insights &amp; Growth Strategies
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg"
            >
              Explore actionable marketing guides, SEO frameworks, paid ad breakdowns, and design playbooks
              crafted by Promonex Media specialists to accelerate business growth.
            </motion.p>
          </div>

        </section>

        <section className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-9 lg:px-8">
          <div className="min-w-0">
            <div className="relative mb-5">
              <Search size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-11 text-sm text-[#101828] shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#00BFFF] focus:ring-4 focus:ring-[#00BFFF]/10 sm:text-base"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#020B35]"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            <div className="mb-4 flex min-h-6 items-center justify-between gap-4 text-xs text-slate-500 sm:text-sm">
              <span>
                Showing <strong className="font-semibold text-[#101828]">{filteredBlogs.length}</strong>{" "}
                {filteredBlogs.length === 1 ? "article" : "articles"}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </span>
              {(selectedCategory !== "All" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="shrink-0 font-semibold text-[#0478FD] hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {gridBlogs.length === 0 ? (
              <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
                <BookOpen size={42} className="mx-auto mb-4 stroke-1 text-slate-400" />
                <h3 className="text-lg font-bold text-[#101828]">No articles found</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
                  No blog posts match your current search. Try another category or clear your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {gridBlogs.map((blog, idx) => {
                  const catColor = getCategoryColor(blog.category);
                  return (
                    <motion.article
                      key={blog.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.4, delay: (idx % 3) * 0.07 }}
                      className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_2px_10px_rgba(16,24,40,0.035)] outline-none transition duration-300 hover:-translate-y-1 hover:border-[#00BFFF] hover:shadow-[0_12px_32px_rgba(0,191,255,0.16)] focus-within:border-[#00BFFF] focus-within:ring-2 focus-within:ring-[#00BFFF]/25"
                    >
                      <Link href={`/blog/${blog.slug}`} className="group/card flex flex-1 flex-col">
                        <div className="relative h-48 w-full overflow-hidden bg-slate-100 sm:h-52">
                          <Image
                            src={blog.image}
                            alt={blog.imageAlt || blog.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                          />
                          <span
                            className={`absolute left-3.5 top-3.5 inline-block rounded-full border px-2.5 py-1 text-[11px] font-semibold shadow-sm ${catColor.bg} ${catColor.text} ${catColor.border}`}
                          >
                            {blog.category}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                          <div>
                            <div className="mb-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-slate-500 sm:text-xs">
                              <span className="inline-flex items-center gap-1.5">
                                <Calendar size={12} />
                                {blog.date}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span className="inline-flex items-center gap-1.5">
                                <Clock size={12} />
                                {blog.readTime}
                              </span>
                            </div>
                            <h2 className="line-clamp-2 text-base font-semibold leading-snug text-[#101828] transition-colors group-hover/card:text-[#0478FD] sm:text-lg">
                              {blog.title}
                            </h2>
                            <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                              {blog.excerpt}
                            </p>
                          </div>
                          <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-3.5">
                            <span className="truncate text-xs font-medium text-slate-500">{blog.author}</span>
                            <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#0478FD]">
                              Read article
                              <ArrowRight size={13} className="transition-transform group-hover/card:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <h2 className="text-sm font-semibold uppercase text-[#101828]">Categories</h2>
              <div className="mt-3 space-y-1">
                {["All", ...Object.keys(categoryCounts)].map((category) => {
                  const isActive = selectedCategory === category;
                  const count = category === "All" ? blogs.length : categoryCounts[category];
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      aria-pressed={isActive}
                      className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-[#00D9FF] font-semibold text-[#020B35] shadow-[0_4px_14px_rgba(0,217,255,0.2)]"
                          : "text-slate-600 hover:bg-[#EAFBFF] hover:text-[#020B35]"
                      }`}
                    >
                      <span>{category === "All" ? "All Posts" : category}</span>
                      <span className={isActive ? "text-[#020B35]/70" : "text-slate-400"}>{count}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <h2 className="text-sm font-semibold uppercase text-[#101828]">Featured Posts</h2>
              <div className="mt-4 space-y-4">
                {featuredBlogs.map((blog) => (
                  <Link key={blog.id} href={`/blog/${blog.slug}`} className="group flex items-start gap-3">
                    <div className="relative h-[62px] w-[70px] shrink-0 overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src={blog.image}
                        alt={blog.imageAlt || blog.title}
                        fill
                        sizes="70px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="min-w-0">
                      <span className="line-clamp-2 block text-[13px] font-semibold leading-snug text-[#101828] transition-colors group-hover:text-[#0478FD]">
                        {blog.title}
                      </span>
                      <span className="mt-1.5 block text-[11px] text-slate-500">{blog.date}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </section>

        <section
          className="relative mt-16 overflow-hidden border-y border-[#dbeaf4] bg-[#f5fbff] px-4 py-14 text-center sm:mt-20 sm:py-16"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at 50% 115%, transparent 0 28px, rgba(0, 191, 255, 0.07) 29px 30px, transparent 31px 48px)",
          }}
        >
          <div className="relative mx-auto max-w-5xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0478FD] sm:text-sm">
              Let&apos;s work together
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#101828] sm:text-3xl md:text-4xl">
              We Love to Listen to Your Requirements
            </h2>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#00A6D6] bg-white px-8 text-sm font-semibold text-[#075985] transition duration-200 hover:bg-[#020B35] hover:text-white hover:shadow-[0_8px_24px_rgba(0,191,255,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00BFFF]/20 sm:text-base"
            >
              Estimate Project
              <ArrowRight size={16} />
            </Link>
            <p className="mt-5 text-sm text-slate-600">Or call us now</p>
            <a
              href="tel:+917061941818"
              className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-[#008c68] transition-colors hover:text-[#0478FD] sm:text-xl"
            >
              <Phone size={17} />
              +91 70619 41818
            </a>
          </div>
        </section>
      </main>

      {/* ── Constant Footer ────────────────────────────────────────────── */}
      <FooterSection />

      {/* ── Constant Floating Buttons & Social Rail ────────────────────── */}
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#020B35] flex items-center justify-center text-white">
          <div className="w-10 h-10 border-2 border-[#00D9FF] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <BlogPageContent />
    </Suspense>
  );
}
