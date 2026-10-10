"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const BENEFITS = [
  "Conversion-Focused Optimization",
  "Transparent Reporting",
  "Hassle-Free Support",
  "Result-Oriented Strategies",
];

export default function SeoWhyChooseUsSection() {
  return (
    <section className="relative w-full bg-white text-[#020B35] py-20 sm:py-24 lg:py-28 font-['Poppins',sans-serif]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Label, Heading, and Illustration             */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Small Cyan Label with Short Horizontal Line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 sm:w-10 h-[2.5px] bg-[#00D9FF] rounded-full shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#00D9FF] uppercase select-none">
                WHY CHOOSE US AS YOUR SEO AGENCY?
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[52px] font-extrabold text-[#020B35] tracking-tight leading-[1.14]">
              Our aim is for<br />
              your brand to<br />
              <span className="text-[#00D9FF]">succeed online</span>
            </h2>

            {/* Professional Puzzle Collaboration Illustration */}
            <div className="w-full mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[460px] lg:max-w-[500px]">
                <Image
                  src="/assets/seo-collaboration-puzzle.jpg"
                  alt="SEO Agency Team Collaborating with Puzzle Pieces"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Description, Benefit Points, CTA Button     */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start justify-center"
          >
            {/* SEO Description Paragraph */}
            <p className="text-slate-600 text-sm sm:text-[15.5px] md:text-[16px] leading-[1.78] font-normal">
              Our aim is not only to improve your website&apos;s visibility within search engines but
              also to drive traffic to your site that converts. Achieving this requires much more
              than standard techniques. As a{" "}
              <strong className="text-[#020B35] font-semibold">top SEO company in Patna</strong>, we
              rely on our experience, knowledge, innovative thinking, and creativity to deliver the
              best possible results. We offer end-to-end SEO services in Patna for businesses of all
              sizes.
            </p>

            <p className="mt-3 text-slate-500 text-sm sm:text-[15px] font-normal">
              You can explore all our SEO services below.
            </p>

            {/* Four Benefits with Cyan Check Icons */}
            <div className="my-8 sm:my-10 space-y-4 sm:space-y-5 w-full">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="flex items-center gap-3.5 sm:gap-4 group"
                >
                  {/* Cyan Circular Check Container */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E0F7FF] border border-[#BCEBFD] flex items-center justify-center text-[#0099FF] shrink-0 shadow-sm group-hover:bg-[#00D9FF] group-hover:text-[#020B35] group-hover:border-[#00D9FF] transition-all duration-200">
                    <Check size={16} className="stroke-[3]" />
                  </div>

                  {/* Benefit Label */}
                  <span className="text-[15px] sm:text-[16px] font-semibold text-[#020B35] tracking-tight group-hover:text-[#0077CC] transition-colors duration-200">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button: Dark Navy / Cyan Brand Styling */}
            <Link
              href="/#contact"
              className="group relative inline-flex items-center gap-3.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#020B35] text-white hover:bg-[#00D9FF] hover:text-[#020B35] border border-[#00D9FF]/40 font-bold text-sm sm:text-base tracking-tight shadow-[0_6px_22px_rgba(2,11,53,0.18)] hover:shadow-[0_10px_30px_rgba(0,217,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Get in touch with us now</span>
              <ArrowRight
                size={18}
                className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
