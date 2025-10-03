# Branching Guidelines (Muse Chat v6.7.0-dev)

These lightweight branching rules balance speed with safety.

## 🔹 Main Branches
- **main** → always stable, production-ready releases only.
- **stageX.Y-dev** → active development for the next release.

Example:  
- `main` currently at v6.6.0  
- `stage6.7-dev` is the active branch for upcoming v6.7.0

## 🔹 Feature Branches (Optional)
Create short-lived feature branches off `stageX.Y-dev` for bigger items.

Examples:  
- `feature/collapsible-debug-panel`  
- `feature/ai-toggle-behavior`  
- `feature/message-persistence`

Merge back into `stageX.Y-dev` when stable.

## 🔹 Hybrid Flow
- Small fixes/tweaks → commit directly to `stageX.Y-dev`  
- Larger changes/experiments → isolate in a `feature/*` branch

## 🔹 Release Flow
1. When `stageX.Y-dev` is stable → merge into `main`  
2. Tag the release (`vX.Y.0`)  
3. Start the next dev branch (`stageX.(Y+1)-dev`)

---

### 🎯 Goal
- Keep `main` always stable.  
- Use `stageX.Y-dev` as the main integration branch.  
- Feature branches only when needed (avoid unnecessary overhead).
