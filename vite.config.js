import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Vite prefers an explicit array of allowed hostnames or suffixes
    allowedHosts: ['.loca.lt'],
  }
});
