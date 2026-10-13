"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const SEM_BENEFITS = [
  {
    icon: Target,
    title: "High-Intent Search Traffic",
    description:
      "Capture customers the exact moment they search for your products or services, driving qualified leads with purchase intent.",
    stat: "3.4x",
    statLabel: "Higher Conversion Intent",
  },
  {
    icon: Zap,
    title: "Instant First-Page Visibility",
    description:
      "Skip months of waiting. Your targeted Google Ads appear at the very top of search engine result pages immediately upon launch.",
    stat: "<24h",
    statLabel: "Go-Live & Ad Showing",
  },
  {
    icon: TrendingUp,
    title: "Lowest Possible Cost (CPA)",
    description:
      "Our Google certified specialists continuously refine negative keywords, bid strategies, and Quality Scores to reduce acquisition cost.",
    stat: "-42%",
    statLabel: "Average CPA Reduction",
  },
  {
    icon: ShieldCheck,
    title: "Transparent ROAS & Analytics",
    description:
      "Every rupee spent is tracked down to the penny. Monitor live impressions, clicks, cost per lead, and revenue attribution in real time.",
    stat: "100%",
    statLabel: "Data Attribution & ROI",
  },
];

export default function SemBenefitsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0A1232] py-20 sm:py-24 lg:py-28 font-['Poppins',sans-serif]">
      {/* Background Decorative Rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 -right-24 w-[380px] h-[380px] rounded-full border-[36px] border-[#EEF4FF]/80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 w-[340px] h-[340px] rounded-full bg-[#EEF4FF]/60"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FF] text-[#00A8E8] text-xs sm:text-[13px] font-semibold tracking-wide mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF]" />
              <span>WHY CHOOSE OUR SEM EXPERTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#020B35] tracking-tight leading-[1.18]">
              Turn Search Queries Into{" "}
              <span className="text-[#00A8E8]">Profitable Revenue</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Most ad budgets are wasted on unqualified clicks. Our certified SEM team engineers high-precision campaigns engineered to dominate search results and maximize return on ad spend.
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {SEM_BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] hover:bg-white border border-slate-200/80 hover:border-[#00D9FF]/40 shadow-sm hover:shadow-[0_20px_40px_rgba(0,168,232,0.12)] transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] group-hover:bg-[#00D9FF]/15 border border-[#00D9FF]/30 flex items-center justify-center text-[#00A8E8] group-hover:text-[#0077B6] mb-5 transition-colors">
                    <Icon size={22} className="stroke-[2.2]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#020B35] mb-2.5 tracking-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-extrabold text-[#00A8E8]">
                      {benefit.stat}
                    </div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      {benefit.statLabel}
                    </div>
                  </div>
                  <Link
                    href="#contact"
                    className="w-8 h-8 rounded-full bg-[#EEF4FF] group-hover:bg-[#00D9FF] text-[#00A8E8] group-hover:text-[#020B35] flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ArrowRight size={14} className="stroke-[2.5]" />
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
