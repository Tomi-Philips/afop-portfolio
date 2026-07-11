import HeaderBanner from "@/components/header-banner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from "next/link";

export const metadata = {
  title: "Blog | AFOP — Favour Adegoke",
  description: "Insights, tutorials and thoughts on web development, backend systems, and modern software engineering.",
};

const topics = [
  { icon: "🌐", title: "Web Development", description: "Modern web technologies, frameworks, and best practices for building scalable applications.", tags: ["React", "Next.js"], accent: "#1e3a8a", light: "#dbeafe" },
  { icon: "⚙️", title: "Backend Systems", description: "Server-side programming, APIs, databases, and system architecture patterns.", tags: ["Node.js", "PHP"], accent: "#065f46", light: "#d1fae5" },
  { icon: "🔧", title: "DevOps & Tools", description: "Development workflows, automation, deployment strategies, and productivity tools.", tags: ["Docker", "CLI"], accent: "#7c3aed", light: "#ede9fe" },
  { icon: "🤝", title: "Mentorship", description: "Personalized guidance, codebase walkthroughs, and support to help junior developers navigate their career path.", tags: ["Coaching", "Career"], accent: "#b45309", light: "#fef3c7" },
  { icon: "🗺️", title: "Beginner Developer Blueprint", description: "A comprehensive roadmap, tutorials, and fundamental concepts to go from zero to landing your first dev role.", tags: ["Roadmap", "Basics"], accent: "#be185d", light: "#fce7f3" },
  { icon: "🌱", title: "Career & Growth", description: "Valuable advice on job hunting, resume building, interview prep, and scaling your professional network.", tags: ["Job Search", "Branding"], accent: "#0369a1", light: "#e0f2fe" },
];

const platforms = [
  { name: "Twitter / X", icon: "🐦", url: "https://x.com/favourAdegoke07", description: "Quick tips & updates", accent: "#1d9bf0", light: "#dbeafe" },
  { name: "GitHub", icon: "💻", url: "https://github.com/Tomi-Philips", description: "Code & projects", accent: "#1f2937", light: "#f3f4f6" },
  { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/adegoke-favour-b629082b0/", description: "Professional insights", accent: "#0a66c2", light: "#dbeafe" },
  { name: "Email", icon: "📧", url: "/contact", description: "Direct communication", accent: "#1e3a8a", light: "#dbeafe" },
];

export default function Blog() {
  return (
    <>
      <HeaderBanner />
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-900 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full animate-pulse" />
                Coming Soon
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                The{" "}
                <span className="relative inline-block">
                  <span className="text-blue-900">Blog</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                Insights, tutorials, and thoughts on technology and software engineering.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* ── Coming Soon Card ── */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden max-w-3xl mx-auto">
              <div className="h-1 w-full bg-blue-900" />
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">🚀</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Great Content Coming Soon</h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
                  I&apos;m currently crafting valuable content that will help developers level up their skills, stay updated with modern technologies, and solve real-world programming challenges.
                </p>

                {/* Newsletter */}
                <div className="relative overflow-hidden bg-blue-900 rounded-2xl p-8 text-white">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                  <h3 className="text-xl font-bold mb-2 relative z-10">Get Notified When I Launch</h3>
                  <p className="text-blue-200 mb-5 text-sm relative z-10">Be the first to know when new articles are published.</p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
                    <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2.5 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white text-sm" />
                    <button className="bg-white text-blue-900 px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 text-sm">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Topics ── */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Topics I&apos;ll Cover</h2>
              <p className="text-gray-500 max-w-xl mx-auto">A preview of the technical content and tutorials in development.</p>
              <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {topics.map((topic, i) => (
                <article key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 overflow-hidden hover:-translate-y-1">
                  <div className="h-1 w-full" style={{ background: topic.accent }} />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: topic.light }}>
                      {topic.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{topic.description}</p>
                    <div className="flex gap-2">
                      {topic.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 text-xs font-semibold rounded-full" style={{ background: topic.light, color: topic.accent }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Philosophy strip ── */}
          <section className="mb-16">
            <div className="bg-blue-900 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold text-center mb-8">My Writing Philosophy</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "🎯", title: "Practical", desc: "Real-world solutions you can use today" },
                  { icon: "📚", title: "In-depth", desc: "Comprehensive coverage of every topic" },
                  { icon: "👨‍💻", title: "Dev-Focused", desc: "Written by a developer for developers" },
                  { icon: "🆓", title: "Free & Open", desc: "Quality content available to everyone" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-blue-200 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Platforms ── */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Follow My Journey</h2>
              <p className="text-gray-500 max-w-xl mx-auto">While I work on the blog, find me sharing insights on these platforms.</p>
              <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {platforms.map((p, i) => (
                <a key={i} href={p.url} target={p.url.startsWith('http') ? "_blank" : undefined} rel={p.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-blue-100 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" style={{ background: p.light }}>
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{p.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{p.description}</p>
                </a>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section>
            <div className="relative overflow-hidden bg-blue-900 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-5xl mb-6">✍️</div>
                <h2 className="text-3xl font-bold mb-4">Have a Topic Suggestion?</h2>
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">Your suggestions will help shape the content I create.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                  Suggest a Topic
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}