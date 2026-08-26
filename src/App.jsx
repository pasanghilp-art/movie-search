import { useState } from "react";
import { DetailsPage } from "./pages/DetailsPage";
import { SearchPage } from "./pages/SearchPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    return (
        <>
            <Routes>
                <Route
                    path="/movie/:id"
                    element={
                        <DetailsPage
                            loading={loading}
                            setLoading={setLoading}
                            error={error}
                            setError={setError}
                        />
                    }
                />
                <Route
                    path="/"
                    element={
                        <SearchPage
                            loading={loading}
                            setLoading={setLoading}
                            error={error}
                            setError={setError}
                            search={search}
                            setSearch={setSearch}
                            movies={movies}
                            setMovies={setMovies}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
