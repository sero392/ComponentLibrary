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
      //https://stackoverflow.com/questions/66194269/typeerror-cannot-read-propertyreactcurrentdispatcherof-undefined
      external: ["react", "react-dom", "react/jsx-runtime"], // Gereksiz bağımlılıkları kaldırdık
      output: {
        globals: {
          'react-dom': 'ReactDom',
          'react': 'React',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
      },
    },
  },
});