import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { fetchBotReply } from "../services/openai";

export interface MessageType {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

interface ChatContextProps {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  botTyping: boolean;
  sendMessage: (text: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [botTyping, setBotTyping] = useState(false);

  const sendMessage = async (text: string) => {
    // 1. Add user message
    const userMessage: MessageType = {
      id: uuid(),
      text,
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setBotTyping(true);

    try {
      // 2. Call OpenAI API
      const reader = await fetchBotReply([
        ...messages.map((m) => ({ role: m.sender, content: m.text })),
        { role: "user", content: text },
      ]);

      // 3. Add empty bot message
      let botText = "";
      const botMessage: MessageType = {
        id: uuid(),
        text: "",
        sender: "bot",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMessage]);

      // 4. Stream in chunks
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = new TextDecoder().decode(value);

        // TODO: parse OpenAI stream properly
        botText += chunk;

        setMessages((prev) =>
          prev.map((m) =>
            m.id === botMessage.id ? { ...m, text: botText } : m
          )
        );
      }
    } catch (err) {
      console.error("Error fetching bot reply:", err);
    } finally {
      setBotTyping(false);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, setMessages, botTyping, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within ChatProvider");
  return context;
}
