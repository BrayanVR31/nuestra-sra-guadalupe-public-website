// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://www.parroquianuestrasraguadalupe.org.mx",
  integrations: [react(), icon(), sitemap()],
  adapter: vercel(),
  image: {
    domains: ["res.cloudinary.com"],
  },
});
