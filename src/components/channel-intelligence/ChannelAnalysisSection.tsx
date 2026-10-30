import React from 'react'
import {
  Film,
  Layers,
  Archive,
  FileText,
  Music,
  Image,
  Cpu,
  Paperclip,
  CheckCircle2,
  Radio
} from 'lucide-react'
import {
  TARGET_INFO,
  SCAN_SUMMARY,
  CATEGORY_BREAKDOWN,
  DATA_INTEGRITY_AUDIT,
  CHANNEL_ANALYSIS_SCAN_RECORD
} from '../../data/channelIntelligenceData'

export const ChannelAnalysisSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film': return <Film size={18} />
      case 'Layers': return <Layers size={18} />
      case 'Archive': return <Archive size={18} />
      case 'FileText': return <FileText size={18} />
      case 'Music': return <Music size={18} />
      case 'Image': return <Image size={18} />
      case 'Cpu': return <Cpu size={18} />
      default: return <Paperclip size={18} />
    }
  }

  return (
    <div
      id="report-panel-channel-analysis"
      role="tabpanel"
      aria-labelledby="report-tab-channel-analysis"
      style={{
        background: 'linear-gradient(135deg, rgba(18, 15, 28, 0.78) 0%, rgba(12, 11, 18, 0.86) 100%)',
        backdropFilter: 'blur(28px) saturate(190%)',
        WebkitBackdropFilter: 'blur(28px) saturate(190%)',
        border: '1.5px solid rgba(212, 175, 55, 0.4)',
        borderRadius: '20px',
        padding: '28px 32px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), inset 0 1px 1.5px rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 175, 55, 0.08)',
        marginBottom: '32px',
        animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* ── Section Title Banner ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '18px',
          borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
          marginBottom: '24px'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
            <Radio size={14} />
            <span>ARCHIVE X ENGINE • TELEGRAM CHANNEL AUDIT</span>
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
            CHANNEL ANALYSIS REPORT
          </h2>
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
            DATABASE CACHE: {CHANNEL_ANALYSIS_SCAN_RECORD.databaseCache}
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
            ID: {CHANNEL_ANALYSIS_SCAN_RECORD.scanId}
          </span>
        </div>
      </div>

      {/* ── Sub-grid: Target & Scan Summary ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}
      >
        {/* Target Dossier */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(22, 18, 32, 0.7) 0%, rgba(12, 11, 18, 0.8) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '14px',
            padding: '20px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)'
          }}
        >
          <div style={{ fontSize: '0.72rem', color: '#d4af37', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📡 TARGET DOSSIER</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Target Name:</span>
              <span style={{ fontWeight: 700, color: '#f3e5ab' }}>{TARGET_INFO.name}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Channel ID:</span>
              <span style={{ fontWeight: 700, color: '#d4af37', fontFamily: "'JetBrains Mono', monospace" }}>{TARGET_INFO.channelId}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Scanner Node:</span>
              <span style={{ fontWeight: 600, color: '#f3e5ab' }}>{TARGET_INFO.scanner}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Intelligence Engine:</span>
              <span style={{ fontWeight: 600, color: '#2ecc71' }}>{TARGET_INFO.intelligenceEngine}</span>
            </div>
          </div>
        </div>

        {/* Scan Summary Audit */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(22, 18, 32, 0.7) 0%, rgba(12, 11, 18, 0.8) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '14px',
            padding: '20px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)'
          }}
        >
          <div style={{ fontSize: '0.72rem', color: '#d4af37', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📊 SCAN SUMMARY AUDIT</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Messages Checked:</span>
              <span style={{ fontWeight: 700, color: '#f3e5ab' }}>{SCAN_SUMMARY.messagesChecked}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Total Files Found:</span>
              <span style={{ fontWeight: 700, color: '#2ecc71' }}>{SCAN_SUMMARY.totalFilesFound}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Combined Size:</span>
              <span style={{ fontWeight: 800, color: '#d4af37' }}>{SCAN_SUMMARY.combinedSize}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Scan Duration:</span>
              <span style={{ fontWeight: 600, color: '#f3e5ab' }}>{SCAN_SUMMARY.scanDuration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Category Breakdown Grid ── */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <h3
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#d4af37',
              margin: 0,
              letterSpacing: '0.04em'
            }}
          >
            🎞️ CATEGORY BREAKDOWN
          </h3>
          <span style={{ fontSize: '0.74rem', color: 'rgba(243, 229, 171, 0.5)' }}>
            8 Core Media Categories Audited
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px'
          }}
        >
          {CATEGORY_BREAKDOWN.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'linear-gradient(135deg, rgba(20, 18, 30, 0.7) 0%, rgba(12, 11, 18, 0.8) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(212, 175, 55, 0.28)',
                borderRadius: '14px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.7)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.28)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#d4af37', padding: '6px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    {getCategoryIcon(item.icon)}
                  </span>
                  <span style={{ fontWeight: 700, color: '#f3e5ab', fontSize: '0.88rem' }}>
                    {item.category}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: item.percentage === '99.5%' ? '#2ecc71' : '#d4af37',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    border: '1px solid rgba(212, 175, 55, 0.2)'
                  }}
                >
                  {item.percentage}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div>
                  <span style={{ color: 'rgba(243, 229, 171, 0.5)', display: 'block', fontSize: '0.7rem' }}>FILES</span>
                  <span style={{ fontWeight: 700, color: '#ffffff' }}>{item.files}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ color: 'rgba(243, 229, 171, 0.5)', display: 'block', fontSize: '0.7rem' }}>STORAGE</span>
                  <span style={{ fontWeight: 700, color: '#f3e5ab' }}>{item.storage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Data Integrity Verification Matrix ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(20, 18, 30, 0.7) 0%, rgba(12, 11, 18, 0.8) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(212, 175, 55, 0.28)',
          borderRadius: '14px',
          padding: '20px',
          marginBottom: '24px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ fontSize: '0.74rem', color: '#d4af37', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={16} color="#2ecc71" />
          <span>🧮 DATA INTEGRITY VERIFICATION MATRIX</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px'
          }}
        >
          {DATA_INTEGRITY_AUDIT.map((audit) => (
            <div
              key={audit.key}
              style={{
                background: 'rgba(9, 9, 14, 0.8)',
                border: '1px solid rgba(46, 204, 113, 0.35)',
                borderRadius: '8px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ fontSize: '0.74rem', color: 'rgba(243, 229, 171, 0.9)', fontWeight: 600 }}>
                {audit.key}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: '#2ecc71', fontWeight: 800 }}>
                <CheckCircle2 size={12} />
                {audit.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scan Record Dossier Footer ── */}
      <div
        style={{
          background: 'rgba(10, 10, 16, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          borderRadius: '12px',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem',
          color: 'rgba(243, 229, 171, 0.8)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span><strong>SCAN ID:</strong> <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#d4af37' }}>{CHANNEL_ANALYSIS_SCAN_RECORD.scanId}</span></span>
          <span><strong>COMPLETED:</strong> {CHANNEL_ANALYSIS_SCAN_RECORD.completed}</span>
          <span><strong>STATUS:</strong> <span style={{ color: '#2ecc71', fontWeight: 700 }}>✅ {CHANNEL_ANALYSIS_SCAN_RECORD.status}</span></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span><strong>DATABASE CACHE:</strong> <span style={{ color: '#d4af37', fontWeight: 700 }}>● {CHANNEL_ANALYSIS_SCAN_RECORD.databaseCache}</span></span>
          <span style={{ color: 'rgba(212, 175, 55, 0.3)' }}>|</span>
          <span>{CHANNEL_ANALYSIS_SCAN_RECORD.reportVersion}</span>
        </div>
      </div>
    </div>
  )
}

