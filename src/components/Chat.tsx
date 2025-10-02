import React, { useState } from "react";
import { useChat } from "../context/ChatContext";
import { useMode } from "../context/ModeContext";
import { MessageType } from "../context/ChatContextTypes";

export const Chat: React.FC = () => {
  const { messages, addMessage } = useChat();
  const { ai } = useMode();
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: MessageType = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    addMessage(userMsg);

    setInput("");

    const replyText = await ai.sendMessage(userMsg.text);
    const botMsg: MessageType = {
      id: Date.now().toString() + "-bot",
      text: replyText,
      sender: "bot",
      timestamp: new Date().toISOString(),
    };
    addMessage(botMsg);
  };

  return (
    <div className="flex flex-col h-[70vh] bg-white shadow rounded-lg p-4">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded-lg max-w-[70%] ${
              msg.sender === "user"
                ? "bg-blue-100 self-end ml-auto"
                : "bg-gray-200 self-start mr-auto"
            }`}
          >
            <span className="text-sm">{msg.text}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};
