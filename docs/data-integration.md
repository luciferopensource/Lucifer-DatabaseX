# Data Integration & Scraper Citadels — Lucifer Database X 🗄️

**Repository:** `Lucifer DatabaseX`  
**Data Framework:** Sovereign Ingestion Core & 16 Scraper Citadels  
**Standard:** Lucifer Open Source Truthfulness Standard (Zero Synthetic Statistics)

---

## 1. The 16 Verified Scraper Citadels

All source citadels represent actual, physical resolvers integrated into Lucifer Database X:

| Citadel Identifier | Python Resolver File | Primary Domains | Core Capabilities & Architecture |
| :--- | :--- | :--- | :--- |
| **VegaMovies** | `vegamovies.py` | `vegamovies.gallery`, `vegamovies.is`, `nexdrive.fit`, `vegadrive.app` | TV season zip packs, single episode accordions, 4K HDR/SDR multi-releases, VegaDrive 7-mirror bridge, V-Cloud double-atob decoder, FastDL video stream extraction. |
| **4KHDHub** | `fourkhdhub.py` | `4khdhub.one`, `4khdhub.com`, `4khdhub.top` | 2160p Dolby Vision Profile 8.1 & REMUX, TV complete season packs, GreenMotors intermediate mediator penetration via Cloudflare DoH bypass. |
| **HDHub4u** | `hdhub4u.py` | `hdhub4u.ms`, `hdhub4u.lat`, `hdhub4u.fit` | Multi-quality movie releases, TV series packs, HubCloud direct gateway injection, FastDL instant conduit extraction. |
| **CineVood** | `cinevood.py` | `cinevood.live`, `cinevood.fit` | Multi-quality 4K/1080p releases, dual and multi-track audio packages, HubCloud and FastDL conduits. |
| **MoviesDrive** | `moviesdrive.py` | `moviesdrive.me`, `moviesdrive.fit` | GDFlix enterprise routing, HubCloud and HubDrive direct extraction, 2160p UHD and 1080p multi-audio packages. |
| **DesireMovies** | `desiremovies.py` | `desiremovies.trade`, `desiremovies.fun` | Complete ZIP vaults, TV series episode matrices, multi-server redundancy, high-speed direct CDN streams. |
| **Toonworld4All** | `toonworld.py` | `toonworld4all.me`, `toonworld4all.com` | Japanese anime and cartoon properties (`sparks_11_props.json`, `scratch_aristocrat_ep1_props.json`), multi-audio Japanese/English/Hindi tracks, FLAC OSTs, Google Drive and Mega sync. |
| **XPrime4u** | `xprime4u.vip` | `xprime4u.vip`, `xprime4u.fit` | High-bitrate 1080p and 4K stream mirrors, FastCloud edge delivery, HubCloud mirror verification. |
| **YTS** | `yts.py` | `yts.mx`, `yts.rs`, `yts.lt` | Yify torrent tracker swarm telemetry, 1080p/2160p BluRay x264/x265 magnet hashes, lossless AAC 5.1 passthrough. |
| **ZinkMovies** | `zinkmovies.py` | `zinkmovies.com`, `zinkmovies.net` | Regional Indian cinema (Tamil, Telugu, Kannada, Malayalam, Hindi) and Hollywood master transfers with multi-audio channel demuxing. |
| **HBLinks** | `hblinks.py` | `hblinks.pro`, `hblinks.day` | Instant HubCDN, HubCloud, and HubDrive gateway mirrors with zero-waiting token stripping and DoH acceleration. |
| **Gateway Matrix** | `gateway.py` | `hubcloud.club`, `fastcloud.day`, `gdflix.dev`, `drivenext.site` | Universal multi-cloud direct extraction engine handling recursive link resolutions and automated rate-limit bypass. |
| **Pixeldrain** | `pixeldrain.py` | `pixeldrain.com` | Direct 10Gbps high-speed CDN streaming nodes with chunked HTTP range requests and raw MKV/MP4 stream conduits. |
| **Gofile** | `gofile.py` | `gofile.io` | Tokenised high-speed cloud vaults, uncompressed REMUX masters, lossless FLAC 24-bit/192kHz audio bundles. |
| **TeraBox** | `terabox.py` | `terabox.com`, `1024tera.com` | Fast cloud storage conduits, full season zip batches, multi-tier link extraction. |
| **M3U / IPTV & Cinemeta** | `m3u.py` | `cinemeta.strem.io`, `iptv-org.github.io` | Live HLS M3U8 stream manifests, Stremio Cinemeta catalog synchronization, TMDB master catalog discovery. |

---

## 2. The 264,560 Sovereign Records

* **Sovereign Fleet Source:** Lucifer Fleet Ingestion Matrix
* **Primary Table:** `sync_history`
* **Total Rows:** `264,560`
* **Clean Indexed Titles:** `263,587`
* **Schema Definition:**
```sql
CREATE TABLE sync_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message_id INTEGER,
    source_id INTEGER,
    dest_id INTEGER,
    file_name TEXT,
    clean_name TEXT,
    year TEXT,
    resolution TEXT,
    codec TEXT,
    language TEXT,
    size INTEGER,
    copy_date TIMESTAMP,
    status TEXT,
    poster_url TEXT
);
```

### Verified Sample Ingest Rows:
* **Row 1995:** `Wanted 2008 1080p BluRay DDP 5 1 x264-c0kE.mkv.zip` (4,194,304,000 bytes; 3.91 GB)
* **Row 75431:** `300 (2006) (1080p BluRay x265 HEVC 10bit AAC 5.1 Tigole).zip` (4,194,304,000 bytes)
* **Row 2750:** `Vikram.(2022).DUAL.1080p.DS4K.WEBRip.10bit.DDP.Atmos.5.1` (2,438,529,626 bytes)
* **Row 68977:** `86 S01+SP 1080p Dual Audio BDRip 10 bits DD+ x265-EMBER.zip` (4,194,304,000 bytes)
* **Row 4402:** `Westworld (2016) S01 (1080p BluRay x265 SDR DDP 7.1).zip` (4,194,304,000 bytes)
* **Row 14:** `Spider-Noir.S01E05.Betrayal.2160p.AMZN.WEB-DL.Multi` (3,910,000,000 bytes)
* **Row 4822:** `Hostage.S01E01.1080p.NF.WEB-DL.MULTI.DDP5.1.Atmos.H.265` (1,250,536,727 bytes)

---

## 3. Data Normalisation & Synthesis Rules

1. **Deterministic Identifier Generation:**
   * Each canonical entry receives a unique Sovereign ID: `LDX-1xx` (Cinema), `LDX-2xx` (Series), `LDX-3xx` (Animation), `LDX-4xx` (Audiophile), `LDX-5xx` (Documentary).
2. **True File Size Representation:**
   * File sizes in bytes (`fileSizeBytes`) are derived directly from physical disk allocations and SQLite `size` columns, presented in both exact bytes and formatted gigabytes (`GB`).
3. **Cryptographic Validation:**
   * Every record maintains a 64-character SHA-256 verification hash (`luciferFleet.catalogHash`) used by the worker fleet for file de-duplication and bitstream verification.
4. **Mirror Link Conduits:**
   * Each entry is decorated with authentic resolver conduits (`Pixeldrain 10Gbps`, `HubCloud Direct`, `GDFlix Enterprise`, `Gofile Vault`, `Telegram MTProto Fleet Node`).

