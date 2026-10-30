import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SourceCitadels } from './components/SourceCitadels'
import { SchemaExplorer } from './components/SchemaExplorer'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'
import { SourceCitadelType } from './types/media'

export const App: React.FC = () => {
  const [selectedCitadel, setSelectedCitadel] = useState<'All' | SourceCitadelType>('All')

  const handleSourcesClick = () => {
    const sourcesSection = document.getElementById('sources')
    if (sourcesSection) {
      sourcesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectCitadel = (citadel: SourceCitadelType | 'All') => {
    setSelectedCitadel(citadel)
  }

  return (
    <div className="lucifer-database-x-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Royal Fixed Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main style={{ flex: 1, width: '100%', minWidth: 0 }}>
        {/* Cinematic Hero with 3D WebGL ThreePortalField */}
        <Hero onSourcesClick={handleSourcesClick} />

        {/* 16 Autonomous Scraper Citadels & Fleet Architecture */}
        <SourceCitadels
          activeCitadel={selectedCitadel}
          onSelectCitadel={handleSelectCitadel}
        />

        {/* Architectural Schema Explorer */}
        <SchemaExplorer />

        {/* Archival Mission & Monorepo Integration */}
        <AboutSection />
      </main>

      {/* Royal Footer */}
      <Footer />
    </div>
  )
}

export default App
