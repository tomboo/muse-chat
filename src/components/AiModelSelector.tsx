import React from "react";

interface AiModelSelectorProps {
  aiModel: "off" | "mock" | "openai" | "claude" | "gemini";
  setAiModel: (value: "off" | "mock" | "openai" | "claude" | "gemini") => void;
}

export default function AiModelSelector({ aiModel, setAiModel }: AiModelSelectorProps) {
  return (
    <select
      value={aiModel}
      onChange={(e) =>
        setAiModel(e.target.value as "off" | "mock" | "openai" | "claude" | "gemini")
      }
      className="border rounded p-1 text-xs bg-white text-gray-800 dark:bg-gray-700 dark:text-white"
    >
      <option value="off">Off</option>
      <option value="mock">Mock</option>
      <option value="openai">OpenAI</option>
      <option value="claude">Claude</option>
      <option value="gemini">Gemini</option>
    </select>
  );
}
