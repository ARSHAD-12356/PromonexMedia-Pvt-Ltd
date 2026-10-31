"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const CAPABILITIES = [
  "Social media strategy",
  "Platform-first content",
  "Community and campaign support",
];

export default function SocialMediaHeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="social-media-hero-heading"
        className="relative isolate overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white"
      >
        <div className="relative mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-[1400px] grid-cols-1 items-stretch px-4 sm:px-8 lg:min-h-[800px] lg:grid-cols-[0.94fr_1.06fr] lg:gap-6 lg:px-10">
          <div className="relative z-10 flex flex-col justify-center py-14 sm:py-16 lg:py-20">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00C8F0]/35 bg-[#00C8F0]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8AE9FC] sm:text-[12px]"
            >
              <span className="size-2 rounded-full bg-[#00C8F0]" aria-hidden="true" />
              Strategy <span aria-hidden="true">•</span> Content <span aria-hidden="true">•</span> Community
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
              className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-[#53D7F4] sm:text-[12px]"
            >
              Social Media Marketing
            </motion.p>

            <motion.h1
              id="social-media-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14, ease: EASE }}
              className="mt-4 max-w-[720px] text-[clamp(1.5rem,4.2vw,3.75rem)] font-extrabold leading-[1.2] tracking-[-0.045em]"
            >
              <span className="block whitespace-nowrap">Build a social</span>
              <span className="block whitespace-nowrap">presence that</span>
              <span className="block whitespace-nowrap">keeps your brand</span>
              <span className="block whitespace-nowrap text-[#00C8F0]">in the conversation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.23, ease: EASE }}
              className="mt-6 max-w-[650px] text-[15px] leading-[1.8] text-[#D3DCEC] sm:text-[17px]"
            >
              Promonex Media helps businesses in Patna and across India create a more consistent social presence with
              platform strategy, engaging content, creative planning and thoughtful community management.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="mt-6 flex max-w-[660px] flex-wrap gap-x-5 gap-y-3"
              aria-label="Social media marketing services"
            >
              {CAPABILITIES.map((capability) => (
                <li key={capability} className="inline-flex items-center gap-2 text-[12px] font-medium text-[#DCE8F8] sm:text-[13px]">
                  <span className="flex size-[18px] items-center justify-center rounded-full bg-[#00C8F0]/15 text-[#53D7F4]">
                    <Check size={11} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {capability}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <Link
                href="#contact-social-media"
                className="group inline-flex min-h-14 items-center gap-3 rounded-xl bg-[#00C8F0] px-6 py-3.5 text-[14px] font-bold text-[#061A40] shadow-[0_10px_30px_rgba(0,200,240,0.22)] transition hover:-translate-y-0.5 hover:bg-[#53D7F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-[15px]"
              >
                Let&apos;s build your social presence
                <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 bg-white/[0.04] px-5 py-3.5 text-[14px] font-bold text-white transition hover:border-[#53D7F4] hover:text-[#8AE9FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8F0] sm:text-[15px]"
              >
                Explore our services
              </Link>
            </motion.div>
          </div>

          <div className="relative flex min-h-[340px] items-end justify-center overflow-hidden sm:min-h-[520px] lg:min-h-0">
            <div className="relative mt-auto w-full max-w-[780px] self-end origin-bottom scale-[1.01] leading-none sm:scale-[1.03] lg:scale-[1.09]">
              <Image
                src="/assets/service-girl.png"
                alt="Social media strategist working on a laptop"
                width={1278}
                height={1230}
                priority
                sizes="(max-width: 1024px) 100vw, 53vw"
                className="block h-auto w-full object-contain object-bottom"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#020B35] to-transparent lg:block"
            />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
