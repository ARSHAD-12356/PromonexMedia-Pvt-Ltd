"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020B35] text-white pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 font-['Poppins',sans-serif]">
      {/* ── Ambient Soft Background Glows (NO Dotted Grids, 100% Clean) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 75% 40%, rgba(0, 217, 255, 0.12) 0%, transparent 45%),
            radial-gradient(circle at 20% 30%, rgba(91, 60, 196, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 50% 85%, rgba(6, 20, 74, 0.35) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12 xl:gap-16">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Headline, Paragraph, and Primary CTA         */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
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

            {/* 2. MAIN HEADING WITH CYAN HIGHLIGHTS */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] leading-[1.14] tracking-tight"
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
          {/* RIGHT COLUMN: Realistic Professional Woman with Laptop    */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] flex justify-center"
            >
              {/* Soft atmospheric blue/cyan glow directly behind the woman */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] bg-gradient-to-tr from-[#00D9FF]/25 via-[#0478FD]/20 to-[#8B5CF6]/20 rounded-full blur-[80px] pointer-events-none -z-10" />

              {/* Seamless Transparent Cutout Woman with Laptop */}
              <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] flex items-center justify-center">
                <Image
                  src="/assets/service-girl.png"
                  alt="Promonex Media Digital Marketing Executive"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                  className="object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
