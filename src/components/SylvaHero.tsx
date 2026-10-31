import React from 'react'
import {
  LandingPageFrame,
  type LandingPageProps,
} from '../shaders/landing-pages/LandingPageFrame'
import {
  splitTypographyProps,
  usePageTypography,
  type PageTypographyProps,
} from '../shaders/landing-pages/pageTypography'
import { SYLVA_TYPOGRAPHY } from '../shaders/landing-pages/pageRecipes'

export type SylvaHeroProps = LandingPageProps & PageTypographyProps

export const SylvaHero: React.FC<SylvaHeroProps> = (props) => {
  const [type, frame] = splitTypographyProps(props)
  const customization = usePageTypography(SYLVA_TYPOGRAPHY, type)

  return (
    <LandingPageFrame
      {...frame}
      customization={customization}
      title="Lucifer Database X — The Sovereign Movie Universe"
      sourceUrl="/landing-pages/inner-green-3d.html?v=lucifer-unified-cursor-v12-fluid-glass"
      style={{
        width: '100vw',
        height: '100vh',
        border: 0,
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        background: '#09090f',
        ...frame.style,
      }}
    />
  )
}

export default SylvaHero

