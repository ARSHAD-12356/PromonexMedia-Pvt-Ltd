"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesPerformanceSection() {
  return (
    <section className="relative w-full bg-white text-[#020B35] pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 lg:pb-10 font-['Poppins',sans-serif] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Top Label & Large Bold Modern Heading         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col space-y-4 sm:space-y-5">
            {/* Top Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <span className="w-8 sm:w-10 h-[2.5px] bg-[#00A8E8] rounded-full inline-block" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] sm:tracking-[0.22em] text-[#00A8E8] uppercase select-none">
                PERFORMANCE MARKETING &amp; ADVERTISING
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-[#020B35] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[68px] leading-[1.08] tracking-tight"
            >
              Up to 10x more<br />
              <span className="text-[#00A8E8] drop-shadow-[0_4px_16px_rgba(0,168,232,0.2)]">
                sales
              </span><br />
              guaranteed
            </motion.h2>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Supporting Value Paragraph                  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="text-[#334155] text-base sm:text-lg md:text-[18px] lg:text-[19px] leading-[1.75] sm:leading-[1.8] max-w-xl font-normal"
            >
              Unlock exponential growth with our digital marketing expertise! As a dynamic{" "}
              <span className="font-semibold text-[#00A8E8]">
                digital marketing agency
              </span>
              , we promise to supercharge your business with a proven track record of delivering
              up to 10x more sales. Our strategic approach and innovative solutions ensure
              guaranteed success in driving revenue and maximizing your brand’s potential.
            </motion.p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* PREMIUM MINIMAL SECTION DIVIDER (Centered Glowing Pill)   */}
        {/* ========================================================= */}
        <div className="w-full flex justify-center items-center pt-10 sm:pt-12 lg:pt-14">
          <motion.div
            animate={{
              opacity: [0.8, 1, 0.8],
              boxShadow: [
                "0 0 16px 2px rgba(0, 217, 255, 0.35)",
                "0 0 28px 5px rgba(0, 217, 255, 0.65)",
                "0 0 16px 2px rgba(0, 217, 255, 0.35)",
              ],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[170px] h-[4px] rounded-full bg-gradient-to-r from-[#00D9FF] via-[#00A8E8] to-[#0478FD] select-none"
          />
        </div>
      </div>
    </section>
  );
}
