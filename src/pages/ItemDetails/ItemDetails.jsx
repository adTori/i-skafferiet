import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PantryContext } from "../../context/PantryContext";

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

  return (
    <main>
      <h1>{item.name}</h1>

      <p>Kategori: {item.category}</p>
      <p>Antal: {item.quantity}</p>
      <p>Bäst före: {item.expiryDate || "Inget datum angivet"}</p>
    </main>
  );
}

export default ItemDetails;