import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  MessageCircle,
  Play,
  Send,
} from "lucide-react";

const BENEFITS = [
  "Platform-specific content calendars",
  "A consistent visual and written brand voice",
  "Short-form video and campaign creative",
  "Thoughtful community management",
  "Paid social support for relevant reach",
];

export function SocialMediaIntroSection() {
  return (
    <section
      aria-labelledby="social-media-intro-heading"
      className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            Social media, with intention
          </span>
          <h2
            id="social-media-intro-heading"
            className="mt-5 max-w-[620px] text-[clamp(2rem,4.1vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]"
          >
            Great brands grow through <span className="text-[#078BC4]">social media.</span>
          </h2>
          <p className="mt-5 max-w-[590px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            Social platforms help people discover your brand, understand what makes it different and start a conversation. A clear strategy gives each post and campaign a purpose.
          </p>
          <p className="mt-4 max-w-[590px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            Promonex Media brings channel planning, engaging content, paid campaigns and community support together for businesses in Patna and across India.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {["Channel strategy", "Useful content", "Real conversations"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[#D8EAF4] bg-[#F7FBFE] px-3.5 py-2 text-[12px] font-semibold text-[#18345B] sm:text-[13px]">
                <Check size={14} className="text-[#078BC4]" strokeWidth={2.7} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
          <Link
            href="#contact-social-media"
            className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#061A40] px-5 py-3 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(6,26,64,0.16)] transition hover:-translate-y-0.5 hover:bg-[#0B2C69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6] focus-visible:ring-offset-2 sm:text-[14px]"
          >
            Plan your social strategy
            <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="group relative order-1 lg:order-2">
          <div className="relative aspect-[1.08/1] overflow-hidden rounded-[28px] sm:rounded-[34px]">
            <Image
              src="/service assets/Social Media Marketing Dashboard.png"
              alt="Social media channels and campaign performance dashboard"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(6,26,64,0.16)] sm:bottom-6 sm:left-6 sm:px-4 sm:py-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-[#E4F8FD] text-[#078BC4]">
                <MessageCircle size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[11px] font-bold text-[#061A40] sm:text-[12px]">Built for connection</span>
                <span className="mt-0.5 block text-[10px] text-[#52617E] sm:text-[11px]">Strategy meets conversation</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialMediaBenefitsSection() {
  return (
    <section
      aria-labelledby="social-media-benefits-heading"
      className="bg-[#F4F9FD] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1fr_0.94fr] lg:gap-16">
        <div className="group relative">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[36px] bg-[#E2F4FC] sm:-inset-5" />
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-[28px] border border-[#D8EAF4] bg-[#DCEAF5] shadow-[0_22px_60px_rgba(6,26,64,0.1)] sm:rounded-[34px]">
            <Image
              src="/assets/our-story-team-clean.png"
              alt="Promonex Media team planning digital content together"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3.5 py-2 text-[11px] font-semibold text-[#061A40] shadow-[0_10px_26px_rgba(6,26,64,0.13)] sm:bottom-6 sm:right-6 sm:text-[12px]">
              <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
              One connected team
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            Make every interaction count
          </span>
          <h2
            id="social-media-benefits-heading"
            className="mt-5 max-w-[620px] text-[clamp(2rem,4.1vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]"
          >
            Turn your social presence into <span className="text-[#078BC4]">brand momentum.</span>
          </h2>
          <p className="mt-5 max-w-[590px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            A steady, considered presence makes it easier for the right people to recognise your brand and stay connected. We shape the work around your audience, platforms and business goals.
          </p>
          <ul className="mt-7 space-y-4 sm:space-y-[18px]">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3.5 text-[14px] leading-6 text-[#18345B] sm:text-[15px]">
                <span className="mt-0.5 flex size-[21px] shrink-0 items-center justify-center rounded-full bg-[#DDF5FC] text-[#078BC4]">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <Link
            href="#contact-social-media"
            className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#061A40] px-5 py-3 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(6,26,64,0.16)] transition hover:-translate-y-0.5 hover:bg-[#0B2C69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6] focus-visible:ring-offset-2 sm:text-[14px]"
          >
            Explore social media marketing
            <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SocialMediaPlaybookVisual() {
  return (
    <div className="relative mx-auto flex min-h-[310px] w-full max-w-[510px] items-center justify-center sm:min-h-[360px]">
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-[#00B8E6]/15 blur-[70px]" />

      <div className="relative z-10 w-[min(100%,380px)] rounded-[26px] border border-white/70 bg-white p-4 text-[#061A40] shadow-[0_28px_80px_rgba(0,0,0,0.3)] sm:p-5">
        <div className="flex items-center justify-between gap-3 border-b border-[#E6EDF5] pb-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#E4F8FD] text-[#078BC4]">
              <Send size={18} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[13px] font-bold sm:text-[14px]">Your social playbook</span>
              <span className="mt-0.5 block text-[11px] text-[#64748B]">A connected brand presence</span>
            </span>
          </div>
          <span className="rounded-full bg-[#E4F8FD] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#087AA5] sm:text-[10px]">Social</span>
        </div>

        <div className="mt-4 space-y-2.5">
          {[
            { icon: <Heart size={16} />, title: "Know your audience", text: "Start with what matters to them" },
            { icon: <Play size={16} />, title: "Create with purpose", text: "Give each post a clear role" },
            { icon: <MessageCircle size={16} />, title: "Keep the conversation", text: "Turn attention into connection" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-[#E5EDF6] bg-[#F8FBFE] px-3 py-2.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#E4F8FD] text-[#078BC4]">{item.icon}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold sm:text-[12px]">{item.title}</span>
                <span className="mt-0.5 block truncate text-[10px] text-[#64748B] sm:text-[11px]">{item.text}</span>
              </span>
              <Check size={16} className="shrink-0 text-[#078BC4]" strokeWidth={2.7} aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#061A40] px-4 py-3 text-white">
          <span className="text-[11px] font-semibold sm:text-[12px]">Plan · Publish · Learn</span>
          <ArrowUpRight size={17} className="text-[#53D7F4]" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function SocialMediaGrowthCtaSection() {
  return (
    <section className="bg-white px-4 py-8 font-['Poppins',sans-serif] sm:px-6 sm:py-12">
      <div className="relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[#061A40] px-5 py-12 text-white shadow-[0_24px_70px_rgba(6,26,64,0.2)] sm:rounded-[34px] sm:px-9 sm:py-14 lg:px-14 lg:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_50%,rgba(0,184,230,0.22),transparent_42%),radial-gradient(circle_at_8%_10%,rgba(48,92,190,0.32),transparent_34%)]" />
        <div className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="relative z-10 max-w-[600px] py-2 lg:py-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#53D7F4]/25 bg-[#00B8E6]/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8AE9FC] sm:text-[11px]">
              <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
              Ready to grow?
            </span>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.045em]">
              Let&apos;s make your brand part of the <span className="text-[#53D7F4]">conversation.</span>
            </h2>
            <p className="mt-5 max-w-[570px] text-[14px] leading-7 text-[#D3DCEC] sm:text-[16px] sm:leading-8">
              Tell us about your audience and goals. We&apos;ll help you shape a social media plan that brings content, campaigns and community together.
            </p>
            <Link
              href="#contact-social-media"
              className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#00C8EF] px-5 py-3 text-[13px] font-bold text-[#061A40] shadow-[0_12px_32px_rgba(0,200,239,0.22)] transition hover:-translate-y-0.5 hover:bg-[#73E3F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A40] sm:text-[14px]"
            >
              Talk to our social team
              <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <SocialMediaPlaybookVisual />
        </div>
      </div>
    </section>
  );
}
