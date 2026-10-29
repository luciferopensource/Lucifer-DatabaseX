/**
 * Cloudflare Pages Function: /api/media
 * Queries and filters the sovereign media catalog.
 */

import { CATALOG_DATA, MediaEntry } from '../_catalog'

export const onRequestGet: PagesFunction = async (context) => {
  const url = new URL(context.request.url)
  const query = (url.searchParams.get('q') || '').toLowerCase().trim()
  const category = url.searchParams.get('category')
  const resolution = url.searchParams.get('resolution')
  const source = url.searchParams.get('source')
  const tag = url.searchParams.get('tag')
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 100)
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0)

  let results: MediaEntry[] = CATALOG_DATA

  if (category && category !== 'All') {
    results = results.filter((m) => m.category.toLowerCase() === category.toLowerCase())
  }

  if (resolution && resolution !== 'All') {
    results = results.filter((m) => m.format.resolution.toLowerCase().includes(resolution.toLowerCase()))
  }

  if (source && source !== 'All') {
    results = results.filter((m) => m.sourceCitadel?.toLowerCase() === source.toLowerCase())
  }

  if (tag) {
    results = results.filter((m) => m.collectionTags.some((t) => t.toLowerCase() === tag.toLowerCase()))
  }

  if (query) {
    results = results.filter((m) => {
      return (
        m.title.toLowerCase().includes(query) ||
        (m.originalTitle && m.originalTitle.toLowerCase().includes(query)) ||
        (m.director && m.director.toLowerCase().includes(query)) ||
        m.studio.toLowerCase().includes(query) ||
        m.genres.some((g) => g.toLowerCase().includes(query)) ||
        m.overview.toLowerCase().includes(query) ||
        m.curatorNote.toLowerCase().includes(query) ||
        m.luciferFleet.catalogHash.toLowerCase().includes(query)
      )
    })
  }

  const paginated = results.slice(offset, offset + limit)

  return new Response(
    JSON.stringify(
      {
        total: results.length,
        offset,
        limit,
        media: paginated,
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
