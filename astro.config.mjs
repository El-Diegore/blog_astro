import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://mi-blogcito-astro.netlify.app/",
  integrations: [preact()]
});