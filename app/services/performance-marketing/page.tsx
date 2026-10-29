"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";
import PerformanceMarketingHeroSection from "@/components/PerformanceMarketingHeroSection";
import PerformanceMarketingStatsStrip from "@/components/PerformanceMarketingStatsStrip";
import PerformanceMarketingCampaignsSection from "@/components/PerformanceMarketingCampaignsSection";
import PerformanceMarketingPlatformsSection from "@/components/PerformanceMarketingPlatformsSection";
import PerformanceMarketingCtaStrip from "@/components/PerformanceMarketingCtaStrip";

export default function PerformanceMarketingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        {/* 1. Hero Section */}
        <PerformanceMarketingHeroSection />

        {/* 2. Stats Strip — just below hero */}
        <PerformanceMarketingStatsStrip />

        {/* 3. Campaign Types Section */}
        <PerformanceMarketingCampaignsSection />

        {/* 4. Platforms (3D cards) Section */}
        <PerformanceMarketingPlatformsSection />

        {/* 5. CTA Strip — just below platforms cards */}
        <PerformanceMarketingCtaStrip />

        {/* 6. Client Reviews */}
        <ServiceReviewsSection />

        {/* 7. Contact */}
        <ServiceContactSection
          topic="Performance Marketing"
          teamLabel="performance marketing experts"
          defaultService="Performance marketing"
        />
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
