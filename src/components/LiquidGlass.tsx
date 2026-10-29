/**
 * <LiquidGlass /> - High-Performance Translucent Glass Container
 * Inspired by LiquidGL & Prompt-Motion.Com Spring Dynamics
 * Lucifer Open Source Motion & UI Suite
 */

import React, { useRef, useState, useCallback } from 'react'

interface LiquidGlassProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  tilt?: boolean
  specular?: boolean
  borderGlow?: boolean
  onClick?: () => void
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  className = '',
  style,
  tilt = true,
  specular = true,
  borderGlow = true,
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [transform, setTransform] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg)')
  const [specularPos, setSpecularPos] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  })

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!tilt && !specular) return
      const el = containerRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      if (tilt) {
        const rotateY = ((x - centerX) / centerX) * 4 // Max 4 deg
        const rotateX = -((y - centerY) / centerY) * 4 // Max 4 deg
        setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`)
      }

      if (specular) {
        const percentX = (x / rect.width) * 100
        const percentY = (y / rect.height) * 100
        setSpecularPos({ x: percentX, y: percentY, opacity: 0.15 })
      }
    },
    [tilt, specular]
  )

  const handlePointerLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
    setSpecularPos((prev) => ({ ...prev, opacity: 0 }))
  }, [])

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative rounded-2xl bg-obsidian-900/60 backdrop-blur-xl border border-gold-900/40 shadow-card transition-transform duration-200 ease-out overflow-hidden group ${
        borderGlow ? 'hover:border-gold-500/50 hover:shadow-gold' : ''
      } ${className}`}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {/* Dynamic Specular Light Glint */}
      {specular && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: specularPos.opacity,
            background: `radial-gradient(circle 240px at ${specularPos.x}% ${specularPos.y}%, rgba(252, 246, 186, 0.25), transparent 80%)`,
          }}
        />
      )}

      {/* Subtle Golden Sheen on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

      {/* Pane Content */}
      <div className="relative z-0">{children}</div>
    </div>
  )
}

