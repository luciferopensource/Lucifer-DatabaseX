import React, { useState, useEffect } from 'react'
import { SylvaHero } from './components/SylvaHero'
import { LuciferStreamBackup } from './components/LuciferStreamBackup'
import { SovereignCursor } from './components/SovereignCursor'

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'hero' | 'stream-backup-1'>(() => {
    return window.location.hash === '#stream-backup-1' ? 'stream-backup-1' : 'hero'
  })

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#stream-backup-1') {
        setCurrentPage('stream-backup-1')
      } else {
        setCurrentPage('hero')
      }
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'NAVIGATE') {
        if (event.data.page === 'stream-backup-1') {
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
    if (currentPage === 'stream-backup-1') {
      document.documentElement.style.overflowY = 'auto'
      document.body.style.overflowY = 'auto'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.documentElement.style.overflowY = 'hidden'
      document.body.style.overflowY = 'hidden'
    }
  }, [currentPage])

  const handleBackToHero = () => {
    window.location.hash = ''
    setCurrentPage('hero')
  }

  const handleGoToBackup1 = () => {
    window.location.hash = '#stream-backup-1'
    setCurrentPage('stream-backup-1')
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
            MOVIE PLATFORM
          </span>
        </div>

        {/* Center: Navigation Tabs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={handleBackToHero}
            style={{
              background: currentPage === 'hero' ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)' : 'rgba(255, 255, 255, 0.05)',
              color: currentPage === 'hero' ? '#08080c' : '#f3e5ab',
              border: `1px solid ${currentPage === 'hero' ? '#d4af37' : 'rgba(212, 175, 55, 0.25)'}`,
              padding: '7px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.84rem',
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
            onClick={handleGoToBackup1}
            style={{
              background: currentPage === 'stream-backup-1' ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)' : 'rgba(212, 175, 55, 0.18)',
              color: currentPage === 'stream-backup-1' ? '#08080c' : '#ffffff',
              border: `1px solid ${currentPage === 'stream-backup-1' ? '#d4af37' : 'rgba(212, 175, 55, 0.5)'}`,
              padding: '7px 18px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.84rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: currentPage === 'stream-backup-1' ? '0 0 15px rgba(212, 175, 55, 0.5)' : '0 0 10px rgba(212, 175, 55, 0.25)',
              transition: 'all 0.2s',
            }}
          >
            <span>📺 Lucifer Stream Site Backup 1</span>
            <span style={{
              background: currentPage === 'stream-backup-1' ? '#08080c' : '#2ecc71',
              color: currentPage === 'stream-backup-1' ? '#d4af37' : '#08080c',
              fontSize: '0.66rem',
              padding: '1px 6px',
              borderRadius: '4px',
              fontWeight: 900,
            }}>
              LIVE
            </span>
          </button>
        </nav>

        {/* Right: Telemetry & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.78rem' }}>
          <span style={{ color: '#2ecc71', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2ecc71' }} />
            16/16 Mirrors Online
          </span>
          <span style={{ color: 'rgba(243, 229, 171, 0.45)' }}>|</span>
          <span style={{ color: '#d4af37', fontWeight: 600 }}>264,560 4K Assets</span>
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
          zIndex: currentPage === 'hero' ? 2 : 0,
          pointerEvents: currentPage === 'hero' ? 'auto' : 'none',
          opacity: currentPage === 'hero' ? 1 : 0.92,
          filter: currentPage === 'hero' ? 'none' : 'blur(5px) brightness(0.92) saturate(1.22)',
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

      {/* ── Sovereign Page Foreground (Only Mounted When Active) ── */}
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
          <div style={{ width: '100%', minHeight: 'calc(100vh - 58px)' }}>
            <LuciferStreamBackup onBack={handleBackToHero} />
          </div>
        </div>
      )}

      {/* ── Royal Sovereign Gold Mouse Cursor & Stardust Trail ── */}
      <SovereignCursor />
    </div>
  )
}

export default App
