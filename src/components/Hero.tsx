import React from 'react'
import {
  Sparkles,
  Film,
  Disc3,
  ShieldCheck,
  ChevronDown,
  Layers,
  Cpu,
  Radio,
} from 'lucide-react'
import { ThreePortalField } from './ThreePortalField'
import { GoldParticleCanvas } from './GoldParticleCanvas'

interface HeroProps {
  onExploreClick: () => void
  onSourcesClick?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSourcesClick }) => {
  return (
    <section className="hero-section">
      {/* Ambient Gold Particle Background Layer */}
      <GoldParticleCanvas />

      {/* Radial Atmospheric Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '480px',
          background:
            'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, rgba(179, 135, 40, 0.05) 50%, transparent 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container-royal" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-layout-grid">
          {/* Column 1: Sovereign Text & Royal Registry Controls */}
          <div className="hero-text-column">
            {/* Imperial Royal Badge */}
            <div
              className="hero-badge-container"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1.15rem',
                borderRadius: '999px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: 'var(--glow-gold-sm)',
                marginBottom: '1.6rem',
              }}
            >
              <Sparkles size={14} color="var(--color-gold-primary)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-light)',
                }}
              >
                <span className="hero-badge-desktop">Sovereign Media Registry • Archival Grade</span>
                <span className="hero-badge-mobile">Sovereign Registry</span>
              </span>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--color-gold-primary)',
                  boxShadow: '0 0 8px var(--color-gold-primary)',
                }}
              />
            </div>

            {/* Hero Headline */}
            <h1 className="hero-headline">
              <span className="hero-headline-title">
                THE IMPERIAL <br className="hero-title-mobile-break" />
                <span className="text-gold-gradient">MEDIA VAULT</span>
              </span>
              <span className="hero-headline-subtitle">
                & ARCHIVAL REGISTRY
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              The authoritative metadata index, stream matrix, and lossless media
              orchestration catalog powering the Lucifer Open Source fleet across
              16 scraper citadels, Telegram MTProto workers, and private archives.
            </p>

            {/* Call to Actions */}
            <div className="hero-actions">
              <button onClick={onExploreClick} className="btn-royal-primary">
                <Film size={18} />
                <span>Explore Master Catalog</span>
              </button>

              {onSourcesClick && (
                <button onClick={onSourcesClick} className="btn-royal-secondary">
                  <Radio size={18} />
                  <span>16 Scraper Citadels</span>
                </button>
              )}

              <a href="#schema" className="btn-royal-secondary">
                <Cpu size={18} />
                <span>Architecture</span>
              </a>
            </div>

            {/* Lucifer Royal Frame Divider */}
            <div className="hero-specs-card">
              {/* Decorative Corner Ornaments */}
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '-4px',
                  width: '8px',
                  height: '8px',
                  background: 'var(--color-gold-primary)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  width: '8px',
                  height: '8px',
                  background: 'var(--color-gold-primary)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '-4px',
                  width: '8px',
                  height: '8px',
                  background: 'var(--color-gold-primary)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  right: '-4px',
                  width: '8px',
                  height: '8px',
                  background: 'var(--color-gold-primary)',
                }}
              />

              <div className="hero-specs-grid">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Disc3 size={20} color="var(--color-gold-primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-royal)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#fcf6ba',
                      }}
                    >
                      MATROSKA v4
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: '#9d9db2',
                      }}
                    >
                      Lossless Container
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Layers size={20} color="var(--color-gold-primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-royal)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#fcf6ba',
                      }}
                    >
                      DOLBY VISION & HDR10+
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: '#9d9db2',
                      }}
                    >
                      10-Bit Dynamic Mastering
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ShieldCheck size={20} color="var(--color-gold-primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-royal)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#fcf6ba',
                      }}
                    >
                      ATMOS 7.1.4 & FLAC
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: '#9d9db2',
                      }}
                    >
                      Discrete Studio Acoustics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Sovereign Dimensional Aperture Frame */}
          <div className="hero-visual-column">
            <div className="hero-aperture-frame">
              {/* Rotating outer stargate ring */}
              <div className="hero-aperture-ring" />

              {/* 3D WebGL Torus & Particle Portal */}
              <ThreePortalField />

              {/* HUD Status Pill */}
              <div className="hero-aperture-hud">
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--color-gold-primary)',
                    boxShadow: '0 0 8px var(--color-gold-primary)',
                  }}
                />
                <span>SOVEREIGN DIMENSIONAL APERTURE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: '3.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'rgba(212, 175, 55, 0.7)',
              letterSpacing: '0.12em',
            }}
          >
            SCROLL TO EXPLORE ARCHIVES
          </span>
          <ChevronDown size={18} color="var(--color-gold-primary)" className="animate-float" />
        </div>
      </div>
    </section>
  )
}
