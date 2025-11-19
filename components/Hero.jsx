// app/components/Hero.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-16 pb-20 flex items-start justify-between w-full">
      <div className="flex-1 pr-8">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          I&apos;m Favour Oluwatomi Adegoke,
          <br />
          <span className="inline-flex items-center bg-linear-to-r from-cyan-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            A Software Engineer From Nigeria
            <span className="ml-2 text-2xl">💙</span>
          </span>
        </h1>
        
        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            I&apos;m a software engineer passionate about building scalable, high-performance systems. 
            I care deeply about clean code, solid architecture, and testing. 
            I&apos;m always learning, refining my craft, and exploring the latest technologies to create software that stands the test of time.
          </p>
        </div>
        
        {/* Call to Action */}
        <div className="mt-10">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center px-8 py-4 bg-linear-to-r from-cyan-600 via-blue-700 to-indigo-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:from-cyan-700 hover:via-blue-800 hover:to-indigo-800"
          >
            <span>Check out my résumé below </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
        </div>
        <div className='flex gap-2.5 mt-4'>
          <div className='w-5 h-5 bg-red-400 rounded-full'></div>
          <div className='w-5 h-5 bg-green-400 rounded-full'></div>
          <div className='w-5 h-5 bg-amber-400 rounded-full'></div>
        </div>
      </div>

      {/* Programming Sticker */}
      <div className="hidden md:flex items-start justify-center w-1/3">
        <div className="relative w-full h-full">
          <Image
            src="/Programmer-rafiki.svg"
            alt="Programming Sticker"
            width={300}
            height={300}
            className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}