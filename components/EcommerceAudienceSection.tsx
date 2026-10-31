import {
  ArrowUpRight,
  Briefcase,
  Coffee,
  Gem,
  HeartPulse,
  Home,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

const AUDIENCES: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "D2C brands",
    description: "Connect customer acquisition, conversion and retention as your direct-to-consumer store grows.",
    Icon: Briefcase,
  },
  {
    title: "Fashion & accessories",
    description: "Build product discovery and campaign stories around new collections and customer intent.",
    Icon: Gem,
  },
  {
    title: "Beauty & wellness",
    description: "Make product benefits easier to discover and support the journey from first order to repeat purchase.",
    Icon: HeartPulse,
  },
  {
    title: "Home & lifestyle",
    description: "Showcase products with useful creative, relevant search visibility and a smoother store experience.",
    Icon: Home,
  },
  {
    title: "Food & beverage",
    description: "Reach shoppers with clear product stories, timely offers and thoughtful retention campaigns.",
    Icon: Coffee,
  },
  {
    title: "Growing online stores",
    description: "Choose a practical channel mix based on your catalogue, margins and current stage of growth.",
    Icon: ShoppingBag,
  },
];

export default function EcommerceAudienceSection() {
  return (
    <section
      aria-labelledby="ecommerce-audience-heading"
      className="bg-[#F7FBFE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[850px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            Ecommerce brands we support
          </span>
          <h2
            id="ecommerce-audience-heading"
            className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]"
          >
            Built around the needs of{" "}
            <span className="text-[#00A9D6]">online brands.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[740px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            Every category has different customers, products and buying cycles. We shape the ecommerce marketing plan
            around yours.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {AUDIENCES.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group relative isolate overflow-hidden rounded-[24px] border border-[#DCEAF4] bg-white p-6 shadow-[0_10px_30px_rgba(6,26,64,0.045)] transition-all duration-300 hover:-translate-y-2 hover:border-[#9BDCF1] hover:shadow-[0_24px_55px_rgba(6,26,64,0.12)] sm:min-h-[245px] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#00B8E6] to-[#168BFF] transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-[16px] bg-[#E8F8FD] text-[#087AA5] sm:size-[52px]">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <ArrowUpRight size={18} className="mt-1 text-[#84A0BC] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-[20px] font-bold leading-snug tracking-tight text-[#061A40] transition-colors duration-300 group-hover:text-[#087AA5] sm:text-[22px]">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.8] text-[#52617E] sm:text-[15px]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
