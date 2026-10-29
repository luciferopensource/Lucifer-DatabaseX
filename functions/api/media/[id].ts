/**
 * Cloudflare Pages Function: /api/media/:id
 * Fetches full technical manifest for a specific title by ID or slug.
 */

import { CATALOG_DATA } from '../_catalog'

export const onRequestGet: PagesFunction = async (context) => {
  const idOrSlug = (context.params.id as string || '').toLowerCase()

  const entry = CATALOG_DATA.find(
    (m) => m.id.toLowerCase() === idOrSlug || m.slug.toLowerCase() === idOrSlug
  )

  if (!entry) {
    return new Response(
      JSON.stringify(
        {
          error: 'Media entry not found in sovereign catalog',
          requestedIdentifier: idOrSlug,
        },
        null,
        2
      ),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  }

  return new Response(JSON.stringify({ media: entry }, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=120',
    },
  })
}

