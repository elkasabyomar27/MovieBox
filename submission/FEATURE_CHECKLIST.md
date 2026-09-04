# MovieBox feature checklist

## Required features

- [x] Fetch movies from a public movie API - TMDB
- [x] Home page
- [x] Movie cards
- [x] Movie search
- [x] Movie details page
- [x] Movie poster
- [x] Movie overview / description
- [x] Rating
- [x] Release date
- [x] Genres
- [x] Add to favorites
- [x] Favorites page
- [x] Loading state
- [x] Error state
- [x] Responsive design

## Bonus features

- [x] Trending movies
- [x] Popular movies
- [x] Upcoming movies
- [x] Filter by genre
- [x] Pagination
- [x] Save favorites with local storage

## API setup

1. Copy `src/environments/environment.example.ts` to `src/environments/environment.ts`.
2. Paste the team TMDB API key into `tmdbApiKey`.
3. Run the app with `ng serve`.

`environment.ts` is ignored by Git, so the API key will not be uploaded to GitHub.
