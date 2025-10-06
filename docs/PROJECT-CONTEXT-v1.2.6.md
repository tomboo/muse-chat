# Muse Chat – Project Context (v1.2.6)

## 💡 Summary
Muse Chat has achieved a modular, stable core (React + TypeScript + Vite) with unified settings, theme persistence, and a developer-facing Debug Panel.  
Version **v1.2.5** established the foundation for multi-module expansion and cross-platform persistence.

Version **v1.2.6** focuses on early **Firestore integration** — introducing optional cloud persistence while maintaining a clean local experience.  
UI polish (toast visuals, animations, accessibility) is deferred to a later milestone.

---

## 🔀 Workflow
**Branches**
- `main` → stable releases  
- `feature` → active development  

**Cycle**
1. Develop new functionality on `feature`
2. Test regression targets locally  
3. Merge → `main` (squash merge)
4. Tag release (e.g. `v1.2.6`)
5. Delete `feature` → start next cycle  

**Docs**
- `docs/PROJECT-CONTEXT-v1.2.6.md` – this file  
- `docs/MILESTONE-v1.2.6.md` – task-level planning  
- `CHANGELOG.md`, `REGRESSION-CHECKLIST-v1.2.6.md`  

---

## 🧩 Current Feature Set (carried forward from v1.2.5)
- **User Settings Modal** (theme, model, storage)
- **SettingsContext** with local persistence
- **Debug Panel** (developer inspection)
- **Toast notifications** (local feedback)
- **Theme switching** (Light/Dark/System)
- **Minimal chat simulation** with mock AI

---

## 🎯 v1.2.6 Goals
1. **Firestore Integration (Phase 1)**
   - Connect Firebase app and initialize Firestore
   - Replace `localStorage` with backend abstraction
   - Add basic read/write of settings to Firestore
   - Detect offline vs online mode
2. **Context Refactor**
   - Extend `SettingsContext` to handle async persistence
   - Create lightweight `FirestoreService` in `/src/services/firestore.ts`
3. **Debug Tools**
   - Add Firestore connection status to Debug Panel
4. **Deferred Polish (for later)**
   - Toast stacking and fade improvements  
   - Modal animations (Framer Motion)  
   - Accessibility (ARIA for toasts and modals)

---

## 🧪 Regression Targets
- Local mode remains fully functional without Firebase
- Switching between local and Firestore modes works
- Settings persist correctly and update live
- No build or console warnings

---

## 🧾 Version
- Baseline: v1.2.5  
- Target: v1.2.6 (in development)

---

## ✅ Next Action
Start new chat titled **muse-chat-v1.2.6**.  
Focus first on:
- Creating `firebase.ts` (Firebase config + Firestore init)
- Updating `SettingsContext` to support both local + Firestore persistence.
