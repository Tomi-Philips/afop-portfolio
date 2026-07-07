'use client'

import { useState, useEffect } from 'react'
import HeaderBanner from "@/components/header-banner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Types
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

interface TechStack {
  name: string;
  icon: string;
}

export default function Portfolio() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/tomi-philips/repos?sort=updated&per_page=10')
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await response.json()

        const transformedRepos: Repository[] = data.map((repo: any) => ({
          name: repo.name,
          url: repo.html_url,
          language: repo.language || 'Unknown',
          stars: repo.stargazers_count,
          description: repo.description || 'No description available',
          isFeatured: repo.stargazers_count > 0,
          isPersonal: repo.private === false && repo.fork === false
        }))

        setRepositories(transformedRepos)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        // Fallback to static data
        setRepositories([
          {
            name: 'tomi-philips',
            url: 'https://github.com/tomi-philips',
            language: 'Markdown',
            stars: 0,
            description: 'Personal repository showcasing my journey and contributions',
            isPersonal: true
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  const staticRepositories: Repository[] = [
    {
      name: 'tomi-philips',
      url: 'https://github.com/tomi-philips',
      language: 'Markdown',
      stars: 0,
      description: 'Personal repository showcasing my journey and contributions',
      isPersonal: true
    },
    {
      name: 'agrop',
      url: 'https://github.com/tomi-philips/agrop',
      language: 'Solidity',
      stars: 0,
      description: 'Decentralized agricultural platform with smart contracts for transparent farming operations',
      isFeatured: true
    },
    {
      name: 'agrop-quality',
      url: 'https://github.com/tomi-philips/agrop-quality',
      language: 'Solidity',
      stars: 0,
      description: 'Quality assurance and testing suite for Agrop smart contracts ensuring security and reliability'
    },
    {
      name: 'telegraf-cli',
      url: '#',
      language: 'TypeScript',
      stars: 0,
      description: 'Command-line interface for streamlined Telegram bot development (Coming Soon)',
      isUpcoming: true
    },
    {
      name: 'suya',
      url: '#',
      language: 'JavaScript',
      stars: 0,
      description: 'Lightweight caching library with Redis support for Node.js applications (Coming Soon)',
      isUpcoming: true
    },
    {
      name: 'dev-toolkit',
      url: '#',
      language: 'TypeScript',
      stars: 0,
      description: 'Collection of utilities and helpers for modern web development (Coming Soon)',
      isUpcoming: true
    }
  ];

  const getLanguageColor = (language: string): string => {
    const colors: Record<string, string> = {
      'Solidity': 'bg-blue-100 text-blue-800 border-blue-200',
      'Markdown': 'bg-gray-100 text-gray-800 border-gray-200',
      'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'TypeScript': 'bg-blue-100 text-blue-800 border-blue-200',
      'Python': 'bg-green-100 text-green-800 border-green-200',
      'HTML': 'bg-red-100 text-red-800 border-red-200',
      'CSS': 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colors[language] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getLanguageIcon = (language: string): string => {
    const icons: Record<string, string> = {
      'Solidity': '⚡',
      'Markdown': '📝',
      'JavaScript': '🟨',
      'TypeScript': '🔷',
      'Python': '🐍',
      'HTML': '🌐',
      'CSS': '🎨'
    };
    return icons[language] || '📁';
  };

  const techStack: TechStack[] = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Laravel', icon: '🐘' },
    { name: 'Tailwind', icon: '💨' }
  ];

  const displayRepos = error ? staticRepositories : repositories;

  return (
    <>
      <HeaderBanner />
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-900 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">💼</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of projects showcasing my expertise in modern software development
            </p>
            <div className="w-24 h-1 bg-blue-900 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Stats Overview */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center animate-pulse">
                  <div className="h-8 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">{displayRepos.length}</div>
                <div className="text-gray-600 text-sm">Total Projects</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">
                  {new Set(displayRepos.map(repo => repo.language).filter(lang => lang !== 'Unknown')).size}
                </div>
                <div className="text-gray-600 text-sm">Technologies</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">
                  {displayRepos.filter(repo => !repo.isPersonal && repo.url !== '#').length}
                </div>
                <div className="text-gray-600 text-sm">Live Projects</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">
                  {displayRepos.filter(repo => repo.url === '#').length}
                </div>
                <div className="text-gray-600 text-sm">Coming Soon</div>
              </div>
            </div>
          )}

          {/* Repository Grid */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {displayRepos.map((repo, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                    repo.isFeatured 
                      ? 'border-blue-200' 
                      : repo.isUpcoming
                      ? 'border-gray-200'
                      : 'border-gray-200'
                  }`}
                >
                  {/* Badge */}
                  {(repo.isFeatured || repo.isUpcoming) && (
                    <div className={`px-4 py-1.5 text-xs font-semibold text-center rounded-t-lg ${
                      repo.isFeatured 
                        ? 'bg-blue-900 text-white' 
                        : 'bg-gray-600 text-white'
                    }`}>
                      {repo.isFeatured ? 'Featured Project' : 'Coming Soon'}
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {repo.name}
                        </h3>
                        {repo.isPersonal && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                            Personal
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm bg-gray-50 px-2 py-1 rounded">
                        <span className="mr-1">⭐</span>
                        <span>{repo.stars}</span>
                      </div>
                    </div>

                    {/* Language */}
                    <div className="mb-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getLanguageColor(repo.language)}`}>
                        <span className="mr-1.5">{getLanguageIcon(repo.language)}</span>
                        {repo.language}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {repo.description}
                    </p>

                    {/* Action */}
                    <a
                      href={repo.url}
                      target={repo.url !== '#' ? "_blank" : undefined}
                      rel={repo.url !== '#' ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                        repo.isUpcoming
                          ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-900 text-white hover:bg-blue-800 hover:shadow-sm'
                      }`}
                    >
                      {repo.isUpcoming ? 'Coming Soon' : 'View Repository'}
                      {!repo.isUpcoming && (
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Stack */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Technology Stack</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life
              </p>
              <div className="w-16 h-0.5 bg-blue-900 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl mb-1">{tech.icon}</div>
                  <div className="font-medium text-gray-900 text-sm">{tech.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-blue-900 rounded-lg p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or want to discuss potential opportunities? I&apos;m always excited to work on innovative ideas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-900 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 hover:shadow-md transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="https://github.com/tomi-philips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              More exciting projects in development... Stay tuned! 🚀
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}