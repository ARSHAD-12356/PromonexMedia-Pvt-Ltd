export interface ManagedBlog {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  status: "Published" | "Draft";
}

export const INITIAL_BLOGS: ManagedBlog[] = [
  {
    id: "seo-strategies-2026",
    title: "7 On-Page SEO Strategies to Rank Higher in 2026",
    slug: "7-on-page-seo-strategies-2026",
    category: "SEO",
    author: "Promonex Editorial Team",
    authorRole: "SEO Director",
    date: "Oct 02, 2026",
    readTime: "5 min read",
    image: "/assets/blog/blog_seo_strategy.jpg",
    imageAlt: "SEO strategies and analytics dashboard",
    excerpt:
      "Learn the most effective on-page SEO techniques that can help your website rank higher and attract more organic traffic in 2026.",
    content:
      "## Introduction to Modern SEO\n\nSearch algorithms in 2026 prioritize authentic topical authority, structured schema, and blazing core web vitals.\n\n### 1. Intent Optimization\nEnsure every piece of content directly matches the searcher intent with fast answers and zero fluff.\n\n### 2. Technical Performance\nPage speed and responsive layouts remain non-negotiable ranking criteria.",
    metaTitle: "7 On-Page SEO Strategies to Rank Higher in 2026 | Promonex Media",
    metaDescription:
      "Discover the top 7 on-page SEO strategies to boost organic rankings, drive qualified search traffic, and outrank competitors in 2026.",
    keywords: "seo, on-page seo, search ranking 2026, promonex media",
    status: "Published",
  },
  {
    id: "social-media-presence",
    title: "How to Build a Strong Social Media Presence for Your Brand",
    slug: "build-strong-social-media-presence",
    category: "Social Media",
    author: "Promonex Growth Team",
    authorRole: "Social Media Strategist",
    date: "Sep 28, 2026",
    readTime: "4 min read",
    image: "/assets/blog/blog_social_media.jpg",
    imageAlt: "Social media marketing on smartphone",
    excerpt:
      "Discover actionable strategies to grow your brand on social media, increase engagement, and build a loyal community.",
    content:
      "## Establishing Consistency\n\nBrand voice, recurring weekly formats, and quick audience replies create durable organic reach across Instagram and LinkedIn.",
    metaTitle: "How to Build a Strong Social Media Presence for Your Brand",
    metaDescription:
      "Proven framework to build authority, scale engagement, and convert followers into customers on social media.",
    keywords: "social media marketing, brand growth, engagement, instagram, linkedin",
    status: "Published",
  },
  {
    id: "google-ads-roi",
    title: "Google Ads Best Practices for Higher ROI",
    slug: "google-ads-best-practices-higher-roi",
    category: "Google Ads",
    author: "Promonex Paid Ads Team",
    authorRole: "Performance Marketing Lead",
    date: "Sep 20, 2026",
    readTime: "6 min read",
    image: "/assets/blog/blog_google_ads.jpg",
    imageAlt: "Google Ads campaign optimization workspace",
    excerpt:
      "Get expert tips on Google Ads campaign optimization, targeting, and budget management to achieve better results.",
    content:
      "## Smart Bidding & Conversion Tracking\n\nAccurate server-side tracking combined with negative keyword curation ensures ad spend reaches high-intent prospects.",
    metaTitle: "Google Ads Best Practices for Higher ROI | Promonex Media",
    metaDescription:
      "Master Google Ads campaign optimization, search bid strategies, and audience retargeting for higher return on ad spend.",
    keywords: "google ads, ppc roi, conversion rate, search campaigns",
    status: "Published",
  },
];

export const MANAGED_BLOGS_KEY = "promonex_managed_blogs";

// All admin-managed blogs (published + drafts), falling back to the defaults
export function loadManagedBlogs(): ManagedBlog[] {
  if (typeof window === "undefined") return INITIAL_BLOGS;
  try {
    const saved = localStorage.getItem(MANAGED_BLOGS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to parse saved blogs", e);
  }
  return INITIAL_BLOGS;
}
