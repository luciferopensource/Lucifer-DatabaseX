/**
 * Cloudflare Pages Function: /api/search
 * Instant multi-field fuzzy / keyword search endpoint.
 */

import { CATALOG_DATA } from './_catalog'

export const onRequestGet: PagesFunction = async (context) => {
  const url = new URL(context.request.url)
  const q = (url.searchParams.get('q') || '').toLowerCase().trim()

  if (!q) {
    return new Response(JSON.stringify({ query: '', count: 0, results: [] }), {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  const results = CATALOG_DATA.filter((m) => {
    return (
      m.title.toLowerCase().includes(q) ||
      (m.originalTitle && m.originalTitle.toLowerCase().includes(q)) ||
      (m.director && m.director.toLowerCase().includes(q)) ||
      m.studio.toLowerCase().includes(q) ||
      m.genres.some((g) => g.toLowerCase().includes(q)) ||
      m.overview.toLowerCase().includes(q) ||
      m.format.resolution.toLowerCase().includes(q) ||
      m.format.videoCodec.toLowerCase().includes(q) ||
      m.audio.primaryFormat.toLowerCase().includes(q) ||
      m.luciferFleet.catalogHash.toLowerCase().includes(q)
    )
  })

  return new Response(
    JSON.stringify(
      {
        query: q,
        count: results.length,
        results: results.slice(0, 20),
      },
      null,
      2
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60',
      },
    }
  )
}

