# ╔═══════════════════════════════════════════════════════════════╗
# ║                  👑 LUCIFER DATABASE X 🗄️                     ║
# ║           Sovereign Media Registry & 3D Motion Matrix         ║
# ╚═══════════════════════════════════════════════════════════════╝

> **Lucifer Database X** is the centralised sovereign media database, technical metadata indexing engine, and cinematic exploration portal within the **Lucifer Open Source** ecosystem. Built with React 19, TypeScript, Three.js 3D WebGL motion graphics, and Cloudflare Pages edge functions.

---

## 🏛️ Brand & Artistic Direction: The Obsidian Cinema Universe

* **Aesthetic Standard:** Royal Obsidian (`#050508`, `#08080c`, `#0e0e15`) accented with Imperial Gold gradients (`#bf953f` to `#fcf6ba`), cinematic double-line framing (`border-royal-double`), and liquid glass refraction.
* **Typography:** `Cinzel` & `Cormorant Garamond` (display headings), `Outfit` (interface navigation), and `JetBrains Mono` (technical telemetry and cryptographic signatures).
* **3D Motion Physics:** Interactive Three.js WebGL canvas (`ThreePortalField`) rendering relativistic warp geometry, golden stardust embers, and cursor-reactive camera parallax with smooth 2D canvas fallback.
* **Truthfulness Standard:** Grounded strictly in the monorepo's 16 movie scraper sources and the 264,560 verified records of `smart_sync.db`. Zero synthetic statistics or mock search results.

---

## 🚀 Key Features

1. **Interactive 3D WebGL Motion Canvas (`ThreePortalField.tsx`)**:
   * Concentric golden wireframe torus portals and 1,200 relativistic stardust particles.
   * Dynamic pointer parallax with 0.05 lerp damping.
   * Fully accessible: respects `prefers-reduced-motion` and provides automatic fallback to high-efficiency 2D canvas.

2. **16 Autonomous Scraper Citadels Explorer (`SourceCitadels.tsx`)**:
   * Integrated audit matrix covering all 16 resolvers from `Lucifer-OTT-POS-main`:
     * *VegaMovies, 4KHDHub, HDHub4u, CineVood, MoviesDrive, DesireMovies, Toonworld4All, XPrime4u, YTS, ZinkMovies, HBLinks, Gateway Matrix, Pixeldrain, Gofile, TeraBox, M3U / IPTV & Cinemeta*.
   * Instant single-click catalog filtering by citadel.

3. **Multi-Facet Media Explorer & Filter Matrix (`MediaExplorer.tsx`)**:
   * Interactive filters for Category, Resolution (8K, 4K UHD, 1080p FHD, Master Audio), Video Codecs (HEVC, AV1), Audio Formats (Dolby Atmos, TrueHD, DTS-HD MA, FLAC, PCM), Dynamic Range (Dolby Vision P7/P8, HDR10+, SDR), and Citadels.
   * Instant search responding to keyboard shortcut `/`.

4. **Deep Technical Manifest Inspector (`MediaDetailModal.tsx`)**:
   * Detailed breakdown across four inspection tabs: *Video Manifest*, *Audio Layout*, *Subtitles*, and *Fleet Telemetry & Mirrors*.
   * Single-click copy of 64-character SHA-256 stream integrity hashes.
   * Live mirror conduit routes (Pixeldrain 10Gbps, HubCloud, GDFlix, Gofile).

5. **Cloudflare Pages Serverless API Layer (`functions/api/`)**:
   * `GET /api/health` — Cluster telemetry and database state.
   * `GET /api/media` — Paginated multi-facet media query.
   * `GET /api/media/:id` — Deep manifest inspection.
   * `GET /api/search` — Fuzzy full-text search.
   * `GET /api/sources` — Real audit status of the 16 scraper citadels.
   * `GET /api/collections` — Curated royal collections and counts.
   * Transparent hybrid client layer (`src/lib/api.ts`) with zero-downtime offline fallback.

---

## 🛠️ Project Structure

```
Lucifer DatabaseX/
├── dist/                          # Production build output (Cloudflare Pages)
├── docs/                          # Comprehensive technical documentation
│   ├── architecture-audit.md      # Initial project inspection & ecosystem findings
│   ├── design-reference-audit.md  # Audit of the 14 design-reference libraries
│   ├── design-system.md           # Tokens, typography scales, and CSS classes
│   ├── motion-system.md           # Three.js WebGL & spring physics specifications
│   ├── backend-architecture.md    # Cloudflare Pages Functions & API contracts
│   └── data-integration.md       # The 16 citadels & smart_sync.db mapping rules
├── functions/                     # Cloudflare Pages Functions (Serverless API)
│   └── api/
│       ├── _catalog.ts            # Shared canonical dataset
│       ├── health.ts              # /api/health
│       ├── media/
│       │   ├── index.ts           # /api/media
│       │   └── [id].ts            # /api/media/:id
│       ├── search.ts              # /api/search
│       ├── sources.ts             # /api/sources
│       └── collections.ts         # /api/collections
├── public/
│   ├── _headers                   # Security headers (CSP, X-Frame-Options)
│   ├── _routes.json               # Cloudflare Pages Functions routing rules
│   └── favicon.svg                # Sovereign gold crown & database emblem
├── src/
│   ├── components/                # React UI components
│   │   ├── AboutSection.tsx       # Institutional mission & monorepo integration
│   │   ├── CollectionShowcase.tsx # Royal collections & vault shortcuts
│   │   ├── Footer.tsx             # Institutional footer with verified repo links
│   │   ├── GoldParticleCanvas.tsx # 2D Canvas fallback particle engine
│   │   ├── Hero.tsx               # Cinematic hero section
│   │   ├── Icons.tsx              # Custom SVG GitHub & GitLab brand icons
│   │   ├── LiquidGlass.tsx        # Translucent glass container with pointer tilt
│   │   ├── MediaCard.tsx          # 3:4 poster card with quality chips
│   │   ├── MediaDetailModal.tsx   # Technical manifest inspector modal
│   │   ├── MediaExplorer.tsx      # Multi-facet catalog search & filter matrix
│   │   ├── Navbar.tsx             # Fixed frosted glass header & drawer
│   │   ├── SchemaExplorer.tsx     # Interactive JSON schema viewer
│   │   ├── SourceCitadels.tsx     # The 16 Scraper Citadels & Fleet explorer
│   │   └── ThreePortalField.tsx   # Three.js 3D WebGL motion canvas
│   ├── data/
│   │   ├── catalog.ts             # Curated media dataset & collection presets
│   │   └── citadels.ts            # The 16 verified scraper sources & domains
│   ├── lib/
│   │   └── api.ts                 # Hybrid data access layer with offline fallback
│   ├── types/
│   │   └── media.ts               # Strict TypeScript domain interfaces
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Obsidian & gold CSS variables & utility classes
│   ├── main.tsx                   # React 19 application entry point
│   └── vite-env.d.ts              # Vite client type references
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # Strict TypeScript configuration
├── vite.config.ts                 # Vite bundler configuration & chunk splitting
└── wrangler.jsonc                 # Cloudflare Pages deployment configuration
```

---

## 💻 Local Development & Build

### Prerequisites
* **Node.js**: `v20.0.0` or higher
* **npm**: `v10.0.0` or higher

### Install Dependencies
```powershell
npm.cmd install
```

### Start Development Server
```powershell
npm.cmd run dev
```

### Run Production Build
```powershell
npm.cmd run build
```
Executes `tsc -b` (strict TypeScript validation) and `vite build`, bundling optimized chunks into `./dist`.

### Preview Production Build
```powershell
npm.cmd run preview
```

---

## 🔒 Security & Privacy Standard

* **Zero Credentials in Git:** `.env`, secrets, and personal token files are strictly isolated in `.gitignore`.
* **Agent Guidelines:** `PROJECT_MEMORY.md`, `GEMINI.md`, and local AI agent status files are untracked.
* **Strict CSP Headers:** Configured in `public/_headers` preventing cross-site scripting and unauthorized framing.

---

## 🌐 Official Repositories

* **GitHub:** [https://github.com/luciferopensource/Lucifer-DatabaseX](https://github.com/luciferopensource/Lucifer-DatabaseX)
* **GitLab:** [https://gitlab.com/luciferopensource/Lucifer-DatabaseX](https://gitlab.com/luciferopensource/Lucifer-DatabaseX)

---

**Parent Brand:** Lucifer Open Source  
*Crafted with British English conventions and sovereign precision.*
