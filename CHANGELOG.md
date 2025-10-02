# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [v6.5.0] - 2025-10-01
### Added
- **ModeContext** with Strategy pattern for AI (Fake/Real) and Storage (Local/Cloud).
- **FakeAI** provider for predictable replies.
- **OpenAIProvider (safe stub)** that logs calls and returns canned replies.
- **LocalStorageProvider** for client-side persistence.
- **FirestoreProvider (safe stub)** that logs calls (no actual Firebase writes yet).
- **ModeToggle UI component** with Tailwind styling (switch AI + Storage modes).
- **DebugPanel footer** showing current modes and last change timestamp.

### Notes
- Firestore and OpenAI integrations are stubbed — no real persistence or API calls yet.
- Stage 6.6 will implement **real Firestore persistence** and **OpenAI streaming**.

---

## [v6.0.0] - 2025-09-29
### Added
- Integrated OpenAI API streaming (SSE).
- Bot typing indicator.
- Fixed role mapping bug (`bot → assistant`).
- Fallback reply for API errors.

### Changed
- Removed Firestore persistence temporarily (messages only in React state).
- Merged into main and tagged as v6.0.

---

## [Unreleased]
### Planned
- Real FirestoreProvider with Firebase integration.
- Real OpenAIProvider using `openai.ts` streaming.
- Error boundaries and improved fallback handling.
- UX improvements for mode switching.
