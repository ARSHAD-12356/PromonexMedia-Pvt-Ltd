"use client";

import React from "react";
import { motion } from "framer-motion";

interface BarData {
  height: number; // height in SVG coordinate units
}

// 14 increasing bars replicating the exact visual rhythm of the reference
const BARS: BarData[] = [
  { height: 26 },
  { height: 38 },
  { height: 52 },
  { height: 68 },
  { height: 86 },
  { height: 104 },
  { height: 124 },
  { height: 148 },
  { height: 174 },
  { height: 204 },
  { height: 238 },
  { height: 276 },
  { height: 318 },
  { height: 366 },
];

// Key inflection points for the dynamic trend line
const POINTS = [
  { x: 30, y: 310 },
  { x: 110, y: 280 },
  { x: 190, y: 245 },
  { x: 265, y: 200 },
  { x: 330, y: 215 }, // organic slight dip
  { x: 420, y: 150 },
  { x: 490, y: 165 }, // subtle adjustment
  { x: 560, y: 95 },
  { x: 630, y: 35 },  // rocket peak with arrow
];

export default function GrowthChart() {
  const svgWidth = 660;
  const svgHeight = 420;
  const baseY = 400; // baseline for the bars
  const barWidth = 24;
  const gap = 19;
  const startX = 26;

  // Build the SVG path string through the data points
  const pathD = POINTS.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, "");

  return (
    <div className="relative w-full max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] mx-auto select-none">
      {/* Ambient background glow behind the chart */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#00BFFF]/15 via-[#00D9FF]/20 to-[#5B3CC4]/15 rounded-3xl blur-3xl -z-10 pointer-events-none opacity-80" />

      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Promonex Growth Performance Visual"
        role="img"
      >
        <defs>
          {/* Vertical bar gradient (royal navy -> electric blue -> bright cyan) */}
          <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#0B1A56" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#122B88" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#008CEE" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="1" />
          </linearGradient>

          {/* Glowing line gradient */}
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#00D9FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="1" />
          </linearGradient>

          {/* Area fill under trend line */}
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </linearGradient>

          {/* Intense cyan glow filter */}
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic rising bars */}
        {BARS.map((bar, index) => {
          const x = startX + index * (barWidth + gap);
          const y = baseY - bar.height;

          return (
            <g key={index}>
              {/* Subtle bar glow shadow */}
              <motion.rect
                x={x}
                y={y}
                width={barWidth}
                height={bar.height}
                rx={5}
                fill="url(#barGradient)"
                opacity={0.3}
                filter="url(#cyanGlow)"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [1, 1.04, 1] }}
                transition={{
                  duration: 2.4,
                  delay: 0.15 + index * 0.045,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                style={{ originY: 1, transformBox: "fill-box" }}
              />

              {/* Main crisp bar */}
              <motion.rect
                x={x}
                y={y}
                width={barWidth}
                height={bar.height}
                rx={5}
                fill="url(#barGradient)"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [1, 1.025, 1] }}
                transition={{
                  duration: 2.4,
                  delay: 0.15 + index * 0.045,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                style={{ originY: 1, transformBox: "fill-box" }}
              />

              {/* Highlight cap on top edge of each bar */}
              <motion.rect
                x={x + 1}
                y={y}
                width={barWidth - 2}
                height={3}
                rx={1.5}
                fill="#FFFFFF"
                opacity={0.7}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 2.4,
                  delay: 0.3 + index * 0.045,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </g>
          );
        })}

        {/* Upward Connecting Line */}
        <motion.path
          d={pathD}
          stroke="url(#lineGradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#cyanGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.4, delay: 0.5, ease: "easeInOut" },
            opacity: { duration: 0.3, delay: 0.5 },
          }}
        />

        {/* Circular glowing data points at inflection peaks */}
        {POINTS.map((pt, i) => (
          <g key={i}>
            {/* Outer halo */}
            <motion.circle
              cx={pt.x}
              cy={pt.y}
              r={7}
              fill="#00D9FF"
              opacity={0.35}
              filter="url(#cyanGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.35 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + i * 0.08,
                ease: "easeOut",
              }}
            />
            {/* Core dot */}
            <motion.circle
              cx={pt.x}
              cy={pt.y}
              r={3.8}
              fill="#00FFFF"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + i * 0.08,
                ease: "backOut",
              }}
            />
          </g>
        ))}

        {/* Arrow at the rocket end of the line */}
        <motion.g
          initial={{ scale: 0, opacity: 0, x: -10, y: 10 }}
          animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.7,
            ease: "backOut",
          }}
        >
          {/* Arrowhead polygon pointing northeast (up and right) */}
          <path
            d="M 618 32 L 634 32 L 634 48 M 634 32 L 616 50"
            stroke="#00FFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#cyanGlow)"
          />
        </motion.g>
      </svg>
    </div>
  );
}
