import React, { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { useToast } from "../context/ToastContext";

const SettingsModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { settings, updateSetting } = useSettings();
  const { showToast } = useToast();

  const handleSave = () => {
    showToast("✅ Settings saved!");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-16 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded shadow text-sm"
      >
        Open Settings
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">App Settings</h2>

            <div className="space-y-3 mb-4 text-sm">
              <div>
                <label className="block mb-1 text-gray-500 dark:text-gray-300">
                  Theme
                </label>
                <select
                  value={settings.theme}
                  onChange={(e) =>
                    updateSetting("theme", e.target.value as any)
                  }
                  className="w-full border rounded p-1 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
                >
                  <option value="system">System</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-gray-500 dark:text-gray-300">
                  Storage
                </label>
                <select
                  value={settings.storage}
                  onChange={(e) =>
                    updateSetting("storage", e.target.value as any)
                  }
                  className="w-full border rounded p-1 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
                >
                  <option value="local">Local</option>
                  <option value="firestore">Firestore</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-gray-500 dark:text-gray-300">
                  AI Model
                </label>
                <select
                  value={settings.model}
                  onChange={(e) =>
                    updateSetting("model", e.target.value as any)
                  }
                  className="w-full border rounded p-1 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
                >
                  <option value="off">Off</option>
                  <option value="mock">Mock</option>
                  <option value="openai">OpenAI</option>
                  <option value="claude">Claude</option>
                  <option value="gemini">Gemini</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 bg-gray-400 text-white rounded text-sm hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsModal;
