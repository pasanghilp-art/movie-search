export function SearchBar({ onSubmit, search, setSearch }) {
    const onSearch = (event) => setSearch(event.target.value);

    return (
        <form className="search-form" onSubmit={onSubmit}>
            <span className="search-icon" aria-hidden="true">
                ⌕
            </span>
            <input
                className="search-input"
                value={search}
                onChange={onSearch}
                placeholder="Search by title, actor, or director"
                aria-label="Search movies"
            />
            <button className="search-button" type="submit">
                Find film
            </button>
        </form>
    );
}
