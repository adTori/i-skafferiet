import { useContext } from "react";
import { Link } from "react-router-dom";
import { PantryContext } from "../../context/PantryContext";
import toast from "react-hot-toast";

import "./PantryItem.css";

function PantryItem({ item }) {
  const { removeItem } = useContext(PantryContext);

  const handleRemove = () => {
    removeItem(item.id);
    toast.success("Varan har tagits bort!");
  };

  return (
    <li className="pantry-item">
      <Link to={`/item/${item.id}`} className="pantry-item-link">
        <div className="pantry-item-info">
          <strong>{item.name}</strong>

          <div className="pantry-item-meta">
            <span>{item.category}</span>
            <span>{item.quantity} st</span>
          </div>
        </div>
      </Link>

      <button onClick={handleRemove}>
        Ta bort
      </button>
    </li>
  );
}

export default PantryItem;