"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingBag,
  RotateCcw,
  Layout,
  Layers,
  Crosshair,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const SEM_SERVICES = [
  {
    icon: Search,
    title: "Google Search Ads (PPC)",
    desc: "Target high-intent keywords that customers type right before buying. Minimize wasted spend with granular negative keyword lists.",
    features: ["Responsive Search Ads (RSA)", "Negative Keyword Sculpting", "Ad Extensions & Sitelinks", "Quality Score Maximization"],
  },
  {
    icon: ShoppingBag,
    title: "Google Shopping & Performance Max",
    desc: "Put your eCommerce inventory in front of shoppers across Google Search, Shopping tab, YouTube, and Gmail with automated ROAS bidding.",
    features: ["Google Merchant Center Setup", "Smart Shopping Campaigns", "Product Feed Optimization", "Target ROAS Bidding"],
  },
  {
    icon: RotateCcw,
    title: "Remarketing & Retargeting",
    desc: "Over 96% of first-time visitors don't convert. Our retargeting campaigns follow warm leads across the web to bring them back to complete checkout.",
    features: ["Audience Segmentation", "Dynamic Product Remarketing", "Cross-Platform Retargeting", "Cart Abandonment Funnels"],
  },
  {
    icon: Layout,
    title: "Landing Page CRO & Funnels",
    desc: "Clicks are useless if your landing page doesn't convert. We design high-speed, mobile-optimized pages specifically engineered for paid search traffic.",
    features: ["High-Converting Copywriting", "A/B Multivariate Testing", "Sub-2s Page Load Speed", "Call & WhatsApp Tracking"],
  },
  {
    icon: Layers,
    title: "Google Display & Discovery",
    desc: "Reach audiences across 3 million+ websites, YouTube, and Gmail. Build visual brand authority and capture early-stage searchers.",
    features: ["Custom Affinity Audiences", "Contextual Placements", "Responsive Display Creatives", "Frequency Capping"],
  },
  {
    icon: Crosshair,
    title: "Competitor Brand Conquesting",
    desc: "Strategically position your brand above competitors when prospects search for alternative solutions, capturing market share ethically.",
    features: ["Competitor Search Audits", "Value Proposition Positioning", "Alternative Offer Funnels", "Auction Insights Monitoring"],
  },
];

export default function SemCampaignsGridSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020B35] text-white py-20 sm:py-24 lg:py-28 font-['Poppins',sans-serif]">
      {/* Background Subtle Mesh and Radial Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(0, 217, 255, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 20% 70%, rgba(4, 120, 253, 0.14) 0%, transparent 45%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] text-xs sm:text-[13px] font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(0,217,255,0.15)]">
            <span>FULL-SPECTRUM PAID SEARCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            SEM Campaigns Engineered for{" "}
            <span className="text-[#00D9FF]">Maximum Scalability</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            From single-keyword ad groups to omnichannel Performance Max campaigns, we manage the complete lifecycle of your paid acquisition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {SEM_SERVICES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#030E38]/90 border border-white/[0.08] hover:border-[#00D9FF]/45 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(0,217,255,0.15)] transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 group-hover:bg-[#00D9FF]/20 group-hover:border-[#00D9FF] flex items-center justify-center text-[#00D9FF] mb-5 shadow-[0_0_15px_rgba(0,217,255,0.15)] transition-colors">
                    <Icon size={22} className="stroke-[2.2]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#00D9FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={13} className="text-[#00D9FF] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00D9FF] group-hover:text-white transition-colors"
                  >
                    <span>Request Campaign Audit</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
