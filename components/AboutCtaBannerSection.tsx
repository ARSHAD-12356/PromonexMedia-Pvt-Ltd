"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutCtaBannerSection() {
  return (
    <section
      aria-label="Ready to Build a Digital Growth Strategy"
      className="relative w-full bg-white py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-8 border-t border-slate-100 overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative rounded-[32px] sm:rounded-[38px] bg-[#020B35] text-white p-8 sm:p-12 md:p-16 text-center border border-[#00D9FF]/35 shadow-[0_24px_60px_rgba(2,11,53,0.28),0_0_40px_rgba(0,217,255,0.12)] overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,217,255,0.22),transparent_70%)]"
          />

          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center justify-center gap-2 mb-3.5 sm:mb-4"
          >
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#00D9FF] uppercase select-none drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]">
              LET&apos;S TALK
            </span>
          </motion.div>

          {/* Heading with Sans + Italic Serif Contrast */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto"
          >
            Ready to build a better{" "}
            <span className="font-serif italic font-normal text-[#00D9FF] drop-shadow-[0_0_24px_rgba(0,217,255,0.4)]">
              digital growth strategy?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-4 sm:mt-5 text-slate-300 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Tell us about your business, your goals and the growth challenge
            you&apos;re trying to solve. We&apos;ll take it from there.
          </motion.p>

          {/* Buttons: Primary + Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4.5"
          >
            {/* Primary Button: Promonex Cyan with Signature Gradient Hover */}
            <a
              href="#consultant-form"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-[#00D9FF] text-[#020B35] font-bold text-sm sm:text-[15px] shadow-[0_6px_22px_rgba(0,217,255,0.35)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:text-white hover:shadow-[0_10px_32px_rgba(4,120,253,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <span>Contact Promonex</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary Dark Outline Button */}
            <Link
              href="/#case-studies"
              className="inline-flex items-center justify-center px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-[#030F3D] text-white border border-white/20 font-bold text-sm sm:text-[15px] hover:bg-white/[0.08] hover:border-[#00D9FF]/60 hover:shadow-[0_0_22px_rgba(0,217,255,0.22)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Our Work</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
