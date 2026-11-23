# Design System — Roman Tkachev Portfolio

## 1. Visual Theme & Direction
Minimal monumental display typography (`AI-СИСТЕМЫ И ПРИКЛАДНОЙ R&D` / `AI SYSTEMS & APPLIED R&D`), persistent scroll-choreographed 3D perspective glyph wave terrain, unified 6-project vertical chapter rail without redundant duplication, restrained obsidian + platinum + molten amber palette.

## 2. Color Palette & Surface Hierarchy
- **Deep Void Ground (`--void`):** `#050507`
- **Translucent Obsidian Surface (`--surface`):** `rgba(12, 12, 16, 0.78)` with `1px solid rgba(255, 255, 255, 0.09)` and `inset 0 1px 0 rgba(255, 255, 255, 0.08)`
- **Inner Technical Panel (`--panel`):** `rgba(18, 18, 24, 0.84)`
- **Primary Platinum Ink (`--ink`):** `#F4F4F5`
- **Body Ink (`--body`):** `#D4D4D8`
- **Muted Metadata (`--muted`):** `#8E8E98`
- **WCAG-Safe Inactive Tab Ink (`--dim`):** `#828290`
- **Single Accent (`--accent`):** `#FF5E1A` (molten amber-orange; `#FF7538` hover)
- **Live / Public Status (`--live`):** `#22C55E`

## 3. Typography
- **Display:** `Unbounded` (500–700, native Cyrillic geometric display) — Hero H1 (`clamp(38px, 6.2vw, 94px)`), Section titles, Flagship chapter rail.
- **UI & Body:** `Manrope` (400–700) — editorial descriptions, case study prose, buttons.
- **Technical & Telemetry:** `JetBrains Mono` (400–600, `tabular-nums`) — chapter codes (`01`..`06`), metrics, SVG diagrams, and live MOEX snapshot table.

## 4. Spatial Canvas & Motion Grammar
- **Persistent 3D Perspective Canvas (`spatial-webgl.js`):** Full-viewport 2D Canvas 3D perspective-projected Code Glyph Wave Terrain (`68 × 42` desktop / `34 × 28` mobile grid) woven from monospace code symbols (`· : - = + / \ { } < > 0 1 λ #`), with quiet-zone attenuation behind hero and section text and automatic `visibilitychange` pausing when the tab is hidden.
- **Interactions:** 6-project vertical chapter rail with animated panel cross-fade (`280ms cubic-bezier(.22, 1, .36, 1)`), subtle 3D perspective tilt on research proof cards (fine pointer only), scroll-scrubbed statement illumination, and native `<dialog>` case-study viewer.
- **Accessibility:** Full `prefers-reduced-motion: reduce` support, native scroll only, `2px solid #FF5E1A` `:focus-visible` rings, keyboard arrow navigation on tabs, `0` horizontal overflow from `320px` to `1440px+`.
