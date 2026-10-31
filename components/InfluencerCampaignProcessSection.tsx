"use client";

import { useRef } from "react";
import { ArrowRight, Check, ClipboardList, Megaphone, UsersRound } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const campaignSteps = [
  {
    number: "01",
    title: "Find the right creators",
    description:
      "We match your brand with creators whose audience, voice and values fit the people you want to reach.",
    detail: "Audience fit · Creator shortlist",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Shape the campaign",
    description:
      "Together we set a clear brief, choose the right formats and give every collaboration a purpose.",
    detail: "Campaign brief · Content direction",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Bring the story to life",
    description:
      "We coordinate creator communication, content reviews and publishing so each campaign feels natural and on-brand.",
    detail: "Creator coordination · Publishing",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Learn from every result",
    description:
      "We review reach, engagement and campaign outcomes, then use those insights to guide your next move.",
    detail: "Performance review · Next steps",
    icon: Check,
  },
];

const lastStep = campaignSteps.length - 1;

function CampaignStepCard({
  step,
  index,
  progress,
}: {
  step: (typeof campaignSteps)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const Icon = step.icon;
  const top = useTransform(
    progress,
    (value) => (index - value * lastStep) * 100 + "%",
  );

  return (
    <motion.article
      style={{ top, zIndex: index + 1 }}
      className="absolute inset-x-3 h-[calc(100%-1.5rem)] overflow-hidden rounded-[1.5rem] border border-[#9DEFFF]/20 bg-[#F8FCFF] p-6 text-[#071A43] shadow-[0_20px_55px_rgba(0,0,0,0.22)] xl:inset-x-4 xl:h-[calc(100%-2rem)] xl:p-9"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-[#DCEAF6] pb-6">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#DDF8FF] text-[#008EB8]">
              <Icon size={25} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008EB8]">
                Step {step.number}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-500">Influencer campaign</p>
            </div>
          </div>
          <span className="rounded-full border border-[#CDEFF7] bg-[#F1FBFE] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#008EB8]">
            Promonex
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#00A8D2]">
            {step.number} / 04
          </p>
          <h3 className="mt-4 max-w-md text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-4xl xl:text-[2.8rem]">
            {step.title}
          </h3>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 xl:text-lg xl:leading-8">
            {step.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#071A43] px-5 py-4 text-white">
          <span className="text-sm font-semibold text-slate-100">{step.detail}</span>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#00C8F0] text-[#031136]">
            <ArrowRight size={17} aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function InfluencerCampaignProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="influencer-process-heading"
      className="relative bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-0 lg:min-h-[calc(100svh_+_1950px)]"
    >
      <div className="mx-auto max-w-7xl lg:sticky lg:top-24 lg:flex lg:min-h-[calc(100svh_-_6rem)] lg:items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.82fr_1fr] lg:gap-16 xl:gap-24">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/35 bg-[#00D9FF]/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#59E5FF]">
              <span className="h-2 w-2 rounded-full bg-[#00D9FF]" />
              A clear creator journey
            </span>
            <h2
              id="influencer-process-heading"
              className="mt-6 max-w-[15ch] text-3xl font-extrabold leading-[1.2] tracking-[-0.035em] text-[#071A43] sm:text-4xl lg:text-[clamp(2.5rem,4vw,4.25rem)] lg:leading-[1.16]"
            >
              <span className="block">Creator campaigns,</span>
              <span className="block text-[#00A8D2]">made clear at every step.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From the first creator shortlist to the final campaign review, we keep your brand,
              audience and goals connected throughout the process.
            </p>
            <a
              href="#contact-influencer-marketing"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#00C8F0] px-5 py-3 font-bold text-[#020B35] shadow-[0_12px_35px_rgba(0,200,240,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#43dcf7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D9FF]"
            >
              Plan a creator campaign <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-[min(650px,calc(100svh_-_11rem))] min-h-[440px] overflow-hidden rounded-[2rem] border border-[#BDEAF4] bg-[#EAF8FC] p-3 shadow-[0_24px_70px_rgba(7,26,67,0.12)] xl:p-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(0,200,240,0.14),transparent_35%),linear-gradient(145deg,rgba(255,255,255,0.72),transparent_55%)]" />
              {campaignSteps.map((step, index) => (
                <CampaignStepCard
                  key={step.number}
                  step={step}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between px-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              <span>Scroll to explore</span>
              <span>01 — 04</span>
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            {campaignSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="rounded-2xl border border-[#54DDF7]/20 bg-[#071742] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.18)] sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#00D9FF]/10 text-[#42DFFF]">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#42DFFF]">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
