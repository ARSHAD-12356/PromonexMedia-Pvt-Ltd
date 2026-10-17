"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function LandingPageDevelopmentHeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: EASE },
  };

  return (
    <section className="relative isolate flex min-h-[min(720px,calc(100svh-76px))] items-center justify-center overflow-hidden bg-[#031a43] px-6 py-20 font-['Poppins',sans-serif] text-white sm:px-10 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1240px] text-center">
        {/* ── Top Badge Row ─────────────────────────────────────────── */}
        <motion.div
          {...fadeInUp}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Pill on Left */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8EF] bg-[#00C8EF]/5 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-white sm:text-[12px]">
            <Zap size={14} className="fill-[#00C8EF] text-[#00C8EF]" aria-hidden="true" />
            <span>CREATIVE • FAST • CONVERSION FOCUSED</span>
          </div>

          {/* Divider */}
          <span
            className="hidden h-4 w-[1.5px] bg-[#00C8EF]/50 sm:inline-block"
            aria-hidden="true"
          />

          {/* Right Label */}
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00C8EF] sm:text-[13px]">
            Landing Page Development
          </span>
        </motion.div>

        {/* ── Main Heading ──────────────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mx-auto mt-6 text-[clamp(2.4rem,5.6vw,4.5rem)] font-extrabold leading-[1.12] tracking-tight text-white sm:mt-7"
        >
          <span className="text-[#00C8EF]">Landing Page</span> Development <br />
          Built to Convert Paid Traffic.
        </motion.h1>

        {/* ── Supporting Paragraph ──────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mx-auto mt-6 max-w-[1050px] text-[16px] leading-[1.7] text-[#c5d5ea] sm:mt-7 sm:text-[19px] lg:text-[21px]"
        >
          Promonex Media creates fast, focused landing pages for Google Ads, Meta Ads, lead generation,
          product launches and digital campaigns. Every page is designed to guide visitors toward the action
          your business needs.
        </motion.p>

        {/* ── CTA Buttons ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 sm:gap-6"
        >
          {/* Primary Button */}
          <Link
            href="/contact"
            className="inline-flex min-h-[54px] items-center justify-center rounded-[20px] bg-[#00C8EF] px-8 py-3.5 text-[16px] font-bold text-[#031a43] shadow-[0_0_24px_rgba(0,200,239,0.35)] transition-all duration-200 hover:bg-[#00d9ff] hover:shadow-[0_0_32px_rgba(0,200,239,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-[58px] sm:px-9 sm:py-4 sm:text-[17px]"
          >
            <span>Build My Landing Page &rarr;</span>
          </Link>

          {/* Secondary Button */}
          <Link
            href="/services"
            className="inline-flex min-h-[54px] items-center justify-center rounded-[20px] border border-[#00C8EF] bg-transparent px-8 py-3.5 text-[16px] font-semibold text-white transition-all duration-200 hover:bg-[#00C8EF]/10 hover:shadow-[0_0_20px_rgba(0,200,239,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-[58px] sm:px-9 sm:py-4 sm:text-[17px]"
          >
            <span>Explore Landing Pages</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
