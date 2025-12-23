# Sorry Main

A playful apology experience built with React and Tailwind CSS. It combines heartfelt messaging, interactive gadgets, and animated visuals to help you say "sorry" in style.

## Features
- Hero section with animated heart interaction
- Apology message builder with responsive layout
- Gadget gallery and memory cards for customizable content
- Toast notifications and reusable UI primitives powered by Radix

## Tech Stack
- React 19 and React Router
- Tailwind CSS, PostCSS, and CRACO
- Radix UI components with shadcn/ui patterns
- Axios, Zod, and React Hook Form utilities

## Prerequisites
- Node.js 18 or newer (check with `node --version`)
- npm 9+ or Yarn 1.22 (project scripts assume npm)
- Modern browser for local testing (Chrome, Firefox, Safari)

## Local Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Run tests before deploying:
   ```bash
   npm test
   ```

## Production Build & Verification
1. Create an optimized build:
   ```bash
   npm run build
   ```
2. Preview the build locally (optional but recommended):
   ```bash
   npx serve -s build
   ```
3. Open the provided local URL and sanity-check responsive layouts, form flows, and interactive widgets.

## Deployment Options
- **Static hosting (Netlify, Vercel, Surge, S3):** Deploy the `frontend/build` directory as static assets. Most platforms auto-detect React and run the build command above during CI.
- **GitHub Pages:** Add a deployment workflow or use `gh-pages` to publish the `build` directory to a dedicated branch, then serve via GitHub Pages settings.
- **Custom infrastructure:** Serve the `build` output behind any CDN or server that can host static files.

## Project Structure
- `frontend/src/components` custom sections and UI primitives
- `frontend/src/pages` top-level page layouts
- `frontend/src/hooks` shared React hooks
- `frontend/src/lib` utility helpers

## Environment Variables
At the moment no environment variables are required. If you later add APIs, create `.env` files (for example `.env.production`) and reference them via `process.env.YOUR_KEY` so the build system can inline them.

## License
Released under the MIT License.
