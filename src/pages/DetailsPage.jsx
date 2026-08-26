import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function DetailsPage({ loading, setLoading }) {
    const [movie, setMovie] = useState("");
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://www.omdbapi.com/?i=${id}&apikey=fb1a0c25`,
            );
            setMovie(response.data);
        };
        fetchData();
    }, [id]);
    return (
        <div className="details-page">
            {!movie ? (
                <p className="loading-state">Loading...</p>
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
