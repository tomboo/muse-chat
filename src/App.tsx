import React, { useState, useEffect } from "react";
import { getSetting, setSetting } from "./utils/storage";
import ThemeSelector from "./components/ThemeSelector";
import StorageSelector from "./components/StorageSelector";
import AiModelSelector from "./components/AiModelSelector";
import packageJson from "../package.json?raw";
const version = JSON.parse(packageJson).version;

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(getSetting("theme", "system"));
  const [aiModel, setAiModel] = useState<"off" | "mock" | "openai" | "claude" | "gemini">(getSetting("aiModel", "mock"));
  const [storage, setStorage] = useState<"local" | "firestore" | "supabase">(getSetting("storage", "local"));
  const [debugCollapsed, setDebugCollapsed] = useState<boolean>(getSetting("debugCollapsed", true));
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => setSetting("theme", theme), [theme]);
  useEffect(() => setSetting("aiModel", aiModel), [aiModel]);
  useEffect(() => setSetting("storage", storage), [storage]);
  useEffect(() => setSetting("debugCollapsed", debugCollapsed), [debugCollapsed]);

  useEffect(() => {
    const root = document.documentElement;
    const applySystemTheme = () => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", prefersDark);
    };
    if (theme === "system") {
      applySystemTheme();
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      media.addEventListener("change", applySystemTheme);
      return () => media.removeEventListener("change", applySystemTheme);
    } else {
      root.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user" as const, text: input }];
    setMessages(newMessages);
    setInput("");

    if (aiModel !== "off") {
      const mockReply =
        aiModel === "mock"
          ? "🤖 [Mock AI]: This is a simulated response."
          : `🤖 [${aiModel.toUpperCase()}]: (Real AI integration placeholder)`;
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot" as const, text: mockReply }]);
      }, 600);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="p-3 border-b dark:border-gray-700 flex justify-between items-center">
        <h1 className="font-semibold text-base">Muse Chat</h1>
        <button
          onClick={() => setDebugCollapsed(!debugCollapsed)}
          className="text-xs border rounded px-2 py-1 bg-white text-gray-800 dark:bg-gray-700 dark:text-white"
        >
          {debugCollapsed ? "⚙️" : "Hide"}
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.length === 0 && (
          <div className="opacity-60 text-center mt-10">Start chatting...</div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              "p-2 rounded max-w-prose " +
              (m.sender === "user"
                ? "bg-blue-100 dark:bg-blue-800 text-gray-900 dark:text-white ml-auto text-right"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100")
            }
          >
            {m.text}
          </div>
        ))}
      </main>

      <footer className="p-3 border-t dark:border-gray-700 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 border rounded p-2 text-sm dark:bg-gray-800 dark:border-gray-600"
        />
        <button
          onClick={handleSend}
          className="px-3 py-2 text-sm bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </footer>

      {!debugCollapsed && (
        <aside className="absolute right-2 top-12 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-3 shadow-lg text-xs space-y-2 w-60">
          <h2 className="font-semibold text-sm mb-2 flex justify-between items-center">
            <span>Debug Panel</span>
            <span className="text-gray-500 text-xs">v{version}</span>
          </h2>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span>Theme:</span>
              <ThemeSelector theme={theme} setTheme={setTheme} />
            </div>
            <div className="flex justify-between items-center">
              <span>Storage:</span>
              <StorageSelector storage={storage} setStorage={setStorage} />
            </div>
            <div className="flex justify-between items-center">
              <span>AI Model:</span>
              <AiModelSelector aiModel={aiModel} setAiModel={setAiModel} />
            </div>
          </div>
          <pre className="bg-gray-100 dark:bg-gray-900 rounded p-2 mt-2 overflow-x-auto">
            {JSON.stringify({ version, theme, aiModel, storage, debugCollapsed }, null, 2)}
          </pre>
        </aside>
      )}
    </div>
  );
}
