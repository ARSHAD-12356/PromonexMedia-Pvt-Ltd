"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  bgIconColor: string;
  icon: React.ReactNode;
}

const SERVICES_DATA: ServiceCardData[] = [
  {
    id: "ai-seo",
    title: "AI SEO / GEO",
    description:
      "Advanced AI-driven SEO and GEO strategies to get smarter, faster, and more relevant results.",
    bgIconColor: "bg-[#EAF5FF]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="20" width="5" height="11" rx="1.5" fill="#3B82F6" />
        <rect x="15" y="14" width="5" height="17" rx="1.5" fill="#38BDF8" />
        <rect x="24" y="9" width="5" height="22" rx="1.5" fill="#00D9FF" />
        <path
          d="M 6 18 L 14 12 L 22 15 L 29 6"
          stroke="#00D9FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 24 6 H 29 V 11"
          stroke="#00D9FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "local-seo",
    title: "SEO for Local Business",
    description:
      "Rank higher in local search and attract more customers in Patna and nearby areas.",
    bgIconColor: "bg-[#EAF5FF]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none">
        <path
          d="M 6 12 L 8 6 H 28 L 30 12"
          stroke="#00D9FF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 6 12 C 7 14 9 14 10 12 C 11 14 13 14 14 12 C 15 14 17 14 18 12 C 19 14 21 14 22 12 C 23 14 25 14 26 12 C 27 14 29 14 30 12"
          fill="#00D9FF"
          fillOpacity="0.25"
          stroke="#00D9FF"
          strokeWidth="2"
        />
        <rect x="8" y="14" width="20" height="14" rx="2" stroke="#38BDF8" strokeWidth="2.2" />
        <circle cx="18" cy="20" r="3.5" fill="#38BDF8" />
        <path d="M 18 20 L 18 25" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "shopify-seo",
    title: "Shopify SEO",
    description:
      "Boost your Shopify store’s visibility, drive organic traffic, and increase sales.",
    bgIconColor: "bg-[#EDF8F2]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none">
        <path
          d="M 13 11 C 13 7.5 15 5 18 5 C 21 5 23 7.5 23 11"
          stroke="#16A34A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 9 11 L 11 30 C 11.2 31.1 12.1 32 13.2 32 H 22.8 C 23.9 32 24.8 31.1 25 30 L 27 11 H 9 Z"
          fill="#22C55E"
        />
        <path
          d="M 16 17 C 16 15 17 14.5 18 14.5 C 19.5 14.5 19.8 15.5 19.8 16.5 C 19.8 19 16 19.5 16 22 C 16 23.5 17.2 24.5 18.5 24.5 C 19.8 24.5 20.8 23.8 20.8 23.8"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    description:
      "Get expert solutions for crawling, indexing, site speed, and all technical SEO issues.",
    bgIconColor: "bg-[#F0EEFF]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none">
        <path
          d="M 13 12 L 7 18 L 13 24"
          stroke="#6366F1"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 23 12 L 29 18 L 23 24"
          stroke="#6366F1"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M 20 10 L 16 26" stroke="#00D9FF" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "ecommerce-seo",
    title: "E-Commerce SEO Services",
    description:
      "Drive more product visibility, increase organic sales, and grow your online store.",
    bgIconColor: "bg-[#E6F9FF]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none">
        <path
          d="M 6 8 H 10 L 13.5 22 H 26 L 29 11 H 11"
          stroke="#0284C7"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15" cy="27" r="2.5" fill="#00D9FF" />
        <circle cx="24" cy="27" r="2.5" fill="#00D9FF" />
        <line x1="15" y1="15" x2="25" y2="15" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="18" x2="23" y2="18" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "international-seo",
    title: "International SEO Services",
    description:
      "Expand your business globally with targeted international SEO strategies.",
    bgIconColor: "bg-[#EAF6FF]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none">
        <circle cx="17" cy="19" r="11" stroke="#00D9FF" strokeWidth="2.4" />
        <ellipse cx="17" cy="19" rx="5" ry="11" stroke="#00D9FF" strokeWidth="2" />
        <line x1="6" y1="19" x2="28" y2="19" stroke="#00D9FF" strokeWidth="2" />
        <circle cx="25" cy="10" r="3" fill="#EF4444" />
        <path d="M 25 13 L 25 17" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function SeoServicesGridSection() {
  return (
    <section className="relative w-full bg-white text-[#041039] py-20 sm:py-24 lg:py-28 font-['Poppins',sans-serif]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 4-COLUMN DESKTOP GRID LAYOUT                              */}
        {/* Row 1: Heading Area + Card 1 + Card 2 + Card 3            */}
        {/* Row 2: Card 4 + Card 5 + Card 6 + Dark CTA Card           */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          
          {/* ── ROW 1, COL 1: HEADING BLOCK ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-between py-2 sm:py-4 pr-0 lg:pr-4"
          >
            <div>
              {/* Cyan label with horizontal line */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 sm:w-10 h-[2.5px] bg-[#00D9FF] rounded-full shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#00D9FF] uppercase select-none">
                  OUR SEO SERVICES
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[44px] font-extrabold text-[#041039] tracking-tight leading-[1.14]">
                Let’s<br />
                Discover<br />
                all our<br />
                <span className="text-[#00D9FF]">SEO services</span>
              </h2>
            </div>

            {/* Supporting text */}
            <p className="mt-6 lg:mt-8 text-slate-500 text-sm sm:text-[14.5px] leading-relaxed font-normal">
              From local to global, we offer result-driven SEO services in Patna to help your business
              grow and stay ahead.
            </p>
          </motion.div>

          {/* ── ROW 1, COL 2: CARD 1 (AI SEO / GEO) ── */}
          <ServiceCard card={SERVICES_DATA[0]} index={1} />

          {/* ── ROW 1, COL 3: CARD 2 (SEO for Local Business) ── */}
          <ServiceCard card={SERVICES_DATA[1]} index={2} />

          {/* ── ROW 1, COL 4: CARD 3 (Shopify SEO) ── */}
          <ServiceCard card={SERVICES_DATA[2]} index={3} />

          {/* ── ROW 2, COL 1: CARD 4 (Technical SEO) ── */}
          <ServiceCard card={SERVICES_DATA[3]} index={4} />

          {/* ── ROW 2, COL 2: CARD 5 (E-Commerce SEO Services) ── */}
          <ServiceCard card={SERVICES_DATA[4]} index={5} />

          {/* ── ROW 2, COL 3: CARD 6 (International SEO Services) ── */}
          <ServiceCard card={SERVICES_DATA[5]} index={6} />

          {/* ── ROW 2, COL 4: DARK NAVY CONTACT CTA CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-[28px] bg-gradient-to-br from-[#020B35] via-[#041246] to-[#010926] border border-white/10 shadow-[0_15px_35px_rgba(2,11,53,0.3)] hover:shadow-[0_20px_45px_rgba(0,217,255,0.2)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle top-right ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-[#00D9FF]/15 rounded-full blur-2xl"
            />

            <div className="relative z-10 flex flex-col items-start">
              {/* Badge: 100% Result Oriented */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-[11px] font-semibold tracking-wider text-white uppercase mb-5">
                <Target size={13} className="text-[#FF4D4D] stroke-[2.5]" />
                <span>100% Result Oriented</span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight leading-[1.2] mb-3">
                Send us a<br />
                message for<br />
                <span className="text-[#00D9FF]">more info.</span>
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                Discuss your goals with our SEO experts and get a customized strategy for your
                business.
              </p>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 mt-8 pt-2 w-full">
              <Link
                href="/#contact"
                className="group/btn relative w-full inline-flex items-center justify-between px-5 sm:px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#0478FD] text-[#020B35] font-bold text-xs sm:text-[13.5px] tracking-tight shadow-[0_4px_20px_rgba(0,217,255,0.35)] hover:shadow-[0_8px_30px_rgba(0,217,255,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Contact us now</span>
                <span className="w-7 h-7 rounded-full bg-[#020B35] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-0.5 shadow-sm">
                  <ArrowRight size={14} className="stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Subcomponent: Individual Dark Blue Service Card
function ServiceCard({ card, index }: { card: ServiceCardData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.08 * index, ease: "easeOut" }}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-[28px] bg-gradient-to-br from-[#020B35] via-[#041246] to-[#010926] border border-white/10 shadow-[0_15px_35px_rgba(2,11,53,0.3)] hover:border-[#00D9FF]/50 hover:shadow-[0_20px_45px_rgba(0,217,255,0.22)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
    >
      {/* Subtle top-right ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 bg-[#00D9FF]/[0.08] rounded-full blur-2xl group-hover:bg-[#00D9FF]/18 transition-all duration-300"
      />

      <div className="relative z-10 flex flex-col items-start">
        {/* Icon Container */}
        <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,217,255,0.15)] group-hover:scale-105 group-hover:bg-[#00D9FF]/20 group-hover:border-[#00D9FF]/60 transition-all duration-300">
          {card.icon}
        </div>

        {/* Title */}
        <h3 className="text-[19px] sm:text-[20px] font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-[#00D9FF] transition-colors duration-200">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-[14px] leading-[1.65] font-normal">
          {card.description}
        </p>
      </div>

      {/* Bottom Circular Arrow Element */}
      <div className="relative z-10 mt-8 pt-2 flex items-center">
        <Link
          href="/#contact"
          aria-label={`Learn more about ${card.title}`}
          className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/15 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#00D9FF] group-hover:text-[#020B35] group-hover:border-[#00D9FF] group-hover:scale-110 shadow-sm cursor-pointer"
        >
          <ArrowRight size={17} className="stroke-[2.5]" />
        </Link>
      </div>
    </motion.div>
  );
}
