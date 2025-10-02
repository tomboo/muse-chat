import React from "react";
import { useMode } from "../context/ModeContext";

export const ModeToggle: React.FC = () => {
  const { aiMode, setAIMode, storageMode, setStorageMode } = useMode();

  return (
    <div className="flex gap-4 p-2 bg-gray-100 rounded-md shadow-sm">
      <div>
        <label className="mr-2 text-sm font-medium">AI Mode:</label>
        <select
          value={aiMode}
          onChange={(e) => setAIMode(e.target.value as "fake" | "real")}
          className="border rounded p-1 text-sm"
        >
          <option value="fake">Fake</option>
          <option value="real">Real</option>
        </select>
      </div>
      <div>
        <label className="mr-2 text-sm font-medium">Storage:</label>
        <select
          value={storageMode}
          onChange={(e) => setStorageMode(e.target.value as "local" | "cloud")}
          className="border rounded p-1 text-sm"
        >
          <option value="local">Local</option>
          <option value="cloud">Cloud</option>
        </select>
      </div>
    </div>
  );
};
