"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AnalyticsAuditHeroSection() {
  return (
    <section
      aria-labelledby="analytics-audit-hero-heading"
      className="relative isolate min-h-[min(820px,calc(100svh-76px))] overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white"
    >
      {/* Keep the site's navy hero background with a subtle blue/cyan glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_44%,rgba(0,217,255,0.12)_0%,rgba(3,17,68,0.5)_36%,#020B35_73%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto grid min-h-[min(820px,calc(100svh-76px))] w-full max-w-[1440px] grid-cols-1 items-center gap-4 px-5 pb-0 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-0 lg:px-10 lg:pt-7 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 max-w-[780px] pb-7 lg:pb-12"
        >
          <h1
            id="analytics-audit-hero-heading"
            className="text-[clamp(2.35rem,4.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.045em]"
          >
            <span className="block">Realise Your Marketing’s</span>
            <span className="mt-1 block text-[#00D9FF]">Full Potential</span>
          </h1>

          <p className="mt-6 max-w-[650px] text-[15px] leading-[1.75] text-[#E4EAF5] sm:mt-7 sm:text-[17px] lg:text-[18px]">
            Ensure data accuracy and boost confidence with our Google Analytics audit. Measure the right metrics for your KPIs and rely on trustworthy data for informed business decisions.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-9 sm:gap-x-10">
            <a
              href="#analytics-audit-reviews"
              className="group inline-flex min-h-[54px] items-center gap-3 rounded-lg bg-[#00D9FF] px-6 py-3 text-[15px] font-semibold text-[#020B35] shadow-[0_10px_32px_rgba(0,217,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#38E2FF] hover:shadow-[0_14px_38px_rgba(0,217,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B35] sm:text-base"
            >
              Learn More
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <Link
              href="/#case-studies"
              className="group relative inline-flex items-center gap-2 pb-1.5 text-[15px] font-semibold text-white sm:text-base"
            >
              View Case Studies
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-white to-[#00D9FF] transition-transform duration-300 group-hover:scale-x-110"
              />
            </Link>
          </div>

          <div className="mt-8 grid max-w-[590px] grid-cols-1 border-t border-white/15 pt-5 sm:mt-14 sm:grid-cols-2 sm:pt-6 lg:mt-16">
            <div className="flex items-center gap-3 border-b border-white/15 pb-4 sm:gap-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-7">
              <span className="text-[38px] font-bold leading-none tracking-tight text-white sm:text-[48px]">99%</span>
              <span className="max-w-[130px] text-[12px] leading-snug text-[#C5D0E3] sm:text-[15px]">
                Tracking issues resolved
              </span>
            </div>
            <div className="flex items-center gap-3 pt-4 sm:gap-4 sm:pt-0 sm:pl-7">
              <span className="text-[38px] font-bold leading-none tracking-tight text-white sm:text-[48px]">100+</span>
              <span className="max-w-[145px] text-[12px] leading-snug text-[#C5D0E3] sm:text-[15px]">
                Successful setups completed
              </span>
            </div>
          </div>
        </motion.div>

        <div
          aria-hidden="true"
          className="relative mx-auto -mt-4 aspect-[1/0.9] w-full max-w-[610px] self-end sm:-mt-8 lg:mt-0 lg:ml-auto lg:aspect-[0.94/1] lg:h-[min(760px,calc(100svh-88px))] lg:max-w-none"
        >
          {/* Fine orbit lines echo the reference while staying in the site's cool palette. */}
          <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-8%] h-[77%] rounded-[50%] border border-white/[0.12]" />
          <div className="pointer-events-none absolute inset-x-[-6%] bottom-[-4%] h-[72%] rounded-[50%] border border-white/[0.09]" />
          <div className="pointer-events-none absolute inset-x-[-2%] bottom-0 h-[67%] rounded-[50%] border border-[#00D9FF]/20" />
          <div className="pointer-events-none absolute bottom-[8%] right-[7%] h-[58%] w-[68%] rounded-full bg-[#0478FD]/20 blur-[90px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/service-girl.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 48vw"
              className="object-contain object-bottom drop-shadow-[0_22px_45px_rgba(0,0,0,0.42)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
