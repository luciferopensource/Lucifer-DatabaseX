import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  decay: number
  color: string
}

export const SovereignCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === 'undefined') return
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let isHovering = false
    let isClicking = false
    let isVisible = false

    const particles: Particle[] = []
    const GOLD_COLORS = [
      '#f3e5ab', // Soft Ivory Gold
      '#d4af37', // Imperial Royal Gold
      '#ffd700', // Classic Radiant Gold
      '#aa771c', // Deep Antique Gold
      '#fff4cc'  // Stardust Sparkle
    ]

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    const spawnParticles = (x: number, y: number, count = 2, speedMultiplier = 1) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = (Math.random() * 1.5 + 0.4) * speedMultiplier
        particles.push({
          x: x + (Math.random() - 0.5) * 4,
          y: y + (Math.random() - 0.5) * 4,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed + 0.2, // slight gentle gravity
          size: Math.random() * 2.8 + 1.2,
          alpha: 0.9,
          decay: Math.random() * 0.025 + 0.015,
          color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)]
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isVisible = true

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        dotRef.current.style.opacity = '1'
      }

      // Detect hovering over clickable elements
      const target = e.target as HTMLElement | null
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input, select, textarea, .btn, .card, .dock-item, .vault-row'
        )
        isHovering = !!interactive
      }

      // Spawn stardust trail particles
      spawnParticles(mouseX, mouseY, 2)
    }

    const handleMouseDown = (e: MouseEvent) => {
      isClicking = true
      spawnParticles(e.clientX, e.clientY, 12, 2.5) // Golden click burst
    }

    const handleMouseUp = () => {
      isClicking = false
    }

    const handleMouseLeave = () => {
      isVisible = false
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Smooth animation loop
    let animId: number
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 1. Lerp Ring position towards mouse for smooth cinematic lag
      const lerpFactor = 0.18
      ringX += (mouseX - ringX) * lerpFactor
      ringY += (mouseY - ringY) * lerpFactor

      if (ringRef.current && isVisible) {
        const scale = isClicking ? 0.75 : isHovering ? 1.7 : 1
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`
        ringRef.current.style.opacity = isVisible ? '1' : '0'
        ringRef.current.style.borderColor = isHovering ? '#f3e5ab' : 'rgba(212, 175, 55, 0.65)'
        ringRef.current.style.background = isHovering
          ? 'radial-gradient(circle, rgba(212, 175, 55, 0.22) 0%, transparent 70%)'
          : 'transparent'
      }

      // 2. Render & update golden trail particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay
        p.size *= 0.98

        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = Math.max(0, p.alpha)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 8
        ctx.shadowColor = '#d4af37'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      {/* Golden Stardust Particles Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 999998
        }}
      />

      {/* Trailing Fluid Orbit Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: -18,
          left: -18,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(212, 175, 55, 0.65)',
          boxShadow: '0 0 16px rgba(212, 175, 55, 0.35)',
          pointerEvents: 'none',
          zIndex: 999999,
          opacity: 0,
          transition: 'transform 0.08s ease-out, border-color 0.2s, background 0.2s, opacity 0.25s',
          willChange: 'transform'
        }}
      />

      {/* Precision Imperial Gold Lead Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f3e5ab 0%, #d4af37 100%)',
          boxShadow: '0 0 10px #f3e5ab, 0 0 18px rgba(212, 175, 55, 0.8)',
          pointerEvents: 'none',
          zIndex: 1000000,
          opacity: 0,
          transition: 'opacity 0.2s',
          willChange: 'transform'
        }}
      />
    </>
  )
}

export default SovereignCursor
