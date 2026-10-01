"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface CaseStudy {
  brand: string;
  image: string;
  description: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    brand: "GRAHAM",
    image: "/assets/case study1.jpeg",
    description:
      "Graham Immigration Law, California, USA partnered with us to build a stronger and more recognisable brand on social media. We developed a content-led strategy around USCIS updates, asylum, immigration processes, testimonials and approved cases, identifying what formats and topics connected best with their audience. The approach helped strengthen brand credibility, generate 1.2M+ content views, reach 180K+ accounts and create 35+ high-impact social proof posts.",
  },
  {
    brand: "KUIKLO",
    image: "/assets/case study 2.jpeg",
    description:
      "Kuiklo wanted to strengthen its presence as a leading 10-minute grocery delivery platform in Patna. We worked across performance marketing, app acquisition, social media and local SEO, building content and campaigns around the searches that mattered to customers across the city. Our strategy helped Kuiklo strengthen its visibility across key local searches, with the brand ranking for multiple high-intent grocery delivery keywords across Patna, alongside reaching 1.8L+ app downloads and ₹60L monthly sales.",
  },
  {
    brand: "Bigrahpuram Developers",
    image: "/assets/case study 3.jpeg",
    description:
      "A real estate brand partnered with us to generate more qualified property enquiries through digital campaigns. We built targeted campaigns around location, pricing, lifestyle and project highlights, while continuously testing audiences, creatives and messaging. The strategy helped improve both lead quality and acquisition efficiency, generating 1,200+ property enquiries, reducing CPL by 38% and increasing qualified leads by 42%.",
  },
  {
    brand: "Tvayi",
    image: "/assets/case study 4.jpeg",
    description:
      "A growing demi-fine jewellery brand Tvayi partnered with us to turn premium product positioning into scalable online sales. We combined product-led creatives, Meta campaigns, audience segmentation and retargeting, continuously identifying the products and messaging driving the strongest response. The strategy helped the brand scale its digital acquisition while maintaining efficiency, generating ₹25L+ in attributed revenue, 3.4X ROAS and 68% growth in online sales.",
  },
  {
    brand: "Heroz",
    image: "/assets/case study 5.jpeg",
    description:
      "Heroz partnered with us to scale its digital presence and online sales across its backpack and travel-bag range. We combined SEO, performance campaigns, product optimisation and retargeting to build a stronger acquisition funnel. By continuously refining audiences, creatives and product campaigns, we helped scale the brand beyond organic visibility, generating ₹10L+ in attributed sales, 2.8X ROAS and 35% growth in returning visitors.",
  },
  {
    brand: "Jan Suraaj",
    image: "/assets/case study 6.jpeg",
    description:
      "Jan Suraaj partnered with us to strengthen its digital communication across Bihar. We managed social media handles, developed campaign-focused content and creatives, and executed digital campaigns for political leaders and public outreach initiatives. Our work focused on building consistent communication, improving audience engagement and amplifying campaign messaging across platforms. The experience gave us hands-on exposure to managing high-volume political communication and running digital campaigns at scale.",
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const lastPointerType = useRef("");

  const flipOn = (pointerType: string) => {
    if (pointerType === "mouse") setIsFlipped(true);
  };
  const flipOff = (pointerType: string) => {
    if (pointerType === "mouse") setIsFlipped(false);
  };

  return (
    <button
      type="button"
      className="case-study-card"
      data-flipped={isFlipped}
      onPointerDown={(event) => {
        lastPointerType.current = event.pointerType;
      }}
      onPointerEnter={(event) => flipOn(event.pointerType)}
      onPointerLeave={(event) => flipOff(event.pointerType)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      onClick={() => {
        if (lastPointerType.current === "touch") {
          setIsFlipped((flipped) => !flipped);
        } else {
          setIsFlipped(true);
        }
      }}
      aria-label={`${study.brand} case study. Hover or activate to ${isFlipped ? "hide" : "view"} details.`}
      aria-pressed={isFlipped}
    >
      <div className="case-study-card-inner">
        <div className="case-study-face case-study-front" aria-hidden={isFlipped}>
          <div className="case-study-image">
            <Image
              src={study.image}
              alt={`${study.brand} case study`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="case-study-brand-bar">
            <span>{study.brand}</span>
            <span className="case-study-arrow" aria-hidden="true">↘</span>
          </div>
        </div>

        <div className="case-study-face case-study-back" aria-hidden={!isFlipped}>
          <h3>{study.brand}</h3>
          <p><span>{study.description}</span></p>
        </div>
      </div>
    </button>
  );
}

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="case-studies-section"
    >
      <div className="case-studies-inner">
        <h2 id="case-studies-heading">
          Our <span>Case Studies</span>
        </h2>
        <div className="case-studies-grid">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.brand} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}