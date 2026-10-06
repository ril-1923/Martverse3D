# MartVerse 3D — Step Inside. Shop in 3D.
A Three.js virtual supermarket with autonomous customers, a clickable product catalogue, Bootstrap 5 cart sidebar and animated checkout.

## Features
6 departments (36+ products), sliding doors, 10 customers who shop, push carts, queue and pay, cashiers, ATM area, promo banners, minimap, live stats, camera presets, WASD/arrow/drag/scroll controls, touch D-pad on mobile.

## Stack
Vite · Three.js (low-poly meshes, shared geometries, no shadows) · Bootstrap 5 · vanilla JS.

## 3D implementation
`src/3d/world.js` builds the store, shelves and products procedurally (no external assets), and runs the camera rig and render loop.

## Customer simulation
Each customer follows a randomised waypoint route: entrance → 2–4 departments (pick item, item flies into cart) → checkout queue → pay → exit, then respawns with a new route.

## Cart & checkout
Click a product → panel → Add to Cart. Sidebar supports +/−, 5% tax, UPI/Card/Cash modal, animated scan sequence and order confirmation.

## Run / build
```
npm install
npm run dev
npm run build
```

## Deploy to GitHub Pages
`vite.config.js` uses `base: './'`, so after `npm run build` publish the `dist/` folder (e.g. `npx gh-pages -d dist`, or a GitHub Actions Pages workflow).
