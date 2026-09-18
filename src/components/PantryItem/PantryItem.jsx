import { useContext } from "react";
import { Link } from "react-router-dom";

import { PantryContext } from "../../context/PantryContext";

import "./PantryItem.css";

function PantryItem({ item }) {
  const { removeItem } = useContext(PantryContext);

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <li className="pantry-item">
      <Link to={`/item/${item.id}`} className="pantry-item-link">
        <div className="pantry-item-info">
          <strong>{item.name}</strong>
          <span>{item.category}</span>
        </div>

        <span className="pantry-item-quantity">
          {item.quantity} st
        </span>
      </Link>

      <button onClick={handleRemove}>
        Ta bort
      </button>
    </li>
  );
}

export default PantryItem;