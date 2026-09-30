"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    value: "$127M+",
    label: "B2B pipeline generated",
  },
  {
    value: "250+",
    label: "B2B companies scaled",
  },
  {
    value: "Platinum",
    label: "HubSpot Partner",
  },
  {
    value: "Inc. 5000",
    label: "fastest-growing",
  },
  {
    value: "4x",
    label: "Fast 55 Fastest Growing",
  },
  {
    value: "Google",
    label: "Partner",
  },
];

export default function StatsSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-2xl sm:rounded-3xl bg-[#06144A]/40 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(0,191,255,0.06)] overflow-hidden"
      >
        {/* Subtle top edge glow highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-4 py-6 sm:py-8 lg:py-9 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div className="text-2xl sm:text-[26px] lg:text-[28px] xl:text-[30px] font-bold text-[#00D9FF] tracking-tight drop-shadow-[0_0_16px_rgba(0,217,255,0.35)]">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm text-slate-300/80 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
