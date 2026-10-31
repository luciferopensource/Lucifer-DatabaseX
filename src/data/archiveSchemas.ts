/**
 * Sovereign Archive Schemas & Interfaces — Lucifer Database X
 * Living Archive System
 */

import { ChannelIntelligenceDataset } from './channelIntelligenceData'

export type ArchiveScanStatus = 'COMPLETE' | 'VERIFIED' | 'CACHED' | 'PARTIAL' | 'UNAVAILABLE'

export interface ArchiveRecord {
  id: string
  sequence: number
  displayName: string
  route: string
  channelId?: string
  scanId: string
  completedDate: string
  scanner: string
  status: ArchiveScanStatus
  reportVersion: string
  dataset: ChannelIntelligenceDataset
  totalFiles: string
  combinedStorage: string
  messagesChecked: string
  largestFile: {
    size: string
    name: string
  }
  numericStorageTB: number
  numericFiles: number
  numericMessages: number
  accentColor?: string
  isPublic: boolean
}

export interface ArchivePaginationState {
  currentPage: number
  pageSize: number
  totalArchives: number
  totalPages: number
  startRange: number
  endRange: number
  archives: ArchiveRecord[]
}

