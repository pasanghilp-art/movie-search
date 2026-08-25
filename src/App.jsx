import { useState } from "react";
import { DetailsPage } from "./pages/DetailsPage";
import { SearchPage } from "./pages/SearchPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                            movies={movies}
                            setMovies={setMovies}
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
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
