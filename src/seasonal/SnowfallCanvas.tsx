import React, { useEffect, useRef, useState } from 'react'
import { SNOW_ACCUMULATION_CEILING_PX } from './seasonalConfig'

interface Snowflake {
  x: number
  y: number
  radius: number
  speedY: number
  speedX: number
  opacity: number
  swing: number
  swingSpeed: number
}

export const SnowfallCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [accumulationHeight, setAccumulationHeight] = useState<number>(0)
  const accumulationRef = useRef<number>(0)
  const animationFrameIdRef = useRef<number | null>(null)

  useEffect(() => {
    // Reset accumulation on page load and browser history navigation (bfcache)
    const handlePageShow = () => {
      accumulationRef.current = 0
      setAccumulationHeight(0)
    }
    window.addEventListener('pageshow', handlePageShow)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Initialise gentle snowflakes
    const particleCount = prefersReducedMotion ? 25 : Math.min(80, Math.floor(width / 20))
    const snowflakes: Snowflake[] = []

    for (let i = 0; i < particleCount; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1, // 1px to 3px
        speedY: (Math.random() * 0.8 + 0.4) * (prefersReducedMotion ? 0.3 : 1),
        speedX: (Math.random() * 0.4 - 0.2),
        opacity: Math.random() * 0.5 + 0.3,
        swing: Math.random() * Math.PI * 2,
        swingSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    let lastAccumulationTime = performance.now()

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      // Increment snow accumulation gently up to 96px (1 CSS inch)
      if (accumulationRef.current < SNOW_ACCUMULATION_CEILING_PX) {
        const delta = time - lastAccumulationTime
        if (delta > 300) {
          // Add ~0.15px every 300ms until 96px ceiling is met
          accumulationRef.current = Math.min(
            SNOW_ACCUMULATION_CEILING_PX,
            accumulationRef.current + 0.15
          )
          setAccumulationHeight(accumulationRef.current)
          lastAccumulationTime = time
        }
      }

      // Draw snowflakes
      for (let i = 0; i < snowflakes.length; i++) {
        const flake = snowflakes[i]

        flake.y += flake.speedY
        flake.swing += flake.swingSpeed
        flake.x += Math.sin(flake.swing) * 0.5 + flake.speedX

        // Wrap around when falling past accumulation line or bottom
        const bottomCeiling = height - accumulationRef.current
        if (flake.y >= bottomCeiling || flake.y > height) {
          flake.y = -5
          flake.x = Math.random() * width
        }
        if (flake.x > width) flake.x = 0
        if (flake.x < 0) flake.x = width

        // Draw flake
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(243, 229, 171, ${flake.opacity * 0.8})` // Soft warm gold/white snowflake
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)'
        ctx.shadowBlur = 4
        ctx.fill()
      }

      animationFrameIdRef.current = requestAnimationFrame(render)
    }

    animationFrameIdRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('pageshow', handlePageShow)
      window.removeEventListener('resize', handleResize)
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Falling snowflakes canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 99990,
          opacity: 0.85,
        }}
      />

      {/* Gentle Snow Accumulation Layer at the very bottom edge (strictly capped at 96px / 1 inch) */}
      {accumulationHeight > 0 && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: `${accumulationHeight}px`,
            maxHeight: `${SNOW_ACCUMULATION_CEILING_PX}px`,
            pointerEvents: 'none',
            zIndex: 99991,
            background: 'linear-gradient(to top, rgba(243, 229, 171, 0.16) 0%, rgba(212, 175, 55, 0.05) 60%, transparent 100%)',
            borderTop: '1px solid rgba(243, 229, 171, 0.18)',
            boxShadow: '0 -4px 20px rgba(212, 175, 55, 0.08)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            transition: 'height 0.3s ease-out',
          }}
        >
          {/* Subtle frost crest */}
          <div
            style={{
              position: 'absolute',
              top: '-3px',
              left: 0,
              right: 0,
              height: '3px',
              background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
              opacity: 0.6,
            }}
          />
        </div>
      )}
    </>
  )
}

export default SnowfallCanvas

