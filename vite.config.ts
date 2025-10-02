import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional: ensures consistent dev server port
    open: true, // auto-open browser on dev
  },
  build: {
    outDir: "dist",
    sourcemap: true, // helpful for debugging production builds
  },
  resolve: {
    alias: {
      "@": "/src", // lets you import with "@/components/..."
    },
  },
});
