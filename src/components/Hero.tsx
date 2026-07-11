import Image from 'next/image'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-900 rounded-full animate-pulse"></span>
            Open to opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I&apos;m <span className="text-blue-900">Favour</span>
            <br />
            <span className="text-gray-700 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              Software Engineer
            </span>
            <span className="inline-block ml-2">🇳🇬</span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            I build scalable, high-performance systems with clean code and solid architecture. 
            Passionate about learning and creating software that stands the test of time.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>View Résumé</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
                />
              </svg>
            </a>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 hover:shadow-md"
            >
              <span>Let's Connect</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
                />
              </svg>
            </a>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">React</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Next.js</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Laravel</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
            {/* Gradient Background Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900 to-blue-400 opacity-20 blur-2xl"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full border-4 border-blue-900 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/tomi_favour_profile-picture.png"
                alt="Favour Oluwatomi Adegoke - Software Engineer"
                fill
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}