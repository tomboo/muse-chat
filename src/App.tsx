import React from "react";
import "./services/firebase";
import { ProfileProvider } from "./context/ProfileContext";
import { SettingsProvider } from "./context/SettingsContext";
import { ToastProvider } from "./context/ToastContext";
import { ChatProvider } from "./context/ChatContext";
import ChatLog from "./components/ChatLog";
import ChatInput from "./components/ChatInput";
import Sidebar from "./components/Sidebar";
import packageJson from "../package.json";

const version = packageJson.version;

export default function App() {
  return (
    <ProfileProvider>
    <SettingsProvider>
      <ToastProvider>
        <ChatProvider>
          <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Sidebar (docked panels) */}
            <Sidebar />

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col transition-all duration-300">
              <header className="p-3 border-b dark:border-gray-700 flex justify-between items-center">
                <h1 className="font-semibold text-base">Muse Chat</h1>
                <span className="text-xs text-gray-500">v{version}</span>
              </header>

              <main className="flex-1 flex flex-col">
                <ChatLog />
                <ChatInput />
              </main>
            </div>
          </div>
        </ChatProvider>
      </ToastProvider>
    </SettingsProvider>
    </ProfileProvider>
  );
}
