# Mohanakrishnan C — Cyber Security Portfolio

Industrial-level portfolio website for Mohanakrishnan C, a Cyber Security
Engineering student. Built with React, Vite, GSAP and Framer Motion, featuring
a modern dark security engineering theme.

## Features

- **High-performance code splitting** — every route and library chunk is
  lazy-loaded, keeping the initial bundle small (React, GSAP, Motion and icons
  are split into independent chunks).
- **Smooth scrolling & motion** — Lenis smooth scrolling, GSAP scroll-triggered
  animations and Framer Motion page transitions.
- **Engineered content sections** — animated stat counters, a skills matrix with
  proficiency bars, featured projects, education timeline, resume, certifications,
  technical blog and event reports.
- **SEO & metadata** — structured data (JSON-LD), Open Graph, Twitter cards,
  canonical URL, preconnects and semantic HTML.
- **Resilient asset handling** — graceful fallbacks for missing images and files.
- **Responsive** — fully responsive across mobile, tablet and desktop.

## Tech Stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8
- [React Router](https://reactrouter.com) 7
- [GSAP](https://greensock.com/gsap) + ScrollTrigger
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.darkroom.engineering/)
- [Lucide Icons](https://lucide.dev)

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Run the linter
npm run lint
```

## Project Structure

```
├── index.html                  # SEO, metadata, structured data
├── vite.config.js              # Build config, manual chunking
├── public/                     # Static assets (images, PDFs, favicon)
└── src/
    ├── App.jsx                 # Routes with lazy loading
    ├── main.jsx
    ├── components/             # Layout, home and common components
    ├── data/                   # Content: projects, skills, blog, events, etc.
    ├── hooks/                  # Custom hooks (e.g. useLenis)
    ├── pages/                  # Route-level pages
    ├── styles/global.css       # Design system
    └── utils/                  # Helpers (asset path)
```

## Add Content

Most content lives in `src/data/`:

- `projectsData.js` — flagship security projects
- `skillsData.js` — skill categories with proficiency levels
- `blogData.js` — technical articles (rendered on the blog detail pages)
- `eventsData.js` — workshops and events
- `certificatesData.js` — completed certifications
- `personalData.js` — profile, education, social links, navigation
- `statsData.js` — animated stats on the home page

## Deployment

The project deploys to GitHub Pages via the workflow in
`.github/workflows/deploy.yml`. The production base URL is configured in
`vite.config.js`.

© Mohanakrishnan C. All rights reserved.
