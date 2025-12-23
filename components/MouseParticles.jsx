// app/components/MouseParticles.js
'use client'

import { useEffect, useRef, useState } from 'react'

export default function MouseParticles() {
  const canvasRef = useRef(null)
  const [effectType] = useState(() => {
    const random = Math.floor(Math.random() * 4)
    return random
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Enhanced color palette with better visibility
    const colors = [
      'rgba(6, 182, 212, 0.6)',    // cyan-500 - more opaque
      'rgba(59, 130, 246, 0.7)',   // blue-500 - more opaque
      'rgba(99, 102, 241, 0.7)',   // indigo-500 - more opaque
      'rgba(168, 85, 247, 0.6)',   // purple-500
      'rgba(236, 72, 153, 0.6)'    // pink-500
    ]

    // Create particles based on effect type
    const particles = []
    let particleCount = 50

    if (effectType === 0) {
      // Independent floating particles (no mouse interaction)
      particleCount = 40
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          originalSize: Math.random() * 4 + 2,
          pulse: Math.random() * Math.PI * 2, // For pulsing effect
          type: 'particle'
        })
      }
    } else if (effectType === 1) {
      // ORIGINAL FLOATING SHAPES
      particleCount = 15
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 10,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: 'rgba(6, 182, 212, 0.3)',
          shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
          type: 'floating'
        })
      }
    } else if (effectType === 2) {
      // Enhanced particle vibe
      particleCount = 80
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1.5,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: 'particle',
          pulse: Math.random() * Math.PI * 2
        })
      }
    } 
    // else if (effectType === 3) {
    //   // Enhanced programmer vibes
    //   particleCount = 25
    //   const symbols = ['{', '}', '<', '>', '/', '*', '&', '%', '#', '@', ';', '=', '+', '-']
    //   for (let i = 0; i < particleCount; i++) {
    //     particles.push({
    //       x: Math.random() * canvas.width,
    //       y: Math.random() * canvas.height,
    //       size: Math.random() * 20 + 15,
    //       speedX: (Math.random() - 0.5) * 0.4,
    //       speedY: (Math.random() - 0.5) * 0.4,
    //       color: colors[Math.floor(Math.random() * colors.length)],
    //       symbol: symbols[Math.floor(Math.random() * symbols.length)],
    //       type: 'programmer',
    //       rotation: Math.random() * Math.PI * 2,
    //       rotationSpeed: (Math.random() - 0.5) * 0.02
    //     })
    //   }
    // }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        if (effectType === 0) {
          // Independent floating particles with pulsing
          particle.x += particle.speedX
          particle.y += particle.speedY
          particle.pulse += 0.03

          // Gentle boundary handling
          if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1
          if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1

          // Pulsing effect
          const pulseSize = particle.originalSize * (1 + 0.2 * Math.sin(particle.pulse))

          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
          ctx.fill()

          // Subtle connection lines between nearby particles
          particles.forEach(otherParticle => {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100 && particle !== otherParticle) {
              const opacity = 0.2 * (1 - distance / 100)
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          })
        } else if (effectType === 1) {
          // ORIGINAL FLOATING SHAPES
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Bounce off walls
          if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1
          if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1

          // Draw shape
          ctx.fillStyle = particle.color
          ctx.beginPath()

          switch (particle.shape) {
            case 'circle':
              ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
              break
            case 'square':
              ctx.rect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2)
              break
            case 'triangle':
              ctx.moveTo(particle.x, particle.y - particle.size)
              ctx.lineTo(particle.x - particle.size, particle.y + particle.size)
              ctx.lineTo(particle.x + particle.size, particle.y + particle.size)
              ctx.closePath()
              break
          }

          ctx.fill()
        } else if (effectType === 2) {
          // Enhanced particle vibe with pulsing
          particle.x += particle.speedX
          particle.y += particle.speedY
          particle.pulse += 0.05

          if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1
          if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1

          // Pulsing effect
          const pulseSize = particle.size * (1 + 0.2 * Math.sin(particle.pulse))

          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
          ctx.fill()

          // Add occasional trails
          ctx.fillStyle = particle.color.replace('0.7', '0.2')
          ctx.beginPath()
          ctx.arc(particle.x - particle.speedX * 2, particle.y - particle.speedY * 2, pulseSize * 0.7, 0, Math.PI * 2)
          ctx.fill()
        } else if (effectType === 3) {
          // Enhanced programmer vibes with rotation
          particle.x += particle.speedX
          particle.y += particle.speedY
          particle.rotation += particle.rotationSpeed

          if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1
          if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1

          ctx.fillStyle = particle.color
          ctx.save()
          ctx.translate(particle.x, particle.y)
          ctx.rotate(particle.rotation)
          ctx.font = `bold ${particle.size}px 'Courier New', monospace`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(particle.symbol, 0, 0)
          ctx.restore()

          // Add glow effect
          ctx.shadowColor = particle.color
          ctx.shadowBlur = 10
          ctx.fillText(particle.symbol, particle.x, particle.y)
          ctx.shadowBlur = 0
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [effectType]) // Removed mousePosition from dependencies

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}