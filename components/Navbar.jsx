// app/components/Header.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    'Biography',
    'Skills',
    'Portfolio',
    'Blog®',
    'Products',
    'OSS'
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/afop-logo.png"
                alt="AFOP Logo"
                width={120}
                height={40}
                className="h-10 w-auto hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item === 'OSS' ? 'OSS' : item === 'Blog®' ? 'blog' : item.toLowerCase()}`}
                className="relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 group font-medium text-sm"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Let's Connect - Enhanced CTA */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-sm"
            >
              Let&apos;s Connect
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="flex flex-col space-y-3 pb-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item === 'OSS' ? 'OSS' : item === 'Blog®' ? 'blog' : item.toLowerCase()}`}
                className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mx-4 mt-2 px-4 py-3 bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-medium rounded-lg text-center shadow-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Let&apos;s Connect
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}