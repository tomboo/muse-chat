import React, { useMemo, useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { useChat } from "../context/ChatContext";
import { saveSettings } from "../services/firestore";
import packageJson from "../../package.json";

type Panel = "settings" | "debug" | null;

const Sidebar: React.FC = () => {
  const { settings, updateSetting, syncing, error } = useSettings();
  const { messages, clearChat } = useChat();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);

  const version = packageJson.version;

  const widthClass = useMemo(() => {
    if (panel) return "w-96";
    return open ? "w-64" : "w-12";
  }, [open, panel]);

  const handleToggle = () => {
    if (panel) {
      setPanel(null);
      setOpen(true);
    } else {
      setOpen((o) => !o);
    }
  };

  const openSettings = () => {
    setOpen(true);
    setPanel("settings");
  };

  const openDebug = () => {
    setOpen(true);
    setPanel("debug");
  };

  return (
    <aside
      className={`h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-r dark:border-gray-700 transition-all duration-300 flex flex-col ${widthClass}`}
    >
      <div className="flex items-center justify-between p-2">
        <button
          onClick={handleToggle}
          className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          title={open ? (panel ? "Close panel" : "Collapse") : "Expand"}
        >
          {open ? "✕" : "☰"}
        </button>
        {open && !panel && <span className="text-xs opacity-60 pr-1">Muse</span>}
        {panel && (
          <div className="flex-1 text-right pr-1 text-xs opacity-60">
            {panel === "settings" ? "Settings" : "Debug"}
          </div>
        )}
      </div>

      <nav className="flex flex-col gap-1 p-2">
        <button
          onClick={openSettings}
          className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${
            panel === "settings" ? "bg-gray-200 dark:bg-gray-700" : ""
          }`}
          title="Settings"
        >
          ⚙️ {open && <span>Settings</span>}
        </button>
        <button
          onClick={openDebug}
          className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${
            panel === "debug" ? "bg-gray-200 dark:bg-gray-700" : ""
          }`}
          title="Debug Panel"
        >
          🧰 {open && <span>Debug Panel</span>}
        </button>
      </nav>

      <div className="relative flex-1 overflow-hidden">
        {!panel && open && (
          <div className="h-full p-3 text-xs text-gray-500 dark:text-gray-300 opacity-80">
            Select an item above to view details.
          </div>
        )}

        {/* Settings Panel */}
        <div
          className={`absolute inset-0 p-3 overflow-y-auto transition-all duration-300 transform ${
            panel === "settings"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5 pointer-events-none"
          }`}
          aria-hidden={panel !== "settings"}
        >
          <h3 className="text-sm font-semibold mb-3">Settings</h3>
          <div className="space-y-3 text-sm">
            <div>
              <label className="block mb-1 opacity-70">Theme</label>
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
              <label className="block mb-1 opacity-70">AI Model</label>
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
            <div>
              <label className="block mb-1 opacity-70">Storage</label>
              <select
                value={settings.storage}
                onChange={(e) => updateSetting("storage", e.target.value as any)}
                className="w-full border rounded p-1 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="local">Local</option>
                <option value="firestore">Firestore</option>
              </select>
            </div>
            <div className="pt-2 flex gap-2">
              <button
                onClick={async () => {
                  try {
                    if (settings.storage === "firestore") {
                      await saveSettings(settings);
                    }
                  } catch (e) {
                    console.error("Save failed:", e);
                  }
                }}
                className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setPanel(null)}
                className="px-3 py-1 bg-gray-400 text-white rounded text-xs hover:bg-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Debug Panel */}
        <div
          className={`absolute inset-0 p-3 overflow-y-auto transition-all duration-300 transform ${
            panel === "debug"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5 pointer-events-none"
          }`}
          aria-hidden={panel !== "debug"}
        >
          <h3 className="text-sm font-semibold mb-3">Debug</h3>
          <div className="space-y-2 text-xs">
            <div className="opacity-70">Version: v{version}</div>
            {syncing && <div className="text-yellow-500">Syncing…</div>}
            {error && <div className="text-red-500">Error: {error}</div>}
            <div className="opacity-70">Messages: {messages.length}</div>
          </div>

          <div className="mt-3 flex gap-2">
            <button
              onClick={async () => {
                try {
                  await saveSettings(settings);
                  console.log("Manual sync complete");
                } catch (e) {
                  console.error("Manual sync failed:", e);
                }
              }}
              className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
            >
              Sync Settings
            </button>
            <button
              onClick={() => clearChat()}
              className="px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
            >
              Clear Chat History
            </button>
            <button
              onClick={() => setPanel(null)}
              className="px-3 py-1 bg-gray-400 text-white rounded text-xs hover:bg-gray-500"
            >
              Close
            </button>
          </div>

          <div className="mt-3">
            <div className="text-xs opacity-70 mb-1">Settings JSON</div>
            <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded text-[10px] overflow-x-auto">
{JSON.stringify(settings, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
