"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClientLogo {
  name: string;
  src: string;
  // Intrinsic size: each logo reserves its real width before the image loads, so the
  // marquee track width never changes mid-animation (that caused jumps / "reverse" motion).
  width: number;
  height: number;
  customClass?: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Anujarusiya", src: "/logos/Anujarusiya.png", width: 2172, height: 724 },
  { name: "Bigrahpurm Developers", src: "/logos/Bigrahpurm Developers.jpeg", width: 800, height: 800 },
  { name: "Boombox", src: "/logos/Boombox.png", width: 237, height: 447 },
  { name: "BTS DISC", src: "/logos/BTS DISC.jpg", width: 500, height: 500 },
  { name: "Gangtar", src: "/logos/Gangtar.png", width: 206, height: 245 },
  { name: "Graham Immigration", src: "/logos/Graham Immigration.png", width: 300, height: 122 },
  { name: "Heroz", src: "/logos/Heroz.png", width: 800, height: 706, customClass: "scale-[1.35] origin-center" },
  { name: "Jansuraj", src: "/logos/Jansuraj.jpeg", width: 316, height: 316 },
  { name: "Kinetic EV", src: "/logos/Kinetic EV.png", width: 256, height: 102 },
  { name: "KSMCH", src: "/logos/KSMCH.png", width: 583, height: 103 },
  { name: "KUIKLO", src: "/logos/KUIKLO LOGO BLACK.jpg", width: 1280, height: 512 },
  { name: "Living Style", src: "/logos/Living Style.png", width: 800, height: 800 },
  { name: "Nextfurn Overseas", src: "/assets/nextfurn logo.png", width: 1254, height: 1254, customClass: "scale-[1.3] origin-center" },
  { name: "House of Ricky Tasha", src: "/logos/Ricky Tasha.png", width: 440, height: 252 },
  { name: "SAMCH", src: "/logos/SAMCH.png", width: 702, height: 702, customClass: "scale-[1.18] origin-center" },
  { name: "Satyam Shivam Sundaram Group of Institutions", src: "/assets/satyam logo.png", width: 297, height: 59 },
  { name: "Srinivas", src: "/logos/Srinivas.png", width: 500, height: 300 },
  { name: "The Picante Cafe", src: "/logos/The Picante cafe.jpeg", width: 1254, height: 1254 },
  { name: "Tvayi", src: "/logos/Tvayi.PNG", width: 1179, height: 1063, customClass: "translate-y-1.5 sm:translate-y-2" },
];

// Marquee motion tuning
const SPEED_PX_PER_SEC = 70; // right → left scroll speed between stops
const ALT_SMALL_SCALE = 0.85; // every other logo sits slightly smaller (alternating rhythm)
// "Open" pop when a logo reaches the screen center: the marquee stops and the logo opens up
// to fill the space below the "Our Clients" heading (heading stays visible), holds, then
// shrinks back into its slot and the marquee continues left.
const POP_HEIGHT_FRACTION = 0.9; // opened logo height = 90% of the area below the heading
const POP_AREA_GAP = 10; // px kept clear under the heading and above the section bottom
const POP_MAX_WIDTH_FRACTION = 0.7; // …but never wider than 70% of the screen (wide logos)
const POP_GROW_MS = 500;
const POP_HOLD_MS = 900;
const POP_SHRINK_MS = 500;
const POP_TOTAL_MS = POP_GROW_MS + POP_HOLD_MS + POP_SHRINK_MS;
const POP_BACKDROP_OPACITY = 0.94; // white veil over the heading / other logos while open
const REST_OPACITY = 0.85;
const HIRES_WIDTH = 1080; // sharper source for the opened logo (a Next.js image size)

// Alternate by position in the original list so both marquee copies match at the loop seam
const baseScale = (index: number) => ((index % CLIENT_LOGOS.length) % 2 === 0 ? 1 : ALT_SMALL_SCALE);

const hiresUrl = (src: string) => `/_next/image?url=${encodeURIComponent(src)}&w=${HIRES_WIDTH}&q=85`;

// Slight overshoot on opening, smooth settle on closing
const easeOutBack = (t: number) => {
  const c1 = 1.2;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// 0 → 1 → 0 progress of the pop over time
function popAmount(elapsed: number): number {
  if (elapsed <= 0) return 0;
  if (elapsed < POP_GROW_MS) return easeOutBack(elapsed / POP_GROW_MS);
  if (elapsed < POP_GROW_MS + POP_HOLD_MS) return 1;
  if (elapsed < POP_TOTAL_MS) return 1 - easeInOutCubic((elapsed - POP_GROW_MS - POP_HOLD_MS) / POP_SHRINK_MS);
  return 0;
}

export default function ClientLogosSection() {
  // Two identical copies → seamless infinite loop
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scaleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backdropRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const backdrop = backdropRef.current;
    const heading = headingRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !viewport || !track || !backdrop || !spotlight) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = CLIENT_LOGOS.length;

    let offset = 0;
    let period = 0; // distance between a logo and its duplicate = one full loop
    let centers: number[] = []; // each item's center inside the track (layout px)
    let viewportWidth = 0;
    let frame = 0;
    let last = performance.now();
    let popIndex = -1; // item currently "opening" at the center (-1 = marquee moving)
    let popStart = 0;
    // Spotlight geometry (section coordinates): from the logo's slot → opened size at section center
    let from = { x: 0, y: 0, w: 0, h: 0 };
    let to = { x: 0, y: 0, w: 0, h: 0 };

    // Sharper copies of logos, loaded in the background
    const hiresLoaded = new Set<string>();
    const preloadHires = (src: string) => {
      const url = hiresUrl(src);
      if (hiresLoaded.has(url)) return;
      const img = new window.Image();
      img.onload = () => {
        hiresLoaded.add(url);
        if (popIndex >= 0 && CLIENT_LOGOS[popIndex % count].src === src) spotlight.src = url;
      };
      img.src = url;
    };

    // Layout positions never change while animating (only transforms do), so measure once per resize
    const measure = () => {
      const items = itemRefs.current;
      const first = items[0];
      const dup = items[count];
      if (!first || !dup) return;
      period = dup.offsetLeft - first.offsetLeft;
      centers = items.map((el) => (el ? el.offsetLeft + el.offsetWidth / 2 : 0));
      viewportWidth = viewport.clientWidth;
      if (period > 0) offset = ((offset % period) - period) % period;
    };

    const startPop = (i: number, now: number) => {
      const img = scaleRefs.current[i]?.querySelector("img");
      if (!img) return;
      popIndex = i;
      popStart = now;
      const logo = CLIENT_LOGOS[i % count];

      // Start exactly where the logo sits in the marquee (incl. its scale / custom transforms)
      const s = section.getBoundingClientRect();
      const r = img.getBoundingClientRect();
      from = { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height };

      // Open inside the area below the heading, centered, keeping the logo's aspect ratio
      const headingBottom = heading ? heading.getBoundingClientRect().bottom - s.top : 0;
      const areaTop = headingBottom + POP_AREA_GAP;
      const areaH = Math.max(r.height, s.height - areaTop - POP_AREA_GAP);
      const aspect = r.width / Math.max(1, r.height);
      let h = areaH * POP_HEIGHT_FRACTION;
      let w = h * aspect;
      const maxW = s.width * POP_MAX_WIDTH_FRACTION;
      if (w > maxW) {
        w = maxW;
        h = w / aspect;
      }
      to = { x: (s.width - w) / 2, y: areaTop + (areaH - h) / 2, w, h };
      // The white veil also starts below the heading so the heading never gets covered
      backdrop.style.top = `${Math.max(0, headingBottom + POP_AREA_GAP / 2)}px`;

      const url = hiresUrl(logo.src);
      spotlight.src = hiresLoaded.has(url) ? url : img.currentSrc || img.src;
      spotlight.alt = img.alt;
      preloadHires(logo.src);
      preloadHires(CLIENT_LOGOS[(i + 1) % count].src); // next one, ahead of time
    };

    const render = (now: number) => {
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      const amount = popIndex >= 0 ? popAmount(now - popStart) : 0;
      const open = popIndex >= 0 && now - popStart < POP_TOTAL_MS;

      scaleRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `scale(${baseScale(i)})`;
        // The spotlight copy stands in for the opened logo
        el.style.opacity = open && i === popIndex ? "0" : String(REST_OPACITY);
      });

      if (open) {
        const a = amount;
        const x = from.x + (to.x - from.x) * a;
        const y = from.y + (to.y - from.y) * a;
        const w = from.w + (to.w - from.w) * a;
        // Image box is sized to the opened size; scale it down to the in-between size
        spotlight.style.width = `${to.w}px`;
        spotlight.style.height = `${to.h}px`;
        spotlight.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${(w / to.w).toFixed(4)})`;
        spotlight.style.opacity = (REST_OPACITY + (1 - REST_OPACITY) * Math.min(1, Math.max(0, a))).toFixed(3);
        backdrop.style.opacity = (POP_BACKDROP_OPACITY * Math.min(1, Math.max(0, a))).toFixed(3);
      } else {
        spotlight.style.opacity = "0";
        backdrop.style.opacity = "0";
      }
    };

    const tick = (now: number) => {
      // Clamp long gaps (background tab) so the marquee never jumps
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      if (period <= 0 || viewportWidth === 0) measure(); // layout wasn't ready at mount

      if (popIndex >= 0) {
        // Stopped at center while the logo opens and closes
        if (now - popStart >= POP_TOTAL_MS) popIndex = -1;
      } else if (period > 0) {
        const mid = viewportWidth / 2;
        const prev = offset;
        let next = offset - SPEED_PX_PER_SEC * dt;
        let hit = -1;

        // Did a logo's center cross the screen center during this step? → stop it exactly there
        for (let i = 0; i < centers.length; i++) {
          if (centers[i] + prev > mid && centers[i] + next <= mid) {
            next = mid - centers[i];
            hit = i;
            break;
          }
        }

        // Loop: shift back by one copy (the duplicate takes the original's place on screen)
        if (next <= -period) {
          next += period;
          if (hit >= count) hit -= count;
          else hit = -1;
        }
        offset = next;
        if (hit >= 0) {
          track.style.transform = `translate3d(${offset}px, 0, 0)`; // measure the logo at its stop
          startPop(hit, now);
        }
      }

      render(now);
      frame = requestAnimationFrame(tick);
    };

    measure();
    render(performance.now());
    const observer = new ResizeObserver(() => {
      measure();
      render(performance.now());
    });
    observer.observe(viewport);
    observer.observe(track);

    if (!reduceMotion) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clients"
      aria-labelledby="clients-heading"
      className="relative w-full overflow-hidden bg-white pt-14 sm:pt-16 md:pt-20 pb-14 sm:pb-16 md:pb-24 border-t border-b border-slate-100 select-none font-['Poppins',sans-serif]"
    >
      {/* Section Header: Our Clients */}
      <div ref={headingRef} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 mb-4 sm:mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow Label with Signature Gradient Accent Lines */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-[#F8547D] to-[#4AE1FC] shadow-[0_0_10px_rgba(74,225,252,0.35)]" />
            <p className="bg-[linear-gradient(90deg,#F8547D_0%,#BD31E2_55%,#4AE1FC_100%)] bg-clip-text text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-transparent">
              TRUSTED PARTNERS
            </p>
            <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-[#4AE1FC] to-[#F8547D] shadow-[0_0_10px_rgba(248,84,125,0.3)]" />
          </div>

          {/* Main Heading "Our Clients" */}
          <h2
            id="clients-heading"
            className="mt-3 sm:mt-4 font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold uppercase leading-[1.08] text-[#09183D] tracking-tight"
          >
            Our{" "}
            <span className="bg-[linear-gradient(100deg,#FA5679_0%,#D62BD5_55%,#187DF4_100%)] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
        </motion.div>
      </div>
      {/* Left Edge Smooth Vignette Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10"
      />

      {/* Right Edge Smooth Vignette Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10"
      />

      {/* Infinite marquee */}
      <div ref={viewportRef} className="relative w-full flex items-center overflow-hidden py-4 sm:py-5 md:py-6">
        <div
          ref={trackRef}
          className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 w-max will-change-transform"
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="relative shrink-0 flex items-center justify-center"
              aria-hidden={index >= CLIENT_LOGOS.length ? true : undefined}
            >
              <div
                ref={(el) => {
                  scaleRefs.current[index] = el;
                }}
                className="relative flex items-center justify-center origin-center will-change-transform"
                style={{ transform: `scale(${baseScale(index)})`, opacity: REST_OPACITY }}
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} Client Logo`}
                  width={logo.width}
                  height={logo.height}
                  className={`h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[210px] object-contain rounded-md ${
                    logo.customClass || ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opened logo: white veil over the section + a copy of the logo that grows to section height */}
      <div
        ref={backdropRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-white"
        style={{ opacity: 0 }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={spotlightRef}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-30 origin-top-left object-contain rounded-md will-change-transform"
        style={{ opacity: 0 }}
      />
    </section>
  );
}
