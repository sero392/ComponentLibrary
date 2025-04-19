import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), 
      name: "MsComponentLibrary",
      fileName: (format) => `ms-component-library.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Gereksiz bağımlılıkları kaldırdık
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});