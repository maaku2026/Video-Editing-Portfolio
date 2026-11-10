# Maaku — DTC Video Editor Portfolio

Dark, cinematic single-page portfolio built with Vite, React, TypeScript and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Edit content

- **Copy, projects, services, packages, FAQ:** `src/lib/data.ts`
- **Hero, about, contact, footer:** `src/components/`
- **Colours, type, layout:** `src/styles/global.css`
- **Page title and meta:** `index.html`

Project stills and the showreel currently use placeholder images from `picsum.photos`
(see the `still()` helper in `src/lib/data.ts`). Swap in real footage or hosted video
frames before publishing.
