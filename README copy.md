# Vehicle Computing Lab — Astro edition

This source package reproduces the Vehicle Computing Lab showcase in Astro and
is configured for `https://roboworld314.github.io/VC_Lab/`. Each page section
is maintained as a separate file under `src/components`, while
`src/pages/index.astro` only imports and arranges those components.

Copy `src`, `public`, `.github`, and `astro.config.mjs` into the repository root.
Keep the repository's existing `package.json` and lockfile, then run:

```bash
npm install
npm run build
git add .
git commit -m "Redesign Vehicle Computing Lab website"
git push
```

In GitHub, set **Settings → Pages → Source** to **GitHub Actions**.
