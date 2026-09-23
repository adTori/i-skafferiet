import { Link } from "react-router-dom";

import "./PantryItem.css";

function PantryItem({ item }) {
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
    </li>
  );
}

export default PantryItem;