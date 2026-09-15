function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p>Inga recept hittades.</p>;
  }

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.idMeal}>
          <a
            href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
            target="_blank"
            rel="noreferrer"
          >
            {recipe.strMeal}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;