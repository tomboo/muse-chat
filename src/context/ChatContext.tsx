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

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings } = useSettings();
  const [messages, setMessages] = useState<Message[]>(() => {
    const stored = localStorage.getItem("museChatMessages");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("museChatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Mock AI reply
    setTimeout(() => {
      const model = settings.model || "mock";
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `(${model}) Thanks for your message: "${text}"`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("museChatMessages");
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
