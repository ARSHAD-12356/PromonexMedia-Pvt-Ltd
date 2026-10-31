"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import SocialMediaHeroSection from "@/components/SocialMediaHeroSection";
import SocialMediaBlogSection from "@/components/SocialMediaBlogSection";
import {
  SocialMediaBenefitsSection,
  SocialMediaGrowthCtaSection,
  SocialMediaIntroSection,
} from "@/components/SocialMediaGrowthSections";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";

export default function SocialMediaPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <SocialMediaHeroSection />
        <SocialMediaIntroSection />
        <SocialMediaBenefitsSection />
        <SocialMediaGrowthCtaSection />
        <ServiceReviewsSection />
        <SocialMediaBlogSection />
        <div id="contact-social-media" className="scroll-mt-24">
          <ServiceContactSection
            topic="Social Media Marketing"
            teamLabel="social media specialists"
            description="Tell us about your business, audience and social media goals. We’ll help you plan a practical approach to content, community and campaign support."
            defaultService="Social media marketing"
          />
        </div>
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
