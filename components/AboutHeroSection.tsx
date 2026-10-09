"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      aria-label="About Promonex Media Hero"
      className="relative w-full min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-88px)] bg-[#020B35] text-white flex items-center justify-center overflow-hidden font-['Poppins',sans-serif] py-4 sm:py-6 lg:py-6 xl:py-8"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND ATMOSPHERE: Clean Deep Navy, Minimal Glow   */}
      {/* ========================================================= */}

      {/* Center-Left Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-[#00D9FF]/12 via-[#0478FD]/07 to-transparent rounded-full blur-[140px] -z-0"
      />

      {/* Right Ambient Glow behind Founder Card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] sm:h-[600px] bg-gradient-to-bl from-[#0478FD]/12 via-[#7C3AED]/06 to-transparent rounded-full blur-[140px] -z-0"
      />

      {/* ========================================================= */}
      {/* 2. MAIN CONTENT: Two-Column Uncompacted Single Screen Fit */}
      {/* ========================================================= */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: About Content & CTA Buttons (~55%)         */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 mb-1.5 sm:mb-2"
            >
              <span className="w-5 h-[2px] bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#00D9FF] uppercase select-none drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]">
                ABOUT PROMONEX
              </span>
            </motion.div>

            {/* Main Heading - Clear 3 lines with comfortable line spacing */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] xl:text-[46px] font-extrabold text-white tracking-[-0.02em] leading-[1.35] sm:leading-[1.35] lg:leading-[1.36] max-w-2xl"
            >
              Digital Marketing Agency in <br />
              Patna,{" "}
              <span className="text-[#00D9FF] drop-shadow-[0_0_24px_rgba(0,217,255,0.4)]">
                building growth
              </span>{" "}
              <br />
              since 2022.
            </motion.h1>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-3.5 sm:mt-4 text-slate-300 text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-relaxed max-w-xl font-normal"
            >
              Promonex Media is a full-service digital marketing agency in Patna,
              founded in 2022 by Abhishek Kumar. We offer SEO services, social
              media marketing, Google Ads, Meta Ads, performance marketing,
              website development, branding and lead generation to help
              businesses grow online.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="mt-2.5 sm:mt-3 text-slate-300 text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-relaxed max-w-xl font-normal"
            >
              Our approach starts with understanding the business, audience and
              goals. We create result-driven digital marketing strategies that
              improve online visibility, build brand authority, generate quality
              leads and drive measurable growth.
            </motion.p>

            {/* TWO CTA Buttons: Gradient Hover Effect */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              {/* Primary button: Explore Our Work → (Promonex Gradient on Hover) */}
              <Link
                href="/#case-studies"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white text-[#020B35] font-bold text-sm sm:text-[15px] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:text-white hover:border-transparent hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary button: Talk to Promonex (Gradient Glow on Hover) */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white/[0.04] border border-[#00D9FF]/50 text-white font-bold text-sm sm:text-[15px] shadow-[0_4px_16px_rgba(0,217,255,0.1)] hover:bg-[linear-gradient(90deg,rgba(250,86,121,0.18)_0%,rgba(187,32,233,0.2)_50%,rgba(74,225,252,0.25)_100%)] hover:border-[#4AE1FC] hover:shadow-[0_8px_25px_rgba(0,217,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <span>Talk to Promonex</span>
                <MessageSquare
                  size={16}
                  className="text-[#00D9FF] group-hover:scale-110 transition-transform duration-200"
                />
              </Link>
            </motion.div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: Large & Proportioned Founder Image Card   */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[420px] sm:max-w-[450px] lg:max-w-[460px] xl:max-w-[480px]"
            >
              {/* Subtle ambient cyan glow behind the card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3.5 bg-gradient-to-tr from-[#00D9FF]/20 via-[#0478FD]/15 to-transparent rounded-[30px] blur-xl opacity-75 -z-10"
              />

              {/* Clean Rectangular Portrait Card */}
              <div className="relative w-full rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#00D9FF]/35 bg-[#030F3D] shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_30px_rgba(0,217,255,0.15)] flex flex-col">
                
                {/* Founder Image Container - Enlarged and Natural */}
                <div className="relative w-full h-[350px] sm:h-[380px] lg:h-[390px] xl:h-[415px] bg-[#020B35] overflow-hidden">
                  <Image
                    src="/assets/founder1.PNG"
                    alt="Abhishek Kumar - Founder & Director at Promonex Media"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Gentle Gradient Shadow at Bottom of Image */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#031142] via-[#031142]/40 to-transparent"
                  />
                </div>

                {/* Information Panel Attached at Bottom */}
                <div className="relative p-4.5 sm:p-5 bg-[#031142] border-t border-[#00D9FF]/30">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#00D9FF]">
                        FOUNDER & DIRECTOR
                      </p>
                      <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight mt-0.5">
                        Abhishek Kumar
                      </h3>
                    </div>

                    <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-3.5 pt-2 sm:pt-0">
                      <p className="text-xs sm:text-[12.5px] text-slate-300 leading-snug font-normal">
                        Promonex Media was founded
                        <br className="hidden sm:inline" /> in Patna in 2022.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle Inner Border Specular Highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[22px] sm:rounded-[26px] border border-white/10"
                />
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
