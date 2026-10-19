"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  Asterisk,
  Brush,
  Circle,
  Image as ImageIcon,
  Lightbulb,
  Megaphone,
  MousePointer2,
  PenTool,
  Square,
  Type,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const leftList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
};
const rightList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.85, y: 24 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// Keyframes live here so the floating composition is self-contained (transform/opacity only)
const KEYFRAMES = `
@keyframes uxh-float-a { 0%,100% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(0,-12px,0) rotate(-1.2deg); } }
@keyframes uxh-float-b { 0%,100% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(0,-9px,0) rotate(1.5deg); } }
@keyframes uxh-float-c { 0%,100% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(0,10px,0) rotate(-1deg); } }
@keyframes uxh-float-d { 0%,100% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(0,-7px,0) rotate(1deg); } }
@keyframes uxh-pen { 0%,100% { transform: rotate(-10deg) translate(0,0); } 35% { transform: rotate(8deg) translate(2px,-2px); } 70% { transform: rotate(-2deg) translate(-1px,1px); } }
@keyframes uxh-megaphone { 0%,100% { transform: rotate(-8deg) scale(1); } 20% { transform: rotate(6deg) scale(1.08); } 40% { transform: rotate(-4deg) scale(1); } }
@keyframes uxh-waves { 0%,100% { opacity: .35; transform: translateX(0); } 50% { opacity: 1; transform: translateX(3px); } }
@keyframes uxh-bulb { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
@keyframes uxh-glow { 0%,100% { opacity: .15; transform: scale(.8); } 50% { opacity: .75; transform: scale(1.15); } }
@keyframes uxh-cursor { 0%,100% { transform: translate(0,0); } 30% { transform: translate(-5px,4px); } 60% { transform: translate(3px,-3px); } }
@keyframes uxh-selection { 0%,100% { transform: scale(1); } 50% { transform: scale(1.03); } }
@keyframes uxh-spin { to { transform: rotate(360deg); } }
@keyframes uxh-badge { 0%,100% { transform: rotate(-16deg) scale(1); } 50% { transform: rotate(-11deg) scale(1.06); } }
.uxh-anim { will-change: transform; }
@media (prefers-reduced-motion: reduce) { .uxh-anim { animation: none !important; } }
`;

const anim = (name: string, seconds: number, delay = 0, timing = "ease-in-out"): CSSProperties => ({
  animation: `${name} ${seconds}s ${timing} ${delay}s infinite`,
});

/** Absolutely placed item: outer = position/tilt, middle = float loop, inner = hover lift. */
function Floating({
  pos,
  tilt,
  float,
  children,
  className = "",
}: {
  pos: CSSProperties;
  tilt: number;
  float: CSSProperties;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={popIn} className="absolute" style={pos}>
      <div style={{ transform: `rotate(${tilt}deg)` }} className="h-full w-full">
        <div className="uxh-anim h-full w-full" style={float}>
          <div
            className={`group/card h-full w-full transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.04] ${className}`}
          >
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function UiUxDesignHeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <style>{KEYFRAMES}</style>
      <section className="relative isolate overflow-hidden bg-[#061A3A] font-['Poppins',sans-serif] text-white">
        <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-8 sm:py-16 md:grid-cols-[45fr_55fr] md:gap-6 md:pl-24 lg:py-20 xl:pl-12">
          {/* ── Left: copy & CTA ─────────────────────────────────────── */}
          <motion.div variants={leftList} initial="hidden" animate="show" className="relative z-10 max-w-[580px]">
            <motion.p
              variants={fadeLeft}
              className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-[#00C8F0] sm:text-[14px]"
            >
              Graphic Design Services
              <Asterisk
                size={30}
                strokeWidth={2.6}
                aria-hidden="true"
                className="uxh-anim shrink-0"
                style={anim("uxh-spin", 9, 0, "linear")}
              />
            </motion.p>

            <motion.h1
              variants={fadeLeft}
              className="mt-4 whitespace-nowrap text-[clamp(1.95rem,4vw,3.6rem)] font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="flex items-center gap-3">
                We create
                {/* Overlapping-circles accent from the reference */}
                <span aria-hidden="true" className="relative hidden h-[0.62em] w-[1.9em] items-center sm:flex">
                  <span className="absolute inset-x-[-0.15em] top-1/2 h-[2px] -translate-y-1/2 bg-white/70" />
                  <span className="absolute left-0 size-[0.62em] rounded-full bg-white" />
                  <span className="absolute left-[0.42em] size-[0.62em] rounded-full bg-[#00C8F0]" />
                  <span className="absolute left-[0.84em] size-[0.62em] rounded-full bg-[#DCE8FB]/90" />
                </span>
              </span>
              <span className="block">cool &amp; awesome</span>
              <span className="block">
                <span className="text-[#00C8F0]">graphics</span> for you
              </span>
            </motion.h1>

            <motion.p
              variants={fadeLeft}
              className="mt-5 max-w-[540px] text-[15px] leading-[1.65] text-[#D3DCEC] sm:text-[16.5px]"
            >
              Being the <strong className="font-semibold text-white">best graphic design agency in Patna</strong>, we
              can create great designs that help make the right atmosphere for your business to grow. We use
              imagination, technology, and creativity to create unique graphics, bringing visions to life. Our passion is
              making the web better through UX, UI, and innovative designs that stand out.
            </motion.p>

            <motion.div variants={fadeLeft} className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex min-h-[58px] items-center gap-5 rounded-full bg-[#00C8F0] py-1.5 pl-7 pr-1.5 text-[15px] font-semibold text-[#061A3A] shadow-[0_10px_30px_rgba(0,200,240,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22D6FA] hover:shadow-[0_14px_36px_rgba(0,200,240,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A3A] sm:text-[16px]"
              >
                Get a free design consultation
                <span className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-[#061A3A] text-white">
                  <ArrowRight
                    size={21}
                    strokeWidth={2.4}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: floating design composition ────────────────────── */}
          <motion.div
            variants={rightList}
            initial="hidden"
            animate="show"
            aria-hidden="true"
            className="relative mx-auto aspect-[1.22/1] w-full max-w-[680px] [container-type:inline-size] md:mr-0"
          >
            {/* Thin cyan swirl & sparks (line art only, no dot patterns) */}
            <svg viewBox="0 0 100 82" className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
              <path d="M10 24 C 0 34, 2 50, 15 52" stroke="#00C8F0" strokeWidth="0.45" strokeLinecap="round" />
              <path d="M30 6 l2 4 M34 4 l1 4.5 M37.5 5 l-0.2 4" stroke="#00C8F0" strokeWidth="0.45" strokeLinecap="round" />
              <path d="M90 13 l-3.5 3 M92 17 l-4.5 1 M91 21.5 l-4 -0.6" stroke="#FFFFFF" strokeWidth="0.4" strokeLinecap="round" />
              <path d="M75 63 C 81 63, 86 59, 88 53 M88 53 l-2.6 1.2 M88 53 l0.6 2.8" stroke="#00C8F0" strokeWidth="0.45" strokeLinecap="round" />
            </svg>

            {/* 1. Graphic editor card */}
            <Floating
              pos={{ left: "7%", top: "15%", width: "50%", height: "50%" }}
              tilt={-6}
              float={anim("uxh-float-a", 7)}
              className="rounded-[6cqw] hover:shadow-[0_26px_60px_rgba(0,200,240,0.25)]"
            >
              <div className="relative h-full w-full rounded-[3.6cqw] border border-white/70 bg-[#EEF3FC] shadow-[0_24px_50px_rgba(0,0,0,0.35)]">
                <div className="absolute left-[4.5%] top-[6%] flex gap-[1.1cqw]">
                  <span className="size-[1.9cqw] rounded-full bg-[#FF5F57]" />
                  <span className="size-[1.9cqw] rounded-full bg-[#FEBC2E]" />
                  <span className="size-[1.9cqw] rounded-full bg-[#28C840]" />
                </div>

                {/* Selection box with "Aa" */}
                <div
                  className="uxh-anim absolute left-[11%] top-[24%] flex h-[42%] w-[56%] items-center justify-center border-[0.25cqw] border-[#3D8BFD]"
                  style={anim("uxh-selection", 4.5, 0.4)}
                >
                  {["-left-[1.1cqw] -top-[1.1cqw]", "-right-[1.1cqw] -top-[1.1cqw]", "-left-[1.1cqw] -bottom-[1.1cqw]", "-right-[1.1cqw] -bottom-[1.1cqw]"].map(
                    (p) => (
                      <span key={p} className={`absolute size-[2.2cqw] rounded-full bg-[#3D8BFD] ${p}`} />
                    )
                  )}
                  <span className="text-[13cqw] font-extrabold leading-none tracking-tight text-[#2F7CF6]">Aa</span>
                </div>

                {/* Tool column */}
                <div className="absolute right-[4%] top-[10%] flex flex-col gap-[1.6cqw]">
                  {[Type, Square, ImageIcon].map((Icon, i) => (
                    <span
                      key={i}
                      className="flex size-[6.4cqw] items-center justify-center rounded-[1.4cqw] text-[#0B2350] transition-colors duration-200 hover:bg-[#D4E4FF] [&:first-child]:bg-[#D9E7FF]"
                    >
                      <Icon className="size-[3.6cqw]" strokeWidth={2.3} />
                    </span>
                  ))}
                  <span className="flex size-[6.4cqw] items-center justify-center text-[#0B2350]">
                    <MousePointer2
                      className="uxh-anim size-[3.6cqw] fill-[#0B2350]"
                      strokeWidth={2}
                      style={anim("uxh-cursor", 3.6, 0.2)}
                    />
                  </span>
                </div>

                {/* Colour swatches */}
                <div className="absolute bottom-[7%] left-[16%] flex items-center gap-[1.4cqw] rounded-full bg-white px-[2.2cqw] py-[1.4cqw] shadow-[0_6px_16px_rgba(11,35,80,0.12)]">
                  {["#2F7CF6", "#76AEFF", "#EEF3FC", "#0B1A33"].map((c) => (
                    <span
                      key={c}
                      className="size-[4.4cqw] rounded-full border border-black/5 transition-transform duration-200 hover:-translate-y-[0.6cqw] hover:scale-110"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </Floating>

            {/* 2. Web Design blob (warm accent) */}
            <Floating
              pos={{ right: "8%", top: "0%", width: "33%", height: "40%" }}
              tilt={8}
              float={anim("uxh-float-b", 8.5, -2)}
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-[1cqw] rounded-[48%_52%_44%_56%/52%_46%_54%_48%] bg-[#FFAA4C] text-[#0B1A33] shadow-[0_22px_45px_rgba(0,0,0,0.3)] transition-shadow duration-300 group-hover/card:shadow-[0_26px_55px_rgba(255,170,76,0.35)]">
                <PenTool
                  className="uxh-anim size-[8cqw]"
                  strokeWidth={1.9}
                  style={{ ...anim("uxh-pen", 4.2, 0.3), transformOrigin: "70% 30%" }}
                />
                <span className="text-center text-[4.5cqw] font-extrabold leading-[1.05]">
                  Web
                  <br />
                  Design
                </span>
              </div>
            </Floating>

            {/* 3. Social Media card */}
            <Floating
              pos={{ right: "0%", top: "31%", width: "28%", height: "38%" }}
              tilt={5}
              float={anim("uxh-float-c", 6.4, -1.2)}
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-[1.6cqw] rounded-[4cqw] border border-white/60 bg-[#CFE2FF] text-[#0B1A33] shadow-[0_22px_45px_rgba(0,0,0,0.3)] transition-shadow duration-300 group-hover/card:shadow-[0_26px_55px_rgba(0,200,240,0.3)]">
                <span className="relative flex items-center">
                  <Megaphone
                    className="uxh-anim size-[8cqw]"
                    strokeWidth={1.9}
                    style={{ ...anim("uxh-megaphone", 3.2, 0.5), transformOrigin: "30% 60%" }}
                  />
                  <span
                    className="uxh-anim ml-[0.8cqw] flex flex-col gap-[0.7cqw]"
                    style={anim("uxh-waves", 1.6, 0.5)}
                  >
                    <span className="h-[0.45cqw] w-[2.2cqw] -rotate-[25deg] rounded-full bg-[#0B1A33]" />
                    <span className="h-[0.45cqw] w-[2.6cqw] rounded-full bg-[#0B1A33]" />
                    <span className="h-[0.45cqw] w-[2.2cqw] rotate-[25deg] rounded-full bg-[#0B1A33]" />
                  </span>
                </span>
                <span className="text-center text-[4.2cqw] font-extrabold leading-[1.08]">
                  Social
                  <br />
                  Media
                </span>
              </div>
            </Floating>

            {/* 4. UIX Design card */}
            <Floating
              pos={{ left: "47%", top: "52%", width: "31%", height: "44%" }}
              tilt={6}
              float={anim("uxh-float-d", 7.6, -3)}
            >
              <div className="relative flex h-full w-full flex-col justify-between rounded-[4.5cqw] bg-[#00C8F0] p-[3.5cqw] text-[#061A3A] shadow-[0_24px_50px_rgba(0,0,0,0.35)] transition-shadow duration-300 group-hover/card:shadow-[0_28px_60px_rgba(0,200,240,0.45)]">
                <span className="text-[5cqw] font-extrabold leading-[1.02]">
                  UIX
                  <br />
                  Design
                </span>
                <span className="relative ml-auto mr-[2cqw] flex size-[11cqw] items-center justify-center">
                  <span
                    className="uxh-anim absolute inset-0 rounded-full bg-white blur-[2cqw]"
                    style={anim("uxh-glow", 2.6)}
                  />
                  <Lightbulb
                    className="uxh-anim relative size-[8cqw]"
                    strokeWidth={1.9}
                    style={anim("uxh-bulb", 2.6)}
                  />
                </span>
              </div>
            </Floating>

            {/* 5. Floating tool bar */}
            <Floating
              pos={{ left: "2%", top: "70%", width: "40%", height: "15%" }}
              tilt={5}
              float={anim("uxh-float-b", 6.8, -4)}
            >
              <div className="flex h-full w-full items-center justify-around rounded-[3cqw] border border-white/15 bg-white/[0.07] px-[2cqw] text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <MousePointer2
                  className="uxh-anim size-[4.6cqw]"
                  strokeWidth={1.8}
                  style={anim("uxh-cursor", 4.4, 1)}
                />
                {[Square, Circle, Brush].map((Icon, i) => (
                  <span
                    key={i}
                    className="flex size-[7cqw] items-center justify-center rounded-[1.6cqw] transition-colors duration-200 hover:bg-white/15 hover:text-[#00C8F0]"
                  >
                    <Icon className="size-[4.6cqw]" strokeWidth={1.8} />
                  </span>
                ))}
              </div>
            </Floating>

            {/* 6. NEW! badge */}
            <motion.div variants={popIn} className="absolute bottom-[3%] right-[2%] w-[19%]">
              <div
                className="uxh-anim flex aspect-[1.7/1] w-full items-center justify-center rounded-[50%] border-[0.4cqw] border-white"
                style={anim("uxh-badge", 3.4)}
              >
                <span className="text-[3.6cqw] font-extrabold tracking-wide text-white">NEW!</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
