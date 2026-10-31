import React, { useState } from 'react'
import { getPaginatedArchives } from '../../data/archiveRegistry'
import { getAggregatedDatabase } from '../../data/aggregateDatabase'
import { ArchiveRootNode } from './ArchiveRootNode'
import { ArchiveConnector } from './ArchiveConnector'
import { ArchiveNode } from './ArchiveNode'
import { ArchivePagination } from './ArchivePagination'
import { StorageUnitSelector } from '../StorageUnitSelector'

interface ArchiveTreeProps {
  onSelectRoute: (route: string) => void
}

export const ArchiveTree: React.FC<ArchiveTreeProps> = ({ onSelectRoute }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 30

  const pagination = getPaginatedArchives(currentPage, pageSize)
  const aggregatedData = getAggregatedDatabase()

  return (
    <section
      aria-label="Sovereign Archive Tree Ecosystem"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px 100px',
        boxSizing: 'border-box',
      }}
    >
      {/* ── Section Title & Atmosphere ── */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.78rem',
            fontWeight: 800,
            color: '#d4af37',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          SOVEREIGN TELEGRAM INTELLIGENCE NETWORK
        </div>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '2.4rem',
            fontWeight: 900,
            color: '#ffffff',
            margin: '0 0 12px 0',
            letterSpacing: '0.04em',
          }}
        >
          LIVING ARCHIVE TREE
        </h2>
        <p
          style={{
            color: 'rgba(243, 229, 171, 0.75)',
            fontSize: '1rem',
            maxWidth: '640px',
            margin: '0 auto 20px',
            lineHeight: 1.6,
          }}
        >
          Explore the sovereign multi-channel network. Scroll down to inspect individual stream backup channel vaults branching from the central Total Database core.
        </p>

        {/* Global Storage Unit Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
          <StorageUnitSelector />
        </div>
      </div>

      {/* ── 1. The Majestic Root Archive Node ── */}
      <ArchiveRootNode
        aggregatedData={aggregatedData}
        onSelectRoot={() => onSelectRoute('total-database')}
      />

      {/* ── 2. The Living Tree Branches & Spine ── */}
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Animated Central Spine */}
        <ArchiveConnector />

        {/* Alternating Archive Nodes */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {pagination.archives.map((archive, index) => {
            const globalIndex = (pagination.currentPage - 1) * pageSize + index + 1
            const position = globalIndex % 2 === 1 ? 'right' : 'left'

            return (
              <ArchiveNode
                key={archive.id}
                archive={archive}
                position={position}
                onSelect={(route) => onSelectRoute(route)}
              />
            )
          })}
        </div>
      </div>

      {/* ── 3. Archive Network Pagination (Scalable for 30+ Channels) ── */}
      <ArchivePagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        totalArchives={pagination.totalArchives}
        startRange={pagination.startRange}
        endRange={pagination.endRange}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  )
}

export default ArchiveTree
