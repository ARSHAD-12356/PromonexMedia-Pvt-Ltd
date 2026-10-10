"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Play,
  TrendingUp,
  IndianRupee,
  Users,
} from "lucide-react";

export default function SeoHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020B35] text-white font-['Poppins',sans-serif] min-h-[calc(100vh-80px)] flex flex-col justify-between py-8 sm:py-12 lg:py-14 select-none">
      {/* ── Background: Deep Navy Gradient & Abstract Organic Blue Waves ── */}
      {/* Ambient Radial Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 50% 12%, rgba(0, 217, 255, 0.12) 0%, transparent 55%),
            radial-gradient(circle at 10% 40%, rgba(30, 58, 138, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 90% 50%, rgba(30, 58, 138, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 50% 90%, rgba(4, 120, 253, 0.15) 0%, transparent 50%),
            linear-gradient(180deg, #020B35 0%, #031144 50%, #020B35 100%)
          `,
        }}
      />

      {/* Abstract Flowing Blue Waves (SVG Silhouette Curves matching reference) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40 sm:opacity-50"
      >
        {/* Left Side Organic Flow */}
        <svg
          className="absolute -top-10 -left-20 w-[600px] h-[800px] text-[#0A2568] fill-current"
          viewBox="0 0 600 800"
          preserveAspectRatio="none"
        >
          <path d="M 0,0 C 180,120 280,320 180,520 C 100,680 20,740 0,800 Z" opacity="0.45" />
          <path d="M 0,40 C 140,160 210,340 130,510 C 60,650 10,720 0,760 Z" opacity="0.3" />
        </svg>

        {/* Right Side Organic Flow */}
        <svg
          className="absolute -top-20 -right-20 w-[650px] h-[850px] text-[#0A2568] fill-current"
          viewBox="0 0 650 850"
          preserveAspectRatio="none"
        >
          <path d="M 650,0 C 470,140 370,360 470,560 C 550,720 630,780 650,850 Z" opacity="0.45" />
          <path d="M 650,50 C 510,180 430,370 510,540 C 580,680 635,745 650,790 Z" opacity="0.3" />
        </svg>

        {/* Deep ambient glow overlays */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00D9FF]/[0.06] rounded-full blur-[110px]" />
      </div>

      {/* ── MAIN HERO CONTENT (Centered) ── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 my-auto flex flex-col items-center text-center">
        {/* 1. Location Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#38BDF8]/30 bg-[#071746]/70 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.15)] mb-6 sm:mb-8"
        >
          <MapPin size={15} className="text-[#FF4D4D] fill-[#FF4D4D]/25 stroke-[2.2] shrink-0" />
          <span className="text-xs sm:text-[13.5px] font-medium text-slate-100 tracking-wide">
            Patna&apos;s Trusted SEO Agency
          </span>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-extrabold text-white text-3xl sm:text-5xl md:text-[54px] lg:text-[62px] leading-[1.12] tracking-tight max-w-5xl"
        >
          Rise Above Your Competitors with
          <br />
          <span className="bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#00D9FF] bg-clip-text text-transparent">
            The Best SEO Agency
          </span>
          <br />
          <span className="inline-block relative">
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#00D9FF] bg-clip-text text-transparent">
              in Patna.
            </span>
            {/* Custom Dynamic Blue Brush/Wave Underline Doodle */}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 sm:left-2 w-full h-3 sm:h-4 text-[#38BDF8] pointer-events-none"
              viewBox="0 0 240 20"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 4 12 Q 110 3 236 8"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M 35 17 Q 135 10 215 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </span>
        </motion.h1>

        {/* 3. Subtitle / SEO Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 sm:mt-8 max-w-4xl text-slate-300 text-sm sm:text-[15.5px] md:text-[16px] leading-[1.78] font-normal"
        >
          Choose Promonex Media, the leading{" "}
          <strong className="text-white font-semibold">SEO agency in Patna</strong>, to enhance your
          site&apos;s reputation and get found on search engines above your competitors. At our SEO
          company based in <strong className="text-white font-semibold">Patna</strong>, we provide a range
          of services to help businesses meet their financial goals by boosting revenue. From Technical
          SEO and SEO Audits to On-page and Off-page SEO, Content Marketing, Content Development,
          Link Building, Local SEO services, and more, we&apos;ve got you covered! Let&apos;s experience the
          game-changing impact of our result-oriented SEO services.
        </motion.p>

        {/* 4. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Button: Signature Promonex Gradient with Arrow Circle */}
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-3.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#00D9FF] via-[#0478FD] to-[#8B5CF6] text-white font-bold text-sm sm:text-base tracking-tight shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:shadow-[0_0_35px_rgba(0,217,255,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Get in touch with us now</span>
            <span className="relative z-10 w-7 h-7 rounded-full bg-[#020B35] flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-0.5 shadow-sm">
              <ArrowRight size={14} className="stroke-[2.5]" />
            </span>
          </Link>

          {/* Secondary Button: Transparent with Blue Outline and White Play Circle */}
          <a
            href="https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20would%20like%20to%20see%20your%20SEO%20work%20and%20past%20case%20studies."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#38BDF8]/60 bg-[#020B35]/40 backdrop-blur-md text-white font-semibold text-sm sm:text-base tracking-tight shadow-[0_4px_20px_rgba(0,191,255,0.12)] hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 hover:shadow-[0_0_30px_rgba(0,217,255,0.25)] hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Play size={11} className="fill-[#020B35] text-[#020B35] ml-0.5" />
            </span>
            <span>Watch Our Work</span>
          </a>
        </motion.div>
      </div>

      {/* ── BOTTOM FEATURES BAR (Horizontal Cards with Vertical Dividers) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-4 p-4 sm:p-5 rounded-2xl lg:rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
          {/* Item 1: Higher Rankings */}
          <div className="flex items-center gap-3.5 sm:gap-4 flex-1 justify-start lg:justify-center">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#091D4C]/90 border border-[#1E40AF]/60 flex items-center justify-center text-[#38BDF8] shadow-[0_0_18px_rgba(56,189,248,0.2)] shrink-0">
              <svg className="w-6 h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="12" width="4" height="9" rx="1.5" />
                <rect x="10" y="7" width="4" height="14" rx="1.5" />
                <rect x="17" y="3" width="4" height="18" rx="1.5" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight leading-tight">
                Higher Rankings
              </span>
              <span className="text-xs sm:text-[13px] text-slate-400 font-normal leading-normal mt-0.5">
                Be Visible on Google
              </span>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="hidden lg:block w-[1px] h-10 bg-white/15 shrink-0 self-center" />

          {/* Item 2: More Organic Traffic */}
          <div className="flex items-center gap-3.5 sm:gap-4 flex-1 justify-start lg:justify-center">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#141852]/90 border border-[#4338CA]/60 flex items-center justify-center text-[#818CF8] shadow-[0_0_18px_rgba(129,140,248,0.2)] shrink-0">
              <TrendingUp size={24} className="text-[#818CF8] stroke-[2.5]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight leading-tight">
                More Organic Traffic
              </span>
              <span className="text-xs sm:text-[13px] text-slate-400 font-normal leading-normal mt-0.5">
                Attract Quality Leads
              </span>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="hidden lg:block w-[1px] h-10 bg-white/15 shrink-0 self-center" />

          {/* Item 3: Increased Revenue */}
          <div className="flex items-center gap-3.5 sm:gap-4 flex-1 justify-start lg:justify-center">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#062938]/90 border border-[#0D9488]/60 flex items-center justify-center text-[#10B981] shadow-[0_0_18px_rgba(16,185,129,0.2)] shrink-0">
              <IndianRupee size={24} className="text-[#10B981] stroke-[2.5]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight leading-tight">
                Increased Revenue
              </span>
              <span className="text-xs sm:text-[13px] text-slate-400 font-normal leading-normal mt-0.5">
                Grow Your Business
              </span>
            </div>
          </div>

          {/* Divider 3 */}
          <div className="hidden lg:block w-[1px] h-10 bg-white/15 shrink-0 self-center" />

          {/* Item 4: Local Growth */}
          <div className="flex items-center gap-3.5 sm:gap-4 flex-1 justify-start lg:justify-center">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#2D1F1A]/90 border border-[#D97706]/50 flex items-center justify-center text-[#F59E0B] shadow-[0_0_18px_rgba(245,158,11,0.2)] shrink-0">
              <Users size={24} className="text-[#F59E0B] stroke-[2.2]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight leading-tight">
                Local Growth
              </span>
              <span className="text-xs sm:text-[13px] text-slate-400 font-normal leading-normal mt-0.5">
                Dominate Patna Market
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
