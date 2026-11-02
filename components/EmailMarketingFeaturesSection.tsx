"use client";

import { motion } from "framer-motion";
import { LayoutGrid, UserRound, Star, type LucideIcon } from "lucide-react";

const FEATURES: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Personalization",
    description: "Tailored content boosts engagement and customer loyalty.",
    icon: LayoutGrid,
  },
  {
    title: "Automated Campaigns",
    description: "Timely messages nurture leads and drive conversions.",
    icon: UserRound,
  },
  {
    title: "Segmentation",
    description: "Targeted emails lead to higher click-through rates and revenue.",
    icon: Star,
  },
];

// Three key benefits directly below the Email Marketing hero (white background, no patterns)
export default function EmailMarketingFeaturesSection() {
  return (
    <section className="bg-white px-4 py-14 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-6 lg:gap-10">
        {FEATURES.map(({ title, description, icon: Icon }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className={
              i === 2
                ? "col-span-2 mx-auto flex w-full max-w-[280px] flex-col items-center gap-3 px-1 text-center md:col-span-1 md:max-w-none md:flex-row md:items-start md:gap-5 md:text-left"
                : "flex flex-col items-center gap-3 px-1 text-center md:flex-row md:items-start md:gap-5 md:text-left"
            }
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-[#00C8EF] bg-[#E6F9FD] shadow-[0_8px_24px_rgba(0,200,239,0.18)] sm:size-16 md:size-[72px]">
              <Icon size={25} strokeWidth={2.2} className="text-[#0478FD] sm:size-7 md:size-[30px]" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="text-[17px] font-bold leading-tight sm:text-xl md:text-[22px]">{title}</h3>
              <p className="mt-2 text-[13px] leading-[1.65] text-[#4A5A75] sm:text-[15px] md:text-base">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
