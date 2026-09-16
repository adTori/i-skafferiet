import { useContext, useState } from "react";

import { PantryContext } from "../../context/PantryContext";
import PantryList from "../../components/PantryList/PantryList";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

import "./Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { items } = useContext(PantryContext);

  const categories = [
    ...new Set(items.map((item) => item.category)),
  ];

  return (
    <main className="home">
      <section className="home-intro">
        <h1>Mitt skafferi</h1>
        <p>Håll koll på vad du har hemma.</p>
      </section>

      <section className="home-filters">
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </section>

      <PantryList
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />
    </main>
  );
}

export default Home;