import HeaderBanner from "@/components/header-banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface ServiceNiche {
  label: string;
  icon: string;
}

interface Service {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  niches?: ServiceNiche[];
  features: string[];
  accent: string;
  accentLight: string;
  accentText: string;
  badge?: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
  icon: string;
}

const services: Service[] = [
  {
    id: "web-design",
    icon: "🎨",
    title: "Website Design & Redesign",
    tagline: "Pixel-perfect interfaces that convert",
    description:
      "I craft modern, responsive websites tailored to your industry. From bold business sites to sleek SaaS dashboards and regulated FinTech interfaces — every pixel is intentional.",
    niches: [
      { label: "Business Websites", icon: "🏢" },
      { label: "FinTech Platforms", icon: "💳" },
      { label: "SaaS Products", icon: "☁️" },
    ],
    features: [
      "Mobile-first responsive design",
      "Performance-optimized build",
      "Accessibility (WCAG) compliant",
      "Custom animations & micro-interactions",
      "Brand-aligned UI system",
    ],
    accent: "#1e3a8a",
    accentLight: "#dbeafe",
    accentText: "#1e40af",
    badge: "Most Popular",
  },
  {
    id: "cms",
    icon: "📝",
    title: "CMS Development",
    tagline: "Own your content, no dev needed",
    description:
      "I build powerful Content Management Systems that put you in full control. Update pages, posts, media and products yourself — without touching a single line of code.",
    features: [
      "Custom admin dashboard",
      "Role-based access control",
      "Rich text & media management",
      "SEO metadata editing",
      "Headless CMS integration",
    ],
    accent: "#065f46",
    accentLight: "#d1fae5",
    accentText: "#047857",
  },
  {
    id: "domain-hosting",
    icon: "🌐",
    title: "Domain & Hosting Setup",
    tagline: "From zero to live in 24 hours",
    description:
      "I handle the technical side of getting your site online — domain registration, hosting configuration, SSL certificates, DNS records, email setup, and deployment pipelines.",
    features: [
      "Domain name registration",
      "Secure SSL certificate setup",
      "Cloud hosting configuration",
      "Custom email addresses",
      "CDN & performance tuning",
    ],
    accent: "#7c3aed",
    accentLight: "#ede9fe",
    accentText: "#6d28d9",
  },
  {
    id: "maintenance",
    icon: "🛡️",
    title: "Website Maintenance & Support",
    tagline: "Always-on, always updated",
    description:
      "Keep your site secure, fast and up-to-date with ongoing maintenance plans. I monitor performance, apply updates, resolve bugs, and provide priority support when you need it most.",
    features: [
      "Regular security patching",
      "Uptime monitoring & alerts",
      "Content & feature updates",
      "Monthly performance reports",
      "Priority bug-fix response",
    ],
    accent: "#b45309",
    accentLight: "#fef3c7",
    accentText: "#92400e",
  },
  {
    id: "mobile-app",
    icon: "📱",
    title: "Mobile App Development",
    tagline: "Apps that feel native, built faster",
    description:
      "I develop cross-platform mobile applications for iOS and Android using React Native — delivering near-native performance with a single, maintainable codebase.",
    features: [
      "iOS & Android from one codebase",
      "Offline-capable architecture",
      "Push notifications",
      "App Store / Play Store submission",
      "Biometric & secure auth",
    ],
    accent: "#be185d",
    accentLight: "#fce7f3",
    accentText: "#9d174d",
    badge: "New",
  },
  {
    id: "api",
    icon: "⚡",
    title: "API Development & Integration",
    tagline: "Connect anything to everything",
    description:
      "I design and build robust RESTful and GraphQL APIs, and integrate third-party services into your stack — from CRMs to analytics, maps, AI models and more.",
    features: [
      "RESTful & GraphQL API design",
      "Third-party service integration",
      "Webhook implementation",
      "API documentation (OpenAPI)",
      "Rate limiting & auth middleware",
    ],
    accent: "#0e7490",
    accentLight: "#cffafe",
    accentText: "#0369a1",
  },
  {
    id: "payment",
    icon: "💰",
    title: "Payment Gateway Integration",
    tagline: "Get paid seamlessly, globally",
    description:
      "I integrate secure, PCI-compliant payment solutions into your platform. From one-time checkouts to subscriptions and split payments — your revenue flow is handled.",
    features: [
      "Stripe, Paystack & Flutterwave",
      "One-time & recurring billing",
      "Webhook event handling",
      "Refund & dispute management",
      "Multi-currency support",
    ],
    accent: "#166534",
    accentLight: "#dcfce7",
    accentText: "#15803d",
  },
];

const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We discuss your goals, timeline, and requirements. I ask the right questions to fully understand what you need.",
  },
  {
    step: "02",
    title: "Proposal & Plan",
    description:
      "I send a detailed proposal with scope, tech stack, timeline, and pricing — no vague estimates.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "I design first for your approval, then build iteratively with regular check-ins and demo previews.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy together, and I stay available post-launch to handle issues and answer questions.",
  },
];

const stats: Stat[] = [
  { value: "4+", label: "Years Experience", icon: "🏆" },
  { value: "17+", label: "Projects Delivered", icon: "🚀" },
  { value: "100%", label: "Client Satisfaction", icon: "⭐" },
  { value: "24h", label: "Response Time", icon: "⚡" },
];

export const metadata = {
  title: "Services | AFOP — Favour Adegoke",
  description:
    "Professional web development, mobile app development, CMS, API integration, and payment gateway services by Favour Oluwatomi Adegoke.",
};

export default function Services() {
  return (
    <>
      <HeaderBanner />
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white border-b border-gray-100">
          {/* Background decoration */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #1e3a8a, transparent)" }}
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center max-w-3xl mx-auto">
              {/* Label pill */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-900 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full animate-pulse" />
                Available for new projects
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Services That{" "}
                <span className="relative inline-block">
                  <span className="text-blue-900">Deliver</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="6"
                    viewBox="0 0 200 6"
                    fill="none"
                  >
                    <path
                      d="M0 3 Q50 0 100 3 Q150 6 200 3"
                      stroke="#1e3a8a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.4"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
                Full-stack solutions from design to deployment — built with
                clean code, modern architecture, and obsessive attention to
                detail.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  id="services-contact-cta"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-0.5"
                >
                  Start a Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
                <a
                  href="#services-list"
                  id="services-explore-btn"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-blue-200 hover:text-blue-900 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Services
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="bg-blue-900 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* ── Services Grid ── */}
          <div id="services-list" className="mb-24">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What I Build For You
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                End-to-end services covering every layer of the stack — from
                the first pixel to the last API call.
              </p>
              <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <article
                  key={service.id}
                  id={`service-${service.id}`}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 overflow-hidden hover:-translate-y-1"
                >
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ background: service.accent }}
                  />

                  <div className="p-7">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        {/* Icon bubble */}
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: service.accentLight }}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">
                            {service.title}
                          </h3>
                          <p
                            className="text-xs font-semibold mt-0.5"
                            style={{ color: service.accentText }}
                          >
                            {service.tagline}
                          </p>
                        </div>
                      </div>
                      {service.badge && (
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0 mt-1"
                          style={{
                            background: service.accentLight,
                            color: service.accentText,
                          }}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Sub-niches (only for web design) */}
                    {service.niches && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.niches.map((niche, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium border"
                            style={{
                              background: service.accentLight,
                              color: service.accentText,
                              borderColor: service.accentLight,
                            }}
                          >
                            <span>{niche.icon}</span>
                            {niche.label}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-5" />

                    {/* Features list */}
                    <ul className="space-y-2.5">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2.5 text-sm text-gray-600"
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: service.accentLight }}
                          >
                            <svg
                              className="w-3 h-3"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M2 6l3 3 5-5"
                                stroke={service.accentText}
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA link */}
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <Link
                        href={`/contact?service=${service.id}`}
                        id={`service-${service.id}-cta`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link"
                        style={{ color: service.accentText }}
                      >
                        Enquire about this service
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ── Process ── */}
          <section id="services-process" className="mb-24">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How We Work Together
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A clear, collaborative process — so you always know what comes next.
              </p>
              <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full" />
            </div>

            <div className="relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mx-16" />

              <div className="grid md:grid-cols-4 gap-6">
                {process.map((step, i) => (
                  <div key={i} className="relative text-center group">
                    {/* Step bubble */}
                    <div className="relative inline-flex w-20 h-20 rounded-full items-center justify-center mx-auto mb-6 bg-white border-2 border-blue-100 shadow-md group-hover:border-blue-900 group-hover:shadow-blue-900/10 transition-all duration-300 z-10">
                      <span className="text-2xl font-bold text-blue-900 group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Tech Stack Strip ── */}
          <section className="mb-24">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Built With Industry-Leading Technologies
                </h2>
                <p className="text-gray-500 text-sm">
                  Modern, battle-tested tools for performance, scalability and longevity
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "Next.js", icon: "▲" },
                  { name: "React", icon: "⚛" },
                  { name: "TypeScript", icon: "TS" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Laravel", icon: "🔴" },
                  { name: "PHP", icon: "🐘" },
                  { name: "React Native", icon: "📱" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "MySQL", icon: "🗄" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "Redis", icon: "⚡" },
                  { name: "Docker", icon: "🐳" },
                  { name: "Vercel", icon: "▲" },
                  { name: "Stripe", icon: "💳" },
                  { name: "Paystack", icon: "💰" },
                  { name: "Tailwind CSS", icon: "🎨" },
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 cursor-default"
                  >
                    <span className="text-base">{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── Why Me ── */}
          <section className="mb-24">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Work With Me?
              </h2>
              <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔍",
                  title: "Attention to Detail",
                  desc: "Every component, every animation, every query is crafted with care. No rushed, copy-pasted solutions.",
                },
                {
                  icon: "📐",
                  title: "Clean Architecture",
                  desc: "Code you can understand, extend and maintain — built on solid patterns and documented properly.",
                },
                {
                  icon: "⚡",
                  title: "Performance First",
                  desc: "Sites that score 90+ on Lighthouse by default. Fast load times aren't optional; they're standard.",
                },
                {
                  icon: "🔒",
                  title: "Security Minded",
                  desc: "Authentication, authorization, input validation, encrypted storage — security baked in from day one.",
                },
                {
                  icon: "🗣️",
                  title: "Clear Communication",
                  desc: "Regular updates, honest timelines, and plain-English explanations — no jargon, no ghosting.",
                },
                {
                  icon: "📈",
                  title: "Built to Scale",
                  desc: "Architecture that grows with your user base, from 10 users to 100,000 without a full rewrite.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA Banner ── */}
          <section id="services-final-cta">
            <div className="relative overflow-hidden bg-blue-900 rounded-3xl p-10 md:p-14 text-white text-center">
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-5xl mb-6">🤝</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Ready to Build Something Exceptional?
                </h2>
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                  Let&apos;s discuss your project. Whether you have a detailed
                  brief or just an idea — I&apos;ll help you shape it into a
                  real, working product.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/contact"
                    id="services-footer-contact-btn"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Get a Free Quote
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/portfolio"
                    id="services-view-portfolio-btn"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 border border-blue-700"
                  >
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
