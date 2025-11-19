import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Enhanced Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full mb-8 shadow-xl">
              <span className="text-4xl">💬</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate, discuss ideas, or just say hello? I&apos;m always excited to connect with like-minded people.
            </p>
            <div className="w-32 h-1.5 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mt-8 rounded-full shadow-sm"></div>
          </div>

          {/* Enhanced Introduction */}
          <section className="mb-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-2xl text-white">🌍</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Connect With Me
                </h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I&apos;m passionate about networking with talented individuals worldwide. Whether you have a project in mind, want to discuss technology, or just say hello - I&apos;d love to hear from you!
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Feel free to reach out via email, social media, or messaging apps. Don&apos;t forget to follow for updates on my latest projects and insights.
                </p>
              </div>
            </div>
          </section>

          {/* Enhanced Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Social Media - Enhanced */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Social Media</h3>
                <p className="text-gray-600 mt-2">Follow and connect</p>
              </div>
              
              <div className="space-y-4">
                {/* GitHub */}
                <div className="group/item flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 shadow-sm group-hover/item:bg-black transition-colors duration-300">
                    <span className="text-xl text-white">🐙</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">GitHub</p>
                    <a
                      href="https://github.com/tomi-philips"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      @tomi-philips
                    </a>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <span className="text-blue-500">→</span>
                  </div>
                </div>

                {/* Twitter */}
                <div className="group/item flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4 shadow-sm group-hover/item:bg-blue-500 transition-colors duration-300">
                    <span className="text-xl text-white">🐦</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Twitter</p>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      -
                    </a>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <span className="text-blue-500">→</span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group/item flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-sm group-hover/item:bg-blue-700 transition-colors duration-300">
                    <span className="text-xl text-white">💼</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/tomi-philips"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      @tomi-philips
                    </a>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <span className="text-blue-500">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Numbers - Enhanced */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-linear-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl text-white">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Direct Contact</h3>
                <p className="text-gray-600 mt-2">Call or message me</p>
              </div>
              
              <div className="space-y-4">
                {/* Hotline */}
                <div className="group/item flex items-center p-4 bg-gray-50 rounded-xl hover:bg-green-50 hover:border-green-200 border border-transparent transition-all duration-300">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 shadow-sm group-hover/item:bg-green-700 transition-colors duration-300">
                    <span className="text-xl text-white">📞</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Hotline</p>
                    <a
                      href="tel:+2349168533007"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      +234 916 853 3007
                    </a>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <span className="text-green-500">→</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group/item flex items-center p-4 bg-gray-50 rounded-xl hover:bg-green-50 hover:border-green-200 border border-transparent transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 shadow-sm group-hover/item:bg-green-600 transition-colors duration-300">
                    <span className="text-xl text-white">💬</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a
                      href="https://wa.me/2348131653504"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      +234 813 165 3504
                    </a>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <span className="text-green-500">→</span>
                  </div>
                </div>

                {/* Telegram */}
                <div className="group/item flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 shadow-sm group-hover/item:bg-blue-600 transition-colors duration-300">
                    <span className="text-xl text-white">✈️</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Telegram</p>
                    <a
                      href="https://t.me/2348131653504"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      +234 813 165 3504
                    </a>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <span className="text-blue-500">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Addresses - Enhanced */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl text-white">📧</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Email</h3>
                <p className="text-gray-600 mt-2">Send me a message</p>
              </div>
              
              <div className="space-y-4">
                {/* GMail */}
                <div className="group/item flex items-center p-4 bg-gray-50 rounded-xl hover:bg-red-50 hover:border-red-200 border border-transparent transition-all duration-300">
                  <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    <span className="text-xl text-white">G</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">GMail</p>
                    <a
                      href="mailto:adegokefavour240@gmail.com"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm break-all"
                    >
                      adegokefavour240@gmail.com
                    </a>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <span className="text-red-500">→</span>
                  </div>
                </div>

                {/* YMail */}
                <div className="group/item flex items-center p-4 bg-gray-50 rounded-xl hover:bg-purple-50 hover:border-purple-200 border border-transparent transition-all duration-300">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    <span className="text-xl text-white">Y</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">GMail</p>
                    <a
                      href="mailto:adegokefavour83@gmail.com"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm break-all"
                    >
                      adegokefavour83@gmail.com
                    </a>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <span className="text-purple-500">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <section className="text-center">
            <div className="bg-linear-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start a Conversation?</h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Whether you have a project idea, want to collaborate, or just want to chat about technology - I&apos;m always excited to connect with passionate individuals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:adegokefavour240@gmail.com"
                    className="group bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center"
                  >
                    <span>Send Email</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                  <a
                    href="https://wa.me/2348131653504"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center"
                  >
                    <span>WhatsApp Me</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
                <p className="text-sm opacity-80 mt-6">
                  Typically respond within 24 hours
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}