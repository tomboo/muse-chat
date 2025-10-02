import React, { useState } from "react";

const MessageInput: React.FC<{ onSend: (text: string) => void }> = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
