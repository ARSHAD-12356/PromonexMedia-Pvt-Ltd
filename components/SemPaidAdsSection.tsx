"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SemPaidAdsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#04183D] py-20 sm:py-24 lg:py-28 font-['Poppins',sans-serif] select-none">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: Centered Eyebrow, Main Heading, Paragraph */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-14 sm:mb-18 lg:mb-20"
        >
          {/* Eyebrow text */}
          <div className="text-xs sm:text-[13px] font-bold tracking-[0.24em] text-[#4B5E80] uppercase mb-3 sm:mb-4">
            PAID ADVERTISING SERVICES
          </div>

          {/* Main Heading — Exactly 2 lines with proper word spacing */}
          <h2 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] font-extrabold text-[#04183D] [word-spacing:0.18em] tracking-normal leading-[1.22] no-underline">
            <span className="block">Go Beyond Search With</span>
            <span className="block mt-1 sm:mt-1.5 whitespace-normal md:whitespace-nowrap">
              Performance-Driven Advertising
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-[#4B5E80] font-normal leading-relaxed max-w-2xl mx-auto no-underline [word-spacing:0.06em]">
            Reach high-intent customers across Google and Meta with paid advertising campaigns built around visibility, conversions and measurable business growth.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* TWO DARK NAVY-BLUE CARDS (SIDE BY SIDE ON DESKTOP)        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* ───────────────────────────────────────────────────────── */}
          {/* CARD 1 — Google Ads                                      */}
          {/* ───────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative flex flex-col justify-between rounded-2xl bg-[#04183D] text-white p-8 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(4,24,61,0.18)] overflow-hidden"
          >
            {/* Top-Left Cyan Accent Strip */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-16 sm:w-20 h-1 bg-[#00D4F5]"
            />

            <div>
              {/* Number */}
              <div className="text-xs sm:text-sm font-bold text-[#00D4F5] tracking-wider mb-2 select-none">
                01
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight mb-3.5 no-underline">
                Google Ads
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[14.5px] leading-relaxed text-slate-300 font-normal no-underline">
                Capture demand when your customers are actively searching. Our Google Ads management services combine keyword strategy, compelling ads, smart bidding and conversion optimisation to generate qualified leads and sales.
              </p>

              {/* Subtle Divider */}
              <div className="w-full h-px bg-white/[0.1] my-6 sm:my-8" />

              {/* Services List in Two Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00D4F5] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] text-slate-200 font-medium no-underline">
                    Google Search Ads
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00D4F5] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] text-slate-200 font-medium no-underline">
                    Performance Max
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00D4F5] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] text-slate-200 font-medium no-underline">
                    Google Shopping Ads
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00D4F5] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] text-slate-200 font-medium no-underline">
                    PPC Lead Generation
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10 pt-2 flex items-center">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-between gap-3 px-6 sm:px-7 py-3 rounded-full bg-[#00D4F5] hover:bg-[#1CE0FF] text-[#04183D] font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 no-underline cursor-pointer shadow-[0_0_20px_rgba(0,212,245,0.35)]"
              >
                <span className="no-underline">Explore Google Ads</span>
                <span className="w-6 h-6 rounded-full bg-[#04183D] text-[#00D4F5] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight size={13} strokeWidth={2.8} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ───────────────────────────────────────────────────────── */}
          {/* CARD 2 — Meta Ads                                        */}
          {/* ───────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative flex flex-col justify-between rounded-2xl bg-[#04183D] text-white p-8 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(4,24,61,0.18)] overflow-hidden"
          >
            {/* Top-Left Cyan Accent Strip */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-16 sm:w-20 h-1 bg-[#00D4F5]"
            />

            <div>
              {/* Number */}
              <div className="text-xs sm:text-sm font-bold text-[#00D4F5] tracking-wider mb-2 select-none">
                02
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight mb-3.5 no-underline">
                Meta Ads
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[14.5px] leading-relaxed text-slate-300 font-normal no-underline">
                Put your brand in front of the right audience across Facebook and Instagram. Our Meta Ads management services focus on audience targeting, compelling creatives, budget optimisation and measurable advertising performance.
              </p>

              {/* Subtle Divider */}
              <div className="w-full h-px bg-white/[0.1] my-6 sm:my-8" />

              {/* Services List in Two Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00D4F5] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] text-slate-200 font-medium no-underline">
                    Facebook Ads
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00D4F5] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] text-slate-200 font-medium no-underline">
                    Audience Targeting
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00D4F5] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] text-slate-200 font-medium no-underline">
                    Instagram Ads
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#00D4F5] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] text-slate-200 font-medium no-underline">
                    Conversion Focused Campaigns
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10 pt-2 flex items-center">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-between gap-3 px-6 sm:px-7 py-3 rounded-full bg-[#00D4F5] hover:bg-[#1CE0FF] text-[#04183D] font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 no-underline cursor-pointer shadow-[0_0_20px_rgba(0,212,245,0.35)]"
              >
                <span className="no-underline">Explore Meta Ads</span>
                <span className="w-6 h-6 rounded-full bg-[#04183D] text-[#00D4F5] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight size={13} strokeWidth={2.8} />
                </span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
