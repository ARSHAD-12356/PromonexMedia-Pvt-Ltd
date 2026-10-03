"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import IndustriesCarouselSection from "@/components/IndustriesCarouselSection";
import {
  Zap,
  HeartPulse,
  Building2,
  GraduationCap,
  CarFront,
  ShoppingCart,
  CheckCircle2,
  TrendingUp,
  Target,
  Sparkles,
  ChevronRight,
  X,
  CheckCircle,
} from "lucide-react";

interface IndustryDetail {
  id: string;
  tabLabel: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  image: string;
  stats: { label: string; value: string }[];
  sectionHeading: string;
  playbook: string[];
  ctaText: string;
}

const ALL_INDUSTRIES: IndustryDetail[] = [
  {
    id: "real-estate",
    tabLabel: "Real Estate",
    name: "Luxury Real Estate & Developers",
    badge: "REAL ESTATE MARKETING",
    tagline: "Generate high-quality property leads and turn digital traffic into site visits.",
    description:
      "We help real estate brands generate qualified buyer and investor leads through performance marketing, Meta Ads, Google Ads, SEO, and high-converting landing pages. Our campaigns are built to reach the right audience, increase enquiries, and drive more property visits.",
    icon: Building2,
    image: "/assets/industries/real_estate.jpg",
    stats: [
      { value: "1,200+", label: "Qualified Leads Generated" },
      { value: "32%", label: "Lead-to-Visit Growth" },
      { value: "₹2.4 Cr+", label: "Campaign-attributed Property Value" },
    ],
    sectionHeading: "REAL ESTATE MARKETING PLAYBOOK",
    playbook: [
      "Meta & Google Ads for high-intent property buyers",
      "HNI, NRI and location-based audience targeting",
      "SEO and local search optimization for property discovery",
      "High-converting landing pages and lead forms",
      "Lead nurturing and remarketing campaigns",
    ],
    ctaText: "Grow My Real Estate Business →",
  },
  {
    id: "quick-commerce",
    tabLabel: "Quick Commerce",
    name: "Quick Commerce & Delivery Brands",
    badge: "QUICK COMMERCE MARKETING",
    tagline: "Drive app installs, orders, repeat purchases, and local market growth.",
    description:
      "We help quick commerce brands acquire and retain customers through performance marketing, social media campaigns, Google Ads, Meta Ads, local targeting, and conversion-focused creative strategies. Every campaign is optimized for faster customer acquisition and higher order frequency.",
    icon: Zap,
    image: "/assets/industries/quick_commerce.jpg",
    stats: [
      { value: "3.5X", label: "Average ROAS" },
      { value: "48%", label: "Repeat Purchase Growth" },
      { value: "2.1X", label: "Customer Acquisition Scale" },
    ],
    sectionHeading: "QUICK COMMERCE MARKETING PLAYBOOK",
    playbook: [
      "Meta & Google Ads for app and order acquisition",
      "Hyperlocal campaign targeting by city and location",
      "Creative testing for offers, products and promotions",
      "Retargeting campaigns to increase repeat orders",
      "Conversion optimization for high-volume campaigns",
    ],
    ctaText: "Scale My Quick Commerce Brand →",
  },
  {
    id: "healthcare",
    tabLabel: "Healthcare",
    name: "Hospitals, Clinics & Healthcare Brands",
    badge: "HEALTHCARE MARKETING",
    tagline: "Reach the right patients and turn online searches into genuine enquiries.",
    description:
      "We build ethical and conversion-focused digital marketing strategies for hospitals, clinics, diagnostic centers, and healthcare brands. From Google Search and local SEO to social media and lead generation, we help healthcare businesses improve visibility and generate relevant patient enquiries.",
    icon: HeartPulse,
    image: "/assets/industries/healthcare.jpg",
    stats: [
      { value: "2.8X", label: "Lead Growth" },
      { value: "65%", label: "More Local Visibility" },
      { value: "40%+", label: "Enquiry Growth" },
    ],
    sectionHeading: "HEALTHCARE MARKETING PLAYBOOK",
    playbook: [
      "Google Ads for high-intent healthcare searches",
      "Local SEO and Google Business Profile optimization",
      "Social media marketing for trust and awareness",
      "Landing pages designed for patient enquiries",
      "Remarketing and audience-focused campaigns",
    ],
    ctaText: "Grow My Healthcare Brand →",
  },
  {
    id: "education",
    tabLabel: "Education",
    name: "Schools, Colleges & EdTech Brands",
    badge: "EDUCATION MARKETING",
    tagline: "Generate qualified student enquiries and build a stronger digital presence.",
    description:
      "We help educational institutions and EdTech brands attract students through performance marketing, SEO, social media, Google Ads, Meta Ads, and conversion-focused admission campaigns. Our strategies connect educational brands with students actively looking for the right course or institution.",
    icon: GraduationCap,
    image: "/assets/industries/education.jpg",
    stats: [
      { value: "4.2X", label: "Average Campaign ROAS" },
      { value: "58%", label: "More Qualified Enquiries" },
      { value: "2.6X", label: "Admission Lead Growth" },
    ],
    sectionHeading: "EDUCATION MARKETING PLAYBOOK",
    playbook: [
      "Google & Meta Ads for course and admission campaigns",
      "Student and parent audience targeting",
      "SEO for courses, colleges and educational searches",
      "Lead-generation landing pages and enquiry forms",
      "Remarketing campaigns for admission conversions",
    ],
    ctaText: "Grow My Education Brand →",
  },
  {
    id: "automotive",
    tabLabel: "Automotive",
    name: "Automotive Brands & Dealerships",
    badge: "AUTOMOTIVE MARKETING",
    tagline: "Generate test-drive leads, enquiries, bookings, and showroom visits.",
    description:
      "We help automotive brands and dealerships attract high-intent customers through Google Ads, Meta Ads, local SEO, social media marketing, and performance-driven campaigns. Our strategies are designed to increase vehicle enquiries, test drives, bookings, and showroom traffic.",
    icon: CarFront,
    image: "/assets/industries/automotive.jpg",
    stats: [
      { value: "3.1X", label: "Average ROAS" },
      { value: "52%", label: "More Qualified Leads" },
      { value: "38%", label: "Test-Drive Growth" },
    ],
    sectionHeading: "AUTOMOTIVE MARKETING PLAYBOOK",
    playbook: [
      "Google Ads for high-intent vehicle searches",
      "Meta Ads for model, offer and test-drive campaigns",
      "Local SEO for dealership visibility",
      "Lead generation campaigns for bookings and enquiries",
      "Remarketing to convert interested buyers",
    ],
    ctaText: "Grow My Automotive Business →",
  },
  {
    id: "ecommerce",
    tabLabel: "E-Commerce",
    name: "E-Commerce & D2C Brands",
    badge: "E-COMMERCE MARKETING",
    tagline: "Turn digital traffic into more purchases, repeat customers, and revenue.",
    description:
      "We help e-commerce and D2C brands grow online revenue through Meta Ads, Google Shopping, SEO, social media marketing, conversion optimization, and remarketing. Our performance-driven approach focuses on customer acquisition, ROAS, conversion rate, and repeat purchases.",
    icon: ShoppingCart,
    image: "/assets/industries/real_estate.jpg",
    stats: [
      { value: "4.5X", label: "Average ROAS" },
      { value: "62%", label: "Conversion Growth" },
      { value: "2.8X", label: "Revenue Scale" },
    ],
    sectionHeading: "E-COMMERCE MARKETING PLAYBOOK",
    playbook: [
      "Meta & Google Shopping Ads for product sales",
      "Performance creatives and continuous A/B testing",
      "SEO for products and high-intent searches",
      "Retargeting campaigns for abandoned visitors",
      "Conversion optimization to increase online revenue",
    ],
    ctaText: "Scale My E-Commerce Brand →",
  },
];

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryDetail>(ALL_INDUSTRIES[0]); // Real estate initial
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#020B35] text-white overflow-hidden flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35] font-['Poppins',sans-serif]">
      {/* Background Gradients for Top Hero */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 75% 20%, rgba(0, 191, 255, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 20% 15%, rgba(91, 60, 196, 0.14) 0%, transparent 35%)
          `,
        }}
      />

      {/* Subtle fine mesh grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 pt-0">
        
        {/* ======================================================== */}
        {/* PRIMARY HERO: EXACT REFERENCE RECREATION                 */}
        {/* ======================================================== */}
        <IndustriesCarouselSection />

        {/* ======================================================== */}
        {/* 3RD SECTION: WHITE BACKGROUND (Deep Dive & Coverage)     */}
        {/* ======================================================== */}
        <section id="industries-details" className="relative w-full bg-white text-slate-900 min-h-screen flex flex-col justify-center py-6 sm:py-8 lg:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            {/* Section Header: Styled like 'Meet our Founders' without the small pill */}
            <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#020B35] tracking-tight leading-tight whitespace-nowrap font-['Poppins',sans-serif]">
                Deep Dive Into Your{" "}
                <span className="bg-gradient-to-r from-[#d62ce3] via-[#8b42f6] to-[#187df4] bg-clip-text text-transparent">
                  Sector
                </span>
              </h2>
              {/* Gradient rule bar matching FoundersSection */}
              <span className="block w-20 sm:w-24 h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-[#d62ce3] to-[#187df4] mx-auto mt-2 sm:mt-2.5" />
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Click any industry to view our exact acquisition funnels, compliance guidelines, and proven benchmarks.
              </p>
            </div>

            {/* Industry Selector Tabs */}
            <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 mb-6 sm:mb-7 no-scrollbar">
              {ALL_INDUSTRIES.map((ind) => {
                const isActive = ind.id === selectedIndustry.id;
                const IconComponent = ind.icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`shrink-0 flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0478FD] border-[#0478FD] text-white shadow-[0_4px_16px_rgba(4,120,253,0.35)] scale-[1.02]"
                        : "bg-white border-slate-200 text-slate-700 hover:text-[#0478FD] hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <IconComponent size={15} />
                    <span>{ind.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Industry Card (Fitted to 1 Viewport) */}
            <motion.div
              key={selectedIndustry.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-[26px] border border-[#2563EB]/40 bg-[#051347] p-5 sm:p-7 lg:p-8 shadow-[0_16px_40px_rgba(2,11,53,0.18)] text-white"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#00D9FF]/15 border border-[#00D9FF]/30 text-[#00D9FF] text-[11px] font-semibold uppercase tracking-wider mb-2.5">
                      {selectedIndustry.badge}
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white mb-1.5 leading-snug">
                      {selectedIndustry.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#38BDF8] font-medium mb-2.5 leading-snug">
                      {selectedIndustry.tagline}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-4 font-light">
                      {selectedIndustry.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-[#020B35]/80 border border-white/[0.08] mb-4">
                      {selectedIndustry.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-base sm:text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#38BDF8]">
                            {stat.value}
                          </div>
                          <div className="text-[10.5px] text-slate-400 mt-0.5 font-medium leading-tight">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Playbook Highlights */}
                    <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                      <Target size={14} className="text-[#00D9FF]" />
                      {selectedIndustry.sectionHeading}
                    </h4>

                    <ul className="space-y-1.5 mb-5">
                      {selectedIndustry.playbook.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11.5px] sm:text-xs text-slate-200">
                          <CheckCircle2 size={14} className="text-[#00D9FF] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#0478FD] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#020B35] hover:text-white shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_30px_rgba(4,120,253,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <span>{selectedIndustry.ctaText}</span>
                    </button>
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[16/11] max-h-[340px] rounded-[20px] overflow-hidden border border-[#2563EB]/40 shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
                    <Image
                      src={selectedIndustry.image}
                      alt={selectedIndustry.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B35]/85 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#020B35]/85 backdrop-blur-md border border-white/10">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#00D9FF]">
                        <TrendingUp size={13} />
                        Industry Benchmark
                      </div>
                      <div className="text-white text-xs font-medium mt-0.5">
                        Engineered for market leaders who demand measurable ROI.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* COMPLETE INDUSTRY COVERAGE: DARK BLUE BG (#020B35)       */}
        {/* ======================================================== */}
        <section className="relative w-full bg-[#020B35] text-white pt-2 sm:pt-3 pb-6 sm:pb-8 overflow-hidden border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center max-w-4xl mx-auto mb-3 sm:mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight whitespace-nowrap font-['Poppins',sans-serif]">
                Complete Industry{" "}
                <span className="bg-gradient-to-r from-[#d62ce3] via-[#8b42f6] to-[#187df4] bg-clip-text text-transparent">
                  Coverage
                </span>
              </h2>
              <span className="block w-20 sm:w-24 h-1 sm:h-1.5 mx-auto mt-1 sm:mt-1.5 rounded-full bg-gradient-to-r from-[#d62ce3] to-[#187df4]" />
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl mx-auto font-light">
                Explore our full suite of industry-specialized marketing capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
              {ALL_INDUSTRIES.map((industry) => {
                const IconComponent = industry.icon;
                return (
                  <div
                    key={industry.id}
                    className="group relative rounded-2xl border border-[#2563EB]/30 bg-[#06144A]/60 backdrop-blur-md p-4 sm:p-5 hover:border-[#00D9FF] hover:bg-[#06144A]/90 hover:shadow-[0_12px_30px_rgba(0,180,255,0.22)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0055FF] to-[#00D9FF] flex items-center justify-center text-white mb-2.5 shadow-[0_4px_16px_rgba(0,120,255,0.35)] group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={18} />
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors duration-200 mb-1.5">
                        {industry.name}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-[13px] line-clamp-2 leading-relaxed mb-3 font-light">
                        {industry.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedIndustry(industry);
                        const el = document.getElementById("industries-details");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D9FF] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{industry.ctaText}</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4TH SECTION: WHITE BACKGROUND (Card Blue as it is)       */}
        {/* ======================================================== */}
        <section className="relative w-full bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Card inside keeps its rich blue gradient and styling as it is */}
            <div className="relative rounded-[32px] border border-[#2563EB]/60 bg-gradient-to-r from-[#041349] via-[#071F6A] to-[#020B35] p-8 sm:p-14 overflow-hidden text-center shadow-[0_20px_50px_rgba(4,19,73,0.2)]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D9FF]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8257E8]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                  Ready to Dominate Your Industry?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                  Speak directly with our senior industry strategists to uncover hidden growth bottlenecks
                  and build an acquisition engine engineered for your market.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setModalOpen(true);
                    }}
                    className="rounded-full bg-gradient-to-r from-[#00D9FF] via-[#0478FD] to-[#BB20E9] px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_30px_rgba(0,217,255,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    Book Free Industry Growth Audit
                  </button>

                  <Link
                    href="/#contact"
                    className="rounded-full border border-white/20 bg-white/[0.08] px-7 py-3.5 text-base font-semibold text-white hover:bg-white/[0.16] transition-colors"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <FooterSection />

      {/* Floating Elements */}
      <FloatingButtons />
      <SocialMediaRail />

      {/* Growth Audit Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-[#020B35]/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#06144A] border border-[#00D9FF]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,217,255,0.25)] z-10 text-white font-['Poppins',sans-serif]"
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-[#00D9FF] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Audit Request Received!</h3>
                  <p className="text-slate-300 mb-6 text-sm">
                    Our lead strategist will analyze your website and prepare a custom industry
                    growth plan within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#00D9FF] text-[#020B35] font-semibold hover:bg-white transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold tracking-wider text-[#00D9FF] uppercase">
                      Free Consultation
                    </span>
                    <h3 className="text-2xl font-bold mt-1">Get Your Industry Growth Audit</h3>
                    <p className="text-slate-300 text-sm mt-1">
                      No commitment required. Receive actionable vertical insights.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#020B35] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#020B35] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Industry / Business Vertical
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#020B35] border border-white/10 text-white focus:outline-none focus:border-[#00D9FF] text-sm"
                        defaultValue={selectedIndustry.name}
                      >
                        {ALL_INDUSTRIES.map((ind) => (
                          <option key={ind.id} value={ind.name} className="bg-[#020B35]">
                            {ind.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Website or Brand Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="https://yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#020B35] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#00D9FF] via-[#0478FD] to-[#BB20E9] text-white font-semibold text-sm shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_30px_rgba(4,120,253,0.6)] transition-all cursor-pointer"
                    >
                      Submit Audit Request
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
