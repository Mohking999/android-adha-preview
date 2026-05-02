# UI App Presentation

React + TypeScript presentation app for your UI screenshots and demo video.

This preview highlights a Kotlin-built Android app interface for developers, QA teams, and enterprise stakeholders.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the build locally:
   ```bash
   npm run preview
   ```

## GitHub Deployment

This project is configured to build with Vite and use relative paths for deployment.

- To preview locally after building:
  ```bash
  npm run preview
  ```
- To deploy with GitHub Pages to the `android-adha-preview` repository:
  ```bash
  npm run deploy
  ```

> Note: This uses the `kotlin` git remote, so the repository must be added as a remote named `kotlin`.
> If your remote is named differently, update the deploy script in `package.json`.
