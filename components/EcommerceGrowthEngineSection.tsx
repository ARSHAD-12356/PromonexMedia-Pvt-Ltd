import { Repeat2, ShoppingBag, Target, type LucideIcon } from "lucide-react";

const PILLARS: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "Traffic",
    description: "Attract ready-to-buy shoppers through paid campaigns and organic product discovery.",
    Icon: Target,
  },
  {
    title: "Conversion",
    description: "Help more qualified visitors order with clear product pages and a smoother buying journey.",
    Icon: ShoppingBag,
  },
  {
    title: "Retention",
    description: "Bring customers back with useful lifecycle messages and relevant remarketing.",
    Icon: Repeat2,
  },
];

export default function EcommerceGrowthEngineSection() {
  return (
    <section
      aria-labelledby="ecommerce-growth-engine-heading"
      className="bg-[#F7FBFE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            The ecommerce growth engine
          </span>
          <h2
            id="ecommerce-growth-engine-heading"
            className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]"
          >
            Sustainable growth needs the{" "}
            <span className="text-[#00A9D6]">complete journey.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            We connect traffic, conversion and retention so each part of your ecommerce strategy supports the next.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:mt-12 lg:grid-cols-3 lg:gap-6">
          {PILLARS.map(({ title, description, Icon }, index) => (
            <article
              key={title}
              className="group relative isolate overflow-hidden rounded-[24px] border border-[#DCEAF4] bg-white p-6 shadow-[0_10px_30px_rgba(6,26,64,0.045)] transition-all duration-300 hover:-translate-y-2 hover:border-[#9BDCF1] hover:shadow-[0_24px_55px_rgba(6,26,64,0.12)] sm:min-h-[260px] sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#00B8E6] to-[#168BFF] transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-[16px] bg-[#E8F8FD] text-[#087AA5] sm:size-[54px]">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="flex size-12 items-center justify-center rounded-[16px] bg-[#E8F8FD] text-[15px] font-bold text-[#087AA5] sm:size-[54px]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-7 text-[22px] font-bold tracking-tight text-[#061A40] transition-colors duration-300 group-hover:text-[#087AA5] sm:text-[24px]">
                {title}
              </h3>
              <p className="mt-3 max-w-[360px] text-[14px] leading-[1.8] text-[#52617E] sm:text-[15px]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
