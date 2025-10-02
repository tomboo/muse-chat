# Muse Chat v6.7.0-dev (Baseline)

This is the frozen baseline for Muse Chat development.

## ✅ Feature Checklist

- **Header**
  - App title
  - Dark/Light Mode toggle (persistent)
  - AI toggle (stateful, reflected in Debug Panel)
  - Storage toggle (stateful, reflected in Debug Panel)

- **Main UI**
  - Scrollable message log
  - User vs Bot bubbles
  - Timestamps under each bubble

- **Footer**
  - Message input box + send button
  - Debug panel showing version, AI mode, Storage mode, and message count

- **Behavior**
  - Bot always replies after user message (placeholder)
  - AI/Storage toggles are stateful
  - Dark/Light mode persisted in localStorage

## 📜 Changelog Template

**v6.7.x-dev**
- ✅ Added [new feature]
- 🔄 Changed [behavior difference]
- 🛠 Fixed [bug/regression]
- ⚠️ Known issues [list]

## 🔮 Pending Features (Not in Baseline)
- Collapsible Debug Panel (toggle open/close)
- AI toggle actually switches between reply vs silent mode
- GitHub Actions workflow to enforce changelog updates
- Real Firebase/Storage integration (Storage toggle is placeholder)

## 🐞 Known Issues
- Debug panel is always visible (can get tall if messages grow)
- No persistence of messages (clears on reload)
- AI/Storage toggles do not affect actual backend functionality
