import { useState, useEffect } from "react";

/**
 * Syncs a state value with localStorage.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // ignore write errors (e.g., storage quota exceeded)
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
