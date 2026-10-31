import React, { useState, useRef, useEffect } from 'react'
import { AggregatedDatabaseResult } from '../../data/aggregateDatabase'
import { useStorageUnit } from '../../data/storageUnitContext'

interface ArchiveRootNodeProps {
  aggregatedData: AggregatedDatabaseResult
  onSelectRoot: () => void
}

export const ArchiveRootNode: React.FC<ArchiveRootNodeProps> = ({ aggregatedData, onSelectRoot }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const { formatString } = useStorageUnit()

  // Bidirectional Mac OS-style Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    if (rootRef.current) {
      observer.observe(rootRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
        marginBottom: '40px',
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* ── Imperial Root Card (Translucent Liquid Glass) ── */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onSelectRoot}
        tabIndex={0}
        role="button"
        aria-label="Explore Total Database Unified Vault"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelectRoot()
          }
        }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          padding: '32px 36px',
          borderRadius: '24px',
          background: isHovered
            ? 'linear-gradient(135deg, rgba(24, 20, 12, 0.88) 0%, rgba(12, 12, 22, 0.94) 100%)'
            : 'linear-gradient(135deg, rgba(16, 14, 10, 0.78) 0%, rgba(8, 8, 16, 0.84) 100%)',
          backdropFilter: 'blur(24px) saturate(190%)',
          WebkitBackdropFilter: 'blur(24px) saturate(190%)',
          border: isHovered
            ? '1.5px solid rgba(212, 175, 55, 0.95)'
            : '1.5px solid rgba(212, 175, 55, 0.45)',
          boxShadow: isHovered
            ? '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.45)'
            : '0 12px 40px rgba(0, 0, 0, 0.75), 0 0 20px rgba(212, 175, 55, 0.18)',
          transform: isHovered ? 'scale(1.015)' : 'scale(1)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer',
          textAlign: 'center',
          outline: 'none',
        }}
      >
        {/* Double-Line Imperial Gold Frame */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            border: '1px solid rgba(212, 175, 55, 0.22)',
            borderRadius: '16px',
            pointerEvents: 'none',
          }}
        />

        {/* Central Luminous Core Icon */}
        <div
          style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 18px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #f3e5ab 0%, #d4af37 50%, #4a3808 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isHovered
              ? '0 0 35px rgba(212, 175, 55, 0.8), 0 0 15px #f3e5ab'
              : '0 0 20px rgba(212, 175, 55, 0.5)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#08080c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>

        {/* Status Pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#d4af37',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              padding: '4px 12px',
              borderRadius: '20px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            👑 CENTRAL ARCHIVE ROOT NODE
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#2ecc71',
              background: 'rgba(46, 204, 113, 0.12)',
              border: '1px solid rgba(46, 204, 113, 0.3)',
              padding: '4px 10px',
              borderRadius: '20px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2ecc71', boxShadow: '0 0 8px #2ecc71' }} />
            SYNCHRONISED
          </span>
        </div>

        {/* Main Title */}
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '2rem',
            fontWeight: 900,
            color: '#f3e5ab',
            margin: '0 0 8px 0',
            letterSpacing: '0.06em',
            textShadow: '0 2px 20px rgba(212, 175, 55, 0.4)',
          }}
        >
          TOTAL DATABASE
        </h2>

        <p
          style={{
            color: 'rgba(243, 229, 171, 0.8)',
            fontSize: '0.95rem',
            maxWidth: '520px',
            margin: '0 auto 24px',
            lineHeight: 1.5,
          }}
        >
          Central Sovereign Vault aggregating all registered stream archives into one unified digital intelligence ecosystem.
        </p>

        {/* Aggregated Statistics Quad-Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '12px',
            marginBottom: '26px',
          }}
        >
          <div
            style={{
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '10px',
              padding: '12px 8px',
            }}
          >
            <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Combined Storage
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.25rem', fontWeight: 900, color: '#d4af37', marginTop: '4px' }}>
              {formatString(aggregatedData.combinedStorage)}
            </div>
            <div style={{ color: '#2ecc71', fontSize: '0.68rem', fontWeight: 700, marginTop: '2px' }}>
              {aggregatedData.combinedStoragePB}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '10px',
              padding: '12px 8px',
            }}
          >
            <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Total Files
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.25rem', fontWeight: 900, color: '#f3e5ab', marginTop: '4px' }}>
              {aggregatedData.totalFiles}
            </div>
            <div style={{ color: 'rgba(243, 229, 171, 0.5)', fontSize: '0.68rem', marginTop: '2px' }}>
              Verified Records
            </div>
          </div>

          <div
            style={{
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '10px',
              padding: '12px 8px',
            }}
          >
            <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Messages Checked
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.25rem', fontWeight: 900, color: '#f3e5ab', marginTop: '4px' }}>
              {aggregatedData.totalMessages}
            </div>
            <div style={{ color: 'rgba(243, 229, 171, 0.5)', fontSize: '0.68rem', marginTop: '2px' }}>
              Zero Missed
            </div>
          </div>

          <div
            style={{
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '10px',
              padding: '12px 8px',
            }}
          >
            <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Registered Channels
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.25rem', fontWeight: 900, color: '#2ecc71', marginTop: '4px' }}>
              {aggregatedData.archiveCount}
            </div>
            <div style={{ color: 'rgba(243, 229, 171, 0.5)', fontSize: '0.68rem', marginTop: '2px' }}>
              100% Complete
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <button
          type="button"
          style={{
            background: 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)',
            color: '#08080c',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '10px',
            fontSize: '0.95rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 25px rgba(212, 175, 55, 0.5)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <span>EXPLORE TOTAL DATABASE</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── Pulse Transmitter Stem (Feeds into the Central Spine below) ── */}
      <div
        style={{
          width: '3px',
          height: '50px',
          background: 'linear-gradient(to bottom, #d4af37 0%, rgba(212, 175, 55, 0.6) 100%)',
          boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
        }}
      />
    </div>
  )
}

export default ArchiveRootNode
