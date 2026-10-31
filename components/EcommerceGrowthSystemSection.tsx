"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Layers3,
  Megaphone,
  Repeat2,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const CHANNELS = [
  { label: "Paid media", Icon: Megaphone },
  { label: "Storefront SEO", Icon: Search },
  { label: "Conversion rate", Icon: BarChart3 },
  { label: "Customer retention", Icon: Repeat2 },
];

const DASHBOARD_STEPS = [
  { label: "Reach the right shoppers", detail: "Paid media + organic discovery", Icon: Megaphone },
  { label: "Make every visit count", detail: "Storefront experience + CRO", Icon: ShoppingBag },
  { label: "Bring customers back", detail: "Retention + lifecycle campaigns", Icon: Repeat2 },
];

const BAR_HEIGHTS = ["h-2", "h-3", "h-4", "h-3", "h-5", "h-6", "h-5", "h-7"];

export default function EcommerceGrowthSystemSection() {
  return (
    <section
      aria-labelledby="ecommerce-growth-system-heading"
      className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid items-end gap-7 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <div className="max-w-[800px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
              <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
              Ecommerce growth system
            </span>
            <h2
              id="ecommerce-growth-system-heading"
              className="mt-5 text-[clamp(2rem,4.4vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.045em]"
            >
              Your store deserves one connected path to{" "}
              <span className="text-[#00A9D6]">sustainable growth.</span>
            </h2>
          </div>
          <p className="max-w-[470px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8 lg:justify-self-end">
            We connect customer acquisition, paid media, ecommerce SEO, conversion optimisation and retention—so each
            part of your online growth strategy supports the next.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[28px] border border-[#D6EAF5] bg-[linear-gradient(118deg,#F4FCFF_0%,#E7F7FF_48%,#D8EEFF_100%)] shadow-[0_24px_70px_rgba(6,26,64,0.08)] sm:mt-12 sm:rounded-[34px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-36 size-[440px] rounded-full border-[1px] border-[#7CCFF2]/30 sm:size-[560px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 size-[360px] rounded-full border-[1px] border-[#7CCFF2]/25 sm:size-[470px]"
          />

          <div className="relative grid lg:min-h-[500px] lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex flex-col items-start justify-center px-6 pb-4 pt-9 sm:px-10 sm:pt-12 lg:px-12 lg:py-14 xl:px-16">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#087AA5] sm:text-[11px]">
                <Sparkles size={15} aria-hidden="true" />
                Promonex ecommerce framework
              </span>
              <h3 className="mt-5 max-w-[520px] text-[clamp(2rem,4vw,3.35rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-[#061A40]">
                More of the right traffic.
                <span className="mt-1 block text-[#078CC4]">A better store journey.</span>
              </h3>
              <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-[#4F607D] sm:text-[16px] sm:leading-8">
                Bring acquisition, product discovery and repeat-purchase campaigns together with a strategy shaped around
                your catalogue, margins and customers.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Ecommerce marketing capabilities">
                {CHANNELS.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-[#C8E4F2] bg-white/80 px-3 py-2 text-[11px] font-semibold text-[#18345B] shadow-[0_4px_12px_rgba(6,26,64,0.04)] sm:text-[12px]"
                  >
                    <Icon size={14} className="text-[#078CC4]" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>

              <Link
                href="#contact-ecommerce-marketing"
                className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#061A40] px-5 py-3 text-[14px] font-bold text-white shadow-[0_10px_25px_rgba(6,26,64,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0B2C69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6] focus-visible:ring-offset-2"
              >
                Plan your growth strategy
                <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative flex items-center justify-center px-4 pb-8 pt-6 sm:px-8 sm:pb-12 lg:px-8 lg:py-12 xl:px-12">
              <div aria-hidden="true" className="absolute right-[12%] top-[16%] size-48 rounded-full bg-[#6EDBFA]/25 blur-3xl" />
              <div className="relative w-full max-w-[720px] rotate-[0.5deg] rounded-[22px] border border-white/90 bg-white/95 p-3 shadow-[0_28px_70px_rgba(6,26,64,0.18)] sm:rounded-[28px] sm:p-5">
                <div className="flex items-center justify-between gap-4 border-b border-[#E6EEF5] px-1 pb-3 sm:px-2 sm:pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-[#E6F8FD] text-[#087AA5] sm:size-10">
                      <Layers3 size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[12px] font-bold text-[#10264B] sm:text-[14px]">Connected growth journey</p>
                      <p className="mt-0.5 text-[9px] text-[#73819A] sm:text-[11px]">An illustrative strategy view</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#E9F7FF] px-2.5 py-1 text-[9px] font-semibold text-[#087AA5] sm:px-3 sm:text-[10px]">
                    ECOMMERCE
                  </span>
                </div>

                <div className="grid gap-2.5 py-3 sm:grid-cols-3 sm:gap-3 sm:py-4">
                  {DASHBOARD_STEPS.map(({ label, detail, Icon }, index) => (
                    <div key={label} className="rounded-[15px] border border-[#E6EEF5] bg-[#FBFDFF] p-3 sm:rounded-[18px] sm:p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="flex size-8 items-center justify-center rounded-[10px] bg-[#E8F8FD] text-[#078CC4] sm:size-9">
                          <Icon size={16} aria-hidden="true" />
                        </span>
                        <span className="flex size-5 items-center justify-center rounded-full bg-[#E6F8F1] text-[#169C78]">
                          <Check size={12} strokeWidth={3} aria-hidden="true" />
                        </span>
                      </div>
                      <p className="mt-3 text-[11px] font-bold leading-snug text-[#10264B] sm:text-[12px]">{label}</p>
                      <p className="mt-1 text-[9px] leading-relaxed text-[#73819A] sm:text-[10px]">{detail}</p>
                      <div className="mt-3 flex h-7 items-end gap-1" aria-hidden="true">
                        {BAR_HEIGHTS.map((heightClass, barIndex) => (
                          <span
                            key={barIndex}
                            className={
                              "flex-1 rounded-t-[3px] " +
                              (index === 1 ? "bg-[#00B8E6] " : "bg-[#168BFF] ") +
                              heightClass
                            }
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[16px] bg-[#061A40] p-3.5 text-white sm:rounded-[20px] sm:p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#91A7C8] sm:text-[10px]">Strategy sequence</p>
                      <p className="mt-1 text-[12px] font-bold sm:text-[14px]">
                        Discover <span className="text-[#53D7F4]">→</span> Convert <span className="text-[#53D7F4]">→</span> Return
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#53D7F4]">
                      <span className="size-1.5 rounded-full bg-[#53D7F4]" />
                      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] sm:text-[10px]">Built around your store</span>
                    </div>
                  </div>
                  <div className="mt-3 h-12 overflow-hidden rounded-xl bg-white/[0.06] px-2.5 py-1.5 sm:h-14 sm:px-3">
                    <svg viewBox="0 0 600 54" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
                      <defs>
                        <linearGradient id="growthJourneyFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#00C8EF" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#00C8EF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 47 C36 44 38 34 72 37 S111 40 148 28 S190 35 227 25 S274 28 310 17 S364 23 402 16 S449 19 480 10 S542 14 600 3 V54 H0 Z" fill="url(#growthJourneyFill)" />
                      <path d="M0 47 C36 44 38 34 72 37 S111 40 148 28 S190 35 227 25 S274 28 310 17 S364 23 402 16 S449 19 480 10 S542 14 600 3" fill="none" stroke="#42D4F2" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 left-3 hidden items-center gap-2.5 rounded-2xl border border-white bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(6,26,64,0.12)] sm:flex lg:bottom-10 lg:left-0">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#E8F8FD] text-[#078CC4]">
                  <ShoppingBag size={16} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold text-[#10264B]">One store strategy</span>
                  <span className="mt-0.5 block text-[8px] text-[#73819A]">Channels working together</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
