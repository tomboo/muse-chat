export interface StorageProvider {
  loadMessages(): Promise<any[]>;
  saveMessage(message: any): Promise<void>;
}
