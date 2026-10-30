import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MediaExplorer } from './components/MediaExplorer'
import { CollectionShowcase } from './components/CollectionShowcase'
import { SourceCitadels } from './components/SourceCitadels'
import { SchemaExplorer } from './components/SchemaExplorer'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'
import { MediaDetailModal } from './components/MediaDetailModal'
import { CATALOG_ENTRIES } from './data/catalog'
import { MediaEntry, MediaCategory, SourceCitadelType } from './types/media'

export const App: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState<MediaEntry | null>(null)
  const [selectedCitadel, setSelectedCitadel] = useState<'All' | SourceCitadelType>('All')
  const [explorerSearchQuery, setExplorerSearchQuery] = useState<string>('')

  const handleSearchClick = () => {
    const searchInput = document.getElementById('catalog-search-input')
    const explorerSection = document.getElementById('explorer')
    if (explorerSection) {
      explorerSection.scrollIntoView({ behavior: 'smooth' })
    }
    if (searchInput) {
      setTimeout(() => {
        searchInput.focus()
      }, 300)
    }
  }

  const handleExploreClick = () => {
    const explorerSection = document.getElementById('explorer')
    if (explorerSection) {
      explorerSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSourcesClick = () => {
    const sourcesSection = document.getElementById('sources')
    if (sourcesSection) {
      sourcesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectCitadel = (citadel: SourceCitadelType | 'All') => {
    setSelectedCitadel(citadel)
    if (citadel !== 'All') {
      setExplorerSearchQuery(citadel)
      const explorerSection = document.getElementById('explorer')
      if (explorerSection) {
        explorerSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      setExplorerSearchQuery('')
    }
  }

  const handleSelectCategoryFromCollection = (_category: MediaCategory) => {
    const explorerSection = document.getElementById('explorer')
    if (explorerSection) {
      explorerSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="lucifer-database-x-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Royal Fixed Navbar */}
      <Navbar onSearchClick={handleSearchClick} />

      {/* Main Sections */}
      <main style={{ flex: 1, width: '100%', minWidth: 0 }}>
        {/* Cinematic Hero with 3D WebGL ThreePortalField */}
        <Hero onExploreClick={handleExploreClick} onSourcesClick={handleSourcesClick} />

        {/* 16 Autonomous Scraper Citadels & Fleet Architecture */}
        <SourceCitadels
          activeCitadel={selectedCitadel}
          onSelectCitadel={handleSelectCitadel}
        />

        {/* Curated Royal Collections */}
        <CollectionShowcase onSelectCategory={handleSelectCategoryFromCollection} />

        {/* Interactive Media Explorer & Filter Matrix */}
        <MediaExplorer
          entries={CATALOG_ENTRIES}
          onSelectEntry={(entry) => setSelectedEntry(entry)}
          initialSearchQuery={explorerSearchQuery}
        />

        {/* Architectural Schema Explorer */}
        <SchemaExplorer />

        {/* Archival Mission & Monorepo Integration */}
        <AboutSection />
      </main>

      {/* Royal Footer */}
      <Footer />

      {/* Technical Spec Inspector Modal */}
      <MediaDetailModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
    </div>
  )
}

export default App
