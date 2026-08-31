# Movie Search App

A React app for searching movies and viewing detailed information, powered by the OMDb API.

🔗 **Live Demo:** https://movie-search-47il.onrender.com

![App Screenshot](./assets/image.png)

## Features

- Search for movies by title, with real-time results from the OMDb API
- Click any result to view a dedicated details page (plot, cast, rating, runtime, and more)
- Graceful loading and error handling — including a proper message when no results are found
- Client-side routing between the search page and details page using React Router

## Tech Stack

- React
- React Router
- Axios
- OMDb API

## Key Implementation Detail

The details page reads a dynamic `id` from the URL using React Router's `useParams()`, then fetches that specific movie's data with `useEffect` on page load — a common real-world pattern for detail/profile-style pages.

## What I Learned

I learned how to integrate a real external API into a React app, handle asynchronous data fetching with loading and error states, and implement multi-page navigation using React Router.

## Running Locally

```bash
git clone https://github.com/pasanghilp-art/movie-search.git
cd movie-search
npm install
npm run dev
```
