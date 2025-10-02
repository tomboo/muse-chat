import React, { createContext, useContext, useEffect, useState } from "react";
import { MessageType } from "./ChatContextTypes";
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
    storage.loadMessages().then(setMessages);
  }, [storage]);

  const addMessage = async (msg: MessageType) => {
    setMessages((prev) => [...prev, msg]);
    try {
      await storage.saveMessage(msg);
    } catch (err) {
      console.error("Error saving message:", err);
    }
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
