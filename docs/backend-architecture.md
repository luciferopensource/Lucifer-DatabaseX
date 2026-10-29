# Backend & Edge Architecture — Lucifer Database X 🗄️

**Repository:** `C:\Users\shank\OneDrive\Desktop\Lucifer Open Source\Lucifer DatabaseX`  
**Host Target:** Cloudflare Pages & Edge Functions (`wrangler.jsonc`)  
**Standard:** British English, Lucifer Open Source Security and Architectural Governance

---

## 1. System Overview & Deployment Topology

Lucifer Database X operates on a **Hybrid Edge Architecture** designed for high availability, zero-cold-start edge execution, and sovereign client independence:

```
[Global User Browser]
        │
        ├── HTTP/3 / HTTPS ──> [Cloudflare Edge Anycast CDN]
        │                             │
        │                             ├─ Static Assets: /assets/* (Cache: immutable 1 year)
        │                             │
        │                             └─ Serverless Functions: /api/* (Cloudflare Pages Functions)
        │                                        │
        │                                        ├─ GET /api/health
        │                                        ├─ GET /api/media
        │                                        ├─ GET /api/media/:id
        │                                        ├─ GET /api/search
        │                                        ├─ GET /api/sources
        │                                        └─ GET /api/collections
        │
        └── Offline / Local Fallback ──> [Client Data Access Layer (src/lib/api.ts)]
                                                 │
                                                 └─ Bundled Ingest Catalog & Citadel Registry
```

When deployed to Cloudflare Pages, requests to `/api/*` are handled by serverless TypeScript functions located in `functions/api/`. In offline environments or static previews where edge functions are unavailable, the client data access layer (`src/lib/api.ts`) automatically falls back to bundled canonical data with zero disruption.

---

## 2. Cloudflare Pages Serverless Endpoints (`functions/api/`)

### A. Health & Cluster Telemetry — `GET /api/health`
Returns sovereign database state, active worker nodes, and integrity status.

* **Response Status:** `200 OK`
* **Cache Header:** `public, max-age=60`
* **Response Contract:**
```json
{
  "service": "Lucifer Database X Telemetry",
  "status": "Operational",
  "version": "1.0.0-royal",
  "environment": "Cloudflare Edge Pages",
  "databaseState": {
    "smartSyncRecordsIndexed": 264560,
    "verifiedCitadelSources": 16,
    "catalogEntriesActive": 12,
    "encryptionMaster": "SHA-256 Validated"
  },
  "cluster": {
    "activeFleetNodes": [
      "Europe-North-Worker-04",
      "US-East-Worker-02",
      "Asia-South-Worker-01"
    ],
    "latencyMs": 1.2,
    "protocol": "HTTP/3 Quic Supported"
  },
  "timestamp": "2026-10-30T00:15:00.000Z"
}
```

### B. Catalog Multi-Facet Query — `GET /api/media`
Supports filtering by category, resolution, source citadel, tag, text search, and pagination.

* **Query Parameters:**
  * `q` (string, optional): Full-text keyword search.
  * `category` (enum, optional): `Cinema`, `Series`, `Audiophile`, `Documentary`, `Animation`.
  * `resolution` (string, optional): `2160p (4K UHD)`, `4320p (8K)`, `1080p (FHD)`, `Master Audio`.
  * `source` (enum, optional): One of the 16 verified scraper citadels.
  * `tag` (string, optional): Collection tag (e.g. `Imperial Cinema`).
  * `limit` (number, default: 50, max: 100).
  * `offset` (number, default: 0).
* **Response Status:** `200 OK`
* **Cache Header:** `public, max-age=60`

### C. Technical Manifest Inspection — `GET /api/media/:id`
Retrieves the complete technical specification for a media asset by ID (e.g. `LDX-101`) or slug (e.g. `dune-part-two-imax-dolby-vision`).

* **Path Parameters:** `:id` (string, required).
* **Response Status:** `200 OK` or `404 Not Found`.
* **Response Payload:** Detailed technical manifest including video container, color primaries, dynamic range mastering, audio channel layouts, subtitle streams, MTProto fleet routing, and active mirror conduits.

### D. Multi-Field Fuzzy Search — `GET /api/search`
Searches across title, original title, director, studio, genres, overview, audio format, and cryptographic hashes.

* **Query Parameters:** `q` (string, required).
* **Response Status:** `200 OK`.
* **Response Payload:** Returns matching entries up to 20 results.

### E. 16 Scraper Citadels Registry — `GET /api/sources`
Returns the status, domains, supported formats, and capabilities of all 16 movie scraper sources.

* **Response Status:** `200 OK`.
* **Cache Header:** `public, max-age=300`.

### F. Royal Collections Matrix — `GET /api/collections`
Returns curated collection presets and verified record counts.

* **Response Status:** `200 OK`.
* **Cache Header:** `public, max-age=300`.

---

## 3. Client Data Access Layer (`src/lib/api.ts`)

The frontend never couples directly to raw fetch calls. It queries through the `api` module:

```typescript
import { api } from './lib/api'

// Fetch with automatic fallback to local catalog
const { media, total } = await api.getMedia({
  category: 'Cinema',
  resolution: '2160p (4K UHD)'
})

// Retrieve edge telemetry
const telemetry = await api.getHealth()
```

Each query is executed with a `2,500ms` timeout using `AbortController`. If network timeouts or HTTP errors occur (such as running in static preview), the client falls back to bundled canonical data with zero UI degradation.

---

## 4. Security & Edge Configuration

* **`wrangler.jsonc`**:
  * Configures Pages deployment targeting `./dist`.
  * Sets Single-Page Application (SPA) routing fallback.
* **`public/_headers`**:
  * Strict Content-Security-Policy (CSP) allowing only HTTPS image sources, fonts, and inline styles for critical rendering.
  * `X-Frame-Options: DENY` preventing clickjacking.
  * `X-Content-Type-Options: nosniff`.
  * `Referrer-Policy: strict-origin-when-cross-origin`.
  * `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
  * Immutable caching for `/assets/*`: `public, max-age=31536000, immutable`.
* **`public/_routes.json`**:
  * Routes all `/api/*` requests to Cloudflare Pages Functions.
  * Serves static assets directly from edge cache.
