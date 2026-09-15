const API_URL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export async function getRecipesByIngredient(ingredient) {
  const response = await fetch(
    `${API_URL}${ingredient}`
  );

  if (!response.ok) {
    throw new Error("Kunde inte hämta recept.");
  }

  const data = await response.json();

  return data.meals || [];
}