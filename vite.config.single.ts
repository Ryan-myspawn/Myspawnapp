import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Single-bundle build used to assemble the self-contained preview artifact.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-single",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
      },
    },
  },
});
