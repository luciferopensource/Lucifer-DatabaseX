import React from 'react'
import { CITADEL_SOURCES } from '../data/citadels'
import { SourceCitadelType } from '../types/media'
import { Radio, ChevronRight, Cpu } from 'lucide-react'

interface SourceCitadelsProps {
  activeCitadel?: 'All' | SourceCitadelType
  onSelectCitadel: (citadel: SourceCitadelType | 'All') => void
}

export const SourceCitadels: React.FC<SourceCitadelsProps> = ({
  activeCitadel = 'All',
  onSelectCitadel,
}) => {
  return (
    <section id="sources" className="citadels-section">
      <div className="container-royal">
        {/* Header */}
        <div className="citadels-header">
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '999px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: 'var(--color-gold-warm)',
                fontSize: '0.74rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)',
                marginBottom: '1rem',
              }}
            >
              <Radio size={14} color="var(--color-gold-primary)" />
              <span>16 Autonomous Scraper Citadels & Fleet</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              The Sovereign <span className="text-gold-gradient">Media Citadels</span>
            </h2>

            <p
              style={{
                color: '#9e9eb0',
                fontSize: '1rem',
                maxWidth: '680px',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              Centralised multi-source gateway and stream matrix indexing verified
              cinematic resolvers, lossless cloud vaults, and high-speed delivery conduits.
            </p>
          </div>

          {activeCitadel !== 'All' && (
            <button
              onClick={() => onSelectCitadel('All')}
              className="btn-royal-secondary"
              style={{ padding: '0.6rem 1.1rem', fontSize: '0.8rem' }}
            >
              <span>Showing: {activeCitadel}</span>
              <span style={{ color: 'var(--color-gold-primary)' }}>× Clear Filter</span>
            </button>
          )}
        </div>

        {/* Citadel Grid */}
        <div className="citadels-grid">
          {CITADEL_SOURCES.map((source) => {
            const isActive = activeCitadel === source.id

            return (
              <div
                key={source.id}
                onClick={() => onSelectCitadel(isActive ? 'All' : source.id)}
                className={`citadel-card ${isActive ? 'citadel-card-active' : ''}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onSelectCitadel(isActive ? 'All' : source.id)
                  }
                }}
              >
                {/* Top Row: Category & Status */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem',
                    }}
                  >
                    <span className="citadel-badge-category">{source.category}</span>
                    <div className="citadel-status-online">
                      <span className="citadel-status-dot" />
                      <span>{source.status}</span>
                    </div>
                  </div>

                  {/* Citadel Name & Domain */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-royal)',
                      fontSize: '1.1rem',
                      color: isActive ? '#fcf6ba' : '#ffffff',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {source.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'rgba(212, 175, 55, 0.75)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {source.primaryDomain}
                  </p>

                  {/* Format Chips */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                      marginTop: '1rem',
                    }}
                  >
                    {source.supportedFormats.slice(0, 3).map((fmt, idx) => (
                      <span key={idx} className="citadel-format-chip">
                        {fmt}
                      </span>
                    ))}
                    {source.supportedFormats.length > 3 && (
                      <span
                        className="citadel-format-chip"
                        style={{ color: 'var(--color-gold-warm)' }}
                      >
                        +{source.supportedFormats.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action: Filter Trigger */}
                <div className="citadel-footer-bar">
                  <span
                    style={{
                      color: isActive
                        ? 'var(--color-gold-light)'
                        : 'rgba(212, 175, 55, 0.85)',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {isActive ? 'Active Filter ✓' : 'Filter Catalog'}
                  </span>
                  <ChevronRight
                    size={14}
                    color="var(--color-gold-primary)"
                    style={{
                      transform: isActive ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Verified Architectural Notice */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.4rem 1.8rem',
            borderRadius: '8px',
            background: 'rgba(14, 14, 22, 0.75)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--color-gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Cpu size={20} color="var(--color-gold-primary)" />
            </div>
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-royal)',
                  fontSize: '0.96rem',
                  color: '#ffffff',
                  marginBottom: '0.2rem',
                }}
              >
                Zero Synthetic Simulation Standard
              </h4>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: '#9e9eb0',
                  margin: 0,
                }}
              >
                Every resolver architecture maps to verified protocol standards and sovereign delivery conduits.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-gold-light)',
                display: 'block',
              }}
            >
              Registry SHA-256 Validated
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#808092',
              }}
            >
              Cloudflare Edge & MTProto Fleet Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
