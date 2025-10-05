import React from "react";
import { useSettings } from "../context/SettingsContext";

interface SettingsButtonProps {
  onClick?: () => void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ onClick }) => {
  const { settings } = useSettings();

  return (
    <button
      onClick={onClick}
      title="Open Settings"
      className="fixed bottom-4 left-4 bg-gray-200 dark:bg-gray-700 rounded-full shadow p-2 text-lg hover:scale-105 transition-transform"
    >
      ⚙️
      <span className="ml-1 text-xs text-gray-500 dark:text-gray-300">
        {settings.storage === "firestore" ? "☁️" : "💾"}
      </span>
    </button>
  );
};

export default SettingsButton;
