# 🧩 Muse Chat – Merge Checklist

This checklist ensures **clean, traceable merges** between branches  
(e.g., `feature → develop`, or `develop → main`).

---

## 🧱 1️⃣ Confirm Everything is Committed
```bash
git checkout <feature-branch>
git status
```
If there are uncommitted changes:
```bash
git add .
git commit -m "Finalize work on <feature-branch>"
```

---

## 🧩 2️⃣ Pull the Latest Base Branch
```bash
git checkout <target-branch>   # e.g., develop/v1.2.9
git pull origin <target-branch>
```

---

## 🔀 3️⃣ Merge the Feature Branch
```bash
git merge <feature-branch> --no-ff -m "Merge <feature-branch> into <target-branch>"
```
✅ Use `--no-ff` to preserve feature branch history.

---

## 🧪 4️⃣ Test and Verify
```bash
npm run dev
```
Check:
- ✅ App builds successfully  
- ✅ Feature behavior matches expectations  
- ✅ No console or compile errors  
- ✅ Sidebar / Debug / Settings still function  

---

## 🚀 5️⃣ Push the Updated Branch
```bash
git push origin <target-branch>
```

---

## 🗑 6️⃣ (Optional) Clean Up
Once verified:
```bash
git branch -d <feature-branch>              # delete local
git push origin --delete <feature-branch>   # delete remote
```

---

## 🏷 7️⃣ (Optional) Tag a Milestone Merge
For stable integration milestones (e.g., `develop → main`):
```bash
git tag -a vX.Y.Z -m "Milestone release for vX.Y.Z"
git push origin vX.Y.Z
```

---

## ✅ Summary

| Step | Command | Description |
|------|----------|-------------|
| 1 | `git checkout <feature>` | Ensure commits complete |
| 2 | `git pull origin <target>` | Sync base branch |
| 3 | `git merge --no-ff` | Merge feature safely |
| 4 | `npm run dev` | Verify functionality |
| 5 | `git push origin <target>` | Publish integration |
| 6 | `git branch -d <feature>` | Cleanup |
| 7 | `git tag -a vX.Y.Z` | Tag milestone |

---

**Pro Tip:** Keep this file handy — copy/paste the commands into terminal, replacing placeholders as needed.

---

Muse Chat Repository © 2025
