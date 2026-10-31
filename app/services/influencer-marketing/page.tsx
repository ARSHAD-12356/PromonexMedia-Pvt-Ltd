"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import InfluencerMarketingHeroSection from "@/components/InfluencerMarketingHeroSection";
import InfluencerCampaignProcessSection from "@/components/InfluencerCampaignProcessSection";
import InfluencerMarketingFAQSection from "@/components/InfluencerMarketingFAQSection";
import {
  InfluencerMarketingBenefitsSection,
  InfluencerMarketingBrandSection,
  InfluencerMarketingSolutionsSection,
} from "@/components/InfluencerMarketingSections";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";

export default function InfluencerMarketingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <InfluencerMarketingHeroSection />
        <InfluencerMarketingSolutionsSection />
        <InfluencerMarketingBrandSection />
        <InfluencerMarketingBenefitsSection />
        <InfluencerCampaignProcessSection />
        <InfluencerMarketingFAQSection />
        <ServiceReviewsSection />
        <div id="contact-influencer-marketing" className="scroll-mt-24">
          <ServiceContactSection
            topic="Influencer Marketing"
            teamLabel="creator partnership specialists"
            description="Tell us about your brand, audience and campaign goals. We’ll help you plan creator partnerships that feel relevant to your audience and fit your marketing objectives."
            defaultService="Influencer marketing"
          />
        </div>
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
