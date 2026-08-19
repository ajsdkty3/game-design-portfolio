# Erfei Zhou Game Design Portfolio

This repository contains a lightweight static portfolio site for Erfei Zhou's game design master's applications.

## Why This Version

The original template relied on an older Vue 2 toolchain that was unstable in the current local environment.

This project has been migrated to a dependency-light static site so it can:

- open directly in a browser
- run locally with `npm run serve`
- build reliably on modern Node versions
- deploy cleanly to GitHub Pages

## Main Files

- `index.html`: page structure
- `styles.css`: visual design and responsive layout
- `script.js`: portfolio data and modal behavior
- `public/`: future images, PDFs, and other static assets
- `tools/serve.mjs`: local preview server
- `tools/build.mjs`: build script for GitHub Pages

## Local Preview

Fastest option:

1. Open `index.html` directly in your browser.

Recommended option:

```powershell
npm run serve
```

Then visit:

```text
http://localhost:8080
```

## Build

```powershell
npm run build
```

This creates a production-ready `dist/` folder.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist/` automatically.

After pushing to `main`:

1. Open the GitHub repository.
2. Go to `Settings > Pages`.
3. Set the source to `GitHub Actions`.

Your public URL will usually be:

```text
https://your-github-username.github.io/repository-name/
```

## Content Workflow

When you are ready, send:

- real project titles
- screenshots
- video links
- role descriptions
- CV details
- contact links

I can then replace the placeholders directly in the site.
