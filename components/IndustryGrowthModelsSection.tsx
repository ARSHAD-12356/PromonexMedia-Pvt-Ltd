"use client";

import React from "react";
import { motion } from "framer-motion";

interface GrowthModelCard {
  number: string;
  title: string;
  description: string;
}

const GROWTH_MODELS: GrowthModelCard[] = [
  {
    number: "01",
    title: "Search-Led",
    description:
      "Best when customers already know what they need and actively search for it.",
  },
  {
    number: "02",
    title: "Discovery-Led",
    description:
      "Best when visual content, creators and social discovery create demand.",
  },
  {
    number: "03",
    title: "Trust-Led",
    description:
      "Best when expertise, reviews and authority strongly influence the decision.",
  },
  {
    number: "04",
    title: "Lead-Led",
    description:
      "Best for high-value services where customers speak to the business before buying.",
  },
  {
    number: "05",
    title: "Retention-Led",
    description:
      "Best when repeat purchases and customer lifetime value are a major part of growth.",
  },
];

export default function IndustryGrowthModelsSection() {
  return (
    <section
      id="industry-growth-models"
      className="relative w-full bg-white text-[#07194A] py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif] overflow-hidden"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* ==================================================
            SECTION HEADER
            ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 lg:mb-20"
        >
          {/* Eyebrow Label with subtle cyan flanking lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#00C8FF]/80 rounded-full" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#00C8FF] uppercase">
              INDUSTRY GROWTH MODELS
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#00C8FF]/80 rounded-full" />
          </div>

          {/* Main 2-Line Heading (Centered, Poppins, Exact Line Breaks) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-[#07194A] tracking-tight leading-[1.08]">
            <span className="block">
              Different Businesses Need Different
            </span>
            <span className="block mt-1 sm:mt-1.5 text-[#00C8FF]">
              Growth Engines<span className="text-[#07194A]">.</span>
            </span>
          </h2>
        </motion.div>

        {/* ==================================================
            FIVE CARDS IN A SINGLE HORIZONTAL ROW (Desktop)
            ================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-5 xl:gap-6 items-stretch">
          {GROWTH_MODELS.map((card, idx) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: "easeOut",
              }}
              className="group relative flex flex-col justify-between bg-white border border-[#E2E8F0] rounded-[24px] p-7 sm:p-8 xl:p-9 shadow-[0_4px_20px_rgba(7,25,74,0.04)] hover:shadow-[0_12px_34px_rgba(0,200,255,0.12),0_4px_16px_rgba(7,25,74,0.06)] hover:border-[#00C8FF]/70 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-default overflow-hidden"
            >
              {/* TOP: Small Number */}
              <div className="flex items-center justify-between mb-14 sm:mb-16 lg:mb-20">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#00C8FF] uppercase">
                  {card.number}
                </span>
                <span className="w-5 h-[2px] bg-[#E2E8F0] group-hover:bg-[#00C8FF]/70 rounded-full transition-colors duration-300" />
              </div>

              {/* BOTTOM: Title & Description */}
              <div>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#07194A] tracking-tight mb-3 leading-snug group-hover:text-[#1688FF] transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-[14.5px] text-[#64748B] leading-[1.65] font-normal">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
