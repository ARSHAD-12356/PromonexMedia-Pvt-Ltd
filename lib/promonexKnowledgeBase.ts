export interface BotReply {
  text: string;
  suggestions?: string[];
  cta?: {
    label: string;
    action: "whatsapp" | "contact" | "call";
    url?: string;
  };
}

export interface KnowledgeItem {
  id: string;
  keywords: string[];
  phrases: string[];
  reply: string;
  suggestions?: string[];
  cta?: {
    label: string;
    action: "whatsapp" | "contact" | "call";
    url?: string;
  };
}

// Greeting tokens and variations
export const GREETING_TOKENS = [
  "hi",
  "hii",
  "hiii",
  "hiiii",
  "hy",
  "hyy",
  "hyyy",
  "hello",
  "helloo",
  "helo",
  "hey",
  "heyy",
  "namaste",
  "namaskar",
  "salam",
  "pranam",
  "yo",
  "sup",
  "hola",
  "good morning",
  "good afternoon",
  "good evening",
  "whats up",
  "what's up",
  "kaise ho",
  "kya hal hai",
  "how are you",
  "how r u",
  "greetings",
];

export const INITIAL_SUGGESTIONS = [
  "🎯 What services do you offer?",
  "💰 Pricing & Packages",
  "🚀 Free Growth Audit",
  "📍 Where is your office located?",
  "📈 Past Results & ROI",
  "📞 Contact & WhatsApp",
];

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    id: "services_overview",
    keywords: ["service", "services", "offer", "provide", "solutions", "kya karte ho", "kya service hai", "work", "profile"],
    phrases: [
      "what services do you offer",
      "services list",
      "all services",
      "what do you do",
      "how can you help",
      "kya service dete ho",
    ],
    reply: `**Promonex Media** is a premier ROI-driven Digital Marketing Agency offering full-suite growth services:

1. 🎯 **Performance Marketing** — Hyper-targeted Meta (Facebook/Instagram) & Google Ads with high-converting funnels.
2. 🔍 **Strategic SEO** — Technical, on-page, and authority building to rank organically on Google #1 page.
3. 📱 **Social Media Marketing (SMM)** — High-engagement content, brand reels, community growth, and viral reach.
4. 💻 **Website & App Development** — Modern, blazing-fast, conversion-focused websites and landing pages.
5. 🎨 **Creative Design & Branding** — High-CTR ad creatives, brand identity, motion graphics, and brochures.

Which service would you like to explore for your business?`,
    suggestions: ["Performance Marketing", "SEO Services", "Website Development", "Social Media Marketing", "Book Free Consultation"],
    cta: {
      label: "Discuss Your Project on WhatsApp",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20to%20discuss%20services%20for%20my%20business.",
    },
  },
  {
    id: "performance_marketing",
    keywords: ["performance", "ads", "advertising", "meta ads", "facebook ads", "fb ads", "google ads", "instagram ads", "ppc", "leads", "lead generation", "ad chalwana", "ad running"],
    phrases: [
      "performance marketing",
      "google ads",
      "meta ads",
      "facebook advertising",
      "lead generation campaigns",
      "ad chalana hai",
      "lead chahiye",
    ],
    reply: `🚀 **Performance Marketing by Promonex Media**:

We manage high-ROI paid ad campaigns on **Google Ads** and **Meta (Facebook & Instagram)**:
- **Zero Wasted Spend**: Advanced audience segmentation, negative keyword filtering, and precise retargeting.
- **Conversion-Optimized Funnels**: High-converting landing pages and automated CRM lead routing.
- **Average 5.8x ROAS**: Proven track record across e-commerce, real estate, healthcare, education, and B2B.
- **Weekly Transparent Dashboards**: Track every single rupee spent and every lead generated.

Ready to generate high-quality leads or scale your sales?`,
    suggestions: ["Pricing for Ads", "Free Ad Account Audit", "Case Studies & ROI", "Chat on WhatsApp"],
    cta: {
      label: "Start Ads Campaign with Us",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20to%20start%20Google/Meta%20Ads.",
    },
  },
  {
    id: "seo_services",
    keywords: ["seo", "google ranking", "rank on google", "search engine", "organic traffic", "ranking", "keywords", "backlinks", "traffic badhana"],
    phrases: [
      "seo services",
      "google rank kaise kare",
      "seo packages",
      "search engine optimization",
      "organic growth",
    ],
    reply: `🔍 **Strategic SEO by Promonex Media**:

Get compounding, long-term organic traffic without paying per click:
- **Comprehensive Technical SEO**: Site speed, mobile indexing, Core Web Vitals, and crawlability.
- **High-Intent Keyword Strategy**: Targeting keywords your customers actually search before buying.
- **On-Page & Content Optimization**: Engaging content mapped to user search intent.
- **High-Authority Backlinking**: White-hat outreach and local citations (Google My Business / Google Maps ranking).

We help you dominate your local or national niche on Google!`,
    suggestions: ["Free SEO Audit", "How long does SEO take?", "Website Development", "Talk to SEO Specialist"],
    cta: {
      label: "Get Free SEO Audit",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20a%20free%20SEO%20audit%20for%20my%20website.",
    },
  },
  {
    id: "website_development",
    keywords: ["website", "web development", "landing page", "web design", "site", "web banwana", "ecommerce", "store", "react", "nextjs", "wordpress"],
    phrases: [
      "website development",
      "web designing",
      "landing page banwana hai",
      "ecommerce website",
      "new website cost",
    ],
    reply: `💻 **Website & Landing Page Development**:

Your website is your 24/7 digital salesperson. We build:
- **High-Converting Landing Pages**: Fast loading (<2s), mobile-first, and crafted specifically to convert ad traffic.
- **Modern Corporate Websites**: Cutting-edge UI/UX with smooth micro-interactions that elevate your brand authority.
- **E-Commerce Portals**: Seamless checkout, payment gateway integration, and inventory management.
- **Full SEO & Analytics Setup**: Google Analytics 4, Meta Pixel, and conversion tracking pre-installed.`,
    suggestions: ["Website Pricing", "Landing Page for Ads", "Free Website Audit", "WhatsApp Us"],
    cta: {
      label: "Discuss Website Project",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20to%20build%20a%20website/landing%20page.",
    },
  },
  {
    id: "smm_social_media",
    keywords: ["smm", "social media", "instagram", "reels", "content creation", "post", "facebook page", "social branding", "followers"],
    phrases: [
      "social media marketing",
      "instagram management",
      "reels creation",
      "social media management",
    ],
    reply: `📱 **Social Media Marketing & Brand Growth**:

Turn casual social scrollers into loyal, paying customers:
- **Scroll-Stopping Viral Reels & Video Content**: Scripting, editing, and trend-jacking.
- **Aesthetic Grid & Brand Consistency**: Professional carousel graphics and story engagement.
- **Influencer & Community Outreach**: Connecting your brand with relevant micro and macro creators.
- **Follower-to-Lead Funnels**: Direct message automation and lead magnet distribution.`,
    suggestions: ["Social Media Packages", "Performance Marketing", "Creative Design", "Contact Us"],
    cta: {
      label: "Grow Your Social Media",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20social%20media%20growth%20for%20my%20brand.",
    },
  },
  {
    id: "pricing_cost",
    keywords: ["price", "pricing", "cost", "charge", "charges", "kitna lagega", "kitna paisa", "package", "packages", "fees", "rate", "rates", "budget"],
    phrases: [
      "what is the pricing",
      "how much do you charge",
      "pricing details",
      "service cost",
      "kitna charge karte ho",
      "package details",
    ],
    reply: `💰 **Flexible, ROI-Focused Pricing**:

Because every business has distinct goals, market competition, and ad budgets, we provide **customized, transparent milestone packages** tailored to deliver the highest return on investment (ROI).

✨ **What we offer before any commitment**:
- **100% Free Growth Audit**: We analyze your current digital presence, ad spend, and competitors.
- **Customized Growth Blueprint**: We present a tailored strategy with exact deliverables and projected outcomes.

Would you like a free quick quotation tailored for your business?`,
    suggestions: ["Claim Free Audit", "Talk to Strategist on WhatsApp", "Call +91 70619 41818", "Our Services"],
    cta: {
      label: "Get Custom Quotation on WhatsApp",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20please%20share%20a%20pricing%20quote%20for%20my%20business.",
    },
  },
  {
    id: "location_address",
    keywords: ["location", "address", "office", "where", "kaha", "kahan", "patna", "bihar", "visit", "offline", "milna"],
    phrases: [
      "where is your office",
      "office address",
      "where are you located",
      "office location in patna",
      "kaha par hai office",
      "can i visit your office",
    ],
    reply: `📍 **Promonex Media Office Location**:

Our headquarters is based in **Patna, Bihar, India**.
- **Agency Name**: Promonex Media Pvt. Ltd. | Digital Marketing Agency
- **City**: Patna, Bihar
- **Office Visit**: You are welcome to visit our office for an in-person strategy session. You can also view our live Google Map on the website under the 'Our Location' section.
- **Direct Phone**: +91 70619 41818

Would you like to schedule an office visit or a virtual meeting?`,
    suggestions: ["Call +91 70619 41818", "Schedule Meeting on WhatsApp", "Our Services", "Free Growth Audit"],
    cta: {
      label: "Get Location on WhatsApp",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20would%20like%20to%20visit%20your%20office%20in%20Patna.",
    },
  },
  {
    id: "contact_details",
    keywords: ["contact", "phone", "number", "whatsapp", "call", "email", "reach", "talk", "connect", "customer care", "helpline", "sampark"],
    phrases: [
      "how to contact",
      "phone number",
      "whatsapp number",
      "contact details",
      "call support",
      "talk to human",
    ],
    reply: `📞 **Contact Promonex Media Directly**:

- **Phone / Calling**: [+91 70619 41818](tel:+917061941818)
- **WhatsApp**: Click the green WhatsApp button on the bottom left or message **+91 70619 41818**
- **Website Form**: Fill out the brief project inquiry form in the Contact section
- **Location**: Patna, Bihar

Our growth strategists are available Monday through Saturday to answer all your queries!`,
    suggestions: ["Chat on WhatsApp", "Call Us Now", "Services List", "Free Audit"],
    cta: {
      label: "Instant WhatsApp Chat",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20to%20connect%20with%20your%20team.",
    },
  },
  {
    id: "free_audit",
    keywords: ["audit", "free audit", "growth audit", "consultation", "review", "free analysis", "consultant", "ad audit"],
    phrases: [
      "free growth audit",
      "how to get audit",
      "website audit",
      "ad account audit",
      "free consultation",
    ],
    reply: `🚀 **Claim Your 100% Free Digital Growth Audit**:

Our senior digital marketing strategists will analyze:
1. **Ad Account & Funnel Leaks**: Identifying wasted ad spend on Meta & Google Ads.
2. **SEO & Competitor Ranking Gaps**: Finding untapped keywords your rivals are ranking for.
3. **Conversion Rate Bottlenecks**: Pinpointing where potential buyers drop off on your site.
4. **Actionable 90-Day Roadmap**: Clear milestones for scaling your monthly revenue.

No obligation, 100% complimentary!`,
    suggestions: ["Claim Free Audit Now", "Our Results & ROI", "Services List", "Contact Team"],
    cta: {
      label: "Claim Free Growth Audit",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20to%20claim%20my%20Free%20Growth%20Audit.",
    },
  },
  {
    id: "results_roi_proof",
    keywords: ["results", "roi", "roas", "proof", "clients", "portfolio", "case studies", "experience", "past work", "track record", "retention"],
    phrases: [
      "past results",
      "what is your roi",
      "case studies",
      "client retention",
      "how much roi",
      "proof of work",
    ],
    reply: `📈 **Our Proven Track Record & Numbers**:

- 🏆 **250+ Brands Scaled** across India & globally
- 🚀 **5.8x Average ROI / ROAS** across ad campaigns
- 💰 **₹50 Million+ Ad Spend Managed** profitably
- 🤝 **98% Client Retention Rate** driven by consistent month-on-month revenue growth

We focus strictly on business metrics that matter: **revenue, qualified sales leads, and lower cost-per-acquisition (CPA)**.`,
    suggestions: ["See Services", "Free Growth Audit", "Pricing Details", "Chat on WhatsApp"],
    cta: {
      label: "Discuss Your Growth Goals",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20to%20see%20case%20studies%20for%20my%20industry.",
    },
  },
  {
    id: "industries_served",
    keywords: ["industry", "industries", "niche", "ecommerce", "real estate", "healthcare", "hospital", "doctor", "education", "school", "b2b", "retail"],
    phrases: [
      "which industries do you serve",
      "do you work with real estate",
      "ecommerce marketing",
      "healthcare marketing",
      "b2b lead generation",
    ],
    reply: `🏭 **Key Industries We Specialize In**:

- 🛍️ **E-Commerce & D2C Brands**: High-ROAS shopping ads, catalog optimization, and abandoned cart retargeting.
- 🏢 **Real Estate & Builders**: High-intent buyer inquiries, site-visit generation, and geo-targeted ads.
- 🏥 **Healthcare & Clinics**: Patient appointment generation, local SEO, and reputation building.
- 🎓 **Education & EdTech**: Student admissions, course enrollments, and webinar registrations.
- 💼 **B2B & Professional Services**: High-ticket LinkedIn and Google Search lead generation.

Whatever your industry, we build custom data-backed playbooks for you!`,
    suggestions: ["Free Consultation", "Performance Marketing", "SEO Services", "Pricing Details"],
    cta: {
      label: "Discuss Industry Strategy",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20to%20discuss%20marketing%20for%20my%20industry.",
    },
  },
  {
    id: "how_it_works_process",
    keywords: ["process", "how it works", "steps", "workflow", "start", "kaise kare", "onboarding", "timeline", "milestones"],
    phrases: [
      "how do you work",
      "how to get started",
      "process of working",
      "campaign timeline",
      "kaise start kare",
    ],
    reply: `⚡ **Our 5-Step Streamlined Process**:

1. **Discovery & Audit**: We analyze your current metrics, market position, and competitors.
2. **Custom Strategy & Roadmap**: We present tailored targets, channel selection, and funnel architecture.
3. **Setup & Creative Production**: High-converting landing pages, copy, and scroll-stopping visuals.
4. **Execution & Rigorous Testing**: A/B creative testing, budget optimization, and audience scaling.
5. **Weekly Reporting & Live Dashboard**: Transparent real-time reporting with direct access to your strategist.`,
    suggestions: ["Free Growth Audit", "Our Services", "WhatsApp Us", "Pricing"],
    cta: {
      label: "Get Started Now",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20want%20to%20get%20started%20with%20your%20services.",
    },
  },
  {
    id: "results_timing",
    keywords: ["how soon", "how long", "time", "kab tak", "kitna time", "days", "months", "timing"],
    phrases: [
      "how soon will i see results",
      "how long does it take",
      "kab tak result milega",
      "results timeline",
    ],
    reply: `⏱️ **When Will You See Measurable Results?**

- **Performance Ads (Meta & Google)**: Leads and traffic typically start flowing within **3 to 7 days** of campaign launch, with full algorithmic optimization around days 14–21.
- **Website Development**: Typical production cycles take **7 to 15 days** depending on complexity and scope.
- **SEO (Organic Growth)**: Visible ranking improvements usually begin in **6 to 12 weeks**, compounding significantly over 6 months into permanent organic assets.

We provide weekly milestone updates so you always know where your project stands!`,
    suggestions: ["Performance Marketing", "SEO Services", "Book Free Audit", "Chat on WhatsApp"],
    cta: {
      label: "Ask About Timelines on WhatsApp",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20what%20is%20the%20expected%20timeline%20for%20my%20project?",
    },
  },
  {
    id: "about_company",
    keywords: ["about", "company", "promonex", "who are you", "agency", "team", "founder", "background", "pvt ltd"],
    phrases: [
      "about promonex media",
      "who is promonex media",
      "tell me about your company",
      "who are you",
    ],
    reply: `🏢 **About Promonex Media Pvt. Ltd.**:

We are a premier growth and performance marketing agency based in Patna, Bihar, dedicated to scaling businesses with high-velocity digital marketing, cutting-edge web engineering, and creative storytelling.

- **Mission**: Replacing guesswork with data-driven profitability and delivering undeniable business ROI.
- **Track Record**: 250+ brands grown, ₹50M+ ad spend managed, and 5.8x average ROI.
- **Core Pillars**: Transparency, speed, creative excellence, and measurable growth.`,
    suggestions: ["Our Services", "Free Growth Audit", "Contact Us", "Office Location"],
    cta: {
      label: "Connect with Our Founders",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20would%20like%20to%20know%20more%20about%20your%20company.",
    },
  },
  {
    id: "lead_generation_hinglish",
    keywords: ["lead", "leads", "lead chahiye", "customer chahiye", "sales badhana", "bussiness grow", "bikri", "ad lagana"],
    phrases: [
      "mujhe leads chahiye",
      "business grow kaise kare",
      "sales kaise badhaye",
      "lead generation kaise hoga",
    ],
    reply: `🎯 **High-Quality Qualified Leads for Your Business**:

Agar aapko apne business ke liye **genuine, high-intent leads aur customers** chahiye, to Promonex Media Meta Ads (Facebook/Instagram) aur Google Search Ads ke zariye targeted audience tak pahunchata hai:

1. Targeted ads jo sirf aapke actual buyers ko dikhenge.
2. Conversion landing page jo visitor ko customer me convert karega.
3. WhatsApp & CRM direct lead delivery taaki aap turant close kar sakein.

Aapka business kis type ka hai? Hamein batayein ya direct WhatsApp par discuss karein!`,
    suggestions: ["Performance Marketing", "Pricing Details", "Free Growth Audit", "WhatsApp Us"],
    cta: {
      label: "Discuss Leads Strategy on WhatsApp",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20mujhe%20apne%20business%20ke%20liye%20leads%20chahiye.",
    },
  },
];

// Helper function to check if input is a pure greeting
export function isGreeting(text: string): boolean {
  const clean = text.trim().toLowerCase().replace(/[^\w\s]/gi, "");
  if (!clean) return false;

  // Single word greeting
  if (GREETING_TOKENS.includes(clean)) return true;

  // Multi-word exact greetings
  for (const token of GREETING_TOKENS) {
    if (clean === token) return true;
  }

  // Regex checks for common greeting patterns like "hii there", "hello team", "hey bot"
  const greetingPattern = /^(hi+|hy+|hello+|hey+|namaste|namaskar|salam|hola|good\s+(morning|afternoon|evening)|yo|sup)(\s+(there|team|bot|promonex|sir|mam|bhai|ji))?$/i;
  return greetingPattern.test(clean);
}

export function getGreetingResponse(): BotReply {
  const responses = [
    `👋 **Hello! Welcome to Promonex Media.**

I am **Promonex AI**, your 24/7 digital growth assistant. How can I help you scale your business today?

You can ask me about:
- 🎯 **Our Services** (Ads, SEO, Web Dev, SMM)
- 💰 **Pricing & Custom Packages**
- 🚀 **Claiming a Free Growth Audit**
- 📍 **Office Location & Contact Details**`,
    `✨ **Hi there! Great to have you at Promonex Media.**

Looking to scale your revenue, generate high-intent leads, or build a high-converting website? 

Ask me anything or pick one of the quick suggestions below!`,
    `🚀 **Greetings from Promonex Media Pvt. Ltd.!**

I am here to guide you with complete data on our digital marketing solutions, case studies, and pricing. How can I assist you right now?`,
  ];

  return {
    text: responses[Math.floor(Math.random() * responses.length)],
    suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
    cta: {
      label: "Chat with Us on WhatsApp",
      action: "whatsapp",
      url: "https://wa.me/917061941818?text=Hello%20Promonex%20Media,%20I%20am%20interested%20in%20your%20services.",
    },
  };
}

export function getBotResponse(userMessage: string): BotReply {
  const trimmed = userMessage.trim();
  if (!trimmed) {
    return {
      text: "Please type a question or select one of the suggested topics below so I can help you!",
      suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
    };
  }

  // 1. Check if greeting
  if (isGreeting(trimmed)) {
    return getGreetingResponse();
  }

  const clean = trimmed.toLowerCase();

  // 2. Score knowledge base items
  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;

    // Check exact phrase matches (high weight)
    for (const phrase of item.phrases) {
      if (clean.includes(phrase.toLowerCase())) {
        score += 80;
      }
    }

    // Check keyword matches
    for (const keyword of item.keywords) {
      const regex = new RegExp(`\\b${keyword.toLowerCase()}\\b`, "i");
      if (regex.test(clean)) {
        score += 20;
      } else if (clean.includes(keyword.toLowerCase())) {
        score += 8;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // 3. Return best match if confident
  if (bestMatch && highestScore >= 16) {
    return {
      text: bestMatch.reply,
      suggestions: bestMatch.suggestions || INITIAL_SUGGESTIONS.slice(0, 3),
      cta: bestMatch.cta,
    };
  }

  // 4. Smart Fallback for unmapped questions
  return {
    text: `I'd love to help you with that! At **Promonex Media**, we specialize in:

- 🎯 **Performance Marketing** (Meta & Google Ads that deliver guaranteed ROI)
- 🔍 **SEO & Search Rankings** (Get organic, high-intent customers from Google)
- 💻 **Website & Landing Page Development** (High-converting modern UI/UX)
- 📱 **Social Media Management & Creative Video Production**

Would you like to discuss this directly with our senior growth consultant on WhatsApp, or claim a **100% Free Growth Audit**?`,
    suggestions: [
      "🎯 What services do you offer?",
      "💰 Pricing & Packages",
      "🚀 Free Growth Audit",
      "📞 Contact & WhatsApp",
    ],
    cta: {
      label: "Chat Directly with Strategist (+91 70619 41818)",
      action: "whatsapp",
      url: `https://wa.me/917061941818?text=${encodeURIComponent(
        `Hello Promonex Media, I have a question about: "${trimmed}"`
      )}`,
    },
  };
}
