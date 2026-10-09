"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Megaphone,
  TrendingUp,
  Layers,
  ShoppingCart,
  Target,
  ShoppingBag,
  Search,
  Bot,
  Wrench,
  ClipboardCheck,
  MapPin,
  Globe,
  Store,
  Tag,
  Users,
  Sparkles,
  Mail,
  MessageSquare,
  Code2,
  Laptop,
  Layout,
  PenTool,
  Blocks,
  SlidersHorizontal,
  Palette,
  Award,
  FileText,
  Camera,
  Newspaper,
  Binary,
  BarChart3,
  ArrowRight,
} from "lucide-react";

interface ServiceCardData {
  number: string;
  title: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  cta: string;
  href: string;
  isPrimary?: boolean;
}

const SERVICES_DATA: ServiceCardData[] = [
  {
    number: "01",
    title: "Performance Marketing",
    icon: Megaphone,
    description:
      "Target the right people for your brand / Harness full potential of Paid Ads & encourage your audience to convert.",
    highlights: [
      "Paid Advertising Strategy",
      "Lead Generation Campaigns",
      "Ecommerce Performance Marketing",
      "Conversion & ROAS Optimisation",
    ],
    cta: "Explore Performance Marketing",
    href: "/#contact",
    isPrimary: true,
  },
  {
    number: "02",
    title: "Google Ads",
    icon: TrendingUp,
    description:
      "Reach customers when they are actively searching for your products or services with strategically managed Google Ads campaigns.",
    highlights: [
      "Google Search Ads",
      "Performance Max Campaigns",
      "Google Shopping Ads",
      "PPC Lead Generation",
    ],
    cta: "Explore Google Ads",
    href: "/#contact",
  },
  {
    number: "03",
    title: "Meta Ads",
    icon: Layers,
    description:
      "Build demand and turn attention into enquiries and sales through conversion-focused Facebook and Instagram advertising.",
    highlights: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation Campaigns",
      "Retargeting & Audience Testing",
    ],
    cta: "Explore Meta Ads",
    href: "/#contact",
  },
  {
    number: "04",
    title: "Amazon Ads",
    icon: ShoppingCart,
    description:
      "Put your products in front of high-intent Amazon shoppers with structured PPC campaigns designed to improve visibility and sales.",
    highlights: [
      "Sponsored Product Ads",
      "Sponsored Brand Ads",
      "Sponsored Display Ads",
      "Amazon PPC Optimisation",
    ],
    cta: "Explore Amazon Ads",
    href: "/#contact",
  },
  {
    number: "05",
    title: "Lead Generation",
    icon: Target,
    description:
      "Generate qualified business leads through targeted campaigns, conversion-focused landing pages and measurable acquisition strategies.",
    highlights: [
      "Google Ads Lead Generation",
      "Meta Lead Generation",
      "Landing Page Funnels",
      "Call & WhatsApp Leads",
    ],
    cta: "Explore Lead Generation",
    href: "/#contact",
  },
  {
    number: "06",
    title: "Ecommerce Marketing",
    icon: ShoppingBag,
    description:
      "Ecommerce marketing services connecting customer acquisition, paid media, SEO, conversion optimisation and retention.",
    highlights: [
      "Ecommerce Performance Marketing",
      "Google Shopping & Meta Ads",
      "Ecommerce SEO",
      "Retention & Remarketing",
    ],
    cta: "Explore Ecommerce Marketing",
    href: "/#contact",
  },
  {
    number: "07",
    title: "SEO Services",
    icon: Search,
    description:
      "Increase the quality of your website / Increase ROI With Top Rated SEO Company / Drive organic success & results with our SEO strategies.",
    highlights: [
      "On-Page SEO",
      "Technical SEO",
      "Content & Keyword Strategy",
      "Authority & Off-Page SEO",
    ],
    cta: "Explore SEO Services",
    href: "/#contact",
  },
  {
    number: "08",
    title: "AI SEO / GEO",
    icon: Bot,
    description:
      "Improve brand visibility across traditional search, AI-powered discovery and generative search experiences.",
    highlights: [
      "Generative Engine Optimization",
      "AI Search Visibility",
      "Entity & Brand Clarity",
      "Answer-Ready Content",
    ],
    cta: "Explore AI SEO / GEO",
    href: "/#contact",
  },
  {
    number: "09",
    title: "Technical SEO",
    icon: Wrench,
    description:
      "Identify and fix technical SEO issues that may prevent search engines from crawling, understanding and indexing your website correctly.",
    highlights: [
      "Crawlability & Indexation",
      "Core Web Vitals",
      "Website Architecture",
      "Schema & Technical Audits",
    ],
    cta: "Explore Technical SEO",
    href: "/#contact",
  },
  {
    number: "10",
    title: "SEO Audit",
    icon: ClipboardCheck,
    description:
      "Find technical, content, on-page and authority issues that may be limiting your website's organic search performance.",
    highlights: [
      "Technical SEO Audit",
      "On-Page SEO Review",
      "Content Gap Analysis",
      "SEO Opportunity Mapping",
    ],
    cta: "Explore SEO Audit",
    href: "/#contact",
  },
  {
    number: "11",
    title: "Local SEO",
    icon: MapPin,
    description:
      "Improve visibility for location-based searches and connect with customers looking for businesses and services in your target area.",
    highlights: [
      "Google Business Profile",
      "Local Keyword Strategy",
      "Local Landing Pages",
      "Maps & Local Search Visibility",
    ],
    cta: "Explore Local SEO",
    href: "/#contact",
  },
  {
    number: "12",
    title: "International SEO",
    icon: Globe,
    description:
      "Build organic visibility across multiple countries, languages and international search markets.",
    highlights: [
      "International Keyword Research",
      "Hreflang Strategy",
      "Market-Specific SEO",
      "Global Website Architecture",
    ],
    cta: "Explore International SEO",
    href: "/#contact",
  },
  {
    number: "13",
    title: "Ecommerce SEO",
    icon: Store,
    description:
      "Improve organic visibility for product pages, categories, collections and commercial search terms.",
    highlights: [
      "Product Page SEO",
      "Category & Collection SEO",
      "Technical Ecommerce SEO",
      "Ecommerce Content Strategy",
    ],
    cta: "Explore Ecommerce SEO",
    href: "/#contact",
  },
  {
    number: "14",
    title: "Shopify SEO",
    icon: Tag,
    description:
      "Improve Shopify product visibility, collection rankings and organic traffic through structured ecommerce SEO.",
    highlights: [
      "Shopify Product SEO",
      "Collection Page SEO",
      "Technical Shopify SEO",
      "Content & Internal Linking",
    ],
    cta: "Explore Shopify SEO",
    href: "/#contact",
  },
  {
    number: "15",
    title: "Social Media Marketing",
    icon: Users,
    description:
      "Build your brand image, connect with your audience & increase sales / Reach your audience at the right time & with the correct message.",
    highlights: [
      "Social Media Strategy",
      "Instagram Marketing",
      "Facebook Marketing",
      "Content & Community Management",
    ],
    cta: "Explore Social Media",
    href: "/#contact",
  },
  {
    number: "16",
    title: "Influencer Marketing",
    icon: Sparkles,
    description:
      "These influencers promote products or brands to their engaged audiences, leveraging their credibility and reach to boost awareness and drive sales.",
    highlights: [
      "Instagram Influencers",
      "YouTube Influencers",
      "Micro Influencer Campaigns",
      "UGC & Creator Content",
    ],
    cta: "Explore Influencer Marketing",
    href: "/#contact",
  },
  {
    number: "17",
    title: "Email Marketing",
    icon: Mail,
    description:
      "Email marketing is a targeted and effective digital strategy that involves sending messages and promotional content to a group of subscribers via email.",
    highlights: [
      "Email Campaign Strategy",
      "Automated Email Journeys",
      "Abandoned Cart Recovery",
      "Customer Retention Campaigns",
    ],
    cta: "Explore Email Marketing",
    href: "/#contact",
  },
  {
    number: "18",
    title: "WhatsApp Marketing",
    icon: MessageSquare,
    description:
      "Turn WhatsApp into a customer communication, lead nurturing, sales and retention channel.",
    highlights: [
      "WhatsApp Campaigns",
      "Abandoned Cart Recovery",
      "Lead Nurturing",
      "Customer Journey Automation",
    ],
    cta: "Explore WhatsApp Marketing",
    href: "/#contact",
  },
  {
    number: "19",
    title: "Website Development",
    icon: Code2,
    description:
      "Portray your brand aesthetics on the web / Design and create your brand’s presence on the internet.",
    highlights: [
      "Responsive Website Development",
      "WordPress Websites",
      "Business Websites",
      "Conversion-Focused Web Design",
    ],
    cta: "Explore Website Development",
    href: "/#contact",
  },
  {
    number: "20",
    title: "Shopify Website Development",
    icon: Laptop,
    description:
      "Creative, fast and future-ready Shopify websites for brands that want an online store built around customer experience and sales.",
    highlights: [
      "Shopify Store Design",
      "Custom Shopify Development",
      "Mobile Ecommerce UX",
      "Conversion-Focused Store Design",
    ],
    cta: "Explore Shopify Web Dev",
    href: "/#contact",
  },
  {
    number: "21",
    title: "Landing Page Development",
    icon: Layout,
    description:
      "Conversion-focused landing pages designed to turn advertising traffic into enquiries, calls, leads and sales.",
    highlights: [
      "Lead Generation Landing Pages",
      "Google Ads Landing Pages",
      "Meta Ads Landing Pages",
      "Mobile Conversion Design",
    ],
    cta: "Explore Landing Pages",
    href: "/#contact",
  },
  {
    number: "22",
    title: "UX/UI Design",
    icon: PenTool,
    description:
      "UX/UI design blends user experience and visual appeal, resulting in intuitive and attractive digital products.",
    highlights: [
      "User Experience Design",
      "User Interface Design",
      "Mobile-First Experiences",
      "Conversion-Focused UX",
    ],
    cta: "Explore UX/UI Design",
    href: "/#contact",
  },
  {
    number: "23",
    title: "WordPress Plugin Development",
    icon: Blocks,
    description:
      "Custom WordPress plugin development for businesses that need functionality beyond standard off-the-shelf plugins.",
    highlights: [
      "Custom WordPress Plugins",
      "WooCommerce Plugin Development",
      "API & Third-Party Integrations",
      "Plugin Customisation & Automation",
    ],
    cta: "Explore Plugin Dev",
    href: "/#contact",
  },
  {
    number: "24",
    title: "CRO",
    icon: SlidersHorizontal,
    description:
      "CRO involves analyzing user behavior, testing different elements like design, copy, and layout, and making data-driven adjustments to improve the likelihood of conversions.",
    highlights: [
      "Conversion Rate Optimization",
      "User Behaviour Analysis",
      "A/B Testing",
      "Website Conversion Improvements",
    ],
    cta: "Explore CRO",
    href: "/#contact",
  },
  {
    number: "25",
    title: "Graphic Design",
    icon: Palette,
    description:
      "Visually communicate your brand with your audience. Innovating and creating graphics, logos, websites and beyond.",
    highlights: [
      "Social Media Designs",
      "Brand & Logo Design",
      "Marketing Collateral",
      "Packaging & Catalogue Design",
    ],
    cta: "Explore Graphic Design",
    href: "/#contact",
  },
  {
    number: "26",
    title: "Branding/Awareness",
    icon: Award,
    description:
      "Branding and awareness are two critical components of a successful business or organization’s marketing strategy.",
    highlights: [
      "Brand Positioning",
      "Visual Identity",
      "Brand Communication",
      "Awareness Campaigns",
    ],
    cta: "Explore Branding",
    href: "/#contact",
  },
  {
    number: "27",
    title: "Content Writing",
    icon: FileText,
    description:
      "Content writing involves crafting engaging and informative text for various mediums such as websites, blogs, social media, and more.",
    highlights: [
      "SEO Content Writing",
      "Website Content",
      "Blog & Article Writing",
      "Brand & Social Content",
    ],
    cta: "Explore Content Writing",
    href: "/#contact",
  },
  {
    number: "28",
    title: "Photo/Reels/Videos",
    icon: Camera,
    description:
      "Capturing high-quality images for branding, creating engaging short videos for social media impact, and producing diverse video content for effective communication.",
    highlights: [
      "Product Photography",
      "Instagram Reels",
      "Short-Form Video",
      "Brand & Campaign Content",
    ],
    cta: "Explore Photo/Video",
    href: "/#contact",
  },
  {
    number: "29",
    title: "Public Relations (PR)",
    icon: Newspaper,
    description:
      "Public Relations (PR) is a strategic communication approach that shapes and maintains a positive reputation for individuals, organizations, or brands.",
    highlights: [
      "Media Relations",
      "Press Release Strategy",
      "Brand Reputation",
      "PR Communication",
    ],
    cta: "Explore PR",
    href: "/#contact",
  },
  {
    number: "30",
    title: "GTM Integration",
    icon: Binary,
    description:
      "GTM streamlines the management of tracking codes, scripts, and tags, simplifying the process of gathering valuable data and insights.",
    highlights: [
      "Google Tag Manager Setup",
      "Conversion Tracking",
      "Marketing Tag Deployment",
      "Event Tracking",
    ],
    cta: "Explore GTM Integration",
    href: "/#contact",
  },
  {
    number: "31",
    title: "Google Analytics Audit",
    icon: BarChart3,
    description:
      "Through a Google Analytics audit, businesses can identify potential issues, optimize tracking configurations, and ensure that the analytics data provides accurate insights.",
    highlights: [
      "GA4 Tracking Audit",
      "Conversion Measurement",
      "Event Configuration",
      "Analytics Data Quality",
    ],
    cta: "Explore Analytics Audit",
    href: "/#contact",
  },
];

export default function ServicesListSection() {
  return (
    <section className="relative w-full bg-white text-[#020B35] pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 font-['Poppins',sans-serif] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SERVICES CARD GRID (3x3 on Desktop, 2x on Tab, 1x on Mob) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                  ease: "easeOut",
                }}
                className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-[22px] bg-gradient-to-b from-[#071A4A] to-[#020B35] p-6 sm:p-7 xl:p-8 border border-[#00D9FF]/20 hover:border-[#00D9FF]/70 shadow-[0_12px_32px_rgba(2,11,53,0.18)] hover:shadow-[0_20px_45px_rgba(0,217,255,0.2)] hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden ${
                  index === SERVICES_DATA.length - 1
                    ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full lg:max-w-none lg:w-full lg:col-span-1 lg:col-start-2"
                    : ""
                }`}
              >
                {/* Subtle Radial Glow on Card Hover */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-44 h-44 bg-[#00D9FF]/10 rounded-full blur-2xl group-hover:bg-[#00D9FF]/20 transition-all duration-300" />
                {service.isPrimary && (
                  <div className="pointer-events-none absolute -bottom-16 -left-16 w-40 h-40 bg-[#8B5CF6]/15 rounded-full blur-2xl" />
                )}

                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Glowing Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/35 flex items-center justify-center text-[#00D9FF] shadow-[0_0_16px_rgba(0,217,255,0.2)] group-hover:scale-108 group-hover:bg-[#00D9FF]/20 group-hover:border-[#00D9FF] group-hover:shadow-[0_0_24px_rgba(0,217,255,0.45)] group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon size={22} className="stroke-[2.2]" />
                    </div>

                    {/* Service Number */}
                    <span className="text-xs sm:text-sm font-extrabold text-slate-400/80 tracking-widest uppercase select-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight mb-2.5 group-hover:text-[#00D9FF] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-[13.5px] sm:text-sm leading-relaxed font-normal mb-5 min-h-[58px]">
                    {service.description}
                  </p>

                  {/* Thin Divider Line */}
                  <div className="h-[1px] w-full bg-white/[0.08] group-hover:bg-[#00D9FF]/25 transition-colors duration-300 mb-5" />

                  {/* 3-4 Service Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-slate-300 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] shrink-0 shadow-[0_0_8px_#00D9FF]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-2">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-white/[0.05] group/btn cursor-pointer"
                  >
                    <span className="text-[13.5px] sm:text-sm font-semibold text-white group-hover:text-[#00D9FF] transition-colors duration-200">
                      {service.cta}
                    </span>

                    <div className="w-9 h-9 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF] group-hover:bg-[#00D9FF] group-hover:text-[#020B35] group-hover:shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all duration-300 shrink-0">
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
