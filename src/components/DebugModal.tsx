import React from "react";
import Modal from "./Modal";
import { useSettings } from "../context/SettingsContext";
import { useChat } from "../context/ChatContext";
import packageJson from "../../package.json";

const DebugModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { settings } = useSettings();
  const { messages, clearChat } = useChat();
  const version = packageJson.version;

  return (
    <Modal open={open} onClose={onClose} title="Debug Panel">
      <div className="space-y-2 text-xs">
        <div>Version: v{version}</div>
        <div>Messages: {messages.length}</div>
        <div className="pt-2 flex gap-2">
          <button onClick={clearChat} className="px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700">
            Clear Chat
          </button>
        </div>
        <div className="pt-2">
          <h4 className="font-semibold mb-1">Settings Snapshot:</h4>
          <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-[10px] overflow-x-auto">
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>
    </Modal>
  );
};

export default DebugModal;
