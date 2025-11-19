import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Products() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Enhanced Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full mb-8 shadow-xl">
              <span className="text-4xl">🚀</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              My Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Innovative solutions and tools crafted with modern technology
            </p>
            <div className="w-32 h-1.5 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mt-8 rounded-full shadow-sm"></div>
          </div>

          {/* Coming Soon Section */}
          <section className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto">
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-cyan-50 opacity-50"></div>
                
                {/* Content */}
                <div className="relative z-10 p-12 text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-linear-to-br from-orange-500 to-yellow-500 rounded-full mb-8 shadow-lg">
                    <span className="text-5xl">⚡</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Exciting Things Are Coming
                  </h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                    I&apos;m currently crafting some innovative products and tools that will revolutionize how developers work. 
                    Stay tuned for cutting-edge solutions built with modern technologies and user experience at the forefront.
                  </p>

                  {/* Progress Indicators */}
                  <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
                    <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-lg">🔧</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">In Development</h4>
                      <p className="text-sm text-gray-600">Crafting innovative solutions</p>
                    </div>

                    <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-lg">🧪</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Testing Phase</h4>
                      <p className="text-sm text-gray-600">Ensuring quality & performance</p>
                    </div>

                    <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-lg">🎯</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Coming Soon</h4>
                      <p className="text-sm text-gray-600">Launching exciting products</p>
                    </div>
                  </div>

                  {/* Countdown/Newsletter CTA */}
                  <div className="bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl p-8 text-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
                    <p className="text-cyan-100 mb-6 max-w-md mx-auto">
                      Get notified when I launch new products and tools. No spam, just meaningful updates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-500"
                      />
                      <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
                        Notify Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teaser Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What&apos;s in the Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A glimpse into the innovative projects currently under development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Powered / ML Solutions */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                  <span className="text-2xl text-white">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">AI Powered / ML Solutions</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Intelligent applications leveraging machine learning and AI technologies to solve complex problems and automate decision-making processes.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full">AI/ML</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">TensorFlow</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">Python</span>
                </div>
              </div>

              {/* Open Source Tools */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                  <span className="text-2xl text-white">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Developer Tools</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  A suite of open-source utilities and libraries designed to enhance developer productivity and streamline common development tasks.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Open Source</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">npm</span>
                </div>
              </div>

              {/* Web Applications */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Web Solutions</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Modern web applications built with cutting-edge technologies, focusing on performance, scalability, and exceptional user experiences.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">React</span>
                  <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs font-medium rounded-full">Tailwind</span>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-linear-to-br from-gray-900 to-blue-900 rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Let&apos;s collaborate on building something amazing together. Whether you need a custom solution or want to discuss potential partnerships, I&apos;d love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center"
                  >
                    <span>Get In Touch</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                  <a
                    href="https://github.com/tomi-philips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
                  >
                    <span>View GitHub</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}