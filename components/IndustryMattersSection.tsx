"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MatterCard {
  number: string;
  label: string;
  accentColor: string;
  lineColor: string;
  bgGradient: string;
  borderColor: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const CARDS: MatterCard[] = [
  {
    number: "01",
    label: "INTENT",
    accentColor: "#0284FE",
    lineColor: "#0284FE",
    bgGradient: "bg-gradient-to-br from-[#F2F8FF] via-[#E9F3FF] to-[#DCEBFE]",
    borderColor: "border-[#CCE2FD]",
    title: "How Do Customers Search?",
    description: "Are they actively searching, casually discovering or comparing options?",
    imageSrc: "/assets/industry-matters/01-intent.jpg",
    imageAlt: "3D Search and Intent Illustration",
  },
  {
    number: "02",
    label: "TRUST",
    accentColor: "#059669",
    lineColor: "#059669",
    bgGradient: "bg-gradient-to-br from-[#F0FDF8] via-[#E4FAF1] to-[#D5F5E9]",
    borderColor: "border-[#C4F0E0]",
    title: "What Makes Them Trust You?",
    description: "Reviews, expertise, pricing, social proof or brand perception?",
    imageSrc: "/assets/industry-matters/02-trust.jpg",
    imageAlt: "3D Shield and Trust Illustration",
  },
  {
    number: "03",
    label: "JOURNEY",
    accentColor: "#F59E0B",
    lineColor: "#F59E0B",
    bgGradient: "bg-gradient-to-br from-[#FFFDF2] via-[#FFF8E4] to-[#FEEECB]",
    borderColor: "border-[#FDE3A7]",
    title: "How Long Does Buying Take?",
    description: "Minutes, days or several months? Strategy changes with the sales cycle.",
    imageSrc: "/assets/industry-matters/03-journey.jpg",
    imageAlt: "3D Roadmap and Journey Illustration",
  },
  {
    number: "04",
    label: "ECONOMICS",
    accentColor: "#A855F7",
    lineColor: "#A855F7",
    bgGradient: "bg-gradient-to-br from-[#FAF5FF] via-[#F4E8FF] to-[#EBDBFE]",
    borderColor: "border-[#E1CBFC]",
    title: "What Is a Customer Worth?",
    description: "Lead value, margins, repeat sales and lifetime value shape marketing decisions.",
    imageSrc: "/assets/industry-matters/04-economics.jpg",
    imageAlt: "3D Growth Chart and Economics Illustration",
  },
];

export default function IndustryMattersSection() {
  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#06123D] py-16 sm:py-20 lg:py-24 overflow-hidden font-['Poppins',sans-serif]">
      {/* Subtle ambient corner radial gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0, 191, 255, 0.14) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full opacity-50 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.10) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 w-80 h-80 rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0, 217, 255, 0.10) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 w-96 h-96 rounded-full opacity-50 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.10) 0%, transparent 70%)",
        }}
      />



      {/* Decorative Thin Curved Wave Line in Background */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-8 right-12 w-96 h-36 opacity-35"
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 60C110 10 240 110 390 40"
          stroke="#00D9FF"
          strokeWidth="1.6"
          strokeDasharray="4 4"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT CONTENT COLUMN (~38% Width on Desktop)              */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Eyebrow with Blue Accent Line */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="text-xs sm:text-[13px] font-bold font-['Poppins',sans-serif] tracking-[0.22em] text-[#0066FF] uppercase">
                INDUSTRY MATTERS
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#0066FF] rounded-full" />
            </div>

            {/* Main 3-Line Heading */}
            <h2 className="text-3xl sm:text-[34px] md:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold text-[#07184A] font-['Poppins',sans-serif] tracking-tight leading-[1.16] mb-6">
              <span className="block whitespace-nowrap text-[#07184A]">
                Marketing Starts
              </span>
              <span className="block whitespace-nowrap text-[#07184A]">
                With{" "}
                <span className="text-[#08C9F5] font-extrabold">
                  How Customers
                </span>
              </span>
              <span className="block whitespace-nowrap text-[#08C9F5] font-extrabold">
                Buy.
              </span>
            </h2>

            {/* Supporting Text */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal font-['Poppins',sans-serif] mb-8 max-w-md">
              <p>
                We don&apos;t begin with &ldquo;Which platform should we run ads on?&rdquo;
              </p>
              <p>
                We first understand the buying journey, competition, trust requirements and economics of your industry.
              </p>
            </div>

            {/* Premium CTA Button */}
            <div>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white border border-[#0284FE] text-[#06123D] font-semibold font-['Poppins',sans-serif] text-sm sm:text-[15px] shadow-[0_4px_18px_rgba(2,132,254,0.12)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:text-white hover:border-transparent hover:shadow-[0_14px_36px_rgba(4,120,253,0.45)] hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300"
              >
                <span className="font-semibold font-['Poppins',sans-serif]">Build My Growth Strategy</span>
                <ArrowRight
                  size={18}
                  className="text-[#0284FE] stroke-[2.3] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200"
                />
              </Link>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: 2x2 CARD GRID (~62% Width on Desktop)        */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {CARDS.map((card, idx) => (
                <motion.div
                  key={card.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                  className={`group relative rounded-[22px] border ${card.borderColor} ${card.bgGradient} p-5 sm:p-6 shadow-[0_10px_30px_rgba(6,18,61,0.05)] hover:shadow-[0_16px_40px_rgba(6,18,61,0.10)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden min-h-[220px]`}
                >
                  {/* Top content + right image layout */}
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    
                    {/* Left text portion of the card */}
                    <div className="flex-1 pr-1">
                      {/* Step Number & Label */}
                      <div className="mb-2.5">
                        <div
                          className="text-[11px] sm:text-xs font-bold font-['Poppins',sans-serif] tracking-wider uppercase inline-block"
                          style={{ color: card.accentColor }}
                        >
                          {card.number} / {card.label}
                        </div>
                        {/* Horizontal accent underline under label */}
                        <div
                          className="w-5 sm:w-6 h-[2px] rounded-full mt-1"
                          style={{ backgroundColor: card.lineColor }}
                        />
                      </div>

                      {/* Card Heading */}
                      <h3 className="text-base sm:text-lg font-bold font-['Poppins',sans-serif] text-[#06123D] leading-snug tracking-tight mb-2 group-hover:text-[#020B35] transition-colors duration-200">
                        {card.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal font-['Poppins',sans-serif]">
                        {card.description}
                      </p>
                    </div>

                    {/* Right 3D Illustration */}
                    <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 shrink-0 relative pointer-events-none select-none">
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        fill
                        className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 96px, 128px"
                      />
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
