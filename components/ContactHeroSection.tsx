"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

export default function ContactHeroSection() {
  return (
    <section
      id="contact-hero"
      aria-label="Contact Promonex Media Hero"
      className="relative w-full min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-88px)] bg-[#020B35] text-white flex items-center justify-center overflow-hidden font-['Poppins',sans-serif] py-12 lg:py-0"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND ATMOSPHERE: Clean Dark Navy, Subtle Glows   */}
      {/*    (NO decorative lines, curves, circles, or patterns)   */}
      {/* ========================================================= */}

      {/* Center-Left Soft Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[450px] sm:h-[550px] bg-gradient-to-tr from-[#00D9FF]/12 via-[#0478FD]/08 to-transparent rounded-full blur-[140px] -z-0"
      />

      {/* Right Soft Ambient Glow behind the Image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] sm:w-[700px] h-[450px] sm:h-[550px] bg-gradient-to-bl from-[#0478FD]/12 via-[#7C3AED]/08 to-transparent rounded-full blur-[140px] -z-0"
      />

      {/* ========================================================= */}
      {/* 2. MAIN CONTENT: Two-Column Responsive Layout             */}
      {/* ========================================================= */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: Contact Content & TWO CTA Buttons (~50%)   */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 mb-3 sm:mb-4"
            >
              <span className="w-6 h-[2px] bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#00D9FF] uppercase select-none drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]">
                CONTACT PROMONEX
              </span>
            </motion.div>

            {/* Large Bold Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-5xl lg:text-[46px] xl:text-[56px] font-extrabold text-white tracking-[-0.03em] leading-[1.12]"
            >
              Let&apos;s Build Something{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#00D9FF] drop-shadow-[0_0_28px_rgba(0,217,255,0.45)]">
                Great Together.
              </span>
            </motion.h1>

            {/* Subheading / Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-4 sm:mt-5 text-slate-300 text-sm sm:text-base lg:text-[16px] xl:text-[17px] leading-relaxed max-w-xl font-normal"
            >
              Have a project, idea, or growth challenge in mind? Let’s connect and
              turn your goals into a digital experience that actually delivers
              results.
            </motion.p>

            {/* TWO CTA Buttons: Side-by-side on desktop, stacked on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              {/* BUTTON 1: Get a Free Consultation (White button) */}
              <a
                href="#contact-form-section"
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white text-[#020B35] font-bold text-sm sm:text-[15px] shadow-[0_10px_28px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(0,217,255,0.4)] hover:bg-[#00D9FF] hover:text-[#020B35] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <span className="w-7 h-7 rounded-full bg-[#020B35]/10 group-hover:bg-[#020B35] flex items-center justify-center transition-colors duration-300 shrink-0">
                  <ArrowRight
                    size={16}
                    className="text-[#020B35] group-hover:text-[#00D9FF] transition-all duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </a>

              {/* BUTTON 2: Drop a Message (Transparent glass with cyan border) */}
              <a
                href="#contact-form-section"
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white/[0.05] hover:bg-[#0478FD]/25 border border-[#00D9FF]/45 hover:border-[#00D9FF] text-white font-bold text-sm sm:text-[15px] shadow-[0_4px_20px_rgba(0,217,255,0.12)] hover:shadow-[0_8px_28px_rgba(0,217,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <span>Drop a Message</span>
                <Send
                  size={16}
                  className="text-[#00D9FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </motion.div>

            {/* Supporting Response-Time Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 flex items-center gap-2 text-xs sm:text-[13px] text-slate-400 font-medium pl-1"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse shadow-[0_0_8px_#00D9FF]" />
              <span>We usually respond within 24 hours</span>
            </motion.div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: Large Premium Asymmetric Shaped Image (~50%) */}
          {/*    (NO extra contact card, NO floating UI cards,         */}
          {/*     NO handwritten text or annotations)                  */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[520px] xl:max-w-[560px]"
            >
              {/* Subtle ambient cyan glow behind the shaped image */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 bg-gradient-to-tr from-[#00D9FF]/20 via-[#0478FD]/15 to-transparent rounded-[44px] sm:rounded-[56px] blur-xl opacity-70 -z-10"
              />

              {/* Asymmetric Organic Shaped Image Container */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full aspect-[4/3] rounded-[32px] sm:rounded-[44px] rounded-tr-[80px] sm:rounded-tr-[110px] rounded-bl-[60px] sm:rounded-bl-[80px] overflow-hidden border border-[#00D9FF]/35 shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_35px_rgba(0,217,255,0.18)] bg-[#030F3D]"
              >
                {/* Consultation Image */}
                <Image
                  src="/assets/contact-consultation.jpg"
                  alt="Professional consultation meeting at Promonex Media"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                  className="object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Edge Vignette Gradient Overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020B35]/40 via-transparent to-transparent"
                />

                {/* Inner Border Specular Highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[32px] sm:rounded-[44px] rounded-tr-[80px] sm:rounded-tr-[110px] rounded-bl-[60px] sm:rounded-bl-[80px] border border-white/10"
                />
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
