import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Skills() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Enhanced Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🚀</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A comprehensive showcase of my technical capabilities and professional strengths
            </p>
            <div className="w-32 h-1.5 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mt-8 rounded-full shadow-sm"></div>
          </div>

          {/* Technical Skills Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 inline-flex items-center">
                Technical Skills
                <span className="ml-4 text-3xl animate-bounce">💻</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Mastering the tools and technologies that power modern digital solutions
              </p>
            </div>

            {/* Programming Languages */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Programming Languages</h3>
              </div>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-4xl">
                The foundational tools that enable me to bring ideas to life through code, from web applications to smart contracts.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* PHP - Enhanced */}
                <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <span className="text-xl text-white font-bold">PHP</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">PHP</h4>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Backend</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Powering over 70% of the web, PHP is my go-to for scalable enterprise applications. 
                    With extensive experience in modern PHP frameworks and best practices, I build robust, 
                    maintainable backend systems that handle complex business logic efficiently.
                  </p>
                </div>

                {/* JavaScript - Enhanced */}
                <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <span className="text-xl text-white font-bold">JS</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">JavaScript</h4>
                      <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">Full Stack</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    From interactive frontends to high-performance servers, JavaScript is my versatile tool 
                    for full-stack development. Leveraging modern ES6+ features and runtime environments 
                    to create seamless experiences across web, mobile, and desktop platforms.
                  </p>
                </div>

                {/* TypeScript - Enhanced */}
                <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <span className="text-xl text-white font-bold">TS</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">TypeScript</h4>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Type Safe</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Bringing enterprise-grade type safety to JavaScript development. With advanced features 
                    like interfaces, generics, and union types, I build large-scale applications with 
                    confidence in code reliability and maintainability.
                  </p>
                </div>

                {/* Python - Enhanced */}
                <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <span className="text-xl text-white font-bold">PY</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Python</h4>
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Versatile</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Leveraging Python&apos;s simplicity and power for data analysis, automation, backend development, and machine learning. 
                    With expertise in popular frameworks and libraries, I create efficient solutions for 
                    data-intensive applications and scalable web services.
                  </p>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Frameworks & Libraries</h3>
              </div>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-4xl">
                Leveraging powerful frameworks to accelerate development while maintaining code quality and scalability.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Node.js - Enhanced */}
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-sm text-white font-bold">NJ</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">Node.js</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Building high-performance, non-blocking server applications with Node.js runtime. 
                    Leveraging the event-driven architecture for scalable real-time applications and APIs.
                  </p>
                </div>

                {/* Laravel - Enhanced */}
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-sm text-white font-bold">LV</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">Laravel</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Crafting elegant, maintainable PHP applications with Laravel&apos;s powerful ecosystem. 
                    Expert in Eloquent ORM, Blade templating, and artisan command-line tools.
                  </p>
                </div>

                {/* Express.js - Enhanced */}
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-sm text-white font-bold">EX</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">Express.js</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Creating lightweight, fast RESTful APIs with Express.js middleware architecture. 
                    Perfect for microservices and minimalistic backend solutions.
                  </p>
                </div>

                {/* React.js - Enhanced */}
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 4.477-12 10 0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 5.292c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C21.138 18.163 24 14.418 24 10c0-5.523-5.373-10-12-10z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">React.js</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Building dynamic, component-based UIs with React&apos;s virtual DOM. Expert in hooks, 
                    context API, and state management for modern web applications.
                  </p>
                </div>

                {/* Next.js - Enhanced */}
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-gray-900 to-black rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-200">Next.js</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Full-stack React applications with SSR, SSG, and API routes. Optimized performance 
                    with automatic code splitting and image optimization out of the box.
                  </p>
                </div>

                {/* Tailwind CSS - Enhanced */}
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-sm text-white font-bold">TW</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-200">Tailwind CSS</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Utility-first CSS framework for rapid UI development. Creating custom, 
                    responsive designs without writing custom CSS through intelligent class composition.
                  </p>
                </div>
              </div>
            </div>

            {/* Databases Section - Enhanced */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                  <span className="text-2xl">💾</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Databases & Storage</h3>
              </div>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-4xl">
                Expertise in both SQL and NoSQL databases, ensuring optimal data storage, retrieval, and management strategies.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* MySQL - Enhanced */}
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-sm text-white font-bold">SQL</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">MySQL</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Relational database expertise with ACID compliance, complex queries, and transaction management. 
                    Ideal for financial systems and data integrity-critical applications.
                  </p>
                </div>

                {/* MongoDB - Enhanced */}
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-sm text-white font-bold">MG</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">MongoDB</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Document-based NoSQL database for big data applications. Expertise in aggregation pipelines, 
                    replication, and cloud deployment with MongoDB Atlas.
                  </p>
                </div>

                {/* Redis - Enhanced */}
                <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-sm text-white font-bold">RD</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200">Redis</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    In-memory data structure store for caching, sessions, and real-time features. 
                    Advanced usage with Pub/Sub, streams, and custom caching strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* API Designs - Enhanced */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">API Architecture</h3>
              </div>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-4xl">
                Designing robust, scalable, and developer-friendly APIs that power modern applications and integrations.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* REST - Enhanced */}
                <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <span className="text-xl text-white font-bold">REST</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">REST API</h4>
                      <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Standard</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Building RESTful APIs following industry best practices with proper HTTP semantics, 
                    status codes, and resource modeling. Expertise in authentication, rate limiting, 
                    and comprehensive API documentation.
                  </p>
                </div>

                {/* GraphQL - Enhanced */}
                <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-pink-200 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                      <span className="text-xl text-white font-bold">GQL</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">GraphQL</h4>
                      <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">Modern</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Implementing efficient GraphQL schemas with Apollo Server, enabling clients to request 
                    exactly the data they need. Advanced features like batching, caching, and real-time 
                    subscriptions for modern application requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Soft Skills Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 inline-flex items-center">
                Professional Skills
                <span className="ml-4 text-3xl animate-pulse">🌟</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Beyond technical expertise - the interpersonal skills that drive successful collaboration and leadership
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Communication - Enhanced */}
              <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Communication</h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  Articulating complex technical concepts with clarity to diverse audiences, from stakeholders to development teams.
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Technical Documentation
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Active Listening
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Presentation Skills
                  </li>
                </ul>
              </div>

              {/* Teamwork - Enhanced */}
              <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Team Collaboration</h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  Fostering inclusive environments where diverse perspectives drive innovation and collective success.
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Agile Methodology
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Cross-functional Sync
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Knowledge Sharing
                  </li>
                </ul>
              </div>

              {/* Leadership - Enhanced */}
              <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Leadership</h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  Guiding teams through complex projects with strategic vision, empathy, and data-driven decision making.
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Project Management
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Mentorship & Coaching
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Strategic Planning
                  </li>
                </ul>
              </div>

              {/* Problem Solving - Enhanced */}
              <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-500 transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Problem Solving</h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  Analytical thinking and creative approaches to overcome technical challenges and optimize solutions.
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Critical Analysis
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Creative Innovation
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Adaptability
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}