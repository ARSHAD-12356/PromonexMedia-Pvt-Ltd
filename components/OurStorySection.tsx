"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Rocket, BarChart3 } from "lucide-react";

export default function OurStorySection() {
  return (
    <section
      id="our-story"
      aria-label="Our Story - Promonex Media"
      className="relative w-full bg-white text-[#020B35] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: Clean Rectangular Team Photograph Card     */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start items-center">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px]"
            >
              {/* Subtle Cyan Glow behind Card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2.5 bg-gradient-to-tr from-[#00D9FF]/20 via-[#0478FD]/12 to-transparent rounded-[32px] blur-xl opacity-70 -z-10"
              />

              {/* Modern Rounded Image Frame with Cyan Border */}
              <div className="relative w-full rounded-[26px] sm:rounded-[28px] overflow-hidden border-[2.5px] border-[#00D9FF] bg-[#020B35] shadow-[0_16px_40px_rgba(0,217,255,0.22),0_4px_16px_rgba(0,0,0,0.06)] group">
                <Image
                  src="/assets/our-story-team-clean.png"
                  alt="Promonex Media Team in modern creative digital marketing office in Patna"
                  width={838}
                  height={912}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.018] transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: Editorial Story Content & Stats Card      */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Label with Gradient Accent Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 mb-2.5 sm:mb-3"
            >
              <span className="w-6 h-[2.5px] rounded-full bg-gradient-to-r from-[#FA5679] via-[#E93A94] to-[#00D9FF]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#E93A94] uppercase select-none">
                OUR STORY
              </span>
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-[#020B35] tracking-tight leading-[1.18]"
            >
              A Team That <br />
              <span className="text-[#00D9FF]">Turns Ideas</span> Into Impact.
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
              className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
            >
              Promonex Media started with a small team and a big vision — to help
              businesses grow in the digital world through strategy, creativity
              and measurable results.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
              className="mt-3 sm:mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
            >
              What began as a passion for digital marketing in 2013 has now grown
              into a full-service agency working with brands across industries.
              Our journey has been driven by learning, experimentation and a
              constant focus on delivering real impact for our clients.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-3 sm:mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
            >
              Today, we&apos;re a team of strategists, creators, marketers and
              problem-solvers who believe in collaboration, innovation and
              long-term partnerships.
            </motion.p>

            {/* Highlighted Metric Card with Cyan Left Border */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.36, ease: "easeOut" }}
              className="mt-7 sm:mt-8 rounded-2xl bg-gradient-to-r from-[#F0F9FF] to-white border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border-l-4 border-l-[#00D9FF] p-4 sm:p-5 sm:px-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 items-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
                
                {/* Metric 1: 10+ Team Members */}
                <div className="flex items-center gap-3 pt-1 sm:pt-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E0F7FE] flex items-center justify-center shrink-0 text-[#00B4D8]">
                    <Users size={19} className="stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#020B35] leading-tight">
                      10+
                    </span>
                    <span className="text-[11.5px] sm:text-xs text-slate-500 font-medium">
                      Team Members
                    </span>
                  </div>
                </div>

                {/* Metric 2: 100+ Happy Clients */}
                <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3E8FF] flex items-center justify-center shrink-0 text-[#9333EA]">
                    <Rocket size={19} className="stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#020B35] leading-tight">
                      100+
                    </span>
                    <span className="text-[11.5px] sm:text-xs text-slate-500 font-medium">
                      Happy Clients
                    </span>
                  </div>
                </div>

                {/* Metric 3: 10+ Years of Journey */}
                <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FCE7F3] flex items-center justify-center shrink-0 text-[#EC4899]">
                    <BarChart3 size={19} className="stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#020B35] leading-tight">
                      10+
                    </span>
                    <span className="text-[11.5px] sm:text-xs text-slate-500 font-medium">
                      Years of Journey
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
