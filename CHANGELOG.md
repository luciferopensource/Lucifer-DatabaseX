# Changelog — Lucifer Database X 🗄️

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2026-10-30

### Added
- **ThreeUI Living Green (Sylva) Landing Interface**: High-fidelity Three.js WebGL procedural moss root simulation, dynamic butterfly kinematics, floating glass dock navigation, native liquid-metal interactive controls, and ethos cards.
- **Serverless Edge API Architecture**: Cloudflare Pages Functions delivering `/api/health`, `/api/media`, `/api/media/:id`, `/api/search`, `/api/sources`, and `/api/collections`.
- **The 16 Scraper Citadels Specifications**: Verified metadata mapping and telemetry specifications for all 16 autonomous movie scraper resolvers.
- **Canonical Media Dataset**: Initial sovereign catalog indexing 4K HDR, Dolby Vision, and lossless audio streams.
- **Comprehensive Documentation Suite**: Authored architecture audits, design specifications, motion physics specifications, backend contracts, and ingestion guides in `docs/`.
- **Cross-Platform Tooling**: Added `.editorconfig`, `.gitattributes`, `.gitignore`, `.gitlab/changelog_config.yml`, and `CITATION.cff`.
- **Governance & Policy**: Standardised `LICENSE` (MIT), `SECURITY.md`, `SUPPORT.md`, `CODE_OF_CONDUCT.md`, `ROADMAP.md`, and `CONTRIBUTING.md`.

### Changed
- Refactored frontend presentation to provide native 60 FPS WebGL rendering without iframe sandbox overhead.
- Optimised bundle splitting in Vite bundler for instant initial page loading.

### Security
- Configured strict Content Security Policy (`CSP`), anti-clickjacking headers (`X-Frame-Options: DENY`), and MIME-type sniffing protections in `public/_headers`.
- Isolated environment secrets and developer scratch files from version control.
