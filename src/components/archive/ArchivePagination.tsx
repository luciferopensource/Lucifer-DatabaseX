import React from 'react'

interface ArchivePaginationProps {
  currentPage: number
  totalPages: number
  totalArchives: number
  startRange: number
  endRange: number
  onPageChange: (newPage: number) => void
}

export const ArchivePagination: React.FC<ArchivePaginationProps> = ({
  currentPage,
  totalPages,
  totalArchives,
  startRange,
  endRange,
  onPageChange,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        margin: '50px 0 30px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Range Status */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.84rem',
          color: '#d4af37',
          background: 'rgba(212, 175, 55, 0.1)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          padding: '6px 18px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span>
          ARCHIVE NETWORK: <strong style={{ color: '#ffffff' }}>{startRange}–{endRange}</strong> OF{' '}
          <strong style={{ color: '#2ecc71' }}>{totalArchives}</strong>
        </span>
        <span style={{ color: 'rgba(212, 175, 55, 0.4)' }}>|</span>
        <span>
          SECTOR <strong style={{ color: '#f3e5ab' }}>{currentPage}</strong> / {totalPages}
        </span>
      </div>

      {/* Navigation Controls (Visible & interactive when multiple sectors exist) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          style={{
            background: currentPage <= 1 ? 'rgba(255, 255, 255, 0.04)' : 'rgba(212, 175, 55, 0.15)',
            color: currentPage <= 1 ? 'rgba(255, 255, 255, 0.25)' : '#f3e5ab',
            border: `1px solid ${currentPage <= 1 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(212, 175, 55, 0.4)'}`,
            padding: '8px 18px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>PREVIOUS SECTOR</span>
        </button>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          style={{
            background: currentPage >= totalPages ? 'rgba(255, 255, 255, 0.04)' : 'rgba(212, 175, 55, 0.15)',
            color: currentPage >= totalPages ? 'rgba(255, 255, 255, 0.25)' : '#f3e5ab',
            border: `1px solid ${currentPage >= totalPages ? 'rgba(255, 255, 255, 0.1)' : 'rgba(212, 175, 55, 0.4)'}`,
            padding: '8px 18px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s',
          }}
        >
          <span>NEXT SECTOR (30+)</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ArchivePagination

