import React from "react";

interface StorageSelectorProps {
  storage: "local" | "firestore" | "supabase";
  setStorage: (value: "local" | "firestore" | "supabase") => void;
}

export default function StorageSelector({ storage, setStorage }: StorageSelectorProps) {
  return (
    <select
      value={storage}
      onChange={(e) => setStorage(e.target.value as "local" | "firestore" | "supabase")}
      className="border rounded p-1 text-xs bg-white text-gray-800 dark:bg-gray-700 dark:text-white"
    >
      <option value="local">Local</option>
      <option value="firestore">Firestore</option>
      <option value="supabase">Supabase</option>
    </select>
  );
}
