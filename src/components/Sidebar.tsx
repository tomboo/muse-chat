import React, { useState, useMemo } from "react";
import { Menu, X, User, MessageSquare, Settings as SettingsIcon, Wrench, Cloud, BarChart3 } from "lucide-react";
import ProfileModal from "./ProfileModal";
import SettingsModal from "./SettingsModal";
import DebugModal from "./DebugModal";
import PlaceholderModal from "./PlaceholderModal";

type DialogType = "profile" | "settings" | "debug" | "history" | "cloud" | "analytics" | null;

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeDialog, setActiveDialog] = useState<DialogType>(null);

  const widthClass = useMemo(() => (open ? "w-64" : "w-16"), [open]);
  const toggle = () => setOpen((o) => !o);
  const closeDialog = () => setActiveDialog(null);

  const NavItem: React.FC<{
    icon: React.ReactElement;
    label: string;
    onClick: () => void;
    active?: boolean;
  }> = ({ icon, label, onClick, active }) => (
    <button
      onClick={onClick}
      title={label}
      className={`flex items-center w-full rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 ${
        open ? "justify-start gap-2" : "justify-center"
      } ${active ? "bg-gray-200 dark:bg-gray-700" : ""}`}
    >
      {React.cloneElement(icon, { size: open ? 18 : 24, className: "opacity-80" })}
      {open && <span className="text-sm">{label}</span>}
    </button>
  );

  return (
    <>
      <aside
        className={`h-screen ${widthClass} bg-gray-100 dark:bg-gray-800 border-r dark:border-gray-700 transition-all duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className={`flex items-center ${open ? "justify-between px-2" : "justify-center"} py-2`}>
          <button
            onClick={toggle}
            className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          >
            {open ? <X size={18} className="opacity-80" /> : <Menu size={22} className="opacity-80" />}
          </button>
          {open && <span className="text-xs opacity-60 pr-1">Muse</span>}
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 px-1">
          <NavItem icon={<User />} label="Profile" onClick={() => setActiveDialog("profile")} active={activeDialog==="profile"} />
          <NavItem icon={<MessageSquare />} label="History" onClick={() => setActiveDialog("history")} active={activeDialog==="history"} />
          <NavItem icon={<SettingsIcon />} label="Settings" onClick={() => setActiveDialog("settings")} active={activeDialog==="settings"} />
          <NavItem icon={<Wrench />} label="Debug" onClick={() => setActiveDialog("debug")} active={activeDialog==="debug"} />
          <NavItem icon={<Cloud />} label="Cloud Sync" onClick={() => setActiveDialog("cloud")} active={activeDialog==="cloud"} />
          <NavItem icon={<BarChart3 />} label="Analytics" onClick={() => setActiveDialog("analytics")} active={activeDialog==="analytics"} />
        </nav>
      </aside>

      {/* Modals */}
      <ProfileModal open={activeDialog === "profile"} onClose={closeDialog} />
      <SettingsModal open={activeDialog === "settings"} onClose={closeDialog} />
      <DebugModal open={activeDialog === "debug"} onClose={closeDialog} />
      <PlaceholderModal open={activeDialog === "history"} onClose={closeDialog} title="Chat History" />
      <PlaceholderModal open={activeDialog === "cloud"} onClose={closeDialog} title="Cloud Sync" />
      <PlaceholderModal open={activeDialog === "analytics"} onClose={closeDialog} title="Analytics" />
    </>
  );
};

export default Sidebar;
