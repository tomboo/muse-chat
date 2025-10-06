import React from "react";
import Modal from "./Modal";
import { useProfile } from "../context/ProfileContext";

const ProfileModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { profile, updateField, saveProfile, clearProfile } = useProfile();

  return (
    <Modal open={open} onClose={onClose} title="Profile">
      <div className="space-y-3 text-sm">
        <div>
          <label className="block mb-1 opacity-70">Name</label>
          <input
            value={profile.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full border rounded p-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 opacity-70">Email</label>
          <input
            value={profile.email || ""}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full border rounded p-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 opacity-70">Avatar (emoji or URL)</label>
          <input
            value={profile.avatar || ""}
            onChange={(e) => updateField("avatar", e.target.value)}
            className="w-full border rounded p-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 opacity-70">Bio</label>
          <textarea
            value={profile.bio || ""}
            onChange={(e) => updateField("bio", e.target.value)}
            rows={3}
            className="w-full border rounded p-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
        <div className="flex gap-2 pt-2">
          <button onClick={saveProfile} className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">Save</button>
          <button onClick={clearProfile} className="px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700">Clear</button>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
