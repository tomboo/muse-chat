import React, { createContext, useContext, useEffect, useState } from "react";
import { loadSettings, saveSettings } from "../services/firestore";

export interface Settings {
  theme: "light" | "dark" | "system";
  model: "off" | "mock" | "openai" | "claude" | "gemini";
  storage: "local" | "firestore";
}

interface SettingsContextProps {
  settings: Settings;
  setSettings: (s: Settings) => void;
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  syncing: boolean;
  error?: string;
}

const defaultSettings: Settings = {
  theme: "system",
  model: "mock",
  storage: "local",
};

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem("museSettings");
    return stored ? JSON.parse(stored) : defaultSettings;
  });
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    const applySystemTheme = () => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", prefersDark);
    };

    if (settings.theme === "system") {
      applySystemTheme();
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      media.addEventListener("change", applySystemTheme);
      return () => media.removeEventListener("change", applySystemTheme);
    } else {
      root.classList.toggle("dark", settings.theme === "dark");
    }
  }, [settings.theme]);

  // Save settings when changed
  useEffect(() => {
    const persist = async () => {
      if (settings.storage === "local") {
        localStorage.setItem("museSettings", JSON.stringify(settings));
      } else if (settings.storage === "firestore") {
        try {
          setSyncing(true);
          await saveSettings(settings);
          localStorage.setItem("museSettings", JSON.stringify(settings));
        } catch (err) {
          console.error("⚠️ Firestore save failed:", err);
          setError("Firestore sync failed, using local storage.");
        } finally {
          setSyncing(false);
        }
      }
    };
    persist();
  }, [settings]);

  // Load from Firestore on mount
  useEffect(() => {
    const fetchRemote = async () => {
      if (settings.storage === "firestore") {
        try {
          setSyncing(true);
          const remote = await loadSettings();
          setSettings(remote);
        } catch (err) {
          console.error("⚠️ Firestore load failed:", err);
          setError("Could not load settings from Firestore. Using local defaults.");
        } finally {
          setSyncing(false);
        }
      }
    };
    fetchRemote();
  }, []);

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <SettingsContext.Provider value={{ settings, setSettings, updateSetting, syncing, error }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextProps => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within a SettingsProvider");
  return ctx;
};
