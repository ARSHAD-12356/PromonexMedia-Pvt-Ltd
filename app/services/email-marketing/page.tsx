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
        <div id="email-marketing-contact" className="scroll-mt-20">
          <ServiceContactSection
            topic="Email Marketing"
            role="Specialist"
            teamLabel="email marketing specialists"
            description="Looking to nurture leads, recover abandoned carts, or turn one-time buyers into repeat customers? Our email marketing specialists can help shape campaigns around your audience and business goals."
            defaultService="Email Marketing"
          />
        </div>
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
