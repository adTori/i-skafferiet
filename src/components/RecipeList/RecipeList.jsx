import "./RecipeList.css";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p className="recipe-list-empty">Inga recept hittades.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <article className="recipe-card" key={recipe.idMeal}>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="recipe-card-image"
          />

          <div className="recipe-card-content">
            <h3>{recipe.strMeal}</h3>

            <a
              href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
              target="_blank"
              rel="noreferrer"
              className="recipe-card-link"
            >
              Visa recept
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default RecipeList;