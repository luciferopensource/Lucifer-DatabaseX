import React from 'react'
import { Crown, Shield, Cpu, Network, CheckCircle2, Terminal } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container-royal">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-gold-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            <Crown size={14} />
            <span>Sovereign Archival Heritage</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            THE LUCIFER <span className="text-gold-gradient">PHILOSOPHY & ECOSYSTEM</span>
          </h2>

          <p
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              color: '#9e9eb0',
              fontSize: '1.05rem',
              fontWeight: 300,
            }}
          >
            Lucifer Database X is the foundational media intelligence layer designed
            to index, preserve, and distribute sovereign cinema and acoustic masterpieces
            without third-party telemetry, advertising, or arbitrary censorship.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {/* Pillar 1 */}
          <div
            style={{
              background: 'rgba(14, 14, 22, 0.85)',
              border: '1px solid var(--color-obsidian-border)',
              borderRadius: '8px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--color-gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Shield size={22} color="var(--color-gold-primary)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>
              Cryptographic Integrity
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#a0a0b5', lineHeight: 1.6 }}>
              Every entry in Lucifer Database X is sealed with a cryptographic SHA-256 bitstream
              signature. Media manifests guarantee that stream containers, PTS timestamps, and
              audio channels have not suffered corruption or generational re-encoding.
            </p>
          </div>

          {/* Pillar 2 */}
          <div
            style={{
              background: 'rgba(14, 14, 22, 0.85)',
              border: '1px solid var(--color-obsidian-border)',
              borderRadius: '8px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--color-gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Network size={22} color="var(--color-gold-primary)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>
              Decentralised Fleet Relay
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#a0a0b5', lineHeight: 1.6 }}>
              Engineered to synchronise effortlessly with Lucifer Cloud Engine and TorrentX
              Engine. Automated MTProto worker pools distribute high-bitrate media files across
              resilient peer channels with round-robin load distribution.
            </p>
          </div>

          {/* Pillar 3 */}
          <div
            style={{
              background: 'rgba(14, 14, 22, 0.85)',
              border: '1px solid var(--color-obsidian-border)',
              borderRadius: '8px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--color-gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Cpu size={22} color="var(--color-gold-primary)" />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>
              Next-Gen AV1 & Spatial Sound
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#a0a0b5', lineHeight: 1.6 }}>
              Prioritising modern, royalty-free codecs like AV1 Main 10 along with studio master
              HEVC. Spatial audio configurations support full 7.1.4 Dolby Atmos beds and 24-bit
              lossless FLAC captures without downsampling.
            </p>
          </div>
        </div>

        {/* Ecosystem Interconnection Banner */}
        <div
          style={{
            background: 'rgba(10, 10, 16, 0.95)',
            border: '2px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '8px',
            padding: '2.5rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ flex: '1 1 320px', minWidth: 0, maxWidth: '100%' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--color-gold-warm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                }}
              >
                Monorepo Integration Architecture
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.85rem', color: '#ffffff' }}>
                How Database X Powers the Lucifer Fleet
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#b0b0c2', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Lucifer Database X acts as the central metadata registry for sister engines:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#d0d0e0' }}>
                  <CheckCircle2 size={16} color="var(--color-gold-primary)" />
                  <span>
                    <strong>Lucifer TorrentX Engine:</strong> Ingests Torznab search results and matches verified releases against Database X.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#d0d0e0' }}>
                  <CheckCircle2 size={16} color="var(--color-gold-primary)" />
                  <span>
                    <strong>Lucifer OTT Poster Bot:</strong> Fetches high-definition key art and container manifests directly from Database X.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#d0d0e0' }}>
                  <CheckCircle2 size={16} color="var(--color-gold-primary)" />
                  <span>
                    <strong>Lucifer Morningstar Restrict Bot:</strong> Preserves restricted media with canonical metadata tags and captioning.
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal Command Snapshot */}
            <div
              style={{
                flex: '1 1 280px',
                minWidth: 0,
                maxWidth: '100%',
                background: '#060608',
                borderRadius: '6px',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                padding: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.85rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '0.5rem',
                }}
              >
                <Terminal size={14} color="var(--color-gold-primary)" />
                <span style={{ color: '#888899' }}>lucifer-fleet-telemetry</span>
              </div>
              <div style={{ color: '#a0a0b2', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--color-gold-primary)' }}>$</span> ldx query --hash 8f7a93c4...
                <br />
                <span style={{ color: '#4ade80' }}>[OK]</span> Catalog Hash: MATCH
                <br />
                <span style={{ color: '#4ade80' }}>[OK]</span> Container: Matroska v4
                <br />
                <span style={{ color: '#4ade80' }}>[OK]</span> Video: HEVC 10-bit BT.2020
                <br />
                <span style={{ color: '#4ade80' }}>[OK]</span> Audio: TrueHD Atmos 7.1.4
                <br />
                <span style={{ color: 'var(--color-gold-warm)' }}>[FLEET]</span> Node: Europe-North-04 (Ready)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
