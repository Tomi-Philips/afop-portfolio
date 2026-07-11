import HeaderBanner from "@/components/header-banner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from "next/link";

export const metadata = {
  title: "Products | AFOP — Favour Adegoke",
  description: "Innovative products and developer tools in development by Favour Adegoke.",
};

const products = [
  { icon: "🎫", title: "tikkety", description: "A modern campus event ticketing and verification platform for secure ticket sales, QR-based check-ins, and event discovery.", tags: ["Ticketing", "Next.js", "QR Code"], accent: "#ea580c", light: "#ffedd5" },
  { icon: "📦", title: "Developer Tools", description: "A suite of open-source utilities and libraries designed to enhance developer productivity and streamline common tasks.", tags: ["Open Source", "JavaScript", "npm"], accent: "#065f46", light: "#d1fae5" },
  { icon: "🌐", title: "Web Solutions", description: "Modern web applications built with cutting-edge technologies, focusing on performance, scalability, and exceptional UX.", tags: ["React", "Next.js", "Tailwind"], accent: "#7c3aed", light: "#ede9fe" },
];

const statusCards = [
  { icon: "🔧", title: "In Development", description: "Crafting innovative solutions", accent: "#1e3a8a", light: "#dbeafe" },
  { icon: "🧪", title: "Testing Phase", description: "Ensuring quality & performance", accent: "#7c3aed", light: "#ede9fe" },
  { icon: "🎯", title: "Coming Soon", description: "Launching exciting products", accent: "#065f46", light: "#d1fae5" },
];

export default function Products() {
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
                In the Lab
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                My{" "}
                <span className="relative inline-block">
                  <span className="text-blue-900">Products</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                Innovative solutions and tools crafted with modern technology.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* ── Coming Soon Banner ── */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden max-w-3xl mx-auto">
              <div className="h-1 w-full bg-blue-900" />
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">⚡</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Exciting Things Are Coming</h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
                  I&apos;m currently crafting innovative products and tools that will revolutionize how developers work — cutting-edge solutions built with modern technologies and user experience at the forefront.
                </p>

                {/* Status Cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {statusCards.map((s, i) => (
                    <div key={i} className="p-4 rounded-2xl border" style={{ background: s.light, borderColor: s.light }}>
                      <div className="text-2xl mb-2">{s.icon}</div>
                      <h4 className="font-bold text-sm mb-1" style={{ color: s.accent }}>{s.title}</h4>
                      <p className="text-xs text-gray-500">{s.description}</p>
                    </div>
                  ))}
                </div>

                {/* Newsletter */}
                <div className="relative overflow-hidden bg-blue-900 rounded-2xl p-8 text-white">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                  <h3 className="text-xl font-bold mb-2 relative z-10">Be the First to Know</h3>
                  <p className="text-blue-200 mb-5 text-sm relative z-10">No spam, just meaningful updates when I launch.</p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
                    <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2.5 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white text-sm" />
                    <button className="bg-white text-blue-900 px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 text-sm">Notify Me</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Products Grid ── */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">What&apos;s in the Works</h2>
              <p className="text-gray-500 max-w-xl mx-auto">A glimpse into the innovative projects currently under development.</p>
              <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <article key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 overflow-hidden hover:-translate-y-1">
                  <div className="h-1 w-full" style={{ background: product.accent }} />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: product.light }}>
                      {product.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 text-xs font-semibold rounded-full" style={{ background: product.light, color: product.accent }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section>
            <div className="relative overflow-hidden bg-blue-900 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-5xl mb-6">🤝</div>
                <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">Let&apos;s collaborate on building something amazing together.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                    Get In Touch
                  </Link>
                  <a href="https://github.com/Tomi-Philips" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 border border-blue-700">
                    View GitHub
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