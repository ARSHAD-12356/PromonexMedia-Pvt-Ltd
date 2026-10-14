"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import EmailMarketingHeroSection from "@/components/EmailMarketingHeroSection";
import EmailMarketingFeaturesSection from "@/components/EmailMarketingFeaturesSection";
import EmailMarketingEcommerceSection from "@/components/EmailMarketingEcommerceSection";
import EmailMarketingCampaignTypesSection from "@/components/EmailMarketingCampaignTypesSection";
import EmailMarketingOutboundSection from "@/components/EmailMarketingOutboundSection";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";

export default function EmailMarketingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <EmailMarketingHeroSection />
        <EmailMarketingFeaturesSection />
        <EmailMarketingEcommerceSection />
        <EmailMarketingCampaignTypesSection />
        <EmailMarketingOutboundSection />
        <ServiceReviewsSection />
        <ServiceContactSection topic="Email Marketing" teamLabel="email marketing experts" />
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
