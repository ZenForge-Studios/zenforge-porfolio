import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://zenforge-studios.com",
  integrations: [tailwind()],
});