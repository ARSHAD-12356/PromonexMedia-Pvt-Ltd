"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PerformanceMarketingHeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="pm-hero-heading"
        className="relative isolate flex min-h-[min(700px,calc(100svh-76px))] items-center justify-center overflow-hidden font-['Poppins',sans-serif] text-white"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #0A2A6B 0%, #061E52 42%, #031539 80%)",
        }}
      >
        {/* Ambient glow – top-left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-60 -top-60 h-[600px] w-[600px] rounded-full bg-[#0478FD]/[0.07] blur-[120px]"
        />
        {/* Ambient glow – bottom-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#00D9FF]/[0.06] blur-[120px]"
        />

        {/* Fine dot-grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Centered content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[860px] flex-col items-center px-6 py-20 text-center sm:px-10 sm:py-24">

          {/* H1 — big centered heading */}
          <motion.h1
            id="pm-hero-heading"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-[clamp(2.6rem,7vw,4.6rem)] font-bold leading-[1.12] tracking-tight"
          >
            The{" "}
            <span>Result-Oriented</span>
            <br />
            Performance Marketing
            <br />
            Agency in Patna
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mt-8 max-w-[680px] text-[15px] leading-[1.8] text-[#C8D5EA] sm:text-[17px]"
          >
            Promonex Media is the fastest-growing{" "}
            <strong className="font-semibold text-white">
              performance marketing agency in Patna
            </strong>
            , bringing you revolutionizing performance marketing services that
            drive unparalleled growth for your business. With our innovative
            strategies and data-driven approach, we carefully test and adjust
            our methods to reach the paying audience effectively. Our focus is
            on delivering real results, not just empty promises.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary — filled cyan/blue square button */}
            <Link
              href="/contact"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-[linear-gradient(90deg,#0478FD,#00C9F4)] px-8 text-[16px] font-semibold text-white shadow-[0_8px_28px_rgba(4,120,253,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(4,120,253,0.55)] sm:text-[17px]"
            >
              Let&apos;s Optimise Your Success
            </Link>

            {/* Secondary — border square button with arrow icon */}
            <Link
              href="/services"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg border-2 border-white/30 bg-white/[0.04] px-8 text-[16px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/[0.09] sm:text-[17px]"
            >
              <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[#00C9F4]/30">
                <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
              </span>
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
