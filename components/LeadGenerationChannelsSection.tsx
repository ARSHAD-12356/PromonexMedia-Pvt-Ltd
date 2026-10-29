import Link from "next/link";
import {
  ArrowRight,
  Layout,
  Megaphone,
  PhoneCall,
  RefreshCw,
  Search,
  TrendingUp,
} from "lucide-react";

const channels = [
  {
    title: "Google Ads Lead Generation",
    description:
      "Capture high-intent prospects searching for the exact service or solution you offer.",
    icon: Search,
  },
  {
    title: "Meta Lead Generation",
    description:
      "Reach potential customers through Facebook and Instagram with creative campaigns and offers.",
    icon: Megaphone,
  },
  {
    title: "SEO Lead Generation",
    description:
      "Build long-term organic visibility around searches connected to your services and customer problems.",
    icon: TrendingUp,
  },
  {
    title: "Landing Page Development",
    description:
      "Turn campaign clicks into enquiries with focused landing pages and clear calls to action.",
    icon: Layout,
  },
  {
    title: "Call & WhatsApp Leads",
    description:
      "Make it easy for interested prospects to reach your business by phone or WhatsApp.",
    icon: PhoneCall,
  },
  {
    title: "Remarketing",
    description:
      "Reconnect with interested visitors and give them a reason to return and enquire.",
    icon: RefreshCw,
  },
];

export default function LeadGenerationChannelsSection() {
  return (
    <section
      aria-labelledby="lead-generation-channels-heading"
      className="w-full bg-[#F7F9FC] px-5 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1260px]">
        <div className="mx-auto mb-11 max-w-[900px] text-center sm:mb-14">
          <span className="inline-flex items-center rounded-full border border-[#00B8E6]/15 bg-[#E3F8FD] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0478FD] sm:text-xs">
            Lead Generation Channels
          </span>
          <h2
            id="lead-generation-channels-heading"
            className="mt-5 text-[clamp(2rem,4.3vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.04em] text-[#061A40]"
          >
            Google Ads, Meta Ads &amp; SEO{" "}
            <span className="text-[#00B8E6]">Lead Generation Services.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] text-[15px] leading-7 text-[#4A5A75] sm:text-[17px] sm:leading-8">
            We choose the right online lead generation channels based on your
            business, audience, search intent and buying journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {channels.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative flex min-h-[285px] flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#020B35] via-[#041246] to-[#010926] p-7 shadow-[0_15px_35px_rgba(2,11,53,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00D9FF]/50 hover:shadow-[0_20px_45px_rgba(0,217,255,0.2)] sm:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00D9FF]/[0.08] blur-2xl transition-all duration-300 group-hover:bg-[#00D9FF]/[0.16]"
              />
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00D9FF]/30 bg-[#00D9FF]/10 text-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#00D9FF]/60 group-hover:bg-[#00D9FF]/20">
                  <Icon size={23} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="text-[19px] font-bold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-[#00D9FF] sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-slate-300">
                  {description}
                </p>
              </div>

              <Link
                href="#lead-generation-contact"
                aria-label={`Ask us about ${title}`}
                className="relative z-10 mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white shadow-sm transition-all duration-300 hover:scale-110 hover:border-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#020B35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B35]"
              >
                <ArrowRight size={17} strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
