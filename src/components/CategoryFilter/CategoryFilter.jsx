function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div>
      <label htmlFor="category-filter">Filtrera kategori</label>

      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="">Alla kategorier</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;