"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, TrendingUp, Search, Target } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "local-seo-patna-growth",
    title: "How Local SEO Helped a Patna Business Rank #1 on Google in 90 Days",
    excerpt:
      "Discover how optimizing local citations, Google Business Profiles, and geo-targeted keywords drove a 280% surge in qualified walk-ins and phone inquiries.",
    category: "Local SEO",
    readTime: "5 min read",
    date: "Oct 2026",
    icon: Search,
    accentColor: "#00D9FF",
  },
  {
    id: "meta-ads-vs-google-ads-roi",
    title: "Meta Ads vs Google Ads: Which Strategy Generates Higher ROI in Bihar?",
    excerpt:
      "A deep dive into cost-per-click, buyer intent, and conversion velocity across Meta vs Google Search campaigns for scaling retail and service brands.",
    category: "Paid Advertising",
    readTime: "6 min read",
    date: "Sept 2026",
    icon: Target,
    accentColor: "#E93A94",
  },
  {
    id: "high-ticket-lead-gen-whatsapp",
    title: "High-Ticket Lead Gen: Turning Social Media Followers into Paying Clients",
    excerpt:
      "The exact multi-touch funnel architecture and automated WhatsApp nurturing flows that consistently convert traffic into high-value sales.",
    category: "Conversion Funnels",
    readTime: "4 min read",
    date: "Aug 2026",
    icon: TrendingUp,
    accentColor: "#8257E8",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020B35]"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 75% 30%, rgba(0, 217, 255, 0.09) 0%, transparent 45%),
            radial-gradient(circle at 25% 75%, rgba(130, 87, 232, 0.09) 0%, transparent 45%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00D9FF]">
            MARKETING INSIGHTS
          </span>
          <h2
            id="blog-heading"
            className="mt-3 font-poppins text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Latest From Our <span className="text-[#00D9FF]">Blog</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Practical strategies, data-backed case studies, and actionable marketing blueprints from our digital growth team in Patna.
          </p>
        </motion.div>

        {/* 3-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {BLOG_POSTS.map((post, index) => {
            const IconComponent = post.icon;

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                className="group relative flex flex-col justify-between rounded-3xl bg-[linear-gradient(135deg,rgba(6,20,74,0.85)_0%,rgba(10,32,92,0.65)_100%)] border border-white/10 p-6 sm:p-7 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#00D9FF]/50 hover:shadow-[0_20px_50px_rgba(0,217,255,0.18)] hover:-translate-y-1.5"
              >
                <div>
                  {/* Graphical Header Card with Ambient Accent */}
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-[#020B35] to-[#0A205C] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00D9FF]/30 transition-colors">
                    {/* Decorative Ambient Aura */}
                    <div
                      className="absolute inset-0 opacity-25 group-hover:opacity-45 transition-opacity"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${post.accentColor}, transparent 65%)`,
                      }}
                    />

                    {/* Central Stylized Vector Icon */}
                    <div
                      className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center border shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${post.accentColor}18`,
                        borderColor: `${post.accentColor}55`,
                        color: post.accentColor,
                        boxShadow: `0 0 25px ${post.accentColor}33`,
                      }}
                    >
                      <IconComponent size={30} className="stroke-[2.2]" />
                    </div>

                    {/* Category Pill Tag */}
                    <span
                      className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm"
                      style={{
                        backgroundColor: `${post.accentColor}22`,
                        borderColor: `${post.accentColor}66`,
                        color: "#FFFFFF",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Metadata Row: Date & Read Time */}
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#00D9FF]" />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-500" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#00D9FF]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#00D9FF] transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer: Read Article Link */}
                <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#00D9FF] group-hover:text-white transition-colors duration-200 flex items-center gap-2">
                    Read Article
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1.5"
                    />
                  </span>
                  <span className="text-xs text-slate-400 font-medium">By Promonex Team</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CENTER: View All Articles Action Button */}
        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="#contact"
            className="group inline-flex h-[56px] items-center justify-between gap-7 rounded-full bg-[#00D9FF] border border-[#00D9FF] pl-7 pr-2.5 text-sm font-semibold shadow-[0_8px_24px_rgba(0,217,255,0.35)] transition-all duration-300 hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_14px_36px_rgba(4,120,253,0.45)] hover:border-transparent hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="text-[15px] font-bold tracking-tight text-white transition-colors duration-300">
              Explore All Articles
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/20 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white/30 group-hover:scale-105">
              <ArrowRight size={18} className="stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
