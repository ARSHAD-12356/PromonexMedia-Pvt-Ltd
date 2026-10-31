"use client";

import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import SocialMediaRail from "@/components/SocialMediaRail";
import EcommerceMarketingHeroSection from "@/components/EcommerceMarketingHeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import EcommerceMarketingStatsStrip from "@/components/EcommerceMarketingStatsStrip";
import EcommerceGrowthSystemSection from "@/components/EcommerceGrowthSystemSection";
import EcommerceCustomerJourneySection from "@/components/EcommerceCustomerJourneySection";
import EcommerceMarketingServicesSection from "@/components/EcommerceMarketingServicesSection";
import EcommerceMarketingFeatureSections from "@/components/EcommerceMarketingFeatureSections";
import EcommerceGrowthEngineSection from "@/components/EcommerceGrowthEngineSection";
import EcommerceMarketingImageTextSection from "@/components/EcommerceMarketingImageTextSection";
import EcommerceAudienceSection from "@/components/EcommerceAudienceSection";
import EcommerceGrowthQuoteSection from "@/components/EcommerceGrowthQuoteSection";
import EcommerceFAQSection from "@/components/EcommerceFAQSection";
import EcommerceFinalCTASection from "@/components/EcommerceFinalCTASection";
import ServiceReviewsSection from "@/components/ServiceReviewsSection";
import ServiceContactSection from "@/components/ServiceContactSection";

export default function EcommerceMarketingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020B35] font-['Poppins',sans-serif] text-white selection:bg-[#00D9FF] selection:text-[#020B35]">
      <Header />
      <main className="relative z-10 flex-1">
        <EcommerceMarketingHeroSection />
        <ClientLogosSection showHeading={false} />
        <EcommerceMarketingStatsStrip />
        <EcommerceGrowthSystemSection />
        <EcommerceCustomerJourneySection />
        <EcommerceMarketingServicesSection />
        <EcommerceMarketingFeatureSections />
        <EcommerceGrowthEngineSection />
        <EcommerceMarketingImageTextSection
          eyebrow="Ecommerce SEO"
          title="Build product visibility that compounds over time."
          description="Paid advertising can support immediate discovery, while ecommerce SEO helps shoppers find relevant products, categories and collections through organic search."
          bullets={[
            "Product page optimisation",
            "Collection and category SEO",
            "Technical SEO recommendations",
            "Keyword and content strategy",
            "Internal linking",
            "Ecommerce schema guidance",
          ]}
          href="/services/seo"
          cta="Explore ecommerce SEO"
          image="/assets/seo-collaboration-puzzle.jpg"
          imageAlt="Two teammates connecting puzzle pieces to represent a coordinated ecommerce SEO strategy"
          imageNote="Organic product discovery"
        />
        <EcommerceAudienceSection />
        <EcommerceGrowthQuoteSection />
        <EcommerceMarketingImageTextSection
          eyebrow="Ecommerce marketing in Patna"
          title="A practical growth partner for online brands."
          description="Promonex Media helps ecommerce teams in Patna and across India plan marketing around their products, margins and customers."
          supportingDescription="Combine paid acquisition, ecommerce SEO, creative, conversion improvements and retention in a strategy built for your store."
          bullets={[
            "Shopify and WooCommerce marketing",
            "Meta and Google campaigns",
            "Product and category SEO",
            "Conversion and retention planning",
          ]}
          href="#contact-ecommerce-marketing"
          cta="Talk to our ecommerce team"
          image="/assets/industry-strategist.jpg"
          imageAlt="Marketing strategist planning an online growth campaign in an office"
          imageNote="Strategy for your store"
          imageFirst={false}
          surface="mist"
        />
        <EcommerceFAQSection />
        <EcommerceFinalCTASection />
        <ServiceReviewsSection />
        <div id="contact-ecommerce-marketing" className="scroll-mt-24">
          <ServiceContactSection
            topic="eCommerce Marketing"
            teamLabel="eCommerce growth specialists"
            description="Tell us about your products, target customers and sales goals. We’ll help you find practical opportunities across customer acquisition, conversion and repeat purchases."
            defaultService="Ecommerce marketing"
          />
        </div>
      </main>
      <FooterSection />
      <FloatingButtons />
      <SocialMediaRail />
    </div>
  );
}
