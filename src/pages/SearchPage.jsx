import { SearchBar } from "../components/SearchBar";
import axios from "axios";
import { MovieGrid } from "../components/MovieGrid";

export function SearchPage({
    setLoading,
    setError,
    search,
    setSearch,
    movies,
    setMovies,
    loading,
    error,
}) {
    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?s=${search}&apikey=fb1a0c25`,
            );
            if (response.data.Response === "False") {
                setError(response.data.Error);
                setMovies([]);
            } else {
                setMovies(response.data.Search);
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
                onSubmit={onSubmit}
            />

            {!loading && !error && <MovieGrid movies={movies} />}
        </>
    );
}
