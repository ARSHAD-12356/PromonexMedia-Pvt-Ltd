import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface EcommerceMarketingImageTextSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  supportingDescription?: string;
  bullets: string[];
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
  imageNote: string;
  imageFirst?: boolean;
  surface?: "white" | "mist";
}

export default function EcommerceMarketingImageTextSection({
  eyebrow,
  title,
  description,
  supportingDescription,
  bullets,
  href,
  cta,
  image,
  imageAlt,
  imageNote,
  imageFirst = true,
  surface = "white",
}: EcommerceMarketingImageTextSectionProps) {
  const imagePanel = (
    <div className="group relative overflow-hidden rounded-[28px] border border-[#DCEAF4] bg-[#EAF8FD] p-3 shadow-[0_22px_60px_rgba(6,26,64,0.09)] sm:rounded-[34px] sm:p-4">
      <div className="relative aspect-[1.18/1] overflow-hidden rounded-[21px] bg-[#DDEFFC] sm:rounded-[26px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      </div>
      <div className="absolute bottom-6 left-6 inline-flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(6,26,64,0.13)] sm:bottom-8 sm:left-8 sm:px-4 sm:py-3">
        <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
        <span className="text-[11px] font-bold text-[#10264B] sm:text-[12px]">{imageNote}</span>
      </div>
    </div>
  );

  const copyPanel = (
    <div>
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
      {supportingDescription && (
        <p className="mt-4 max-w-[590px] text-[15px] leading-7 text-[#52617E] sm:text-[17px] sm:leading-8">
          {supportingDescription}
        </p>
      )}
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
  );

  return (
    <section
      className={surface === "mist" ? "bg-[#F7FBFE] px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24" : "bg-white px-4 py-16 font-['Poppins',sans-serif] text-[#061A40] sm:px-6 sm:py-20 lg:py-24"}
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {imageFirst ? imagePanel : copyPanel}
        {imageFirst ? copyPanel : imagePanel}
      </div>
    </section>
  );
}
