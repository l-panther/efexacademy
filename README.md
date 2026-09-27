# Efexacademy — Astro + Bootstrap rebuild

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs to /dist
```

## What's here

- **11 pages** matching every screenshot: Home, Roller Banners, Banner Stands, Pop-up Stands,
  Literature Stands, Exhibition Stands, Modular Stands, Stand Design, Large Format Print,
  Event Management, Contact — plus stub Privacy/Terms pages so the footer links resolve.
- **Bootstrap 5.3** (CDN) for grid, offcanvas, and form styling; **Bootstrap Icons** for the
  contact form's field icons.
- Shared chrome in `src/layouts/Layout.astro` + `src/components/`: `Sidebar.astro`,
  `Footer.astro`, `HeroArt.astro` (illustrated hero graphics), `GalleryThumb.astro`.

## Responsive sidebar (right-side, accessible)

The section nav (`Sidebar.astro`) uses Bootstrap's **responsive offcanvas** classes:
`offcanvas offcanvas-end offcanvas-lg`.

- At `lg` and above it renders as a normal static left column, exactly like the screenshots.
- Below `lg` it's hidden until a "Menu" button (in a bar above the hero) opens it — sliding in
  from the **right** as an overlay.
- The toggle button is a real `<button>` with `aria-controls`, `aria-expanded`, and
  `aria-label="Open section menu"`; Bootstrap keeps `aria-expanded` in sync automatically.
- Bootstrap's offcanvas JS handles the rest for free: focus trapping while open, **Escape** to
  close, and returning focus to the toggle button on close.

## Other accessibility notes

- Skip-to-content link at the top of every page (appears on first Tab press).
- Landmark structure (`<header>`, `<nav aria-label="Section navigation">`, `<main>`, `<footer>`).
- `aria-current="page"` on the active sidebar link.
- Contact form: every field has a real (visually-hidden) `<label>`, `aria-required` on required
  fields, and a live region (`aria-live="polite"`) that announces submission status.
- High-contrast visible focus ring on every interactive element for keyboard users.

## Content notes

- Hero and gallery images are illustrated (inline SVG via `HeroArt.astro` /
  `GalleryThumb.astro`) rather than the original product photography — this avoids depending on
  images I can't verify the licensing on. Swap either component's markup for a real `<img>` any
  time; the surrounding layout doesn't need to change.
- The contact form and the "Send Message" button don't submit anywhere yet — wire
  `src/pages/contact.astro`'s `<script>` up to your backend or a form service (Formspree,
  Resend, your own API route) when ready.
- Map on the Contact page uses a placeholder London coordinate — swap the `setView`/marker
  coordinates in `contact.astro` for your real office location.
