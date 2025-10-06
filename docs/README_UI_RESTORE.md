# Muse Chat – v1.2.0 UI Restore

This version restores the **normal chat interface** while keeping the **persistent settings** and **debug panel**.

## ✅ Features

- Full chat window with messages and input area
- Persistent settings: Theme, AI Model, Storage, Debug collapsed
- Debug Panel with collapsible ⚙️ icon
- Mock AI replies for demo use

## 🧠 Behavior

| Setting | Description |
|----------|--------------|
| Theme | Light / Dark / System |
| AI Model | Off / Mock / OpenAI / Claude / Gemini |
| Storage | Local / Firestore / Supabase |
| Debug Panel | Collapsed by default, toggle ⚙️ |

## 🧪 Test Plan

1. Change settings in Debug Panel → persist after reload.  
2. Send messages → mock reply appears when AI Model ≠ Off.  
3. Theme switches and persists.  
4. Debug panel state persists.  

## 📁 Files Included

- `src/App.tsx` – full chat UI  
- `src/utils/storage.ts` – robust storage handler  
- `src/components/*` – selectors for settings  
- `README_UI_RESTORE.md` – usage guide
