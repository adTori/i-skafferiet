import { useEffect, useState } from "react";
import { getRecipesByIngredient } from "../services/recipeApi";

function useRecipes(ingredient) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ingredient) {
      return;
    }

    async function fetchRecipes() {
      setLoading(true);
      setError("");

      try {
        const data = await getRecipesByIngredient(ingredient);
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [ingredient]);

  return {
    recipes,
    loading,
    error,
  };
}

export default useRecipes;