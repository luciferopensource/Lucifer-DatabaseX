import React, { useState, useMemo } from 'react'
import {
  EXTENSION_RECORDS,
  EXTENSION_SUMMARY,
  EXTENSION_SCAN_RECORD
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

export const FileExtensionSection: React.FC = () => {
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
    let list = [...EXTENSION_RECORDS]

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
  }, [selectedPage, categoryFilter, searchQuery, sortMode])

  const pageCounts = useMemo(() => {
    const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 }
    for (const r of EXTENSION_RECORDS) {
      if (counts[r.page] !== undefined) counts[r.page]++
    }
    return counts
  }, [])

  return (
    <div
      id="report-panel-extensions"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}
    >
      {/* ── Top Header Card (Liquid Glass) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(20, 18, 30, 0.75) 50%, rgba(10, 10, 16, 0.85) 100%)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1.5px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '20px',
          padding: '28px 32px',
          boxShadow: '0 16px 45px rgba(0, 0, 0, 0.75), inset 0 1px 1.5px rgba(255, 255, 255, 0.25)',
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
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
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
            <span>Sovereign Report Section 04 • All 7 Pages Audited</span>
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
              color: 'rgba(243, 229, 171, 0.75)',
              fontWeight: 300,
              maxWidth: '680px'
            }}
          >
            Exhaustive inventory of all <strong style={{ color: '#d4af37', fontFamily: "'JetBrains Mono', monospace" }}>364 unique format extensions</strong> across all 7 source report pages. Filter, sort, or paginate through every audited format.
          </p>
        </div>

        {/* 3 Quick Metric Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div
            style={{
              background: 'rgba(8, 8, 14, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '12px 18px',
              textAlign: 'center',
              minWidth: '110px'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>Unique Formats</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f3e5ab', fontFamily: "'JetBrains Mono', monospace" }}>{EXTENSION_SUMMARY.uniqueExtensions}</div>
          </div>

          <div
            style={{
              background: 'rgba(8, 8, 14, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '12px 18px',
              textAlign: 'center',
              minWidth: '110px'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>Total Files</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b', fontFamily: "'JetBrains Mono', monospace" }}>{EXTENSION_SUMMARY.totalFilesAnalysed}</div>
          </div>

          <div
            style={{
              background: 'rgba(8, 8, 14, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '12px 18px',
              textAlign: 'center',
              minWidth: '110px'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>Audited Size</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#d4af37', fontFamily: "'JetBrains Mono', monospace" }}>{EXTENSION_SUMMARY.totalAnalysedStorage}</div>
          </div>
        </div>
      </div>

      {/* ── Page Navigator Tabs (Compact 7 Pages Bar) ── */}
      <div
        style={{
          background: 'rgba(12, 11, 18, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          borderRadius: '16px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={16} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.8rem', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Source Report Page Navigator
            </span>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
              (7 Audit Pages)
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
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
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
              {selectedPage === 'all' ? 'All 7 Pages' : `Page ${selectedPage} of 7`}
            </span>

            <button
              onClick={() => {
                if (typeof selectedPage === 'number' && selectedPage < 7) {
                  setSelectedPage(selectedPage + 1)
                }
              }}
              disabled={selectedPage === 7 || selectedPage === 'all'}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '6px 10px',
                color: selectedPage === 7 || selectedPage === 'all' ? 'rgba(255,255,255,0.2)' : '#f3e5ab',
                cursor: selectedPage === 7 || selectedPage === 'all' ? 'not-allowed' : 'pointer'
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
                  : 'rgba(255, 255, 255, 0.06)',
                color: selectedPage === 'all' ? '#08080c' : '#f3e5ab',
                border: `1px solid ${selectedPage === 'all' ? '#d4af37' : 'rgba(212, 175, 55, 0.3)'}`,
                borderRadius: '8px',
                padding: '6px 14px',
                fontSize: '0.78rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                cursor: 'pointer',
                marginLeft: '6px'
              }}
            >
              {selectedPage === 'all' ? 'Split into Pages' : 'View All 364'}
            </button>
          </div>
        </div>

        {/* 7 Compact Page Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
          {[1, 2, 3, 4, 5, 6, 7].map((pg) => {
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
                    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.28) 0%, rgba(20, 18, 30, 0.8) 100%)'
                    : 'rgba(8, 8, 14, 0.65)',
                  border: `1px solid ${isActive ? '#d4af37' : 'rgba(212, 175, 55, 0.2)'}`,
                  borderRadius: '10px',
                  padding: '8px 12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 0 16px rgba(212, 175, 55, 0.3)' : 'none',
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

      {/* ── Interactive Filter & Search Controls Bar ── */}
      <div
        style={{
          background: 'rgba(12, 11, 18, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          borderRadius: '16px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
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
                background: 'rgba(8, 8, 14, 0.85)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '10px',
                color: '#f3e5ab',
                fontSize: '0.82rem',
                fontFamily: "'JetBrains Mono', monospace",
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#d4af37'
                e.currentTarget.style.boxShadow = '0 0 12px rgba(212, 175, 55, 0.3)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
                e.currentTarget.style.boxShadow = 'none'
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
                background: 'rgba(8, 8, 14, 0.85)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '8px',
                padding: '6px 10px',
                color: '#f3e5ab',
                fontSize: '0.78rem',
                fontFamily: "'JetBrains Mono', monospace",
                cursor: 'pointer',
                outline: 'none'
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
                    : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? '#08080c' : '#cbd5e1',
                  border: `1px solid ${isSelected ? '#d4af37' : 'rgba(212, 175, 55, 0.2)'}`,
                  borderRadius: '999px',
                  padding: '4px 12px',
                  fontSize: '0.74rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 0 12px rgba(212, 175, 55, 0.35)' : 'none',
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

      {/* ── Compact High-Density Format Table (Liquid Glass) ── */}
      <div
        style={{
          background: 'rgba(10, 10, 16, 0.85)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1.5px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.75)'
        }}
      >
        <div style={{ overflowX: 'auto', maxHeight: '680px', overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.82rem', fontFamily: "'JetBrains Mono', monospace" }}>
            <thead
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                background: 'rgba(16, 14, 24, 0.98)',
                borderBottom: '1.5px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)'
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
                      e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)'
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
                        Pg {item.page}/7
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

      {/* ── Footer Audit Summary Strip (Liquid Glass) ── */}
      <div
        style={{
          background: 'rgba(8, 8, 14, 0.85)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '12px',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.76rem',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#94a3b8'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={16} style={{ color: '#2ecc71' }} />
          <span style={{ color: '#ffffff' }}>Audit Status: <strong style={{ color: '#2ecc71' }}>{EXTENSION_SCAN_RECORD.status}</strong></span>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <span>Database Cache: <strong style={{ color: '#d4af37' }}>{EXTENSION_SCAN_RECORD.databaseCache}</strong></span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Scan ID: <strong style={{ color: '#f3e5ab' }}>{EXTENSION_SCAN_RECORD.scanId}</strong></span>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <span>Engine: {EXTENSION_SCAN_RECORD.reportVersion}</span>
        </div>
      </div>
    </div>
  )
}

export default FileExtensionSection
