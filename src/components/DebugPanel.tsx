import { useMode } from "../context/ModeContext";
import { APP_VERSION } from "../version";

export function DebugPanel() {
  const { aiMode, storageMode } = useMode();

  return (
    <div className="bg-gray-100 text-gray-700 p-2 text-xs border-t">
      <div>AI Mode: {aiMode}</div>
      <div>Storage Mode: {storageMode}</div>
      <div>Version: {APP_VERSION}</div>
      <div>Last change: {new Date().toLocaleTimeString()}</div>
    </div>
  );
}
