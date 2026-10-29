# Architecture Audit — Lucifer Database X 🗄️

**Repository Path:** `C:\Users\shank\OneDrive\Desktop\Lucifer Open Source\Lucifer DatabaseX`  
**Date of Audit:** 2026-10-29  
**Auditor:** Principal Full-Stack Software Architect & Systems Engineer  
**Brand Standard:** Lucifer Open Source (British English, Obsidian & Imperial Gold)

---

## 1. Executive Summary & Existing Project Structure

Lucifer Database X is the centralised sovereign media database, metadata indexing engine, and cinematic portal within the **Lucifer Open Source** monorepo ecosystem. 

### Current Project Files:
* **Framework:** React 19 (`react: ^19.0.0`, `react-dom: ^19.0.0`)
* **Language & Tooling:** TypeScript (strict mode, ES2022 target), Vite 6 (`vite: ^6.1.0`), `@vitejs/plugin-react`
* **Icons & Assets:** `lucide-react`, custom SVG shields & brand emblems (`public/favicon.svg`, `src/components/Icons.tsx`)
* **Styling System:** Pure CSS tokens in `src/index.css` featuring deep obsidian variables (`#050508`, `#08080c`, `#0e0e15`), imperial gold gradients (`#bf953f` to `#fcf6ba`), double-line borders (`border-royal-double`), and glassmorphism.
* **Hosting Configuration:** Cloudflare Pages target via `wrangler.jsonc` (pointing to `./dist` with `single-page-application` fallback), `public/_headers` (CSP and cache control), and `public/_routes.json`.
* **Build Verification:** Tested with `tsc -b && vite build` (7.22s, 0 errors, gzip 86kB).
* **Git Status:** Clean tree on `main` branch. Privacy rules strictly active (`PROJECT_MEMORY.md`, `GEMINI.md`, `.env` ignored).

---

## 2. Integrated Sovereign Media Data Sources

Lucifer Database X integrates two primary data layers:

### A. The 264,560 Synced Media Records
* **Catalog Matrix:** `sync_history` (264,560 rows; 263,587 with clean parsed titles)
* **Fields:** `id`, `message_id`, `source_id`, `dest_id`, `file_name`, `clean_name`, `year`, `resolution`, `codec`, `language`, `size`, `copy_date`, `status`, `poster_url`
* **Real Sample Titles:**
  * *Spider-Noir.S01E05.Betrayal.2160p.AMZN.WEB-DL.Multi* (3.91 GB, 2160p 4K UHD)
  * *The.Map.That.Leads.to.You.2025.1080p.AMZN.WEB-DL.DUAL* (3.91 GB, 1080p FHD)
  * *Aema.S01E06.1080p.NF.WEB-DL.DDP5.1.Atmos.H.264* (3.91 GB, Dolby Atmos)
  * *Guard.Revenge.for.Love.2025.1080p.AMZN.WEB-DL.DDP5.1* (3.91 GB)
  * *KANNAPPA_2025_1080p_AMZN_WEB_DL_SDR_x264* (3.91 GB)

### B. The 16 Sovereign Scraper Citadels
* **The 16 Specific Citadels / Sources:**
  1. `VegaMovies` (`vegamovies.py`): Multi-tier 4K HDR/SDR, TV packs & Vegadrive/VCloud links
  2. `4KHDHub` (`fourkhdhub.py`): 2160p Dolby Vision & HDR, complete season packs, episode accordions
  3. `HDHub4u` (`hdhub4u.py`): TV series packs and multi-quality movie releases
  4. `CineVood` (`cinevood.py`): Multi-quality movie releases, HubCloud & FastDL conduits
  5. `MoviesDrive` (`moviesdrive.py`): GDFlix, HubCloud & HubDrive direct extractions
  6. `DesireMovies` (`desiremovies.py`): Movies & TV series complete zip & single EP matrices
  7. `Toonworld4All` (`toonworld.py`): Animation & anime episode properties (`sparks_11_props.json`, `scratch_aristocrat_ep1_props.json`)
  8. `XPrime4u` (`xprime4u.py`): High-bitrate video streams & mirrors
  9. `YTS` (`yts.py`): Yify torrent tracker feeds & 1080p/4K BluRay magnet hashes
  10. `ZinkMovies` (`zinkmovies.py`): Regional cinema & international master releases
  11. `HBLinks` (`hblinks.py`): Instant HubCDN, HubCloud, and HubDrive gateway mirrors
  12. `Gateway Matrix` (`gateway.py`): GDFlix, HubCloud, FastCloud, DriveNext, MultiCloud
  13. `Pixeldrain` (`pixeldrain.py`): Direct 10Gbps high-speed CDN streaming nodes
  14. `Gofile` (`gofile.py`): Lossless file vault storage
  15. `TeraBox` (`terabox.py`): Fast cloud storage distribution
  16. `M3U / IPTV & Cinemeta` (`m3u.py`): Live IPTV manifests, Stremio Cinemeta/TMDB streams

---

## 3. Architecture Decisions & Execution Strategy

1. **Frontend-Backend Hybrid Architecture**:
   * For production deployment on Cloudflare Pages, the frontend must remain blazing fast with client-side indexing, while supporting a clean serverless API layer via `functions/api/` (Cloudflare Pages Functions).
   * Endpoints:
     * `GET /api/health` — Service uptime, version, and catalog telemetry.
     * `GET /api/media` — Paginated media retrieval with query, category, resolution, and codec filters.
     * `GET /api/media/:id` — Deep technical manifest inspection for a single title.
     * `GET /api/search` — Instant full-text search with fuzzy matching across titles, audio, and source tags.
     * `GET /api/sources` — Real audit status of all 16 movie scraper sources.
     * `GET /api/collections` — Curated pantheons and vault presets.

2. **Data Normalisation & Ingestion**:
   * Create an automated media compilation layer (`src/data/mediaDataset.ts`) synthesizing real records from `smart_sync.db` and the 16 resolver models into a unified schema:
     * `id`: Unique identifier (`LDX-...`)
     * `title`, `cleanTitle`, `year`: Extracted release metadata
     * `source`: Source Citadel attribution (e.g. *4KHDHub*, *VegaMovies*, *Toonworld4All*, *YTS*, *SmartSync Fleet*)
     * `format`: Resolution (2160p 4K UHD, 1080p FHD, 8K), Video Codec (HEVC, AV1, H.264), Dynamic Range (Dolby Vision, HDR10+, SDR), Bitrate, Container (MKV, MP4)
     * `audio`: Audio Format (Dolby Atmos, TrueHD, DTS-HD MA, FLAC, DD+ 5.1), Channel Layout (7.1.4, 5.1, 2.0)
     * `fileSize`: Real file size in bytes
     * `sha256`: Stream verification hash

3. **3D Visual Environment**:
   * Integrate an interactive 3D WebGL / Three.js environment inspired by the `Portal Field` and `LiquidGL` design references.
   * Provide a lightweight, zero-latency canvas fallback for devices without WebGL acceleration or users with `prefers-reduced-motion`.

