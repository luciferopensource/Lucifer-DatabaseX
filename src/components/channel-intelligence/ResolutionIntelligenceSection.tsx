import React, { useState } from 'react'
import {
  Radio,
  BarChart3
} from 'lucide-react'
import {
  ChannelIntelligenceDataset,
  BACKUP_1_DATASET
} from '../../data/channelIntelligenceData'

interface ResolutionIntelligenceSectionProps {
  dataset?: ChannelIntelligenceDataset
}

export const ResolutionIntelligenceSection: React.FC<ResolutionIntelligenceSectionProps> = ({
  dataset = BACKUP_1_DATASET
}) => {
  const resolutionBreakdown = dataset.resolutionBreakdown
  const scanRecord = dataset.resolutionScanRecord
  const [selectedResolutionId, setSelectedResolutionId] = useState<string | null>(null)

  const selectedItem = selectedResolutionId
    ? resolutionBreakdown.find((r) => r.id === selectedResolutionId)
    : null

  return (
    <div
      id="report-panel-resolution"
      role="tabpanel"
      aria-labelledby="report-tab-resolution"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(22, 18, 36, 0.38) 50%, rgba(10, 10, 18, 0.52) 100%)',
        backdropFilter: 'blur(20px) saturate(210%) contrast(104%) brightness(1.06)',
        WebkitBackdropFilter: 'blur(20px) saturate(210%) contrast(104%) brightness(1.06)',
        border: '1.5px solid rgba(212, 175, 55, 0.38)',
        borderRadius: '24px',
        padding: '30px 34px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.55), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.4), inset 0 -1px 1px rgba(0, 0, 0, 0.3), 0 0 35px rgba(212, 175, 55, 0.12)',
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
              <span>ARCHIVE X ENGINE • QUALITY & CODEC AUDIT</span>
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
              RESOLUTION INTELLIGENCE REPORT
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
            DATABASE CACHE: {scanRecord.databaseCache}
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
            ID: {scanRecord.scanId}
          </span>
        </div>
      </div>

      {/* ── Visual Distribution Bar (100% Horizontal Stack) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(20, 18, 30, 0.52) 100%)',
          backdropFilter: 'blur(24px) saturate(190%)',
          WebkitBackdropFilter: 'blur(24px) saturate(190%)',
          border: '1px solid rgba(212, 175, 55, 0.32)',
          borderRadius: '16px',
          padding: '22px',
          marginBottom: '28px',
          boxShadow: '0 10px 28px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.18)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart3 size={16} color="#d4af37" />
            <span style={{ fontSize: '0.8rem', color: '#f3e5ab', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              RESOLUTION SPECTRUM MATRIX (REPORTED DISTRIBUTION)
            </span>
          </div>
          <span style={{ fontSize: '0.72rem', color: 'rgba(243, 229, 171, 0.5)' }}>
            Hover or click segments to inspect metrics
          </span>
        </div>

        {/* The Stacked Proportion Bar */}
        <div
          style={{
            height: '24px',
            width: '100%',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.8)'
          }}
        >
          {resolutionBreakdown.map((res) => {
            const widthPct = Math.max(res.numericPercentage, 1.2)
            const isHighlighted = selectedResolutionId === res.id
            return (
              <div
                key={res.id}
                title={`${res.label}: ${res.percentage} (${res.files} files, ${res.storage})`}
                onClick={() => setSelectedResolutionId(res.id === selectedResolutionId ? null : res.id)}
                style={{
                  width: `${widthPct}%`,
                  height: '100%',
                  background: res.color,
                  cursor: 'pointer',
                  opacity: selectedResolutionId ? (isHighlighted ? 1 : 0.35) : 0.9,
                  transition: 'opacity 0.2s, transform 0.2s',
                  transform: isHighlighted ? 'scaleY(1.15)' : 'none',
                  position: 'relative'
                }}
              />
            )
          })}
        </div>

        {/* Active Inspection Tooltip Banner */}
        {selectedItem && (
          <div
            style={{
              marginTop: '16px',
              padding: '12px 18px',
              background: 'rgba(212, 175, 55, 0.1)',
              border: `1px solid ${selectedItem.color}`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              animation: 'fadeIn 0.2s ease-out'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: selectedItem.color }} />
              <span style={{ fontWeight: 800, color: '#f3e5ab', fontSize: '0.9rem' }}>{selectedItem.label}</span>
              <span style={{ fontSize: '0.74rem', color: 'rgba(243, 229, 171, 0.7)' }}>({selectedItem.tag})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.82rem' }}>
              <span><strong>FILES:</strong> <span style={{ color: '#ffffff' }}>{selectedItem.files}</span></span>
              <span><strong>STORAGE:</strong> <span style={{ color: '#d4af37' }}>{selectedItem.storage}</span></span>
              <span><strong>REPORTED RATIO:</strong> <span style={{ color: '#2ecc71', fontWeight: 800 }}>{selectedItem.percentage}</span></span>
            </div>
          </div>
        )}
      </div>

      {/* ── Detailed Resolution Breakdown Cards ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}
      >
        {resolutionBreakdown.map((res) => {
          const isSelected = selectedResolutionId === res.id
          return (
            <div
              key={res.id}
              onClick={() => setSelectedResolutionId(isSelected ? null : res.id)}
              style={{
                background: isSelected
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(28, 22, 42, 0.72) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(20, 18, 30, 0.5) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${isSelected ? res.color : 'rgba(212, 175, 55, 0.3)'}`,
                borderRadius: '16px',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: isSelected
                  ? `0 12px 32px rgba(0,0,0,0.7), 0 0 20px ${res.color}44, inset 0 1px 1px rgba(255, 255, 255, 0.25)`
                  : '0 8px 24px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255, 255, 255, 0.14)',
                cursor: 'pointer',
                transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isSelected ? 'translateY(-3px)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = res.color
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = `0 10px 28px ${res.color}25, inset 0 1px 1px rgba(255, 255, 255, 0.2)`
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255, 255, 255, 0.14)'
                }
              }}
            >
              {/* Card Header: Label & Reported Percentage */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: res.color,
                      boxShadow: `0 0 8px ${res.color}`
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      color: '#f3e5ab',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {res.label}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: res.color,
                    background: 'rgba(0, 0, 0, 0.4)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    border: `1px solid ${res.color}44`
                  }}
                >
                  {res.percentage}
                </span>
              </div>

              {/* Tag / Description */}
              <div style={{ fontSize: '0.72rem', color: 'rgba(243, 229, 171, 0.55)', fontStyle: 'italic' }}>
                {res.tag}
              </div>

              {/* Visual Progress Bar for this card */}
              <div
                style={{
                  height: '6px',
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${Math.max(res.numericPercentage, 1)}%`,
                    background: res.color,
                    borderRadius: '3px'
                  }}
                />
              </div>

              {/* Data row: Files and Storage */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '0.82rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.68rem', color: 'rgba(243, 229, 171, 0.5)', display: 'block', textTransform: 'uppercase' }}>
                    FILES
                  </span>
                  <span style={{ fontWeight: 800, color: '#ffffff', fontFamily: "'JetBrains Mono', monospace" }}>
                    {res.files}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.68rem', color: 'rgba(243, 229, 171, 0.5)', display: 'block', textTransform: 'uppercase' }}>
                    STORAGE
                  </span>
                  <span style={{ fontWeight: 800, color: '#d4af37', fontFamily: "'JetBrains Mono', monospace" }}>
                    {res.storage}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
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
          <span><strong>SCAN ID:</strong> <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#d4af37' }}>{scanRecord.scanId}</span></span>
          <span><strong>COMPLETED:</strong> {scanRecord.completed}</span>
          <span><strong>STATUS:</strong> <span style={{ color: '#2ecc71', fontWeight: 700 }}>✅ {scanRecord.status}</span></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span><strong>DATABASE CACHE:</strong> <span style={{ color: '#2ecc71', fontWeight: 700 }}>● {scanRecord.databaseCache}</span></span>
          <span style={{ color: 'rgba(212, 175, 55, 0.3)' }}>|</span>
          <span>{scanRecord.reportVersion}</span>
        </div>
      </div>
    </div>
  )
}

