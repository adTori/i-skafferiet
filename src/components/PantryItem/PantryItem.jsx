import { Link } from "react-router-dom";
import "./PantryItem.css";

function PantryItem({ item }) {
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
    </li>
  );
}

export default PantryItem;