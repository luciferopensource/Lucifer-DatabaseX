import React, { useEffect, useRef } from 'react'
import { SNOW_ACCUMULATION_CEILING_PX, isHalloweenActive } from './seasonalConfig'

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

interface HalloweenFallingItem {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  rotation: number
  rotationSpeed: number
  swing: number
  swingSpeed: number
  type: 'pumpkin' | 'ghost' | 'skeleton'
}

export const SnowfallCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const accumulationRef = useRef<number>(0)
  const animationFrameIdRef = useRef<number | null>(null)

  useEffect(() => {
    // Reset accumulation on page load and browser history navigation (bfcache)
    const handlePageShow = () => {
      accumulationRef.current = 0
    }
    window.addEventListener('pageshow', handlePageShow)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Pre-create SVG images for Halloween falling elements
    const halloweenActive = isHalloweenActive()

    const pumpkinImg = new Image()
    pumpkinImg.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><ellipse cx="12" cy="14" rx="9" ry="7" fill="%23d4af37" stroke="%23f3e5ab" stroke-width="1"/><path d="M12 3v4" stroke="%232ecc71" stroke-width="2" stroke-linecap="round"/><polygon points="9,12 10.5,10 10.5,13" fill="%2308080c"/><polygon points="15,12 13.5,10 13.5,13" fill="%2308080c"/><path d="M8 16c2 2 6 2 8 0" stroke="%2308080c" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`

    const ghostImg = new Image()
    ghostImg.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28" width="24" height="28"><path d="M5 14C5 8 8 3 12 3C16 3 19 8 19 14C19 20 18 24 16 23C14 22 13 24 12 24C11 24 10 22 8 23C6 24 5 20 5 14Z" fill="rgba(255,255,255,0.85)" stroke="%23f3e5ab" stroke-width="1"/><circle cx="9.5" cy="11.5" r="1.5" fill="%2308080c"/><circle cx="14.5" cy="11.5" r="1.5" fill="%2308080c"/><ellipse cx="12" cy="16" rx="1.5" ry="2" fill="%2308080c"/></svg>`

    const skeletonImg = new Image()
    skeletonImg.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="10" r="7" fill="rgba(255,255,255,0.85)" stroke="%23f3e5ab" stroke-width="1"/><rect x="10" y="16" width="4" height="3" fill="rgba(255,255,255,0.85)" stroke="%23f3e5ab" stroke-width="0.8"/><circle cx="9.5" cy="9.5" r="1.8" fill="%2308080c"/><circle cx="14.5" cy="9.5" r="1.8" fill="%2308080c"/><polygon points="12,12 11.2,13.5 12.8,13.5" fill="%2308080c"/><line x1="10" y1="18" x2="14" y2="18" stroke="%2308080c" stroke-width="1"/></svg>`

    // Initialise pure crisp white snowflakes
    const particleCount = prefersReducedMotion ? 30 : Math.min(100, Math.floor(width / 16))
    const snowflakes: Snowflake[] = []

    for (let i = 0; i < particleCount; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 1, // 1px to 3.2px
        speedY: (Math.random() * 0.9 + 0.4) * (prefersReducedMotion ? 0.3 : 1),
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.45 + 0.55, // 0.55 to 1.0 (pure crisp white)
        swing: Math.random() * Math.PI * 2,
        swingSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    // Initialise falling Halloween items (Pumpkins, Ghosts, Skeletons)
    const halloweenItems: HalloweenFallingItem[] = []
    if (halloweenActive && !prefersReducedMotion) {
      const hCount = Math.min(14, Math.floor(width / 100))
      const types: ('pumpkin' | 'ghost' | 'skeleton')[] = ['pumpkin', 'ghost', 'skeleton']
      for (let i = 0; i < hCount; i++) {
        halloweenItems.push({
          x: Math.random() * width,
          y: Math.random() * height * -1, // Start staggered above
          size: Math.random() * 6 + 18, // 18px to 24px
          speedY: Math.random() * 0.6 + 0.35,
          speedX: Math.random() * 0.3 - 0.15,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() * 0.02 - 0.01),
          swing: Math.random() * Math.PI * 2,
          swingSpeed: Math.random() * 0.015 + 0.008,
          type: types[i % 3],
        })
      }
    }

    let lastAccumulationTime = performance.now()

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      // Increment snow accumulation gently up to 96px (1 CSS inch)
      if (accumulationRef.current < SNOW_ACCUMULATION_CEILING_PX) {
        const delta = time - lastAccumulationTime
        if (delta > 250) {
          accumulationRef.current = Math.min(
            SNOW_ACCUMULATION_CEILING_PX,
            accumulationRef.current + 0.18
          )
          lastAccumulationTime = time
        }
      }

      const accHeight = accumulationRef.current

      // ── Draw Organic Snowdrift Layer at the Bottom of Canvas ──
      if (accHeight > 1) {
        ctx.save()
        const baseLine = height - accHeight

        // Back subtle snowdrift wave
        ctx.beginPath()
        ctx.moveTo(0, height)
        ctx.lineTo(0, baseLine + 10)
        ctx.quadraticCurveTo(width * 0.25, baseLine - 4, width * 0.5, baseLine + 6)
        ctx.quadraticCurveTo(width * 0.75, baseLine + 14, width, baseLine + 2)
        ctx.lineTo(width, height)
        ctx.closePath()
        const gradBack = ctx.createLinearGradient(0, baseLine - 10, 0, height)
        gradBack.addColorStop(0, 'rgba(255, 255, 255, 0.45)')
        gradBack.addColorStop(0.3, 'rgba(240, 245, 255, 0.65)')
        gradBack.addColorStop(1, 'rgba(255, 255, 255, 0.95)')
        ctx.fillStyle = gradBack
        ctx.fill()

        // Front organic rolling snowdrift
        ctx.beginPath()
        ctx.moveTo(0, height)
        ctx.lineTo(0, baseLine + 4)
        ctx.quadraticCurveTo(width * 0.3, baseLine - 8, width * 0.6, baseLine + 4)
        ctx.quadraticCurveTo(width * 0.85, baseLine - 6, width, baseLine + 8)
        ctx.lineTo(width, height)
        ctx.closePath()

        const gradFront = ctx.createLinearGradient(0, baseLine - 12, 0, height)
        gradFront.addColorStop(0, 'rgba(255, 255, 255, 0.75)')
        gradFront.addColorStop(0.2, 'rgba(245, 248, 255, 0.85)')
        gradFront.addColorStop(1, 'rgba(255, 255, 255, 0.98)')
        ctx.fillStyle = gradFront
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)'
        ctx.shadowBlur = 10
        ctx.fill()

        // Soft shimmering top crest line
        ctx.beginPath()
        ctx.moveTo(0, baseLine + 4)
        ctx.quadraticCurveTo(width * 0.3, baseLine - 8, width * 0.6, baseLine + 4)
        ctx.quadraticCurveTo(width * 0.85, baseLine - 6, width, baseLine + 8)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)'
        ctx.lineWidth = 1.5
        ctx.shadowColor = '#ffffff'
        ctx.shadowBlur = 6
        ctx.stroke()

        ctx.restore()
      }

      // ── Draw Falling Crisp White Snowflakes ──
      for (let i = 0; i < snowflakes.length; i++) {
        const flake = snowflakes[i]

        flake.y += flake.speedY
        flake.swing += flake.swingSpeed
        flake.x += Math.sin(flake.swing) * 0.6 + flake.speedX

        // Settle when hitting snow accumulation ceiling or screen bottom
        const bottomCeiling = height - accHeight + (Math.sin(flake.x * 0.01) * 8)
        if (flake.y >= bottomCeiling || flake.y > height) {
          flake.y = -6
          flake.x = Math.random() * width
        }
        if (flake.x > width) flake.x = 0
        if (flake.x < 0) flake.x = width

        // Draw crisp white flake
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
        ctx.shadowColor = 'rgba(255, 255, 255, 0.85)'
        ctx.shadowBlur = 4
        ctx.fill()
      }

      // ── Draw Falling Halloween Elements (Pumpkins, Ghosts, Skeletons) ──
      if (halloweenActive && !prefersReducedMotion) {
        for (let i = 0; i < halloweenItems.length; i++) {
          const item = halloweenItems[i]

          item.y += item.speedY
          item.swing += item.swingSpeed
          item.x += Math.sin(item.swing) * 0.8 + item.speedX
          item.rotation += item.rotationSpeed

          // Wrap when falling past the bottom
          if (item.y > height + 20) {
            item.y = -30
            item.x = Math.random() * width
          }
          if (item.x > width + 20) item.x = -10
          if (item.x < -20) item.x = width + 10

          ctx.save()
          ctx.translate(item.x, item.y)
          ctx.rotate(item.rotation)

          let targetImg: HTMLImageElement | null = null
          if (item.type === 'pumpkin') targetImg = pumpkinImg
          else if (item.type === 'ghost') targetImg = ghostImg
          else if (item.type === 'skeleton') targetImg = skeletonImg

          if (targetImg && targetImg.complete && targetImg.naturalWidth > 0) {
            ctx.shadowColor = item.type === 'pumpkin' ? 'rgba(212, 175, 55, 0.6)' : 'rgba(255, 255, 255, 0.5)'
            ctx.shadowBlur = 8
            ctx.drawImage(
              targetImg,
              -item.size / 2,
              -item.size / 2,
              item.size,
              item.size * (item.type === 'ghost' ? 1.15 : 1)
            )
          }
          ctx.restore()
        }
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
      }}
    />
  )
}

export default SnowfallCanvas
