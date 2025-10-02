export async function fetchBotReply(
  messages: { role: string; content: string }[],
  onToken: (token: string) => void
) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages,
      stream: true,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OpenAI error ${res.status}: ${errText}`);
  }
  if (!res.body) throw new Error("No response body");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    if (readerDone) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      if (line.startsWith("data: ")) {
        const data = line.replace("data: ", "").trim();
        if (data === "[DONE]") {
          done = true;
          break;
        }
        try {
          const json = JSON.parse(data);
          const token = json.choices[0]?.delta?.content;
          if (token) onToken(token);
        } catch (err) {
          console.error("Error parsing stream line:", err, line);
        }
      }
    }
  }
}
