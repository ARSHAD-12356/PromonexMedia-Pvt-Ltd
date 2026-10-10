"use client";

import { MapPin } from "lucide-react";
import LocationContactForm from "@/components/LocationContactForm";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.8525162265023!2d85.148717!3d25.6098166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590532da9f95%3A0x8a6a3230dae805e3!2sPromonex%20Media%20%7C%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1790933309757!5m2!1sen!2sin";

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

        <LocationContactForm />
      </div>
    </section>
  );
}