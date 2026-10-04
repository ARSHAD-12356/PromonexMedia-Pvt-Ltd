"use client";

import React from "react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import IndustriesCarouselSection from "@/components/IndustriesCarouselSection";
import IndustryMattersSection from "@/components/IndustryMattersSection";
import IndustryFinderSection from "@/components/IndustryFinderSection";
import IndustryCreativeSection from "@/components/IndustryCreativeSection";
import IndustrySpecificMarketingSection from "@/components/IndustrySpecificMarketingSection";
import IndustryFAQSection from "@/components/IndustryFAQSection";
import IndustryCTASection from "@/components/IndustryCTASection";

export default function IndustriesPage() {
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
        {/* PRIMARY HERO: EXACT REFERENCE RECREATION */}
        <IndustriesCarouselSection />

        {/* INDUSTRY MATTERS STRATEGY SECTION */}
        <IndustryMattersSection />

        {/* INDUSTRY FINDER SECTION */}
        <IndustryFinderSection />

        {/* INDUSTRY CREATIVE STORYTELLING CAROUSEL */}
        <IndustryCreativeSection />

        {/* INDUSTRY-SPECIFIC DIGITAL MARKETING SECTION */}
        <IndustrySpecificMarketingSection />

        {/* INDUSTRIES WE SERVE FAQS SECTION */}
        <IndustryFAQSection />

        {/* INDUSTRY CTA SECTION */}
        <IndustryCTASection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Floating Elements */}
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
