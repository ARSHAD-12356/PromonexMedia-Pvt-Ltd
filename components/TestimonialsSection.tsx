"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";

type Review = {
  name: string;
  metadata: string;
  review?: string;
  reviewUrl?: string;
};

const reviews: Review[] = [
  {
    name: "Pankaj Thakur",
    metadata: "1 review · 3 months ago",
    reviewUrl: "https://maps.app.goo.gl/X7dTdEHRZBoWZG5WA",
    review:
      "Promoto Media feels less like an agency and more like an extension of our own team. Whether it's content planning, branding, performance marketing, or social media, they always come up with practical ideas instead of generic solutions.",
  },
  {
    name: "aashu Khan",
    metadata: "3 reviews · 3 months ago",
    reviewUrl: "https://maps.app.goo.gl/g5e1sZgVaWcK33Fr8",
    review:
      "A great digital marketing company with professional service and excellent support. The owner is very polite, humble, and cooperative. It was a pleasant experience working with them. Highly recommended!",
  },
  {
    name: "Eyeflix Eyewear",
    metadata: "1 review · 4 months ago",
    reviewUrl: "https://maps.app.goo.gl/2jhHLv42Pqmyhs2P9",
    review:
      "I had a really good experience working with Promoto Media. Their team is professional, easy to communicate with, and understands business needs very well. They helped me with digital marketing and running ads, and I started seeing positive results.",
  },
  {
    name: "Subhm SHAW",
    metadata: "2 reviews · 3 months ago",
    reviewUrl: "https://maps.app.goo.gl/3WtYW2dams3tbQ8DA",
    review:
      "Promoto Media didn’t just give us services, they gave us solutions. They took time to understand our goals and delivered beyond expectations. Our social media, ads, and branding look 100x better now. If you’re a business owner tired of juggling multiple agencies, these guys handle it all.",
  },
  {
    name: "Tvayi",
    metadata: "1 review · 3 months ago",
    reviewUrl: "https://maps.app.goo.gl/rAFnhneBRxrj6iKw5",
    review:
      "We had a great experience working with Promoto Media. Their team is professional, responsive, and always ready to help. They understood our brand requirements well and delivered quality work on time. We appreciate their support and would recommend them to anyone looking for reliable digital marketing and creative services.",
  },
  {
    name: "Nupur Mitra",
    metadata: "8 reviews · 3 months ago",
    reviewUrl: "https://maps.app.goo.gl/4Yn4mGqHkw17V6zF8",
    review:
      "Promoto Media, A new platform that provides excellent service, meticulously addressing and resolving every issue; I hope you secure great work and that your business flourishes. ❤️",
  },
  {
    name: "Harsh Agarwal",
    metadata: "3 reviews · 1 month ago",
    reviewUrl: "https://maps.app.goo.gl/VBseFqx5V8THsh5L8",
    review:
      "Great experience working with Promonex Media their approach feels more focused on understanding the business than just running ads the team is creative, responsive and genuinely focused on results definitely a good choice for businesses looking to build a strong digital presence",
  },
  {
    name: "Rishi shah",
    metadata: "5 reviews · 4 months ago",
    reviewUrl: "https://maps.app.goo.gl/1hfQ7skbHqzqyF1dA",
    review:
      "Promoto Media has really helped my business grow. As the Founder of Eyeflix, I am very happy with their digital marketing services. They handled everything for us from social media to running ads. Their Meta Ads campaigns helped us reach better results.",
  },
  {
    name: "Rishav Raj",
    metadata: "6 reviews · 5 months ago",
    reviewUrl: "https://maps.app.goo.gl/p5ngmKi7pKa3EjzH7",
    review:
      "You ll love there degital marketing services agr aap small businesses ho ya bde business aapko ek bar yha jarur aana chaiye you ll definitely say ki kya kamal ka boost hai business me",
  },
  {
    name: "niraj kumar",
    metadata: "Local Guide · 9 reviews · 29 photos · 7 months ago",
    reviewUrl: "https://maps.app.goo.gl/CQNtucAVC1N69w7g9",
    review:
      "Best choice for eCommerce business growth. They helped us drive sales through performance marketing and paid campaigns.",
  },
  {
    name: "Lata Devi",
    metadata: "3 reviews · 3 months ago",
    reviewUrl: "https://maps.app.goo.gl/3RsZ6E9yDJ3CMZ3dA",
    review: "Best digital marketing service provider in Patna👌",
  },
  {
    name: "Adarsh Raj",
    metadata: "3 reviews · 5 months ago",
    reviewUrl: "https://maps.app.goo.gl/NPQ3oyudeA3HHyDN8",
    review: "Best digital marketing agency in patna",
  },
  {
    name: "Gupta Ankit",
    metadata: "3 reviews · 1 month ago",
    reviewUrl: "https://maps.app.goo.gl/J6ar3ydMTjLC5cJq9",
    review:
      "If you are looking for any best digital marketing services in Patna Bihar or anywhere like social media marketing or search engine optimisation or website development, or to make your business digital presence with quality branding then...",
  },
  {
    name: "Shubham Gupta Official",
    metadata: "8 reviews · 1 month ago",
    reviewUrl: "https://maps.app.goo.gl/Ry9szcjqirQbugTv8",
    review:
      "Had a great experience working with Promonex Media Private Limited a professional digital marketing agency in Patna.. their team has a strong understanding of social media marketing, SEO, content creation, website development, and online...",
  },
  {
    name: "TECHNICAL KING BRAJESH",
    metadata: "1 review · 3 months ago",
  },
  {
    name: "Nishi Singh",
    metadata: "5 months ago",
  },
];

const repeatedReviews = [...reviews, ...reviews, ...reviews];

function GoogleWordmark() {
  return (
    <span className="testimonial-google-wordmark" aria-label="Google">
      <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
    </span>
  );
}

function GoogleGIcon() {
  return (
    <svg className="testimonial-google-mark" viewBox="0 0 24 24" role="img" aria-label="Google">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.44a5.5 5.5 0 0 1-2.4 3.6v2.94h3.89c2.28-2.1 3.56-5.2 3.56-8.78z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.95l-3.89-2.94c-1.08.72-2.46 1.14-4.04 1.14-3.11 0-5.74-2.1-6.68-4.92H1.31v3.03A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.32 14.33A7.21 7.21 0 0 1 4.95 12c0-.81.14-1.6.37-2.33V6.64H1.31A12 12 0 0 0 0 12c0 1.94.46 3.77 1.31 5.36l4.01-3.03z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.28 2.69 1.31 6.64l4.01 3.03C6.26 6.85 8.89 4.75 12 4.75z" />
    </svg>
  );
}

function ReviewCard({
  review,
  isClone = false,
  index,
}: {
  review: (typeof reviews)[number];
  isClone?: boolean;
  index: number;
}) {
  return (
    <motion.article
      className="testimonial-card"
      aria-label={`${review.name}'s review`}
      aria-hidden={isClone}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: isClone ? 0 : index * 0.09 }}
    >
      <div className="testimonial-reviewer">
        <span className="testimonial-avatar" aria-hidden="true">
          <UserRound size={27} strokeWidth={1.7} />
        </span>
        <div className="testimonial-reviewer-info">
          <h3>{review.name}</h3>
          <p>{review.metadata}</p>
        </div>
        <GoogleGIcon />
      </div>
      <div className="testimonial-stars" aria-label="5 out of 5 stars">
        <span aria-hidden="true">★★★★★</span>
      </div>
      {review.review && <p className="testimonial-review-text">{review.review}</p>}
      {review.reviewUrl && (
        <a
          className="testimonial-read-more"
          href={review.reviewUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={isClone ? -1 : undefined}
        >
          Read more
        </a>
      )}
    </motion.article>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const manualMotionRef = useRef<{ start: number; target: number; elapsed: number } | null>(null);
  const dragRef = useRef<{ pointerX: number; offset: number } | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const moveByCard = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".testimonial-card");
    if (!card) return;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const target = offsetRef.current - direction * (card.getBoundingClientRect().width + gap);
    if (reducedMotionRef.current) {
      offsetRef.current = target;
    } else {
      manualMotionRef.current = { start: offsetRef.current, target, elapsed: 0 };
    }
    setActiveDot((current) => (current + direction + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const section = document.querySelector(".testimonials-section");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      reducedMotionRef.current = motionPreference.matches;
      if (motionPreference.matches) pausedRef.current = true;
    };
    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    let previousTime = 0;
    let autoplayElapsed = 0;
    let segmentWidth = track.scrollWidth / 3;
    const autoplayInterval = 3.5;
    offsetRef.current = -segmentWidth;

    const resizeObserver = new ResizeObserver(() => {
      segmentWidth = track.scrollWidth / 3;
      offsetRef.current = -segmentWidth;
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    });
    resizeObserver.observe(track);

    const animate = (time: number) => {
      const elapsed = previousTime ? Math.min((time - previousTime) / 1000, 0.04) : 0;
      previousTime = time;

      if (manualMotionRef.current) {
        const motion = manualMotionRef.current;
        motion.elapsed += elapsed;
        const progress = Math.min(motion.elapsed / 0.65, 1);
        const easedProgress = 1 - (1 - progress) ** 3;
        offsetRef.current = motion.start + (motion.target - motion.start) * easedProgress;
        if (progress === 1) manualMotionRef.current = null;
      } else if (pausedRef.current || dragRef.current) {
        autoplayElapsed = 0;
      } else {
        autoplayElapsed += elapsed;
        if (autoplayElapsed >= autoplayInterval) {
          autoplayElapsed = 0;
          const card = track.querySelector<HTMLElement>(".testimonial-card");
          if (card) {
            const styles = window.getComputedStyle(track);
            const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
            const target = offsetRef.current - card.getBoundingClientRect().width - gap;
            manualMotionRef.current = { start: offsetRef.current, target, elapsed: 0 };
          }
          setActiveDot((current) => (current + 1) % reviews.length);
        }
      }

      if (segmentWidth > 0) {
        if (offsetRef.current <= -2 * segmentWidth) offsetRef.current += segmentWidth;
        if (offsetRef.current > 0) offsetRef.current -= segmentWidth;
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" || !viewportRef.current) return;
    dragRef.current = { pointerX: event.clientX, offset: offsetRef.current };
    pausedRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || !trackRef.current) return;
    offsetRef.current = dragRef.current.offset + event.clientX - dragRef.current.pointerX;
    trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    const distance = event.clientX - dragRef.current.pointerX;
    dragRef.current = null;
    pausedRef.current = false;
    if (Math.abs(distance) > 36) moveByCard(distance < 0 ? 1 : -1);
  };

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <span className="testimonial-edge testimonial-edge-left" aria-hidden="true" />
      <span className="testimonial-edge testimonial-edge-right" aria-hidden="true" />
      <div className="testimonials-inner">
        <header className="testimonials-header">
          <motion.div
            className="testimonials-badge"
            initial={{ opacity: 0, y: 14 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span aria-hidden="true" />CLIENT FEEDBACK
          </motion.div>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.1 }}
          >
            What clients say about our
            <span>digital marketing services</span>
          </motion.h2>
          <motion.span
            className="testimonials-heading-rule"
            aria-hidden="true"
            initial={{ opacity: 0, scaleX: 0.75 }}
            animate={isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.75 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
          >
            Real feedback from businesses we&apos;ve helped to grow, build their brand and generate measurable results through digital marketing.
          </motion.p>
        </header>

        <div className="testimonials-layout">
          <motion.aside
            className="google-rating"
            aria-label="Google rating: excellent, based on 16 reviews"
            initial={{ opacity: 0, y: 18 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
          >
            <strong>EXCELLENT</strong>
            <span className="google-rating-stars" aria-label="5 out of 5 stars">★★★★★</span>
            <span className="google-rating-count">Based on <b>16 reviews</b></span>
            <GoogleWordmark />
          </motion.aside>

          <div
            className="testimonials-carousel"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = reducedMotionRef.current; }}
          >
            <button
              className="testimonial-control testimonial-control-prev"
              type="button"
              aria-label="Previous reviews"
              onClick={() => moveByCard(-1)}
            >
              <ArrowLeft size={23} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <div
              className="testimonials-viewport"
              ref={viewportRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onTouchStart={() => { pausedRef.current = true; }}
              onTouchEnd={() => { pausedRef.current = reducedMotionRef.current; }}
              onFocus={() => { pausedRef.current = true; }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  pausedRef.current = reducedMotionRef.current;
                }
              }}
            >
              <div className="testimonials-track" ref={trackRef}>
                {repeatedReviews.map((review, index) => (
                  <ReviewCard
                    key={`${index}-${review.name}`}
                    review={review}
                    index={index % reviews.length}
                    isClone={index < reviews.length || index >= reviews.length * 2}
                  />
                ))}
              </div>
            </div>
            <button
              className="testimonial-control testimonial-control-next"
              type="button"
              aria-label="Next reviews"
              onClick={() => moveByCard(1)}
            >
              <ArrowRight size={23} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <div className="testimonials-pagination" aria-label="Review carousel position">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  className={index === activeDot ? "is-active" : ""}
                  aria-label={`Go to review set ${index + 1}`}
                  aria-current={index === activeDot ? "true" : undefined}
                  onClick={() => {
                    const direction = (index - activeDot + reviews.length) % reviews.length;
                    for (let step = 0; step < direction; step += 1) moveByCard(1);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <span className="trustindex-badge">Verified by Trustindex <span aria-label="Information">ⓘ</span></span>
      </div>
    </section>
  );
}