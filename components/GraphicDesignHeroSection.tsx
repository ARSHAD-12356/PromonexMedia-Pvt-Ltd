"use client";

import Link from "next/link";
import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import { ArrowRight, PenTool } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function GraphicDesignHeroSection() {
  const fromLeft = {
    initial: { opacity: 0, x: -70 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.85, ease: EASE },
  };

  const fromRight = {
    initial: { opacity: 0, x: 90 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.95, delay: 0.15, ease: EASE },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate flex min-h-[min(740px,calc(100svh-76px))] items-center overflow-hidden bg-[#031a43] font-['Poppins',sans-serif] text-white">
        <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-6 py-8 sm:px-10 md:pl-24 lg:min-h-[660px] lg:grid-cols-[1fr_1fr] lg:gap-8 lg:py-8 xl:pl-12 xl:pr-8">
          {/* ── Left Column: Copy & Actions (~48%) ──────────────────────── */}
          <motion.div {...fromLeft} className="relative z-10 max-w-[600px]">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00C8EF]/40 bg-[#00C8EF]/10 px-3.5 py-1 text-[13px] font-medium tracking-wide text-[#7FDBF5] shadow-[0_0_15px_rgba(0,200,239,0.15)]">
              <span className="flex size-5 items-center justify-center rounded-full bg-[#00C8EF]/20 text-[#00C8EF]">
                <PenTool size={12} strokeWidth={2.4} aria-hidden="true" />
              </span>
              <span>Creative Designs</span>
            </div>

            {/* Heading — Exactly 4 lines */}
            <h1 className="mt-3.5 text-[clamp(2.1rem,4.1vw,3.35rem)] font-extrabold leading-[1.12] tracking-tight text-white sm:mt-4">
              <span className="block">Creative</span>
              <span className="block text-[#00C8EF]">Graphic Design</span>
              <span className="block whitespace-nowrap">Solutions for Your</span>
              <span className="block whitespace-nowrap">Brand in Patna.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="mt-4 max-w-[530px] text-[14.5px] leading-[1.6] text-[#d0d9eb] sm:mt-5 sm:text-[16px]">
              Brandwitty is a leading <strong className="font-semibold text-white">graphic design agency in Patna</strong> creating visually stunning designs that communicate your brand’s story. From branding to social media creatives, we deliver impactful designs that help your business stand out.
            </p>

            {/* CTA Buttons — clearly visible and positioned */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-7 sm:gap-x-8">
              {/* Primary CTA */}
              <Link
                href="/services"
                className="group inline-flex min-h-[54px] items-center gap-4 rounded-full border-2 border-[#00C8EF] bg-[#00C8EF] py-1 pl-6 pr-1.5 text-[15px] font-bold text-[#031b43] shadow-[0_0_22px_rgba(0,200,239,0.3)] transition-all duration-200 hover:bg-[#00d9ff] hover:shadow-[0_0_30px_rgba(0,200,239,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-[58px] sm:gap-5 sm:pl-7 sm:text-[16px]"
              >
                <span>Explore our services</span>
                <span className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-[#031b43] text-white transition-transform duration-200 group-hover:translate-x-0.5 sm:size-[46px]">
                  <ArrowRight size={20} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center py-2 text-[15.5px] font-semibold text-white transition-colors duration-200 hover:text-[#00C8EF] sm:text-[16.5px]"
              >
                <span>Enquire now</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1 h-[2px] origin-left rounded-full bg-[linear-gradient(90deg,#00C8EF,#3B82F6)] transition-transform duration-300 group-hover:scale-x-110"
                />
              </Link>
            </div>
          </motion.div>

          {/* ── Right Column: Graphic Designer Visual (~52%) ────────────── */}
          <motion.div
            {...fromRight}
            className="relative mx-auto flex w-full max-w-[640px] items-center justify-center lg:ml-auto"
          >
            <div className="relative aspect-[1.05/1] w-full">
              <Image
                src="/assets/graphic-design-hero.png"
                alt="Professional Indian female graphic designer working on laptop and drawing tablet in a creative design studio"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
                className="object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
