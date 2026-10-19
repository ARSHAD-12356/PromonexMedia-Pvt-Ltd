"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  Crosshair,
  Image as ImageIcon,
  Leaf,
  Lightbulb,
  Pencil,
  PenTool,
  Settings,
  Sparkle,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const headList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const cardGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};
// Card rises in, then its contents follow one after another
const cardIn = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, staggerChildren: 0.1, delayChildren: 0.2 },
  },
};
const itemIn = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
const artIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* ── Illustrations (pure HTML/CSS + icons, contained in the card) ─────────── */

function DeskLine() {
  return <span className="absolute inset-x-[6%] bottom-[6%] h-[3px] rounded-full bg-[#2A4A80]" />;
}

function CreativityArt() {
  return (
    <>
      {/* Pen-tool sticker */}
      <span className="absolute left-[8%] top-[6%] flex size-[70px] -rotate-[10deg] items-center justify-center rounded-2xl bg-[#EEF3FC] text-[#0B1A33] shadow-[0_10px_24px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:-rotate-[4deg]">
        <PenTool size={36} strokeWidth={1.7} />
      </span>
      {/* Idea bulb */}
      <span className="absolute left-[48%] top-[2%] flex size-[58px] items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#00C8F0]/25 blur-md" />
        <Lightbulb size={40} strokeWidth={1.8} className="relative text-[#7FE3FA]" />
      </span>
      {/* Colour palette card */}
      <span className="absolute right-[7%] top-[16%] grid size-[66px] rotate-[8deg] grid-cols-2 gap-1.5 rounded-2xl bg-white p-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:rotate-[3deg]">
        <span className="rounded-md bg-[#0B2A6B]" />
        <span className="rounded-md bg-[#2F7CF6]" />
        <span className="rounded-md bg-[#00C8F0]" />
        <span className="rounded-md bg-[#A9D4FF]" />
      </span>
      {/* Laptop */}
      <span className="absolute bottom-[6%] left-1/2 w-[58%] -translate-x-1/2">
        <span className="relative mx-auto flex aspect-[1.6/1] w-[88%] items-center justify-center rounded-t-xl border-[5px] border-b-0 border-[#C9D6EC] bg-[#E6EEFB]">
          <span className="size-3 rounded-full bg-white shadow-[0_0_0_4px_rgba(47,124,246,0.25)]" />
        </span>
        <span className="block h-2.5 w-full rounded-b-lg bg-[#B7C6E0]" />
      </span>
      <DeskLine />
    </>
  );
}

function ExpertiseArt() {
  return (
    <>
      {/* Monitor with design canvas */}
      <span className="absolute bottom-[6%] left-1/2 w-[70%] -translate-x-1/2">
        <span className="relative flex aspect-[1.55/1] w-full gap-2 rounded-xl border-[5px] border-[#C9D6EC] bg-[#EEF3FC] p-2 shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
          <span className="flex w-[14%] flex-col gap-1.5 rounded-md bg-[#D7E3F7] p-1">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-1.5 rounded-full bg-[#8EA8D4]" />
            ))}
          </span>
          <span className="grid flex-1 grid-cols-[1.4fr_1fr] gap-2">
            <span className="flex items-center justify-center rounded-md bg-[#2F7CF6] text-white transition-colors duration-500 group-hover:bg-[#1F6CE6]">
              <ImageIcon size={30} strokeWidth={1.8} />
            </span>
            <span className="flex flex-col gap-2">
              <span className="flex-1 rounded-md bg-[#00C8F0]" />
              <span className="flex-1 rounded-md bg-[#A9C9F5]" />
            </span>
          </span>
        </span>
        <span className="mx-auto block h-3 w-[16%] bg-[#B7C6E0]" />
        <span className="mx-auto block h-1.5 w-[34%] rounded-full bg-[#B7C6E0]" />
      </span>
      {/* Gear chip */}
      <span className="absolute right-[12%] top-[2%] flex size-[50px] rotate-[10deg] items-center justify-center rounded-xl bg-white text-[#2F7CF6] shadow-[0_10px_22px_rgba(0,0,0,0.3)]">
        <Settings size={28} strokeWidth={2} className="transition-transform duration-700 group-hover:rotate-90" />
      </span>
      {/* Plant */}
      <span className="absolute bottom-[8%] right-[3%] flex flex-col items-center">
        <Leaf size={34} strokeWidth={1.8} className="-rotate-12 text-[#00C8F0]" />
        <span className="h-5 w-7 rounded-b-lg rounded-t-sm bg-[#C9D6EC]" />
      </span>
      <DeskLine />
    </>
  );
}

function DeliveryArt() {
  return (
    <>
      {/* Checklist */}
      <span className="absolute left-[8%] top-[4%] flex w-[52%] -rotate-[6deg] flex-col gap-3 rounded-2xl bg-[#EEF3FC] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-rotate-[3deg]">
        {[70, 85, 60].map((w, i) => (
          <span key={i} className="flex items-center gap-2.5">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-md border-2 border-[#2F7CF6] bg-white text-[#00A9D6]">
              <Check size={18} strokeWidth={3} />
            </span>
            <span className="h-2 rounded-full bg-[#BFD0EC]" style={{ width: `${w}%` }} />
          </span>
        ))}
      </span>
      {/* Big pencil */}
      <span className="absolute bottom-[10%] left-[44%] flex size-[96px] items-center justify-center rounded-full bg-[#2F7CF6]/25">
        <Pencil
          size={64}
          strokeWidth={1.6}
          className="text-[#7FE3FA] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6"
        />
      </span>
      {/* Clock */}
      <span className="absolute bottom-[12%] right-[6%] flex size-[66px] items-center justify-center rounded-full border-[4px] border-[#2F7CF6] bg-white text-[#0B1A33] shadow-[0_10px_24px_rgba(0,0,0,0.3)]">
        <Clock3 size={36} strokeWidth={1.8} />
      </span>
      <DeskLine />
    </>
  );
}

/* ── Card data ───────────────────────────────────────────────────────────── */

interface IntroCard {
  icon: LucideIcon;
  label: string;
  title: ReactNode;
  text: string;
  cta: string;
  art: ReactNode;
}

const CARDS: IntroCard[] = [
  {
    icon: Lightbulb,
    label: "01 / CREATIVITY",
    title: (
      <>
        Unleashing the Power of <span className="text-[#00C8F0]">Imagination</span>
      </>
    ),
    text: "We combine creativity and strategy to design stunning visuals that make your brand stand out.",
    cta: "Contact us today",
    art: <CreativityArt />,
  },
  {
    icon: Crosshair,
    label: "02 / EXPERTISE",
    title: (
      <>
        Crafting Designs with <span className="text-[#00C8F0]">Precision and Skill</span>
      </>
    ),
    text: "Our experienced designers use modern tools and proven methods to turn your ideas into impactful designs.",
    cta: "Get in touch now",
    art: <ExpertiseArt />,
  },
  {
    icon: Clock3,
    label: "03 / TIMELY DELIVERY",
    title: (
      <>
        On-Time, <span className="text-[#00C8F0]">Every Time</span>!
      </>
    ),
    text: "We value your time and ensure high-quality designs are delivered on schedule, without compromising on creativity.",
    cta: "Get free Consultation",
    art: <DeliveryArt />,
  },
];

export default function UiUxIntroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="uiux-intro-heading"
        className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A3A] sm:px-6 sm:py-20 md:pl-20 lg:py-24 min-[1420px]:pl-6"
      >
        <div className="mx-auto max-w-[1240px]">
          {/* Heading block */}
          <motion.div
            variants={headList}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="mx-auto max-w-[1200px] text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-[#E3F8FE] px-5 py-2 text-[14px] font-semibold tracking-[0.18em] text-[#00A9D6]"
            >
              <Sparkle size={16} strokeWidth={2.4} className="fill-[#00A9D6]" aria-hidden="true" />
              INTRO
            </motion.span>
            <motion.h2
              variants={fadeUp}
              id="uiux-intro-heading"
              className="mt-5 text-[30px] font-extrabold leading-[1.15] tracking-tight sm:text-[40px] lg:text-[44px] xl:text-[52px]"
            >
              Creative Graphic Design Company <span className="whitespace-nowrap text-[#00C8F0]">in Patna</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[920px] text-[15px] leading-[1.75] text-[#41506B] sm:text-[17px]"
            >
              Promonex Media, a leading <strong className="font-semibold text-[#061A3A]">graphic design company in Patna</strong>,
              specializes in creating exceptional and innovative designs that foster the perfect environment for your
              business growth. Our team of experienced designers uses cutting-edge software and methods to bring your
              ideas to life. Contact us now to see what we can create for you!
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={cardGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="mt-16 grid grid-cols-1 gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {CARDS.map(({ icon: Icon, label, title, text, cta, art }, i) => (
              <motion.article
                key={label}
                variants={cardIn}
                className={`flex ${
                  i === 2 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-14px)] lg:col-span-1 lg:mx-0 lg:w-auto" : ""
                }`}
              >
              <div
                className={`group relative flex w-full flex-col rounded-[24px] border-2 border-[#00C8F0] bg-[#061A3A] px-6 pb-7 pt-9 text-white shadow-[0_14px_40px_rgba(6,26,58,0.18)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(0,200,240,0.3)] sm:px-8`}
              >
                {/* Overlapping icon box + label */}
                <motion.div variants={itemIn} className="flex items-center gap-5">
                  <span className="-mt-[60px] flex size-[68px] shrink-0 items-center justify-center rounded-[18px] bg-[#7FE3FA] text-[#061A3A] shadow-[0_10px_24px_rgba(0,200,240,0.35)]">
                    <Icon size={34} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="-mt-6 text-[13.5px] font-semibold tracking-[0.12em] text-[#00C8F0]">{label}</span>
                </motion.div>

                <motion.h3
                  variants={itemIn}
                  className="mt-5 text-[25px] font-extrabold leading-[1.22] tracking-tight sm:text-[27px]"
                >
                  {title}
                </motion.h3>
                <motion.p variants={itemIn} className="mt-4 text-[15.5px] leading-[1.7] text-[#E1E8F5]">
                  {text}
                </motion.p>

                <motion.div
                  variants={artIn}
                  aria-hidden="true"
                  className="relative mt-6 h-[210px] w-full overflow-hidden sm:h-[220px]"
                >
                  {art}
                </motion.div>

                <motion.div variants={itemIn} className="mt-auto pt-6">
                  <Link
                    href="/contact"
                    className="group/btn flex min-h-[64px] w-full items-center justify-between rounded-full bg-[#00C8F0] py-2 pl-7 pr-2 text-[16px] font-semibold text-[#061A3A] transition-colors duration-300 hover:bg-[#22D6FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A3A] sm:text-[17px]"
                  >
                    {cta}
                    <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#061A3A] text-white">
                      <ArrowRight
                        size={22}
                        strokeWidth={2.4}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </span>
                  </Link>
                </motion.div>
              </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
