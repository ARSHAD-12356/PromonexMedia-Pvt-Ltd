"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const buttonClassName =
  "group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-[linear-gradient(90deg,#0478FD,#00C9F4)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(4,120,253,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,201,244,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B35] sm:px-8 sm:text-base";

export default function LeadGenerationHeroSection() {
  return (
    <section
      aria-labelledby="lead-generation-hero-heading"
      className="relative flex min-h-[min(620px,calc(100svh-76px))] w-full items-start overflow-hidden px-6 py-10 font-['Poppins',sans-serif] text-white sm:px-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
        <div className="max-w-[700px]">
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mb-7">
            <span className="inline-flex items-center rounded-full border border-[#00C9F4]/25 bg-[#00C9F4]/[0.08] px-4 py-2 text-[12px] font-semibold text-[#D8F8FF] sm:text-[13px]">
              Growth Starts With Better Leads
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00C9F4] sm:text-[13px]">
              Lead Generation Services
            </span>
          </div>

          <h1
            id="lead-generation-hero-heading"
            className="text-[clamp(2.35rem,4.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.045em]"
          >
            Lead Generation Services in Patna for{" "}
            <span className="bg-[linear-gradient(90deg,#00C9F4,#69DCFF)] bg-clip-text text-transparent">
              Qualified Business Leads.
            </span>
          </h1>

          <p className="mt-6 max-w-[650px] text-[15px] leading-[1.8] text-[#C8D5EA] sm:mt-7 sm:text-[17px] lg:text-[18px]">
            Promonex Media is a lead generation company in Patna helping
            businesses generate qualified leads through Google Ads, Meta Ads,
            SEO, conversion-focused landing pages and remarketing—with campaigns
            built around enquiries, calls and real business opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link href="#lead-generation-contact" className={buttonClassName}>
              Start Generating Leads <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#lead-generation-contact" className={buttonClassName}>
              See How It Works <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[28px] border border-white/15 shadow-[0_28px_80px_rgba(0,0,0,0.3)] lg:ml-auto">
          <Image
            src="/assets/promonex-lead-generation-hero.png"
            alt="A Promonex robot fishing for qualified leads in a boat as campaign metrics rise."
            width={1373}
            height={1145}
            priority
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 80vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
