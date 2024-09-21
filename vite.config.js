import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Alias '@' to 'src'
    },
  },
  build: {
    rollupOptions: {
      external: [
        'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css',  // External CSS for Leaflet compatibility
      ],
    },
  },
});
