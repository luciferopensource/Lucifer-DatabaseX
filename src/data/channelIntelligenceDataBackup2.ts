/**
 * Sovereign Channel Intelligence Dataset — Lucifer Stream Site Backup 2
 * Source: docs/reports/Lucifer Stream Site Backup 2 Source Reports.txt
 * Authoritative Archive X Engine Audit — 27 Oct 2026
 *
 * Strictly authentic: No fabricated metrics, no inferred data, no omitted pages.
 */

import {
  ReportTarget,
  ScanSummary,
  CategoryBreakdownItem,
  DataIntegrityItem,
  ScanRecord,
  ResolutionItem,
  StorageHighlights,
  ExtensionRecord,
  ChannelIntelligenceDataset
} from './channelIntelligenceData'

// ─────────────────────────────────────────────────────────────────────────────
// AUTHENTIC REPORT METADATA & CONFIGURATION (BACKUP 2)
// ─────────────────────────────────────────────────────────────────────────────

export const TARGET_INFO_BACKUP_2: ReportTarget = {
  name: 'Lucifer Stream Site 2 Backup',
  channelId: '-1004400619740',
  scanner: 'Scanner-Node-01',
  scanId: 'LMS-94E3-7DE1',
  completedDate: '27 Oct 2026',
  status: 'COMPLETE',
  reportVersion: 'Archive X v1.0.0',
  intelligenceEngine: 'Media Intelligence Core'
}

export const SCAN_SUMMARY_BACKUP_2: ScanSummary = {
  messagesChecked: '948,114',
  totalFilesFound: '948,110',
  combinedSize: '708.57 TB',
  scanDuration: '2h 43m 48s',
  scannerWorker: 'Scanner-Node-01',
  scanIntegrity: 'VERIFIED'
}

export const CATEGORY_BREAKDOWN_BACKUP_2: CategoryBreakdownItem[] = [
  {
    id: 'cat-video',
    icon: 'Film',
    category: 'Videos & Media',
    files: '933,263',
    storage: '706.59 TB',
    percentage: '99.7%'
  },
  {
    id: 'cat-split',
    icon: 'Layers',
    category: 'Split Parts / Volumes',
    files: '783',
    storage: '1.51 TB',
    percentage: '0.2%'
  },
  {
    id: 'cat-archive',
    icon: 'Archive',
    category: 'Archives & Compressed',
    files: '692',
    storage: '403.95 GB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-doc',
    icon: 'FileText',
    category: 'Documents & Text',
    files: '13,113',
    storage: '48.34 GB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-audio',
    icon: 'Music',
    category: 'Audio & Music',
    files: '131',
    storage: '15.18 GB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-photo',
    icon: 'Image',
    category: 'Photos & Graphics',
    files: '56',
    storage: '56.89 MB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-software',
    icon: 'Cpu',
    category: 'Software & Applications',
    files: '27',
    storage: '1.17 GB',
    percentage: '<0.1%'
  },
  {
    id: 'cat-other',
    icon: 'Paperclip',
    category: 'Other Files',
    files: '45',
    storage: '11.02 GB',
    percentage: '<0.1%'
  }
]

export const DATA_INTEGRITY_AUDIT_BACKUP_2: DataIntegrityItem[] = [
  { key: 'MESSAGE INDEX', status: 'VERIFIED', verified: true },
  { key: 'FILE TOTALS', status: 'VERIFIED', verified: true },
  { key: 'STORAGE TOTALS', status: 'VERIFIED', verified: true },
  { key: 'CATEGORY DISTRIBUTION', status: 'VERIFIED', verified: true },
  { key: 'DATABASE RECORD', status: 'SYNCHRONIZED', verified: true },
  { key: 'CHECKPOINT', status: 'COMMITTED', verified: true }
]

export const CHANNEL_ANALYSIS_SCAN_RECORD_BACKUP_2: ScanRecord = {
  scanId: 'LMS-94E3-7DE1',
  completed: '27 Oct 2026',
  status: 'COMPLETE',
  databaseCache: 'CACHED',
  reportVersion: 'Archive X v1.0.0'
}

// ─────────────────────────────────────────────────────────────────────────────
// RESOLUTION INTELLIGENCE DATA (BACKUP 2)
// ─────────────────────────────────────────────────────────────────────────────

export const RESOLUTION_BREAKDOWN_BACKUP_2: ResolutionItem[] = [
  {
    id: 'res-4k',
    label: '2160p / 4K',
    tag: 'Ultra High Definition',
    files: '8,092',
    storage: '14.94 TB',
    percentage: '2.1%',
    numericPercentage: 2.1,
    color: '#d4af37'
  },
  {
    id: 'res-2k',
    label: '1440p / 2K',
    tag: 'Quad High Definition',
    files: '388',
    storage: '507.18 GB',
    percentage: '<0.1%',
    numericPercentage: 0.1,
    color: '#f3e5ab'
  },
  {
    id: 'res-fhd',
    label: '1080p / FHD',
    tag: 'Full High Definition',
    files: '209,611',
    storage: '306.23 TB',
    percentage: '43.2%',
    numericPercentage: 43.2,
    color: '#38bdf8'
  },
  {
    id: 'res-hd',
    label: '720p / HD',
    tag: 'Standard High Definition',
    files: '441,904',
    storage: '299.33 TB',
    percentage: '42.2%',
    numericPercentage: 42.2,
    color: '#4ade80'
  },
  {
    id: 'res-576p',
    label: '576p / SD',
    tag: 'Standard PAL Definition',
    files: '6,045',
    storage: '3.33 TB',
    percentage: '0.5%',
    numericPercentage: 0.5,
    color: '#c084fc'
  },
  {
    id: 'res-480p',
    label: '480p / SD',
    tag: 'Standard NTSC Definition',
    files: '114,296',
    storage: '40.35 TB',
    percentage: '5.7%',
    numericPercentage: 5.7,
    color: '#fb923c'
  },
  {
    id: 'res-360p',
    label: '360p / Low',
    tag: 'Low Definition Mobile',
    files: '9,023',
    storage: '2.69 TB',
    percentage: '0.4%',
    numericPercentage: 0.4,
    color: '#f87171'
  },
  {
    id: 'res-240p',
    label: '240p / Low',
    tag: 'Minimal Bandwidth Stream',
    files: '5,948',
    storage: '1.57 TB',
    percentage: '0.2%',
    numericPercentage: 0.2,
    color: '#ef4444'
  },
  {
    id: 'res-other',
    label: 'Other / Audio / Archives',
    tag: 'Non-Visual & Multi-Part Streams',
    files: '152,803',
    storage: '39.63 TB',
    percentage: '5.6%',
    numericPercentage: 5.6,
    color: '#94a3b8'
  }
]

export const RESOLUTION_SCAN_RECORD_BACKUP_2: ScanRecord = {
  scanId: 'LMS-94E3-7DE1',
  completed: '27 Oct 2026',
  status: 'COMPLETE',
  databaseCache: 'SAVED',
  reportVersion: 'Archive X v1.0.0'
}

// ─────────────────────────────────────────────────────────────────────────────
// STORAGE HIGHLIGHTS DATA (BACKUP 2)
// ─────────────────────────────────────────────────────────────────────────────

export const STORAGE_HIGHLIGHTS_BACKUP_2: StorageHighlights = {
  largestFileSize: '3.91 GB',
  largestFileName: 'The.Matrix.1999.iNTERNAL.REMA…',
  averageFileSize: '783.65 MB',
  totalFiles: '948,110',
  totalStorage: '708.57 TB'
}

export const STORAGE_SCAN_RECORD_BACKUP_2: ScanRecord = {
  scanId: 'LMS-94E3-7DE1',
  completed: '27 Oct 2026',
  status: 'COMPLETE',
  databaseCache: 'SAVED',
  reportVersion: 'Archive X v1.0.0'
}

// ─────────────────────────────────────────────────────────────────────────────
// FILE EXTENSION REPORT DATA (ALL 6 PAGES — 280 UNIQUE EXTENSIONS)
// ─────────────────────────────────────────────────────────────────────────────

export const EXTENSION_SUMMARY_BACKUP_2 = {
  totalFilesAnalysed: '948,110',
  uniqueExtensions: 280,
  totalAnalysedStorage: '708.57 TB',
  totalPages: 6
}

export const EXTENSION_RECORDS_BACKUP_2: ExtensionRecord[] = [
  {
    "extension": ".mkv",
    "files": "842,256",
    "numericFiles": 842256,
    "storage": "666.11 TB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".mp4",
    "files": "83,200",
    "numericFiles": 83200,
    "storage": "36.47 TB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".avi",
    "files": "1,141",
    "numericFiles": 1141,
    "storage": "428.91 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".m4v",
    "files": "279",
    "numericFiles": 279,
    "storage": "187.36 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".mpeg",
    "files": "126",
    "numericFiles": 126,
    "storage": "93.27 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".flv",
    "files": "100",
    "numericFiles": 100,
    "storage": "19.65 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".webm",
    "files": "34",
    "numericFiles": 34,
    "storage": "11.99 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".mov",
    "files": "24",
    "numericFiles": 24,
    "storage": "9.40 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".3gp",
    "files": "14",
    "numericFiles": 14,
    "storage": "1.37 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".ts",
    "files": "11",
    "numericFiles": 11,
    "storage": "4.25 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".vob",
    "files": "11",
    "numericFiles": 11,
    "storage": "9.79 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".264",
    "files": "10",
    "numericFiles": 10,
    "storage": "20.17 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".265",
    "files": "9",
    "numericFiles": 9,
    "storage": "18.52 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".mpv",
    "files": "6",
    "numericFiles": 6,
    "storage": "4.77 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".wmv",
    "files": "5",
    "numericFiles": 5,
    "storage": "756.75 MB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".mpg",
    "files": "4",
    "numericFiles": 4,
    "storage": "4.21 GB",
    "category": "Video",
    "page": 1
  },
  {
    "extension": ".eac3",
    "files": "60",
    "numericFiles": 60,
    "storage": "14.96 GB",
    "category": "Audio",
    "page": 1
  },
  {
    "extension": ".mka",
    "files": "37",
    "numericFiles": 37,
    "storage": "4.51 GB",
    "category": "Audio",
    "page": 1
  },
  {
    "extension": ".flac",
    "files": "30",
    "numericFiles": 30,
    "storage": "855.23 MB",
    "category": "Audio",
    "page": 1
  },
  {
    "extension": ".ac3",
    "files": "19",
    "numericFiles": 19,
    "storage": "3.09 GB",
    "category": "Audio",
    "page": 1
  },
  {
    "extension": ".mp3",
    "files": "18",
    "numericFiles": 18,
    "storage": "3.89 GB",
    "category": "Audio",
    "page": 1
  },
  {
    "extension": ".aac",
    "files": "9",
    "numericFiles": 9,
    "storage": "1.49 GB",
    "category": "Audio",
    "page": 1
  },
  {
    "extension": ".wma",
    "files": "9",
    "numericFiles": 9,
    "storage": "39.49 MB",
    "category": "Audio",
    "page": 1
  },
  {
    "extension": ".m4a",
    "files": "3",
    "numericFiles": 3,
    "storage": "114.00 MB",
    "category": "Audio",
    "page": 1
  },
  {
    "extension": ".wav",
    "files": "2",
    "numericFiles": 2,
    "storage": "106.36 MB",
    "category": "Audio",
    "page": 1
  },
  {
    "extension": ".srt",
    "files": "10,242",
    "numericFiles": 10242,
    "storage": "467.70 MB",
    "category": "Subtitle",
    "page": 1
  },
  {
    "extension": ".sub",
    "files": "35",
    "numericFiles": 35,
    "storage": "466.21 MB",
    "category": "Subtitle",
    "page": 1
  },
  {
    "extension": ".idx",
    "files": "32",
    "numericFiles": 32,
    "storage": "3.46 MB",
    "category": "Subtitle",
    "page": 1
  },
  {
    "extension": ".zip",
    "files": "230",
    "numericFiles": 230,
    "storage": "149.96 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".001",
    "files": "201",
    "numericFiles": 201,
    "storage": "685.39 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".002",
    "files": "199",
    "numericFiles": 199,
    "storage": "315.76 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".rar",
    "files": "158",
    "numericFiles": 158,
    "storage": "134.20 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".003",
    "files": "50",
    "numericFiles": 50,
    "storage": "65.47 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part1.rar",
    "files": "37",
    "numericFiles": 37,
    "storage": "55.73 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part2.rar",
    "files": "36",
    "numericFiles": 36,
    "storage": "44.32 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part3.rar",
    "files": "26",
    "numericFiles": 26,
    "storage": "32.38 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".004",
    "files": "16",
    "numericFiles": 16,
    "storage": "33.09 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part4.rar",
    "files": "14",
    "numericFiles": 14,
    "storage": "15.50 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part03.rar",
    "files": "10",
    "numericFiles": 10,
    "storage": "12.61 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part07.rar",
    "files": "10",
    "numericFiles": 10,
    "storage": "12.61 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part01.rar",
    "files": "9",
    "numericFiles": 9,
    "storage": "11.92 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part02.rar",
    "files": "9",
    "numericFiles": 9,
    "storage": "11.92 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part04.rar",
    "files": "9",
    "numericFiles": 9,
    "storage": "11.92 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part05.rar",
    "files": "9",
    "numericFiles": 9,
    "storage": "11.92 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part06.rar",
    "files": "9",
    "numericFiles": 9,
    "storage": "11.92 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part08.rar",
    "files": "9",
    "numericFiles": 9,
    "storage": "11.92 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part09.rar",
    "files": "9",
    "numericFiles": 9,
    "storage": "10.65 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part10.rar",
    "files": "9",
    "numericFiles": 9,
    "storage": "9.44 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part11.rar",
    "files": "7",
    "numericFiles": 7,
    "storage": "7.20 GB",
    "category": "Archive",
    "page": 1
  },
  {
    "extension": ".part12.rar",
    "files": "7",
    "numericFiles": 7,
    "storage": "6.58 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part5.rar",
    "files": "6",
    "numericFiles": 6,
    "storage": "3.41 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".005",
    "files": "5",
    "numericFiles": 5,
    "storage": "14.21 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part13.rar",
    "files": "5",
    "numericFiles": 5,
    "storage": "4.52 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part1.zip",
    "files": "3",
    "numericFiles": 3,
    "storage": "3.60 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part14.rar",
    "files": "3",
    "numericFiles": 3,
    "storage": "3.65 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part15.rar",
    "files": "3",
    "numericFiles": 3,
    "storage": "3.65 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part16.rar",
    "files": "3",
    "numericFiles": 3,
    "storage": "3.65 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part17.rar",
    "files": "3",
    "numericFiles": 3,
    "storage": "2.37 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part2.zip",
    "files": "3",
    "numericFiles": 3,
    "storage": "4.88 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part3.zip",
    "files": "3",
    "numericFiles": 3,
    "storage": "4.98 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part4.zip",
    "files": "3",
    "numericFiles": 3,
    "storage": "4.99 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part5.zip",
    "files": "3",
    "numericFiles": 3,
    "storage": "4.91 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part6.zip",
    "files": "3",
    "numericFiles": 3,
    "storage": "4.70 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part7.zip",
    "files": "3",
    "numericFiles": 3,
    "storage": "4.50 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part8.zip",
    "files": "3",
    "numericFiles": 3,
    "storage": "4.77 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".006",
    "files": "2",
    "numericFiles": 2,
    "storage": "5.86 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".007",
    "files": "2",
    "numericFiles": 2,
    "storage": "5.86 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".008",
    "files": "2",
    "numericFiles": 2,
    "storage": "5.86 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".009",
    "files": "2",
    "numericFiles": 2,
    "storage": "5.86 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".010",
    "files": "2",
    "numericFiles": 2,
    "storage": "5.86 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".011",
    "files": "2",
    "numericFiles": 2,
    "storage": "5.86 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".012",
    "files": "2",
    "numericFiles": 2,
    "storage": "5.86 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".013",
    "files": "2",
    "numericFiles": 2,
    "storage": "5.86 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".014",
    "files": "2",
    "numericFiles": 2,
    "storage": "2.46 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".2019",
    "files": "2",
    "numericFiles": 2,
    "storage": "723.47 MB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part18.rar",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.20 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".00001",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.95 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".00002",
    "files": "1",
    "numericFiles": 1,
    "storage": "70.75 MB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".1984",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.01 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part19.rar",
    "files": "1",
    "numericFiles": 1,
    "storage": "200.00 MB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part20.rar",
    "files": "1",
    "numericFiles": 1,
    "storage": "200.00 MB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part21.rar",
    "files": "1",
    "numericFiles": 1,
    "storage": "200.00 MB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part22.rar",
    "files": "1",
    "numericFiles": 1,
    "storage": "200.00 MB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part23.rar",
    "files": "1",
    "numericFiles": 1,
    "storage": "200.00 MB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".part24.rar",
    "files": "1",
    "numericFiles": 1,
    "storage": "200.00 MB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".z01",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.05 GB",
    "category": "Archive",
    "page": 2
  },
  {
    "extension": ".pdf",
    "files": "2,842",
    "numericFiles": 2842,
    "storage": "47.83 GB",
    "category": "Document",
    "page": 2
  },
  {
    "extension": ".txt",
    "files": "10",
    "numericFiles": 10,
    "storage": "216.07 KB",
    "category": "Document",
    "page": 2
  },
  {
    "extension": ".epub",
    "files": "3",
    "numericFiles": 3,
    "storage": "51.49 MB",
    "category": "Document",
    "page": 2
  },
  {
    "extension": ".docx",
    "files": "2",
    "numericFiles": 2,
    "storage": "71.65 KB",
    "category": "Document",
    "page": 2
  },
  {
    "extension": ".jpg",
    "files": "46",
    "numericFiles": 46,
    "storage": "49.65 MB",
    "category": "Image",
    "page": 2
  },
  {
    "extension": ".png",
    "files": "6",
    "numericFiles": 6,
    "storage": "6.33 MB",
    "category": "Image",
    "page": 2
  },
  {
    "extension": ".jpeg",
    "files": "3",
    "numericFiles": 3,
    "storage": "168.37 KB",
    "category": "Image",
    "page": 2
  },
  {
    "extension": ".gif",
    "files": "1",
    "numericFiles": 1,
    "storage": "769.22 KB",
    "category": "Image",
    "page": 2
  },
  {
    "extension": ".apk",
    "files": "24",
    "numericFiles": 24,
    "storage": "790.42 MB",
    "category": "Software",
    "page": 2
  },
  {
    "extension": ".exe",
    "files": "3",
    "numericFiles": 3,
    "storage": "411.17 MB",
    "category": "Software",
    "page": 2
  },
  {
    "extension": ".bat",
    "files": "2",
    "numericFiles": 2,
    "storage": "508 B",
    "category": "Software",
    "page": 2
  },
  {
    "extension": ".dat",
    "files": "1",
    "numericFiles": 1,
    "storage": "720.99 MB",
    "category": "Software",
    "page": 2
  },
  {
    "extension": ".html",
    "files": "1",
    "numericFiles": 1,
    "storage": "10.67 KB",
    "category": "Software",
    "page": 2
  },
  {
    "extension": "[NO EXTENSION]",
    "files": "5,240",
    "numericFiles": 5240,
    "storage": "2.70 TB",
    "category": "Other / Unknown",
    "page": 2
  },
  {
    "extension": ".264-mp4",
    "files": "195",
    "numericFiles": 195,
    "storage": "45.92 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".0 x264 esub-mkv",
    "files": "103",
    "numericFiles": 103,
    "storage": "46.75 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".mp4|",
    "files": "91",
    "numericFiles": 91,
    "storage": "32.52 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".264-mkv",
    "files": "61",
    "numericFiles": 61,
    "storage": "41.60 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".x264mkv",
    "files": "56",
    "numericFiles": 56,
    "storage": "13.13 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".264~mkv",
    "files": "50",
    "numericFiles": 50,
    "storage": "29.61 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".octet-stream",
    "files": "32",
    "numericFiles": 32,
    "storage": "29.35 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ". mkv",
    "files": "31",
    "numericFiles": 31,
    "storage": "27.05 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".unknown_video",
    "files": "31",
    "numericFiles": 31,
    "storage": "27.95 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".0 h264 - mkv",
    "files": "26",
    "numericFiles": 26,
    "storage": "6.69 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".web-dl",
    "files": "18",
    "numericFiles": 18,
    "storage": "9.53 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".x264",
    "files": "15",
    "numericFiles": 15,
    "storage": "18.04 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".265-mkv",
    "files": "14",
    "numericFiles": 14,
    "storage": "7.07 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".esub",
    "files": "11",
    "numericFiles": 11,
    "storage": "14.87 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".720p,mkv",
    "files": "8",
    "numericFiles": 8,
    "storage": "3.34 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".aac-mp4",
    "files": "7",
    "numericFiles": 7,
    "storage": "6.84 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ". [dual audio] [hindi or english] x264 esubs",
    "files": "6",
    "numericFiles": 6,
    "storage": "8.25 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".1",
    "files": "6",
    "numericFiles": 6,
    "storage": "6.48 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".1 esubs",
    "files": "6",
    "numericFiles": 6,
    "storage": "8.40 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".hdm2mkv",
    "files": "6",
    "numericFiles": 6,
    "storage": "12.50 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".mmkv",
    "files": "6",
    "numericFiles": 6,
    "storage": "5.69 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".web-dl-deeplife",
    "files": "6",
    "numericFiles": 6,
    "storage": "2.51 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".x264-mkv",
    "files": "6",
    "numericFiles": 6,
    "storage": "5.55 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".mk",
    "files": "5",
    "numericFiles": 5,
    "storage": "4.07 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".nfo",
    "files": "5",
    "numericFiles": 5,
    "storage": "1.83 MB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".x265",
    "files": "5",
    "numericFiles": 5,
    "storage": "3.94 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".0 esub ~rr",
    "files": "4",
    "numericFiles": 4,
    "storage": "3.89 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".0 ~ (strange) pahe~(black3at)mkv",
    "files": "4",
    "numericFiles": 4,
    "storage": "14.82 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".1-mp4",
    "files": "4",
    "numericFiles": 4,
    "storage": "7.82 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".264mkv",
    "files": "4",
    "numericFiles": 4,
    "storage": "2.66 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".2gb",
    "files": "4",
    "numericFiles": 4,
    "storage": "6.21 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".3gb",
    "files": "4",
    "numericFiles": 4,
    "storage": "9.79 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".hevc-mkv",
    "files": "4",
    "numericFiles": 4,
    "storage": "7.95 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".hevc-psa",
    "files": "4",
    "numericFiles": 4,
    "storage": "5.47 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".me movies4allrequest",
    "files": "4",
    "numericFiles": 4,
    "storage": "1.20 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".mkb",
    "files": "4",
    "numericFiles": 4,
    "storage": "6.07 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".mkkv",
    "files": "4",
    "numericFiles": 4,
    "storage": "5.42 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".panther",
    "files": "4",
    "numericFiles": 4,
    "storage": "6.79 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".tgnmovie",
    "files": "4",
    "numericFiles": 4,
    "storage": "3.99 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ". [dual audio] [hindi or malayalam] x264 esubs",
    "files": "3",
    "numericFiles": 3,
    "storage": "5.27 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ". joe origins (2021) 720p web-dl dual audio [",
    "files": "3",
    "numericFiles": 3,
    "storage": "3.22 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".0] 720p @ssfilms_official3",
    "files": "3",
    "numericFiles": 3,
    "storage": "4.20 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".0] esubs -☈ohit [ak]",
    "files": "3",
    "numericFiles": 3,
    "storage": "6.06 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".mkv**",
    "files": "3",
    "numericFiles": 3,
    "storage": "5.72 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".mp4!",
    "files": "3",
    "numericFiles": 3,
    "storage": "353.10 MB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ". mkv",
    "files": "2",
    "numericFiles": 2,
    "storage": "809.99 MB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ". [dual audio] [hindi or english] x265 esubs",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.29 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".(1985)",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.02 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".(1990)",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.07 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".(2006)",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.13 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".0 h264",
    "files": "2",
    "numericFiles": 2,
    "storage": "642.84 MB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".0 x264",
    "files": "2",
    "numericFiles": 2,
    "storage": "3.33 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".01",
    "files": "2",
    "numericFiles": 2,
    "storage": "7.45 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".02",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.72 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".1] 720p",
    "files": "2",
    "numericFiles": 2,
    "storage": "2.47 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".1] 720p @ssfilms_official3",
    "files": "2",
    "numericFiles": 2,
    "storage": "2.55 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".2018 hin+eng",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.63 GB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".3gpp",
    "files": "2",
    "numericFiles": 2,
    "storage": "413.59 MB",
    "category": "Other / Unknown",
    "page": 3
  },
  {
    "extension": ".aac-mkv",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.62 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".esubs mkv",
    "files": "2",
    "numericFiles": 2,
    "storage": "2.18 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".ishq",
    "files": "2",
    "numericFiles": 2,
    "storage": "2.40 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".m",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.46 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".miv",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.84 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".mkv @amzonmovies",
    "files": "2",
    "numericFiles": 2,
    "storage": "2.50 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".mlv",
    "files": "2",
    "numericFiles": 2,
    "storage": "3.68 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".mp4f",
    "files": "2",
    "numericFiles": 2,
    "storage": "741.90 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".mx]",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.93 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".my darling slave 1973",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.18 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".no",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.48 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".one (2011) hindi 720p bluray x264",
    "files": "2",
    "numericFiles": 2,
    "storage": "2.63 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".one (2011) hindi 720p hevc bluray x265 aac",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.57 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".ramam",
    "files": "2",
    "numericFiles": 2,
    "storage": "4.19 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".rr",
    "files": "2",
    "numericFiles": 2,
    "storage": "797.61 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".tmkv",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.23 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".web-dl-imagine",
    "files": "2",
    "numericFiles": 2,
    "storage": "1.11 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".web-dlmkv",
    "files": "2",
    "numericFiles": 2,
    "storage": "357.84 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".x264-hdhub4umkv",
    "files": "2",
    "numericFiles": 2,
    "storage": "887.17 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ". game of thrones [#s02] (2012) [ hindi ] 480p",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.04 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ". game of thrones [#s03] (2012) [",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.08 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ". [dual audio] [hi",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.08 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ". [dual audio] [hindi or english] x264 esubsmkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.11 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ". [dual audio] [hindi or malayalam] x265 esubs",
    "files": "1",
    "numericFiles": 1,
    "storage": "857.89 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ". [hindi dd 2",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.24 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ". mp4",
    "files": "1",
    "numericFiles": 1,
    "storage": "743.86 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ". part 1",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.40 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ". part 2",
    "files": "1",
    "numericFiles": 1,
    "storage": "807.13 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".(kali billi)mkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "2.43 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0 - [tamil + telugu + hindi] - 450mb - esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "456.92 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0 - tamil] 720p",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.25 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0 2016 hindi 480p bluray ×264 aac esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "475.62 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0 2016 hindi 720p bluray ×264 aac 5",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.20 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0 2016 hindi 720p bluray ×265 hevc aac 5",
    "files": "1",
    "numericFiles": 1,
    "storage": "673.69 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0 by zafar",
    "files": "1",
    "numericFiles": 1,
    "storage": "296.44 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0 x264 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "978.18 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0) - 800mb - esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "832.40 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0) - rrmkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.29 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0) esubs mkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.29 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0] esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "99.68 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".0] x265 hevc e",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.56 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 - english] 1080p",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.88 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 - english] 720p",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.12 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 - tamil] 720p",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.44 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 720p nf web-dl x264 aac esubs",
    "files": "1",
    "numericFiles": 1,
    "storage": "889.24 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 ] esub ~ mkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.55 GB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 by zafar",
    "files": "1",
    "numericFiles": 1,
    "storage": "503.16 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "369.40 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 esub - immortal",
    "files": "1",
    "numericFiles": 1,
    "storage": "1,023.41 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 esub ~ immortal",
    "files": "1",
    "numericFiles": 1,
    "storage": "681.52 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1 hdtvrip by zafar",
    "files": "1",
    "numericFiles": 1,
    "storage": "513.99 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1080p",
    "files": "1",
    "numericFiles": 1,
    "storage": "983.01 MB",
    "category": "Other / Unknown",
    "page": 4
  },
  {
    "extension": ".1] 1080p",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.89 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".1] 720p ㅤ",
    "files": "1",
    "numericFiles": 1,
    "storage": "955.96 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".1] 720p hevc",
    "files": "1",
    "numericFiles": 1,
    "storage": "546.88 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".1] blu-ray 720p",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.27 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".1] esub ~ immortal",
    "files": "1",
    "numericFiles": 1,
    "storage": "847.69 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".1gb - esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.13 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".1gb - esub]",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.14 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".2019 s01e01 480p nf web-dl hindi-x264",
    "files": "1",
    "numericFiles": 1,
    "storage": "162.73 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".2019 s01e02 480p nf web-dl hindi-x264",
    "files": "1",
    "numericFiles": 1,
    "storage": "160.09 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".2019 s01e03 480p nf web-dl hindi-x264",
    "files": "1",
    "numericFiles": 1,
    "storage": "166.17 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".2019 s01e04 480p nf web-dl hindi-x264",
    "files": "1",
    "numericFiles": 1,
    "storage": "133.53 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".2019 s01e05 480p nf web-dl hindi-x264",
    "files": "1",
    "numericFiles": 1,
    "storage": "150.74 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".2019 s01e06 480p nf web-dl hindi-x264",
    "files": "1",
    "numericFiles": 1,
    "storage": "126.20 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".264-ott_downloader_botmp4",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.08 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".265-",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.18 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".265mkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "492.62 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".2gb - esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.21 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".5",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.78 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".5gb",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.48 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".6gb",
    "files": "1",
    "numericFiles": 1,
    "storage": "2.66 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".88gb",
    "files": "1",
    "numericFiles": 1,
    "storage": "2.81 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".8gb",
    "files": "1",
    "numericFiles": 1,
    "storage": "2.90 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".av1-mkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "696.43 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".came",
    "files": "1",
    "numericFiles": 1,
    "storage": "374.16 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".dubbed",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.59 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".esub-pahe",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.70 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".f chapter 1 (2018) blu-ray org hindi 480p",
    "files": "1",
    "numericFiles": 1,
    "storage": "540.94 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".f chapter 1 (2018) blu-ray org hindi 720p",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.48 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".f chapter 1 (2018) blu-ray org hindi 720p hevc",
    "files": "1",
    "numericFiles": 1,
    "storage": "816.58 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".f chapter 2 (2022) blu-ray org hindi 480p",
    "files": "1",
    "numericFiles": 1,
    "storage": "584.98 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".f chapter 2 (2022) blu-ray org hindi 720p",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.55 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".f chapter 2 (2022) blu-ray org hindi 720p hevc",
    "files": "1",
    "numericFiles": 1,
    "storage": "889.15 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".flb",
    "files": "1",
    "numericFiles": 1,
    "storage": "454.32 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".g @dubanime",
    "files": "1",
    "numericFiles": 1,
    "storage": "316.25 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".godfather",
    "files": "1",
    "numericFiles": 1,
    "storage": "908.20 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".h!nd!-ch!nese",
    "files": "1",
    "numericFiles": 1,
    "storage": "755.69 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".hdtv",
    "files": "1",
    "numericFiles": 1,
    "storage": "969.32 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".hevc-ospreay",
    "files": "1",
    "numericFiles": 1,
    "storage": "2.15 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".hevc-streamion",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.56 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".hindi",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.69 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".k",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.57 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".kin (2018) 1080p bluray org",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.88 GB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".mjv",
    "files": "1",
    "numericFiles": 1,
    "storage": "734.78 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".mkc",
    "files": "1",
    "numericFiles": 1,
    "storage": "399.51 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".mkv #pahe",
    "files": "1",
    "numericFiles": 1,
    "storage": "400.93 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".mkv [",
    "files": "1",
    "numericFiles": 1,
    "storage": "537.56 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".mp",
    "files": "1",
    "numericFiles": 1,
    "storage": "155.42 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".mp4mp4",
    "files": "1",
    "numericFiles": 1,
    "storage": "295.96 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".mpr",
    "files": "1",
    "numericFiles": 1,
    "storage": "412.67 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".nkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "720.27 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".p s01e01 480p web-dl hindi-korean x264 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "161.77 MB",
    "category": "Other / Unknown",
    "page": 5
  },
  {
    "extension": ".p s01e01 720p web-dl hindi-korean x264 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "389.10 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".p s01e03 480p web-dl hindi-korean x264 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "178.10 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".p s01e03 720p web-dl hindi-korean x264 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "428.38 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".p s01e05 480p web-dl hindi-korean x264 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "146.36 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".p s01e05 720p web-dl hindi-korean x264 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "352.04 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".p s01e06 480p web-dl hindi-korean x264 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "145.18 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".p s01e06 720p web-dl hindi-korean x264 esub",
    "files": "1",
    "numericFiles": 1,
    "storage": "349.19 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".part",
    "files": "1",
    "numericFiles": 1,
    "storage": "109.70 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".php",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.17 GB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".primefix ~ mkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "2.53 GB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".s02e02",
    "files": "1",
    "numericFiles": 1,
    "storage": "129.08 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".s02e05",
    "files": "1",
    "numericFiles": 1,
    "storage": "117.59 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".set",
    "files": "1",
    "numericFiles": 1,
    "storage": "99.11 KB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".star!=-mkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "1.18 GB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".the snows of kilimanjaro (1952)",
    "files": "1",
    "numericFiles": 1,
    "storage": "492.88 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".torrent",
    "files": "1",
    "numericFiles": 1,
    "storage": "620.36 KB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".x-matroska",
    "files": "1",
    "numericFiles": 1,
    "storage": "936.53 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".x265-mkv",
    "files": "1",
    "numericFiles": 1,
    "storage": "516.66 MB",
    "category": "Other / Unknown",
    "page": 6
  },
  {
    "extension": ".yify",
    "files": "1",
    "numericFiles": 1,
    "storage": "813.32 MB",
    "category": "Other / Unknown",
    "page": 6
  }
];

export const EXTENSION_SCAN_RECORD_BACKUP_2: ScanRecord = {
  scanId: 'LMS-94E3-7DE1',
  completed: '27 Oct 2026',
  status: 'AUDITED',
  databaseCache: 'SAVED',
  reportVersion: 'Archive X v1.0.0'
}

// ─────────────────────────────────────────────────────────────────────────────
// UNIFIED DATASET EXPORT FOR BACKUP 2
// ─────────────────────────────────────────────────────────────────────────────

export const BACKUP_2_DATASET: ChannelIntelligenceDataset = {
  targetInfo: TARGET_INFO_BACKUP_2,
  scanSummary: SCAN_SUMMARY_BACKUP_2,
  categoryBreakdown: CATEGORY_BREAKDOWN_BACKUP_2,
  dataIntegrity: DATA_INTEGRITY_AUDIT_BACKUP_2,
  channelAnalysisScanRecord: CHANNEL_ANALYSIS_SCAN_RECORD_BACKUP_2,
  resolutionBreakdown: RESOLUTION_BREAKDOWN_BACKUP_2,
  resolutionScanRecord: RESOLUTION_SCAN_RECORD_BACKUP_2,
  storageHighlights: STORAGE_HIGHLIGHTS_BACKUP_2,
  storageScanRecord: STORAGE_SCAN_RECORD_BACKUP_2,
  extensionSummary: EXTENSION_SUMMARY_BACKUP_2,
  extensionRecords: EXTENSION_RECORDS_BACKUP_2,
  extensionScanRecord: EXTENSION_SCAN_RECORD_BACKUP_2
}
