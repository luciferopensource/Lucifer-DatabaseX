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

export const COLLECTION_PRESETS: CollectionPreset[] = [
  {
    id: 'imperial-cinema',
    title: 'Imperial Cinema Vault',
    description: 'Sovereign 4K/8K masterworks, photochemical 70mm scans, and reference theatrical presentations.',
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    badge: 'Royal Masterpieces',
    itemCount: 7,
    filterCategory: 'Cinema',
  },
  {
    id: 'dolby-vision-vault',
    title: 'Dolby Vision Dynamic Range',
    description: 'Pristine 12-bit & 10-bit Dolby Vision Profile 7 & 8.1 transfers mastered up to 4,000 nits.',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    badge: 'Dolby Vision P7/P8',
    itemCount: 4,
    filterCategory: 'Cinema',
  },
  {
    id: 'reference-soundstages',
    title: 'Reference Spatial Soundstages',
    description: 'Dolby TrueHD Atmos 7.1.4 and uncompressed 24-bit 192kHz PCM FLAC studio acoustic captures.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    badge: 'TrueHD Atmos 7.1.4',
    itemCount: 7,
    filterCategory: 'Audiophile',
  },
  {
    id: 'anime-sovereignty',
    title: 'Anime Sovereignty',
    description: 'Uncompressed Studio Ghibli cel scans and A-1 Pictures 10-bit Dual Audio masterpieces.',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    badge: 'Cel Masters',
    itemCount: 2,
    filterCategory: 'Animation',
  },
  {
    id: 'nature-cosmic',
    title: 'Nature & Cosmic Symphonies',
    description: '8K 60fps time-lapses and BBC Earth wildlife migrations with Sir David Attenborough narration.',
    coverImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    badge: '8K Archival',
    itemCount: 2,
    filterCategory: 'Documentary',
  },
]

export const CATALOG_ENTRIES: MediaEntry[] = [
  // 1. Cinema — Sovereign 4K / 8K Masterpieces
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
    overview:
      'Set in a dystopian future in Amsterdam, a group of scientists and warriors attempts to stage a key memory playback to save humanity from destructive rogue robotics.',
    curatorNote:
      'Sovereign 4K 10-bit master transfer with custom grading, pristine Matroska container wrapping, and dual multi-channel sound stage mix.',
    posterUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
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
      { name: 'Pixeldrain CDN Node', url: 'https://pixeldrain.com/u/ldx-101', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' },
      { name: 'Gofile Lossless Vault', url: 'https://gofile.io/d/ldx-101', provider: 'Gofile', speedBandwidth: 'Unlimited' }
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
    overview:
      'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family, confronting a choice between the love of his life and the fate of the known universe.',
    curatorNote:
      'IMAX 1.90:1 expanded aspect ratio sequence preserved with Dolby Vision Profile 8.1 metadata. Uncompressed TrueHD 7.1.4 Atmos spatial mix with dynamic ceiling channels.',
    posterUrl:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
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
      { name: 'V-Cloud Encrypted Stream', url: 'https://vcloud.beer/watch/dune2', provider: 'V-Cloud', speedBandwidth: 'Gigabit' },
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
    overview:
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.',
    curatorNote:
      'Digitised from native 70mm IMAX photochemical negatives with full dynamic switching between 2.39:1 and 1.43:1 frames. DTS-HD Master Audio 5.1 uncompressed 24-bit physical mix.',
    posterUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80',
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
      { name: 'HubCloud Lossless Node', url: 'https://hubcloud.club/drive/interstellar', provider: 'HubCloud', speedBandwidth: '10 Gbps' },
      { name: 'Gofile Cloud Vault', url: 'https://gofile.io/d/interstellar', provider: 'Gofile', speedBandwidth: 'Unlimited' }
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
    overview:
      'A frustrated office worker discovers that he is the son of a professional assassin and that he shares his fathers superhuman killing abilities.',
    curatorNote:
      'Authentic sync record extracted directly from smart_sync.db [ID 1995]. High bitrate 1080p BluRay transfer with discrete Dolby Digital Plus 5.1 multi-channel surround.',
    posterUrl:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80',
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
      { name: 'Lucifer MTProto Conduit', url: 'https://t.me/c/lucifer_fleet/1995', provider: 'Telegram Fleet', speedBandwidth: 'Uncapped' },
      { name: 'Pixeldrain Mirror', url: 'https://pixeldrain.com/u/wanted-08', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-105',
    slug: '300-2006-1080p-bluray-tigole-hevc',
    title: '300',
    originalTitle: '300 (2006)',
    year: 2006,
    runtimeMinutes: 117,
    category: 'Cinema',
    genres: ['Action', 'War', 'Historical Fantasy'],
    director: 'Zack Snyder',
    studio: 'Warner Bros. Pictures / Legendary',
    overview:
      'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C., creating a legendary stand that inspires all of Greece.',
    curatorNote:
      'Grounded directly in smart_sync.db [ID 75431]. Pristine 10-bit HEVC encode preserving intense film grain aesthetic and 6-channel discrete audio.',
    posterUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    rating: 'R',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '1080p (FHD)',
      pixelDimensions: '1920×1080',
      aspectRatio: '2.40:1 CinemaScope',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L4.1@Main',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.709',
      dynamicRange: 'SDR Standard',
      videoBitrateKbps: 9800,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'Dolby Digital Plus Atmos',
      channelLayout: '5.1',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 640,
      languages: ['English', 'Greek Subtitles Embedded'],
    },
    subtitles: {
      formats: ['PGS Lossless', 'SRT UTF-8'],
      languages: ['English [SDH]', 'Spanish', 'Greek'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '8b7d12f3e4a509c81b2374e508fa29c41b802de90c4e7f3325bda147d33b49ec',
      mtprotoMessageId: 'LMS-FLEET-MSG-075431',
      fleetWorkerCluster: 'Europe-East-Worker-03',
      verifiedDate: '2026-10-22',
      catalogStatus: 'Active Stream',
    },
    collectionTags: ['Imperial Cinema', 'High Bitrate FHD', 'SmartSync Fleet Ingest'],
    featured: false,
    sourceCitadel: 'SmartSync Fleet',
    sourceDomain: 'smart_sync.db #75431',
    fileSizeBytes: 4194304000,
    downloadMirrors: [
      { name: 'FastCloud Direct Stream', url: 'https://fastcloud.day/300-tigole', provider: 'FastCloud', speedBandwidth: 'High-Speed' },
      { name: 'Pixeldrain 10Gbps', url: 'https://pixeldrain.com/u/300-bluray', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-106',
    slug: 'vikram-2022-dual-ds4k-webrip-atmos',
    title: 'Vikram',
    originalTitle: 'விக்ரம் (2022)',
    year: 2022,
    runtimeMinutes: 174,
    category: 'Cinema',
    genres: ['Action', 'Thriller', 'Lokesh Cinematic Universe'],
    director: 'Lokesh Kanagaraj',
    studio: 'Raaj Kamal Films International',
    overview:
      'A covert investigation into a series of mysterious killings leads a special investigator to a clandestine syndicate, sparking an all-out war with a masked vigilante.',
    curatorNote:
      'Discovered in smart_sync.db [ID 2750]. Downsampled from 4K Master (DS4K) with Dual Audio Dolby Atmos spatial audio mixing and pristine black levels.',
    posterUrl:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80',
    rating: 'UA 16+',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '1080p (FHD)',
      pixelDimensions: '1920×1080',
      aspectRatio: '2.39:1 CinemaScope',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L4.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.709',
      dynamicRange: 'SDR Standard',
      videoBitrateKbps: 11200,
      fps: 24.0,
    },
    audio: {
      primaryFormat: 'Dolby Digital Plus Atmos',
      channelLayout: '5.1',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 768,
      languages: ['Tamil [Original Atmos Master]', 'Hindi [Dubbed Atmos 5.1]'],
    },
    subtitles: {
      formats: ['SRT UTF-8'],
      languages: ['English', 'Hindi'],
      hearingImpairedAvailable: false,
    },
    luciferFleet: {
      catalogHash: '34a8e9f0b12c7d6e5a40382910fedcba9876543210abcdef0123456789abcdef',
      mtprotoMessageId: 'LMS-FLEET-MSG-002750',
      fleetWorkerCluster: 'Asia-South-Worker-01',
      verifiedDate: '2026-10-18',
      catalogStatus: 'Active Stream',
    },
    collectionTags: ['Imperial Cinema', 'SmartSync Fleet Ingest', 'Reference Soundstages'],
    featured: false,
    sourceCitadel: 'ZinkMovies',
    sourceDomain: 'zinkmovies.com',
    fileSizeBytes: 2438529626,
    downloadMirrors: [
      { name: 'HubCloud 10Gbps Direct', url: 'https://hubcloud.club/drive/vikram-ds4k', provider: 'HubCloud', speedBandwidth: '10 Gbps' },
      { name: 'Gofile Cloud Vault', url: 'https://gofile.io/d/vikram-ds4k', provider: 'Gofile', speedBandwidth: 'Unlimited' }
    ]
  },
  {
    id: 'LDX-107',
    slug: 'blade-runner-2049-dolby-vision-remux',
    title: 'Blade Runner 2049',
    originalTitle: 'Blade Runner 2049',
    year: 2017,
    runtimeMinutes: 164,
    category: 'Cinema',
    genres: ['Neo-Noir', 'Cyberpunk', 'Science Fiction'],
    director: 'Denis Villeneuve',
    studio: 'Alcon Entertainment / Warner Bros.',
    overview:
      'Officer K, a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what is left of society into chaos.',
    curatorNote:
      'Archival 2160p UHD BluRay REMUX with Roger Deakins legendary golden-orange cinematography and Dolby Atmos master physical track.',
    posterUrl:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    rating: 'R',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '2160p (4K UHD)',
      pixelDimensions: '3840×2160',
      aspectRatio: '2.39:1 CinemaScope',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L5.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.2020',
      dynamicRange: 'Dolby Vision Profile 7',
      videoBitrateKbps: 68000,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'Dolby TrueHD Atmos',
      channelLayout: '7.1.4',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 5400,
      languages: ['English (Original Dolby Atmos)', 'French (DTS-HD MA 5.1)'],
      commentaryTracks: 0,
    },
    subtitles: {
      formats: ['PGS Lossless', 'SRT UTF-8'],
      languages: ['English [SDH]', 'Spanish', 'French', 'German', 'Japanese'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '6c1a8e920b7f4d3091e2b5883a901f4c730e62590bd19245aaef8110b2401f8e',
      mtprotoMessageId: 'LMS-FLEET-MSG-933108',
      fleetWorkerCluster: 'Europe-North-Worker-02',
      verifiedDate: '2026-08-01',
      catalogStatus: 'Preservation Gold',
    },
    collectionTags: ['Imperial Cinema', 'Dolby Vision Vault', '4K UHD HDR', 'Reference Soundstages'],
    featured: true,
    sourceCitadel: 'YTS',
    sourceDomain: 'yts.mx',
    fileSizeBytes: 34500000000,
    downloadMirrors: [
      { name: 'YTS Sovereign Tracker Swarm', url: 'magnet:?xt=urn:btih:6c1a8e920b7f4d3091e2b5883a901f4c730e6259', provider: 'YTS Swarm', speedBandwidth: 'Peer Mesh' },
      { name: 'Pixeldrain 10Gbps CDN', url: 'https://pixeldrain.com/u/br2049-remux', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },

  // 2. Series — Sovereign Multi-Episode Packs & Ep Accordions
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
    overview:
      'In 1930s New York, an aging, down-on-his-luck private investigator is forced to grapple with his past life as the city’s only superhero.',
    curatorNote:
      'Extracted directly from smart_sync.db [ID 14]. Native 2160p 4K UHD Amazon Prime master with monochrome high-contrast grading, Dolby Digital Plus 5.1 multi-channel mix.',
    posterUrl:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
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
      { name: '4KHDHub Season Accordion', url: 'https://4khdhub.one/series/spider-noir-s01', provider: '4KHDHub', speedBandwidth: 'Gigabit' },
      { name: 'Pixeldrain 10Gbps Node', url: 'https://pixeldrain.com/u/spider-noir-s01', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-202',
    slug: 'westworld-season-1-bluray-ddp71',
    title: 'Westworld',
    originalTitle: 'Westworld (Season 1: The Maze)',
    year: 2016,
    runtimeMinutes: 68,
    category: 'Series',
    genres: ['Science Fiction', 'Dystopian', 'Mystery'],
    director: 'Jonathan Nolan & Lisa Joy',
    studio: 'HBO Entertainment / Bad Robot / Kilter Films',
    overview:
      'At a technologically advanced Wild West theme park populated by android hosts, guests indulge their wildest fantasies until the hosts begin exhibiting synthetic consciousness.',
    curatorNote:
      'Direct smart_sync.db record [ID 4402]. Complete Season 1 BluRay x265 encode with discrete Dolby Digital Plus 7.1 discrete surround and Ramin Djawadi orchestral score.',
    posterUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    rating: 'TV-MA',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '1080p (FHD)',
      pixelDimensions: '1920×1080',
      aspectRatio: '16:9 Television Master',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L4.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.709',
      dynamicRange: 'SDR Standard',
      videoBitrateKbps: 14500,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'Dolby Digital Plus Atmos',
      channelLayout: '7.1',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 1024,
      languages: ['English [Original Master Audio]', 'French [DDP 5.1]', 'German [DDP 5.1]'],
    },
    subtitles: {
      formats: ['PGS Lossless', 'SRT UTF-8'],
      languages: ['English [SDH]', 'Spanish', 'French', 'Dutch', 'Chinese'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '9f8e7d6c5b4a392817061524334251607f8e9d0c1b2a39485766758493021fec',
      mtprotoMessageId: 'LMS-FLEET-MSG-004402',
      fleetWorkerCluster: 'Europe-West-Worker-01',
      verifiedDate: '2026-10-23',
      catalogStatus: 'Active Stream',
    },
    collectionTags: ['Episodic Pantheons', 'High Bitrate FHD', 'SmartSync Fleet Ingest'],
    featured: false,
    sourceCitadel: 'SmartSync Fleet',
    sourceDomain: 'smart_sync.db #4402',
    fileSizeBytes: 4194304000,
    downloadMirrors: [
      { name: 'Lucifer MTProto Node', url: 'https://t.me/c/lucifer_fleet/4402', provider: 'Telegram Fleet', speedBandwidth: 'Uncapped' },
      { name: 'Gofile Cloud Vault', url: 'https://gofile.io/d/westworld-s01', provider: 'Gofile', speedBandwidth: 'Unlimited' }
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
    overview:
      'Amidst the escalating conflict between the utopian city of Piltover and the oppressed underground of Zaun, sisters Vi and Jinx find themselves on opposing sides of a devastating technological war.',
    curatorNote:
      'Fortiche proprietary hybrid 2D/3D animation pipeline delivered in native 2160p HDR with dynamic color gamuts and immersive spatial Dolby Atmos soundtrack.',
    posterUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
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
      { name: 'VegaDrive Complete Season Batch', url: 'https://vegadrive.me/view/arcane-s2', provider: 'VegaDrive', speedBandwidth: '10 Gbps' },
      { name: 'FastDL Instant Conduit', url: 'https://fastdl.beer/arcane-s2', provider: 'FastDL', speedBandwidth: 'High-Speed' },
      { name: 'Pixeldrain 10Gbps Node', url: 'https://pixeldrain.com/u/arcane-s2', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-204',
    slug: 'hostage-s01-1080p-atmos-multi',
    title: 'Hostage',
    originalTitle: 'Hostage (Season 1)',
    year: 2024,
    runtimeMinutes: 48,
    category: 'Series',
    genres: ['Crime', 'Drama', 'Action Thriller'],
    director: 'Alon Zingman',
    studio: 'Netflix Studios / Endemol Shine',
    overview:
      'A brilliant surgeon tasked with operating on a national leader is plunged into an ethical and survival abyss when armed assailants seize her family.',
    curatorNote:
      'Direct smart_sync.db catalog entry [ID 4822]. Clean 1080p NF WEB-DL with multi-audio package including discrete Dolby Atmos spatial cues.',
    posterUrl:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80',
    rating: 'TV-MA',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '1080p (FHD)',
      pixelDimensions: '1920×1080',
      aspectRatio: '16:9 Television Master',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L4.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.709',
      dynamicRange: 'SDR Standard',
      videoBitrateKbps: 9200,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'Dolby Digital Plus Atmos',
      channelLayout: '5.1',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 640,
      languages: ['Hebrew [Original Master]', 'English [Atmos Dub]', 'Hindi [Stereo]'],
    },
    subtitles: {
      formats: ['SRT UTF-8'],
      languages: ['English [SDH]', 'Hebrew', 'Arabic'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e',
      mtprotoMessageId: 'LMS-FLEET-MSG-004822',
      fleetWorkerCluster: 'Europe-East-Worker-02',
      verifiedDate: '2026-10-21',
      catalogStatus: 'Active Stream',
    },
    collectionTags: ['Episodic Pantheons', 'SmartSync Fleet Ingest', 'Reference Soundstages'],
    featured: false,
    sourceCitadel: 'HDHub4u',
    sourceDomain: 'hdhub4u.ms',
    fileSizeBytes: 1250536727,
    downloadMirrors: [
      { name: 'HDHub4u Instant FastDL', url: 'https://hdhub4u.ms/series/hostage', provider: 'HDHub4u', speedBandwidth: 'Fast' },
      { name: 'Pixeldrain 10Gbps CDN', url: 'https://pixeldrain.com/u/hostage-ep01', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },

  // 3. Animation — Masters & Anime Feeds
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
    overview:
      'The Republic of San Magnolia has been at war with the Empire of Giad for years. Outside the 85 districts lies District 86, where youths dubbed the Eighty-Six are forced to pilot autonomous combat drones.',
    curatorNote:
      'Discovered in smart_sync.db [ID 68977]. High-fidelity EMBER BDRip encode with 10-bit color depth, Dual Audio Japanese/English Dolby Digital Plus channels and Hiroyuki Sawano score.',
    posterUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
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
      { name: 'Toonworld Direct GD Conduit', url: 'https://toonworld4all.me/86-s01', provider: 'Toonworld', speedBandwidth: 'Fast' },
      { name: 'Pixeldrain 10Gbps Node', url: 'https://pixeldrain.com/u/86-ember-s01', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-302',
    slug: 'spirited-away-4k-uhd-ghibli-master',
    title: 'Spirited Away',
    originalTitle: '千と千尋の神隠し (Sen to Chihiro no Kamikakushi)',
    year: 2001,
    runtimeMinutes: 125,
    category: 'Animation',
    genres: ['Fantasy', 'Adventure', 'Studio Ghibli Masterpiece'],
    director: 'Hayao Miyazaki',
    studio: 'Studio Ghibli / Tokuma Shoten',
    overview:
      'During her family’s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
    curatorNote:
      'Photochemical 35mm negative scan preserved in 2160p with original hand-drawn cel color fidelity. Uncompressed DTS-HD MA 5.1 Japanese master and Joe Hisaishi symphonic score.',
    posterUrl:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    rating: 'PG',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '2160p (4K UHD)',
      pixelDimensions: '3840×2160',
      aspectRatio: '1.85:1 Academy Flat',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L5.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.2020',
      dynamicRange: 'HDR10',
      videoBitrateKbps: 52000,
      fps: 23.976,
    },
    audio: {
      primaryFormat: 'DTS-HD MA',
      channelLayout: '5.1',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 3800,
      languages: ['Japanese (Original DTS-HD MA 5.1)', 'English (Disney Dub 5.1)', 'French (DTS 5.1)'],
      commentaryTracks: 0,
    },
    subtitles: {
      formats: ['PGS Lossless', 'SRT UTF-8'],
      languages: ['English [Original Translation]', 'English [Dubtitles]', 'French', 'Japanese'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f',
      mtprotoMessageId: 'LMS-FLEET-MSG-910405',
      fleetWorkerCluster: 'Asia-East-Worker-01',
      verifiedDate: '2026-07-28',
      catalogStatus: 'Preservation Gold',
    },
    collectionTags: ['Anime Sovereignty', 'Imperial Cinema', '4K UHD HDR', 'Reference Soundstages'],
    featured: true,
    sourceCitadel: 'CineVood',
    sourceDomain: 'cinevood.live',
    fileSizeBytes: 28400000000,
    downloadMirrors: [
      { name: 'HubCloud 10Gbps Direct', url: 'https://hubcloud.club/drive/spirited-away-4k', provider: 'HubCloud', speedBandwidth: '10 Gbps' },
      { name: 'Gofile Cloud Vault', url: 'https://gofile.io/d/spirited-away-4k', provider: 'Gofile', speedBandwidth: 'Unlimited' }
    ]
  },

  // 4. Audiophile — Pure Spatial Soundstages & FLAC 24/192
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
    overview:
      'Accompanied by a 72-piece orchestra, choir, and rock band, legendary composer Hans Zimmer performs his most memorable cinematic compositions live at the O2 Arena in Prague.',
    curatorNote:
      'Pinnacle reference audio disc featuring Gladiator, Inception, Interstellar, and The Lion King. Discrete Dolby Atmos 7.1.4 height channel rendering with 24-bit/96kHz uncompressed physical studio mix.',
    posterUrl:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=80',
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
      { name: 'Gofile Direct High-Speed Vault', url: 'https://gofile.io/d/hans-zimmer-prague', provider: 'Gofile', speedBandwidth: 'Unlimited' },
      { name: 'Pixeldrain 10Gbps CDN Node', url: 'https://pixeldrain.com/u/hans-zimmer-live', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-402',
    slug: 'pink-floyd-dark-side-of-the-moon-50th-flac',
    title: 'The Dark Side of the Moon (50th Anniversary Remaster)',
    originalTitle: 'Pink Floyd: The Dark Side of the Moon',
    year: 2023,
    runtimeMinutes: 43,
    category: 'Audiophile',
    genres: ['Progressive Rock', 'Psychedelic Rock', 'Audiophile Benchmark'],
    director: 'Alan Parsons (Engineering)',
    studio: 'Harvest / EMI / Pink Floyd Music Ltd.',
    overview:
      'The definitive 50th Anniversary high-resolution audio transfer remastered by James Guthrie from the original first-generation EMI master tapes.',
    curatorNote:
      'Uncompressed 24-bit 192kHz PCM FLAC studio files. Zero dynamic range compression (DR14). Pristine channel separation across all instruments, analog tape hiss intact.',
    posterUrl:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80',
    rating: 'NR',
    format: {
      container: 'FLAC Audio (.flac)',
      resolution: 'Master Audio',
      pixelDimensions: 'Studio Master Graphic Canvas',
      aspectRatio: '1:1 Square Album Canvas',
      videoCodec: 'None (Audio Master)',
      codecProfile: 'Level 8 Pure Lossless',
      bitDepth: '24-bit PCM',
      colorPrimaries: 'BT.709',
      dynamicRange: 'N/A',
      videoBitrateKbps: 0,
      fps: 0,
    },
    audio: {
      primaryFormat: 'FLAC Lossless',
      channelLayout: '2.0 Stereo',
      sampleRateKhz: 192,
      bitDepthBits: 24,
      audioBitrateKbps: 6144,
      languages: ['English (Original Lyrics)'],
      commentaryTracks: 0,
    },
    subtitles: {
      formats: ['SRT UTF-8'],
      languages: ['English (Synced Lyrics & Liner Notes)'],
      hearingImpairedAvailable: false,
    },
    luciferFleet: {
      catalogHash: '1f2e3d4c5b6a798897a6b5c4d3e2f1a09b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e',
      mtprotoMessageId: 'LMS-FLEET-MSG-850122',
      fleetWorkerCluster: 'Europe-North-Worker-01',
      verifiedDate: '2026-05-18',
      catalogStatus: 'Preservation Gold',
    },
    collectionTags: ['Reference Soundstages'],
    featured: false,
    sourceCitadel: 'Gofile',
    sourceDomain: 'gofile.io',
    fileSizeBytes: 2150000000,
    downloadMirrors: [
      { name: 'Gofile Studio Master FLAC', url: 'https://gofile.io/d/pf-dsotm-50th', provider: 'Gofile', speedBandwidth: 'Unlimited' },
      { name: 'HBLinks HubCloud Direct', url: 'https://hblinks.pro/dl/pf-dsotm', provider: 'HBLinks', speedBandwidth: 'Fast' }
    ]
  },

  // 5. Documentary — 8K Archival & IMAX Natural Wonders
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
    overview:
      'Filmed across 50 locations on five continents in custom 65mm time-lapse cameras, Chronos portrays the history of civilization and cosmic eternity through breathtaking visual movement.',
    curatorNote:
      'Digitized from the original 65mm negative at 8K resolution (7680×4320). Michael Stearns electronic synth score presented in 24-bit 96kHz PCM 5.1 surround sound.',
    posterUrl:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
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
      { name: 'Gateway Matrix Direct 8K', url: 'https://hubcloud.club/drive/chronos-8k', provider: 'Gateway Matrix', speedBandwidth: '10 Gbps' },
      { name: 'Pixeldrain 10Gbps Node', url: 'https://pixeldrain.com/u/chronos-8k-master', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  },
  {
    id: 'LDX-502',
    slug: 'our-planet-ii-dolby-vision-bbc-earth',
    title: 'Our Planet II',
    originalTitle: 'Our Planet II: World on the Move',
    year: 2023,
    runtimeMinutes: 50,
    category: 'Documentary',
    genres: ['Nature', 'Wildlife', 'Science'],
    director: 'Silverback Films / Alastair Fothergill',
    studio: 'Netflix / Silverback Films',
    overview:
      'Narrated by Sir David Attenborough, Our Planet II unravels the mysteries of how and why billions of animals migrate across the planet in an ever-shifting ecosystem.',
    curatorNote:
      'Native 2160p 60fps high-frame-rate capture with Dolby Vision dynamic metadata. Pristine capture of plumage, ocean bioluminescence, and spatial natural ambience in Dolby Atmos.',
    posterUrl:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    backdropUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    rating: 'TV-PG',
    format: {
      container: 'Matroska (.mkv)',
      resolution: '2160p (4K UHD)',
      pixelDimensions: '3840×2160',
      aspectRatio: '16:9 Broadcast Format',
      videoCodec: 'HEVC / H.265',
      codecProfile: 'Main 10@L5.1@High',
      bitDepth: '10-bit',
      colorPrimaries: 'BT.2020',
      dynamicRange: 'Dolby Vision Profile 8.1',
      videoBitrateKbps: 42000,
      fps: 60.0,
    },
    audio: {
      primaryFormat: 'Dolby TrueHD Atmos',
      channelLayout: '7.1.4',
      sampleRateKhz: 48,
      bitDepthBits: 24,
      audioBitrateKbps: 4800,
      languages: ['English (Sir David Attenborough)', 'Hindi (Wildlife Narration)', 'Spanish (Latin America)'],
      commentaryTracks: 0,
    },
    subtitles: {
      formats: ['PGS Lossless', 'SRT UTF-8'],
      languages: ['English [SDH]', 'Spanish', 'French', 'German', 'Japanese', 'Hindi'],
      hearingImpairedAvailable: true,
    },
    luciferFleet: {
      catalogHash: '8f7a6b5c4d3e2f1a09b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6',
      mtprotoMessageId: 'LMS-FLEET-MSG-940021',
      fleetWorkerCluster: 'Europe-West-Worker-03',
      verifiedDate: '2026-08-20',
      catalogStatus: 'Preservation Gold',
    },
    collectionTags: ['Dolby Vision Vault', 'Reference Soundstages', '4K UHD HDR'],
    featured: false,
    sourceCitadel: 'DesireMovies',
    sourceDomain: 'desiremovies.trade',
    fileSizeBytes: 15600000000,
    downloadMirrors: [
      { name: 'DesireMovies Direct Batch', url: 'https://desiremovies.trade/our-planet-ii', provider: 'DesireMovies', speedBandwidth: 'Fast' },
      { name: 'Pixeldrain 10Gbps Node', url: 'https://pixeldrain.com/u/our-planet-2', provider: 'Pixeldrain', speedBandwidth: '10 Gbps' }
    ]
  }
]
