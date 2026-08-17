# Fedorov Tea

A bilingual premium Ivan Tea storefront built with Next.js 16, React 19, and TypeScript. The product story centers on hand collection in the Mari El Republic, with retail, gifting, and wholesale paths.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site redirects to English at `/en`; Russian is available at `/ru`.

## Routes

- `/en` and `/ru` — localized editorial commerce homepages
- `/[locale]/shop` — filterable and sortable Ivan Tea catalog
- `/[locale]/collections/[slug]` — localized collections
- `/[locale]/products/[slug]` — product details and purchasing
- `/[locale]/blog` and `/[locale]/blog/[slug]` — evidence-minded articles and recipes
- `/[locale]/gifts` — premium Mari El gift set
- `/[locale]/wholesale` — B2B, distribution, bulk, and corporate gifting
- `/[locale]/search`, `/about`, `/account`, `/cart`, and `/legal`

The local catalog, navigation, articles, recipes, and testimonials live in `src/data`. Cart state persists in local storage.

## Original Fedorov imagery

The seven images in `public/images/fedorov` were created with the built-in image generation tool specifically for this project. They cover Mari El fireweed fields, hand collection, processing and drying, the compact product canister, a cold Ivan Tea recipe, the regional landscape, and an original fitted gift set.
