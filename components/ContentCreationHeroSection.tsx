"use client";

import Link from "next/link";
import Image from "next/image";
import { MotionConfig, motion, type Variants } from "framer-motion";
import { ArrowRight, Camera, Clapperboard, Heart, PenTool, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
};

const float = (delay: number) => ({
  animate: { y: [0, -9, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const CHIPS = [
  { label: "Product & brand shoots", icon: Camera, className: "left-[-4%] top-[14%]", delay: 0.2 },
  { label: "Reels & short videos", icon: Clapperboard, className: "right-[-5%] top-[42%]", delay: 1 },
  { label: "Scroll-stopping creatives", icon: PenTool, className: "bottom-[6%] left-[2%]", delay: 1.8 },
];

export default function ContentCreationHeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate flex min-h-[min(780px,calc(100svh-76px))] items-center overflow-hidden bg-[radial-gradient(ellipse_at_70%_40%,#0A2A6B_0%,#061E52_38%,#031539_75%)] font-['Poppins',sans-serif] text-white">
        <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-14 px-6 py-14 sm:px-10 md:pl-24 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-16 xl:pl-12 xl:pr-8">
          {/* Left: copy — each element slides in from the left */}
          <motion.div variants={list} initial="hidden" animate="show" className="relative z-10 max-w-[620px]">
            <motion.span
              variants={fadeLeft}
              className="inline-flex items-center gap-2 rounded-full border border-[#00C8EF]/40 bg-[#00C8EF]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7FDBF5]"
            >
              <Sparkles size={14} aria-hidden="true" /> Content &amp; Creation
            </motion.span>
            <motion.h1
              variants={fadeLeft}
              className="mt-6 text-[clamp(2.2rem,6vw,2.6rem)] font-bold leading-[1.14] tracking-tight lg:text-[clamp(2.5rem,3.6vw,3.4rem)]"
            >
              Scroll-Stopping Content that Builds Your <span className="text-[#00C9F4]">Brand</span> in Patna.
            </motion.h1>
            <motion.p variants={fadeLeft} className="mt-6 max-w-[580px] text-[15px] leading-[1.75] text-[#D0D9EB] sm:text-[17px]">
              Promonex Media plans, shoots and produces content for growing brands, from{" "}
              <strong className="font-semibold text-white">product photography and brand shoots</strong> to reels,
              short videos and social media creatives, so every post looks premium and earns real engagement.
            </motion.p>

            <motion.div variants={fadeLeft} className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-5">
              <Link
                href="/services"
                className="group inline-flex min-h-[62px] items-center gap-5 rounded-full border-2 border-[#00D9FF] py-1.5 pl-7 pr-2 text-[15px] font-semibold text-white shadow-[0_0_18px_rgba(0,217,255,0.12)] transition-[box-shadow,background-color] duration-200 hover:bg-[#00D9FF]/[0.07] hover:shadow-[0_0_26px_rgba(0,217,255,0.28)] sm:text-[17px]"
              >
                <span>Explore our services</span>
                <span className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#00C9F4] text-[#031b43] transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight size={24} strokeWidth={2.2} aria-hidden="true" />
                </span>
              </Link>
              <Link href="/contact" className="group relative pb-1.5 text-[16px] font-semibold text-white sm:text-[17px]">
                Enquire now
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left rounded-full bg-[linear-gradient(90deg,#00C9F4,#3B82F6)] transition-transform duration-300 group-hover:scale-x-110"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: framed visual with floating chips — slides in from the right */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            aria-hidden="true"
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="absolute -inset-6 rounded-[44px] bg-[#1E5BD8]/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/5 p-3 shadow-[0_40px_90px_rgba(0,0,0,0.5)] backdrop-blur">
              <Image
                src="/assets/content-creation-hero.jpg"
                alt=""
                width={1600}
                height={1067}
                priority
                sizes="(max-width: 1023px) 90vw, 540px"
                className="aspect-[5/4] w-full rounded-[24px] object-cover object-[62%_center]"
              />
            </div>

            {CHIPS.map(({ label, icon: Icon, className, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + delay * 0.3, ease: EASE }}
                className={`absolute z-10 ${className}`}
              >
                <motion.div
                  {...float(delay)}
                  className="flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 text-[13px] font-semibold text-[#061A40] shadow-[0_16px_36px_rgba(0,0,0,0.35)] sm:px-4 sm:py-3 sm:text-[14px]"
                >
                  <span className="flex size-8 items-center justify-center rounded-xl bg-[#061A40] text-[#00C8EF] sm:size-9">
                    <Icon size={18} />
                  </span>
                  {label}
                </motion.div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3, ease: EASE }}
              className="absolute right-[6%] top-[-4%] z-10"
            >
              <motion.div
                {...float(0.5)}
                className="flex size-[64px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#FA5679,#BB20E9)] text-white shadow-[0_14px_34px_rgba(187,32,233,0.45)]"
              >
                <Heart size={28} className="fill-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
