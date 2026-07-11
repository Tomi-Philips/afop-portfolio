'use client'

import { useState, useEffect } from 'react'
import HeaderBanner from "@/components/header-banner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Repository {
  name: string;
  url: string;
  language: string;
  stars: number;
  description: string;
  isFeatured?: boolean;
  isPersonal?: boolean;
  isUpcoming?: boolean;
}

const langMeta: Record<string, { color: string; light: string; icon: string }> = {
  Solidity:   { color: '#1e3a8a', light: '#dbeafe', icon: '⚡' },
  Markdown:   { color: '#374151', light: '#f3f4f6', icon: '📝' },
  JavaScript: { color: '#92400e', light: '#fef3c7', icon: '🟨' },
  TypeScript: { color: '#1e40af', light: '#dbeafe', icon: '🔷' },
  Python:     { color: '#065f46', light: '#d1fae5', icon: '🐍' },
  HTML:       { color: '#991b1b', light: '#fee2e2', icon: '🌐' },
  CSS:        { color: '#1d4ed8', light: '#dbeafe', icon: '🎨' },
};

const staticRepositories: Repository[] = [
  { name: 'tomi-philips', url: 'https://github.com/Tomi-Philips', language: 'Markdown', stars: 0, description: 'Personal repository showcasing my journey and contributions', isPersonal: true },
  { name: 'agrop', url: 'https://github.com/Tomi-Philips/agrop', language: 'Solidity', stars: 0, description: 'Decentralized agricultural platform with smart contracts for transparent farming operations', isFeatured: true },
  { name: 'agrop-quality', url: 'https://github.com/Tomi-Philips/agrop-quality', language: 'Solidity', stars: 0, description: 'Quality assurance and testing suite for Agrop smart contracts ensuring security and reliability' },
  { name: 'telegraf-cli', url: '#', language: 'TypeScript', stars: 0, description: 'Command-line interface for streamlined Telegram bot development', isUpcoming: true },
  { name: 'suya', url: '#', language: 'JavaScript', stars: 0, description: 'Lightweight caching library with Redis support for Node.js applications', isUpcoming: true },
  { name: 'dev-toolkit', url: '#', language: 'TypeScript', stars: 0, description: 'Collection of utilities and helpers for modern web development', isUpcoming: true },
];

export default function Portfolio() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Tomi-Philips/repos?sort=updated&per_page=10')
        if (!response.ok) throw new Error('Failed to fetch repositories')
        const data = await response.json()
        const transformed: Repository[] = data.map((repo: {name:string;html_url:string;language:string|null;stargazers_count:number;description:string|null;private:boolean;fork:boolean}) => ({
          name: repo.name,
          url: repo.html_url,
          language: repo.language || 'Unknown',
          stars: repo.stargazers_count,
          description: repo.description || 'No description available',
          isFeatured: repo.stargazers_count > 0,
          isPersonal: repo.private === false && repo.fork === false
        }))
        setRepositories(transformed)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setRepositories(staticRepositories)
      } finally {
        setLoading(false)
      }
    }
    fetchRepositories()
  }, [])

  const displayRepos = error || repositories.length === 0 ? staticRepositories : repositories

  return (
    <>
      <HeaderBanner />
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-900 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full animate-pulse" />
                Open Source on GitHub
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                My{" "}
                <span className="relative inline-block">
                  <span className="text-blue-900">Portfolio</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                    <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                A collection of projects showcasing my expertise in modern software development.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        {!loading && (
          <section className="bg-blue-900 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: displayRepos.length, label: "Total Projects", icon: "💼" },
                  { value: new Set(displayRepos.map(r => r.language).filter(l => l !== 'Unknown')).size, label: "Technologies", icon: "⚡" },
                  { value: displayRepos.filter(r => !r.isUpcoming && r.url !== '#').length, label: "Live Projects", icon: "🚀" },
                  { value: displayRepos.filter(r => r.isUpcoming).length, label: "Coming Soon", icon: "🔭" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div className="text-3xl font-bold text-white">{s.value}</div>
                    <div className="text-blue-200 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* ── Repository Grid ── */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Projects & Repositories</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Real-world software built with care, shipped with purpose.</p>
              <div className="w-16 h-1 bg-blue-900 mx-auto mt-6 rounded-full" />
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse">
                    <div className="h-1 w-full bg-gray-200 rounded-full mb-6" />
                    <div className="h-5 bg-gray-200 rounded mb-3 w-3/4" />
                    <div className="h-4 bg-gray-200 rounded mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-6" />
                    <div className="h-9 bg-gray-200 rounded-xl" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayRepos.map((repo, i) => {
                  const meta = langMeta[repo.language] || { color: '#374151', light: '#f3f4f6', icon: '📁' }
                  return (
                    <article key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 overflow-hidden hover:-translate-y-1">
                      <div className="h-1 w-full" style={{ background: repo.isFeatured ? '#1e3a8a' : repo.isUpcoming ? '#6b7280' : '#e5e7eb' }} />
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 truncate">{repo.name}</h3>
                            {repo.isPersonal && (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Personal</span>
                            )}
                            {repo.isFeatured && (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-blue-900 text-white text-xs font-medium rounded-full">Featured</span>
                            )}
                            {repo.isUpcoming && (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Coming Soon</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-sm bg-gray-50 px-2 py-1 rounded-lg">
                            <span>⭐</span>
                            <span>{repo.stars}</span>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: meta.light, color: meta.color }}>
                          {meta.icon} {repo.language}
                        </span>

                        <p className="text-gray-500 text-sm leading-relaxed mb-5">{repo.description}</p>

                        <a
                          href={repo.url}
                          target={repo.url !== '#' ? "_blank" : undefined}
                          rel={repo.url !== '#' ? "noopener noreferrer" : undefined}
                          className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                            repo.isUpcoming
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-blue-900 text-white hover:bg-blue-800 hover:shadow-md hover:shadow-blue-900/20'
                          }`}
                        >
                          {repo.isUpcoming ? 'In Development' : 'View Repository'}
                          {!repo.isUpcoming && (
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          )}
                        </a>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}
          </section>

          {/* ── Tech Stack ── */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Technology Stack</h2>
                <p className="text-gray-500 text-sm">The tools I use to bring ideas to life</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'React', icon: '⚛️' }, { name: 'Next.js', icon: '▲' }, { name: 'TypeScript', icon: '🔷' },
                  { name: 'Node.js', icon: '🟢' }, { name: 'Python', icon: '🐍' }, { name: 'Laravel', icon: '🔴' },
                  { name: 'Tailwind', icon: '💨' }, { name: 'Solidity', icon: '⚡' }, { name: 'Docker', icon: '🐳' },
                ].map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 cursor-default">
                    <span>{t.icon}</span>{t.name}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section>
            <div className="relative overflow-hidden bg-blue-900 rounded-3xl p-10 md:p-14 text-white text-center">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-5xl mb-6">🤝</div>
                <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                  Have a project in mind? I&apos;m always excited to work on innovative ideas.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                    Get In Touch
                  </Link>
                  <a href="https://github.com/Tomi-Philips" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 border border-blue-700">
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}