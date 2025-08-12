import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import tsconfigpaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "ChrisGuallpa",
  plugins: [react(), tailwindcss(), tsconfigpaths()],
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
