/**
 * Cloudflare Pages Function: /api/collections
 * Returns curated royal collections and counts.
 */

export const onRequestGet: PagesFunction = async () => {
  const collections = [
    {
      id: 'imperial-cinema',
      tag: 'Imperial Cinema',
      title: 'Imperial Cinema',
      subtitle: 'The Sovereign Master Vault',
      description: 'The highest tier of cinematic art digitised from 70mm, 35mm, and native 4K/8K uncompressed digital cinema cameras.',
      count: 7,
      badge: 'Royal Masterpieces',
      accentColor: 'from-amber-500/20 to-yellow-600/10'
    },
    {
      id: 'dolby-vision-vault',
      tag: 'Dolby Vision Vault',
      title: 'Dolby Vision Master Vault',
      subtitle: 'Dynamic Metadata Mastery',
      description: 'Pristine 12-bit & 10-bit Dolby Vision Profile 7 & 8.1 transfers with dynamic frame-by-frame luminance tone curves up to 4,000 nits.',
      count: 4,
      badge: 'Dolby Vision P7/P8',
      accentColor: 'from-purple-900/20 to-amber-500/10'
    },
    {
      id: 'reference-soundstages',
      tag: 'Reference Soundstages',
      title: 'Reference Spatial Soundstages',
      subtitle: 'Dolby TrueHD Atmos & DTS:X 7.1.4',
      description: 'Acoustically pristine spatial mixes featuring discrete overhead ceiling objects, 24-bit 96kHz studio fidelity, and zero dynamic compression.',
      count: 7,
      badge: 'TrueHD Atmos 7.1.4',
      accentColor: 'from-blue-900/20 to-amber-500/10'
    },
    {
      id: 'anime-sovereignty',
      tag: 'Anime Sovereignty',
      title: 'Anime Sovereignty',
      subtitle: 'Studio Ghibli & A-1 Pictures Masterworks',
      description: 'High-bitrate Japanese and dual-audio animation releases preserving cel animation hand-strokes and Hiroyuki Sawano & Joe Hisaishi scores.',
      count: 2,
      badge: 'Uncompressed Cel Masters',
      accentColor: 'from-rose-900/20 to-amber-500/10'
    },
    {
      id: 'smartsync-fleet-ingest',
      tag: 'SmartSync Fleet Ingest',
      title: 'SmartSync Fleet Ingest',
      subtitle: '264,560 Synced Fleet Records',
      description: 'Direct verified releases synced across the Lucifer Open Source Telegram MTProto worker fleet with live verified integrity hashes.',
      count: 5,
      badge: 'Fleet Verified',
      accentColor: 'from-emerald-900/20 to-amber-500/10'
    }
  ]

  return new Response(JSON.stringify({ collections, total: collections.length }, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  })
}

