# Muse Chat v1.2.9 – Chat History Overlay

This overlay enables **persistent Chat History** using `localStorage` and enhances the Debug view with **message count** + **Clear Chat History`**.

## Files Included
- `src/context/ChatContext.tsx` — persists messages under `museChatHistory`.
- `src/components/ChatLog.tsx` — auto-scrolls and shows **absolute timestamps**.
- `src/components/Sidebar.tsx` — Debug shows message count and adds **Clear Chat History**.

## Install
Copy these files into your project, replacing existing ones. Then run:
```bash
npm run dev
```

## Behavior
- Each message (user + bot reply) is appended and stored in `localStorage`.
- On refresh, chat history loads automatically.
- Debug panel: shows message count + lets you clear history instantly.

## Next (Phase 2 – Firestore Sync)
A follow-on overlay will add Firestore-based chat history sync with toggles in Settings.

---
Muse Chat © 2025
