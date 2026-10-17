"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Target, Smartphone, TrendingUp, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    icon: Target,
    label: "Conversion Focused",
  },
  {
    icon: Smartphone,
    label: "Mobile Optimized",
  },
  {
    icon: Zap,
    label: "Fast Loading",
  },
  {
    icon: TrendingUp,
    label: "Built for Campaigns",
  },
];

export default function LandingPageBannerSection() {
  return (
    <section className="relative overflow-hidden bg-white py-8 font-['Poppins',sans-serif] sm:py-10 lg:py-12">
      {/* ── Outer container with white margins on all 4 sides ───────── */}
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── The Rounded Dark Navy Banner Card ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px 0px 0px 0px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="relative isolate overflow-hidden rounded-[26px] border border-blue-400/20 bg-[#031a43] px-6 pt-7 pb-0 shadow-[0_18px_50px_rgba(3,26,67,0.18)] sm:rounded-[32px] sm:px-9 sm:pt-8 lg:px-12 lg:pt-9"
        >
          {/* Subtle background glow accents within the card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 h-[320px] w-[320px] rounded-full bg-[#00C8EF]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 h-[320px] w-[320px] rounded-full bg-[#187DF4]/15 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 xl:gap-10">
            {/* ── Left Column: Copy & Actions (with compact bottom padding) ── */}
            <div className="max-w-[580px] pb-7 sm:pb-8 lg:pb-9">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8EF] bg-[#00C8EF]/10 px-3.5 py-1 text-[11px] font-bold tracking-wider text-white shadow-[0_0_15px_rgba(0,200,239,0.2)] sm:text-[11.5px]">
                <Zap size={12} className="fill-[#00C8EF] text-[#00C8EF]" aria-hidden="true" />
                <span>HIGH CONVERTING PAGES</span>
              </div>

              {/* Heading */}
              <h2 className="mt-3.5 text-[clamp(2.1rem,4.2vw,3.4rem)] font-extrabold leading-[1.12] tracking-tight text-white sm:mt-4">
                <span className="block">Landing Pages</span>
                <span className="block">
                  That <span className="text-[#00C8EF]">Deliver</span>
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-3 max-w-[500px] text-[14px] leading-[1.6] text-[#b8cce6] sm:mt-3.5 sm:text-[15px]">
                Strategy, Design, Development and Results &mdash; All in One. We create landing pages that turn
                visitors into leads and help your business grow.
              </p>

              {/* 4 Feature Badges */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-4 sm:gap-3">
                {FEATURES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center sm:items-start sm:text-left"
                    >
                      <div className="flex size-[46px] items-center justify-center rounded-[14px] border border-white/10 bg-[#092558] text-[#00C8EF] shadow-[0_4px_14px_rgba(3,26,67,0.3)] transition-transform duration-200 hover:scale-105 sm:size-[50px]">
                        <Icon size={22} strokeWidth={2.2} />
                      </div>
                      <span className="mt-2 text-[12px] font-semibold leading-[1.25] text-white sm:text-[12.5px]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:mt-8 sm:gap-4">
                {/* Primary CTA */}
                <Link
                  href="/contact"
                  className="group inline-flex min-h-[50px] items-center gap-3.5 rounded-full bg-[#00C8EF] py-1 pl-6 pr-1.5 text-[14.5px] font-bold text-[#031a43] shadow-[0_0_22px_rgba(0,200,239,0.35)] transition-all duration-200 hover:bg-[#00d9ff] hover:shadow-[0_0_30px_rgba(0,200,239,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-[54px] sm:gap-4 sm:pl-7 sm:text-[15.5px]"
                >
                  <span>Get Your Landing Page Today</span>
                  <span className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#031a43] text-white transition-transform duration-200 group-hover:translate-x-0.5 sm:size-[44px]">
                    <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="/services"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#00C8EF] bg-transparent px-7 py-2 text-[14.5px] font-semibold text-white transition-all duration-200 hover:bg-[#00C8EF]/10 hover:shadow-[0_0_20px_rgba(0,200,239,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-[54px] sm:px-8 sm:text-[15.5px]"
                >
                  <span>View Our Work</span>
                </Link>
              </div>
            </div>

            {/* ── Right Column: Image sits flush on the bottom border ── */}
            <div className="relative mx-auto flex w-full max-w-[540px] items-end justify-center self-end pb-0 lg:ml-auto lg:max-w-none lg:justify-end">
              {/* Hand-drawn arrow annotation "From Visitors to Customers" */}
              <div className="pointer-events-none absolute -top-2 left-[8%] z-20 flex flex-col items-center sm:-top-4 sm:left-[12%]">
                <span className="whitespace-nowrap font-sans text-[13.5px] font-bold tracking-wide text-white drop-shadow-md sm:text-[16px]">
                  From Visitors to Customers
                </span>
                <svg
                  viewBox="0 0 50 35"
                  className="size-5 -rotate-6 text-[#00C8EF] drop-shadow-sm sm:size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 5 C 12 18, 22 24, 38 28 M 30 28 L 39 28 L 38 20" />
                </svg>
              </div>

              {/* Exact Transparent Banner Image Flush on Card Bottom Edge */}
              <div className="relative aspect-[612/404] w-full max-w-[540px] shrink-0 self-end lg:max-w-[580px] xl:max-w-[620px]">
                <Image
                  src="/assets/banner-img.png"
                  alt="High converting landing page showcase"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
