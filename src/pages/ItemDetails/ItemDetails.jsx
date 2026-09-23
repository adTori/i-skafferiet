import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { PantryContext } from "../../context/PantryContext";
import useRecipes from "../../hooks/useRecipes";
import RecipeList from "../../components/RecipeList/RecipeList";
import Loading from "../../components/Loading/Loading";

import "./ItemDetails.css";

function ItemDetails() {
  const { id } = useParams();
  const { items, removeItem } = useContext(PantryContext);

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <main className="item-details">
        <Link to="/" className="item-details-back">
          ← Tillbaka till skafferiet
        </Link>
      </main>
    );
  }

  const handleRemove = () => {
    removeItem(item.id);
    toast.success("Varan har tagits bort!");
  };

  const { recipes, loading, error } = useRecipes(item.name);

  return (
    <main className="item-details">
      <Link to="/" className="item-details-back">
        ← Tillbaka till skafferiet
      </Link>

      <section className="item-details-info">
        <p className="item-details-category">{item.category}</p>

        <h1>{item.name}</h1>

        <div className="item-details-meta">
          <p>
            <strong>Antal</strong>
            <span>{item.quantity} st</span>
          </p>

          <p>
            <strong>Bäst före</strong>
            <span>
              {item.expiryDate || "Inget datum angivet"}
            </span>
          </p>

          <div className="item-details-actions">
            <button onClick={handleRemove}>
              Radera
            </button>
          </div>
        </div>
      </section>

      <section className="item-details-recipes">
        <h2>Receptförslag</h2>

        {loading && <Loading />}

        {error && (
          <p className="item-details-error">
            {error}
          </p>
        )}

        {!loading && !error && (
          <RecipeList recipes={recipes} />
        )}
      </section>
    </main>
  );
}

export default ItemDetails;