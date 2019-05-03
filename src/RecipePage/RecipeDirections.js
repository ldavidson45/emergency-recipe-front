import React from "react";
import "../RecipeList/Recipe.css";
function RecipeDirections(recipe) {
  return (
    <div className="directions-container">
      <h4 className="recipe-section-heading">Directions</h4>
      <p className="directions-text">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDirections;
