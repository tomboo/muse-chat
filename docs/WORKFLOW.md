# Workflow Guide

This document describes the simplified workflow for Muse Chat as a solo developer.

---

## Branching Strategy
- **main** → always stable, used for releases
- **feature** → active development branch

## Development Cycle
1. Do all work in `feature` branch
   ```bash
   git checkout feature
   ```
2. Commit and push changes regularly
   ```bash
   git add .
   git commit -m "feat: new feature description"
   git push origin feature
   ```
3. When stable, merge into `main`
   ```bash
   git checkout main
   git pull origin main
   git merge feature
   git push origin main
   ```

## Releasing
1. Update `CHANGELOG.md` with new version entry
2. Tag a release on `main`:
   ```bash
   git tag -a vX.Y.Z -m "Release vX.Y.Z: description"
   git push origin vX.Y.Z
   ```
3. Create a GitHub Release:
   - Use `docs/release-template.md` as boilerplate
   - Paste into GitHub Release form

## Notes
- Always **Squash and Merge** when using PRs to keep history clean
- Keep `CHANGELOG.md` updated manually
- Only two branches are needed: `main` and `feature`
