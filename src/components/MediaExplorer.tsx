import React, { useState, useMemo } from 'react'
import {
  MediaEntry,
  FilterState,
  MediaCategory,
  ResolutionType,
  VideoCodecType,
  AudioFormatType,
  DynamicRangeType,
} from '../types/media'
import { MediaCard } from './MediaCard'
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  Film,
  Check,
  Disc,
  Volume2,
  Tv,
  Layers,
} from 'lucide-react'

interface MediaExplorerProps {
  entries: MediaEntry[]
  onSelectEntry: (entry: MediaEntry) => void
  initialSearchQuery?: string
}

const CATEGORIES: { label: string; value: 'All' | MediaCategory }[] = [
  { label: 'All Catalog', value: 'All' },
  { label: 'Cinema Masterpieces', value: 'Cinema' },
  { label: 'Audiophile Vault', value: 'Audiophile' },
  { label: 'Nature & Symphonies', value: 'Documentary' },
  { label: 'Animation & CGI', value: 'Animation' },
]

const RESOLUTIONS: { label: string; value: 'All' | ResolutionType }[] = [
  { label: 'All Resolutions', value: 'All' },
  { label: '4K UHD (2160p)', value: '2160p (4K UHD)' },
  { label: '8K Ultra (4320p)', value: '4320p (8K)' },
  { label: 'Master Audio (DSD/PCM)', value: 'Master Audio' },
]

const VIDEO_CODECS: { label: string; value: 'All' | VideoCodecType }[] = [
  { label: 'All Codecs', value: 'All' },
  { label: 'HEVC / H.265', value: 'HEVC / H.265' },
  { label: 'Next-Gen AV1', value: 'AV1' },
]

const AUDIO_FORMATS: { label: string; value: 'All' | AudioFormatType }[] = [
  { label: 'All Audio', value: 'All' },
  { label: 'Dolby TrueHD Atmos', value: 'Dolby TrueHD Atmos' },
  { label: 'DTS-HD MA', value: 'DTS-HD MA' },
  { label: 'FLAC Lossless', value: 'FLAC Lossless' },
  { label: 'PCM 24-bit', value: 'PCM 24-bit' },
]

const DYNAMIC_RANGES: { label: string; value: 'All' | DynamicRangeType }[] = [
  { label: 'All Dynamic Ranges', value: 'All' },
  { label: 'Dolby Vision Profile 8.1', value: 'Dolby Vision Profile 8.1' },
  { label: 'HDR10+', value: 'HDR10+' },
  { label: 'HDR10', value: 'HDR10' },
  { label: 'SDR Standard', value: 'SDR Standard' },
]

export const MediaExplorer: React.FC<MediaExplorerProps> = ({
  entries,
  onSelectEntry,
  initialSearchQuery = '',
}) => {
  const [filterState, setFilterState] = useState<FilterState>({
    query: initialSearchQuery,
    category: 'All',
    resolution: 'All',
    videoCodec: 'All',
    audioFormat: 'All',
    dynamicRange: 'All',
    sortBy: 'featured',
  })

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  // Filter and sort catalog entries
  const filteredEntries = useMemo(() => {
    return entries
      .filter((item) => {
        // Text Query search
        if (filterState.query.trim()) {
          const q = filterState.query.toLowerCase().trim()
          const matchesTitle = item.title.toLowerCase().includes(q)
          const matchesOriginal = item.originalTitle?.toLowerCase().includes(q)
          const matchesDirector = item.director?.toLowerCase().includes(q)
          const matchesStudio = item.studio.toLowerCase().includes(q)
          const matchesGenres = item.genres.some((g) => g.toLowerCase().includes(q))
          const matchesCodec = item.format.videoCodec.toLowerCase().includes(q)
          const matchesAudio = item.audio.primaryFormat.toLowerCase().includes(q)
          const matchesResolution = item.format.resolution.toLowerCase().includes(q)
          const matchesId = item.id.toLowerCase().includes(q)

          if (
            !matchesTitle &&
            !matchesOriginal &&
            !matchesDirector &&
            !matchesStudio &&
            !matchesGenres &&
            !matchesCodec &&
            !matchesAudio &&
            !matchesResolution &&
            !matchesId
          ) {
            return false
          }
        }

        // Category filter
        if (filterState.category !== 'All' && item.category !== filterState.category) {
          return false
        }

        // Resolution filter
        if (filterState.resolution !== 'All' && item.format.resolution !== filterState.resolution) {
          return false
        }

        // Video Codec filter
        if (filterState.videoCodec !== 'All' && item.format.videoCodec !== filterState.videoCodec) {
          return false
        }

        // Audio Format filter
        if (filterState.audioFormat !== 'All' && item.audio.primaryFormat !== filterState.audioFormat) {
          return false
        }

        // Dynamic Range filter
        if (filterState.dynamicRange !== 'All' && item.format.dynamicRange !== filterState.dynamicRange) {
          return false
        }

        return true
      })
      .sort((a, b) => {
        if (filterState.sortBy === 'featured') {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return b.year - a.year
        }
        if (filterState.sortBy === 'yearDesc') {
          return b.year - a.year
        }
        if (filterState.sortBy === 'yearAsc') {
          return a.year - b.year
        }
        if (filterState.sortBy === 'titleAsc') {
          return a.title.localeCompare(b.title)
        }
        if (filterState.sortBy === 'bitrateDesc') {
          return b.format.videoBitrateKbps - a.format.videoBitrateKbps
        }
        return 0
      })
  }, [entries, filterState])

  const resetFilters = () => {
    setFilterState({
      query: '',
      category: 'All',
      resolution: 'All',
      videoCodec: 'All',
      audioFormat: 'All',
      dynamicRange: 'All',
      sortBy: 'featured',
    })
  }

  const activeFilterCount =
    (filterState.category !== 'All' ? 1 : 0) +
    (filterState.resolution !== 'All' ? 1 : 0) +
    (filterState.videoCodec !== 'All' ? 1 : 0) +
    (filterState.audioFormat !== 'All' ? 1 : 0) +
    (filterState.dynamicRange !== 'All' ? 1 : 0) +
    (filterState.query.trim() !== '' ? 1 : 0)

  return (
    <section id="explorer" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container-royal">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-gold-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            <Film size={14} />
            <span>Interactive Catalog Matrix</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            DISCOVER THE <span className="text-gold-gradient">SOVEREIGN ARCHIVES</span>
          </h2>

          <p
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              color: '#9e9eb4',
              fontSize: '1.05rem',
              fontWeight: 300,
            }}
          >
            Explore verified master streams, lossless audio releases, and archival
            restorations with real-time multi-facet technical filtering.
          </p>
        </div>

        {/* Search & Main Filter Bar */}
        <div
          style={{
            background: 'rgba(15, 15, 23, 0.85)',
            border: '1px solid var(--color-obsidian-border)',
            borderRadius: '10px',
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: 'var(--shadow-obsidian-elevated)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Top Row: Search Input + Advanced Filter Toggle + Sort */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
            }}
          >
            {/* Search Input Box */}
            <div
              style={{
                flex: '1 1 320px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search
                size={18}
                color="var(--color-gold-primary)"
                style={{ position: 'absolute', left: '14px', pointerEvents: 'none' }}
              />
              <input
                id="catalog-search-input"
                type="text"
                placeholder="Search by title, director, codec (AV1/HEVC), or format..."
                value={filterState.query}
                onChange={(e) =>
                  setFilterState((prev) => ({ ...prev, query: e.target.value }))
                }
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.75rem',
                  background: 'rgba(8, 8, 12, 0.85)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontFamily: 'var(--font-modern)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-gold-primary)'
                  e.target.style.boxShadow = 'var(--glow-gold-sm)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)'
                  e.target.style.boxShadow = 'none'
                }}
              />
              {filterState.query && (
                <button
                  onClick={() => setFilterState((prev) => ({ ...prev, query: '' }))}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    background: 'transparent',
                    border: 'none',
                    color: '#9e9eb0',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                  }}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#9e9eb0', fontFamily: 'var(--font-mono)' }}>
                SORT:
              </span>
              <select
                value={filterState.sortBy}
                onChange={(e) =>
                  setFilterState((prev) => ({
                    ...prev,
                    sortBy: e.target.value as FilterState['sortBy'],
                  }))
                }
                style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(8, 8, 12, 0.85)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '6px',
                  color: '#fcf6ba',
                  fontFamily: 'var(--font-modern)',
                  fontSize: '0.88rem',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="featured">Featured Master</option>
                <option value="yearDesc">Release Year (Newest)</option>
                <option value="yearAsc">Release Year (Oldest)</option>
                <option value="titleAsc">Title (Alphabetical)</option>
                <option value="bitrateDesc">Video Bitrate (Highest)</option>
              </select>

              {/* Advanced Filters Button */}
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.75rem 1rem',
                  background: showAdvancedFilters
                    ? 'rgba(212, 175, 55, 0.18)'
                    : 'rgba(8, 8, 12, 0.85)',
                  border: showAdvancedFilters
                    ? '1px solid var(--color-gold-primary)'
                    : '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '6px',
                  color: showAdvancedFilters ? '#ffffff' : '#d4d4e2',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-modern)',
                  fontSize: '0.88rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <SlidersHorizontal size={15} color="var(--color-gold-primary)" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'var(--color-gold-primary)',
                      color: '#08080c',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Category Quick Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              paddingTop: '0.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isSelected = filterState.category === cat.value
              return (
                <button
                  key={cat.value}
                  onClick={() =>
                    setFilterState((prev) => ({ ...prev, category: cat.value }))
                  }
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-modern)',
                    fontSize: '0.84rem',
                    fontWeight: isSelected ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: isSelected
                      ? 'var(--gradient-royal-gold)'
                      : 'rgba(255, 255, 255, 0.04)',
                    color: isSelected ? '#08080c' : '#c8c8da',
                    border: isSelected
                      ? '1px solid var(--color-gold-light)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: isSelected ? 'var(--glow-gold-sm)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Advanced Multi-Facet Filter Drawer */}
          {showAdvancedFilters && (
            <div
              style={{
                marginTop: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(212, 175, 55, 0.15)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: '1.25rem',
              }}
            >
              {/* Resolution Facet */}
              <div>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--color-gold-warm)',
                    marginBottom: '0.45rem',
                    textTransform: 'uppercase',
                  }}
                >
                  <Tv size={13} />
                  <span>Resolution</span>
                </label>
                <select
                  value={filterState.resolution}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      resolution: e.target.value as FilterState['resolution'],
                    }))
                  }
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    background: 'rgba(8, 8, 12, 0.9)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    outline: 'none',
                  }}
                >
                  {RESOLUTIONS.map((res) => (
                    <option key={res.value} value={res.value}>
                      {res.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Video Codec Facet */}
              <div>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--color-gold-warm)',
                    marginBottom: '0.45rem',
                    textTransform: 'uppercase',
                  }}
                >
                  <Disc size={13} />
                  <span>Video Codec</span>
                </label>
                <select
                  value={filterState.videoCodec}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      videoCodec: e.target.value as FilterState['videoCodec'],
                    }))
                  }
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    background: 'rgba(8, 8, 12, 0.9)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    outline: 'none',
                  }}
                >
                  {VIDEO_CODECS.map((codec) => (
                    <option key={codec.value} value={codec.value}>
                      {codec.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Audio Format Facet */}
              <div>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--color-gold-warm)',
                    marginBottom: '0.45rem',
                    textTransform: 'uppercase',
                  }}
                >
                  <Volume2 size={13} />
                  <span>Audio Layout</span>
                </label>
                <select
                  value={filterState.audioFormat}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      audioFormat: e.target.value as FilterState['audioFormat'],
                    }))
                  }
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    background: 'rgba(8, 8, 12, 0.9)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    outline: 'none',
                  }}
                >
                  {AUDIO_FORMATS.map((fmt) => (
                    <option key={fmt.value} value={fmt.value}>
                      {fmt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dynamic Range Facet */}
              <div>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--color-gold-warm)',
                    marginBottom: '0.45rem',
                    textTransform: 'uppercase',
                  }}
                >
                  <Layers size={13} />
                  <span>Dynamic Range</span>
                </label>
                <select
                  value={filterState.dynamicRange}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      dynamicRange: e.target.value as FilterState['dynamicRange'],
                    }))
                  }
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    background: 'rgba(8, 8, 12, 0.9)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    outline: 'none',
                  }}
                >
                  {DYNAMIC_RANGES.map((hdr) => (
                    <option key={hdr.value} value={hdr.value}>
                      {hdr.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Real Active Results Counter (strictly honest, calculated dynamically) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.75rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: '#d4d4e2',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Check size={14} color="var(--color-gold-primary)" />
            <span>
              Showing <strong style={{ color: 'var(--color-gold-light)' }}>{filteredEntries.length}</strong>{' '}
              of <strong style={{ color: '#ffffff' }}>{entries.length}</strong> catalog entries
            </span>
          </div>

          {activeFilterCount > 0 && (
            <button
              onClick={resetFilters}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-gold-warm)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              <RotateCcw size={12} />
              <span>Reset all filters</span>
            </button>
          )}
        </div>

        {/* Media Grid */}
        {filteredEntries.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '2rem',
            }}
          >
            {filteredEntries.map((item) => (
              <MediaCard key={item.id} entry={item} onSelect={onSelectEntry} />
            ))}
          </div>
        ) : (
          /* Honest Empty State: No Invented Fake Results */
          <div
            style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              background: 'rgba(15, 15, 23, 0.5)',
              border: '1px dashed rgba(212, 175, 55, 0.3)',
              borderRadius: '8px',
            }}
          >
            <Film size={42} color="var(--color-gold-antique)" style={{ marginBottom: '1rem', opacity: 0.6 }} />
            <h3
              style={{
                fontFamily: 'var(--font-royal)',
                fontSize: '1.4rem',
                marginBottom: '0.6rem',
                color: '#ffffff',
              }}
            >
              No Matching Records in Sovereign Vault
            </h3>
            <p
              style={{
                maxWidth: '520px',
                margin: '0 auto 1.5rem auto',
                color: '#9e9eb0',
                fontSize: '0.95rem',
              }}
            >
              No catalog entries matched your active search query or filter combination. Lucifer
              Database X does not generate artificial or mock records.
            </p>
            <button onClick={resetFilters} className="btn-royal-primary">
              <RotateCcw size={16} />
              <span>Clear Filter Criteria</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
