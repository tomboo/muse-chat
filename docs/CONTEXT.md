# Muse Chat – Project Context

This file captures the simplified development workflow and current feature set, so it can be used to re-establish context in future chats or documentation.

---

## 🔀 Workflow
- **Branches**:
  - `main` → always stable, used for releases
  - `feature` → active development only

- **Cycle**:
  1. Do all development on `feature`
  2. Merge `feature` into `main` only when stable
  3. Tag releases on `main`:
     ```bash
     git tag -a vX.Y.Z -m "Release vX.Y.Z: description"
     git push origin vX.Y.Z
     ```

- **Docs** in repo:
  - `README.md` → overview
  - `.github/pull_request_template.md` → squash-merge checklist
  - `CHANGELOG.md` → manual notes
  - `docs/release-template.md` → GitHub release boilerplate
  - `docs/WORKFLOW.md` → step-by-step guide
  - `docs/QUICKREF.md` → one-page cheat sheet

👉 All stage/milestone process (stage6.x-dev, issue bundles, milestone templates) has been retired.

---

## 💡 Current Feature Set
- Dark/Light mode toggle
- AI mode toggle
- Storage toggle (local/remote placeholder)
- Collapsible Debug Panel (shows version, AI mode, storage status; collapsed by default)
- Message Log view

**Tech stack**: React + Vite + TypeScript, Firebase config unchanged from v6.5.0, TailwindCSS with typography plugin.

---

## 📦 Current Version
- `v1.1.0` tagged release includes:
  - Simplified workflow & docs
  - Collapsible Debug Panel
  - Cleanup of old stage-based process

---

✅ Use this file as the baseline for all new work going forward.
