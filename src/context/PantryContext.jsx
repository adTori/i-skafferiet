import { createContext, useState } from "react";

export const PantryContext = createContext();

function PantryProvider({ children }) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Pasta",
      category: "Torrvaror",
      quantity: 2,
    },
    {
      id: 2,
      name: "Krossade tomater",
      category: "Konserver",
      quantity: 3,
    },
    {
      id: 3,
      name: "Havremjölk",
      category: "Mejeri",
      quantity: 1,
    },
  ]);

  const addItem = (item) => {
    setItems((currentItems) => [
      ...currentItems,
      item,
    ]);
  };

  const removeItem = (id) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <PantryContext.Provider
      value={{
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </PantryContext.Provider>
  );
}

export default PantryProvider;