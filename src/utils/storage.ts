export function getSetting<T>(key: string, defaultValue: T): T {
  const stored = localStorage.getItem(key);
  if (!stored) return defaultValue;

  try {
    return JSON.parse(stored);
  } catch {
    return stored as unknown as T;
  }
}

export function setSetting<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.warn(`Failed to store setting '${key}'`, value);
  }
}
