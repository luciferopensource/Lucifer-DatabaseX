import React from 'react'
import { isHalloweenActive } from './seasonalConfig'

export const HalloweenDecorations: React.FC = () => {
  const active = isHalloweenActive()
  if (!active) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 99980,
        overflow: 'hidden',
      }}
    >
      {/* ── Ethereal Golden Jack-o'-Lantern Emblem (Top Right Accent) ── */}
      <div
        style={{
          position: 'fixed',
          top: '68px',
          right: '20px',
          opacity: 0.35,
          transition: 'opacity 0.4s ease',
          filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.4))',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v2" />
          <ellipse cx="12" cy="14" rx="9" ry="7" stroke="#d4af37" fill="rgba(212, 175, 55, 0.08)" />
          <path d="M9 12l1-1.5 1 1.5z" fill="#f3e5ab" />
          <path d="M13 12l1-1.5 1 1.5z" fill="#f3e5ab" />
          <path d="M8.5 16c1.5 1 5.5 1 7 0" stroke="#f3e5ab" strokeWidth="1.4" />
        </svg>
      </div>
    </div>
  )
}

export default HalloweenDecorations
