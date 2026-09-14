import { useContext } from "react";
import { PantryContext } from "../../context/PantryContext";
import PantryItem from "../PantryItem/PantryItem";

function PantryList() {
  const { items } = useContext(PantryContext);

  return (
    <section>
      <h2>Mina varor</h2>

      <ul>
        {items.map((item) => (
          <PantryItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default PantryList;