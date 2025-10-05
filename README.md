# Muse Chat v1.2.8 — Docked Sidebar (Animated)

## Overview
Replaces floating modals/buttons with a **collapsible left sidebar** that hosts simplified **Settings** and **Debug** panels *inside the sidebar itself*. The sidebar pushes the chat area to the right and provides smooth slide + fade transitions between panels.

## What’s Included
- `src/components/Sidebar.tsx` — collapsible sidebar with docked panels (Settings, Debug)
- `src/App.tsx` — updated layout using the docked sidebar
- (No floating `SettingsModal` or `DebugPanel` used anymore)

## Features
- Collapsed `w-12` → expanded `w-64` → docked panel `w-96`
- Slide + fade transitions when switching between Settings and Debug
- Compact, sidebar-friendly UIs for both panels
- Live version, syncing, and error status
- Manual **Sync Now** and **Reload** buttons inside Debug

## Integration
1. Replace your `src/components/Sidebar.tsx` and `src/App.tsx` with the files in this overlay.
2. Remove any imports/usages of floating `SettingsModal`, `SettingsButton`, or `DebugPanel`.
3. Run the app:
   ```bash
   npm run dev
   ```
4. Click ☰ to expand the sidebar. Choose **Settings** or **Debug Panel** to open the docked view.

## Notes
- Settings changes are persisted according to the selected storage (local or Firestore).
- The Debug panel shows the compact runtime state and allows manual sync/reload.

---
Muse Chat v1.2.8 © 2025
