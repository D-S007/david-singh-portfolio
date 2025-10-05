import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Use root base for Vercel, repo name for GitHub Pages
  const isVercel = process.env.VERCEL === "1" || process.env.VERCEL_ENV;
  return {
    base: isVercel ? "/" : `/${env.VITE_REPO_NAME}/`,
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: false,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});