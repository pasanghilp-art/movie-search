import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import axios from "axios";

export function SearchPage({
    loading,
    setLoading,
    error,
    setError,
    setMovies,
}) {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const onSubmit = async () => {
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${search}&apikey=fb1a0c25`,
        );
        setMovies(response);
    };
    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
                onSubmit={onSubmit}
            />
        </>
    );
}
