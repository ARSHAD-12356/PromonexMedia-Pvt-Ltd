"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const ACCORDION = [
  {
    title: "Reach new audiences",
    body: "Grow your list with lead magnets, landing pages and sign-up journeys that turn visitors into subscribers who genuinely want to hear from your brand.",
  },
  {
    title: "Improve conversions",
    body: "Personalised content, smart send times and tested subject lines and calls-to-action that move subscribers from opening an email to completing a purchase.",
  },
  {
    title: "Re-engage customers",
    body: "Win-back flows, timely reminders and exclusive offers that bring inactive subscribers and past buyers back to your store.",
  },
];

const CAMPAIGN_TYPES = [
  {
    type: "Type 1",
    title: "Welcome Series",
    description: "Automated emails to engage new subscribers and introduce your brand.",
    tag: "Trending",
  },
  {
    type: "Type 2",
    title: "Promotional Campaigns",
    description: "Enticing offers to drive purchases.",
    tag: "Trending",
  },
  {
    type: "Type 3",
    title: "Abandoned Cart Recovery",
    description: "Encouraging purchases for abandoned items.",
    tag: "Popular",
  },
  {
    type: "Type 4",
    title: "Post-Purchase Follow-ups",
    description: "Thank, get feedback, and upsell.",
    tag: "Boost Sales",
  },
];

function CampaignCard({ item, index }: { item: (typeof CAMPAIGN_TYPES)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex min-h-[385px] flex-col overflow-hidden rounded-[24px] border border-[#E3EAF5] bg-white p-7 shadow-[0_14px_40px_rgba(6,26,64,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#061A40]/40 hover:shadow-[0_26px_60px_rgba(6,26,64,0.20)] sm:p-8"
    >
      {/* Top accent bar on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#020B35,#0A2A6B)] transition-transform duration-500 group-hover:scale-x-100"
      />
      {/* Soft corner glow on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-[#061A40]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#061A40]/10"
      />

      <span className="relative inline-flex w-fit items-center rounded-md bg-[#061A40] px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
        {item.type}
      </span>

      <h3 className="relative mt-7 text-[25px] font-bold leading-[1.2] text-[#061A40] sm:text-[28px]">{item.title}</h3>
      <p className="relative mt-4 flex-1 text-[16px] leading-[1.75] text-[#4A5A75] sm:text-[17px]">{item.description}</p>

      <span className="relative mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#00C8EF]/50 bg-[#E6F9FD] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#0478FD]">
        <span className="size-1.5 rounded-full bg-[#00C8EF]" aria-hidden="true" />
        {item.tag}
      </span>
    </motion.article>
  );
}

// "Get the most out of your email marketing campaign": accordion + staggered campaign-type cards
export default function EmailMarketingCampaignTypesSection() {
  const [open, setOpen] = useState(-1); // all collapsed by default

  return (
    <section
      aria-labelledby="em-campaigns-heading"
      className="overflow-hidden bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.25fr] lg:gap-12">
        {/* Left: heading + accordion + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[560px]"
        >
          <h2
            id="em-campaigns-heading"
            className="text-[34px] font-bold leading-[1.15] tracking-tight sm:text-[44px] lg:text-[52px]"
          >
            Get the most out of your <span className="text-[#00B8E6]">email marketing</span> campaign
          </h2>

          <div className="mt-8 border-t border-[#DCE4F0]">
            {ACCORDION.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.title} className="border-b border-[#DCE4F0]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`em-acc-${i}`}
                    className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`text-[21px] font-semibold transition-colors duration-200 sm:text-[26px] ${
                        isOpen ? "text-[#061A40]" : "text-[#4A5A75] group-hover:text-[#061A40]"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#061A40] text-white"
                          : "bg-[#EEF3FA] text-[#061A40] group-hover:bg-[#E3F8FD]"
                      }`}
                    >
                      <ChevronDown size={20} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`em-acc-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-12 text-[16px] leading-[1.75] text-[#4A5A75]">{item.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Same animated button style used across the site */}
          <Link
            href="/contact"
            className="group relative mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#020B35] px-8 py-4 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(2,11,53,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] active:translate-y-0 sm:px-9 sm:text-[16px]"
          >
            <span>Get in touch with us</span>
            <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Right: staggered cards — one list in reading order (Type 1→4); on 2-column screens the
            right column is shifted up so the cards sit "up-down" like the reference */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:py-12">
          {CAMPAIGN_TYPES.map((item, i) => (
            <div key={item.title} className={i % 2 === 0 ? "sm:translate-y-12" : "sm:-translate-y-12"}>
              <CampaignCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
