# 📌 Release v6.0 – AI Integration

### ✨ Features
- Integrated OpenAI API via `openai.ts` service.
- Implemented streaming AI responses with SSE parsing.
- Added "bot is typing" indicator for better UX.
- Configured environment variable support with `VITE_OPENAI_API_KEY`.

### 🐛 Fixes
- Fixed initial issues with Markdown rendering in messages.
- Corrected role handling for messages to align with OpenAI API expectations.

### ⚠️ Known Issues
- No persistence to Firestore yet (messages only live in memory).
- Only supports a single chat at a time.

### 🚀 Next Stage
- **Stage 6.5 (v6.5): Mode Toggles**
  - Add `ModeContext` with AI (Fake vs Real) and Storage (Local vs Cloud) toggles.
  - Introduce Strategy pattern for pluggable AI + storage backends.
  - Enable LocalStorage persistence in Test Mode and Firestore in Real Mode.
