import React, { useState, useRef, useEffect } from 'react'
import { ArchiveRecord } from '../../data/archiveSchemas'
import { useStorageUnit } from '../../data/storageUnitContext'

interface ArchiveNodeProps {
  archive: ArchiveRecord
  position: 'left' | 'right'
  onSelect: (route: string) => void
}

export const ArchiveNode: React.FC<ArchiveNodeProps> = ({ archive, position, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const nodeRef = useRef<HTMLDivElement | null>(null)
  const { formatString } = useStorageUnit()

  // Bidirectional Mac OS-style Scroll Reveal (emerges on scroll down, recedes on scroll up)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )

    if (nodeRef.current) {
      observer.observe(nodeRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!nodeRef.current) return
    const rect = nodeRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMouseTilt({ x: x * 8, y: -y * 8 })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMouseTilt({ x: 0, y: 0 })
  }

  const isLeft = position === 'left'

  return (
    <div
      ref={nodeRef}
      className={`archive-node-row ${isLeft ? 'archive-node-left' : 'archive-node-right'}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        position: 'relative',
        width: '100%',
        margin: '36px 0',
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(8px)',
        transform: isVisible
          ? 'translateY(0) scale(1)'
          : `translateY(45px) scale(0.94) ${isLeft ? 'translateX(-20px)' : 'translateX(20px)'}`,
        transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), filter 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* ── Desktop Horizontal Connector Arm ── */}
      <div
        className="archive-connector-arm"
        style={{
          position: 'absolute',
          top: '50%',
          [isLeft ? 'right' : 'left']: '50%',
          width: 'calc(50% - 240px)',
          height: '2px',
          background: isHovered
            ? 'linear-gradient(90deg, #d4af37, #f3e5ab)'
            : 'rgba(212, 175, 55, 0.35)',
          transform: 'translateY(-50%)',
          zIndex: 1,
          transition: 'background 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-4px',
            [isLeft ? 'left' : 'right']: '0',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: isHovered ? '#2ecc71' : '#d4af37',
            boxShadow: `0 0 10px ${isHovered ? '#2ecc71' : '#d4af37'}`,
            transition: 'background 0.3s ease, box-shadow 0.3s ease',
          }}
        />
      </div>

      {/* ── Archive Node Interactive Card (Translucent Liquid Glass) ── */}
      <div
        className="archive-card-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(archive.route)}
        tabIndex={0}
        role="button"
        aria-label={`Open ${archive.displayName} report`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelect(archive.route)
          }
        }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          padding: '24px',
          borderRadius: '18px',
          background: isHovered
            ? 'linear-gradient(135deg, rgba(20, 20, 30, 0.88) 0%, rgba(12, 12, 20, 0.92) 100%)'
            : 'linear-gradient(135deg, rgba(14, 14, 22, 0.75) 0%, rgba(8, 8, 14, 0.82) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: isHovered
            ? '1.5px solid rgba(212, 175, 55, 0.85)'
            : '1px solid rgba(212, 175, 55, 0.32)',
          boxShadow: isHovered
            ? '0 18px 45px rgba(0, 0, 0, 0.85), 0 0 30px rgba(212, 175, 55, 0.35)'
            : '0 10px 30px rgba(0, 0, 0, 0.65), 0 0 15px rgba(212, 175, 55, 0.1)',
          transform: `perspective(1000px) rotateX(${mouseTilt.y}deg) rotateY(${mouseTilt.x}deg) translateZ(${isHovered ? '12px' : '0px'})`,
          transition: 'transform 0.15s ease-out, border 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
          cursor: 'pointer',
          zIndex: 2,
          outline: 'none',
        }}
      >
        {/* Subtle Gold Imperial Framing Line */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            right: '8px',
            bottom: '8px',
            border: '1px solid rgba(212, 175, 55, 0.12)',
            borderRadius: '12px',
            pointerEvents: 'none',
          }}
        />

        {/* Header: Sequence Badge & Status */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#d4af37',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                padding: '3px 8px',
                borderRadius: '6px',
              }}
            >
              ARCHIVE #{String(archive.sequence).padStart(2, '0')}
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.72rem',
                fontWeight: 800,
                color: '#2ecc71',
                background: 'rgba(46, 204, 113, 0.12)',
                border: '1px solid rgba(46, 204, 113, 0.3)',
                padding: '2px 8px',
                borderRadius: '4px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2ecc71' }} />
              {archive.status}
            </span>
          </div>

          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: 'rgba(243, 229, 171, 0.55)',
            }}
          >
            {archive.scanId}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 14px 0',
            letterSpacing: '0.02em',
          }}
        >
          {archive.displayName}
        </h3>

        {/* Primary Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            marginBottom: '18px',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              borderRadius: '8px',
              padding: '10px 12px',
            }}
          >
            <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Archived Storage
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#d4af37',
                marginTop: '4px',
              }}
            >
              {formatString(archive.combinedStorage)}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              borderRadius: '8px',
              padding: '10px 12px',
            }}
          >
            <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Files Audited
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#f3e5ab',
                marginTop: '4px',
              }}
            >
              {archive.totalFiles}
            </div>
          </div>
        </div>

        {/* Metadata Details */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'rgba(243, 229, 171, 0.6)',
            paddingTop: '10px',
            borderTop: '1px solid rgba(212, 175, 55, 0.12)',
            marginBottom: '16px',
          }}
        >
          <span>Scanner: <strong style={{ color: '#f3e5ab' }}>{archive.scanner}</strong></span>
          <span>Audited: <strong style={{ color: '#f3e5ab' }}>{archive.completedDate}</strong></span>
        </div>

        {/* Action Button */}
        <button
          type="button"
          style={{
            width: '100%',
            background: isHovered
              ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)'
              : 'rgba(212, 175, 55, 0.12)',
            color: isHovered ? '#08080c' : '#f3e5ab',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            padding: '10px 16px',
            borderRadius: '8px',
            fontSize: '0.82rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}
        >
          <span>Inspect Channel Vault</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ArchiveNode
