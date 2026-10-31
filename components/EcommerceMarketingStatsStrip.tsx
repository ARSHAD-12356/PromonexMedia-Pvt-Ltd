"use client";

import { useEffect, useState } from "react";

const STATS = [
  { value: 100, suffix: "+", label: "Clients served" },
  { value: 40, suffix: "+", label: "Industries served" },
  { value: 90, suffix: "%+", label: "Client retention" },
  { value: 7, suffix: "X", label: "Growth-focused approach" },
];

function AnimatedStatValue({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let pauseId: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const animate = () => {
      let startTime: number | undefined;

      const update = (timestamp: number) => {
        if (cancelled) return;
        startTime ??= timestamp;
        const progress = Math.min((timestamp - startTime) / 1600, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * easedProgress));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(update);
          return;
        }

        setCount(value);
        pauseId = setTimeout(() => {
          if (cancelled) return;
          setCount(0);
          animate();
        }, 2000);
      };

      frameId = window.requestAnimationFrame(update);
    };

    animate();
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      if (pauseId) clearTimeout(pauseId);
    };
  }, [value]);

  return (
    <p className="text-[28px] font-extrabold leading-none tracking-tight text-[#061A40] sm:text-[34px]">
      {count}{suffix}
    </p>
  );
}

export default function EcommerceMarketingStatsStrip() {
  return (
    <section aria-label="Promonex Media results" className="bg-white px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[22px] border border-[#DCE5F1] bg-[#FBFDFF]">
        <div className="grid grid-cols-2 divide-x divide-y divide-[#E3EAF3] lg:grid-cols-4 lg:divide-y-0">
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className="flex min-h-[104px] flex-col items-center justify-center px-3 py-5 text-center sm:min-h-[116px] sm:px-5">
              <AnimatedStatValue value={value} suffix={suffix} />
              <p className="mt-2.5 text-[12px] font-medium text-[#60708A] sm:text-[14px]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
