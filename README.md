# the windows guide

An approachable, reversible-first guide to a clean, fast, and dependable Windows PC.

This Docusaurus site covers backups, official Windows installation media, drivers, practical low-risk optimization, and ongoing maintenance.

---

## features

- Step-by-step, safety-minded Windows guides.
- A sidebar-first documentation layout powered by Docusaurus.
- Automatic GitHub Pages deployment after each push to `main`.

## local development

```powershell
npm ci
npm start
```

Run `npm run build` to create a production build locally.

## publishing

The GitHub Actions workflow in `.github/workflows/deploy.yml` publishes the site. In the repository's **Settings → Pages**, set the source to **GitHub Actions** once. The public site is available at:

https://sebyaka864.github.io/windows-guide/

---
