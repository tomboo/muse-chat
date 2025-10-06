# 🧭 Muse Chat – Milestone Plan (v1.2.6)

## 💡 Objective
Extend Muse Chat’s persistence layer to support both **localStorage** and **Firestore**, while maintaining the modular, context-based architecture introduced in v1.2.5.

This release focuses on **backend readiness**, not visual polish.

---

## 🧩 Phase 1 – Firestore Setup (Backend Infrastructure)
| Step | Task | Output |
|------|------|--------|
| 1 | Create Firebase project in console (e.g. *muse-chat-dev*) | Firebase app ID + config |
| 2 | Add `.env.local` variables for Firebase | `VITE_FIREBASE_API_KEY`, etc. |
| 3 | Create `/src/services/firebase.ts` for app initialization | `initializeApp()` export |
| 4 | Create `/src/services/firestore.ts` for read/write helpers | `saveSettings()`, `loadSettings()` |
| 5 | Update `vite.config.ts` to load `.env.local` | Verified environment variables |
| 6 | Confirm Firebase imports tree-shake correctly (modular SDK) | ✅ Build passes |

---

## 🧠 Phase 2 – Integrate Firestore into SettingsContext
| Step | Task | Output |
|------|------|--------|
| 1 | Add `storageMode` flag (`local` \| `firestore`) to SettingsContext | Dynamic backend switch |
| 2 | When mode = “local”, keep existing localStorage logic | Legacy mode preserved |
| 3 | When mode = “firestore”, call FirestoreService helpers | Remote persistence |
| 4 | Handle async read/write with loading state | Prevents UI flicker |
| 5 | Add offline detection + fallback to localStorage | Graceful degradation |
| 6 | Add `try/catch` with console.warn for network issues | Developer visibility |

---

## 🧰 Phase 3 – Extend Debug Panel
| Step | Task | Output |
|------|------|--------|
| 1 | Show Firestore connection status (`online`, `offline`, `error`) | Live feedback |
| 2 | Display last sync timestamp | Debug insight |
| 3 | Button: “Force Sync Now” (optional) | Manual trigger |

---

## 🧱 Phase 4 – Testing & Verification
| Area | Expected Behavior |
|------|--------------------|
| Settings load correctly from Firestore on reload | ✅ |
| Changing setting updates both local & remote | ✅ |
| Offline mode uses local cache | ✅ |
| No unhandled promise rejections | ✅ |
| Regression checklist passes | ✅ |

---

## ✨ Deferred Polish (Optional for Later)
| Area | Enhancement |
|------|--------------|
| Toasts | Add color + stacking animation |
| Modal | Add Framer Motion transitions |
| Accessibility | Add ARIA live regions |
| Mobile | Improve spacing + responsiveness |

---

## 🧾 Version Targets
| Label | Value |
|--------|--------|
| Current | v1.2.5 |
| Target | v1.2.6 |
| Branch | `feature` → merge → `main` |

---

## ✅ Next Steps
1. Create new feature branch:
   ```bash
   git checkout -b feature
   ```
2. Implement Firebase + Firestore services (`/src/services/`)
3. Refactor `SettingsContext`
4. Validate via Debug Panel + console
5. Merge, tag `v1.2.6`, delete `feature`
