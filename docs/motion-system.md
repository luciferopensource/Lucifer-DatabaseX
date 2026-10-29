# Motion System & Spatial Physics — Lucifer Database X 🗄️

**Repository:** `C:\Users\shank\OneDrive\Desktop\Lucifer Open Source\Lucifer DatabaseX`  
**Standard:** Lucifer Open Source Art Direction (Royal Obsidian & Imperial Gold)  
**Reference Benchmarks:** `Prompt-Motion.Com`, `ThreeUI.Com`, `LiquidGL`

---

## 1. Principles of Motion Design

The animation philosophy for **Lucifer Database X** is grounded in relativistic cinema physics, spatial depth, and tactile optical feedback:

1. **Subtle & Purposeful:** Motion is never decorative clutter; it directs visual attention to critical technical metadata, codec profiles, and stream health.
2. **Spring Dynamics:** UI interactions utilise calibrated spring physics (`tension: 300, friction: 24, mass: 1.0`) inspired by `Prompt-Motion.Com` rather than linear mechanical transitions.
3. **Optically Grounded Materials:** Surfaces react to cursor proximity with refractive specular sheen and 3D perspective tilt (`perspective(1000px) rotateX/rotateY`) inspired by `LiquidGL`.
4. **Relativistic Depth Layers:** Foreground UI panes float in front of a WebGL dimensional portal (`ThreePortalField`) with smooth pointer-reactive camera parallax.

---

## 2. 3D WebGL Motion Canvas (`ThreePortalField.tsx`)

The hero environment is rendered via Three.js with hardware-accelerated WebGL:

```
[Camera Eye: 80z] ──> [Golden Stardust Particles (1,200 Nodes)] ──> [Outer Torus: 32r Wireframe] ──> [Inner Torus: 20r]
         │
         └── Cursor Parallax (targetX/Y tracking with 0.05 lerp damping)
```

### Specifications:
* **Outer Torus Geometry:** `radius: 32, tube: 1.2, radialSegments: 16, tubularSegments: 100` rendered in royal wireframe gold (`#d4af37`).
* **Inner Torus Ring:** Counter-rotates at `-0.005 rad/frame` with sinusoidal tilt modulation along the X and Y axes.
* **Particle Coordinates:** 1,200 golden stardust embers distributed along a cylindrical corridor (`z: -90 to +70`), drifting forward towards the viewpoint with individualized velocities.
* **Tone Mapping:** ACES Filmic tone mapping with exposure `1.2` ensuring metallic golden highlights never wash out to pure white.
* **Context Fallback:** Automatically detects `prefers-reduced-motion: reduce` or WebGL context failures and switches instantaneously to 2D Canvas (`GoldParticleCanvas.tsx`).

---

## 3. Spring Physics & Hover States

| Component Element | Hover / Trigger Behaviour | Spring & Timing Specification |
| :--- | :--- | :--- |
| **Media Cards** (`MediaCard.tsx`) | `translateY(-6px)`, border illuminates to `#d4af37`, shadow deepens with 20px golden bloom | `cubic-bezier(0.16, 1, 0.3, 1)`, duration: `300ms` |
| **Translucent Panes** (`LiquidGlass.tsx`) | 3D perspective tilt (max `±4°`), dynamic radial glint follows cursor position | `transform: perspective(1000px) rotateX/Y scale3d(1.01)`, transition: `200ms ease-out` |
| **Royal Buttons** (`.btn-royal-primary`) | Specular golden sweep, button elevation `translateY(-2px)`, shadow glow expansion | Duration: `250ms`, easing: `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Inspector Modal** (`MediaDetailModal.tsx`) | Backdrop blur fades in at `20px`, modal ascends smoothly from bottom | Backdrop fade: `200ms`, modal transform: `300ms cubic-bezier(0.16, 1, 0.3, 1)` |
| **Citadel Chips** (`SourceCitadels.tsx`) | Ring expands to `1px solid #d4af37`, background shifts to imperial gold gradient | Duration: `300ms ease` |

---

## 4. Accessibility & Performance Guardrails

1. **Reduced Motion Compliance:**
   * Handled declaratively via `@media (prefers-reduced-motion: reduce)`.
   * Three.js render loop unbinds and cancels animation frames when reduced motion is detected or the document loses visibility (`visibilitychange`).
2. **Memory Lifecycle Management:**
   * Explicit `.dispose()` calls on all Three.js geometries, materials, and canvas textures upon component unmount to guarantee zero GPU memory leaks.
3. **Power Preference:**
   * WebGL context requested with `powerPreference: "high-performance"`, capping canvas `devicePixelRatio` at `Math.min(window.devicePixelRatio, 2)` to protect mobile battery life.
