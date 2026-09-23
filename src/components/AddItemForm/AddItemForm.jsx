import "./AddItemForm.css";
import { useContext, useState } from "react";
import { PantryContext } from "../../context/PantryContext";
import toast from "react-hot-toast";

function AddItemForm() {
  const { addItem } = useContext(PantryContext);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expiryDate, setExpiryDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name.trim() || !category.trim()) {
    setError("Fyll i namn och kategori.");
    return;
    }

    if (Number(quantity) < 1) { setError("Antalet måste vara minst 1."); return; }

    setError("");

    const newItem = {
      id: Date.now(),
      name: name,
      category: category,
      quantity: Number(quantity),
      expiryDate: expiryDate,
    };

    addItem(newItem);
    toast.success("Varan har lagts till i skafferiet!");

    // Töm formuläret
    setName("");
    setCategory("");
    setQuantity(1);
    setExpiryDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <div className="add-item-form-field">
        <label htmlFor="name">Namn</label>
        <input
          id="name"
          type="text"
          placeholder="T.ex. Pasta"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="add-item-form-field">
        <label htmlFor="category">Kategori</label>
        <input
          id="category"
          type="text"
          placeholder="T.ex Torrvaror"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>

      <div className="add-item-form-field">
        <label htmlFor="quantity">Antal</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>

      <div className="add-item-form-field">
        <label htmlFor="expiryDate">Bäst före</label>
        <input
          id="expiryDate"
          type="date"
          value={expiryDate}
          onChange={(event) => setExpiryDate(event.target.value)}
        />
      </div>

      {error && (
        <p className="add-item-form-error">
          {error}
        </p>
      )}

      <button type="submit">Lägg till</button>
    </form>
  );
}

export default AddItemForm;