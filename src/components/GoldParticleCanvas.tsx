import React, { useEffect, useRef } from 'react'

export const GoldParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    // Particle pool
    const particleCount = 42
    const particles: {
      x: number
      y: number
      radius: number
      speedY: number
      speedX: number
      alpha: number
      baseAlpha: number
      fadeSpeed: number
    }[] = []

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = 0.15 + Math.random() * 0.55
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 2.2,
        speedY: -(0.15 + Math.random() * 0.45),
        speedX: (Math.random() - 0.5) * 0.25,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        fadeSpeed: 0.005 + Math.random() * 0.01,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.y += p.speedY
        p.x += p.speedX

        // Re-spawn at bottom if drifted off top
        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        // Gentle alpha pulse
        p.alpha += p.fadeSpeed
        if (p.alpha > p.baseAlpha + 0.2 || p.alpha < p.baseAlpha - 0.2) {
          p.fadeSpeed = -p.fadeSpeed
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0.05, Math.min(0.85, p.alpha))})`
        ctx.shadowColor = 'rgba(252, 246, 186, 0.6)'
        ctx.shadowBlur = p.radius * 3
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  )
}
