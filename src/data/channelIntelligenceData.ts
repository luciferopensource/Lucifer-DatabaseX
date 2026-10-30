/**
 * Sovereign Channel Intelligence Dataset — Lucifer Stream Site Backup 1
 * Source: docs/reports/Lucifer-Stream-Site-Backup-1-Source-Reports.txt
 * Authoritative Archive X Engine Audit — 27 Oct 2026
 *
 * Strictly authentic: No fabricated metrics, no inferred data, no omitted pages.
 */

export interface ReportTarget {
  name: string
  channelId: string
  scanner: string
  scanId: string
  completedDate: string
  status: string
  reportVersion: string
  intelligenceEngine: string
}

export interface ScanSummary {
  messagesChecked: string
  totalFilesFound: string
  combinedSize: string
  scanDuration: string
  scannerWorker: string
  scanIntegrity: string
}

export interface CategoryBreakdownItem {
  id: string
  icon: string
  category: string
  files: string
  storage: string
  percentage: string
  rawBytesEstimate?: string
}

export interface DataIntegrityItem {
  key: string
  status: string
  verified: boolean
}

export interface ScanRecord {
  scanId: string
  completed: string
  status: string
  databaseCache: 'CACHED' | 'SAVED'
  reportVersion: string
}

export interface ResolutionItem {
  id: string
  label: string
  tag: string
  files: string
  storage: string
  percentage: string
  numericPercentage: number
  color: string
}

export interface StorageHighlights {
  largestFileSize: string
  largestFileName: string
  averageFileSize: string
  totalFiles: string
  totalStorage: string
}

export interface ExtensionRecord {
  extension: string
  files: string
  numericFiles: number
  storage: string
  category: 'Video' | 'Audio' | 'Subtitle' | 'Archive' | 'Document' | 'Image' | 'Software' | 'Other / Unknown'
  page: number
}

// ─────────────────────────────────────────────────────────────────────────────
// AUTHENTIC REPORT METADATA & CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────

export const TARGET_INFO: ReportTarget = {
  name: 'Lucifer Stream Site 1 Backup',
  channelId: '-1004300598114',
  scanner: 'Scanner-Node-01',
  scanId: 'LMS-4D0E-6C2A',
  completedDate: '27 Oct 2026',
  status: 'COMPLETE',
  reportVersion: 'Archive X v1.0.0',
  intelligenceEngine: 'Media Intelligence Core'
}

export const SCAN_SUMMARY: ScanSummary = {
  messagesChecked: '999,977',
  totalFilesFound: '999,973',
  combinedSize: '945.67 TB',
  scanDuration: '2h 52m 25s',
  scannerWorker: 'Scanner-Node-01',
  scanIntegrity: 'VERIFIED'
}

export const CATEGORY_BREAKDOWN: CategoryBreakdownItem[] = [
  {
    id: 'cat-video',
    icon: 'Film',
    category: 'Videos & Media',
    files: '996,153',
    storage: '941.41 TB',
    percentage: '99.5%'
  },
  {
    id: 'cat-split',
    icon: 'Layers',
    category: 'Split Parts / Volumes',
    files: '1,376',
    storage: '3.77 TB',
    percentage: '0.4%'
  },
  {
    id: 'cat-archive',
    icon: 'Archive',
    category: 'Archives & Compressed',
    files: '447',
    storage: '476.49 GB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-doc',
    icon: 'FileText',
    category: 'Documents & Text',
    files: '1,718',
    storage: '12.10 GB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-audio',
    icon: 'Music',
    category: 'Audio & Music',
    files: '124',
    storage: '2.55 GB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-photo',
    icon: 'Image',
    category: 'Photos & Graphics',
    files: '55',
    storage: '20.58 MB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-software',
    icon: 'Cpu',
    category: 'Software & Applications',
    files: '37',
    storage: '4.09 GB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-other',
    icon: 'Paperclip',
    category: 'Other Files',
    files: '63',
    storage: '13.02 GB',
    percentage: '<0.1%'
  }
]

export const DATA_INTEGRITY_AUDIT: DataIntegrityItem[] = [
  { key: 'MESSAGE INDEX', status: 'VERIFIED', verified: true },
  { key: 'FILE TOTALS', status: 'VERIFIED', verified: true },
  { key: 'STORAGE TOTALS', status: 'VERIFIED', verified: true },
  { key: 'CATEGORY DISTRIBUTION', status: 'VERIFIED', verified: true },
  { key: 'DATABASE RECORD', status: 'SYNCHRONIZED', verified: true },
  { key: 'CHECKPOINT', status: 'COMMITTED', verified: true }
]

export const CHANNEL_ANALYSIS_SCAN_RECORD: ScanRecord = {
  scanId: 'LMS-4D0E-6C2A',
  completed: '27 Oct 2026',
  status: 'COMPLETE',
  databaseCache: 'CACHED',
  reportVersion: 'Archive X v1.0.0'
}

// ─────────────────────────────────────────────────────────────────────────────
// RESOLUTION INTELLIGENCE DATA
// ─────────────────────────────────────────────────────────────────────────────

export const RESOLUTION_BREAKDOWN: ResolutionItem[] = [
  {
    id: 'res-4k',
    label: '2160p / 4K',
    tag: 'Ultra High Definition',
    files: '13,395',
    storage: '27.45 TB',
    percentage: '2.9%',
    numericPercentage: 2.9,
    color: '#d4af37'
  },
  {
    id: 'res-2k',
    label: '1440p / 2K',
    tag: 'Quad High Definition',
    files: '925',
    storage: '942.82 GB',
    percentage: '<0.1%',
    numericPercentage: 0.1,
    color: '#f3e5ab'
  },
  {
    id: 'res-fhd',
    label: '1080p / FHD',
    tag: 'Full High Definition',
    files: '305,633',
    storage: '458.92 TB',
    percentage: '48.5%',
    numericPercentage: 48.5,
    color: '#3498db'
  },
  {
    id: 'res-hd',
    label: '720p / HD',
    tag: 'Standard High Definition',
    files: '457,577',
    storage: '379.80 TB',
    percentage: '40.2%',
    numericPercentage: 40.2,
    color: '#2ecc71'
  },
  {
    id: 'res-576p',
    label: '576p / SD',
    tag: 'Standard PAL Definition',
    files: '16,500',
    storage: '7.05 TB',
    percentage: '0.7%',
    numericPercentage: 0.7,
    color: '#9b59b6'
  },
  {
    id: 'res-480p',
    label: '480p / SD',
    tag: 'Standard NTSC Definition',
    files: '134,252',
    storage: '51.71 TB',
    percentage: '5.5%',
    numericPercentage: 5.5,
    color: '#e67e22'
  },
  {
    id: 'res-360p',
    label: '360p / Low',
    tag: 'Low Definition Mobile',
    files: '25,918',
    storage: '5.94 TB',
    percentage: '0.6%',
    numericPercentage: 0.6,
    color: '#e74c3c'
  },
  {
    id: 'res-240p',
    label: '240p / Low',
    tag: 'Minimal Bandwidth Stream',
    files: '12,892',
    storage: '3.64 TB',
    percentage: '0.4%',
    numericPercentage: 0.4,
    color: '#95a5a6'
  },
  {
    id: 'res-other',
    label: 'Other / Audio / Archives',
    tag: 'Non-Visual & Multi-Part Streams',
    files: '32,881',
    storage: '10.23 TB',
    percentage: '1.1%',
    numericPercentage: 1.1,
    color: '#7f8c8d'
  }
]

export const RESOLUTION_SCAN_RECORD: ScanRecord = {
  scanId: 'LMS-4D0E-6C2A',
  completed: '27 Oct 2026',
  status: 'COMPLETE',
  databaseCache: 'SAVED',
  reportVersion: 'Archive X v1.0.0'
}

// ─────────────────────────────────────────────────────────────────────────────
// STORAGE HIGHLIGHTS DATA
// ─────────────────────────────────────────────────────────────────────────────

export const STORAGE_HIGHLIGHTS: StorageHighlights = {
  largestFileSize: '3.91 GB',
  largestFileName: '5_Captain_America_The_First_A…',
  averageFileSize: '991.64 MB',
  totalFiles: '999,973',
  totalStorage: '945.67 TB'
}

export const STORAGE_SCAN_RECORD: ScanRecord = {
  scanId: 'LMS-4D0E-6C2A',
  completed: '27 Oct 2026',
  status: 'COMPLETE',
  databaseCache: 'SAVED',
  reportVersion: 'Archive X v1.0.0'
}

// ─────────────────────────────────────────────────────────────────────────────
// FILE EXTENSION REPORT DATA (ALL 7 PAGES — 364 UNIQUE EXTENSIONS)
// ─────────────────────────────────────────────────────────────────────────────

export const EXTENSION_SUMMARY = {
  totalFilesAnalysed: '999,973',
  uniqueExtensions: 364,
  totalAnalysedStorage: '945.67 TB'
}

export const EXTENSION_RECORDS: ExtensionRecord[] = [
  // ── PAGE 1: Video, Audio, Subtitle, Archive (part 1) ──
  { extension: '.mkv', files: '857,037', numericFiles: 857037, storage: '873.35 TB', category: 'Video', page: 1 },
  { extension: '.mp4', files: '125,312', numericFiles: 125312, storage: '60.53 TB', category: 'Video', page: 1 },
  { extension: '.avi', files: '3,606', numericFiles: 3606, storage: '2.17 TB', category: 'Video', page: 1 },
  { extension: '.m4v', files: '383', numericFiles: 383, storage: '141.81 GB', category: 'Video', page: 1 },
  { extension: '.webm', files: '141', numericFiles: 141, storage: '90.73 GB', category: 'Video', page: 1 },
  { extension: '.ts', files: '51', numericFiles: 51, storage: '29.78 GB', category: 'Video', page: 1 },
  { extension: '.mpv', files: '17', numericFiles: 17, storage: '9.57 GB', category: 'Video', page: 1 },
  { extension: '.wmv', files: '15', numericFiles: 15, storage: '3.91 GB', category: 'Video', page: 1 },
  { extension: '.264', files: '7', numericFiles: 7, storage: '7.58 GB', category: 'Video', page: 1 },
  { extension: '.265', files: '6', numericFiles: 6, storage: '10.23 GB', category: 'Video', page: 1 },
  { extension: '.m2ts', files: '4', numericFiles: 4, storage: '2.79 GB', category: 'Video', page: 1 },
  { extension: '.mov', files: '4', numericFiles: 4, storage: '3.57 GB', category: 'Video', page: 1 },
  { extension: '.flv', files: '2', numericFiles: 2, storage: '370.37 MB', category: 'Video', page: 1 },
  { extension: '.divx', files: '1', numericFiles: 1, storage: '229.29 MB', category: 'Video', page: 1 },
  { extension: '.mpg', files: '1', numericFiles: 1, storage: '1.19 GB', category: 'Video', page: 1 },

  { extension: '.m4a', files: '72', numericFiles: 72, storage: '486.94 MB', category: 'Audio', page: 1 },
  { extension: '.mp3', files: '40', numericFiles: 40, storage: '409.62 MB', category: 'Audio', page: 1 },
  { extension: '.ac3', files: '4', numericFiles: 4, storage: '1.08 GB', category: 'Audio', page: 1 },
  { extension: '.ogg', files: '3', numericFiles: 3, storage: '137.89 MB', category: 'Audio', page: 1 },
  { extension: '.amr', files: '2', numericFiles: 2, storage: '16.18 MB', category: 'Audio', page: 1 },
  { extension: '.eac3', files: '2', numericFiles: 2, storage: '490.23 MB', category: 'Audio', page: 1 },
  { extension: '.mka', files: '2', numericFiles: 2, storage: '636.47 MB', category: 'Audio', page: 1 },

  { extension: '.srt', files: '885', numericFiles: 885, storage: '56.96 MB', category: 'Subtitle', page: 1 },
  { extension: '.vtt', files: '85', numericFiles: 85, storage: '7.76 MB', category: 'Subtitle', page: 1 },
  { extension: '.idx', files: '11', numericFiles: 11, storage: '883.46 KB', category: 'Subtitle', page: 1 },
  { extension: '.ass', files: '4', numericFiles: 4, storage: '276.31 KB', category: 'Subtitle', page: 1 },
  { extension: '.sub', files: '4', numericFiles: 4, storage: '3.67 MB', category: 'Subtitle', page: 1 },
  { extension: '.smi', files: '1', numericFiles: 1, storage: '92.13 KB', category: 'Subtitle', page: 1 },

  { extension: '.001', files: '336', numericFiles: 336, storage: '1.25 TB', category: 'Archive', page: 1 },
  { extension: '.002', files: '332', numericFiles: 332, storage: '788.93 GB', category: 'Archive', page: 1 },
  { extension: '.zip', files: '177', numericFiles: 177, storage: '182.01 GB', category: 'Archive', page: 1 },
  { extension: '.003', files: '114', numericFiles: 114, storage: '295.10 GB', category: 'Archive', page: 1 },
  { extension: '.004', files: '63', numericFiles: 63, storage: '197.77 GB', category: 'Archive', page: 1 },
  { extension: '.rar', files: '61', numericFiles: 61, storage: '94.96 GB', category: 'Archive', page: 1 },
  { extension: '.005', files: '47', numericFiles: 47, storage: '149.17 GB', category: 'Archive', page: 1 },
  { extension: '.006', files: '35', numericFiles: 35, storage: '118.55 GB', category: 'Archive', page: 1 },
  { extension: '.007', files: '32', numericFiles: 32, storage: '101.29 GB', category: 'Archive', page: 1 },
  { extension: '.008', files: '28', numericFiles: 28, storage: '80.93 GB', category: 'Archive', page: 1 },
  { extension: '.009', files: '22', numericFiles: 22, storage: '66.36 GB', category: 'Archive', page: 1 },
  { extension: '.011', files: '22', numericFiles: 22, storage: '67.78 GB', category: 'Archive', page: 1 },
  { extension: '.012', files: '20', numericFiles: 20, storage: '62.50 GB', category: 'Archive', page: 1 },
  { extension: '.010', files: '19', numericFiles: 19, storage: '60.55 GB', category: 'Archive', page: 1 },
  { extension: '.013', files: '19', numericFiles: 19, storage: '57.17 GB', category: 'Archive', page: 1 },
  { extension: '.014', files: '17', numericFiles: 17, storage: '43.86 GB', category: 'Archive', page: 1 },
  { extension: '.015', files: '15', numericFiles: 15, storage: '41.71 GB', category: 'Archive', page: 1 },
  { extension: '.016', files: '14', numericFiles: 14, storage: '36.52 GB', category: 'Archive', page: 1 },
  { extension: '.017', files: '11', numericFiles: 11, storage: '28.13 GB', category: 'Archive', page: 1 },
  { extension: '.018', files: '10', numericFiles: 10, storage: '25.39 GB', category: 'Archive', page: 1 },
  { extension: '.019', files: '10', numericFiles: 10, storage: '22.99 GB', category: 'Archive', page: 1 },
  { extension: '.020', files: '9', numericFiles: 9, storage: '13.88 GB', category: 'Archive', page: 1 },
  { extension: '.part1.rar', files: '9', numericFiles: 9, storage: '13.86 GB', category: 'Archive', page: 1 },

  // ── PAGE 2: Archive (cont.), Documents, Images ──
  { extension: '.part2.rar', files: '9', numericFiles: 9, storage: '13.19 GB', category: 'Archive', page: 2 },
  { extension: '.part3.rar', files: '8', numericFiles: 8, storage: '10.22 GB', category: 'Archive', page: 2 },
  { extension: '.021', files: '7', numericFiles: 7, storage: '13.67 GB', category: 'Archive', page: 2 },
  { extension: '.022', files: '7', numericFiles: 7, storage: '13.67 GB', category: 'Archive', page: 2 },
  { extension: '.023', files: '7', numericFiles: 7, storage: '13.67 GB', category: 'Archive', page: 2 },
  { extension: '.024', files: '7', numericFiles: 7, storage: '13.15 GB', category: 'Archive', page: 2 },
  { extension: '.part4.rar', files: '6', numericFiles: 6, storage: '8.08 GB', category: 'Archive', page: 2 },
  { extension: '.025', files: '5', numericFiles: 5, storage: '9.77 GB', category: 'Archive', page: 2 },
  { extension: '.026', files: '5', numericFiles: 5, storage: '9.77 GB', category: 'Archive', page: 2 },
  { extension: '.027', files: '5', numericFiles: 5, storage: '9.77 GB', category: 'Archive', page: 2 },
  { extension: '.z02', files: '5', numericFiles: 5, storage: '9.41 GB', category: 'Archive', page: 2 },
  { extension: '.028', files: '4', numericFiles: 4, storage: '7.81 GB', category: 'Archive', page: 2 },
  { extension: '.029', files: '4', numericFiles: 4, storage: '7.81 GB', category: 'Archive', page: 2 },
  { extension: '.030', files: '4', numericFiles: 4, storage: '6.98 GB', category: 'Archive', page: 2 },
  { extension: '.2023', files: '4', numericFiles: 4, storage: '2.11 GB', category: 'Archive', page: 2 },
  { extension: '.part01.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part02.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part03.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part04.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part05.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part06.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part07.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part08.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part09.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part10.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part11.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part12.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part13.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part14.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part15.rar', files: '4', numericFiles: 4, storage: '6.00 GB', category: 'Archive', page: 2 },
  { extension: '.part16.rar', files: '4', numericFiles: 4, storage: '4.69 GB', category: 'Archive', page: 2 },
  { extension: '.part5.rar', files: '4', numericFiles: 4, storage: '4.39 GB', category: 'Archive', page: 2 },
  { extension: '.031', files: '3', numericFiles: 3, storage: '2.83 GB', category: 'Archive', page: 2 },
  { extension: '.part17.rar', files: '3', numericFiles: 3, storage: '4.50 GB', category: 'Archive', page: 2 },
  { extension: '.part18.rar', files: '3', numericFiles: 3, storage: '4.50 GB', category: 'Archive', page: 2 },
  { extension: '.part19.rar', files: '3', numericFiles: 3, storage: '4.50 GB', category: 'Archive', page: 2 },
  { extension: '.part20.rar', files: '3', numericFiles: 3, storage: '3.83 GB', category: 'Archive', page: 2 },
  { extension: '.z01', files: '3', numericFiles: 3, storage: '5.57 GB', category: 'Archive', page: 2 },
  { extension: '.1969', files: '2', numericFiles: 2, storage: '1.95 GB', category: 'Archive', page: 2 },
  { extension: '.1984', files: '2', numericFiles: 2, storage: '2.01 GB', category: 'Archive', page: 2 },
  { extension: '.part6.rar', files: '2', numericFiles: 2, storage: '2.42 GB', category: 'Archive', page: 2 },
  { extension: '.032', files: '1', numericFiles: 1, storage: '1.95 GB', category: 'Archive', page: 2 },
  { extension: '.033', files: '1', numericFiles: 1, storage: '1.95 GB', category: 'Archive', page: 2 },
  { extension: '.034', files: '1', numericFiles: 1, storage: '1.95 GB', category: 'Archive', page: 2 },
  { extension: '.035', files: '1', numericFiles: 1, storage: '1.95 GB', category: 'Archive', page: 2 },
  { extension: '.036', files: '1', numericFiles: 1, storage: '1.95 GB', category: 'Archive', page: 2 },
  { extension: '.037', files: '1', numericFiles: 1, storage: '1.32 GB', category: 'Archive', page: 2 },
  { extension: '.3035', files: '1', numericFiles: 1, storage: '904.34 MB', category: 'Archive', page: 2 },
  { extension: '.part7.rar', files: '1', numericFiles: 1, storage: '880.38 MB', category: 'Archive', page: 2 },
  { extension: '.z03', files: '1', numericFiles: 1, storage: '1.90 GB', category: 'Archive', page: 2 },

  { extension: '.pdf', files: '680', numericFiles: 680, storage: '11.82 GB', category: 'Document', page: 2 },
  { extension: '.epub', files: '54', numericFiles: 54, storage: '221.58 MB', category: 'Document', page: 2 },
  { extension: '.txt', files: '10', numericFiles: 10, storage: '434.12 KB', category: 'Document', page: 2 },

  { extension: '.jpg', files: '46', numericFiles: 46, storage: '13.42 MB', category: 'Image', page: 2 },
  { extension: '.png', files: '5', numericFiles: 5, storage: '6.81 MB', category: 'Image', page: 2 },
  { extension: '.jpeg', files: '3', numericFiles: 3, storage: '168.37 KB', category: 'Image', page: 2 },
  { extension: '.webp', files: '1', numericFiles: 1, storage: '192.29 KB', category: 'Image', page: 2 },

  // ── PAGE 3: Software, Other / Unknown Types (part 1) ──
  { extension: '.apk', files: '37', numericFiles: 37, storage: '4.09 GB', category: 'Software', page: 3 },
  { extension: '[NO EXTENSION]', files: '8,689', numericFiles: 8689, storage: '4.31 TB', category: 'Other / Unknown', page: 3 },
  { extension: '.bluray', files: '133', numericFiles: 133, storage: '83.21 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.264-mkv', files: '71', numericFiles: 71, storage: '64.36 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.264-mp4', files: '61', numericFiles: 61, storage: '14.91 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.264~mkv', files: '50', numericFiles: 50, storage: '29.61 GB', category: 'Other / Unknown', page: 3 },
  { extension: '. mkv', files: '42', numericFiles: 42, storage: '33.13 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.octet-stream', files: '41', numericFiles: 41, storage: '36.67 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.torrent', files: '30', numericFiles: 30, storage: '4.76 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.0 chinese x264 msubs mkv', files: '29', numericFiles: 29, storage: '9.49 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.hindi', files: '28', numericFiles: 28, storage: '10.90 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.esub', files: '25', numericFiles: 25, storage: '22.30 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.unknown_video', files: '25', numericFiles: 25, storage: '29.59 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.mp4\n@disneycinemas', files: '21', numericFiles: 21, storage: '1.43 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.esubs', files: '16', numericFiles: 16, storage: '11.21 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.0 ~ (strange) pahe~(black3at)mkv', files: '14', numericFiles: 14, storage: '51.88 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.hevc-psa', files: '14', numericFiles: 14, storage: '8.92 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.480p', files: '13', numericFiles: 13, storage: '1.84 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.last', files: '12', numericFiles: 12, storage: '3.34 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.01', files: '11', numericFiles: 11, storage: '40.98 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.02', files: '11', numericFiles: 11, storage: '33.43 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.0 x264', files: '10', numericFiles: 10, storage: '3.85 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.m', files: '10', numericFiles: 10, storage: '7.31 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.0] 720p\n@ssfilms_official3', files: '9', numericFiles: 9, storage: '12.60 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.1 esubs', files: '9', numericFiles: 9, storage: '13.05 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.mk', files: '9', numericFiles: 9, storage: '7.71 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.264mkv', files: '8', numericFiles: 8, storage: '8.75 GB', category: 'Other / Unknown', page: 3 },
  { extension: '. movie', files: '7', numericFiles: 7, storage: '4.94 GB', category: 'Other / Unknown', page: 3 },
  { extension: '. mp4', files: '7', numericFiles: 7, storage: '4.68 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.03', files: '7', numericFiles: 7, storage: '12.47 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.2', files: '7', numericFiles: 7, storage: '4.80 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.mmkv', files: '7', numericFiles: 7, storage: '6.62 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.msub~l3g3n7mkv', files: '7', numericFiles: 7, storage: '8.56 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.(kali billi)mkv', files: '6', numericFiles: 6, storage: '14.57 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.0 - 64kbps) [tel + tam + hin] esub_mkv', files: '6', numericFiles: 6, storage: '857.35 MB', category: 'Other / Unknown', page: 3 },
  { extension: '.2gb', files: '6', numericFiles: 6, storage: '9.10 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.3gb', files: '6', numericFiles: 6, storage: '13.55 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.hdm2mkv', files: '6', numericFiles: 6, storage: '12.50 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.mkv 1', files: '6', numericFiles: 6, storage: '7.32 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.0) esubs mkv', files: '5', numericFiles: 5, storage: '6.46 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.1] 720p\n@ssfilms_official3', files: '5', numericFiles: 5, storage: '6.37 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.mkb', files: '5', numericFiles: 5, storage: '2.85 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.mkkv', files: '5', numericFiles: 5, storage: '8.27 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.mkv\n@amzonmovies', files: '5', numericFiles: 5, storage: '4.74 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.naked', files: '5', numericFiles: 5, storage: '2.01 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.x264-mkv', files: '5', numericFiles: 5, storage: '8.30 GB', category: 'Other / Unknown', page: 3 },
  { extension: '. 1 2005', files: '4', numericFiles: 4, storage: '3.15 GB', category: 'Other / Unknown', page: 3 },
  { extension: '. azaad  1994', files: '4', numericFiles: 4, storage: '3.35 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.0 esub ~rr', files: '4', numericFiles: 4, storage: '3.89 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.1', files: '4', numericFiles: 4, storage: '6.62 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.1 - english] x265 esubs ~psamkv', files: '4', numericFiles: 4, storage: '13.43 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.1 esub', files: '4', numericFiles: 4, storage: '1.44 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.1] 720p', files: '4', numericFiles: 4, storage: '4.51 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.1xbet-mkv', files: '4', numericFiles: 4, storage: '3.28 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.alien', files: '4', numericFiles: 4, storage: '2.84 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.h 264-mkv', files: '4', numericFiles: 4, storage: '4.36 GB', category: 'Other / Unknown', page: 3 },
  { extension: '.mkc', files: '4', numericFiles: 4, storage: '1.64 GB', category: 'Other / Unknown', page: 3 },

  // ── PAGE 4: Other / Unknown Types (cont.) ──
  { extension: '.mvk', files: '4', numericFiles: 4, storage: '3.15 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.x264mkv', files: '4', numericFiles: 4, storage: '2.96 GB', category: 'Other / Unknown', page: 4 },
  { extension: '. [dual audio] [hindi or english] x264 esubs', files: '3', numericFiles: 3, storage: '4.13 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.0 audio]', files: '3', numericFiles: 3, storage: '2.17 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.0 esubs mkv', files: '3', numericFiles: 3, storage: '2.20 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.0 h 264-archie mkv', files: '3', numericFiles: 3, storage: '3.16 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.0 x264 -', files: '3', numericFiles: 3, storage: '1.10 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.0] esubs -☈ohit [ak]', files: '3', numericFiles: 3, storage: '6.06 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.265-mkv', files: '3', numericFiles: 3, storage: '121.00 MB', category: 'Other / Unknown', page: 4 },
  { extension: '.[60fps],mkv', files: '3', numericFiles: 3, storage: '5.52 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.cbz', files: '3', numericFiles: 3, storage: '106.78 MB', category: 'Other / Unknown', page: 4 },
  { extension: '.mp4\n@junglee1961movie\n@movie_bolly4u', files: '3', numericFiles: 3, storage: '3.87 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.s01e06', files: '3', numericFiles: 3, storage: '554.22 MB', category: 'Other / Unknown', page: 4 },
  { extension: '.wanna', files: '3', numericFiles: 3, storage: '598.62 MB', category: 'Other / Unknown', page: 4 },
  { extension: '.x264', files: '3', numericFiles: 3, storage: '3.08 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.~(black3at)mkv', files: '3', numericFiles: 3, storage: '1.42 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.\ngame of thrones [#s02]\n(2012) [ hindi ] 480p', files: '2', numericFiles: 2, storage: '2.07 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.\ngame of thrones [#s03]\n(2012) [', files: '2', numericFiles: 2, storage: '2.16 GB', category: 'Other / Unknown', page: 4 },
  { extension: '. (2023) web-rip org [hindi - english] 720p', files: '2', numericFiles: 2, storage: '1.40 GB', category: 'Other / Unknown', page: 4 },
  { extension: '. 1 2001', files: '2', numericFiles: 2, storage: '1.72 GB', category: 'Other / Unknown', page: 4 },
  { extension: '. 3 (2023) imax hindi (clean) 720p', files: '2', numericFiles: 2, storage: '2.19 GB', category: 'Other / Unknown', page: 4 },
  { extension: '. [dual audio] [hindi or english] x264 esubsmkv', files: '2', numericFiles: 2, storage: '2.63 GB', category: 'Other / Unknown', page: 4 },
  { extension: '. aisa bhi 2008', files: '2', numericFiles: 2, storage: '1.13 GB', category: 'Other / Unknown', page: 4 },
  { extension: '. pyaar hai 2003', files: '2', numericFiles: 2, storage: '2.17 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.0', files: '2', numericFiles: 2, storage: '1.72 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.0 h 264-mkv', files: '2', numericFiles: 2, storage: '4.79 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.0 x264 esub', files: '2', numericFiles: 2, storage: '1.48 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.1 - tamil] 720p', files: '2', numericFiles: 2, storage: '2.89 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.1 webrip 480p x264 esub', files: '2', numericFiles: 2, storage: '511.99 MB', category: 'Other / Unknown', page: 4 },
  { extension: '.1 x264 esub mkv', files: '2', numericFiles: 2, storage: '2.50 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.1] 1080p', files: '2', numericFiles: 2, storage: '3.78 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.1] 720p   ㅤ', files: '2', numericFiles: 2, storage: '1.87 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.1] 720p hevc', files: '2', numericFiles: 2, storage: '1.07 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.1] blu-ray 720p', files: '2', numericFiles: 2, storage: '2.61 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.1] 1080p hevc', files: '2', numericFiles: 2, storage: '3.74 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.720p', files: '2', numericFiles: 2, storage: '976.81 MB', category: 'Other / Unknown', page: 4 },
  { extension: '.8gb', files: '2', numericFiles: 2, storage: '5.80 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.@jesseverse', files: '2', numericFiles: 2, storage: '1.11 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.f chapter 1 (2018) blu-ray org hindi 480p', files: '2', numericFiles: 2, storage: '1.06 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.f chapter 1 (2018) blu-ray org hindi 720p', files: '2', numericFiles: 2, storage: '2.96 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.f chapter 1 (2018) blu-ray org hindi 720p hevc', files: '2', numericFiles: 2, storage: '1.59 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.f chapter 2 (2022) blu-ray org hindi 480p', files: '2', numericFiles: 2, storage: '1.14 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.f chapter 2 (2022) blu-ray org hindi 720p', files: '2', numericFiles: 2, storage: '3.10 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.f chapter 2 (2022) blu-ray org hindi 720p hevc', files: '2', numericFiles: 2, storage: '1.74 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.g @dubanime', files: '2', numericFiles: 2, storage: '632.50 MB', category: 'Other / Unknown', page: 4 },
  { extension: '.h 265-mkv', files: '2', numericFiles: 2, storage: '3.21 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.hevc-mkv', files: '2', numericFiles: 2, storage: '2.35 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.hollywood edition', files: '2', numericFiles: 2, storage: '812.11 MB', category: 'Other / Unknown', page: 4 },
  { extension: '.me movies4allrequest', files: '2', numericFiles: 2, storage: '2.65 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.mkv**', files: '2', numericFiles: 2, storage: '5.08 GB', category: 'Other / Unknown', page: 4 },
  { extension: '.mlv', files: '2', numericFiles: 2, storage: '4.56 GB', category: 'Other / Unknown', page: 4 },

  // ── PAGE 5: Other / Unknown Types (cont.) ──
  { extension: '.obb', files: '2', numericFiles: 2, storage: '2.41 GB', category: 'Other / Unknown', page: 5 },
  { extension: '.php?fid=181mvr232f62arq', files: '2', numericFiles: 2, storage: '710.57 MB', category: 'Other / Unknown', page: 5 },
  { extension: '.rebel-@updates4', files: '2', numericFiles: 2, storage: '2.04 GB', category: 'Other / Unknown', page: 5 },
  { extension: '.rr', files: '2', numericFiles: 2, storage: '797.61 MB', category: 'Other / Unknown', page: 5 },
  { extension: '.s01e03', files: '2', numericFiles: 2, storage: '771.16 MB', category: 'Other / Unknown', page: 5 },
  { extension: '.vidya 1962', files: '2', numericFiles: 2, storage: '1.06 GB', category: 'Other / Unknown', page: 5 },
  { extension: '.webdl', files: '2', numericFiles: 2, storage: '1.02 GB', category: 'Other / Unknown', page: 5 },
  { extension: '.x-matroska', files: '2', numericFiles: 2, storage: '2.61 GB', category: 'Other / Unknown', page: 5 },
  { extension: '.x264-hdhub4umkv', files: '2', numericFiles: 2, storage: '887.17 MB', category: 'Other / Unknown', page: 5 },
  { extension: '.  h', files: '1', numericFiles: 1, storage: '403.03 MB', category: 'Other / Unknown', page: 5 },
  { extension: '.  mkv', files: '1', numericFiles: 1, storage: '404.99 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. (2021) s01 [hindi - english] 480p hevc', files: '1', numericFiles: 1, storage: '923.22 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. (2021) s01 [hindi - english] 720p hevc', files: '1', numericFiles: 1, storage: '1.30 GB', category: 'Other / Unknown', page: 5 },
  { extension: '. (2023) web-rip org [hindi - english] 1080p', files: '1', numericFiles: 1, storage: '1.87 GB', category: 'Other / Unknown', page: 5 },
  { extension: '. (2023) web-rip org [hindi - english] 470p', files: '1', numericFiles: 1, storage: '323.13 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 1956', files: '1', numericFiles: 1, storage: '828.71 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 1967 @bollywood_movie_f', files: '1', numericFiles: 1, storage: '647.22 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 30s furious (2017)', files: '1', numericFiles: 1, storage: '2.95 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 30s gaia (2023)', files: '1', numericFiles: 1, storage: '1.96 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 30s golden job 2018', files: '1', numericFiles: 1, storage: '3.95 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 30s mann kasturi re (2022) hindi dub', files: '1', numericFiles: 1, storage: '1.56 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 30s minus one 2022', files: '1', numericFiles: 1, storage: '1.45 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 30s minus one s2 (2023)', files: '1', numericFiles: 1, storage: '2.81 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 30s mookuthi amman 2022', files: '1', numericFiles: 1, storage: '2.24 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 30s sardar (2022) hindi (hq-dub)', files: '1', numericFiles: 1, storage: '1.80 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. 30s voodoo (2017)', files: '1', numericFiles: 1, storage: '1.36 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. [dual audio] [hindi or english] x265 esubs', files: '1', numericFiles: 1, storage: '660.63 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. da sitta', files: '1', numericFiles: 1, storage: '547.01 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. davis (2023) s01 english 720p 10bit', files: '1', numericFiles: 1, storage: '1.19 GB', category: 'Other / Unknown', page: 5 },
  { extension: '. davis (2023) s01e01-04 english 720p 10bit', files: '1', numericFiles: 1, storage: '1.13 GB', category: 'Other / Unknown', page: 5 },
  { extension: '. davis (2023) s01e05-08 english 720p 10bit', files: '1', numericFiles: 1, storage: '1.18 GB', category: 'Other / Unknown', page: 5 },
  { extension: '. esub', files: '1', numericFiles: 1, storage: '1.30 GB', category: 'Other / Unknown', page: 5 },
  { extension: '. punjabi hc', files: '1', numericFiles: 1, storage: '1.66 GB', category: 'Other / Unknown', page: 5 },
  { extension: '. queen (2020) s01e03 720p  hindi', files: '1', numericFiles: 1, storage: '377.19 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. queen (2020) s01e07 720p  hindi', files: '1', numericFiles: 1, storage: '405.53 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. queen (2020) s01e10 720p  hindi', files: '1', numericFiles: 1, storage: '396.14 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. queen (2020) s01e11 480p  hindi', files: '1', numericFiles: 1, storage: '113.45 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. queen (2020) s01e14 720p  hindi', files: '1', numericFiles: 1, storage: '318.54 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. queen (2020) s01e16 720p  hindi', files: '1', numericFiles: 1, storage: '311.97 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. queen (2020) s01e23 720p  hindi', files: '1', numericFiles: 1, storage: '320.06 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. raftaarmusic mp4', files: '1', numericFiles: 1, storage: '1.15 GB', category: 'Other / Unknown', page: 5 },
  { extension: '. smith (2005)[hin-eng] 480p bluray', files: '1', numericFiles: 1, storage: '390.39 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. the white raven (2022) blu-ray [hindi - ukrainian] 480p', files: '1', numericFiles: 1, storage: '349.65 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. the white raven (2022) blu-ray [hindi - ukrainian] 720p', files: '1', numericFiles: 1, storage: '655.83 MB', category: 'Other / Unknown', page: 5 },
  { extension: '. the white raven (2022) bluray [hindi - ukrainian] 720p', files: '1', numericFiles: 1, storage: '1.03 GB', category: 'Other / Unknown', page: 5 },

  // ── PAGE 6: Other / Unknown Types (cont.) ──
  { extension: '. vijay sethupati ( 2021) telugu hdrip', files: '1', numericFiles: 1, storage: '810.54 MB', category: 'Other / Unknown', page: 6 },
  { extension: '. 𝙳𝙰𝚂 ♛', files: '1', numericFiles: 1, storage: '819.49 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.$01308', files: '1', numericFiles: 1, storage: '225.08 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.0 + tamil] uncut web-rip 720p', files: '1', numericFiles: 1, storage: '1.26 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.0 - tamil] 720p', files: '1', numericFiles: 1, storage: '1.25 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.0 2016 hindi 480p bluray ×264 aac esub', files: '1', numericFiles: 1, storage: '475.62 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.0 2016 hindi 720p bluray ×265 hevc aac 5', files: '1', numericFiles: 1, storage: '673.69 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.0 esubs', files: '1', numericFiles: 1, storage: '700.50 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.0 h264mkv', files: '1', numericFiles: 1, storage: '1.95 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.0 hevc', files: '1', numericFiles: 1, storage: '621.26 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.0 x', files: '1', numericFiles: 1, storage: '80.92 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.0 x264 esub -', files: '1', numericFiles: 1, storage: '213.82 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.0) - rrmkv', files: '1', numericFiles: 1, storage: '1.29 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.04', files: '1', numericFiles: 1, storage: '3.73 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.05', files: '1', numericFiles: 1, storage: '3.73 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.06', files: '1', numericFiles: 1, storage: '3.48 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.07', files: '1', numericFiles: 1, storage: '1.04 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.0] esub mkv', files: '1', numericFiles: 1, storage: '3.17 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1 - english] 1080p', files: '1', numericFiles: 1, storage: '1.88 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1 - english] 720p', files: '1', numericFiles: 1, storage: '1.12 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1 - english] 720p', files: '1', numericFiles: 1, storage: '1.23 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1 esub - immortal', files: '1', numericFiles: 1, storage: '1,023.41 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.1 x264 esub - mkv', files: '1', numericFiles: 1, storage: '1.02 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1 x264 msubs - mkv', files: '1', numericFiles: 1, storage: '2.67 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1(192kbps) esub [1tamil]', files: '1', numericFiles: 1, storage: '2.45 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1(192kbps) esub [1tamilb]', files: '1', numericFiles: 1, storage: '3.55 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.17mb]', files: '1', numericFiles: 1, storage: '895.17 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.192kbps', files: '1', numericFiles: 1, storage: '1.60 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1] web-rip 720p', files: '1', numericFiles: 1, storage: '1.38 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1] 720p', files: '1', numericFiles: 1, storage: '1.08 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.1ch] x265 hev', files: '1', numericFiles: 1, storage: '2.49 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.2022 720p', files: '1', numericFiles: 1, storage: '374.31 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.264-ott_downloader_botmp4', files: '1', numericFiles: 1, storage: '1.08 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.265-', files: '1', numericFiles: 1, storage: '1.18 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.265mkv', files: '1', numericFiles: 1, storage: '971.73 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.2gb] ~ rj mkv', files: '1', numericFiles: 1, storage: '1.22 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.3', files: '1', numericFiles: 1, storage: '1.08 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.3$u', files: '1', numericFiles: 1, storage: '235.37 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.33gb _mp4\n@junglee1961movie', files: '1', numericFiles: 1, storage: '1.33 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.4', files: '1', numericFiles: 1, storage: '1.08 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.5', files: '1', numericFiles: 1, storage: '1.10 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.5 : the himmat story (2021) s01 hindi 480p hevc', files: '1', numericFiles: 1, storage: '558.70 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.5 : the himmat story (2021) s01 hindi 720p hevc', files: '1', numericFiles: 1, storage: '1.07 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.6', files: '1', numericFiles: 1, storage: '1,015.48 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.64mb]', files: '1', numericFiles: 1, storage: '426.64 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.7', files: '1', numericFiles: 1, storage: '714.71 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.73mb]', files: '1', numericFiles: 1, storage: '939.73 MB', category: 'Other / Unknown', page: 6 },
  { extension: '.9gb - esub', files: '1', numericFiles: 1, storage: '3.10 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.@booliwod', files: '1', numericFiles: 1, storage: '1.77 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.@booliwod sauda 1995', files: '1', numericFiles: 1, storage: '1.47 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.@booliwod trinetra 1991', files: '1', numericFiles: 1, storage: '1.54 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.@booliwod zindagi khoobsoorat hai 2002', files: '1', numericFiles: 1, storage: '1.31 GB', category: 'Other / Unknown', page: 6 },
  { extension: '.[1080p][hevc] #japanies esub mkv', files: '1', numericFiles: 1, storage: '1.20 GB', category: 'Other / Unknown', page: 6 },

  // ── PAGE 7: Other / Unknown Types (cont. to end) ──
  { extension: '.[hollywood edition]', files: '1', numericFiles: 1, storage: '399.15 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.art - fast & furious 9 (2021) english hq hdcam-', files: '1', numericFiles: 1, storage: '1.37 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.blur', files: '1', numericFiles: 1, storage: '938.43 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.bluray mkv', files: '1', numericFiles: 1, storage: '323.71 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.bluray:mkv', files: '1', numericFiles: 1, storage: '300.95 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.bluraymkv', files: '1', numericFiles: 1, storage: '649.47 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.crdownload', files: '1', numericFiles: 1, storage: '781.05 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.e02', files: '1', numericFiles: 1, storage: '665.15 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.e16', files: '1', numericFiles: 1, storage: '516.62 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.esu', files: '1', numericFiles: 1, storage: '93.64 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.esub-', files: '1', numericFiles: 1, storage: '99.45 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.h!nd!-ch!nese', files: '1', numericFiles: 1, storage: '755.69 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.i', files: '1', numericFiles: 1, storage: '150.69 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.in boots the three diablos @animation_filmshd', files: '1', numericFiles: 1, storage: '135.35 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.iqiyi', files: '1', numericFiles: 1, storage: '166.47 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.ishq', files: '1', numericFiles: 1, storage: '1.20 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.jinde meriye (2020) 1080p', files: '1', numericFiles: 1, storage: '1.27 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.m3u', files: '1', numericFiles: 1, storage: '53.31 KB', category: 'Other / Unknown', page: 7 },
  { extension: '.m4', files: '1', numericFiles: 1, storage: '1.31 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.miv', files: '1', numericFiles: 1, storage: '349.63 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.mkv\n@hd_print_movies', files: '1', numericFiles: 1, storage: '1.33 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.mkv -vt', files: '1', numericFiles: 1, storage: '872.69 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.mkv @ghostgroupofficial', files: '1', numericFiles: 1, storage: '1.30 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.mkv_part_1', files: '1', numericFiles: 1, storage: '1.22 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.mp', files: '1', numericFiles: 1, storage: '49.79 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.mp4\n@gujjubhai', files: '1', numericFiles: 1, storage: '1.34 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.mp4\nmx web dl 720p', files: '1', numericFiles: 1, storage: '630.38 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.mp4\nmx web dl print 480p', files: '1', numericFiles: 1, storage: '507.75 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.nfo', files: '1', numericFiles: 1, storage: '5.66 KB', category: 'Other / Unknown', page: 7 },
  { extension: '.one (2011) hindi 720p bluray x264', files: '1', numericFiles: 1, storage: '1.32 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.one (2011) hindi 720p hevc bluray x265 aac', files: '1', numericFiles: 1, storage: '804.37 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.part', files: '1', numericFiles: 1, storage: '405.05 KB', category: 'Other / Unknown', page: 7 },
  { extension: '.pokemon', files: '1', numericFiles: 1, storage: '83.84 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.queen', files: '1', numericFiles: 1, storage: '1.21 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.queen s01 e27  720p', files: '1', numericFiles: 1, storage: '330.64 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.queen s01e26 480p', files: '1', numericFiles: 1, storage: '98.22 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.queen s01e26 720p', files: '1', numericFiles: 1, storage: '355.51 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.queen s01e28 480p', files: '1', numericFiles: 1, storage: '86.03 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.s01e01', files: '1', numericFiles: 1, storage: '428.05 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.s01e04', files: '1', numericFiles: 1, storage: '412.96 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.s01e05', files: '1', numericFiles: 1, storage: '318.03 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.s01e07', files: '1', numericFiles: 1, storage: '334.97 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.s01e08', files: '1', numericFiles: 1, storage: '400.12 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.set', files: '1', numericFiles: 1, storage: '99.11 KB', category: 'Other / Unknown', page: 7 },
  { extension: '.star!=-mkv', files: '1', numericFiles: 1, storage: '1.18 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.web', files: '1', numericFiles: 1, storage: '1.63 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.webrip', files: '1', numericFiles: 1, storage: '960.61 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.x264 audio eng subtitles hindi-eng', files: '1', numericFiles: 1, storage: '1.11 GB', category: 'Other / Unknown', page: 7 },
  { extension: '.x265 mkvcinemas mkv', files: '1', numericFiles: 1, storage: '783.22 MB', category: 'Other / Unknown', page: 7 },
  { extension: '.x265-mkv', files: '1', numericFiles: 1, storage: '226.00 MB', category: 'Other / Unknown', page: 7 }
]

