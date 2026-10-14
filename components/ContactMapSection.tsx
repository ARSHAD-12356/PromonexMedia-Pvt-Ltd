import React from "react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8525169053105!2d85.14871697517776!3d25.609816577447663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590532da9f95%3A0x8a6a3230dae805e3!2sPromonex%20Media%20%7C%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1791958327629!5m2!1sen!2sin";

// Full-width Google Map of the Promonex Media office (Patna)
export default function ContactMapSection() {
  return (
    <section aria-label="Promonex Media office location on Google Maps" className="w-full bg-white">
      <iframe
        src={MAP_EMBED_URL}
        title="Promonex Media | Digital Marketing Agency – Office Location, Patna"
        className="block w-full h-[320px] sm:h-[400px] lg:h-[450px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
}
