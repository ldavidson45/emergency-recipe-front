import React from "react";

function RecipeImage(recipe) {
  return (
    <img className="recipe-thumbnail" src={recipe.picture} alt={recipe.title} />
  );
}

export default RecipeImage;
