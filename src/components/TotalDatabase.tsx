import React, { useState } from 'react'
import { getAggregatedDatabase, AggregatedExtensionRecord } from '../data/aggregateDatabase'
import { TelegramPromotionalFooter } from './channel-intelligence/TelegramPromotionalFooter'
import { useStorageUnit } from '../data/storageUnitContext'
import { StorageUnitSelector } from './StorageUnitSelector'

interface TotalDatabaseProps {
  onBack: () => void
  onSelectArchive: (route: string) => void
}

type ActiveReportType = 'channel' | 'resolution' | 'storage' | 'extension'

export const TotalDatabase: React.FC<TotalDatabaseProps> = ({ onBack, onSelectArchive }) => {
  const aggregatedData = getAggregatedDatabase()
  const { formatString } = useStorageUnit()
  const [activeReport, setActiveReport] = useState<ActiveReportType>('channel')

  // Extension filtering & pagination states
  const [extSearch, setExtSearch] = useState('')
  const [extCategoryFilter, setExtCategoryFilter] = useState('ALL')
  const [extPage, setExtPage] = useState(1)
  const extPageSize = 25

  // Filter extension records
  const filteredExtensions = aggregatedData.extensionIntelligence.records.filter((rec) => {
    const matchesSearch = rec.extension.toLowerCase().includes(extSearch.toLowerCase())
    const matchesCat = extCategoryFilter === 'ALL' || rec.category.toUpperCase() === extCategoryFilter
    return matchesSearch && matchesCat
  })

  const totalExtPages = Math.max(1, Math.ceil(filteredExtensions.length / extPageSize))
  const paginatedExtensions = filteredExtensions.slice(
    (extPage - 1) * extPageSize,
    extPage * extPageSize
  )

  const toggleReport = (report: ActiveReportType) => {
    setActiveReport(activeReport === report ? report : report)
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        color: '#ffffff',
        fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: '30px 24px 80px',
        boxSizing: 'border-box',
      }}
    >
      {/* ── Top Floating Navigation Bar & Unit Selector ── */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'rgba(212, 175, 55, 0.15)',
            color: '#f3e5ab',
            border: '1px solid rgba(212, 175, 55, 0.45)',
            borderRadius: '8px',
            padding: '8px 18px',
            fontSize: '0.84rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            transition: 'all 0.2s',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Return to 3D Cinema</span>
        </button>

        {/* Storage Unit Selector & Verification Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <StorageUnitSelector />

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.74rem',
              fontWeight: 800,
              color: '#2ecc71',
              background: 'rgba(46, 204, 113, 0.12)',
              border: '1px solid rgba(46, 204, 113, 0.35)',
              padding: '5px 12px',
              borderRadius: '20px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2ecc71', boxShadow: '0 0 8px #2ecc71' }} />
            COMPLETE & AUDITED
          </span>
        </div>
      </div>

      {/* ── Main Container with Royal Obsidian & Mac-style Liquid Glass ── */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* ── Sovereign Aggregate Dashboard Header ── */}
        <div
          style={{
            background: 'rgba(14, 14, 22, 0.68)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.75), 0 0 25px rgba(212, 175, 55, 0.15)',
            borderRadius: '20px',
            padding: '28px 32px',
            marginBottom: '24px',
            position: 'relative',
          }}
        >
          {/* Inner gold frame border */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              right: '8px',
              bottom: '8px',
              border: '1px solid rgba(212, 175, 55, 0.12)',
              borderRadius: '14px',
              pointerEvents: 'none',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#d4af37',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                SOVEREIGN UNIFIED INTELLIGENCE CORE
              </div>
              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  margin: 0,
                  letterSpacing: '0.04em',
                }}
              >
                TOTAL DATABASE
              </h1>
              <p
                style={{
                  color: 'rgba(243, 229, 171, 0.75)',
                  fontSize: '0.88rem',
                  marginTop: '6px',
                  marginBottom: 0,
                }}
              >
                Comprehensive multi-channel telemetry, resolution spectrum matrices, storage distribution, and complete cross-archive file audits.
              </p>
            </div>

            {/* Target Dossier Badge */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                padding: '12px 18px',
                textAlign: 'right',
              }}
            >
              <div style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                TARGET NETWORK CORE
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem', fontWeight: 800, color: '#d4af37', marginTop: '2px' }}>
                LMS-TOTAL-DB-CORE
              </div>
              <div style={{ fontSize: '0.72rem', color: '#2ecc71', fontWeight: 700, marginTop: '2px' }}>
                {aggregatedData.archiveCount} Registered Channel Archives
              </div>
            </div>
          </div>

          {/* Primary Telemetry Quad-Grid with Dynamic Unit Converter */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px',
                padding: '16px 18px',
              }}
            >
              <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Combined Storage
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.5rem', fontWeight: 900, color: '#d4af37', marginTop: '6px' }}>
                {formatString(aggregatedData.combinedStorage)}
              </div>
              <div style={{ color: '#2ecc71', fontSize: '0.75rem', fontWeight: 700, marginTop: '2px' }}>
                {aggregatedData.combinedStoragePB} Full Quota
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px',
                padding: '16px 18px',
              }}
            >
              <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Total Files Found
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.5rem', fontWeight: 900, color: '#f3e5ab', marginTop: '6px' }}>
                {aggregatedData.totalFiles}
              </div>
              <div style={{ color: 'rgba(243, 229, 171, 0.5)', fontSize: '0.75rem', marginTop: '2px' }}>
                Across All Channels
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px',
                padding: '16px 18px',
              }}
            >
              <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Messages Checked
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.5rem', fontWeight: 900, color: '#f3e5ab', marginTop: '6px' }}>
                {aggregatedData.totalMessages}
              </div>
              <div style={{ color: 'rgba(243, 229, 171, 0.5)', fontSize: '0.75rem', marginTop: '2px' }}>
                Full Audit Depth
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px',
                padding: '16px 18px',
              }}
            >
              <div style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Scan Duration
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', marginTop: '6px' }}>
                5h 36m 13s
              </div>
              <div style={{ color: 'rgba(243, 229, 171, 0.5)', fontSize: '0.75rem', marginTop: '2px' }}>
                Cumulative Scanner Runtime
              </div>
            </div>
          </div>
        </div>

        {/* ── 4 Mac-Style Liquid Glass Report Tabs ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginBottom: '24px',
          }}
        >
          {/* Tab 1: Channel Analysis */}
          <div
            onClick={() => toggleReport('channel')}
            style={{
              background: activeReport === 'channel'
                ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.22) 0%, rgba(14, 14, 22, 0.85) 100%)'
                : 'rgba(14, 14, 22, 0.65)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: activeReport === 'channel'
                ? '1.5px solid rgba(212, 175, 55, 0.9)'
                : '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '14px',
              padding: '18px 20px',
              cursor: 'pointer',
              boxShadow: activeReport === 'channel'
                ? '0 0 25px rgba(212, 175, 55, 0.35)'
                : '0 4px 16px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#d4af37', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>
                CACHED
              </span>
              <span style={{ color: activeReport === 'channel' ? '#d4af37' : 'rgba(243, 229, 171, 0.4)', fontSize: '0.9rem' }}>
                {activeReport === 'channel' ? '▲' : '▼'}
              </span>
            </div>
            <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.96rem', fontWeight: 800, color: '#f3e5ab', margin: '0 0 4px 0' }}>
              CHANNEL ANALYSIS REPORT
            </h4>
            <div style={{ fontSize: '0.74rem', color: 'rgba(243, 229, 171, 0.65)' }}>
              {aggregatedData.totalMessages} Messages • 8 Categories • 2 Channels
            </div>
          </div>

          {/* Tab 2: Resolution Intelligence */}
          <div
            onClick={() => toggleReport('resolution')}
            style={{
              background: activeReport === 'resolution'
                ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.22) 0%, rgba(14, 14, 22, 0.85) 100%)'
                : 'rgba(14, 14, 22, 0.65)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: activeReport === 'resolution'
                ? '1.5px solid rgba(212, 175, 55, 0.9)'
                : '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '14px',
              padding: '18px 20px',
              cursor: 'pointer',
              boxShadow: activeReport === 'resolution'
                ? '0 0 25px rgba(212, 175, 55, 0.35)'
                : '0 4px 16px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>
                SAVED
              </span>
              <span style={{ color: activeReport === 'resolution' ? '#d4af37' : 'rgba(243, 229, 171, 0.4)', fontSize: '0.9rem' }}>
                {activeReport === 'resolution' ? '▲' : '▼'}
              </span>
            </div>
            <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.96rem', fontWeight: 800, color: '#f3e5ab', margin: '0 0 4px 0' }}>
              RESOLUTION INTELLIGENCE REPORT
            </h4>
            <div style={{ fontSize: '0.74rem', color: 'rgba(243, 229, 171, 0.65)' }}>
              4K UHD to 240p Low • 9 Profiles • Distribution Matrix
            </div>
          </div>

          {/* Tab 3: Storage Highlights */}
          <div
            onClick={() => toggleReport('storage')}
            style={{
              background: activeReport === 'storage'
                ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.22) 0%, rgba(14, 14, 22, 0.85) 100%)'
                : 'rgba(14, 14, 22, 0.65)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: activeReport === 'storage'
                ? '1.5px solid rgba(212, 175, 55, 0.9)'
                : '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '14px',
              padding: '18px 20px',
              cursor: 'pointer',
              boxShadow: activeReport === 'storage'
                ? '0 0 25px rgba(212, 175, 55, 0.35)'
                : '0 4px 16px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#f59e0b', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>
                AUDITED
              </span>
              <span style={{ color: activeReport === 'storage' ? '#d4af37' : 'rgba(243, 229, 171, 0.4)', fontSize: '0.9rem' }}>
                {activeReport === 'storage' ? '▲' : '▼'}
              </span>
            </div>
            <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.96rem', fontWeight: 800, color: '#f3e5ab', margin: '0 0 4px 0' }}>
              STORAGE HIGHLIGHTS REPORT
            </h4>
            <div style={{ fontSize: '0.74rem', color: 'rgba(243, 229, 171, 0.65)' }}>
              {formatString(aggregatedData.combinedStorage)} Total • 3.91 GB Largest • 890.41 MB Avg
            </div>
          </div>

          {/* Tab 4: File Extension */}
          <div
            onClick={() => toggleReport('extension')}
            style={{
              background: activeReport === 'extension'
                ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.22) 0%, rgba(14, 14, 22, 0.85) 100%)'
                : 'rgba(14, 14, 22, 0.65)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: activeReport === 'extension'
                ? '1.5px solid rgba(212, 175, 55, 0.9)'
                : '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '14px',
              padding: '18px 20px',
              cursor: 'pointer',
              boxShadow: activeReport === 'extension'
                ? '0 0 25px rgba(212, 175, 55, 0.35)'
                : '0 4px 16px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', color: '#a855f7', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>
                {aggregatedData.extensionIntelligence.uniqueExtensionsCount} UNIQUE
              </span>
              <span style={{ color: activeReport === 'extension' ? '#d4af37' : 'rgba(243, 229, 171, 0.4)', fontSize: '0.9rem' }}>
                {activeReport === 'extension' ? '▲' : '▼'}
              </span>
            </div>
            <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '0.96rem', fontWeight: 800, color: '#f3e5ab', margin: '0 0 4px 0' }}>
              FILE EXTENSION REPORT
            </h4>
            <div style={{ fontSize: '0.74rem', color: 'rgba(243, 229, 171, 0.65)' }}>
              {aggregatedData.extensionIntelligence.uniqueExtensionsCount} Unique Extensions Across Full Archive
            </div>
          </div>
        </div>

        {/* ── EXPANDED REPORT CONTENT SECTION ── */}
        <div
          style={{
            background: 'rgba(14, 14, 22, 0.68)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.75), 0 0 25px rgba(212, 175, 55, 0.12)',
            borderRadius: '20px',
            padding: '32px',
            marginBottom: '40px',
          }}
        >
          {/* ════════════ REPORT 1: CHANNEL ANALYSIS ════════════ */}
          {activeReport === 'channel' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.74rem', color: '#d4af37', fontWeight: 800 }}>
                    ARCHIVE X ENGINE • TELEGRAM CHANNEL AUDIT
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0' }}>
                    AGGREGATED CHANNEL ANALYSIS REPORT
                  </h3>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(46, 204, 113, 0.15)', border: '1px solid rgba(46, 204, 113, 0.35)', color: '#2ecc71', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
                    DATABASE CACHE: CACHED
                  </span>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.35)', color: '#f3e5ab', padding: '4px 10px', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace" }}>
                    ID: TOTAL-DB-AGGREGATE-V1
                  </span>
                </div>
              </div>

              {/* Dossier & Scan Summary */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '18px' }}>
                  <h5 style={{ color: '#d4af37', fontSize: '0.84rem', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Target Dossier
                  </h5>
                  <div style={{ display: 'grid', gap: '8px', fontSize: '0.84rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>Target Name:</span>
                      <strong style={{ color: '#ffffff' }}>Lucifer Total Database</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>Active Channels:</span>
                      <strong style={{ color: '#2ecc71' }}>2 Channels Verified</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>Scanner Cluster:</span>
                      <strong style={{ color: '#ffffff' }}>Scanner-Node-01 Cluster</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>Intelligence Engine:</span>
                      <strong style={{ color: '#d4af37' }}>Archive X Living Architecture</strong>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '12px', padding: '18px' }}>
                  <h5 style={{ color: '#d4af37', fontSize: '0.84rem', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Scan Summary Audit
                  </h5>
                  <div style={{ display: 'grid', gap: '8px', fontSize: '0.84rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>Messages Checked:</span>
                      <strong style={{ color: '#2ecc71', fontFamily: "'JetBrains Mono', monospace" }}>{aggregatedData.totalMessages}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>Total Files Found:</span>
                      <strong style={{ color: '#2ecc71', fontFamily: "'JetBrains Mono', monospace" }}>{aggregatedData.totalFiles}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>Combined Size:</span>
                      <strong style={{ color: '#d4af37', fontFamily: "'JetBrains Mono', monospace" }}>{formatString(aggregatedData.combinedStorage)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>Scan Duration:</span>
                      <strong style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace" }}>5h 36m 13s</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Combined Category Breakdown */}
              <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', color: '#f3e5ab', marginBottom: '14px' }}>
                COMBINED CATEGORY BREAKDOWN
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '32px' }}>
                {aggregatedData.categoryBreakdown.map((cat) => (
                  <div
                    key={cat.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      borderRadius: '10px',
                      padding: '14px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <strong style={{ color: '#ffffff', fontSize: '0.88rem' }}>{cat.category}</strong>
                      <span style={{ fontSize: '0.72rem', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>
                        {cat.percentage}
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(243, 229, 171, 0.7)' }}>
                      <span>Files: <strong style={{ color: '#f3e5ab' }}>{cat.files}</strong></span>
                      <span>Storage: <strong style={{ color: '#d4af37' }}>{formatString(cat.storage)}</strong></span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Individual Channel Contributions */}
              <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', color: '#f3e5ab', marginBottom: '14px' }}>
                INDIVIDUAL CHANNEL CONTRIBUTIONS
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                {aggregatedData.channelContributions.map((contrib) => (
                  <div
                    key={contrib.channelId}
                    style={{
                      background: 'rgba(20, 20, 30, 0.65)',
                      border: '1px solid rgba(212, 175, 55, 0.35)',
                      borderRadius: '14px',
                      padding: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <h5 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>
                        {contrib.displayName}
                      </h5>
                      <span style={{ fontSize: '0.7rem', color: '#2ecc71', background: 'rgba(46, 204, 113, 0.12)', border: '1px solid rgba(46, 204, 113, 0.3)', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>
                        {contrib.status}
                      </span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.82rem', marginBottom: '16px' }}>
                      <div>
                        <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Files:</span>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, color: '#f3e5ab' }}>{contrib.files}</div>
                      </div>
                      <div>
                        <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Storage:</span>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, color: '#d4af37' }}>{formatString(contrib.storage)}</div>
                      </div>
                      <div>
                        <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Storage Share:</span>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, color: '#2ecc71' }}>{contrib.storageSharePercentage}</div>
                      </div>
                      <div>
                        <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Scan ID:</span>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.74rem', color: 'rgba(243, 229, 171, 0.5)' }}>{contrib.scanId}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectArchive(contrib.route)}
                      style={{
                        width: '100%',
                        background: 'rgba(212, 175, 55, 0.12)',
                        color: '#f3e5ab',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        borderRadius: '6px',
                        padding: '8px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      Open Channel Report →
                    </button>
                  </div>
                ))}
              </div>

              {/* Data Integrity Matrix */}
              <div style={{ background: 'rgba(0, 0, 0, 0.35)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', padding: '14px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ color: '#2ecc71' }}>✓</span>
                  <span style={{ fontSize: '0.78rem', color: '#d4af37', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    DATA INTEGRITY VERIFICATION MATRIX
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {aggregatedData.dataIntegrity.map((item) => (
                    <span
                      key={item.key}
                      style={{
                        fontSize: '0.72rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(46, 204, 113, 0.25)',
                        color: '#2ecc71',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {item.key}: {item.status}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════ REPORT 2: RESOLUTION INTELLIGENCE ════════════ */}
          {activeReport === 'resolution' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.74rem', color: '#d4af37', fontWeight: 800 }}>
                    ARCHIVE X ENGINE • QUALITY & CODEC AUDIT
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0' }}>
                    AGGREGATED RESOLUTION INTELLIGENCE REPORT
                  </h3>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.35)', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
                    DATABASE CACHE: SAVED
                  </span>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.35)', color: '#f3e5ab', padding: '4px 10px', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace" }}>
                    ID: LMS-TOTAL-DB-RES
                  </span>
                </div>
              </div>

              {/* Resolution Spectrum Bar */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.78rem', color: 'rgba(243, 229, 171, 0.7)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  RESOLUTION SPECTRUM MATRIX (AGGREGATE DISTRIBUTION)
                </div>
                <div style={{ height: '14px', borderRadius: '8px', overflow: 'hidden', display: 'flex', width: '100%', background: 'rgba(255, 255, 255, 0.05)' }}>
                  {aggregatedData.resolutionMatrix.map((tier) => (
                    <div
                      key={tier.id}
                      title={`${tier.label}: ${tier.aggregatePercentage}`}
                      style={{
                        width: `${tier.numericPercentage}%`,
                        minWidth: tier.numericPercentage > 0 ? '3px' : '0px',
                        background: tier.color,
                        height: '100%',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Resolution Grid Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                {aggregatedData.resolutionMatrix.map((tier) => (
                  <div
                    key={tier.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      borderRadius: '12px',
                      padding: '16px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.84rem',
                          fontWeight: 800,
                          color: tier.color,
                          background: 'rgba(255, 255, 255, 0.04)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          border: `1px solid ${tier.color}40`,
                        }}
                      >
                        {tier.tag}
                      </span>
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#f3e5ab' }}>
                        {tier.aggregatePercentage}
                      </span>
                    </div>

                    <h5 style={{ fontSize: '0.96rem', color: '#ffffff', margin: '0 0 10px 0' }}>{tier.label}</h5>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.8rem', marginBottom: '12px' }}>
                      <div>
                        <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Files:</span>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#f3e5ab' }}>{tier.files}</div>
                      </div>
                      <div>
                        <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>Storage:</span>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#d4af37' }}>{formatString(tier.storage)}</div>
                      </div>
                    </div>

                    {/* Contributing channel breakdown */}
                    <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(212, 175, 55, 0.1)', fontSize: '0.72rem', color: 'rgba(243, 229, 171, 0.55)' }}>
                      {tier.contributions.map((c, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2px' }}>
                          <span>{c.channelName.replace('Lucifer Stream Site ', '')}:</span>
                          <span>{c.files} files ({formatString(c.storage)})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════════════ REPORT 3: STORAGE HIGHLIGHTS ════════════ */}
          {activeReport === 'storage' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.74rem', color: '#d4af37', fontWeight: 800 }}>
                    ARCHIVE X ENGINE • STORAGE ARCHITECTURE AUDIT
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0' }}>
                    AGGREGATED STORAGE HIGHLIGHTS REPORT
                  </h3>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.35)', color: '#f59e0b', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
                    DATABASE CACHE: SAVED
                  </span>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.35)', color: '#f3e5ab', padding: '4px 10px', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace" }}>
                    ID: LMS-TOTAL-DB-STORAGE
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '28px' }}>
                {/* Total Archived Storage */}
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '14px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      TOTAL ARCHIVED STORAGE
                    </span>
                    <span style={{ background: 'rgba(46, 204, 113, 0.15)', color: '#2ecc71', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>
                      VERIFIED QUOTA
                    </span>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '2.4rem', fontWeight: 900, color: '#d4af37', margin: '8px 0' }}>
                    {formatString(aggregatedData.storageHighlights.combinedStorage)}
                  </div>
                  <div style={{ color: '#2ecc71', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>
                    {aggregatedData.storageHighlights.combinedStoragePB} Unified Capacity
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(243, 229, 171, 0.6)' }}>
                    Cumulative capacity across {aggregatedData.totalFiles} verified catalog records formatted through Archive X Engine.
                  </div>
                </div>

                {/* Largest Single File Record */}
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '14px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ color: 'rgba(243, 229, 171, 0.65)', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      LARGEST SINGLE FILE RECORD
                    </span>
                    <span style={{ background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>
                      MAX PAYLOAD
                    </span>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '2.4rem', fontWeight: 900, color: '#f3e5ab', margin: '8px 0' }}>
                    {formatString(aggregatedData.storageHighlights.largestFileSize)}
                  </div>
                  <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '10px 12px', marginTop: '10px' }}>
                    {aggregatedData.storageHighlights.largestFileRecords.map((item, idx) => (
                      <div key={idx} style={{ fontSize: '0.78rem', marginBottom: idx === 0 ? '6px' : '0' }}>
                        <span style={{ color: '#d4af37', fontWeight: 700 }}>{item.channelName.replace('Lucifer Stream Site ', '')}: </span>
                        <code style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace" }}>{item.fileName}</code>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Secondary Details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', padding: '14px' }}>
                  <span style={{ color: 'rgba(243, 229, 171, 0.6)', fontSize: '0.72rem', textTransform: 'uppercase' }}>AVERAGE FILE SIZE</span>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>
                    {formatString(aggregatedData.storageHighlights.averageFileSize)}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.4)' }}>Weighted across all archives</span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', padding: '14px' }}>
                  <span style={{ color: 'rgba(243, 229, 171, 0.6)', fontSize: '0.72rem', textTransform: 'uppercase' }}>TOTAL FILES RECORDED</span>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.2rem', fontWeight: 800, color: '#f3e5ab', marginTop: '4px' }}>
                    {aggregatedData.storageHighlights.totalFiles}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#2ecc71' }}>100% catalog integrity verified</span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', padding: '14px' }}>
                  <span style={{ color: 'rgba(243, 229, 171, 0.6)', fontSize: '0.72rem', textTransform: 'uppercase' }}>PARTICIPATING CHANNELS</span>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.2rem', fontWeight: 800, color: '#d4af37', marginTop: '4px' }}>
                    {aggregatedData.storageHighlights.sourceChannelsCount} Channels
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(243, 229, 171, 0.4)' }}>Continuous audit sync</span>
                </div>
              </div>
            </div>
          )}

          {/* ════════════ REPORT 4: FILE EXTENSION INTELLIGENCE ════════════ */}
          {activeReport === 'extension' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.74rem', color: '#d4af37', fontWeight: 800 }}>
                    ARCHIVE X ENGINE • FULL METADATA AUDIT
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0' }}>
                    AGGREGATED FILE EXTENSION INTELLIGENCE
                  </h3>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.35)', color: '#a855f7', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
                    {aggregatedData.extensionIntelligence.uniqueExtensionsCount} DISTINCT EXTENSIONS
                  </span>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.35)', color: '#f3e5ab', padding: '4px 10px', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace" }}>
                    CROSS-ARCHIVE UNION
                  </span>
                </div>
              </div>

              {/* Category Filter Pills & Search */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['ALL', 'VIDEO', 'AUDIO', 'SUBTITLE', 'ARCHIVE', 'DOCUMENT', 'IMAGE', 'SOFTWARE', 'OTHER / UNKNOWN'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setExtCategoryFilter(cat)
                        setExtPage(1)
                      }}
                      style={{
                        background: extCategoryFilter === cat ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)' : 'rgba(255, 255, 255, 0.04)',
                        color: extCategoryFilter === cat ? '#08080c' : 'rgba(243, 229, 171, 0.8)',
                        border: `1px solid ${extCategoryFilter === cat ? '#d4af37' : 'rgba(212, 175, 55, 0.25)'}`,
                        borderRadius: '6px',
                        padding: '5px 12px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <input
                  type="text"
                  placeholder="Search extension (e.g. mkv, zip)..."
                  value={extSearch}
                  onChange={(e) => {
                    setExtSearch(e.target.value)
                    setExtPage(1)
                  }}
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(212, 175, 55, 0.35)',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    outline: 'none',
                    minWidth: '220px',
                  }}
                />
              </div>

              {/* Paginated Table */}
              <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.25)', marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'rgba(212, 175, 55, 0.12)', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', color: '#d4af37' }}>
                      <th style={{ padding: '12px 16px' }}>EXTENSION</th>
                      <th style={{ padding: '12px 16px' }}>CATEGORY</th>
                      <th style={{ padding: '12px 16px' }}>COMBINED FILES</th>
                      <th style={{ padding: '12px 16px' }}>COMBINED STORAGE</th>
                      <th style={{ padding: '12px 16px' }}>PROVENANCE (CHANNEL BREAKDOWN)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedExtensions.map((rec: AggregatedExtensionRecord, idx: number) => (
                      <tr
                        key={rec.extension + idx}
                        style={{
                          background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.015)' : 'transparent',
                          borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                        }}
                      >
                        <td style={{ padding: '10px 16px', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#f3e5ab' }}>
                          .{rec.extension}
                        </td>
                        <td style={{ padding: '10px 16px', color: 'rgba(255, 255, 255, 0.8)' }}>
                          {rec.category}
                        </td>
                        <td style={{ padding: '10px 16px', fontFamily: "'JetBrains Mono', monospace", color: '#ffffff', fontWeight: 700 }}>
                          {rec.files}
                        </td>
                        <td style={{ padding: '10px 16px', fontFamily: "'JetBrains Mono', monospace", color: '#d4af37', fontWeight: 700 }}>
                          {formatString(rec.storage)}
                        </td>
                        <td style={{ padding: '10px 16px', fontSize: '0.74rem', color: 'rgba(243, 229, 171, 0.65)' }}>
                          {rec.channelContributions.map((c, i) => (
                            <span key={i} style={{ marginRight: '10px' }}>
                              <strong style={{ color: '#2ecc71' }}>{c.channelName.replace('Lucifer Stream Site ', '')}:</strong> {c.files} ({formatString(c.storage)})
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                    {paginatedExtensions.length === 0 && (
                      <tr>
                        <td colSpan={5} style={{ padding: '30px', textAlign: 'center', color: 'rgba(243, 229, 171, 0.5)' }}>
                          No extensions match the specified criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '0.8rem' }}>
                <span style={{ color: 'rgba(243, 229, 171, 0.6)' }}>
                  Showing {(extPage - 1) * extPageSize + 1}–{Math.min(extPage * extPageSize, filteredExtensions.length)} of {filteredExtensions.length} extensions
                </span>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setExtPage((p) => Math.max(1, p - 1))}
                    disabled={extPage <= 1}
                    style={{
                      background: extPage <= 1 ? 'rgba(255, 255, 255, 0.03)' : 'rgba(212, 175, 55, 0.15)',
                      color: extPage <= 1 ? 'rgba(255, 255, 255, 0.3)' : '#f3e5ab',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '6px',
                      padding: '5px 12px',
                      cursor: extPage <= 1 ? 'not-allowed' : 'pointer',
                    }}
                  >
                    Previous
                  </button>
                  <span style={{ display: 'flex', alignItems: 'center', padding: '0 8px', color: '#d4af37', fontFamily: "'JetBrains Mono', monospace" }}>
                    {extPage} / {totalExtPages}
                  </span>
                  <button
                    type="button"
                    onClick={() => setExtPage((p) => Math.min(totalExtPages, p + 1))}
                    disabled={extPage >= totalExtPages}
                    style={{
                      background: extPage >= totalExtPages ? 'rgba(255, 255, 255, 0.03)' : 'rgba(212, 175, 55, 0.15)',
                      color: extPage >= totalExtPages ? 'rgba(255, 255, 255, 0.3)' : '#f3e5ab',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '6px',
                      padding: '5px 12px',
                      cursor: extPage >= totalExtPages ? 'not-allowed' : 'pointer',
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Sovereign Community Promotional Footer ── */}
        <TelegramPromotionalFooter />
      </div>
    </div>
  )
}

export default TotalDatabase
