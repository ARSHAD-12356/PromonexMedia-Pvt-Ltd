"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function CoFounderSection() {
  return (
    <section
      id="co-founder"
      aria-label="Nancy Shekhar - Co-Founder Promonex Media"
      className="relative w-full bg-white text-[#09183D] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: Nancy Shekhar Image Card with Info Panel   */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative w-full max-w-[420px] sm:max-w-[450px] lg:max-w-[460px] xl:max-w-[480px]"
            >
              {/* Subtle Ambient Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 bg-gradient-to-tr from-[#00D9FF]/15 via-[#BD31E2]/10 to-transparent rounded-[32px] blur-xl opacity-60 -z-10"
              />

              {/* Clean Rectangular Portrait Card */}
              <div className="relative w-full rounded-[26px] sm:rounded-[28px] overflow-hidden border border-[#00D9FF]/35 bg-[#020B35] shadow-[0_20px_50px_rgba(2,11,53,0.12),0_0_25px_rgba(0,217,255,0.08)] flex flex-col">
                
                {/* Nancy Shekhar Image */}
                <div className="relative w-full h-[380px] sm:h-[430px] md:h-[460px] lg:h-[470px] xl:h-[490px] bg-[#020B35] overflow-hidden">
                  <Image
                    src="/assets/founder2.png"
                    alt="Nancy Shekhar - Co-Founder Promonex Media"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Transition at bottom of image */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020B35] via-[#020B35]/40 to-transparent"
                  />
                </div>

                {/* Information Panel Attached at Bottom */}
                <div className="relative p-5 sm:p-6 bg-[#020B35] border-t border-[#00D9FF]/25">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="shrink-0">
                      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#00D9FF]">
                        CO-FOUNDER
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                        Nancy Shekhar
                      </h3>
                    </div>

                    <div className="sm:text-left border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4 pt-2.5 sm:pt-0">
                      <p className="text-xs sm:text-[12.5px] text-slate-300 leading-snug font-normal italic">
                        &ldquo;Building Promonex Media through strategy, leadership and growth.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Specular Inner Border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[26px] sm:rounded-[28px] border border-white/10"
                />
              </div>

            </motion.div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: Content, Feature Cards, & CTA Button     */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 mb-3 sm:mb-4"
            >
              <span className="w-6 h-[2px] bg-gradient-to-r from-[#FA5679] to-[#00D9FF] rounded-full shadow-[0_0_8px_rgba(0,217,255,0.4)]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#FA5679] uppercase select-none">
                CO-FOUNDER
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#09183D] tracking-[-0.03em] leading-[1.14]"
            >
              The Strategy & <br />
              <span className="text-[#00D9FF] drop-shadow-[0_0_24px_rgba(0,217,255,0.3)]">
                Leadership.
              </span>
            </motion.h2>

            {/* Content Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-[#475569] text-sm sm:text-[15px] lg:text-[15.5px] leading-relaxed max-w-2xl font-normal"
            >
              <strong className="text-[#09183D] font-semibold">Nancy Shekhar</strong> is the{" "}
              <strong className="text-[#09183D] font-semibold">Co-Founder of Promonex Media</strong>, leading client
              relationships, team management and digital marketing strategy. She works closely with clients to understand
              their business goals, build the right marketing direction and develop strategies focused on sustainable brand growth.
            </motion.p>

            {/* Content Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="mt-3.5 text-[#475569] text-sm sm:text-[15px] lg:text-[15.5px] leading-relaxed max-w-2xl font-normal"
            >
              Her role involves leading the team, planning campaigns, building brand positioning and overseeing execution
              across SEO, social media, content and performance marketing. She focuses on turning business goals into
              actionable strategies that strengthen brands, generate growth and deliver meaningful results.
            </motion.p>

            {/* Three Feature Cards in One Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4"
            >
              {/* Feature 1: Client Strategy */}
              <div className="rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(2,11,53,0.04)] hover:shadow-[0_8px_25px_rgba(250,86,121,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FA5679]/10 text-[#FA5679] flex items-center justify-center shrink-0">
                  <Lightbulb size={20} className="stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#09183D] leading-tight">
                    Client Strategy
                  </h4>
                  <p className="text-[11px] sm:text-[11.5px] text-slate-500 leading-snug mt-0.5">
                    Understanding businesses and building the right strategy
                  </p>
                </div>
              </div>

              {/* Feature 2: Team Leadership */}
              <div className="rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(2,11,53,0.04)] hover:shadow-[0_8px_25px_rgba(0,217,255,0.14)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00D9FF]/12 text-[#00A8E8] flex items-center justify-center shrink-0">
                  <Users size={20} className="stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#09183D] leading-tight">
                    Team Leadership
                  </h4>
                  <p className="text-[11px] sm:text-[11.5px] text-slate-500 leading-snug mt-0.5">
                    Leading teams and keeping execution on track
                  </p>
                </div>
              </div>

              {/* Feature 3: Brand Growth */}
              <div className="rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(2,11,53,0.04)] hover:shadow-[0_8px_25px_rgba(189,49,226,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#BD31E2]/10 text-[#BD31E2] flex items-center justify-center shrink-0">
                  <TrendingUp size={20} className="stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#09183D] leading-tight">
                    Brand Growth
                  </h4>
                  <p className="text-[11px] sm:text-[11.5px] text-slate-500 leading-snug mt-0.5">
                    Building stronger brands and driving sustainable growth
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button: Connect with Nancy (Smooth Cyan → Blue → Purple Gradient on Hover) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="mt-7 sm:mt-8 flex items-center"
            >
              <a
                href="https://www.linkedin.com/in/nancy-shekhar-promonex/?isSelfProfile=false"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#020B35] text-white font-bold text-sm sm:text-[15px] shadow-[0_10px_25px_rgba(2,11,53,0.2)] hover:shadow-[0_12px_32px_rgba(0,217,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                {/* Smooth animated gradient background on hover: cyan → blue → purple */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] via-[#0478FD] to-[#BD31E2] opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-out"
                />

                <span className="relative z-10 flex items-center gap-2.5">
                  <span>Connect with Nancy</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
