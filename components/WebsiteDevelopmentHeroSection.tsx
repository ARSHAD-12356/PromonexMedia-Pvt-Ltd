import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Globe } from "lucide-react";

export default function WebsiteDevelopmentHeroSection() {
  return (
    <section className="relative isolate flex min-h-[min(760px,calc(100svh-76px))] items-center overflow-hidden bg-[linear-gradient(112deg,#031b43_0%,#041c43_54%,#031735_100%)] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-56 h-[590px] w-[590px] rounded-full border border-blue-400/[0.08] bg-blue-500/[0.025]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-44 top-[-280px] h-[660px] w-[660px] rounded-full border border-blue-400/[0.08]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-390px] right-[8%] h-[650px] w-[650px] rounded-full border border-blue-400/[0.08] bg-blue-500/[0.04]" />

      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-6 py-14 sm:px-10 md:pl-24 lg:min-h-[700px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-3 lg:py-10 xl:pl-12 xl:pr-8">
        <div className="relative z-10 max-w-[570px]">
          <h1 className="text-[clamp(2.65rem,5.2vw,3.75rem)] font-extrabold leading-[1.12]">
            <span className="block">Professional</span>
            <span className="block whitespace-nowrap text-[#00C9F4]">Website Design</span>
            <span className="block">&amp; Development</span>
            <span className="block">Company</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.62] text-[#d0d9eb] sm:text-[17px]">
            Brandwitty is a professional web design and <strong className="font-bold">website development company in Mumbai.</strong> With a transparent process and the latest tech, our expert web developers can create a highly functioning and seamless website that delights your customers and startles your competition.
          </p>
          <Link
            href="/contact"
            className="group mt-7 inline-flex min-h-[64px] max-w-full items-center gap-5 rounded-full border-2 border-[#00D9FF] py-1.5 pl-7 pr-2 text-[15px] font-bold text-white shadow-[0_0_18px_rgba(0,217,255,0.12)] transition-[box-shadow,background-color] duration-200 hover:bg-[#00D9FF]/[0.07] hover:shadow-[0_0_26px_rgba(0,217,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#031b43] sm:text-[17px]"
          >
            <span>Discuss your project now</span>
            <span className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#00C9F4] text-[#031b43] transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={25} strokeWidth={2.2} aria-hidden="true" />
            </span>
          </Link>
        </div>

        <div aria-hidden="true" className="relative mx-auto aspect-[1.12/1] w-full max-w-[650px] lg:ml-auto lg:mt-6">
          <div className="absolute left-[7%] top-[4%] z-30 flex size-[76px] rotate-[-15deg] items-center justify-center rounded-2xl bg-[#00BFF3] text-white shadow-[0_10px_28px_rgba(0,191,243,0.24)]">
            <Globe size={39} strokeWidth={1.8} />
          </div>
          <div className="absolute left-[24%] top-[2%] z-0 h-[54%] w-[72%] overflow-hidden rounded-[17px] border border-blue-200/20 bg-[#edf4fc] shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
            <div className="flex h-8 items-center gap-1.5 border-b border-blue-200/60 bg-[#0b3564] px-3">
              <i className="size-2 rounded-full bg-[#ff5f57]" />
              <i className="size-2 rounded-full bg-[#ffbd2e]" />
              <i className="size-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex h-9 items-center justify-end gap-5 px-4 text-[8px] font-medium text-[#2c4a78]">
              <span>Home</span><span>About</span><span>Services</span><span>Contact</span>
              <span className="rounded bg-blue-600 px-3 py-1 text-white">Get Started</span>
            </div>
            <div className="grid grid-cols-[1fr_1.1fr] gap-3 px-5 pt-3">
              <div className="pt-1">
                <p className="text-[17px] font-bold leading-[1.12] text-[#071c44]">Modern<br /><span className="text-blue-600">Web Solutions</span></p>
                <div className="mt-3 space-y-1.5">
                  <i className="block h-1.5 w-full rounded bg-[#cbdcf0]" />
                  <i className="block h-1.5 w-[84%] rounded bg-[#cbdcf0]" />
                  <i className="block h-1.5 w-[72%] rounded bg-[#cbdcf0]" />
                </div>
                <span className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-[8px] font-bold text-white">Get Started</span>
              </div>
              <div className="rounded-t-xl bg-[linear-gradient(140deg,#b6d8f5,#4779ac_55%,#193d6b)]" />
            </div>
          </div>
          <div className="absolute right-[-1%] top-[39%] z-10 w-[36%] rounded-[14px] border border-blue-300/25 bg-[#102847]/95 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
            <div className="mb-3 flex gap-1.5"><i className="size-2 rounded-full bg-[#ff5f57]" /><i className="size-2 rounded-full bg-[#ffbd2e]" /><i className="size-2 rounded-full bg-[#28c840]" /></div>
            <div className="space-y-1 font-mono text-[8px] leading-[1.45] text-[#d2d9e8]">
              <p><span className="mr-2 text-slate-500">1</span><span className="text-pink-400">&lt;!DOCTYPE html&gt;</span></p>
              <p><span className="mr-2 text-slate-500">2</span><span className="text-pink-300">&lt;html</span> lang=<span className="text-amber-300">"en"</span><span className="text-pink-300">&gt;</span></p>
              <p><span className="mr-2 text-slate-500">3</span>  <span className="text-pink-300">&lt;head&gt;</span></p>
              <p><span className="mr-2 text-slate-500">4</span>    <span className="text-pink-300">&lt;title&gt;</span>Website<span className="text-pink-300">&lt;/title&gt;</span></p>
              <p><span className="mr-2 text-slate-500">5</span>  <span className="text-pink-300">&lt;/head&gt;</span></p>
              <p><span className="mr-2 text-slate-500">6</span>  <span className="text-pink-300">&lt;body&gt;</span></p>
              <p><span className="mr-2 text-slate-500">7</span>    <span className="text-pink-300">&lt;h1&gt;</span>Build Your Brand</p>
              <p><span className="mr-2 text-slate-500">8</span>  <span className="text-pink-300">&lt;/body&gt;</span></p>
            </div>
          </div>
          <Image
            src="/assets/web%20hero.png"
            alt="Smiling web developer with glasses working behind a silver laptop"
            width={650}
            height={482}
            className="absolute bottom-0 right-0 z-20 h-[88%] w-[96%] object-contain object-bottom"
            sizes="(max-width: 1023px) 92vw, 650px"
            priority
          />
          <div className="absolute bottom-[33%] right-[2%] z-30 flex size-[68px] rotate-[12deg] items-center justify-center rounded-xl bg-white text-blue-600 shadow-[0_12px_28px_rgba(0,0,0,0.3)]">
            <Code2 size={34} strokeWidth={2.2} />
          </div>
          <span className="absolute left-[10%] top-[37%] z-30 size-4 rounded-full bg-[#00D9FF]" />
          <span className="absolute right-[2%] top-[19%] z-30 size-3 rounded-full bg-[#00D9FF]" />
        </div>
      </div>
    </section>
  );
}