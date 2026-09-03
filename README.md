# MovieBox

MovieBox is a responsive Angular movie-discovery front-end. Browse popular titles, search the catalog, filter results by genre, open a detailed title page, and save favorites to a personal list.

## Features

- Discover popular titles from a public API
- Search by title
- Filter results by genre
- View poster, overview, rating, release year, runtime, language, and genres
- Add and remove titles from **My list**
- Persist favorites with browser local storage
- Loading, empty, and API-error states
- Responsive layout for mobile, tablet, and desktop

## Technology

- Angular 22
- TypeScript
- Angular Router
- Angular HttpClient
- TVMaze public API
- CSS

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200` in your browser.

## API

The app requests title data directly from the browser using the public [TVMaze API](https://www.tvmaze.com/api). No backend, database, or API key is used. Favorites remain only in the current browser through `localStorage`.

## Build

```bash
npm run build
```

The production output is generated under `dist/movie-explorer`.
