import React, { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { loadSettings, saveSettings } from "../services/firestore";
import packageJson from "../../package.json";

const version = packageJson.version;

const DebugPanel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { settings, updateSetting, syncing, error } = useSettings();

  return (
    <div className="fixed bottom-0 right-0 m-4 z-40">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded shadow text-sm"
      >
        {open ? "Hide Debug" : "Show Debug"}
      </button>

      {open && (
        <div className="mt-2 p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-xl w-80 text-sm">
          <h3 className="text-base font-semibold mb-3 flex justify-between">
            <span>Debug Panel</span>
            <span className="text-gray-500 text-xs">v{version}</span>
          </h3>

          {syncing && (
            <div className="text-yellow-600 dark:text-yellow-400 mb-2">
              🔄 Syncing with Firestore...
            </div>
          )}
          {error && (
            <div className="text-red-600 dark:text-red-400 mb-2">
              ⚠️ {error}
            </div>
          )}

          <div className="space-y-2 mb-3">
            <div>
              <label className="font-medium text-xs">Storage Mode:</label>
              <select
                value={settings.storage}
                onChange={(e) => updateSetting("storage", e.target.value as any)}
                className="w-full border rounded p-1 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="local">Local</option>
                <option value="firestore">Firestore</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-xs">Theme:</label>
              <select
                value={settings.theme}
                onChange={(e) => updateSetting("theme", e.target.value as any)}
                className="w-full border rounded p-1 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-xs">AI Model:</label>
              <select
                value={settings.model}
                onChange={(e) => updateSetting("model", e.target.value as any)}
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

          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded overflow-x-auto text-xs mb-3">
            <pre>{JSON.stringify(settings, null, 2)}</pre>
          </div>

          {/* Firestore Tools */}
          <div className="mt-3 border-t border-gray-300 dark:border-gray-700 pt-3">
            <h4 className="font-medium text-sm mb-2">Firestore Tools</h4>
            <div className="flex gap-2 mb-2">
              <button
                onClick={async () => {
                  try {
                    await saveSettings(settings);
                    console.log("✅ Firestore save success:", settings);
                    alert("Settings saved to Firestore!");
                  } catch (err) {
                    console.error("Firestore save failed:", err);
                    alert("❌ Firestore save failed — check console");
                  }
                }}
                className="flex-1 px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={async () => {
                  try {
                    const data = await loadSettings();
                    console.log("📥 Firestore loaded data:", data);
                    alert("Loaded from Firestore — check console for details");
                  } catch (err) {
                    console.error("Firestore load failed:", err);
                    alert("❌ Firestore load failed — check console");
                  }
                }}
                className="flex-1 px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
              >
                Load
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Use these buttons to manually test Firestore reads/writes. Check console for logs.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugPanel;
