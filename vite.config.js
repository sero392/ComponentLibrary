import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from "node:path"; // node:path kullanarak path modülünü import et

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "MsComponentLibrary",
      fileName: (format) => `ms-component-library.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react"
        , "react-dom"
        , 'main.jsx'

      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
