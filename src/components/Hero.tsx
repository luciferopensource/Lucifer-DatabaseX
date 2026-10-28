import React from 'react'
import {
  Sparkles,
  Film,
  Disc3,
  ShieldCheck,
  ChevronDown,
  Layers,
  Cpu,
} from 'lucide-react'
import { GoldParticleCanvas } from './GoldParticleCanvas'

interface HeroProps {
  onExploreClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Royal Ambient Gold Particle Stream */}
      <GoldParticleCanvas />

      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '450px',
          background:
            'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, rgba(179, 135, 40, 0.05) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container-royal" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Imperial Royal Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.15rem',
            borderRadius: '999px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: 'var(--glow-gold-sm)',
            marginBottom: '1.8rem',
          }}
        >
          <Sparkles size={14} color="var(--color-gold-primary)" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-light)',
            }}
          >
            Sovereign Media Registry • Archival Grade
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
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
            lineHeight: 1.15,
            marginBottom: '1.4rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          THE IMPERIAL <span className="text-gold-gradient">MEDIA VAULT</span>
          <br />
          <span style={{ fontSize: '0.85em', color: '#ffffff', opacity: 0.95 }}>
            & ARCHIVAL REGISTRY
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            maxWidth: '820px',
            margin: '0 auto 2.5rem auto',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: '#c2c2d4',
            fontFamily: 'var(--font-modern)',
            fontWeight: 300,
            lineHeight: 1.65,
          }}
        >
          The authoritative metadata index, stream matrix, and lossless media
          orchestration catalog powering the Lucifer Open Source fleet across
          Telegram MTProto workers, Torznab relays, and private archives.
        </p>

        {/* Call to Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          <button onClick={onExploreClick} className="btn-royal-primary">
            <Film size={18} />
            <span>Explore Master Catalog</span>
          </button>

          <a href="#schema" className="btn-royal-secondary">
            <Cpu size={18} />
            <span>Inspect Technical Schema</span>
          </a>
        </div>

        {/* Lucifer Royal Frame Divider */}
        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto 2.8rem auto',
            padding: '1.2rem 1.8rem',
            background: 'rgba(14, 14, 22, 0.65)',
            border: '2px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '6px',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8), 0 10px 30px rgba(0, 0, 0, 0.6)',
            position: 'relative',
          }}
        >
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.2rem',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <Disc3 size={20} color="var(--color-gold-primary)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.85rem', fontWeight: 700, color: '#fcf6ba' }}>
                  MATROSKA v4
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#9d9db2' }}>
                  Lossless Container
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <Layers size={20} color="var(--color-gold-primary)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.85rem', fontWeight: 700, color: '#fcf6ba' }}>
                  DOLBY VISION & HDR10+
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#9d9db2' }}>
                  10-Bit Dynamic Mastering
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <ShieldCheck size={20} color="var(--color-gold-primary)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.85rem', fontWeight: 700, color: '#fcf6ba' }}>
                  ATMOS 7.1.4 & FLAC
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#9d9db2' }}>
                  Discrete Studio Acoustics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(212, 175, 55, 0.7)', letterSpacing: '0.1em' }}>
            SCROLL TO EXPLORE
          </span>
          <ChevronDown size={18} color="var(--color-gold-primary)" className="animate-float" />
        </div>
      </div>
    </section>
  )
}
