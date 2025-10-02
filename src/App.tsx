import { ModeProvider } from "./context/ModeContext";
import { ChatProvider } from "./context/ChatContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ModeToggle } from "./components/ModeToggle";
import { Chat } from "./components/Chat";
import { DebugPanel } from "./components/DebugPanel";
import { APP_VERSION } from "./version";

function App() {
  return (
    <ModeProvider>
      <ErrorBoundary>
        <ChatProvider>
          <div className="flex flex-col h-screen">
            <ModeToggle />
            <Chat />
            <DebugPanel />
            <footer className="text-center text-xs text-gray-500 p-2 border-t">
              muse-chat {APP_VERSION} ·{" "}
              <a
                href="https://github.com/tomboo/muse-chat"
                target="_blank"
                className="underline"
              >
                GitHub
              </a>
            </footer>
          </div>
        </ChatProvider>
      </ErrorBoundary>
    </ModeProvider>
  );
}

export default App;
