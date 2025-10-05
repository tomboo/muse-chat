// /src/services/firestore.ts
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface RemoteSettings {
  theme: string;
  model: string;
  storage: string;
}

/**
 * Load user settings from Firestore.
 * Falls back to defaults if document doesn't exist.
 */
export async function loadSettings(userId = "demo"): Promise<RemoteSettings> {
  const ref = doc(db, "users", userId, "config", "settings");
  const snap = await getDoc(ref);
  if (snap.exists()) {
    return snap.data() as RemoteSettings;
  } else {
    return { theme: "system", model: "mock", storage: "local" };
  }
}

/**
 * Save user settings to Firestore.
 */
export async function saveSettings(
  settings: RemoteSettings,
  userId = "demo"
): Promise<void> {
  const ref = doc(db, "users", userId, "config", "settings");
  await setDoc(ref, settings, { merge: true });
}
