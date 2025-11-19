import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Biography() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Enhanced Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full mb-8 shadow-xl">
              <span className="text-4xl">👨‍💻</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              My Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From curious beginner to passionate software engineer - the story behind the code
            </p>
            <div className="w-32 h-1.5 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mt-8 rounded-full shadow-sm"></div>
          </div>

          {/* Background Section - Enhanced */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Early Beginnings</h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    <span className="font-semibold text-gray-900">Favour Oluwatomi Adegoke</span> (born July 24) is a Nigerian Software Engineer, Researcher, and Entrepreneur whose passion for technology ignited at an early age. His programming journey began in 2019 with QBasic shortly after high school, later advancing to Visual Basic for Windows. That experience introduced him to the world of event-driven programming and deepened his understanding of software interaction. He soon transitioned into modern web technologies, mastering HTML, CSS, and JavaScript.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Growing up in Nigeria, one of the world&apos;s most challenging environments for technological advancement, Favour faced obstacles such as unreliable electricity, limited access to computing resources, and costly internet data. Despite these challenges, his determination and passion for technology never wavered. They continue to drive him to build scalable, well-architected software with clean code and beautiful user interfaces.
                  </p>
                </div>
                <div className="lg:w-1/3 bg-linear-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Key Milestones</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Started programming journey in 2019
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Began with QBasic programming
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Self-taught web development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Overcame infrastructure challenges
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Profession Section - Enhanced */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Professional Journey</h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">💻</span>
                    </div>
                    Technical Expertise
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Skilled in designing and developing efficient, scalable, and user-friendly web applications using modern technologies such as <span className="font-semibold text-blue-600"> React, Next.js, Laravel, and Node.js, </span> complemented by extensive experience with diverse databases, modern frameworks, and powerful libraries.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 text-sm">
                      &quot;Transforming complex problems into elegant solutions through clean, maintainable code.&quot;
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    Current Focus
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Currently expanding knowledge in <span className="font-semibold text-purple-600">Python and Machine Learning</span> to create intelligent web systems. Seeking opportunities to contribute to innovative projects and grow within a forward-thinking development team.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A passionate advocate for open-source development, continuous learning, and collaboration, I&apos;m seeking opportunities to contribute to innovative projects and grow within a forward-thinking software engineering team. 
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section - Enhanced */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                <span className="text-2xl">🎓</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Academic Foundation</h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Federal Polytechnic, Ilaro</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Favour earned both his <span className="font-semibold text-purple-600">Higher National Diploma (HND)</span> and <span className="font-semibold text-purple-600">National Diploma (ND)</span> in Computer Science from Federal Polytechnic, Ilaro, Ogun State, Nigeria - building a strong academic foundation for his technical career.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">3.74</div>
                      <div className="text-sm text-gray-600">HND CGPA</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">3.70</div>
                      <div className="text-sm text-gray-600">ND CGPA</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 bg-linear-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Academic Focus</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Computer Science Fundamentals
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Software Engineering Principles
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Database Management Systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Web Technologies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Awards Section - Enhanced */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                <span className="text-2xl">🏆</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Recognition & Awards</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Career Awards - Enhanced */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Professional Journey</h3>
                </div>
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-blue-500">🚀</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    The professional journey continues with exciting opportunities on the horizon. Future career achievements and recognition await as the impact of current projects grows.
                  </p>
                </div>
              </div>

              {/* Education Awards - Enhanced */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Academic Excellence</h3>
                </div>
                
                <div className="space-y-6">
                  {/* HND Award */}
                  <div className="bg-linear-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-400 hover:border-yellow-500 transition-all duration-300">
                    <div className="flex items-start mb-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <span className="text-yellow-600">⭐</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Best Graduating Student</h4>
                        <p className="text-sm text-gray-600 mb-2">Higher National Diploma • 2023-2025</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Achieved the prestigious overall best graduating student award in Computer Science with an outstanding CGPA of <span className="font-bold text-yellow-600">3.74/4.00</span> after completing the HND program.
                    </p>
                  </div>

                  {/* ND Award */}
                  <div className="bg-linear-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-400 hover:border-amber-500 transition-all duration-300">
                    <div className="flex items-start mb-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                        <span className="text-amber-600">🏅</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Overall Best Graduating Student</h4>
                        <p className="text-sm text-gray-600 mb-2">National Diploma • 2020-2022</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Honored as one of the best graduating students in Computer Science with a remarkable CGPA of <span className="font-bold text-amber-600">3.70/4.00</span> after the ND program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center">
            <div className="bg-linear-to-br from-blue-500 to-purple-600 p-12 rounded-2xl shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Passionate about creating innovative solutions and collaborating on meaningful projects. 
                Whether you need technical expertise or want to discuss potential opportunities, I&apos;d love to connect.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get In Touch
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}