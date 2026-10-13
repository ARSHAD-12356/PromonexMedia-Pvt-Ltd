"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Search,
  RefreshCw,
  HelpCircle,
  Bell,
  Download,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  MoreVertical,
  Plus,
  Monitor,
} from "lucide-react";

export default function SemVisibilitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#071A40] py-12 sm:py-16 lg:py-18 xl:py-20 font-['Poppins',sans-serif] select-none border-t border-slate-100">
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN (~55%): Realistic Google Ads Dashboard UI     */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-7 w-full"
          >
            <div className="w-full bg-[#F8FAFC] border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-[0_22px_55px_rgba(0,0,0,0.07)] p-2.5 sm:p-3.5 lg:p-4 text-[#1E293B] overflow-hidden text-left">
              
              {/* ── Top Header Bar ── */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80 gap-2">
                {/* Google Ads Logo */}
                <div className="flex items-center gap-2 shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                    <polygon points="12,2 22,8.5 22,17.5 12,22 2,17.5 2,8.5" fill="#4285F4" opacity="0.15" />
                    <path fill="#4285F4" d="M12 2L3 8v8l9 6 9-6V8l-9-6zm0 2.2L19 9v6l-7 4.7L5 15V9l7-4.8z" />
                    <circle cx="7.5" cy="12.5" r="3" fill="#FBBC04" />
                    <circle cx="16.5" cy="12.5" r="3" fill="#34A853" />
                  </svg>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                    Google Ads
                  </span>
                </div>

                {/* Top Search Input */}
                <div className="flex-1 max-w-xs sm:max-w-sm mx-2 hidden sm:flex items-center bg-white px-3 py-1 rounded-md border border-slate-200 text-slate-400 text-[10.5px]">
                  <Search size={12} className="mr-2 text-slate-400" />
                  <span className="truncate">Search for a page or campaign</span>
                </div>

                {/* Top Action Icons */}
                <div className="flex items-center gap-2 sm:gap-3 text-slate-500 text-[9px] shrink-0">
                  <div className="hidden md:flex items-center gap-1">
                    <Monitor size={12} />
                    <span>Appearance</span>
                  </div>
                  <div className="hidden md:flex items-center gap-1">
                    <RefreshCw size={11} />
                    <span>Refresh</span>
                  </div>
                  <div className="hidden md:flex items-center gap-1">
                    <HelpCircle size={12} />
                    <span>Help</span>
                  </div>
                  <div className="relative flex items-center gap-1">
                    <Bell size={13} className="text-slate-600" />
                    <span className="absolute -top-1 -right-1.5 w-3 h-3 bg-[#EA4335] text-white text-[7px] font-bold rounded-full flex items-center justify-center">
                      1
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Main Dashboard Body (Left Mini Sidebar + Right Content) ── */}
              <div className="grid grid-cols-12 gap-2.5 pt-2.5">
                
                {/* Left Mini Navigation Tree */}
                <div className="col-span-3 hidden sm:flex flex-col space-y-1 text-[9.5px] border-r border-slate-200/80 pr-2 select-none">
                  <div className="px-2 py-1 rounded-md bg-[#1A73E8] text-white font-semibold flex items-center justify-between">
                    <span>Overview</span>
                  </div>
                  <div className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 rounded">
                    Recommendations
                  </div>
                  <div className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 rounded flex items-center justify-between">
                    <span>Insights & reports</span>
                    <ChevronDown size={10} />
                  </div>
                  <div className="px-2 py-0.5 text-slate-800 font-semibold hover:bg-slate-100 rounded flex items-center justify-between">
                    <span>Campaigns</span>
                    <ChevronDown size={10} />
                  </div>
                  <div className="pl-4 pr-2 py-0.5 text-slate-500 hover:bg-slate-100 rounded">
                    Campaigns
                  </div>
                  <div className="pl-4 pr-2 py-0.5 text-slate-500 hover:bg-slate-100 rounded">
                    Ad groups
                  </div>
                  <div className="pl-4 pr-2 py-0.5 text-slate-500 hover:bg-slate-100 rounded">
                    Ads
                  </div>
                  <div className="pl-4 pr-2 py-0.5 text-slate-500 hover:bg-slate-100 rounded">
                    Experiments
                  </div>
                  <div className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 rounded flex items-center justify-between">
                    <span>Assets</span>
                    <ChevronRight size={10} />
                  </div>
                  <div className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 rounded leading-tight">
                    Audiences, keywords, & content
                  </div>
                  <div className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 rounded">
                    Change history
                  </div>
                </div>

                {/* Right Main Analytics Pane */}
                <div className="col-span-12 sm:col-span-9 flex flex-col space-y-2.5">
                  
                  {/* Top Bar of Right Pane */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 text-[9.5px]">
                    <div className="font-bold text-slate-800 text-xs sm:text-sm">
                      Overview
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <span className="text-[9px]">Custom</span>
                      <span className="bg-white px-2 py-0.5 border border-slate-200 rounded font-medium text-[9px]">
                        1 Jul - 31 Jul 2024 ▾
                      </span>
                      <span className="text-[#1A73E8] font-medium text-[9px] hidden sm:inline">
                        Show last 30 days
                      </span>
                    </div>
                  </div>

                  {/* Actions Header */}
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1A73E8] text-white text-[9px] font-semibold shadow-sm">
                      <Plus size={10} strokeWidth={3} />
                      <span>New campaign</span>
                    </button>
                    <div className="flex items-center gap-3 text-slate-500 text-[9px]">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <Download size={10} />
                        <span>Download</span>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <MessageSquare size={10} />
                        <span>Feedback</span>
                      </div>
                    </div>
                  </div>

                  {/* 4 Colored KPI Scorecards */}
                  <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                    {/* 1. Clicks (Blue) */}
                    <div className="bg-[#1A73E8] text-white p-1.5 sm:p-2 rounded-lg flex flex-col justify-between">
                      <div className="text-[8px] sm:text-[9px] font-medium opacity-90">Clicks ▾</div>
                      <div className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight mt-0.5">
                        12.4K
                      </div>
                    </div>

                    {/* 2. Impressions (Red) */}
                    <div className="bg-[#EA4335] text-white p-1.5 sm:p-2 rounded-lg flex flex-col justify-between">
                      <div className="text-[8px] sm:text-[9px] font-medium opacity-90">Impressions ▾</div>
                      <div className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight mt-0.5">
                        205K
                      </div>
                    </div>

                    {/* 3. Conversions (Yellow/Orange) */}
                    <div className="bg-[#FBBC04] text-[#071A40] p-1.5 sm:p-2 rounded-lg flex flex-col justify-between">
                      <div className="text-[8px] sm:text-[9px] font-bold opacity-90">Conversions ▾</div>
                      <div className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight mt-0.5">
                        487.00
                      </div>
                    </div>

                    {/* 4. Cost/conv. (Green) */}
                    <div className="bg-[#34A853] text-white p-1.5 sm:p-2 rounded-lg flex flex-col justify-between">
                      <div className="text-[8px] sm:text-[9px] font-medium opacity-90">Cost / conv. ▾</div>
                      <div className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight mt-0.5">
                        ₹198.76
                      </div>
                    </div>
                  </div>

                  {/* Multi-Line Performance Chart */}
                  <div className="relative w-full bg-white border border-slate-200/90 rounded-lg p-2 h-24 sm:h-28 flex flex-col justify-between">
                    <svg className="w-full h-16 sm:h-20" viewBox="0 0 360 80" fill="none">
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="360" y2="20" stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="0" y1="40" x2="360" y2="40" stroke="#F1F5F9" strokeWidth="1" />
                      <line x1="0" y1="60" x2="360" y2="60" stroke="#F1F5F9" strokeWidth="1" />

                      {/* Blue Line (Clicks) */}
                      <path
                        d="M0 65 Q45 20, 90 45 T180 30 T270 15 T360 25"
                        stroke="#1A73E8"
                        strokeWidth="2"
                        fill="none"
                      />

                      {/* Red Line (Impressions) */}
                      <path
                        d="M0 50 Q45 60, 90 35 T180 50 T270 20 T360 30"
                        stroke="#EA4335"
                        strokeWidth="1.8"
                        fill="none"
                      />

                      {/* Yellow Line (Conversions) */}
                      <path
                        d="M0 70 Q45 40, 90 55 T180 35 T270 45 T360 38"
                        stroke="#FBBC04"
                        strokeWidth="1.8"
                        fill="none"
                      />

                      {/* Green Line (Cost/conv.) */}
                      <path
                        d="M0 60 Q45 70, 90 50 T180 65 T270 40 T360 48"
                        stroke="#34A853"
                        strokeWidth="1.8"
                        fill="none"
                      />
                    </svg>

                    <div className="flex items-center justify-between text-[8px] text-slate-400 font-medium px-1">
                      <span>1 Jul 2024</span>
                      <span>31 Jul 2024</span>
                    </div>
                  </div>

                  {/* Bottom Split (Campaigns Table on Left + Devices on Right) */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1 text-[9px]">
                    
                    {/* Left: Campaigns Table */}
                    <div className="sm:col-span-7 bg-white border border-slate-200/90 rounded-lg p-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between font-bold text-slate-800 text-[10px] pb-1 border-b border-slate-100">
                          <span>Campaigns</span>
                          <MoreVertical size={11} className="text-slate-400" />
                        </div>
                        
                        <div className="grid grid-cols-12 text-[8px] text-slate-400 font-semibold py-1 border-b border-slate-100">
                          <span className="col-span-5">Cost</span>
                          <span className="col-span-3 text-right">Clicks</span>
                          <span className="col-span-4 text-right">Conversions</span>
                        </div>

                        {/* Campaign Rows */}
                        <div className="space-y-1 pt-1">
                          {[
                            { name: "Search Campaign", cost: "₹24,521.12", clicks: "6,421", conv: "249.00" },
                            { name: "PMax Campaign", cost: "₹18,320.50", clicks: "4,102", conv: "123.00" },
                            { name: "Display Campaign", cost: "₹7,210.33", clicks: "1,884", conv: "67.00" },
                            { name: "YouTube Campaign", cost: "₹4,980.76", clicks: "1,021", conv: "48.00" },
                            { name: "Remarketing", cost: "₹3,450.17", clicks: "892", conv: "31.00" },
                          ].map((row) => (
                            <div key={row.name} className="grid grid-cols-12 items-center text-[8.5px] leading-tight">
                              <div className="col-span-5 flex items-center gap-1 truncate font-medium text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] shrink-0" />
                                <span className="truncate">{row.name}</span>
                              </div>
                              <span className="col-span-3 text-right text-slate-600 font-semibold">{row.clicks}</span>
                              <span className="col-span-4 text-right text-slate-800 font-bold">{row.conv}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-1.5 border-t border-slate-100 text-[8.5px] text-[#1A73E8] font-semibold cursor-pointer">
                        View all campaigns
                      </div>
                    </div>

                    {/* Right: Devices Breakdown */}
                    <div className="sm:col-span-5 bg-white border border-slate-200/90 rounded-lg p-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between font-bold text-slate-800 text-[10px] pb-1 border-b border-slate-100">
                          <span>Devices</span>
                          <MoreVertical size={11} className="text-slate-400" />
                        </div>

                        {/* Devices Legend */}
                        <div className="flex items-center gap-2 text-[7.5px] text-slate-500 py-1">
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-[#4285F4] rounded-sm" /> Mobile
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-[#EA4335] rounded-sm" /> Tablet
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-[#FBBC04] rounded-sm" /> PC
                          </span>
                        </div>

                        {/* Horizontal Stacked Bars */}
                        <div className="space-y-1.5 pt-1 text-[8px]">
                          <div>
                            <div className="flex justify-between text-slate-500 font-medium">
                              <span>Cost</span>
                              <span>62.3% | 8.1% | 29.6%</span>
                            </div>
                            <div className="flex h-2 rounded-full overflow-hidden mt-0.5">
                              <span className="w-[62.3%] bg-[#4285F4]" />
                              <span className="w-[8.1%] bg-[#EA4335]" />
                              <span className="w-[29.6%] bg-[#FBBC04]" />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-slate-500 font-medium">
                              <span>Clicks</span>
                              <span>68.9% | 6.7% | 24.4%</span>
                            </div>
                            <div className="flex h-2 rounded-full overflow-hidden mt-0.5">
                              <span className="w-[68.9%] bg-[#4285F4]" />
                              <span className="w-[6.7%] bg-[#EA4335]" />
                              <span className="w-[24.4%] bg-[#FBBC04]" />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-slate-500 font-medium">
                              <span>Conversions</span>
                              <span>70.1% | 5.3% | 24.6%</span>
                            </div>
                            <div className="flex h-2 rounded-full overflow-hidden mt-0.5">
                              <span className="w-[70.1%] bg-[#4285F4]" />
                              <span className="w-[5.3%] bg-[#EA4335]" />
                              <span className="w-[24.6%] bg-[#FBBC04]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN (~45%): Headline, Copy, Checklist, CTA      */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Eyebrow Label */}
            <div className="text-xs sm:text-[12.5px] font-bold tracking-[0.22em] text-[#00C8EF] uppercase mb-2 sm:mb-2.5 select-none">
              PAID ADVERTISING SERVICES
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] xl:text-[42px] font-extrabold text-[#071A40] tracking-tight leading-[1.22] sm:leading-[1.2] no-underline">
              Maximize your visibility with search, mobile, display, YouTube, and{" "}
              <span className="text-[#00C8EF]">remarketing.</span>
            </h2>

            {/* First Paragraph */}
            <p className="mt-3.5 sm:mt-4 text-xs sm:text-[14.5px] lg:text-[15px] text-[#526078] leading-relaxed font-normal no-underline">
              Getting your site to the top of Google for the right search terms is an excellent way to increase your site’s traffic. Achieving this organically requires time, dedication, and patience. But what if you need to be seen today?
            </p>

            {/* Second Paragraph */}
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-[14.5px] lg:text-[15px] text-[#526078] leading-relaxed font-normal no-underline">
              Paid search advertising provides instant top-page visibility. Once you’ve decided on a budget, keywords to advertise on, and landing pages to use, you can go live immediately.
            </p>

            {/* Benefit Checklist */}
            <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
              {[
                "Certified SEM Experts",
                "Assured Confidentiality",
                "Transparent Reporting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00C8EF] flex items-center justify-center shrink-0 shadow-sm">
                    <Check size={12} className="text-[#031438] stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-[14.5px] font-semibold text-[#071A40] no-underline">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Large Dark Navy CTA Button */}
            <div className="mt-5 sm:mt-6">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-between gap-5 px-7 sm:px-8 h-[56px] sm:h-[60px] lg:h-[64px] rounded-full bg-[#031438] hover:bg-[#062054] text-white font-semibold text-sm sm:text-base tracking-tight shadow-[0_10px_28px_rgba(0,200,239,0.22)] transition-all duration-300 no-underline cursor-pointer"
              >
                <span className="no-underline">Get a free consultation now</span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#00C8EF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1 shadow-sm">
                  <ArrowRight size={16} className="text-[#031438] stroke-[2.8]" />
                </span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
