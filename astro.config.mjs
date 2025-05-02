import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://zenforge-studios.com",
  integrations: [tailwind()],
  build: {
    assets: "dist",
    publicDir: "public" // ✅ Asegura que los archivos dentro de /public sean accesibles en producción
  }
});