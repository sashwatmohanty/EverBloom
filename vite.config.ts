import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const __dirname = import.meta.dirname

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@contracts": path.resolve(__dirname, "./contracts"),
      "@db": path.resolve(__dirname, "./db"),
      "db": path.resolve(__dirname, "./db"),
    },
  },
  envDir: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
