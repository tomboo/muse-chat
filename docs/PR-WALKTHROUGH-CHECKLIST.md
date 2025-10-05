# 🧩 Muse Chat – Pull Request Walkthrough Checklist

## 🪜 1. Prep Branch
```bash
git checkout feature
git pull origin feature
git pull origin main --rebase
git status
```
✅ Ensure branch is clean and up to date with both `origin/feature` and `main`.

---

## 🧪 2. Run Regression Tests
Before opening a PR:
```bash
npm run build && npm run preview
```

Check manually:
- [ ] Theme toggle (Light / Dark / System)
- [ ] AI Model dropdown (Off / Mock / OpenAI / Claude / Gemini)
- [ ] Storage dropdown (Local / Firestore / Supabase)
- [ ] Debug Panel collapses / expands and persists
- [ ] Version number shows (e.g., `v1.2.4`)
- [ ] No console errors or warnings

---

## 📝 3. Open Pull Request
1. Go to GitHub → **Pull requests → New pull request**
2. Set **base** = `main`, **compare** = `feature`
3. Review the diff → should show expected changes only  
   (e.g., `src/App.tsx`, `docs/QUICKREF.md`, `.github/pull_request_template.md`)

---

## 🧾 4. Fill PR Template
Use `.github/pull_request_template.md`:
- [ ] Summary written
- [ ] All checklist items ticked
- [ ] “Squash and Merge” noted
- [ ] Version bump verified in `package.json`

---

## 🔀 5. Merge
On GitHub:
- Click **Squash and Merge**
- Commit message:
  ```
  vX.Y.Z: short description of changes
  ```

---

## 🏷️ 6. Tag Release
After merge:
```bash
git checkout main
git pull origin main
git tag -a vX.Y.Z -m "Release vX.Y.Z: short description"
git push origin vX.Y.Z
```

Optional:  
Create a GitHub Release → select tag `vX.Y.Z` → paste summary.

---

## ✅ 7. Final Verification
```bash
npm ci
npm run build && npm run preview
```
- [ ] Build succeeds  
- [ ] Version displays correctly  
- [ ] No regressions detected

---

**End of Checklist**
