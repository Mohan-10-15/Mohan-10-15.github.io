import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // The repository is Mohan-10-15.github.io,
  // so the website is deployed at the root URL.
  base: "/",

  server: {
    port: 5173,
    open: true
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false
  }
});