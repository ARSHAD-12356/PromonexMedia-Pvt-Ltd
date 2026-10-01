"use client";

import { motion } from "framer-motion";
import {
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
      </div>
    </section>
  );
}