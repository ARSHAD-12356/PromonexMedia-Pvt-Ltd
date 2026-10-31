"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function EcommerceMarketingHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 76% 44%, rgba(0, 191, 255, 0.2), transparent 36%), radial-gradient(circle at 14% 10%, rgba(91, 60, 196, 0.18), transparent 32%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 px-4 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-6 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:pt-10 lg:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="relative z-10 max-w-[680px]"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00C8F0]/40 bg-[#00C8F0]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7FE3FA]">
            <span className="size-2 rounded-full bg-[#00C8F0]" aria-hidden="true" />
            Ecommerce Growth <span aria-hidden="true">•</span> Performance <span aria-hidden="true">•</span> Retention
          </span>
          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#7FE3FA]">
            Ecommerce Marketing Services
          </p>
          <h1 className="mt-5 text-[clamp(2rem,4.2vw,3.9rem)] font-extrabold leading-[1.02] tracking-tight">
            <span className="block">Ecommerce</span>
            <span className="block lg:whitespace-nowrap">Marketing Agency</span>
            <span className="block">for Brands That</span>
            <span className="mt-1 block text-[0.98em] text-[#00C8F0]">
              Want to Grow.
            </span>
          </h1>
          <p className="mt-6 max-w-[650px] text-[15px] leading-[1.8] text-[#D3DCEC] sm:text-[17px]">
            Promonex Media is an ecommerce marketing agency in Patna helping D2C brands, Shopify stores, WooCommerce
            websites and online retailers increase sales through performance marketing, ecommerce SEO, Meta Ads, Google
            Ads, conversion optimisation, creative strategy and retention marketing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact-ecommerce-marketing"
              className="group inline-flex min-h-14 items-center gap-3 rounded-xl bg-[#00C8F0] px-6 py-3.5 text-[15px] font-bold text-[#061A3A] shadow-[0_10px_30px_rgba(0,200,240,0.25)] transition hover:-translate-y-0.5 hover:bg-[#22D6FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Grow My Ecommerce Brand
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 bg-white/[0.04] px-6 py-3.5 text-[15px] font-bold text-white transition hover:border-[#00C8F0] hover:text-[#7FE3FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8F0]"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
          className="relative mx-auto w-full max-w-[660px]"
        >
          <div className="absolute -inset-8 rounded-full bg-[#00C8F0]/10 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[24px] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.38)] lg:-translate-y-6 lg:scale-[1.06] xl:-translate-y-8">
            <Image
              src="/assets/ecommerce-marketing-hero.png"
              alt="Online store marketing dashboard with Google and Meta campaigns, ecommerce sales, traffic and conversion growth"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
