"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Megaphone,
  Users,
  TrendingUp,
  MousePointer2,
} from "lucide-react";

export default function SemHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020B35] text-white font-['Poppins',sans-serif] min-h-[calc(100vh-80px)] flex flex-col justify-center py-8 sm:py-10 lg:py-12 select-none">
      {/* ── Background: Deep Navy & Cyan Light Glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 75% 35%, rgba(0, 217, 255, 0.13) 0%, transparent 50%),
            radial-gradient(circle at 20% 25%, rgba(4, 120, 253, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 50% 85%, rgba(30, 58, 138, 0.3) 0%, transparent 55%),
            linear-gradient(180deg, #020B35 0%, #031144 55%, #020B35 100%)
          `,
        }}
      />

      {/* Abstract Organic Flowing Backdrop Curves matching reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-35"
      >
        <svg
          className="absolute -top-24 right-0 w-[800px] h-[900px] text-[#0A2568] fill-current"
          viewBox="0 0 800 900"
          preserveAspectRatio="none"
        >
          <path d="M 800,0 C 600,160 480,420 600,650 C 700,820 780,880 800,900 Z" opacity="0.45" />
          <path d="M 800,60 C 640,210 540,440 650,630 C 720,780 780,840 800,880 Z" opacity="0.3" />
        </svg>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00D9FF]/[0.08] rounded-full blur-[120px]" />
      </div>

      {/* ── Main Container: Two-Column Desktop Layout ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">

          {/* ========================================================= */}
          {/* LEFT COLUMN: Headings, Supporting Paragraph & CTA */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left"
          >
            {/* 1. Main Heading — Prominently larger font, strictly 4 lines */}
            <h1 className="font-extrabold text-white text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[50px] 2xl:text-[53px] leading-[1.22] sm:leading-[1.18] tracking-tight">
              <span className="block">We drive high-quality</span>
              <span className="block whitespace-normal sm:whitespace-nowrap">
                traffic to your site at the
              </span>
              <span className="block">lowest possible cost,</span>
              <span className="block text-[#00D9FF]">which converts.</span>
            </h1>

            {/* 2. Supporting Paragraph */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-[15.5px] leading-relaxed text-slate-300 font-normal max-w-xl">
              Paid Search Marketing is a fast and simple way to expand the reach of your website.
              It can offer instant results and huge rewards. It’s also highly measurable which means
              you can make regular adjustments to your strategy in order to improve your results.
            </p>

            {/* 3. Primary CTA Button — White text with dynamic gradient hover */}
            <div className="mt-6 sm:mt-7 flex items-center">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-3.5 pl-6 sm:pl-7 pr-3 sm:pr-3.5 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#00D9FF] via-[#0478FD] to-[#8B5CF6] hover:from-[#0478FD] hover:via-[#8B5CF6] hover:to-[#00D9FF] bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm sm:text-base shadow-[0_0_28px_rgba(0,217,255,0.4)] hover:shadow-[0_0_40px_rgba(4,120,253,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-500 cursor-pointer"
              >
                <span className="tracking-tight text-white font-bold drop-shadow-sm">
                  Talk to our SEM Expert Now
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#0478FD] shrink-0 shadow-md">
                  <ArrowRight size={15} strokeWidth={2.8} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Layered SEM Analytics Illustration */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-[560px] sm:max-w-[600px] lg:max-w-none aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">

              {/* ── Background Ambient Glow Behind Illustration ── */}
              <div className="pointer-events-none absolute -inset-6 bg-gradient-to-tr from-[#00D9FF]/20 via-[#0478FD]/20 to-transparent rounded-full blur-3xl -z-10" />

              {/* ── Desk Plant (Left Side of Laptop) ── */}
              <div className="absolute left-2 sm:left-6 bottom-16 sm:bottom-20 z-10 hidden sm:block pointer-events-none">
                <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
                  {/* Leaves */}
                  <path d="M30 45 C20 30 10 20 8 10 C18 12 26 24 30 45 Z" fill="#10B981" />
                  <path d="M30 42 C38 25 48 16 52 8 C42 12 36 26 30 42 Z" fill="#059669" />
                  <path d="M28 48 C16 40 8 36 2 32 C12 30 22 38 28 48 Z" fill="#34D399" />
                  <path d="M32 46 C44 38 52 35 58 32 C48 30 38 38 32 46 Z" fill="#10B981" />
                  <path d="M30 38 C28 20 30 10 30 2 C32 10 34 20 30 38 Z" fill="#059669" />
                  {/* Pot */}
                  <path d="M20 52 L40 52 L36 78 L24 78 Z" fill="#CBD5E1" />
                  <path d="M18 48 L42 48 L40 52 L20 52 Z" fill="#94A3B8" />
                  <ellipse cx="30" cy="52" rx="10" ry="2" fill="#475569" />
                </svg>
              </div>

              {/* ── Main Dashboard: Laptop Screen Workstation ── */}
              <div className="relative w-[90%] sm:w-[84%] bg-[#030E38]/95 backdrop-blur-xl border border-[#00D9FF]/30 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.65),0_0_35px_rgba(0,217,255,0.18)] z-10">
                {/* Laptop Top Browser Bar */}
                <div className="flex items-center gap-2 pb-2.5 sm:pb-3 border-b border-white/[0.08]">
                  {/* Window Dots */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Browser Search Input Bar */}
                  <div className="flex-1 flex items-center justify-between bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-slate-200 shadow-inner ml-2">
                    <div className="flex items-center gap-2 min-w-0">
                      {/* Google 'G' icon */}
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <span className="text-[10px] sm:text-[11px] text-slate-700 font-medium truncate">
                        best sem agency in india
                      </span>
                    </div>
                    <Search size={12} className="text-[#00D9FF] shrink-0 stroke-[2.5]" />
                  </div>
                </div>

                {/* Dashboard Inner Body: Split (Left Search Results + Right Rising Chart) */}
                <div className="grid grid-cols-12 gap-3 pt-3 items-center min-h-[160px] sm:min-h-[190px]">
                  {/* Left: Sponsored Ad Preview */}
                  <div className="col-span-7 flex flex-col space-y-2 text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        Sponsored
                      </span>
                    </div>

                    <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                      <div className="text-[11px] sm:text-[12px] font-bold text-[#38BDF8] leading-tight hover:underline cursor-pointer">
                        Promonex Media™ — Top SEM & PPC Agency
                      </div>
                      <div className="text-[9px] text-[#10B981] font-medium">
                        promonexmedia.com/sem-expert
                      </div>
                      <div className="space-y-1 pt-1">
                        <div className="h-1.5 w-full bg-slate-400/30 rounded-full" />
                        <div className="h-1.5 w-4/5 bg-slate-400/25 rounded-full" />
                      </div>
                    </div>

                    {/* Secondary Ad Skeleton */}
                    <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] font-semibold text-slate-500 uppercase">Sponsored</span>
                        <div className="h-1.5 w-24 bg-[#38BDF8]/40 rounded-full" />
                      </div>
                      <div className="h-1.5 w-3/4 bg-slate-500/20 rounded-full" />
                    </div>
                  </div>

                  {/* Right: 3D-styled Rising Bar Chart with Big Upward Curved Arrow */}
                  <div className="col-span-5 relative flex flex-col items-center justify-end h-full">
                    <svg className="w-full h-32 sm:h-36 overflow-visible" viewBox="0 0 160 140">
                      {/* Gradient Definitions */}
                      <defs>
                        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00D9FF" />
                          <stop offset="100%" stopColor="#0478FD" />
                        </linearGradient>
                        <linearGradient id="arrowGrad" x1="0" y1="1" x2="1" y2="0">
                          <stop offset="0%" stopColor="#0478FD" />
                          <stop offset="100%" stopColor="#00D9FF" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>

                      {/* 5 Rising 3D Bar Columns */}
                      <rect x="10" y="95" width="16" height="35" rx="3" fill="url(#barGrad)" opacity="0.75" />
                      <rect x="36" y="80" width="16" height="50" rx="3" fill="url(#barGrad)" opacity="0.82" />
                      <rect x="62" y="60" width="16" height="70" rx="3" fill="url(#barGrad)" opacity="0.9" />
                      <rect x="88" y="42" width="16" height="88" rx="3" fill="url(#barGrad)" opacity="0.95" />
                      <rect x="114" y="20" width="16" height="110" rx="3" fill="url(#barGrad)" filter="url(#glow)" />

                      {/* Dynamic Rising Curve with Big Arrowhead */}
                      <path
                        d="M 12 110 Q 70 90, 130 18"
                        fill="none"
                        stroke="url(#arrowGrad)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        filter="url(#glow)"
                      />
                      <polygon
                        points="132,10 142,22 124,24"
                        fill="#00D9FF"
                        filter="url(#glow)"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── FLOATING CARD 1: Conversion 85% (Top Left) ── */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 sm:-top-6 left-0 sm:left-4 z-20 bg-[#030F3D]/95 backdrop-blur-xl border border-[#00D9FF]/45 rounded-2xl p-3 sm:p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.55),0_0_22px_rgba(0,217,255,0.25)] flex items-center gap-3.5"
              >
                <div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 block">
                    Conversion
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      85%
                    </span>
                    <span className="text-[10px] font-bold text-[#00D9FF]">
                      ↑ +40%
                    </span>
                  </div>
                </div>

                {/* Circular Progress Ring */}
                <div className="relative w-10 h-10 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/10"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#00D9FF]"
                      strokeDasharray="85, 100"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* ── FLOATING CARD 2: Traffic Growth +285% (Bottom Left) ── */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 sm:-bottom-6 left-0 sm:left-6 z-20 bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl p-3 sm:p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35),0_0_25px_rgba(0,217,255,0.3)] text-[#020B35]"
              >
                <div className="text-[10.5px] sm:text-[11.5px] font-semibold text-slate-600">
                  Traffic Growth
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#00A8E8] tracking-tight mt-0.5">
                  +285%
                </div>
                {/* Mini Rising Bar Chart Graphic */}
                <div className="flex items-end gap-1.5 mt-2 h-7 w-28">
                  <span className="w-3 h-2 bg-[#93C5FD] rounded-t-sm" />
                  <span className="w-3 h-3.5 bg-[#60A5FA] rounded-t-sm" />
                  <span className="w-3 h-4 bg-[#3B82F6] rounded-t-sm" />
                  <span className="w-3 h-5.5 bg-[#2563EB] rounded-t-sm" />
                  <span className="w-3 h-7 bg-[#00D9FF] rounded-t-sm shadow-[0_0_8px_#00D9FF]" />
                </div>
              </motion.div>

              {/* ── FLOATING CARDS STACK ON RIGHT: 3 Feature Pills ── */}
              <div className="absolute -right-3 sm:-right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-2.5 sm:space-y-3">
                {/* 1. Targeted Ads */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#030F3D]/90 backdrop-blur-xl border border-[#00D9FF]/35 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-center gap-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#00D9FF]/15 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] shrink-0">
                    <Megaphone size={12} className="stroke-[2.2]" />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-semibold text-white tracking-tight whitespace-nowrap">
                    Targeted Ads
                  </span>
                </motion.div>

                {/* 2. More Customers */}
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-[#030F3D]/90 backdrop-blur-xl border border-[#00D9FF]/35 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-center gap-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#00D9FF]/15 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] shrink-0">
                    <Users size={12} className="stroke-[2.2]" />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-semibold text-white tracking-tight whitespace-nowrap">
                    More Customers
                  </span>
                </motion.div>

                {/* 3. Higher ROI */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-[#030F3D]/90 backdrop-blur-xl border border-[#00D9FF]/35 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-center gap-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#00D9FF]/15 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] shrink-0">
                    <TrendingUp size={12} className="stroke-[2.2]" />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-semibold text-white tracking-tight whitespace-nowrap">
                    Higher ROI
                  </span>
                </motion.div>
              </div>

              {/* ── FLOATING CARD 4: Sponsored Ad Snippet Preview with Cursor (Bottom Right) ── */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute -bottom-5 sm:-bottom-7 right-8 sm:right-16 z-20 bg-white/95 backdrop-blur-xl border border-white/60 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.4),0_0_20px_rgba(0,217,255,0.2)] flex items-center gap-2.5"
              >
                <span className="px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-[#0478FD] text-white uppercase tracking-wider">
                  Ad
                </span>
                <div className="space-y-1">
                  <div className="w-16 sm:w-20 h-2 bg-[#0478FD]/70 rounded-full" />
                  <div className="w-10 sm:w-14 h-1.5 bg-[#10B981]/70 rounded-full" />
                </div>
                <MousePointer2 size={16} className="text-[#020B35] fill-[#020B35] -rotate-12 translate-y-1" />
              </motion.div>

              {/* ── Cyan Curved Swoosh Arrow at bottom ── */}
              <svg
                className="absolute -bottom-7 sm:-bottom-9 left-1/3 w-48 sm:w-60 h-16 pointer-events-none z-10"
                viewBox="0 0 240 60"
                fill="none"
              >
                <path
                  d="M 10 20 Q 90 55, 200 35"
                  stroke="url(#swooshGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <polygon points="208,35 196,27 198,42" fill="#00D9FF" />
                <defs>
                  <linearGradient id="swooshGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0478FD" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00D9FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
