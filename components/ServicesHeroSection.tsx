"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Users, Search } from "lucide-react";

export default function ServicesHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020B35] text-white pt-2 sm:pt-4 lg:pt-0 pb-0 font-['Poppins',sans-serif]">
      {/* ── Ambient Soft Background Glows (NO Dotted Grids, 100% Clean) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 75% 35%, rgba(0, 217, 255, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 20% 30%, rgba(91, 60, 196, 0.14) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(4, 120, 253, 0.22) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-10 xl:gap-12 min-h-0 lg:h-[calc(100dvh-96px)] lg:max-h-[calc(100dvh-96px)]">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Headline, Paragraph, and Primary CTA         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6 pb-6 sm:pb-8 lg:pb-12 xl:pb-16 pt-2 sm:pt-4">
            {/* 1. EYEBROW LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <span className="w-8 sm:w-12 h-[2px] bg-[#00D9FF] rounded-full" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#00D9FF] uppercase select-none">
                DIGITAL MARKETING SERVICES
              </span>
            </motion.div>

            {/* 2. MAIN HEADING WITH EXACT CYAN HIGHLIGHTS */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px] leading-[1.12] tracking-tight"
            >
              Is your brand<br />
              <span className="text-[#00D9FF] drop-shadow-[0_0_24px_rgba(0,217,255,0.45)]">
                getting noticed?
              </span><br />
              We’ll make sure<br />
              it gets{" "}
              <span className="text-[#00D9FF] drop-shadow-[0_0_24px_rgba(0,217,255,0.45)]">
                remembered.
              </span>
            </motion.h1>

            {/* 3. SUPPORTING PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-slate-300 text-sm sm:text-base md:text-[16px] leading-relaxed max-w-xl font-normal"
            >
              Promonex Media is a digital marketing agency in Patna helping businesses grow through SEO,
              social media marketing, Google Ads, performance marketing, web development and creative
              solutions. We build strategies focused on visibility, qualified leads, conversions and
              measurable business growth.
            </motion.p>

            {/* 4. PRIMARY CTA BUTTON WITH SIGNATURE PROMONEX HOVER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="pt-1 flex items-center gap-4"
            >
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00D9FF] via-[#0478FD] to-[#8B5CF6] px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-[0_0_25px_rgba(0,217,255,0.45)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,217,255,0.7)] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                />
                <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Large Transparent Girl + 3 Floating Cards   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-end relative self-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[540px] sm:max-w-[600px] lg:max-w-[640px] xl:max-w-[680px] flex justify-center items-end"
            >
              {/* Soft atmospheric blue/cyan glow directly behind the woman */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] lg:w-[520px] h-[340px] sm:h-[460px] lg:h-[520px] bg-gradient-to-tr from-[#00D9FF]/25 via-[#0478FD]/20 to-[#8B5CF6]/20 rounded-full blur-[90px] pointer-events-none -z-10" />

              {/* -------------------------------------------------------- */}
              {/* CARD 1: Monthly Revenue (Upper-Left of Girl)            */}
              {/* -------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.35 },
                  scale: { duration: 0.6, delay: 0.35 },
                  y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-20 sm:top-24 lg:top-24 xl:top-28 -left-2 sm:-left-6 lg:-left-10 xl:-left-12 z-20 select-none pointer-events-none"
              >
                <div className="bg-[#030D2E]/85 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3.5 border border-[#00D9FF]/40 shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(0,217,255,0.2)] w-[140px] sm:w-[165px]">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00D9FF]/15 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF]">
                      <ArrowUpRight size={12} className="stroke-[2.6]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 tracking-tight">
                      Monthly Revenue
                    </span>
                  </div>
                  <div className="text-base sm:text-xl font-extrabold text-white tracking-tight leading-none mb-1.5 sm:mb-2 pl-0.5">
                    <span className="text-[#00D9FF]">+128%</span>
                  </div>
                  {/* 6 Upward Growth Bars */}
                  <div className="flex items-end justify-between gap-1 sm:gap-1.5 h-7 sm:h-8 px-0.5 sm:px-1 pt-1">
                    {[
                      { h: "28%", anim: ["28%", "45%", "28%"] },
                      { h: "42%", anim: ["42%", "60%", "42%"] },
                      { h: "56%", anim: ["56%", "75%", "56%"] },
                      { h: "70%", anim: ["70%", "90%", "70%"] },
                      { h: "85%", anim: ["85%", "100%", "85%"] },
                      { h: "100%", anim: ["95%", "100%", "95%"] },
                    ].map((bar, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 sm:w-2 rounded-t-sm bg-gradient-to-t from-[#0478FD] via-[#00D9FF] to-[#8B5CF6]"
                        animate={{ height: bar.anim }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.15,
                        }}
                        style={{ height: bar.h }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* -------------------------------------------------------- */}
              {/* CARD 2: Qualified Leads (Upper-Right of Girl)           */}
              {/* -------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  y: [0, 6, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.45 },
                  scale: { duration: 0.6, delay: 0.45 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                }}
                className="absolute top-24 sm:top-28 lg:top-28 xl:top-32 -right-2 sm:-right-4 lg:-right-6 xl:-right-8 z-20 select-none pointer-events-none"
              >
                <div className="bg-[#030D2E]/85 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3.5 border border-[#00D9FF]/40 shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(0,217,255,0.2)] w-[140px] sm:w-[165px]">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00D9FF]/15 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF]">
                      <Users size={12} className="stroke-[2.4]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 tracking-tight">
                      Qualified Leads
                    </span>
                  </div>
                  <div className="text-base sm:text-xl font-extrabold text-white tracking-tight leading-none mb-1 pl-0.5">
                    <span className="text-white">2.4X</span>
                  </div>
                  {/* Upward Line Curve with Glowing Peak Dot */}
                  <div className="w-full h-7 sm:h-8 mt-1 relative">
                    <svg viewBox="0 0 120 36" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="leadsAreaGradHero" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 30 Q 30 32, 55 20 T 95 16 T 116 6 L 116 36 L 0 36 Z" fill="url(#leadsAreaGradHero)" />
                      <path d="M 0 30 Q 30 32, 55 20 T 95 16 T 116 6" fill="none" stroke="#8B5CF6" strokeWidth="2.4" strokeLinecap="round" />
                      <motion.circle
                        cx="116"
                        cy="6"
                        r="3"
                        fill="#FFFFFF"
                        stroke="#00D9FF"
                        strokeWidth="1.8"
                        animate={{ r: [2.5, 4, 2.5] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* -------------------------------------------------------- */}
              {/* CARD 3: Search Visibility (Lower-Right of Girl)         */}
              {/* -------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.55 },
                  scale: { duration: 0.6, delay: 0.55 },
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
                className="absolute bottom-10 sm:bottom-14 lg:bottom-14 xl:bottom-16 -right-2 sm:-right-4 lg:-right-6 xl:-right-8 z-20 select-none pointer-events-none"
              >
                <div className="bg-[#030D2E]/85 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3.5 border border-[#00D9FF]/40 shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(0,217,255,0.2)] w-[140px] sm:w-[165px]">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00D9FF]/15 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF]">
                      <Search size={12} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10.5px] sm:text-[11px] font-semibold text-slate-300 tracking-tight">
                      Search Visibility
                    </span>
                  </div>
                  <div className="text-base sm:text-xl font-extrabold text-white tracking-tight leading-none mb-1 pl-0.5">
                    <span className="text-[#00D9FF]">+95%</span>
                  </div>
                  {/* Upward Line Curve with Glowing Peak Dot */}
                  <div className="w-full h-7 sm:h-8 mt-1 relative">
                    <svg viewBox="0 0 120 36" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="searchAreaGradHero" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#0478FD" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 32 Q 25 28, 50 25 T 85 18 T 116 8 L 116 36 L 0 36 Z" fill="url(#searchAreaGradHero)" />
                      <path d="M 0 32 Q 25 28, 50 25 T 85 18 T 116 8" fill="none" stroke="#00D9FF" strokeWidth="2.4" strokeLinecap="round" />
                      <motion.circle
                        cx="116"
                        cy="8"
                        r="3"
                        fill="#FFFFFF"
                        stroke="#00D9FF"
                        strokeWidth="1.8"
                        animate={{ r: [2.5, 4, 2.5] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* -------------------------------------------------------- */}
              {/* LARGE SEAMLESS TRANSPARENT GIRL WITH LAPTOP              */}
              {/* -------------------------------------------------------- */}
              <div className="relative w-full h-[480px] sm:h-[540px] md:h-[580px] lg:h-[calc(100dvh-110px)] lg:max-h-[620px] xl:max-h-[660px] flex items-end justify-center">
                <Image
                  src="/assets/service-girl.png"
                  alt="Promonex Media Digital Marketing Executive with Laptop"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
