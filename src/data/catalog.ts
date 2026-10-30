import { MediaEntry, MediaCategory } from '../types/media'

export interface CollectionPreset {
  id: string
  title: string
  description: string
  coverImage: string
  badge: string
  itemCount: number
  filterCategory: MediaCategory
}

/**
 * Curated Collection Presets
 * Empty by default — populated strictly from truthful live backend queries.
 */
export const COLLECTION_PRESETS: CollectionPreset[] = []

/**
 * Sovereign Media Catalog Entries
 * Zero fake records — populated strictly through verified fleet synchronisation.
 */
export const CATALOG_ENTRIES: MediaEntry[] = []
