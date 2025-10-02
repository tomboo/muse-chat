import React, { useEffect, useState } from "react";
import { useMode } from "../context/ModeContext";

export const DebugPanel: React.FC = () => {
  const { aiMode, storageMode } = useMode();
  const [lastChanged, setLastChanged] = useState<string>("");

  useEffect(() => {
    const now = new Date().toLocaleTimeString();
    setLastChanged(now);
  }, [aiMode, storageMode]);

  return (
    <div className="text-xs text-gray-700">
      <p>
        <strong>AI Mode:</strong> {aiMode}
      </p>
      <p>
        <strong>Storage Mode:</strong> {storageMode}
      </p>
      <p>
        <strong>Last Changed:</strong> {lastChanged || "—"}
      </p>
    </div>
  );
};
