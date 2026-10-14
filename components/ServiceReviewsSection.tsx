"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Quote, Star } from "lucide-react";
import { googleReviews } from "@/components/TestimonialsSection";

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 5000;

// Real Google reviews of Promonex Media (same source as the homepage testimonials),
// only the ones with enough text for a large card
const REVIEWS = googleReviews.filter((r) => (r.review || "").length >= 60);

const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="size-5" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export default function ServiceReviewsSection() {
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const maxIndex = Math.max(0, REVIEWS.length - perView);

  // 3 cards on desktop, 2 on tablets, 1 on phones
  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const md = window.matchMedia("(min-width: 640px)");
    const update = () => setPerView(lg.matches ? 3 : md.matches ? 2 : 1);
    update();
    lg.addEventListener("change", update);
    md.addEventListener("change", update);
    return () => {
      lg.removeEventListener("change", update);
      md.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (dir === 1 ? (i >= maxIndex ? 0 : i + 1) : i <= 0 ? maxIndex : i - 1)),
    [maxIndex]
  );

  // Autoplay (restarts after every manual move; skipped while the tab is hidden)
  useEffect(() => {
    const id = window.setInterval(() => {
      if (!document.hidden) go(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [index, go]);

  return (
    <section
      aria-labelledby="em-reviews-heading"
      className="overflow-hidden bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Heading row */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-[700px]">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full bg-[#E3F8FD] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0478FD]"
            >
              Client reviews
            </motion.span>
            <motion.h2
              variants={fadeUp}
              id="em-reviews-heading"
              className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight sm:text-[46px] lg:text-[54px]"
            >
              What our clients say <span className="text-[#00B8E6]">about us</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[16px] leading-relaxed text-[#4A5A75] sm:text-[18px]">
              Real feedback from businesses we&apos;ve helped grow, straight from our Google reviews.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-[#E3EAF5] bg-white px-5 py-3 shadow-[0_10px_30px_rgba(6,26,64,0.06)]">
              <GoogleG />
              <div>
                <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5 on Google">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="fill-[#FBBC04] text-[#FBBC04]" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-0.5 text-[12px] font-medium text-[#4A5A75]">Based on {googleReviews.length} Google reviews</p>
              </div>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous reviews"
                className="flex size-12 items-center justify-center rounded-full border border-[#DCE4F0] text-[#061A40] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#061A40] hover:bg-[#061A40] hover:text-white"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next reviews"
                className="flex size-12 items-center justify-center rounded-full bg-[#061A40] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2A6B]"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client reviews"
          className="-mx-3 mt-12 overflow-hidden sm:mt-14"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (dx < -50) go(1);
            else if (dx > 50) go(-1);
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ transform: `translate3d(-${(index * 100) / perView}%, 0, 0)` }}
          >
            {REVIEWS.map((r, i) => {
              const visible = i >= index && i < index + perView;
              return (
                <div
                  key={r.name}
                  className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                  aria-hidden={!visible}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${REVIEWS.length}: ${r.name}`}
                >
                  {/* Reviewer-first card: who → rating → what they said → source */}
                  <article
                    className={`group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,#0A2A6B_0%,#061A40_60%,#031539_100%)] p-7 text-white shadow-[0_18px_45px_rgba(6,26,64,0.22)] transition-all duration-500 ${
                      visible ? "opacity-100" : "opacity-40"
                    } hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(6,26,64,0.32)]`}
                  >
                    {/* Large watermark quote */}
                    <Quote
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-3 -top-3 size-32 rotate-180 fill-white/[0.04] text-white/[0.04] transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Reviewer */}
                    <div className="relative flex items-center gap-3.5">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#00C8EF,#0478FD)] text-[15px] font-bold ring-4 ring-white/10">
                        {initials(r.name)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[17px] font-bold capitalize leading-tight">{r.name}</p>
                        <p className="mt-1 truncate text-[12.5px] text-[#A9B8D3]">{r.metadata}</p>
                      </div>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
                        <GoogleG />
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="relative mt-5 flex items-center gap-2">
                      <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={16} className="fill-[#FBBC04] text-[#FBBC04]" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="text-[12px] font-semibold text-[#7FDBF5]">Verified Google review</span>
                    </div>

                    {/* Review */}
                    <p className="relative mt-4 line-clamp-6 flex-1 text-[15.5px] leading-[1.75] text-[#E4EAF5]">
                      {r.review}
                    </p>

                    {/* Source */}
                    {r.reviewUrl && (
                      <a
                        href={r.reviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={visible ? 0 : -1}
                        className="relative mt-6 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-[#00C8EF] transition-colors duration-300 hover:text-white"
                      >
                        Read on Google
                        <ExternalLink size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                      </a>
                    )}

                    {/* Bottom accent */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#00C8EF,#0478FD)] transition-transform duration-500 group-hover:scale-x-100"
                    />
                  </article>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Progress dots */}
        <div className="mt-10 flex items-center justify-center gap-2" role="tablist" aria-label="Choose reviews">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-[#061A40]" : "w-2.5 bg-[#CBD3E1] hover:bg-[#9FB0CB]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
