# 🛡️ Muse Chat – Regression Checklist

This checklist is run **before merging `feature` → `main`** to reduce the risk of regressions.

---

## 🔀 Branch Discipline
- [ ] Work only in `feature` branch
- [ ] Pull latest `main` into `feature` (`git pull origin main`)

---

## 🧪 Local Smoke Tests
- [ ] Dark/Light mode toggle works
- [ ] AI mode toggle works
- [ ] Storage toggle switches without error
- [ ] Collapsible Debug Panel expands/collapses correctly
- [ ] Message log: input → send → display works
- [ ] No console errors or warnings

---

## ✅ Automated / Build Checks
- [ ] `npm run build` succeeds with no errors
- [ ] `npm run preview` launches and works as expected
- [ ] Unit / snapshot tests (if present) pass

---

## 📋 Documentation
- [ ] `CHANGELOG.md` updated with new features/fixes
- [ ] Version bump applied (if release)
- [ ] Docs updated if feature behavior changed

---

## 🔍 Manual Verification
- [ ] App tested in desktop browser
- [ ] App tested in mobile browser (responsive layout ok)
- [ ] Debug Panel shows correct version

---

## 🏷️ Release
- [ ] Merge performed with `--no-ff` commit
- [ ] Tag created on `main` (`git tag -a vX.Y.Z -m "Release vX.Y.Z"`)
- [ ] Tag pushed (`git push origin vX.Y.Z`)
