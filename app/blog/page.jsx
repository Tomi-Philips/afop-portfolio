import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Blog() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Enhanced Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-cyan-500 to-indigo-500 rounded-full mb-8 shadow-xl">
              <span className="text-4xl">✍️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 to-cyan-900 bg-clip-text text-transparent mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and thoughts on technology and development
            </p>
            <div className="w-32 h-1.5 bg-linear-to-r from-cyan-500 to-indigo-500 mx-auto mt-8 rounded-full shadow-sm"></div>
          </div>

          {/* Main Content Section */}
          <section className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto">
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-50 to-nigo-50 opacity-50"></div>
                
                {/* Content */}
                <div className="relative z-10 p-12 text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-linear-to-br from-cyan-500 to-indigo-500 rounded-full mb-8 shadow-lg">
                    <span className="text-5xl">🚀</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Great Content Coming Soon
                  </h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                    I&apos;m currently crafting valuable content that will help developers level up their skills, 
                    stay updated with modern technologies, and solve real-world programming challenges.
                  </p>

                  {/* Content Categories */}
                  <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
                    <div className="text-center p-6 bg-cyan-50 rounded-xl border border-cyan-100 hover:border-cyan-200 transition-all duration-300">
                      <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-lg">🎯</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tutorials</h4>
                      <p className="text-sm text-gray-600">Step-by-step guides</p>
                    </div>

                    <div className="text-center p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                      <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-lg">💡</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Insights</h4>
                      <p className="text-sm text-gray-600">Industry perspectives</p>
                    </div>

                    <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-lg">🔧</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best Practices</h4>
                      <p className="text-sm text-gray-600">Development tips</p>
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-linear-to-r from-cyan-500 to-indigo-500 rounded-xl p-8 text-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">Get Notified When I Launch</h3>
                    <p className="text-cyan-100 mb-6 max-w-md mx-auto">
                      Be the first to know when new articles are published. Get exclusive access to technical content and development insights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-500"
                      />
                      <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Topics Teaser */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Topics I&apos;ll Cover</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A preview of the technical content and tutorials in development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Web Development</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Modern web technologies, frameworks, and best practices for building scalable applications.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">React</span>
                  <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">Next.js</span>
                </div>
              </div>

              {/* Backend Systems */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                  <span className="text-2xl text-white">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Backend Development</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Server-side programming, APIs, databases, and system architecture patterns.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">PHP</span>
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                  <span className="text-2xl text-white">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">DevOps & Tools</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Development workflows, automation, deployment strategies, and productivity tools.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">Docker</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">CLI</span>
                </div>
              </div>
            </div>
          </section>

          {/* Writing Philosophy */}
          <section className="mb-20">
            <div className="bg-linear-to-br from-cyan-500 to-indigo-600 rounded-2xl p-12 text-white shadow-2xl">
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-8">My Writing Philosophy</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg">🎯</span>
                    </div>
                    <h4 className="font-semibold mb-2">Practical</h4>
                    <p className="text-cyan-100 text-sm">Real-world solutions you can use today</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg">📚</span>
                    </div>
                    <h4 className="font-semibold mb-2">In-depth</h4>
                    <p className="text-cyan-100 text-sm">Comprehensive coverage of topics</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg">👨‍💻</span>
                    </div>
                    <h4 className="font-semibold mb-2">Developer-Focused</h4>
                    <p className="text-cyan-100 text-sm">Written by a developer for developers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg">🆓</span>
                    </div>
                    <h4 className="font-semibold mb-2">Free & Accessible</h4>
                    <p className="text-cyan-100 text-sm">Quality content available to everyone</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media & Alternative Content */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Follow My Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                While I work on the blog, you can find me sharing insights and updates on these platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <a
                href="https://twitter.com/-"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="text-xl text-white">🐦</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Twitter</h3>
                <p className="text-gray-600 text-sm">Quick tips & updates</p>
              </a>

              <a
                href="https://github.com/tomi-philips"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-black transition-colors duration-300">
                  <span className="text-xl text-white">💻</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm">Code & projects</p>
              </a>

              <a
                href="https://linkedin.com/in/tomi-philips"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                  <span className="text-xl text-white">💼</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm">Professional insights</p>
              </a>

              <a
                href="/contact"
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                  <span className="text-xl text-white">📧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">Direct communication</p>
              </a>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Have a Topic Suggestion?</h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                I&apos;d love to hear what you&apos;re interested in learning about. Your suggestions will help shape the content I create.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="group bg-linear-to-r from-cyan-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center"
                >
                  <span>Suggest a Topic</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
                <a
                  href="https://twitter.com/-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center"
                >
                  <span>DM on Twitter</span>
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