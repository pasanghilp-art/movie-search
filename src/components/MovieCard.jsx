import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
    return (
        <Link className="movie-card" to={`/movie/${movie.imdbID}`}>
            <div className="poster-wrap">
                <img
                    className="poster"
                    src={movie.Poster}
                    alt={`${movie.Title} poster`}
                />
                <div className="poster-overlay" />
                {movie.rating && <span className="rating">{movie.rating}</span>}
            </div>
            <h3>{movie.Title}</h3>
            <div className="movie-meta">
                <span>{movie.Year}</span>
                <span>{movie.Type || "Film"}</span>
            </div>
        </Link>
    );
}
