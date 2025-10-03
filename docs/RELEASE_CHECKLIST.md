# Release Checklist


---

# v6.7.0 Milestone Checklist

## ✅ Baseline (Complete)
- [x] Dark/Light mode toggle working  
- [x] AI toggle (On/Off)  
- [x] Storage toggle (On/Off)  
- [x] Always-on bot reply (placeholder)  
- [x] Debug Panel restored (footer)  
- [x] Version pulled from `package.json`  
- [x] Documentation entry point (`docs/overview.md`)  
- [x] Process docs + GitHub templates  
- [x] `PROCESS_GUIDELINES.md` includes **TypeScript Configuration** note  

---

## 🚧 In Progress
- [ ] **Collapsible Debug Panel** (feature branch)  
- [ ] Update CHANGELOG.md with feature entry  
- [ ] Close issue `001-debug-panel-visible.md` when merged  

---

## 🕒 Pending (Next Candidates)
- [ ] Improve AI toggle → hook into actual AI backend  
- [ ] Implement persistence (LocalStorage or Firestore switch)  
- [ ] Add settings modal (user preferences: theme, AI mode default, storage option)  
- [ ] Add error boundary for UI crashes  
- [ ] CI step: lint + type-check on PRs  

---

## 🏁 Release Prep
- [ ] Merge all feature branches into `stage6.7-dev`  
- [ ] Run through `docs/RELEASE_CHECKLIST.md`  
- [ ] Tag release: `v6.7.0`  
