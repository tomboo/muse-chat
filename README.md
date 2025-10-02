# Muse Chat 2 – Stage 6.5 (Full Setup)

## Overview
Stage 6.5 adds **mode toggling** and a proper **backend proxy** for OpenAI.  
You can now dynamically switch between AI + Storage modes:

- **AI Modes**: Fake ↔ Real (OpenAI)
- **Storage Modes**: Local ↔ Cloud (Firestore)

All 4 combinations are supported:
1. Fake + Local
2. Fake + Cloud
3. Real + Local
4. Real + Cloud

## Project Structure
```
src/
  ai/
    AIProvider.ts
    FakeAI.ts
    OpenAIProvider.ts
  storage/
    StorageProvider.ts
    LocalStorageProvider.ts
    FirestoreProvider.ts
  context/
    ModeContext.tsx
    ChatContext.tsx
    ChatContextTypes.ts
  components/
    ModeToggle.tsx
    Chat.tsx
  App.tsx
server/
  server.ts
.env.example
README-Backend.md
README-Stage6.5.md
```

## Setup Instructions

### 1. Install dependencies
```bash
npm install
npm install express node-fetch dotenv
```

### 2. Environment variables
Copy `.env.example` to `.env` and set your OpenAI key:

```env
OPENAI_API_KEY=sk-xxxxxx
```

### 3. Run backend
```bash
npx ts-node server/server.ts
```

Backend runs on [http://localhost:5000](http://localhost:5000).

### 4. Configure Vite proxy
In `vite.config.ts`, add:
```ts
server: {
  proxy: {
    "/api": "http://localhost:5000",
  },
}
```

### 5. Run frontend
```bash
npm run dev
```

Frontend runs on [http://localhost:5173](http://localhost:5173).

### 6. Using the app
- Switch **AI Mode** between Fake and Real via the toggle in the header.  
- Switch **Storage Mode** between Local and Cloud.  
  - Switching resets messages (no migration in Stage 6.5).  
- Chat UI lets you send messages, get responses, and persist them according to selected mode.

## Notes
- **Fake AI** is useful offline or for demos.  
- **Real AI** uses OpenAI via the backend proxy.  
- **Local storage** saves messages in browser `localStorage`.  
- **Cloud storage** saves messages in Firestore (requires Firebase config).  

---

This completes Stage 6.5 – you now have a working frontend + backend with full mode switching and persistence options.
