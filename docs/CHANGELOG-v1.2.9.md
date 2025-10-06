# 🧾 Muse Chat – Change Log (v1.2.5 → v1.2.9)

---

## **v1.2.9 – Hybrid Sidebar + Modals (Current Release)**
**Date:** 2025‑10‑05

### ✨ Added
- Reintroduced **expand/collapse sidebar** (`☰ ↔ ✕`) with smooth transitions.
- Added **text labels** beside Lucide icons when expanded.
- Implemented **fade‑in/out modals** for **Profile**, **Settings**, and **Debug**.
- Added **placeholders** for **Chat History**, **Cloud Sync**, and **Analytics**.
- Each modal supports **click‑outside**, **Esc key**, and **❌ close button**.
- Documented architecture in `/docs/SIDEBAR-VERSION-MATRIX.md`.

### 🔧 Improved
- Unified all sidebar icons to use **Lucide**.
- Refined Tailwind layout + transition timing for consistent look and feel.
- Simplified logic for modal mounting/unmounting.
- Restored functional parity with pre‑modal versions (expandable behavior).

### 🧩 Dependencies
- `lucide-react`, `tailwindcss`, `react`

### 🚫 Deferred
- Firestore Sync (moved to **v1.3.0**)
- Cloud Sync & Analytics modals remain placeholders.

---

## **v1.2.8 – Docked Sidebar with Animated Panels**
**Date:** 2025‑09‑30

### ✨ Added
- Introduced **animated docked panels** for Settings and Debug.
- Integrated **Lucide icon set** across sidebar.
- Improved sidebar width transitions and hover states.

### 🔧 Improved
- Cleaned up Tailwind config and transition timing.
- Consolidated dark/light theme logic.

### 🧩 Dependencies
- `lucide-react`, `tailwindcss`

---

## **v1.2.7 – Static Sidebar Simplification**
**Date:** 2025‑09‑26

### ✨ Added
- Temporary build to simplify the layout during icon migration.

### 🚧 Removed
- Expand/collapse temporarily disabled.
- Docked panels suspended pending refactor.

### Notes
- Used internally to prep for Lucide transition.

---

## **v1.2.6 – Lucide Icon Refactor**
**Date:** 2025‑09‑25

### ✨ Added
- Replaced emoji icons with **Lucide React** icons.
- Added Tailwind styling consistency across all components.
- Improved Debug and Settings panel layouts.

### 🔧 Improved
- Minor bug fixes for responsive sidebar width.
- Theme variables simplified.

---

## **v1.2.5 – Base Sidebar Stabilization**
**Date:** 2025‑09‑20

### ✨ Added
- Added **Debug Panel** (app version, message count).
- Added **Settings Panel** (theme, model, storage).
- Introduced **expandable sidebar** pattern (`w‑16 ↔ w‑64`).
- Established initial version tracking and release workflow.

### 🧩 Dependencies
- `tailwindcss`, `react`

---

## 🔖 Next Planned Version
### **v1.3.0 – Firestore Sync**
- Introduce **Firestore Sync** for user settings, chat history, and cloud backup.
- Add synchronization status indicator (☁️).
- Keep UI identical to v1.2.9-hybrid baseline.
- Future versions (v1.3.1+) will focus on incremental storage, offline mode, and data export.

---

Muse Chat © 2025
