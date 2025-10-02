import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AIProvider } from "../ai/AIProvider";
import { FakeAI } from "../ai/FakeAI";
import { OpenAIProvider } from "../ai/OpenAIProvider";
import { StorageProvider } from "../storage/StorageProvider";
import { LocalStorageProvider } from "../storage/LocalStorageProvider";
import { FirestoreProvider } from "../storage/FirestoreProvider";

export type AIMode = "fake" | "real";
export type StorageMode = "local" | "cloud";

interface ModeContextType {
  aiMode: AIMode;
  setAIMode: (mode: AIMode) => void;
  storageMode: StorageMode;
  setStorageMode: (mode: StorageMode) => void;
  ai: AIProvider;
  storage: StorageProvider;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [aiMode, setAIMode] = useState<AIMode>("fake");
  const [storageMode, setStorageMode] = useState<StorageMode>("local");

  const [ai, setAI] = useState<AIProvider>(new FakeAI());
  const [storage, setStorage] = useState<StorageProvider>(new LocalStorageProvider());

  useEffect(() => {
    setAI(aiMode === "fake" ? new FakeAI() : new OpenAIProvider());
  }, [aiMode]);

  useEffect(() => {
    setStorage(storageMode === "local" ? new LocalStorageProvider() : new FirestoreProvider());
  }, [storageMode]);

  return (
    <ModeContext.Provider value={{ aiMode, setAIMode, storageMode, setStorageMode, ai, storage }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
};
