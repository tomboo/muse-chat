# 🧪 Muse Chat v1.2.6 – Firestore Debug & Verification Checklist

## 🔧 Environment Setup
| Check | Task | Notes |
|--------|------|-------|
| ☐ | `.env.local` contains all Firebase keys (`VITE_FIREBASE_...`) | Confirm values match Firebase console |
| ☐ | Firestore rules allow read/write for testing | Use test mode or authenticated access |
| ☐ | Firebase initialized without warnings in console | Confirm `[FirebaseApp] Initialized` |

---

## 🧩 Phase 1 – Firestore Read/Write
| Check | Task | Expected Behavior |
|--------|------|------------------|
| ☐ | Launch app with `npm run dev` | No build or console errors |
| ☐ | Set **Storage = Local** | `localStorage` updates as before |
| ☐ | Set **Storage = Firestore** | `users/demo/config/settings` appears in Firestore |
| ☐ | Change Theme or AI Model | Firestore document updates live |
| ☐ | Reload app | Settings load from Firestore (not local) |
| ☐ | Switch back to Local mode | Firestore writes stop; local resumes |

---

## 🌩️ Phase 2 – Offline / Fallback Testing
| Check | Task | Expected Behavior |
|--------|------|------------------|
| ☐ | Disconnect network | App stays stable, no crash |
| ☐ | Change Theme while offline | Warning logged: “Firestore sync failed” |
| ☐ | Reload offline | Uses last local cached settings |
| ☐ | Reconnect → Reload | Syncs back to Firestore automatically |

---

## 🧠 Phase 3 – Debug Panel Indicators
| Check | Task | Expected Behavior |
|--------|------|------------------|
| ☐ | Observe “Syncing…” message during writes | Appears briefly on setting change |
| ☐ | Observe red error text if Firestore fails | “Firestore sync failed…” message visible |
| ☐ | Clear error once sync restored | Error disappears on successful write |

---

## 🧾 Phase 4 – Console Diagnostics
| Command | Expected Output |
|----------|----------------|
| `loadSettings().then(console.log)` | Returns current Firestore settings object |
| `saveSettings({ theme: "dark", ... })` | Updates remote Firestore document instantly |
| `localStorage.getItem("museSettings")` | Mirrors Firestore state locally |

---

## ✅ Regression Pass Criteria
| Area | Result |
|-------|--------|
| Firestore initialized correctly | ✅ |
| Remote read/write working | ✅ |
| Offline fallback functional | ✅ |
| No unhandled promise rejections | ✅ |
| Sync indicators accurate | ✅ |
