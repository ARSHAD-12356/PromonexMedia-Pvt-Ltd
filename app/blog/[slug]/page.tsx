"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Check,
  ChevronRight,
  User,
  Sparkles,
  BookOpen,
  MessageCircle,
  Linkedin,
  Twitter,
  Copy,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import { DEFAULT_BLOGS, getMergedBlogs, getCategoryBadgeColor, BlogPostItem } from "@/lib/blogData";

export default function SingleBlogPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || "";

  // Immediately resolve default blog for instant SSR / zero loading flash
  const initialBlog =
    DEFAULT_BLOGS.find(
      (b) =>
        b.slug.toLowerCase() === slug.toLowerCase() ||
        b.id.toLowerCase() === slug.toLowerCase()
    ) || DEFAULT_BLOGS[0];

  const [blog, setBlog] = useState<BlogPostItem>(initialBlog);
  const [allBlogs, setAllBlogs] = useState<BlogPostItem[]>(DEFAULT_BLOGS);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const list = getMergedBlogs();
    setAllBlogs(list);

    if (slug) {
      const found = list.find(
        (b) =>
          b.slug.toLowerCase() === slug.toLowerCase() ||
          b.id.toLowerCase() === slug.toLowerCase()
      );
      if (found) {
        setBlog(found);
      }
    }
  }, [slug]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  const handleShare = (platform: "whatsapp" | "linkedin" | "twitter") => {
    if (typeof window === "undefined" || !blog) return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Read this article: ${blog.title}`);

    let shareUrl = "";
    if (platform === "whatsapp") {
      shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  // 3 Related Articles
  const relatedArticles = allBlogs
    .filter((b) => b.slug !== blog?.slug && b.id !== blog?.id)
    .slice(0, 3);

  const categoryStyle = getCategoryBadgeColor(blog.category);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Poppins',sans-serif] flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35]">
      {/* ── Constant Header ────────────────────────────────────────────── */}
      <Header />

      {/* ── Main Blog Content (White Background) ────────────────────────── */}
      <main className="flex-1 w-full bg-white">
        {/* Top Breadcrumb & Return to Blog bar */}
        <div className="border-b border-slate-200 bg-slate-50/70">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2 overflow-x-auto">
              <Link href="/" className="hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-400 shrink-0" />
              <Link href="/blog" className="hover:text-blue-600 font-medium transition-colors">
                Blog
              </Link>
              <ChevronRight size={14} className="text-slate-400 shrink-0" />
              <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                {blog.title}
              </span>
            </nav>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to all blogs</span>
            </Link>
          </div>
        </div>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16">
          {/* Article Header */}
          <header className="mb-8 sm:mb-10 text-left">
            {/* Category badge & Reading Stats */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm mb-4">
              <span
                className={`px-3 py-1 rounded-full font-bold border ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}
              >
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

            {/* Main H1 Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#0B1536] tracking-tight leading-[1.25] sm:leading-[1.22]">
              {blog.title}
            </h1>

            {/* Excerpt Lead Paragraph */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {blog.excerpt}
            </p>

            {/* Author Profile & Social Share Row */}
            <div className="mt-6 sm:mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-[#00D9FF] flex items-center justify-center font-bold text-base text-white shadow-md shadow-blue-500/20">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                    {blog.author}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">{blog.authorRole}</p>
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-1 hidden sm:inline">
                  Share:
                </span>
                <button
                  onClick={() => handleShare("whatsapp")}
                  title="Share on WhatsApp"
                  className="p-2.5 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle size={16} />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  title="Share on LinkedIn"
                  className="p-2.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                >
                  <Linkedin size={16} />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  title="Share on X"
                  className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <Twitter size={16} />
                </button>
                <button
                  onClick={handleCopyLink}
                  title="Copy Link"
                  className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors relative"
                >
                  {copiedLink ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </header>

          {/* Featured Hero Image */}
          <div className="relative w-full h-64 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden shadow-xl mb-10 border border-slate-200 bg-slate-100">
            <Image
              src={blog.image}
              alt={blog.imageAlt || blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {/* Key Takeaways Callout Box */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 shadow-sm">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm sm:text-base mb-2.5">
              <Sparkles size={18} className="text-blue-600" />
              <span>Key Takeaway & Executive Summary</span>
            </div>
            <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
              This guide highlights the core growth frameworks implemented by Promonex Media to scale client ROI,
              strengthen search positioning, and optimize acquisition funnels in modern digital ecosystems.
            </p>
          </div>

          {/* Formatted Article Body */}
          <div className="prose prose-slate max-w-none text-slate-800 space-y-6 text-[16px] sm:text-[17px] leading-relaxed font-normal">
            {blog.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#0B1536] pt-6 pb-2 border-b border-slate-100"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-lg sm:text-xl font-bold text-blue-700 pt-4"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const bulletItems = paragraph.split("\n");
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 text-slate-700">
                    {bulletItems.map((item, bIdx) => (
                      <li key={bIdx}>{item.replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-slate-700">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Bio Box */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-[#00D9FF] flex items-center justify-center font-extrabold text-2xl text-white shrink-0 shadow-md">
              {blog.author.charAt(0)}
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h4 className="text-base sm:text-lg font-bold text-slate-900">{blog.author}</h4>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-100 text-blue-700">
                  {blog.authorRole}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Part of the specialized growth and strategy unit at Promonex Media Pvt. Ltd., empowering businesses
                in Patna and across India with high-conversion marketing engines, technical SEO, and creative excellence.
              </p>
            </div>
          </div>

          {/* In-Article Conversion Card */}
          <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#041249] via-[#0B1E63] to-[#040D36] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold text-[#00D9FF] tracking-wider uppercase">
                Free Growth Consultation
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold mt-1 text-white">
                Want to implement these results for your brand?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg">
                Speak directly with Promonex Media strategists to conduct a complimentary audit of your website and advertising channels.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Get Free Audit
            </Link>
          </div>
        </article>

        {/* ── Related Articles Section (Light Background) ───────────────── */}
        <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Keep Learning
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                  Related Insights & Guides
                </h3>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                <span>View all articles</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => {
                const catBadge = getCategoryBadgeColor(rel.category);
                return (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={rel.image}
                          alt={rel.imageAlt || rel.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${catBadge.bg} ${catBadge.text} ${catBadge.border}`}
                          >
                            {rel.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                          <span>{rel.date}</span>
                          <span>•</span>
                          <span>{rel.readTime}</span>
                        </div>

                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>

                        <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                      <span>Read Article</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>View all articles</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Constant Footer ────────────────────────────────────────────── */}
      <FooterSection />

      {/* ── Constant Floating Buttons & Social Media Rail ──────────────── */}
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
