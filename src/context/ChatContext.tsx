import React, { createContext, useContext, useEffect, useState } from "react";
import { useSettings } from "./SettingsContext";

export interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: number;
}

interface ChatContextProps {
  messages: Message[];
  sendMessage: (text: string) => void;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

const STORAGE_KEY = "museChatHistory";

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings } = useSettings();
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Message[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
      console.error("Failed to persist chat history", e);
    }
  }, [messages]);

  const push = (m: Message) => setMessages((prev) => [...prev, m]);

  const sendMessage = (text: string) => {
    const content = text.trim();
    if (!content) return;
    const now = Date.now();

    push({
      id: `${now}`,
      sender: "user",
      text: content,
      timestamp: now,
    });

    setTimeout(() => {
      const model = settings.model || "mock";
      push({
        id: `${Date.now()}-bot`,
        sender: "bot",
        text: `(${model}) Thanks for your message: "${content}"`,
        timestamp: Date.now(),
      });
    }, 1000);
  };

  const clearChat = () => {
    setMessages([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextProps => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within a ChatProvider");
  return ctx;
};
