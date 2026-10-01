# AGENTS.md

## Project Purpose

A portfolio website for children's book illustrator Anastasiia Marchenko, adapted from [rockem/astro-photography-portfolio](https://github.com/rockem/astro-photography-portfolio). The site is built with Astro and Tailwind CSS to showcase children's book illustrations, character art, book covers, and spreads with high performance, clean responsiveness, and minimal client-side overhead.

---

## Architecture & Key Files

### Configuration

- `astro.config.mts`: Astro configuration file defining the base path (`Marchenko-Anastasiia-art-portfolio`), site URL, and Vite integration with `@tailwindcss/vite`.
- `site.config.mts`: Site-wide metadata, owner details, favicon, profile image path, and social media links (Behance, Instagram).
- `tsconfig.json`: TypeScript configuration extending `astro/tsconfigs/strict`.
- `tailwind.config.js`: Tailwind configuration integrated with Astro and `@tailwindcss/vite`.

### Gallery Data & Content

- `src/gallery/gallery.yaml`: Central manifest specifying gallery collections/albums and image entries (relative paths, titles, descriptions, collection tags, and EXIF/metadata).
- `src/content/about.md`: Markdown source for the artist's biography and statement rendered on the `/about` page.
- `src/data/galleryData.ts`: TypeScript interfaces (`GalleryData`, `Collection`, `GalleryImage`, `Image`) and YAML parsing utilities.
- `src/data/imageStore.ts`: Image querying and collection filtering logic; loads images via `import.meta.glob('/src/**/*.{jpg,jpeg,png,gif}')`.
- `src/data/gallery-generator.ts`: CLI script to scan artwork directories, extract metadata/EXIF, and update `src/gallery/gallery.yaml`.

### Image Assets

- `src/gallery/<collection>/*.jpg`: Gallery artwork files organized into collection subdirectories (e.g., `nature/`, `travel/`, `street/`).
- `public/`: Static files served directly at the root (favicon, profile avatar, etc.).

### Layouts & Pages

- `src/layouts/MainLayout.astro`: Base HTML layout with global head tags, metadata, navbar, main slot, and footer.
- `src/pages/index.astro`: Homepage featuring hero introduction, featured works slider, and highlight gallery.
- `src/pages/about.astro`: About page rendering illustrator bio from `src/content/about.md`.
- `src/pages/collections/[...collection].astro`: Dynamic collection route providing category filtering and the image grid.

### Components & Scripts

- `src/components/PhotoGrid.astro`: Grid container that renders images and loads GLightbox and layout scripts.
- `src/components/FeaturedGallery.astro`: Highlighted gallery section for top artwork.
- `src/components/FeaturedWorkScroll.astro`: Horizontal scroll showcase for featured illustrations.
- `src/components/LandingHero-1.astro` & `LandingHero-2.astro`: Hero sections for the landing page.
- `src/components/NavBar.astro` & `Footer.astro`: Navigation header and footer with social links.
- `src/components/*Icon.astro`: Vector icons for social platforms (Behance, Instagram).
- `src/scripts/photo-grid.ts`: Client-side script computing justified layout coordinates via `justified-layout` and initializing `GLightbox`.
- `src/styles/global.css`: Global styles and Tailwind imports.
- `src/styles/glightbox-custom.css`: Lightbox modal styling overrides.

---

## Commands

Exact npm scripts available in `package.json`:

| Command               | Action                                                                              |
| --------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`         | Starts local Astro development server at `http://localhost:4321`                    |
| `npm run build`       | Compiles static production build into `dist/`                                       |
| `npm run preview`     | Previews the production build locally                                               |
| `npm run lint`        | Runs ESLint check across `.ts`, `.js`, and `.astro` files                           |
| `npm test`            | Runs unit test suite using Vitest                                                   |
| `npm run prettier`    | Formats code with Prettier (`prettier . --write`)                                   |
| `npm run generate`    | Runs gallery generator script (`npx tsx src/data/gallery-generator.ts src/gallery`) |
| `npm run astro check` | Type and component checking (requires `@astrojs/check` installed)                   |

---

## Guardrails

1. **Framework & Styling**:

   - Use native `.astro` components and Tailwind CSS utility classes only.
   - Do not introduce React, Vue, Svelte, or other client-side UI frameworks unless explicitly requested.

2. **Client-Side JavaScript**:

   - Keep client-side JS minimal. Most markup and styles must be server-rendered at build time.
   - Client scripts should be reserved strictly for essential interactive features (e.g., `src/scripts/photo-grid.ts` for dynamic justified layout calculations and GLightbox zoom functionality).

3. **Children's Book Illustration Aspect Ratios**:
   - Layouts and grid displays must cleanly support both vertical book covers (tall portrait orientation) and wide double-page spreads (panoramic landscape orientation).
   - Never crop, distort, or clip illustrations unintentionally. Use proper aspect-ratio handling (`object-contain` / `object-cover` where appropriate) and provide full uncropped views in the lightbox modal.
