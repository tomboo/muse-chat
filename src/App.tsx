import React from "react";
import { ModeProvider } from "./context/ModeContext";
import { ChatProvider } from "./context/ChatContext";
import { ModeToggle } from "./components/ModeToggle";
import { Chat } from "./components/Chat";
import { DebugPanel } from "./components/DebugPanel";

function App() {
  return (
    <ModeProvider>
      <ChatProvider>
        <div className="flex flex-col h-screen">
          {/* Mode toggle bar */}
          <header className="p-2 border-b bg-white shadow-sm">
            <ModeToggle />
          </header>

          {/* Chat window */}
          <main className="flex-1 overflow-y-auto p-4">
            <Chat />
          </main>

          {/* Debug panel */}
          <footer className="p-2 border-t bg-gray-50">
            <DebugPanel />
          </footer>
        </div>
      </ChatProvider>
    </ModeProvider>
  );
}

export default App;
