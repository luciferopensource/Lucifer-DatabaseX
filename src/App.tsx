import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MediaExplorer } from './components/MediaExplorer'
import { CollectionShowcase } from './components/CollectionShowcase'
import { SchemaExplorer } from './components/SchemaExplorer'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'
import { MediaDetailModal } from './components/MediaDetailModal'
import { CATALOG_ENTRIES } from './data/catalog'
import { MediaEntry, MediaCategory } from './types/media'

export const App: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState<MediaEntry | null>(null)

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
      <main style={{ flex: 1 }}>
        {/* Cinematic Hero */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Curated Royal Collections */}
        <CollectionShowcase onSelectCategory={handleSelectCategoryFromCollection} />

        {/* Interactive Media Explorer & Filter Matrix */}
        <MediaExplorer
          entries={CATALOG_ENTRIES}
          onSelectEntry={(entry) => setSelectedEntry(entry)}
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
