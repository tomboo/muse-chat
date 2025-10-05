# 🧩 Muse Chat – Semantic Versioning Guide

Muse Chat follows **Semantic Versioning (SemVer)**:  
```
vMAJOR.MINOR.PATCH
```

Each part communicates the scope of change:

| Level | Example | When to Increment | Typical Impact |
|--------|----------|------------------|----------------|
| **MAJOR** | `v2.0.0` | Breaking changes — incompatible API, architecture, or UX redesign | Users must adapt |
| **MINOR** | `v1.2.0` | New backward-compatible features | Safe upgrade |
| **PATCH** | `v1.1.1` | Backward-compatible bug fixes or small improvements | Maintenance update |

---

## 🚀 Workflow Integration

1. **Active development** happens on the `feature` branch.  
2. When stable, merge into `main`.  
3. Tag the release on `main` using semantic versioning:

```bash
git checkout main
git pull origin main
git tag -a v1.2.0 -m "Release v1.2.0: persistent settings, improved input"
git push origin v1.2.0
```

---

## 🧭 Practical Examples

| Scenario | Version Change | Example Tag |
|-----------|----------------|--------------|
| Fix a small bug in existing code | PATCH | `v1.1.1` |
| Add persistent settings + responsive layout | MINOR | `v1.2.0` |
| Redesign app or change data format | MAJOR | `v2.0.0` |

---

## 📋 Conventions

- Update the version in `package.json` before tagging.  
- Record all release details in `CHANGELOG.md`:

```markdown
## [1.2.0] – 2025-10-05
### Added
- Persistent settings (Dark/Light, AI mode, Debug state)
- Responsive layout improvements
- Updated regression checklist and PR template
```

---

## ⚙️ Hotfix Process

If you must patch a released version:

```bash
# From main
git checkout -b hotfix/v1.1.1
# Fix, test, commit
git checkout main
git merge --no-ff hotfix/v1.1.1
git tag -a v1.1.1 -m "Hotfix: fix debug panel collapse issue"
git push origin main v1.1.1
```

---

✅ **Summary**

- **MAJOR:** incompatible or structural changes  
- **MINOR:** new features, backward-compatible  
- **PATCH:** fixes and small enhancements  
- Always tag releases from `main`  
- Keep `CHANGELOG.md` current
