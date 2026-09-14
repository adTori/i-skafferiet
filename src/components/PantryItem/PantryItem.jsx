function PantryItem({ item }) {
  return (
    <li>
      <strong>{item.name}</strong>
      <span> - {item.quantity} st</span>
    </li>
  );
}

export default PantryItem;