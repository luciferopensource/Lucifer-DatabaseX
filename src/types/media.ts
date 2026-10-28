export type MediaCategory =
  | 'Cinema'
  | 'Series'
  | 'Audiophile'
  | 'Documentary'
  | 'Animation'

export type ResolutionType =
  | '4320p (8K)'
  | '2160p (4K UHD)'
  | '1080p (FHD)'
  | 'Master Audio'

export type VideoCodecType =
  | 'HEVC / H.265'
  | 'AV1'
  | 'AVC / H.264'
  | 'None (Audio Master)'

export type AudioFormatType =
  | 'Dolby TrueHD Atmos'
  | 'Dolby Digital Plus Atmos'
  | 'DTS-HD MA'
  | 'DTS:X'
  | 'FLAC Lossless'
  | 'PCM 24-bit'

export type DynamicRangeType =
  | 'Dolby Vision Profile 8.1'
  | 'Dolby Vision Profile 7'
  | 'HDR10+'
  | 'HDR10'
  | 'SDR Standard'
  | 'N/A'

export interface MediaFormatSpecs {
  container: 'Matroska (.mkv)' | 'MPEG-4 (.mp4)' | 'FLAC Audio (.flac)' | 'ISO Archival'
  resolution: ResolutionType
  pixelDimensions: string
  aspectRatio: string
  videoCodec: VideoCodecType
  codecProfile: string
  bitDepth: '10-bit' | '12-bit' | '8-bit' | '24-bit PCM'
  colorPrimaries: 'BT.2020' | 'DCI-P3' | 'BT.709'
  dynamicRange: DynamicRangeType
  videoBitrateKbps: number
  fps: number
}

export interface MediaAudioSpecs {
  primaryFormat: AudioFormatType
  channelLayout: '7.1.4' | '7.1' | '5.1.2' | '5.1' | '2.0 Stereo'
  sampleRateKhz: number
  bitDepthBits: number
  audioBitrateKbps: number
  languages: string[]
  commentaryTracks?: number
}

export interface MediaSubtitleSpecs {
  formats: ('PGS Lossless' | 'SRT UTF-8' | 'VobSub' | 'ASS Styled')[]
  languages: string[]
  hearingImpairedAvailable: boolean
}

export interface LuciferFleetMetadata {
  catalogHash: string
  mtprotoMessageId: string
  fleetWorkerCluster: string
  verifiedDate: string
  catalogStatus: 'Archived Master' | 'Active Stream' | 'Preservation Gold'
}

export interface MediaEntry {
  id: string
  slug: string
  title: string
  originalTitle?: string
  year: number
  runtimeMinutes: number
  category: MediaCategory
  genres: string[]
  director?: string
  studio: string
  overview: string
  curatorNote: string
  posterUrl: string
  backdropUrl: string
  rating: string
  format: MediaFormatSpecs
  audio: MediaAudioSpecs
  subtitles: MediaSubtitleSpecs
  luciferFleet: LuciferFleetMetadata
  collectionTags: string[]
  featured?: boolean
}

export interface FilterState {
  query: string
  category: 'All' | MediaCategory
  resolution: 'All' | ResolutionType
  videoCodec: 'All' | VideoCodecType
  audioFormat: 'All' | AudioFormatType
  dynamicRange: 'All' | DynamicRangeType
  sortBy: 'featured' | 'yearDesc' | 'yearAsc' | 'titleAsc' | 'bitrateDesc'
}
