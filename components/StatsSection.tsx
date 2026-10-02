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
    <div className="min-w-[5ch] font-poppins text-[34px] font-bold leading-none tracking-tight text-[#00BFFF] sm:text-[38px] lg:text-[32px] xl:text-[42px]">
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
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-4">
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ Icon, ...stat }) => (
            <div
              key={stat.label}
              className="stat-item flex min-h-[100px] items-center justify-center gap-3 border-b border-[#DCE5F1] px-2 py-3 last:border-b-0 sm:gap-4 sm:px-5 lg:justify-start lg:px-7"
            >
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 lg:h-14 lg:w-14 xl:h-[72px] xl:w-[72px]"
                style={{
                  color: stat.iconColor,
                  backgroundColor: stat.iconBackground,
                }}
              >
                <Icon aria-hidden="true" size={30} strokeWidth={1.8} />
              </span>
              <span className="stat-content min-w-0">
                <AnimatedStatValue value={stat.value} suffix={stat.suffix} />
                <span className="mt-1.5 block font-poppins text-sm leading-snug text-[#52617E] sm:text-[15px] lg:text-[13px] xl:text-[17px]">
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
