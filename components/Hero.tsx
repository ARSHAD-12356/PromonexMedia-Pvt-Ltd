"use client";

import React from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import GrowthChart from "./GrowthChart";

const FIRST_HEADLINE_LINE = "Your Growth Story";
const SECOND_HEADLINE_LINE = "Starts Here";

export default function Hero() {
  const headingRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const lines = heading.querySelectorAll<HTMLElement>(".heading-line");
    const tween = gsap.to(lines, {
      "--heading-offset": "0%",
      duration: 1,
      ease: "power4.out",
      stagger: 0.18,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[620px] flex-col justify-center overflow-hidden bg-[#020B35] px-0 pb-28 pt-8 sm:min-h-[660px] sm:pb-32 sm:pt-10 lg:min-h-0 lg:pb-[68px] lg:pt-4 xl:min-h-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 76% 48%, rgba(0, 191, 255, 0.15) 0%, transparent 38%), radial-gradient(circle at 18% 24%, rgba(91, 60, 196, 0.12) 0%, transparent 34%), linear-gradient(180deg, #020B35 0%, #03123D 100%)",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* LEFT SIDE: Hero Content */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left z-10 font-poppins">
            {/* Headline: Exactly 2 lines on desktop */}
            <h1
              ref={headingRef}
              aria-label={`${FIRST_HEADLINE_LINE} ${SECOND_HEADLINE_LINE}`}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-extrabold tracking-[-0.035em] leading-[1.08] text-white"
            >
              <span aria-hidden="true" className="heading-mask lg:w-max lg:whitespace-nowrap">
                <span className="heading-line">{FIRST_HEADLINE_LINE}</span>
              </span>
              <span aria-hidden="true" className="heading-mask mt-1 text-[#00BFFF] sm:mt-1.5">
                <span className="heading-line">
                  {SECOND_HEADLINE_LINE}
                </span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <div
              className="mt-4 max-w-[620px] space-y-2 text-[16px] leading-[1.4] text-slate-300/90 sm:mt-5 sm:text-[17px] md:text-[16px] xl:text-[17px] font-normal"
            >
              <p>
                Promonex Media is a full-service digital marketing agency in
                Patna, helping businesses grow their online presence, generate
                quality leads, and turn digital marketing into a consistent
                growth channel.
              </p>
              <p>
                From SEO and social media marketing to Google Ads, Meta Ads,
                website development, and lead generation, we provide end-to-end
                digital marketing solutions tailored to your business goals.
              </p>
            </div>

            {/* EXACT TWO CTA BUTTONS (Purple Reference Style) */}
            <div
              className="mt-5 flex w-full flex-col items-start gap-3 sm:mt-6 sm:flex-row"
            >
              {/* BUTTON 1: Get a Free Growth Audit */}
                <Link
                  href="#contact"
                  className="group relative flex w-fit shrink-0 items-center justify-between h-[64px] px-4 rounded-xl bg-white text-[#5B3CC4] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.4)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.20)] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white sm:h-[68px] sm:w-full sm:flex-1"
              >
                <span className="text-[14px] font-bold tracking-tight text-[#5B3CC4] transition-colors group-hover:text-white sm:text-[15px] lg:text-[16px]">
                  Get a Free Growth Audit
                </span>
                <span className="w-9 h-9 rounded-full border border-[#5B3CC4]/30 flex items-center justify-center text-[#5B3CC4] group-hover:border-white group-hover:bg-white/10 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0 ml-2">
                  <ArrowRight
                    size={20}
                    className="stroke-[2.2] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </span>
              </Link>

              {/* BUTTON 2: Explore Our Services */}
                <Link
                  href="#services"
                  className="group relative flex w-fit shrink-0 items-center justify-between h-[64px] px-4 rounded-xl bg-white text-[#5B3CC4] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.4)] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.20)] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white sm:h-[68px] sm:w-full sm:flex-1"
              >
                <span className="text-[14px] font-bold tracking-tight text-[#5B3CC4] transition-colors group-hover:text-white sm:text-[15px] lg:text-[16px]">
                  Explore Our Services
                </span>
                <span className="w-9 h-9 rounded-full border border-[#5B3CC4]/30 flex items-center justify-center text-[#5B3CC4] group-hover:border-white group-hover:bg-white/10 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0 ml-2">
                  <ArrowRight
                    size={20}
                    className="stroke-[2.2] group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Growth Chart / Visual */}
          <div className="mt-2 flex items-center justify-center lg:col-span-5 lg:mt-0 lg:justify-end">
            <div className="w-full max-w-[380px] lg:max-w-[400px] xl:max-w-[450px]">
            <GrowthChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
