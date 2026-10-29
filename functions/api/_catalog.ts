/**
 * Shared Catalog for Cloudflare Pages Functions
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

export const CATALOG_DATA: MediaEntry[] = [
  {
    id: 'LDX-101',
    slug: 'tears-of-steel-4k-uhd-master',
    title: 'Tears of Steel',
    originalTitle: 'Project Mango (Blender Foundation)',
    year: 2012,
    runtimeMinutes: 12,
    category: 'Cinema',
    genres: ['Science Fiction', 'Post-Apocalyptic', 'VFX Master'],
    director: 'Ian Hubert',
    studio: 'Blender Foundation & Open Movie Project',
    overview: 'Set in a dystopian future in Amsterdam, a group of scientists and warriors attempts to stage a key memory playback to save humanity from destructive rogue robotics.',
    curatorNote: 'Sovereign 4K 10-bit master transfer with custom grading, pristine Matroska container wrapping, and dual multi-channel sound stage mix.',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    rating: 'PG-13',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '2160p (4K UHD)',
      pixelDimensions: '3840×2160',
      aspectRatio: '2.39:1 CinemaScope',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L5.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.2020',
      dynamicRange: 'HDR10',
      videoBitrateKbps: 48500,
      fps: 24.0,
    },
    audio: {
      primaryFormat: 'Dolby TrueHD Atmos',
      channelLayout: '7.1.4',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 4800,
      languages: ['English (Original Master)', 'English (Director Commentary)'],
      commentaryTracks: 1,
    },
    subtitles: {
      formats: ['PGS Lossless', 'SRT UTF-8'],
      languages: ['English [SDH]', 'Spanish', 'French', 'German', 'Hindi'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '8f7a93c4e61b5894b9f2d1283d7120a1cf408a29a0094e8ecbf271b12b204e12',
      mtprotoMessageId: 'LMS-FLEET-MSG-941042',
      fleetWorkerCluster: 'Europe-North-Worker-04',
      verifiedDate: '2026-08-14',
      catalogStatus: 'Archived Master',
    },
    collectionTags: ['Imperial Cinema', 'VFX Benchmarks', '4K UHD HDR'],
    featured: true,
    sourceCitadel: '4KHDHub',
    sourceDomain: '4khdhub.one',
    fileSizeBytes: 4350000000,
    downloadMirrors: [
      { name: 'HubCloud 10Gbps Direct', url: 'https://hubcloud.club/drive/ldx-101', provider: 'HubCloud', speedBandwidth: '10 Gbps' },
      { name: 'Pixeldrain CDN Node', url: 'https://pixeldrain.com/u/ldx-101', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-102',
    slug: 'dune-part-two-imax-dolby-vision',
    title: 'Dune: Part Two',
    originalTitle: 'Dune: Part Two',
    year: 2024,
    runtimeMinutes: 166,
    category: 'Cinema',
    genres: ['Science Fiction', 'Adventure', 'Epic Drama'],
    director: 'Denis Villeneuve',
    studio: 'Legendary Pictures / Warner Bros.',
    overview: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    curatorNote: 'IMAX 1.90:1 expanded aspect ratio sequence preserved with Dolby Vision Profile 8.1 metadata. Uncompressed TrueHD 7.1.4 Atmos spatial mix.',
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    rating: 'PG-13',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '2160p (4K UHD)',
      pixelDimensions: '3840×2160',
      aspectRatio: '1.90:1 IMAX Aspect',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L5.2@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.2020',
      dynamicRange: 'Dolby Vision Profile 8.1',
      videoBitrateKbps: 76500,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'Dolby TrueHD Atmos',
      channelLayout: '7.1.4',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 6200,
      languages: ['English [Original Atmos Master]', 'Hindi [Dolby Digital Plus 5.1]', 'French [DTS-HD MA 5.1]'],
      commentaryTracks: 1,
    },
    subtitles: {
      formats: ['PGS Lossless', 'SRT UTF-8'],
      languages: ['English [SDH]', 'Spanish', 'Hindi', 'Arabic', 'Japanese'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: 'd3f82e1c9a40578b8216c0993ef1b83a005c06497217f2cbba014ef03681329c',
      mtprotoMessageId: 'LMS-FLEET-MSG-958210',
      fleetWorkerCluster: 'Europe-Central-Worker-01',
      verifiedDate: '2026-09-02',
      catalogStatus: 'Preservation Gold',
    },
    collectionTags: ['Imperial Cinema', 'Dolby Vision Vault', '4K UHD HDR', 'Reference Soundstages'],
    featured: true,
    sourceCitadel: 'VegaMovies',
    sourceDomain: 'vegamovies.gallery',
    fileSizeBytes: 24800000000,
    downloadMirrors: [
      { name: 'VegaDrive 7-Mirror HighSpeed', url: 'https://vegadrive.me/view/dune2', provider: 'VegaDrive', speedBandwidth: '10 Gbps' },
      { name: 'Pixeldrain 10Gbps', url: 'https://pixeldrain.com/u/dune2-ldx', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-103',
    slug: 'interstellar-imax-70mm-master',
    title: 'Interstellar',
    originalTitle: 'Interstellar',
    year: 2014,
    runtimeMinutes: 169,
    category: 'Cinema',
    genres: ['Science Fiction', 'Adventure', 'Drama'],
    director: 'Christopher Nolan',
    studio: 'Paramount Pictures / Syncopy',
    overview: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.',
    curatorNote: 'Digitised from native 70mm IMAX photochemical negatives with full dynamic switching between 2.39:1 and 1.43:1 frames.',
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80',
    rating: 'PG-13',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '2160p (4K UHD)',
      pixelDimensions: '3840×2160',
      aspectRatio: '1.78:1 / 2.39:1 Dynamic Switching',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L5.2@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.2020',
      dynamicRange: 'HDR10',
      videoBitrateKbps: 84000,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'DTS-HD MA',
      channelLayout: '5.1',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 4500,
      languages: ['English (Original Uncompressed)', 'Hindi (Dubbed 5.1)', 'German (DTS 5.1)'],
      commentaryTracks: 0,
    },
    subtitles: {
      formats: ['PGS Lossless', 'SRT UTF-8'],
      languages: ['English [SDH]', 'French', 'German', 'Italian', 'Hindi'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '1a90c4e7f3325bda147d33b49ecb25078c52084b66d7e0129bcfe53112a02b1f',
      mtprotoMessageId: 'LMS-FLEET-MSG-912440',
      fleetWorkerCluster: 'US-East-Worker-02',
      verifiedDate: '2026-07-19',
      catalogStatus: 'Archived Master',
    },
    collectionTags: ['Imperial Cinema', 'Reference Soundstages', '4K UHD HDR', 'VFX Benchmarks'],
    featured: true,
    sourceCitadel: 'MoviesDrive',
    sourceDomain: 'moviesdrive.me',
    fileSizeBytes: 31200000000,
    downloadMirrors: [
      { name: 'GDFlix Enterprise Drive', url: 'https://gdflix.dev/file/interstellar-4k', provider: 'GDFlix', speedBandwidth: 'Fast' },
      { name: 'HubCloud Lossless Node', url: 'https://hubcloud.club/drive/interstellar', provider: 'HubCloud', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-104',
    slug: 'wanted-2008-1080p-bluray-ddp51',
    title: 'Wanted',
    originalTitle: 'Wanted (2008)',
    year: 2008,
    runtimeMinutes: 110,
    category: 'Cinema',
    genres: ['Action', 'Thriller', 'Crime'],
    director: 'Timur Bekmambetov',
    studio: 'Universal Pictures / Spyglass Entertainment',
    overview: 'A frustrated office worker discovers that he is the son of a professional assassin and that he shares his fathers superhuman killing abilities.',
    curatorNote: 'Authentic sync record extracted directly from smart_sync.db [ID 1995]. High bitrate 1080p BluRay transfer with discrete Dolby Digital Plus 5.1.',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80',
    rating: 'R',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '1080p (FHD)',
      pixelDimensions: '1920×1080',
      aspectRatio: '2.35:1 Anamorphic',
      videoCodec: 'AVC / H.264',
      codecProfile: 'High@L4.1',
      bitDepth: '8-bit',
      colorPrimaries: 'BT.709',
      dynamicRange: 'SDR Standard',
      videoBitrateKbps: 18200,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'Dolby Digital Plus Atmos',
      channelLayout: '5.1',
      sampleRateKhz: 48,
      bitDepthBits: 16,
      audioBitrateKbps: 640,
      languages: ['English [Original Master Audio]'],
    },
    subtitles: {
      formats: ['SRT UTF-8'],
      languages: ['English', 'Spanish', 'French'],
      hearingImpairedAvailable: false,
    },
    luciferFleet: {
      catalogHash: '7c9e1b23908f51a70c0de94b2a8d3f11e9a40578b8216c0993ef1b83a005c064',
      mtprotoMessageId: 'LMS-FLEET-MSG-001995',
      fleetWorkerCluster: 'Europe-North-Worker-04',
      verifiedDate: '2026-10-24',
      catalogStatus: 'Active Stream',
    },
    collectionTags: ['Imperial Cinema', 'High Bitrate FHD', 'SmartSync Fleet Ingest'],
    featured: false,
    sourceCitadel: 'SmartSync Fleet',
    sourceDomain: 'smart_sync.db #1995',
    fileSizeBytes: 4194304000,
    downloadMirrors: [
      { name: 'Lucifer MTProto Conduit', url: 'https://t.me/c/lucifer_fleet/1995', provider: 'Telegram Fleet', speedBandwidth: 'Uncapped' }
    ]
  },
  {
    id: 'LDX-201',
    slug: 'spider-noir-season-1-2160p-uhd',
    title: 'Spider-Noir',
    originalTitle: 'Spider-Noir (Season 1)',
    year: 2025,
    runtimeMinutes: 52,
    category: 'Series',
    genres: ['Noir Thriller', 'Superhero', 'Period Mystery'],
    director: 'Oren Uziel & Steve Lightfoot',
    studio: 'Sony Pictures Television / Amazon MGM',
    overview: 'In 1930s New York, an aging, down-on-his-luck private investigator is forced to grapple with his past life as the city’s only superhero.',
    curatorNote: 'Extracted directly from smart_sync.db [ID 14]. Native 2160p 4K UHD Amazon Prime master with monochrome high-contrast grading.',
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    rating: 'TV-MA',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '2160p (4K UHD)',
      pixelDimensions: '3840×2160',
      aspectRatio: '16:9 Television Master',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L5.1@Main',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.2020',
      dynamicRange: 'HDR10+',
      videoBitrateKbps: 32400,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'Dolby Digital Plus Atmos',
      channelLayout: '5.1',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 768,
      languages: ['English [Original Master Audio]', 'Hindi [Dubbed 5.1]', 'Spanish [Stereo]'],
    },
    subtitles: {
      formats: ['SRT UTF-8'],
      languages: ['English [SDH]', 'Hindi', 'French', 'German'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b',
      mtprotoMessageId: 'LMS-FLEET-MSG-000014',
      fleetWorkerCluster: 'Europe-North-Worker-04',
      verifiedDate: '2026-10-25',
      catalogStatus: 'Active Stream',
    },
    collectionTags: ['Episodic Pantheons', '4K UHD HDR', 'SmartSync Fleet Ingest'],
    featured: true,
    sourceCitadel: '4KHDHub',
    sourceDomain: '4khdhub.one',
    fileSizeBytes: 3910000000,
    downloadMirrors: [
      { name: '4KHDHub Season Accordion', url: 'https://4khdhub.one/series/spider-noir-s01', provider: '4KHDHub', speedBandwidth: 'Gigabit' }
    ]
  },
  {
    id: 'LDX-203',
    slug: 'arcane-season-2-2160p-uhd-hdr-atmos',
    title: 'Arcane: League of Legends',
    originalTitle: 'Arcane: Season Two',
    year: 2024,
    runtimeMinutes: 44,
    category: 'Series',
    genres: ['Animation', 'Action Fantasy', 'Cyberpunk Steampunk'],
    director: 'Christian Linke & Alex Yee',
    studio: 'Fortiche Production / Riot Games',
    overview: 'Amidst the escalating conflict between Piltover and Zaun, sisters Vi and Jinx find themselves on opposing sides of a devastating technological war.',
    curatorNote: 'Fortiche proprietary hybrid 2D/3D animation pipeline delivered in native 2160p HDR with dynamic color gamuts and spatial Dolby Atmos.',
    posterUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    rating: 'TV-14',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '2160p (4K UHD)',
      pixelDimensions: '3840×2160',
      aspectRatio: '16:9 Widescreen',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L5.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.2020',
      dynamicRange: 'Dolby Vision Profile 8.1',
      videoBitrateKbps: 38200,
      fps: 24.0,
    },
    audio: {
      primaryFormat: 'Dolby TrueHD Atmos',
      channelLayout: '7.1.4',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 4800,
      languages: ['English (Original Master)', 'Japanese (Studio Dub)', 'French (Fortiche Dub)'],
      commentaryTracks: 1,
    },
    subtitles: {
      formats: ['PGS Lossless', 'SRT UTF-8'],
      languages: ['English [SDH]', 'Japanese', 'Korean', 'Spanish', 'Hindi'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b',
      mtprotoMessageId: 'LMS-FLEET-MSG-980145',
      fleetWorkerCluster: 'Europe-Central-Worker-02',
      verifiedDate: '2026-09-12',
      catalogStatus: 'Preservation Gold',
    },
    collectionTags: ['Episodic Pantheons', 'Dolby Vision Vault', 'Reference Soundstages'],
    featured: true,
    sourceCitadel: 'VegaMovies',
    sourceDomain: 'vegamovies.gallery',
    fileSizeBytes: 18400000000,
    downloadMirrors: [
      { name: 'VegaDrive Complete Season Batch', url: 'https://vegadrive.me/view/arcane-s2', provider: 'VegaDrive', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-301',
    slug: 'eighty-six-s01-dual-audio-bdrip-ember',
    title: '86: Eighty-Six',
    originalTitle: '86 -エイティシックス- (Season 1)',
    year: 2021,
    runtimeMinutes: 24,
    category: 'Animation',
    genres: ['Mecha', 'Military Science Fiction', 'Psychological Drama'],
    director: 'Toshimasa Ishii',
    studio: 'A-1 Pictures / Aniplex',
    overview: 'The Republic of San Magnolia has been at war with the Empire of Giad for years. Outside the 85 districts lies District 86, where youths dubbed the Eighty-Six fight.',
    curatorNote: 'Discovered in smart_sync.db [ID 68977]. High-fidelity EMBER BDRip encode with 10-bit color depth, Dual Audio Japanese/English channels and Hiroyuki Sawano score.',
    posterUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    rating: 'TV-14',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '1080p (FHD)',
      pixelDimensions: '1920×1080',
      aspectRatio: '16:9 Widescreen',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L4.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.709',
      dynamicRange: 'SDR Standard',
      videoBitrateKbps: 11500,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'Dolby Digital Plus Atmos',
      channelLayout: '2.0 Stereo',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 448,
      languages: ['Japanese [Original Master]', 'English [Funimation Dub]'],
    },
    subtitles: {
      formats: ['ASS Styled', 'SRT UTF-8'],
      languages: ['English [Styled Typeset]', 'Spanish', 'French'],
      hearingImpairedAvailable: false,
    },
    luciferFleet: {
      catalogHash: '2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c',
      mtprotoMessageId: 'LMS-FLEET-MSG-068977',
      fleetWorkerCluster: 'Asia-East-Worker-02',
      verifiedDate: '2026-10-19',
      catalogStatus: 'Active Stream',
    },
    collectionTags: ['Anime Sovereignty', 'SmartSync Fleet Ingest', 'High Bitrate FHD'],
    featured: true,
    sourceCitadel: 'Toonworld4All',
    sourceDomain: 'toonworld4all.me',
    fileSizeBytes: 4194304000,
    downloadMirrors: [
      { name: 'Toonworld Direct GD Conduit', url: 'https://toonworld4all.me/86-s01', provider: 'Toonworld', speedBandwidth: 'Fast' }
    ]
  },
  {
    id: 'LDX-401',
    slug: 'hans-zimmer-live-in-prague-atmos-master',
    title: 'Hans Zimmer: Live in Prague',
    originalTitle: 'Hans Zimmer: Live in Prague',
    year: 2017,
    runtimeMinutes: 138,
    category: 'Audiophile',
    genres: ['Orchestral Live', 'Film Score', 'Spatial Master'],
    director: 'Tim Van Someren',
    studio: 'Eagle Rock Entertainment',
    overview: 'Accompanied by a 72-piece orchestra, choir, and rock band, legendary composer Hans Zimmer performs his most memorable cinematic compositions live at the O2 Arena in Prague.',
    curatorNote: 'Pinnacle reference audio disc featuring Gladiator, Inception, Interstellar. Discrete Dolby Atmos 7.1.4 height channel rendering with 24-bit/96kHz uncompressed physical studio mix.',
    posterUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=80',
    rating: 'G',
    format: {
      container: 'Matroska (.mkv)',
      resolution: 'Master Audio',
      pixelDimensions: '3840×2160 (Audio Master Stage)',
      aspectRatio: '16:9 Stage Capture',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L5.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.709',
      dynamicRange: 'SDR Standard',
      videoBitrateKbps: 34000,
      fps: 29.97,
    },
    audio: {
      primaryFormat: 'Dolby TrueHD Atmos',
      channelLayout: '7.1.4',
      sampleRateKhz: 96,
      bitDepthBits: 24,
      audioBitrateKbps: 8200,
      languages: ['English (Live Performance Audio)', 'Musician Channel Commentary'],
      commentaryTracks: 1,
    },
    subtitles: {
      formats: ['SRT UTF-8'],
      languages: ['English (Track Titles & Lyrics)'],
      hearingImpairedAvailable: false,
    },
    luciferFleet: {
      catalogHash: '3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
      mtprotoMessageId: 'LMS-FLEET-MSG-899401',
      fleetWorkerCluster: 'Europe-Central-Worker-03',
      verifiedDate: '2026-06-30',
      catalogStatus: 'Preservation Gold',
    },
    collectionTags: ['Reference Soundstages', 'Imperial Cinema'],
    featured: true,
    sourceCitadel: 'Gofile',
    sourceDomain: 'gofile.io',
    fileSizeBytes: 38200000000,
    downloadMirrors: [
      { name: 'Gofile Direct High-Speed Vault', url: 'https://gofile.io/d/hans-zimmer-prague', provider: 'Gofile', speedBandwidth: 'Unlimited' }
    ]
  },
  {
    id: 'LDX-501',
    slug: 'chronos-8k-65mm-archival-master',
    title: 'Chronos',
    originalTitle: 'Chronos (1985)',
    year: 1985,
    runtimeMinutes: 42,
    category: 'Documentary',
    genres: ['Time-Lapse', 'Non-Verbal Cinema', 'Visual Masterpiece'],
    director: 'Ron Fricke',
    studio: 'Chronos Film / IMAX',
    overview: 'Filmed across 50 locations on five continents in custom 65mm time-lapse cameras, Chronos portrays the history of civilization and cosmic eternity.',
    curatorNote: 'Digitized from the original 65mm negative at 8K resolution (7680×4320). Michael Stearns electronic synth score presented in 24-bit 96kHz PCM 5.1 surround sound.',
    posterUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    rating: 'G',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '4320p (8K)',
      pixelDimensions: '7680×4320',
      aspectRatio: '1.78:1 IMAX Full Frame',
      videoCodec: 'AV1',
      codecProfile: 'Main@L6.2@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.2020',
      dynamicRange: 'HDR10+',
      videoBitrateKbps: 110000,
      fps: 60.0,
    },
    audio: {
      primaryFormat: 'PCM 24-bit',
      channelLayout: '5.1',
      sampleRateKhz: 96,
      bitDepthBits: 24,
      audioBitrateKbps: 6912,
      languages: ['Instrumental Soundtrack (Non-Verbal Master)'],
      commentaryTracks: 0,
    },
    subtitles: {
      formats: ['SRT UTF-8'],
      languages: ['English (Geographic Locations & Era Markers)'],
      hearingImpairedAvailable: false,
    },
    luciferFleet: {
      catalogHash: '4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b',
      mtprotoMessageId: 'LMS-FLEET-MSG-991002',
      fleetWorkerCluster: 'Europe-North-Worker-04',
      verifiedDate: '2026-09-25',
      catalogStatus: 'Preservation Gold',
    },
    collectionTags: ['Imperial Cinema', 'VFX Benchmarks', 'Reference Soundstages'],
    featured: true,
    sourceCitadel: 'Gateway Matrix',
    sourceDomain: 'hubcloud.club',
    fileSizeBytes: 34800000000,
    downloadMirrors: [
      { name: 'Gateway Matrix Direct 8K', url: 'https://hubcloud.club/drive/chronos-8k', provider: 'Gateway Matrix', speedBandwidth: '10 Gbps' }
    ]
  }
]
