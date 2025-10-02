import { StorageProvider } from "./StorageProvider";

const STORAGE_KEY = "chat_messages";

export class LocalStorageProvider implements StorageProvider {
  async loadMessages(): Promise<any[]> {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  async saveMessage(message: any): Promise<void> {
    const raw = localStorage.getItem(STORAGE_KEY);
    const messages = raw ? JSON.parse(raw) : [];
    messages.push(message);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }
}
