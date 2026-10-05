"use client";

import React from "react";
import Header from "@/components/Header";
import AboutHeroSection from "@/components/AboutHeroSection";
import CoFounderSection from "@/components/CoFounderSection";
import AboutStatsSection from "@/components/AboutStatsSection";
import OurStorySection from "@/components/OurStorySection";
import AboutClientsSection from "@/components/AboutClientsSection";
import FounderProfileSection from "@/components/FounderProfileSection";
import AboutCaseStudiesSection from "@/components/AboutCaseStudiesSection";
import AboutCtaBannerSection from "@/components/AboutCtaBannerSection";
import AboutConsultantFormSection from "@/components/AboutConsultantFormSection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#020B35] text-white overflow-hidden flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35] font-['Poppins',sans-serif]">
      {/* Background Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 75% 20%, rgba(0, 191, 255, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 20% 15%, rgba(91, 60, 196, 0.14) 0%, transparent 35%)
          `,
        }}
      />

      {/* Header - Existing Promonex Header */}
      <Header />

      {/* Main Content: About Hero + Nancy Shekhar Co-Founder + Milestones & Stats + Our Story + Client Logos + Founder Profile + Featured Case Studies + CTA Banner + Consultant Form */}
      <main className="relative z-10 flex-1 flex flex-col">
        <AboutHeroSection />
        <CoFounderSection />
        <AboutStatsSection />
        <OurStorySection />
        <AboutClientsSection />
        <FounderProfileSection />
        <AboutCaseStudiesSection />
        <AboutCtaBannerSection />
        <AboutConsultantFormSection />
      </main>

      {/* Footer Section */}
      <FooterSection />

      {/* Floating Elements */}
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
