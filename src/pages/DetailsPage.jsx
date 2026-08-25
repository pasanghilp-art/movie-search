import { useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { MovieGrid } from "../components/MovieGrid";
export function DetailsPage({ loading, setLoading, movies }) {
    const [movie, setMovie] = useState("");
    return (
        <>
            <MovieCard movie={movie} setMovie={setMovie} />
            <MovieGrid movies={movies} />
        </>
    );
}
