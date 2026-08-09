# Alder & Hearth

A complete, data-driven premium tea storefront built with Next.js 16, React 19, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — editorial commerce homepage
- `/shop` — filterable and sortable catalog
- `/collections/[slug]` — category commerce with educational content
- `/products/[slug]` — gallery, variants, subscription, and add-to-cart
- `/search` — cross-merchandise search
- `/blog` and `/blog/[slug]` — educational journal
- `/about`, `/gifts`, `/account`, `/cart`

The local mock catalog, navigation, collections, journal, and testimonials live in `src/data`. Cart state persists in local storage.

## Original campaign asset

`public/images/alder-hearth-hero.png` was created with the built-in image generation tool for this project. Final prompt summary: an original Alder & Hearth forest-green tea tin, handmade cream cup, stone fruit, bergamot, jasmine, loose tea, natural linen, and warm morning light in a wide editorial still life; product weighted right with negative space left; no resemblance to existing tea branding, no watermark, and no stock-photo or CGI styling.
