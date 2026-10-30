import React, { useState, useEffect } from 'react'
import { SylvaHero } from './components/SylvaHero'
import { LuciferStreamBackup } from './components/LuciferStreamBackup'

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

  const handleBackToHero = () => {
    window.location.hash = ''
    setCurrentPage('hero')
  }

  if (currentPage === 'stream-backup-1') {
    return <LuciferStreamBackup onBack={handleBackToHero} />
  }

  return (
    <div
      className="sylva-app-container"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        background: '#09090f',
      }}
    >
      <SylvaHero
        headingFont="lexend"
        bodyFont="lexend"
        headingWeight="300"
        bodyWeight="300"
        primaryColor="#f3e5ab"
        headingSize={63}
        bodySize={16.5}
        headingLetterSpacing={-0.006}
      />
    </div>
  )
}

export default App
