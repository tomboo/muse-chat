import { AIProvider } from "./AIProvider";

// Safe stub: replace implementation with real OpenAI streaming when ready.
export class OpenAIProvider implements AIProvider {
  async sendMessage(message: string): Promise<string> {
    console.warn("OpenAIProvider.sendMessage called - using safe stub.");
    return Promise.resolve(`(real AI stub reply) Echo: ${message}`);
  }
}
