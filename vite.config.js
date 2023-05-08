import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Alan-Graton/Portifolio-V2",
  plugins: [react()],
});
