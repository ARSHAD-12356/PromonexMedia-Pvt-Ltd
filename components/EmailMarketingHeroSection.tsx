"use client";

import Link from "next/link";
import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import { ArrowRight, Mail, MousePointerClick, Send, TrendingUp } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Small bar-chart glyph used in the stat cards
function Bars({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 32" className={className} aria-hidden="true">
      <rect x="2" y="18" width="8" height="14" rx="2" fill="currentColor" />
      <rect x="16" y="10" width="8" height="22" rx="2" fill="currentColor" />
      <rect x="30" y="2" width="8" height="30" rx="2" fill="currentColor" />
    </svg>
  );
}

// Gentle floating motion for the UI cards around the illustration
const float = (delay: number, distance = 8) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const AVATARS = [
  { initials: "AK", from: "#F472B6", to: "#DB2777" },
  { initials: "RS", from: "#38BDF8", to: "#0284C7" },
  { initials: "NP", from: "#FBBF24", to: "#D97706" },
  { initials: "VM", from: "#34D399", to: "#059669" },
];

export default function EmailMarketingHeroSection() {
  const fromLeft = { initial: { opacity: 0, x: -70 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.85, ease: EASE } };
  const fromRight = { initial: { opacity: 0, x: 110 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.95, delay: 0.15, ease: EASE } };

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate flex min-h-[min(780px,calc(100svh-76px))] items-stretch overflow-hidden bg-[radial-gradient(ellipse_at_70%_40%,#0A2A6B_0%,#061E52_38%,#031539_75%)] font-['Poppins',sans-serif] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-48 h-[520px] w-[520px] rounded-full bg-blue-500/[0.05] blur-2xl" />

        <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-6 pb-0 pt-14 sm:px-10 md:pl-24 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pt-12 xl:pl-12 xl:pr-8">
          {/* ── Left: copy ─────────────────────────────────────────────── */}
          <motion.div {...fromLeft} className="relative z-10 max-w-[640px] lg:self-center">
            {/* Four fixed lines on desktop (like the reference); natural wrapping on small screens */}
            <h1 className="text-[clamp(2.1rem,6vw,2.6rem)] font-bold leading-[1.14] tracking-tight lg:text-[clamp(2.4rem,3.4vw,3.3rem)]">
              <span className="lg:block lg:whitespace-nowrap">Curated Email </span>
              <span className="lg:block lg:whitespace-nowrap">Campaigns with the </span>
              <span className="lg:block lg:whitespace-nowrap">
                Best <span className="text-[#00C9F4]">Email Marketing</span>{" "}
              </span>
              <span className="lg:block lg:whitespace-nowrap">Agency in Patna.</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.75] text-[#D0D9EB] sm:text-[17px]">
              Promonex Media is a leading <strong className="font-semibold text-white">email marketing agency in Patna</strong>{" "}
              focusing on creating a communication plan tailored to your ambitions and objectives, ensuring you achieve
              the best outcomes. We believe email marketing services acts as the cornerstone, bringing together all other
              digital marketing techniques.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5">
              <Link
                href="/services"
                className="group inline-flex min-h-[62px] items-center gap-5 rounded-full border-2 border-[#00D9FF] py-1.5 pl-7 pr-2 text-[15px] font-semibold text-white shadow-[0_0_18px_rgba(0,217,255,0.12)] transition-[box-shadow,background-color] duration-200 hover:bg-[#00D9FF]/[0.07] hover:shadow-[0_0_26px_rgba(0,217,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-[17px]"
              >
                <span>Explore our services</span>
                <span className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#00C9F4] text-[#031b43] transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight size={24} strokeWidth={2.2} aria-hidden="true" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="group relative pb-1.5 text-[16px] font-semibold text-white sm:text-[17px]"
              >
                Enquire now
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left rounded-full bg-[linear-gradient(90deg,#00C9F4,#3B82F6)] transition-transform duration-300 group-hover:scale-x-110"
                />
              </Link>
            </div>
          </motion.div>

          {/* ── Right: illustration ────────────────────────────────────── */}
          <motion.div
            {...fromRight}
            aria-hidden="true"
            className="relative mx-auto aspect-[1.05/1] w-full max-w-[620px] self-end lg:ml-auto"
          >
            {/* Blue glow + backdrop panel behind the person */}
            <div className="absolute bottom-[6%] right-[8%] h-[70%] w-[52%] rounded-[36px] bg-[linear-gradient(160deg,#1E5BD8_0%,#0B3A9E_100%)] opacity-90 shadow-[0_30px_80px_rgba(29,91,216,0.45)]" />

            {/* Dashed orbit connecting the icons */}
            <svg viewBox="0 0 600 560" className="absolute inset-0 h-full w-full" fill="none">
              <path
                d="M170 150 C 240 60, 330 40, 400 60 S 560 140, 575 260 S 540 430, 470 470"
                stroke="#5EA8FF"
                strokeWidth="2"
                strokeDasharray="6 7"
                opacity="0.7"
              />
            </svg>

            {/* Email client mockup */}
            {/* (envelope sits on the left so the person doesn't hide it) */}
            <div className="absolute left-[3%] top-[25%] h-[50%] w-[58%] overflow-hidden rounded-[16px] border border-white/40 bg-[#F3F7FD] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex h-7 items-center gap-1.5 px-3">
                <i className="size-2 rounded-full bg-[#ff5f57]" />
                <i className="size-2 rounded-full bg-[#ffbd2e]" />
                <i className="size-2 rounded-full bg-[#28c840]" />
                <i className="ml-3 block h-2 w-1/2 rounded bg-[#D7E2F2]" />
              </div>
              <div className="grid h-[calc(100%-28px)] grid-cols-[0.5fr_1.4fr_1fr] gap-3 p-3">
                <div className="space-y-2.5 pt-1">
                  {[90, 70, 80, 60, 75].map((w, i) => (
                    <i key={i} className="block h-2 rounded bg-[#D7E2F2]" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="flex flex-col gap-2.5 pt-1">
                  <i className="block h-2 w-3/4 rounded bg-[#D7E2F2]" />
                  <div className="flex flex-1 items-center justify-center rounded-lg bg-white">
                    <Mail className="size-[62%] text-[#2F7BF5]" strokeWidth={1.4} fill="#DCEBFF" />
                  </div>
                  <i className="block h-2 w-2/3 rounded bg-[#D7E2F2]" />
                </div>
                <div className="space-y-2.5 pt-1">
                  {[80, 95, 70].map((w, i) => (
                    <i key={i} className="block h-2 rounded bg-[#D7E2F2]" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Send badge on the mockup */}
            <motion.div {...float(0.4, 6)} className="absolute left-[8%] top-[66%] z-30 flex size-[58px] items-center justify-center rounded-2xl bg-[#1E6BF0] shadow-[0_12px_28px_rgba(30,107,240,0.45)]">
              <Send size={28} className="-rotate-12 text-white" />
            </motion.div>

            {/* The person */}
            <Image
              src="/assets/service-girl.png"
              alt=""
              width={1278}
              height={1230}
              priority
              sizes="(max-width: 1023px) 80vw, 460px"
              className="absolute bottom-0 right-[-4%] z-20 h-[80%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            />

            {/* Mail icon at the top of the orbit */}
            <motion.div {...float(0)} className="absolute left-[60%] top-[3%] z-30 flex size-[50px] items-center justify-center rounded-full bg-[#1E6BF0] sm:size-[68px] shadow-[0_0_0_6px_rgba(30,107,240,0.18),0_14px_30px_rgba(30,107,240,0.45)]">
              <Mail size={30} className="text-white" />
            </motion.div>

            {/* 40% Open Rate */}
            <motion.div {...float(0.8)} className="absolute left-0 top-[12%] z-30 flex items-center gap-4 rounded-xl bg-white px-3 py-2.5 text-[#0A1B38] sm:rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:px-6 sm:py-4">
              <div>
                <p className="text-[18px] font-bold leading-none sm:text-[28px]">40%</p>
                <p className="mt-1 text-[11px] text-[#41526E] sm:mt-1.5 sm:text-[14px]">Open Rate</p>
              </div>
              <div className="relative">
                <Bars className="h-7 w-9 text-[#2F7BF5] sm:h-8 sm:w-10" />
                <TrendingUp size={22} className="absolute -right-2 -top-4 text-[#10B981]" strokeWidth={2.6} />
              </div>
            </motion.div>

            {/* 5% Click Rate */}
            <motion.div {...float(1.6)} className="absolute right-0 top-[13%] z-30 flex items-center gap-4 rounded-xl bg-white px-3 py-2.5 text-[#0A1B38] sm:rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:px-6 sm:py-4">
              <div>
                <p className="text-[18px] font-bold leading-none sm:text-[28px]">5%</p>
                <p className="mt-1 text-[11px] text-[#41526E] sm:mt-1.5 sm:text-[14px]">Click Rate</p>
              </div>
              <MousePointerClick size={30} className="text-[#1E6BF0]" strokeWidth={2.2} />
            </motion.div>

            {/* Chart card behind the person's shoulder */}
            <div className="absolute right-[4%] top-[42%] z-10 flex h-[16%] w-[24%] items-end justify-center rounded-2xl bg-white/95 pb-3 shadow-[0_14px_30px_rgba(0,0,0,0.25)]">
              <Bars className="h-[60%] w-[55%] text-[#2F7BF5]" />
            </div>

            {/* Paper-plane tile */}
            <motion.div {...float(1.2, 6)} className="absolute right-[-2%] top-[46%] z-30 flex size-[54px] rotate-[-10deg] items-center justify-center rounded-2xl bg-[#DCEBFF] shadow-[0_12px_26px_rgba(0,0,0,0.25)]">
              <Send size={24} className="text-[#2F7BF5]" />
            </motion.div>

            {/* 2% Conversion Rate */}
            <motion.div {...float(2)} className="absolute bottom-[8%] right-0 z-30 rounded-xl bg-white px-3 py-2.5 text-[#0A1B38] sm:rounded-2xl sm:px-4 sm:py-3 shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:px-5 sm:py-4">
              <div className="flex items-center">
                {AVATARS.map((a, i) => (
                  <span
                    key={a.initials}
                    className="-ml-2 flex size-7 items-center justify-center rounded-full border-2 border-white text-[9px] sm:text-[11px] font-bold text-white first:ml-0 sm:size-10"
                    style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})`, zIndex: 10 - i }}
                  >
                    {a.initials}
                  </span>
                ))}
                <span className="-ml-2 flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#0A1B38] text-white sm:size-10">
                  <ArrowRight size={16} />
                </span>
              </div>
              <p className="mt-1.5 text-[12px] font-bold sm:mt-2 sm:text-[16px]">2% Conversion Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
