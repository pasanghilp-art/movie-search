import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import axios from "axios";
import { MovieGrid } from "../components/MovieGrid";

export function SearchPage({ loading, setLoading, error, setError }) {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${search}&apikey=fb1a0c25`,
        );
        setMovies(response.data.Search);
    };
    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
                onSubmit={onSubmit}
            />

            <MovieGrid movies={movies} />
        </>
    );
}
