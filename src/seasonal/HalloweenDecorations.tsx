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
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Pumpkin body */}
          <path d="M12 2v2" />
          <ellipse cx="12" cy="14" rx="9" ry="7" stroke="#d4af37" fill="rgba(212, 175, 55, 0.08)" />
          {/* Eyes & smile */}
          <path d="M9 12l1-1.5 1 1.5z" fill="#f3e5ab" />
          <path d="M13 12l1-1.5 1 1.5z" fill="#f3e5ab" />
          <path d="M8.5 16c1.5 1 5.5 1 7 0" stroke="#f3e5ab" strokeWidth="1.4" />
        </svg>
      </div>

      {/* ── Ethereal Floating Ghost Wisp (Gentle drifting accent on left side) ── */}
      <div
        className="halloween-wisp-float"
        style={{
          position: 'fixed',
          bottom: '120px',
          left: '32px',
          opacity: 0.28,
          filter: 'drop-shadow(0 0 12px rgba(243, 229, 171, 0.35))',
        }}
      >
        <svg
          width="42"
          height="48"
          viewBox="0 0 24 28"
          fill="none"
          stroke="#f3e5ab"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Floating ghost contour */}
          <path
            d="M5 14C5 8 8 3 12 3C16 3 19 8 19 14C19 20 18 24 16 23C14 22 13 24 12 24C11 24 10 22 8 23C6 24 5 20 5 14Z"
            fill="rgba(243, 229, 171, 0.06)"
          />
          {/* Gentle spirit eyes */}
          <circle cx="9.5" cy="11.5" r="1.3" fill="#f3e5ab" />
          <circle cx="14.5" cy="11.5" r="1.3" fill="#f3e5ab" />
          <ellipse cx="12" cy="16" rx="1.5" ry="2" fill="rgba(8, 8, 12, 0.6)" stroke="#f3e5ab" strokeWidth="0.8" />
        </svg>
      </div>

      {/* CSS Animation for gentle floating wisp */}
      <style>{`
        @keyframes halloweenFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(2deg);
          }
        }
        .halloween-wisp-float {
          animation: halloweenFloat 7s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .halloween-wisp-float {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default HalloweenDecorations

