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
  Filter,
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
  const gridBlogs = useMemo(() => {
    if (searchQuery || selectedCategory !== "All") {
      return filteredBlogs;
    }
    return filteredBlogs.filter((b) => b.id !== featuredBlog?.id);
  }, [filteredBlogs, featuredBlog, searchQuery, selectedCategory]);

  return (
    <div className="relative min-h-screen bg-[#020B35] text-white overflow-hidden flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35] font-['Poppins',sans-serif]">
      {/* ── Background Gradients ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 75% 20%, rgba(0, 191, 255, 0.14) 0%, transparent 45%),
            radial-gradient(circle at 18% 30%, rgba(91, 60, 196, 0.16) 0%, transparent 40%),
            radial-gradient(circle at 50% 85%, rgba(6, 20, 74, 0.45) 0%, transparent 60%)
          `,
        }}
      />

      {/* Subtle fine mesh grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Constant Header ────────────────────────────────────────────── */}
      <Header />

      {/* ── Main Page Content ──────────────────────────────────────────── */}
      <main className="relative z-10 flex-1 flex flex-col pt-24 sm:pt-28 pb-16">
        {/* ── Breadcrumb & Top Indicator ─────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Link href="/" className="hover:text-[#00D9FF] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-[#00D9FF] font-medium">Blog & Insights</span>
          </nav>
        </div>

        {/* ── Page Hero Heading Section ──────────────────────────────────── */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/10 text-[#00D9FF] text-xs sm:text-[13px] font-semibold tracking-wider uppercase mb-5 shadow-[0_0_20px_rgba(0,217,255,0.2)]"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>PROMONEX KNOWLEDGE HUB</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.18]"
            >
              Latest Insights &{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00D9FF_0%,#189CFD_40%,#BB20E9_80%,#FA5679_100%)] drop-shadow-[0_0_28px_rgba(0,217,255,0.4)]">
                Growth Strategies
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal"
            >
              Explore actionable marketing guides, SEO frameworks, paid ad breakdowns, and design playbooks
              crafted by Promonex Media specialists to accelerate business growth.
            </motion.p>
          </div>

          {/* ── Search & Filter Controls Bar ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-10 sm:mt-12 bg-[#040D36]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-thin">
                <Filter size={15} className="text-slate-400 shrink-0 hidden sm:block mr-1" />
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[linear-gradient(90deg,#00D9FF,#0478FD)] text-white shadow-[0_0_15px_rgba(0,217,255,0.4)] font-semibold"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80 shrink-0">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title or keyword..."
                  className="w-full bg-[#020B35] border border-white/15 rounded-xl pl-10 pr-9 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Results count status */}
            <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>
                Showing <strong className="text-white">{filteredBlogs.length}</strong> {filteredBlogs.length === 1 ? "article" : "articles"}
                {selectedCategory !== "All" && ` in "${selectedCategory}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
              {(selectedCategory !== "All" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-[#00D9FF] hover:underline"
                >
                  Reset filters
                </button>
              )}
            </div>
          </motion.div>
        </section>

        {/* ── Featured Blog Spotlight (Direct Page Link) ─────────────────── */}
        {!searchQuery && selectedCategory === "All" && featuredBlog && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="group block relative bg-gradient-to-br from-[#041249] via-[#040D36] to-[#020B35] border border-[#00D9FF]/30 rounded-3xl overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.5)] hover:border-[#00D9FF] hover:shadow-[0_20px_60px_rgba(0,217,255,0.25)] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-8 lg:p-10">
                  {/* Image Column */}
                  <div className="lg:col-span-7 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                    <Image
                      src={featuredBlog.image}
                      alt={featuredBlog.imageAlt || featuredBlog.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B35]/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00D9FF] text-[#020B35] shadow-[0_0_15px_rgba(0,217,255,0.6)]">
                        <Sparkles size={12} />
                        FEATURED ARTICLE
                      </span>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="lg:col-span-5 flex flex-col justify-center text-left">
                    <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                      {(() => {
                        const col = getCategoryColor(featuredBlog.category);
                        return (
                          <span className={`px-2.5 py-0.5 rounded-full font-semibold border ${col.bg} ${col.text} ${col.border}`}>
                            {featuredBlog.category}
                          </span>
                        );
                      })()}
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Calendar size={13} />
                        {featuredBlog.date}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Clock size={13} />
                        {featuredBlog.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-[#00D9FF] transition-colors leading-snug">
                      {featuredBlog.title}
                    </h2>

                    <p className="mt-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {featuredBlog.excerpt}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#0478FD] flex items-center justify-center text-xs font-bold text-[#020B35]">
                          {featuredBlog.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">{featuredBlog.author}</p>
                          <p className="text-[11px] text-slate-400">{featuredBlog.authorRole}</p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D9FF] group-hover:text-white transition-colors">
                        <span>Read Story</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </section>
        )}

        {/* ── All Blog Articles Grid (Direct Page Links) ─────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
          {gridBlogs.length === 0 ? (
            <div className="text-center py-16 sm:py-24 bg-[#040D36]/40 border border-white/5 rounded-3xl max-w-xl mx-auto">
              <BookOpen size={48} className="mx-auto text-slate-500 mb-4 stroke-1" />
              <h3 className="text-lg sm:text-xl font-bold text-white">No articles found</h3>
              <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">
                No blog posts match your current search criteria. Try choosing another category or clearing your search.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-5 px-5 py-2 rounded-full bg-[#00D9FF] text-[#020B35] font-semibold text-xs transition-all hover:bg-white"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {gridBlogs.map((blog, idx) => {
                const catColor = getCategoryColor(blog.category);
                return (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
                    className="flex flex-col bg-[#040D36]/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#00D9FF]/60 hover:shadow-[0_16px_40px_rgba(0,217,255,0.18)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Link href={`/blog/${blog.slug}`} className="group flex-1 flex flex-col justify-between">
                      {/* Card Thumbnail */}
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                        <Image
                          src={blog.image}
                          alt={blog.imageAlt || blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040D36] via-transparent to-transparent opacity-80" />

                        {/* Category Tag on Image */}
                        <div className="absolute top-3.5 left-3.5">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border shadow-sm ${catColor.bg} ${catColor.text} ${catColor.border}`}
                          >
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="flex-1 flex flex-col p-5 sm:p-6 justify-between">
                        <div>
                          {/* Meta info */}
                          <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12} />
                              {blog.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={12} />
                              {blog.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors line-clamp-2 leading-snug">
                            {blog.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="mt-2.5 text-xs sm:text-[13px] text-slate-300 line-clamp-3 leading-relaxed">
                            {blog.excerpt}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#0478FD] flex items-center justify-center text-[10px] font-bold text-[#020B35]">
                              {blog.author.charAt(0)}
                            </div>
                            <span className="text-xs text-slate-300 font-medium truncate max-w-[120px]">
                              {blog.author}
                            </span>
                          </div>

                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00D9FF] group-hover:text-white transition-colors">
                            <span>Read Article</span>
                            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          )}
        </section>

        {/* ── Newsletter & Growth Consultation CTA ───────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 sm:mt-20">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-[#00D9FF]/30 bg-gradient-to-r from-[#041249] via-[#081B5E] to-[#040D36] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#00D9FF] uppercase">
                TAKE YOUR MARKETING TO THE NEXT LEVEL
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 leading-tight">
                Ready to Turn Digital Traffic Into Predictable Revenue?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm sm:text-base mt-3 leading-relaxed">
                Connect with our team for a bespoke marketing strategy, high-intent campaign architecture, and
                a complimentary website SEO audit.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] shadow-[0_8px_30px_rgba(4,120,253,0.4)] hover:shadow-[0_12px_40px_rgba(4,120,253,0.7)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </div>
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
