# Muse Sidebar Hybrid Overlay

This overlay restores an **expandable/collapsible sidebar** *and* keeps the new **modal dialogs** for Profile, Settings, Debug. 
It also adds placeholder modals for History, Cloud Sync, and Analytics.

## ✨ Features
- ☰ / ✕ expand-collapse sidebar (`w-16` ↔ `w-64`) with smooth transitions
- Lucide icon set with **text labels when expanded**
- Clicking any item opens a **modal** (centered, fade-in/out, ❌ close, click-outside + Esc)
- Placeholders for **History**, **Cloud Sync**, **Analytics**

## 📂 Files Included
- `src/components/Modal.tsx` — reusable modal (fade + close behaviors)
- `src/components/PlaceholderModal.tsx` — generic "Coming soon…" dialog
- `src/components/ProfileModal.tsx`
- `src/components/SettingsModal.tsx`
- `src/components/DebugModal.tsx`
- `src/components/Sidebar.tsx` — hybrid sidebar (expand/collapse + modal triggers)
- `README.md` — this guide

## 🧭 Installation
1. Copy all files into `src/components/` (replace existing `Sidebar.tsx`).
2. Ensure you have **lucide-react** installed:
   ```bash
   npm install lucide-react
   ```
3. Run your app:
   ```bash
   npm run dev
   ```
4. Test:
   - Click ☰ to expand, ✕ to collapse
   - Click each item → modal opens
   - Click outside / press Esc / click ❌ → modal closes

---
Muse Chat © 2025
