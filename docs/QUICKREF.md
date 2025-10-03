# 🚀 Quick Reference – Muse Chat Workflow

### Branches
- `main` → stable (releases)
- `feature` → active development

### Daily Workflow
```bash
git checkout feature
git add .
git commit -m "feat: describe your change"
git push origin feature
```

### Merge to main (when stable)
```bash
git checkout main
git pull origin main
git merge feature
git push origin main
```

### Tag a release
```bash
git tag -a vX.Y.Z -m "Release vX.Y.Z: description"
git push origin vX.Y.Z
```

### Create GitHub Release
- Use `docs/release-template.md` for notes
- Paste into GitHub Release form
