"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Megaphone,
  TrendingUp,
  Layers,
  Search,
  Users,
  Camera,
  Code2,
  Palette,
  BarChart3,
  ArrowRight,
} from "lucide-react";

interface ServiceCardData {
  number: string;
  title: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  cta: string;
  href: string;
  isPrimary?: boolean;
}

const SERVICES_DATA: ServiceCardData[] = [
  {
    number: "01",
    title: "Performance Marketing",
    icon: Megaphone,
    description:
      "Data-driven paid advertising strategies designed to acquire customers, generate qualified leads and maximize ROI.",
    highlights: [
      "Paid Advertising Strategy",
      "Lead Generation Campaigns",
      "Ecommerce Performance Marketing",
      "Conversion & ROAS Optimisation",
    ],
    cta: "Explore Performance Marketing",
    href: "/#contact",
    isPrimary: true,
  },
  {
    number: "02",
    title: "Google Ads",
    icon: TrendingUp,
    description:
      "Reach high-intent customers with strategically managed Google Ads campaigns built for measurable growth.",
    highlights: [
      "Google Search Ads",
      "Performance Max Campaigns",
      "Google Shopping Ads",
      "PPC Lead Generation",
    ],
    cta: "Explore Google Ads",
    href: "/#contact",
  },
  {
    number: "03",
    title: "Meta Ads",
    icon: Layers,
    description:
      "Build demand and turn attention into enquiries and sales through high-performing Facebook and Instagram advertising.",
    highlights: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation Campaigns",
      "Retargeting & Audience Testing",
    ],
    cta: "Explore Meta Ads",
    href: "/#contact",
  },
  {
    number: "04",
    title: "SEO",
    icon: Search,
    description:
      "Improve search rankings, increase organic traffic and build long-term visibility for your business.",
    highlights: [
      "Keyword Research",
      "On-Page & Off-Page SEO",
      "Technical SEO",
      "Local SEO",
    ],
    cta: "Explore SEO",
    href: "/#contact",
  },
  {
    number: "05",
    title: "Social Media Marketing",
    icon: Users,
    description:
      "Build your brand, engage your audience and grow consistently across social media platforms.",
    highlights: [
      "Content Strategy",
      "Community Management",
      "Social Media Campaigns",
      "Brand Awareness",
    ],
    cta: "Explore Social Media",
    href: "/#contact",
  },
  {
    number: "06",
    title: "Content & Shoot",
    icon: Camera,
    description:
      "Create scroll-stopping visual content that captures attention, strengthens your brand identity and drives audience engagement.",
    highlights: [
      "Product Photography",
      "Video & Reels Production",
      "Brand Photoshoots",
      "Social Media Content",
    ],
    cta: "Explore Content & Shoot",
    href: "/#contact",
  },
  {
    number: "07",
    title: "Web Development",
    icon: Code2,
    description:
      "Build fast, modern and conversion-focused websites designed around your business goals.",
    highlights: [
      "Business Websites",
      "Landing Pages",
      "Ecommerce Development",
      "Website Maintenance",
    ],
    cta: "Explore Web Development",
    href: "/#contact",
  },
  {
    number: "08",
    title: "Creative Design",
    icon: Palette,
    description:
      "Create impactful visual experiences that make your brand stand out and communicate effectively.",
    highlights: [
      "Social Media Creatives",
      "Ad Banners & Thumbnails",
      "Brand Identity Design",
      "Marketing Collateral",
    ],
    cta: "Explore Creative Design",
    href: "/#contact",
  },
  {
    number: "09",
    title: "Analytics & Reporting",
    icon: BarChart3,
    description:
      "Track performance, discover actionable insights and make smarter data-driven marketing decisions.",
    highlights: [
      "Performance Tracking",
      "Custom Reports",
      "Conversion Analysis",
      "Growth Strategy",
    ],
    cta: "Explore Analytics",
    href: "/#contact",
  },
];

export default function ServicesListSection() {
  return (
    <section className="relative w-full bg-white text-[#020B35] pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 font-['Poppins',sans-serif] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: Eyebrow, Main Heading & Right Paragraph   */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-14 sm:mb-16 lg:mb-20">
          {/* Left: Eyebrow + Heading */}
          <div className="flex flex-col space-y-3.5 sm:space-y-4 max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <span className="w-8 sm:w-10 h-[2.5px] bg-[#00A8E8] rounded-full inline-block" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] sm:tracking-[0.22em] text-[#00A8E8] uppercase select-none">
                OUR DIGITAL MARKETING SERVICES
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12]"
            >
              <span className="text-[#020B35]">Digital Solutions </span>
              <span className="text-[#00A8E8] drop-shadow-[0_2px_12px_rgba(0,168,232,0.25)]">
                for Real Growth
              </span>
            </motion.h2>
          </div>

          {/* Right: Supporting Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="lg:max-w-md xl:max-w-lg lg:text-left"
          >
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              End-to-end digital marketing solutions to increase visibility, generate
              qualified leads and drive measurable business growth.
            </p>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* SERVICES CARD GRID (3x3 on Desktop, 2x on Tab, 1x on Mob) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-[22px] bg-gradient-to-b from-[#071A4A] to-[#020B35] p-6 sm:p-7 xl:p-8 border border-[#00D9FF]/20 hover:border-[#00D9FF]/70 shadow-[0_12px_32px_rgba(2,11,53,0.18)] hover:shadow-[0_20px_45px_rgba(0,217,255,0.2)] hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Subtle Radial Glow on Card Hover */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-44 h-44 bg-[#00D9FF]/10 rounded-full blur-2xl group-hover:bg-[#00D9FF]/20 transition-all duration-300" />
                {service.isPrimary && (
                  <div className="pointer-events-none absolute -bottom-16 -left-16 w-40 h-40 bg-[#8B5CF6]/15 rounded-full blur-2xl" />
                )}

                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Glowing Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/35 flex items-center justify-center text-[#00D9FF] shadow-[0_0_16px_rgba(0,217,255,0.2)] group-hover:scale-108 group-hover:bg-[#00D9FF]/20 group-hover:border-[#00D9FF] group-hover:shadow-[0_0_24px_rgba(0,217,255,0.45)] group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon size={22} className="stroke-[2.2]" />
                    </div>

                    {/* Service Number */}
                    <span className="text-xs sm:text-sm font-extrabold text-slate-400/80 tracking-widest uppercase select-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight mb-2.5 group-hover:text-[#00D9FF] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-[13.5px] sm:text-sm leading-relaxed font-normal mb-5 min-h-[58px]">
                    {service.description}
                  </p>

                  {/* Thin Divider Line */}
                  <div className="h-[1px] w-full bg-white/[0.08] group-hover:bg-[#00D9FF]/25 transition-colors duration-300 mb-5" />

                  {/* 3-4 Service Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-slate-300 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] shrink-0 shadow-[0_0_8px_#00D9FF]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-2">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-white/[0.05] group/btn cursor-pointer"
                  >
                    <span className="text-[13.5px] sm:text-sm font-semibold text-white group-hover:text-[#00D9FF] transition-colors duration-200">
                      Explore Service
                    </span>

                    <div className="w-9 h-9 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF] group-hover:bg-[#00D9FF] group-hover:text-[#020B35] group-hover:shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all duration-300 shrink-0">
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
