# Design System — The Obsidian Cinema Universe

**Product:** Lucifer Database X 🗄️  
**Brand Identity:** Lucifer Open Source  
**Aesthetic:** Royal Obsidian & Imperial Gold with Liquid-Glass Refraction  
**Conventions:** British English (`behaviour`, `customise`, `initialise`, `centralised`)

---

## 1. Palette & Surface Tokens

### Obsidian Dark Spectrum
* `--color-obsidian-deep`: `#050508` (Base canvas and cosmic depth)
* `--color-obsidian-base`: `#08080c` (Atmospheric backdrop)
* `--color-obsidian-surface`: `#0e0e15` (Elevated card panels)
* `--color-obsidian-card`: `#13131c` (Primary content containers)
* `--color-obsidian-card-hover`: `#181824` (Pointer-engaged surfaces)
* `--color-obsidian-border`: `rgba(212, 175, 55, 0.15)` (Subtle gold boundary)
* `--color-obsidian-border-hover`: `rgba(212, 175, 55, 0.45)` (Active focus boundary)

### Imperial Royal Gold Spectrum
* `--color-gold-light`: `#fff3c4` (Champagne highlight)
* `--color-gold-primary`: `#d4af37` (Imperial royal gold)
* `--color-gold-warm`: `#e6be53` (Warm amber accent)
* `--color-gold-antique`: `#b38728` (Antique bronze gold)
* `--color-gold-dark`: `#7a5813` (Deep burnished gold)
* `--color-gold-muted`: `rgba(212, 175, 55, 0.12)` (Translucent gold wash)

### Metallic Gradients
* `--gradient-royal-gold`: `linear-gradient(135deg, #bf953f 0%, #fcf6ba 25%, #b38728 50%, #fbf5b7 75%, #aa771c 100%)`
* `--gradient-obsidian-radial`: `radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.12) 0%, rgba(8, 8, 12, 0.98) 70%, #050508 100%)`

---

## 2. Typography Hierarchy

| Role | Font Family | Weights | Usage & Scope |
| :--- | :--- | :--- | :--- |
| **Display / Royal** | `Cinzel`, serif | 700, 800, 900 | Grand cinematic headings, brand wordmark, royal vault titles |
| **Expressive Serif** | `Cormorant Garamond`, serif | 600, 700 | Cinematic editorial subheads, curator quotes |
| **Interface / Body** | `Outfit`, sans-serif | 300, 400, 500, 600 | Navigation links, body copy, descriptions, input fields, buttons |
| **Technical Telemetry**| `JetBrains Mono`, monospace | 400, 500, 600 | Codecs, bitrates, resolutions, SHA-256 hashes, JSON manifests |

### Fluid Type Scale
* **Display 1 (Hero Title):** `clamp(2.4rem, 6vw, 4.4rem)` / line-height: `1.15` / tracking: `0.04em`
* **Heading 2 (Section Title):** `clamp(2rem, 3.5vw, 2.8rem)` / line-height: `1.2` / tracking: `0.03em`
* **Heading 3 (Card Title):** `clamp(1.15rem, 1.8vw, 1.35rem)` / line-height: `1.3`
* **Body Text:** `clamp(0.95rem, 1.2vw, 1.05rem)` / line-height: `1.65`
* **Metadata Tag:** `0.72rem – 0.8rem` / monospace / tracking: `0.08em` / uppercase

---

## 3. Materials & Liquid Glass

* **Liquid Glass Surface (`.glass-panel`)**:
  * Background: `rgba(14, 14, 21, 0.72)`
  * Backdrop Filter: `blur(16px)`
  * Border: `1px solid rgba(212, 175, 55, 0.15)`
  * Box Shadow: `0 10px 30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.15)`
* **Double-Line Royal Frame (`.border-royal-double`)**:
  * Border: `3px double #d4af37`
  * Applied to ceremonial dividers, telemetry badges, and terminal windows.

---

## 4. Responsive Breakpoints

* **Mobile:** `< 640px` (single-column cards, full-width search, slide-out drawer)
* **Tablet:** `640px – 1024px` (two-column card grid, compact filter bar)
* **Desktop:** `1024px – 1440px` (three-to-four column grid, expanded multi-facet filters)
* **Ultra-Wide / 4K:** `> 1440px` (max-width container: `1400px`, centered cinematic composition)

