# Process Guidelines (Muse Chat v6.7.0-dev)

These lightweight process rules are designed to prevent regressions while keeping overhead low.

## ✅ Must Do (Low Overhead, High Value)
- **Baseline Bundle**: Freeze a reference snapshot (`v6.7.0-dev`) and build from it.
- **CHANGELOG.md**: Update with a one-liner for each change.
- **PR Template**: Use the checklist before merging (catch regressions early).
- **Known Issues**: Track as Markdown stubs in `docs/issues/` or promote via GitHub template.

## 🟡 Optional (Add Later If Needed)
- **GitHub Actions Check**: Require `CHANGELOG.md` update for each PR.
- **Automated Regression Tests**: Add simple tests once app grows larger.
- **Formal Issue Tracking**: GitHub Issues are fine, stubs in repo are enough for now.

## 🔴 Skip (Too Heavy For Now)
- Full CI/CD pipelines with lint/test gating.
- Complex branching strategies (stick to `main` + `stageX-dev`).
- Detailed sprint/project tracking (backlog in Markdown/Notion is enough).

---

### 🎯 Goal
Keep building quickly while avoiding regressions.  
Only add more process when the current guardrails feel insufficient.
