import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Megaphone, Sparkles } from "lucide-react";

const FEATURES = [
  {
    eyebrow: "Performance marketing",
    title: "Ads that move shoppers toward a purchase.",
    description:
      "We plan ecommerce advertising around the complete buying journey—from product discovery to purchase and remarketing.",
    bullets: [
      "Meta sales campaigns",
      "Google Search and Shopping",
      "Performance Max campaigns",
      "Dynamic remarketing",
      "Audience and creative testing",
    ],
    href: "/services/performance-marketing",
    cta: "Explore performance marketing",
    image: "/assets/industry-stories/ecommerce.jpg",
    imageAlt: "Customer discovering an ecommerce product at home",
    imageNote: "Reach the right shoppers",
    Icon: Megaphone,
  },
  {
    eyebrow: "Creative strategy",
    title: "Make every product story easier to notice.",
    description:
      "We shape product benefits, offers and creative formats into clear campaign ideas that fit your brand and audience.",
    bullets: [
      "Static performance ads",
      "Product video concepts",
      "Reels and short-form creatives",
      "UGC-style concepts",
      "Offer-led campaign visuals",
    ],
    href: "/services/graphic-design",
    cta: "Explore creative services",
    image: "/assets/content-creation-hero.jpg",
    imageAlt: "Content creator preparing a product-focused video shoot",
    imageNote: "Creative built for the feed",
    Icon: Sparkles,
  },
];

function FeatureBlock({
  feature,
  reversed,
}: {
  feature: (typeof FEATURES)[number];
  reversed: boolean;
}) {
  const { eyebrow, title, description, bullets, href, cta, image, imageAlt, imageNote, Icon } = feature;

  return (
    <section className={reversed ? "bg-[#F7FBFE] px-4 py-16 sm:px-6 sm:py-20 lg:py-24" : "bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"}>
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={reversed ? "group relative order-2 overflow-hidden rounded-[28px] border border-[#DCEAF4] bg-[#EAF8FD] p-3 shadow-[0_22px_60px_rgba(6,26,64,0.09)] sm:rounded-[34px] sm:p-4 lg:order-1" : "group relative overflow-hidden rounded-[28px] border border-[#DCEAF4] bg-[#EAF8FD] p-3 shadow-[0_22px_60px_rgba(6,26,64,0.09)] sm:rounded-[34px] sm:p-4"}>
          <div className="relative aspect-[1.22/1] overflow-hidden rounded-[21px] bg-[#DDEFFC] sm:rounded-[26px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />
          </div>
          <div className="absolute bottom-6 left-6 inline-flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(6,26,64,0.13)] sm:bottom-8 sm:left-8 sm:px-4 sm:py-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#E4F8FD] text-[#087AA5]">
              <Icon size={17} aria-hidden="true" />
            </span>
            <span className="text-[11px] font-bold text-[#10264B] sm:text-[12px]">{imageNote}</span>
          </div>
        </div>

        <div className={reversed ? "order-1 lg:order-2" : ""}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E4F8FD] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#087AA5] sm:text-[12px]">
            <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 className="mt-5 max-w-[620px] text-[clamp(2rem,4.1vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em] text-[#061A40]">
            {title}
          </h2>
          <p className="mt-4 max-w-[590px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
            {description}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-5">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-[14px] leading-6 text-[#18345B] sm:text-[15px]">
                <span className="mt-1 flex size-[19px] shrink-0 items-center justify-center rounded-full bg-[#E4F8FD] text-[#078CC4]">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
          <Link
            href={href}
            className="group/cta mt-8 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#061A40] px-5 py-3 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(6,26,64,0.16)] transition hover:-translate-y-0.5 hover:bg-[#0B2C69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6] focus-visible:ring-offset-2 sm:text-[14px]"
          >
            {cta}
            <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover/cta:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function EcommerceMarketingFeatureSections() {
  return (
    <div>
      {FEATURES.map((feature, index) => (
        <FeatureBlock key={feature.eyebrow} feature={feature} reversed={index === 1} />
      ))}
    </div>
  );
}
