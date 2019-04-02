import React from "react";
import "../RecipeList/Recipe.css";
function RecipeDirections(recipe) {
  return (
    <section className="recipe-container">
      <h4 className="recipe-section-heading">Directions</h4>
      <p>{recipe.instructions}</p>
    </section>
  );
}

export default RecipeDirections;
