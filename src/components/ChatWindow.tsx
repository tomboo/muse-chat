import React, { useState } from "react";
import { useChat } from "../contexts/ChatContext";

function ChatWindow() {
  const { messages, sendMessage, botTyping } = useChat();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="flex flex-col flex-1 p-4 space-y-4">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto rounded-lg bg-white dark:bg-gray-800 shadow p-4 space-y-2">
        {messages.map((msg) => {
          let date: Date;
          if (msg.timestamp && typeof (msg.timestamp as any).toDate === "function") {
            date = (msg.timestamp as any).toDate();
          } else {
            date = new Date(msg.timestamp);
          }

          return (
            <div
              key={msg.id}
              className={`p-2 rounded max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 mr-auto"
              }`}
            >
              <span className="block text-xs text-gray-500">
                {date.toLocaleString()}
              </span>
              <p>{msg.text}</p>
            </div>
          );
        })}

        {botTyping && (
          <div className="italic text-gray-500">Bot is typing…</div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type a message…"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;
