import React, { useState, useMemo } from 'react'
import {
  ChannelIntelligenceDataset,
  BACKUP_1_DATASET
} from '../../data/channelIntelligenceData'
import {
  FileCode2,
  Search,
  Filter,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Layers,
  FileText,
  Video,
  Music,
  FileCheck,
  Archive,
  Image as ImageIcon,
  Binary,
  HelpCircle,
  ShieldCheck
} from 'lucide-react'

type CategoryFilter = 'All' | 'Video' | 'Audio' | 'Subtitle' | 'Archive' | 'Document' | 'Image' | 'Software' | 'Other / Unknown'
type SortMode = 'report' | 'files-desc' | 'files-asc' | 'alpha'

const CATEGORY_STYLES: Record<string, { bg: string; border: string; text: string; icon: React.ReactNode }> = {
  Video: {
    bg: 'rgba(212, 175, 55, 0.15)',
    border: 'rgba(212, 175, 55, 0.5)',
    text: '#f3e5ab',
    icon: <Video size={13} style={{ color: '#d4af37' }} />
  },
  Audio: {
    bg: 'rgba(56, 189, 248, 0.15)',
    border: 'rgba(56, 189, 248, 0.5)',
    text: '#7dd3fc',
    icon: <Music size={13} style={{ color: '#38bdf8' }} />
  },
  Subtitle: {
    bg: 'rgba(52, 211, 153, 0.15)',
    border: 'rgba(52, 211, 153, 0.5)',
    text: '#6ee7b7',
    icon: <FileCheck size={13} style={{ color: '#34d399' }} />
  },
  Archive: {
    bg: 'rgba(245, 158, 11, 0.15)',
    border: 'rgba(245, 158, 11, 0.5)',
    text: '#fcd34d',
    icon: <Archive size={13} style={{ color: '#f59e0b' }} />
  },
  Document: {
    bg: 'rgba(168, 85, 247, 0.15)',
    border: 'rgba(168, 85, 247, 0.5)',
    text: '#d8b4fe',
    icon: <FileText size={13} style={{ color: '#a855f7' }} />
  },
  Image: {
    bg: 'rgba(236, 72, 153, 0.15)',
    border: 'rgba(236, 72, 153, 0.5)',
    text: '#f472b6',
    icon: <ImageIcon size={13} style={{ color: '#ec4899' }} />
  },
  Software: {
    bg: 'rgba(99, 102, 241, 0.15)',
    border: 'rgba(99, 102, 241, 0.5)',
    text: '#a5b4fc',
    icon: <Binary size={13} style={{ color: '#6366f1' }} />
  },
  'Other / Unknown': {
    bg: 'rgba(148, 163, 184, 0.12)',
    border: 'rgba(148, 163, 184, 0.35)',
    text: '#cbd5e1',
    icon: <HelpCircle size={13} style={{ color: '#94a3b8' }} />
  }
}

interface FileExtensionSectionProps {
  dataset?: ChannelIntelligenceDataset
}

export const FileExtensionSection: React.FC<FileExtensionSectionProps> = ({
  dataset = BACKUP_1_DATASET
}) => {
  const extensionRecords = dataset.extensionRecords
  const extensionSummary = dataset.extensionSummary
  const scanRecord = dataset.extensionScanRecord
  const totalPages = extensionSummary.totalPages

  const [selectedPage, setSelectedPage] = useState<number | 'all'>(1)
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortMode, setSortMode] = useState<SortMode>('report')

  const categories: CategoryFilter[] = [
    'All',
    'Video',
    'Audio',
    'Subtitle',
    'Archive',
    'Document',
    'Image',
    'Software',
    'Other / Unknown'
  ]

  // Filtered & Sorted Records
  const processedRecords = useMemo(() => {
    let list = [...extensionRecords]

    // 1. Page Filter (if not 'all')
    if (selectedPage !== 'all') {
      list = list.filter((r) => r.page === selectedPage)
    }

    // 2. Category Filter
    if (categoryFilter !== 'All') {
      list = list.filter((r) => r.category === categoryFilter)
    }

    // 3. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      list = list.filter(
        (r) =>
          r.extension.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          r.storage.toLowerCase().includes(q)
      )
    }

    // 4. Sorting
    if (sortMode === 'files-desc') {
      list.sort((a, b) => b.numericFiles - a.numericFiles)
    } else if (sortMode === 'files-asc') {
      list.sort((a, b) => a.numericFiles - b.numericFiles)
    } else if (sortMode === 'alpha') {
      list.sort((a, b) => a.extension.localeCompare(b.extension))
    }

    return list
  }, [extensionRecords, selectedPage, categoryFilter, searchQuery, sortMode])

  const pageCounts = useMemo(() => {
    const counts: Record<number, number> = {}
    for (let p = 1; p <= totalPages; p++) counts[p] = 0
    for (const r of extensionRecords) {
      if (counts[r.page] !== undefined) counts[r.page]++
    }
    return counts
  }, [extensionRecords, totalPages])

  return (
    <div
      id="report-panel-extensions"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(22, 18, 36, 0.38) 50%, rgba(10, 10, 18, 0.52) 100%)',
        backdropFilter: 'blur(20px) saturate(210%) contrast(104%) brightness(1.06)',
        WebkitBackdropFilter: 'blur(20px) saturate(210%) contrast(104%) brightness(1.06)',
        border: '1.5px solid rgba(212, 175, 55, 0.38)',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.55), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.4), inset 0 -1px 1px rgba(0, 0, 0, 0.3), 0 0 35px rgba(212, 175, 55, 0.12)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* ── macOS Window Header Strip ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(212, 175, 55, 0.22)',
          paddingBottom: '16px',
          marginBottom: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56', boxShadow: '0 0 8px rgba(255, 95, 86, 0.65)' }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e', boxShadow: '0 0 8px rgba(255, 189, 46, 0.65)' }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 8px rgba(39, 201, 63, 0.65)' }} />
          <span style={{ marginLeft: '12px', fontSize: '0.74rem', fontFamily: "'JetBrains Mono', monospace", color: 'rgba(243, 229, 171, 0.65)', letterSpacing: '0.08em' }}>
            ARCHIVE X ENGINE • COMPLETE {totalPages}-PAGE EXTENSION AUDIT
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '0.72rem',
              fontFamily: "'JetBrains Mono', monospace",
              background: 'rgba(46, 204, 113, 0.15)',
              border: '1px solid rgba(46, 204, 113, 0.45)',
              color: '#2ecc71',
              padding: '2px 10px',
              borderRadius: '999px',
              fontWeight: 700
            }}
          >
            ● DATABASE CACHE: AUDITED
          </span>
          <span style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: '#94a3b8' }}>
            ID: {scanRecord.scanId}
          </span>
        </div>
      </div>

      {/* ── Top Header Card (Frosted Liquid Glass Sub-Panel) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.14) 0%, rgba(26, 22, 38, 0.65) 50%, rgba(14, 13, 22, 0.78) 100%)',
          backdropFilter: 'blur(30px) saturate(200%)',
          WebkitBackdropFilter: 'blur(30px) saturate(200%)',
          border: '1.5px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '20px',
          padding: '28px 32px',
          boxShadow: '0 16px 45px rgba(0, 0, 0, 0.65), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.28)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'rgba(212, 175, 55, 0.18)',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              color: '#d4af37',
              fontSize: '0.75rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}
          >
            <FileCode2 size={14} />
            <span>Sovereign Report Section 04 • All {totalPages} Pages Audited</span>
          </div>

          <h2
            style={{
              margin: '0 0 6px',
              fontSize: '1.8rem',
              fontFamily: "'Cinzel', serif",
              fontWeight: 800,
              color: '#f3e5ab',
              letterSpacing: '0.02em'
            }}
          >
            File Extension Intelligence Report
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: '0.86rem',
              color: 'rgba(243, 229, 171, 0.85)',
              fontWeight: 300,
              maxWidth: '680px'
            }}
          >
            Exhaustive inventory of all <strong style={{ color: '#d4af37', fontFamily: "'JetBrains Mono', monospace" }}>{extensionSummary.uniqueExtensions} unique format extensions</strong> across all {totalPages} source report pages. Filter, sort, or paginate through every audited format.
          </p>
        </div>

        {/* 3 Quick Metric Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(20, 18, 30, 0.72) 0%, rgba(10, 10, 16, 0.82) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '12px',
              padding: '12px 18px',
              textAlign: 'center',
              minWidth: '110px',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>Unique Formats</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f3e5ab', fontFamily: "'JetBrains Mono', monospace" }}>{extensionSummary.uniqueExtensions}</div>
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg, rgba(20, 18, 30, 0.72) 0%, rgba(10, 10, 16, 0.82) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '12px',
              padding: '12px 18px',
              textAlign: 'center',
              minWidth: '110px',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>Total Files</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b', fontFamily: "'JetBrains Mono', monospace" }}>{extensionSummary.totalFilesAnalysed}</div>
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg, rgba(20, 18, 30, 0.72) 0%, rgba(10, 10, 16, 0.82) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '12px',
              padding: '12px 18px',
              textAlign: 'center',
              minWidth: '110px',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>Audited Size</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#d4af37', fontFamily: "'JetBrains Mono', monospace" }}>{extensionSummary.totalAnalysedStorage}</div>
          </div>
        </div>
      </div>

      {/* ── Page Navigator Tabs (Frosted Compact 7 Pages Bar) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(16, 14, 26, 0.65) 0%, rgba(10, 10, 18, 0.75) 100%)',
          backdropFilter: 'blur(30px) saturate(200%)',
          WebkitBackdropFilter: 'blur(30px) saturate(200%)',
          border: '1.5px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '18px',
          padding: '18px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.22)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={16} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Source Report Page Navigator
            </span>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
              ({totalPages} Audit Pages)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => {
                if (typeof selectedPage === 'number' && selectedPage > 1) {
                  setSelectedPage(selectedPage - 1)
                }
              }}
              disabled={selectedPage === 1 || selectedPage === 'all'}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                padding: '6px 10px',
                color: selectedPage === 1 || selectedPage === 'all' ? 'rgba(255,255,255,0.2)' : '#f3e5ab',
                cursor: selectedPage === 1 || selectedPage === 'all' ? 'not-allowed' : 'pointer'
              }}
              title="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>

            <span style={{ fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace", color: '#ffffff', minWidth: '90px', textAlign: 'center' }}>
              {selectedPage === 'all' ? `All ${totalPages} Pages` : `Page ${selectedPage} of ${totalPages}`}
            </span>

            <button
              onClick={() => {
                if (typeof selectedPage === 'number' && selectedPage < totalPages) {
                  setSelectedPage(selectedPage + 1)
                }
              }}
              disabled={selectedPage === totalPages || selectedPage === 'all'}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                padding: '6px 10px',
                color: selectedPage === totalPages || selectedPage === 'all' ? 'rgba(255,255,255,0.2)' : '#f3e5ab',
                cursor: selectedPage === totalPages || selectedPage === 'all' ? 'not-allowed' : 'pointer'
              }}
              title="Next Page"
            >
              <ChevronRight size={16} />
            </button>

            <button
              onClick={() => setSelectedPage(selectedPage === 'all' ? 1 : 'all')}
              style={{
                background: selectedPage === 'all'
                  ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)'
                  : 'rgba(255, 255, 255, 0.08)',
                color: selectedPage === 'all' ? '#08080c' : '#f3e5ab',
                border: `1px solid ${selectedPage === 'all' ? '#d4af37' : 'rgba(212, 175, 55, 0.35)'}`,
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '0.78rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                cursor: 'pointer',
                marginLeft: '6px'
              }}
            >
              {selectedPage === 'all' ? 'Split into Pages' : `View All ${extensionSummary.uniqueExtensions}`}
            </button>
          </div>
        </div>

        {/* Compact Page Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => {
            const isActive = selectedPage === pg
            const count = pageCounts[pg] || 0
            const subtitle =
              pg === 1
                ? 'Video & Audio'
                : pg === 2
                ? 'Archives & Docs'
                : pg === 3
                ? 'Software & Misc'
                : `Misc Pack (${pg})`

            return (
              <button
                key={pg}
                onClick={() => setSelectedPage(pg)}
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.32) 0%, rgba(28, 24, 40, 0.85) 100%)'
                    : 'rgba(10, 10, 16, 0.65)',
                  border: `1.5px solid ${isActive ? '#d4af37' : 'rgba(212, 175, 55, 0.22)'}`,
                  borderRadius: '10px',
                  padding: '8px 12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 0 18px rgba(212, 175, 55, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.3)' : 'none',
                  transition: 'all 0.18s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.76rem', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: isActive ? '#f3e5ab' : '#ffffff' }}>
                    PAGE {pg}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      padding: '1px 6px',
                      borderRadius: '4px',
                      background: isActive ? '#d4af37' : 'rgba(255, 255, 255, 0.08)',
                      color: isActive ? '#08080c' : '#94a3b8',
                      fontWeight: 700
                    }}
                  >
                    {count}
                  </span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {subtitle}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Interactive Filter & Search Controls Bar (Frosted Acrylic) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(16, 14, 26, 0.65) 0%, rgba(10, 10, 18, 0.75) 100%)',
          backdropFilter: 'blur(30px) saturate(200%)',
          WebkitBackdropFilter: 'blur(30px) saturate(200%)',
          border: '1.5px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '18px',
          padding: '18px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.22)'
        }}
      >
        {/* Row 1: Search & Sort */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          {/* Search Box */}
          <div style={{ position: 'relative', flex: '1', minWidth: '260px', maxWidth: '420px' }}>
            <Search
              size={15}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#d4af37',
                pointerEvents: 'none'
              }}
            />
            <input
              type="text"
              placeholder="Search extension (e.g. .mkv, .001, .srt, zip)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 14px 9px 36px',
                background: 'linear-gradient(135deg, rgba(10, 10, 16, 0.85) 0%, rgba(20, 18, 30, 0.85) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '10px',
                color: '#f3e5ab',
                fontSize: '0.82rem',
                fontFamily: "'JetBrains Mono', monospace",
                outline: 'none',
                boxSizing: 'border-box',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.6)'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#d4af37'
                e.currentTarget.style.boxShadow = '0 0 14px rgba(212, 175, 55, 0.35)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)'
                e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(0, 0, 0, 0.6)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.72rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: 'pointer'
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowUpDown size={14} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.76rem', fontFamily: "'JetBrains Mono', monospace", color: '#94a3b8' }}>Sort:</span>
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              aria-label="Sort File Extensions"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 16, 0.85) 0%, rgba(20, 18, 30, 0.85) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '8px',
                padding: '6px 10px',
                color: '#f3e5ab',
                fontSize: '0.78rem',
                fontFamily: "'JetBrains Mono', monospace",
                cursor: 'pointer',
                outline: 'none',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.6)'
              }}
            >
              <option value="report">Source Report Order</option>
              <option value="files-desc">File Count (High to Low)</option>
              <option value="files-asc">File Count (Low to High)</option>
              <option value="alpha">Extension (A–Z)</option>
            </select>
          </div>
        </div>

        {/* Row 2: Category Filter Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", color: '#94a3b8', textTransform: 'uppercase', marginRight: '4px' }}>
            <Filter size={12} style={{ display: 'inline', marginRight: '4px', color: '#d4af37' }} />
            Filter:
          </span>
          {categories.map((cat) => {
            const isSelected = categoryFilter === cat
            return (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                style={{
                  background: isSelected
                    ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)'
                    : 'rgba(255, 255, 255, 0.06)',
                  color: isSelected ? '#08080c' : '#cbd5e1',
                  border: `1px solid ${isSelected ? '#d4af37' : 'rgba(212, 175, 55, 0.22)'}`,
                  borderRadius: '999px',
                  padding: '4px 12px',
                  fontSize: '0.74rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 0 14px rgba(212, 175, 55, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4)' : 'none',
                  transition: 'all 0.15s'
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Counter Info */}
        <div style={{ fontSize: '0.74rem', fontFamily: "'JetBrains Mono', monospace", color: '#94a3b8', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px' }}>
          Displaying <strong style={{ color: '#f3e5ab' }}>{processedRecords.length}</strong> format records
          {selectedPage !== 'all' ? ` for Page ${selectedPage}` : ' across All 7 Pages'}
          {categoryFilter !== 'All' ? ` (Filtered: ${categoryFilter})` : ''}
          {searchQuery ? ` matching "${searchQuery}"` : ''}
        </div>
      </div>

      {/* ── Compact High-Density Format Table (macOS Frosted Window) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(16, 14, 26, 0.72) 0%, rgba(10, 10, 16, 0.88) 100%)',
          backdropFilter: 'blur(36px) saturate(210%)',
          WebkitBackdropFilter: 'blur(36px) saturate(210%)',
          border: '1.5px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.25)'
        }}
      >
        <div style={{ overflowX: 'auto', maxHeight: '680px', overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.82rem', fontFamily: "'JetBrains Mono', monospace" }}>
            <thead
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                background: 'rgba(20, 18, 30, 0.95)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom: '1.5px solid rgba(212, 175, 55, 0.45)',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.7)'
              }}
            >
              <tr>
                <th style={{ padding: '12px 14px', width: '50px', textAlign: 'center', color: '#94a3b8', fontSize: '0.74rem', textTransform: 'uppercase' }}>#</th>
                <th style={{ padding: '12px 16px', color: '#d4af37', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Extension Format Signature</th>
                <th style={{ padding: '12px 16px', color: '#d4af37', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Category</th>
                <th style={{ padding: '12px 16px', textAlign: 'right', color: '#d4af37', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Files</th>
                <th style={{ padding: '12px 16px', textAlign: 'right', color: '#d4af37', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Storage Volume</th>
                <th style={{ padding: '12px 14px', textAlign: 'center', color: '#94a3b8', fontSize: '0.74rem', textTransform: 'uppercase' }}>Page</th>
              </tr>
            </thead>
            <tbody>
              {processedRecords.map((item, idx) => {
                const style = CATEGORY_STYLES[item.category] || CATEGORY_STYLES['Other / Unknown']
                return (
                  <tr
                    key={`${item.extension}-${item.page}-${idx}`}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    {/* Index */}
                    <td style={{ padding: '10px 14px', textAlign: 'center', color: '#64748b', fontSize: '0.76rem' }}>
                      {idx + 1}
                    </td>

                    {/* Extension Format */}
                    <td style={{ padding: '10px 16px', color: '#f3e5ab', fontWeight: 700, wordBreak: 'break-all', whiteSpace: 'pre-line' }}>
                      <span
                        style={{
                          background: 'rgba(0, 0, 0, 0.45)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'inline-block'
                        }}
                      >
                        {item.extension}
                      </span>
                    </td>

                    {/* Category */}
                    <td style={{ padding: '10px 16px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          background: style.bg,
                          border: `1px solid ${style.border}`,
                          color: style.text,
                          fontWeight: 600
                        }}
                      >
                        {style.icon}
                        <span>{item.category}</span>
                      </span>
                    </td>

                    {/* Files */}
                    <td style={{ padding: '10px 16px', textAlign: 'right', color: '#ffffff', fontWeight: 700 }}>
                      {item.files}
                    </td>

                    {/* Storage */}
                    <td style={{ padding: '10px 16px', textAlign: 'right', color: '#d4af37', fontWeight: 700 }}>
                      {item.storage}
                    </td>

                    {/* Page */}
                    <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#94a3b8'
                        }}
                      >
                        Pg {item.page}/{totalPages}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {processedRecords.length === 0 && (
          <div style={{ padding: '40px 20px', textAlign: 'center', color: '#94a3b8' }}>
            <HelpCircle size={32} style={{ color: 'rgba(212, 175, 55, 0.5)', margin: '0 auto 10px' }} />
            <div style={{ color: '#f3e5ab', fontWeight: 600 }}>No Extensions Found</div>
            <div style={{ fontSize: '0.78rem', marginTop: '4px' }}>Try resetting your search query or category filter.</div>
          </div>
        )}
      </div>

      {/* ── Footer Audit Summary Strip (Frosted Acrylic) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(16, 14, 26, 0.65) 0%, rgba(10, 10, 18, 0.75) 100%)',
          backdropFilter: 'blur(30px) saturate(200%)',
          WebkitBackdropFilter: 'blur(30px) saturate(200%)',
          border: '1.5px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '16px',
          padding: '14px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.76rem',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#94a3b8',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.22)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={16} style={{ color: '#2ecc71' }} />
          <span style={{ color: '#ffffff' }}>Audit Status: <strong style={{ color: '#2ecc71' }}>{scanRecord.status}</strong></span>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <span>Database Cache: <strong style={{ color: '#d4af37' }}>{scanRecord.databaseCache}</strong></span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Scan ID: <strong style={{ color: '#f3e5ab' }}>{scanRecord.scanId}</strong></span>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <span>Engine: {scanRecord.reportVersion}</span>
        </div>
      </div>
    </div>
  )
}

export default FileExtensionSection
