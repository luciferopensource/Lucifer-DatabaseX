import React, { useState } from 'react'
import {
  TELEGRAM_COMMUNITY_LINKS,
  OWNER_INFO,
  TelegramCommunityLink
} from '../../data/channelIntelligenceData'
import {
  Send,
  ExternalLink,
  Crown,
  Check,
  Copy,
  Mail,
  Shield,
  Sparkles,
  Users
} from 'lucide-react'

export const TelegramPromotionalFooter: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2500)
  }

  return (
    <footer
      id="sovereign-community"
      style={{
        marginTop: '64px',
        paddingTop: '40px',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        position: 'relative'
      }}
    >
      {/* ── Brand Framing Header (Liquid Glass & Double-Line Frame) ── */}
      <div
        style={{
          position: 'relative',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(22, 18, 32, 0.82) 0%, rgba(12, 11, 18, 0.88) 50%, rgba(8, 8, 12, 0.92) 100%)',
          backdropFilter: 'blur(28px) saturate(200%)',
          WebkitBackdropFilter: 'blur(28px) saturate(200%)',
          padding: '40px 32px',
          border: '1.5px solid rgba(212, 175, 55, 0.45)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), inset 0 1px 2px rgba(255, 255, 255, 0.22), 0 0 35px rgba(212, 175, 55, 0.1)',
          overflow: 'hidden'
        }}
      >
        {/* Cinematic Backdrop Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '20%',
            width: '380px',
            height: '380px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
            borderRadius: '50%'
          }}
        />

        {/* Double-Line Framing Indicator */}
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'rgba(212, 175, 55, 0.65)',
            letterSpacing: '0.3em',
            userSelect: 'none',
            marginBottom: '18px'
          }}
        >
          ╔═══════════════════════════════════════════════════════════════════╗
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(212, 175, 55, 0.16)',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              color: '#f3e5ab',
              fontSize: '0.74rem',
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700
            }}
          >
            <Crown size={15} style={{ color: '#d4af37' }} />
            <span>Lucifer Open Source • Sovereign Digital Vault</span>
          </div>

          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              fontWeight: 800,
              color: '#f3e5ab',
              letterSpacing: '0.03em',
              margin: '6px 0 0',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.8)'
            }}
          >
            Connect With the Sovereign Intelligence Network
          </h2>

          <p
            style={{
              fontSize: '0.92rem',
              color: '#cbd5e1',
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: 0
            }}
          >
            Curated and governed by{' '}
            <strong style={{ color: '#f3e5ab', fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
              {OWNER_INFO.name}
            </strong>
            . Gain direct access to verified stream archives, catalogue dispatch channels, priority media
            request pipelines, and the Lucifer Open Source engineering community.
          </p>

          <div
            style={{
              paddingTop: '8px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              fontSize: '0.76rem',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#94a3b8'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6ee7b7' }}>
              <Shield size={14} style={{ color: '#34d399' }} /> End-to-End Cryptographic Integrity
            </span>
            <span style={{ color: 'rgba(212, 175, 55, 0.4)' }}>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f3e5ab' }}>
              <Sparkles size={14} style={{ color: '#d4af37' }} /> 945+ TB Verified Media Volume
            </span>
            <span style={{ color: 'rgba(212, 175, 55, 0.4)' }}>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#7dd3fc' }}>
              <Users size={14} style={{ color: '#38bdf8' }} /> Decentralised Community Mirrors
            </span>
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'rgba(212, 175, 55, 0.65)',
            letterSpacing: '0.3em',
            userSelect: 'none',
            marginTop: '18px'
          }}
        >
          ╚═══════════════════════════════════════════════════════════════════╝
        </div>
      </div>

      {/* ── Official Community & Request Links Grid (Liquid Glass Cards) ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}
      >
        {TELEGRAM_COMMUNITY_LINKS.map((link: TelegramCommunityLink) => {
          const isCopied = copiedId === link.id

          return (
            <div
              key={link.id}
              style={{
                position: 'relative',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(22, 18, 36, 0.38) 50%, rgba(10, 10, 18, 0.52) 100%)',
                backdropFilter: 'blur(20px) saturate(200%) contrast(104%)',
                WebkitBackdropFilter: 'blur(20px) saturate(200%) contrast(104%)',
                padding: '24px',
                border: '1px solid rgba(212, 175, 55, 0.32)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.65), inset 0 1px 1.5px rgba(255, 255, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '18px',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.7)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 16px 45px rgba(212, 175, 55, 0.2), inset 0 1px 1.5px rgba(255, 255, 255, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.32)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.65), inset 0 1px 1.5px rgba(255, 255, 255, 0.15)'
              }}
            >
              <div>
                {/* Header: Badge & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      background: 'rgba(212, 175, 55, 0.15)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      color: '#f3e5ab',
                      fontWeight: 700
                    }}
                  >
                    {link.badge}
                  </span>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid rgba(212, 175, 55, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#d4af37'
                    }}
                  >
                    {link.isEmail ? <Mail size={16} /> : <Send size={16} />}
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 6px 0',
                    letterSpacing: '0.02em'
                  }}
                >
                  {link.title}
                </h3>

                {/* Handle / Address */}
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.8rem',
                    color: '#d4af37',
                    fontWeight: 600,
                    marginBottom: '10px'
                  }}
                >
                  {link.handleOrEmail}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#94a3b8',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {link.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)',
                    color: '#08080c',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35)',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.15)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'none'
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(212, 175, 55, 0.35)'
                  }}
                >
                  <span>{link.isEmail ? 'Send Email' : 'Join Telegram'}</span>
                  <ExternalLink size={14} />
                </a>

                <button
                  onClick={() => handleCopy(link.id, link.handleOrEmail)}
                  title="Copy Handle to Clipboard"
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: isCopied ? '#34d399' : '#cbd5e1',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)'
                    e.currentTarget.style.borderColor = '#d4af37'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
                  }}
                >
                  {isCopied ? <Check size={16} style={{ color: '#34d399' }} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Sovereign Governance Copyright Strip (Liquid Glass) ── */}
      <div
        style={{
          borderRadius: '16px',
          background: 'rgba(10, 10, 16, 0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '20px 28px',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          fontSize: '0.76rem',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#94a3b8'
        }}
      >
        <div>
          <div style={{ color: '#e2e8f0', fontWeight: 600 }}>
            © {new Date().getFullYear()} Lucifer Open Source • Governed by Lucifer Morningstar
          </div>
          <div style={{ color: '#64748b', fontSize: '0.7rem', marginTop: '3px' }}>
            Sovereign Media Intelligence &amp; Decentralised High-Definition Stream Vault
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem' }}>
          <span style={{ color: '#d4af37' }}>@LuciferOpenSource</span>
          <span style={{ color: 'rgba(212, 175, 55, 0.3)' }}>|</span>
          <span style={{ color: '#38bdf8' }}>@luciferdatabase</span>
          <span style={{ color: 'rgba(212, 175, 55, 0.3)' }}>|</span>
          <span style={{ color: '#f3e5ab' }}>ailuciferbaba@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}
