import React, { useState } from 'react'
import { Code2, Copy, Check, FileJson, Network, Server } from 'lucide-react'

const SCHEMAS = {
  manifest: {
    title: 'Media Manifest Schema (JSON)',
    icon: FileJson,
    description:
      'Universal JSON schema defining immutable stream attributes, colorimetry profiles, and discrete audio channel layouts for each master entry.',
    code: `{
  "$schema": "https://luciferopensource.dev/schemas/ldx-v2.json",
  "media_id": "LDX-101",
  "canonical_slug": "tears-of-steel-4k-uhd-master",
  "title": "Tears of Steel",
  "year": 2012,
  "category": "Cinema",
  "container": "Matroska (.mkv)",
  "video_manifest": {
    "codec": "HEVC",
    "profile": "Main 10@L5.1@High",
    "pixel_dimensions": "3840x2160",
    "aspect_ratio": "2.39:1",
    "bit_depth": 10,
    "color_primaries": "BT.2020",
    "transfer_characteristics": "SMPTE ST 2084 (PQ)",
    "matrix_coefficients": "BT.2020 non-constant luminance",
    "dynamic_range": "HDR10",
    "video_bitrate_kbps": 48500,
    "fps": 24.0
  },
  "audio_streams": [
    {
      "stream_index": 1,
      "codec": "TrueHD Atmos",
      "channel_layout": "7.1.4",
      "sample_rate_hz": 48000,
      "bit_depth": 24,
      "bitrate_kbps": 4800,
      "language": "eng",
      "is_default": true
    }
  ],
  "cryptographic_signatures": {
    "stream_sha256": "8f7a93c4e61b5894b9f2d1283d7120a1cf408a29a0094e8ecbf271b12b204e12",
    "ed25519_catalog_sign": "lucifer-sovereign-vault-sig-0x892a..."
  }
}`,
  },
  mtproto: {
    title: 'MTProto Stream Fleet Routing Matrix',
    icon: Network,
    description:
      'Decentralized channel routing topology connecting Lucifer Database X with the 30-worker Telegram fleet for fault-tolerant media distribution.',
    code: `{
  "fleet_orchestrator": "Lucifer Cloud Engine",
  "cluster_mode": "Autonomous Worker Pool",
  "worker_nodes": [
    {
      "node_id": "europe-north-worker-01",
      "mtproto_session_type": "Pyrogram MTProto v2",
      "active_channels": ["-1002984102941", "-1001889201948"],
      "bandwidth_profile": "10 Gbps Sovereign Gateway",
      "floodwait_buffer_sec": 30
    },
    {
      "node_id": "europe-west-worker-02",
      "mtproto_session_type": "Pyrofork Multi-Session",
      "active_channels": ["-1002441920193", "-1001994029144"],
      "bandwidth_profile": "10 Gbps Sovereign Gateway",
      "floodwait_buffer_sec": 30
    }
  ],
  "routing_policy": "Least-Connections-Round-Robin",
  "deduplication_mode": "Strict InfoHash & Bitstream SHA-256"
}`,
  },
  torznab: {
    title: 'TorrentX Torznab Indexing Relay',
    icon: Server,
    description:
      'Bi-directional Torznab and RSS parser integration linking Lucifer Database X with Lucifer TorrentX Engine for automated tracker cataloging.',
    code: `{
  "relay_engine": "Lucifer TorrentX Engine v3.14+",
  "indexer_protocol": "Jackett Torznab XML / JSON",
  "sync_interval_sec": 300,
  "category_mappings": {
    "2000": "Movies (General)",
    "2040": "Movies / UHD 4K",
    "2050": "Movies / 3D & Spatial",
    "3000": "Audio (Lossless FLAC)",
    "5000": "TV / UHD Series"
  },
  "wal_persistence": "SQLite aiosqlite with WAL mode enabled",
  "ssrf_protection": "Strict private IP blocklist + DNS rebind prevention"
}`,
  },
}

export const SchemaExplorer: React.FC = () => {
  const [activeKey, setActiveKey] = useState<keyof typeof SCHEMAS>('manifest')
  const [copied, setCopied] = useState(false)

  const current = SCHEMAS[activeKey]

  const copyCode = () => {
    navigator.clipboard.writeText(current.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="schema" style={{ padding: '90px 0', position: 'relative' }}>
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
            <Code2 size={14} />
            <span>Architectural Integrity</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            THE TECHNICAL <span className="text-gold-gradient">SCHEMA SPECIFICATION</span>
          </h2>

          <p
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              color: '#9e9eb0',
              fontSize: '1.05rem',
              fontWeight: 300,
            }}
          >
            Strict cryptographic structures and streaming protocols designed for
            zero-loss media cataloging and automated fleet orchestration.
          </p>
        </div>

        {/* Schema Container */}
        <div
          style={{
            background: 'rgba(12, 12, 18, 0.95)',
            border: '1.5px solid var(--color-obsidian-border)',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-obsidian-elevated)',
          }}
        >
          {/* Schema Selector Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
              background: 'rgba(7, 7, 10, 0.95)',
            }}
          >
            {(Object.keys(SCHEMAS) as (keyof typeof SCHEMAS)[]).map((key) => {
              const item = SCHEMAS[key]
              const Icon = item.icon
              const isActive = activeKey === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveKey(key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    padding: '1.1rem 1.6rem',
                    background: isActive ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                    border: 'none',
                    borderBottom: isActive
                      ? '2px solid var(--color-gold-primary)'
                      : '2px solid transparent',
                    color: isActive ? '#ffffff' : '#88889a',
                    fontFamily: 'var(--font-modern)',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Icon size={16} color={isActive ? 'var(--color-gold-primary)' : 'inherit'} />
                  <span>{item.title}</span>
                </button>
              )
            })}
          </div>

          {/* Description & Action Bar */}
          <div
            style={{
              padding: '1.25rem 1.75rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              background: 'rgba(14, 14, 22, 0.75)',
            }}
          >
            <p style={{ fontSize: '0.92rem', color: '#b2b2c4', margin: 0, maxWidth: '780px' }}>
              {current.description}
            </p>

            <button
              onClick={copyCode}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                padding: '0.45rem 0.9rem',
                borderRadius: '4px',
                color: 'var(--color-gold-light)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {copied ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Schema'}</span>
            </button>
          </div>

          {/* Code Body */}
          <div
            style={{
              padding: '1.75rem',
              overflowX: 'auto',
              background: '#07070a',
            }}
          >
            <pre
              style={{
                margin: 0,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.86rem',
                lineHeight: 1.6,
                color: '#eaeaf4',
              }}
            >
              <code>{current.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
