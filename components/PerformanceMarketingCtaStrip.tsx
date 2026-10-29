"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PerformanceMarketingCtaStrip() {
  return (
    <div
      className="w-full font-['Poppins',sans-serif]"
      style={{
        background:
          "linear-gradient(90deg,#020B35 0%,#061A40 50%,#020B35 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-8 px-6 py-10 sm:flex-row sm:gap-10 sm:px-10 lg:px-12">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="flex items-start gap-4"
        >
          {/* Animated dot accent */}
          <span className="relative mt-1 flex shrink-0">
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-[#00C9F4] opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00C9F4]" />
          </span>

          <div>
            <h2 className="text-[20px] font-bold leading-snug text-white sm:text-[22px] lg:text-[24px]">
              One strategy.{" "}
              <span className="text-[#00C9F4]">Multiple opportunities</span> to
              grow.
            </h2>
            <p className="mt-2 max-w-[560px] text-[14px] leading-[1.75] text-[#8A9BBB] sm:text-[15px]">
              We connect search, social and organic advertising into a
              performance marketing strategy built around your actual business
              goals.
            </p>
          </div>
        </motion.div>

        {/* Right: CTA button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          className="shrink-0"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-lg bg-[linear-gradient(90deg,#0478FD,#00C9F4)] px-7 py-4 text-[15px] font-bold text-white shadow-[0_8px_28px_rgba(4,120,253,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(4,120,253,0.55)] sm:text-[16px]"
          >
            Let&apos;s Discuss Your Campaign
            <ArrowRight
              size={18}
              strokeWidth={2.4}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
