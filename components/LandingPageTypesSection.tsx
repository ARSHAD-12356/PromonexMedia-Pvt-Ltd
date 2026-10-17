"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Rocket,
  ArrowRight,
  Users,
  ShoppingCart,
  Settings,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Framer motion animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
};

// Google Ads authentic vector icon
function GoogleAdsIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M7.4 30.5L18.8 10.7C19.8 8.9 22.1 8.3 23.9 9.3C25.7 10.3 26.3 12.6 25.3 14.4L13.9 34.2C12.9 36 10.6 36.6 8.8 35.6C7 34.6 6.4 32.3 7.4 30.5Z"
        fill="#FABB05"
      />
      <path
        d="M37.3 35.6C39.1 34.6 39.7 32.3 38.7 30.5L27.3 10.7C26.3 8.9 24 8.3 22.2 9.3C20.4 10.3 19.8 12.6 20.8 14.4L32.2 34.2C33.2 36 35.5 36.6 37.3 35.6Z"
        fill="#4285F4"
      />
      <circle cx="10.8" cy="34.8" r="4.8" fill="#34A853" />
    </svg>
  );
}

// Meta authentic vector icon
function MetaIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#00C8EF" aria-hidden="true">
      <path d="M16.92 6c-1.39 0-2.67.63-3.52 1.63-.85-1-2.13-1.63-3.52-1.63-2.91 0-5.18 2.47-5.18 5.69 0 3.86 3.19 6.31 5.92 6.31 1.7 0 3.03-.76 3.84-1.87.81 1.11 2.14 1.87 3.84 1.87 2.73 0 5.92-2.45 5.92-6.31C24 8.47 21.73 6 16.92 6zm-8.04 9.54c-1.74 0-3.32-1.57-3.32-3.85 0-2.17 1.48-3.7 3.32-3.7 1.34 0 2.47.88 2.87 2.16.14.44.22.92.22 1.43 0 .5-.08.97-.21 1.4-.41 1.28-1.54 2.56-2.88 2.56zm8.28 0c-1.34 0-2.47-1.28-2.88-2.56-.13-.43-.21-.9-.21-1.4 0-.51.08-.99.22-1.43.4-1.28 1.53-2.16 2.87-2.16 1.84 0 3.32 1.53 3.32 3.7 0 2.28-1.58 3.85-3.32 3.85z" />
    </svg>
  );
}


interface CampaignCard {
  num: string;
  category: string;
  heading: string;
  description: string;
  icon: React.ElementType;
  iconBoxBorder: string;
  href: string;
}

const CAMPAIGN_CARDS: CampaignCard[] = [
  {
    num: "01",
    category: "01 / GOOGLE ADS",
    heading: "PPC Landing Pages",
    description: "Focused pages designed around your ad message, keywords and desired customer action.",
    icon: GoogleAdsIcon,
    iconBoxBorder: "border-[#4285F4]/40 bg-[#082252]",
    href: "/contact",
  },
  {
    num: "02",
    category: "02 / META ADS",
    heading: "Social Ad Landing Pages",
    description: "Creative landing pages for Facebook and Instagram campaigns that continue the visual story from your ads.",
    icon: MetaIcon,
    iconBoxBorder: "border-[#00C8EF]/40 bg-[#072455]",
    href: "/contact",
  },
  {
    num: "03",
    category: "03 / LEADS",
    heading: "Lead Generation Pages",
    description: "Designed to explain your offer clearly and encourage prospects to enquire, book or submit a form.",
    icon: Users,
    iconBoxBorder: "border-[#00C9A7]/40 bg-[#062648] text-[#00C9A7]",
    href: "/contact",
  },
  {
    num: "04",
    category: "04 / ECOMMERCE",
    heading: "Product Landing Pages",
    description: "Highlight one product, collection or offer with stronger product storytelling and focused calls-to-action.",
    icon: ShoppingCart,
    iconBoxBorder: "border-[#FF6B2C]/40 bg-[#2b1828] text-[#FF6B2C]",
    href: "/contact",
  },
  {
    num: "05",
    category: "05 / LAUNCHES",
    heading: "Product Launch Pages",
    description: "Create excitement around launches, new collections, registrations and limited-time campaigns.",
    icon: Rocket,
    iconBoxBorder: "border-[#D946EF]/40 bg-[#25133d] text-[#D946EF]",
    href: "/contact",
  },
  {
    num: "06",
    category: "06 / SERVICES",
    heading: "Service Landing Pages",
    description: "Present your service, benefits, proof and enquiry process on one clear conversion-focused page.",
    icon: Settings,
    iconBoxBorder: "border-[#00BDF2]/40 bg-[#072455] text-[#00BDF2]",
    href: "/contact",
  },
];

export default function LandingPageTypesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 font-['Poppins',sans-serif] sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Top Centered Heading Area ─────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px 0px 0px 0px" }}
          variants={fadeInUp}
          className="mx-auto max-w-[860px] text-center"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BCEBFB] bg-[#EAF9FF] px-4 py-1.5 text-[11.5px] font-bold tracking-wider text-[#00C8EF] shadow-[0_2px_10px_rgba(0,200,239,0.1)] sm:text-[12px]">
            <Rocket size={13} className="text-[#00C8EF]" aria-hidden="true" />
            <span>WHAT WE BUILD</span>
          </div>

          {/* Main Heading */}
          <h2 className="mt-4 text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#061A40] sm:text-[44px] lg:text-[52px]">
            Landing Pages for Almost <br />
            <span className="text-[#00C8EF]">Every Campaign.</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-[1.65] text-[#506789] sm:mt-5 sm:text-[16.5px]">
            Different campaigns need different landing experiences. We design the page around the objective
            to get you more clicks, leads and sales.
          </p>
        </motion.div>

        {/* ── 6 Dark Navy Cards Grid (3 cols x 2 rows) ──────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px 0px 0px 0px" }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 xl:gap-7"
        >
          {CAMPAIGN_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div key={idx} variants={cardVariant}>
                <Link
                  href={card.href}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#00C8EF]/25 bg-[linear-gradient(145deg,#031a44_0%,#041e4e_100%)] p-7 shadow-[0_12px_32px_rgba(3,26,67,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#00C8EF] hover:shadow-[0_18px_45px_rgba(0,200,239,0.22)] sm:p-8"
                >
                  {/* Card Content Top */}
                  <div className="relative z-10">
                    {/* Top Row: Icon Container + Circular Arrow */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex size-[52px] items-center justify-center rounded-[16px] border shadow-sm transition-transform duration-300 group-hover:scale-105 ${card.iconBoxBorder}`}
                      >
                        <IconComponent className="size-6" strokeWidth={2.2} />
                      </div>

                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#00C8EF]/40 bg-[#06245e]/80 text-[#00C8EF] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#00C8EF] group-hover:bg-[#00C8EF] group-hover:text-[#031a43]">
                        <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
                      </span>
                    </div>

                    {/* Category Label */}
                    <span className="mt-6 block text-[11.5px] font-bold tracking-wider text-[#00C8EF] uppercase sm:text-[12px]">
                      {card.category}
                    </span>

                    {/* Card Heading */}
                    <h3 className="mt-2 text-[20px] font-bold text-white transition-colors duration-200 group-hover:text-[#00C8EF] sm:text-[22px]">
                      {card.heading}
                    </h3>

                    {/* Card Description */}
                    <p className="mt-3 text-[13.5px] leading-[1.6] text-[#b4c9e4] transition-colors duration-200 group-hover:text-white sm:text-[14px]">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
