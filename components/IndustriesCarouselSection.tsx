"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Zap,
  HeartPulse,
  GraduationCap,
  CarFront,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

interface IndustryItem {
  id: string;
  name: string;
  navLabel: string;
  Icon: LucideIcon;
  image: string;
  badge: string;
  badgeIcon: LucideIcon;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    navLabel: "Real Estate",
    Icon: Building2,
    image: "/assets/industries/real_estate.jpg",
    badge: "Real Estate",
    badgeIcon: Building2,
  },
  {
    id: "quick-commerce",
    name: "Quick Commerce",
    navLabel: "Quick commerce",
    Icon: Zap,
    image: "/assets/industries/quick_commerce.jpg",
    badge: "Quick Commerce",
    badgeIcon: Zap,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    navLabel: "Healthcare",
    Icon: HeartPulse,
    image: "/assets/industries/healthcare.jpg",
    badge: "Healthcare",
    badgeIcon: HeartPulse,
  },
  {
    id: "education",
    name: "Education",
    navLabel: "Education",
    Icon: GraduationCap,
    image: "/assets/industries/education.jpg",
    badge: "Education",
    badgeIcon: GraduationCap,
  },
  {
    id: "automotive",
    name: "Automotive",
    navLabel: "Automotive",
    Icon: CarFront,
    image: "/assets/industries/automotive.jpg",
    badge: "Automotive",
    badgeIcon: CarFront,
  },
];

export default function IndustriesCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = INDUSTRIES[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % INDUSTRIES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length);
  }, []);

  const handleSelect = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay timer: 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleNext, isPaused]);

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-88px)] flex flex-col justify-center pt-3 sm:pt-4 pb-6 sm:pb-8 bg-[#020B35] text-white overflow-hidden select-none font-['Poppins',sans-serif]">
      {/* Subtle Radial Glows */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Outer Curved Border Accents */}
      <div className="absolute -left-20 top-1/3 w-40 h-80 rounded-full border border-[#00D9FF]/20 blur-[1px] pointer-events-none" />
      <div className="absolute -right-20 top-1/4 w-40 h-80 rounded-full border border-[#3B82F6]/20 blur-[1px] pointer-events-none" />

      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-10 relative z-10 flex-1 flex flex-col justify-center">
        {/* TWO COLUMN GRID LAYOUT: Left ~40%, Right ~60% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: ~40% (lg:col-span-5)                         */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-6"
          >
            {/* 1. TOP PILL BADGE */}
            <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#06144A]/80 border border-[#2563EB]/40 shadow-[0_0_20px_rgba(0,180,255,0.2)] w-fit">
              <div className="w-5 h-5 rounded-full bg-[#00D9FF]/15 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF]">
                <Building2 size={11} className="stroke-[2.2]" />
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-white tracking-wide">
                Different Industries. Different{" "}
                <span className="bg-gradient-to-r from-[#A855F7] via-[#818CF8] to-[#00D9FF] bg-clip-text text-transparent font-semibold">
                  Growth Playbooks.
                </span>
              </span>
            </div>

            {/* 2. CATEGORY LABEL WITH CYAN ACCENT LINE */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#00D9FF] uppercase">
                INDUSTRIES WE SERVE
              </span>
              <span className="inline-block w-10 sm:w-14 h-[1.5px] bg-[#00D9FF]/60 rounded-full" />
            </div>

            {/* 3. MAIN HEADING WITH CYAN ACCENT COLOR */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-bold text-white leading-[1.18] tracking-tight">
              Your Industry<br />
              Changes{" "}
              <span className="font-bold text-[#00D9FF] drop-shadow-[0_0_16px_rgba(0,217,255,0.5)]">
                How
              </span><br />
              <span className="font-bold text-[#00D9FF] drop-shadow-[0_0_16px_rgba(0,217,255,0.5)]">
                Marketing
              </span>{" "}
              Should<br />
              Work.
            </h2>

            {/* 4. SUBTITLE PARAGRAPH */}
            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-xl font-normal">
              A luxury brand should not market like a clinic. A SaaS company should not generate leads
              like a restaurant. Brandwitty builds digital strategies around how customers actually
              discover, trust and buy in your industry.
            </p>

            {/* 5. TWO ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* PRIMARY BUTTON */}
              <a
                href="#industries-details"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0099FF] via-[#0066FF] to-[#8B5CF6] px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_0_25px_rgba(0,153,255,0.45)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,217,255,0.7)] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Find My Industry</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              {/* SECONDARY BUTTON */}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-[#2563EB]/70 bg-[#020B35]/80 px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-300 hover:border-[#00D9FF] hover:bg-[#06144A] hover:shadow-[0_0_25px_rgba(0,217,255,0.3)] hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                Discuss My Business
              </Link>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: ~60% (lg:col-span-7)                        */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* LARGE ROUNDED IMAGE CAROUSEL CONTAINER */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] lg:aspect-[16/10] min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] rounded-[28px] sm:rounded-[34px] border border-[#2563EB]/40 bg-[#06144A] overflow-hidden shadow-[0_0_45px_rgba(0,120,255,0.22),0_20px_50px_rgba(0,0,0,0.5)]">
              
              {/* IMAGE SLIDER WITH SMOOTH TRANSITION */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                    className="object-cover object-center w-full h-full"
                  />

                  {/* Gradient Overlays for High Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B35]/90 via-[#020B35]/25 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#020B35]/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* TOP-LEFT FLOATING INDUSTRY BADGE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${current.id}`}
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#020B35]/80 backdrop-blur-md border border-[#2563EB]/50 shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-[#0055FF] to-[#00D9FF] flex items-center justify-center text-white shadow-[0_0_12px_rgba(0,217,255,0.6)]">
                    <current.badgeIcon size={13} className="stroke-[2.3]" />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                    {current.badge}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* LOWER-LEFT TEXT OVERLAY */}
              <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 z-20 pointer-events-none select-none">
                {/* "You Can Sit Back" */}
                <motion.div
                  key={`relax-1-${current.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-white/95 text-base sm:text-lg lg:text-xl font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
                >
                  You Can Sit Back
                </motion.div>

                {/* "And Relax" + Sun Doodle */}
                <motion.div
                  key={`relax-2-${current.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex items-center gap-2 text-white/95 text-base sm:text-lg lg:text-xl font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mt-0.5"
                >
                  <span>And Relax</span>
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] animate-pulse"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3.8" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                </motion.div>

                {/* "Let Us Handle" */}
                <motion.div
                  key={`handle-1-${current.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="text-white/95 text-base sm:text-lg lg:text-xl font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mt-2 sm:mt-2.5"
                >
                  Let Us Handle
                </motion.div>

                {/* "Your Brand" with Hand-drawn Blue Underline */}
                <motion.div
                  key={`handle-2-${current.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="relative inline-block mt-0.5"
                >
                  <span className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    Your Brand
                  </span>
                  <svg
                    className="w-full h-3.5 sm:h-4 text-[#38BDF8] -mt-0.5 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                    viewBox="0 0 140 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 10C30 4 65 14 95 6C115 1 130 9 137 6"
                      stroke="url(#blueWaveGrad2)"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 13C45 9 80 14 120 10"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeOpacity="0.8"
                    />
                    <defs>
                      <linearGradient id="blueWaveGrad2" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00D9FF" />
                        <stop offset="0.6" stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#818CF8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>

              {/* LEFT & RIGHT CAROUSEL ARROWS */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#020B35]/80 backdrop-blur-md border border-[#2563EB]/60 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-[#00D9FF] hover:bg-[#06144A] hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Previous Industry"
              >
                <ChevronLeft size={20} className="stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#020B35]/80 backdrop-blur-md border border-[#2563EB]/60 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-[#00D9FF] hover:bg-[#06144A] hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Next Industry"
              >
                <ChevronRight size={20} className="stroke-[2.5]" />
              </button>
            </div>

            {/* HORIZONTAL INDUSTRY NAVIGATION ROW (Below Image Card) */}
            <div className="mt-5 w-full flex items-center justify-between sm:justify-center gap-2 sm:gap-6 lg:gap-8 px-2 overflow-x-auto no-scrollbar">
              {INDUSTRIES.map((ind, index) => {
                const isActive = index === currentIndex;
                const Icon = ind.Icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleSelect(index)}
                    className="group relative flex flex-col items-center gap-1.5 py-1 px-2.5 sm:px-3.5 transition-all duration-300 focus:outline-none cursor-pointer shrink-0"
                  >
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#0478FD] text-white shadow-[0_0_20px_rgba(4,120,253,0.75)] scale-110"
                          : "text-slate-400 group-hover:text-white group-hover:scale-105"
                      }`}
                    >
                      <Icon size={18} className="stroke-[2]" />
                    </div>

                    <span
                      className={`text-xs sm:text-[13px] font-medium transition-colors duration-200 whitespace-nowrap ${
                        isActive ? "text-white font-semibold" : "text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {ind.navLabel}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="activeIndustryCarouselLine"
                        className="absolute -bottom-2 left-2 right-2 h-[2.5px] rounded-full bg-gradient-to-r from-[#00D9FF] to-[#3B82F6] shadow-[0_0_10px_#00D9FF]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
