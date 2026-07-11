import HeaderBanner from "@/components/header-banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillSection from "@/components/SkillSection";
import { skillsData } from "@/components/data/skillsData";
import Link from "next/link";

export const metadata = {
  title: "Skills | AFOP — Favour Adegoke",
  description: "Technical skills and expertise of Favour Adegoke — full-stack developer proficient in React, Next.js, Node.js, Laravel, and more.",
};

export default function Skills() {
  return (
    <>
      <HeaderBanner />
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white border-b border-gray-100">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #1e3a8a, transparent)" }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-900 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                Full-Stack Developer
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Skills &{" "}
                <span className="relative inline-block">
                  <span className="text-blue-900">Expertise</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                A comprehensive showcase of my technical capabilities and professional strengths.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Technical Skills Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Technical Skills</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Mastering the tools and technologies that power modern digital solutions.
              </p>
              <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full" />
            </div>

            {Object.keys(skillsData)
              .filter((key) => key !== "softSkills")
              .map((key) => (
                <SkillSection
                  key={key}
                  sectionKey={key}
                  section={skillsData[key as keyof typeof skillsData]}
                />
              ))}
          </section>

          {/* Soft Skills Section */}
          <section className="mb-16">
            <SkillSection sectionKey="softSkills" section={skillsData.softSkills} />
          </section>

          {/* ── CTA ── */}
          <section>
            <div className="relative overflow-hidden bg-blue-900 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-5xl mb-6">🚀</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to See These Skills in Action?</h2>
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                  Check out my portfolio for real-world projects, or get in touch to discuss your next build.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                  >
                    View Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 border border-blue-700"
                  >
                    Let&apos;s Connect
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