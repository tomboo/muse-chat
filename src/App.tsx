import React from "react";
import { ChatProvider, useChat } from "./contexts/ChatContext";

function MessagesList() {
  const { messages } = useChat();

  return (
    <div className="flex-1 overflow-y-auto rounded-lg bg-white dark:bg-gray-800 shadow p-4 space-y-2">
      {messages.map((msg) => {
        // Normalize Firestore Timestamp vs string/Date
        let date: Date;
        if (msg.timestamp && typeof (msg.timestamp as any).toDate === "function") {
          date = (msg.timestamp as any).toDate();
        } else {
          date = new Date(msg.timestamp);
        }

        return (
          <div key={msg.id} className="p-2 rounded">
            <span className="block text-xs text-gray-500">
              {date.toLocaleString()}
            </span>
            <p>{msg.text}</p>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <ChatProvider>
      <div className="app-container min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <MessagesList />
      </div>
    </ChatProvider>
  );
}

export default App;
