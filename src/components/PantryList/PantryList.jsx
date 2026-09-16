import { useContext } from "react";

import { PantryContext } from "../../context/PantryContext";
import PantryItem from "../PantryItem/PantryItem";

import "./PantryList.css";

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
    <section className="pantry-list">
      <h2 className="pantry-list-heading">Mina varor</h2>

      {filteredItems.length > 0 ? (
        <ul className="pantry-list-items">
          {filteredItems.map((item) => (
            <PantryItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="pantry-list-empty">
          Inga varor hittades.
        </p>
      )}
    </section>
  );
}

export default PantryList;