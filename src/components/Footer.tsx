import React from 'react'
import {
  Database,
  Crown,
  Shield,
  Radio,
  ExternalLink,
} from 'lucide-react'
import { GithubIcon, GitlabIcon } from './Icons'

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: '#040406',
        borderTop: '2px solid rgba(212, 175, 55, 0.25)',
        paddingTop: '70px',
        paddingBottom: '40px',
        position: 'relative',
        color: '#b0b0c2',
      }}
    >
      <div className="container-royal">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1.5px solid var(--color-gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Database size={20} color="var(--color-gold-primary)" />
                <Crown
                  size={10}
                  color="#fcf6ba"
                  style={{ position: 'absolute', top: '-4px', right: '-4px' }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-royal)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                }}
              >
                LUCIFER <span className="text-gold-gradient">DATABASE X</span> 🗄️
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#9a9aa8', marginBottom: '1.5rem' }}>
              The imperial media database and stream matrix orchestrating sovereign archives,
              Torznab feeds, and MTProto routing across the Lucifer Open Source fleet.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://github.com/luciferopensource"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold-primary)'
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="https://gitlab.com/luciferopensource"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fc6d26',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold-primary)'
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <GitlabIcon size={15} />
                <span>GitLab</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-royal)',
                fontSize: '0.95rem',
                color: 'var(--color-gold-light)',
                marginBottom: '1.25rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Archival Portal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a
                  href="#explorer"
                  style={{ color: '#9a9aa8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9a9aa8')}
                >
                  Media Explorer & Filters
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  style={{ color: '#9a9aa8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9a9aa8')}
                >
                  Royal Collections Vault
                </a>
              </li>
              <li>
                <a
                  href="#schema"
                  style={{ color: '#9a9aa8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9a9aa8')}
                >
                  Architecture & Schema
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{ color: '#9a9aa8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9a9aa8')}
                >
                  Sovereign Manifesto
                </a>
              </li>
            </ul>
          </div>

          {/* Monorepo Sister Projects */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-royal)',
                fontSize: '0.95rem',
                color: 'var(--color-gold-light)',
                marginBottom: '1.25rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Ecosystem Fleet
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a
                  href="https://github.com/luciferopensource/Lucifer-TorrentX-Engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#9a9aa8', textDecoration: 'none', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>Lucifer TorrentX Engine</span>
                  <ExternalLink size={12} color="var(--color-gold-primary)" />
                </a>
              </li>
              <li>
                <span style={{ color: '#9a9aa8', fontSize: '0.88rem' }}>Lucifer Restrict Bot (MTProto)</span>
              </li>
              <li>
                <span style={{ color: '#9a9aa8', fontSize: '0.88rem' }}>Lucifer OTT Poster Bot V2</span>
              </li>
              <li>
                <span style={{ color: '#9a9aa8', fontSize: '0.88rem' }}>Telegram Media Intelligence Suite</span>
              </li>
              <li>
                <span style={{ color: '#9a9aa8', fontSize: '0.88rem' }}>Lucifer Cloud Engine Core</span>
              </li>
            </ul>
          </div>

          {/* Cloudflare Edge & Standards */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-royal)',
                fontSize: '0.95rem',
                color: 'var(--color-gold-light)',
                marginBottom: '1.25rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Infrastructure Target
            </h4>

            <div
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Radio size={14} color="#f6821f" />
                <span style={{ fontFamily: 'var(--font-royal)', fontSize: '0.8rem', color: '#ffffff', fontWeight: 600 }}>
                  Cloudflare Pages Edge
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#88889a' }}>
                Static Single-Page Application (SPA) compatible architecture with zero cold-start delay.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.76rem', color: 'rgba(212, 175, 55, 0.8)' }}>
              <Shield size={13} color="var(--color-gold-primary)" />
              <span>Strict British English Standardisation</span>
            </div>
          </div>
        </div>

        {/* Double-line Border Divider */}
        <div
          style={{
            borderTop: '3px double rgba(212, 175, 55, 0.3)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: '#777788',
          }}
        >
          <div>
            © {new Date().getFullYear()} Lucifer Open Source. All sovereign rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Crafted for lossless media sovereignty</span>
            <span style={{ color: 'var(--color-gold-primary)' }}>•</span>
            <span style={{ color: 'var(--color-gold-light)' }}>Obsidian & Imperial Gold Edition</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
