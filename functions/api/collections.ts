/**
 * Cloudflare Pages Function: /api/collections
 * Returns curated royal collections and counts.
 */

export const onRequestGet: PagesFunction = async () => {
  return new Response(
    JSON.stringify(
      {
        collections: [],
        total: 0,
        message: 'No fake collections — live registry integration active.',
      },
      null,
      2
    ),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60',
      },
    }
  )
}
