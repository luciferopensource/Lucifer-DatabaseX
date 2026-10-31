import React, { useState, useEffect } from 'react'
import { SylvaHero } from './components/SylvaHero'
import { LuciferStreamBackup } from './components/LuciferStreamBackup'
import { LuciferStreamBackup2 } from './components/LuciferStreamBackup2'
import { TotalDatabase } from './components/TotalDatabase'
import { SovereignCursor } from './components/SovereignCursor'
import { ArchiveTree } from './components/archive/ArchiveTree'
import { SeasonalEffects } from './seasonal/SeasonalEffects'
import { getAggregatedDatabase } from './data/aggregateDatabase'
import { StorageUnitProvider, useStorageUnit } from './data/storageUnitContext'
import { StorageUnitSelector } from './components/StorageUnitSelector'

export type PageRoute = 'hero' | 'total-database' | 'stream-backup-1' | 'stream-backup-2'

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (window.location.hash === '#total-database') return 'total-database'
    if (window.location.hash === '#stream-backup-2') return 'stream-backup-2'
    if (window.location.hash === '#stream-backup-1') return 'stream-backup-1'
    return 'hero'
  })

  const aggregatedData = getAggregatedDatabase()
  const { formatString } = useStorageUnit()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#total-database') {
        setCurrentPage('total-database')
      } else if (hash === '#stream-backup-2') {
        setCurrentPage('stream-backup-2')
      } else if (hash === '#stream-backup-1') {
        setCurrentPage('stream-backup-1')
      } else {
        setCurrentPage('hero')
      }
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'NAVIGATE') {
        if (event.data.page === 'total-database') {
          window.location.hash = '#total-database'
          setCurrentPage('total-database')
        } else if (event.data.page === 'stream-backup-2') {
          window.location.hash = '#stream-backup-2'
          setCurrentPage('stream-backup-2')
        } else if (event.data.page === 'stream-backup-1') {
          window.location.hash = '#stream-backup-1'
          setCurrentPage('stream-backup-1')
        } else if (event.data.page === 'hero') {
          window.location.hash = ''
          setCurrentPage('hero')
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.overflowY = 'auto'
    document.body.style.overflowY = 'auto'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const handleBackToHero = () => {
    window.location.hash = ''
    setCurrentPage('hero')
  }

  const handleGoToTotalDatabase = () => {
    window.location.hash = '#total-database'
    setCurrentPage('total-database')
  }

  const handleGoToBackup1 = () => {
    window.location.hash = '#stream-backup-1'
    setCurrentPage('stream-backup-1')
  }

  const handleGoToBackup2 = () => {
    window.location.hash = '#stream-backup-2'
    setCurrentPage('stream-backup-2')
  }

  const handleSelectRoute = (route: string) => {
    if (route === 'total-database') {
      handleGoToTotalDatabase()
    } else if (route === 'stream-backup-1') {
      handleGoToBackup1()
    } else if (route === 'stream-backup-2') {
      handleGoToBackup2()
    } else {
      window.location.hash = `#${route}`
    }
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#09090f' }}>
      {/* ── Persistent Sovereign Movie Top Bar ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          background: 'rgba(8, 8, 12, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.32)',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.85)',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          fontFamily: "'Outfit', -apple-system, sans-serif",
        }}
      >
        {/* Left: Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            background: '#2ecc71',
            boxShadow: '0 0 10px #2ecc71',
          }} />
          <span style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1.05rem',
            fontWeight: 800,
            color: '#d4af37',
            letterSpacing: '0.06em',
          }}>
            LUCIFER DATABASE X
          </span>
          <span style={{
            fontSize: '0.7rem',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            color: '#f3e5ab',
            padding: '2px 8px',
            borderRadius: '4px',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}>
            THE LIVING ARCHIVE
          </span>
        </div>

        {/* Center: Navigation Tabs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={handleBackToHero}
            style={{
              background: currentPage === 'hero' ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)' : 'rgba(255, 255, 255, 0.05)',
              color: currentPage === 'hero' ? '#08080c' : '#f3e5ab',
              border: `1px solid ${currentPage === 'hero' ? '#d4af37' : 'rgba(212, 175, 55, 0.25)'}`,
              padding: '7px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
            }}
          >
            <span>🎬 3D Cinema Experience</span>
          </button>

          <button
            onClick={handleGoToTotalDatabase}
            style={{
              background: currentPage === 'total-database' ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)' : 'rgba(212, 175, 55, 0.18)',
              color: currentPage === 'total-database' ? '#08080c' : '#ffffff',
              border: `1px solid ${currentPage === 'total-database' ? '#d4af37' : 'rgba(212, 175, 55, 0.55)'}`,
              padding: '7px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: currentPage === 'total-database' ? '0 0 15px rgba(212, 175, 55, 0.55)' : '0 0 10px rgba(212, 175, 55, 0.25)',
              transition: 'all 0.2s',
            }}
          >
            <span>👑 TOTAL DATABASE</span>
            <span style={{
              background: currentPage === 'total-database' ? '#08080c' : '#d4af37',
              color: currentPage === 'total-database' ? '#d4af37' : '#08080c',
              fontSize: '0.64rem',
              padding: '1px 6px',
              borderRadius: '4px',
              fontWeight: 900,
            }}>
              {formatString(aggregatedData.combinedStorage)}
            </span>
          </button>

          <button
            onClick={handleGoToBackup1}
            style={{
              background: currentPage === 'stream-backup-1' ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)' : 'rgba(212, 175, 55, 0.12)',
              color: currentPage === 'stream-backup-1' ? '#08080c' : '#ffffff',
              border: `1px solid ${currentPage === 'stream-backup-1' ? '#d4af37' : 'rgba(212, 175, 55, 0.4)'}`,
              padding: '7px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
            }}
          >
            <span>📺 Backup 1</span>
            <span style={{
              background: currentPage === 'stream-backup-1' ? '#08080c' : '#2ecc71',
              color: currentPage === 'stream-backup-1' ? '#d4af37' : '#08080c',
              fontSize: '0.64rem',
              padding: '1px 5px',
              borderRadius: '4px',
              fontWeight: 900,
            }}>
              LIVE
            </span>
          </button>

          <button
            onClick={handleGoToBackup2}
            style={{
              background: currentPage === 'stream-backup-2' ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)' : 'rgba(212, 175, 55, 0.12)',
              color: currentPage === 'stream-backup-2' ? '#08080c' : '#ffffff',
              border: `1px solid ${currentPage === 'stream-backup-2' ? '#d4af37' : 'rgba(212, 175, 55, 0.4)'}`,
              padding: '7px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
            }}
          >
            <span>📺 Backup 2</span>
            <span style={{
              background: currentPage === 'stream-backup-2' ? '#08080c' : '#2ecc71',
              color: currentPage === 'stream-backup-2' ? '#d4af37' : '#08080c',
              fontSize: '0.64rem',
              padding: '1px 5px',
              borderRadius: '4px',
              fontWeight: 900,
            }}>
              LIVE
            </span>
          </button>
        </nav>

        {/* Right: Storage Unit Selector & Telemetry */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', flexWrap: 'wrap' }}>
          <StorageUnitSelector compact />
          <span style={{ color: '#2ecc71', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2ecc71' }} />
            {aggregatedData.archiveCount} Channels
          </span>
          <span style={{ color: 'rgba(243, 229, 171, 0.45)' }}>|</span>
          <span style={{ color: '#d4af37', fontWeight: 600 }}>
            {formatString(aggregatedData.combinedStorage)} Volume
          </span>
          <span style={{ color: 'rgba(243, 229, 171, 0.45)' }}>|</span>
          <span style={{ color: '#f3e5ab', fontWeight: 600 }}>{aggregatedData.totalFiles} Assets</span>
        </div>
      </header>

      {/* ── Sovereign Live 3D / WebGL Ambient Layer (Universal Living Backdrop for All Pages) ── */}
      <div
        style={{
          position: 'fixed',
          top: '58px',
          left: 0,
          width: '100vw',
          height: 'calc(100vh - 58px)',
          zIndex: 0,
          pointerEvents: currentPage === 'hero' ? 'auto' : 'none',
          opacity: currentPage === 'hero' ? 1 : 0.88,
          filter: currentPage === 'hero' ? 'none' : 'blur(5px) brightness(0.85) saturate(1.2)',
          transform: 'translateZ(0)',
          transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden',
          background: '#09090f',
        }}
      >
        <SylvaHero
          headingFont="lexend"
          bodyFont="lexend"
          headingWeight="300"
          bodyWeight="300"
          primaryColor="#f3e5ab"
          headingSize={56}
          bodySize={16.5}
          headingLetterSpacing={-0.006}
        />
      </div>

      {/* ── Homepage Living Archive Tree Section (Scroll-driven over 3D Hero) ── */}
      {currentPage === 'hero' && (
        <div style={{ position: 'relative', zIndex: 10 }}>
          {/* Hero Spacer (Allows direct interaction with 3D canvas, with smooth scroll prompt at bottom) */}
          <div
            style={{
              height: 'calc(100vh - 58px)',
              width: '100%',
              pointerEvents: 'none',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingBottom: '28px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                pointerEvents: 'auto',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(8, 8, 14, 0.72)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '30px',
                padding: '8px 20px',
                color: '#f3e5ab',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(212, 175, 55, 0.25)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onClick={() => {
                window.scrollTo({ top: window.innerHeight - 58, behavior: 'smooth' })
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d4af37'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(0, 0, 0, 0.8), 0 0 22px rgba(212, 175, 55, 0.45)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(212, 175, 55, 0.25)'
              }}
            >
              <span style={{ color: '#d4af37' }}>↓</span>
              <span>SCROLL DOWN TO EXPLORE LIVING ARCHIVE TREE</span>
              <span style={{ color: '#d4af37' }}>↓</span>
            </div>
          </div>

          {/* Living Archive Tree with Mac OS frosted glass overlay */}
          <div
            style={{
              position: 'relative',
              background: 'linear-gradient(to bottom, rgba(8, 8, 14, 0.78) 0%, rgba(12, 12, 20, 0.88) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              borderTop: '1px solid rgba(212, 175, 55, 0.35)',
              boxShadow: '0 -25px 60px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
              minHeight: '100vh',
            }}
          >
            <ArchiveTree onSelectRoute={handleSelectRoute} />
          </div>
        </div>
      )}

      {/* ── Total Database Dedicated Root Page ── */}
      {currentPage === 'total-database' && (
        <div
          style={{
            paddingTop: '58px',
            minHeight: 'calc(100vh - 58px)',
            width: '100%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <TotalDatabase onBack={handleBackToHero} onSelectArchive={handleSelectRoute} />
        </div>
      )}

      {/* ── Sovereign Stream Site Backup 1 Page ── */}
      {currentPage === 'stream-backup-1' && (
        <div
          style={{
            paddingTop: '58px',
            minHeight: 'calc(100vh - 58px)',
            width: '100%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <LuciferStreamBackup onBack={handleBackToHero} />
        </div>
      )}

      {/* ── Sovereign Stream Site Backup 2 Page ── */}
      {currentPage === 'stream-backup-2' && (
        <div
          style={{
            paddingTop: '58px',
            minHeight: 'calc(100vh - 58px)',
            width: '100%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <LuciferStreamBackup2 onBack={handleBackToHero} />
        </div>
      )}

      {/* ── Seasonal Effects Layer (Gentle Pure White Snowfall with 96px organic drift + Mini Falling Pumpkins, Ghosts, Skeletons) ── */}
      <SeasonalEffects />

      {/* ── Royal Sovereign Gold Mouse Cursor & Stardust Trail ── */}
      <SovereignCursor />
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <StorageUnitProvider>
      <AppContent />
    </StorageUnitProvider>
  )
}

export default App
