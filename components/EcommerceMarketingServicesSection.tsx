"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Mail,
  Megaphone,
  MousePointer2,
  Search,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const SERVICES: {
  label: string;
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon;
}[] = [
  {
    label: "Paid media",
    title: "Performance Marketing",
    description: "Reach relevant shoppers with focused campaigns across search, social and shopping placements.",
    href: "/services/performance-marketing",
    Icon: Megaphone,
  },
  {
    label: "Organic growth",
    title: "Ecommerce SEO",
    description: "Improve product and category discovery with a clear ecommerce search strategy.",
    href: "/services/seo",
    Icon: Search,
  },
  {
    label: "Conversion",
    title: "Store Conversion",
    description: "Make product pages, landing pages and checkout easier for shoppers to move through.",
    href: "#contact-ecommerce-marketing",
    Icon: MousePointer2,
  },
  {
    label: "Creative",
    title: "Ad Creative & Design",
    description: "Create on-brand campaign visuals and messages that give customers a reason to engage.",
    href: "/services/graphic-design",
    Icon: Sparkles,
  },
  {
    label: "Retention",
    title: "Email Marketing",
    description: "Support repeat purchases with helpful lifecycle messages and customer retention campaigns.",
    href: "/services/email-marketing",
    Icon: Mail,
  },
  {
    label: "Store experience",
    title: "Ecommerce Development",
    description: "Build a stronger storefront foundation for product discovery, usability and growth.",
    href: "/services/ecommerce-development",
    Icon: ShoppingBag,
  },
];

export default function EcommerceMarketingServicesSection() {
  return (
    <section
      aria-labelledby="ecommerce-marketing-services-heading"
      className="bg-[#F7FBFE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[860px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            Complete ecommerce marketing
          </span>
          <h2
            id="ecommerce-marketing-services-heading"
            className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]"
          >
            Ecommerce services built for{" "}
            <span className="text-[#00A9D6]">online growth.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            Choose the channel you need or connect services into one practical plan across discovery, conversion and
            customer retention.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map(({ label, title, description, href, Icon }) => (
            <Link
              key={title}
              href={href}
              className="group relative isolate flex min-h-[270px] flex-col overflow-hidden rounded-[24px] border border-[#DCEAF4] bg-white p-6 shadow-[0_10px_30px_rgba(6,26,64,0.045)] transition-all duration-300 hover:-translate-y-2 hover:border-[#9BDCF1] hover:shadow-[0_24px_55px_rgba(6,26,64,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6] focus-visible:ring-offset-2 sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#00B8E6] to-[#168BFF] transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-[16px] bg-[#E8F8FD] text-[#087AA5] sm:size-[52px]">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="rounded-full bg-[#E4F8FD] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#087AA5] sm:text-[11px]">
                  {label}
                </span>
              </div>
              <h3 className="mt-6 text-[20px] font-bold leading-snug tracking-tight text-[#061A40] transition-colors duration-300 group-hover:text-[#087AA5] sm:text-[22px]">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.8] text-[#52617E] sm:text-[15px]">
                {description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[#061A40]">
                Explore service
                <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
