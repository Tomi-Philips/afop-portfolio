import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function OSS() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Enhanced Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-cyan-500 to-indigo-600 rounded-full mb-8 shadow-xl">
              <span className="text-4xl">🌱</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              Open Source
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Contributing to the community, one commit at a time
            </p>
            <div className="w-32 h-1.5 bg-linear-to-r from-cyan-500 to-indigo-500 mx-auto mt-8 rounded-full shadow-sm"></div>
          </div>

          {/* Main Content Section */}
          <section className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto">
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-50 to-blue-50 opacity-50"></div>
                
                {/* Content */}
                <div className="relative z-10 p-12 text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-linear-to-br from-indigo-500 to-cyan-500 rounded-full mb-8 shadow-lg">
                    <span className="text-5xl">🚀</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Building for the Community
                  </h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                    I&apos;m actively working on open source projects that will benefit developers worldwide. 
                    Stay tuned for innovative tools, libraries, and contributions to the ecosystem.
                  </p>

                  {/* GitHub Stats & Activity */}
                  <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
                    <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-cyan-200 transition-all duration-300">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-lg">⭐</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Active Development</h4>
                      <p className="text-sm text-gray-600">Projects in progress</p>
                    </div>

                    <div className="text-center p-6 bg-cyan-50 rounded-xl border border-cyan-100 hover:border-indigo-200 transition-all duration-300">
                      <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-lg">🔧</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quality Focus</h4>
                      <p className="text-sm text-gray-600">Well-tested code</p>
                    </div>

                    <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-lg">🌍</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Community Driven</h4>
                      <p className="text-sm text-gray-600">Built for developers</p>
                    </div>
                  </div>

                  {/* GitHub Profile CTA */}
                  <div className="bg-linear-to-r from-gray-900 to-cyan-900 rounded-xl p-8 text-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">Follow My Open Source Journey</h3>
                    <p className="text-gray-300 mb-6 max-w-md mx-auto">
                      While I prepare my projects for public release, you can follow my GitHub profile to stay updated on my contributions and upcoming projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="https://github.com/tomi-philips"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Visit My GitHub</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Projects Teaser */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What&apos;s Coming Soon</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A preview of the open source projects currently in development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Developer Tools */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                  <span className="text-2xl text-white">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Developer Tools</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Utilities and libraries to streamline development workflows and enhance productivity for the modern developer.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">TypeScript</span>
                </div>
              </div>

              {/* CLI Applications */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-cyan-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                  <span className="text-2xl text-white">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">CLI Tools</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Command-line interfaces that simplify complex tasks and automate development processes with intuitive commands.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs font-medium rounded-full">CLI</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">Automation</span>
                </div>
              </div>

              {/* Web Libraries */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                  <span className="text-2xl text-white">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Web Libraries</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Reusable components and utilities for modern web development, focusing on performance and developer experience.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">React</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs font-medium rounded-full">Next.js</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contribution Philosophy */}
          <section className="mb-20">
            <div className="bg-linear-to-br from-indigo-500 to-cyan-600 rounded-2xl p-12 text-white shadow-2xl">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">My Open Source Philosophy</h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-lg">🎯</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Quality Over Quantity</h4>
                        <p className="text-indigo-100 text-sm">Focus on well-documented, tested, and maintainable code</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-lg">🤝</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Community First</h4>
                        <p className="text-indigo-100 text-sm">Build tools that solve real problems for developers</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-lg">📖</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Great Documentation</h4>
                        <p className="text-indigo-100 text-sm">Comprehensive docs and examples for easy adoption</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-lg">🚀</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Long-term Maintenance</h4>
                        <p className="text-indigo-100 text-sm">Commitment to ongoing support and improvements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Want to Collaborate?</h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                I&apos;m always open to discussing open source collaborations, contributing to existing projects, 
                or helping other developers with their open source journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="group bg-linear-to-r from-cyan-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center"
                >
                  <span>Get In Touch</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
                <a
                  href="https://github.com/tomi-philips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Follow on GitHub</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}