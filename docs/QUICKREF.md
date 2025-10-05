# Muse Chat – Quick Reference

## 🔀 Merge + Release Protocol

### Branches
- `main` → stable, production-ready
- `feature` → active development

### Cycle
1. Develop on `feature`
2. Run `docs/REGRESSION-CHECKLIST.md`
3. Bump version in `package.json`
4. Open PR → squash & merge → main
5. Tag release on `main`

### Commands

```bash
# 1. Ensure clean feature branch
git checkout feature
git pull origin feature
git add .
git commit -m "update"
git pull origin main --rebase
git push origin feature

# 2. Regression test
npm run build && npm run preview

# 3. Version bump
git add package.json
git commit -m "Bump version to 1.x.x"
git push origin feature

# 4. Merge PR (squash) → main
git checkout main
git pull origin main

# 5. Tag release
git tag -a v1.x.x -m "Release v1.x.x: description"
git push origin v1.x.x
```

### Related Docs
- `docs/REGRESSION-CHECKLIST.md`
- `docs/VERSIONING.md`
- `docs/release-template.md`
