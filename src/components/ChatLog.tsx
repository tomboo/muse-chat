import React, { useEffect, useRef } from "react";
import { useChat } from "../context/ChatContext";

const ChatLog: React.FC = () => {
  const { messages } = useChat();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
      {messages.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 text-center mt-10">
          Start a conversation with Muse 👋
        </p>
      )}
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`my-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-xs md:max-w-md rounded-lg px-3 py-2 text-sm shadow-sm ${
              msg.sender === "user"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default ChatLog;
