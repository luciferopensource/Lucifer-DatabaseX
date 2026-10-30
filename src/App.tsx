import React from 'react'
import { SylvaHero } from './components/SylvaHero'

export const App: React.FC = () => {
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
