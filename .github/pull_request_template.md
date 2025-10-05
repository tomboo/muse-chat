# ✨ Summary
<!-- Describe the purpose of this PR and summarize key changes -->

---

## 🔗 Related
<!-- Link related issues or discussions (optional) -->

---

## ✅ Checklist

### Code & Testing
- [ ] Builds and runs locally without errors  
- [ ] Verified all persistent settings (Theme / AI Model / Storage / Debug)  
- [ ] Completed `docs/REGRESSION-CHECKLIST.md`  
- [ ] No console or TypeScript warnings  

### Documentation
- [ ] Updated version in `package.json`  
- [ ] Updated or verified `CHANGELOG.md`  
- [ ] Verified `docs/QUICKREF.md` and related docs are current  

---

## 🔀 Merge Strategy
- Always **Squash and Merge** into `main`  
- Use a concise, semantic commit message:

  ```
  feat(ui): add version display to Debug Panel
  fix(types): correct sender type in App.tsx
  chore(docs): add QUICKREF.md for release workflow
  ```

---

## 🏷️ Post-Merge Steps
After merge:
```bash
git checkout main
git pull origin main
git tag -a vX.Y.Z -m "Release vX.Y.Z: short summary"
git push origin vX.Y.Z
```
