# 📌 Release v6.5 – Mode Toggles

### ✨ Features
- Added `ModeContext` with two independent toggles: **AI Source** (Fake ↔ Real) and **Storage** (Local ↔ Cloud).
- Implemented Strategy pattern for AI and Storage providers (FakeAI, OpenAI, LocalStorage, Firestore).
- Added UI toggle in header for switching modes at runtime.

### 🐛 Fixes
- Fixed OpenAI API role mapping bug (`bot` → `assistant`).
- Added graceful fallback reply for API errors or quota exhaustion.

### ⚠️ Known Issues
- LocalStorage mode does not yet namespace messages by Project/Chat.
- Fake AI replies are limited to canned responses for now.

### 🚀 Next Stage
- **Stage 7 (v7.0): Multi-Chat**
  - Add Chats subcollection in Firestore/localStorage.
  - Sidebar UI to create/switch between multiple conversations within a Project.
  - Ensure persistence respects current storage mode.
