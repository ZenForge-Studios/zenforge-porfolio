import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import icon from "astro-icon";

export default defineConfig({
  site: "https://zenforge-studios.com",
  integrations: [
    tailwind(),
    react(),
    icon(), // 👈 Añadido correctamente aquí
  ],
  build: {
    assets: "dist",
    publicDir: "public", // ✅ Asegura que los archivos dentro de /public sean accesibles en producción
  }
});