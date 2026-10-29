"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const PLATFORMS = [
  {
    num: "01",
    category: "SEARCH & INTENT",
    title: "Google Ads",
    description:
      "Reach customers when they are actively searching for your products or services with strategically managed Google Ads campaigns.",
    points: [
      "Google Search Ads",
      "Performance Max Campaigns",
      "Google Shopping Ads",
      "PPC Lead Generation",
    ],
    footer:
      "Google Ads management focused on search intent, qualified leads, conversions and profitable campaign performance.",
    href: "/contact",
    ctaLabel: "Explore Google Ads",
    featured: false,
    featuredBadge: null,
  },
  {
    num: "02",
    category: "DISCOVERY & DEMAND",
    title: "Meta Ads",
    description:
      "Build demand and turn attention into enquiries and sales through conversion-focused Facebook and Instagram advertising.",
    points: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation Campaigns",
      "Retargeting & Audience Testing",
    ],
    footer:
      "Meta Ads management combining creative testing, audience strategy, retargeting and conversion optimisation.",
    href: "/contact",
    ctaLabel: "Explore Meta Ads",
    featured: true,
    featuredBadge: "SOCIAL GROWTH",
  },
  {
    num: "03",
    category: "ORGANIC GROWTH",
    title: "SEO",
    description:
      "Dominate search rankings and drive consistent organic traffic with Promonex Media's data-driven SEO strategies tailored for your business.",
    points: [
      "On-Page SEO",
      "Technical SEO",
      "Link Building",
      "Local SEO Optimisation",
    ],
    footer:
      "SEO management built around keyword research, content strategy, backlink building and long-term sustainable organic growth.",
    href: "/services/seo",
    ctaLabel: "Explore SEO",
    featured: false,
    featuredBadge: null,
  },
];

export default function PerformanceMarketingPlatformsSection() {
  return (
    <section
      aria-labelledby="pm-platforms-heading"
      className="overflow-hidden bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* ── Heading block ── */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-[720px] text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full bg-[#E3F8FD] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0478FD]"
          >
            Performance Across Platforms
          </motion.span>

          <motion.h2
            variants={fadeUp}
            id="pm-platforms-heading"
            className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight sm:text-[44px] lg:text-[52px]"
          >
            Paid Advertising, Built Around{" "}
            <span className="text-[#00B8E6]">Where Your Customers Are</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[15px] leading-[1.8] text-[#4A5A75] sm:text-[17px]"
          >
            A strong performance marketing strategy is rarely about being
            everywhere. It is about choosing the right platform, reaching the
            right audience and optimising every campaign towards measurable
            business growth.
          </motion.p>
        </motion.div>

        {/* ── 3-D perspective card row ── */}
        <div
          className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-5"
          style={{ perspective: "1100px" }}
        >
          {PLATFORMS.map((p, i) => {
            const isMid = i === 1;
            const isLeft = i === 0;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.14, ease: EASE }}
                className="relative flex-1"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isMid
                    ? "translateZ(36px) scale(1.04)"
                    : isLeft
                    ? "rotateY(7deg)"
                    : "rotateY(-7deg)",
                  zIndex: isMid ? 10 : 1,
                }}
              >
                {/* Featured badge */}
                {p.featuredBadge && (
                  <div className="absolute -top-[18px] left-1/2 z-20 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-md bg-[#061A40] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_4px_14px_rgba(6,26,64,0.3)]">
                      {p.featuredBadge}
                    </span>
                  </div>
                )}

                {/* Card */}
                <article
                  className={`group flex h-full flex-col rounded-[20px] border bg-white p-7 transition-all duration-400 sm:p-8 ${
                    isMid
                      ? "border-[#0478FD]/30 shadow-[0_28px_70px_rgba(4,120,253,0.18),0_8px_24px_rgba(6,26,64,0.12)]"
                      : "border-[#E3EAF5] shadow-[0_8px_32px_rgba(6,26,64,0.08)] hover:border-[#D0DAF0] hover:shadow-[0_20px_50px_rgba(6,26,64,0.14)]"
                  }`}
                >
                  {/* Top row: number + category */}
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-bold text-[#0478FD]">
                      {p.num}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A9BBB]">
                      {p.category}
                    </span>
                  </div>

                  {/* Accent bar */}
                  <span className="mt-4 block h-[3px] w-8 rounded-full bg-[linear-gradient(90deg,#0478FD,#00C9F4)] transition-all duration-300 group-hover:w-14" />

                  {/* Title */}
                  <h3 className="mt-5 text-[28px] font-bold leading-[1.18] text-[#061A40] sm:text-[32px]">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[15px] leading-[1.78] text-[#4A5A75]">
                    {p.description}
                  </p>

                  {/* Divider */}
                  <hr className="my-5 border-[#EEF1F8]" />

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5">
                        <span className="size-1.5 shrink-0 rounded-full bg-[#0478FD]" />
                        <span className="text-[14px] font-medium text-[#334155]">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer note */}
                  <p className="mt-6 flex-1 text-[13px] leading-[1.75] text-[#8A9BBB]">
                    {p.footer}
                  </p>

                  {/* CTA link */}
                  <Link
                    href={p.href}
                    className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#061A40] transition-colors duration-200 hover:text-[#0478FD]"
                  >
                    {p.ctaLabel}
                    <ArrowRight
                      size={16}
                      strokeWidth={2.4}
                      className="transition-transform duration-200 group-hover:translate-x-1 text-[#0478FD]"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
