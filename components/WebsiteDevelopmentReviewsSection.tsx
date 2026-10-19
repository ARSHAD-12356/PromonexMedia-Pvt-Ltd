"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  id: string;
  name: string;
  company: string;
  rating: number;
  text: string;
}

const REVIEWS: Review[] = [
  {
    id: "santosh-yadav",
    name: "Santosh Yadav",
    company: "Yadav Enterprises",
    rating: 5,
    text: "Brandwitty. They are awesome guys to work with that they are true to their work and commitment. They really like what they do and helps what is their USP. I wish them more success.",
  },
  {
    id: "mukta-tolani",
    name: "Mukta Tolani",
    company: "Radiant Health",
    rating: 5,
    text: "I would give them 10 stars for the absolutely marvelous job that they have done for my website! Being a perfectionist, I wanted someone who does a meticulous job. And I must say, the Brandwitty team has exceeded my expectations. Thank you Abhiraj & the brandwitty team for a splendid website!",
  },
  {
    id: "priyanka-chavan",
    name: "Priyanka Chavan",
    company: "Body & Beyond",
    rating: 5,
    text: "Abhiraj and his team is extremely professional in creating website for my brand. Gave lot of inputs to understand the brand. Timely delivery in extremely tight timelines :) Really impressed about.. Beautiful ad creatives/posters and coordination for all services they are offering with their service.",
  },
];

const SWIPE_THRESHOLD = 50; // px of horizontal drag that counts as a swipe
const AUTOPLAY_MS = 4500; // time each review stays in the center before auto-advancing

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function QuoteMark() {
  // Two slanted cyan blocks, like the reference
  return (
    <svg viewBox="0 0 48 32" className="h-7 w-10 sm:h-8 sm:w-12" aria-hidden="true">
      <path d="M4 4h16l-6 24H4l4-12H4z" fill="#00C8EF" />
      <path d="M26 4h16l-6 24H26l4-12h-4z" fill="#00C8EF" />
    </svg>
  );
}

function ReviewCard({ review, active }: { review: Review; active: boolean }) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-[24px] bg-[linear-gradient(160deg,#06204F_0%,#031438_55%,#031034_100%)] p-6 text-white sm:p-8 ${
        active
          ? "border border-[#00C8EF]/80 shadow-[0_0_0_1px_rgba(0,200,239,0.25),0_18px_50px_rgba(0,200,239,0.28)]"
          : "border border-white/[0.06] shadow-[0_18px_40px_rgba(3,20,56,0.22)]"
      }`}
    >
      {/* Lower-right geometric accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rotate-45 bg-[linear-gradient(180deg,rgba(29,104,254,0)_0%,rgba(29,104,254,0.22)_100%)]"
      />

      <div className="relative flex items-start justify-between gap-4">
        <QuoteMark />
        <div className="flex gap-1" role="img" aria-label={`Rated ${review.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < review.rating ? "fill-[#FFC21A] text-[#FFC21A]" : "fill-white/20 text-white/20"}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <p className="relative mt-5 flex-1 text-[15px] leading-[1.7] text-[#E4EAF5] sm:text-[16px]">{review.text}</p>

      <div className="relative mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
        <span
          aria-hidden="true"
          className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-[#00C8EF]/70 bg-[linear-gradient(135deg,#00C8EF,#1D68FE)] text-[17px] font-bold text-white"
        >
          {initials(review.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[17px] font-bold leading-tight">{review.name}</p>
          <p className="mt-1 truncate text-[14px] text-[#A9B8D3]">{review.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteDevelopmentReviewsSection() {
  const count = REVIEWS.length;
  // Three copies of the list → the track can always slide in either direction, then quietly
  // re-centre on the middle copy (infinite loop without visible jumps)
  const slides = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  const viewportRef = useRef<HTMLDivElement>(null);
  const firstSlideRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(count + 1); // index in `slides`; start on the middle review
  const [animate, setAnimate] = useState(true);
  const [geometry, setGeometry] = useState({ viewport: 0, slide: 0, step: 0 });
  const touchStartX = useRef<number | null>(null);

  const active = ((pos % count) + count) % count;

  // Measure slide width + gap (they change with the breakpoint)
  useEffect(() => {
    const viewport = viewportRef.current;
    const first = firstSlideRef.current;
    if (!viewport || !first) return;
    const measure = () => {
      const second = first.nextElementSibling as HTMLElement | null;
      const slide = first.offsetWidth;
      const step = second ? second.offsetLeft - first.offsetLeft : slide;
      setGeometry({ viewport: viewport.clientWidth, slide, step });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  // Re-enable the transition after an instant re-centre
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setAnimate(true);
      setPos((p) => {
        // Rapid clicks can outrun the re-centre; fold back into the middle copy first
        const base = p < count || p >= count * 2 ? count + (((p % count) + count) % count) : p;
        return base + dir;
      });
    },
    [count]
  );

  const goTo = (i: number) => {
    setAnimate(true);
    setPos(count + i);
  };

  // After sliding into the first/last copy, jump (without animation) to the same review in the middle copy
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    if (pos < count || pos >= count * 2) {
      setAnimate(false);
      setPos(count + active);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (dx < -SWIPE_THRESHOLD) go(1);
    else if (dx > SWIPE_THRESHOLD) go(-1);
  };

  // Autoplay: always advance every few seconds (skipped only while the browser tab is hidden).
  // Any manual move (pos change) restarts the countdown. Reduced-motion users still get the
  // change, just without the slide animation (motion-reduce:transition-none on the track).
  useEffect(() => {
    const id = window.setInterval(() => {
      if (!document.hidden) go(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [pos, go]);

  // Centre the active slide inside the viewport
  const offset = geometry.viewport / 2 - (pos * geometry.step + geometry.slide / 2);

  return (
    <section
      aria-labelledby="wd-reviews-heading"
      className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="mx-auto max-w-[860px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E3F8FD] px-5 py-2 text-[15px] font-semibold text-[#061A40] sm:text-[16px]">
            <Star size={18} className="fill-[#FFB400] text-[#FFB400]" aria-hidden="true" />
            Our Clients
          </span>
          <h2
            id="wd-reviews-heading"
            className="mt-5 text-[32px] font-bold leading-[1.15] tracking-tight sm:text-[44px] lg:text-[56px]"
          >
            Client <span className="text-[#00C8EF]">Reviews</span> About
            <br className="hidden sm:block" /> Their Experience!
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-relaxed text-[#3A4A66] sm:text-[18px] lg:text-[20px]">
            Elevate your online presence with a team that truly cares about your success.
          </p>
        </div>

        {/* Carousel */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client reviews"
          className="relative mt-12 sm:mt-14 lg:mt-16"
        >
          {/* Vertical padding leaves room for the active card's glow */}
          <div
            ref={viewportRef}
            className="overflow-hidden px-1 py-6 sm:mx-16 lg:mx-14"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex items-stretch gap-5 lg:gap-6 ${
                animate ? "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none" : ""
              }`}
              style={{ transform: `translate3d(${offset}px, 0, 0)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((review, i) => {
                const isActive = i === pos;
                return (
                  <div
                    key={`${review.id}-${i}`}
                    ref={i === 0 ? firstSlideRef : undefined}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${(i % count) + 1} of ${count}: ${review.name}`}
                    aria-hidden={!isActive}
                    className={`w-[82vw] max-w-[420px] shrink-0 sm:w-[calc(50%-10px)] sm:max-w-none lg:w-[calc((100%-48px)/3)] ${
                      animate ? "transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none" : ""
                    } ${isActive ? "z-10 scale-100 opacity-100" : "scale-[0.92] opacity-90"}`}
                  >
                    <ReviewCard review={review} active={isActive} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#061A40] shadow-[0_8px_24px_rgba(6,26,64,0.16)] transition hover:scale-105 hover:text-[#00A8D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8EF] sm:size-14"
          >
            <ChevronLeft size={26} strokeWidth={2.6} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="absolute right-0 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#061A40] shadow-[0_8px_24px_rgba(6,26,64,0.16)] transition hover:scale-105 hover:text-[#00A8D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8EF] sm:size-14"
          >
            <ChevronRight size={26} strokeWidth={2.6} aria-hidden="true" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex items-center justify-center gap-3" role="tablist" aria-label="Choose a review">
          {REVIEWS.map((review, i) => (
            <button
              key={review.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show review by ${review.name}`}
              onClick={() => goTo(i)}
              className={`size-3.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8EF] focus-visible:ring-offset-2 ${
                i === active ? "scale-125 bg-[#00C8EF] shadow-[0_0_10px_rgba(0,200,239,0.5)]" : "bg-[#CBD3E1] hover:bg-[#9FB0CB]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
