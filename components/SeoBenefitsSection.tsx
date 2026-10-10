"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2 } from "lucide-react";

export default function SeoBenefitsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0A1232] py-20 sm:py-24 lg:py-28 font-['Poppins',sans-serif]">
      {/* ── Background Decorative Shapes & Accents ── */}
      {/* Top-Right Soft Blue Arc Rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 -right-24 w-[380px] h-[380px] rounded-full border-[36px] border-[#EEF4FF]/80 -z-0"
      />
      {/* Top-Right Pastel Mint Dot */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 right-12 sm:right-24 w-5 h-5 rounded-full bg-[#5CE1E6]/50 -z-0"
      />

      {/* Bottom-Left Pastel Blue Arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 w-[340px] h-[340px] rounded-full bg-[#EEF4FF]/60 -z-0"
      />

      {/* Left-Side 3x4 Pale Blue Dots Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-2.5 opacity-60 hidden md:grid"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={`dot-left-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#A5C7FF]" />
        ))}
      </div>

      {/* Right-Side 3x4 Pale Blue Dots Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 sm:right-8 bottom-12 grid grid-cols-3 gap-2.5 opacity-60 hidden md:grid"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={`dot-right-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#A5C7FF]" />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── TOP ROW: Left Headline & Right Description ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between mb-16 sm:mb-20">
          {/* Left Column: Pill badge & Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* "Why Choose Us" Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FF] text-[#1D68FE] text-xs sm:text-[13px] font-semibold tracking-wide mb-4 shadow-sm">
              <BarChart2 size={15} className="text-[#1D68FE] stroke-[2.4]" />
              <span>Why Choose Us</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black text-[#0A1232] tracking-tight leading-[1.14]">
              Best SEO Company
              <br />
              <span className="inline-block relative text-[#1D68FE]">
                in Patna
                {/* Subtle soft blue underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#94B8FF] pointer-events-none"
                  viewBox="0 0 160 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 3 8 Q 80 15 157 7"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Paragraph Description + Decorative Accent Rays */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 relative flex flex-col justify-center pt-2 sm:pt-4"
          >
            {/* Decorative Blue Accent Rays */}
            <div className="absolute -top-7 right-6 sm:right-16 text-[#1D68FE] hidden sm:block">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="2" x2="12" y2="7" />
                <line x1="20" y1="6" x2="16.5" y2="9.5" />
                <line x1="4" y1="6" x2="7.5" y2="9.5" />
              </svg>
            </div>

            <p className="text-slate-600 text-sm sm:text-[15.5px] leading-[1.78] font-normal">
              Discover the Power of SEO with Promonex Media – Your Trusted{" "}
              <strong className="text-[#0A1232] font-semibold">SEO Company in Patna</strong> providing
              end-to-end SEO services to elevate your online presence with our top-notch SEO
              strategies. We&apos;re not just an SEO company; we&apos;re growth partners. Let&apos;s
              skyrocket your success together!
            </p>
          </motion.div>
        </div>

        {/* ── THREE CARDS ROW ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Sustainable Growth */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-[28px] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(29,104,254,0.09)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Background Pastel Arc Decor */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-8 w-44 h-44 rounded-full border-[20px] border-[#EBF5FF]/80 -z-0"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-10 w-36 h-36 rounded-full bg-[#EBF5FF]/40 -z-0"
            />

            <div className="relative z-10 flex flex-col items-start">
              {/* Pastel Icon Box: Bars with Upward Curved Red Growth Arrow */}
              <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl bg-[#EBF5FF] flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none">
                  {/* Blue bars */}
                  <rect x="7" y="24" width="5.5" height="10" rx="1.5" fill="#2563EB" />
                  <rect x="15" y="19" width="5.5" height="15" rx="1.5" fill="#2563EB" />
                  <rect x="23" y="14" width="5.5" height="20" rx="1.5" fill="#2563EB" />
                  {/* Upward curved growth line & red arrow head */}
                  <path
                    d="M 6 22 C 14 20 22 13 29 6"
                    stroke="#EF4444"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 23 6 H 30 V 13"
                    stroke="#EF4444"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1232] tracking-tight mb-3">
                Sustainable Growth
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                Our SEO services ensure long-term results, driving steady organic traffic for MSMEs and
                startups without continuous ad spending.
              </p>
            </div>

            {/* Bottom Circular Arrow Element */}
            <div className="relative z-10 mt-8 pt-2 flex items-center">
              <div className="w-11 h-11 rounded-full bg-[#EBF5FF] text-[#1D68FE] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                <ArrowRight size={17} className="stroke-[2.5]" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Boosted Brand Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-[28px] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(16,185,129,0.09)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Background Pastel Arc Decor */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -right-8 w-44 h-44 rounded-full bg-[#E8FAF4]/60 -z-0"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-14 -left-10 w-36 h-36 rounded-full bg-[#E8FAF4]/50 -z-0"
            />

            <div className="relative z-10 flex flex-col items-start">
              {/* Pastel Icon Box: Speedometer / Gauge Meter with Multi-colored segments */}
              <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl bg-[#E8FAF4] flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none">
                  {/* Gauge arcs */}
                  <path
                    d="M 10 26 A 12 12 0 0 1 15 15"
                    stroke="#10B981"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 17 13.5 A 12 12 0 0 1 23 13.5"
                    stroke="#F59E0B"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 25 15 A 12 12 0 0 1 30 26"
                    stroke="#EF4444"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  {/* Dial needle pointing up */}
                  <circle cx="20" cy="25" r="2.5" fill="#1E40AF" />
                  <line x1="20" y1="25" x2="23" y2="16" stroke="#1E40AF" strokeWidth="2.4" strokeLinecap="round" />
                  {/* Upper analytics peak */}
                  <path
                    d="M 12 11 L 18 8 L 24 10 L 29 6"
                    stroke="#94A3B8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="29" cy="6" r="1.5" fill="#10B981" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1232] tracking-tight mb-3">
                Boosted Brand Visibility
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                Enhance brand credibility with top search engine rankings, making your business more
                trustworthy and authoritative in Patna and beyond.
              </p>
            </div>

            {/* Bottom Circular Arrow Element */}
            <div className="relative z-10 mt-8 pt-2 flex items-center">
              <div className="w-11 h-11 rounded-full bg-[#E8FAF4] text-[#10B981] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                <ArrowRight size={17} className="stroke-[2.5]" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Cost-Effective Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-[28px] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.09)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Background Pastel Arc Decor */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-8 w-44 h-44 rounded-full border-[20px] border-[#FFF9EB] -z-0"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 w-36 h-36 rounded-full bg-[#FFF9EB] -z-0"
            />

            <div className="relative z-10 flex flex-col items-start">
              {/* Pastel Icon Box: Chart + Pie Slice + Golden Rupee Badge */}
              <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl bg-[#FFF9EB] flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none">
                  {/* Analytics card / chart board */}
                  <rect x="7" y="9" width="22" height="20" rx="3" fill="#E2E8F0" opacity="0.6" />
                  {/* Mini bars */}
                  <rect x="11" y="19" width="3" height="7" rx="1" fill="#22C55E" />
                  <rect x="16" y="15" width="3" height="11" rx="1" fill="#3B82F6" />
                  <rect x="21" y="21" width="3" height="5" rx="1" fill="#F59E0B" />
                  {/* Pie Chart element */}
                  <circle cx="21" cy="13" r="3.5" fill="#3B82F6" />
                  <path d="M 21 13 L 23.5 10.5 A 3.5 3.5 0 0 1 24.5 13 Z" fill="#F59E0B" />
                  {/* Golden Coin with Indian Rupee badge */}
                  <circle cx="28" cy="27" r="5.5" fill="#F59E0B" />
                  <text
                    x="28"
                    y="30"
                    textAnchor="middle"
                    fill="white"
                    fontSize="7.5"
                    fontWeight="bold"
                    fontFamily="Poppins, sans-serif"
                  >
                    ₹
                  </text>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-[#0A1232] tracking-tight mb-3">
                Cost-Effective Marketing
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                SEO offers a budget-friendly digital marketing option, providing higher ROI and better
                conversions than traditional methods.
              </p>
            </div>

            {/* Bottom Circular Arrow Element */}
            <div className="relative z-10 mt-8 pt-2 flex items-center">
              <div className="w-11 h-11 rounded-full bg-[#FFF9EB] text-[#F59E0B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                <ArrowRight size={17} className="stroke-[2.5]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
