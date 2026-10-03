"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CarFront,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Zap,
  type LucideIcon,
} from "lucide-react";

const INDUSTRIES: { name: string; Icon: LucideIcon }[] = [
  { name: "E-commerce", Icon: ShoppingCart },
  { name: "Quick commerce", Icon: Zap },
  { name: "Healthcare", Icon: HeartPulse },
  { name: "Real Estate", Icon: Building2 },
  { name: "Education", Icon: GraduationCap },
  { name: "Automotive", Icon: CarFront },
];

export default function IndustriesSection() {
  return (
    <section id="industry" className="industries-modern">
      <div className="industries-modern-inner">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="industries-modern-header"
        >
          <span className="industries-modern-eyebrow">Our expertise</span>
          <h2>Industries We Serve</h2>
          <p>Focused digital strategies for the markets that move business forward.</p>
        </motion.header>

        <div className="industries-modern-grid">
          {INDUSTRIES.map(({ name, Icon }, index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -7, transition: { duration: 0.25, ease: "easeOut" } }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
              className="industry-modern-card"
            >
              <span className="industry-modern-icon" aria-hidden="true">
                <Icon size={25} strokeWidth={1.8} />
              </span>
              <h3>{name}</h3>
              <span className="industry-modern-arrow" aria-hidden="true">↗</span>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CENTER: View All Industries Action Button */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#2563EB] bg-[#040D36] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] hover:shadow-[0_14px_36px_rgba(4,120,253,0.45)] hover:border-transparent hover:scale-105 active:scale-95"
          >
            <span>View All Industries</span>
            <ArrowRight
              size={16}
              className="stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}