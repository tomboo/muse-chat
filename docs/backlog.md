# Backlog
- React Developer Tools

Here are some good next-step feature options for Muse Chat — all aligned with your simplified repo and lightweight scope:

🔑 Core User Experience

Persistent settings → save Dark/Light mode, AI toggle, and Debug Panel state in localStorage so the app “remembers” them.

Improved message input → add multiline input, Markdown preview, or keyboard shortcuts (e.g. Shift+Enter for newline).

Basic search/filter in Message Log → find past messages quickly.

🌐 Storage & Data

Remote storage (Firestore) → replace the “placeholder” toggle with real persistence to Firebase.
Export/Import → allow downloading chat history as JSON/Markdown and re-importing.

🎨 UI & Styling

Responsive layout improvements → make sure it looks clean on mobile and tablet.
Custom themes → let the user pick from a few preset color palettes.

🧠 AI Features

Message summarization → button to collapse/expand a summary of the chat.
Context pinning → pin selected messages so they remain visible at the top.

🛠 Dev/Debug Quality of Life

Version badge in UI → show current version (v1.1.0) from package.json automatically.
Error boundary UI → catch React errors and show a friendly message instead of a blank screen.

⚖️ Trade-offs:

If you want to solidify the foundation → I’d start with persistent settings + Firestore integration.
If you want visible polish quickly → go for responsive layout + input improvements.
If you want to experiment with AI → try summarization or pinning as low-scope, high-impact experiments.