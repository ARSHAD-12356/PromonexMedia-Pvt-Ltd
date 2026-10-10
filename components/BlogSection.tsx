"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

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
    slug: "/blog/7-on-page-seo-strategies-2026",
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
    slug: "/blog/build-strong-social-media-presence",
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
    slug: "/blog/google-ads-best-practices-higher-roi",
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
    slug: "/blog/maximizing-roas-full-funnel-tactics",
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
    slug: "/blog/why-high-converting-landing-pages-beat-traditional-websites",
  },
];

// Color presets for categories
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

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);

  // Synchronize dynamic blogs from Admin CMS
  useEffect(() => {
    const loadBlogs = () => {
      if (typeof window === "undefined") return;
      try {
        const saved = localStorage.getItem("promonex_managed_blogs");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const published = parsed.filter((b: any) => b.status === "Published" || !b.status);
            if (published.length > 0) {
              const formatted: BlogPost[] = published.map((b: any, idx: number) => ({
                id: b.id || `custom-blog-${idx}`,
                title: b.title || "Untitled Blog",
                description: b.excerpt || b.description || "",
                category: b.category || "SEO",
                categoryColor: b.categoryColor || getCategoryColor(b.category || "SEO"),
                date: b.date || "Oct 08, 2026",
                image: b.image || "/assets/blog/blog_seo_strategy.jpg",
                slug: b.slug ? (b.slug.startsWith("/") ? b.slug : `/blog/${b.slug}`) : "#",
              }));
              setBlogPosts(formatted);
              return;
            }
          }
        }
      } catch (e) {
        console.error("Failed to load blogs from localStorage", e);
      }
    };

    loadBlogs();
    window.addEventListener("storage", loadBlogs);
    window.addEventListener("promonex-blog-updated", loadBlogs);
    return () => {
      window.removeEventListener("storage", loadBlogs);
      window.removeEventListener("promonex-blog-updated", loadBlogs);
    };
  }, []);

  // Continuous clone array for infinite seamless looping
  const sliderPosts = blogPosts.length > 0 ? [...blogPosts, ...blogPosts, ...blogPosts] : [];

  // Start at middle duplicate set
  const [currentIndex, setCurrentIndex] = useState(blogPosts.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const isAnimatingRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // When blogPosts updates, align index
  useEffect(() => {
    setCurrentIndex(blogPosts.length);
  }, [blogPosts.length]);

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

  const handleNext = useCallback(() => {
    if (isAnimatingRef.current || blogPosts.length === 0) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [blogPosts.length]);

  const handlePrev = useCallback(() => {
    if (isAnimatingRef.current || blogPosts.length === 0) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [blogPosts.length]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== trackRef.current || blogPosts.length === 0) return;
    isAnimatingRef.current = false;

    // Seamless infinite wrap-around without transition
    if (currentIndex >= blogPosts.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - blogPosts.length);
    } else if (currentIndex < blogPosts.length) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + blogPosts.length);
    }
  };

  // Re-enable transition smoothly after instant snap
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Fallback safety timeout in case onTransitionEnd doesn't fire
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        isAnimatingRef.current = false;
      }, 380);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  // Faster 2.8-second continuous autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

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


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Right: Manage Blog Button */}
        <div className="flex justify-end mb-2 sm:mb-1">
          <Link
            href="/admin/login"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-[#061543]/90 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-200 shadow-[0_0_15px_rgba(0,217,255,0.2)] backdrop-blur-md transition-all duration-300 hover:border-[#00D9FF] hover:bg-[#0A246F] hover:text-[#00D9FF] hover:shadow-[0_0_22px_rgba(0,217,255,0.45)] active:scale-95"
            title="Manage Blog - Admin Login"
          >
            <ShieldCheck size={15} className="text-[#00D9FF] group-hover:scale-110 transition-transform duration-200" />
            <span>Manage Blog</span>
          </Link>
        </div>

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

          {/* Continuous Sliding Cards Container */}
          <div
            className="overflow-hidden px-1 sm:px-3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex -mx-2.5"
              style={{
                transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)`,
                transition: isTransitioning
                  ? "transform 350ms cubic-bezier(0.25, 1, 0.5, 1)"
                  : "none",
                willChange: "transform",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {sliderPosts.map((post, idx) => (
                <div
                  key={`${post.id}-${idx}`}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2.5"
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] bg-white text-[#08183D] shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-slate-100 transition-all duration-300 hover:border-blue-200 hover:shadow-[0_14px_35px_rgba(0,0,0,0.28)]">
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
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                              post.categoryColor?.bg || "bg-blue-50"
                            } ${post.categoryColor?.text || "text-blue-600"} ${
                              post.categoryColor?.border || "border-blue-200"
                            }`}
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
                          href={post.slug && post.slug !== "#" ? post.slug : `/blog?id=${post.id}`}
                          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1D4ED8] transition-all duration-200 group-hover:gap-2 group-hover:text-[#2563EB]"
                        >
                          <span>Read More</span>
                          <ArrowRight size={14} className="stroke-[2.4]" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
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
            href="/blog"
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
