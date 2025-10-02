---
name: Baseline Feature Checklist
about: Verify baseline features are present before merging
title: "[Check] Baseline Feature Verification"
labels: checklist
assignees: ""
---

# Baseline Feature Checklist (v6.7.0-dev)

## Header
- [ ] App title is visible
- [ ] Dark/Light Mode toggle works and persists
- [ ] AI toggle present, stateful, reflected in Debug Panel
- [ ] Storage toggle present, stateful, reflected in Debug Panel

## Main UI
- [ ] Scrollable message log works
- [ ] User vs Bot bubbles styled correctly
- [ ] Timestamps appear under each message

## Footer
- [ ] Input box + Send button works
- [ ] Debug panel shows version, AI status, Storage status, message count

## Behavior
- [ ] Bot always replies after user message (placeholder works)
- [ ] AI/Storage toggles update their states correctly
- [ ] Theme preference persists via localStorage

---

✅ If all boxes are checked, the build is regression-free against `v6.7.0-dev`.
