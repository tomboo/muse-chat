# Muse Chat

Muse Chat is a lightweight chat application built with React, Vite, and Firebase.

---

## 🚀 Workflow (Solo Developer)

- **Branches**
  - `main` → stable branch (always working, used for releases)
  - `feature` → active development branch

- **Development Cycle**
  1. Commit all work to `feature`
  2. When stable → merge `feature` into `main`
  3. (Optional) Tag a release on `main`:
     ```bash
     git tag -a v1.0.0 -m "Stable release v1.0.0"
     git push origin v1.0.0
     ```

---

## 🛠️ Setup

```bash
npm install
npm run dev
```

- Requires Firebase config (`src/services/firebase.ts`)
- Uses TailwindCSS for styling (with typography + dark mode plugins)

---

## ✅ Features
- Dark/Light mode toggle
- AI toggle
- Storage toggle
- Collapsible Debug Panel
- Message log

---

## 📝 Contributing

As a solo project, contributions are managed simply:
- Work happens on the `feature` branch
- Merge to `main` only when stable

---

## 🔖 Project Context

For the full development workflow, current feature set, and version baseline, see  
[docs/CONTEXT.md](docs/CONTEXT.md).
