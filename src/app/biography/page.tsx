import HeaderBanner from "@/components/header-banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Types
interface Award {
  title: string;
  subtitle: string;
  description: string;
  cgpa: string;
  icon: string;
  iconBg: string;
}

interface Milestone {
  year: string;
  description: string;
}

export default function Biography() {
  const milestones: Milestone[] = [
    { year: "2019", description: "Started programming journey with QBasic" },
    { year: "2020", description: "Began formal education in Computer Science" },
    { year: "2021", description: "Explored web development technologies" },
    { year: "2022", description: "Earned National Diploma with distinction" },
    { year: "2023", description: "Advanced to Higher National Diploma program" },
    { year: "2025", description: "Graduated as Best Overall Student" },
  ];

  const awards: Award[] = [
    {
      title: "Best Graduating Student",
      subtitle: "Higher National Diploma • 2023-2025",
      description: "Achieved the prestigious overall best graduating student award in Computer Science with an outstanding CGPA of",
      cgpa: "3.74/4.00",
      icon: "⭐",
      iconBg: "from-blue-400 to-blue-600"
    },
    {
      title: "Overall Best Graduating Student",
      subtitle: "National Diploma • 2020-2022",
      description: "Honored as one of the best graduating students in Computer Science with a remarkable CGPA of",
      cgpa: "3.70/4.00",
      icon: "🏅",
      iconBg: "from-amber-400 to-amber-600"
    }
  ];

  return (
    <>
      <HeaderBanner />
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-900 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">👨‍💻</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              My Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From curious beginner to passionate software engineer - the story behind the code
            </p>
            <div className="w-24 h-1 bg-blue-900 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Background Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Early Beginnings</h2>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-gray-900">Favour Oluwatomi Adegoke</span> (born July 24) is a Nigerian Software Engineer, Researcher, and Entrepreneur whose passion for technology ignited at an early age. His programming journey began in 2019 with QBasic shortly after high school, later advancing to Visual Basic for Windows. That experience introduced him to the world of event-driven programming and deepened his understanding of software interaction. He soon transitioned into modern web technologies, mastering HTML, CSS, and JavaScript.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Growing up in Nigeria, one of the world&apos;s most challenging environments for technological advancement, Favour faced obstacles such as unreliable electricity, limited access to computing resources, and costly internet data. Despite these challenges, his determination and passion for technology never wavered. They continue to drive him to build scalable, well-architected software with clean code and beautiful user interfaces.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Milestones</h4>
                  <ul className="space-y-3">
                    {milestones.map((milestone, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-blue-600 font-semibold mr-2 min-w-[40px]">{milestone.year}</span>
                        <span className="text-gray-700">{milestone.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Profession Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">🚀</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Professional Journey</h2>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Expertise</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Skilled in designing and developing efficient, scalable, and user-friendly web applications using modern technologies such as <span className="font-semibold text-blue-900">React, Next.js, Laravel, and Node.js</span>, complemented by extensive experience with diverse databases, modern frameworks, and powerful libraries.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-900">
                    <p className="text-gray-700 text-sm italic">
                      &quot;Transforming complex problems into elegant solutions through clean, maintainable code.&quot;
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Current Focus</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Currently expanding knowledge in <span className="font-semibold text-blue-900">Python and Machine Learning</span> to create intelligent web systems. Seeking opportunities to contribute to innovative projects and grow within a forward-thinking development team.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    A passionate advocate for open-source development, continuous learning, and collaboration, I&apos;m seeking opportunities to contribute to innovative projects and grow within a forward-thinking software engineering team.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">🎓</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Academic Foundation</h2>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Federal Polytechnic, Ilaro</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Favour earned both his <span className="font-semibold text-blue-900">Higher National Diploma (HND)</span> and <span className="font-semibold text-blue-900">National Diploma (ND)</span> in Computer Science from Federal Polytechnic, Ilaro, Ogun State, Nigeria - building a strong academic foundation for his technical career.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="text-2xl font-bold text-blue-900">3.74</div>
                      <div className="text-sm text-gray-600">HND CGPA</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="text-2xl font-bold text-blue-900">3.70</div>
                      <div className="text-sm text-gray-600">ND CGPA</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Academic Focus</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-2"></span>
                      Computer Science Fundamentals
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-2"></span>
                      Software Engineering Principles
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-2"></span>
                      Database Management Systems
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mr-2"></span>
                      Web Technologies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Awards Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">🏆</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Recognition & Awards</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${award.iconBg} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                      <span className="text-white">{award.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{award.title}</h4>
                      <p className="text-sm text-gray-500">{award.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {award.description} <span className="font-bold text-blue-900">{award.cgpa}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-blue-900 rounded-lg p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
                Passionate about creating innovative solutions and collaborating on meaningful projects. 
                Whether you need technical expertise or want to discuss potential opportunities, I&apos;d love to connect.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 hover:shadow-md transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}