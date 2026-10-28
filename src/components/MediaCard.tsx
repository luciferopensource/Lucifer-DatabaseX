import React from 'react'
import { MediaEntry } from '../types/media'
import { Volume2, Video, Sliders, ShieldCheck } from 'lucide-react'

interface MediaCardProps {
  entry: MediaEntry
  onSelect: (entry: MediaEntry) => void
}

export const MediaCard: React.FC<MediaCardProps> = ({ entry, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(entry)}
      style={{
        position: 'relative',
        background: 'rgba(18, 18, 27, 0.78)',
        borderRadius: '8px',
        border: '1px solid var(--color-obsidian-border)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.borderColor = 'var(--color-gold-primary)'
        e.currentTarget.style.boxShadow =
          '0 18px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.25)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--color-obsidian-border)'
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.6)'
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(entry)
        }
      }}
      aria-label={`View technical specifications for ${entry.title}`}
    >
      {/* Media Poster & Header */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '135%', // 3:4 aspect ratio
          backgroundColor: '#0a0a10',
          overflow: 'hidden',
        }}
      >
        <img
          src={entry.posterUrl}
          alt={entry.title}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {/* Gradient Shadow Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(8, 8, 12, 0.1) 0%, rgba(8, 8, 12, 0.4) 50%, rgba(14, 14, 22, 0.98) 100%)',
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          <span
            className="badge-gold"
            style={{
              background: 'rgba(8, 8, 12, 0.85)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {entry.id}
          </span>

          <span
            style={{
              padding: '0.25rem 0.65rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-royal)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              background:
                entry.format.resolution.includes('8K')
                  ? 'linear-gradient(135deg, #e6be53, #aa771c)'
                  : 'rgba(8, 8, 12, 0.88)',
              color: entry.format.resolution.includes('8K') ? '#08080c' : '#fcf6ba',
              border: '1px solid var(--color-gold-primary)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            }}
          >
            {entry.format.resolution}
          </span>
        </div>

        {/* Dynamic Range / HDR Indicator Badge */}
        {entry.format.dynamicRange !== 'N/A' && entry.format.dynamicRange !== 'SDR Standard' && (
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 600,
                color: '#fff3c4',
                background: 'rgba(170, 119, 28, 0.75)',
                border: '1px solid rgba(252, 246, 186, 0.4)',
                padding: '0.2rem 0.55rem',
                borderRadius: '3px',
                backdropFilter: 'blur(6px)',
              }}
            >
              {entry.format.dynamicRange}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Category & Year */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.5rem',
              fontSize: '0.75rem',
              color: '#9e9eb0',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span>{entry.category.toUpperCase()}</span>
            <span>
              {entry.year} • {entry.runtimeMinutes > 0 ? `${entry.runtimeMinutes} MIN` : 'MASTER'}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.3,
              marginBottom: '0.5rem',
              color: '#ffffff',
            }}
          >
            {entry.title}
          </h3>

          {/* Studio / Origin */}
          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-gold-warm)',
              marginBottom: '0.85rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {entry.studio}
          </div>

          {/* Technical Spec Matrix Pill Tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              marginBottom: '1rem',
            }}
          >
            {entry.format.videoCodec !== 'None (Audio Master)' && (
              <span className="badge-obsidian" style={{ fontSize: '0.66rem' }}>
                <Video size={10} color="var(--color-gold-primary)" />
                {entry.format.videoCodec}
              </span>
            )}

            <span className="badge-obsidian" style={{ fontSize: '0.66rem' }}>
              <Volume2 size={10} color="var(--color-gold-primary)" />
              {entry.audio.primaryFormat}
            </span>

            <span className="badge-obsidian" style={{ fontSize: '0.66rem' }}>
              {entry.audio.channelLayout}
            </span>
          </div>
        </div>

        {/* Action Button & Verification Footer */}
        <div
          style={{
            paddingTop: '0.85rem',
            borderTop: '1px solid rgba(212, 175, 55, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.68rem',
              color: 'rgba(212, 175, 55, 0.85)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <ShieldCheck size={12} color="var(--color-gold-primary)" />
            <span>SHA-256 Verified</span>
          </div>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontFamily: 'var(--font-royal)',
              fontSize: '0.76rem',
              fontWeight: 700,
              color: 'var(--color-gold-light)',
              letterSpacing: '0.04em',
            }}
          >
            <Sliders size={12} />
            <span>Inspect</span>
          </span>
        </div>
      </div>
    </div>
  )
}
