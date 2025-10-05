import React from "react";

interface AiControlsProps {
  aiMode: boolean;
  setAiMode: (value: boolean) => void;
  aiModel: "openai" | "claude" | "gemini";
  setAiModel: (value: "openai" | "claude" | "gemini") => void;
}

export default function AiControls({ aiMode, setAiMode, aiModel, setAiModel }: AiControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <label>
        <input
          type="checkbox"
          checked={aiMode}
          onChange={(e) => setAiMode(e.target.checked)}
          className="mr-1"
        />
        AI Mode
      </label>

      <select
        value={aiModel}
        onChange={(e) => setAiModel(e.target.value as "openai" | "claude" | "gemini")}
        disabled={!aiMode}
        className="border rounded p-1 text-sm"
      >
        <option value="openai">OpenAI</option>
        <option value="claude">Claude</option>
        <option value="gemini">Gemini</option>
      </select>
    </div>
  );
}
