"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    value: 100,
    suffix: "+",
    label: "Clients Served",
  },
  {
    value: 40,
    suffix: "+",
    label: "Industries Served",
  },
  {
    value: 90,
    suffix: "%+",
    label: "Client Retention",
  },
  {
    value: 7,
    suffix: "X",
    label: "Growth-Focused Approach",
  },
];

function AnimatedStatValue({
  value,
  suffix,
}: Pick<StatItem, "value" | "suffix">) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    let frameId = 0;
    const updateCount = (timestamp: number) => {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / 1600, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateCount);
      }
    };

    frameId = window.requestAnimationFrame(updateCount);
    return () => window.cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <motion.div className="text-2xl sm:text-[26px] lg:text-[28px] xl:text-[30px] font-bold bg-[linear-gradient(135deg,#F8547D_0%,#F9537D_25%,#E93A94_55%,#C020E8_100%)] bg-clip-text text-transparent tracking-tight">
      {count}
      {suffix}
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-2xl sm:rounded-3xl bg-[#06144A]/40 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_30px_rgba(0,191,255,0.06)] overflow-hidden"
      >
        {/* Subtle top edge glow highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-4 py-6 sm:py-8 lg:py-9 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <AnimatedStatValue value={stat.value} suffix={stat.suffix} />
              <div className="mt-1.5 text-xs sm:text-sm text-slate-300/80 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
