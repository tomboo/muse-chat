# Muse Chat 2 – Backend Proxy

## Purpose
This backend provides a safe proxy between your frontend (Vite/React) and OpenAI's API.  
It avoids exposing your API key to the browser and solves the `net::ERR_CONNECTION_CLOSED` error.

## Files
- `server/server.ts` – Express server that proxies `/api/chat` to OpenAI
- `.env.example` – Example env file with `OPENAI_API_KEY`
- `README-Backend.md` – This guide

## Setup
1. Install dependencies:
   ```bash
   npm install express node-fetch dotenv
   ```

2. Copy `.env.example` to `.env` and add your key:
   ```env
   OPENAI_API_KEY=sk-xxxxxx
   ```

3. Run the server:
   ```bash
   npx ts-node server/server.ts
   ```

   Or compile with tsc and run with node.

4. In your frontend (`OpenAIProvider.ts`), keep using:
   ```ts
   const response = await fetch("/api/chat", { ... });
   ```

5. Ensure dev server proxies API calls to backend. If using Vite, add in `vite.config.ts`:
   ```ts
   server: {
     proxy: {
       "/api": "http://localhost:5000",
     },
   }
   ```

## Result
- Frontend calls `/api/chat`
- Express server proxies request to OpenAI
- Replies are returned safely

## Vite Proxy Setup

In your `vite.config.ts`, add a proxy so the frontend can call `/api` during development:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
```
