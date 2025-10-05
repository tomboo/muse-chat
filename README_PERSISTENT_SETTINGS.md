# Muse Chat – Persistent Settings (v1.2.0, AI Selector Update)

This overlay refines persistent settings to remove the separate "AI Mode" toggle and introduce a single **AI Model selector**.

## 🔧 Features

| Setting | Options | Default | Description |
|----------|----------|----------|--------------|
| Theme | Light / Dark / System | System | UI color theme |
| AI Model | Off / Mock / OpenAI / Claude / Gemini | Off | Controls whether AI is disabled, simulated, or real |
| Storage | Local / Firestore / Supabase | Local | Data persistence backend |
| Debug Panel | Collapsed / Expanded | Collapsed | Developer view toggle |

## 🧠 Behavior
All settings persist in `localStorage` and reload automatically.

- **Off** → No AI calls (plain chat)
- **Mock** → Simulated AI for demo/offline use
- **OpenAI / Claude / Gemini** → Real backends (future integration)

## 🧪 Test Plan

1. Switch between AI models → persists after refresh  
2. Change theme → persists after refresh  
3. Toggle storage mode → persists after refresh  
4. Collapse Debug Panel → persists after refresh  

## 📁 Files Added / Updated

- `src/utils/storage.ts` — robust get/set with legacy handling  
- `src/components/ThemeSelector.tsx`  
- `src/components/StorageSelector.tsx`  
- `src/components/AiModelSelector.tsx` (new)  
- `src/App.tsx` — integrated updated logic  
- `README_PERSISTENT_SETTINGS.md` — this file

## ✅ Next Steps
- Hook each AI model to corresponding backend API.  
- Wrap settings in a global React context for cleaner access throughout the app.
