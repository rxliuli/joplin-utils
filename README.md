# TypeScript React Chrome Extension Boilerplate

A basic TypeScript React Chrome Extension boilerplate that gets you started quickly. It supports TypeScript, [ESM compatible React](https://medium.com/@joeldenning/an-esm-bundle-for-any-npm-package-5f850db0e04d) and automatic reloading during development. Jest, ESLint and Prettier included, all bundled using [Rollup](https://rollupjs.org/guide/en/).

## Get Started

Type this into your terminal:

```sh
git clone https://github.com/extend-chrome/js-react-boilerplate.git my-chrome-extension
cd my-chrome-extension
npm install
```

### Development

For development with automatic reloading:

```sh
npm run start
```

Open the [Extensions Dashboard](chrome://extensions), enable "Developer mode", click "Load unpacked", and choose the `dist` folder.

### Production

When it's time to publish your Chrome make a production build. Run the following line:

```sh
npm run build
```

This will create a ZIP file with your package name and version in the `releases`
folder.

## Source Layout

Your manifest is at `src/manifest.json`, and Rollup will bundle any files you
include here. All the filepaths in your manifest should point to files in `src`.

## Features

- Simple Bundling with Rollup
- Chrome Extension reloader
- Jest for testing


## Resources

[Chrome Extension official documentation](https://developer.chrome.com/docs/webstore/)

[How to Publish your extension step by step video tutorial](https://www.youtube.com/playlist?list=PLYlOQabA4Mm0bPiMKIBMgZK0u2jbYsrC6)

