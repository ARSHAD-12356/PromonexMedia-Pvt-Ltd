"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CaseStudyItem {
  category: string;
  title: string;
  description: string;
  image: string;
  metrics: string[];
  href: string;
}

const FEATURED_CASE_STUDIES: CaseStudyItem[] = [
  {
    category: "QUICK COMMERCE & APP",
    title: "Kuiklo: 10-Minute Grocery Delivery Growth in Patna",
    description:
      "A comprehensive digital growth strategy across performance marketing, app acquisition and local SEO driving high-intent grocery searches and rapid user adoption.",
    image: "/assets/case study 2.jpeg",
    metrics: ["1.8L+ Downloads", "₹60L Monthly Sales", "Top Local Rankings"],
    href: "/#case-studies",
  },
  {
    category: "ECOMMERCE & JEWELLERY",
    title: "Tvayi: Scaling Demi-Fine Jewellery Online Sales",
    description:
      "Combined product-led creative storytelling, audience segmentation and Meta performance campaigns to turn premium positioning into scalable recurring revenue.",
    image: "/assets/case study 4.jpeg",
    metrics: ["+68% Online Sales", "3.4X ROAS", "₹25L+ Attributed Rev"],
    href: "/#case-studies",
  },
  {
    category: "REAL ESTATE & INFRASTRUCTURE",
    title: "Bigrahpuram: Generating High-Intent Property Leads",
    description:
      "Targeted multi-channel campaigns built around location, pricing and project highlights that drastically reduced cost per lead while boosting qualified enquiries.",
    image: "/assets/case study 3.jpeg",
    metrics: ["1,200+ Enquiries", "-38% Cost Per Lead", "+42% Qualified Leads"],
    href: "/#case-studies",
  },
];

export default function AboutCaseStudiesSection() {
  return (
    <section
      id="about-case-studies"
      aria-label="Real Client Experience and Case Studies"
      className="relative w-full bg-white text-[#020B35] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 border-t border-slate-100 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        
        {/* ======================================================= */}
        {/* TOP HEADER: Eyebrow + Fresh Editorial Heading + Intro   */}
        {/* ======================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center justify-center gap-2 mb-3 sm:mb-3.5"
          >
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#E93A94] uppercase select-none">
              REAL CLIENT EXPERIENCE
            </span>
          </motion.div>

          {/* Fresh Heading with Bold Sans + Italic Serif Contrast */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#020B35] tracking-tight leading-[1.2]"
          >
            Proven business results. <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#00B4D8]">
              Not just marketing promises.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base lg:text-[15.5px] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Explore real Promonex Media work across ecommerce, healthcare, real
            estate and service businesses, backed by measurable growth in
            traffic, visibility, leads and advertising performance.
          </motion.p>
        </div>

        {/* ======================================================= */}
        {/* 3 CASE STUDY CARDS GRID                                  */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {FEATURED_CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.12 * index,
                ease: "easeOut",
              }}
              className="group relative rounded-[24px] bg-white border border-slate-200/90 shadow-[0_4px_24px_rgba(2,11,53,0.04)] hover:shadow-[0_16px_36px_rgba(2,11,53,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Frame with Inset Rounded Corners */}
                <div className="p-3 sm:p-3.5 pb-0">
                  <div className="relative w-full h-[210px] sm:h-[225px] md:h-[235px] rounded-[18px] overflow-hidden bg-slate-100">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60"
                    />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 sm:p-6 pt-4 sm:pt-5">
                  {/* Category Pill Tag */}
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#0099FF] uppercase">
                    {study.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#020B35] leading-snug tracking-tight mt-2 group-hover:text-[#00B4D8] transition-colors duration-200">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal mt-2.5">
                    {study.description}
                  </p>

                  {/* Metric Badges */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-1">
                    {study.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center text-[11.5px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Link with Arrow */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                <Link
                  href={study.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#020B35] group-hover:text-[#00B4D8] transition-colors duration-200"
                >
                  <span>View Case Study</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ======================================================= */}
        {/* BOTTOM CENTER: View All Case Studies Button             */}
        {/* ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-12 sm:mt-14 flex justify-center"
        >
          <Link
            href="/#case-studies"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-[#020B35] text-white font-bold text-sm sm:text-[15px] shadow-[0_8px_24px_rgba(2,11,53,0.22)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            <span>View All Case Studies</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
