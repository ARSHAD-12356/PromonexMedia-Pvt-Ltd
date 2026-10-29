"use client";

import { motion, type Variants } from "framer-motion";
import {
  ShoppingCart,
  Users,
  Smartphone,
  Megaphone,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const CAMPAIGNS = [
  {
    icon: ShoppingCart,
    iconBg: "bg-[#EEF5FF]",
    iconColor: "text-[#0478FD]",
    accentFrom: "#0478FD",
    accentTo: "#00C9F4",
    title: "Ecommerce Conversions",
    description:
      "Personalized campaigns that boost sales. Promonex Media delivers tailored marketing strategies designed for enhanced results and sustainable ecommerce growth.",
  },
  {
    icon: Users,
    iconBg: "bg-[#F0FDF8]",
    iconColor: "text-[#059669]",
    accentFrom: "#059669",
    accentTo: "#34D399",
    title: "Lead Generation Campaigns",
    description:
      "Contextual targeting for quality leads. Promonex Media drives better connections and higher conversions with precision audience-first strategies.",
  },
  {
    icon: Smartphone,
    iconBg: "bg-[#F5F0FF]",
    iconColor: "text-[#7C3AED]",
    accentFrom: "#7C3AED",
    accentTo: "#A78BFA",
    title: "App Install Campaigns",
    description:
      "Empower your apps with actionable performance campaigns. We reach the right users at the right moment to maximise installs and in-app engagement.",
  },
  {
    icon: Megaphone,
    iconBg: "bg-[#FFF4ED]",
    iconColor: "text-[#EA580C]",
    accentFrom: "#EA580C",
    accentTo: "#FB923C",
    title: "Brand Awareness Campaigns",
    description:
      "Build genuine connections with targeted marketing. Promonex Media drives impactful brand relationships that turn audiences into loyal customers.",
  },
];

function CampaignCard({
  item,
  index,
}: {
  item: (typeof CAMPAIGNS)[number];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden rounded-[24px] border border-[#E3EAF5] bg-white p-7 shadow-[0_8px_32px_rgba(6,26,64,0.07)] transition-all duration-400 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_24px_60px_rgba(6,26,64,0.18)] sm:p-8"
    >
      {/* Top gradient accent bar — slides in on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-[24px] transition-transform duration-500 group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, ${item.accentFrom}, ${item.accentTo})`,
        }}
      />

      {/* Corner glow on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `${item.accentFrom}18` }}
      />

      {/* Icon box */}
      <span
        className={`relative inline-flex size-[58px] items-center justify-center rounded-2xl ${item.iconBg} shadow-[0_4px_14px_rgba(6,26,64,0.08)] transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon
          size={28}
          strokeWidth={1.8}
          className={item.iconColor}
          aria-hidden="true"
        />
      </span>

      {/* Title */}
      <h3 className="relative mt-6 text-[20px] font-bold leading-[1.25] text-[#061A40] sm:text-[22px]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative mt-3 flex-1 text-[15px] leading-[1.78] text-[#4A5A75] sm:text-[16px]">
        {item.description}
      </p>

      {/* Bottom accent dot row */}
      <div className="relative mt-6 flex items-center gap-1.5">
        <span
          className="size-2 rounded-full transition-all duration-300 group-hover:w-6"
          style={{ background: item.accentFrom }}
        />
        <span
          className="size-2 rounded-full opacity-50"
          style={{ background: item.accentTo }}
        />
        <span
          className="size-2 rounded-full opacity-25"
          style={{ background: item.accentFrom }}
        />
      </div>
    </motion.article>
  );
}

export default function PerformanceMarketingCampaignsSection() {
  return (
    <section
      aria-labelledby="pm-campaigns-heading"
      className="overflow-hidden bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Heading block — centered */}
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
            Our Campaigns
          </motion.span>

          <motion.h2
            variants={fadeUp}
            id="pm-campaigns-heading"
            className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight sm:text-[44px] lg:text-[52px]"
          >
            Types of campaigns we run to{" "}
            <span className="text-[#00B8E6]">achieve results</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[15px] leading-[1.8] text-[#4A5A75] sm:text-[17px]"
          >
            Unleash the power of performance marketing services with{" "}
            <strong className="font-semibold text-[#061A40]">
              Promonex Media
            </strong>
            . Our focused campaigns, utilizing data-driven insights, target and
            engage your audience effectively. Witness real, measurable results
            that drive{" "}
            <span className="font-semibold text-[#0478FD]">
              business success
            </span>
            .
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16"
        >
          {CAMPAIGNS.map((item, i) => (
            <CampaignCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
