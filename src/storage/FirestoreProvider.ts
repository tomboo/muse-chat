import { StorageProvider } from "./StorageProvider";

// Safe stub for Firestore - replace with actual Firebase logic later
export class FirestoreProvider implements StorageProvider {
  async loadMessages(): Promise<any[]> {
    console.warn("FirestoreProvider.loadMessages called - using safe stub.");
    return [];
  }

  async saveMessage(message: any): Promise<void> {
    console.warn("FirestoreProvider.saveMessage called - using safe stub.", message);
  }
}
