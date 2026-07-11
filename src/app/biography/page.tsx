import HeaderBanner from "@/components/header-banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Milestone {
  year: string;
  description: string;
}

interface Award {
  title: string;
  subtitle: string;
  description: string;
  cgpa: string;
  icon: string;
  accent: string;
  accentLight: string;
}

export const metadata = {
  title: "Biography | AFOP — Favour Adegoke",
  description: "The story of Favour Oluwatomi Adegoke — Nigerian Software Engineer, Researcher, and Entrepreneur.",
};

export default function Biography() {
  const milestones: Milestone[] = [
    { year: "2019", description: "Started programming journey with QBasic" },
    { year: "2020", description: "Began formal education in Computer Science, got introduced to web development" },
    { year: "2022", description: "Earned National Diploma with distinction" },
    { year: "2023", description: "Advanced to Higher National Diploma program" },
    { year: "2025", description: "Graduated as Best Overall Student" },
  ];

  const awards: Award[] = [
    {
      title: "Best Graduating Student",
      subtitle: "Higher National Diploma • 2023–2025",
      description: "Achieved the prestigious overall best graduating student award in Computer Science with an outstanding CGPA of",
      cgpa: "3.74 / 4.00",
      icon: "⭐",
      accent: "#1e3a8a",
      accentLight: "#dbeafe",
    },
    {
      title: "Overall Best Graduating Student",
      subtitle: "National Diploma • 2020–2022",
      description: "Honored as one of the best graduating students in Computer Science with a remarkable CGPA of",
      cgpa: "3.70 / 4.00",
      icon: "🏅",
      accent: "#92400e",
      accentLight: "#fef3c7",
    },
  ];

  return (
    <>
      <HeaderBanner />
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white border-b border-gray-100">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #1e3a8a, transparent)" }}
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-900 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                Nigerian Software Engineer
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                My{" "}
                <span className="relative inline-block">
                  <span className="text-blue-900">Journey</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                From curious beginner to passionate software engineer — the story behind the code.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* ── Early Beginnings ── */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900">Early Beginnings</h2>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-900">Favour Oluwatomi Adegoke</span> (born July 24) is a Nigerian Software Engineer, Researcher, and Entrepreneur whose passion for technology ignited at an early age. His programming journey began in 2019 with QBasic shortly after high school, later advancing to Visual Basic for Windows.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Growing up in Nigeria, facing obstacles such as unreliable electricity, limited computing resources, and costly internet data — his determination and passion for technology never wavered. They continue to drive him to build scalable, well-architected software with clean code and beautiful user interfaces.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Key Milestones</h4>
                  <ul className="space-y-3">
                    {milestones.map((m, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="font-bold text-blue-900 min-w-[36px]">{m.year}</span>
                        <span className="text-gray-600">{m.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Professional Journey ── */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900">Professional Journey</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Expertise</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Skilled in designing and developing efficient, scalable, and user-friendly web applications using modern technologies such as{" "}
                  <span className="font-semibold text-blue-900">React, Next.js, Laravel, and Node.js</span>, complemented by extensive experience with diverse databases and powerful libraries.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-900">
                  <p className="text-gray-700 text-sm italic">&quot;Transforming complex problems into elegant solutions through clean, maintainable code.&quot;</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl mb-4">🔭</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Current Focus</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Currently expanding knowledge in <span className="font-semibold text-blue-900">Python and Machine Learning</span> to create intelligent web systems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A passionate advocate for open-source development, continuous learning, and collaboration — seeking opportunities to contribute to innovative projects within a forward-thinking team.
                </p>
              </div>
            </div>
          </section>

          {/* ── Education ── */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">🎓</div>
              <h2 className="text-3xl font-bold text-gray-900">Academic Foundation</h2>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Federal Polytechnic, Ilaro</h3>
                  <p className="text-blue-900 text-sm font-medium mb-4">Ogun State, Nigeria</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Favour earned both his <span className="font-semibold text-blue-900">Higher National Diploma (HND)</span> and <span className="font-semibold text-blue-900">National Diploma (ND)</span> in Computer Science — building a strong academic foundation for his technical career.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-5 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="text-3xl font-bold text-blue-900 mb-1">3.74</div>
                      <div className="text-sm text-gray-600 font-medium">HND CGPA</div>
                    </div>
                    <div className="text-center p-5 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="text-3xl font-bold text-blue-900 mb-1">3.70</div>
                      <div className="text-sm text-gray-600 font-medium">ND CGPA</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Academic Focus</h4>
                  <ul className="space-y-2.5">
                    {["Computer Science Fundamentals", "Software Engineering Principles", "Database Management Systems", "Web Technologies", "Data Structures & Algorithms"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#1e40af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Awards ── */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">🏆</div>
              <h2 className="text-3xl font-bold text-gray-900">Recognition & Awards</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 overflow-hidden hover:-translate-y-1">
                  <div className="h-1 w-full" style={{ background: award.accent }} />
                  <div className="p-7">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: award.accentLight }}>
                        {award.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{award.title}</h4>
                        <p className="text-sm text-gray-500 mt-0.5">{award.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {award.description}{" "}
                      <span className="font-bold" style={{ color: award.accent }}>{award.cgpa}</span>
                    </p>
                  </div>
                </div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build Something Amazing</h2>
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                  Passionate about creating innovative solutions and collaborating on meaningful projects.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  Get In Touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
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