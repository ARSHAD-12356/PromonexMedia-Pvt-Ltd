"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRight, Check, Instagram, MessageCircle, Play, Sparkles, Users } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const CAPABILITIES = ["Creator discovery", "Campaign coordination", "UGC & short-form video"];

export default function InfluencerMarketingHeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="influencer-hero-heading"
        className="relative isolate overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_48%,rgba(0,184,230,0.15),transparent_42%),radial-gradient(circle_at_12%_12%,rgba(49,94,192,0.18),transparent_33%)]"
        />

        <div className="relative mx-auto grid min-h-[min(760px,calc(100svh-76px))] w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-8 sm:py-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12 lg:px-10 lg:py-14">
          <div className="relative z-10 max-w-[650px]">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-[#00C8F0]/35 bg-[#00C8F0]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8AE9FC] sm:text-[12px] sm:tracking-[0.19em]"
            >
              <Sparkles size={14} aria-hidden="true" className="text-[#00C8F0]" />
              Creator partnerships <span aria-hidden="true">•</span> Brand stories
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: EASE }}
              className="mt-7 text-[11px] font-bold uppercase tracking-[0.22em] text-[#53D7F4] sm:text-[12px]"
            >
              Influencer Marketing
            </motion.p>

            <motion.h1
              id="influencer-hero-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
              className="mt-3 max-w-[680px] text-[clamp(2.2rem,5.3vw,4.35rem)] font-extrabold leading-[1.08] tracking-[-0.05em]"
            >
              Make your brand part of the <span className="text-[#00C8F0]">conversation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
              className="mt-5 max-w-[600px] text-[14px] leading-[1.8] text-[#D3DCEC] sm:text-[16px] lg:text-[17px]"
            >
              Want to tell your story through people your audience already follows? Promonex Media helps businesses in Patna and across India find relevant creators, shape campaign briefs and coordinate authentic content that builds awareness and trust.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.27, ease: EASE }}
              className="mt-5 flex max-w-[620px] flex-wrap gap-x-5 gap-y-3"
              aria-label="Influencer marketing services"
            >
              {CAPABILITIES.map((item) => (
                <li key={item} className="inline-flex items-center gap-2 text-[11px] font-medium text-[#DCE8F8] sm:text-[12px]">
                  <span className="flex size-[18px] items-center justify-center rounded-full bg-[#00C8F0]/15 text-[#53D7F4]">
                    <Check size={11} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34, ease: EASE }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#contact-influencer-marketing"
                className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#00C8F0] px-5 py-3 text-[13px] font-bold text-[#061A40] shadow-[0_10px_30px_rgba(0,200,240,0.2)] transition hover:-translate-y-0.5 hover:bg-[#53D7F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-14 sm:px-6 sm:py-3.5 sm:text-[14px]"
              >
                Plan a creator campaign
                <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 bg-white/[0.04] px-4 py-3 text-[13px] font-bold text-white transition hover:border-[#53D7F4] hover:text-[#8AE9FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8F0] sm:min-h-14 sm:px-5 sm:py-3.5 sm:text-[14px]"
              >
                Explore our services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
            className="relative mx-auto w-full max-w-[590px] lg:ml-auto"
            aria-label="Creator making social media content"
          >
            <div aria-hidden="true" className="absolute -inset-5 rounded-[42px] bg-[#168BFF]/20 blur-3xl sm:-inset-7" />
            <div className="relative aspect-[1.12/1] overflow-hidden rounded-[26px] border border-white/15 bg-[#0B2C69] shadow-[0_30px_75px_rgba(0,0,0,0.38)] sm:aspect-[1.05/1] sm:rounded-[32px]">
              <Image
                src="/assets/content-creation-hero.jpg"
                alt="Creator recording video content in a studio"
                fill
                priority
                sizes="(max-width: 1023px) 92vw, 560px"
                className="object-cover object-[42%_center]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#020B35]/55 via-transparent to-[#020B35]/10" />
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-[#061A40]/90 px-3.5 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.25)] backdrop-blur-md sm:bottom-6 sm:left-6 sm:px-4">
                <span className="flex items-center gap-2 text-[11px] font-bold text-white sm:text-[12px]">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-[#00C8F0]/15 text-[#53D7F4]">
                    <Users size={16} aria-hidden="true" />
                  </span>
                  Creator-first campaigns
                </span>
              </div>
            </div>

            <div className="absolute -right-1 top-4 flex items-center gap-2 rounded-2xl border border-white/80 bg-white px-3 py-2 text-[#061A40] shadow-[0_14px_32px_rgba(0,0,0,0.26)] sm:-right-3 sm:top-8 sm:gap-2.5 sm:px-4 sm:py-3">
              <span className="flex size-8 items-center justify-center rounded-xl bg-[#E4F8FD] text-[#078BC4] sm:size-9">
                <Instagram size={18} aria-hidden="true" />
              </span>
              <span className="text-[10px] font-bold sm:text-[11px]">Made for your audience</span>
            </div>

            <div className="absolute -bottom-3 right-3 flex items-center gap-2 rounded-2xl border border-white/15 bg-[#061A40]/95 px-3 py-2 text-white shadow-[0_14px_32px_rgba(0,0,0,0.26)] sm:bottom-5 sm:-right-3 sm:px-3.5 sm:py-2.5">
              <span className="flex size-8 items-center justify-center rounded-xl bg-[#00C8F0]/15 text-[#53D7F4]">
                <Play size={16} fill="currentColor" aria-hidden="true" />
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold sm:text-[11px]">
                <MessageCircle size={13} className="text-[#53D7F4]" aria-hidden="true" />
                Stories people connect with
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
