import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works when hosted at a GitHub Pages
  // project URL like https://<user>.github.io/<repo>/
  base: "./",
});
