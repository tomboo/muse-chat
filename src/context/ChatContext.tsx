import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../services/firebase";

export interface MessageType {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

interface ChatContextProps {
  messages: MessageType[];
  sendMessage: (text: string, sender?: "user" | "bot") => Promise<void>;
  botTyping: boolean;
  setBotTyping: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [botTyping, setBotTyping] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as MessageType)
      );
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (text: string, sender: "user" | "bot" = "user") => {
    await addDoc(collection(db, "messages"), {
      text,
      sender,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, botTyping, setBotTyping }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
};
