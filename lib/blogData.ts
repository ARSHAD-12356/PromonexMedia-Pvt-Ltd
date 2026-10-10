export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt?: string;
  excerpt: string;
  content: string;
  featured?: boolean;
}

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  SEO: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  "Social Media": { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  "Google Ads": { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200" },
  Performance: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-200" },
  "Web Design": { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
  Branding: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
};

export function getCategoryBadgeColor(category: string) {
  return (
    CATEGORY_COLORS[category] || {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    }
  );
}

export const DEFAULT_BLOGS: BlogPostItem[] = [
  {
    id: "seo-strategies-2026",
    title: "7 On-Page SEO Strategies to Rank Higher in 2026",
    slug: "7-on-page-seo-strategies-2026",
    category: "SEO",
    author: "Promonex SEO Team",
    authorRole: "Lead Search Strategist",
    date: "Oct 02, 2026",
    readTime: "5 min read",
    image: "/assets/blog/blog_seo_strategy.jpg",
    imageAlt: "7 On-Page SEO Strategies to Rank Higher in 2026",
    excerpt:
      "Learn the most effective on-page SEO techniques that can help your website rank higher and attract more organic traffic in 2026.",
    content: `Search engines in 2026 are powered by generative AI algorithms that prioritize authentic topical authority, verified schema markup, and blazingly fast Core Web Vitals. If you are still relying on legacy keyword stuffing, your search visibility is actively declining.

## 1. Zero-Click Search & Searcher Intent Alignment
Modern searchers require immediate, high-confidence answers. Google's Search Generative Experience (SGE) favors pages that provide crisp direct definitions in the opening 150 words before elaborating into comprehensive case studies.

Ensure every header in your article mirrors real conversational queries typed by your prospective buyers.

## 2. Entity SEO & Semantic Knowledge Graphs
Search engines have evolved from keyword matchers into knowledge engines. Connect your website's key concepts using structured JSON-LD schema markup:
- Article and Author Schema connecting your writers to verified LinkedIn profiles.
- Organization Schema showcasing brand credentials.
- LocalBusiness Schema cementing your geographic footprint in Patna and Bihar.

## 3. Core Web Vitals & Visual Stability
Google strictly penalizes layout shifts (CLS) and sluggish interaction response times (INP). Modern websites must load critical above-the-fold assets in under 800ms.
- Compress all hero graphics into modern WebP/AVIF formats.
- Preload critical web fonts rather than importing them late.
- Eliminate render-blocking third-party scripts.

## 4. Deep Contextual Internal Linking
Distribute domain equity from your high-traffic informational blog guides to commercial landing pages. Use descriptive anchor text that communicates context to both human readers and search crawlers.

## 5. First-Party Original Data & Case Studies
Generic AI-generated text gets de-indexed quickly. Include real metrics, screenshot evidence, proprietary client data, and concrete takeaways that no competitor can copy-paste.

## Conclusion & Next Steps
Ranking in 2026 requires merging technical site health with genuine subject-matter expertise. Continuously update your older articles with current statistics and refine your meta titles every quarter.`,
    featured: true,
  },
  {
    id: "social-media-presence",
    title: "How to Build a Strong Social Media Presence for Your Brand",
    slug: "build-strong-social-media-presence",
    category: "Social Media",
    author: "Promonex Growth Team",
    authorRole: "Social Media Director",
    date: "Sep 28, 2026",
    readTime: "4 min read",
    image: "/assets/blog/blog_social_media.jpg",
    imageAlt: "How to Build a Strong Social Media Presence for Your Brand",
    excerpt:
      "Discover actionable strategies to grow your brand on social media, increase engagement, and build a loyal community that converts.",
    content: `Organic reach requires consistency and genuine value. In today's digital climate, brands that talk *at* their audience get ignored, while brands that converse *with* them build durable commercial moats.

## 1. Establish a Distinct Brand Aesthetic & Voice
Your visual identity across Instagram, LinkedIn, and YouTube must feel unmistakably yours. Pick two primary brand colors, consistent typography hierarchy, and a recognizable tone of voice—whether educational, witty, or commanding.

## 2. Master the 3-Second Short Form Hook
The first 3 seconds of Instagram Reels and YouTube Shorts dictate whether a viewer scrolls or stays. Avoid slow logos or intro music. Lead immediately with the problem, an intriguing visual change, or a contrarian hook.

## 3. High-Engagement Community Nurturing
Social media algorithms reward accounts that create lively conversation loops:
- Pin thought-provoking questions in the comments.
- Reply to early comments within the first 60 minutes of publishing.
- Use Instagram Stories daily to showcase behind-the-scenes authentic work.

## 4. Repurpose Content Across Ecosystems
One long-form client case study can easily be adapted into:
- A 7-slide carousel for LinkedIn.
- A 45-second dynamic reel breakdown on Instagram.
- A short-form newsletter dispatch to your email list.

Build once, distribute everywhere.`,
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
    imageAlt: "Google Ads Best Practices for Higher ROI",
    excerpt:
      "Get expert tips on Google Ads campaign optimization, high-intent targeting, and budget management to achieve maximum return on ad spend.",
    content: `PPC search campaigns without rigorous conversion tracking and negative keyword curation drain budgets rapidly. Here is our agency playbook for maximizing every rupee spent on paid search.

## 1. Value-Based Bidding & Server-Side Tracking
Browser cookie limitations mean standard client-side pixels miss up to 25% of purchase events. Implementing Google's Enhanced Conversions via server-side tagging feeds accurate revenue data back into Smart Bidding algorithms.

## 2. Weekly Negative Keyword Hygiene
Audit search terms reports at least once every week:
- Add irrelevant search triggers (such as 'free', 'jobs', 'salary', 'download') as account-level negative keywords.
- Separate high-intent commercial keywords from purely informational discovery queries.

## 3. Perfect Headline & Landing Page Alignment
Ensure your Google Ads headline mirrors the landing page headline verbatim. When a user searching for 'Digital Marketing Agency in Patna' clicks an ad, seeing that exact headline on the page immediately validates intent and cuts bounce rates in half.

## 4. Single-Theme Ad Groups (STAG)
Group related high-volume keywords into tight thematic clusters. This allows you to write ultra-specific responsive search ads (RSAs) with 90%+ ad relevance scores.`,
  },
  {
    id: "performance-marketing-roas",
    title: "Maximizing ROAS: Full-Funnel Paid Acquisition Tactics",
    slug: "maximizing-roas-full-funnel-tactics",
    category: "Performance",
    author: "Rahul Kumar",
    authorRole: "Head of Performance Growth",
    date: "Sep 14, 2026",
    readTime: "7 min read",
    image: "/service assets/Performance Marketing Dashboard Workspace.png",
    imageAlt: "Maximizing ROAS Paid Acquisition Workspace",
    excerpt:
      "Proven framework to eliminate wasted ad spend, segment high-intent buyers, and scale sustainable multi-touch conversion loops.",
    content: `True performance marketing goes beyond boosting individual ad campaigns. It requires building a coherent, end-to-end customer acquisition pipeline across paid social and search.

## 1. Top of Funnel (TOFU): Pattern-Interrupt Creative
Capture cold demand by highlighting customer pain points rather than hard-selling. Short-form problem-agitate-solve videos build awareness at lowest CPMs.

## 2. Middle of Funnel (MOFU): Proof & Social Validation
Retarget visitors who watched 50%+ of your videos with client video testimonials, before-and-after revenue dashboards, and press features. This dismantles hesitation before the prospect enters the checkout or booking phase.

## 3. Bottom of Funnel (BOFU): High-Urgency Conversion Loops
Deploy dynamic product ads or direct calendar booking funnels with limited-time bonuses for warm prospects who visited your pricing or contact pages.

## 4. Blended CAC & Lifetime Value (LTV) Tracking
Focusing solely on platform ROAS can be misleading. Measure blended customer acquisition cost (blended CAC) against 90-day LTV to determine sustainable scale budgets.`,
  },
  {
    id: "high-converting-web-design",
    title: "Why High-Converting Landing Pages Beat Traditional Websites",
    slug: "why-high-converting-landing-pages-beat-traditional-websites",
    category: "Web Design",
    author: "Dev Studio Team",
    authorRole: "Lead UX & Conversion Architect",
    date: "Sep 08, 2026",
    readTime: "5 min read",
    image: "/service assets/Modern Website Development Workspace.png",
    imageAlt: "Modern Website Development Workspace",
    excerpt:
      "Essential speed, visual hierarchy, and CTA placement principles that transform passive visitors into qualified commercial leads.",
    content: `A website overloaded with unnecessary navigation menus and scattered links causes analysis paralysis. In contrast, purpose-built landing pages deliver 3x to 5x higher conversion rates.

## 1. Visual Hierarchy & Eye-Tracking Science
Visitors scan landing pages in an F-pattern. Place your core value proposition, client logo validation, and primary call to action directly above the fold within the first 600 vertical pixels.

## 2. Sub-Second Speed & Mobile Optimization
Over 75% of commercial traffic in India originates from mobile devices. Ensuring lightweight DOM structures, next-gen image compression, and zero content jumping (CLS) keeps visitors engaged.

## 3. Singular Focused Action
Eliminate top navigation bars and external links. Every section of the page should funnel the user toward one single decision: booking a call, completing a form, or purchasing a product.`,
  },
  {
    id: "local-seo-patna-guide",
    title: "Dominating Local SEO: The Complete Regional Playbook",
    slug: "dominating-local-seo-regional-playbook",
    category: "SEO",
    author: "Nancy Shekhar",
    authorRole: "Co-Founder & Strategy Lead",
    date: "Aug 29, 2026",
    readTime: "6 min read",
    image: "/service assets/SEO Performance Analytics Dashboard.png",
    imageAlt: "SEO Performance Analytics Dashboard",
    excerpt:
      "Step-by-step blueprint to rank #1 on Google Maps and Local Pack for competitive local service searches in Patna and regional markets.",
    content: `Local businesses with top Google Maps rankings capture more than 60% of high-intent regional search traffic. Here is how to conquer regional search results.

## 1. 100% Google Business Profile Optimization
Ensure your business category is laser-precise. Upload geo-tagged photos of your office, team, and client meetings weekly to keep profile freshness signals high.

## 2. Review Velocity & Keyword Rich Feedback
Encourage satisfied clients to mention specific services and cities in their reviews. For instance, 'Best SEO company in Patna' in reviews acts as a strong local relevance trigger.

## 3. Name, Address, Phone (NAP) Consistency
Keep your NAP identical across all online citations, including Justdial, IndiaMART, Sulekha, and local business directories. Inconsistencies confuse search engine crawlers and degrade ranking positions.`,
  },
  {
    id: "brand-identity-power",
    title: "The Art of Visual Identity: Why Modern Branding Trumps Bland Logos",
    slug: "art-of-visual-identity-branding",
    category: "Branding",
    author: "Creative Labs",
    authorRole: "Brand Identity Lead",
    date: "Aug 21, 2026",
    readTime: "4 min read",
    image: "/service assets/Creative Design Workspace.png",
    imageAlt: "Creative Design Workspace",
    excerpt:
      "How consistent visual language, color psychology, and video storytelling elevate customer trust and lower customer acquisition costs.",
    content: `Your brand is not just a logo; it is the emotional response a customer experiences whenever they encounter your company.

## 1. Psychology of Color & Contrast
Color choices trigger instant subconscious reactions. Deep navy conveys enterprise security and stability, while electric cyan sparks innovation and modern agility.

## 2. Typography That Commands Respect
Pair modern sans-serif headings with high-legibility body fonts. Consistent font sizing and line heights make lengthy white papers and proposals effortless to digest.

## 3. Complete Touchpoint Uniformity
From website UI and proposal decks to LinkedIn banners and client invoice layouts, cohesive design communicates that your team pays attention to every detail.`,
  },
  {
    id: "meta-ads-scaling-playbook",
    title: "Meta Ads Scaling: Advantage+ & Creative Testing in 2026",
    slug: "meta-ads-scaling-advantage-plus-creative",
    category: "Social Media",
    author: "Growth Marketing Team",
    authorRole: "Paid Social Specialist",
    date: "Aug 12, 2026",
    readTime: "5 min read",
    image: "/service assets/Social Media Marketing Dashboard.png",
    imageAlt: "Social Media Marketing Dashboard",
    excerpt:
      "How machine-learning Advantage+ shopping campaigns, dynamic catalog ads, and UGC video creative testing produce consistent 4x+ ROAS.",
    content: `Meta's ad auction has transformed into an algorithm that thrives on creative variation rather than manual hyper-targeting.

## 1. Creative IS the Modern Targeting
Broad audience targeting powered by Meta's AI algorithms outperforms narrow interest layering. Use distinct creative formats (founder story, unboxing, feature comparisons) to allow the algorithm to discover different customer segments.

## 2. Advantage+ Shopping Budget Allocation
Allocate up to 70% of proven ad spend into Advantage+ campaigns once your pixel has collected 100+ weekly conversions, reserving 30% for dedicated weekly creative testing sandboxes.

## 3. Combat Creative Fatigue Weekly
Ad fatigue happens fast on Meta. Produce 3 to 5 new video creative variations every single week to keep blended acquisition costs low and scale ad spend with confidence.`,
  },
];

export function getMergedBlogs(): BlogPostItem[] {
  if (typeof window === "undefined") {
    return DEFAULT_BLOGS;
  }
  try {
    const saved = localStorage.getItem("promonex_managed_blogs");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const published = parsed.filter((b: any) => b.status === "Published" || !b.status);
        if (published.length > 0) {
          const formatted: BlogPostItem[] = published.map((b: any, idx: number) => ({
            id: b.id || `custom-blog-${idx}`,
            title: b.title || "Untitled Blog",
            slug:
              b.slug && b.slug !== "#"
                ? b.slug.replace(/^\/blog\//, "")
                : (b.title || `custom-blog-${idx}`)
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)+/g, ""),
            category: b.category || "SEO",
            author: b.author || "Promonex Editorial Team",
            authorRole: b.authorRole || "Marketing Specialist",
            date: b.date || "Oct 2026",
            readTime: b.readTime || "5 min read",
            image: b.image || "/assets/blog/blog_seo_strategy.jpg",
            imageAlt: b.imageAlt || b.title,
            excerpt: b.excerpt || b.description || "",
            content: b.content || b.description || "",
            featured: idx === 0,
          }));

          const customSlugs = new Set(formatted.map((f) => f.slug));
          const remaining = DEFAULT_BLOGS.filter((d) => !customSlugs.has(d.slug));
          return [...formatted, ...remaining];
        }
      }
    }
  } catch (e) {
    console.error("Failed to load blogs from localStorage", e);
  }
  return DEFAULT_BLOGS;
}
