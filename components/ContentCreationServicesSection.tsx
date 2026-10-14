"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Camera,
  CalendarDays,
  Clapperboard,
  LayoutTemplate,
  PenLine,
  Users,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const SERVICES: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Brand & Product Shoots",
    description: "Studio and on-location photography that shows your products and team at their best.",
    icon: Camera,
  },
  {
    title: "Reels & Short Videos",
    description: "Scripted, shot and edited short-form videos built for Instagram, YouTube Shorts and ads.",
    icon: Clapperboard,
  },
  {
    title: "Social Media Creatives",
    description: "On-brand post designs, carousels and stories that stop the scroll and stay consistent.",
    icon: LayoutTemplate,
  },
  {
    title: "Copywriting & Captions",
    description: "Hooks, captions and ad copy written in your brand voice to drive comments and clicks.",
    icon: PenLine,
  },
  {
    title: "UGC & Creator Content",
    description: "Authentic content with creators and customers that builds trust and social proof.",
    icon: Users,
  },
  {
    title: "Content Calendar & Strategy",
    description: "Monthly content plans mapped to your goals, festivals and launches, so you never miss a beat.",
    icon: CalendarDays,
  },
];

const STEPS = ["Plan", "Shoot", "Edit", "Publish"];

// "What we create" — content creation services + a simple 4-step process
export default function ContentCreationServicesSection() {
  return (
    <section
      aria-labelledby="cc-services-heading"
      className="bg-[#F6F9FE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-[860px] text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full bg-[#E3F8FD] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0478FD]"
          >
            What we create
          </motion.span>
          <motion.h2
            variants={fadeUp}
            id="cc-services-heading"
            className="mt-5 text-[32px] font-bold leading-[1.18] tracking-tight sm:text-[44px] lg:text-[52px]"
          >
            Content that makes your brand <span className="text-[#00B8E6]">impossible to ignore</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-[680px] text-[16px] leading-relaxed text-[#4A5A75] sm:text-[18px]">
            From the first idea to the final post, our creative team handles everything your brand needs to look
            great online.
          </motion.p>

          {/* Process */}
          <motion.ol variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#061A40] px-4 py-2 text-[13px] font-semibold text-white sm:text-[14px]">
                  <span className="text-[#00C8EF]">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </span>
                {i < STEPS.length - 1 && <ArrowRight size={16} className="text-[#9AA8BF]" aria-hidden="true" />}
              </li>
            ))}
          </motion.ol>
        </motion.div>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ title, description, icon: Icon }, i) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-[24px] border border-[#E3EAF5] bg-white p-8 shadow-[0_12px_34px_rgba(6,26,64,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#061A40]/40 hover:shadow-[0_26px_55px_rgba(6,26,64,0.18)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#020B35,#0A2A6B)] transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between">
                <span className="flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#E6F9FD,#DCEBFF)] text-[#0478FD] transition-colors duration-300 group-hover:bg-[linear-gradient(135deg,#0A2A6B,#020B35)] group-hover:text-white">
                  <Icon size={30} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="text-[34px] font-bold leading-none text-[#EEF2F8] transition-colors duration-300 group-hover:text-[#DCE4F0]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-7 text-[22px] font-bold leading-snug sm:text-[23px]">{title}</h3>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-[#4A5A75]">{description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#020B35] px-8 py-4 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(2,11,53,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] sm:px-9 sm:text-[16px]"
          >
            <span>Plan my content</span>
            <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
