import HeaderBanner from "@/components/header-banner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from "next/link";

export const metadata = {
  title: "Open Source | AFOP — Favour Adegoke",
  description: "Open source projects and community contributions by Favour Adegoke.",
};

const projects = [
  { icon: "🛠️", title: "Developer Tools", description: "Utilities and libraries to streamline development workflows and enhance productivity for the modern developer.", tags: ["Node.js", "TypeScript"], accent: "#1e3a8a", light: "#dbeafe" },
  { icon: "💻", title: "CLI Tools", description: "Command-line interfaces that simplify complex tasks and automate development processes with intuitive commands.", tags: ["CLI", "Automation"], accent: "#0e7490", light: "#cffafe" },
  { icon: "📚", title: "Web Libraries", description: "Reusable components and utilities for modern web development, focusing on performance and developer experience.", tags: ["React", "Next.js"], accent: "#7c3aed", light: "#ede9fe" },
];

const philosophy = [
  { icon: "🎯", title: "Quality Over Quantity", description: "Well-documented, tested, and maintainable code" },
  { icon: "🤝", title: "Community First", description: "Build tools that solve real problems for developers" },
  { icon: "📖", title: "Great Documentation", description: "Comprehensive docs and examples for easy adoption" },
  { icon: "🚀", title: "Long-term Maintenance", description: "Commitment to ongoing support and improvements" },
];

const impact = [
  { value: "3+", label: "Projects In Dev", icon: "⭐" },
  { value: "100%", label: "Open Source", icon: "🌱" },
  { value: "∞", label: "Community Driven", icon: "🌍" },
];

export default function OSS() {
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
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                Actively Contributing
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Open{" "}
                <span className="relative inline-block">
                  <span className="text-blue-900">Source</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                Contributing to the community, one commit at a time.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="bg-blue-900 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6">
              {impact.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-blue-200 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* ── Main Content ── */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden max-w-3xl mx-auto">
              <div className="h-1 w-full bg-blue-900" />
              <div className="p-10 text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">🌱</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Building for the Community</h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
                  I&apos;m actively working on open source projects that will benefit developers worldwide. Stay tuned for innovative tools, libraries, and contributions to the ecosystem.
                </p>

                <div className="relative overflow-hidden bg-blue-900 rounded-2xl p-8 text-white text-left">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                  <h3 className="text-xl font-bold mb-2 relative z-10">Follow My Open Source Journey</h3>
                  <p className="text-blue-200 mb-5 text-sm relative z-10 max-w-md">Follow my GitHub profile to stay updated on my contributions and upcoming projects.</p>
                  <a href="https://github.com/Tomi-Philips" target="_blank" rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Visit My GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Projects ── */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">What&apos;s Coming Soon</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Open source projects currently in development.</p>
              <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <article key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 overflow-hidden hover:-translate-y-1">
                  <div className="h-1 w-full" style={{ background: project.accent }} />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: project.light }}>
                      {project.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 text-xs font-semibold rounded-full" style={{ background: project.light, color: project.accent }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Philosophy ── */}
          <section className="mb-16">
            <div className="bg-blue-900 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold text-center mb-8">My Open Source Philosophy</h3>
              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {philosophy.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-blue-200 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section>
            <div className="relative overflow-hidden bg-blue-900 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-5xl mb-6">🤝</div>
                <h2 className="text-3xl font-bold mb-4">Want to Collaborate?</h2>
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                  Open to collaborations, contributions, and helping other developers on their open source journey.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                    Get In Touch
                  </Link>
                  <a href="https://github.com/Tomi-Philips" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 border border-blue-700">
                    Follow on GitHub
                  </a>
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