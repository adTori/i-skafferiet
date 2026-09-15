import { useContext, useState } from "react";

import PantryList from "../../components/PantryList/PantryList";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { PantryContext } from "../../context/PantryContext";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { items } = useContext(PantryContext);

  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <main>
      <h1>Mitt skafferi</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <CategoryFilter
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />

      <PantryList
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />
    </main>
  );
}

export default Home;