import React from "react";
import Modal from "./Modal";
import { useSettings } from "../context/SettingsContext";
import { saveSettings } from "../services/firestore";

const SettingsModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { settings, updateSetting } = useSettings();

  return (
    <Modal open={open} onClose={onClose} title="Settings">
      <div className="space-y-3 text-sm">
        <div>
          <label className="block mb-1 opacity-70">Theme</label>
          <select
            value={settings.theme}
            onChange={(e) => updateSetting("theme", e.target.value as any)}
            className="w-full border rounded p-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 opacity-70">Model</label>
          <select
            value={settings.model}
            onChange={(e) => updateSetting("model", e.target.value as any)}
            className="w-full border rounded p-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
          >
            <option value="off">Off</option>
            <option value="mock">Mock</option>
            <option value="openai">OpenAI</option>
            <option value="claude">Claude</option>
            <option value="gemini">Gemini</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 opacity-70">Storage</label>
          <select
            value={settings.storage}
            onChange={(e) => updateSetting("storage", e.target.value as any)}
            className="w-full border rounded p-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
          >
            <option value="local">Local</option>
            <option value="firestore">Firestore</option>
          </select>
        </div>
        <div className="flex gap-2 pt-2">
          <button
            onClick={async () => { await saveSettings(settings); }}
            className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
