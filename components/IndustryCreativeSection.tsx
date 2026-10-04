"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";

export interface IndustryStorySlide {
  id: string;
  category: string;
  title: string;
  image: string;
  alt: string;
  statLabel: string;
  statValue: string;
  sticker?: {
    type: "social-post";
    productImage: string;
  };
}

const INDUSTRY_STORIES: IndustryStorySlide[] = [
  {
    id: "ecommerce",
    category: "ECOMMERCE",
    title: "From Scroll to Sold",
    image: "/assets/industry-stories/ecommerce.jpg",
    alt: "Modern customer shopping unboxing experience",
    statLabel: "Online Sales",
    statValue: "+68%",
    sticker: {
      type: "social-post",
      productImage: "/assets/industry-stories/handbag.jpg",
    },
  },
  {
    id: "healthcare",
    category: "HEALTHCARE",
    title: "Local Search + Trust + Leads",
    image: "/assets/industry-stories/healthcare.jpg",
    alt: "Doctor with patient consultation in modern medical clinic",
    statLabel: "New Appointments",
    statValue: "+52%",
  },
  {
    id: "real-estate",
    category: "REAL ESTATE",
    title: "Search to Site Visit",
    image: "/assets/industry-stories/real-estate.jpg",
    alt: "Luxury property tour with real estate consultant in modern architectural residence",
    statLabel: "Site Visits",
    statValue: "+74%",
  },
  {
    id: "education",
    category: "EDUCATION",
    title: "Discovery to Enrollment",
    image: "/assets/industry-stories/education.jpg",
    alt: "University student and academic advisor discussing educational pathways",
    statLabel: "Enrollment Rate",
    statValue: "+61%",
  },
  {
    id: "luxury-fashion",
    category: "LUXURY / FASHION",
    title: "Brand Desire to Purchase",
    image: "/assets/industry-stories/luxury.jpg",
    alt: "Client admiring exclusive haute couture designs in luxury fashion showroom",
    statLabel: "AOV & Retention",
    statValue: "+85%",
  },
  {
    id: "automobile",
    category: "AUTOMOBILE",
    title: "Showroom to Test Drive",
    image: "/assets/industry-stories/automobile.jpg",
    alt: "Customer taking delivery of luxury electric car in modern automotive showroom",
    statLabel: "Test Drive Leads",
    statValue: "+79%",
  },
  {
    id: "hospitality",
    category: "HOSPITALITY",
    title: "Tables Booked & Stays Reserved",
    image: "/assets/industry-stories/hospitality.jpg",
    alt: "Fine dining guests enjoying evening dinner in luxury boutique hotel lounge",
    statLabel: "Direct Bookings",
    statValue: "+64%",
  },
  {
    id: "fitness-wellness",
    category: "FITNESS & WELLNESS",
    title: "Trial Pass to Active Member",
    image: "/assets/industry-stories/fitness.jpg",
    alt: "Personal trainer and client reviewing workout goals in luxury wellness club",
    statLabel: "Club Memberships",
    statValue: "+88%",
  },
];

// Tripled array for infinite seamless looping without jump, flicker, or DOM thrashing
const SLIDER_STORIES = [
  ...INDUSTRY_STORIES,
  ...INDUSTRY_STORIES,
  ...INDUSTRY_STORIES,
];

export default function IndustryCreativeSection() {
  const [currentIndex, setCurrentIndex] = useState(INDUSTRY_STORIES.length); // Start at middle copy
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isAnimatingRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Responsive breakpoint detection
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handlers for next / prev
  const handleNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Seamless boundary wrap-around when sliding beyond middle set
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== trackRef.current) return;
    isAnimatingRef.current = false;

    if (currentIndex >= INDUSTRY_STORIES.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - INDUSTRY_STORIES.length);
    } else if (currentIndex < INDUSTRY_STORIES.length) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + INDUSTRY_STORIES.length);
    }
  };

  // Re-enable smooth transitions on the next animation frame
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
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  // 5-second continuous autoplay, paused on user hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch gesture support
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

  // Direct dot navigation
  const goToSlide = (slideIndex: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);

    const currentBase =
      ((currentIndex % INDUSTRY_STORIES.length) + INDUSTRY_STORIES.length) %
      INDUSTRY_STORIES.length;
    const diff = slideIndex - currentBase;
    setCurrentIndex((prev) => prev + diff);
  };

  // Active indicator index (0 to 7)
  const activeDotIndex =
    ((currentIndex % INDUSTRY_STORIES.length) + INDUSTRY_STORIES.length) %
    INDUSTRY_STORIES.length;

  return (
    <section
      id="industry-creative"
      aria-labelledby="industry-creative-heading"
      className="relative w-full overflow-hidden bg-white text-[#0A1538] pt-2 sm:pt-4 pb-4 sm:pb-6 font-['Poppins',sans-serif] selection:bg-[#00D9FF] selection:text-[#0A1538]"
    >
      {/* ── Soft Ambient Radial Glows (Clean & Premium — NO dotted patterns) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 12% 18%, rgba(0, 217, 255, 0.05) 0%, transparent 45%),
            radial-gradient(circle at 88% 82%, rgba(22, 139, 255, 0.04) 0%, transparent 45%),
            radial-gradient(circle at 50% 30%, rgba(181, 95, 230, 0.025) 0%, transparent 55%)
          `,
        }}
      />

      {/* ── Corner Curved Line Details ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -left-8 sm:-top-12 sm:-left-12 w-64 sm:w-80 h-64 sm:h-80 opacity-45 select-none"
        viewBox="0 0 300 300"
        fill="none"
      >
        <defs>
          <linearGradient id="cornerArcLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#168BFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M 0 240 C 110 220, 220 110, 240 0"
          stroke="url(#cornerArcLeft)"
          strokeWidth="1.8"
        />
        <path
          d="M 0 170 C 80 155, 155 80, 170 0"
          stroke="url(#cornerArcLeft)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 sm:-bottom-16 sm:-right-16 w-72 sm:w-96 h-72 sm:h-96 opacity-45 select-none"
        viewBox="0 0 320 320"
        fill="none"
      >
        <defs>
          <linearGradient id="cornerArcRight" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B3DFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M 320 80 C 210 100, 100 210, 80 320"
          stroke="url(#cornerArcRight)"
          strokeWidth="1.8"
        />
        <path
          d="M 320 150 C 240 165, 165 240, 150 320"
          stroke="url(#cornerArcRight)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* ── Main Section Content (Viewport-Optimized Vertical Rhythm) ── */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Eyebrow Label with Minimum Top Margin */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-1 sm:mb-1.5">
          <span className="w-6 sm:w-10 h-[1.5px] bg-[#00D9FF] rounded-full" />
          <span className="text-[10px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#00A3FF] uppercase select-none">
            INDUSTRY-LED CREATIVE
          </span>
          <span className="w-6 sm:w-10 h-[1.5px] bg-[#00D9FF] rounded-full" />
        </div>

        {/* Main Section Heading */}
        <h2
          id="industry-creative-heading"
          className="text-center font-['Poppins',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0A1538] tracking-tight leading-[1.12] max-w-4xl mx-auto"
        >
          Your Marketing Should Look Like Your{" "}
          <span className="bg-gradient-to-r from-[#00D9FF] via-[#168BFF] to-[#00B4D8] bg-clip-text text-transparent">
            Industry.
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-1 sm:mt-1.5 text-center text-xs sm:text-sm md:text-[15px] text-[#5A6E85] max-w-[860px] mx-auto leading-relaxed font-normal">
          From ecommerce and healthcare to luxury, we shape strategy, creative
          and acquisition around how each audience discovers, evaluates and
          buys.
        </p>

        {/* ── CAROUSEL WRAPPER WITH NAVIGATION ARROWS ── */}
        <div
          className="relative mt-3.5 sm:mt-4 lg:mt-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Circular Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous industry slide"
            className="absolute -left-2.5 sm:-left-3.5 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-slate-200/90 text-slate-700 hover:text-[#00A3FF] hover:border-[#00D9FF] hover:shadow-[0_0_22px_rgba(0,217,255,0.35)] transition-all duration-300 flex items-center justify-center active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={20} className="stroke-[2.4]" />
          </button>

          {/* Circular Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next industry slide"
            className="absolute -right-2.5 sm:-right-3.5 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-slate-200/90 text-slate-700 hover:text-[#00A3FF] hover:border-[#00D9FF] hover:shadow-[0_0_22px_rgba(0,217,255,0.35)] transition-all duration-300 flex items-center justify-center active:scale-95 cursor-pointer"
          >
            <ChevronRight size={20} className="stroke-[2.4]" />
          </button>

          {/* Carousel Viewport */}
          <div
            className="overflow-hidden px-1 py-1"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel Continuous Track — translate3d GPU Accelerated */}
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex items-stretch select-none"
              style={{
                transform: isDesktop
                  ? `translate3d(calc(-${currentIndex} * (50% + 14px)), 0, 0)`
                  : `translate3d(calc(-${currentIndex} * (100% + 18px)), 0, 0)`,
                transition: isTransitioning
                  ? "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)"
                  : "none",
                willChange: "transform",
              }}
            >
              {SLIDER_STORIES.map((slide, idx) => (
                <div
                  key={`${slide.id}-${idx}`}
                  className={`flex-shrink-0 ${
                    isDesktop
                      ? "w-[calc(50%-14px)] mr-7"
                      : "w-full mr-[18px]"
                  }`}
                >
                  <div className="group relative w-full h-[280px] sm:h-[320px] md:h-[350px] lg:h-[375px] xl:h-[395px] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-slate-200/90 shadow-[0_10px_32px_rgba(10,21,56,0.08)] hover:shadow-[0_18px_44px_rgba(10,21,56,0.13)] hover:-translate-y-1 transition-all duration-300 bg-slate-100">
                    {/* Background Photographic Image */}
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                      priority={idx >= 7 && idx <= 10}
                      className="object-cover object-center w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Vignette at Bottom for High Contrast Behind the Translucent Card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                    {/* ── Optional Floating Social / Ecommerce Sticker (e.g. Card 1) ── */}
                    {slide.sticker?.type === "social-post" && (
                      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 -rotate-6 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 z-10 pointer-events-none select-none">
                        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.18)] border border-white/90 w-[100px] sm:w-[115px]">
                          {/* Pink heart badge */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#FF4565] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(255,69,101,0.45)]">
                            <Heart size={12} className="fill-current" />
                          </div>
                          {/* Product Image */}
                          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-100 mb-1.5">
                            <Image
                              src={slide.sticker.productImage}
                              alt="Product discovery"
                              fill
                              sizes="120px"
                              className="object-cover"
                            />
                          </div>
                          {/* Social post icons */}
                          <div className="flex items-center justify-between px-0.5 text-slate-400">
                            <div className="flex items-center gap-1">
                              <Heart size={10} className="text-slate-400" />
                              <MessageCircle size={10} className="text-slate-400" />
                              <Send size={10} className="text-slate-400" />
                            </div>
                            <Bookmark size={10} className="text-slate-400" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── Floating Stat / Performance Badge (Top Right) ── */}
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-white/90 z-10 select-none group-hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-tight mb-0.5">
                        {slide.statLabel}
                      </div>
                      <div className="flex items-end justify-between gap-2.5 sm:gap-3">
                        <div>
                          <div className="text-base sm:text-lg font-extrabold text-[#0A1538] tracking-tight leading-none mb-1">
                            {slide.statValue}
                          </div>
                          <div className="flex items-center text-emerald-500 font-bold text-xs">
                            <ArrowUpRight size={15} className="stroke-[2.8]" />
                          </div>
                        </div>
                        {/* 4 Mini Bar Columns */}
                        <div className="flex items-end gap-1 h-6 pb-0.5">
                          <span className="w-1.5 h-2.5 rounded-t-sm bg-gradient-to-t from-[#00D9FF] to-[#168BFF]" />
                          <span className="w-1.5 h-3.5 rounded-t-sm bg-gradient-to-t from-[#00D9FF] to-[#168BFF]" />
                          <span className="w-1.5 h-5 rounded-t-sm bg-gradient-to-t from-[#00D9FF] to-[#168BFF]" />
                          <span className="w-1.5 h-6.5 rounded-t-sm bg-gradient-to-t from-[#00D9FF] to-[#168BFF]" />
                        </div>
                      </div>
                    </div>

                    {/* ── Floating Translucent Content Panel (Bottom) with Pure White Text ── */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4.5 sm:left-5 sm:right-5 z-10">
                      <div className="bg-[#030D2B]/60 backdrop-blur-xl rounded-[18px] sm:rounded-[20px] p-3.5 sm:p-4 border border-white/20 shadow-[0_10px_32px_rgba(0,0,0,0.35)] group-hover:bg-[#030D2B]/72 transition-all duration-300">
                        {/* Category Tag */}
                        <span className="block text-[11px] sm:text-xs font-bold tracking-widest text-[#00D9FF] uppercase mb-0.5 sm:mb-1 drop-shadow-sm">
                          {slide.category}
                        </span>
                        {/* Headline Title — Crisp White Typography as requested */}
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-[22px] font-extrabold text-white tracking-tight leading-snug drop-shadow-sm">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Pagination Indicator Dots ── */}
          <div
            className="mt-3.5 sm:mt-4 flex items-center justify-center gap-1.5 sm:gap-2"
            role="tablist"
            aria-label="Industry stories carousel navigation"
          >
            {INDUSTRY_STORIES.map((story, idx) => {
              const isActive = idx === activeDotIndex;
              return (
                <button
                  key={story.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${idx + 1}: ${story.category}`}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-7 sm:w-8 h-2 sm:h-2.5 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#168BFF] shadow-[0_2px_8px_rgba(0,217,255,0.4)]"
                      : "w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
