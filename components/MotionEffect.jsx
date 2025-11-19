// app/components/FloatingShapes.js
'use client'

import { useEffect, useRef } from 'react'

export default function FloatingShapes() {
  const canvasRef = useRef(null)

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

    // Create particles
    const particles = []
    const particleCount = 15

    // Color palette: cyan, blue, indigo
    const colors = [
      'rgba(6, 182, 212, 0.1)',    // cyan-500
      'rgba(59, 130, 246, 0.1)',   // blue-500
      'rgba(99, 102, 241, 0.1)'    // indigo-500
    ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        // Update position
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
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}