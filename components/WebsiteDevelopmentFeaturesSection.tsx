import { ClipboardCheck, PencilRuler, UserRound, Wrench } from "lucide-react";

const features = [
  {
    title: "Customization",
    description:
      "Tailor-made solutions that reflect your brand identity and resonate with your target audience.",
    icon: PencilRuler,
    iconColor: "#FFAD00",
  },
  {
    title: "User Experience (UX) Focus",
    description:
      "Prioritizing intuitive navigation and seamless interactions for a delightful user experience.",
    icon: UserRound,
    iconColor: "#19CDBD",
  },
  {
    title: "Cutting-edge Technology",
    description:
      "Leveraging the latest tools and frameworks to build modern, responsive, and high-performing websites.",
    icon: Wrench,
    iconColor: "#F33C9B",
  },
  {
    title: "Result-Driven Approach",
    description:
      "Committed to delivering tangible results with stunning designs that boost your business growth.",
    icon: ClipboardCheck,
    iconColor: "#8B56F5",
  },
];

export default function WebsiteDevelopmentFeaturesSection() {
  return (
    <section className="bg-white px-6 py-20 text-[#0A1B38] sm:px-8 lg:px-10 lg:pb-10 lg:pt-[98px]">
      <div className="mx-auto max-w-[1210px]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <h2 className="text-[32px] font-bold leading-[1.3] sm:text-[38px] lg:text-[48px]">
            <span className="block">We are a Leading</span>
            <span className="block text-[#00C8EF]">Website Development</span>
            <span className="block">Company in Patna</span>
          </h2>
          <p className="max-w-[540px] text-[16px] leading-[1.7] text-[#182a46] sm:text-[18px]">
            Your one-stop shop for customer-centric website development solutions. Our expert team uses the latest tech to create custom, responsive, and fast websites that delight users. From startups to enterprises, we deliver powerful digital products, including intuitive web designs, powerful <span className="font-semibold text-[#00AEDA]">CMS</span>, and scalable websites. Partner with the <strong className="font-bold text-[#101b32]">best website development company</strong> for cost-effective and future-proof services that keep your business running smoothly.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-[18px]">
          {features.map(({ title, description, icon: Icon, iconColor }) => (
            <article
              key={title}
              className="flex min-h-[318px] flex-col rounded-[16px] bg-[#041B42] p-7 text-white"
            >
              <span
                className="mb-5 flex size-[68px] shrink-0 items-center justify-center rounded-[15px] text-white"
                style={{ backgroundColor: iconColor }}
              >
                <Icon size={34} strokeWidth={2.6} aria-hidden="true" />
              </span>
              <h3 className="mb-3 text-[22px] font-bold leading-[1.3] sm:text-[23px]">
                {title}
              </h3>
              <p className="text-[16px] leading-[1.55] text-[#D4DDEE]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}