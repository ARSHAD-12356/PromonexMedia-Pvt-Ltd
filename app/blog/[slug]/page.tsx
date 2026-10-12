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
  Search,
  Phone,
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
  const [searchTerm, setSearchTerm] = useState("");

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
  const categoryCounts = allBlogs.reduce<Record<string, number>>((counts, post) => {
    counts[post.category] = (counts[post.category] || 0) + 1;
    return counts;
  }, {});
  const recentArticles = allBlogs
    .filter((post) => post.id !== blog.id)
    .slice(0, 5);
  const categoryStyle = {
    bg: "bg-[#EAFBFF]",
    text: "text-[#0478FD]",
    border: "border-[#BDEFFF]",
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Poppins',sans-serif] flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35]">
      {/* ── Constant Header ────────────────────────────────────────────── */}
      <Header />

      {/* ── Main Blog Content (White Background) ────────────────────────── */}
      <main className="flex-1 w-full bg-white">
        {/* Top Breadcrumb & Return to Blog bar */}
        <div className="border-b border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2 overflow-x-auto">
              <Link href="/" className="hover:text-[#0478FD] font-medium transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-400 shrink-0" />
              <Link href="/blog" className="hover:text-[#0478FD] font-medium transition-colors">
                Blog
              </Link>
              <ChevronRight size={14} className="text-slate-400 shrink-0" />
              <span className="text-[#020B35] font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                {blog.title}
              </span>
            </nav>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0478FD] hover:text-[#020B35] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to all blogs</span>
            </Link>
          </div>
        </div>

        {/* Article Container */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-8">
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-7 lg:p-8">
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
            <div className="mt-5 flex items-center gap-3">
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

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
            <span className="text-sm font-medium text-slate-600">Share this article</span>
            <div className="flex items-center gap-2">
              <button onClick={() => handleShare("whatsapp")} title="Share on WhatsApp" aria-label="Share on WhatsApp" className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition hover:border-[#00D9FF] hover:bg-[#EAFBFF] hover:text-[#020B35]"><MessageCircle size={16} /></button>
              <button onClick={() => handleShare("twitter")} title="Share on X" aria-label="Share on X" className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition hover:border-[#00D9FF] hover:bg-[#EAFBFF] hover:text-[#020B35]"><Twitter size={16} /></button>
              <button onClick={() => handleShare("linkedin")} title="Share on LinkedIn" aria-label="Share on LinkedIn" className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition hover:border-[#00D9FF] hover:bg-[#EAFBFF] hover:text-[#020B35]"><Linkedin size={16} /></button>
              <button onClick={handleCopyLink} title="Copy link" aria-label="Copy link" className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition hover:border-[#00D9FF] hover:bg-[#EAFBFF] hover:text-[#020B35]">{copiedLink ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}</button>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#020B35] transition hover:border-[#00D9FF] hover:bg-[#EAFBFF]"><ArrowLeft size={15} /> All posts</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#00D9FF] px-4 py-2.5 text-sm font-semibold text-[#020B35] transition hover:bg-[#35E2FF]">Discuss your project <ArrowRight size={15} /></Link>
          </div>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-24">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase text-[#020B35]">Search</h2>
            <form onSubmit={(event) => { event.preventDefault(); router.push(`/blog?search=${encodeURIComponent(searchTerm)}`); }} className="relative mt-3">
              <Search size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search articles..." aria-label="Search articles" className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-[#101828] outline-none transition placeholder:text-slate-400 focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/20" />
            </form>
            <p className="mt-2.5 text-xs text-slate-500">Press Enter to view results on the blog page.</p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase text-[#020B35]">Categories</h2>
            <div className="mt-3 space-y-1">
              <Link href="/blog" className="flex items-center justify-between gap-3 rounded-lg bg-[#EAFBFF] px-3 py-2.5 text-sm font-semibold text-[#020B35] transition hover:bg-[#D7F7FF]">
                <span>All Posts</span><span className="text-[#0478FD]">{allBlogs.length}</span>
              </Link>
              {Object.entries(categoryCounts).map(([category, count]) => (
                <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`} className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-[#EAFBFF] hover:text-[#020B35]">
                  <span>{category}</span><span className="text-slate-400">{count}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase text-[#020B35]">Recent Posts</h2>
            <div className="mt-4 space-y-4">
              {recentArticles.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group flex items-start gap-3">
                  <span className="relative h-[62px] w-[70px] shrink-0 overflow-hidden rounded-lg bg-slate-100">
                    <Image src={post.image} alt={post.imageAlt || post.title} fill sizes="70px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </span>
                  <span className="min-w-0">
                    <span className="line-clamp-2 block text-[13px] font-semibold leading-snug text-[#101828] transition-colors group-hover:text-[#0478FD]">{post.title}</span>
                    <span className="mt-1.5 block text-[11px] text-slate-500">{post.date}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[#BDEFFF] bg-[#F2FCFF] p-5">
            <h2 className="text-sm font-semibold text-[#020B35]">Need help with your project?</h2>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">Talk to our team about web, SEO, or marketing.</p>
            <Link href="/contact" className="mt-3 inline-flex rounded-lg bg-[#00D9FF] px-4 py-2.5 text-xs font-semibold text-[#020B35] transition hover:bg-[#35E2FF]">Get in touch</Link>
          </section>
        </aside>
        </div>

        <section className="border-y border-[#BDEFFF] bg-[#F2FCFF] px-4 py-12 text-center sm:py-16">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0478FD]">Let&apos;s work together</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#020B35] sm:text-4xl">We&apos;d love to hear about your requirements</h2>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#00BFFF] px-6 py-3 text-sm font-semibold text-[#020B35] transition hover:bg-[#00D9FF]">
              Discuss your project <ArrowRight size={16} />
            </Link>
            <p className="mt-5 text-sm text-slate-600">Or call us now</p>
            <a href="tel:+917061941818" className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-[#0478FD] hover:text-[#020B35]"><Phone size={17} /> +91 70619 41818</a>
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
