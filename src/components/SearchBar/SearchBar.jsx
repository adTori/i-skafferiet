function SearchBar({ searchTerm, onSearch }) {
  return (
    <div>
      <label htmlFor="search">Sök efter vara</label>

      <input
        id="search"
        type="text"
        placeholder="Sök..."
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;