"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Eye, BarChart2, RefreshCw, TrendingUp, MoreHorizontal } from "lucide-react";

export default function OutstandingResultsSection() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="relative w-full pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F5F8FF]"
    >
      {/* Decorative Grid of Dots - Left Side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 sm:left-10 top-8 hidden md:grid grid-cols-4 gap-2.5 opacity-30 select-none"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
        ))}
      </div>

      {/* Decorative Grid of Dots - Right Side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 sm:right-10 top-10 hidden md:grid grid-cols-4 gap-2.5 opacity-30 select-none"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
        ))}
      </div>

      {/* Soft Decorative Ambient Flow Curve (Top Right) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-0 w-[360px] h-[280px] opacity-35 select-none"
        viewBox="0 0 400 300"
        fill="none"
      >
        <path
          d="M 100 0 C 180 80, 240 180, 400 120"
          stroke="#4F46E5"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        <path
          d="M 140 0 C 220 100, 260 220, 400 160"
          stroke="#0066FF"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Top Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex justify-center mb-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-purple-200/60 shadow-[0_2px_10px_rgba(147,51,234,0.05)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#9333EA] shadow-[0_0_6px_#9333EA]" />
            <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-[#0A1538]">
              OUTSTANDING RESULTS
            </span>
          </div>
        </motion.div>

        {/* Section Heading - Compact & Elevated */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <h2
            id="results-heading"
            className="font-poppins font-bold text-[#0A1538] tracking-tight text-[36px] sm:text-[clamp(50px,4.15vw,64px)] leading-[1.08]"
          >
            Outstanding{" "}
            <span className="bg-[linear-gradient(100deg,#d62ce3_0%,#8b42f6_50%,#187df4_100%)] bg-clip-text text-transparent">
              Results
            </span>
          </h2>

          {/* Underline accent pill matching site branding */}
          <div className="w-[84px] h-[4.5px] bg-[linear-gradient(90deg,#d62ce3,#187df4)] rounded-full mx-auto mt-2.5 shadow-sm" />

          <p className="mt-2.5 text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            As the best digital marketing agency in Patna, Promonex Media delivers measurable growth through SEO, social media marketing, Google Ads, and performance-driven digital strategies across Bihar.
          </p>
        </motion.div>

        {/* 2-Column Horizontal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 items-stretch">
          {/* =========================================
              LEFT CARD: Google Business Profile
             ========================================= */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            whileHover={{
              y: -5,
              boxShadow: "0 22px 50px rgba(20, 40, 120, 0.12), 0 0 25px rgba(0, 102, 255, 0.06)",
              borderColor: "rgba(59, 130, 246, 0.35)",
              transition: { duration: 0.28, ease: "easeOut" },
            }}
            className="group relative flex flex-col justify-between rounded-[24px] bg-white border border-slate-100 p-5 sm:p-6 shadow-[0_10px_35px_rgba(20,40,120,0.05)] transition-all duration-300 ease-out overflow-hidden cursor-default"
          >
            {/* Card Header */}
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#FFF4E5] border border-amber-100 text-[#F59E0B] shadow-sm">
                    <MapPin size={20} className="stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0A1538] leading-tight">
                      Google Business Profile
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">Sept 2025 – Feb 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Live Status Pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAFBF1] border border-[#DCFCE7] text-[#16A34A] text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shadow-[0_0_4px_#16A34A]" />
                    <span>Live</span>
                  </div>
                  {/* Three dots icon */}
                  <button
                    type="button"
                    aria-label="Options"
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <MoreHorizontal size={17} />
                  </button>
                </div>
              </div>

              {/* Metric Row */}
              <div className="mt-3.5 sm:mt-4">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block">
                  TOTAL INTERACTIONS
                </span>
                <div className="mt-1 flex items-baseline gap-2.5 flex-wrap">
                  <span className="font-poppins text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#0A1538] tracking-tight">
                    7,437+
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#16A34A]">
                    <span className="font-bold">↑ +62%</span>
                    <span className="text-slate-500 font-normal">vs previous 6 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Area Chart: Smooth Ascending Organic Line with Tooltip Pill */}
            <div className="relative mt-3 sm:mt-4 pt-4">
              {/* Floating Tooltip Pill at Peak */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.35 }}
                className="absolute right-[14%] sm:right-[15%] top-0 z-20 flex flex-col items-center pointer-events-none"
              >
                <div className="px-2 py-0.5 rounded-full bg-[#1E293B] text-white text-[10px] font-bold shadow-md">
                  7,437
                </div>
              </motion.div>

              <div className="relative w-full h-24 sm:h-28 overflow-hidden">
                {/* Vertical Background Grid Lines */}
                <div className="absolute inset-0 flex justify-between pointer-events-none px-4 opacity-40">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span key={i} className="w-[1px] h-full bg-slate-200" />
                  ))}
                </div>

                <svg
                  viewBox="0 0 500 120"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    {/* Soft Warm Amber/Orange Area Gradient */}
                    <linearGradient id="curveAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.32" />
                      <stop offset="65%" stopColor="#F59E0B" stopOpacity="0.07" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Filled Area Beneath Curve */}
                  <path
                    d="M 0 100 Q 60 95, 110 85 T 210 70 T 310 62 T 410 38 T 500 30 L 500 120 L 0 120 Z"
                    fill="url(#curveAreaGrad)"
                  />

                  {/* Animated Stroke Curve */}
                  <motion.path
                    d="M 0 100 Q 60 95, 110 85 T 210 70 T 310 62 T 410 38 T 500 30"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />

                  {/* Dot on Tooltip Peak */}
                  <circle cx="430" cy="35" r="4.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </motion.article>

          {/* =========================================
              RIGHT CARD: Meta Ads Manager
             ========================================= */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
            whileHover={{
              y: -5,
              boxShadow: "0 22px 50px rgba(20, 40, 120, 0.12), 0 0 25px rgba(0, 102, 255, 0.06)",
              borderColor: "rgba(59, 130, 246, 0.35)",
              transition: { duration: 0.28, ease: "easeOut" },
            }}
            className="group relative flex flex-col justify-between rounded-[24px] bg-white border border-slate-100 p-5 sm:p-6 shadow-[0_10px_35px_rgba(20,40,120,0.05)] transition-all duration-300 ease-out overflow-hidden cursor-default"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#EBF5FF] border border-blue-100 text-[#0066FF] shadow-sm">
                    {/* Meta Loop Icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4.5 h-4.5 fill-current text-[#0066FF]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 8.35c-2.45-3.3-6.52-3.38-9.42-1.07C-.4 9.66-.75 14.54 1.76 17.5c2.61 3.09 7.37 3.07 9.87-.27l.37-.5.37.5c2.5 3.34 7.26 3.36 9.87.27 2.51-2.96 2.16-7.84-.82-10.22-2.9-2.31-6.97-2.23-9.42 1.07zm-2.02 5.86c-1.39 1.77-4.14 2.16-5.83.74-1.63-1.37-1.83-4.18-.46-5.84 1.4-1.69 4.19-2.07 5.87-.66l.42.36zm4.04 0-.42-.36c1.68-1.41 4.47-1.03 5.87.66 1.37 1.66 1.17 4.47-.46 5.84-1.69 1.42-4.44 1.03-5.83-.74z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0A1538] leading-tight">
                      Meta Ads Manager
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">Campaign performance</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Optimized Status Pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBF5FF] border border-[#DBEAFE] text-[#0066FF] text-[11px] font-semibold">
                    <TrendingUp size={12} className="text-[#0066FF] stroke-[2.4]" />
                    <span>Optimized</span>
                  </div>
                  {/* Three dots icon */}
                  <button
                    type="button"
                    aria-label="Options"
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <MoreHorizontal size={17} />
                  </button>
                </div>
              </div>

              {/* 3 Metric Boxes Grid */}
              <div className="mt-3.5 sm:mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Metric 1: Reach */}
                <div className="rounded-2xl bg-[#F8FAFC] border border-slate-100 p-2.5 sm:p-3 flex flex-col justify-between">
                  <Eye size={15} className="text-[#0066FF] mb-1.5" />
                  <div className="text-base sm:text-lg lg:text-xl font-extrabold text-[#0A1538] font-poppins tracking-tight">
                    14,79,669
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
                      REACH
                    </span>
                    <span className="text-[10.5px] font-bold text-[#16A34A]">▲ +58%</span>
                  </div>
                </div>

                {/* Metric 2: Impressions */}
                <div className="rounded-2xl bg-[#F8FAFC] border border-slate-100 p-2.5 sm:p-3 flex flex-col justify-between">
                  <BarChart2 size={15} className="text-[#0066FF] mb-1.5" />
                  <div className="text-base sm:text-lg lg:text-xl font-extrabold text-[#0A1538] font-poppins tracking-tight">
                    32,22,900
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
                      IMPRESSIONS
                    </span>
                    <span className="text-[10.5px] font-bold text-[#16A34A]">▲ +74%</span>
                  </div>
                </div>

                {/* Metric 3: Frequency */}
                <div className="rounded-2xl bg-[#F8FAFC] border border-slate-100 p-2.5 sm:p-3 flex flex-col justify-between">
                  <RefreshCw size={15} className="text-[#0066FF] mb-1.5" />
                  <div className="text-base sm:text-lg lg:text-xl font-extrabold text-[#0A1538] font-poppins tracking-tight">
                    2.18x
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
                      FREQUENCY
                    </span>
                    <span className="text-[10.5px] font-bold text-[#16A34A]">▲ +21%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 Monthly Gradient Bar Columns */}
            <div className="mt-4 sm:mt-5 pt-2">
              <div className="flex items-end justify-between gap-2 sm:gap-3.5 h-20 sm:h-24 px-1">
                {[
                  { month: "Sept", height: "35%" },
                  { month: "Oct", height: "48%" },
                  { month: "Nov", height: "52%" },
                  { month: "Dec", height: "66%" },
                  { month: "Jan", height: "82%" },
                  { month: "Feb", height: "98%" },
                ].map((item, index) => (
                  <div key={item.month} className="flex-1 flex flex-col items-center h-full justify-end">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: item.height, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.12 + index * 0.07, ease: "easeOut" }}
                      className="w-full rounded-t-xl bg-gradient-to-t from-[#3B82F6] to-[#60A5FA] hover:from-[#2563EB] hover:to-[#3B82F6] transition-colors shadow-sm"
                    />
                    <span className="text-[11px] text-slate-400 font-medium mt-1.5">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
