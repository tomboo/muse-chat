import React from "react";

interface ThemeSelectorProps {
  theme: "light" | "dark" | "system";
  setTheme: (value: "light" | "dark" | "system") => void;
}

export default function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as "light" | "dark" | "system")}
      className="border rounded p-1 text-xs bg-white text-gray-800 dark:bg-gray-700 dark:text-white"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}
