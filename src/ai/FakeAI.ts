import { AIProvider } from "./AIProvider";

export class FakeAI implements AIProvider {
  async sendMessage(message: string): Promise<string> {
    return Promise.resolve(`(fake AI reply) You said: ${message}`);
  }
}
