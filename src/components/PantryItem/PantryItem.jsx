import { Link } from "react-router-dom";

function PantryItem({ item }) {
  return (
    <li>
      <Link to={`/item/${item.id}`}>
        <strong>{item.name}</strong>
      </Link>

      <span> - {item.quantity} st</span>
    </li>
  );
}

export default PantryItem;