# Hazel & Rye

Wedding photography portfolio site. Vite + React + Tailwind CSS.

## Structure

```
src/
  components/
    ui/
      Asterisk.jsx      brand-mark icon, reused everywhere
      CtaLink.jsx        italic serif "* Explore Portfolio"-style link
    Nav.jsx
    Hero.jsx
    Intro.jsx
    Philosophy.jsx
    GalleryCard.jsx      single portfolio item, used by Portfolio
    Portfolio.jsx
    Collections.jsx
    Testimonials.jsx
    ContactForm.jsx
    Footer.jsx
  data/
    weddings.js          portfolio entries
    collections.js       pricing/package tiers
    testimonials.js      couple quotes
  App.jsx                composes all sections in order
  main.jsx               React entry point
  index.css              Tailwind directives
```

Colors, fonts, and other design tokens live in `tailwind.config.js` rather
than being hardcoded in components — change the palette or typefaces there
and it updates everywhere.

## Setup

```bash
npm install
npm run dev
```

Open the printed localhost URL. `npm run build` outputs a static `dist/`
folder ready to deploy anywhere (Netlify, Vercel, etc).

## Before going live

- Swap the `picsum.photos` placeholder image URLs (in `Hero.jsx`,
  `Intro.jsx`, `GalleryCard.jsx` via `data/weddings.js`, and `Footer.jsx`)
  for real photography.
- Wire `ContactForm.jsx`'s `handleSubmit` up to an actual email/CRM
  endpoint — it currently just flips local state.
- Update social links in `Footer.jsx`.
