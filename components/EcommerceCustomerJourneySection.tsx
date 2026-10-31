"use client";

import {
  BarChart3,
  MousePointer2,
  Repeat2,
  Search,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";

const PILLARS: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "Acquire the right customers",
    description: "Reach relevant shoppers through paid search, social campaigns and organic discovery.",
    Icon: Target,
  },
  {
    title: "Create better ads",
    description: "Pair clear messaging with strong creative so the right people have a reason to click.",
    Icon: Sparkles,
  },
  {
    title: "Improve store conversion",
    description: "Refine product pages, landing pages and checkout journeys to make buying easier.",
    Icon: MousePointer2,
  },
  {
    title: "Bring customers back",
    description: "Build repeat purchase habits through useful email, SMS and retention campaigns.",
    Icon: Repeat2,
  },
  {
    title: "Grow organic discovery",
    description: "Help shoppers find the right products through stronger ecommerce SEO.",
    Icon: Search,
  },
  {
    title: "Measure what matters",
    description: "Use channel and store signals to focus on the work that supports sustainable growth.",
    Icon: BarChart3,
  },
];

export default function EcommerceCustomerJourneySection() {
  return (
    <section
      aria-labelledby="ecommerce-customer-journey-heading"
      className="bg-white px-4 pb-16 pt-4 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            Built around the full journey
          </span>
          <h2
            id="ecommerce-customer-journey-heading"
            className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]"
          >
            From the first click to the{" "}
            <span className="text-[#00A9D6]">next purchase.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            Ecommerce growth takes more than one campaign. We connect acquisition, creative, conversion, organic
            visibility and retention across the customer journey.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PILLARS.map(({ title, description, Icon }, index) => (
            <article
              key={title}
              className="group relative isolate overflow-hidden rounded-[24px] border border-[#DCEAF4] bg-white p-6 shadow-[0_10px_30px_rgba(6,26,64,0.045)] transition-all duration-300 hover:-translate-y-2 hover:border-[#9BDCF1] hover:shadow-[0_24px_55px_rgba(6,26,64,0.12)] sm:min-h-[270px] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#00B8E6] to-[#168BFF] transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-[16px] bg-[#E8F8FD] text-[#087AA5] sm:size-[52px]">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="pt-1 text-[11px] font-semibold tracking-[0.12em] text-[#92A2B9]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-[20px] font-bold leading-snug tracking-tight text-[#061A40] transition-colors duration-300 group-hover:text-[#087AA5] sm:text-[22px]">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.8] text-[#52617E] sm:text-[15px]">
                {description}
              </p>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -right-10 size-32 rounded-full bg-[#DDF7FF] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
