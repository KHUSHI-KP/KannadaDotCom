# KannadaDotCom — kannada-universe

This repository contains the frontend React app for KannadaDotCom and a small local mock API used during development.

## Quick Start

- Install dependencies:

```bash
npm install
```

- Run the frontend dev server:

```bash
npm run dev
```

- The frontend HTTP client is defined in `src/api.js`. It uses `import.meta.env.VITE_API_BASE` if set, otherwise falls back to `http://localhost:4000`.

## Local Mock API (development)

The project previously included a small mock server that exposed these endpoints. The server file has been removed from the repository as requested, but the frontend expects the following API shape when a mock server is used locally.

### Available endpoints

- `GET /api/posts`
- `GET /api/business`
- `GET /api/analytics`
- `GET /health` (returns `ok` and `endpoints` list)

### Response schemas

- `GET /api/posts` -> returns JSON with a `data` array of posts. Example shape for a single post:

```json
{
  "id": "p1",
  "business": { "en": "Sara's Boutique", "kn": "ಸಾರಾ ಬೋಟಿಕ್" },
  "location": { "en": "Vijayanagar, Bengaluru", "kn": "ವಿಜಯನಗರ, ಬೆಂಗಳೂರು" },
  "content": { "en": "Flat 15% off on sarees this weekend", "kn": "..." },
  "tags": [{ "en": "Offer", "kn": "ఆఫర్" }],
  "likes": 83,
  "comments": 26,
  "saves": 65,
  "image": "/images/saree.jpg",
  "createdAt": 1670000000000
}
```

- `GET /api/business` -> returns JSON with `data` containing an array of business objects. Example:

```json
{
  "id": "b1",
  "name": "Heritage Handloom",
  "description": "Local handloom and textiles with traditional patterns.",
  "visits": 1283,
  "contact": { "phone": "+91-99999-00000", "email": "info@handloom.example" }
}
```


### Notes for local development

- If you want to run your own local mock server, restore or recreate a simple Express/HTTP server that responds to the endpoints above and set `VITE_API_BASE` accordingly (for example, `http://localhost:4000`).
- The frontend's `src/api.js` uses axios and will default to `http://localhost:4000` when `VITE_API_BASE` is not provided.

If you want, I can recreate a new (clean) mock server file or re-add the previous `backend/server.js` with improved diagnostics — say the word and I will add it back.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.