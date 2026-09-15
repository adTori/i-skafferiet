import { useContext } from "react";
import { useParams } from "react-router-dom";

import { PantryContext } from "../../context/PantryContext";
import useRecipes from "../../hooks/useRecipes";
import RecipeList from "../../components/RecipeList/RecipeList";

function ItemDetails() {
  const { id } = useParams();
  const { items } = useContext(PantryContext);

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <main>
        <h1>Varan hittades inte</h1>
        <p>Det finns ingen vara med detta ID.</p>
      </main>
    );
  }

  const { recipes, loading, error } = useRecipes(item.name);

  return (
    <main>
      <h1>{item.name}</h1>

      <p>Kategori: {item.category}</p>
      <p>Antal: {item.quantity}</p>
      <p>
        Bäst före: {item.expiryDate || "Inget datum angivet"}
      </p>

      <h2>Recept</h2>

      {!loading && !error && (
        <RecipeList recipes={recipes} />
      )}
    </main>
  );
}

export default ItemDetails;