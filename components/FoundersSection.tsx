"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FoundersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const revealWhenVisible = () => {
      const section = sectionRef.current;
      if (!section) return;

      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", revealWhenVisible);
        window.removeEventListener("resize", revealWhenVisible);
      }
    };

    revealWhenVisible();
    window.addEventListener("scroll", revealWhenVisible, { passive: true });
    window.addEventListener("resize", revealWhenVisible);

    return () => {
      window.removeEventListener("scroll", revealWhenVisible);
      window.removeEventListener("resize", revealWhenVisible);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="founders"
      aria-labelledby="founders-heading"
      className="founders-section"
    >
      <div className="founders-layout">
        <motion.div
          className="founders-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
        >
          <h2 id="founders-heading">
            Meet the <span>Founders</span>
          </h2>
          <span className="founders-heading-rule" aria-hidden="true" />
          <p>
            Abhishek Kumar, Founder, and Nancy Shekhar, Co-Founder of Promonex
            Media, are building a digital marketing agency focused on helping
            businesses grow through practical strategy, creative execution and
            performance-driven marketing.
          </p>
          <p>
            From understanding client requirements and shaping digital
            strategies to leading campaigns, managing operations and staying
            involved in execution, the founders work closely across the
            business. Their approach is simple: understand the business,
            identify what can drive growth and execute strategies consistently.
          </p>
          <p>
            Based in Patna, Bihar, Promonex Media works with businesses looking
            to strengthen their online presence, generate better leads, increase
            sales and build brands that grow beyond just social media.
          </p>
          <Link href="#about" className="founders-know-more">
            Know More
            <ArrowRight className="founders-know-more-arrow" size={20} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}