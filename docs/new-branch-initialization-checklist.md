# Muse Chat – New Branch Initialization Checklist

## 🎯 Purpose
A quick reference for cleanly creating a new development or feature branch from the latest tagged release (e.g., `v1.2.8` → `develop/v1.2.9`).

---

## 🧱 1️⃣ Make sure `main` is up to date
```bash
git checkout main
git pull origin main
```

---

## 🏷 2️⃣ Confirm your latest release tag
List all tags and ensure the newest one (e.g., `v1.2.8`) exists:
```bash
git tag
```

---

## 🌱 3️⃣ Create the new dev branch
Follow the naming convention:
```
develop/<version>
```
Example:
```bash
git checkout -b develop/v1.2.9
```

If you prefer a feature branch instead of dev:
```
feature/<version>-<short-name>
```
Example:
```bash
git checkout -b feature/v1.2.9-chat-history
```

---

## 🚀 4️⃣ Push your new branch to GitHub
```bash
git push -u origin develop/v1.2.9
```
or
```bash
git push -u origin feature/v1.2.9-chat-history
```

---

## 🧩 5️⃣ Verify
```bash
git status
git branch
```
Expected output:
```
On branch develop/v1.2.9
Your branch is up to date with 'origin/develop/v1.2.9'.
```

---

## ✅ Quick Summary Table

| Step | Command | Description |
|------|----------|-------------|
| 1 | `git checkout main` | Move to main branch |
| 2 | `git pull origin main` | Get latest commits |
| 3 | `git tag` | Confirm latest tag |
| 4 | `git checkout -b develop/vX.Y.Z` | Create new branch |
| 5 | `git push -u origin develop/vX.Y.Z` | Publish to GitHub |

---

Muse Chat Repository © 2025
