# Release Checklist (Muse Chat)

This checklist ensures consistent releases with minimal regressions.

## 🔹 Before Release
- [ ] Verify all baseline features present (use `.github/ISSUE_TEMPLATE/baseline-checklist.md`)
- [ ] Confirm all Known Issues documented in `README.md` and `docs/issues/`
- [ ] Update `CHANGELOG.md` with final entries for this version
- [ ] Bump version in `package.json` (this flows into Debug Panel automatically)

## 🔹 Release Steps
1. Checkout main branch:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Merge from dev branch (e.g. `stage6.7-dev`):
   ```bash
   git merge --no-ff stage6.7-dev
   ```

3. Tag the release:
   ```bash
   git tag -a vX.Y.0 -m "Release vX.Y.0"
   git push origin vX.Y.0
   ```

4. Push main:
   ```bash
   git push origin main
   ```

## 🔹 After Release
- [ ] Create next dev branch:
  ```bash
  git checkout -b stageX.(Y+1)-dev
  git push origin stageX.(Y+1)-dev
  ```
- [ ] Update version in `package.json` to `X.(Y+1).0-dev`
- [ ] Add new baseline entry to `CHANGELOG.md`

---

### 🎯 Goal
Keep releases predictable, avoid regressions, and always have `main` stable.
