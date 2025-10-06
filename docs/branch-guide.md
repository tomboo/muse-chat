# Muse Chat Git Branching Guide

## 🧭 Overview
This guide defines the **branching, merging, and tagging conventions** used in the Muse Chat repository.

These standards help maintain consistency across development, feature releases, fixes, and experiments.

---

## 🧱 Base Branches

| Branch | Purpose | Rule |
|--------|----------|------|
| `main` | Stable, production-ready code | Always deployable. Tag releases from this branch. |
| `develop` | (Optional) Integration/testing area | Merge all features here before main. |

---

## 🧩 Feature Branches

Use for new functionality or versioned improvements.

**Format:**
```
feature/<version>-<short-name>
```

**Examples:**
```
feature/v1.2.9-chat-history
feature/v1.3.0-auth
feature/v1.3.1-performance
```

**Workflow:**
```bash
git checkout main
git checkout -b feature/v1.2.9-chat-history

# ... implement feature ...

git add .
git commit -m "Add chat history prototype"
git checkout main
git merge feature/v1.2.9-chat-history --no-ff -m "Merge v1.2.9 chat history feature"
git push origin main
git branch -d feature/v1.2.9-chat-history
```

---

## 🐛 Fix / Hotfix Branches

For patches and production fixes after a tagged release.

**Format:**
```
fix/<version>-<short-desc>
```

**Examples:**
```
fix/v1.2.8-darkmode
fix/v1.2.8-sidebar-animation
```

**Workflow:**
```bash
git checkout main
git checkout -b fix/v1.2.8-darkmode
# ... apply patch ...
git commit -am "Fix dark mode flicker"
git checkout main
git merge fix/v1.2.8-darkmode --no-ff -m "Fix dark mode flicker"
git push origin main
git tag -a v1.2.8.1 -m "Hotfix for dark mode flicker"
git push origin v1.2.8.1
git branch -d fix/v1.2.8-darkmode
```

---

## 🧪 Experimental Branches

For research, prototypes, or refactors that may not merge.

**Format:**
```
experiment/<topic>
```

**Examples:**
```
experiment/new-editor
experiment/firebase-realtime
```

**Tips:**
- Don’t worry about naming versions.
- Can later be converted to a feature branch if successful.

---

## 🏷 Tagging and Release Flow

| Step | Command |
|------|----------|
| Tag after stable merge | `git tag -a v1.2.9 -m "Chat history + UX improvements"` |
| Push tag | `git push origin v1.2.9` |
| Optional RC tag | `git tag v1.2.9-rc1` |

**Recommended Message Format:**
```
Tag: v1.2.9
Message: "Docked sidebar and settings integration"
```

---

## 🧹 Cleaning Up Old Branches

**Delete a local branch:**
```bash
git branch -d feature/v1.2.8-old
```

**Delete a remote branch:**
```bash
git push origin --delete feature/v1.2.8-old
```

**Prune stale branches:**
```bash
git fetch -p
```

---

## ✅ Summary Cheat Sheet

| Branch Type | Pattern | Example |
|--------------|----------|---------|
| Feature | `feature/<version>-<name>` | `feature/v1.2.9-chat-history` |
| Fix | `fix/<version>-<desc>` | `fix/v1.2.8-darkmode` |
| Experiment | `experiment/<topic>` | `experiment/rag-engine` |
| Hotfix | `hotfix/<version>` | `hotfix/v1.2.8.1` |

---

## 🧭 Tips
- Always branch from `main` or `develop`, **never from another feature**.
- Use descriptive but short branch names.
- Merge with `--no-ff` to preserve feature branch history.
- Tag every stable release on `main`.

---

Muse Chat Repository © 2025
