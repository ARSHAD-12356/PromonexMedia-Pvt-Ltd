"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function AnimatedCounter({
  target,
  suffix = "",
  startFrom = 0,
  cycleKey,
  duration = 1600,
}: {
  target: number;
  suffix?: string;
  startFrom?: number;
  cycleKey: number;
  duration?: number;
}) {
  const [count, setCount] = useState(startFrom);

  useEffect(() => {
    let startTime: number | null = null;
    let animId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startFrom + (target - startFrom) * easeProgress);
      setCount(current);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    setCount(startFrom);
    animId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animId);
  }, [cycleKey, target, startFrom, duration]);

  return (
    <span>
      {count}
      {suffix ? (
        <span className="text-[#00D9FF] ml-0.5 drop-shadow-[0_0_10px_rgba(0,217,255,0.4)]">
          {suffix}
        </span>
      ) : null}
    </span>
  );
}

export default function AboutStatsSection() {
  const [cycleKey, setCycleKey] = useState(0);

  // Automatically restart counting every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCycleKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      aria-label="Promonex Media Milestones & Stats"
      className="relative w-full bg-[#020B35] border-t border-b border-white/[0.08] py-6 sm:py-7 md:py-8 overflow-hidden select-none"
    >
      {/* Subtle Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,217,255,0.08),transparent_70%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          
          {/* STAT 1: 2022 (STATIC AS REQUESTED) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-3.5 sm:py-4 lg:py-2"
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight drop-shadow-[0_2px_12px_rgba(0,217,255,0.25)]">
              2022
            </h3>
            <p className="text-xs sm:text-[12.5px] text-slate-300 font-normal mt-1.5">
              Promonex founded
            </p>
          </motion.div>

          {/* STAT 2: 200+ (ANIMATED RECURRING LOOP) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-3.5 sm:py-4 lg:py-2 border-l border-white/[0.08] lg:border-l-0"
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight drop-shadow-[0_2px_12px_rgba(0,217,255,0.25)]">
              <AnimatedCounter
                target={200}
                suffix="+"
                startFrom={0}
                cycleKey={cycleKey}
                duration={1600}
              />
            </h3>
            <p className="text-xs sm:text-[12.5px] text-slate-300 font-normal mt-1.5">
              Clients served
            </p>
          </motion.div>

          {/* STAT 3: 300+ (ANIMATED RECURRING LOOP) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-3.5 sm:py-4 lg:py-2"
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight drop-shadow-[0_2px_12px_rgba(0,217,255,0.25)]">
              <AnimatedCounter
                target={300}
                suffix="+"
                startFrom={0}
                cycleKey={cycleKey}
                duration={1600}
              />
            </h3>
            <p className="text-xs sm:text-[12.5px] text-slate-300 font-normal mt-1.5">
              Projects delivered
            </p>
          </motion.div>

          {/* STAT 4: Patna (STATIC) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-3.5 sm:py-4 lg:py-2 border-l border-white/[0.08] lg:border-l-0"
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight drop-shadow-[0_2px_12px_rgba(0,217,255,0.25)]">
              Patna
            </h3>
            <p className="text-xs sm:text-[12.5px] text-slate-300 font-normal mt-1.5">
              Headquartered in India
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
