import {
  ArrowUpRight,
  BadgeCheck,
  Crosshair,
  RefreshCw,
  Sparkles,
  Zap,
} from "lucide-react";

const strategies = [
  {
    title: "Right Audience",
    description:
      "Reach people based on location, intent, interests, search behaviour and business relevance.",
    icon: Crosshair,
    iconTone: "bg-[#FFF1E8] text-[#D96B31]",
  },
  {
    title: "Clear Offers",
    description:
      "Strong hooks and simple messaging help potential customers understand why they should enquire.",
    icon: ArrowUpRight,
    iconTone: "bg-[#EAF3FF] text-[#2675C9]",
  },
  {
    title: "Better Landing Pages",
    description:
      "We connect campaigns with focused landing pages designed to turn interest into action.",
    icon: Sparkles,
    iconTone: "bg-[#EAF7F1] text-[#258B65]",
  },
  {
    title: "Fast Follow-Up Flow",
    description:
      "Leads can move into forms, calls, WhatsApp, CRMs or other business workflows.",
    icon: Zap,
    iconTone: "bg-[#F3EDFA] text-[#8755C4]",
  },
  {
    title: "Conversion Tracking",
    description:
      "We measure enquiries and important actions instead of judging campaigns only by traffic.",
    icon: BadgeCheck,
    iconTone: "bg-[#FFF6D9] text-[#B17B00]",
  },
  {
    title: "Continuous Improvement",
    description:
      "Campaigns can be optimised using actual lead data, performance and customer feedback.",
    icon: RefreshCw,
    iconTone: "bg-[#E9F6FA] text-[#27819A]",
  },
];

export default function LeadGenerationStrategySection() {
  return (
    <section
      aria-labelledby="lead-generation-strategy-heading"
      className="w-full bg-white px-5 py-16 font-['Poppins',sans-serif] text-[#09183D] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1260px]">
        <div className="mx-auto mb-10 max-w-[850px] text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#536176] sm:text-sm">
            A smarter path to growth
          </p>
          <h2
            id="lead-generation-strategy-heading"
            className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.04em] text-[#09183D]"
          >
            Lead Generation Strategy for{" "}
            <span className="text-[#00B8E6]">Better Quality Leads.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[800px] text-[15px] leading-7 text-[#536176] sm:text-[17px] sm:leading-8">
            Our qualified lead generation approach focuses on attracting people
            with genuine intent to enquire about your products or services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {strategies.map(({ title, description, icon: Icon, iconTone }) => (
            <article
              key={title}
              className="group relative min-h-[250px] overflow-hidden rounded-[22px] border border-[#16376A] bg-[#020B35] p-7 shadow-[0_10px_30px_rgba(2,11,53,0.16)] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-[#36BCEB] hover:bg-[#061744] hover:shadow-[0_20px_46px_rgba(4,120,253,0.22)] focus-within:-translate-y-1.5 motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#42B9E8]/0 to-transparent transition-colors duration-300 group-hover:via-[#42B9E8]/70"
              />
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-[16px] transition duration-300 group-hover:scale-105 ${iconTone}`}
              >
                <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-white sm:text-[22px]">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-[#C8D5EA]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
