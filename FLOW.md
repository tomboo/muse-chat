# 🚀 Muse Chat Development & Release Flow

## 1. Baseline
- Freeze a **baseline bundle** at the start of each dev stage (e.g., `v6.7.0-dev`).
- Baseline includes: UI skeleton, docs, issue templates, checklists.
- Track pending features + known issues in `README.md`.
- Commit + push baseline to `stageX.Y-dev`.

## 2. Active Development
- Work on **`stageX.Y-dev`** branch.
- For big features: use short-lived `feature/*` branches, then merge back.
- Update `CHANGELOG.md` manually with each meaningful change.
- Keep **`package.json` version** updated when cutting baselines (flows into Debug Panel).

## 3. Pre-Release
- Run through **Baseline Checklist** (`.github/ISSUE_TEMPLATE/baseline-checklist.md`).
- Confirm Known Issues are up to date in `README.md` + `docs/issues/`.
- Finalize `CHANGELOG.md` entries.
- Bump version in **`package.json`** to release number (e.g., `6.7.0`).

## 4. Release
1. Checkout `main`
   ```bash
   git checkout main
   git pull origin main
   ```
2. Merge from dev branch
   ```bash
   git merge --no-ff stageX.Y-dev
   ```
3. Tag release
   ```bash
   git tag -a vX.Y.0 -m "Release vX.Y.0"
   git push origin vX.Y.0
   ```
4. Push main
   ```bash
   git push origin main
   ```

## 5. Post-Release
- Create next dev branch:
  ```bash
  git checkout -b stageX.(Y+1)-dev
  git push origin stageX.(Y+1)-dev
  ```
- Bump version in **`package.json`** → `X.(Y+1).0-dev`.
- Add new baseline entry to `CHANGELOG.md`.

---

### 🎯 Principles
- **One source of version truth** = `package.json`.
- **CHANGELOG.md** = manual, human-curated notes.
- **Baseline bundles** = guardrails to prevent regressions.
- **Process Guidelines** = lightweight, only add more if needed.
