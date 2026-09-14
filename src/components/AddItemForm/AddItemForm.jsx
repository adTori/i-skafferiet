import { useContext, useState } from "react";
import { PantryContext } from "../../context/PantryContext";

function AddItemForm() {
  const { addItem } = useContext(PantryContext);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: Date.now(),
      name: name,
      category: category,
      quantity: Number(quantity),
      expiryDate: expiryDate,
    };

    addItem(newItem);

    // Töm formuläret
    setName("");
    setCategory("");
    setQuantity(1);
    setExpiryDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Namn</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="category">Kategori</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="quantity">Antal</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="expiryDate">Bäst före</label>
        <input
          id="expiryDate"
          type="date"
          value={expiryDate}
          onChange={(event) => setExpiryDate(event.target.value)}
        />
      </div>

      <button type="submit">Lägg till</button>
    </form>
  );
}

export default AddItemForm;