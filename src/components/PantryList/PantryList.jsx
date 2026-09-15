import { useContext } from "react";
import { PantryContext } from "../../context/PantryContext";
import PantryItem from "../PantryItem/PantryItem";

function PantryList({ searchTerm, selectedCategory }) {
  const { items } = useContext(PantryContext);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <h2>Mina varor</h2>

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <PantryItem key={item.id} item={item} />
          ))
        ) : (
          <p>Inga varor hittades.</p>
        )}
      </ul>
    </section>
  );
}

export default PantryList;