import React from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

const MessageLog: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="space-y-4">
      {messages.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 italic">
          No messages yet. Start the conversation!
        </p>
      )}
      {messages.map((m) => (
        <div key={m.id} className="flex flex-col max-w-md">
          <div
            className={`p-2 rounded ${
              m.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 self-start"
            }`}
          >
            {m.text}
          </div>
          <span
            className={`text-xs mt-1 ${
              m.sender === "user"
                ? "text-right text-gray-400"
                : "text-left text-gray-500 dark:text-gray-400"
            }`}
          >
            {m.timestamp}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MessageLog;
