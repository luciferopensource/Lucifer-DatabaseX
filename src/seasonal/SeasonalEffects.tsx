import React from 'react'
import { isWinterActive, isHalloweenActive } from './seasonalConfig'
import { SnowfallCanvas } from './SnowfallCanvas'
import { HalloweenDecorations } from './HalloweenDecorations'

export const SeasonalEffects: React.FC = () => {
  const showWinter = isWinterActive()
  const showHalloween = isHalloweenActive()

  return (
    <>
      {showWinter && <SnowfallCanvas />}
      {showHalloween && <HalloweenDecorations />}
    </>
  )
}

export default SeasonalEffects

