# Muse Chat 2 – Stage 6.5

## Overview
Stage 6.5 introduces **mode toggling** with the Strategy pattern, allowing runtime switching between:
- **AI Modes**: Fake ↔ Real (OpenAI)
- **Storage Modes**: Local ↔ Cloud (Firestore)

All four combinations are supported:
1. Fake + Local
2. Fake + Cloud
3. Real + Local
4. Real + Cloud

## New Files
- `src/ai/AIProvider.ts` – AI interface
- `src/ai/FakeAI.ts` – Fake AI provider (canned responses)
- `src/ai/OpenAIProvider.ts` – Real AI provider (OpenAI SSE integration stub)
- `src/storage/StorageProvider.ts` – Storage interface
- `src/storage/LocalStorageProvider.ts` – Local storage persistence
- `src/storage/FirestoreProvider.ts` – Firestore persistence
- `src/context/ModeContext.tsx` – Central mode context, manages AI + Storage providers
- `src/components/ModeToggle.tsx` – UI component for toggling modes

## Usage
1. Wrap your app in the `ModeProvider`:

```tsx
import { ModeProvider } from "./context/ModeContext";

function App() {
  return (
    <ModeProvider>
      <YourAppComponents />
    </ModeProvider>
  );
}
```

2. Add the toggle UI, for example in your header:

```tsx
import { ModeToggle } from "./components/ModeToggle";

<header>
  <h1>Muse Chat 2</h1>
  <ModeToggle />
</header>
```

3. In your chat logic, replace direct AI/Storage calls with `useMode()`:

```tsx
import { useMode } from "../context/ModeContext";

const { ai, storage } = useMode();

// Send message
const reply = await ai.sendMessage(userInput);

// Persist message
await storage.saveMessage(newMessage);
```

## ChatContext Integration Example
Here’s how you might integrate storage into `ChatContext`:

```tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { MessageType } from "./ChatContextTypes"; // define id, text, sender, timestamp
import { useMode } from "./ModeContext";

interface ChatContextProps {
  messages: MessageType[];
  addMessage: (msg: MessageType) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { storage } = useMode();
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    // Load messages on mount
    storage.loadMessages().then(setMessages);
  }, [storage]);

  const addMessage = async (msg: MessageType) => {
    setMessages((prev) => [...prev, msg]);
    await storage.saveMessage(msg);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
};
```

Then in your UI, you can call `useChat()` to get `messages` and `addMessage`.  
Switching storage will reset the loaded messages (as designed for Stage 6.5).

## Notes
- Switching **storage mode** resets messages (no auto-migration).
- `OpenAIProvider` requires the Stage 6 SSE API (`/api/chat`) to be running.
- `FirestoreProvider` requires a configured `firebase.ts` with Firestore exports.

## Testing
- Fake + Local: works entirely offline, persists in `localStorage`.
- Fake + Cloud: fake AI, messages stored in Firestore.
- Real + Local: OpenAI replies, persisted in `localStorage`.
- Real + Cloud: production mode with OpenAI + Firestore.
