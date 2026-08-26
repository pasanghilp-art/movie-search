import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function DetailsPage({ loading, error, setLoading, setError }) {
    const [movie, setMovie] = useState("");
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        setError(null);
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.omdbapi.com/?i=${id}&apikey=fb1a0c25`,
                );
                if (response.data.Response === "False") {
                    setError(response.data.Error);
                    setMovie("");
                } else {
                    setMovie(response.data);
                }
            } catch {
                setError("Something Went wrong. Please Try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id, setError, setLoading]);
    return (
        <div className="details-page">
            {!movie ? (
                <>
                    {loading && <p className="loading-state">Loading...</p>}
                    {error && <p className="error-message">{error}</p>}
                </>
            ) : (
                <div className="detail-layout">
                    <img
                        className="detail-poster"
                        src={movie.Poster}
                        alt={`${movie.Title} poster`}
                    />
                    <div className="detail-copy">
                        <h1>{movie.Title}</h1>
                        <p>{movie.Plot}</p>
                        <div className="detail-facts">
                            <span>
                                <strong>Year:</strong> {movie.Year}
                            </span>
                            <span>
                                <strong>Rated:</strong> {movie.Rated}
                            </span>
                            <span>
                                <strong>Runtime:</strong> {movie.Runtime}
                            </span>
                            <span>
                                <strong>Genre:</strong> {movie.Genre}
                            </span>
                            <span>
                                <strong>Director:</strong> {movie.Director}
                            </span>
                            <span>
                                <strong>Actors:</strong> {movie.Actors}
                            </span>
                            <span>
                                <strong>IMDb Rating:</strong> {movie.imdbRating}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
