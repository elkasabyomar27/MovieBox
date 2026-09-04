# MovieBox

MovieBox is a responsive Angular movie-discovery front-end powered by The Movie Database (TMDB). Browse trending, popular, and upcoming movies; search the catalog; filter by genre; open full details; and save favorites to a personal list.

## Team members

| Name | Student ID |
| --- | --- |
| عبدالله حماده كامل محمد | 23011106 |
| عمر باسم علي القصبي | 2401241539 |
| كيرلس عادل عبدالله | 23011422 |
| محمد أيمن أبو النصر علي | 23011464 |
| محمد ايمن السيد | 23011465 |

## Features

- Fetch movie data from the TMDB public API
- Browse **Trending**, **Popular**, and **Upcoming** movies
- Search movies by title
- Filter movies by genre
- Use pagination to browse additional results
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
- TMDB API
- CSS

## Run locally

```bash
ng serve
```

Open `http://localhost:4200` in your browser.

## API

The app requests movie data directly from the browser using the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started). No backend or database is used. Favorites remain only in the current browser through `localStorage`.

Before running the project, create `src/environments/environment.ts` by copying `src/environments/environment.example.ts`, then add your TMDB API key:

```ts
export const environment = {
  tmdbApiKey: 'YOUR_TMDB_API_KEY',
};
```

`environment.ts` is excluded from Git, so the key is not uploaded to GitHub.

## Project checklist

All required and bonus Movie Explorer features are complete. See [the detailed checklist](submission/FEATURE_CHECKLIST.md).

## Build

```bash
ng build
```

The production output is generated under `dist/movie-explorer`.
