# Analog Attic (analogattic.com)

One-page static site (Astro) for Cloudflare Pages. Migrated from WordPress/Bricks.

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # output in dist/

- Page: `src/pages/index.astro`; details (title, description, Instagram, Google Analytics ID): `src/data/site.js`.
- Contact form and Instagram feed are Elfsight embeds (edit them in the Elfsight dashboard). The embed code is in `index.astro`.
- MP3s live in `public/audio/` (native `<audio>` players). Convert new photos with `scripts/optimize_images.py`.
