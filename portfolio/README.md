# Bukke Ganesh Naik — Portfolio

A dark, futuristic, animated developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
npm run preview   # optional, to test the production build locally
```

The production-ready files will be in the `dist/` folder — upload that folder's
contents to any static host (Vercel, Netlify, GitHub Pages, etc).

## Project structure

```
src/
  App.jsx                 → assembles all sections
  index.css                → Tailwind + global animation styles
  assets/profile.jpg       → your profile photo
  components/
    Loader.jsx             → boot-sequence loading animation
    BackgroundCanvas.jsx   → animated circuit-node background
    CursorGlow.jsx         → mouse-following glow effect
    Reveal.jsx             → scroll-reveal wrapper (Framer Motion)
    Eyebrow.jsx            → small section label
    Navbar.jsx             → sticky navbar + mobile menu
    Hero.jsx               → hero section (photo, typed subtitle, tags)
    About.jsx
    Education.jsx          → animated vertical timeline
    Skills.jsx
    Projects.jsx            → SkillGap AI feature card with 3D tilt
    Certifications.jsx
    Strengths.jsx           → strengths, soft skills, languages
    Contact.jsx
    Footer.jsx
public/
  Ganesh_Naik_Resume.docx  → linked from the "Download Resume" buttons
```

## Notes

- **Resume**: the "Download Resume" buttons link to `/Ganesh_Naik_Resume.docx` in
  `public/`. Replace that file any time — the link doesn't need to change.
- **GitHub / LinkedIn links**: already set to
  `https://github.com/bukkeganeshnaik224-eng` and
  `https://www.linkedin.com/in/ganesh-naik-bukke-584909315/`. Update them in
  `Projects.jsx` and `Contact.jsx` if they ever change.
- **Colors, fonts, spacing**: all defined as design tokens in `tailwind.config.js`
  (`cyan`, `violet`, `green`, `bg`, `panel`, plus the `display` / `body` / `mono`
  font families) so the whole palette can be restyled from one place.
- A few utility classes in the JSX use inline `style={{...}}` alongside Tailwind
  classes for exact pixel values (e.g. icon sizes, card padding) — this is
  intentional, not a mistake, since those values sit outside Tailwind's default
  spacing scale.
- Reduced-motion is respected globally via a `prefers-reduced-motion` media query
  in `index.css`.

## A companion standalone preview

Alongside this project you were also given a single self-contained HTML file
(`portfolio-preview.html`) with the same design, built with vanilla JS/CSS —
useful for a quick look without running a dev server. The real project here is
the one to build on and deploy.
