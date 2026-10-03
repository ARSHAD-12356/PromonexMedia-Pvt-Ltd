"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: {
    bg: string;
    text: string;
    border: string;
  };
  date: string;
  image: string;
  slug: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "seo-strategies-2026",
    title: "7 On-Page SEO Strategies to Rank Higher in 2026",
    description:
      "Learn the most effective on-page SEO techniques that can help your website rank higher and attract more organic traffic in 2026.",
    category: "SEO",
    categoryColor: {
      bg: "bg-[#EFF6FF]",
      text: "text-[#2563EB]",
      border: "border-[#DBEAFE]",
    },
    date: "Oct 02, 2026",
    image: "/assets/blog/blog_seo_strategy.jpg",
    slug: "#",
  },
  {
    id: "social-media-presence",
    title: "How to Build a Strong Social Media Presence for Your Brand",
    description:
      "Discover actionable strategies to grow your brand on social media, increase engagement, and build a loyal community.",
    category: "Social Media",
    categoryColor: {
      bg: "bg-[#FAF5FF]",
      text: "text-[#9333EA]",
      border: "border-[#F3E8FF]",
    },
    date: "Sep 28, 2026",
    image: "/assets/blog/blog_social_media.jpg",
    slug: "#",
  },
  {
    id: "google-ads-roi",
    title: "Google Ads Best Practices for Higher ROI",
    description:
      "Get expert tips on Google Ads campaign optimization, targeting, and budget management to achieve better results.",
    category: "Google Ads",
    categoryColor: {
      bg: "bg-[#F0F9FF]",
      text: "text-[#0284C7]",
      border: "border-[#E0F2FE]",
    },
    date: "Sep 20, 2026",
    image: "/assets/blog/blog_google_ads.jpg",
    slug: "#",
  },
  {
    id: "performance-marketing-roas",
    title: "Maximizing ROAS: Full-Funnel Paid Acquisition Tactics",
    description:
      "Proven framework to eliminate wasted ad spend, segment high-intent buyers, and scale sustainable multi-touch conversion loops.",
    category: "Performance",
    categoryColor: {
      bg: "bg-[#FDF2F8]",
      text: "text-[#DB2777]",
      border: "border-[#FCE7F3]",
    },
    date: "Sep 14, 2026",
    image: "/service assets/Performance Marketing Dashboard Workspace.png",
    slug: "#",
  },
  {
    id: "high-converting-web-design",
    title: "Why High-Converting Landing Pages Beat Traditional Websites",
    description:
      "Essential speed, visual hierarchy, and CTA placement principles that transform passive visitors into qualified commercial leads.",
    category: "Web Design",
    categoryColor: {
      bg: "bg-[#ECFDF5]",
      text: "text-[#059669]",
      border: "border-[#D1FAE5]",
    },
    date: "Sep 08, 2026",
    image: "/service assets/Modern Website Development Workspace.png",
    slug: "#",
  },
];

export default function BlogSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive items count calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, BLOG_POSTS.length - visibleCount);

  // Slow subtle autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visiblePosts = BLOG_POSTS.slice(startIndex, startIndex + visibleCount);
  // Wrap around if near end to always show visibleCount items
  if (visiblePosts.length < visibleCount) {
    visiblePosts.push(...BLOG_POSTS.slice(0, visibleCount - visiblePosts.length));
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 45) {
      handlePrev();
    } else if (deltaX < -45) {
      handleNext();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="relative w-full overflow-hidden bg-[#020B35] pt-7 pb-8 sm:pt-8 sm:pb-10 lg:pt-9 lg:pb-10 text-white"
    >
      {/* ── Background Subtle Glow & Grid Decor ────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[380px] w-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.16)_0%,rgba(99,102,241,0.06)_45%,transparent_75%)] blur-3xl select-none"
      />

      {/* Decorative Dotted Grid - Top Left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 sm:left-12 top-6 hidden sm:grid grid-cols-4 gap-2.5 opacity-40 select-none"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={`dot-l-${i}`} className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
        ))}
      </div>

      {/* Decorative Dotted Grid - Top Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 sm:right-12 top-6 hidden sm:grid grid-cols-4 gap-2.5 opacity-40 select-none"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={`dot-r-${i}`} className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
        ))}
      </div>

      {/* Decorative Subtle Concentric Curves - Bottom Left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 opacity-25 select-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="130" stroke="#6366F1" strokeWidth="1.5" />
      </svg>

      {/* Decorative Subtle Concentric Curves - Bottom Right */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 opacity-20 select-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="160" stroke="#60A5FA" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="110" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="relative flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A] bg-[#0A1647]/80 px-3.5 py-1 shadow-[0_0_15px_rgba(30,58,138,0.4)] backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF] animate-pulse" />
            <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#93C5FD] uppercase">
              OUR BLOG
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            className="mt-2.5 flex flex-col items-center"
          >
            <h2
              id="blog-heading"
              className="font-poppins text-[26px] font-extrabold leading-tight text-white sm:text-[34px] lg:text-[38px] tracking-tight"
            >
              Latest Insights &{" "}
              <span className="bg-[linear-gradient(90deg,#A855F7_0%,#6366F1_50%,#38BDF8_100%)] bg-clip-text text-transparent">
                Updates
              </span>
            </h2>

            {/* Small gradient underline below Updates */}
            <div
              aria-hidden="true"
              className="mt-1.5 h-[3px] w-11 rounded-full bg-[linear-gradient(90deg,#9333EA_0%,#38BDF8_100%)] shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            />
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed text-slate-300 sm:text-[14px]"
          >
            Explore expert insights, industry trends, and practical tips on digital marketing,
            <br className="hidden sm:inline" /> SEO, social media, and performance growth.
          </motion.p>

          {/* ── Handwritten-style Decorative Annotations ────────────────── */}
          {/* Left annotation: Ideas / Strategies / Growth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="pointer-events-none absolute -left-2 top-4 hidden xl:flex flex-col items-start select-none"
          >
            <div className="font-serif italic text-[#38BDF8] tracking-wider text-[14px] leading-tight rotate-[-12deg] drop-shadow-[0_2px_8px_rgba(56,189,248,0.3)]">
              Ideas
              <br />
              Strategies
              <br />
              Growth
            </div>
            {/* Hand-drawn arrow pointing towards cards */}
            <svg
              className="mt-1 ml-3 text-[#38BDF8] opacity-80"
              width="32"
              height="32"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M8 8 C 16 16, 24 28, 38 36"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="3 3"
              />
              <path
                d="M26 36 L 38 36 L 36 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* Right annotation: Stay Updated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="pointer-events-none absolute -right-2 top-6 hidden xl:flex items-center gap-1.5 select-none"
          >
            {/* 3 small radiating burst lines */}
            <svg
              className="text-[#38BDF8] opacity-85"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
            >
              <line x1="8" y1="20" x2="2" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="14" x2="6" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="10" x2="16" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-serif italic text-[#38BDF8] tracking-wider text-[14px] leading-tight rotate-[6deg] drop-shadow-[0_2px_8px_rgba(56,189,248,0.3)]">
              Stay
              <br />
              Updated
            </span>
          </motion.div>
        </div>

        {/* ── Carousel Slider Container ─────────────────────────────────── */}
        <div
          className="relative mt-6 sm:mt-7"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Navigation Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous blog articles"
            className="absolute -left-3 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#1E40AF] bg-[#06144A]/90 text-white shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#60A5FA] hover:bg-[#1D4ED8] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <ChevronLeft size={20} className="stroke-[2.5] -translate-x-0.5" />
          </button>

          {/* Right Navigation Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next blog articles"
            className="absolute -right-3 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#1E40AF] bg-[#06144A]/90 text-white shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#60A5FA] hover:bg-[#1D4ED8] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <ChevronRight size={20} className="stroke-[2.5] translate-x-0.5" />
          </button>

          {/* Blog Cards Grid */}
          <div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 px-1 sm:px-3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {visiblePosts.map((post, idx) => (
                <motion.article
                  key={`${post.id}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative flex flex-col overflow-hidden rounded-[20px] bg-white text-[#08183D] shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
                >
                  {/* Top Thumbnail Image */}
                  <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-slate-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div>
                      {/* Meta Header: Category & Date */}
                      <div className="flex items-center justify-between gap-2.5">
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${post.categoryColor.bg} ${post.categoryColor.text} ${post.categoryColor.border}`}
                        >
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-[11.5px] text-slate-500 font-medium">
                          <Calendar size={12} className="text-slate-400" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      {/* Blog Title */}
                      <h3 className="mt-2.5 font-poppins text-[15.5px] font-bold leading-snug text-[#08183D] transition-colors duration-200 group-hover:text-[#1D4ED8] sm:text-[16.5px] line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Description Excerpt */}
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#64748B] line-clamp-2">
                        {post.description}
                      </p>
                    </div>

                    {/* Bottom Read More Action */}
                    <div className="mt-3.5 pt-2.5 border-t border-slate-100">
                      <Link
                        href={post.slug}
                        className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1D4ED8] transition-all duration-200 group-hover:gap-2 group-hover:text-[#2563EB]"
                      >
                        <span>Read More</span>
                        <ArrowRight size={14} className="stroke-[2.4]" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Bottom Centered CTA Button ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-6 sm:mt-7 flex justify-center"
        >
          <Link
            href="#blog"
            className="group inline-flex items-center gap-2 rounded-full border border-[#2563EB] bg-[#040D36] px-6 py-2.5 text-[13px] font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_14px_36px_rgba(4,120,253,0.45)] hover:border-transparent hover:scale-105 active:scale-95"
          >
            <span>View All Blogs</span>
            <ArrowRight
              size={15}
              className="stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
