# ✅ Muse Chat v1.2.6 Regression Checklist

### 🔧 Environment
| Check | Task |
|-------|------|
| ☐ | `.env.local` present with valid Firebase credentials |
| ☐ | `npm install firebase` completed |
| ☐ | Firebase initialized without warnings |

---

### 🧩 Functional Verification
| Check | Task | Expected Result |
|-------|------|-----------------|
| ☐ | App starts cleanly | No build or console errors |
| ☐ | Settings Modal works normally | Modal opens/closes smoothly |
| ☐ | Debug Panel opens/closes | Shows version + sync indicators |
| ☐ | Storage = Local | Persists locally as before |
| ☐ | Storage = Firestore | Syncs with Firestore |
| ☐ | Firestore save/load from Debug Panel | Works successfully |
| ☐ | Offline mode | Fallback to localStorage |
| ☐ | Theme persists correctly | Matches stored setting |

---

### 🧠 Debug Panel Validation
| Check | Task | Result |
|-------|------|--------|
| ☐ | “Syncing…” indicator shows during Firestore writes | ✅ |
| ☐ | Red warning appears when sync fails | ✅ |
| ☐ | Firestore Tools: Save/Load buttons work | ✅ |
| ☐ | Console logs show correct data | ✅ |

---

### 🧾 Pre-Tag Review
| Check | Task |
|-------|------|
| ☐ | All docs (`context`, `milestone`, `checklists`) committed |
| ☐ | Feature branch merged → `main` |
| ☐ | Tag `v1.2.6` created and pushed |
| ☐ | SmokeTest removed (optional cleanup) |
| ☐ | Old branches deleted |

---

✅ **Release ready** → `git tag -a v1.2.6 -m "Firestore integration & sync tools"` → `git push origin v1.2.6`
