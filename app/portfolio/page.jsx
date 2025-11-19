'use client'

import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Portfolio() {
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/tomi-philips/repos?sort=updated&per_page=10')
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await response.json()

        // Transform GitHub API data to match our format
        const transformedRepos = data.map(repo => ({
          name: repo.name,
          url: repo.html_url,
          language: repo.language || 'Unknown',
          stars: repo.stargazers_count,
          description: repo.description || 'No description available',
          isFeatured: repo.stargazers_count > 0, // Simple logic for featured
          isPersonal: repo.private === false && repo.fork === false
        }))

        setRepositories(transformedRepos)
      } catch (err) {
        setError(err.message)
        // Fallback to static data if API fails
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

  // Static repositories for fallback (keeping original structure)
  const staticRepositories = [
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

  const getLanguageColor = (language) => {
    const colors = {
      'Solidity': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Markdown': 'bg-gray-100 text-gray-800 border-gray-200',
      'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'TypeScript': 'bg-blue-100 text-blue-800 border-blue-200',
      'Python': 'bg-green-100 text-green-800 border-green-200',
      'HTML': 'bg-red-100 text-red-800 border-red-200',
      'CSS': 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colors[language] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getLanguageIcon = (language) => {
    const icons = {
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

  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Enhanced Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-purple-500 to-indigo-600 rounded-full mb-8 shadow-xl">
              <span className="text-4xl">💼</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of projects showcasing my expertise in modern software development
            </p>
            <div className="w-32 h-1.5 bg-linear-to-r from-purple-500 to-indigo-500 mx-auto mt-8 rounded-full shadow-sm"></div>
            <p className="text-gray-500 text-sm mt-4">All data fetched from GitHub API. Thank you :)</p>
          </div>

          {/* Stats Overview */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 text-center animate-pulse">
                  <div className="h-8 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">{repositories.length}</div>
                <div className="text-gray-600 text-sm">Total Projects</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {new Set(repositories.map(repo => repo.language).filter(lang => lang !== 'Unknown')).size}
                </div>
                <div className="text-gray-600 text-sm">Technologies</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {repositories.filter(repo => !repo.isPersonal && repo.url !== '#').length}
                </div>
                <div className="text-gray-600 text-sm">Live Projects</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {repositories.filter(repo => repo.url === '#').length}
                </div>
                <div className="text-gray-600 text-sm">Coming Soon</div>
              </div>
            </div>
          )}

          {/* Repository Grid */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Projects</h3>
              <p className="text-gray-600 mb-6">There was an error fetching projects from GitHub. Showing fallback data.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {repositories.map((repo, index) => (
                <div 
                  key={index} 
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                    repo.isFeatured 
                      ? 'border-purple-200 hover:shadow-xl hover:border-purple-300' 
                      : repo.isUpcoming
                      ? 'border-gray-200 hover:shadow-xl hover:border-gray-300'
                      : 'border-gray-100 hover:shadow-xl hover:border-gray-200'
                  }`}
                >
                  {/* Featured Badge */}
                  {repo.isFeatured && (
                    <div className="bg-linear-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 text-sm font-semibold text-center">
                      🌟 Featured Project
                    </div>
                  )}

                  {repo.isUpcoming && (
                    <div className="bg-linear-to-r from-gray-500 to-gray-600 text-white px-4 py-2 text-sm font-semibold text-center">
                      🚧 Coming Soon
                    </div>
                  )}

                  <div className="p-6">
                    {/* Repository Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 truncate group-hover:text-purple-600 transition-colors duration-300">
                          {repo.name}
                        </h3>
                        {repo.isPersonal && (
                          <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                            Personal
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm bg-gray-50 px-2 py-1 rounded-lg">
                        <span className="mr-1">⭐</span>
                        <span className="font-medium">{repo.stars}</span>
                      </div>
                    </div>

                    {/* Language Badge */}
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${getLanguageColor(repo.language)}`}>
                        <span className="mr-2 text-base">{getLanguageIcon(repo.language)}</span>
                        {repo.language}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {repo.description}
                    </p>

                    {/* Repository Footer */}
                    <div className="flex items-center justify-between">
                      <a
                        href={repo.url}
                        target={repo.url !== '#' ? "_blank" : undefined}
                        rel={repo.url !== '#' ? "noopener noreferrer" : undefined}
                        className={`group/btn inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                          repo.isUpcoming
                            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                            : 'bg-linear-to-r from-purple-500 to-indigo-500 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                        }`}
                      >
                        {repo.isUpcoming ? 'Coming Soon' : 'View Repository'}
                        {!repo.isUpcoming && (
                          <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </a>
                      
                      {repo.isFeatured && (
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Stack */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'React', icon: '⚛️', color: 'bg-blue-50 border-blue-200' },
                { name: 'Next.js', icon: '▲', color: 'bg-black border-gray-800 text-white' },
                { name: 'TypeScript', icon: '🔷', color: 'bg-blue-50 border-blue-200' },
                { name: 'Node.js', icon: '🟢', color: 'bg-green-50 border-green-200' },
                { name: 'Python', icon: '🐍', color: 'bg-yellow-50 border-yellow-200' },
                { name: 'Laravel', icon: '🐘', color: 'bg-red-50 border-red-200' },
                { name: 'Tailwind', icon: '💨', color: 'bg-cyan-50 border-cyan-200' }
              ].map((tech, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border text-center group hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaboration?</h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Have a project in mind or want to discuss potential opportunities? I&apos;m always excited to work on innovative ideas and challenging problems.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center"
                  >
                    <span>Get In Touch</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                  <a
                    href="https://github.com/tomi-philips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
                  >
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">
              More exciting projects in development... Stay tuned! 🚀
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}