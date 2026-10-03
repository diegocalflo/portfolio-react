# Diego Calderón — Portfolio

Bilingual professional portfolio built with React, Vite, Framer Motion, i18next, and Tailwind CSS.

## Requirements

- Node.js 22.12 or newer
- npm 10 or newer

## Local development

```bash
npm ci
npm run dev
```

The development server is available at `http://localhost:5173/portfolio-react/`.

## Email form

Copy `.env.example` to `.env.local` and provide the public EmailJS identifiers:

```text
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

These identifiers are included in the browser bundle by design. Apply rate limits and origin restrictions in the EmailJS dashboard.

For GitHub Pages, create repository variables named `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY`.

## Verification

```bash
npm run lint
npm audit --omit=dev
npm run build
npm run preview
```

## Deployment

Pushes to `main` run lint, production dependency audit, build, and deployment through GitHub Actions. The production base path is `/portfolio-react/` and the generated output is `dist/`.
