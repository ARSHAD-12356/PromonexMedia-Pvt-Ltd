"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import LandingPageDevelopmentHeroSection from "@/components/LandingPageDevelopmentHeroSection";
import LandingPageBannerSection from "@/components/LandingPageBannerSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import LandingPageTypesSection from "@/components/LandingPageTypesSection";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function LandingPageDevelopmentPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <LandingPageDevelopmentHeroSection />
        <LandingPageBannerSection />
        <ClientLogosSection showHeading={false} />
        <LandingPageTypesSection />
        <ServiceReviewsSection />
        <ServiceContactSection
          topic="Landing Page Development"
          teamLabel="landing page developers and conversion specialists"
          defaultService="Landing Page Development"
        />
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
