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
  ArrowRight,
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
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  image: string;
  badge: string;
  stats: { label: string; value: string }[];
  playbook: string[];
}

const ALL_INDUSTRIES: IndustryDetail[] = [
  {
    id: "real-estate",
    name: "Luxury Real Estate & Developers",
    tagline: "High-ticket property sales and verified investor leads.",
    description:
      "A luxury residential villa or premium commercial project requires a completely different narrative than mass-market products. We position developments with cinematic creative assets, target High Net Worth Individuals (HNIs) and NRIs, and deliver verified site visits instead of hollow inquiries.",
    icon: Building2,
    image: "/assets/industries/real_estate.jpg",
    badge: "HNI Lead Generation",
    stats: [
      { label: "Verified Site Visits", value: "1,200+" },
      { label: "Lead-to-Tour Ratio", value: "32%" },
      { label: "Avg Property Value Sold", value: "₹2.4 Cr+" },
    ],
    playbook: [
      "Cinematic 4K drone videography & 3D virtual walkthrough ads",
      "High Net Worth Individual (HNI) & NRI hyper-targeting",
      "Multi-step lead qualification forms to eliminate junk leads",
      "Instant sales rep connect within 90 seconds of form submission",
    ],
  },
  {
    id: "quick-commerce",
    name: "Quick Commerce & Instant Delivery",
    tagline: "Hyperlocal customer acquisition with lightning speed.",
    description:
      "For 10-15 minute grocery and essentials delivery apps, retention and density are everything. We deploy geofenced hyper-targeted ad campaigns, high-intent local search optimization, and automated retention loops that maximize dark-store throughput while bringing down Customer Acquisition Cost (CAC).",
    icon: Zap,
    image: "/assets/industries/quick_commerce.jpg",
    badge: "Hyperlocal Growth",
    stats: [
      { label: "CAC Reduction", value: "38%" },
      { label: "Avg App Installs / Mo", value: "45K+" },
      { label: "Repeat Order Rate", value: "+54%" },
    ],
    playbook: [
      "Micro-geofencing campaigns around dark stores (3 km radius)",
      "High-converting Apple Search Ads & Google UAC campaigns",
      "Dynamic in-app promotions synced with peak craving hours",
      "Automated WhatsApp & SMS reactivation funnels",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare, Hospitals & Clinics",
    tagline: "High-trust patient acquisition with medical compliance.",
    description:
      "Patients don't purchase healthcare impulsively—they seek credibility, empathy, and verified expertise. We build patient-first digital funnels that establish clinical authority, optimize localized appointment booking, and adhere strictly to medical advertising regulations.",
    icon: HeartPulse,
    image: "/assets/industries/healthcare.jpg",
    badge: "High-Trust Medical",
    stats: [
      { label: "Consultation Bookings", value: "+240%" },
      { label: "Cost Per Patient Lead", value: "-42%" },
      { label: "Local Map Pack Ranking", value: "Top 3" },
    ],
    playbook: [
      "Specialist doctor personal branding and video Q&As",
      "Local SEO dominance for high-intent clinical queries",
      "HIPAA/NABH compliant conversion tracking and CRM sync",
      "Automated appointment reminders and verified patient reviews",
    ],
  },
  {
    id: "education",
    name: "Higher Education & EdTech",
    tagline: "Scalable student enrollment for colleges and online academies.",
    description:
      "Education decisions involve multiple stakeholders—students seeking career breakthroughs and parents evaluating ROI. We orchestrate lifecycle campaigns that nurture prospective students from webinar registrations to verified campus admissions.",
    icon: GraduationCap,
    image: "/assets/industries/education.jpg",
    badge: "Enrollment Acceleration",
    stats: [
      { label: "Admissions Generated", value: "3,800+" },
      { label: "Cost Per Enrolled Student", value: "-35%" },
      { label: "Webinar Attendance Rate", value: "68%" },
    ],
    playbook: [
      "Full-funnel career roadmap lead magnets and salary benchmark calculators",
      "Student alumni success story ads with interactive video reels",
      "Automated counseling appointment scheduling systems",
      "Omnichannel retargeting across Instagram, YouTube, and Meta",
    ],
  },
  {
    id: "automotive",
    name: "Automotive & Dealerships",
    tagline: "Driving showroom footfalls, test drives, and vehicle bookings.",
    description:
      "Automotive consumers spend weeks researching models online before stepping into a dealership. We capture buyers at every stage of consideration with dynamic inventory campaigns, local showroom geotargeting, and frictionless test-drive booking funnels.",
    icon: CarFront,
    image: "/assets/industries/automotive.jpg",
    badge: "Dealership Footfall",
    stats: [
      { label: "Test Drive Bookings", value: "+185%" },
      { label: "Showroom Footfalls", value: "850+/mo" },
      { label: "Sales Closure Rate", value: "24%" },
    ],
    playbook: [
      "Hyperlocal radius targeting around competitor showrooms",
      "Instant WhatsApp test-drive booking integrations",
      "Dynamic catalog ads showing real-time dealership inventory",
      "After-sales service reminder campaigns for customer lifetime value",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce & D2C Brands",
    tagline: "Scaling ROAS and Customer Lifetime Value (LTV).",
    description:
      "D2C brands need sustainable unit economics, not just top-line GMV. We build end-to-end performance marketing ecosystems covering high-converting creative testing, Google Shopping dominance, and high-margin retention email/SMS marketing.",
    icon: ShoppingCart,
    image: "/assets/industries/real_estate.jpg",
    badge: "D2C Scaling",
    stats: [
      { label: "Average ROAS", value: "4.6x" },
      { label: "Revenue Scaled", value: "₹18 Cr+" },
      { label: "Repeat Purchase Rate", value: "+46%" },
    ],
    playbook: [
      "Weekly creative sprints with UGC and problem-solution video hooks",
      "Google Performance Max & Advantage+ shopping campaign scaling",
      "Cart abandonment and cross-sell automated Klaviyo/WhatsApp flows",
      "High-speed mobile checkout page conversion rate optimization (CRO)",
    ],
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
    <div className="relative min-h-screen bg-[#020B35] text-white overflow-hidden flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35]">
      {/* Background Gradients */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 75% 30%, rgba(0, 191, 255, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 20% 20%, rgba(91, 60, 196, 0.14) 0%, transparent 35%),
            radial-gradient(circle at 50% 80%, rgba(6, 20, 74, 0.45) 0%, transparent 60%)
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
      <main className="relative z-10 pt-24 sm:pt-28 pb-20">
        
        {/* ======================================================== */}
        {/* PRIMARY HERO: EXACT REFERENCE RECREATION                 */}
        {/* ======================================================== */}
        <IndustriesCarouselSection />

        <div id="industries-details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          
          {/* Interactive Industry Detail Showcase */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06144A]/80 border border-[#2563EB]/40 shadow-[0_0_20px_rgba(37,99,235,0.25)] mb-4">
                <Sparkles size={14} className="text-[#00D9FF]" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Custom Industry Playbooks
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Deep Dive Into Your Sector
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Click any industry to view our exact acquisition funnels, compliance guidelines, and proven benchmarks.
              </p>
            </div>

            {/* Industry Selector Tabs */}
            <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar">
              {ALL_INDUSTRIES.map((ind) => {
                const isActive = ind.id === selectedIndustry.id;
                const IconComponent = ind.icon;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0478FD] border-[#00D9FF] text-white shadow-[0_0_20px_rgba(4,120,253,0.5)] scale-[1.02]"
                        : "bg-[#06144A]/60 border-[#1E40AF]/40 text-slate-300 hover:text-white hover:border-slate-500"
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{ind.name.split("&")[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Industry Card */}
            <motion.div
              key={selectedIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] border border-[#2563EB]/40 bg-[#051347]/70 backdrop-blur-xl p-6 sm:p-10 shadow-[0_0_50px_rgba(0,102,255,0.15)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] text-xs font-semibold uppercase tracking-wider mb-4">
                      {selectedIndustry.badge}
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                      {selectedIndustry.name}
                    </h2>

                    <p className="text-lg text-[#38BDF8] font-medium mb-4">
                      {selectedIndustry.tagline}
                    </p>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                      {selectedIndustry.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-[#020B35]/70 border border-white/[0.08] mb-8">
                      {selectedIndustry.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#38BDF8]">
                            {stat.value}
                          </div>
                          <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Playbook Highlights */}
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                      <Target size={16} className="text-[#00D9FF]" />
                      Tailored Marketing Playbook
                    </h3>

                    <ul className="space-y-2.5 mb-8">
                      {selectedIndustry.playbook.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                          <CheckCircle2 size={16} className="text-[#00D9FF] shrink-0 mt-0.5" />
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
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#0478FD] px-6 py-3 text-sm font-semibold text-[#020B35] hover:text-white shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_30px_rgba(4,120,253,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <span>Scale My {selectedIndustry.name.split("&")[0].trim()} Brand</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-[#2563EB]/40 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                    <Image
                      src={selectedIndustry.image}
                      alt={selectedIndustry.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B35]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#020B35]/80 backdrop-blur-md border border-white/10">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#00D9FF]">
                        <TrendingUp size={14} />
                        Industry Benchmark
                      </div>
                      <div className="text-white text-sm font-medium mt-1">
                        Engineered for market leaders who demand measurable ROI.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* All Industries Grid Overview */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Complete Industry Coverage
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Explore our full suite of industry-specialized marketing capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_INDUSTRIES.map((industry) => {
                const IconComponent = industry.icon;
                return (
                  <div
                    key={industry.id}
                    className="group relative rounded-2xl border border-[#2563EB]/30 bg-[#06144A]/40 backdrop-blur-md p-6 hover:border-[#00D9FF]/60 hover:bg-[#06144A]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,102,255,0.2)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0055FF] to-[#00D9FF] flex items-center justify-center text-white mb-5 shadow-[0_0_15px_rgba(0,217,255,0.35)] group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={22} />
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-[#00D9FF] transition-colors duration-200 mb-2">
                        {industry.name}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
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
                      <span>View Custom Playbook</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="relative rounded-[32px] border border-[#2563EB]/60 bg-gradient-to-r from-[#041349] via-[#071F6A] to-[#020B35] p-8 sm:p-14 overflow-hidden text-center shadow-[0_0_50px_rgba(0,102,255,0.25)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D9FF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8257E8]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Dominate Your Industry?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
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
                  className="rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-base font-semibold text-white hover:bg-white/[0.12] transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
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
              className="relative w-full max-w-lg bg-[#06144A] border border-[#00D9FF]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,217,255,0.25)] z-10 text-white"
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
                  <p className="text-slate-300 mb-6">
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
