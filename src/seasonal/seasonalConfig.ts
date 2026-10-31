/**
 * Seasonal Experience Engine Configuration — Lucifer Database X
 * Manages active seasonal themes with strict date boundaries and timezone awareness.
 *
 * Primary Timezone: Asia/Kolkata (+05:30)
 * Halloween Rule: Active from initial deployment through 30 November 2026 (23:59:59 +05:30).
 *                 Automatically disabled on 1 December 2026 (00:00:00 +05:30).
 * Winter Rule:    Active alongside Halloween and persists into winter.
 */

export interface SeasonalThemeState {
  isHalloween: boolean
  isWinter: boolean
  snowAccumulationCeilingPx: number
  currentTimezone: string
  currentDateFormatted: string
}

/**
 * Parses the current time in the Asia/Kolkata timezone.
 */
export function getKolkataTime(customDate?: Date): Date {
  const baseDate = customDate || new Date()
  // Format string in Asia/Kolkata and parse back to Date
  const kolkataString = baseDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
  return new Date(kolkataString)
}

/**
 * Checks whether the Halloween theme is active.
 * Active until 30 November 2026, 23:59:59 IST.
 * Disables automatically on 1 December 2026, 00:00:00 IST.
 */
export function isHalloweenActive(customDate?: Date): boolean {
  const kolkataNow = getKolkataTime(customDate)
  // Expiry cutoff: 1 December 2026 00:00:00 IST
  const expiryDate = new Date('2026-12-01T00:00:00+05:30')
  return kolkataNow.getTime() < expiryDate.getTime()
}

/**
 * Checks whether the Winter theme (snowfall) is active.
 * Coexists with Halloween initially and remains active.
 */
export function isWinterActive(_customDate?: Date): boolean {
  return true
}

/**
 * Maximum snow accumulation ceiling in CSS pixels:
 * Exactly 1 CSS inch = 96 CSS pixels.
 */
export const SNOW_ACCUMULATION_CEILING_PX = 96

/**
 * Returns current snapshot of all seasonal states.
 */
export function getSeasonalThemeState(customDate?: Date): SeasonalThemeState {
  const kolkataNow = getKolkataTime(customDate)
  return {
    isHalloween: isHalloweenActive(customDate),
    isWinter: isWinterActive(customDate),
    snowAccumulationCeilingPx: SNOW_ACCUMULATION_CEILING_PX,
    currentTimezone: 'Asia/Kolkata',
    currentDateFormatted: kolkataNow.toISOString(),
  }
}

