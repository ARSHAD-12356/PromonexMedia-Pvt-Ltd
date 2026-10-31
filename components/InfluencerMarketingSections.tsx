import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clapperboard,
  Instagram,
  Megaphone,
  Star,
  Users,
  Video,
  Youtube,
} from "lucide-react";

const SOLUTIONS = [
  {
    title: "Instagram & Reels creators",
    description: "Partner with creators who can introduce your products in a natural, platform-native way.",
    Icon: Instagram,
  },
  {
    title: "YouTube partnerships",
    description: "Build consideration with creator integrations, reviews and longer-form product stories.",
    Icon: Youtube,
  },
  {
    title: "Micro-influencer campaigns",
    description: "Reach focused communities through creators whose interests match your audience.",
    Icon: Users,
  },
  {
    title: "UGC & creator content",
    description: "Plan short-form creator assets for social channels, ads and your wider content mix.",
    Icon: Video,
  },
  {
    title: "Expert & public figure partnerships",
    description: "Bring trusted voices into campaigns where relevant expertise can support your story.",
    Icon: Star,
  },
];

const BENEFITS = [
  {
    title: "Authentic storytelling",
    description: "We look for a genuine fit between your brand, the creator and the audience they speak to.",
    Icon: Megaphone,
  },
  {
    title: "Clear campaign management",
    description: "Briefs, content timelines, deliverables and approvals stay organised from start to finish.",
    Icon: Clapperboard,
  },
  {
    title: "Platform-aware creative",
    description: "Shape each collaboration around the format, voice and viewing habits of its platform.",
    Icon: Video,
  },
  {
    title: "Measured learning",
    description: "Review agreed campaign measures to understand what resonated and guide the next step.",
    Icon: Check,
  },
];

export function InfluencerMarketingSolutionsSection() {
  return (
    <section
      aria-labelledby="influencer-solutions-heading"
      className="bg-[#F4F9FD] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-end gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[11px]">
              <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
              Creator campaign solutions
            </span>
            <h2
              id="influencer-solutions-heading"
              className="mt-5 max-w-[720px] text-[clamp(2rem,4.3vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.045em]"
            >
              Find the right voices for your <span className="text-[#078BC4]">brand story.</span>
            </h2>
          </div>
          <p className="max-w-[560px] text-[14px] leading-7 text-[#52617E] sm:text-[16px] sm:leading-8 lg:pb-1">
            From the first creator shortlist to campaign-ready content, we help you plan partnerships around your audience, message and goals.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:mt-11 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SOLUTIONS.map(({ title, description, Icon }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[22px] border border-[#DCEAF4] bg-white p-5 shadow-[0_10px_28px_rgba(6,26,64,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9BDCF1] hover:shadow-[0_20px_45px_rgba(6,26,64,0.11)] sm:min-h-[230px] sm:p-6"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#00B8E6] to-[#168BFF] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-[15px] bg-[#E4F8FD] text-[#087AA5]">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#8AA0BD]">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-[18px] font-bold leading-snug tracking-tight text-[#061A40] sm:text-[20px]">{title}</h3>
              <p className="mt-2.5 text-[13px] leading-[1.75] text-[#52617E] sm:text-[14px]">{description}</p>
            </article>
          ))}

          <article className="relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#061A40] p-5 text-white shadow-[0_18px_38px_rgba(6,26,64,0.14)] sm:min-h-[230px] sm:p-6">
            <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-16 size-48 rounded-full bg-[#00B8E6]/20 blur-3xl" />
            <div className="relative">
              <span className="flex size-12 items-center justify-center rounded-[15px] bg-[#00B8E6]/15 text-[#53D7F4]">
                <ArrowUpRight size={21} aria-hidden="true" />
              </span>
              <h3 className="mt-5 max-w-[260px] text-[19px] font-bold leading-snug sm:text-[21px]">Have a creator campaign in mind?</h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-[#C5D1E4]">Let&apos;s shape a plan that fits your brand and audience.</p>
            </div>
            <Link href="#contact-influencer-marketing" className="group/link relative mt-5 inline-flex w-fit items-center gap-2 text-[13px] font-bold text-[#53D7F4] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6]">
              Talk to our team
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover/link:translate-x-1" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export function InfluencerMarketingBrandSection() {
  return (
    <section
      aria-labelledby="influencer-brand-heading"
      className="bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1240px] gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[11px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            Partnerships with purpose
          </span>
          <h2 id="influencer-brand-heading" className="mt-5 max-w-[760px] text-[clamp(2.1rem,4.6vw,3.9rem)] font-bold leading-[1.08] tracking-[-0.05em]">
            How creator partnerships can help your <span className="text-[#078BC4]">brand grow.</span>
          </h2>
        </div>
        <div className="lg:pt-8">
          <p className="max-w-[590px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            Creators bring a personal point of view to your message. When the audience and brand fit are right, their content can help people discover your business, understand your offer and feel more confident taking the next step.
          </p>
          <p className="mt-4 max-w-[590px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            We coordinate the planning around that fit: clear briefs, useful creative direction and campaign goals agreed before content goes live.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-[12px] font-semibold text-[#18345B] sm:text-[13px]">
            {["Audience fit", "Creator-led storytelling", "Campaign clarity"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="flex size-[19px] items-center justify-center rounded-full bg-[#E4F8FD] text-[#078BC4]">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfluencerBenefit({ title, description, Icon }: (typeof BENEFITS)[number]) {
  return (
    <article className="group relative isolate overflow-hidden rounded-[22px] border border-[#D8EAF4] bg-white p-4 shadow-[0_12px_30px_rgba(6,26,64,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CDCF1] hover:shadow-[0_20px_44px_rgba(6,26,64,0.14)] sm:min-h-[215px] sm:p-5">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 -z-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#00B8E6] to-[#168BFF] transition-transform duration-500 group-hover:scale-x-100" />
      <span className="relative flex size-10 items-center justify-center rounded-[13px] bg-[#E4F8FD] text-[#087AA5] transition-colors duration-300 group-hover:bg-[#061A40] group-hover:text-[#53D7F4]">
        <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <h3 className="relative mt-4 text-[15px] font-bold leading-snug text-[#061A40] transition-colors duration-300 group-hover:text-[#087AA5] sm:text-[17px]">{title}</h3>
      <p className="mt-2 text-[12px] leading-[1.7] text-[#52617E] sm:text-[13px]">{description}</p>
    </article>
  );
}

export function InfluencerMarketingBenefitsSection() {
  return (
    <section
      aria-labelledby="influencer-benefits-heading"
      className="bg-[#FAFAFA] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[800px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[11px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            Built around your brand
          </span>
          <h2 id="influencer-benefits-heading" className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]">
            Creator campaigns with <span className="text-[#078BC4]">care at every step.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[14px] leading-7 text-[#52617E] sm:text-[16px] sm:leading-8">
            We bring the creator, content and campaign details together, while keeping the voice and values of your brand in view.
          </p>
        </div>

        <div className="mt-9 grid items-center gap-7 sm:mt-11 lg:grid-cols-[1fr_1.08fr_1fr] lg:gap-7">
          <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:gap-5">
            <InfluencerBenefit {...BENEFITS[0]} />
            <InfluencerBenefit {...BENEFITS[1]} />
          </div>

          <div className="order-1 mx-auto w-full max-w-[390px] lg:order-2 lg:max-w-[470px]">
            <Image
              src="/assets/influencer-marketing-creator-campaign.png"
              alt="Creator showcasing a fashion collaboration through social content"
              width={660}
              height={775}
              sizes="(max-width: 1023px) 88vw, 470px"
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="order-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
            <InfluencerBenefit {...BENEFITS[2]} />
            <InfluencerBenefit {...BENEFITS[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
