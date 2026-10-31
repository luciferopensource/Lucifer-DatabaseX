import React from 'react'
import {
  Radio,
  Trophy,
  FileDigit,
  Calculator,
  Database
} from 'lucide-react'
import {
  TARGET_INFO,
  STORAGE_HIGHLIGHTS,
  STORAGE_SCAN_RECORD
} from '../../data/channelIntelligenceData'

export const StorageHighlightsSection: React.FC = () => {
  return (
    <div
      id="report-panel-storage"
      role="tabpanel"
      aria-labelledby="report-tab-storage"
      style={{
        background: 'linear-gradient(135deg, rgba(20, 16, 32, 0.62) 0%, rgba(12, 11, 20, 0.72) 100%)',
        backdropFilter: 'blur(40px) saturate(210%) contrast(105%) brightness(1.08)',
        WebkitBackdropFilter: 'blur(40px) saturate(210%) contrast(105%) brightness(1.08)',
        border: '1.5px solid rgba(212, 175, 55, 0.42)',
        borderRadius: '24px',
        padding: '30px 34px',
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.75), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.32), inset 0 -1px 1px rgba(0, 0, 0, 0.4), 0 0 35px rgba(212, 175, 55, 0.12)',
        marginBottom: '36px',
        animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* ── macOS Title Bar Accent & Section Header ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '18px',
          borderBottom: '1px solid rgba(212, 175, 55, 0.22)',
          marginBottom: '24px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* macOS Traffic Light Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', boxShadow: '0 0 8px rgba(255,95,86,0.6)', border: '1px solid rgba(0,0,0,0.2)' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', boxShadow: '0 0 8px rgba(255,189,46,0.6)', border: '1px solid rgba(0,0,0,0.2)' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 8px rgba(39,201,63,0.6)', border: '1px solid rgba(0,0,0,0.2)' }} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
              <Radio size={14} />
              <span>ARCHIVE X ENGINE • STORAGE ARCHITECTURE AUDIT</span>
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1.45rem',
                fontWeight: 800,
                color: '#f3e5ab',
                margin: '4px 0 0 0',
                letterSpacing: '0.04em'
              }}
            >
              STORAGE HIGHLIGHTS REPORT
            </h2>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'rgba(46, 204, 113, 0.15)',
              border: '1px solid rgba(46, 204, 113, 0.4)',
              color: '#2ecc71',
              fontSize: '0.72rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2ecc71' }} />
            DATABASE CACHE: {STORAGE_SCAN_RECORD.databaseCache}
          </span>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              color: '#d4af37',
              fontSize: '0.72rem',
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace"
            }}
          >
            ID: {STORAGE_SCAN_RECORD.scanId}
          </span>
        </div>
      </div>

      {/* ── Visual Hero Storage Cards Grid ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}
      >
        {/* Total Storage Hero Card (Hero Liquid Glass) */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(28, 22, 42, 0.65) 100%)',
            backdropFilter: 'blur(28px) saturate(190%)',
            WebkitBackdropFilter: 'blur(28px) saturate(190%)',
            border: '2px solid rgba(212, 175, 55, 0.55)',
            borderRadius: '18px',
            padding: '28px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 16px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(212, 175, 55, 0.2), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.28)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.74rem', color: '#d4af37', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              TOTAL ARCHIVED STORAGE
            </span>
            <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.15)', color: '#f3e5ab', fontSize: '0.7rem', fontWeight: 700 }}>
              VERIFIED QUOTA
            </span>
          </div>

          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
              fontWeight: 900,
              color: '#f3e5ab',
              lineHeight: 1.1,
              textShadow: '0 4px 18px rgba(212, 175, 55, 0.45)',
              margin: '8px 0 14px 0'
            }}
          >
            {STORAGE_HIGHLIGHTS.totalStorage}
          </div>

          <p style={{ fontSize: '0.84rem', color: 'rgba(243, 229, 171, 0.85)', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
            Cumulative capacity across 999,973 verified catalog records. Formatted and synchronized through Archive X Engine.
          </p>

          <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem' }}>
            <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>Files Counted:</span>
            <span style={{ fontWeight: 800, color: '#2ecc71', fontFamily: "'JetBrains Mono', monospace" }}>{STORAGE_HIGHLIGHTS.totalFiles}</span>
          </div>
        </div>

        {/* Largest File Highlight Card (Liquid Glass) */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(22, 20, 36, 0.65) 100%)',
            backdropFilter: 'blur(28px) saturate(190%)',
            WebkitBackdropFilter: 'blur(28px) saturate(190%)',
            border: '2px solid rgba(212, 175, 55, 0.45)',
            borderRadius: '18px',
            padding: '28px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 16px 45px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.15), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Trophy size={16} />
              <span>LARGEST SINGLE FILE RECORD</span>
            </div>
            <span style={{ padding: '3px 8px', borderRadius: '4px', background: 'rgba(46, 204, 113, 0.15)', color: '#2ecc71', fontSize: '0.68rem', fontWeight: 700 }}>
              MAX PAYLOAD
            </span>
          </div>

          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
              fontWeight: 900,
              color: '#d4af37',
              lineHeight: 1.1,
              margin: '8px 0 10px 0'
            }}
          >
            {STORAGE_HIGHLIGHTS.largestFileSize}
          </div>

          <div
            style={{
              background: 'rgba(8, 8, 12, 0.75)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '10px',
              padding: '12px 14px',
              marginBottom: '14px'
            }}
          >
            <span style={{ fontSize: '0.66rem', color: 'rgba(243, 229, 171, 0.65)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              EXACT TRUNCATED FILENAME
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.86rem',
                color: '#f3e5ab',
                fontWeight: 700,
                wordBreak: 'break-all',
                display: 'block',
                marginTop: '4px'
              }}
            >
              {STORAGE_HIGHLIGHTS.largestFileName}
            </span>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'rgba(243, 229, 171, 0.65)', margin: 0, fontStyle: 'italic' }}>
            Note: Source report preserves filename truncation. No extrapolation or manufactured characters applied.
          </p>
        </div>
      </div>

      {/* ── Sub-metrics Strip: Average Size & File Metrics ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}
      >
        {/* Average File Size */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(20, 18, 30, 0.5) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255, 255, 255, 0.14)'
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#d4af37'
            }}
          >
            <Calculator size={22} />
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', fontWeight: 600 }}>
              AVERAGE FILE SIZE
            </span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f3e5ab', fontFamily: "'Cinzel', serif" }}>
              {STORAGE_HIGHLIGHTS.averageFileSize}
            </span>
            <span style={{ fontSize: '0.72rem', color: 'rgba(243, 229, 171, 0.55)', display: 'block', marginTop: '2px' }}>
              Reported audit average
            </span>
          </div>
        </div>

        {/* Total Files Audited */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(20, 18, 30, 0.5) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255, 255, 255, 0.14)'
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: 'rgba(46, 204, 113, 0.15)',
              border: '1px solid rgba(46, 204, 113, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2ecc71'
            }}
          >
            <FileDigit size={22} />
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', fontWeight: 600 }}>
              TOTAL FILES RECORDED
            </span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f3e5ab', fontFamily: "'Cinzel', serif" }}>
              {STORAGE_HIGHLIGHTS.totalFiles}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#2ecc71', display: 'block', marginTop: '2px', fontWeight: 700 }}>
              100% catalog integrity verified
            </span>
          </div>
        </div>

        {/* Channel Target Reference */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(20, 18, 30, 0.5) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255, 255, 255, 0.14)'
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: 'rgba(52, 152, 219, 0.15)',
              border: '1px solid rgba(52, 152, 219, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3498db'
            }}
          >
            <Database size={22} />
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', fontWeight: 600 }}>
              TARGET CHANNEL
            </span>
            <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f3e5ab' }}>
              {TARGET_INFO.name}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#d4af37', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginTop: '2px' }}>
              {TARGET_INFO.channelId}
            </span>
          </div>
        </div>
      </div>

      {/* ── Scan Record Dossier Footer (macOS Acrylic Status Strip) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(10, 10, 18, 0.65) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(212, 175, 55, 0.28)',
          borderRadius: '14px',
          padding: '16px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem',
          color: 'rgba(243, 229, 171, 0.85)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.12)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span><strong>SCAN ID:</strong> <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#d4af37' }}>{STORAGE_SCAN_RECORD.scanId}</span></span>
          <span><strong>COMPLETED:</strong> {STORAGE_SCAN_RECORD.completed}</span>
          <span><strong>STATUS:</strong> <span style={{ color: '#2ecc71', fontWeight: 700 }}>✅ {STORAGE_SCAN_RECORD.status}</span></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span><strong>DATABASE CACHE:</strong> <span style={{ color: '#2ecc71', fontWeight: 700 }}>● {STORAGE_SCAN_RECORD.databaseCache}</span></span>
          <span style={{ color: 'rgba(212, 175, 55, 0.3)' }}>|</span>
          <span>{STORAGE_SCAN_RECORD.reportVersion}</span>
        </div>
      </div>
    </div>
  )
}

