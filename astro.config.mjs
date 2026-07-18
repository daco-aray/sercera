import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: process.env.SITE ?? "https://atelier-ko-topaz.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [sitemap()],
});
