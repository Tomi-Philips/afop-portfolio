'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  const tabletToggleRef = useRef<HTMLButtonElement>(null)

  const navItems = [
    { name: 'Biography', path: '/biography' },
    { name: 'Skills', path: '/skills' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Products', path: '/products' },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close on outside click — but NOT when clicking the toggle buttons themselves
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node
      if (
        menuRef.current && !menuRef.current.contains(target) &&
        mobileToggleRef.current && !mobileToggleRef.current.contains(target) &&
        tabletToggleRef.current && !tabletToggleRef.current.contains(target)
      ) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="block">
              <Image
                src="/afop-logo.png"
                alt="AFOP Logo"
                width={100}
                height={34}
                className="h-8 w-auto hover:opacity-80 transition-opacity duration-300"
                style={{ width: 'auto' }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation — hidden below lg */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-2.5 py-1.5 rounded-md transition-colors duration-200 group font-medium text-[13px] whitespace-nowrap ${
                    isActive
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-900 rounded-full" />
                  )}
                </Link>
              )
            })}

            <Link
              href="/contact"
              className={`ml-2 px-4 py-1.5 text-white font-medium rounded-lg transition-all duration-300 text-[13px] whitespace-nowrap ${
                pathname === '/contact'
                  ? 'bg-blue-800 shadow-md'
                  : 'bg-blue-900 hover:bg-blue-800 hover:shadow-md'
              }`}
            >
              Let&apos;s Connect
            </Link>
          </nav>

          {/* Tablet: Condensed nav (md to lg) */}
          <nav className="hidden md:flex lg:hidden items-center gap-0.5">
            {/* Show fewer items on tablet, rest in dropdown */}
            {navItems.slice(0, 4).map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-2 py-1.5 rounded-md transition-colors duration-200 font-medium text-[12px] whitespace-nowrap ${
                    isActive
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
            <span className="text-gray-300 text-xs px-0.5">···</span>
            <Link
              href="/contact"
              className={`ml-1 px-3 py-1.5 text-white font-medium rounded-lg transition-all duration-300 text-[12px] whitespace-nowrap ${
                pathname === '/contact'
                  ? 'bg-blue-800'
                  : 'bg-blue-900 hover:bg-blue-800'
              }`}
            >
              Connect
            </Link>
            {/* Tablet toggle for remaining items */}
            <button
              ref={tabletToggleRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-1 p-1.5 rounded-lg text-gray-500 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200"
              aria-label="More navigation items"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {/* Mobile menu button — below md */}
          <button
            ref={mobileToggleRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-[5px]">
              <span
                className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile / Tablet dropdown panel ── */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50"
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            {/* Nav links grid — compact 2-column on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 mb-3">
              {navItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-50 text-blue-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-900'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-900 shrink-0" />
                    )}
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-3" />

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300"
            >
              Let&apos;s Connect
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}