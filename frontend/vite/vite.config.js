import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add your alias configurations here
      "@services": "/src/Services",
      "@components": "/src/Components",
      // Add more aliases as needed
    },
  },
});
