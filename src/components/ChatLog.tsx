import React, { useEffect, useMemo, useRef } from "react";
import { useChat } from "../context/ChatContext";

const formatAbsolute = (ts: number) => {
  try {
    const d = new Date(ts);
    const dateStr = d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const timeStr = d.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${dateStr} • ${timeStr}`;
  } catch {
    return "";
  }
};

const ChatLog: React.FC = () => {
  const { messages } = useChat();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const items = useMemo(() => messages, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
      {items.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 text-center mt-10">
          Start a conversation with Muse 👋
        </p>
      )}
      {items.map((msg) => (
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
            <div>{msg.text}</div>
            <div
              className={`mt-1 text-[10px] opacity-75 ${
                msg.sender === "user" ? "text-blue-100" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {formatAbsolute(msg.timestamp)}
            </div>
          </div>
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default ChatLog;
