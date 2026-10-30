import React from 'react'
import {
  ShieldCheck,
  Server,
  Radio,
  Clock,
  HardDrive,
  FileDigit,
  MessageSquare,
  CheckCircle2,
  Cpu,
  Layers
} from 'lucide-react'
import { TARGET_INFO, SCAN_SUMMARY } from '../../data/channelIntelligenceData'

export const IntelligenceHeader: React.FC = () => {
  return (
    <div style={{ marginBottom: '32px' }}>
      {/* ── Top Royal Frame & Console Breadcrumb ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '10px 18px',
          background: 'linear-gradient(90deg, rgba(16,16,24,0.96) 0%, rgba(26,22,34,0.92) 50%, rgba(16,16,24,0.96) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.32)',
          borderBottom: '2px solid rgba(212, 175, 55, 0.55)',
          borderRadius: '12px 12px 0 0',
          boxShadow: '0 8px 32px rgba(0,0,0,0.7)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 10px',
              background: 'rgba(46, 204, 113, 0.12)',
              border: '1px solid rgba(46, 204, 113, 0.4)',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#2ecc71',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#2ecc71', boxShadow: '0 0 8px #2ecc71' }} />
            {TARGET_INFO.status}
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 10px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#f3e5ab',
              letterSpacing: '0.06em'
            }}
          >
            <ShieldCheck size={12} color="#d4af37" />
            INTEGRITY: {SCAN_SUMMARY.scanIntegrity}
          </span>

          <span style={{ color: 'rgba(243, 229, 171, 0.4)', fontSize: '0.8rem' }}>•</span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(243, 229, 171, 0.7)', fontFamily: "'JetBrains Mono', monospace" }}>
            ENGINE: {TARGET_INFO.reportVersion} ({TARGET_INFO.intelligenceEngine})
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#d4af37', fontFamily: "'JetBrains Mono', monospace" }}>
          <span>NODE: {TARGET_INFO.scanner}</span>
          <span style={{ color: 'rgba(212, 175, 55, 0.3)' }}>|</span>
          <span>SCAN ID: {TARGET_INFO.scanId}</span>
        </div>
      </div>

      {/* ── Main Hero Title Console ── */}
      <div
        style={{
          padding: '28px 24px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(30, 24, 40, 0.85) 0%, rgba(10, 10, 16, 0.98) 100%)',
          borderLeft: '1px solid rgba(212, 175, 55, 0.35)',
          borderRight: '1px solid rgba(212, 175, 55, 0.35)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#d4af37',
                  fontWeight: 700,
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Radio size={14} color="#d4af37" />
                SOVEREIGN CHANNEL INTELLIGENCE DASHBOARD
              </p>
              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#f3e5ab',
                  letterSpacing: '0.04em',
                  lineHeight: 1.15,
                  margin: 0,
                  textShadow: '0 2px 14px rgba(212, 175, 55, 0.3)'
                }}
              >
                {TARGET_INFO.name}
              </h1>
              <p style={{ fontSize: '0.86rem', color: 'rgba(243, 229, 171, 0.65)', marginTop: '8px', maxWidth: '780px', lineHeight: 1.5 }}>
                Comprehensive Media Archive & Cinematic Stream Collection audit. Real-time telemetry, resolution matrices, storage distribution, and complete 7-page extension audit powered by Archive X Engine.
              </p>
            </div>

            {/* Target ID Badge */}
            <div
              style={{
                background: 'rgba(16, 16, 24, 0.85)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                padding: '12px 18px',
                borderRadius: '10px',
                minWidth: '220px',
                boxShadow: 'inset 0 1px 0 rgba(212, 175, 55, 0.2)'
              }}
            >
              <div style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.55)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                TARGET CHANNEL ID
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#d4af37', fontFamily: "'JetBrains Mono', monospace", margin: '4px 0' }}>
                {TARGET_INFO.channelId}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#2ecc71' }}>
                <CheckCircle2 size={12} />
                <span>Synchronised with Archive X Core</span>
              </div>
            </div>
          </div>

          {/* ── KPI Cards Strip ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '14px',
              marginTop: '24px'
            }}
          >
            {/* KPI 1: Total Storage */}
            <div
              style={{
                background: 'rgba(16, 16, 24, 0.9)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '10px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
                transition: 'transform 0.2s, border-color 0.2s'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d4af37'
                }}
              >
                <HardDrive size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>
                  COMBINED STORAGE
                </span>
                <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f3e5ab', fontFamily: "'Cinzel', serif" }}>
                  {SCAN_SUMMARY.combinedSize}
                </span>
              </div>
            </div>

            {/* KPI 2: Total Files Found */}
            <div
              style={{
                background: 'rgba(16, 16, 24, 0.9)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '10px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.5)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(46,204,113,0.2) 0%, rgba(46,204,113,0.05) 100%)',
                  border: '1px solid rgba(46,204,113,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2ecc71'
                }}
              >
                <FileDigit size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>
                  TOTAL FILES FOUND
                </span>
                <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f3e5ab', fontFamily: "'Cinzel', serif" }}>
                  {SCAN_SUMMARY.totalFilesFound}
                </span>
              </div>
            </div>

            {/* KPI 3: Messages Checked */}
            <div
              style={{
                background: 'rgba(16, 16, 24, 0.9)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '10px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.5)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(52,152,219,0.2) 0%, rgba(52,152,219,0.05) 100%)',
                  border: '1px solid rgba(52,152,219,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3498db'
                }}
              >
                <MessageSquare size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>
                  MESSAGES CHECKED
                </span>
                <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f3e5ab', fontFamily: "'Cinzel', serif" }}>
                  {SCAN_SUMMARY.messagesChecked}
                </span>
              </div>
            </div>

            {/* KPI 4: Scan Duration */}
            <div
              style={{
                background: 'rgba(16, 16, 24, 0.9)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '10px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.5)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(155,89,182,0.2) 0%, rgba(155,89,182,0.05) 100%)',
                  border: '1px solid rgba(155,89,182,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9b59b6'
                }}
              >
                <Clock size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>
                  SCAN DURATION
                </span>
                <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f3e5ab', fontFamily: "'Cinzel', serif" }}>
                  {SCAN_SUMMARY.scanDuration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

