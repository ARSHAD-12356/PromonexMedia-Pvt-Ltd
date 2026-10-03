"use client";

import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.8525162265023!2d85.148717!3d25.6098166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590532da9f95%3A0x8a6a3230dae805e3!2sPromonex%20Media%20%7C%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1790933309757!5m2!1sen!2sin";

function sendInquiry(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const message = [
    "Hello Promonex Media, I would like to discuss a project.",
    `Name: ${formData.get("name")}`,
    `Phone: ${formData.get("phone")}`,
    `Email: ${formData.get("email")}`,
    `Service: ${formData.get("service")}`,
    `Details: ${formData.get("message") || "Not provided"}`,
  ].join("\n");

  window.open(
    `https://wa.me/917061941818?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

const fieldClassName =
  "w-full rounded-lg border border-white/80 bg-white px-3 py-2.5 text-sm text-[#08183D] placeholder:text-slate-400 outline-none transition focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/30";

export default function LocationContactSection() {
  return (
    <section
      id="our-location"
      aria-labelledby="location-heading"
      className="w-full bg-white px-4 py-12 text-[#08183D] sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch lg:gap-10">
        <div className="flex min-w-0 flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">
            Find us in Patna
          </span>
          <h2
            id="location-heading"
            className="mt-2 font-poppins text-[32px] font-bold leading-tight sm:text-[38px]"
          >
            <span className="text-black">Our</span>{" "}
            <span className="text-[#1E40AF]">Location</span>
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#586782] sm:text-base">
            Visit Promonex Media in Patna, Bihar. We would be glad to discuss how we can help your business grow.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#273C61]">
            <MapPin size={18} className="shrink-0 text-[#1D4ED8]" aria-hidden="true" />
            Patna, Bihar
          </div>
          <div className="mt-5 min-h-[320px] flex-1 overflow-hidden rounded-2xl border border-[#DCE5F1] shadow-[0_12px_36px_rgba(8,24,61,0.08)]">
            <iframe
              title="Promonex Media location in Patna"
              src={mapEmbedUrl}
              className="h-full min-h-[320px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 72 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-w-0 flex-col overflow-hidden rounded-2xl bg-[#06144A] p-5 text-white shadow-[0_22px_55px_rgba(2,11,53,0.2)] sm:p-7 lg:p-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#1D4ED8]/20 blur-3xl"
          />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D9FF]">
              Let&apos;s talk
            </span>
            <h3 className="mt-2 font-poppins text-2xl font-bold leading-tight sm:text-[28px]">
              Tell us about your project
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Share a few details and we&apos;ll connect with you to plan the next step.
            </p>
          </div>

          <form onSubmit={sendInquiry} className="relative mt-5 flex flex-1 flex-col gap-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block text-xs font-medium text-slate-200">
                Full name
                <input
                  className={`${fieldClassName} mt-1.5`}
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="block text-xs font-medium text-slate-200">
                Phone number
                <input
                  className={`${fieldClassName} mt-1.5`}
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  required
                />
              </label>
            </div>
            <label className="block text-xs font-medium text-slate-200">
              Email address
              <input
                className={`${fieldClassName} mt-1.5`}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
              />
            </label>
            <label className="block text-xs font-medium text-slate-200">
              Service you&apos;re interested in
              <select className={`${fieldClassName} mt-1.5`} name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                <option>Performance marketing</option>
                <option>SEO</option>
                <option>Social media marketing</option>
                <option>Website development</option>
                <option>Creative design</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block text-xs font-medium text-slate-200">
              Project details <span className="font-normal text-slate-400">(optional)</span>
              <textarea
                className={`${fieldClassName} mt-1.5 min-h-[76px] resize-y`}
                name="message"
                placeholder="What would you like to achieve?"
                rows={2}
              />
            </label>
            <motion.button
              type="submit"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] hover:bg-[linear-gradient(90deg,#FA5679_0%,#E93A94_25%,#BB20E9_45%,#0478FD_65%,#189CFD_82%,#4AE1FC_100%)] px-5 font-semibold text-white shadow-[0_8px_24px_rgba(29,78,216,0.3)] hover:shadow-[0_10px_30px_rgba(4,120,253,0.35)] transition-all duration-300"
            >
              <span>Submit</span>
              <ArrowRight size={18} aria-hidden="true" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}