import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://alan-graton.github.io/Portifolio-V2/",
  plugins: [react()],
});
