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
  const [isHovered, setIsHovered] = useState(false)

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

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false)
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
    setSpecularPos((prev) => ({ ...prev, opacity: 0 }))
  }, [])

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out, border-color 0.25s ease, box-shadow 0.25s ease',
        background: 'rgba(14, 14, 22, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: isHovered && borderGlow
          ? '1px solid var(--color-gold-primary)'
          : '1px solid var(--color-obsidian-border)',
        borderRadius: '12px',
        boxShadow: isHovered && borderGlow
          ? '0 15px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.25)'
          : '0 10px 25px rgba(0, 0, 0, 0.6)',
        ...style,
      }}
    >
      {/* Dynamic Specular Light Glint */}
      {specular && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: specularPos.opacity,
            transition: 'opacity 0.3s ease',
            background: `radial-gradient(circle 240px at ${specularPos.x}% ${specularPos.y}%, rgba(252, 246, 186, 0.25), transparent 80%)`,
            zIndex: 1,
          }}
        />
      )}

      {/* Pane Content */}
      <div className="relative" style={{ zIndex: 0 }}>{children}</div>
    </div>
  )
}
