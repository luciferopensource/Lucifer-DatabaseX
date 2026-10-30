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

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; glow: string; icon: React.ReactNode }> = {
  Video: {
    bg: 'rgba(212, 175, 55, 0.12)',
    border: 'rgba(212, 175, 55, 0.4)',
    text: '#f3e5ab',
    glow: 'rgba(212, 175, 55, 0.25)',
    icon: <Video className="w-3.5 h-3.5 text-[#d4af37]" />
  },
  Audio: {
    bg: 'rgba(56, 189, 248, 0.12)',
    border: 'rgba(56, 189, 248, 0.4)',
    text: '#7dd3fc',
    glow: 'rgba(56, 189, 248, 0.25)',
    icon: <Music className="w-3.5 h-3.5 text-sky-400" />
  },
  Subtitle: {
    bg: 'rgba(52, 211, 153, 0.12)',
    border: 'rgba(52, 211, 153, 0.4)',
    text: '#6ee7b7',
    glow: 'rgba(52, 211, 153, 0.25)',
    icon: <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
  },
  Archive: {
    bg: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.4)',
    text: '#fcd34d',
    glow: 'rgba(245, 158, 11, 0.25)',
    icon: <Archive className="w-3.5 h-3.5 text-amber-400" />
  },
  Document: {
    bg: 'rgba(168, 85, 247, 0.12)',
    border: 'rgba(168, 85, 247, 0.4)',
    text: '#d8b4fe',
    glow: 'rgba(168, 85, 247, 0.25)',
    icon: <FileText className="w-3.5 h-3.5 text-purple-400" />
  },
  Image: {
    bg: 'rgba(236, 72, 153, 0.12)',
    border: 'rgba(236, 72, 153, 0.4)',
    text: '#f472b6',
    glow: 'rgba(236, 72, 153, 0.25)',
    icon: <ImageIcon className="w-3.5 h-3.5 text-pink-400" />
  },
  Software: {
    bg: 'rgba(99, 102, 241, 0.12)',
    border: 'rgba(99, 102, 241, 0.4)',
    text: '#a5b4fc',
    glow: 'rgba(99, 102, 241, 0.25)',
    icon: <Binary className="w-3.5 h-3.5 text-indigo-400" />
  },
  'Other / Unknown': {
    bg: 'rgba(148, 163, 184, 0.10)',
    border: 'rgba(148, 163, 184, 0.3)',
    text: '#cbd5e1',
    glow: 'rgba(148, 163, 184, 0.15)',
    icon: <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
  }
}

export const FileExtensionSection: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<number | 'all'>(1)
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortMode, setSortMode] = useState<SortMode>('report')
  const [viewDensity, setViewDensity] = useState<'comfortable' | 'compact'>('comfortable')

  // Available categories
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
    // 'report' keeps the source report sequence

    return list
  }, [selectedPage, categoryFilter, searchQuery, sortMode])

  // Count per page helper
  const pageStats = useMemo(() => {
    const stats: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 }
    for (const r of EXTENSION_RECORDS) {
      if (stats[r.page] !== undefined) stats[r.page]++
    }
    return stats
  }, [])

  return (
    <div className="space-y-8" id="file-extension-report">
      {/* ── Section Title Banner ── */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#0d0d14] via-[#15121b] to-[#0d0d14] p-6 lg:p-8 border border-[#d4af37]/30 shadow-[0_12px_40px_rgba(0,0,0,0.65)] overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 text-[#d4af37] text-xs font-mono tracking-wider uppercase mb-3">
              <FileCode2 className="w-3.5 h-3.5" />
              Sovereign Report Section 04 • All 7 Pages Audited
            </div>
            <h2 className="text-2xl lg:text-3xl font-serif text-[#f3e5ab] font-bold tracking-tight">
              File Extension Intelligence Report
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl font-light">
              Exhaustive inventory of all <strong className="text-[#f3e5ab] font-mono">364 unique file formats</strong>,
              container variants, subtitle packages, split-archives, and bespoke metadata signatures across the digital vault.
            </p>
          </div>

          {/* Quick Metrics Cluster */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0">
            <div className="px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-center backdrop-blur-sm">
              <div className="text-xs uppercase font-mono text-slate-400">Total Formats</div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-[#f3e5ab]">
                {EXTENSION_SUMMARY.uniqueExtensions}
              </div>
            </div>
            <div className="px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-center backdrop-blur-sm">
              <div className="text-xs uppercase font-mono text-slate-400">Total Files</div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-amber-300">
                {EXTENSION_SUMMARY.totalFilesAnalysed}
              </div>
            </div>
            <div className="px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-center backdrop-blur-sm">
              <div className="text-xs uppercase font-mono text-slate-400">Audited Volume</div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-[#d4af37]">
                {EXTENSION_SUMMARY.totalAnalysedStorage}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Page Navigator Tabs (All 7 Source Pages) ── */}
      <div className="rounded-2xl bg-[#0d0d14]/90 p-5 border border-white/10 shadow-lg backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-semibold">
              Source Report Page Navigation
            </span>
            <span className="text-xs text-slate-400 font-mono">
              ({EXTENSION_SUMMARY.uniqueExtensions} total extensions across 7 source pages)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (typeof selectedPage === 'number' && selectedPage > 1) {
                  setSelectedPage(selectedPage - 1)
                }
              }}
              disabled={selectedPage === 1 || selectedPage === 'all'}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-slate-300 px-2">
              {selectedPage === 'all' ? 'All Pages' : `Page ${selectedPage} of 7`}
            </span>

            <button
              onClick={() => {
                if (typeof selectedPage === 'number' && selectedPage < 7) {
                  setSelectedPage(selectedPage + 1)
                }
              }}
              disabled={selectedPage === 7 || selectedPage === 'all'}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="w-px h-5 bg-white/15 mx-1" />

            <button
              onClick={() => setSelectedPage(selectedPage === 'all' ? 1 : 'all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                selectedPage === 'all'
                  ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {selectedPage === 'all' ? 'Split into Pages' : 'View All 364 Together'}
            </button>
          </div>
        </div>

        {/* 7 Page Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((page) => {
            const isActive = selectedPage === page
            const count = pageStats[page] || 0
            const pageTheme =
              page === 1
                ? 'Video & Audio'
                : page === 2
                ? 'Archives & Docs'
                : page === 3
                ? 'Software & Misc'
                : `Other Misc (${page})`

            return (
              <button
                key={page}
                onClick={() => setSelectedPage(page)}
                className={`relative px-3 py-2.5 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-gradient-to-b from-[#d4af37]/25 to-[#d4af37]/10 border-[#d4af37] text-[#f3e5ab] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                    : 'bg-black/40 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#f3e5ab]' : 'text-slate-300'}`}>
                    PAGE {page} / 7
                  </span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-[#d4af37] text-black font-semibold' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </div>
                <div className="text-[11px] font-sans truncate text-slate-400 mt-1">
                  {pageTheme}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Interactive Controls Bar (Search, Category Filter, Sort, View Density) ── */}
      <div className="rounded-2xl bg-[#0d0d14]/90 p-5 border border-white/10 shadow-lg space-y-4">
        {/* Search & Sort Controls */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filter extension (e.g. .mkv, .001, .srt, zip)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-sm text-[#f3e5ab] placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 font-mono transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort & Density Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 bg-black/50 border border-white/10 rounded-xl px-2.5 py-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#d4af37]" />
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
                aria-label="Sort extensions"
                className="bg-transparent text-xs text-slate-300 font-mono focus:outline-none cursor-pointer"
              >
                <option value="report" className="bg-[#0d0d14] text-slate-200">
                  Source Report Sequence
                </option>
                <option value="files-desc" className="bg-[#0d0d14] text-slate-200">
                  Files (Highest First)
                </option>
                <option value="files-asc" className="bg-[#0d0d14] text-slate-200">
                  Files (Lowest First)
                </option>
                <option value="alpha" className="bg-[#0d0d14] text-slate-200">
                  Extension Name (A–Z)
                </option>
              </select>
            </div>

            {/* Density switch */}
            <div className="flex items-center bg-black/50 border border-white/10 rounded-xl p-0.5">
              <button
                onClick={() => setViewDensity('comfortable')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                  viewDensity === 'comfortable'
                    ? 'bg-[#d4af37]/20 text-[#f3e5ab] border border-[#d4af37]/40 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewDensity('compact')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                  viewDensity === 'compact'
                    ? 'bg-[#d4af37]/20 text-[#f3e5ab] border border-[#d4af37]/40 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Compact Table
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#d4af37]" /> Filter:
          </span>
          {categories.map((cat) => {
            const isSelected = categoryFilter === cat
            return (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono shrink-0 transition-all ${
                  isSelected
                    ? 'bg-[#d4af37] text-black font-bold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Status message */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
          <div>
            Showing <strong className="text-[#f3e5ab] font-mono">{processedRecords.length}</strong> of{' '}
            <span className="font-mono">{EXTENSION_SUMMARY.uniqueExtensions}</span> extensions
            {selectedPage !== 'all' && (
              <span>
                {' '}
                on <strong className="text-[#d4af37] font-mono">Page {selectedPage}</strong>
              </span>
            )}
            {categoryFilter !== 'All' && <span> in category &ldquo;{categoryFilter}&rdquo;</span>}
            {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            Source Integrity: Complete &amp; Unmodified
          </div>
        </div>
      </div>

      {/* ── View 1: Comfortable Card Grid ── */}
      {viewDensity === 'comfortable' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {processedRecords.map((item, index) => {
            const theme = CATEGORY_COLORS[item.category] || CATEGORY_COLORS['Other / Unknown']
            const isMultiLine = item.extension.includes('\n')

            return (
              <div
                key={`${item.extension}-${item.page}-${index}`}
                className="group relative rounded-xl bg-gradient-to-b from-[#12111a] to-[#0a0a0f] p-4 border border-white/10 hover:border-[#d4af37]/50 hover:shadow-[0_4px_24px_rgba(212,175,55,0.18)] transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  {/* Category Pill */}
                  <div
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono border"
                    style={{
                      backgroundColor: theme.bg,
                      borderColor: theme.border,
                      color: theme.text
                    }}
                  >
                    {theme.icon}
                    <span>{item.category}</span>
                  </div>

                  {/* Source Page Tag */}
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                    Pg {item.page}
                  </span>
                </div>

                {/* Extension String */}
                <div className="mt-3">
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-400">Extension Format</div>
                  <div
                    className={`font-mono text-base font-bold text-[#f3e5ab] mt-0.5 break-all ${
                      isMultiLine ? 'whitespace-pre-line text-xs bg-black/60 p-2 rounded border border-white/10' : ''
                    }`}
                  >
                    {item.extension}
                  </div>
                </div>

                {/* Metrics: Files & Storage */}
                <div className="mt-3 pt-3 border-t border-white/5 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">File Count</span>
                    <span className="font-mono font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                      {item.files}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[11px]">Storage Allocated</span>
                    <span className="font-mono font-bold text-[#d4af37]">
                      {item.storage}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ── View 2: Compact Table ── */}
      {viewDensity === 'compact' && (
        <div className="rounded-2xl bg-[#0d0d14]/90 border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-black/60 border-b border-white/10 text-slate-400 font-mono uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-center w-12">#</th>
                  <th className="px-4 py-3">Format / Extension Signature</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3 text-right">File Count</th>
                  <th className="px-4 py-3 text-right">Storage Volume</th>
                  <th className="px-4 py-3 text-center">Source Page</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {processedRecords.map((item, index) => {
                  const theme = CATEGORY_COLORS[item.category] || CATEGORY_COLORS['Other / Unknown']
                  return (
                    <tr
                      key={`${item.extension}-${item.page}-${index}`}
                      className="hover:bg-white/[0.03] transition-colors"
                    >
                      <td className="px-4 py-2.5 text-center text-slate-400 font-mono">{index + 1}</td>
                      <td className="px-4 py-2.5 text-[#f3e5ab] font-bold break-all max-w-xs whitespace-pre-line">
                        {item.extension}
                      </td>
                      <td className="px-4 py-2.5">
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] border"
                          style={{
                            backgroundColor: theme.bg,
                            borderColor: theme.border,
                            color: theme.text
                          }}
                        >
                          {theme.icon}
                          {item.category}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right text-white font-semibold">{item.files}</td>
                      <td className="px-4 py-2.5 text-right text-[#d4af37] font-semibold">{item.storage}</td>
                      <td className="px-4 py-2.5 text-center">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                          Pg {item.page}/7
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Empty State ── */}
      {processedRecords.length === 0 && (
        <div className="rounded-2xl bg-[#0d0d14]/80 border border-white/10 p-12 text-center">
          <HelpCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <h3 className="text-base font-serif text-[#f3e5ab] font-semibold">No Extensions Found</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            No file extensions matched your current search &ldquo;{searchQuery}&rdquo; and category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setCategoryFilter('All')
              setSelectedPage(1)
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-mono hover:bg-[#d4af37]/30 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* ── Section Footer: Complete Audit Verification ── */}
      <div className="rounded-xl bg-black/60 p-4 border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-300">
            Source Status:{' '}
            <strong className="text-emerald-400 uppercase tracking-wider">{EXTENSION_SCAN_RECORD.status}</strong>
          </span>
          <span className="text-slate-600">•</span>
          <span>
            Database Cache:{' '}
            <strong className="text-[#d4af37]">{EXTENSION_SCAN_RECORD.databaseCache}</strong>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span>Engine: {EXTENSION_SCAN_RECORD.reportVersion}</span>
          <span className="text-slate-600">•</span>
          <span>Scan ID: {EXTENSION_SCAN_RECORD.scanId}</span>
          <span className="text-slate-600">•</span>
          <span>{EXTENSION_SCAN_RECORD.completed}</span>
        </div>
      </div>
    </div>
  )
}
