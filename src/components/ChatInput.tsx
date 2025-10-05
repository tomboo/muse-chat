import React, { useState } from "react";
import { useChat } from "../context/ChatContext";

const ChatInput: React.FC = () => {
  const { sendMessage, clearChat } = useChat();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Send
      </button>
      <button
        type="button"
        onClick={clearChat}
        className="px-2 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
      >
        Clear
      </button>
    </form>
  );
};

export default ChatInput;
