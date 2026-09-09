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
    sourcemap: false,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("framer-motion") ||
              id.includes("motion")
            ) {
              return "motion";
            }

            if (id.includes("gsap")) {
              return "gsap";
            }

            if (id.includes("react")) {
              return "react";
            }

            if (id.includes("lucide-react")) {
              return "icons";
            }

            return "vendor";
          }

          return undefined;
        }
      }
    }
  }
});