import React from "react";
import { ChatProvider } from "./contexts/ChatContext";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <ChatProvider>
      <div className="app-container min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <ChatWindow />
      </div>
    </ChatProvider>
  );
}

export default App;
