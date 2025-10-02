import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { fetchBotReply } from "../services/openai";

export interface MessageType {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: any; // Firestore Timestamp, Date, or string
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
    const userMessage: MessageType = {
      id: uuid(),
      text,
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setBotTyping(true);

    try {
      let botText = "";
      const botMessage: MessageType = {
        id: uuid(),
        text: "",
        sender: "bot",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMessage]);

      await fetchBotReply(
        [
          ...messages.map((m) => ({
            role: m.sender === "bot" ? "assistant" : "user",
            content: m.text,
          })),
          { role: "user", content: text },
        ],
        (token) => {
          botText += token;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === botMessage.id ? { ...m, text: botText } : m
            )
          );
        }
      );
    } catch (err: any) {
      console.error("Error fetching bot reply:", err);

      // Fallback mock reply so UI doesn't stay blank
      setMessages((prev) => [
        ...prev,
        {
          id: uuid(),
          text: "(mock reply) Sorry, the AI service is currently unavailable. Please check your quota or try again later.",
          sender: "bot",
          timestamp: new Date().toISOString(),
        },
      ]);
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
