"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  PenTool,
  Instagram,
  Printer,
  Monitor,
  Package,
  Users,
  Trophy,
  Layers,
  Heart,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Framer motion animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
};

const rightVisualVariant: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, delay: 0.2, ease: EASE },
  },
};

const statItemVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Ad Creatives custom Aa icon tile
function AdCreativesIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="18" rx="4" />
      <path d="M7 16l3.5-8 3.5 8" />
      <path d="M8.2 13.5h4.6" />
      <path d="M16 11v5" />
      <path d="M16 13.5a2 2 0 1 1 2-2" />
    </svg>
  );
}

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  isActive?: boolean;
  href: string;
}

const SERVICES: ServiceCard[] = [
  {
    title: "Brand Identity Design",
    description: "Logos, brand guidelines and complete visual identity for a strong brand presence.",
    icon: PenTool,
    iconBg: "bg-[#00BDF2]",
    isActive: true,
    href: "/contact",
  },
  {
    title: "Social Media Creatives",
    description: "Scroll-stopping posts, stories and campaign graphics.",
    icon: Instagram,
    iconBg: "bg-gradient-to-tr from-[#FF543E] via-[#FF2B85] to-[#C922C0]",
    href: "/contact",
  },
  {
    title: "Marketing Collateral",
    description: "Brochures, flyers, banners and offline branding designs.",
    icon: Printer,
    iconBg: "bg-[#8B5CF6]",
    href: "/contact",
  },
  {
    title: "Ad Creatives",
    description: "High-converting ad graphics for Meta, Google and other platforms.",
    icon: AdCreativesIcon,
    iconBg: "bg-[#FF6B2C]",
    href: "/contact",
  },
  {
    title: "Web & UI Graphics",
    description: "Website banners, UI assets, icons and custom illustrations.",
    icon: Monitor,
    iconBg: "bg-[#00C9A7]",
    href: "/contact",
  },
  {
    title: "Packaging Design",
    description: "Product packaging designs that make your brand stand out.",
    icon: Package,
    iconBg: "bg-[#C026D3]",
    href: "/contact",
  },
];

const STATS = [
  {
    value: "250+",
    label: "Brands Designed",
    icon: Users,
    color: "text-[#0088FF]",
  },
  {
    value: "5+",
    label: "Years of Experience",
    icon: Trophy,
    color: "text-[#FF3D91]",
  },
  {
    value: "1000+",
    label: "Designs Delivered",
    icon: Layers,
    color: "text-[#00C9A7]",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Heart,
    color: "text-[#923CFF] fill-[#923CFF]",
  },
];

export default function GraphicDesignServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 font-['Poppins',sans-serif] text-[#061A40] sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ── Top Header with scroll animation ──────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mx-auto max-w-[900px] text-center"
        >
          {/* Pill Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#BCEBFB] bg-[#EAF9FF] px-4 py-1.5 text-[13px] font-semibold text-[#00BDF2] shadow-[0_2px_10px_rgba(0,189,242,0.1)]"
          >
            <Sparkles size={14} className="text-[#00BDF2]" aria-hidden="true" />
            <span>What We Do</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-[32px] font-extrabold leading-[1.14] tracking-tight text-[#061A40] sm:text-[44px] lg:text-[50px]"
          >
            Graphic Design Services <br />
            That Bring Your <span className="text-[#00BDF2]">Brand to Life</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-[850px] text-[15px] leading-[1.65] text-[#506789] sm:mt-5 sm:text-[17px]"
          >
            From branding to social media creatives, we design with strategy and creativity to help your business look
            professional, build trust and stand out in the market.
          </motion.p>
        </motion.div>

        {/* ── Main Content Grid: 6 Cards (Left) + Visual (Right) ────── */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:mt-14 lg:grid-cols-[1.58fr_1fr] xl:grid-cols-[1.62fr_1fr] xl:gap-7">
          {/* Left Column: 6 Dark Blue Cards with staggered scroll animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:gap-6"
          >
            {SERVICES.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div key={idx} variants={cardVariant}>
                  <Link
                    href={card.href}
                    className={`group relative flex h-full flex-col justify-between rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7 ${
                      card.isActive
                        ? "border-2 border-[#00BDF2] bg-[#031a43] shadow-[0_12px_32px_rgba(3,26,67,0.35),0_0_24px_rgba(0,189,242,0.2)] hover:border-[#00D9FF] hover:shadow-[0_16px_40px_rgba(0,189,242,0.3)]"
                        : "border border-[#143265] bg-[#041a44] shadow-[0_10px_28px_rgba(3,26,67,0.25)] hover:border-[#00BDF2]/70 hover:bg-[#062256] hover:shadow-[0_16px_36px_rgba(0,189,242,0.2)]"
                    }`}
                  >
                    {/* Top row: Icon tile + Arrow button */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex size-[48px] items-center justify-center rounded-[16px] text-white shadow-md transition-transform duration-300 group-hover:scale-105 sm:size-[52px] ${card.iconBg}`}
                      >
                        <IconComponent className="size-6 text-white" strokeWidth={2.2} />
                      </div>

                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          card.isActive
                            ? "border-[#00BDF2] bg-[#00BDF2] text-[#031a43]"
                            : "border-[#1c407c] bg-[#0a275e] text-[#00BDF2] group-hover:border-[#00BDF2] group-hover:bg-[#00BDF2] group-hover:text-[#031a43]"
                        }`}
                      >
                        <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
                      </span>
                    </div>

                    {/* Bottom: Title & Description with adapted typography */}
                    <div className="mt-6">
                      <h3
                        className={`text-[17.5px] font-bold tracking-tight transition-colors duration-200 sm:text-[18.5px] ${
                          card.isActive
                            ? "text-[#00BDF2] group-hover:text-white"
                            : "text-white group-hover:text-[#00BDF2]"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#b4c9e4] transition-colors duration-200 group-hover:text-white sm:text-[14px]">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column: Creative Visual Card with smooth scale/fade in */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={rightVisualVariant}
            className="relative flex min-h-[380px] w-full flex-col justify-center overflow-hidden rounded-[24px] border border-[#DDEAF7] bg-gradient-to-br from-[#F6FAFD] to-[#E9F3FC] shadow-[0_12px_36px_rgba(6,26,64,0.08)] lg:min-h-full"
          >
            <div className="relative h-full w-full">
              <Image
                src="/assets/graphic-design-services-visual.png"
                alt="Creative graphic designer working with brand identity and typography design previews in modern studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Statistics Bar with smooth reveal ──────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mt-10 overflow-hidden rounded-[24px] border border-[#D6EDFB] bg-[#F2F9FD] p-4 shadow-[0_4px_20px_rgba(0,189,242,0.06)] sm:mt-12 sm:rounded-[32px] sm:p-6 lg:mt-14 lg:rounded-full lg:px-10 lg:py-6 xl:px-14"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#D6EDFB]">
            {STATS.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={statItemVariant}
                  className="flex items-center justify-center gap-4 px-4 py-2 sm:py-3 lg:px-6"
                >
                  <div className="flex shrink-0 items-center justify-center">
                    <StatIcon className={`size-8 sm:size-9 ${stat.color}`} strokeWidth={2.2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[26px] font-extrabold leading-none text-[#061A40] sm:text-[30px] lg:text-[32px]">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-[13px] font-medium text-[#506789] sm:text-[14px]">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
