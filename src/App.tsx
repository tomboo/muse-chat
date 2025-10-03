import React, { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import MessageLog from "./components/MessageLog";
import MessageInput from "./components/MessageInput";
import pkg from "../package.json";   // Import version from package.json

function App() {
  const [messages, setMessages] = useState<
    { id: number; text: string; sender: "user" | "bot"; timestamp: string }[]
  >([]);
  const [aiEnabled, setAiEnabled] = useState(false);
  const [storageEnabled, setStorageEnabled] = useState(false);
  const [showDebug, setShowDebug] = useState(false); // Collapsible state

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const now = new Date();
    const newMessage = {
      id: Date.now(),
      text,
      sender: "user" as const,
      timestamp: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Always reply (bot placeholder)
    setTimeout(() => {
      const replyNow = new Date();
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "🤖 Bot reply...",
          sender: "bot" as const,
          timestamp: replyNow.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header with Dark/Light + AI + Storage toggles */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-lg font-bold">Muse Chat</h1>
        <div className="flex gap-2">
          <ThemeToggle />
          <button
            onClick={() => setAiEnabled((prev) => !prev)}
            className={`px-3 py-2 rounded ${aiEnabled
              ? "bg-purple-600 text-white"
              : "bg-purple-300 text-gray-800"}`}
          >
            🤖 AI
          </button>
          <button
            onClick={() => setStorageEnabled((prev) => !prev)}
            className={`px-3 py-2 rounded ${storageEnabled
              ? "bg-green-600 text-white"
              : "bg-green-300 text-gray-800"}`}
          >
            💾 Storage
          </button>
        </div>
      </header>

      {/* Main Chat Log */}
      <main className="flex-1 overflow-y-auto p-4">
        <MessageLog messages={messages} />
      </main>

      {/* Footer with input + collapsible debug panel */}
      <footer className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
        <MessageInput onSend={handleSend} />

        {/* Collapsible Debug panel */}
        <div className="text-xs bg-gray-100 dark:bg-gray-800 rounded">
          <button
            onClick={() => setShowDebug((prev) => !prev)}
            className="w-full text-left px-2 py-1 font-semibold bg-gray-200 dark:bg-gray-700 rounded-t"
          >
            {showDebug ? "▼ Debug Panel" : "▶ Debug Panel"}
          </button>
          {showDebug && (
            <div className="p-2">
              <ul className="space-y-1">
                <li><strong>Version:</strong> v{pkg.version}</li>
                <li><strong>AI Mode:</strong> {aiEnabled ? "On" : "Off"}</li>
                <li><strong>Storage:</strong> {storageEnabled ? "On" : "Off"}</li>
                <li><strong>Messages:</strong> {messages.length}</li>
              </ul>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
