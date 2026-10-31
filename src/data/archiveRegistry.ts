/**
 * Central Archive Registry — Lucifer Database X
 * Authoritative Registry of all Sovereign Telegram Stream Channel Archives.
 * Supports dynamic addition of 30+ future channels without rewriting page logic.
 */

import { ArchiveRecord, ArchivePaginationState } from './archiveSchemas'
import { BACKUP_1_DATASET } from './channelIntelligenceData'
import { BACKUP_2_DATASET } from './channelIntelligenceDataBackup2'

export const REGISTERED_ARCHIVES: ArchiveRecord[] = [
  {
    id: 'archive-001',
    sequence: 1,
    displayName: 'Lucifer Stream Site Backup 1',
    route: 'stream-backup-1',
    channelId: '-1004300598114',
    scanId: 'LMS-4D8E-6C2A',
    completedDate: '27 Oct 2026',
    scanner: 'Scanner-Node-01',
    status: 'COMPLETE',
    reportVersion: 'Archive X v1.0.0',
    dataset: BACKUP_1_DATASET,
    totalFiles: '999,973',
    combinedStorage: '945.67 TB',
    messagesChecked: '999,977',
    largestFile: {
      size: '3.91 GB',
      name: '5_Captain_America_The_First_A…',
    },
    numericStorageTB: 945.67,
    numericFiles: 999973,
    numericMessages: 999977,
    accentColor: '#d4af37',
    isPublic: true,
  },
  {
    id: 'archive-002',
    sequence: 2,
    displayName: 'Lucifer Stream Site Backup 2',
    route: 'stream-backup-2',
    channelId: '-1004400619740',
    scanId: 'LMS-94E3-7DE1',
    completedDate: '27 Oct 2026',
    scanner: 'Scanner-Node-01',
    status: 'COMPLETE',
    reportVersion: 'Archive X v1.0.0',
    dataset: BACKUP_2_DATASET,
    totalFiles: '948,110',
    combinedStorage: '708.57 TB',
    messagesChecked: '948,114',
    largestFile: {
      size: '3.91 GB',
      name: 'The.Matrix.1999.iNTERNAL.REMA…',
    },
    numericStorageTB: 708.57,
    numericFiles: 948110,
    numericMessages: 948114,
    accentColor: '#2ecc71',
    isPublic: true,
  },
]

/**
 * Returns all active registered archives.
 */
export function getAllArchives(): ArchiveRecord[] {
  return REGISTERED_ARCHIVES.filter((archive) => archive.isPublic)
}

/**
 * Retrieves a registered archive by its stable ID.
 */
export function getArchiveById(id: string): ArchiveRecord | undefined {
  return REGISTERED_ARCHIVES.find((archive) => archive.id === id)
}

/**
 * Retrieves a registered archive by its navigation route.
 */
export function getArchiveByRoute(route: string): ArchiveRecord | undefined {
  return REGISTERED_ARCHIVES.find((archive) => archive.route === route)
}

/**
 * Paginates registered archives in groups of 30 (or custom size)
 * for the homepage Archive Tree.
 */
export function getPaginatedArchives(
  page: number = 1,
  pageSize: number = 30,
  sourceList: ArchiveRecord[] = getAllArchives()
): ArchivePaginationState {
  const totalArchives = sourceList.length
  const totalPages = Math.max(1, Math.ceil(totalArchives / pageSize))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const startIndex = (safePage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, totalArchives)
  const archives = sourceList.slice(startIndex, endIndex)

  return {
    currentPage: safePage,
    pageSize,
    totalArchives,
    totalPages,
    startRange: totalArchives === 0 ? 0 : startIndex + 1,
    endRange: endIndex,
    archives,
  }
}

