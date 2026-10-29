import React from 'react'
import { COLLECTION_PRESETS, CollectionPreset } from '../data/catalog'
import { MediaCategory } from '../types/media'
import { Layers, ArrowRight, Sparkles } from 'lucide-react'

interface CollectionShowcaseProps {
  onSelectCategory: (category: MediaCategory) => void
}

export const CollectionShowcase: React.FC<CollectionShowcaseProps> = ({
  onSelectCategory,
}) => {
  return (
    <section
      id="collections"
      style={{
        padding: '90px 0',
        backgroundColor: 'rgba(6, 6, 9, 0.75)',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        position: 'relative',
      }}
    >
      <div className="container-royal">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-gold-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            <Layers size={14} />
            <span>Curated Sovereign Vaults</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            ROYAL <span className="text-gold-gradient">COLLECTIONS</span> & SHOWCASES
          </h2>

          <p
            style={{
              maxWidth: '660px',
              margin: '0 auto',
              color: '#9e9eb0',
              fontSize: '1.05rem',
              fontWeight: 300,
            }}
          >
            Meticulously cataloged archival selections grouped by preservation standard,
            acoustical topology, and high dynamic range mastering profiles.
          </p>
        </div>

        {/* Collection Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem',
          }}
        >
          {COLLECTION_PRESETS.map((col: CollectionPreset) => (
            <div
              key={col.id}
              onClick={() => {
                onSelectCategory(col.filterCategory)
                const explorerEl = document.getElementById('explorer')
                if (explorerEl) {
                  explorerEl.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              style={{
                position: 'relative',
                background: 'rgba(14, 14, 22, 0.85)',
                borderRadius: '8px',
                border: '1px solid var(--color-obsidian-border)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = 'var(--color-gold-primary)'
                e.currentTarget.style.boxShadow =
                  '0 20px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--color-obsidian-border)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.7)'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelectCategory(col.filterCategory)
                }
              }}
            >
              {/* Collection Image Banner */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '180px',
                  backgroundColor: '#0a0a10',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={col.coverImage}
                  alt={col.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(8, 8, 12, 0.2) 0%, rgba(14, 14, 22, 0.95) 100%)',
                  }}
                />

                {/* Badge Top Left */}
                <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <span className="badge-gold">
                    <Sparkles size={11} color="var(--color-gold-primary)" />
                    {col.badge}
                  </span>
                </div>

                {/* Real Verified Count Top Right */}
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <span
                    className="badge-obsidian"
                    style={{
                      background: 'rgba(8, 8, 12, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--color-gold-light)',
                    }}
                  >
                    {col.itemCount} Master Records
                  </span>
                </div>
              </div>

              {/* Collection Card Content */}
              <div
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      lineHeight: 1.3,
                      marginBottom: '0.65rem',
                      color: '#ffffff',
                    }}
                  >
                    {col.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      color: '#a8a8ba',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {col.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(212, 175, 55, 0.12)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-royal)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      color: 'var(--color-gold-warm)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Explore Vault
                  </span>

                  <ArrowRight size={16} color="var(--color-gold-primary)" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
