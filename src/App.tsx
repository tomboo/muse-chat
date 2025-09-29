import React, { useState, useEffect, useRef, ComponentPropsWithoutRef } from "react";
import { useChat } from "./context/ChatContext";
import ThemeToggle from "./components/ThemeToggle";
import { ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const App: React.FC = () => {
  const { messages, sendMessage, botTyping } = useChat();
  const [input, setInput] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSend = async () => {
    if (input.trim() === "") return;
    await sendMessage(input, "user");
    setInput("");
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  useEffect(() => {
    const chatEl = chatWindowRef.current;
    if (!chatEl) return;

    const threshold = 50;
    const atBottom =
      chatEl.scrollHeight - chatEl.scrollTop - chatEl.clientHeight < threshold;

    if (atBottom) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setHasNewMessages(false);
    } else {
      setHasNewMessages(true);
    }
  }, [messages]);

  useEffect(() => {
    const chatEl = chatWindowRef.current;
    if (!chatEl) return;

    const handleScroll = () => {
      const threshold = 100;
      const atBottom =
        chatEl.scrollHeight - chatEl.scrollTop - chatEl.clientHeight < threshold;
      setShowScrollButton(!atBottom);
      if (atBottom) setHasNewMessages(false);
    };

    chatEl.addEventListener("scroll", handleScroll);
    return () => chatEl.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setHasNewMessages(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full h-[100vh] sm:h-[90vh] sm:max-w-md sm:rounded-2xl sm:shadow-lg p-4 relative flex flex-col bg-white dark:bg-gray-800">
        <div className="hidden sm:flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            muse-chat2
          </h1>
        </div>

        {/* Chat Window */}
        <div
          ref={chatWindowRef}
          className="flex-1 overflow-y-auto border border-gray-300 dark:border-gray-700 rounded-lg p-2 mb-2 bg-gray-50 dark:bg-gray-700 relative"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`my-1 p-2 rounded-lg max-w-[75%] ${
                msg.sender === "user"
                  ? "ml-auto bg-blue-500 text-white"
                  : "mr-auto bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100"
              }`}
            >
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({
                      inline,
                      className,
                      children,
                      ...props
                    }: ComponentPropsWithoutRef<"code"> & { inline?: boolean }) {
                      const match = /language-(\w+)/.exec(className || "");
                      const codeString = String(children).replace(/\n$/, "");
                      const [copied, setCopied] = React.useState(false);

                      if (!inline && match) {
                        return (
                          <div className="relative group">
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(codeString);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 1500);
                              }}
                              className="absolute top-2 right-2 text-xs px-2 py-1 rounded bg-gray-700 text-white opacity-70 hover:opacity-100"
                            >
                              {copied ? "Copied!" : "Copy"}
                            </button>
                            <SyntaxHighlighter
                              style={oneDark}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {codeString}
                            </SyntaxHighlighter>
                          </div>
                        );
                      } else {
                        return (
                          <code
                            className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
                            {...props}
                          >
                            {children}
                          </code>
                        );
                      }
                    },
                  }}
                >
                  {msg.text}
                </ReactMarkdown>
              </div>
              <span className="text-xs opacity-70 block">
                {msg.timestamp
                  ? msg.timestamp.toDate().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "…"}
              </span>
            </div>
          ))}
          {botTyping && (
            <div className="italic text-sm text-gray-500 dark:text-gray-400">
              Bot is typing…
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="flex space-x-2 sticky bottom-0 bg-white dark:bg-gray-800 pt-2 pb-[env(safe-area-inset-bottom)]">
          <textarea
            ref={textareaRef}
            className="flex-1 resize-none px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none 
                       max-h-40 overflow-y-auto"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            rows={1}
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>

        {/* FAB Cluster */}
        <div className="fixed bottom-20 right-4 z-50">
          <div
            className="flex flex-col space-y-3 p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                       border border-gray-200 dark:border-gray-700 transform transition-all duration-500 
                       translate-y-6 opacity-0 animate-fab-in"
          >
            <div className="relative">
              <button
                onClick={scrollToBottom}
                className={`p-2 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all duration-300
                ${showScrollButton ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
              >
                <ChevronDown className="w-5 h-5" />
              </button>
              {showScrollButton && hasNewMessages && (
                <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-red-500 border-2 border-white dark:border-gray-800" />
              )}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
