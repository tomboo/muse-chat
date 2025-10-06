# Muse Chat – Sidebar Version Matrix

## 🧩 Overview
This document tracks the evolution of the **Sidebar architecture** in Muse Chat — 
covering transitions from embedded docked panels to modal dialogs and the current hybrid expandable model.

Each stage lists its interaction model, expand/collapse behavior, and design characteristics.

---

## 🗂️ Sidebar Evolution Matrix

| Version | Interaction Model | Expand / Collapse | Modal Support | Placeholders | Notes |
|----------|-------------------|------------------|----------------|---------------|-------|
| **v1.2.5** | Docked Panels | ✅ Expandable | ❌ None | ⚙️ Settings, 🧰 Debug only | Original debug/settings integration; panel content embedded inside sidebar. |
| **v1.2.6** | Docked Panels + Lucide Icons | ✅ Expandable | ❌ None | Partial | Switched from emoji → Lucide icons; minor styling and structure refinements. |
| **v1.2.7** | Static Sidebar | ❌ Fixed width | ❌ None | ⚙️ Only | Simplified intermediary build during Lucide refactor. |
| **v1.2.8** | Docked Sidebar (Animated Panels) | ✅ Expandable | ❌ None | ⚙️ Settings, 🧰 Debug | Smooth animation between sidebar and embedded panels; stable baseline before modal transition. |
| **v1.2.9 (Early)** | Modal Sidebar (Compact Only) | ❌ Fixed | ✅ Fade-in/out modals | ⚙️, 🧰 only | Introduced reusable `Modal.tsx`; compact mode only, expand/collapse temporarily removed. |
| **v1.2.9 (Hybrid)** | Expandable + Modal | ✅ Expandable | ✅ Fade-in/out modals | 👤, 💬, ⚙️, 🧰, ☁️, 📊 | Combines expand/collapse + labels + modal dialogs + placeholders (current stable design). |

---

## 🧱 Current Stable Version: **v1.2.9-hybrid**
- Sidebar expands/collapses (`w-16 ↔ w-64`)
- Lucide icons with text labels
- Modals open centered with fade transitions and ❌ close button
- Click-outside and Esc key close behavior
- Placeholders for History, Cloud Sync, Analytics
- Source bundle: `muse-sidebar-hybrid-overlay.zip`

---

## 🧰 Dependencies

| Dependency | Purpose |
|-------------|----------|
| `lucide-react` | Icon set (Menu, X, User, MessageSquare, Settings, Wrench, Cloud, BarChart3) |
| `tailwindcss` | Styling and smooth transitions |
| `react` | Core framework |
| `ProfileContext`, `SettingsContext`, `ChatContext` | Context providers used inside modals |

---

## 🧠 Guidance for Future Versions
- Always **anchor** small tweaks (like icon size) to a specific version baseline.
- Generate **diff-based patches** rather than full replacements for small visual changes.
- Keep this matrix updated whenever sidebar logic changes or new modals are added.
- Consider automated regression checks to ensure expand/collapse and modal behavior remain intact.

---

Muse Chat © 2025
