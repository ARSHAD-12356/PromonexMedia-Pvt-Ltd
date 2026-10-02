"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industry" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Client Reviews", href: "#testimonials-heading" },
  { label: "Our Location", href: "#our-location" },
  { label: "FAQs", href: "#faq-heading" },
];

const services = [
  "Performance Marketing",
  "SEO",
  "Social Media Marketing",
  "Website Development",
  "Creative Design",
];

const socialMarks = [
  {
    label: "Instagram",
    src: "/assets/instagram-icon.png",
  },
  {
    label: "Facebook",
    src: "https://thumb.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1280px-Facebook_f_logo_%282021%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    label: "X",
    src: "/assets/x-icon.png",
  },
  {
    label: "Gmail",
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Gmail_icon_%282026%29.svg/960px-Gmail_icon_%282026%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },
];

export default function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative isolate overflow-hidden border-t border-[#00BFFF]/25 bg-[#020B35] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(115deg, rgba(0, 191, 255, 0.08), transparent 42%, rgba(91, 60, 196, 0.12))",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.35fr_1fr_1.15fr_1fr] lg:gap-x-12 lg:px-8 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="sm:col-span-2 lg:col-span-1"
        >
          <Link href="#home" className="group inline-flex items-center gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF]">
            <Image
              src="/assets/promonex-logo.png"
              alt="Promonex Media Pvt. Ltd. logo"
              width={80}
              height={80}
              className="h-20 w-20 rounded-xl object-cover shadow-[0_8px_28px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-[1.04]"
            />
            <span className="max-w-[170px] text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#7DE8FF]">
              Promonex Media Pvt. Ltd.
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-300">
            Digital marketing solutions built to help businesses grow with clarity and purpose.
          </p>
          <ul aria-label="Social and email logos" className="mt-5 flex items-center gap-3">
            {socialMarks.map((social, index) => (
              <li key={social.label}>
                <motion.span
                  role="img"
                  aria-label={social.label}
                  title={social.label}
                  whileHover={{ y: -3, scale: 1.1, rotate: index % 2 === 0 ? -3 : 3 }}
                  transition={{ type: "spring", stiffness: 360, damping: 18 }}
                  className="group relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/15 bg-white/[0.08] shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-[#00D9FF]/65 hover:bg-[#00BFFF]/15 hover:shadow-[0_0_20px_rgba(0,217,255,0.28)]"
                >
                  <Image
                    src={social.src}
                    alt={social.label}
                    width={25}
                    height={25}
                    unoptimized
                    className="relative h-7 w-7 object-contain transition-opacity duration-300 group-hover:opacity-90"
                  />
                </motion.span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.nav
          aria-label="Footer navigation"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <h2 className="text-base font-bold text-white">Explore</h2>
          <ul className="mt-4 space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex text-[15px] text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-[#7DE8FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.22 }}
        >
          <h2 className="text-base font-bold text-white">Services</h2>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="#services"
                  className="inline-flex text-[15px] text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-[#7DE8FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF]"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.29 }}
        >
          <h2 className="text-base font-bold text-white">Contact</h2>
          <div className="mt-4 space-y-4">
            <Link
              href="#our-location"
              className="flex items-start gap-2.5 text-[15px] text-slate-300 transition-colors hover:text-[#7DE8FF]"
            >
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#00D9FF]" aria-hidden="true" />
              <span>Patna, Bihar</span>
            </Link>
            <a
              href="tel:+917061941818"
              className="flex items-center gap-2.5 text-[15px] text-slate-300 transition-colors hover:text-[#7DE8FF]"
            >
              <Phone size={18} className="shrink-0 text-[#00D9FF]" aria-hidden="true" />
              <span>+91 70619 41818</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 bg-[#06144A]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-8">
          <span>© {new Date().getFullYear()} Promonex Media Pvt. Ltd. All rights reserved.</span>
          <span>Patna, Bihar · Digital Marketing Agency</span>
        </div>
      </div>
    </motion.footer>
  );
}