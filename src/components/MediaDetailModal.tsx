import React, { useState, useEffect } from 'react'
import { MediaEntry } from '../types/media'
import {
  X,
  Video,
  Volume2,
  Subtitles,
  ShieldCheck,
  Copy,
  Check,
  Sparkles,
  Calendar,
  Clock,
  Film,
} from 'lucide-react'

interface MediaDetailModalProps {
  entry: MediaEntry | null
  onClose: () => void
}

export const MediaDetailModal: React.FC<MediaDetailModalProps> = ({ entry, onClose }) => {
  const [copiedHash, setCopiedHash] = useState(false)
  const [activeTab, setActiveTab] = useState<'video' | 'audio' | 'subtitles' | 'fleet'>('video')

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (entry) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [entry, onClose])

  if (!entry) return null

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedHash(true)
    setTimeout(() => setCopiedHash(false), 2000)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(5, 5, 8, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          maxHeight: '92vh',
          backgroundColor: '#0c0c14',
          border: '1.5px solid var(--color-gold-primary)',
          borderRadius: '10px',
          boxShadow:
            '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.25)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Modal Header Banner */}
        <div
          style={{
            position: 'relative',
            height: '240px',
            backgroundImage: `url(${entry.backdropUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
          }}
        >
          {/* Obsidian Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(8, 8, 12, 0.4) 0%, rgba(12, 12, 20, 0.95) 100%)',
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(8, 8, 12, 0.85)',
              border: '1px solid var(--color-gold-primary)',
              color: 'var(--color-gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s',
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Banner Meta Info */}
          <div
            style={{
              position: 'absolute',
              bottom: '18px',
              left: '24px',
              right: '24px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.4rem',
                }}
              >
                <span className="badge-gold">{entry.id}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-gold-warm)',
                  }}
                >
                  {entry.category.toUpperCase()} • {entry.year}
                </span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  lineHeight: 1.15,
                  color: '#ffffff',
                }}
              >
                {entry.title}
              </h2>
            </div>

            <div style={{ display: 'none' }} className="modal-banner-tag">
              <span
                style={{
                  fontFamily: 'var(--font-royal)',
                  fontSize: '0.85rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '4px',
                  background: 'rgba(8, 8, 12, 0.9)',
                  border: '1px solid var(--color-gold-primary)',
                  color: '#fcf6ba',
                }}
              >
                {entry.format.resolution}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem 2rem' }}>
          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              alignItems: 'center',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '1.5rem',
              fontSize: '0.88rem',
              color: '#c4c4d6',
            }}
          >
            {entry.director && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Film size={15} color="var(--color-gold-primary)" />
                <span>
                  Director: <strong style={{ color: '#ffffff' }}>{entry.director}</strong>
                </span>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={15} color="var(--color-gold-primary)" />
              <span>
                Studio: <strong style={{ color: '#ffffff' }}>{entry.studio}</strong>
              </span>
            </div>
            {entry.runtimeMinutes > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={15} color="var(--color-gold-primary)" />
                <span>
                  Runtime: <strong style={{ color: '#ffffff' }}>{entry.runtimeMinutes} minutes</strong>
                </span>
              </div>
            )}
          </div>

          {/* Overview & Curator Note */}
          <div style={{ marginBottom: '1.75rem' }}>
            <p
              style={{
                fontSize: '0.96rem',
                lineHeight: 1.6,
                color: '#d6d6e6',
                marginBottom: '1rem',
              }}
            >
              {entry.overview}
            </p>

            {/* Curator Note Box */}
            <div
              style={{
                display: 'flex',
                gap: '0.85rem',
                padding: '1rem 1.25rem',
                borderRadius: '6px',
                background: 'rgba(212, 175, 55, 0.06)',
                borderLeft: '3px solid var(--color-gold-primary)',
              }}
            >
              <Sparkles size={18} color="var(--color-gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-royal)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: 'var(--color-gold-light)',
                    marginBottom: '0.2rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Lucifer Archival Curator Note
                </div>
                <div style={{ fontSize: '0.86rem', color: '#b9b9cc', lineHeight: 1.5 }}>
                  {entry.curatorNote}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
              marginBottom: '1.5rem',
            }}
          >
            <button
              onClick={() => setActiveTab('video')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1.1rem',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'video' ? '2px solid var(--color-gold-primary)' : '2px solid transparent',
                color: activeTab === 'video' ? 'var(--color-gold-light)' : '#8d8da0',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Video size={16} />
              <span>Video Manifest</span>
            </button>

            <button
              onClick={() => setActiveTab('audio')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1.1rem',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'audio' ? '2px solid var(--color-gold-primary)' : '2px solid transparent',
                color: activeTab === 'audio' ? 'var(--color-gold-light)' : '#8d8da0',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Volume2 size={16} />
              <span>Audio Layout</span>
            </button>

            <button
              onClick={() => setActiveTab('subtitles')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1.1rem',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'subtitles' ? '2px solid var(--color-gold-primary)' : '2px solid transparent',
                color: activeTab === 'subtitles' ? 'var(--color-gold-light)' : '#8d8da0',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Subtitles size={16} />
              <span>Subtitles</span>
            </button>

            <button
              onClick={() => setActiveTab('fleet')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1.1rem',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'fleet' ? '2px solid var(--color-gold-primary)' : '2px solid transparent',
                color: activeTab === 'fleet' ? 'var(--color-gold-light)' : '#8d8da0',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <ShieldCheck size={16} />
              <span>Fleet Telemetry</span>
            </button>
          </div>

          {/* Tab 1: Video Manifest */}
          {activeTab === 'video' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '1rem',
              }}
            >
              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  CONTAINER & WRAPPER
                </div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>{entry.format.container}</div>
              </div>

              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  PIXEL RESOLUTION
                </div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>{entry.format.pixelDimensions}</div>
              </div>

              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  ASPECT RATIO
                </div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>{entry.format.aspectRatio}</div>
              </div>

              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  VIDEO CODEC & PROFILE
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--color-gold-warm)', fontWeight: 600 }}>
                  {entry.format.videoCodec} • {entry.format.codecProfile}
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  DYNAMIC RANGE & COLOR
                </div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                  {entry.format.dynamicRange} ({entry.format.colorPrimaries})
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  BIT DEPTH & BITRATE
                </div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                  {entry.format.bitDepth} • {entry.format.videoBitrateKbps.toLocaleString()} kbps
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Audio Layout */}
          {activeTab === 'audio' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '1rem',
              }}
            >
              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  MASTER AUDIO FORMAT
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--color-gold-warm)', fontWeight: 600 }}>
                  {entry.audio.primaryFormat}
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  DISCRETE CHANNEL LAYOUT
                </div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>{entry.audio.channelLayout} Surround</div>
              </div>

              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  SAMPLE RATE & DEPTH
                </div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                  {entry.audio.sampleRateKhz} kHz / {entry.audio.bitDepthBits}-bit
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                  AUDIO BITRATE
                </div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                  {entry.audio.audioBitrateKbps.toLocaleString()} kbps Lossless
                </div>
              </div>

              <div
                className="glass-panel"
                style={{
                  gridColumn: '1 / -1',
                  padding: '1rem',
                  borderRadius: '6px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.4rem' }}>
                  ENCODED AUDIO TRACKS & COMMENTARIES
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {entry.audio.languages.map((lang, idx) => (
                    <span key={idx} className="badge-obsidian">
                      {lang}
                    </span>
                  ))}
                  {entry.audio.commentaryTracks ? (
                    <span className="badge-gold">
                      {entry.audio.commentaryTracks} Commentary Stream(s)
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Subtitles */}
          {activeTab === 'subtitles' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="glass-panel" style={{ padding: '1.25rem', borderRadius: '6px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888899', marginBottom: '0.4rem' }}>
                  SUPPORTED SUBTITLE CONTAINERS
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  {entry.subtitles.formats.map((fmt, idx) => (
                    <span key={idx} className="badge-gold">
                      {fmt}
                    </span>
                  ))}
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888899', marginBottom: '0.4rem' }}>
                  INDEXED LANGUAGE CHANNELS
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {entry.subtitles.languages.map((lang, idx) => (
                    <span key={idx} className="badge-obsidian">
                      {lang}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: '0.84rem', color: '#a0a0b2' }}>
                  Hearing Impaired (SDH) Audio Descriptions:{' '}
                  <strong style={{ color: entry.subtitles.hearingImpairedAvailable ? '#fcf6ba' : '#777788' }}>
                    {entry.subtitles.hearingImpairedAvailable ? 'Verified Available' : 'Not Included in Master'}
                  </strong>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Fleet Telemetry & Hash */}
          {activeTab === 'fleet' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* SHA-256 Box */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '6px',
                  background: 'rgba(7, 7, 11, 0.95)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--color-gold-warm)',
                    }}
                  >
                    CRYPTOGRAPHIC STREAM SHA-256 HASH
                  </span>
                  <button
                    onClick={() => copyToClipboard(entry.luciferFleet.catalogHash)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid rgba(212, 175, 55, 0.35)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      color: 'var(--color-gold-light)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      cursor: 'pointer',
                    }}
                  >
                    {copiedHash ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
                    <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                  </button>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: '#ffffff',
                    wordBreak: 'break-all',
                    letterSpacing: '0.04em',
                    lineHeight: 1.4,
                  }}
                >
                  {entry.luciferFleet.catalogHash}
                </div>
              </div>

              {/* Fleet Node Info */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                  gap: '1rem',
                }}
              >
                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                    SOURCE RESOLVER CITADEL
                  </div>
                  <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.95rem', color: '#fcf6ba', fontWeight: 700 }}>
                    {entry.sourceCitadel || 'SmartSync Sovereign Fleet'}
                  </div>
                  {entry.sourceDomain && (
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888899', marginTop: '0.2rem' }}>
                      {entry.sourceDomain}
                    </div>
                  )}
                </div>

                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                    MTPROTO PROTOCOL SIGNATURE
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#ffffff' }}>
                    {entry.luciferFleet.mtprotoMessageId}
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                    ROUTING WORKER FLEET
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#ffffff' }}>
                    {entry.luciferFleet.fleetWorkerCluster}
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#888899', marginBottom: '0.25rem' }}>
                    FILE SIZE IN BYTES
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#ffffff' }}>
                    {entry.fileSizeBytes ? `${(entry.fileSizeBytes / (1024 * 1024 * 1024)).toFixed(2)} GB (${entry.fileSizeBytes.toLocaleString()} bytes)` : 'Pristine Lossless Master'}
                  </div>
                </div>
              </div>

              {/* Verified Mirror Conduits */}
              {entry.downloadMirrors && entry.downloadMirrors.length > 0 && (
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '6px',
                    background: 'rgba(12, 12, 18, 0.9)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    marginTop: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-royal)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#fcf6ba',
                      letterSpacing: '0.04em',
                      marginBottom: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span>VERIFIED HIGH-SPEED MIRROR CONDUITS</span>
                    <span className="badge-gold" style={{ fontSize: '0.65rem' }}>
                      {entry.downloadMirrors.length} NODES ACTIVE
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {entry.downloadMirrors.map((mirror, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.65rem 1rem',
                          background: 'rgba(7, 7, 11, 0.75)',
                          border: '1px solid rgba(212, 175, 55, 0.15)',
                          borderRadius: '4px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#e6be53' }}>
                            {mirror.name}
                          </span>
                          {mirror.speedBandwidth && (
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.65rem',
                                padding: '0.15rem 0.45rem',
                                borderRadius: '3px',
                                background: 'rgba(74, 222, 128, 0.12)',
                                border: '1px solid rgba(74, 222, 128, 0.3)',
                                color: '#4ade80',
                              }}
                            >
                              {mirror.speedBandwidth}
                            </span>
                          )}
                        </div>

                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            color: '#9e9eb0',
                          }}
                        >
                          Provider: {mirror.provider}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '1.2rem 2rem',
            background: 'rgba(8, 8, 12, 0.95)',
            borderTop: '1px solid rgba(212, 175, 55, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 8px #4ade80',
              }}
            />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#b0b0c2' }}>
              Status: <strong style={{ color: '#ffffff' }}>{entry.luciferFleet.catalogStatus}</strong>
            </span>
          </div>

          <button onClick={onClose} className="btn-royal-secondary" style={{ padding: '0.55rem 1.4rem' }}>
            Close Inspector
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .modal-banner-tag {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}
