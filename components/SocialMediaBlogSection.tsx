"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { DEFAULT_BLOGS, loadPublicBlogs, type BlogPostItem } from "@/lib/blogData";

const SOCIAL_BLOGS = DEFAULT_BLOGS.filter((post) => post.category.toLowerCase() === "social media");

export default function SocialMediaBlogSection() {
  const [posts, setPosts] = useState<BlogPostItem[]>(SOCIAL_BLOGS);

  useEffect(() => {
    let active = true;
    loadPublicBlogs()
      .then((allPosts) => {
        if (active) {
          setPosts(allPosts.filter((post) => post.category.toLowerCase() === "social media"));
        }
      })
      .catch(() => {
        if (active) setPosts(SOCIAL_BLOGS);
      });

    return () => {
      active = false;
    };
  }, []);

  const visiblePosts = posts.slice(0, 3);

  return (
    <section
      id="social-media-insights"
      aria-labelledby="social-media-insights-heading"
      className="relative isolate overflow-hidden bg-[#020B35] px-4 py-16 font-['Poppins',sans-serif] text-white sm:px-6 sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,184,230,0.18)_0%,rgba(48,92,190,0.08)_48%,transparent_75%)] blur-3xl" />
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[740px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#53D7F4]/25 bg-[#00B8E6]/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8AE9FC] sm:text-[11px]">
              <span className="size-2 rounded-full bg-[#00B8E6]" aria-hidden="true" />
              Social media insights
            </span>
            <h2 id="social-media-insights-heading" className="mt-4 text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]">
              Ideas for your next <span className="text-[#53D7F4]">conversation.</span>
            </h2>
            <p className="mt-4 max-w-[640px] text-[14px] leading-7 text-[#C5D1E4] sm:text-[16px] sm:leading-8">
              Practical reads on building a stronger social presence, creating useful content and making paid campaigns work harder.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-4 py-3 text-[13px] font-semibold text-white transition hover:border-[#53D7F4]/60 hover:bg-white/[0.08] hover:text-[#8AE9FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6]"
          >
            Browse all insights
            <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {visiblePosts.length > 0 ? (
          <div className={`mt-9 grid gap-5 sm:mt-11 ${visiblePosts.length === 1 ? "mx-auto max-w-[440px]" : visiblePosts.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
            {visiblePosts.map((post) => (
              <article key={post.id} className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#071744] shadow-[0_16px_44px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#53D7F4]/40 hover:shadow-[0_24px_55px_rgba(0,0,0,0.25)]">
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-[#0D2457]" aria-label={`Read ${post.title}`}>
                  {/* Blog images can come from the existing blog CMS, so keep the current public image handling. */}
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#087AA5] shadow-sm">
                    {post.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium text-[#AAB9D2]">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays size={13} aria-hidden="true" />{post.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 size={13} aria-hidden="true" />{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-[18px] font-bold leading-[1.35] tracking-tight text-white sm:text-[20px]">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-[#8AE9FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6]">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[13px] leading-[1.75] text-[#C5D1E4] sm:text-[14px]">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="group/read mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[12px] font-bold text-[#53D7F4] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6]">
                    Read article
                    <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover/read:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-8 text-center text-sm text-[#C5D1E4]">
            New social media articles are on the way. Browse all of our latest insights in the meantime.
          </p>
        )}
      </div>
    </section>
  );
}
