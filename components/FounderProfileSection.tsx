"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProfileCard {
  label: string;
  title: string;
  description: string;
}

const PROFILE_CARDS: ProfileCard[] = [
  {
    label: "LEADERSHIP",
    title: "Founder & Director",
    description:
      "Leading Promonex Media with a clear focus on creativity, strategy and measurable business growth.",
  },
  {
    label: "EXPERTISE",
    title: "Digital Marketing & Growth",
    description:
      "Focused on digital strategy, performance marketing, lead generation, branding and online growth.",
  },
  {
    label: "APPROACH",
    title: "Strategy-Driven Execution",
    description:
      "Combining creative ideas with practical strategies designed around each client's business goals.",
  },
  {
    label: "FOCUS",
    title: "Business-Led Marketing",
    description:
      "Building digital solutions that improve visibility, generate quality leads and create sustainable growth.",
  },
];

export default function FounderProfileSection() {
  return (
    <section
      id="founder-profile"
      aria-label="Founder Profile - Abhishek Kumar"
      className="relative w-full bg-white text-[#020B35] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 border-t border-slate-100 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* ======================================================= */}
          {/* LEFT SIDE: Founder Introduction & Primary CTA (~48%)   */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start text-left">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 mb-2.5 sm:mb-3"
            >
              <span className="w-5 h-[2px] bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#00B4D8] uppercase select-none">
                FOUNDER PROFILE
              </span>
            </motion.div>

            {/* Editorial Heading (Serif style like reference) */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#020B35] tracking-tight leading-[1.18]"
            >
              Meet Abhishek Kumar, <br />
              <span className="font-semibold text-[#020B35]">
                Founder &amp; Director.
              </span>
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
              className="mt-5 sm:mt-6 text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
            >
              Abhishek Kumar is the Founder &amp; Director of Promonex Media, a
              digital marketing agency focused on helping businesses build
              stronger brands, generate quality leads and achieve sustainable
              digital growth.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
              className="mt-3.5 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
            >
              His approach combines creative thinking, digital strategy and
              performance-focused execution to help businesses turn their online
              presence into a meaningful growth channel. At Promonex Media, he
              works closely with clients to understand their goals and build
              practical strategies that deliver measurable results.
            </motion.p>

            {/* Primary CTA Button: Talk to Our Team → */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-7 sm:mt-8 flex items-center"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#00D9FF] text-[#020B35] font-bold text-sm sm:text-[15px] shadow-[0_6px_20px_rgba(0,217,255,0.28)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:text-white hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT SIDE: 2 × 2 Information Cards Grid (~52%)        */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-5 xl:gap-6">
              {PROFILE_CARDS.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.12 * index,
                    ease: "easeOut",
                  }}
                  className="relative rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 lg:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_26px_rgba(2,11,53,0.06)] hover:border-[#00D9FF]/50 transition-all duration-300 flex flex-col justify-start"
                >
                  {/* Card Label */}
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#00B4D8] uppercase mb-2 select-none">
                    {card.label}
                  </span>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#020B35] tracking-tight leading-snug mb-2">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
