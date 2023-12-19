import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://mendozalz.vercel.app/",
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: {
      applyBaseStyles: false
    }
  }), 
  sitemap(),
  partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),
  react(),
],
  output: 'server',
  adapter: vercel()
});