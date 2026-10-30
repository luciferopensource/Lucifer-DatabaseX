/**
 * Shared Catalog for Cloudflare Pages Functions
 * Zero fake records — live dynamic registry
 */

export interface MediaMirrorLink {
  name: string
  url: string
  provider: string
  speedBandwidth?: string
}

export interface MediaFormatSpecs {
  container: string
  resolution: string
  pixelDimensions: string
  aspectRatio: string
  videoCodec: string
  codecProfile: string
  bitDepth: string
  colorPrimaries: string
  dynamicRange: string
  videoBitrateKbps: number
  fps: number
}

export interface MediaAudioSpecs {
  primaryFormat: string
  channelLayout: string
  sampleRateKhz: number
  bitDepthBits: number
  audioBitrateKbps: number
  languages: string[]
  commentaryTracks?: number
}

export interface MediaSubtitleSpecs {
  formats: string[]
  languages: string[]
  hearingImpairedAvailable: boolean
}

export interface LuciferFleetMetadata {
  catalogHash: string
  mtprotoMessageId: string
  fleetWorkerCluster: string
  verifiedDate: string
  catalogStatus: string
}

export interface MediaEntry {
  id: string
  slug: string
  title: string
  originalTitle?: string
  year: number
  runtimeMinutes: number
  category: string
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
  sourceCitadel?: string
  sourceDomain?: string
  downloadMirrors?: MediaMirrorLink[]
  fileSizeBytes?: number
}

export const CATALOG_DATA: MediaEntry[] = []
