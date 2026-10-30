import React, { useState, useMemo, useRef } from 'react'
import {
  Film,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Server,
  Search,
  ArrowLeft,
  Layers,
  Download
} from 'lucide-react'

export interface MovieStreamItem {
  id: string
  title: string
  year: number
  duration: string
  resolution: string
  quality: string
  audio: string
  bitrate: string
  rating: string
  genre: string[]
  poster: string
  videoUrl: string
  synopsis: string
  director: string
  mirrorUrls: { name: string; url: string; latency: string }[]
  sha256: string
}

const SAMPLE_MOVIES: MovieStreamItem[] = [
  {
    id: 'stream-01',
    title: 'Interstellar: IMAX 70mm Remastered',
    year: 2014,
    duration: '2h 49m',
    resolution: '3840×2160 (4K UHD)',
    quality: 'IMAX 70mm HDR10+',
    audio: 'Dolby Atmos TrueHD 7.1',
    bitrate: '86.4 Mbps HEVC',
    rating: '8.7',
    genre: ['Sci-Fi', 'Adventure', 'Drama'],
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival, mastered in pristine uncompressed 4K with sovereign spatial audio.',
    director: 'Christopher Nolan',
    mirrorUrls: [
      { name: 'Quantum Edge 01', url: '#', latency: '11ms' },
      { name: 'Sovereign Backup 1', url: '#', latency: '14ms' },
      { name: 'TorrentX P2P Swarm', url: '#', latency: '22ms' },
    ],
    sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
  },
  {
    id: 'stream-02',
    title: 'Blade Runner 2049: Director’s Cut',
    year: 2017,
    duration: '2h 44m',
    resolution: '3840×2160 (4K UHD)',
    quality: 'Dolby Vision • 10-bit',
    audio: 'Dolby Atmos 7.1',
    bitrate: '74.2 Mbps HEVC',
    rating: '8.0',
    genre: ['Sci-Fi', 'Mystery', 'Cyberpunk'],
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    synopsis: 'Young Blade Runner K unearths a long-buried secret that leads him to track down former Blade Runner Rick Deckard, missing for thirty years.',
    director: 'Denis Villeneuve',
    mirrorUrls: [
      { name: 'Quantum Edge 01', url: '#', latency: '13ms' },
      { name: 'Sovereign Backup 1', url: '#', latency: '16ms' },
      { name: 'TorrentX P2P Swarm', url: '#', latency: '28ms' },
    ],
    sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  },
  {
    id: 'stream-03',
    title: 'Dune: Part Two (4K Ultra HD)',
    year: 2024,
    duration: '2h 46m',
    resolution: '3840×2160 (4K UHD)',
    quality: 'IMAX Enhanced HDR',
    audio: 'DTS:X / Dolby Atmos',
    bitrate: '92.1 Mbps HEVC',
    rating: '8.5',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    synopsis: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    director: 'Denis Villeneuve',
    mirrorUrls: [
      { name: 'Quantum Edge 01', url: '#', latency: '9ms' },
      { name: 'Sovereign Backup 1', url: '#', latency: '12ms' },
      { name: 'TorrentX P2P Swarm', url: '#', latency: '19ms' },
    ],
    sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
  },
  {
    id: 'stream-04',
    title: 'Oppenheimer: The 70mm Master',
    year: 2023,
    duration: '3h 00m',
    resolution: '3840×2160 (4K UHD)',
    quality: 'Panavision 70mm Master',
    audio: 'DTS-HD Master Audio 5.1',
    bitrate: '88.9 Mbps HEVC',
    rating: '8.9',
    genre: ['Biography', 'Drama', 'History'],
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    synopsis: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb, scanned from native 70mm large format negative.',
    director: 'Christopher Nolan',
    mirrorUrls: [
      { name: 'Quantum Edge 01', url: '#', latency: '10ms' },
      { name: 'Sovereign Backup 1', url: '#', latency: '15ms' },
      { name: 'TorrentX P2P Swarm', url: '#', latency: '24ms' },
    ],
    sha256: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a'
  },
  {
    id: 'stream-05',
    title: 'The Dark Knight: 4K Remaster',
    year: 2008,
    duration: '2h 32m',
    resolution: '3840×2160 (4K UHD)',
    quality: 'IMAX Hybrid HDR',
    audio: 'Dolby TrueHD 7.1',
    bitrate: '79.5 Mbps HEVC',
    rating: '9.0',
    genre: ['Action', 'Crime', 'Drama'],
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan',
    mirrorUrls: [
      { name: 'Quantum Edge 01', url: '#', latency: '14ms' },
      { name: 'Sovereign Backup 1', url: '#', latency: '18ms' },
      { name: 'TorrentX P2P Swarm', url: '#', latency: '25ms' },
    ],
    sha256: 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d'
  },
  {
    id: 'stream-06',
    title: '2001: A Space Odyssey (Restored)',
    year: 1968,
    duration: '2h 29m',
    resolution: '3840×2160 (4K UHD)',
    quality: 'Super Panavision 70mm',
    audio: 'DTS-HD MA 5.1 Uncompressed',
    bitrate: '81.0 Mbps HEVC',
    rating: '8.3',
    genre: ['Sci-Fi', 'Adventure'],
    poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    synopsis: 'After uncovering a mysterious artifact buried beneath the lunar surface, a spacecraft manned by two humans and supercomputer H.A.L. 9000 is sent on a mission to Jupiter.',
    director: 'Stanley Kubrick',
    mirrorUrls: [
      { name: 'Quantum Edge 01', url: '#', latency: '12ms' },
      { name: 'Sovereign Backup 1', url: '#', latency: '16ms' },
      { name: 'TorrentX P2P Swarm', url: '#', latency: '26ms' },
    ],
    sha256: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4'
  }
]

interface LuciferStreamBackupProps {
  onBack?: () => void
}

export const LuciferStreamBackup: React.FC<LuciferStreamBackupProps> = ({ onBack }) => {
  const [activeMovie, setActiveMovie] = useState<MovieStreamItem>(SAMPLE_MOVIES[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('All')
  const [selectedServer, setSelectedServer] = useState<number>(1)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [selectedResolution, setSelectedResolution] = useState<string>('4K (2160p)')
  const [selectedAudio, setSelectedAudio] = useState<string>('Dolby Atmos 7.1')
  const videoRef = useRef<HTMLVideoElement>(null)

  const filteredMovies = useMemo(() => {
    return SAMPLE_MOVIES.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            movie.director.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesGenre = selectedGenre === 'All' || movie.genre.includes(selectedGenre)
      return matchesSearch && matchesGenre
    })
  }, [searchQuery, selectedGenre])

  const handlePlayToggle = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play().catch(() => {})
      setIsPlaying(true)
    }
  }

  const handleMuteToggle = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleSelectMovie = (movie: MovieStreamItem) => {
    setActiveMovie(movie)
    setIsPlaying(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load()
        videoRef.current.play().catch(() => {})
        setIsPlaying(true)
      }
    }, 200)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#08080c',
      color: '#f3e5ab',
      fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      overflowX: 'hidden',
      paddingBottom: '80px'
    }}>
      {/* ── Top Sovereign Double-Line Banner ── */}
      <div style={{
        background: 'linear-gradient(90deg, #101018 0%, #17151e 50%, #101018 100%)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.28)',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.82rem',
        letterSpacing: '0.06em',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#2ecc71',
            boxShadow: '0 0 10px #2ecc71'
          }} />
          <span style={{ color: '#d4af37', fontWeight: 600 }}>LUCIFER OPEN SOURCE FLEET</span>
          <span style={{ color: 'rgba(243, 229, 171, 0.45)' }}>•</span>
          <span>SOVEREIGN QUANTUM STREAM CDN</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <span style={{
            padding: '3px 10px',
            borderRadius: '999px',
            background: 'rgba(212, 175, 55, 0.12)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            color: '#f3e5ab',
            fontSize: '0.75rem',
            fontWeight: 600
          }}>
            BACKUP 01: 100% ONLINE
          </span>
          <span style={{ color: 'rgba(243, 229, 171, 0.65)' }}>264,560 VERIFIED MEDIA ASSETS</span>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(16px)',
        background: 'rgba(8, 8, 12, 0.88)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.18)',
        padding: '16px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {onBack && (
            <button
              onClick={onBack}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.32)',
                color: '#f3e5ab',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.86rem',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)'
                e.currentTarget.style.borderColor = '#d4af37'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.32)'
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to 3D Cinema</span>
            </button>
          )}

          <div>
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#ffffff',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ color: '#d4af37' }}>Lucifer Stream Site</span>
              <span style={{
                background: 'linear-gradient(135deg, #d4af37, #aa771c)',
                color: '#08080c',
                fontSize: '0.72rem',
                padding: '2px 8px',
                borderRadius: '4px',
                fontWeight: 800,
                letterSpacing: '0.06em'
              }}>BACKUP 1</span>
            </h1>
            <p style={{
              margin: '2px 0 0',
              fontSize: '0.75rem',
              color: 'rgba(243, 229, 171, 0.6)'
            }}>
              Sovereign 4K UHD Master Streams & Multi-Mirror Direct Playback
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{
          position: 'relative',
          width: 'min(100%, 360px)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Search size={18} style={{
            position: 'absolute',
            left: '14px',
            color: 'rgba(212, 175, 55, 0.65)'
          }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 4K movies, directors, audio..."
            style={{
              width: '100%',
              background: 'rgba(16, 16, 24, 0.9)',
              border: '1px solid rgba(212, 175, 55, 0.24)',
              borderRadius: '999px',
              padding: '10px 16px 10px 42px',
              color: '#f3e5ab',
              fontSize: '0.88rem',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = '#d4af37' }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.24)' }}
          />
        </div>
      </header>

      {/* ── Main Content Container ── */}
      <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '24px 24px' }}>
        
        {/* ── Featured Cinema Player Stage ── */}
        <section style={{
          background: '#0d0d14',
          borderRadius: '16px',
          border: '1px solid rgba(212, 175, 55, 0.28)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden',
          marginBottom: '36px'
        }}>
          {/* Player Display Container */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(320px, 58vh, 640px)',
            background: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <video
              ref={videoRef}
              src={activeMovie.videoUrl}
              poster={activeMovie.poster}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              playsInline
              onEnded={() => setIsPlaying(false)}
            />

            {/* Cinematic Gradient Overlays */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13, 13, 20, 0.95) 0%, rgba(13, 13, 20, 0.2) 50%, rgba(13, 13, 20, 0.6) 100%)',
              pointerEvents: 'none'
            }} />

            {/* Big Center Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlayToggle}
                style={{
                  position: 'absolute',
                  zIndex: 10,
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)',
                  color: '#08080c',
                  border: '3px solid rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 0 35px rgba(212, 175, 55, 0.6)',
                  transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1.0)' }}
                aria-label="Play Master Stream"
              >
                <Play size={36} fill="#08080c" style={{ marginLeft: '4px' }} />
              </button>
            )}

            {/* Top Player Badges */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '24px',
              right: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 10,
              pointerEvents: 'none'
            }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(8, 8, 12, 0.85)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  color: '#d4af37',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em'
                }}>
                  {activeMovie.quality}
                </span>
                <span style={{
                  background: 'rgba(8, 8, 12, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 600
                }}>
                  {activeMovie.audio}
                </span>
              </div>

              <div style={{
                background: 'rgba(8, 8, 12, 0.85)',
                border: '1px solid rgba(46, 204, 113, 0.4)',
                color: '#2ecc71',
                padding: '4px 12px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2ecc71' }} />
                STREAM ACTIVE: MIRROR {selectedServer}
              </div>
            </div>

            {/* Bottom Player Overlay Title */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              zIndex: 10
            }}>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 8px',
                letterSpacing: '-0.01em',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)'
              }}>
                {activeMovie.title}
              </h2>
              <p style={{
                color: 'rgba(243, 229, 171, 0.85)',
                fontSize: '0.92rem',
                maxWidth: '720px',
                lineHeight: 1.5,
                margin: '0 0 16px'
              }}>
                {activeMovie.synopsis}
              </p>

              {/* Player Interactive Controls Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                background: 'rgba(16, 16, 24, 0.92)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '12px',
                padding: '10px 18px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button
                    onClick={handlePlayToggle}
                    style={{
                      background: '#d4af37',
                      color: '#08080c',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontWeight: 700,
                      fontSize: '0.85rem'
                    }}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} fill="#08080c" />}
                    <span>{isPlaying ? 'Pause' : 'Stream Master'}</span>
                  </button>

                  <button
                    onClick={handleMuteToggle}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: '#f3e5ab',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem'
                    }}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>

                  <div style={{ fontSize: '0.82rem', color: 'rgba(243, 229, 171, 0.7)' }}>
                    {activeMovie.duration} • {activeMovie.bitrate}
                  </div>
                </div>

                {/* Resolution & Audio Selectors */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <select
                    value={selectedResolution}
                    onChange={(e) => setSelectedResolution(e.target.value)}
                    style={{
                      background: '#101018',
                      color: '#f3e5ab',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                  >
                    <option value="4K (2160p)">4K UHD (2160p)</option>
                    <option value="1080p 60fps">1080p (FHD 60fps)</option>
                    <option value="720p Direct">720p (Direct Stream)</option>
                  </select>

                  <select
                    value={selectedAudio}
                    onChange={(e) => setSelectedAudio(e.target.value)}
                    style={{
                      background: '#101018',
                      color: '#f3e5ab',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                  >
                    <option value="Dolby Atmos 7.1">Dolby Atmos 7.1</option>
                    <option value="DTS:X English">DTS:X English</option>
                    <option value="Hindi 5.1">Hindi 5.1 Clean</option>
                  </select>

                  <button
                    onClick={() => {
                      if (videoRef.current?.requestFullscreen) {
                        videoRef.current.requestFullscreen()
                      }
                    }}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: '#d4af37',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      cursor: 'pointer'
                    }}
                    aria-label="Fullscreen"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Server Selector Tabs */}
          <div style={{
            padding: '16px 24px',
            background: 'rgba(16, 16, 24, 0.98)',
            borderTop: '1px solid rgba(212, 175, 55, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Server size={18} style={{ color: '#d4af37' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Streaming Server Mirrors:</span>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 1, name: 'Server 1: Quantum Edge', ping: '11ms', status: 'Optimal' },
                { id: 2, name: 'Server 2: Sovereign Backup 1', ping: '14ms', status: 'Primary' },
                { id: 3, name: 'Server 3: TorrentX P2P', ping: '20ms', status: 'Swarm' },
                { id: 4, name: 'Server 4: Cloudflare R2', ping: '16ms', status: 'Anycast' }
              ].map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServer(srv.id)}
                  style={{
                    background: selectedServer === srv.id ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${selectedServer === srv.id ? '#d4af37' : 'rgba(255, 255, 255, 0.1)'}`,
                    color: selectedServer === srv.id ? '#ffffff' : 'rgba(243, 229, 171, 0.75)',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: selectedServer === srv.id ? '#d4af37' : '#2ecc71'
                  }} />
                  <span>{srv.name}</span>
                  <span style={{ fontSize: '0.72rem', color: '#2ecc71', opacity: 0.85 }}>({srv.ping})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Category Filters & Header ── */}
        <section style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '16px'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#ffffff',
                margin: '0 0 4px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Film size={22} style={{ color: '#d4af37' }} />
                <span>Lucifer Movie Universe — 4K Stream Catalog</span>
              </h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(243, 229, 171, 0.65)' }}>
                Direct bufferless streaming backed by Lucifer TorrentX & 16 Citadel Scrapers
              </p>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['All', 'Sci-Fi', 'Action', 'Drama', 'Adventure', 'Mystery'].map(genre => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  style={{
                    background: selectedGenre === genre ? '#d4af37' : 'rgba(16, 16, 24, 0.8)',
                    color: selectedGenre === genre ? '#08080c' : '#f3e5ab',
                    border: `1px solid ${selectedGenre === genre ? '#d4af37' : 'rgba(212, 175, 55, 0.2)'}`,
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* ── Movie Grid ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '20px'
          }}>
            {filteredMovies.map(movie => {
              const isSelected = movie.id === activeMovie.id
              return (
                <div
                  key={movie.id}
                  style={{
                    background: '#101018',
                    borderRadius: '12px',
                    border: `1px solid ${isSelected ? '#d4af37' : 'rgba(212, 175, 55, 0.18)'}`,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isSelected ? '0 0 25px rgba(212, 175, 55, 0.25)' : 'none',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleSelectMovie(movie)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderColor = '#d4af37'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    if (!isSelected) e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.18)'
                  }}
                >
                  {/* Poster Container */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '220px',
                    overflow: 'hidden',
                    background: '#050508'
                  }}>
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, #101018 0%, transparent 60%)'
                    }} />

                    {/* Top Quality Tag */}
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(8, 8, 12, 0.85)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      color: '#d4af37',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: 700
                    }}>
                      4K UHD
                    </div>

                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(8, 8, 12, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}>
                      ★ {movie.rating}
                    </div>

                    {/* Hover Play Icon */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(8, 8, 12, 0.4)',
                      opacity: isSelected ? 1 : 0,
                      transition: 'opacity 0.2s'
                    }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: '#d4af37',
                        color: '#08080c',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)'
                      }}>
                        <Play size={24} fill="#08080c" style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{
                      margin: '0 0 6px',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.3
                    }}>
                      {movie.title}
                    </h4>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.78rem',
                      color: 'rgba(243, 229, 171, 0.6)',
                      marginBottom: '10px'
                    }}>
                      <span>{movie.year}</span>
                      <span>•</span>
                      <span>{movie.duration}</span>
                      <span>•</span>
                      <span>{movie.genre.join(', ')}</span>
                    </div>

                    <div style={{
                      fontSize: '0.78rem',
                      color: 'rgba(243, 229, 171, 0.85)',
                      marginBottom: '16px',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {movie.synopsis}
                    </div>

                    {/* Card Actions */}
                    <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                      <button
                        style={{
                          flex: 1,
                          background: isSelected ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)' : 'rgba(212, 175, 55, 0.12)',
                          color: isSelected ? '#08080c' : '#f3e5ab',
                          border: '1px solid rgba(212, 175, 55, 0.35)',
                          borderRadius: '6px',
                          padding: '8px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <Play size={14} fill={isSelected ? '#08080c' : 'currentColor'} />
                        <span>Stream Now</span>
                      </button>

                      <a
                        href={movie.videoUrl}
                        download
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          color: '#f3e5ab',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '6px',
                          padding: '8px 12px',
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none'
                        }}
                        title="Direct 4K Master Download"
                      >
                        <Download size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Technical Fleet Architecture Telemetry ── */}
        <section style={{
          marginTop: '48px',
          background: 'linear-gradient(180deg, #101018 0%, #08080c 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          padding: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Layers size={20} style={{ color: '#d4af37' }} />
            <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>
              Lucifer Sovereign Edge Architecture & Telemetry
            </h4>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            fontSize: '0.82rem'
          }}>
            <div style={{ background: '#08080c', padding: '14px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
              <div style={{ color: 'rgba(243, 229, 171, 0.6)', marginBottom: '4px' }}>Edge Cluster Nodes</div>
              <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700 }}>16 Citadels Active</div>
              <div style={{ color: '#2ecc71', fontSize: '0.75rem', marginTop: '4px' }}>✓ Zero Packet Loss</div>
            </div>

            <div style={{ background: '#08080c', padding: '14px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
              <div style={{ color: 'rgba(243, 229, 171, 0.6)', marginBottom: '4px' }}>Average Edge Latency</div>
              <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700 }}>12.4 ms Global</div>
              <div style={{ color: '#2ecc71', fontSize: '0.75rem', marginTop: '4px' }}>✓ Bufferless 4K Stream</div>
            </div>

            <div style={{ background: '#08080c', padding: '14px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
              <div style={{ color: 'rgba(243, 229, 171, 0.6)', marginBottom: '4px' }}>TorrentX Swarm Peers</div>
              <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700 }}>14,820 High-Speed Peers</div>
              <div style={{ color: '#d4af37', fontSize: '0.75rem', marginTop: '4px' }}>✓ Sovereign P2P WebSeed</div>
            </div>

            <div style={{ background: '#08080c', padding: '14px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
              <div style={{ color: 'rgba(243, 229, 171, 0.6)', marginBottom: '4px' }}>Cryptographic Verification</div>
              <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700 }}>SHA-256 On-the-Fly</div>
              <div style={{ color: '#2ecc71', fontSize: '0.75rem', marginTop: '4px' }}>✓ Bit-Exact Proof</div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer style={{
        marginTop: '60px',
        borderTop: '1px solid rgba(212, 175, 55, 0.18)',
        padding: '32px 24px',
        textAlign: 'center',
        fontSize: '0.82rem',
        color: 'rgba(243, 229, 171, 0.6)'
      }}>
        <div style={{ color: '#d4af37', fontWeight: 600, marginBottom: '8px' }}>
          LUCIFER OPEN SOURCE FLEET • LUCIFER DATABASE X
        </div>
        <p style={{ margin: 0 }}>
          Lucifer Stream Site Backup 1 — Sovereign Media Streaming & Multi-Mirror Edge Delivery. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default LuciferStreamBackup
