"use client";

import { useEffect, useState } from "react";
import { Award, BarChart3, Trophy, UsersRound, type LucideIcon } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  Icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
}

const STATS: StatItem[] = [
  {
    value: 100,
    suffix: "+",
    label: "Clients Served",
    Icon: UsersRound,
    iconColor: "#8257E8",
    iconBackground: "#F1EBFF",
  },
  {
    value: 40,
    suffix: "+",
    label: "Industries Served",
    Icon: BarChart3,
    iconColor: "#168BFF",
    iconBackground: "#E9F4FF",
  },
  {
    value: 90,
    suffix: "%+",
    label: "Client Retention",
    Icon: Award,
    iconColor: "#7857E8",
    iconBackground: "#F0ECFF",
  },
  {
    value: 7,
    suffix: "X",
    label: "Growth-Focused Approach",
    Icon: Trophy,
    iconColor: "#168BFF",
    iconBackground: "#FBEAFF",
  },
];

function AnimatedStatValue({
  value,
  suffix,
}: Pick<StatItem, "value" | "suffix">) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let timerId: NodeJS.Timeout | null = null;
    let isCancelled = false;

    const startAnimation = () => {
      if (isCancelled) return;
      let startTime: number | undefined;

      const updateCount = (timestamp: number) => {
        if (isCancelled) return;
        startTime ??= timestamp;
        const progress = Math.min((timestamp - startTime) / 1600, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * easedProgress));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(updateCount);
        } else {
          // Reached target value: wait 2 seconds, then reset to 0 and repeat
          setCount(value);
          timerId = setTimeout(() => {
            if (isCancelled) return;
            setCount(0);
            startAnimation();
          }, 2000);
        }
      };

      frameId = window.requestAnimationFrame(updateCount);
    };

    startAnimation();

    return () => {
      isCancelled = true;
      if (frameId) window.cancelAnimationFrame(frameId);
      if (timerId) clearTimeout(timerId);
    };
  }, [value]);

  return (
    <div className="font-poppins text-[22px] font-bold leading-none tracking-tight text-[#00BFFF] sm:text-[28px] lg:text-[32px] xl:text-[42px]">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      aria-label="Promonex Media results"
      className="relative z-10 w-full bg-white text-[#09183D]"
    >
      <div className="mx-auto max-w-7xl px-3 py-2 sm:px-6 sm:py-8 lg:px-8 lg:py-4">
        <div className="stats-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ Icon, ...stat }, index) => (
            <div
              key={stat.label}
              className={`stat-item flex flex-col items-center justify-center gap-1 px-2 text-center sm:flex-row sm:gap-4 sm:px-5 sm:text-left lg:justify-start lg:px-7
                ${index < 2 ? "border-b border-[#DCE5F1] pt-1.5 pb-2" : "pt-2 pb-1.5"}`}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 lg:h-14 lg:w-14 xl:h-[72px] xl:w-[72px]"
                style={{
                  color: stat.iconColor,
                  backgroundColor: stat.iconBackground,
                }}
              >
                <Icon aria-hidden="true" size={20} strokeWidth={1.8} className="sm:hidden" />
                <Icon aria-hidden="true" size={28} strokeWidth={1.8} className="hidden sm:block" />
              </span>
              <span className="stat-content min-w-0">
                <AnimatedStatValue value={stat.value} suffix={stat.suffix} />
                <span className="mt-0.5 block font-poppins text-[11px] leading-snug text-[#52617E] sm:text-[15px] lg:text-[13px] xl:text-[17px]">
                  {stat.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
