# 🧾 Muse Chat Changelog

## v1.2.6 — Firestore Integration & Sync Tools
**Release Date:** (YYYY-MM-DD)

### 🚀 Added
- Firebase app initialization and Firestore connection (`firebase.ts`)
- Firestore persistence service (`firestore.ts`)
- Hybrid `SettingsContext` supporting both localStorage and Firestore
- Debug Panel indicators for Firestore sync and errors
- Firestore Tools (manual Save/Load) inside Debug Panel
- Temporary `SmokeTest` component for direct Firestore testing
- Regression & QA documentation for Firestore functionality

### 🧠 Improved
- Unified persistence architecture (local and cloud)
- Live sync feedback in Debug Panel
- Clearer error reporting for failed Firestore writes/reads

### 🐛 Fixed
- Persistent settings state when switching between storage modes
- Theme application consistency during Firestore sync

### 🧱 Technical
- Firebase modular SDK integration with environment-based config
- Added `.env.local` template and instructions
- Added offline fallback and sync retry handling

### 📘 Documentation
- `PROJECT-CONTEXT-v1.2.6.md`
- `MILESTONE-v1.2.6.md`
- `REGRESSION-FIRESTORE-v1.2.6.md`

---

**Tag:** `v1.2.6`  
**Branch Workflow:** `feature` → squash merge → `main` → tag `v1.2.6`
