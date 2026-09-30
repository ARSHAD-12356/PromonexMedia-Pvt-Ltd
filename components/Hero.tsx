"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GrowthChart from "./GrowthChart";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-4 sm:pt-8 md:pt-12 lg:pt-14 pb-8 sm:pb-12 lg:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* LEFT SIDE: Hero Content */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left z-10">
            {/* Headline: Exactly 2 lines on desktop */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-extrabold tracking-[-0.035em] leading-[1.08] text-white"
            >
              <span className="block">Your Growth Story</span>
              <span className="block mt-1 sm:mt-1.5 bg-gradient-to-r from-[#00D9FF] via-[#00BFFF] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,217,255,0.4)]">
                Starts Here
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
              className="mt-6 sm:mt-7 text-slate-300/90 text-[16px] sm:text-[17px] md:text-[18px] leading-[1.68] max-w-[530px] space-y-3 font-normal"
            >
              <p>
                Promonex Media is a full-service digital marketing agency in
                Patna, helping businesses grow their online presence, generate
                quality leads, and turn digital marketing into a consistent
                growth channel.
              </p>
              <p>
                From SEO and social media marketing to Google Ads, Meta Ads,
                website development, and lead generation, we provide end-to-end
                digital marketing solutions tailored to your business goals.
              </p>
            </motion.div>

            {/* EXACT TWO CTA BUTTONS (Purple Reference Style) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: "easeOut" }}
              className="mt-8 sm:mt-9 flex flex-col sm:flex-row gap-3.5 w-full"
            >
              {/* BUTTON 1: Get a Free Growth Audit */}
                <Link
                  href="#contact"
                  className="group relative flex flex-1 min-w-0 items-center justify-between w-full h-[64px] sm:h-[68px] px-4 rounded-2xl bg-white text-[#5B3CC4] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.4)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.20)] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white"
              >
                <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold tracking-tight text-[#5B3CC4] group-hover:text-white transition-colors">
                  Get a Free Growth Audit
                </span>
                <span className="w-9 h-9 rounded-full border border-[#5B3CC4]/30 flex items-center justify-center text-[#5B3CC4] group-hover:border-white group-hover:bg-white/10 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0 ml-2">
                  <ArrowRight
                    size={20}
                    className="stroke-[2.2] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </span>
              </Link>

              {/* BUTTON 2: Explore Our Services */}
                <Link
                  href="#services"
                  className="group relative flex flex-1 min-w-0 items-center justify-between w-full h-[64px] sm:h-[68px] px-4 rounded-2xl bg-white text-[#5B3CC4] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.4)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.20)] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white"
              >
                <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold tracking-tight text-[#5B3CC4] group-hover:text-white transition-colors">
                  Explore Our Services
                </span>
                <span className="w-9 h-9 rounded-full border border-[#5B3CC4]/30 flex items-center justify-center text-[#5B3CC4] group-hover:border-white group-hover:bg-white/10 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0 ml-2">
                  <ArrowRight
                    size={20}
                    className="stroke-[2.2] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Growth Chart / Visual */}
          <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <GrowthChart />
          </div>
        </div>
      </div>
    </section>
  );
}
